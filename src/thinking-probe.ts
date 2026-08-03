/**
 * Live SAP adaptive-thinking probe.
 *
 * This deliberately requires two sequential tool calls: the second lookup key
 * is returned by the first. A successful final answer therefore exercises the
 * exact inter-tool reasoning path the production agent needs.
 *
 * Run with: npm run thinking-probe
 */
import 'dotenv/config';
import { generateText, stepCountIs, tool, zodSchema } from 'ai';
import { z } from 'zod';
import { createSAPAIProvider } from '@jerome-benoit/sap-ai-provider';

const MODEL_ID = process.env.AICORE_MODEL ?? 'anthropic--claude-4.6-sonnet';
const RESOURCE_GROUP = process.env.AICORE_RESOURCE_GROUP ?? 'default';

function log(message: string): void {
  console.log(`[${new Date().toISOString()}] [THINKING-PROBE] ${message}`);
}

function getForwardedThinking(requestBody: unknown): unknown {
  const body = requestBody as { model?: { params?: { thinking?: unknown } } } | undefined;
  return body?.model?.params?.thinking;
}

async function main(): Promise<void> {
  if (!process.env.AICORE_SERVICE_KEY) {
    throw new Error('Missing AICORE_SERVICE_KEY. Run this probe in the configured SAP environment.');
  }
  if (!process.env.AICORE_RESOURCE_GROUP) {
    throw new Error('Missing AICORE_RESOURCE_GROUP. The probe must use the production orchestration path.');
  }

  const provider = createSAPAIProvider({ resourceGroup: RESOURCE_GROUP });
  const model = provider(MODEL_ID);
  const values: Record<string, string> = { seed: 'alpha', alpha: '42' };

  log(`Model: ${MODEL_ID}, resource group: ${RESOURCE_GROUP}`);
  log('Requesting adaptive thinking across a two-stage dependent tool chain…');

  const result = await generateText({
    model,
    tools: {
      lookup_value: tool({
        description: 'Return the value stored under a key. Resolve chains one key at a time.',
        inputSchema: zodSchema(z.object({ key: z.string() })),
        execute: async ({ key }) => values[key] ?? 'NOT_FOUND',
      }),
    },
    messages: [
      {
        role: 'user',
        content:
          'Resolve the key "seed" with lookup_value. Then use its returned value as ' +
          'the key for a second lookup_value call. Answer with only the final value.',
      },
    ],
    stopWhen: stepCountIs(6),
    maxOutputTokens: 8192,
    maxRetries: 0,
    providerOptions: {
      'sap-ai': {
        modelParams: {
          thinking: { type: 'adaptive' },
        },
      },
    },
  });

  const toolKeys = result.steps.flatMap((step) =>
    step.toolCalls.map((call) => {
      const input = call.input as { key?: unknown };
      return typeof input.key === 'string' ? input.key : '?';
    }),
  );
  const forwardedThinking = result.steps.map((step) => getForwardedThinking(step.request.body));
  const forwardedOnEveryCall =
    forwardedThinking.length > 0 &&
    forwardedThinking.every(
      (value) => (value as { type?: unknown } | undefined)?.type === 'adaptive',
    );
  const reasoningTokens = result.totalUsage.outputTokenDetails?.reasoningTokens ?? 0;
  const reasoningChars = result.steps.reduce(
    (count, step) => count + (step.reasoningText?.length ?? 0),
    0,
  );
  const seedIndex = toolKeys.indexOf('seed');
  const alphaIndex = toolKeys.indexOf('alpha');
  const completedChain =
    seedIndex >= 0 && alphaIndex > seedIndex && /\b42\b/.test(result.text.trim());

  log(`Steps: ${result.steps.length}`);
  log(`Tool keys: ${toolKeys.join(' -> ') || '(none)'}`);
  log(`Adaptive parameter present in every SAP request body: ${forwardedOnEveryCall}`);
  log(`Reported reasoning tokens: ${reasoningTokens}`);
  log(`Returned reasoning text: ${reasoningChars} chars`);
  log(`Final answer: ${JSON.stringify(result.text.trim())}`);

  if (forwardedOnEveryCall && completedChain && (reasoningTokens > 0 || reasoningChars > 0)) {
    log('RESULT: CONFIRMED — SAP forwarded adaptive thinking and the dependent tool chain completed.');
    return;
  }

  if (forwardedOnEveryCall && completedChain) {
    log(
      'RESULT: INCONCLUSIVE — SAP accepted the parameter and completed the chain, ' +
        'but exposed neither reasoning tokens nor reasoning text. Use ' +
        'AICORE_ADAPTIVE_THINKING=true only for a controlled production A/B test.',
    );
    process.exitCode = 2;
    return;
  }

  log(
    'RESULT: FAILED — the adaptive parameter was missing from a request or the ordered ' +
      'dependent tool chain did not complete.',
  );
  process.exitCode = 1;
}

main().catch((error) => {
  log(`RESULT: REJECTED/ERROR — ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
