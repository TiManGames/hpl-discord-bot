import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Message } from 'discord.js';
import { setSession } from './history.js';

vi.mock('./agent.js', () => ({ runAgent: vi.fn() }));

import { runAgent } from './agent.js';
import {
  findMunshiEmoji,
  handleChannelMention,
  handleMunshiEmoji,
  handleThreadMessage,
  normalizeSpacing,
  renderMunshiHappyEmoji,
  splitForDiscord,
  UNMAPPED_CHANNEL_RESPONSE,
  withUserMention,
} from './bot.js';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('handleChannelMention', () => {
  it('sends the hardcoded guidance reply without starting a thread or calling the LLM', async () => {
    const reply = vi.fn().mockResolvedValue(undefined);
    const startThread = vi.fn();
    const message = {
      channel: { name: 'general', id: 'general' },
      channelId: 'general',
      reply,
      startThread,
    } as unknown as Message;

    await handleChannelMention(message, 'bot-id');

    expect(reply).toHaveBeenCalledOnce();
    expect(reply).toHaveBeenCalledWith(UNMAPPED_CHANNEL_RESPONSE);
    expect(UNMAPPED_CHANNEL_RESPONSE).toBe(
      'Please ask me a question in one of the appropriate modding channels: hpl2, hpl3-soma, hpl3-rebirth and hpl3-bunker.',
    );
    expect(startThread).not.toHaveBeenCalled();
    expect(runAgent).not.toHaveBeenCalled();
  });

  it('tags the initiating user in the LLM reply', async () => {
    vi.mocked(runAgent).mockResolvedValue({
      text: 'Use a callback for this.',
      inputTokens: 10,
      outputTokens: 5,
    });
    const send = vi.fn().mockResolvedValue(undefined);
    const thread = {
      id: 'thread-mention-test',
      name: 'hpl2 — modder',
      send,
      sendTyping: vi.fn().mockResolvedValue(undefined),
    };
    const message = {
      id: 'message-id',
      content: '<@bot-id> How do callbacks work?',
      channel: { name: 'hpl2-modding', id: 'hpl2-channel' },
      channelId: 'hpl2-channel',
      author: { id: 'user-123', username: 'modder', tag: 'modder' },
      react: vi.fn().mockResolvedValue(undefined),
      startThread: vi.fn().mockResolvedValue(thread),
    } as unknown as Message;

    await handleChannelMention(message, 'bot-id');

    expect(runAgent).toHaveBeenCalledOnce();
    expect(send).toHaveBeenCalledWith('<@user-123> Use a callback for this.');
  });

  it('tags the specific user who sent each follow-up message', async () => {
    vi.mocked(runAgent).mockResolvedValue({
      text: 'That follow-up belongs to the second user.',
      inputTokens: 12,
      outputTokens: 7,
    });
    const send = vi.fn().mockResolvedValue(undefined);
    const threadId = 'thread-multi-user-test';
    setSession(threadId, {
      gameId: 'hpl2',
      docsRoot: 'missing-test-docs',
      messages: [],
    });
    const message = {
      content: 'I have a different question.',
      channelId: threadId,
      channel: {
        send,
        sendTyping: vi.fn().mockResolvedValue(undefined),
      },
      author: { id: 'second-user', tag: 'second-user' },
    } as unknown as Message;

    await handleThreadMessage(message);

    expect(runAgent).toHaveBeenCalledOnce();
    expect(send).toHaveBeenCalledWith(
      '<@second-user> That follow-up belongs to the second user.',
    );
  });
});

describe('Munshi emoji easter egg', () => {
  it('recognizes static and animated custom emojis whose names start with munshi_', () => {
    expect(findMunshiEmoji('hello <:munshi_happy:123456789012345678>')).toEqual({
      id: '123456789012345678',
      raw: '<:munshi_happy:123456789012345678>',
    });
    expect(findMunshiEmoji('<a:munshi_dance:987654321098765432>')).toEqual({
      id: '987654321098765432',
      raw: '<a:munshi_dance:987654321098765432>',
    });
    expect(findMunshiEmoji('<:someone_else:123456789012345678>')).toBeNull();
  });

  it('reacts and auto-replies with the same emoji without calling the LLM', async () => {
    const react = vi.fn().mockResolvedValue(undefined);
    const reply = vi.fn().mockResolvedValue(undefined);
    const message = {
      id: 'munshi-message',
      content: '<:munshi_happy:123456789012345678>',
      author: { id: 'user-456', tag: 'munshi-fan' },
      react,
      reply,
    } as unknown as Message;

    expect(await handleMunshiEmoji(message)).toBe(true);

    expect(react).toHaveBeenCalledWith('123456789012345678');
    expect(reply).toHaveBeenCalledWith(
      '<@user-456> <:munshi_happy:123456789012345678>',
    );
    expect(runAgent).not.toHaveBeenCalled();
  });

  it('does nothing when a message has no Munshi custom emoji', async () => {
    const react = vi.fn();
    const reply = vi.fn();
    const message = {
      content: 'ordinary message',
      author: { id: 'user-789', tag: 'modder' },
      react,
      reply,
    } as unknown as Message;

    expect(await handleMunshiEmoji(message)).toBe(false);
    expect(react).not.toHaveBeenCalled();
    expect(reply).not.toHaveBeenCalled();
    expect(runAgent).not.toHaveBeenCalled();
  });
});

describe('withUserMention', () => {
  it('prefixes a Discord user mention to a reply', () => {
    expect(withUserMention('123', 'Answer text')).toBe('<@123> Answer text');
  });
});

describe('renderMunshiHappyEmoji', () => {
  it('turns the LLM shortcode into the guild custom emoji', () => {
    const emoji = {
      name: 'munshi_happy',
      toString: () => '<:munshi_happy:123456789012345678>',
    };
    const message = {
      guild: {
        emojis: {
          cache: { find: (predicate: (value: typeof emoji) => boolean) => predicate(emoji) ? emoji : undefined },
        },
      },
    } as unknown as Message;

    expect(renderMunshiHappyEmoji(message, 'Hello :munshi_happy:')).toBe(
      'Hello <:munshi_happy:123456789012345678>',
    );
  });

  it('leaves the shortcode intact when the guild emoji is unavailable', () => {
    expect(renderMunshiHappyEmoji({ guild: null } as unknown as Message, ':munshi_happy:'))
      .toBe(':munshi_happy:');
  });
});

// Count of ``` fences in a string.
function fenceCount(s: string): number {
  return (s.match(/```/g) ?? []).length;
}

describe('normalizeSpacing', () => {
  it('collapses 3+ newlines to a single blank line', () => {
    expect(normalizeSpacing('a\n\n\n\n\nb')).toBe('a\n\nb');
  });

  it('strips trailing whitespace per line', () => {
    expect(normalizeSpacing('a   \nb\t')).toBe('a\nb');
  });
});

describe('splitForDiscord', () => {
  it('returns a single chunk when under the limit', () => {
    expect(splitForDiscord('short message', 100)).toEqual(['short message']);
  });

  it('returns no chunks for empty/whitespace input', () => {
    expect(splitForDiscord('   \n  ', 100)).toEqual([]);
  });

  it('keeps every chunk within the limit', () => {
    const text = Array.from({ length: 50 }, (_, i) => `line number ${i}`).join('\n');
    const chunks = splitForDiscord(text, 80);
    expect(chunks.length).toBeGreaterThan(1);
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(80);
  });

  it('every chunk has balanced code fences (never splits a block open)', () => {
    // A long code block that must span multiple chunks.
    const codeLines = Array.from({ length: 40 }, (_, i) => `int x${i} = ${i};`).join('\n');
    const text = `Here is some code:\n\`\`\`cpp\n${codeLines}\n\`\`\`\nDone.`;
    const chunks = splitForDiscord(text, 120);

    expect(chunks.length).toBeGreaterThan(1);
    for (const c of chunks) {
      // Even number of fences = every opened block is closed within the chunk.
      expect(fenceCount(c) % 2).toBe(0);
    }
  });

  it('reopens the code block with the same language on the next chunk', () => {
    const codeLines = Array.from({ length: 40 }, (_, i) => `value_${i}();`).join('\n');
    const text = `\`\`\`angelscript\n${codeLines}\n\`\`\``;
    const chunks = splitForDiscord(text, 120);

    expect(chunks.length).toBeGreaterThan(1);
    // Continuation chunks should start by reopening the angelscript fence.
    for (let i = 1; i < chunks.length; i++) {
      expect(chunks[i].startsWith('```angelscript')).toBe(true);
    }
    // Each chunk is self-balanced.
    for (const c of chunks) expect(fenceCount(c) % 2).toBe(0);
  });

  it('concatenating chunks preserves all code content', () => {
    const codeLines = Array.from({ length: 30 }, (_, i) => `stmt${i};`).join('\n');
    const text = `\`\`\`cpp\n${codeLines}\n\`\`\``;
    const chunks = splitForDiscord(text, 100);

    // Strip the fences we injected and confirm every code line survived.
    const rejoined = chunks.join('\n');
    for (let i = 0; i < 30; i++) {
      expect(rejoined).toContain(`stmt${i};`);
    }
  });

  it('hard-splits a single line longer than the limit', () => {
    const longLine = 'x'.repeat(250);
    const chunks = splitForDiscord(longLine, 100);
    expect(chunks.length).toBe(3);
    for (const c of chunks) expect(c.length).toBeLessThanOrEqual(100);
    expect(chunks.join('')).toBe(longLine);
  });
});
