import { describe, it, expect, beforeEach } from 'vitest';
import {
  evaluateRateLimit,
  applyPenalty,
  initInMemoryStore,
  getPenalty,
  addPenalty,
  resetPenalty,
  _clearAll,
  PENALTY_LIMIT,
  type PenaltyRecord,
} from './penalties.js';

function record(overrides: Partial<PenaltyRecord> = {}): PenaltyRecord {
  return { _id: 'user-1', penaltyCount: 0, lastPenaltyAt: null, rateLimited: false, ...overrides };
}

const NOW = 1_700_000_000_000; // fixed epoch ms for deterministic tests

describe('evaluateRateLimit', () => {
  it('is not limited when below the penalty limit', () => {
    const r = evaluateRateLimit(record({ penaltyCount: PENALTY_LIMIT - 1, lastPenaltyAt: NOW }), NOW);
    expect(r).toEqual({ limited: false, remainingMs: 0 });
  });

  it('is not limited when at the limit but no timestamp was stamped (defensive)', () => {
    const r = evaluateRateLimit(record({ penaltyCount: PENALTY_LIMIT, lastPenaltyAt: null }), NOW);
    expect(r).toEqual({ limited: false, remainingMs: 0 });
  });

  it('is limited within the window, reporting remaining time', () => {
    // 1-minute window, just reached the limit → ~60s remaining.
    const r = evaluateRateLimit(
      record({ penaltyCount: PENALTY_LIMIT, lastPenaltyAt: NOW }),
      NOW,
      PENALTY_LIMIT,
      1,
    );
    expect(r.limited).toBe(true);
    expect(r.remainingMs).toBe(60_000);
  });

  it('is not limited once the window has elapsed', () => {
    const r = evaluateRateLimit(
      record({ penaltyCount: PENALTY_LIMIT, lastPenaltyAt: NOW - 61_000 }),
      NOW,
      PENALTY_LIMIT,
      1,
    );
    expect(r.limited).toBe(false);
    expect(r.remainingMs).toBe(0);
  });

  it('honours a custom window length', () => {
    const r = evaluateRateLimit(
      record({ penaltyCount: PENALTY_LIMIT, lastPenaltyAt: NOW }),
      NOW,
      PENALTY_LIMIT,
      30,
    );
    expect(r.limited).toBe(true);
    expect(r.remainingMs).toBe(30 * 60_000);
  });
});

describe('applyPenalty', () => {
  it('increments below the limit without stamping a timestamp', () => {
    const next = applyPenalty(record({ penaltyCount: 0 }), NOW);
    expect(next.penaltyCount).toBe(1);
    expect(next.rateLimited).toBe(false);
    expect(next.lastPenaltyAt).toBeNull();
  });

  it('stamps the timestamp and rate-limits when the increment reaches the limit', () => {
    const next = applyPenalty(record({ penaltyCount: PENALTY_LIMIT - 1 }), NOW);
    expect(next.penaltyCount).toBe(PENALTY_LIMIT);
    expect(next.rateLimited).toBe(true);
    expect(next.lastPenaltyAt).toBe(NOW);
  });

  it('caps the count at the limit and re-stamps the timestamp when already at limit', () => {
    const later = NOW + 5_000;
    const next = applyPenalty(record({ penaltyCount: PENALTY_LIMIT, lastPenaltyAt: NOW, rateLimited: true }), later);
    expect(next.penaltyCount).toBe(PENALTY_LIMIT);
    expect(next.rateLimited).toBe(true);
    expect(next.lastPenaltyAt).toBe(later);
  });
});

describe('NeDB-backed store', () => {
  beforeEach(async () => {
    await initInMemoryStore();
    await _clearAll();
  });

  it('returns a fresh zero-record for a first-time user without persisting it', async () => {
    const rec = await getPenalty('newbie');
    expect(rec).toEqual({ _id: 'newbie', penaltyCount: 0, lastPenaltyAt: null, rateLimited: false });
  });

  it('persists increments and stamps the timestamp on reaching the limit', async () => {
    for (let i = 1; i < PENALTY_LIMIT; i++) {
      const r = await addPenalty('user-x', NOW);
      expect(r.penaltyCount).toBe(i);
      expect(r.rateLimited).toBe(false);
    }
    const atLimit = await addPenalty('user-x', NOW);
    expect(atLimit.penaltyCount).toBe(PENALTY_LIMIT);
    expect(atLimit.rateLimited).toBe(true);
    expect(atLimit.lastPenaltyAt).toBe(NOW);

    // Re-reading returns the persisted record.
    const reread = await getPenalty('user-x');
    expect(reread.penaltyCount).toBe(PENALTY_LIMIT);
    expect(reread.rateLimited).toBe(true);
  });

  it('resets a user back to a clean slate', async () => {
    await addPenalty('user-y', NOW);
    await resetPenalty('user-y');
    const rec = await getPenalty('user-y');
    expect(rec).toEqual({ _id: 'user-y', penaltyCount: 0, lastPenaltyAt: null, rateLimited: false });
  });
});
