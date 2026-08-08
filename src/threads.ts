/**
 * Persistent store of tracked-thread sessions, backed by NeDB.
 *
 * The bot tracks each Discord thread it opens as an in-memory Session
 * (see history.ts). That Map is the synchronous source of truth during a run;
 * this store is its durable mirror so a restart does not lose live threads.
 *
 * Mirrors the penalties.ts pattern: a NeDB datastore under data/, loaded before
 * the client logs in. history.ts writes through to it on every mutation and
 * restores the Map from it at startup. Deleted-thread cleanup (both a real-time
 * listener and a startup reconciliation) removes records here.
 *
 * Two serialization rules keep the on-disk shape sound:
 *  - Image message parts hold a raw ArrayBuffer, which is not JSON-safe and is
 *    transient anyway. We replace each with a short text placeholder before
 *    persisting, so restored history stays coherent without carrying binary.
 *  - docsRoot is an absolute path derived from gameId. We do NOT persist it;
 *    history.ts re-derives it on restore, so moving the install never leaves a
 *    stale path in the DB.
 */
import { createRequire } from 'module';
import type { ModelMessage } from 'ai';
import type { EvidenceLedger } from './evidence.js';
import type { Session } from './history.js';

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
  findAsync(query: Partial<T>): Promise<T[]>;
  updateAsync(query: Partial<T>, update: T, options: { upsert?: boolean }): Promise<unknown>;
  removeAsync(query: Partial<T>, options: { multi?: boolean }): Promise<number>;
}

const Datastore = require('@seald-io/nedb') as NedbConstructor;

/**
 * The durable projection of a Session. Everything here is JSON-safe. docsRoot is
 * intentionally omitted — it is re-derived from gameId on restore.
 */
export interface ThreadRecord {
  _id: string;                                  // Discord thread id (NeDB primary key)
  gameId: string;
  authorId?: string;
  attachmentsRoot?: string;
  messages: ModelMessage[];                     // image parts already stripped to placeholders
  evidenceLedger?: EvidenceLedger;
  recentUserTexts?: Record<string, string[]>;
  updatedAt: number;                            // epoch ms of last write
}

const DB_PATH = process.env.THREADS_DB_PATH ?? 'data/threads.db';

/** Placeholder that replaces a transient image part in persisted history. */
export const IMAGE_PLACEHOLDER = '[image omitted after restart]';

let db: NedbDatastore<ThreadRecord> | undefined;

/**
 * Load the datastore from disk and return every stored record. Call once at
 * startup before the bot logs in; hand the records to history.restoreSessions.
 */
export async function initThreadStore(dbPath = DB_PATH): Promise<ThreadRecord[]> {
  db = new Datastore<ThreadRecord>({ filename: dbPath, autoload: false });
  await db.loadDatabaseAsync();
  await db.ensureIndexAsync({ fieldName: '_id', unique: true });
  return db.findAsync({});
}

/** For tests — load an in-memory store and clear any prior instance. */
export async function initInMemoryThreadStore(): Promise<void> {
  db = new Datastore<ThreadRecord>({ inMemoryOnly: true, autoload: false });
  await db.loadDatabaseAsync();
  await db.ensureIndexAsync({ fieldName: '_id', unique: true });
}

function requireDb(): NedbDatastore<ThreadRecord> {
  if (!db) throw new Error('Thread store not initialised — call initThreadStore() first');
  return db;
}

/** True once a store has been initialised — lets history.ts no-op writes in unit tests. */
export function threadStoreReady(): boolean {
  return db !== undefined;
}

/**
 * Replace every image part in a message history with a short text placeholder.
 * Image parts carry a raw ArrayBuffer (not JSON-serializable) and are transient,
 * so they must not reach the datastore. Text and note parts pass through
 * unchanged; a string-content message is returned as-is.
 */
export function stripImageParts(messages: ModelMessage[]): ModelMessage[] {
  return messages.map((message) => {
    const content = (message as { content?: unknown }).content;
    if (!Array.isArray(content)) return message;
    let changed = false;
    const parts = content.map((part) => {
      if (part && typeof part === 'object' && (part as { type?: string }).type === 'image') {
        changed = true;
        return { type: 'text', text: IMAGE_PLACEHOLDER };
      }
      return part;
    });
    return changed ? ({ ...message, content: parts } as ModelMessage) : message;
  });
}

/** Project a live Session into its durable, JSON-safe record. */
export function toRecord(threadId: string, session: Session, now = Date.now()): ThreadRecord {
  return {
    _id: threadId,
    gameId: session.gameId,
    authorId: session.authorId,
    attachmentsRoot: session.attachmentsRoot,
    messages: stripImageParts(session.messages),
    evidenceLedger: session.evidenceLedger,
    recentUserTexts: session.recentUserTexts,
    updatedAt: now,
  };
}

/**
 * Upsert a thread's session to disk. Best-effort: callers fire this without
 * awaiting, so a write failure logs and is swallowed rather than breaking the
 * live reply path. No-op when no store is initialised (unit tests of history).
 */
export async function saveThread(threadId: string, session: Session, now = Date.now()): Promise<void> {
  if (!db) return;
  try {
    await db.updateAsync({ _id: threadId }, toRecord(threadId, session, now), { upsert: true });
  } catch (err) {
    log('WARN', `Failed to persist thread ${threadId}`, err);
  }
}

/** Remove a thread's record. Best-effort; safe to call for an unknown id. */
export async function deleteThread(threadId: string): Promise<void> {
  if (!db) return;
  try {
    await db.removeAsync({ _id: threadId }, { multi: false });
  } catch (err) {
    log('WARN', `Failed to delete thread record ${threadId}`, err);
  }
}

/** Test helper — wipe all records. */
export async function _clearAll(): Promise<void> {
  await requireDb().removeAsync({}, { multi: true });
}

/** Return every stored record from the current store (used by restore and tests). */
export async function findAllThreads(): Promise<ThreadRecord[]> {
  return requireDb().findAsync({});
}

function log(level: 'INFO' | 'WARN', msg: string, extra?: unknown): void {
  const line = `[${new Date().toISOString()}] [${level}] ${msg}`;
  if (extra !== undefined) console[level === 'WARN' ? 'warn' : 'log'](line, extra);
  else console[level === 'WARN' ? 'warn' : 'log'](line);
}
