import type { ModelMessage } from 'ai';

export interface Session {
  gameId: string;
  docsRoot: string;
  messages: ModelMessage[];
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

export function appendUserMessage(threadId: string, content: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'user', content });
}

export function appendAssistantMessage(threadId: string, content: string): void {
  const session = sessions.get(threadId);
  if (!session) return;
  session.messages.push({ role: 'assistant', content: [{ type: 'text', text: content }] });
}
