import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mkdtemp, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';
import type { RequestUsageSnapshot } from './agent.js';
import {
  beginUsageRequest, eurosToMicroeuros, findUsageRequest, formatMonthlyLimitNotice,
  formatMonthlyUsage, getMonthlyUsage, initInMemoryUsageStore, initUsageStore,
  isMonthlyLimitReached, queueUserRequest, readMonthlyLimit, saveUsageSnapshot,
  usageRequest, usageStoreHealthy, utcMonth, validateUsageConfiguration,
} from './usage.js';

const NOW = Date.parse('2026-09-29T12:00:00Z');
function snapshot(euros: number, overrides: Partial<RequestUsageSnapshot> = {}): RequestUsageSnapshot {
  return {
    modelId: 'gpt-5.6-sol', status: 'completed', inputTokens: 5000, uncachedInputTokens: 5000,
    outputTokens: 1000, cacheReadTokens: 0, cacheWriteTokens: 0, unknownUsageCalls: 0,
    estimate: { available: true, capacityUnits: euros / 0.45, euros }, ...overrides,
  };
}

beforeEach(async () => {
  vi.stubEnv('AICORE_MODEL', 'gpt-5.6-sol');
  vi.stubEnv('AICORE_MODEL_CU_RATES', undefined);
  vi.stubEnv('AICORE_EUR_PER_CU', undefined);
  vi.stubEnv('USER_MONTHLY_LIMIT_EUR', undefined);
  await initInMemoryUsageStore();
});
afterEach(() => vi.unstubAllEnvs());

describe('monthly usage accounting', () => {
  it('gives new users zero usage and defaults to EUR 50', async () => {
    expect(await getMonthlyUsage('new', '2026-09')).toEqual({
      month: '2026-09', usedMicroeuros: 0, limitMicroeuros: 50_000_000, partial: false,
    });
  });

  it('sums across threads for the sender while keeping users and months independent', async () => {
    for (const [id, user, date, thread, amount] of [
      ['a', 'u1', NOW, 't1', 10], ['b', 'u1', NOW, 't2', 20],
      ['c', 'u2', NOW, 't1', 7], ['d', 'u1', Date.parse('2026-10-01T00:00:00Z'), 't1', 2],
    ] as const) {
      const request = usageRequest(id, user, date);
      await beginUsageRequest(request, thread);
      await saveUsageSnapshot(request, snapshot(amount));
    }
    expect((await getMonthlyUsage('u1', '2026-09')).usedMicroeuros).toBe(30_000_000);
    expect((await getMonthlyUsage('u2', '2026-09')).usedMicroeuros).toBe(7_000_000);
    expect((await getMonthlyUsage('u1', '2026-10')).usedMicroeuros).toBe(2_000_000);
    expect(await findUsageRequest('c')).toMatchObject({ userId: 'u2', threadId: 't1' });
  });

  it('replaces cumulative snapshots and rounds the request total only once', async () => {
    const request = usageRequest('request', 'user', NOW);
    await beginUsageRequest(request, 'thread');
    for (const amount of [0.0000004, 0.0000008, 1.2345678, 1.2345678]) {
      await saveUsageSnapshot(request, snapshot(amount));
    }
    expect((await getMonthlyUsage('user', request.month)).usedMicroeuros).toBe(1_234_568);
    expect(await findUsageRequest(request.requestId)).toMatchObject({ status: 'completed', partial: false });
  });

  it('rejects duplicate receipts and stops further accounting after a write failure', async () => {
    const request = usageRequest('duplicate', 'user', NOW);
    await beginUsageRequest(request);
    await expect(beginUsageRequest(request)).rejects.toThrow('Usage tracking is unavailable');
    expect(usageStoreHealthy()).toBe(false);
    await expect(getMonthlyUsage('user')).rejects.toThrow('Usage tracking is unavailable');
  });

  it('records known usage on failed calls and surfaces partial totals', async () => {
    const request = usageRequest('failed', 'user', NOW);
    await beginUsageRequest(request);
    await saveUsageSnapshot(request, snapshot(3, { status: 'failed', unknownUsageCalls: 1 }));
    const usage = await getMonthlyUsage('user', request.month);
    expect(usage).toMatchObject({ usedMicroeuros: 3_000_000, partial: true });
    expect(formatMonthlyUsage(usage)).toContain('Some usage could not be measured.');
  });

  it('fails closed on unavailable pricing or a missing receipt', async () => {
    const request = usageRequest('unknown', 'user', NOW);
    await expect(saveUsageSnapshot(request, snapshot(1))).rejects.toThrow('Usage tracking is unavailable');
    expect(usageStoreHealthy()).toBe(false);
    await initInMemoryUsageStore();
    await beginUsageRequest(request);
    await expect(saveUsageSnapshot(request, snapshot(0, {
      estimate: { available: false, reason: 'unknown model' },
    }))).rejects.toThrow('Usage tracking is unavailable');
    expect(usageStoreHealthy()).toBe(false);
  });

  it('pins a request crossing midnight to its admission month', async () => {
    const request = usageRequest('midnight', 'user', Date.parse('2026-09-30T23:59:59Z'));
    await beginUsageRequest(request);
    await saveUsageSnapshot(request, snapshot(50));
    expect(isMonthlyLimitReached(await getMonthlyUsage('user', '2026-09'))).toBe(true);
    expect((await getMonthlyUsage('user', '2026-10')).usedMicroeuros).toBe(0);
  });

  it('restores disk balances and marks an in-flight receipt partial on restart', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'hpl-usage-'));
    try {
      const path = join(dir, 'usage.db');
      await initUsageStore(path);
      const finished = usageRequest('finished', 'user', NOW);
      const running = usageRequest('running', 'user', NOW);
      await beginUsageRequest(finished, 'thread');
      await saveUsageSnapshot(finished, snapshot(4));
      await beginUsageRequest(running);
      await saveUsageSnapshot(running, snapshot(2, { status: 'running' }));
      await initUsageStore(path);
      expect(await getMonthlyUsage('user', '2026-09')).toMatchObject({ usedMicroeuros: 6_000_000, partial: true });
      expect(await findUsageRequest('running')).toMatchObject({ status: 'interrupted', partial: true });
      expect(await findUsageRequest('finished')).toMatchObject({ status: 'completed', partial: false });
    } finally {
      await initInMemoryUsageStore();
      await rm(dir, { recursive: true, force: true });
    }
  });

  it('fails initialization on unreadable storage and does not leave the old store usable', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'hpl-usage-unreadable-'));
    try {
      await expect(initUsageStore(dir)).rejects.toThrow(); // A directory cannot be a datastore file.
      expect(usageStoreHealthy()).toBe(false);
      await expect(getMonthlyUsage('user')).rejects.toThrow('Usage tracking is unavailable');
    } finally {
      await initInMemoryUsageStore();
      await rm(dir, { recursive: true, force: true });
    }
  });
});

describe('configuration and display', () => {
  it.each(['', ' ', '0', '-1', 'NaN', 'Infinity', 'broken', '1e100', '0.0000001'])(
    'rejects invalid allowance %s', (value) => {
      expect(() => readMonthlyLimit({ USER_MONTHLY_LIMIT_EUR: value })).toThrow();
    },
  );
  it('accepts a configurable allowance and validates the active model pricing', async () => {
    await initInMemoryUsageStore(12.5);
    expect((await getMonthlyUsage('user')).limitMicroeuros).toBe(12_500_000);
    expect(validateUsageConfiguration({ AICORE_MODEL: 'gpt-5.6-sol' })).toBe(50_000_000);
    for (const env of [
      {}, { AICORE_MODEL: 'unknown' }, { AICORE_MODEL: 'gpt-5.6-sol', AICORE_MODEL_CU_RATES: 'broken' },
      { AICORE_MODEL: 'gpt-5.6-sol', AICORE_EUR_PER_CU: '-1' },
    ]) expect(() => validateUsageConfiguration(env)).toThrow();
    expect(() => eurosToMicroeuros(Infinity)).toThrow();
  });
  it('formats the agreed ASCII reply and UTC reset', () => {
    expect(formatMonthlyUsage({ month: '2026-09', usedMicroeuros: 20_000_000, limitMicroeuros: 50_000_000, partial: false })).toBe(
      'Monthly usage — September 2026\n```text\n[########------------] 40%\n' +
      'Used:       40%\nRemaining:  60%\n' +
      'Resets:     1 Oct 2026, 00:00 UTC\n```\nUsage is estimated.',
    );
  });
  it('does not block on display rounding and clamps overshoot to a full bar', () => {
    const usage = { month: '2026-12', usedMicroeuros: 49_999_999, limitMicroeuros: 50_000_000, partial: false };
    expect(isMonthlyLimitReached(usage)).toBe(false);
    expect(formatMonthlyUsage(usage)).toContain('99%');
    const reached = { ...usage, usedMicroeuros: 50_000_000 };
    expect(isMonthlyLimitReached(reached)).toBe(true);
    expect(formatMonthlyUsage({ ...usage, usedMicroeuros: 51_000_000 })).toContain('[####################] 100%');
    expect(formatMonthlyUsage({ ...usage, usedMicroeuros: 51_000_000 })).toContain('Remaining:  0%');
    expect(formatMonthlyLimitNotice(reached)).toContain('100% of your monthly allowance');
    expect(formatMonthlyLimitNotice(reached)).not.toMatch(/EUR|€/);
    expect(formatMonthlyLimitNotice(reached)).toContain('1 Jan 2027, 00:00 UTC');
    expect(utcMonth(Date.parse('2027-01-01T01:00:00+02:00'))).toBe('2026-12');
  });
});

it('serializes one user, allows other users, and releases a rejected queue', async () => {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  const events: string[] = [];
  const first = queueUserRequest('a', async () => { events.push('first'); await gate; events.push('settled'); });
  const second = queueUserRequest('a', async () => { events.push('second'); });
  await queueUserRequest('b', async () => { events.push('other'); });
  expect(events).toEqual(['first', 'other']);
  release();
  await Promise.all([first, second]);
  expect(events).toEqual(['first', 'other', 'settled', 'second']);
  await expect(queueUserRequest('a', async () => { throw new Error('failed'); })).rejects.toThrow('failed');
  expect(await queueUserRequest('a', async () => 'recovered')).toBe('recovered');
});
