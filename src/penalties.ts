/**
 * Persistent, per-user penalty store backed by NeDB.
 *
 * Each Discord user accumulates penalties (issued either by the hard-word regex
 * guard or the LLM moderation classifier). Once a user reaches PENALTY_LIMIT
 * they are rate limited for RATE_LIMIT_MINUTES, measured from the moment they
 * reached the limit. When the window expires their count is reset to 0.
 *
 * The BOT owns all counting and time-window logic here — the LLM never counts.
 * The pure functions (evaluateRateLimit / applyPenalty) hold the decision logic
 * and are unit-tested without touching NeDB.
 */
import { createRequire } from 'module';

// @seald-io/nedb ships a CommonJS default export that merges a class with a
// namespace; under NodeNext, TS resolves the default as a namespace and refuses
// to construct it. Load the constructor via createRequire and describe the
// (small) async surface we use with a local interface for type safety.
const require = createRequire(import.meta.url);

interface NedbConstructor {
  new <T>(options: { filename?: string; inMemoryOnly?: boolean; autoload?: boolean }): NedbDatastore<T>;
}

interface NedbDatastore<T> {
  loadDatabaseAsync(): Promise<void>;
  ensureIndexAsync(options: { fieldName: string; unique?: boolean }): Promise<void>;
  findOneAsync(query: Partial<T>): Promise<T | null>;
  updateAsync(query: Partial<T>, update: T, options: { upsert?: boolean }): Promise<unknown>;
  removeAsync(query: Partial<T>, options: { multi?: boolean }): Promise<number>;
}

const Datastore = require('@seald-io/nedb') as NedbConstructor;

export interface PenaltyRecord {
  _id: string;                   // Discord user id (NeDB primary key)
  penaltyCount: number;          // 0..PENALTY_LIMIT
  lastPenaltyAt: number | null;  // epoch ms of the moment the user REACHED the limit; null otherwise
  rateLimited: boolean;          // true once at limit; cleared on window-expiry reset
}

// Number of penalties a user may accrue before being rate limited. Locked to 5.
export const PENALTY_LIMIT = 5;

// How long (minutes) a user stays rate limited after reaching the limit.
// Follows the Number(process.env.X ?? default) pattern used in agent.ts.
export const RATE_LIMIT_MINUTES = Number(process.env.RATE_LIMIT_MINUTES ?? 1);

const DB_PATH = process.env.PENALTY_DB_PATH ?? 'data/penalties.db';

let db: NedbDatastore<PenaltyRecord> | undefined;

/** Load the datastore from disk. Call once at startup before the bot logs in. */
export async function initPenaltyStore(dbPath = DB_PATH): Promise<void> {
  db = new Datastore<PenaltyRecord>({ filename: dbPath, autoload: false });
  await db.loadDatabaseAsync();
  await db.ensureIndexAsync({ fieldName: '_id', unique: true });
}

/** For tests — load an in-memory store and clear any prior instance. */
export async function initInMemoryStore(): Promise<void> {
  db = new Datastore<PenaltyRecord>({ inMemoryOnly: true, autoload: false });
  await db.loadDatabaseAsync();
  await db.ensureIndexAsync({ fieldName: '_id', unique: true });
}

function requireDb(): NedbDatastore<PenaltyRecord> {
  if (!db) throw new Error('Penalty store not initialised — call initPenaltyStore() first');
  return db;
}

function freshRecord(userId: string): PenaltyRecord {
  return { _id: userId, penaltyCount: 0, lastPenaltyAt: null, rateLimited: false };
}

/**
 * Fetch a user's record. First-time users get a fresh zero-record that is NOT
 * persisted — nothing is written until they actually earn a penalty.
 */
export async function getPenalty(userId: string): Promise<PenaltyRecord> {
  const found = await requireDb().findOneAsync({ _id: userId });
  return found ?? freshRecord(userId);
}

/**
 * The single funnel for issuing a penalty (requirement 4). Increments the count,
 * and — if this increment reaches the limit — stamps lastPenaltyAt so the
 * rate-limit window begins. Persists and returns the updated record.
 */
export async function addPenalty(userId: string, now = Date.now()): Promise<PenaltyRecord> {
  const current = await getPenalty(userId);
  const updated = applyPenalty(current, now);
  await requireDb().updateAsync({ _id: userId }, updated, { upsert: true });
  return updated;
}

/** Reset a user back to a clean slate (count 0, not rate limited). */
export async function resetPenalty(userId: string): Promise<PenaltyRecord> {
  const cleared = freshRecord(userId);
  await requireDb().updateAsync({ _id: userId }, cleared, { upsert: true });
  return cleared;
}

/** Test helper — wipe all records. */
export async function _clearAll(): Promise<void> {
  await requireDb().removeAsync({}, { multi: true });
}

// ---------------------------------------------------------------------------
// Pure decision logic (no I/O) — unit-tested directly.
// ---------------------------------------------------------------------------

/**
 * Decide whether a user is currently rate limited, and if so how much of the
 * window remains. A user below the limit (or with no stamped timestamp) is
 * never limited.
 */
export function evaluateRateLimit(
  record: Pick<PenaltyRecord, 'penaltyCount' | 'lastPenaltyAt'>,
  now: number,
  limit = PENALTY_LIMIT,
  windowMinutes = RATE_LIMIT_MINUTES,
): { limited: boolean; remainingMs: number } {
  if (record.penaltyCount < limit || record.lastPenaltyAt == null) {
    return { limited: false, remainingMs: 0 };
  }
  const remainingMs = windowMinutes * 60_000 - (now - record.lastPenaltyAt);
  return { limited: remainingMs > 0, remainingMs: Math.max(remainingMs, 0) };
}

/**
 * Produce the next record after issuing one penalty. Count is capped at the
 * limit. When the count reaches the limit, the user becomes rate limited and
 * lastPenaltyAt is stamped (or re-stamped) to `now` so the window starts fresh.
 */
export function applyPenalty(
  record: PenaltyRecord,
  now: number,
  limit = PENALTY_LIMIT,
): PenaltyRecord {
  const penaltyCount = Math.min(record.penaltyCount + 1, limit);
  const reached = penaltyCount >= limit;
  return {
    ...record,
    penaltyCount,
    rateLimited: reached,
    lastPenaltyAt: reached ? now : record.lastPenaltyAt,
  };
}
