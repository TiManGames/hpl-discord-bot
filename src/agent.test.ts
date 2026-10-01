import { describe, expect, it } from 'vitest';
import type { ModelMessage } from 'ai';
import { isVerificationChallenge, normalizeInputUsage, sanitizeModelMessages } from './agent.js';

describe('normalizeInputUsage', () => {
  it('handles a provider total that includes cached input', () => {
    expect(
      normalizeInputUsage({
        inputTokens: 13_475,
        inputTokenDetails: {
          noCacheTokens: 757,
          cacheReadTokens: 12_718,
          cacheWriteTokens: 0,
        },
      }, 'inclusive'),
    ).toEqual({
      reported: 13_475,
      total: 13_475,
      uncached: 757,
      cacheRead: 12_718,
      cacheWrite: 0,
    });
  });

  it('handles Anthropic cache writes reported outside prompt_tokens', () => {
    expect(
      normalizeInputUsage({
        inputTokens: 3,
        inputTokenDetails: {
          noCacheTokens: 0,
          cacheReadTokens: 0,
          cacheWriteTokens: 15_602,
        },
      }, 'exclusive'),
    ).toEqual({
      reported: 3,
      total: 15_605,
      uncached: 3,
      cacheRead: 0,
      cacheWrite: 15_602,
    });
  });

  it('handles Anthropic cache reads reported outside prompt_tokens', () => {
    expect(
      normalizeInputUsage({
        inputTokens: 1_477,
        inputTokenDetails: {
          noCacheTokens: 0,
          cacheReadTokens: 15_725,
          cacheWriteTokens: 0,
        },
      }, 'exclusive'),
    ).toEqual({
      reported: 1_477,
      total: 17_202,
      uncached: 1_477,
      cacheRead: 15_725,
      cacheWrite: 0,
    });
  });

  it('does not confuse a large uncached Anthropic slice for an inclusive total', () => {
    expect(
      normalizeInputUsage({
        inputTokens: 20_000,
        inputTokenDetails: {
          noCacheTokens: 5_000,
          cacheReadTokens: 15_000,
          cacheWriteTokens: 0,
        },
      }, 'exclusive'),
    ).toEqual({
      reported: 20_000,
      total: 35_000,
      uncached: 20_000,
      cacheRead: 15_000,
      cacheWrite: 0,
    });
  });
});

describe('isVerificationChallenge', () => {
  it('requires verification when the user disputes an answer', () => {
    expect(isVerificationChallenge('cScrMap_YourMap is a lie')).toBe(true);
    expect(isVerificationChallenge('That identifier does not exist')).toBe(true);
    expect(isVerificationChallenge('Are you sure? Verify it.')).toBe(true);
  });

  it('does not force a tool for an ordinary follow-up', () => {
    expect(isVerificationChallenge('How do I enable an entity?')).toBe(false);
  });
});

describe('sanitizeModelMessages', () => {
  it('drops empty persisted turns that SAP would serialize as content arrays', () => {
    const messages: ModelMessage[] = [
      { role: 'user', content: 'valid question' },
      { role: 'assistant', content: [{ type: 'text', text: 'valid answer' }] },
      { role: 'user', content: '' },
      { role: 'user', content: [] },
    ];

    expect(sanitizeModelMessages(messages)).toEqual(messages.slice(0, 2));
  });

  it('removes an empty leading text part but preserves an attachment note', () => {
    const messages: ModelMessage[] = [{
      role: 'user',
      content: [
        { type: 'text', text: '' },
        { type: 'text', text: '[User attached file "HPL.log"]' },
      ],
    }];

    expect(sanitizeModelMessages(messages)).toEqual([{
      role: 'user',
      content: [{ type: 'text', text: '[User attached file "HPL.log"]' }],
    }]);
  });
});
