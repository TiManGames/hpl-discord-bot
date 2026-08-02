import { describe, it, expect } from 'vitest';
import {
  retryAfterSeconds,
  isRateLimit,
  isTransientAuth,
  DEFAULT_RETRY_AFTER_S,
  MAX_RETRY_AFTER_S,
} from './retry.js';

// Mimic the shape of an AI SDK APICallError for a SAP 429.
function apiError(headers: Record<string, string>) {
  return { statusCode: 429, responseHeaders: headers };
}

describe('retryAfterSeconds', () => {
  it('reads x-retry-after from a top-level 429 error', () => {
    expect(retryAfterSeconds(apiError({ 'x-retry-after': '37' }))).toBe(37);
  });

  it('reads the standard retry-after header as a fallback', () => {
    expect(retryAfterSeconds(apiError({ 'retry-after': '12' }))).toBe(12);
  });

  it('prefers x-retry-after over retry-after when both present', () => {
    expect(
      retryAfterSeconds(apiError({ 'x-retry-after': '5', 'retry-after': '99' })),
    ).toBe(5);
  });

  it('unwraps a 429 nested under .lastError (RetryError shape)', () => {
    const err = { lastError: apiError({ 'x-retry-after': '20' }) };
    expect(retryAfterSeconds(err)).toBe(20);
  });

  it('caps the wait at MAX_RETRY_AFTER_S', () => {
    expect(retryAfterSeconds(apiError({ 'x-retry-after': '9999' }))).toBe(
      MAX_RETRY_AFTER_S,
    );
  });

  it('falls back to the default when the header is missing on a 429', () => {
    expect(retryAfterSeconds(apiError({}))).toBe(DEFAULT_RETRY_AFTER_S);
  });

  it('falls back to the default when the header is non-numeric', () => {
    expect(retryAfterSeconds(apiError({ 'x-retry-after': 'soon' }))).toBe(
      DEFAULT_RETRY_AFTER_S,
    );
  });

  it('returns null for a non-429 status', () => {
    expect(retryAfterSeconds({ statusCode: 500, responseHeaders: {} })).toBeNull();
  });

  it('returns null for a plain error / non-object', () => {
    expect(retryAfterSeconds(new Error('boom'))).toBeNull();
    expect(retryAfterSeconds('nope')).toBeNull();
    expect(retryAfterSeconds(undefined)).toBeNull();
  });
});

describe('isRateLimit', () => {
  it('is true for a structured 429 error', () => {
    expect(isRateLimit(apiError({ 'x-retry-after': '10' }))).toBe(true);
  });

  it('is true when the message mentions 429', () => {
    expect(isRateLimit(new Error('Request failed: 429'))).toBe(true);
  });

  it('is true when the message mentions "Too many requests"', () => {
    expect(isRateLimit(new Error('Too many requests, slow down'))).toBe(true);
  });

  it('is false for unrelated errors', () => {
    expect(isRateLimit(new Error('connection reset'))).toBe(false);
    expect(isRateLimit({ statusCode: 500, responseHeaders: {} })).toBe(false);
  });
});

describe('isTransientAuth', () => {
  it('is true for a token-fetch timeout', () => {
    expect(
      isTransientAuth(new Error('XsuaaService... request timed out after 2000 ms')),
    ).toBe(true);
  });

  it('is true for a LoadAPIKeyError', () => {
    expect(isTransientAuth(new Error('LoadAPIKeyError: auth failed'))).toBe(true);
  });

  it('is false for a rate-limit error', () => {
    expect(isTransientAuth(new Error('429 Too many requests'))).toBe(false);
  });

  it('is false for unrelated errors', () => {
    expect(isTransientAuth(new Error('bad request'))).toBe(false);
  });
});
