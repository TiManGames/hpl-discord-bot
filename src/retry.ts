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
