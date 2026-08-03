import MiniSearch, { type SearchResult } from 'minisearch';
import {
  readdirSync,
  readFileSync,
  realpathSync,
  statSync,
} from 'node:fs';
import { basename, extname, join, relative, resolve, sep } from 'node:path';

/**
 * HPS declaration extraction is adapted from `@hpl3/core/indexScript` in
 * TiManGames/hpl3-language-tools. That project deliberately uses its focused,
 * error-tolerant declaration index for workspace symbols while Tree-sitter
 * handles live syntax/semantic analysis. Keeping the same split here makes the
 * static retrieval index fast and tolerant of generated/malformed hps_api.hps.
 */

export type SourceCategory =
  | 'engine-api'
  | 'game-script'
  | 'map-script'
  | 'wiki-guide'
  | 'wiki-api'
  | 'config'
  | 'editor';

export type QuestionProfile =
  | 'api'
  | 'concept'
  | 'implementation'
  | 'behavior'
  | 'custom-entity'
  | 'user-module'
  | 'debugging'
  | 'negative-capability'
  | 'stock-behavior'
  | 'editor-pipeline';

export type SymbolKind =
  | 'function'
  | 'method'
  | 'class'
  | 'interface'
  | 'enum'
  | 'enum-member'
  | 'namespace'
  | 'typedef'
  | 'constant';

export interface SymbolRecord {
  id: string;
  name: string;
  normalizedName: string;
  kind: SymbolKind;
  signature: string;
  path: string;
  line: number;
  endLine: number;
  offset: number;
  container?: string;
  inheritedTypes?: string[];
  sourceCategory: 'engine-api' | 'game-script' | 'map-script';
}

export interface UsageRecord {
  symbol: string;
  path: string;
  line: number;
  endLine: number;
  excerpt: string;
  sourceCategory: 'game-script' | 'map-script';
}

export interface ChunkRecord {
  id: string;
  title: string;
  heading: string;
  path: string;
  startLine: number;
  endLine: number;
  sourceCategory: SourceCategory;
  text: string;
  symbols: string;
  searchText: string;
}

export interface SymbolMatch {
  symbol: SymbolRecord;
  score: number;
  confidence: 'exact' | 'high' | 'medium' | 'low';
  matchedTokens: string[];
}

export interface CorpusStats {
  files: number;
  symbols: number;
  chunks: number;
  usages: number;
  byCategory: Record<SourceCategory, number>;
}

export interface ResearchIndex {
  root: string;
  symbols: SymbolRecord[];
  chunks: ChunkRecord[];
  chunksById: Map<string, ChunkRecord>;
  usagesBySymbol: Map<string, UsageRecord[]>;
  search: MiniSearch<ChunkRecord>;
  stats: CorpusStats;
}

const DECLARATION_PATTERN =
  /(?:^|\n)[ \t]*(?:(shared|external)[ \t]+)?(?:(private|protected)[ \t]+)?(const[ \t]+)?([A-Za-z_][A-Za-z0-9_:]*(?:[ \t]*<[^;\n{}()]+>)?(?:[ \t]*\[[ \t]*\])?)((?:[ \t]*[@&](?:\+|in|out|inout)?[ \t]*)|[ \t]+)([A-Za-z_][A-Za-z0-9_]*)[ \t]*\(((?:[^()]|\([^()]*\))*)\)\s*((?:(?:const|override|final|explicit|property)\s*)*)(?=[{;])/gm;
const CONSTRUCTOR_PATTERN =
  /(?:^|[;\n}])\s*(?:(?:private|protected)\s+)?(?:explicit\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*\(((?:[^()]|\([^()]*\))*)\)\s*(?:explicit\s*)?(?=[{;])/gm;
const TYPE_PATTERN =
  /(?:^|\n)[ \t]*(?:shared[ \t]+)?(class|interface|enum|namespace)[ \t]+([A-Za-z_][A-Za-z0-9_]*)(?:[ \t]*:[ \t]*([^{\n]+))?/gm;
const TYPEDEF_PATTERN =
  /(?:^|\n)[ \t]*typedef[ \t]+([A-Za-z_][A-Za-z0-9_]*(?:[ \t]*[@&])?)[ \t]+([A-Za-z_][A-Za-z0-9_]*)[ \t]*;/gm;
const FUNCDEF_PATTERN =
  /(?:^|\n)[ \t]*(?:shared[ \t]+)?funcdef[ \t]+([A-Za-z_][A-Za-z0-9_:]*(?:[ \t]*<[^;\n{}()]+>)?(?:[ \t]*[@&](?:\+|in|out|inout)?)?)[ \t]+([A-Za-z_][A-Za-z0-9_]*)[ \t]*\(((?:[^()]|\([^()]*\))*)\)[ \t]*;/gm;

const INDEXABLE_EXTENSIONS = new Set(['.hps', '.md', '.txt', '.cfg', '.xml', '.def']);
const CODE_CHUNK_LINES = 120;
const CODE_CHUNK_OVERLAP = 12;
const MAX_CHUNK_CHARS = 3_600;
const MAX_USAGES_PER_SYMBOL_AND_CATEGORY = 30;
const MAX_CACHED_INDEXES = readPositiveInteger(process.env.HPL_INDEX_CACHE_SIZE, 2);

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'can', 'could', 'do', 'does', 'for',
  'from', 'give', 'how', 'i', 'in', 'into', 'is', 'it', 'me', 'my', 'named', 'of',
  'on', 'or', 'own', 'please', 'should', 'the', 'this', 'to', 'using', 'want', 'what',
  'when', 'where', 'which', 'with', 'would', 'you', 'your', 'c', 'scr', 'lux', 'hpl',
]);

const CANONICAL_TERMS: Record<string, string> = {
  activate: 'active', activated: 'active', activation: 'active',
  deactivate: 'active', deactivated: 'active', disable: 'active', disabled: 'active',
  enable: 'active', enabled: 'active',
  hide: 'visible', hidden: 'visible', show: 'visible', visibility: 'visible',
  position: 'pos', positioned: 'pos', rotation: 'rot', rotate: 'rot',
  intensity: 'brightness', illuminate: 'light', illumination: 'light',
  spawn: 'create', spawned: 'create', spawning: 'create',
  delete: 'destroy', remove: 'destroy',
  callback: 'callback', callbacks: 'callback',
  entities: 'entity', modules: 'module', scripts: 'script',
  run: 'run', runs: 'run', running: 'run',
  start: 'start', started: 'start', starting: 'start', starts: 'start',
};

const DOMAIN_TERMS = new Set([
  'agent', 'area', 'camera', 'decal', 'door', 'entity', 'light', 'material',
  'module', 'particle', 'player', 'prop', 'sound', 'texture', 'timer',
]);

const indexCache = new Map<string, ResearchIndex>();

export function clearResearchIndexCache(): void {
  indexCache.clear();
}

export function getResearchIndex(docsRoot: string): ResearchIndex {
  const root = realpathSync(resolve(docsRoot));
  const cached = indexCache.get(root);
  if (cached) {
    // Refresh insertion order so the cache behaves as an LRU. A bot can serve
    // multiple game channels, but holding every large corpus indefinitely is
    // unnecessary and makes memory usage scale with the number of games.
    indexCache.delete(root);
    indexCache.set(root, cached);
    return cached;
  }
  const built = buildResearchIndex(root);
  while (indexCache.size >= MAX_CACHED_INDEXES) {
    const oldest = indexCache.keys().next().value as string | undefined;
    if (!oldest) break;
    indexCache.delete(oldest);
  }
  indexCache.set(root, built);
  return built;
}

export function normalizeIdentifier(value: string): string {
  return tokenizeText(value).join(' ');
}

export function classifyQuestionProfile(query: string): QuestionProfile {
  const q = query.toLowerCase();
  if (/\b(user[ -]?module|cross[ -]?map|across maps|persistent module)\b/.test(q)) {
    return 'user-module';
  }
  if (/\b(custom|new)\b.*\b(entity|area|agent|enemy|critter|prop)\b|\bregister\b.*\b(entity|area|agent|prop)\b/.test(q)) {
    return 'custom-entity';
  }
  if (/\b(level|model) editor\b|\buserclasses?\b|\bplace(?:able)?\b.*\beditor\b/.test(q)) {
    return 'editor-pipeline';
  }
  if (/\b(error|exception|crash|doesn['’]?t work|not working|wrong|debug|fix)\b/.test(q)) {
    return 'debugging';
  }
  if (/\b(is it possible|can (?:hpl|soma|the engine)|does (?:hpl|soma|the api) support|no api|unsupported)\b/.test(q)) {
    return 'negative-capability';
  }
  if (/\b(stock|vanilla|game does|original game|existing behavior)\b/.test(q)) {
    return 'stock-behavior';
  }
  if (/\b(exact api|exact (?:function|call|symbol)|signature|minimal (?:code|example|call))\b/.test(q)) {
    return 'api';
  }
  if (/\b(behavior|sequence|state machine|animation|physics|emerge|fade|move|timer)\b/.test(q)) {
    return 'behavior';
  }
  if (/^\s*(what|why)\b|\bconcept|overview|explain\b/.test(q)) return 'concept';
  return 'implementation';
}

export function lookupSymbols(
  index: ResearchIndex,
  query: string,
  options: { kind?: SymbolKind; limit?: number } = {},
): SymbolMatch[] {
  const raw = query.trim().toLowerCase();
  // Concrete object names and presentation requests are not API intent. Without
  // these removals, `named Door_01` pulls in door setters and `show the function
  // signature` incorrectly becomes a visibility mutation.
  const semanticQuery = query
    .replace(/\bnamed\s+["']?[A-Za-z_][A-Za-z0-9_]*["']?/gi, ' ')
    .replace(
      /\b(?:show|give|provide|list|return)\s+(?:me\s+)?(?:the\s+)?(?:exact\s+)?(?:function\s+)?(?:signature|syntax|example|code|call)\b/gi,
      ' ',
    );
  const normalized = normalizeIdentifier(semanticQuery);
  const originalQueryTokens = new Set(tokenizeText(semanticQuery));
  const explicitIdentifiers = new Set(
    (semanticQuery.match(/[A-Za-z_][A-Za-z0-9_]*/g) ?? []).map((value) => value.toLowerCase()),
  );
  const queryTokens = new Set(originalQueryTokens);
  const requestedDomains = [...originalQueryTokens].filter((token) => DOMAIN_TERMS.has(token));
  const wantsMutation = /\b(disable|deactivate|enable|activate|hide|show|set|change|turn|make|create|spawn|destroy|remove)\b/i.test(semanticQuery);
  const wantsObservation = /\b(is|check|whether|get|read|query|exists?)\b/i.test(semanticQuery);
  if (wantsMutation) queryTokens.add('set');
  if (/\b(?:turn\s+)?(?:on|off)\b/i.test(semanticQuery)) queryTokens.add('active');
  const intentTokens = new Set(requestedDomains);
  if (wantsMutation) intentTokens.add('set');
  for (const term of originalQueryTokens) {
    if (['active', 'brightness', 'create', 'destroy', 'pos', 'rot', 'visible'].includes(term)) {
      intentTokens.add(term);
    }
  }
  if (/\b(?:turn\s+)?(?:on|off)\b/i.test(semanticQuery)) intentTokens.add('active');
  const compactQuery = normalized.replace(/\s+/g, '');
  const matches: SymbolMatch[] = [];

  for (const symbol of index.symbols) {
    if (options.kind && symbol.kind !== options.kind) continue;
    const symbolTokens = tokenizeText(symbol.name);
    const symbolSet = new Set(symbolTokens);
    const intersect = symbolTokens.filter((token) => queryTokens.has(token));
    const coverage = symbolSet.size === 0 ? 0 : new Set(intersect).size / symbolSet.size;
    const precision = queryTokens.size === 0 ? 0 : new Set(intersect).size / queryTokens.size;
    const intentCoverage = intentTokens.size === 0
      ? 0
      : [...intentTokens].filter((term) => symbolSet.has(term)).length / intentTokens.size;
    const symbolCompact = symbol.normalizedName.replace(/\s+/g, '');
    let score = 0;

    if (raw === symbol.name.toLowerCase()) score += 1_200;
    else if (normalized === symbol.normalizedName) score += 950;
    if (explicitIdentifiers.has(symbol.name.toLowerCase())) score += 650;
    if (symbolCompact === compactQuery) score += 500;
    if (symbolCompact.includes(compactQuery) || compactQuery.includes(symbolCompact)) score += 120;
    score += coverage * 430 + precision * 170;
    if (coverage === 1 && symbolSet.size > 0) score += 220;
    if (precision === 1 && queryTokens.size > 0) score += 100;
    score += intentCoverage * 350;
    if (intentTokens.size > 1 && intentCoverage === 1) score += 100;
    if (wantsMutation && symbolSet.has('set')) score += 170;
    if (wantsObservation && (symbolSet.has('get') || symbolSet.has('is'))) score += 120;
    if (originalQueryTokens.has('callback')) {
      if (/^On[A-Z_]/.test(symbol.name)) score += 520;
      else if (/Callback/i.test(symbol.name)) score += 240;
      else score -= 300;
    }
    if (originalQueryTokens.has('map')) {
      if (symbol.sourceCategory === 'map-script') score += 320;
      else if (/^On[A-Z_]/.test(symbol.name)) score -= 120;
    }
    if (symbol.sourceCategory === 'map-script' && /(^|\/)(?:_e3|[^/]*_old)(\/|$)/i.test(symbol.path)) {
      score -= 80;
    }
    const explicitlyTargetsContainer = symbol.container
      ? explicitIdentifiers.has(symbol.container.toLowerCase())
      : false;
    if (
      requestedDomains.length > 0 &&
      !requestedDomains.some((term) => symbolSet.has(term)) &&
      !explicitlyTargetsContainer
    ) {
      // Generic lifecycle hooks such as OnSetActive should not crowd out an
      // entity/light/sound-specific API merely because they share "set active".
      score -= 650;
    }
    if (
      wantsMutation &&
      symbolSet.size === 1 &&
      symbolSet.has('set') &&
      !originalQueryTokens.has('set')
    ) {
      score -= 750;
    }
    const distance = levenshtein(symbolCompact, compactQuery);
    if (compactQuery.length >= 4 && distance <= Math.max(2, Math.floor(compactQuery.length * 0.2))) {
      score += Math.max(0, 130 - distance * 30);
    }
    if (symbol.sourceCategory === 'engine-api') score += 55;
    if (symbol.kind === 'function') score += 20;
    if (score < 120) continue;

    const confidence: SymbolMatch['confidence'] =
      raw === symbol.name.toLowerCase() || normalized === symbol.normalizedName
        ? 'exact'
        : score >= 720 && coverage >= 0.75
          ? 'high'
          : score >= 430 && coverage >= 0.5
            ? 'medium'
            : 'low';
    matches.push({ symbol, score, confidence, matchedTokens: [...new Set(intersect)] });
  }

  matches.sort((a, b) =>
    b.score - a.score ||
    sourcePriority(a.symbol.sourceCategory) - sourcePriority(b.symbol.sourceCategory) ||
    a.symbol.name.localeCompare(b.symbol.name) ||
    a.symbol.line - b.symbol.line,
  );
  return matches.slice(0, options.limit ?? 8);
}

export function searchChunks(
  index: ResearchIndex,
  query: string,
  categories: ReadonlySet<SourceCategory>,
  limit = 5,
): Array<{ chunk: ChunkRecord; result: SearchResult }> {
  const results = index.search.search(query, {
    boost: { title: 5, heading: 4, symbols: 6, path: 2, searchText: 1 },
    prefix: (term) => term.length >= 4,
    fuzzy: (term) => term.length >= 6 ? 0.2 : false,
    maxFuzzy: 2,
    combineWith: 'OR',
    filter: (result) => categories.has(result.sourceCategory as SourceCategory),
  });
  return results.slice(0, limit).flatMap((result) => {
    const chunk = index.chunksById.get(String(result.id));
    return chunk ? [{ chunk, result }] : [];
  });
}

function buildResearchIndex(root: string): ResearchIndex {
  const startedAt = Date.now();
  const files = collectIndexableFiles(root);
  const symbols: SymbolRecord[] = [];
  const chunks: ChunkRecord[] = [];
  const codeFiles: Array<{
    path: string;
    text: string;
    masked: string;
    category: 'engine-api' | 'game-script' | 'map-script';
  }> = [];
  const byCategory = emptyCategoryCounts();

  for (const relPath of files) {
    const abs = join(root, ...relPath.split('/'));
    let text: string;
    try {
      text = readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    const category = categorizePath(relPath);
    if (!category) continue;
    byCategory[category] += 1;

    if (extname(relPath).toLowerCase() === '.hps') {
      const codeCategory = category as 'engine-api' | 'game-script' | 'map-script';
      const masked = maskCommentsAndStrings(text);
      symbols.push(...extractSymbols(relPath, text, masked, codeCategory));
      codeFiles.push({ path: relPath, text, masked, category: codeCategory });
      chunks.push(...chunkCode(relPath, text, codeCategory));
    } else if (category === 'wiki-guide' || category === 'wiki-api') {
      chunks.push(...chunkWiki(relPath, text, category));
    } else {
      chunks.push(...chunkStructuredText(relPath, text, category as 'config' | 'editor'));
    }
  }

  const usagesBySymbol = buildUsageRelationships(codeFiles, symbols);
  const chunksById = new Map(chunks.map((chunk) => [chunk.id, chunk]));
  const search = new MiniSearch<ChunkRecord>({
    fields: ['title', 'heading', 'path', 'symbols', 'searchText'],
    storeFields: [
      'sourceCategory',
    ],
    tokenize: tokenizeText,
    processTerm: (term) => STOP_WORDS.has(term) ? null : canonicalTerm(term),
  });
  search.addAll(chunks);
  const usages = [...usagesBySymbol.values()].reduce((sum, values) => sum + values.length, 0);
  const stats: CorpusStats = {
    files: files.length,
    symbols: symbols.length,
    chunks: chunks.length,
    usages,
    byCategory,
  };
  console.log(
    `[${new Date().toISOString()}] [INDEX] Built retrieval index for ${basename(root)} ` +
      `in ${Date.now() - startedAt}ms (${stats.files} files, ${stats.symbols} symbols, ` +
      `${stats.chunks} chunks, ${stats.usages} usages)`,
  );
  return { root, symbols, chunks, chunksById, usagesBySymbol, search, stats };
}

function collectIndexableFiles(root: string): string[] {
  const result: string[] = [];
  const walk = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      const full = join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.isFile() && INDEXABLE_EXTENSIONS.has(extname(entry.name).toLowerCase())) {
        result.push(relative(root, full).split(sep).join('/'));
      }
    }
  };
  if (statSync(root).isDirectory()) walk(root);
  return result.sort();
}

function categorizePath(path: string): SourceCategory | undefined {
  const lower = path.toLowerCase();
  const ext = extname(lower);
  if (lower === 'hps_api.hps' || lower.endsWith('/hps_api.hps')) return 'engine-api';
  if (ext === '.hps' && /(^|\/)(maps?)(\/|$)/.test(lower)) return 'map-script';
  if (ext === '.hps' && /(^|\/)(scripts?|entities)(\/|$)/.test(lower)) return 'game-script';
  if (ext === '.hps') return 'game-script';
  if (/(^|\/)(editor|userclasses)(\/|$)/.test(lower) || ext === '.def') return 'editor';
  if (['.cfg', '.xml'].includes(ext)) return 'config';
  if (['.md', '.txt'].includes(ext)) {
    const stem = basename(path, extname(path));
    return (
      /\/scripting\/scripting api\//.test(lower) ||
      /^(?:c|i|e)[A-Z]/.test(stem) ||
      /^(?:array|tString|tWString)$/.test(stem)
    ) && !/(overview|guide|tutorial|fundamental|best practice|introduction)/.test(lower)
      ? 'wiki-api'
      : 'wiki-guide';
  }
  return undefined;
}

interface TypeBody {
  name: string;
  kind: string;
  open: number;
  close: number;
}

function extractSymbols(
  path: string,
  text: string,
  masked: string,
  category: 'engine-api' | 'game-script' | 'map-script',
): SymbolRecord[] {
  const result: SymbolRecord[] = [];
  const typeBodies = findTypeBodies(masked);
  const starts = lineStarts(text);
  const lineOf = (offset: number): number => lineAtOffset(starts, offset);
  const add = (record: Omit<SymbolRecord, 'id' | 'normalizedName' | 'sourceCategory'>): void => {
    result.push({
      ...record,
      id: `${path}:${record.offset}:${record.name}`,
      normalizedName: normalizeIdentifier(record.name),
      sourceCategory: category,
    });
  };

  for (const match of masked.matchAll(TYPE_PATTERN)) {
    const offset = (match.index ?? 0) + match[0].lastIndexOf(match[2]);
    const kind = match[1] === 'class' || match[1] === 'interface' ||
      match[1] === 'enum' || match[1] === 'namespace'
      ? match[1] as SymbolKind
      : 'class';
    add({
      name: match[2], kind, signature: originalLineAt(text, offset).trim(), path,
      line: lineOf(offset), endLine: lineOf(offset), offset,
      inheritedTypes: match[3]?.split(',').map((value) => value.trim()).filter(Boolean),
    });
  }
  for (const match of masked.matchAll(TYPEDEF_PATTERN)) {
    const name = match[2];
    const offset = (match.index ?? 0) + match[0].lastIndexOf(name);
    add({ name, kind: 'typedef', signature: `typedef ${match[1].trim()} ${name}`, path,
      line: lineOf(offset), endLine: lineOf(offset), offset });
  }
  for (const match of masked.matchAll(FUNCDEF_PATTERN)) {
    const name = match[2];
    const offset = (match.index ?? 0) + match[0].lastIndexOf(name);
    add({ name, kind: 'typedef', signature: compactSignature(originalSlice(text, match.index ?? 0, match[0].length)), path,
      line: lineOf(offset), endLine: lineOf((match.index ?? 0) + match[0].length), offset });
  }

  for (const match of masked.matchAll(DECLARATION_PATTERN)) {
    const matchOffset = match.index ?? 0;
    const name = match[6];
    const offset = matchOffset + match[0].lastIndexOf(name);
    const container = typeBodies.find((body) => body.open < matchOffset && body.close > matchOffset)?.name;
    const signature = compactSignature(originalSlice(text, matchOffset, match[0].length));
    add({
      name, kind: container ? 'method' : 'function', signature, path,
      line: lineOf(matchOffset), endLine: lineOf(matchOffset + match[0].length),
      offset, container,
    });
  }

  for (const body of typeBodies.filter((candidate) => candidate.kind === 'class')) {
    const bodyText = masked.slice(body.open + 1, body.close);
    for (const match of bodyText.matchAll(CONSTRUCTOR_PATTERN)) {
      if (match[1] !== body.name) continue;
      const matchOffset = body.open + 1 + (match.index ?? 0);
      const offset = matchOffset + match[0].indexOf(match[1]);
      add({
        name: match[1], kind: 'method',
        signature: compactSignature(originalSlice(text, matchOffset, match[0].length)), path,
        line: lineOf(matchOffset), endLine: lineOf(matchOffset + match[0].length),
        offset, container: body.name,
      });
    }
  }
  return dedupeSymbols(result);
}

function findTypeBodies(masked: string): TypeBody[] {
  const result: TypeBody[] = [];
  for (const match of masked.matchAll(TYPE_PATTERN)) {
    const start = match.index ?? 0;
    const open = masked.indexOf('{', start + match[0].length);
    if (open < 0) continue;
    let depth = 1;
    let close = open + 1;
    for (; close < masked.length && depth > 0; close++) {
      if (masked[close] === '{') depth++;
      else if (masked[close] === '}') depth--;
    }
    result.push({ name: match[2], kind: match[1], open, close: Math.max(open, close - 1) });
  }
  return result;
}

function buildUsageRelationships(
  files: Array<{ path: string; text: string; masked: string; category: 'engine-api' | 'game-script' | 'map-script' }>,
  symbols: SymbolRecord[],
): Map<string, UsageRecord[]> {
  const known = new Map<string, string>();
  const declarationOffsets = new Set(symbols.map((symbol) => `${symbol.path}:${symbol.offset}`));
  for (const symbol of symbols) {
    if (symbol.sourceCategory !== 'map-script') {
      known.set(symbol.name.toLowerCase(), symbol.name);
    }
  }
  const result = new Map<string, UsageRecord[]>();
  const counts = new Map<string, number>();

  for (const file of files) {
    if (file.category === 'engine-api') continue;
    const starts = lineStarts(file.text);
    const lines = file.text.split('\n');
    for (const match of file.masked.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)) {
      const name = known.get(match[1].toLowerCase());
      if (!name) continue;
      const offset = match.index ?? 0;
      if (declarationOffsets.has(`${file.path}:${offset}`)) continue;
      const countKey = `${name.toLowerCase()}:${file.category}`;
      const count = counts.get(countKey) ?? 0;
      if (count >= MAX_USAGES_PER_SYMBOL_AND_CATEGORY) continue;
      counts.set(countKey, count + 1);
      const line = lineAtOffset(starts, offset);
      const start = Math.max(1, line - 1);
      const end = Math.min(lines.length, line + 1);
      const excerpt = lines.slice(start - 1, end).map((value, index) => `${start + index}\t${value}`).join('\n');
      const values = result.get(name.toLowerCase()) ?? [];
      values.push({ symbol: name, path: file.path, line: start, endLine: end, excerpt,
        sourceCategory: file.category });
      result.set(name.toLowerCase(), values);
    }
  }
  return result;
}

function chunkWiki(path: string, text: string, category: 'wiki-guide' | 'wiki-api'): ChunkRecord[] {
  const lines = text.split('\n');
  const sections: Array<{ heading: string; start: number; end: number }> = [];
  let heading = basename(path, extname(path));
  let start = 1;
  for (let index = 0; index < lines.length; index++) {
    const match = lines[index].match(/^\s*(?:#{1,6}\s+(.+?)\s*|={2,6}\s*(.+?)\s*={2,6})\s*$/);
    if (!match) continue;
    if (index + 1 > start) sections.push({ heading, start, end: index });
    heading = (match[1] ?? match[2]).replace(/\[\[|\]\]|'''|''/g, '').trim();
    start = index + 1;
  }
  sections.push({ heading, start, end: lines.length });
  return sections.flatMap((section) =>
    chunkLineRange(path, lines, section.start, section.end, category, section.heading));
}

function chunkCode(
  path: string,
  text: string,
  category: 'engine-api' | 'game-script' | 'map-script',
): ChunkRecord[] {
  const lines = text.split('\n');
  const result: ChunkRecord[] = [];
  const step = CODE_CHUNK_LINES - CODE_CHUNK_OVERLAP;
  for (let start = 1; start <= lines.length; start += step) {
    const end = Math.min(lines.length, start + CODE_CHUNK_LINES - 1);
    const segment = lines.slice(start - 1, end).join('\n');
    const callables = [...segment.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)]
      .map((match) => match[1]);
    const identifiers = [...segment.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)]
      .map((match) => match[0]).filter((value) => /_|[a-z][A-Z]/.test(value));
    result.push(makeChunk(path, start, end, category, basename(path), segment,
      [...new Set([...callables, ...identifiers])].slice(0, 72).join(' ')));
    if (end === lines.length) break;
  }
  return result;
}

function chunkStructuredText(
  path: string,
  text: string,
  category: 'config' | 'editor',
): ChunkRecord[] {
  const lines = text.split('\n');
  const starts = lineStarts(text);
  // Registration/config evidence lives primarily in leaf elements. Matching
  // self-closing tags avoids returning an entire <EntityTypes> or <Modules>
  // document as one giant, low-precision result.
  const blocks = [...text.matchAll(/<([A-Za-z_][\w:-]*)\b[^<>]*?\/>/g)];
  if (blocks.length === 0) {
    return chunkLineRange(path, lines, 1, lines.length, category, basename(path));
  }
  return blocks.slice(0, 2_000).map((match) => {
    const offset = match.index ?? 0;
    const start = lineAtOffset(starts, offset);
    const end = lineAtOffset(starts, offset + match[0].length);
    const attrs = [...match[0].matchAll(/\b(?:Name|ScriptFile|ScriptClass|AreaType|Type)\s*=\s*["']([^"']+)["']/gi)]
      .map((value) => value[1]);
    return makeChunk(path, start, end, category, `${match[1]} ${attrs[0] ?? ''}`.trim(),
      match[0].slice(0, MAX_CHUNK_CHARS), attrs.join(' '));
  });
}

function chunkLineRange(
  path: string,
  lines: string[],
  first: number,
  last: number,
  category: SourceCategory,
  heading: string,
): ChunkRecord[] {
  const result: ChunkRecord[] = [];
  let start = first;
  while (start <= last) {
    let end = Math.min(last, start + 59);
    let segment = lines.slice(start - 1, end).join('\n');
    while (segment.length > MAX_CHUNK_CHARS && end > start) {
      end = Math.max(start, end - 8);
      segment = lines.slice(start - 1, end).join('\n');
    }
    const identifiers = [...segment.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)]
      .map((match) => match[0]).filter((value) => /_|[a-z][A-Z]/.test(value));
    result.push(makeChunk(path, start, end, category, heading,
      segment.slice(0, MAX_CHUNK_CHARS), [...new Set(identifiers)].slice(0, 80).join(' ')));
    if (end >= last) break;
    start = end + 1;
  }
  return result;
}

function makeChunk(
  path: string,
  startLine: number,
  endLine: number,
  sourceCategory: SourceCategory,
  heading: string,
  text: string,
  symbols: string,
): ChunkRecord {
  const code = ['engine-api', 'game-script', 'map-script'].includes(sourceCategory);
  return {
    id: `${path}:${startLine}:${sourceCategory}`,
    title: basename(path, extname(path)),
    heading,
    path,
    startLine,
    endLine,
    sourceCategory,
    text,
    symbols,
    searchText: code ? compactCodeSearchText(text) : text,
  };
}

function compactCodeSearchText(text: string): string {
  const comments = [...text.matchAll(/\/\/([^\n]*)|\/\*([\s\S]*?)\*\//g)]
    .flatMap((match) => [match[1] ?? '', match[2] ?? '']);
  const strings = [...text.matchAll(/["']([^"'\n]{2,})["']/g)]
    .map((match) => match[1]);
  // Callable/identifier names are already indexed in the higher-boost
  // `symbols` field. Keeping prose and resource names here retains conceptual
  // matching without duplicating hundreds of code tokens in MiniSearch.
  return [...new Set([...comments, ...strings])].join(' ').slice(0, 1_800);
}

function tokenizeText(value: string): string[] {
  const expanded = value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/[_\-./\\:]+/g, ' ')
    .toLowerCase();
  return (expanded.match(/[a-z0-9]+/g) ?? [])
    .filter((term) => !STOP_WORDS.has(term) && !/^\d+$/.test(term))
    .map(canonicalTerm);
}

function canonicalTerm(term: string): string {
  return Object.hasOwn(CANONICAL_TERMS, term) ? CANONICAL_TERMS[term] : term;
}

function maskCommentsAndStrings(text: string): string {
  // split('') preserves UTF-16 code-unit offsets, matching RegExp/String APIs.
  const chars = text.split('');
  let state: 'code' | 'line' | 'block' | 'single' | 'double' = 'code';
  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    const next = chars[i + 1];
    if (state === 'code') {
      if (current === '/' && next === '/') { chars[i] = chars[i + 1] = ' '; state = 'line'; i++; }
      else if (current === '/' && next === '*') { chars[i] = chars[i + 1] = ' '; state = 'block'; i++; }
      else if (current === "'") { chars[i] = ' '; state = 'single'; }
      else if (current === '"') { chars[i] = ' '; state = 'double'; }
    } else if (state === 'line') {
      if (current === '\n') state = 'code'; else chars[i] = ' ';
    } else if (state === 'block') {
      if (current === '*' && next === '/') { chars[i] = chars[i + 1] = ' '; state = 'code'; i++; }
      else if (current !== '\n') chars[i] = ' ';
    } else {
      const quote = state === 'single' ? "'" : '"';
      if (current === '\\') { chars[i] = ' '; if (chars[i + 1] !== '\n') chars[i + 1] = ' '; i++; }
      else if (current === quote) { chars[i] = ' '; state = 'code'; }
      else if (current !== '\n') chars[i] = ' ';
    }
  }
  return chars.join('');
}

function lineStarts(text: string): number[] {
  const starts = [0];
  for (let index = 0; index < text.length; index++) {
    if (text.charCodeAt(index) === 10) starts.push(index + 1);
  }
  return starts;
}

function lineAtOffset(starts: number[], offset: number): number {
  let low = 0;
  let high = starts.length;
  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (starts[middle] <= offset) low = middle + 1;
    else high = middle;
  }
  return Math.max(1, low);
}

function originalLineAt(text: string, offset: number): string {
  const start = text.lastIndexOf('\n', Math.max(0, offset - 1)) + 1;
  const end = text.indexOf('\n', offset);
  return text.slice(start, end < 0 ? text.length : end);
}

function originalSlice(text: string, offset: number, length: number): string {
  return text.slice(offset, offset + length);
}

function compactSignature(value: string): string {
  return value.replace(/^\s+/, '').replace(/\s+/g, ' ').replace(/[\s{;]+$/, '').trim();
}

function dedupeSymbols(symbols: SymbolRecord[]): SymbolRecord[] {
  const seen = new Set<string>();
  return symbols.filter((symbol) => {
    const key = `${symbol.kind}:${symbol.container ?? ''}:${symbol.name}:${symbol.signature}:${symbol.line}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sourcePriority(category: SymbolRecord['sourceCategory']): number {
  if (category === 'engine-api') return 0;
  if (category === 'game-script') return 1;
  return 2;
}

function emptyCategoryCounts(): Record<SourceCategory, number> {
  return {
    'engine-api': 0,
    'game-script': 0,
    'map-script': 0,
    'wiki-guide': 0,
    'wiki-api': 0,
    config: 0,
    editor: 0,
  };
}

function readPositiveInteger(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function levenshtein(left: string, right: string): number {
  if (left === right) return 0;
  if (!left) return right.length;
  if (!right) return left.length;
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i++) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= right.length; j++) {
      const above = previous[j];
      previous[j] = Math.min(
        previous[j] + 1,
        previous[j - 1] + 1,
        diagonal + (left[i - 1] === right[j - 1] ? 0 : 1),
      );
      diagonal = above;
    }
  }
  return previous[right.length];
}
