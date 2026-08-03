import { describe, expect, it } from 'vitest';
import type { ModelMessage } from 'ai';
import { cacheMessageTail, EPHEMERAL_CACHE_CONTROL } from './cache.js';

function cacheControl(part: unknown): unknown {
  return (part as { providerOptions?: { 'sap-ai'?: { cacheControl?: unknown } } })
    .providerOptions?.['sap-ai']?.cacheControl;
}

function cachePointCount(messages: ModelMessage[]): number {
  let count = 0;
  for (const message of messages) {
    if (!Array.isArray(message.content)) continue;
    for (const part of message.content) {
      if (cacheControl(part)) count++;
    }
  }
  return count;
}

describe('cacheMessageTail', () => {
  it('marks a string user message without mutating the input', () => {
    const messages: ModelMessage[] = [{ role: 'user', content: 'question' }];
    const result = cacheMessageTail(messages);

    expect(messages[0].content).toBe('question');
    expect(Array.isArray(result[0].content)).toBe(true);
    expect(cacheControl((result[0].content as unknown[])[0])).toEqual(EPHEMERAL_CACHE_CONTROL);
  });

  it('marks assistant narration while leaving the following tool result unannotated', () => {
    const messages = [
      { role: 'user', content: 'question' },
      {
        role: 'assistant',
        content: [
          { type: 'text', text: 'I will inspect the relevant files.' },
          { type: 'tool-call', toolCallId: 'call-1', toolName: 'read_file', input: { path: 'a.md' } },
        ],
      },
      {
        role: 'tool',
        content: [
          {
            type: 'tool-result',
            toolCallId: 'call-1',
            toolName: 'read_file',
            output: { type: 'text', value: 'file contents' },
          },
        ],
      },
    ] as ModelMessage[];

    const result = cacheMessageTail(messages);
    const assistantText = (result[1].content as unknown[])[0];
    const toolPart = (result[2].content as unknown[])[0];

    expect(cacheControl(assistantText)).toEqual(EPHEMERAL_CACHE_CONTROL);
    expect(cacheControl(toolPart)).toBeUndefined();
    expect(cachePointCount(result)).toBe(1);
  });

  it('never marks parallel tool results because SAP requires string tool messages', () => {
    const messages = [
      { role: 'user', content: [{ type: 'text', text: 'question' }] },
      {
        role: 'tool',
        content: [
          { type: 'tool-result', toolCallId: 'a', toolName: 'read_file', output: { type: 'text', value: 'A' } },
          { type: 'tool-result', toolCallId: 'b', toolName: 'read_file', output: { type: 'text', value: 'B' } },
        ],
      },
    ] as ModelMessage[];

    const result = cacheMessageTail(messages);
    const parts = result[1].content as unknown[];

    expect(cacheControl((result[0].content as unknown[])[0])).toEqual(EPHEMERAL_CACHE_CONTROL);
    expect(cacheControl(parts[0])).toBeUndefined();
    expect(cacheControl(parts[1])).toBeUndefined();
    expect(cachePointCount(result)).toBe(1);
  });

  it('moves an existing breakpoint forward and preserves other provider options', () => {
    const messages = [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'old',
            providerOptions: {
              'sap-ai': { cacheControl: EPHEMERAL_CACHE_CONTROL, retained: true },
              other: { value: 1 },
            },
          },
        ],
      },
      { role: 'assistant', content: [{ type: 'text', text: 'new' }] },
    ] as ModelMessage[];

    const result = cacheMessageTail(messages);
    const oldPart = (result[0].content as Array<{ providerOptions?: Record<string, unknown> }>)[0];
    const newPart = (result[1].content as unknown[])[0];

    expect(cacheControl(oldPart)).toBeUndefined();
    expect(oldPart.providerOptions).toEqual({
      'sap-ai': { retained: true },
      other: { value: 1 },
    });
    expect(cacheControl(newPart)).toEqual(EPHEMERAL_CACHE_CONTROL);
    expect(cachePointCount(result)).toBe(1);
  });

  it('does not attach cache control to an assistant tool-call envelope', () => {
    const messages = [
      { role: 'user', content: [{ type: 'text', text: 'question' }] },
      {
        role: 'assistant',
        content: [
          { type: 'tool-call', toolCallId: 'call-1', toolName: 'read_file', input: { path: 'a.md' } },
        ],
      },
    ] as ModelMessage[];

    const result = cacheMessageTail(messages);
    expect(cacheControl((result[0].content as unknown[])[0])).toEqual(EPHEMERAL_CACHE_CONTROL);
    expect(cacheControl((result[1].content as unknown[])[0])).toBeUndefined();
  });

  it('returns an empty transcript unchanged', () => {
    const messages: ModelMessage[] = [];
    expect(cacheMessageTail(messages)).toEqual([]);
  });
});
