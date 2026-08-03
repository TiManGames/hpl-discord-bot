import { basename, dirname } from 'node:path';
import type { SearchResult } from 'minisearch';
import {
  classifyQuestionProfile,
  getResearchIndex,
  lookupSymbols,
  searchChunks,
  type ChunkRecord,
  type QuestionProfile,
  type ResearchIndex,
  type SourceCategory,
  type SymbolKind,
  type SymbolMatch,
  type UsageRecord,
} from './research-index.js';

type EvidenceRequirement =
  | 'declaration'
  | 'guide'
  | 'game-pattern'
  | 'config-registration'
  | 'editor-registration'
  | 'user-context'
  | 'api-search'
  | 'game-search'
  | 'wiki-search'
  | 'game-definition'
  | 'game-call-chain'
  | 'feature-facet';

type EvidenceStatus = 'covered' | 'conversation' | 'not-found' | 'source-unavailable';

interface EvidenceItem {
  requirement: EvidenceRequirement;
  status: EvidenceStatus;
  sourceCategory?: SourceCategory | 'conversation';
  path?: string;
  startLine?: number;
  endLine?: number;
  title: string;
  excerpt: string;
}

const PROFILE_REQUIREMENTS: Record<QuestionProfile, EvidenceRequirement[]> = {
  api: ['declaration'],
  concept: ['guide'],
  implementation: ['declaration', 'guide', 'game-pattern'],
  behavior: ['declaration', 'game-pattern'],
  'custom-entity': ['guide', 'game-pattern', 'config-registration', 'editor-registration'],
  'user-module': ['guide', 'game-pattern', 'config-registration'],
  debugging: ['user-context', 'declaration', 'game-pattern'],
  'negative-capability': ['api-search', 'game-search', 'wiki-search'],
  'stock-behavior': ['game-definition', 'game-call-chain'],
  'editor-pipeline': ['guide', 'config-registration', 'editor-registration'],
};

const PROFILE_LABELS: Record<QuestionProfile, string> = {
  api: 'exact API or minimal invocation',
  concept: 'conceptual explanation',
  implementation: 'implementation requiring docs plus proven game patterns',
  behavior: 'runtime behavior or sequence',
  'custom-entity': 'custom entity/area/agent pipeline',
  'user-module': 'cross-map user module',
  debugging: 'debugging user-provided code or behavior',
  'negative-capability': 'negative capability claim',
  'stock-behavior': 'stock game behavior trace',
  'editor-pipeline': 'editor/config registration pipeline',
};

export interface LookupSymbolInput {
  query: string;
  kind?: SymbolKind;
  limit?: number;
}

export interface ResearchTopicInput {
  query: string;
  profile?: QuestionProfile | 'auto';
}

export function lookupSymbolReport(input: LookupSymbolInput, docsRoot: string): string {
  const index = getResearchIndex(docsRoot);
  const rankedMatches = lookupSymbols(index, input.query, {
    kind: input.kind,
    limit: input.limit ?? 4,
  });
  const matches = dedupeEquivalentMatches(rankedMatches.length === 0
    ? rankedMatches
    : rankedMatches.filter((match) => match.score >= rankedMatches[0].score - 180));
  const strong = matches.filter((match) => ['exact', 'high'].includes(match.confidence));
  const status = strong.length > 0
    ? 'resolved'
    : matches.length > 0
      ? 'candidate-only'
      : 'not-found';

  const lines = [
    'SYMBOL_LOOKUP',
    `query: ${JSON.stringify(input.query)}`,
    `game_scope: ${basename(dirname(index.root))}`,
    `status: ${status}`,
    'evidence_profile: exact API or symbol lookup',
    `required: declaration/signature`,
    `covered: ${strong.length > 0 ? 'yes' : 'no'}`,
    `answer_boundary: ${
      strong.length > 0
        ? 'The symbol name, signature, source location, and quoted declaration context are verified. Answer only those facts. Before adding lifecycle behavior, class/inheritance structure, setup rules, or a larger example, retrieve the exact supporting source with research_topic or read_file.'
        : 'No high-confidence declaration was found. Use research_topic once for cross-source retrieval; do not repeat fuzzy symbol variants.'
    }`,
    'dialect_contract: Emit only engine API/callback identifiers present in these matches or the user\'s code. Do not substitute names remembered from another HPL game.',
    '',
  ];

  if (matches.length === 0) {
    lines.push('matches: none', 'supports: exhaustive lookup across hps_api.hps plus script/ and scripts/',
      'does_not_support: claiming that a feature is impossible without a negative-capability research profile');
    return lines.join('\n');
  }

  lines.push('matches:');
  matches.forEach((match, indexPosition) => {
    const symbol = match.symbol;
    lines.push(
      `[S${indexPosition + 1}] ${symbol.name} — ${match.confidence} (${Math.round(match.score)})`,
      `kind: ${symbol.kind}${symbol.container ? ` in ${symbol.container}` : ''}`,
      `declaration_signature: ${symbol.signature}`,
      `source: ${symbol.sourceCategory} ${symbol.path}:${symbol.line}`,
    );
    const callShape = invocationShape(symbol.name, symbol.kind, symbol.signature);
    if (callShape) {
      lines.push(
        `invocation_shape: ${callShape}`,
        'invocation_rule: A call omits the declaration return type and ends with a semicolon.',
      );
    }
    const context = declarationContext(index, symbol.path, symbol.line);
    if (context) lines.push('declaration context:', indent(context, '  '));
    const usages = relatedUsages(index, match, 2);
    if (usages.length > 0) {
      lines.push('representative usages:');
      for (const usage of usages) {
        lines.push(`- ${usage.path}:${usage.line}-${usage.endLine}`, indent(usage.excerpt, '  '));
      }
    }
    lines.push('');
  });
  lines.push(
    'supports: exact symbol name, declaration kind, signature, source location, minimal invocation shape',
    'does_not_support: full runtime sequence, asset/editor setup, persistence, or negative capability claims',
  );
  return lines.join('\n');
}

function invocationShape(name: string, kind: SymbolKind, signature: string): string {
  if (kind !== 'function') return '';
  const open = signature.indexOf('(');
  const close = signature.lastIndexOf(')');
  if (open < 0 || close < open) return '';
  const parameters = splitParameters(signature.slice(open + 1, close));
  const argumentsList = parameters.map((parameter) => {
    const withoutDefault = parameter.replace(/\s*=.*$/, '').trim();
    const match = withoutDefault.match(/([A-Za-z_][A-Za-z0-9_]*)\s*$/);
    return match?.[1] ?? '?';
  });
  return `${name}(${argumentsList.join(', ')});`;
}

function splitParameters(value: string): string[] {
  if (!value.trim()) return [];
  const result: string[] = [];
  let start = 0;
  let depth = 0;
  for (let index = 0; index < value.length; index++) {
    if ('<([{'.includes(value[index])) depth++;
    else if ('>)]}'.includes(value[index])) depth = Math.max(0, depth - 1);
    else if (value[index] === ',' && depth === 0) {
      result.push(value.slice(start, index).trim());
      start = index + 1;
    }
  }
  result.push(value.slice(start).trim());
  return result.filter(Boolean);
}

export function researchTopicReport(input: ResearchTopicInput, docsRoot: string): string {
  const index = getResearchIndex(docsRoot);
  const profile = !input.profile || input.profile === 'auto'
    ? classifyQuestionProfile(input.query)
    : input.profile;
  const requirements = PROFILE_REQUIREMENTS[profile];
  const symbolMatches = dedupeEquivalentMatches(lookupSymbols(index, input.query, { limit: 8 }));
  const evidence = requirements.map((requirement) =>
    collectEvidence(index, input.query, profile, requirement, symbolMatches));
  const facetEvidence = collectFacetEvidence(index, input.query);
  const allEvidence = [...evidence, ...facetEvidence];
  const missing = allEvidence.filter((item) => !['covered', 'conversation'].includes(item.status));
  const coverage = missing.length === 0 ? 'sufficient' : 'settled-with-gaps';

  const lines = [
    'RESEARCH_TOPIC',
    `query: ${JSON.stringify(input.query)}`,
    `game_scope: ${basename(dirname(index.root))}`,
    `profile: ${profile} — ${PROFILE_LABELS[profile]}`,
    `required_evidence: ${requirements.join(', ')}`,
    `required_facets: ${facetEvidence.map((item) => item.title).join(', ') || 'none detected'}`,
    `coverage: ${coverage}`,
    `covered: ${allEvidence.filter((item) => ['covered', 'conversation'].includes(item.status)).map((item) => item.requirement === 'feature-facet' ? `facet:${item.title}` : item.requirement).join(', ') || 'none'}`,
    `missing_or_unavailable: ${missing.map((item) => `${item.requirement === 'feature-facet' ? `facet:${item.title}` : item.requirement} (${item.status})`).join(', ') || 'none'}`,
    `answer_boundary: ${
      coverage === 'sufficient'
        ? 'The required source categories are represented below. Use only claims stated directly in the excerpts. If the intended answer adds structure, behavior, naming rules, or examples absent from them, verify that exact claim with read_file/search_files first.'
        : 'The index completed every required category search. Answer with the available evidence and state the listed corpus gap; do not retry synonyms or search an unavailable source tree.'
    }`,
    'dialect_contract: Emit only engine API/callback identifiers present in this evidence or the user\'s code. Do not substitute names remembered from another HPL game.',
    `corpus: ${formatCorpusStats(index)}`,
    '',
    'evidence:',
  ];

  for (const item of allEvidence) {
    lines.push(
      `[${item.requirement}] status=${item.status}`,
      `title: ${item.title}`,
    );
    if (item.sourceCategory) lines.push(`source_category: ${item.sourceCategory}`);
    if (item.path) {
      lines.push(
        `source: ${item.path}${item.startLine ? `:${item.startLine}${item.endLine && item.endLine !== item.startLine ? `-${item.endLine}` : ''}` : ''}`,
      );
    }
    lines.push(indent(item.excerpt, '  '), '');
  }

  const related = symbolMatches.filter((match) => ['exact', 'high'].includes(match.confidence)).slice(0, 3);
  if (related.length > 0) {
    lines.push('related_symbols:');
    for (const match of related) {
      lines.push(
        `- ${match.symbol.name} (${match.confidence}): ${match.symbol.signature} — ` +
          `${match.symbol.path}:${match.symbol.line}`,
      );
    }
  }
  lines.push(
    '',
    'sufficiency_rule: Required categories determine stopping. Optional extra examples, repeated confirmations, and alternate spellings must not delay the answer.',
  );
  return lines.join('\n');
}

const FACETS: Array<{ name: string; pattern: RegExp; query: string }> = [
  { name: 'decal', pattern: /\bdecals?\b/i, query: 'decal' },
  { name: 'texture/material', pattern: /\b(texture|material)\b/i, query: 'texture material' },
  { name: 'animation/emergence', pattern: /\b(animat|emerg|rise|appear)/i, query: 'agent emerge appear animation floor' },
  { name: 'particle effect', pattern: /\b(particle|effect|smoke|dust|splash)\b/i, query: 'ParticleSystem effect particle' },
  { name: 'sound', pattern: /\b(sound|audio|noise|music)\b/i, query: 'Sound_Create sound audio' },
  { name: 'physics/movement', pattern: /\b(physics|force|impulse|move|position|rotation)\b/i, query: 'physics force impulse position movement' },
];

function collectFacetEvidence(index: ResearchIndex, query: string): EvidenceItem[] {
  return FACETS.filter((facet) => facet.pattern.test(query)).map((facet) => {
    const code = searchChunks(
      index,
      facet.query,
      new Set<SourceCategory>(['engine-api', 'game-script', 'map-script']),
      1,
    )[0];
    const wiki = searchChunks(
      index,
      facet.query,
      new Set<SourceCategory>(['wiki-guide', 'wiki-api']),
      1,
    )[0];
    if (!code && !wiki) {
      return {
        requirement: 'feature-facet',
        status: 'not-found',
        title: facet.name,
        excerpt: `The complete API/script/map/wiki indexes were searched for ${facet.query} and returned no relevant evidence. Treat this facet as an explicit corpus gap.`,
      };
    }
    const parts: string[] = [];
    let primary = code?.chunk ?? wiki!.chunk;
    if (code) {
      parts.push(
        `CODE EVIDENCE ${code.chunk.path}:${code.chunk.startLine}-${code.chunk.endLine}`,
        relevantExcerpt(code.chunk.text, code.result.queryTerms, 900),
      );
    } else {
      parts.push('CODE/API SEARCH: no matching declaration or stock HPS usage was found. Do not invent a runtime API for this facet.');
    }
    if (wiki) {
      parts.push(
        `WIKI EVIDENCE ${wiki.chunk.path}:${wiki.chunk.startLine}-${wiki.chunk.endLine}`,
        relevantExcerpt(wiki.chunk.text, wiki.result.queryTerms, 900),
      );
      if (!code) primary = wiki.chunk;
    } else {
      parts.push('WIKI SEARCH: no matching guide/API article was found.');
    }
    return {
      requirement: 'feature-facet',
      status: 'covered',
      sourceCategory: primary.sourceCategory,
      path: primary.path,
      startLine: primary.startLine,
      endLine: primary.endLine,
      title: facet.name,
      excerpt: parts.join('\n'),
    };
  });
}

function collectEvidence(
  index: ResearchIndex,
  query: string,
  profile: QuestionProfile,
  requirement: EvidenceRequirement,
  symbolMatches: SymbolMatch[],
): EvidenceItem {
  if (requirement === 'user-context') {
    return {
      requirement,
      status: 'conversation',
      sourceCategory: 'conversation',
      title: 'User-provided code, error, or behavior in the conversation',
      excerpt: 'Use the user message/attachment already present in the transcript as the primary debugging evidence.',
    };
  }

  if (requirement === 'declaration' || requirement === 'api-search') {
    const strong = symbolMatches.find((match) => ['exact', 'high'].includes(match.confidence));
    if (strong) return symbolEvidence(index, requirement, strong);
    const apiCandidates = searchChunks(index, query, new Set<SourceCategory>(['engine-api']), 1);
    if (apiCandidates[0]) return chunkEvidence(requirement, apiCandidates[0].chunk, apiCandidates[0].result);
    return settledSearchEvidence(index, requirement, ['engine-api'], query);
  }

  if (requirement === 'guide' || requirement === 'wiki-search') {
    const queryWithProfile = `${query} ${wikiSeed(profile)}`;
    const candidates = searchChunks(
      index,
      queryWithProfile,
      new Set<SourceCategory>(['wiki-guide', 'wiki-api']),
      1,
    );
    if (candidates[0]) return chunkEvidence(requirement, candidates[0].chunk, candidates[0].result);
    return settledSearchEvidence(index, requirement, ['wiki-guide', 'wiki-api'], query);
  }

  if (requirement === 'game-pattern' || requirement === 'game-search') {
    if (profile === 'user-module') {
      const candidates = searchChunks(
        index,
        `${query} iScrUserModule ModuleInterfaces Handler _Global_`,
        new Set<SourceCategory>(['game-script']),
        12,
      );
      const helper = candidates.find(({ chunk }) => /(^|\/)script\/helpers\//i.test(chunk.path));
      const module = candidates.find(({ chunk }) => /(^|\/)script\/modules\//i.test(chunk.path));
      if (helper && module) {
        return {
          requirement,
          status: 'covered',
          sourceCategory: 'game-script',
          path: module.chunk.path,
          startLine: module.chunk.startLine,
          endLine: module.chunk.endLine,
          title: 'Stock user-module implementation plus map-facing helper pattern',
          excerpt: [
            `MODULE ${module.chunk.path}:${module.chunk.startLine}-${module.chunk.endLine}`,
            relevantExcerpt(module.chunk.text, module.result.queryTerms, 750),
            `HELPER ${helper.chunk.path}:${helper.chunk.startLine}-${helper.chunk.endLine}`,
            relevantExcerpt(helper.chunk.text, helper.result.queryTerms, 750),
          ].join('\n'),
        };
      }
    }
    for (const match of symbolMatches.filter((candidate) => ['exact', 'high'].includes(candidate.confidence))) {
      const usage = relatedUsages(index, match, 1)[0];
      if (usage) return usageEvidence(requirement, usage);
    }
    const candidates = searchChunks(
      index,
      expandWithSymbols(query, symbolMatches),
      new Set<SourceCategory>(['game-script', 'map-script']),
      1,
    );
    if (candidates[0]) return chunkEvidence(requirement, candidates[0].chunk, candidates[0].result);
    return settledSearchEvidence(index, requirement, ['game-script', 'map-script'], query);
  }

  if (requirement === 'config-registration') {
    const candidates = searchChunks(
      index,
      `${query} ${configSeed(profile, query)}`,
      new Set<SourceCategory>(['config']),
      1,
    );
    if (candidates[0]) return chunkEvidence(requirement, candidates[0].chunk, candidates[0].result);
    return settledSearchEvidence(index, requirement, ['config'], query);
  }

  if (requirement === 'editor-registration') {
    const candidates = searchChunks(
      index,
      `${query} EntityClasses AreaClasses userclasses editor class`,
      new Set<SourceCategory>(['editor']),
      1,
    );
    if (candidates[0]) return chunkEvidence(requirement, candidates[0].chunk, candidates[0].result);
    return settledSearchEvidence(index, requirement, ['editor'], query);
  }

  if (requirement === 'game-definition') {
    const scriptSymbol = symbolMatches.find((match) => match.symbol.sourceCategory === 'game-script');
    if (scriptSymbol) return symbolEvidence(index, requirement, scriptSymbol);
    const candidates = searchChunks(
      index,
      expandWithSymbols(query, symbolMatches),
      new Set<SourceCategory>(['game-script']),
      1,
    );
    if (candidates[0]) return chunkEvidence(requirement, candidates[0].chunk, candidates[0].result);
    return settledSearchEvidence(index, requirement, ['game-script'], query);
  }

  const mapUsages = symbolMatches.flatMap((match) => relatedUsages(index, match, 5))
    .filter((usage) => usage.sourceCategory === 'map-script');
  if (mapUsages[0]) return usageEvidence(requirement, mapUsages[0]);
  const mapCandidates = searchChunks(
    index,
    expandWithSymbols(query, symbolMatches),
    new Set<SourceCategory>(['map-script']),
    1,
  );
  if (mapCandidates[0]) return chunkEvidence(requirement, mapCandidates[0].chunk, mapCandidates[0].result);
  return settledSearchEvidence(index, requirement, ['map-script'], query);
}

function symbolEvidence(
  index: ResearchIndex,
  requirement: EvidenceRequirement,
  match: SymbolMatch,
): EvidenceItem {
  const symbol = match.symbol;
  const context = declarationContext(index, symbol.path, symbol.line);
  return {
    requirement,
    status: 'covered',
    sourceCategory: symbol.sourceCategory,
    path: symbol.path,
    startLine: symbol.line,
    endLine: symbol.endLine,
    title: `${symbol.kind} ${symbol.container ? `${symbol.container}::` : ''}${symbol.name}`,
    excerpt: `${context || symbol.signature}\nconfidence=${match.confidence}; matched_tokens=${match.matchedTokens.join(', ') || 'exact identifier'}`,
  };
}

function declarationContext(index: ResearchIndex, path: string, line: number): string {
  const chunk = index.chunks.find((candidate) =>
    candidate.path === path && candidate.startLine <= line && candidate.endLine >= line);
  if (!chunk) return '';
  const lines = chunk.text.split('\n');
  const localLine = Math.max(0, line - chunk.startLine);
  const start = Math.max(0, localLine - 1);
  const end = Math.min(lines.length, localLine + 4);
  return lines.slice(start, end)
    .map((value, offset) => `${chunk.startLine + start + offset}\t${value}`)
    .join('\n');
}

function usageEvidence(requirement: EvidenceRequirement, usage: UsageRecord): EvidenceItem {
  return {
    requirement,
    status: 'covered',
    sourceCategory: usage.sourceCategory,
    path: usage.path,
    startLine: usage.line,
    endLine: usage.endLine,
    title: `Representative ${usage.symbol} usage`,
    excerpt: usage.excerpt,
  };
}

function chunkEvidence(
  requirement: EvidenceRequirement,
  chunk: ChunkRecord,
  result: SearchResult,
): EvidenceItem {
  return {
    requirement,
    status: 'covered',
    sourceCategory: chunk.sourceCategory,
    path: chunk.path,
    startLine: chunk.startLine,
    endLine: chunk.endLine,
    title: chunk.heading || chunk.title,
    excerpt: `${relevantExcerpt(chunk.text, result.queryTerms, 1_500)}\n[matched terms: ${result.queryTerms.join(', ')}]`,
  };
}

function settledSearchEvidence(
  index: ResearchIndex,
  requirement: EvidenceRequirement,
  categories: SourceCategory[],
  query: string,
): EvidenceItem {
  const available = categories.some((category) => index.stats.byCategory[category] > 0);
  return {
    requirement,
    status: available ? 'not-found' : 'source-unavailable',
    sourceCategory: categories[0],
    title: available ? 'Indexed search completed with no relevant candidate' : 'Required source category is absent from this corpus',
    excerpt: available
      ? `The complete ${categories.join('/')} index was searched for ${JSON.stringify(query)} and returned no relevant evidence. Treat this as settled negative evidence.`
      : `The docs root contains zero files in ${categories.join('/')}. State this limitation; do not search alternate spellings for a tree that is not present.`,
  };
}

function relatedUsages(index: ResearchIndex, match: SymbolMatch, limit: number): UsageRecord[] {
  if (match.symbol.kind === 'method') {
    const containers = new Set(
      index.symbols
        .filter((symbol) =>
          symbol.kind === 'method' &&
          symbol.name.toLowerCase() === match.symbol.name.toLowerCase())
        .map((symbol) => symbol.container ?? ''),
    );
    // Call sites do not carry enough static type information to distinguish
    // heavily overloaded engine methods such as SetActive. Returning usages
    // pooled across unrelated receivers would be false evidence.
    if (containers.size > 1) return [];
  }
  const usages = index.usagesBySymbol.get(match.symbol.name.toLowerCase()) ?? [];
  return [...usages]
    .sort((left, right) =>
      usagePriority(left.sourceCategory) - usagePriority(right.sourceCategory) ||
      left.path.localeCompare(right.path) || left.line - right.line)
    .slice(0, limit);
}

function dedupeEquivalentMatches(matches: SymbolMatch[]): SymbolMatch[] {
  const seen = new Set<string>();
  return matches.filter((match) => {
    const symbol = match.symbol;
    const key = `${symbol.name.toLowerCase()}:${symbol.container ?? ''}:${symbol.signature}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function usagePriority(category: UsageRecord['sourceCategory']): number {
  return category === 'game-script' ? 0 : 1;
}

function expandWithSymbols(query: string, matches: SymbolMatch[]): string {
  const strong = matches.filter((match) => ['exact', 'high'].includes(match.confidence));
  return `${query} ${strong.slice(0, 3).map((match) => match.symbol.name).join(' ')}`.trim();
}

function wikiSeed(profile: QuestionProfile): string {
  switch (profile) {
    case 'custom-entity': return 'entity agent interface scripting best practices';
    case 'user-module': return 'user modules overview module script registration';
    case 'editor-pipeline': return 'editor setup registration userclasses';
    case 'implementation': return 'guide tutorial scripting';
    default: return '';
  }
}

function configSeed(profile: QuestionProfile, query: string): string {
  if (profile === 'user-module') return 'Modules Module Name ScriptFile ScriptClass ID';
  if (/\b(enemy|agent)\b/i.test(query)) return 'EntityTypes AgentType Agent ScriptFile ScriptClass';
  if (/\barea\b/i.test(query)) return 'EntityTypes AreaType Area ScriptFile ScriptClass';
  if (/\b(critter)\b/i.test(query)) return 'EntityTypes CritterType Critter ScriptFile ScriptClass';
  if (/\b(prop|entity)\b/i.test(query)) return 'EntityTypes PropType Name ScriptFile ScriptClass';
  return 'EntityTypes Type Name ScriptFile ScriptClass';
}

function formatCorpusStats(index: ResearchIndex): string {
  const categories = Object.entries(index.stats.byCategory)
    .filter(([, count]) => count > 0)
    .map(([category, count]) => `${category}=${count}`)
    .join(', ');
  return `${index.stats.files} files; ${index.stats.symbols} symbols; ${index.stats.chunks} chunks; ${index.stats.usages} call relationships; ${categories}`;
}

function indent(value: string, prefix: string): string {
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
}

function truncate(value: string, max: number): string {
  const compact = value.trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 3)}...`;
}

function relevantExcerpt(value: string, terms: string[], max: number): string {
  const lines = value.split('\n');
  if (lines.length <= 18) return truncate(value, max);
  const normalizedTerms = terms.map((term) => term.toLowerCase()).filter(Boolean);
  let bestLine = 0;
  let bestScore = -1;
  for (let index = 0; index < lines.length; index++) {
    const lower = lines[index].toLowerCase();
    const score = normalizedTerms.reduce(
      (sum, term) => sum + (lower.includes(term) ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestLine = index;
    }
  }
  const start = Math.max(0, bestLine - 8);
  const end = Math.min(lines.length, bestLine + 10);
  const excerpt = lines.slice(start, end).join('\n');
  return truncate(
    `${start > 0 ? '...\n' : ''}${excerpt}${end < lines.length ? '\n...' : ''}`,
    max,
  );
}
