import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Message } from 'discord.js';

vi.mock('./agent.js', () => ({ runAgent: vi.fn() }));

import { runAgent } from './agent.js';
import {
  handleChannelMention,
  normalizeSpacing,
  splitForDiscord,
  UNMAPPED_CHANNEL_RESPONSE,
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
