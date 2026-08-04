import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  getCorpusIndex,
  relatedSymbols,
  searchCorpus,
  type CorpusIndex,
  type SymbolRecord,
} from './corpus-index.js';

interface RetrievalResult {
  rank: number;
  latencyMs: number;
}

interface RelationshipResult {
  correct: boolean;
  latencyMs: number;
}

export interface SearchEvaluationMetrics {
  games: string[];
  cases: number;
  exactSymbolCases: number;
  exactSymbolRecallAt5: number;
  pathCases: number;
  pathRecallAt5: number;
  contentCases: number;
  contentRecallAt5: number;
  fuzzyIdentifierCases: number;
  fuzzyIdentifierRecallAt5: number;
  callRelationshipCases: number;
  callRelationshipAccuracy: number;
  typeRelationshipCases: number;
  typeRelationshipAccuracy: number;
  overallMrr: number;
  averageLatencyMs: number;
  p95LatencyMs: number;
}

/**
 * Builds an evaluation set from the indexes themselves. The strata are generic
 * search contracts, so newly bundled files, APIs, helpers, and classes become
 * eligible without adding product names or incident-specific expectations.
 */
export function evaluateCorpusSearch(projectRoot = process.cwd()): SearchEvaluationMetrics {
  const games = discoverGames(projectRoot);
  const exactSymbols: RetrievalResult[] = [];
  const paths: RetrievalResult[] = [];
  const content: RetrievalResult[] = [];
  const fuzzyIdentifiers: RetrievalResult[] = [];
  const callRelationships: RelationshipResult[] = [];
  const typeRelationships: RelationshipResult[] = [];

  for (const game of games) {
    const index = getCorpusIndex(resolve(projectRoot, 'skills', game, 'docs'));
    exactSymbols.push(...evaluateExactSymbols(index));
    paths.push(...evaluatePaths(index));
    content.push(...evaluateContent(index));
    fuzzyIdentifiers.push(...evaluateFuzzyIdentifiers(index));
    callRelationships.push(...evaluateCallRelationships(index));
    typeRelationships.push(...evaluateTypeRelationships(index));
  }

  const retrieval = [...exactSymbols, ...paths, ...content, ...fuzzyIdentifiers];
  const allLatencies = [
    ...retrieval.map((value) => value.latencyMs),
    ...callRelationships.map((value) => value.latencyMs),
    ...typeRelationships.map((value) => value.latencyMs),
  ];
  const sortedLatencies = [...allLatencies].sort((left, right) => left - right);
  return {
    games,
    cases: retrieval.length + callRelationships.length + typeRelationships.length,
    exactSymbolCases: exactSymbols.length,
    exactSymbolRecallAt5: recallAt5(exactSymbols),
    pathCases: paths.length,
    pathRecallAt5: recallAt5(paths),
    contentCases: content.length,
    contentRecallAt5: recallAt5(content),
    fuzzyIdentifierCases: fuzzyIdentifiers.length,
    fuzzyIdentifierRecallAt5: recallAt5(fuzzyIdentifiers),
    callRelationshipCases: callRelationships.length,
    callRelationshipAccuracy: accuracy(callRelationships),
    typeRelationshipCases: typeRelationships.length,
    typeRelationshipAccuracy: accuracy(typeRelationships),
    overallMrr: retrieval.reduce((sum, value) => sum + (value.rank > 0 ? 1 / value.rank : 0), 0) /
      Math.max(1, retrieval.length),
    averageLatencyMs: allLatencies.reduce((sum, value) => sum + value, 0) / Math.max(1, allLatencies.length),
    p95LatencyMs: sortedLatencies[Math.max(0, Math.ceil(sortedLatencies.length * 0.95) - 1)] ?? 0,
  };
}

function discoverGames(projectRoot: string): string[] {
  const skillsRoot = resolve(projectRoot, 'skills');
  return readdirSync(skillsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && existsSync(resolve(skillsRoot, entry.name, 'docs')))
    .map((entry) => entry.name)
    .sort();
}

function evaluateExactSymbols(index: CorpusIndex): RetrievalResult[] {
  const keyed = index.symbols.map((symbol) => ({ symbol, query: qualifiedName(symbol) }));
  const unique = uniqueBy(keyed, (value) => value.query.toLowerCase());
  return stratifiedSample(unique, (value) => `${value.symbol.sourceCategory}:${value.symbol.kind}`,
    (value) => value.symbol.id, 2).map(({ symbol, query }) => timedRank(() => searchCorpus(index, {
      queries: [query], channels: ['symbols'], match: 'exact', limit: 5,
    }).findIndex((hit) => hit.id === symbol.id) + 1));
}

function evaluatePaths(index: CorpusIndex): RetrievalResult[] {
  const unique = uniqueBy(index.files.filter((file) => file.basename.length >= 5),
    (file) => file.basename.toLowerCase());
  return stratifiedSample(unique,
    (file) => `${file.sourceCategory ?? 'asset'}:${file.binary ? 'binary' : 'text'}`,
    (file) => file.id, 2).map((file) => timedRank(() => searchCorpus(index, {
      queries: [file.basename], channels: ['paths'], match: 'exact', limit: 5,
    }).findIndex((hit) => hit.id === file.id) + 1));
}

function evaluateContent(index: CorpusIndex): RetrievalResult[] {
  const candidates = index.chunks.filter((chunk) => usefulHeading(chunk.heading));
  const unique = uniqueBy(candidates, (chunk) => chunk.heading.toLowerCase());
  return stratifiedSample(unique, (chunk) => chunk.sourceCategory, (chunk) => chunk.id, 2)
    .map((chunk) => timedRank(() => searchCorpus(index, {
      queries: [chunk.heading], channels: ['content'], match: 'exact', limit: 5,
    }).findIndex((hit) => hit.id === chunk.id) + 1));
}

function evaluateFuzzyIdentifiers(index: CorpusIndex): RetrievalResult[] {
  const eligible = index.symbols.filter((symbol) => /^[A-Za-z_][A-Za-z0-9_]{7,}$/.test(symbol.name));
  const unique = uniqueBy(eligible, (symbol) => symbol.name.toLowerCase());
  return stratifiedSample(unique, (symbol) => `${symbol.sourceCategory}:${symbol.kind}`,
    (symbol) => symbol.id, 1).map((symbol) => {
    const typo = deterministicTypo(symbol.name);
    return timedRank(() => searchCorpus(index, {
      queries: [typo], channels: ['symbols'], match: 'fuzzy', limit: 5,
    }).findIndex((hit) => hit.id === symbol.id) + 1);
  });
}

function evaluateCallRelationships(index: CorpusIndex): RelationshipResult[] {
  const pairs: Array<{ caller: SymbolRecord; callee: string; key: string }> = [];
  for (const [callee, usages] of index.usagesBySymbol) {
    for (const usage of usages) {
      const caller = usage.callerId ? index.symbolsById.get(usage.callerId) : undefined;
      if (caller && caller.name.toLowerCase() !== callee) {
        pairs.push({ caller, callee, key: `${caller.id}->${callee}` });
      }
    }
  }
  return stableSample(uniqueBy(pairs, (pair) => pair.key), (pair) => pair.key, 8).map((pair) =>
    timedRelationship(() => relatedSymbols(index, pair.caller, 100)
      .some((value) => value.relation === 'callee' && value.symbol.name.toLowerCase() === pair.callee)));
}

function evaluateTypeRelationships(index: CorpusIndex): RelationshipResult[] {
  const cases: Array<{ key: string; evaluate: () => boolean }> = [];
  for (const owner of index.symbols.filter((symbol) => ['class', 'interface', 'enum'].includes(symbol.kind))) {
    const member = index.symbols.find((candidate) => candidate.path === owner.path && candidate.container === owner.name);
    if (member) cases.push({
      key: `member:${owner.id}->${member.id}`,
      evaluate: () => relatedSymbols(index, owner, 100)
        .some((value) => value.relation === 'member' && value.symbol.id === member.id),
    });
    for (const rawBase of owner.inheritedTypes ?? []) {
      const baseName = rawBase.replace(/\b(?:public|protected|private)\b/g, '').trim().split(/\s|</)[0];
      const base = index.symbols.find((candidate) => candidate.name === baseName);
      if (!base) continue;
      cases.push({
        key: `inheritance:${owner.id}->${base.id}`,
        evaluate: () => {
          const ownerRelations = relatedSymbols(index, owner, 100);
          const baseRelations = relatedSymbols(index, base, 100);
          return ownerRelations.some((value) => value.relation === 'base' && value.symbol.id === base.id) &&
            baseRelations.some((value) => value.relation === 'derived' && value.symbol.id === owner.id);
        },
      });
    }
  }
  return stableSample(cases, (value) => value.key, 8)
    .map((value) => timedRelationship(value.evaluate));
}

function timedRank(operation: () => number): RetrievalResult {
  const started = performance.now();
  const rank = operation();
  return { rank, latencyMs: performance.now() - started };
}

function timedRelationship(operation: () => boolean): RelationshipResult {
  const started = performance.now();
  const correct = operation();
  return { correct, latencyMs: performance.now() - started };
}

function stratifiedSample<T>(values: T[], group: (value: T) => string, key: (value: T) => string, perGroup: number): T[] {
  const groups = new Map<string, T[]>();
  for (const value of values) {
    const bucket = groups.get(group(value)) ?? [];
    bucket.push(value);
    groups.set(group(value), bucket);
  }
  return [...groups.entries()].sort(([left], [right]) => left.localeCompare(right))
    .flatMap(([, bucket]) => stableSample(bucket, key, perGroup));
}

function stableSample<T>(values: T[], key: (value: T) => string, limit: number): T[] {
  return [...values].sort((left, right) => stableHash(key(left)) - stableHash(key(right)) ||
    key(left).localeCompare(key(right))).slice(0, limit);
}

function uniqueBy<T>(values: T[], key: (value: T) => string): T[] {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(key(value), (counts.get(key(value)) ?? 0) + 1);
  return values.filter((value) => counts.get(key(value)) === 1);
}

function stableHash(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index++) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function qualifiedName(symbol: SymbolRecord): string {
  return symbol.container ? `${symbol.container}::${symbol.name}` : symbol.name;
}

function usefulHeading(value: string): boolean {
  const words = value.match(/[A-Za-z][A-Za-z0-9_-]{2,}/g) ?? [];
  return value.length >= 8 && words.length >= 2;
}

function deterministicTypo(value: string): string {
  const candidates = [...value].map((character, index) => ({ character, index }))
    .filter(({ character, index }) => index > 1 && index < value.length - 1 && /[A-Za-z0-9]/.test(character));
  const selected = candidates[Math.abs(stableHash(value)) % Math.max(1, candidates.length)];
  return selected ? `${value.slice(0, selected.index)}${value.slice(selected.index + 1)}` : `${value}x`;
}

function recallAt5(values: RetrievalResult[]): number {
  return values.filter((value) => value.rank > 0 && value.rank <= 5).length / Math.max(1, values.length);
}

function accuracy(values: RelationshipResult[]): number {
  return values.filter((value) => value.correct).length / Math.max(1, values.length);
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('/search-eval.ts')) {
  console.log(JSON.stringify(evaluateCorpusSearch(), null, 2));
}
