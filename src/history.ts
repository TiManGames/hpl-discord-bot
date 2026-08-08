import type { ModelMessage, UserContent } from 'ai';
import type { EvidenceLedger } from './evidence.js';
import { mergeEvidenceLedger } from './evidence.js';
import { docsRootForGame } from './channels.js';
import { saveThread, deleteThread, type ThreadRecord } from './threads.js';

export interface Session {
  gameId: string;
  docsRoot: string;
  /** Discord user ID of whoever opened the thread; they may talk without tagging the bot. */
  authorId?: string;
  /** Per-thread workspace holding user-attached files, once any have been saved. */
  attachmentsRoot?: string;
  messages: ModelMessage[];
  evidenceLedger?: EvidenceLedger;
  /**
   * Rolling buffer of each participant's most recent raw message texts, keyed by
   * Discord user ID. Kept separate from `messages` because penalized messages are
   * excluded from the answer history but still matter as steering context for the
   * moderation classifier. Trimmed to the last few per user.
   */
  recentUserTexts?: Record<string, string[]>;
}

/** How many of a user's messages the moderation classifier considers together. */
const MODERATION_CONTEXT_WINDOW = 4;

const sessions = new Map<string, Session>();

/**
 * Persist a thread's current session to the durable store, without awaiting.
 * The in-memory Map is the synchronous source of truth for the live reply path;
 * the store is a best-effort mirror, so a slow or failed write must never block
 * or break a reply. threads.ts logs and swallows its own write errors.
 */
function persist(threadId: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  void saveThread(threadId, session);
}

export function hasSession(threadId: string): boolean {
  return sessions.has(threadId);
}

/** All currently tracked thread ids — used for startup reconciliation. */
export function trackedThreadIds(): string[] {
  return [...sessions.keys()];
}

export function getSession(threadId: string): Session | undefined {
  return sessions.get(threadId);
}

export function setSession(threadId: string, session: Session): void {
  sessions.set(threadId, session);
  persist(threadId);
}

/**
 * Drop a thread from the live Map and the durable store. Called when a thread is
 * deleted on Discord (real-time listener or startup reconciliation).
 */
export function removeSession(threadId: string): void {
  sessions.delete(threadId);
  void deleteThread(threadId);
}

/**
 * Rebuild the in-memory Map from persisted records at startup. docsRoot is
 * re-derived from gameId (never trusted from disk). Call once before the client
 * logs in, after initThreadStore() has returned the records.
 */
export function restoreSessions(records: ThreadRecord[]): number {
  for (const record of records) {
    sessions.set(record._id, {
      gameId: record.gameId,
      docsRoot: docsRootForGame(record.gameId),
      authorId: record.authorId,
      attachmentsRoot: record.attachmentsRoot,
      messages: record.messages ?? [],
      evidenceLedger: record.evidenceLedger,
      recentUserTexts: record.recentUserTexts,
    });
  }
  return records.length;
}

/** Record the attachments workspace on a live session (mid-thread uploads). */
export function setAttachmentsRoot(threadId: string, root: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.attachmentsRoot = root;
  persist(threadId);
}

export function appendUserMessage(threadId: string, content: string | UserContent): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'user', content });
  persist(threadId);
}

export function appendAssistantMessage(threadId: string, content: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'assistant', content: [{ type: 'text', text: content }] });
  persist(threadId);
}

/**
 * Merge an evidence-ledger delta into a thread's session and persist. Replaces
 * the two inline `session.evidenceLedger = mergeEvidenceLedger(...)` sites so
 * every ledger update also writes through to the durable store. No-op for an
 * untracked thread.
 */
export function mergeEvidence(threadId: string, delta: EvidenceLedger | undefined): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.evidenceLedger = mergeEvidenceLedger(session.evidenceLedger, delta);
  persist(threadId);
}

/**
 * Return a given user's prior message texts in this thread (most recent last),
 * up to the moderation context window minus the current message — i.e. at most
 * the 3 previous. Empty when the thread is untracked or the user is new to it.
 */
export function recentUserContext(threadId: string, userId: string): string[] {
  const session = sessions.get(threadId);
  if (!session?.recentUserTexts) return [];
  const prior = session.recentUserTexts[userId] ?? [];
  return prior.slice(-(MODERATION_CONTEXT_WINDOW - 1));
}

/**
 * Record a user's message text into their rolling moderation buffer, trimmed to
 * the context window. Called for every message that reaches moderation —
 * including ones that are later penalized — so steering across turns stays
 * visible to the classifier. No-op for an untracked thread.
 */
export function recordUserContext(threadId: string, userId: string, text: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  const buffer = (session.recentUserTexts ??= {});
  const prior = buffer[userId] ?? [];
  buffer[userId] = [...prior, text].slice(-MODERATION_CONTEXT_WINDOW);
  persist(threadId);
}

