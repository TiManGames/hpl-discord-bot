import { describe, it, expect } from 'vitest';
import type { ModelMessage } from 'ai';
import { pruneOldToolResults, STUB_TEXT } from './prune.js';

// Build a tool message holding one tool-result with the given id + text.
function toolMsg(id: string, text: string): ModelMessage {
  return {
    role: 'tool',
    content: [
      {
        type: 'tool-result',
        toolCallId: id,
        toolName: 'read_file',
        output: { type: 'text', value: text },
      },
    ],
  } as ModelMessage;
}

function assistantCall(id: string): ModelMessage {
  return {
    role: 'assistant',
    content: [{ type: 'tool-call', toolCallId: id, toolName: 'read_file', input: { path: 'x.md' } }],
  } as ModelMessage;
}

// Pull the text value out of a tool message's first result part.
function outputText(m: ModelMessage): string {
  const part = (m.content as Array<{ output?: { value?: string } }>)[0];
  return part.output?.value ?? '';
}

describe('pruneOldToolResults', () => {
  it('returns the input unchanged when total results <= keepRecent', () => {
    const msgs = [toolMsg('a', 'AAA'), toolMsg('b', 'BBB')];
    const out = pruneOldToolResults(msgs, 4);
    expect(out).toBe(msgs); // same reference — no work done
  });

  it('stubs older results and keeps the newest N verbatim', () => {
    const msgs = [
      toolMsg('1', 'one'),
      toolMsg('2', 'two'),
      toolMsg('3', 'three'),
      toolMsg('4', 'four'),
      toolMsg('5', 'five'),
      toolMsg('6', 'six'),
    ];
    const out = pruneOldToolResults(msgs, 2);
    // Oldest 4 stubbed, newest 2 kept.
    expect(outputText(out[0])).toBe(STUB_TEXT);
    expect(outputText(out[3])).toBe(STUB_TEXT);
    expect(outputText(out[4])).toBe('five');
    expect(outputText(out[5])).toBe('six');
  });

  it('preserves toolCallId and toolName on stubbed results', () => {
    const msgs = [toolMsg('keepid', 'data'), toolMsg('b', 'b'), toolMsg('c', 'c')];
    const out = pruneOldToolResults(msgs, 2);
    const part = (out[0].content as Array<{ toolCallId: string; toolName: string }>)[0];
    expect(part.toolCallId).toBe('keepid');
    expect(part.toolName).toBe('read_file');
    expect(outputText(out[0])).toBe(STUB_TEXT);
  });

  it('does not mutate the input array or its messages', () => {
    const msgs = [toolMsg('1', 'one'), toolMsg('2', 'two'), toolMsg('3', 'three')];
    const snapshot = outputText(msgs[0]);
    pruneOldToolResults(msgs, 1);
    expect(outputText(msgs[0])).toBe(snapshot); // original still 'one'
  });

  it('leaves assistant/tool-call messages untouched', () => {
    const msgs = [
      assistantCall('1'),
      toolMsg('1', 'one'),
      assistantCall('2'),
      toolMsg('2', 'two'),
      assistantCall('3'),
      toolMsg('3', 'three'),
    ];
    const out = pruneOldToolResults(msgs, 1);
    // Assistant messages pass through by reference.
    expect(out[0]).toBe(msgs[0]);
    expect(out[2]).toBe(msgs[2]);
    // Only the two oldest tool results are stubbed.
    expect(outputText(out[1])).toBe(STUB_TEXT);
    expect(outputText(out[3])).toBe(STUB_TEXT);
    expect(outputText(out[5])).toBe('three');
  });

  it('counts multiple tool-results within a single tool message', () => {
    const multi = {
      role: 'tool',
      content: [
        { type: 'tool-result', toolCallId: 'a', toolName: 'read_file', output: { type: 'text', value: 'A' } },
        { type: 'tool-result', toolCallId: 'b', toolName: 'read_file', output: { type: 'text', value: 'B' } },
      ],
    } as ModelMessage;
    const out = pruneOldToolResults([multi, toolMsg('c', 'C')], 1);
    const parts = out[0].content as Array<{ output: { value: string } }>;
    // 3 results total, keep last 1 → first two (both in the multi msg) stubbed.
    expect(parts[0].output.value).toBe(STUB_TEXT);
    expect(parts[1].output.value).toBe(STUB_TEXT);
    expect(outputText(out[1])).toBe('C');
  });

  it('is idempotent — re-pruning already-stubbed results is a no-op on them', () => {
    const msgs = [toolMsg('1', 'one'), toolMsg('2', 'two'), toolMsg('3', 'three')];
    const once = pruneOldToolResults(msgs, 1);
    const twice = pruneOldToolResults(once, 1);
    expect(outputText(twice[0])).toBe(STUB_TEXT);
    expect(outputText(twice[2])).toBe('three');
  });
});
