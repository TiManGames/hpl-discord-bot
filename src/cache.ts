import type { ModelMessage } from 'ai';

const SAP_PROVIDER = 'sap-ai';

export const EPHEMERAL_CACHE_CONTROL = { type: 'ephemeral' } as const;

type ProviderOptionRecord = Record<string, unknown>;
type PartWithProviderOptions = {
  type?: string;
  providerOptions?: Record<string, unknown>;
};

function asRecord(value: unknown): ProviderOptionRecord {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as ProviderOptionRecord)
    : {};
}

function removeCacheControl<T extends PartWithProviderOptions>(part: T): T {
  const providerOptions = part.providerOptions;
  const sapOptions = asRecord(providerOptions?.[SAP_PROVIDER]);
  if (!('cacheControl' in sapOptions)) return part;

  const { cacheControl: _cacheControl, ...remainingSapOptions } = sapOptions;
  const remainingProviderOptions = { ...providerOptions };

  if (Object.keys(remainingSapOptions).length > 0) {
    remainingProviderOptions[SAP_PROVIDER] = remainingSapOptions;
  } else {
    delete remainingProviderOptions[SAP_PROVIDER];
  }

  if (Object.keys(remainingProviderOptions).length === 0) {
    const { providerOptions: _providerOptions, ...withoutProviderOptions } = part;
    return withoutProviderOptions as T;
  }

  return { ...part, providerOptions: remainingProviderOptions };
}

function addCacheControl<T extends PartWithProviderOptions>(part: T): T {
  const providerOptions = part.providerOptions ?? {};
  const sapOptions = asRecord(providerOptions[SAP_PROVIDER]);
  return {
    ...part,
    providerOptions: {
      ...providerOptions,
      [SAP_PROVIDER]: {
        ...sapOptions,
        cacheControl: EPHEMERAL_CACHE_CONTROL,
      },
    },
  };
}

function isCacheablePart(role: ModelMessage['role'], part: PartWithProviderOptions): boolean {
  if (role === 'user') return part.type === 'text' || part.type === 'image' || part.type === 'file';

  // SAP orchestration supports cache_control on assistant text, but not on the
  // assistant tool-call envelope. It also serializes a cached tool result as a
  // list, which SAP's Anthropic harmonizer rejects because tool-message content
  // must be a string. Assistant narration gives us a safe rolling boundary: on
  // the following step it includes all earlier tool results in the cached prefix,
  // while the newest result remains fresh for the model to consume.
  if (role === 'assistant') return part.type === 'text';
  return false;
}

/**
 * Move the conversation cache breakpoint to the newest SAP-compatible content
 * block. Tool-result parts are deliberately never marked.
 *
 * The AI SDK rebuilds the complete, unmodified transcript before every tool
 * step. Marking the newest user/assistant block lets Anthropic read the previous
 * step's prefix from cache (via its 20-block lookback) and write the newly
 * extended prefix for the next step. No tool output is removed or rewritten.
 *
 * Pure and non-mutating. Any older message-level breakpoint created by this
 * helper is removed before the newest one is added, keeping the request below
 * Anthropic's four-breakpoint limit. The separately supplied system breakpoint
 * is unaffected.
 */
export function cacheMessageTail(messages: ModelMessage[]): ModelMessage[] {
  const cleaned = messages.map((message) => {
    if (!Array.isArray(message.content)) return message;

    let changed = false;
    const content = message.content.map((rawPart) => {
      const part = rawPart as typeof rawPart & PartWithProviderOptions;
      const next = removeCacheControl(part);
      if (next !== part) changed = true;
      return next;
    });

    return changed ? ({ ...message, content } as ModelMessage) : message;
  });

  for (let messageIndex = cleaned.length - 1; messageIndex >= 0; messageIndex--) {
    const message = cleaned[messageIndex];

    if (typeof message.content === 'string') {
      if (message.role !== 'user' && message.role !== 'assistant') continue;

      const markedPart = addCacheControl({ type: 'text', text: message.content });
      const result = [...cleaned];
      result[messageIndex] = { ...message, content: [markedPart] } as ModelMessage;
      return result;
    }

    for (let partIndex = message.content.length - 1; partIndex >= 0; partIndex--) {
      const part = message.content[partIndex] as typeof message.content[number] & PartWithProviderOptions;
      if (!isCacheablePart(message.role, part)) continue;

      const content = [...message.content];
      content[partIndex] = addCacheControl(part) as typeof message.content[number];
      const result = [...cleaned];
      result[messageIndex] = { ...message, content } as ModelMessage;
      return result;
    }
  }

  return cleaned;
}
