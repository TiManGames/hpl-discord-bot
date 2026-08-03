import { generateText, stepCountIs } from 'ai';
import type { ModelMessage, SystemModelMessage } from 'ai';
import { createSAPAIProvider } from '@jerome-benoit/sap-ai-provider';
import { fileTools } from './tools.js';
import {
  retryAfterSeconds,
  isRateLimit,
  isTransientAuth,
  DEFAULT_RETRY_AFTER_S,
} from './retry.js';
import { pruneOldToolResults } from './prune.js';

// Model name for the orchestration path (matches base-ai-agent's setup — the
// plain orchestration model name, NOT a foundation-models "anthropic--" id).
const MODEL_ID = process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
const RESOURCE_GROUP = process.env.AICORE_RESOURCE_GROUP ?? 'default';
const MAX_STEPS = 20;

// Keep the N most recent read_file/search_files results at full text; stub older
// ones to save input tokens (they are re-sent on every step otherwise). Kept high
// enough that the model retains findings across a multi-step research loop —
// too low and it forgets what it already found and re-searches/re-reads in circles
// (the model interleaves search + read, so this is consumed ~2 parts per step).
// See src/prune.ts.
const KEEP_RECENT_READS = Number(process.env.AICORE_KEEP_RECENT_READS ?? 20);

// How many times to retry the whole call on a 429, honouring x-retry-after.
const MAX_RATE_LIMIT_RETRIES = 5;

// Exactly how base-ai-agent talks to SAP AI Core: default (orchestration) path,
// resource group only. No api override, no deploymentId, no header hacks. The
// orchestration deployment inside your provisioned resource group carries its
// own quota.
const sapAiProvider = createSAPAIProvider({
  resourceGroup: RESOURCE_GROUP,
});
const model = sapAiProvider(MODEL_ID);

function log(msg: string): void {
  console.log(`[${new Date().toISOString()}] [AGENT] ${msg}`);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface AgentResult {
  text: string;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

/**
 * Run the Claude agent loop via the Vercel AI SDK + SAP AI Core.
 * Handles SAP's aggressive rate limiting by honouring the x-retry-after header
 * (the AI SDK's built-in backoff ignores it and retries too early).
 */
export async function runAgent(
  systemPrompt: string,
  docsRoot: string,
  messages: ModelMessage[],
): Promise<AgentResult> {
  let rateLimitRetries = 0;
  let authRetries = 0;

  while (true) {
    try {
      return await generateOnce(systemPrompt, docsRoot, messages);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);

      if (isRateLimit(err) && rateLimitRetries < MAX_RATE_LIMIT_RETRIES) {
        rateLimitRetries++;
        const waitS = retryAfterSeconds(err) ?? DEFAULT_RETRY_AFTER_S;
        log(
          `Rate limited (429). Waiting ${waitS}s as instructed by SAP ` +
            `(retry ${rateLimitRetries}/${MAX_RATE_LIMIT_RETRIES})…`,
        );
        await sleep((waitS + 1) * 1000); // +1s safety margin
        continue;
      }

      if (isTransientAuth(err) && authRetries < 3) {
        authRetries++;
        log(`Auth/token fetch failed (retry ${authRetries}/3): ${msg} — retrying in 2s`);
        await sleep(2000);
        continue;
      }

      throw err;
    }
  }
}

async function generateOnce(
  systemPrompt: string,
  docsRoot: string,
  messages: ModelMessage[],
): Promise<AgentResult> {
  let stepNum = 0;
  log(`Sending request to SAP AI Core (model=${MODEL_ID})…`);
  const startedAt = Date.now();

  // Cache the large, stable system prefix (BASE_INSTRUCTIONS + SKILL.md + docs
  // manifest, ~10-14k tokens). It renders before the messages, so it stays cached
  // across all agentic steps even as pruneOldToolResults mutates the message tail.
  // Anthropic caching is opt-in: without this breakpoint, cached_tokens is 0.
  const systemMsg: SystemModelMessage = {
    role: 'system',
    content: systemPrompt,
    providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } }, // 5m default TTL
  };

  const result = await generateText({
    model,
    tools: fileTools(docsRoot),
    system: systemMsg,
    messages,
    stopWhen: stepCountIs(MAX_STEPS),
    // Disable the SDK's exponential backoff — it ignores SAP's x-retry-after
    // header and retries too early. runAgent() does header-aware retries instead.
    maxRetries: 0,
    // Before each step, stub old read_file outputs so they aren't re-sent at full
    // text on every step. Keeps the newest KEEP_RECENT_READS verbatim.
    prepareStep: ({ messages: stepMessages }) => ({
      messages: pruneOldToolResults(stepMessages, KEEP_RECENT_READS),
    }),
    onStepFinish: (step) => {
      stepNum++;
      const toolCalls = step.toolCalls.map((t) => `${t.toolName}(${JSON.stringify(t.input)})`);
      log(
        `Step ${stepNum} finished (+${Date.now() - startedAt}ms) — reason=${step.finishReason}, ` +
          `text=${step.text.length}c, toolCalls=[${toolCalls.join(', ')}], ` +
          `tokens=${step.usage?.totalTokens ?? '?'}`,
      );
    },
  });

  log(`Done — ${stepNum} step(s), finishReason=${result.finishReason}, text=${result.text.length}c`);

  // If the model stopped because it hit the step cap while still calling tools
  // (finishReason 'tool-calls'), it never produced a real answer — result.text is
  // just interim narration ("let me check..."). Force one final answer with no
  // tools, using everything it read so far.
  if (result.finishReason === 'tool-calls') {
    log('Hit step cap mid-research — forcing a final answer with tools disabled…');
    const finalResult = await generateText({
      model,
      // No tools: the model must answer from the context it already gathered.
      system: systemMsg,
      messages: [
        ...messages,
        ...result.response.messages,
        {
          role: 'user',
          content:
            'You have gathered enough documentation. Answer the original question now ' +
            'using only what you have already read. Do not ask to read more files.',
        },
      ],
      maxRetries: 0,
    });
    log(`Final answer produced — text=${finalResult.text.length}c`);
    // Total across both the research call and the forced final call.
    return {
      text: finalResult.text,
      inputTokens: (result.totalUsage.inputTokens ?? 0) + (finalResult.totalUsage.inputTokens ?? 0),
      outputTokens: (result.totalUsage.outputTokens ?? 0) + (finalResult.totalUsage.outputTokens ?? 0),
      cacheReadTokens:
        (result.totalUsage.inputTokenDetails?.cacheReadTokens ?? 0) +
        (finalResult.totalUsage.inputTokenDetails?.cacheReadTokens ?? 0),
      cacheWriteTokens:
        (result.totalUsage.inputTokenDetails?.cacheWriteTokens ?? 0) +
        (finalResult.totalUsage.inputTokenDetails?.cacheWriteTokens ?? 0),
    };
  }

  return {
    text: result.text,
    inputTokens: result.totalUsage.inputTokens ?? 0,
    outputTokens: result.totalUsage.outputTokens ?? 0,
    cacheReadTokens: result.totalUsage.inputTokenDetails?.cacheReadTokens ?? 0,
    cacheWriteTokens: result.totalUsage.inputTokenDetails?.cacheWriteTokens ?? 0,
  };
}
