/**
 * Pure retry-decision helpers, extracted so they can be unit-tested without
 * instantiating the SAP AI provider or the AI SDK.
 *
 * SAP AI Core returns HTTP 429 with an `x-retry-after` header telling you how
 * many seconds to wait. The Vercel AI SDK's built-in exponential backoff ignores
 * that header and retries too early, so we drive retries ourselves using these.
 */

// Fallback / bounds for the wait derived from the retry-after header.
export const DEFAULT_RETRY_AFTER_S = 15;
export const MAX_RETRY_AFTER_S = 60;

/**
 * Pull the seconds-to-wait out of a SAP 429 error, if present.
 * Returns null when the error is not a recognizable 429.
 * The AI SDK wraps the underlying APICallError, so the status/headers may live
 * either at the top level or under `.lastError`.
 */
export function retryAfterSeconds(err: unknown): number | null {
  const anyErr = err as {
    statusCode?: number;
    responseHeaders?: Record<string, string>;
    lastError?: { statusCode?: number; responseHeaders?: Record<string, string> };
  };
  const candidates = [anyErr, anyErr?.lastError].filter(Boolean) as Array<{
    statusCode?: number;
    responseHeaders?: Record<string, string>;
  }>;

  for (const c of candidates) {
    if (c.statusCode === 429) {
      const raw =
        c.responseHeaders?.['x-retry-after'] ?? c.responseHeaders?.['retry-after'];
      const parsed = raw ? parseInt(raw, 10) : NaN;
      const secs = Number.isFinite(parsed) ? parsed : DEFAULT_RETRY_AFTER_S;
      return Math.min(secs, MAX_RETRY_AFTER_S);
    }
  }
  return null;
}

/** True if the error is a rate-limit (429) we should wait-and-retry. */
export function isRateLimit(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return (
    retryAfterSeconds(err) !== null ||
    msg.includes('429') ||
    msg.includes('Too many requests')
  );
}

/** True if the error is a transient SAP auth/token-fetch failure worth retrying. */
export function isTransientAuth(err: unknown): boolean {
  const msg = err instanceof Error ? err.message : String(err);
  return msg.includes('timed out') || msg.includes('LoadAPIKeyError');
}

/**
 * True for transport failures where SAP returned no usable HTTP response.
 * Provider errors commonly wrap the original Axios/Node error several levels
 * deep, so inspect the cause chain as well as the top-level message.
 */
export function isTransientNetwork(err: unknown): boolean {
  const retryableCodes = new Set([
    'ECONNRESET',
    'ECONNREFUSED',
    'EPIPE',
    'ETIMEDOUT',
    'EAI_AGAIN',
    'ENETDOWN',
    'ENETUNREACH',
    'EHOSTUNREACH',
    'UND_ERR_CONNECT_TIMEOUT',
    'UND_ERR_SOCKET',
  ]);
  const queue: unknown[] = [err];
  const visited = new Set<unknown>();
  const messages: string[] = [];

  while (queue.length > 0 && visited.size < 12) {
    const current = queue.shift();
    if (current == null || visited.has(current)) continue;
    visited.add(current);
    if (typeof current === 'string') {
      messages.push(current);
      continue;
    }
    if (current instanceof Error) messages.push(current.message);
    if (typeof current !== 'object') continue;
    const value = current as {
      code?: unknown;
      message?: unknown;
      cause?: unknown;
      lastError?: unknown;
      originalError?: unknown;
    };
    if (typeof value.code === 'string' && retryableCodes.has(value.code.toUpperCase())) {
      return true;
    }
    if (typeof value.message === 'string') messages.push(value.message);
    queue.push(value.cause, value.lastError, value.originalError);
  }

  return messages.some((message) =>
    /\b(?:ECONNRESET|ECONNREFUSED|EPIPE|ETIMEDOUT|EAI_AGAIN|ENETDOWN|ENETUNREACH|EHOSTUNREACH|UND_ERR_CONNECT_TIMEOUT|UND_ERR_SOCKET)\b|socket hang up|connection reset by peer|network socket disconnected|request timed out|fetch failed/i.test(message),
  );
}
