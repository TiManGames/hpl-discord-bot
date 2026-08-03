/**
 * One-off caching probe for both stable-system and growing-message prefixes.
 * It reports whether SAP AI Core / Anthropic serves cached input tokens on the
 * second request in each scenario.
 *
 * Run with:  npm run cache-probe
 *
 * Interpreting the output:
 * - Second call shows cacheReadTokens > 0  → that cache tier works.
 * - Second call shows cacheReadTokens = 0/undefined → caching is NOT applied
 *   through this SAP path (the known Anthropic-orchestration limitation); focus
 *   on context-trimming instead.
 */
import 'dotenv/config';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { generateText, stepCountIs, tool, zodSchema } from 'ai';
import type { ModelMessage, SystemModelMessage } from 'ai';
import { createSAPAIProvider } from '@jerome-benoit/sap-ai-provider';
import { z } from 'zod';
import { cacheMessageTail } from './cache.js';

const MODEL_ID = process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
const RESOURCE_GROUP = process.env.AICORE_RESOURCE_GROUP ?? 'default';

const sapAiProvider = createSAPAIProvider({ resourceGroup: RESOURCE_GROUP });
const model = sapAiProvider(MODEL_ID);

function log(msg: string): void {
  console.log(`[${new Date().toISOString()}] [PROBE] ${msg}`);
}

// Build a stable system prompt from a real skill file. Production intentionally
// no longer injects the documentation tree; paths are discovered on demand.
function buildStablePrompt(): string {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const skillDir = resolve(__dirname, '..', 'skills', 'hpl3-bunker');
  let skill = '';
  try {
    skill = readFileSync(join(skillDir, 'SKILL.md'), 'utf-8');
  } catch {
    skill = 'You are a helpful HPL modding assistant.';
  }
  return skill;
}

interface Usage {
  inputTokens?: number;
  outputTokens?: number;
  inputTokenDetails?: {
    noCacheTokens?: number;
    cacheReadTokens?: number;
    cacheWriteTokens?: number;
  };
}

interface ProbeResponse {
  text: string;
  usage: Usage;
}

function reportUsage(label: string, usage: Usage): void {
  const d = usage.inputTokenDetails;
  log(
    `${label}: inputTokens=${usage.inputTokens ?? '?'} ` +
      `outputTokens=${usage.outputTokens ?? '?'} ` +
      `cacheReadTokens=${d?.cacheReadTokens ?? 'undefined'} ` +
      `cacheWriteTokens=${d?.cacheWriteTokens ?? 'undefined'}`,
  );
}

async function ask(
  systemPrompt: string,
  messages: ModelMessage[],
  cacheSystem: boolean,
): Promise<ProbeResponse> {
  const systemMsg: SystemModelMessage = cacheSystem
    ? {
        role: 'system',
        content: systemPrompt,
        providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } },
      }
    : { role: 'system', content: systemPrompt };

  const result = await generateText({
    model,
    system: systemMsg,
    messages,
    maxRetries: 2,
  });
  return { text: result.text, usage: result.usage as Usage };
}

async function probeStableSystem(systemPrompt: string): Promise<number> {
  const messages: ModelMessage[] = [
    { role: 'user', content: 'In one sentence, what is an entity in HPL3?' },
  ];

  log('System cache / call 1 (cold)…');
  const first = await ask(systemPrompt, messages, true);
  reportUsage('System cache / call 1', first.usage);

  await new Promise((r) => setTimeout(r, 1500));

  log('System cache / call 2 (same prefix)…');
  const second = await ask(systemPrompt, messages, true);
  reportUsage('System cache / call 2', second.usage);
  return second.usage.inputTokenDetails?.cacheReadTokens ?? 0;
}

async function probeGrowingMessageTail(systemPrompt: string): Promise<number> {
  const firstTurn: ModelMessage[] = [
    {
      role: 'user',
      content:
        'Use the supplied HPL documentation context. Reply with only the word ACK. ' +
        'This turn establishes a cacheable conversation prefix.',
    },
  ];

  log('Message-tail cache / call 1 (write initial conversation prefix)…');
  const first = await ask(systemPrompt, cacheMessageTail(firstTurn), false);
  reportUsage('Message-tail cache / call 1', first.usage);

  await new Promise((r) => setTimeout(r, 1500));

  // Move the sole message breakpoint to the new tail. Anthropic's lookback should
  // find the prefix written at the first user block, read it, then write this
  // extended conversation prefix.
  const secondTurn: ModelMessage[] = [
    ...firstTurn,
    { role: 'assistant', content: first.text },
    { role: 'user', content: 'Reply with only the word DONE.' },
  ];
  log('Message-tail cache / call 2 (growing transcript)…');
  const second = await ask(systemPrompt, cacheMessageTail(secondTurn), false);
  reportUsage('Message-tail cache / call 2', second.usage);
  return second.usage.inputTokenDetails?.cacheReadTokens ?? 0;
}

async function probeCachedToolLoop(systemPrompt: string): Promise<boolean> {
  log('Cached tool loop / calling a tool and continuing to the next model step…');

  const systemMsg: SystemModelMessage = {
    role: 'system',
    content: systemPrompt,
    providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } },
  };
  const result = await generateText({
    model,
    system: systemMsg,
    tools: {
      lookup_value: tool({
        description: 'Return the stored value for the supplied key.',
        inputSchema: zodSchema(z.object({ key: z.string() })),
        execute: async ({ key }) => (key === 'probe-key' ? '42' : 'NOT_FOUND'),
      }),
    },
    messages: [
      {
        role: 'user',
        content:
          'Call lookup_value once with key "probe-key", then reply with only its returned value.',
      },
    ],
    stopWhen: stepCountIs(4),
    maxRetries: 0,
    prepareStep: ({ messages }) => ({ messages: cacheMessageTail(messages) }),
  });

  const toolCalls = result.steps.reduce((count, step) => count + step.toolCalls.length, 0);
  const completed = toolCalls > 0 && result.steps.length >= 2 && result.text.trim() === '42';
  reportUsage('Cached tool loop', result.totalUsage as Usage);
  log(
    `Cached tool loop: steps=${result.steps.length}, toolCalls=${toolCalls}, ` +
      `answer=${JSON.stringify(result.text.trim())}, compatible=${completed}`,
  );
  return completed;
}

async function main(): Promise<void> {
  const systemPrompt = buildStablePrompt();
  log(`Model: ${MODEL_ID}, resource group: ${RESOURCE_GROUP}`);
  log(`Stable system prompt length: ${systemPrompt.length} chars (~${Math.round(systemPrompt.length / 4)} tokens)`);

  const systemCached = await probeStableSystem(systemPrompt);
  const messageCached = await probeGrowingMessageTail(systemPrompt);
  const toolLoopCompatible = await probeCachedToolLoop(systemPrompt);
  console.log('');
  log(
    `RESULT: systemCache=${systemCached > 0 ? `WORKS (${systemCached} read tokens)` : 'NOT OBSERVED'}; ` +
      `messageTailCache=${messageCached > 0 ? `WORKS (${messageCached} read tokens)` : 'NOT OBSERVED'}; ` +
      `cachedToolLoop=${toolLoopCompatible ? 'WORKS' : 'FAILED'}.`,
  );

  if (!toolLoopCompatible) process.exitCode = 1;
}

main().catch((err) => {
  console.error('Probe error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
