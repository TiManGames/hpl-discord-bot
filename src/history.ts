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
}

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
