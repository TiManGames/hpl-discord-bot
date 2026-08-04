import MiniSearch from 'minisearch';
import { readdirSync, readFileSync, realpathSync, statSync } from 'node:fs';
import { basename, extname, join, relative, resolve, sep } from 'node:path';

export type SourceCategory =
  | 'engine-api'
  | 'game-script'
  | 'map-script'
  | 'wiki-guide'
  | 'wiki-api'
  | 'config'
  | 'editor'
  | 'auxiliary';

export type SymbolKind =
  | 'function'
  | 'method'
  | 'class'
  | 'interface'
  | 'enum'
  | 'namespace'
  | 'typedef';

export type SearchChannel = 'symbols' | 'paths' | 'content';
export type SearchMatchMode = 'auto' | 'exact' | 'prefix' | 'fuzzy' | 'lexical';

export interface FileRecord {
  id: string;
  path: string;
  basename: string;
  stem: string;
  extension: string;
  pathSegments: string;
  sourceCategory?: SourceCategory;
  textIndexed: boolean;
  binary: boolean;
}

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
  bodyStartOffset?: number;
  bodyEndOffset?: number;
  container?: string;
  inheritedTypes?: string[];
  sourceCategory: 'engine-api' | 'game-script' | 'map-script';
}

export interface ChunkRecord {
  id: string;
  path: string;
  startLine: number;
  endLine: number;
  heading: string;
  sourceCategory: SourceCategory;
  text: string;
  basename: string;
  stem: string;
  pathSegments: string;
  declarations: string;
  structuredAttributes: string;
  commentsAndStrings: string;
  bodyText: string;
}

export interface UsageRecord {
  symbol: string;
  path: string;
  line: number;
  endLine: number;
  excerpt: string;
  sourceCategory: 'game-script' | 'map-script';
  callerId?: string;
  callerName?: string;
}

export type SymbolRelationKind =
  | 'member'
  | 'sibling'
  | 'caller'
  | 'callee'
  | 'base'
  | 'derived'
  | 'lexical';

export interface RelatedSymbol {
  relation: SymbolRelationKind;
  symbol: SymbolRecord;
}

export interface RelationshipRecord {
  kind: 'registration' | 'include' | 'inheritance' | 'dispatch-call';
  from: string;
  to: string;
  sourcePath: string;
  line?: number;
  label?: string;
}

export interface RankedHit {
  id: string;
  channel: SearchChannel;
  score: number;
  rank: number;
  query: string;
  exact: boolean;
  path: string;
  symbol?: SymbolRecord;
  chunk?: ChunkRecord;
}

export interface CorpusStats {
  files: number;
  indexedFiles: number;
  symbols: number;
  chunks: number;
  usages: number;
  relationships: number;
}

export interface CorpusIndex {
  root: string;
  files: FileRecord[];
  filesByPath: Map<string, FileRecord>;
  symbols: SymbolRecord[];
  symbolsById: Map<string, SymbolRecord>;
  chunks: ChunkRecord[];
  chunksById: Map<string, ChunkRecord>;
  usagesBySymbol: Map<string, UsageRecord[]>;
  callersBySymbolId: Map<string, string[]>;
  calleesBySymbolId: Map<string, string[]>;
  relationships: RelationshipRecord[];
  relationshipsByPath: Map<string, RelationshipRecord[]>;
  symbolSearch: MiniSearch<SymbolRecord>;
  fileSearch: MiniSearch<FileRecord>;
  contentSearch: MiniSearch<ChunkRecord>;
  stats: CorpusStats;
}

export interface CorpusSearchOptions {
  queries: string[];
  channels?: SearchChannel[];
  path?: string;
  glob?: string;
  symbolKinds?: SymbolKind[];
  match?: SearchMatchMode;
  limit?: number;
}

const TEXT_EXTENSIONS = new Set([
  '.hps', '.md', '.txt', '.cfg', '.xml', '.def', '.lang', '.mat', '.glsl', '.hpsl',
]);
const MAX_CACHED_INDEXES = positiveInteger(process.env.HPL_INDEX_CACHE_SIZE, 2);
const CODE_CHUNK_LINES = 100;
const CODE_CHUNK_OVERLAP = 10;
const MAX_CHUNK_CHARS = 4_000;
const MAX_USAGES_PER_SYMBOL_AND_CATEGORY = 30;
const HPS_STATEMENT_KEYWORDS = new Set([
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break',
  'continue', 'return', 'try', 'catch', 'throw',
]);
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

const cache = new Map<string, CorpusIndex>();

export function clearCorpusIndexCache(): void {
  cache.clear();
}

export function getCorpusIndex(docsRoot: string): CorpusIndex {
  const root = realpathSync(resolve(docsRoot));
  const found = cache.get(root);
  if (found) {
    cache.delete(root);
    cache.set(root, found);
    return found;
  }
  const built = buildCorpusIndex(root);
  while (cache.size >= MAX_CACHED_INDEXES) {
    const oldest = cache.keys().next().value as string | undefined;
    if (!oldest) break;
    cache.delete(oldest);
  }
  cache.set(root, built);
  return built;
}

export function normalizeIdentifier(value: string): string {
  return tokenize(value).join(' ');
}

export function searchCorpus(index: CorpusIndex, options: CorpusSearchOptions): RankedHit[] {
  const queries = [...new Set(options.queries.map((value) => value.trim()).filter(Boolean))].slice(0, 8);
  const channels = options.channels ?? ['symbols', 'paths', 'content'];
  const mode = options.match ?? 'auto';
  const limit = Math.max(1, Math.min(options.limit ?? 20, 50));
  const scope = normalizePath(options.path ?? '');
  const allowed = (path: string): boolean =>
    (!scope || path === scope || path.startsWith(`${scope}/`)) &&
    (!options.glob || globMatches(path, options.glob));
  const lists: RankedHit[][] = [];

  for (const query of queries) {
    const identifier = isIdentifierLike(query) && compactIdentifier(query).length >= 5;
    const prefix = identifier && (mode === 'prefix' || mode === 'auto');
    const fuzzy = identifier && (mode === 'fuzzy' || mode === 'auto');
    const exactOnly = mode === 'exact';
    const lexicalOptions = {
      combineWith: 'AND' as const,
      prefix,
      fuzzy: fuzzy ? 0.2 : false,
      maxFuzzy: 2,
    };

    if (channels.includes('symbols')) {
      const exact = index.symbols.filter((symbol) => allowed(symbol.path) &&
        (!options.symbolKinds || options.symbolKinds.includes(symbol.kind)) &&
        (symbol.name.toLowerCase() === query.toLowerCase() ||
          compactIdentifier(symbol.name) === compactIdentifier(query) ||
          `${symbol.container ?? ''}::${symbol.name}`.toLowerCase() === query.toLowerCase()))
        .sort((left, right) => exactSymbolMatchRank(left, query) - exactSymbolMatchRank(right, query) ||
          left.id.localeCompare(right.id));
      const recovered = fuzzy ? index.symbols.filter((symbol) => allowed(symbol.path) &&
        (!options.symbolKinds || options.symbolKinds.includes(symbol.kind)) &&
        Math.min(
          boundedEditDistance(compactIdentifier(symbol.name), compactIdentifier(query), 2),
          boundedEditDistance(compactIdentifier(`${symbol.container ?? ''}${symbol.name}`), compactIdentifier(query), 2),
        ) <= 2).sort((left, right) =>
        boundedEditDistance(compactIdentifier(left.name), compactIdentifier(query), 2) -
        boundedEditDistance(compactIdentifier(right.name), compactIdentifier(query), 2) ||
        left.id.localeCompare(right.id)) : [];
      const lexical = exactOnly ? [] : index.symbolSearch.search(query, {
        ...lexicalOptions,
        boost: { name: 8, signature: 3, container: 5, path: 1 },
        filter: (result) => {
          const symbol = index.symbolsById.get(String(result.id));
          return symbol !== undefined && allowed(symbol.path) &&
            (!options.symbolKinds || options.symbolKinds.includes(symbol.kind));
        },
      }).flatMap((result) => {
        const symbol = index.symbolsById.get(String(result.id));
        return symbol ? [symbol] : [];
      });
      const values = dedupe([...exact, ...recovered, ...lexical]).slice(0, Math.max(20, limit * 4));
      lists.push(values.map((symbol, rank) => ({
        id: symbol.id, channel: 'symbols', score: values.length - rank, rank: rank + 1,
        query, exact: exact.includes(symbol), path: symbol.path, symbol,
      })));
    }

    if (channels.includes('paths')) {
      const exact = index.files.filter((file) => allowed(file.path) && (
        file.path.toLowerCase() === query.toLowerCase() ||
        file.basename.toLowerCase() === query.toLowerCase() ||
        file.stem.toLowerCase() === query.toLowerCase() ||
        compactIdentifier(file.stem) === compactIdentifier(query)
      ));
      const recovered = fuzzy ? index.files.filter((file) => allowed(file.path) &&
        Math.min(
          boundedEditDistance(compactIdentifier(file.stem), compactIdentifier(query), 2),
          boundedEditDistance(compactIdentifier(file.basename), compactIdentifier(query), 2),
        ) <= 2).sort((left, right) =>
        boundedEditDistance(compactIdentifier(left.stem), compactIdentifier(query), 2) -
        boundedEditDistance(compactIdentifier(right.stem), compactIdentifier(query), 2) ||
        left.id.localeCompare(right.id)) : [];
      const lexical = exactOnly ? [] : index.fileSearch.search(query, {
        ...lexicalOptions,
        boost: { basename: 7, stem: 8, path: 3, pathSegments: 1 },
        filter: (result) => {
          const file = index.filesByPath.get(idPath(String(result.id)));
          return file !== undefined && allowed(file.path);
        },
      }).flatMap((result) => {
        const file = index.filesByPath.get(idPath(String(result.id)));
        return file ? [file] : [];
      });
      const values = dedupe([...exact, ...recovered, ...lexical]).slice(0, Math.max(20, limit * 4));
      lists.push(values.map((file, rank) => ({
        id: file.id, channel: 'paths', score: values.length - rank, rank: rank + 1,
        query, exact: exact.includes(file), path: file.path,
      })));
    }

    if (channels.includes('content')) {
      const exact = index.chunks.filter((chunk) =>
        allowed(chunk.path) && (chunk.text.toLowerCase().includes(query.toLowerCase()) ||
          chunk.heading.toLowerCase() === query.toLowerCase() ||
          chunk.basename.toLowerCase() === query.toLowerCase() ||
          chunk.stem.toLowerCase() === query.toLowerCase()));
      const lexical = exactOnly ? [] : index.contentSearch.search(query, {
        ...lexicalOptions,
        boost: {
          heading: 8, stem: 5, declarations: 7, structuredAttributes: 5,
          commentsAndStrings: 2, bodyText: 1, pathSegments: 1,
        },
        filter: (result) => {
          const chunk = index.chunksById.get(String(result.id));
          return chunk !== undefined && allowed(chunk.path);
        },
      }).flatMap((result) => {
        const chunk = index.chunksById.get(String(result.id));
        return chunk ? [chunk] : [];
      });
      const values = dedupe([...exact, ...lexical]).slice(0, Math.max(20, limit * 4));
      lists.push(values.map((chunk, rank) => ({
        id: chunk.id, channel: 'content', score: values.length - rank, rank: rank + 1,
        query, exact: exact.includes(chunk), path: chunk.path, chunk,
      })));
    }
  }
  return reciprocalRankFuse(lists).slice(0, limit);
}

export function reciprocalRankFuse(lists: RankedHit[][], k = 60): RankedHit[] {
  const fused = new Map<string, RankedHit>();
  for (const list of lists) {
    for (const hit of list) {
      const contribution = 1 / (k + hit.rank);
      const found = fused.get(hit.id);
      if (found) {
        found.score += contribution;
        found.exact ||= hit.exact;
      } else {
        fused.set(hit.id, { ...hit, score: contribution });
      }
    }
  }
  return [...fused.values()]
    .sort((left, right) => Number(right.exact) - Number(left.exact) ||
      right.score - left.score || left.id.localeCompare(right.id))
    .map((hit, rank) => ({ ...hit, rank: rank + 1 }));
}

export function relatedSymbols(
  index: CorpusIndex,
  symbol: SymbolRecord,
  limit = 20,
): RelatedSymbol[] {
  const result: RelatedSymbol[] = [];
  const add = (relation: SymbolRelationKind, candidate: SymbolRecord | undefined): void => {
    if (!candidate || candidate.id === symbol.id || result.some((value) => value.symbol.id === candidate.id)) return;
    result.push({ relation, symbol: candidate });
  };

  for (const base of symbol.inheritedTypes ?? []) {
    const name = base.replace(/\b(?:public|protected|private)\b/g, '').trim().split(/\s|</)[0];
    for (const candidate of index.symbols) if (candidate.name === name) add('base', candidate);
  }
  for (const candidate of index.symbols) {
    if ((candidate.inheritedTypes ?? []).some((base) => base.includes(symbol.name))) add('derived', candidate);
  }

  for (const callerId of index.callersBySymbolId.get(symbol.id) ?? []) {
    add('caller', index.symbolsById.get(callerId));
  }
  for (const calleeId of index.calleesBySymbolId.get(symbol.id) ?? []) {
    add('callee', index.symbolsById.get(calleeId));
  }

  if (symbol.kind === 'class' || symbol.kind === 'interface' || symbol.kind === 'enum') {
    for (const candidate of index.symbols) {
      if (candidate.path === symbol.path && candidate.container === symbol.name) add('member', candidate);
    }
  }
  if (symbol.container) {
    for (const candidate of index.symbols) {
      if (candidate.path === symbol.path && candidate.container === symbol.container) add('sibling', candidate);
    }
  }

  const lexical = searchCorpus(index, {
    queries: [symbol.name], channels: ['symbols'], match: 'lexical', limit: Math.min(50, limit * 2),
  });
  for (const hit of lexical) add('lexical', hit.symbol);
  return balanceRelations(result, Math.max(1, limit));
}

function balanceRelations(values: RelatedSymbol[], limit: number): RelatedSymbol[] {
  const order: SymbolRelationKind[] = [
    'caller', 'callee', 'base', 'derived', 'member', 'sibling', 'lexical',
  ];
  const buckets = new Map(order.map((relation) =>
    [relation, values.filter((value) => value.relation === relation)]));
  const offsets = new Map(order.map((relation) => [relation, 0]));
  const selected: RelatedSymbol[] = [];
  while (selected.length < limit) {
    let added = false;
    for (const relation of order) {
      const bucket = buckets.get(relation)!;
      let offset = offsets.get(relation)!;
      while (offset < bucket.length && selected.some((value) => value.symbol.id === bucket[offset].symbol.id)) offset++;
      offsets.set(relation, offset + 1);
      if (offset >= bucket.length) continue;
      selected.push(bucket[offset]);
      added = true;
      if (selected.length === limit) break;
    }
    if (!added) break;
  }
  return selected;
}

function buildCorpusIndex(root: string): CorpusIndex {
  const started = Date.now();
  const files = collectFiles(root).map(makeFileRecord);
  const filesByPath = new Map(files.map((file) => [file.path, file]));
  const symbols: SymbolRecord[] = [];
  const chunks: ChunkRecord[] = [];
  const sourceTexts = new Map<string, string>();
  const codeFiles: CodeFile[] = [];
  let indexedFiles = 0;

  for (const file of files) {
    if (!file.textIndexed || !file.sourceCategory) continue;
    let text: string;
    try {
      text = readFileSync(join(root, ...file.path.split('/')), 'utf8');
    } catch {
      continue;
    }
    indexedFiles++;
    sourceTexts.set(file.path, text);
    if (file.extension === '.hps') {
      const sourceCategory = file.sourceCategory as CodeCategory;
      const masked = maskCommentsAndStrings(text);
      symbols.push(...extractSymbols(file.path, text, masked, sourceCategory));
      codeFiles.push({ path: file.path, text, masked, category: sourceCategory });
    }
    chunks.push(...chunkText(file, text));
  }

  const symbolsById = new Map(symbols.map((symbol) => [symbol.id, symbol]));
  const chunksById = new Map(chunks.map((chunk) => [chunk.id, chunk]));
  const usagesBySymbol = buildUsages(codeFiles, symbols);
  const { callersBySymbolId, calleesBySymbolId } = buildCallGraph(symbols, usagesBySymbol);
  const relationships = buildRelationships(files, symbols, codeFiles, sourceTexts);
  const relationshipsByPath = groupRelationshipsByPath(files, symbols, relationships);
  const symbolSearch = new MiniSearch<SymbolRecord>({
    fields: ['name', 'signature', 'container', 'path'],
    storeFields: ['path', 'kind', 'name', 'line'],
    tokenize,
  });
  symbolSearch.addAll(symbols);
  const fileSearch = new MiniSearch<FileRecord>({
    fields: ['basename', 'stem', 'path', 'pathSegments'],
    storeFields: ['path', 'sourceCategory', 'textIndexed', 'binary'],
    tokenize,
  });
  fileSearch.addAll(files);
  const contentSearch = new MiniSearch<ChunkRecord>({
    fields: [
      'heading', 'stem', 'pathSegments', 'declarations', 'structuredAttributes',
      'commentsAndStrings', 'bodyText',
    ],
    storeFields: ['path', 'sourceCategory', 'startLine', 'endLine'],
    tokenize,
  });
  contentSearch.addAll(chunks);
  const usages = [...usagesBySymbol.values()].reduce((sum, values) => sum + values.length, 0);
  const stats = {
    files: files.length, indexedFiles, symbols: symbols.length, chunks: chunks.length,
    usages, relationships: relationships.length,
  };
  console.log(
    `[${new Date().toISOString()}] [INDEX] Built neutral corpus index for ${basename(root)} ` +
    `in ${Date.now() - started}ms (${stats.files} files, ${stats.indexedFiles} text, ` +
    `${stats.symbols} symbols, ${stats.chunks} chunks, ${stats.relationships} relationships)`,
  );
  return {
    root, files, filesByPath, symbols, symbolsById, chunks, chunksById,
    usagesBySymbol, callersBySymbolId, calleesBySymbolId,
    relationships, relationshipsByPath, symbolSearch, fileSearch,
    contentSearch, stats,
  };
}

function collectFiles(root: string): string[] {
  const result: string[] = [];
  const walk = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.gitkeep') continue;
      const full = join(directory, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile()) result.push(relative(root, full).split(sep).join('/'));
    }
  };
  if (statSync(root).isDirectory()) walk(root);
  return result.sort((left, right) => left.localeCompare(right));
}

function makeFileRecord(path: string): FileRecord {
  const extension = extname(path).toLowerCase();
  const name = basename(path);
  const sourceCategory = categorize(path);
  return {
    id: `file:${path}`, path, basename: name, stem: basename(path, extname(path)),
    extension, pathSegments: path.split('/').join(' '), sourceCategory,
    textIndexed: TEXT_EXTENSIONS.has(extension) && sourceCategory !== undefined,
    binary: !TEXT_EXTENSIONS.has(extension),
  };
}

function categorize(path: string): SourceCategory | undefined {
  const lower = path.toLowerCase();
  const extension = extname(lower);
  if (lower === 'hps_api.hps' || lower.endsWith('/hps_api.hps')) return 'engine-api';
  if (extension === '.hps' && /(^|\/)maps?(\/|$)/.test(lower)) return 'map-script';
  if (extension === '.hps') return 'game-script';
  if (/(^|\/)(editor|userclasses)(\/|$)/.test(lower) || extension === '.def') return 'editor';
  if (extension === '.cfg' || extension === '.xml') return 'config';
  if (extension === '.md' || extension === '.txt') {
    const stem = basename(path, extname(path));
    return (/\/scripting\/scripting api\//.test(lower) || /^(?:c|i|e)[A-Z]/.test(stem)) &&
      !/(overview|guide|tutorial|fundamental|best practice|introduction)/.test(lower)
      ? 'wiki-api' : 'wiki-guide';
  }
  return TEXT_EXTENSIONS.has(extension) ? 'auxiliary' : undefined;
}

type CodeCategory = 'engine-api' | 'game-script' | 'map-script';
interface CodeFile { path: string; text: string; masked: string; category: CodeCategory }
interface TypeBody { name: string; kind: string; open: number; close: number }

function extractSymbols(path: string, text: string, masked: string, category: CodeCategory): SymbolRecord[] {
  const result: SymbolRecord[] = [];
  const bodies = findTypeBodies(masked);
  const starts = lineStarts(text);
  const add = (record: Omit<SymbolRecord, 'id' | 'normalizedName' | 'sourceCategory'>): void => {
    result.push({
      ...record,
      id: `symbol:${path}:${record.line}:${record.name}`,
      normalizedName: normalizeIdentifier(record.name),
      sourceCategory: category,
    });
  };
  for (const match of masked.matchAll(TYPE_PATTERN)) {
    const offset = (match.index ?? 0) + match[0].lastIndexOf(match[2]);
    add({
      name: match[2], kind: match[1] as SymbolKind, signature: originalLine(text, offset).trim(),
      path, line: lineAt(starts, offset), endLine: lineAt(starts, offset), offset,
      inheritedTypes: match[3]?.split(',').map((value) => value.trim()).filter(Boolean),
    });
  }
  for (const match of masked.matchAll(TYPEDEF_PATTERN)) {
    const offset = (match.index ?? 0) + match[0].lastIndexOf(match[2]);
    add({ name: match[2], kind: 'typedef', signature: compactSignature(match[0]), path,
      line: lineAt(starts, offset), endLine: lineAt(starts, offset), offset });
  }
  for (const match of masked.matchAll(FUNCDEF_PATTERN)) {
    const offset = (match.index ?? 0) + match[0].lastIndexOf(match[2]);
    add({ name: match[2], kind: 'typedef', signature: compactSignature(match[0]), path,
      line: lineAt(starts, offset), endLine: lineAt(starts, offset + match[0].length), offset });
  }
  for (const match of masked.matchAll(DECLARATION_PATTERN)) {
    const matchOffset = match.index ?? 0;
    const name = match[6];
    const returnToken = match[4].match(/^[A-Za-z_][A-Za-z0-9_]*/)?.[0] ?? '';
    if (HPS_STATEMENT_KEYWORDS.has(name) || HPS_STATEMENT_KEYWORDS.has(returnToken)) continue;
    const offset = matchOffset + match[0].lastIndexOf(name);
    const container = bodies.find((body) => body.open < matchOffset && body.close > matchOffset)?.name;
    const body = functionBodyRange(masked, matchOffset + match[0].length);
    add({
      name, kind: container ? 'method' : 'function', signature: compactSignature(match[0]), path,
      line: lineAt(starts, matchOffset), endLine: lineAt(starts, matchOffset + match[0].length),
      offset, container, bodyStartOffset: body?.start, bodyEndOffset: body?.end,
    });
  }
  for (const body of bodies.filter((candidate) => candidate.kind === 'class')) {
    const bodyText = masked.slice(body.open + 1, body.close);
    for (const match of bodyText.matchAll(CONSTRUCTOR_PATTERN)) {
      if (match[1] !== body.name) continue;
      const matchOffset = body.open + 1 + (match.index ?? 0);
      const offset = matchOffset + match[0].indexOf(match[1]);
      const functionBody = functionBodyRange(masked, matchOffset + match[0].length);
      add({ name: match[1], kind: 'method', signature: compactSignature(match[0]), path,
        line: lineAt(starts, matchOffset), endLine: lineAt(starts, matchOffset + match[0].length),
        offset, container: body.name, bodyStartOffset: functionBody?.start,
        bodyEndOffset: functionBody?.end });
    }
  }
  return dedupe(result);
}

function functionBodyRange(masked: string, afterDeclaration: number): { start: number; end: number } | undefined {
  let start = afterDeclaration;
  while (start < masked.length && /\s/.test(masked[start])) start++;
  if (masked[start] !== '{') return undefined;
  let depth = 1;
  for (let cursor = start + 1; cursor < masked.length; cursor++) {
    if (masked[cursor] === '{') depth++;
    else if (masked[cursor] === '}' && --depth === 0) return { start, end: cursor };
  }
  return undefined;
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

function buildUsages(files: CodeFile[], symbols: SymbolRecord[]): Map<string, UsageRecord[]> {
  const known = new Map<string, string>();
  for (const symbol of symbols) known.set(symbol.name.toLowerCase(), symbol.name);
  const declarationLines = new Set(symbols.map((symbol) => `${symbol.path}:${symbol.line}:${symbol.name}`));
  const result = new Map<string, UsageRecord[]>();
  const counts = new Map<string, number>();
  const callablesByPath = new Map<string, SymbolRecord[]>();
  for (const symbol of symbols) {
    if (symbol.kind !== 'function' && symbol.kind !== 'method') continue;
    const values = callablesByPath.get(symbol.path) ?? [];
    values.push(symbol);
    callablesByPath.set(symbol.path, values);
  }
  for (const values of callablesByPath.values()) values.sort((left, right) => left.offset - right.offset);
  for (const file of files) {
    if (file.category === 'engine-api') continue;
    const starts = lineStarts(file.text);
    const lines = file.text.split('\n');
    for (const match of file.masked.matchAll(/\b([A-Za-z_][A-Za-z0-9_]*)\s*\(/g)) {
      const name = known.get(match[1].toLowerCase());
      if (!name) continue;
      const line = lineAt(starts, match.index ?? 0);
      if (declarationLines.has(`${file.path}:${line}:${name}`)) continue;
      const countKey = `${name.toLowerCase()}:${file.category}`;
      const count = counts.get(countKey) ?? 0;
      if (count >= MAX_USAGES_PER_SYMBOL_AND_CATEGORY) continue;
      counts.set(countKey, count + 1);
      const first = Math.max(1, line - 1);
      const last = Math.min(lines.length, line + 1);
      const callOffset = match.index ?? 0;
      const caller = (callablesByPath.get(file.path) ?? [])
        .filter((symbol) => symbol.bodyStartOffset !== undefined && symbol.bodyEndOffset !== undefined &&
          symbol.bodyStartOffset < callOffset && symbol.bodyEndOffset > callOffset)
        .sort((left, right) => (right.bodyStartOffset ?? 0) - (left.bodyStartOffset ?? 0))[0];
      const values = result.get(name.toLowerCase()) ?? [];
      values.push({ symbol: name, path: file.path, line: first, endLine: last,
        excerpt: lines.slice(first - 1, last).map((value, index) => `${first + index}\t${value}`).join('\n'),
        sourceCategory: file.category, callerId: caller?.id, callerName: caller?.name });
      result.set(name.toLowerCase(), values);
    }
  }
  return result;
}

function buildCallGraph(
  symbols: SymbolRecord[],
  usagesBySymbol: Map<string, UsageRecord[]>,
): { callersBySymbolId: Map<string, string[]>; calleesBySymbolId: Map<string, string[]> } {
  const symbolsByName = new Map<string, SymbolRecord[]>();
  for (const symbol of symbols) {
    const values = symbolsByName.get(symbol.name.toLowerCase()) ?? [];
    values.push(symbol);
    symbolsByName.set(symbol.name.toLowerCase(), values);
  }
  const callerSets = new Map<string, Set<string>>();
  const calleeSets = new Map<string, Set<string>>();
  for (const [calleeName, usages] of usagesBySymbol) {
    const callees = symbolsByName.get(calleeName) ?? [];
    for (const usage of usages) {
      if (!usage.callerId) continue;
      for (const callee of callees) {
        if (callee.id === usage.callerId) continue;
        const callers = callerSets.get(callee.id) ?? new Set<string>();
        callers.add(usage.callerId);
        callerSets.set(callee.id, callers);
        const outgoing = calleeSets.get(usage.callerId) ?? new Set<string>();
        outgoing.add(callee.id);
        calleeSets.set(usage.callerId, outgoing);
      }
    }
  }
  return {
    callersBySymbolId: new Map([...callerSets].map(([key, values]) => [key, [...values].sort()])),
    calleesBySymbolId: new Map([...calleeSets].map(([key, values]) => [key, [...values].sort()])),
  };
}

function buildRelationships(
  files: FileRecord[], symbols: SymbolRecord[], codeFiles: CodeFile[],
  texts: Map<string, string>,
): RelationshipRecord[] {
  const result: RelationshipRecord[] = [];
  const callablesByPath = new Map<string, SymbolRecord[]>();
  for (const symbol of symbols) {
    if (symbol.kind !== 'function' && symbol.kind !== 'method') continue;
    const values = callablesByPath.get(symbol.path) ?? [];
    values.push(symbol);
    callablesByPath.set(symbol.path, values);
  }
  for (const values of callablesByPath.values()) values.sort((a, b) => a.offset - b.offset);
  for (const symbol of symbols) {
    for (const base of symbol.inheritedTypes ?? []) {
      result.push({ kind: 'inheritance', from: symbol.name,
        to: base.replace(/\b(?:public|protected|private)\b/g, '').trim(),
        sourcePath: symbol.path, line: symbol.line });
    }
  }
  for (const [path, text] of texts) {
    const category = files.find((file) => file.path === path)?.sourceCategory;
    if (category !== 'config' && category !== 'editor') continue;
    const starts = lineStarts(text);
    for (const match of text.matchAll(/<([A-Za-z_][\w:-]*)\b[^<>]*?\bScriptFile\s*=\s*["']([^"']+)["'][^<>]*?>/gi)) {
      const target = resolveFile(files, match[2]) ?? normalizePath(match[2]);
      result.push({ kind: 'registration', from: attribute(match[0], 'Name') ??
        attribute(match[0], 'Type') ?? match[1], to: target, sourcePath: path,
        line: lineAt(starts, match.index ?? 0), label: attribute(match[0], 'ScriptClass') });
    }
  }
  for (const file of codeFiles) {
    const starts = lineStarts(file.text);
    for (const match of file.text.matchAll(/^\s*#include\s+["<]([^">]+)[">]/gm)) {
      result.push({ kind: 'include', from: file.path,
        to: resolveFile(files, match[1]) ?? normalizePath(match[1]), sourcePath: file.path,
        line: lineAt(starts, match.index ?? 0) });
    }
    for (const match of file.text.matchAll(
      /cScript_RunGlobalFunc\s*\(\s*(?:[^,]+,\s*)?["']([^"']+)["']\s*,\s*["']([^"']+)["']/g,
    )) {
      const offset = match.index ?? 0;
      const owner = [...(callablesByPath.get(file.path) ?? [])].reverse()
        .find((symbol) => symbol.offset <= offset);
      result.push({ kind: 'dispatch-call', from: owner?.name ?? file.path,
        to: `${match[1]}::${match[2]}`, sourcePath: file.path,
        line: lineAt(starts, offset), label: owner?.container });
    }
  }
  const seen = new Set<string>();
  return result.filter((value) => {
    const key = `${value.kind}:${value.from}:${value.to}:${value.sourcePath}:${value.line ?? 0}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function groupRelationshipsByPath(
  files: FileRecord[], symbols: SymbolRecord[], relationships: RelationshipRecord[],
): Map<string, RelationshipRecord[]> {
  const result = new Map<string, RelationshipRecord[]>();
  const symbolPaths = new Map<string, Set<string>>();
  for (const symbol of symbols) {
    const values = symbolPaths.get(symbol.name.toLowerCase()) ?? new Set<string>();
    values.add(symbol.path);
    symbolPaths.set(symbol.name.toLowerCase(), values);
  }
  const knownPaths = new Set(files.map((file) => file.path));
  const add = (path: string, relationship: RelationshipRecord): void => {
    const values = result.get(path) ?? [];
    values.push(relationship);
    result.set(path, values);
  };
  for (const relationship of relationships) {
    add(relationship.sourcePath, relationship);
    if (knownPaths.has(relationship.to)) add(relationship.to, relationship);
    const names = relationship.kind === 'inheritance'
      ? [relationship.from, relationship.to]
      : relationship.kind === 'dispatch-call'
        ? [relationship.to.split('::')[0]]
        : [];
    for (const name of names) {
      for (const path of symbolPaths.get(name.toLowerCase()) ?? []) add(path, relationship);
    }
  }
  return result;
}

function chunkText(file: FileRecord, text: string): ChunkRecord[] {
  const lines = text.split('\n');
  if (file.sourceCategory === 'wiki-guide' || file.sourceCategory === 'wiki-api') {
    const sections: Array<{ heading: string; first: number; last: number }> = [];
    let heading = file.stem;
    let first = 1;
    for (let index = 0; index < lines.length; index++) {
      const match = lines[index].match(/^\s*(?:#{1,6}\s+(.+?)\s*|={2,6}\s*(.+?)\s*={2,6})\s*$/);
      if (!match) continue;
      if (index + 1 > first) sections.push({ heading, first, last: index });
      heading = (match[1] ?? match[2]).replace(/\[\[|\]\]|'''|''/g, '').trim();
      first = index + 1;
    }
    sections.push({ heading, first, last: lines.length });
    return sections.flatMap((section) => chunkRanges(file, lines, section.first, section.last, section.heading));
  }
  if (file.extension === '.hps') {
    const result: ChunkRecord[] = [];
    const step = CODE_CHUNK_LINES - CODE_CHUNK_OVERLAP;
    for (let first = 1; first <= lines.length; first += step) {
      const last = Math.min(lines.length, first + CODE_CHUNK_LINES - 1);
      result.push(makeChunk(file, first, last, file.basename, lines.slice(first - 1, last).join('\n')));
      if (last === lines.length) break;
    }
    return result;
  }
  return chunkRanges(file, lines, 1, Math.max(1, lines.length), file.basename);
}

function chunkRanges(file: FileRecord, lines: string[], first: number, last: number, heading: string): ChunkRecord[] {
  const result: ChunkRecord[] = [];
  for (let start = first; start <= last;) {
    let end = Math.min(last, start + 79);
    let text = lines.slice(start - 1, end).join('\n');
    while (text.length > MAX_CHUNK_CHARS && end > start) {
      end = Math.max(start, end - 8);
      text = lines.slice(start - 1, end).join('\n');
    }
    result.push(makeChunk(file, start, end, heading, text));
    if (end >= last) break;
    start = end + 1;
  }
  return result;
}

function makeChunk(file: FileRecord, first: number, last: number, heading: string, raw: string): ChunkRecord {
  const text = raw.slice(0, MAX_CHUNK_CHARS);
  const code = file.extension === '.hps';
  const identifiers = [...text.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)]
    .map((match) => match[0]);
  // Code syntax is represented by its complete identifier vocabulary plus
  // comments/strings. This keeps calls and types searchable without indexing
  // braces, operators, and repeated local syntax as a second full copy.
  const declarations = [...new Set(identifiers)].slice(0, 220).join(' ');
  const attributes = [...text.matchAll(/\b[A-Za-z_][\w:-]*\s*=\s*["']([^"']+)["']/g)]
    .map((match) => match[1]).slice(0, 120).join(' ');
  const comments = code ? [...text.matchAll(/\/\/([^\n]*)|\/\*([\s\S]*?)\*\//g)]
    .flatMap((match) => [match[1] ?? '', match[2] ?? '']).join(' ') : '';
  const strings = code ? [...text.matchAll(/["']([^"'\n]{2,})["']/g)].map((match) => match[1]).join(' ') : '';
  return {
    id: `chunk:${file.path}:${first}-${last}`, path: file.path, startLine: first,
    endLine: last, heading, sourceCategory: file.sourceCategory ?? 'auxiliary', text,
    basename: file.basename, stem: file.stem, pathSegments: file.pathSegments,
    declarations, structuredAttributes: attributes,
    commentsAndStrings: `${comments} ${strings}`.trim(), bodyText: code ? '' : text,
  };
}

function tokenize(value: string): string[] {
  return (value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/[_\-./\\:]+/g, ' ')
    .toLowerCase()
    .match(/[a-z0-9]+/g) ?? []).filter((term) => !/^\d+$/.test(term));
}

function compactIdentifier(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function exactSymbolMatchRank(symbol: SymbolRecord, query: string): number {
  const lower = query.toLowerCase();
  if (symbol.container && `${symbol.container}::${symbol.name}`.toLowerCase() === lower) return 0;
  if (!symbol.container && symbol.name.toLowerCase() === lower) return 1;
  if (symbol.name.toLowerCase() === lower) return 2;
  return 3;
}

function boundedEditDistance(left: string, right: string, limit: number): number {
  if (Math.abs(left.length - right.length) > limit) return limit + 1;
  if (left === right) return 0;
  let previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex++) {
    const current = new Array<number>(right.length + 1).fill(limit + 1);
    current[0] = leftIndex;
    let rowMinimum = current[0];
    const first = Math.max(1, leftIndex - limit);
    const last = Math.min(right.length, leftIndex + limit);
    for (let rightIndex = first; rightIndex <= last; rightIndex++) {
      current[rightIndex] = Math.min(
        previous[rightIndex] + 1,
        current[rightIndex - 1] + 1,
        previous[rightIndex - 1] + Number(left[leftIndex - 1] !== right[rightIndex - 1]),
      );
      rowMinimum = Math.min(rowMinimum, current[rightIndex]);
    }
    if (rowMinimum > limit) return limit + 1;
    previous = current;
  }
  return previous[right.length] <= limit ? previous[right.length] : limit + 1;
}

function isIdentifierLike(value: string): boolean {
  return /^[A-Za-z_][A-Za-z0-9_:.-]*$/.test(value);
}

function normalizePath(value: string): string {
  return value.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+|\/+$/g, '');
}

function idPath(id: string): string {
  return id.startsWith('file:') ? id.slice(5) : id;
}

function globMatches(path: string, glob: string): boolean {
  const escaped = normalizePath(glob)
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '\u0000').replace(/\*/g, '[^/]*').replace(/\?/g, '[^/]')
    .replace(/\u0000/g, '.*');
  return new RegExp(`^${escaped}$`, 'i').test(path) || new RegExp(`(?:^|/)${escaped}$`, 'i').test(path);
}

function maskCommentsAndStrings(text: string): string {
  const chars = text.split('');
  let state: 'code' | 'line' | 'block' | 'single' | 'double' = 'code';
  for (let index = 0; index < chars.length; index++) {
    const current = chars[index];
    const next = chars[index + 1];
    if (state === 'code') {
      if (current === '/' && next === '/') { chars[index] = chars[index + 1] = ' '; state = 'line'; index++; }
      else if (current === '/' && next === '*') { chars[index] = chars[index + 1] = ' '; state = 'block'; index++; }
      else if (current === "'") { chars[index] = ' '; state = 'single'; }
      else if (current === '"') { chars[index] = ' '; state = 'double'; }
    } else if (state === 'line') {
      if (current === '\n') state = 'code'; else chars[index] = ' ';
    } else if (state === 'block') {
      if (current === '*' && next === '/') { chars[index] = chars[index + 1] = ' '; state = 'code'; index++; }
      else if (current !== '\n') chars[index] = ' ';
    } else {
      const quote = state === 'single' ? "'" : '"';
      if (current === '\\') { chars[index] = ' '; if (chars[index + 1] !== '\n') chars[index + 1] = ' '; index++; }
      else if (current === quote) { chars[index] = ' '; state = 'code'; }
      else if (current !== '\n') chars[index] = ' ';
    }
  }
  return chars.join('');
}

function lineStarts(text: string): number[] {
  const starts = [0];
  for (let index = 0; index < text.length; index++) if (text.charCodeAt(index) === 10) starts.push(index + 1);
  return starts;
}

function lineAt(starts: number[], offset: number): number {
  let low = 0;
  let high = starts.length;
  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (starts[middle] <= offset) low = middle + 1;
    else high = middle;
  }
  return Math.max(1, low);
}

function originalLine(text: string, offset: number): string {
  const first = text.lastIndexOf('\n', Math.max(0, offset - 1)) + 1;
  const last = text.indexOf('\n', offset);
  return text.slice(first, last < 0 ? text.length : last);
}

function compactSignature(value: string): string {
  return value.replace(/^\s+/, '').replace(/\s+/g, ' ').replace(/[\s{;]+$/, '').trim();
}

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, 'i'))?.[1];
}

function resolveFile(files: FileRecord[], requested: string): string | undefined {
  const normalized = normalizePath(requested).toLowerCase();
  return files.filter((file) => {
    const lower = file.path.toLowerCase();
    return lower === normalized || lower.endsWith(`/${normalized}`) ||
      lower.endsWith(`/script/${normalized}`) || lower.endsWith(`/scripts/${normalized}`);
  }).sort((a, b) => a.path.length - b.path.length)[0]?.path;
}

function dedupe<T extends { id: string }>(values: T[]): T[] {
  const seen = new Set<string>();
  return values.filter((value) => !seen.has(value.id) && Boolean(seen.add(value.id)));
}

function positiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
