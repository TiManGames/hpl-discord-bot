import { describe, expect, it } from 'vitest';
import { clearCorpusIndexCache } from './corpus-index.js';
import { evaluateCorpusSearch } from './search-eval.js';

describe('corpus-derived search contracts', () => {
  it('covers every game and each generic retrieval or relationship channel', () => {
    clearCorpusIndexCache();
    const metrics = evaluateCorpusSearch();
    expect(metrics.games).toEqual(['hpl2', 'hpl3-bunker', 'hpl3-rebirth', 'hpl3-soma']);
    expect(metrics.cases).toBeGreaterThan(100);
    expect(metrics.exactSymbolCases).toBeGreaterThan(25);
    expect(metrics.pathCases).toBeGreaterThan(25);
    expect(metrics.contentCases).toBeGreaterThan(10);
    expect(metrics.fuzzyIdentifierCases).toBeGreaterThan(15);
    expect(metrics.callRelationshipCases).toBeGreaterThan(15);
    expect(metrics.typeRelationshipCases).toBeGreaterThan(15);
    expect(metrics.exactSymbolRecallAt5).toBe(1);
    expect(metrics.pathRecallAt5).toBe(1);
    expect(metrics.contentRecallAt5).toBeGreaterThan(0.9);
    expect(metrics.fuzzyIdentifierRecallAt5).toBeGreaterThan(0.8);
    expect(metrics.callRelationshipAccuracy).toBeGreaterThan(0.9);
    expect(metrics.typeRelationshipAccuracy).toBe(1);
    expect(metrics.overallMrr).toBeGreaterThan(0.8);
  }, 30_000);
});
