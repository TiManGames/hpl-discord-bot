import type { ModelMessage } from 'ai';

export const STUB_TEXT =
  '[content omitted to save context — already used; re-read this file if needed]';

/**
 * Prune stale tool-result outputs from a message list to save input tokens.
 *
 * Every `read_file` result is a `role: 'tool'` message whose content is an array
 * of `tool-result` parts. Because the AI SDK resends the full conversation on
 * every agentic step, a file read early in a long run is re-sent (at full text)
 * on every subsequent step — pure waste once the model has moved on.
 *
 * This keeps the most recent `keepRecent` tool-result parts verbatim and replaces
 * the text output of all older ones with a short stub. The model can always
 * re-read a stubbed file via read_file, so no information is permanently lost.
 *
 * Pure and non-mutating: returns a new array (cloning only the messages/parts it
 * changes), so the caller's stored history is untouched. Assistant text,
 * tool-call parts, and toolCallId/toolName pairing are all preserved.
 */
export function pruneOldToolResults(
  messages: ModelMessage[],
  keepRecent: number,
): ModelMessage[] {
  // 1. Find the total number of tool-result parts across all tool messages.
  let totalToolResults = 0;
  for (const m of messages) {
    if (m.role === 'tool' && Array.isArray(m.content)) {
      for (const part of m.content) {
        if ((part as { type?: string }).type === 'tool-result') totalToolResults++;
      }
    }
  }

  // Nothing to prune.
  if (totalToolResults <= keepRecent) return messages;

  // 2. Walk again; stub every tool-result whose index is older than the
  //    keep-window (i.e. index < totalToolResults - keepRecent).
  const cutoff = totalToolResults - keepRecent;
  let seen = 0;

  return messages.map((m) => {
    if (m.role !== 'tool' || !Array.isArray(m.content)) return m;

    let changed = false;
    const newContent = m.content.map((part) => {
      const p = part as { type?: string; output?: { type?: string; value?: unknown } };
      if (p.type !== 'tool-result') return part;

      const index = seen;
      seen++;
      if (index >= cutoff) return part; // within keep-window: keep verbatim

      // Older result: stub its text output. Preserve everything else
      // (toolCallId, toolName) so the assistant/tool pairing stays valid.
      const already = p.output?.type === 'text' && p.output.value === STUB_TEXT;
      if (already) return part;

      changed = true;
      return {
        ...(part as object),
        output: { type: 'text', value: STUB_TEXT },
      } as typeof part;
    });

    if (!changed) return m;
    return { ...m, content: newContent } as ModelMessage;
  });
}
