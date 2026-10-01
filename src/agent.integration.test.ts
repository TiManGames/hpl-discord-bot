import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MockLanguageModelV3 } from 'ai/test';
import type { LanguageModelV3GenerateResult, LanguageModelV3Usage } from '@ai-sdk/provider';
import type { EvidenceLedger } from './evidence.js';
import type { RequestUsageSnapshot } from './agent.js';

const { getModel } = vi.hoisted(() => ({ getModel: vi.fn() }));
vi.mock('@jerome-benoit/sap-ai-provider', () => ({ createSAPAIProvider: () => getModel }));
vi.mock('./corpus-index.js', () => ({ getCorpusIndex: () => ({ symbols: [] }) }));
vi.mock('./tools.js', async () => {
  const { tool } = await import('ai');
  const { z } = await import('zod');
  return {
    fileTools: () => ({
      probe: tool({ inputSchema: z.object({}), execute: async () => 'verified source' }),
    }),
  };
});

function providerUsage(input = 5_000, output = 1_000, cacheRead = 0, cacheWrite = 0): LanguageModelV3Usage {
  return {
    inputTokens: { total: input + cacheRead + cacheWrite, noCache: input, cacheRead, cacheWrite },
    outputTokens: { total: output, text: output - 100, reasoning: 100 },
  };
}

function response(usage = providerUsage(), callTool = false): LanguageModelV3GenerateResult {
  return {
    content: callTool
      ? [{ type: 'tool-call', toolCallId: 'probe-1', toolName: 'probe', input: '{}' }]
      : [{ type: 'text', text: 'Here is the verified answer.' }],
    finishReason: { unified: callTool ? 'tool-calls' : 'stop', raw: undefined },
    usage,
    warnings: [],
  };
}

describe('agent prompt and request accounting through the AI SDK', () => {
  let runAgent: typeof import('./agent.js').runAgent;
  let model: MockLanguageModelV3;
  let generate: ReturnType<typeof vi.fn<MockLanguageModelV3['doGenerate']>>;
  let logs: string[];

  async function loadAgent() {
    vi.resetModules();
    runAgent = (await import('./agent.js')).runAgent;
  }

  function summary(): string {
    const summaries = logs.filter((line) => line.includes('Request cost —'));
    expect(summaries).toHaveLength(1);
    return summaries[0];
  }

  beforeEach(async () => {
    vi.stubEnv('AICORE_MODEL', 'gpt-5.6-sol');
    vi.stubEnv('AICORE_MAX_STEPS', '2');
    vi.stubEnv('AICORE_MODEL_CU_RATES', undefined);
    vi.stubEnv('AICORE_EUR_PER_CU', undefined);
    vi.stubEnv('AICORE_ADAPTIVE_THINKING', undefined);
    logs = [];
    vi.spyOn(console, 'log').mockImplementation((line) => logs.push(String(line)));
    generate = vi.fn<MockLanguageModelV3['doGenerate']>().mockResolvedValue(response());
    model = new MockLanguageModelV3({ doGenerate: generate });
    getModel.mockReturnValue(model);
    await loadAgent();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('keeps prior evidence in system with stable and rolling cache boundaries', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const ledger: EvidenceLedger = {
      references: [{ id: 'file:a.md', kind: 'file', label: 'Prior source', path: 'a.md' }],
      searches: [],
    };
    const messages = [{ role: 'user' as const, content: 'question' }];
    const result = await runAgent('stable prompt', 'unused', messages, ledger);
    expect(result.text).toBe('Here is the verified answer.');
    const prompt = model.doGenerateCalls[0].prompt;
    expect(prompt.map((message) => message.role)).toEqual(['system', 'system', 'user']);
    expect(prompt[0]).toMatchObject({
      content: 'stable prompt', providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } },
    });
    expect(prompt[1].content).toContain('file:a.md');
    expect(prompt[1].providerOptions).toBeUndefined();
    expect(prompt[2].content).toEqual([{
      type: 'text', text: 'question', providerOptions: { 'sap-ai': { cacheControl: { type: 'ephemeral' } } },
    }]);
    expect(messages).toEqual([{ role: 'user', content: 'question' }]);
    expect(warn.mock.calls.flat().join(' ')).not.toContain('System messages in the prompt');
    expect(summary()).toContain('status=completed, usage=complete');
    expect(summary()).toContain('estimatedCU=0.07092000, estimatedEUR=0.03191400');
  });

  it('rejects accidental system messages in conversation history', async () => {
    await expect(runAgent('stable', 'unused', [
      { role: 'system', content: 'unexpected instructions' },
      { role: 'user', content: 'question' },
    ])).rejects.toThrow('System messages are not allowed');
    expect(generate).not.toHaveBeenCalled();
    expect(summary()).toContain('status=failed');
  });

  it('sums research steps while excluding cache and counting output reasoning only once', async () => {
    generate.mockResolvedValueOnce(response(providerUsage(5_000, 1_000, 2_500, 500), true))
      .mockResolvedValueOnce(response(providerUsage(63_000, 3_000, 4_500, 500)));
    await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }]);
    expect(model.doGenerateCalls).toHaveLength(2);
    expect(summary()).toContain('inputTokens=76000, uncachedInputTokens=68000, outputTokens=4000');
    expect(summary()).toContain('cacheReadTokens=7000, cacheWriteTokens=1000');
    expect(summary()).toContain('estimatedCU=0.61092000, estimatedEUR=0.27491400');
    expect(summary()).toContain('cachedInputCost=excluded, moderationCost=excluded');
  });

  it('preserves Anthropic exclusive cache accounting for request costs', async () => {
    vi.stubEnv('AICORE_MODEL', 'anthropic--claude-test');
    vi.stubEnv('AICORE_MODEL_CU_RATES', JSON.stringify({
      'anthropic--claude-test': { inputCuPerMillionTokens: 6.8175, outputCuPerMillionTokens: 36.8325 },
    }));
    await loadAgent();
    const usage = providerUsage(5_000, 1_000, 10_000, 1_000);
    usage.inputTokens.total = 5_000;
    generate.mockResolvedValue(response(usage));
    await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }]);
    expect(summary()).toContain('inputTokens=16000, uncachedInputTokens=5000, outputTokens=1000');
    expect(summary()).toContain('estimatedCU=0.07092000');
  });

  it('includes forced-final usage and uses the same system arrangement', async () => {
    vi.stubEnv('AICORE_MAX_STEPS', '1');
    await loadAgent();
    generate.mockResolvedValueOnce(response(providerUsage(), true))
      .mockResolvedValueOnce(response(providerUsage(63_000, 3_000)));
    const ledger: EvidenceLedger = { references: [], searches: [{
      queries: ['prior query'], channels: ['text'], resultIds: [], empty: true, truncated: false,
    }] };
    const result = await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], ledger);
    expect(result.forcedFinal).toBe(true);
    expect(model.doGenerateCalls).toHaveLength(2);
    for (const call of model.doGenerateCalls) {
      expect(call.prompt.slice(0, 2).map((message) => message.role)).toEqual(['system', 'system']);
      expect(call.prompt[1].content).toContain('prior query');
      expect(call.prompt.slice(2).some((message) => message.role === 'system')).toBe(false);
      expect(call.prompt[0].providerOptions).toMatchObject({ 'sap-ai': { cacheControl: { type: 'ephemeral' } } });
    }
    expect(summary()).toContain('estimatedCU=0.61092000');
  });

  it.each([
    new Error('429 Too many requests'),
    new Error('LoadAPIKeyError'),
  ])('retains known usage across whole-agent retries after %s', async (error) => {
    vi.useFakeTimers();
    generate.mockResolvedValueOnce(response(providerUsage(), true))
      .mockRejectedValueOnce(error)
      .mockResolvedValueOnce(response(providerUsage(63_000, 3_000)));
    const snapshots: RequestUsageSnapshot[] = [];
    const pending = runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined,
      async (snapshot) => { snapshots.push(snapshot); });
    await vi.runAllTimersAsync();
    await pending;
    expect(model.doGenerateCalls).toHaveLength(3);
    expect(summary()).toContain('status=completed, usage=partial');
    expect(summary()).toContain('uncachedInputTokens=68000, outputTokens=4000');
    expect(summary()).toContain('unknownUsageCalls=1, estimatedCU=0.61092000');
    expect(snapshots.at(-1)).toMatchObject({
      status: 'completed', uncachedInputTokens: 68000, outputTokens: 4000,
      unknownUsageCalls: 1, estimate: { available: true, euros: 0.274914 },
    });
    expect(snapshots.filter((snapshot) => snapshot.status === 'completed')).toHaveLength(1);
  });

  it('marks a transport retry partial and retries the same step', async () => {
    vi.useFakeTimers();
    generate.mockRejectedValueOnce(new Error('ECONNRESET'))
      .mockResolvedValueOnce(response());
    const pending = runAgent('stable', 'unused', [{ role: 'user', content: 'question' }]);
    await vi.runAllTimersAsync();
    await pending;
    expect(model.doGenerateCalls).toHaveLength(2);
    expect(model.doGenerateCalls[0].prompt).toEqual(model.doGenerateCalls[1].prompt);
    expect(summary()).toContain('status=completed, usage=partial');
    expect(summary()).toContain('unknownUsageCalls=1, estimatedCU=0.07092000');
  });

  it('logs known usage exactly once when a later call fails permanently', async () => {
    generate.mockResolvedValueOnce(response(providerUsage(), true))
      .mockRejectedValueOnce(new Error('SAP rejected request'));
    const snapshots: RequestUsageSnapshot[] = [];
    await expect(runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined,
      async (snapshot) => { snapshots.push(snapshot); }))
      .rejects.toThrow('SAP rejected request');
    expect(summary()).toContain('status=failed, usage=partial');
    expect(summary()).toContain('estimatedCU=0.07092000');
    expect(snapshots.at(-1)).toMatchObject({
      status: 'failed', uncachedInputTokens: 5000, outputTokens: 1000, unknownUsageCalls: 1,
    });
  });

  it('marks successful calls with missing usage partial', async () => {
    const usage = providerUsage();
    usage.inputTokens.total = undefined;
    usage.inputTokens.noCache = undefined;
    generate.mockResolvedValue(response(usage));
    await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }]);
    expect(summary()).toContain('status=completed, usage=partial');
    expect(summary()).toContain('uncachedInputTokens=0, outputTokens=1000');
    expect(summary()).toContain('unknownUsageCalls=1');
  });

  it.each([
    ['AICORE_MODEL', 'unpriced-model'],
    ['AICORE_MODEL_CU_RATES', 'broken-json'],
    ['AICORE_EUR_PER_CU', '-1'],
  ])('does not block answers for unavailable pricing: %s', async (setting, value) => {
    vi.stubEnv(setting, value);
    await loadAgent();
    const result = await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }]);
    expect(result.text).toBe('Here is the verified answer.');
    expect(summary()).toContain('status=completed');
    expect(summary()).toContain('cost unavailable');
  });

  it('awaits usage persistence before calling the provider and reports successful totals', async () => {
    const snapshots: RequestUsageSnapshot[] = [];
    const onUsage = vi.fn(async (snapshot: RequestUsageSnapshot) => {
      snapshots.push(snapshot);
      if (snapshots.length === 1) expect(generate).not.toHaveBeenCalled();
    });
    await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined, onUsage);
    expect(snapshots.map((snapshot) => snapshot.status)).toEqual(['running', 'running', 'completed']);
    expect(snapshots[0].uncachedInputTokens).toBe(0);
    expect(snapshots[1].estimate.available).toBe(true);
    if (snapshots[1].estimate.available) expect(snapshots[1].estimate.euros).toBeCloseTo(0.031914, 10);
    expect(snapshots[2]).toMatchObject({ modelId: 'gpt-5.6-sol', unknownUsageCalls: 0 });
    expect(summary()).toContain('status=completed');
  });

  it('includes forced-final calls in persisted request snapshots', async () => {
    vi.stubEnv('AICORE_MAX_STEPS', '1');
    await loadAgent();
    generate.mockResolvedValueOnce(response(providerUsage(), true))
      .mockResolvedValueOnce(response(providerUsage(63_000, 3_000)));
    const onUsage = vi.fn(async (_snapshot: RequestUsageSnapshot) => {});
    await runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined, onUsage);
    expect(onUsage).toHaveBeenLastCalledWith(expect.objectContaining({
      status: 'completed', uncachedInputTokens: 68000, outputTokens: 4000,
    }));
  });

  it.each(['ECONNRESET', '429 Too many requests', 'LoadAPIKeyError'])(
    'does not retry inference when a persistence callback fails with %s', async (message) => {
      generate.mockResolvedValue(response(providerUsage(), true));
      const snapshots: RequestUsageSnapshot[] = [];
      const onUsage = async (snapshot: RequestUsageSnapshot) => {
        snapshots.push(snapshot);
        if (snapshot.uncachedInputTokens > 0) throw new Error(message);
      };
      await expect(runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined, onUsage))
        .rejects.toThrow('Agent usage callback failed');
      expect(generate).toHaveBeenCalledOnce();
      expect(snapshots.at(-1)).toMatchObject({ status: 'failed', unknownUsageCalls: 0, uncachedInputTokens: 5000 });
      expect(summary()).toContain('status=failed, usage=complete');
    },
  );

  it('makes no paid call when accounting is unavailable at admission', async () => {
    const onUsage = vi.fn(async () => { throw new Error('database unavailable'); });
    await expect(runAgent('stable', 'unused', [{ role: 'user', content: 'question' }], undefined, undefined, onUsage))
      .rejects.toThrow('Agent usage callback failed');
    expect(generate).not.toHaveBeenCalled();
    expect(summary()).toContain('uncachedInputTokens=0');
  });
});
