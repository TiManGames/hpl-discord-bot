import { generateText, stepCountIs } from 'ai';
import type { ModelMessage, SystemModelMessage } from 'ai';
import { createSAPAIProvider } from '@jerome-benoit/sap-ai-provider';
import { fileTools } from './tools.js';
import {
  retryAfterSeconds,
  isRateLimit,
  isTransientAuth,
  isTransientNetwork,
  DEFAULT_RETRY_AFTER_S,
} from './retry.js';
import { cacheMessageTail } from './cache.js';
import { estimateRequestCost, type CostEstimate } from './pricing.js';
import { findUnsupportedCodeIdentifiers } from './grounding.js';
import { getCorpusIndex } from './corpus-index.js';
import {
  emptyEvidenceLedger,
  formatEvidenceLedger,
  type EvidenceLedger,
} from './evidence.js';

// Model name resolved by SAP's orchestration path.
const MODEL_ID = process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
const RESOURCE_GROUP = process.env.AICORE_RESOURCE_GROUP ?? 'default';
const IS_ANTHROPIC_MODEL = MODEL_ID.toLowerCase().startsWith('anthropic--claude');
const configuredMaxSteps = Number.parseInt(process.env.AICORE_MAX_STEPS ?? '', 10);
const MAX_STEPS = Number.isInteger(configuredMaxSteps) && configuredMaxSteps > 0
  ? configuredMaxSteps
  : 20;
const ADAPTIVE_THINKING_REQUESTED = /^(1|true|yes)$/i.test(
  process.env.AICORE_ADAPTIVE_THINKING ?? '',
);
// `thinking: { type: "adaptive" }` is an Anthropic request parameter. SAP may
// silently accept it for other model families, but that does not mean those
// models are using adaptive thinking. Never send it to Gemini or other models.
const ADAPTIVE_THINKING =
  ADAPTIVE_THINKING_REQUESTED && IS_ANTHROPIC_MODEL;
const configuredThinkingMaxOutputTokens = Number.parseInt(
  process.env.AICORE_THINKING_MAX_OUTPUT_TOKENS ?? '',
  10,
);
const THINKING_MAX_OUTPUT_TOKENS =
  Number.isInteger(configuredThinkingMaxOutputTokens) && configuredThinkingMaxOutputTokens > 0
    ? configuredThinkingMaxOutputTokens
    : 8192;

const RESEARCH_CHECKPOINT =
  'Continue from the complete tool results above. Reuse verified stable IDs; inspect or search only unresolved claims. Do not mention this instruction.';

// How many times to retry the whole call on a 429, honouring x-retry-after.
const MAX_RATE_LIMIT_RETRIES = 5;
const MAX_NETWORK_RETRIES_PER_STEP = 3;

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

async function withNetworkRetry<T>(label: string, operation: () => Promise<T>): Promise<T> {
  let retries = 0;
  while (true) {
    try {
      return await operation();
    } catch (err) {
      if (err instanceof UsageCallbackError) throw err;
      if (!isTransientNetwork(err) || retries >= MAX_NETWORK_RETRIES_PER_STEP) throw err;
      retries++;
      const waitMs = 1_000 * 2 ** (retries - 1);
      const message = err instanceof Error ? err.message : String(err);
      log(
        `Transient network failure during ${label}: ${message}. ` +
          `Retrying the same request in ${waitMs}ms ` +
          `(${retries}/${MAX_NETWORK_RETRIES_PER_STEP})…`,
      );
      await sleep(waitMs);
    }
  }
}

interface InputUsageLike {
  inputTokens?: number;
  inputTokenDetails?: {
    noCacheTokens?: number;
    cacheReadTokens?: number;
    cacheWriteTokens?: number;
  };
}

/**
 * SAP reports prompt totals differently by harmonized model family. Gemini's
 * prompt_tokens includes cache reads/writes, while Anthropic responses on this
 * path can report only the uncached slice alongside larger cache counters.
 * Normalize both shapes into one logical total plus an uncached total.
 */
export function normalizeInputUsage(
  usage: InputUsageLike,
  cacheAccounting: 'inclusive' | 'exclusive',
): {
  reported: number;
  total: number;
  uncached: number;
  cacheRead: number;
  cacheWrite: number;
} {
  const reported = usage.inputTokens ?? 0;
  const cacheRead = usage.inputTokenDetails?.cacheReadTokens ?? 0;
  const cacheWrite = usage.inputTokenDetails?.cacheWriteTokens ?? 0;
  const cached = cacheRead + cacheWrite;

  if (cacheAccounting === 'exclusive') {
    return {
      reported,
      total: reported + cached,
      uncached: reported,
      cacheRead,
      cacheWrite,
    };
  }

  return {
    reported,
    total: reported,
    uncached:
      usage.inputTokenDetails?.noCacheTokens ?? Math.max(0, reported - cached),
    cacheRead,
    cacheWrite,
  };
}

export interface AgentResult {
  text: string;
  inputTokens: number;
  uncachedInputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  stepCount: number;
  toolCallCount: number;
  duplicateToolCallCount: number;
  forcedFinal: boolean;
  evidenceLedgerDelta?: EvidenceLedger;
}

export function isVerificationChallenge(value: string): boolean {
  return /\b(?:wrong|incorrect|false|lie|lied|made[ -]?up|hallucinat(?:e|ed|ion)|not true|doesn['’]?t exist|does not exist|are you sure|verify|check that)\b/i.test(value);
}

interface RequestUsage {
  inputTokens: number;
  uncachedInputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  unknownUsageCalls: number;
  onUsage?: RequestUsageCallback;
}

export interface RequestUsageSnapshot {
  modelId: string;
  status: 'running' | 'completed' | 'failed';
  inputTokens: number;
  uncachedInputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
  unknownUsageCalls: number;
  estimate: CostEstimate;
}

export type RequestUsageCallback = (snapshot: RequestUsageSnapshot) => Promise<void>;

/** Accounting failures must never be mistaken for retryable provider errors. */
export class UsageCallbackError extends Error {
  constructor(cause: unknown) {
    super('Agent usage callback failed', { cause });
    this.name = 'UsageCallbackError';
  }
}

async function reportRequestUsage(request: RequestUsage, status: RequestUsageSnapshot['status']): Promise<void> {
  if (!request.onUsage) return;
  const { onUsage, ...tokens } = request;
  try {
    await onUsage({ ...tokens, modelId: MODEL_ID, status, estimate: estimateRequestCost(MODEL_ID, tokens) });
  } catch (err) {
    throw new UsageCallbackError(err);
  }
}

function isKnownTokenCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

// Wrap each provider call, rather than each research run: successful calls made
// before a whole-agent retry still belong to the same Discord request's cost.
async function trackRequestUsage<T extends {
  totalUsage: InputUsageLike & { outputTokens?: number };
}>(request: RequestUsage, operation: () => Promise<T>): Promise<T> {
  // A checkpoint before each provider attempt also prevents an already-running
  // request from making another paid call after accounting has failed elsewhere.
  await reportRequestUsage(request, 'running');
  let result: T;
  try {
    result = await operation();
  } catch (err) {
    // A failed response does not tell us whether SAP already billed inference.
    request.unknownUsageCalls++;
    await reportRequestUsage(request, 'running');
    throw err;
  }

  const usage = result.totalUsage;
  const details = usage.inputTokenDetails;
  if (
    !isKnownTokenCount(usage.inputTokens) ||
    !isKnownTokenCount(usage.outputTokens) ||
    [details?.noCacheTokens, details?.cacheReadTokens, details?.cacheWriteTokens]
      .some((value) => value !== undefined && !isKnownTokenCount(value))
  ) {
    request.unknownUsageCalls++;
  }
  const input = normalizeInputUsage({
    inputTokens: isKnownTokenCount(usage.inputTokens) ? usage.inputTokens : undefined,
    inputTokenDetails: {
      noCacheTokens: isKnownTokenCount(details?.noCacheTokens) ? details.noCacheTokens : undefined,
      cacheReadTokens: isKnownTokenCount(details?.cacheReadTokens) ? details.cacheReadTokens : undefined,
      cacheWriteTokens: isKnownTokenCount(details?.cacheWriteTokens) ? details.cacheWriteTokens : undefined,
    },
  }, IS_ANTHROPIC_MODEL ? 'exclusive' : 'inclusive');
  request.inputTokens += input.total;
  request.uncachedInputTokens += input.uncached;
  request.cacheReadTokens += input.cacheRead;
  request.cacheWriteTokens += input.cacheWrite;
  request.outputTokens += isKnownTokenCount(usage.outputTokens) ? usage.outputTokens : 0;
  await reportRequestUsage(request, 'running');
  return result;
}

/**
 * Remove empty text messages/parts before handing history to the provider.
 * Older persisted sessions can contain an empty user turn from a failed
 * attachment upload; SAP serializes that as `content: []` and rejects the
 * entire request. Non-text parts (images, tool calls/results) stay intact.
 */
export function sanitizeModelMessages(messages: ModelMessage[]): ModelMessage[] {
  const sanitized: ModelMessage[] = [];

  for (const message of messages) {
    const content = (message as { content?: unknown }).content;
    if (typeof content === 'string') {
      if (content.trim().length > 0) sanitized.push(message);
      continue;
    }
    if (!Array.isArray(content)) {
      sanitized.push(message);
      continue;
    }

    const parts = content.filter((part) => {
      if (!part || typeof part !== 'object') return true;
      const candidate = part as { type?: string; text?: unknown };
      return candidate.type !== 'text' ||
        (typeof candidate.text === 'string' && candidate.text.trim().length > 0);
    });
    if (parts.length > 0) {
      sanitized.push({ ...message, content: parts } as ModelMessage);
    }
  }

  return sanitized;
}

/**
 * Run the agent loop via the Vercel AI SDK + SAP AI Core.
 * Handles SAP's aggressive rate limiting by honouring the x-retry-after header
 * (the AI SDK's built-in backoff ignores it and retries too early).
 */
export async function runAgent(
  systemPrompt: string,
  docsRoot: string,
  messages: ModelMessage[],
  evidenceLedger?: EvidenceLedger,
  attachmentsRoot?: string,
  onUsage?: RequestUsageCallback,
): Promise<AgentResult> {
  let rateLimitRetries = 0;
  let authRetries = 0;
  const requestUsage: RequestUsage = {
    inputTokens: 0,
    uncachedInputTokens: 0,
    outputTokens: 0,
    cacheReadTokens: 0,
    cacheWriteTokens: 0,
    unknownUsageCalls: 0,
    onUsage,
  };
  let status: RequestUsageSnapshot['status'] = 'failed';

  try {
    while (true) {
      try {
        const result = await generateOnce(
          systemPrompt, docsRoot, messages, requestUsage, evidenceLedger, attachmentsRoot,
        );
        status = 'completed';
        return result;
      } catch (err) {
        if (err instanceof UsageCallbackError) throw err;
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
  } finally {
    const estimate = estimateRequestCost(MODEL_ID, requestUsage);
    const cost = estimate.available
      ? `estimatedCU=${estimate.capacityUnits.toFixed(8)}, estimatedEUR=${estimate.euros.toFixed(8)}`
      : `cost unavailable (${estimate.reason})`;
    log(
      `Request cost — model=${MODEL_ID}, status=${status}, ` +
        `usage=${requestUsage.unknownUsageCalls > 0 ? 'partial' : 'complete'}, ` +
        `inputTokens=${requestUsage.inputTokens}, uncachedInputTokens=${requestUsage.uncachedInputTokens}, ` +
        `outputTokens=${requestUsage.outputTokens}, cacheReadTokens=${requestUsage.cacheReadTokens}, ` +
        `cacheWriteTokens=${requestUsage.cacheWriteTokens}, unknownUsageCalls=${requestUsage.unknownUsageCalls}, ` +
        `${cost}, pricing=approximate, cachedInputCost=excluded, moderationCost=excluded`,
    );
    await reportRequestUsage(requestUsage, status);
  }
}

async function generateOnce(
  systemPrompt: string,
  docsRoot: string,
  messages: ModelMessage[],
  requestUsage: RequestUsage,
  evidenceLedger?: EvidenceLedger,
  attachmentsRoot?: string,
): Promise<AgentResult> {
  let stepNum = 0;
  let toolCallCount = 0;
  let duplicateToolCallCount = 0;
  let inputTokens = 0;
  let uncachedInputTokens = 0;
  let outputTokens = 0;
  let cacheReadTokens = 0;
  let cacheWriteTokens = 0;
  const seenToolCalls = new Set<string>();
  const cleanMessages = sanitizeModelMessages(messages);
  const priorEvidence = formatEvidenceLedger(evidenceLedger);
  const transcript: ModelMessage[] = [...cleanMessages];
  const evidenceLedgerDelta = emptyEvidenceLedger();
  const tools = fileTools(docsRoot, evidenceLedgerDelta, attachmentsRoot);
  const corpusIdentifiers = knownCorpusIdentifiers(docsRoot);
  const userText = cleanMessages
    .filter((message) => message.role === 'user')
    .map(modelMessageText)
    .join('\n');
  const lastUserMessage = [...cleanMessages].reverse().find((message) => message.role === 'user');
  let forceToolNextStep = isVerificationChallenge(
    lastUserMessage ? modelMessageText(lastUserMessage) : '',
  );
  let pendingGroundingInstruction: string | undefined;
  let groundingFailures = 0;
  log(
    `Sending request to SAP AI Core (model=${MODEL_ID}, ` +
      `adaptiveThinking=${
        ADAPTIVE_THINKING
          ? 'requested'
          : ADAPTIVE_THINKING_REQUESTED
            ? 'ignored-non-Claude-model'
            : 'off'
      })…`,
  );
  const startedAt = Date.now();

  // Cache the stable system prefix (BASE_INSTRUCTIONS + SKILL.md). The rolling
  // message-tail breakpoint below extends that cached prefix at SAP-compatible
  // user/assistant text boundaries while keeping every finding intact.
  // Anthropic caching is opt-in: without these breakpoints, cached_tokens is 0.
  const systemMsg: SystemModelMessage = {
    role: 'system',
    content: systemPrompt,
    providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } }, // 5m default TTL
  };
  // Keep dynamic evidence after the stable cache boundary, using the SDK's
  // dedicated system option so it never appears in conversation history.
  const system: SystemModelMessage[] = priorEvidence
    ? [systemMsg, { role: 'system', content: priorEvidence }]
    : [systemMsg];

  // Run one model step at a time so the short continuation message gives SAP a
  // legal cache breakpoint after the complete tool transcript (tool messages
  // themselves cannot be marked) without injecting a retrieval policy layer.
  for (let researchStep = 0; researchStep < MAX_STEPS; researchStep++) {
    if (pendingGroundingInstruction) {
      transcript.push({ role: 'user', content: pendingGroundingInstruction });
      pendingGroundingInstruction = undefined;
    } else if (researchStep > 0) {
      transcript.push({ role: 'user', content: RESEARCH_CHECKPOINT });
    }

    const requireToolThisStep = forceToolNextStep;
    const result = await withNetworkRetry(`agent step ${researchStep + 1}`, () =>
      trackRequestUsage(requestUsage, () => generateText({
        model,
        tools,
        system,
        allowSystemInMessages: false,
        messages: cacheMessageTail(transcript),
        stopWhen: stepCountIs(1),
        toolChoice: requireToolThisStep ? 'required' : 'auto',
        maxOutputTokens: ADAPTIVE_THINKING ? THINKING_MAX_OUTPUT_TOKENS : undefined,
        providerOptions: ADAPTIVE_THINKING
          ? {
              'sap-ai': {
                modelParams: { thinking: { type: 'adaptive' } },
              },
            }
          : {
            'sap-ai': {
              modelParams: {reasoning_effort: 'low'}
            }
          },
        // Disable the SDK's exponential backoff — it ignores SAP's x-retry-after
        // header. Network retries preserve this exact step; runAgent handles 429s.
        maxRetries: 0
      })),
    );
    forceToolNextStep = false;

    const step = result.steps[0];
    if (!step) throw new Error('SAP AI Core returned no generation step.');
    stepNum++;
    const stepInput = normalizeInputUsage(
      result.totalUsage,
      IS_ANTHROPIC_MODEL ? 'exclusive' : 'inclusive',
    );
    inputTokens += stepInput.total;
    uncachedInputTokens += stepInput.uncached;
    outputTokens += result.totalUsage.outputTokens ?? 0;
    cacheReadTokens += stepInput.cacheRead;
    cacheWriteTokens += stepInput.cacheWrite;

    for (const call of step.toolCalls) {
      toolCallCount++;
      const key = `${call.toolName}:${JSON.stringify(call.input)}`;
      if (seenToolCalls.has(key)) duplicateToolCallCount++;
      seenToolCalls.add(key);
    }
    const toolCallDescriptions = step.toolCalls.map(
      (call) => `${call.toolName}(${JSON.stringify(call.input)})`,
    );
    log(
      `Step ${stepNum} finished (+${Date.now() - startedAt}ms) — reason=${step.finishReason}, ` +
        `text=${step.text.length}c, toolCalls=[${toolCallDescriptions.join(', ')}], ` +
        `reasoning=${step.reasoningText?.length ?? 0}c, ` +
        `reasoningTokens=${step.usage.outputTokenDetails?.reasoningTokens ?? '?'}, ` +
        `input=${stepInput.total}, uncachedInput=${stepInput.uncached}, ` +
        `providerInput=${stepInput.reported}, ` +
        `output=${result.totalUsage.outputTokens ?? 0}, ` +
        `cacheRead=${step.usage.inputTokenDetails?.cacheReadTokens ?? '?'}, ` +
        `cacheWrite=${step.usage.inputTokenDetails?.cacheWriteTokens ?? '?'}`,
    );

    if (step.toolCalls.length === 0) {
      // Keep runtime grounding source-based. Regex statement-shape checks cannot
      // reliably distinguish HPScript declarations, handles, callbacks, and
      // expressions, so they must never trigger paid rewrite turns.
      // const unsupported = findUnsupportedCodeIdentifiers(
      //   result.text,
      //   corpusIdentifiers,
      //   userText,
      // );
      // if (unsupported.length > 0 && groundingFailures < 2) {
      //   groundingFailures++;
      //   const reasons = [`unsupported identifiers=[${unsupported.join(', ')}]`];
      //   log(
      //     `Identifier grounding rejected draft — ${reasons.join('; ')}; ` +
      //       `requesting a corrected draft (${groundingFailures}/2)`,
      //   );
      //   transcript.push(...result.response.messages);
      //   pendingGroundingInstruction =
      //     `The previous draft was rejected because these code identifiers are absent from both ` +
      //     `the active game corpus and the user's input: ${unsupported.join(', ')}. Do not rename ` +
      //     `or defend them from memory. Use a tool now to verify the exact structural claim, or ` +
      //     `remove it and answer only with already verified facts.`;
      //   forceToolNextStep = true;
      //   continue;
      // }
      // if (unsupported.length > 0) {
      //   const safeText = `I could not verify these identifiers in the active game sources: ` +
      //     `${unsupported.map((identifier) => `\`${identifier}\``).join(', ')}. ` +
      //     `I will not present that code as valid.`;
      //   log(`Blocked final draft after repeated identifier-grounding failures — ${[
      //     ...unsupported,
      //   ].join(', ')}`);
      //   return {
      //     text: safeText,
      //     inputTokens,
      //     uncachedInputTokens,
      //     outputTokens,
      //     cacheReadTokens,
      //     cacheWriteTokens,
      //     stepCount: stepNum,
      //     toolCallCount,
      //     duplicateToolCallCount,
      //     forcedFinal: true,
      //     evidenceLedgerDelta,
      //   };
      // }
      log(
        `Done — ${stepNum} step(s), finishReason=${result.finishReason}, ` +
          `toolCalls=${toolCallCount}, duplicateToolCalls=${duplicateToolCallCount}, ` +
          `text=${result.text.length}c`,
      );
      return {
        text: result.text,
        inputTokens,
        uncachedInputTokens,
        outputTokens,
        cacheReadTokens,
        cacheWriteTokens,
        stepCount: stepNum,
        toolCallCount,
        duplicateToolCallCount,
        forcedFinal: false,
        evidenceLedgerDelta,
      };
    }

    transcript.push(...result.response.messages);
  }

  log('Hit emergency step ceiling mid-research — forcing a final answer with tools disabled…');
  const finalResult = await withNetworkRetry('forced final answer', () =>
    trackRequestUsage(requestUsage, () => generateText({
      model,
      system,
      allowSystemInMessages: false,
      messages: cacheMessageTail([
        ...transcript,
        {
          role: 'user',
          content:
            'Answer the original question now using only the documentation already gathered. ' +
            'Do not call tools, ask to read more files, or mention this instruction.',
        },
      ]),
      maxOutputTokens: ADAPTIVE_THINKING ? THINKING_MAX_OUTPUT_TOKENS : undefined,
      providerOptions: ADAPTIVE_THINKING
        ? {
            'sap-ai': {
              modelParams: { thinking: { type: 'adaptive' } },
            },
          }
        : undefined,
      maxRetries: 0,
    })),
  );
  const finalInput = normalizeInputUsage(
    finalResult.totalUsage,
    IS_ANTHROPIC_MODEL ? 'exclusive' : 'inclusive',
  );
  inputTokens += finalInput.total;
  uncachedInputTokens += finalInput.uncached;
  outputTokens += finalResult.totalUsage.outputTokens ?? 0;
  cacheReadTokens += finalInput.cacheRead;
  cacheWriteTokens += finalInput.cacheWrite;
  const finalUnsupported = findUnsupportedCodeIdentifiers(
    finalResult.text,
    corpusIdentifiers,
    userText,
  );
  const finalText = finalUnsupported.length === 0
    ? finalResult.text
    : `I could not verify these identifiers in the active game sources: ` +
      `${finalUnsupported.map((identifier) => `\`${identifier}\``).join(', ')}. ` +
      `I will not present that code as valid.`;
  log(
    `Final answer produced — text=${finalText.length}c, input=${finalInput.total}, ` +
      `uncachedInput=${finalInput.uncached}, providerInput=${finalInput.reported}, ` +
      `cacheRead=${finalInput.cacheRead}`,
  );

  return {
    text: finalText,
    inputTokens,
    uncachedInputTokens,
    outputTokens,
    cacheReadTokens,
    cacheWriteTokens,
    stepCount: stepNum,
    toolCallCount,
    duplicateToolCallCount,
    forcedFinal: true,
    evidenceLedgerDelta,
  };
}

function modelMessageText(message: ModelMessage): string {
  const content = (message as { content?: unknown }).content;
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content.map((part) => {
    if (!part || typeof part !== 'object') return '';
    const value = part as { type?: string; text?: string };
    return value.type === 'text' && typeof value.text === 'string' ? value.text : '';
  }).filter(Boolean).join('\n');
}

function knownCorpusIdentifiers(docsRoot: string): string[] {
  const index = getCorpusIndex(docsRoot);
  return index.symbols.flatMap((symbol) => [
    symbol.name,
    symbol.container ?? '',
    ...(symbol.inheritedTypes ?? []),
  ]);
}
