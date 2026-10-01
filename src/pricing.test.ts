import { describe, expect, it } from 'vitest';
import { estimateRequestCost } from './pricing.js';

const usage = { uncachedInputTokens: 5_000, outputTokens: 1_000 };

describe('estimateRequestCost', () => {
  it.each([
    [5_000, 1_000, 0.07092, 0.031914],
    [63_000, 3_000, 0.54, 0.243],
    [0, 0, 0, 0],
  ])('prices %i fresh input and %i output tokens', (input, output, cu, euros) => {
    const result = estimateRequestCost('gpt-5.6-sol', {
      uncachedInputTokens: input, outputTokens: output,
    }, {});
    expect(result.available).toBe(true);
    if (!result.available) throw new Error(result.reason);
    expect(result.capacityUnits).toBeCloseTo(cu, 10);
    expect(result.euros).toBeCloseTo(euros, 10);
  });

  it('uses operator-supplied model rates and EUR per CU', () => {
    expect(estimateRequestCost('custom-model', usage, {
      AICORE_MODEL_CU_RATES: JSON.stringify({
        'custom-model': { inputCuPerMillionTokens: 10, outputCuPerMillionTokens: 20 },
      }),
      AICORE_EUR_PER_CU: '0.5',
    })).toEqual({ available: true, capacityUnits: 0.07, euros: 0.035 });
  });

  it('supports an explicitly free token category', () => {
    expect(estimateRequestCost('custom-model', usage, {
      AICORE_MODEL_CU_RATES: JSON.stringify({
        'custom-model': { inputCuPerMillionTokens: 0, outputCuPerMillionTokens: 0 },
      }),
    })).toEqual({ available: true, capacityUnits: 0, euros: 0 });
  });

  it('reports unavailable for unknown models and does not inherit prototype properties', () => {
    expect(estimateRequestCost('unknown-model', usage, {}).available).toBe(false);
    expect(estimateRequestCost('toString', usage, {}).available).toBe(false);
  });

  it('replaces the built-in rate map when configured', () => {
    expect(estimateRequestCost('gpt-5.6-sol', usage, {
      AICORE_MODEL_CU_RATES: '{}',
    }).available).toBe(false);
  });

  it.each([
    '', 'broken-json', 'null', '[]', '5',
    '{"gpt-5.6-sol":null}',
    '{"gpt-5.6-sol":{"inputCuPerMillionTokens":6.8175}}',
    '{"gpt-5.6-sol":{"inputCuPerMillionTokens":"6.8175","outputCuPerMillionTokens":36.8325}}',
    '{"gpt-5.6-sol":{"inputCuPerMillionTokens":-1,"outputCuPerMillionTokens":36.8325}}',
    '{"gpt-5.6-sol":{"inputCuPerMillionTokens":1e400,"outputCuPerMillionTokens":36.8325}}',
  ])('handles invalid model-rate configuration without throwing: %s', (rates) => {
    expect(estimateRequestCost('gpt-5.6-sol', usage, {
      AICORE_MODEL_CU_RATES: rates,
    }).available).toBe(false);
  });

  it.each(['', ' ', 'broken', '0', '-1', 'Infinity', 'NaN'])('handles invalid EUR price: %s', (price) => {
    expect(estimateRequestCost('gpt-5.6-sol', usage, {
      AICORE_EUR_PER_CU: price,
    }).available).toBe(false);
  });

  it.each([-1, NaN, Infinity])('handles invalid usage: %s', (tokens) => {
    expect(estimateRequestCost('gpt-5.6-sol', {
      ...usage, uncachedInputTokens: tokens,
    }, {}).available).toBe(false);
    expect(estimateRequestCost('gpt-5.6-sol', {
      ...usage, outputTokens: tokens,
    }, {}).available).toBe(false);
  });
});
