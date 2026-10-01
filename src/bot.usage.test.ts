import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Message } from 'discord.js';
import type { AgentResult, RequestUsageSnapshot } from './agent.js';
import { runAgent } from './agent.js';
import { classifyMessage } from './moderation.js';
import { getPenalty, PENALTY_LIMIT } from './penalties.js';
import { emptyEvidenceLedger } from './evidence.js';
import { getSession, removeSession, setSession, trackedThreadIds } from './history.js';
import { handleChannelMention, handleThreadMessage, isUsageCommand } from './bot.js';
import {
  beginUsageRequest, findUsageRequest, getMonthlyUsage, initInMemoryUsageStore,
  saveUsageSnapshot, usageRequest, USAGE_UNAVAILABLE_RESPONSE,
} from './usage.js';

vi.mock('./agent.js', () => ({ runAgent: vi.fn() }));
vi.mock('./penalties.js', async (original) => ({
  ...await original<typeof import('./penalties.js')>(), getPenalty: vi.fn(),
}));
vi.mock('./moderation.js', async (original) => ({
  ...await original<typeof import('./moderation.js')>(), classifyMessage: vi.fn(),
}));

const NOW = Date.parse('2026-09-29T12:00:00Z');
const result: AgentResult = {
  text: 'Here is the answer.', inputTokens: 5000, uncachedInputTokens: 5000,
  outputTokens: 1000, cacheReadTokens: 0, cacheWriteTokens: 0,
  stepCount: 1, toolCallCount: 0, duplicateToolCallCount: 0, forcedFinal: false,
};
function snapshot(euros = 0.25, status: RequestUsageSnapshot['status'] = 'completed'): RequestUsageSnapshot {
  return {
    modelId: 'gpt-5.6-sol', status, inputTokens: 5000, uncachedInputTokens: 5000,
    outputTokens: 1000, cacheReadTokens: 0, cacheWriteTokens: 0, unknownUsageCalls: 0,
    estimate: { available: true, capacityUnits: euros / 0.45, euros },
  };
}
function message(id = 'message', userId = 'user', threadId?: string) {
  const answerChannel = {
    id: threadId ?? `thread-${id}`, name: 'hpl2 — user',
    send: vi.fn().mockResolvedValue(undefined), sendTyping: vi.fn().mockResolvedValue(undefined),
  };
  const input = {
    id, content: '<@bot-id> How do callbacks work?',
    channelId: threadId ?? 'hpl2-channel',
    channel: threadId ? answerChannel : { name: 'hpl2-modding', id: 'hpl2-channel' },
    author: { id: userId, username: userId, tag: userId },
    attachments: new Map(), mentions: { has: (botId: string): boolean => botId === 'bot-id' },
    reply: vi.fn().mockResolvedValue(undefined), react: vi.fn().mockResolvedValue(undefined),
    startThread: vi.fn().mockResolvedValue(answerChannel),
  };
  return { input, discord: input as unknown as Message, answerChannel };
}
function trackThread(threadId = 'tracked', authorId = 'owner') {
  setSession(threadId, {
    gameId: 'hpl2', docsRoot: 'unused', authorId,
    messages: [], evidenceLedger: emptyEvidenceLedger(),
  });
}
async function seed(amount: number, userId = 'user', id = 'previous', now = NOW) {
  const request = usageRequest(id, userId, now);
  await beginUsageRequest(request, 'old-thread');
  await saveUsageSnapshot(request, snapshot(amount));
}

beforeEach(async () => {
  vi.clearAllMocks();
  vi.spyOn(Date, 'now').mockReturnValue(NOW);
  vi.spyOn(console, 'log').mockImplementation(() => {});
  vi.spyOn(console, 'error').mockImplementation(() => {});
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  vi.stubEnv('AICORE_MODEL', 'gpt-5.6-sol');
  vi.stubEnv('AICORE_MODEL_CU_RATES', undefined);
  vi.stubEnv('AICORE_EUR_PER_CU', undefined);
  for (const id of trackedThreadIds()) removeSession(id);
  await initInMemoryUsageStore();
  vi.mocked(getPenalty).mockImplementation(async (id) => ({
    _id: id, penaltyCount: 0, lastPenaltyAt: null, rateLimited: false,
  }));
  vi.mocked(classifyMessage).mockResolvedValue({ penalty: false, category: 'none', reason: '' });
  vi.mocked(runAgent).mockImplementation(async (...args) => {
    await args[5]?.(snapshot());
    return result;
  });
});
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllEnvs(); });

describe('local !usage command', () => {
  it.each(['<@bot-id> !usage', '!UsAgE <@!bot-id>', '  <@bot-id>  !USAGE  '])(
    'recognizes %s exactly', (text) => expect(isUsageCommand(text, 'bot-id')).toBe(true),
  );
  it.each(['explain !usage', '!usage now', '```!usage```', '!usage-other', '<@another> !usage'])(
    'does not recognize %s as a command', (text) => expect(isUsageCommand(text, 'bot-id')).toBe(false),
  );
  it('replies in unmapped channels without paid work, downloads, threads or history', async () => {
    await seed(20);
    const { input, discord } = message();
    input.content = '<@bot-id> !usage';
    input.channel = { name: 'general', id: 'general' };
    input.attachments.set('image', { name: 'image.png', contentType: 'image/png', size: 10, url: 'https://invalid.test/file' });
    const fetch = vi.spyOn(globalThis, 'fetch');
    await handleChannelMention(discord, 'bot-id');
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('[########------------] 40%'));
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('Used:       40%'));
    expect(input.startThread).not.toHaveBeenCalled();
    expect(input.react).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
    expect(runAgent).not.toHaveBeenCalled();
    expect(classifyMessage).not.toHaveBeenCalled();
    expect(getPenalty).not.toHaveBeenCalled();
    expect(trackedThreadIds()).toEqual([]);
    expect(await findUsageRequest(input.id)).toBeNull();
  });
  it('works in untracked threads even during monthly and penalty blocks', async () => {
    await seed(50);
    vi.mocked(getPenalty).mockResolvedValue({ _id: 'user', penaltyCount: PENALTY_LIMIT, lastPenaltyAt: NOW, rateLimited: true });
    const { input, discord } = message('usage', 'user', 'untracked');
    input.content = '<@bot-id> !usage';
    await handleThreadMessage(discord, 'bot-id');
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('100%'));
    expect(getPenalty).not.toHaveBeenCalled();
    expect(classifyMessage).not.toHaveBeenCalled();
    expect(runAgent).not.toHaveBeenCalled();
    expect(getSession('untracked')).toBeUndefined();
  });
  it('accepts a direct reply to the bot and ignores an uninvoked command', async () => {
    const { input, discord } = message('usage', 'user', 'untracked');
    input.content = '!usage';
    input.mentions.has = () => false;
    await handleThreadMessage(discord, 'bot-id');
    expect(input.reply).not.toHaveBeenCalled();
    Object.assign(input, { reference: { messageId: 'bot-message' } });
    Object.assign(input.mentions, { repliedUser: { id: 'bot-id' } });
    await handleThreadMessage(discord, 'bot-id');
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('Used:       0%'));
  });
});

describe('monthly admission and settlement', () => {
  it.each([false, true])('blocks before all side effects (thread=%s)', async (inThread) => {
    await seed(50);
    if (inThread) trackThread();
    const { input, discord, answerChannel } = message('blocked', 'user', inThread ? 'tracked' : undefined);
    input.attachments.set('image', { name: 'image.png', contentType: 'image/png', size: 10, url: 'https://invalid.test/file' });
    const fetch = vi.spyOn(globalThis, 'fetch');
    const history = JSON.stringify(getSession('tracked'));
    await (inThread ? handleThreadMessage : handleChannelMention)(discord, 'bot-id');
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('100% of your monthly allowance'));
    expect(input.reply).toHaveBeenCalledWith(expect.stringContaining('1 Oct 2026, 00:00 UTC'));
    expect(input.startThread).not.toHaveBeenCalled();
    expect(input.react).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
    expect(classifyMessage).not.toHaveBeenCalled();
    expect(runAgent).not.toHaveBeenCalled();
    expect(answerChannel.sendTyping).not.toHaveBeenCalled();
    expect(JSON.stringify(getSession('tracked'))).toBe(history);
  });
  it('finishes the crossing answer then sends a separate notice and blocks subsequent requests', async () => {
    await seed(49.9);
    const first = message('last');
    await handleChannelMention(first.discord, 'bot-id');
    expect(first.answerChannel.send.mock.calls.map(([text]) => text)).toEqual([
      '<@user> Here is the answer.', expect.stringContaining('monthly allowance'),
    ]);
    expect((await getMonthlyUsage('user')).usedMicroeuros).toBe(50_150_000);
    const next = message('next');
    await handleChannelMention(next.discord, 'bot-id');
    expect(next.input.reply).toHaveBeenCalledWith(expect.stringContaining('monthly allowance'));
    expect(next.input.startThread).not.toHaveBeenCalled();
    expect(runAgent).toHaveBeenCalledOnce();
  });
  it('charges participants to their own allowance and retains usage after thread deletion', async () => {
    await seed(50, 'owner');
    trackThread('tracked', 'owner');
    const participant = message('participant-msg', 'participant', 'tracked');
    await handleThreadMessage(participant.discord, 'bot-id');
    expect((await getMonthlyUsage('participant')).usedMicroeuros).toBe(250_000);
    expect((await getMonthlyUsage('owner')).usedMicroeuros).toBe(50_000_000);
    expect(await findUsageRequest('participant-msg')).toMatchObject({ userId: 'participant', threadId: 'tracked' });
    removeSession('tracked');
    expect((await getMonthlyUsage('participant')).usedMicroeuros).toBe(250_000);
  });
  it('suppresses duplicate message events without another charge or answer', async () => {
    const first = message('duplicate');
    await Promise.all([
      handleChannelMention(first.discord, 'bot-id'), handleChannelMention(first.discord, 'bot-id'),
    ]);
    expect(runAgent).toHaveBeenCalledOnce();
    expect(first.input.startThread).toHaveBeenCalledOnce();
    expect((await getMonthlyUsage('user')).usedMicroeuros).toBe(250_000);
  });
  it('rechecks queued requests after settlement while another user and !usage proceed', async () => {
    await seed(49.9);
    let release!: () => void;
    let entered!: () => void;
    const started = new Promise<void>((resolve) => { entered = resolve; });
    const waiting = new Promise<void>((resolve) => { release = resolve; });
    vi.mocked(runAgent).mockImplementationOnce(async (...args) => {
      entered();
      await waiting;
      await args[5]?.(snapshot());
      return result;
    });
    const first = message('first');
    const second = message('second');
    const pending = handleChannelMention(first.discord, 'bot-id');
    await started;
    const queued = handleChannelMention(second.discord, 'bot-id');
    const usage = message('usage');
    usage.input.content = '<@bot-id> !usage';
    await handleChannelMention(usage.discord, 'bot-id');
    expect(usage.input.reply).toHaveBeenCalledWith(expect.stringContaining('Used:       99%'));
    await handleChannelMention(message('other', 'other-user').discord, 'bot-id');
    expect(runAgent).toHaveBeenCalledTimes(2);
    expect(second.input.startThread).not.toHaveBeenCalled();
    release();
    await Promise.all([pending, queued]);
    expect(second.input.reply).toHaveBeenCalledWith(expect.stringContaining('monthly allowance'));
    expect(runAgent).toHaveBeenCalledTimes(2);
  });
  it('pins a crossing request to September and admits a queued request in October', async () => {
    await seed(49.9);
    let entered!: () => void;
    let release!: () => void;
    const started = new Promise<void>((resolve) => { entered = resolve; });
    const waiting = new Promise<void>((resolve) => { release = resolve; });
    vi.mocked(runAgent).mockImplementationOnce(async (...args) => {
      entered();
      await waiting;
      await args[5]?.(snapshot());
      return result;
    });
    const first = message('sept');
    const pending = handleChannelMention(first.discord, 'bot-id');
    await started;
    const queued = handleChannelMention(message('oct').discord, 'bot-id');
    vi.mocked(Date.now).mockReturnValue(Date.parse('2026-10-01T00:00:01Z'));
    release();
    await Promise.all([pending, queued]);
    expect(await findUsageRequest('sept')).toMatchObject({ month: '2026-09' });
    expect(await findUsageRequest('oct')).toMatchObject({ month: '2026-10' });
    expect((await getMonthlyUsage('user', '2026-09')).usedMicroeuros).toBe(50_150_000);
    expect((await getMonthlyUsage('user', '2026-10')).usedMicroeuros).toBe(250_000);
  });
  it.each(['failure', 'empty', 'delivery'])('retains known costs after %s', async (kind) => {
    vi.mocked(runAgent).mockImplementationOnce(async (...args) => {
      await args[5]?.({ ...snapshot(1, kind === 'failure' ? 'failed' : 'completed'), unknownUsageCalls: kind === 'failure' ? 1 : 0 });
      if (kind === 'failure') throw new Error('SAP failed');
      return { ...result, text: kind === 'empty' ? '   ' : result.text };
    });
    const first = message('charged');
    if (kind === 'delivery') first.answerChannel.send.mockRejectedValueOnce(new Error('Discord delivery failed'));
    await handleChannelMention(first.discord, 'bot-id');
    expect((await getMonthlyUsage('user')).usedMicroeuros).toBe(1_000_000);
    expect(await findUsageRequest('charged')).toMatchObject({ status: kind === 'failure' ? 'failed' : 'completed' });
  });
  it('uses a configured allowance and never blocks based on rounded display amounts', async () => {
    await initInMemoryUsageStore(10);
    await seed(9.999999);
    const first = message('custom');
    await handleChannelMention(first.discord, 'bot-id');
    expect(runAgent).toHaveBeenCalledOnce();
    expect(first.answerChannel.send).toHaveBeenLastCalledWith(expect.stringContaining('100% of your monthly allowance'));
  });
  it('stops further paid work on accounting failure and replies locally for !usage', async () => {
    vi.mocked(runAgent).mockImplementationOnce(async (...args) => {
      await args[5]?.({ ...snapshot(), estimate: { available: false, reason: 'pricing disappeared' } });
      return result;
    });
    const first = message('broken');
    await handleChannelMention(first.discord, 'bot-id');
    expect(first.answerChannel.send).toHaveBeenCalledWith(`<@user> ${USAGE_UNAVAILABLE_RESPONSE}`);
    const next = message('next');
    await handleChannelMention(next.discord, 'bot-id');
    expect(next.input.reply).toHaveBeenCalledWith(`<@user> ${USAGE_UNAVAILABLE_RESPONSE}`);
    expect(next.input.startThread).not.toHaveBeenCalled();
    const usage = message('usage');
    usage.input.content = '<@bot-id> !usage';
    await handleChannelMention(usage.discord, 'bot-id');
    expect(usage.input.reply).toHaveBeenCalledWith(`<@user> ${USAGE_UNAVAILABLE_RESPONSE}`);
    expect(runAgent).toHaveBeenCalledOnce();
    expect(classifyMessage).toHaveBeenCalledOnce();
  });
});
