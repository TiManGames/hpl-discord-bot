import type { ModelMessage, UserContent } from 'ai';
import type { EvidenceLedger } from './evidence.js';

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

export function hasSession(threadId: string): boolean {
  return sessions.has(threadId);
}

export function getSession(threadId: string): Session | undefined {
  return sessions.get(threadId);
}

export function setSession(threadId: string, session: Session): void {
  sessions.set(threadId, session);
}

/** Record the attachments workspace on a live session (mid-thread uploads). */
export function setAttachmentsRoot(threadId: string, root: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.attachmentsRoot = root;
}

export function appendUserMessage(threadId: string, content: string | UserContent): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'user', content });
}

export function appendAssistantMessage(threadId: string, content: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'assistant', content: [{ type: 'text', text: content }] });
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
}

