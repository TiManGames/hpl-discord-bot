import { describe, it, expect, beforeEach } from 'vitest';
import {
  setSession,
  getSession,
  hasSession,
  appendUserMessage,
  appendAssistantMessage,
  recentUserContext,
  recordUserContext,
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

describe('moderation context window', () => {
  it('is empty for an untracked thread or a user new to the thread', () => {
    expect(recentUserContext('ghost', 'u1')).toEqual([]);
    setSession(threadId, newSession());
    expect(recentUserContext(threadId, 'u1')).toEqual([]);
  });

  it('returns up to the 3 most recent PRIOR messages, excluding the current one', () => {
    setSession(threadId, newSession());
    // Snapshot-before-record is how the caller uses these: prior first, then record.
    expect(recentUserContext(threadId, 'u1')).toEqual([]);
    recordUserContext(threadId, 'u1', 'm1');

    expect(recentUserContext(threadId, 'u1')).toEqual(['m1']);
    recordUserContext(threadId, 'u1', 'm2');

    expect(recentUserContext(threadId, 'u1')).toEqual(['m1', 'm2']);
    recordUserContext(threadId, 'u1', 'm3');

    expect(recentUserContext(threadId, 'u1')).toEqual(['m1', 'm2', 'm3']);
    recordUserContext(threadId, 'u1', 'm4');

    // Only the last 3 prior are ever returned (window of 4 including current).
    expect(recentUserContext(threadId, 'u1')).toEqual(['m2', 'm3', 'm4']);
    recordUserContext(threadId, 'u1', 'm5');
    expect(recentUserContext(threadId, 'u1')).toEqual(['m3', 'm4', 'm5']);
  });

  it('keeps each user’s buffer separate', () => {
    setSession(threadId, newSession());
    recordUserContext(threadId, 'u1', 'a1');
    recordUserContext(threadId, 'u2', 'b1');
    recordUserContext(threadId, 'u1', 'a2');

    expect(recentUserContext(threadId, 'u1')).toEqual(['a1', 'a2']);
    expect(recentUserContext(threadId, 'u2')).toEqual(['b1']);
  });

  it('recordUserContext is a no-op for an unknown thread', () => {
    expect(() => recordUserContext('ghost', 'u1', 'x')).not.toThrow();
    expect(hasSession('ghost')).toBe(false);
  });
});
