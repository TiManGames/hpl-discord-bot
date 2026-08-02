import { describe, it, expect, beforeEach } from 'vitest';
import {
  setSession,
  getSession,
  hasSession,
  appendUserMessage,
  appendAssistantMessage,
  type Session,
} from './history.js';

// Each test uses a unique thread id so the module-level Map doesn't leak state.
let threadId: string;
let counter = 0;

function newSession(): Session {
  return { gameId: 'hpl2', docsRoot: '/docs/hpl2', messages: [] };
}

beforeEach(() => {
  threadId = `thread-${counter++}`;
});

describe('session lifecycle', () => {
  it('hasSession is false for an unknown thread', () => {
    expect(hasSession(threadId)).toBe(false);
    expect(getSession(threadId)).toBeUndefined();
  });

  it('stores and retrieves a session', () => {
    const session = newSession();
    setSession(threadId, session);
    expect(hasSession(threadId)).toBe(true);
    expect(getSession(threadId)).toBe(session);
  });
});

describe('appendUserMessage', () => {
  it('appends a user turn to a tracked session', () => {
    setSession(threadId, newSession());
    appendUserMessage(threadId, 'hello');
    expect(getSession(threadId)!.messages).toEqual([
      { role: 'user', content: 'hello' },
    ]);
  });

  it('is a no-op for an unknown thread (no throw)', () => {
    expect(() => appendUserMessage('ghost', 'hi')).not.toThrow();
    expect(hasSession('ghost')).toBe(false);
  });
});

describe('appendAssistantMessage', () => {
  it('appends the assistant reply as a structured text block', () => {
    setSession(threadId, newSession());
    appendAssistantMessage(threadId, 'the answer');
    expect(getSession(threadId)!.messages).toEqual([
      { role: 'assistant', content: [{ type: 'text', text: 'the answer' }] },
    ]);
  });

  it('is a no-op for an unknown thread', () => {
    expect(() => appendAssistantMessage('ghost', 'x')).not.toThrow();
  });
});

describe('conversation ordering', () => {
  it('preserves interleaved user/assistant turns in order', () => {
    setSession(threadId, newSession());
    appendUserMessage(threadId, 'q1');
    appendAssistantMessage(threadId, 'a1');
    appendUserMessage(threadId, 'q2');

    const roles = getSession(threadId)!.messages.map((m) => m.role);
    expect(roles).toEqual(['user', 'assistant', 'user']);
  });
});
