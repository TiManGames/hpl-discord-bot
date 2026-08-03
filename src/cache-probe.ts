/**
 * One-off caching probe: sends the SAME large-prefix request twice and reports
 * whether SAP AI Core / Anthropic returns any cached input tokens on the second
 * call. This decides whether prompt caching is a viable cost lever for us.
 *
 * Run with:  npm run cache-probe
 *
 * Interpreting the output:
 * - Second call shows cacheReadTokens > 0  → caching WORKS; pursue it.
 * - Second call shows cacheReadTokens = 0/undefined → caching is NOT applied
 *   through this SAP path (the known Anthropic-orchestration limitation); focus
 *   on context-trimming instead.
 */
import 'dotenv/config';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import { generateText } from 'ai';
import type { SystemModelMessage } from 'ai';
import { createSAPAIProvider } from '@jerome-benoit/sap-ai-provider';
import { buildFileManifest } from './tools.js';

const MODEL_ID = process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
const RESOURCE_GROUP = process.env.AICORE_RESOURCE_GROUP ?? 'default';

const sapAiProvider = createSAPAIProvider({ resourceGroup: RESOURCE_GROUP });
const model = sapAiProvider(MODEL_ID);

function log(msg: string): void {
  console.log(`[${new Date().toISOString()}] [PROBE] ${msg}`);
}

// Build a large, stable system prompt like the real bot does (SKILL.md + the
// docs manifest) so the cacheable prefix is realistically big.
function buildLargePrompt(): string {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const skillDir = resolve(__dirname, '..', 'skills', 'hpl3-bunker');
  let skill = '';
  try {
    skill = readFileSync(join(skillDir, 'SKILL.md'), 'utf-8');
  } catch {
    skill = 'You are a helpful HPL modding assistant.';
  }
  const manifest = buildFileManifest(join(skillDir, 'docs'));
  return `${skill}\n\n<available_files>\n${manifest}\n</available_files>`;
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

function reportUsage(label: string, usage: Usage): void {
  const d = usage.inputTokenDetails;
  log(
    `${label}: inputTokens=${usage.inputTokens ?? '?'} ` +
      `outputTokens=${usage.outputTokens ?? '?'} ` +
      `cacheReadTokens=${d?.cacheReadTokens ?? 'undefined'} ` +
      `cacheWriteTokens=${d?.cacheWriteTokens ?? 'undefined'}`,
  );
}

async function ask(systemPrompt: string): Promise<Usage> {
  // Enable Anthropic prompt caching on the large stable system prefix. Caching is
  // opt-in — without this cacheControl breakpoint, cached_tokens is always 0.
  const systemMsg: SystemModelMessage = {
    role: 'system',
    content: systemPrompt,
    providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } }, // 5m default TTL
  };
  const result = await generateText({
    model,
    system: systemMsg,
    // No tools — we only care about how the large system prefix is billed.
    messages: [{ role: 'user', content: 'In one sentence, what is an entity in HPL3?' }],
    maxRetries: 2,
  });
  return result.usage as Usage;
}

async function main(): Promise<void> {
  const systemPrompt = buildLargePrompt();
  log(`Model: ${MODEL_ID}, resource group: ${RESOURCE_GROUP}`);
  log(`Stable system prompt length: ${systemPrompt.length} chars (~${Math.round(systemPrompt.length / 4)} tokens)`);

  log('Call 1 (cold — writes/primes any cache)…');
  const u1 = await ask(systemPrompt);
  reportUsage('Call 1', u1);

  // Small gap; prompt caches are short-lived but persist across back-to-back calls.
  await new Promise((r) => setTimeout(r, 1500));

  log('Call 2 (identical prefix — should read from cache if supported)…');
  const u2 = await ask(systemPrompt);
  reportUsage('Call 2', u2);

  const cached = u2.inputTokenDetails?.cacheReadTokens ?? 0;
  console.log('');
  if (cached > 0) {
    log(`RESULT: caching WORKS — ${cached} input tokens served from cache on call 2. Pursue prompt caching.`);
  } else {
    log('RESULT: NO cached tokens reported on call 2. Prompt caching is not applied through this SAP path — focus on context-trimming instead.');
  }
}

main().catch((err) => {
  console.error('Probe error:', err instanceof Error ? err.message : err);
  process.exit(1);
});
