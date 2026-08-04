import { tool, zodSchema } from 'ai';
import { z } from 'zod';
import { closeSync, openSync, readFileSync, readSync, realpathSync, statSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';
import {
  getCorpusIndex,
  relatedSymbols,
  searchCorpus,
  type ChunkRecord,
  type CorpusIndex,
  type FileRecord,
  type RankedHit,
  type SearchChannel,
  type SymbolKind,
  type SymbolRecord,
} from './corpus-index.js';
import type { EvidenceLedger, EvidenceReference, SearchEvent } from './evidence.js';
import { listAttachmentsDir } from './attachments.js';

const MAX_FILE_BYTES = 64 * 1024;
const MAX_RANGE_LINES = 300;
const MAX_INSPECT_CHARS = 24 * 1024;
const RG_MAX_COUNT_PER_FILE = 20;
const RG_MAX_COLUMNS = 300;
const SEARCH_DETAIL_MAX_LINES = 80;
const SEARCH_DETAIL_MAX_CHARS = 12 * 1024;
const SEARCH_SUMMARY_MAX_FILES = 12;
const RG_TIMEOUT_MS = 10_000;
const RG_MAX_BUFFER = 8 * 1024 * 1024;
const BINARY_SAMPLE_BYTES = 8 * 1024;
const NO_CONTENT_MATCH = 'No matches found.';
const KNOWN_BINARY_EXTENSIONS = new Set([
  '.alex', '.dds', '.gif', '.hmm', '.jpeg', '.jpg', '.msh', '.png', '.tga', '.webp',
]);
const SYMBOL_KINDS = [
  'function', 'method', 'class', 'interface', 'enum', 'namespace', 'typedef',
] as const;
const SEARCH_CHANNELS = ['symbols', 'paths', 'content'] as const;
const INSPECT_PARTS = ['source', 'references', 'relationships', 'neighbors'] as const;

function toolLog(message: string): void {
  console.log(`[${new Date().toISOString()}] [TOOL] ${message}`);
}

// When the user has uploaded files to the current thread, `attachmentsRoot`
// points at their per-thread workspace and three attachment-scoped tools are
// added. They reuse the same sandboxed read/search helpers as the corpus tools,
// just rooted at the workspace, so a huge script is searched/paged on demand
// instead of being dumped into the model context.
export const fileTools = (docsRoot: string, ledgerDelta?: EvidenceLedger, attachmentsRoot?: string) => {
  const corpusTools = {
  list_corpus: tool({
    description:
      'Browse the active game corpus. With no path, returns top-level corpus sections and counts. ' +
      'With a path, returns a stable paginated directory/file listing. Use this when terminology or ' +
      'corpus structure is uncertain; binary asset paths are included.',
    inputSchema: zodSchema(z.object({
      path: z.string().optional().describe('Optional corpus-relative directory.'),
      glob: z.string().optional().describe('Optional filename/path glob, e.g. "*.hps" or "**/helper_*.hps".'),
      depth: z.union([z.literal(1), z.literal(2)]).optional().describe('Listing depth. Default 1.'),
      limit: z.number().int().min(1).max(200).optional().describe('Page size. Default 80.'),
      cursor: z.string().optional().describe('Opaque cursor from a previous list_corpus result.'),
    })),
    execute: async (input) => {
      const index = getCorpusIndex(docsRoot);
      const result = listCorpus(index, input);
      toolLog(`list_corpus(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  search_corpus: tool({
    description:
      'Search the complete active-game corpus without source-family gating. Searches symbols, paths, ' +
      'wiki pages, scripts, configuration, editor data, and other indexed text. Supply 2-4 useful ' +
      'query variants for conceptual requests; use exact identifiers as their own variants. Results ' +
      'have stable IDs that can be passed to inspect_corpus.',
    inputSchema: zodSchema(z.object({
      queries: z.array(z.string().min(1)).min(1).max(8).describe('Independent lexical or exact query variants.'),
      channels: z.array(z.enum(SEARCH_CHANNELS)).min(1).optional().describe('Default: symbols, paths, and content.'),
      path: z.string().optional().describe('Optional corpus-relative scope. Omit to search everything.'),
      glob: z.string().optional().describe('Optional path glob.'),
      symbolKinds: z.array(z.enum(SYMBOL_KINDS)).min(1).optional().describe('Optional symbol-kind filter.'),
      match: z.enum(['auto', 'exact', 'prefix', 'fuzzy', 'lexical']).optional().describe('Default auto. Fuzzy recovery is identifier-only.'),
      limit: z.number().int().min(1).max(50).optional().describe('Maximum fused results. Default 20.'),
    })),
    execute: async (input) => {
      if (!safeRelativeInput(input.path)) return 'Error: path traversal is not allowed.';
      const index = getCorpusIndex(docsRoot);
      const hits = searchCorpus(index, {
        ...input,
        channels: input.channels as SearchChannel[] | undefined,
        symbolKinds: input.symbolKinds as SymbolKind[] | undefined,
      });
      recordSearch(ledgerDelta, {
        queries: input.queries,
        channels: input.channels ?? [...SEARCH_CHANNELS],
        scope: input.path,
        glob: input.glob,
        resultIds: hits.map((hit) => hit.id),
        empty: hits.length === 0,
        truncated: hits.length === (input.limit ?? 20),
      });
      for (const hit of hits) recordReference(ledgerDelta, referenceForHit(hit));
      const result = formatSearchResults(index, input.queries, hits, input.path, input.glob);
      toolLog(`search_corpus(${JSON.stringify(input)}) -> ${result.length} chars, hits=${hits.length}`);
      return result;
    },
  }),

  inspect_corpus: tool({
    description:
      'Inspect exact stable IDs or known corpus paths. Returns exact source context and optionally ' +
      'references, generic relationships, and lexically neighboring symbols. Inspect close alternatives ' +
      'before claiming that no helper, wrapper, overload, base class, or related implementation exists.',
    inputSchema: zodSchema(z.object({
      targets: z.array(z.string().min(1)).min(1).max(20).describe('Stable IDs from search_corpus or exact relative paths.'),
      contextLines: z.number().int().min(0).max(20).optional().describe('Source context around symbols/chunks. Default 4.'),
      include: z.array(z.enum(INSPECT_PARTS)).min(1).optional().describe('Default: source, relationships, neighbors.'),
      limitPerTarget: z.number().int().min(1).max(50).optional().describe('Relationship/reference cap per target. Default 12.'),
    })),
    execute: async (input) => {
      const index = getCorpusIndex(docsRoot);
      const result = inspectCorpus(index, docsRoot, input, ledgerDelta);
      toolLog(`inspect_corpus(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  read_file: tool({
    description:
      'Read a known text path inside the active game corpus. For large files, provide a 1-based offset ' +
      'and line limit, or use search_files first. Use exact paths returned by corpus tools.',
    inputSchema: zodSchema(z.object({
      path: z.string().describe('Corpus-relative file path.'),
      offset: z.number().int().min(1).optional().describe('1-based start line.'),
      limit: z.number().int().min(1).optional().describe(`Maximum lines, capped at ${MAX_RANGE_LINES}.`),
    })),
    execute: async ({ path, offset, limit }) => {
      const result = readFile(path, docsRoot, { offset, limit });
      if (!result.startsWith('Error:')) recordReference(ledgerDelta, {
        id: `file:${normalizePath(path)}`, kind: 'file', label: normalizePath(path), path: normalizePath(path),
        line: offset,
      });
      toolLog(`read_file(${JSON.stringify({ path, offset, limit })}) -> ${result.length} chars`);
      return result;
    },
  }),

  search_files: tool({
    description:
      'Search corpus file contents with a precise ripgrep regex or literal string. Use for exact textual ' +
      'verification, uncommon syntax, or a user-supplied fragment. An empty result proves absence only ' +
      'inside the printed scope; it is not a corpus-wide implementation claim unless the search covered the corpus.',
    inputSchema: zodSchema(z.object({
      query: z.string().describe('Ripgrep regex, or fixed text when literal=true.'),
      path: z.string().optional().describe('Optional corpus-relative scope.'),
      glob: z.string().optional().describe('Optional filename glob.'),
      context: z.number().int().min(0).max(5).optional().describe('Surrounding lines. Default 0.'),
      caseInsensitive: z.boolean().optional(),
      literal: z.boolean().optional().describe('Treat query as fixed text.'),
    })),
    execute: async (input) => {
      const result = await searchFiles(input, docsRoot);
      const paths = extractSearchPaths(result);
      const event: SearchEvent = {
        queries: [input.query], channels: ['content'], scope: input.path, glob: input.glob,
        resultIds: paths.map((path) => `file:${path}`),
        empty: result.startsWith(NO_CONTENT_MATCH),
        truncated: result.startsWith('Broad search compacted:'),
      };
      recordSearch(ledgerDelta, event);
      for (const path of paths) recordReference(ledgerDelta, {
        id: `file:${path}`, kind: 'file', label: path, path,
      });
      toolLog(`search_files(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),
  };

  if (!attachmentsRoot?.length) return corpusTools;

  // ─── Attachment-scoped tools (user uploads for THIS thread) ────────────────
  // Same sandboxed read/search helpers as the corpus tools, rooted at the
  // per-thread workspace. Descriptions make clear these are the user's own
  // files, not the game corpus, so the model does not confuse the two.
  const attachmentTools = {
    list_attachments: tool({
      description:
        'List the files the user uploaded to THIS conversation (not the game corpus). ' +
        'Returns their relative paths in the attachments workspace. Call this first to see ' +
        'what the user attached, then search_attachments or read_attachment to inspect a file.',
      inputSchema: zodSchema(z.object({})),
      execute: async () => {
        const result = listAttachmentsDir(attachmentsRoot);
        toolLog(`list_attachments() -> ${result.length} chars`);
        return result;
      },
    }),

    read_attachment: tool({
      description:
        'Read a file the user uploaded to THIS conversation, by its path from list_attachments. ' +
        'These files can be very large (thousands of lines), so prefer search_attachments to ' +
        'locate the relevant lines first, then read a slice with a 1-based offset and a line ' +
        'limit. Only text files are supported.',
      inputSchema: zodSchema(z.object({
        path: z.string().describe('Relative path of the uploaded file (from list_attachments).'),
        offset: z.number().int().min(1).optional().describe('1-based start line.'),
        limit: z.number().int().min(1).optional().describe(`Maximum lines, capped at ${MAX_RANGE_LINES}.`),
      })),
      execute: async ({ path, offset, limit }) => {
        const result = readFile(path, attachmentsRoot, { offset, limit });
        toolLog(`read_attachment(${JSON.stringify({ path, offset, limit })}) -> ${result.length} chars`);
        return result;
      },
    }),

    search_attachments: tool({
      description:
        'Search the files the user uploaded to THIS conversation with a ripgrep regex or literal ' +
        'string. Use this to find the relevant lines in a large uploaded script instead of reading ' +
        'the whole file. Returns matches as "path:line: text".',
      inputSchema: zodSchema(z.object({
        query: z.string().describe('Ripgrep regex, or fixed text when literal=true.'),
        path: z.string().optional().describe('Optional workspace-relative scope.'),
        glob: z.string().optional().describe('Optional filename glob, e.g. "*.hps".'),
        context: z.number().int().min(0).max(5).optional().describe('Surrounding lines. Default 0.'),
        caseInsensitive: z.boolean().optional(),
        literal: z.boolean().optional().describe('Treat query as fixed text.'),
      })),
      execute: async (input) => {
        const result = await searchFiles(input, attachmentsRoot);
        toolLog(`search_attachments(${JSON.stringify(input)}) -> ${result.length} chars`);
        return result;
      },
    }),
  };

  return { ...corpusTools, ...attachmentTools };
};

interface ListInput { path?: string; glob?: string; depth?: 1 | 2; limit?: number; cursor?: string }

function listCorpus(index: CorpusIndex, input: ListInput): string {
  if (!safeRelativeInput(input.path)) return 'Error: path traversal is not allowed.';
  const scope = normalizePath(input.path ?? '');
  const depth = input.depth ?? 1;
  const limit = input.limit ?? 80;
  const cursor = decodeCursor(input.cursor);
  if (input.cursor && !cursor) return 'Error: invalid list_corpus cursor.';
  if (cursor && (cursor.scope !== scope || cursor.depth !== depth || cursor.glob !== (input.glob ?? ''))) {
    return 'Error: cursor does not belong to this listing scope.';
  }
  const offset = cursor?.offset ?? 0;
  const descendants = index.files.filter((file) =>
    (!scope || file.path.startsWith(`${scope}/`)) && (!input.glob || globMatches(file.path, input.glob)));
  if (scope && descendants.length === 0) return `No corpus entries found under ${JSON.stringify(scope)}.`;
  const entries = new Map<string, { path: string; directory: boolean; count: number; file?: FileRecord }>();
  for (const file of descendants) {
    const relativePath = scope ? file.path.slice(scope.length + 1) : file.path;
    const parts = relativePath.split('/');
    const take = Math.min(depth, parts.length);
    const entryPath = [scope, ...parts.slice(0, take)].filter(Boolean).join('/');
    const directory = parts.length > take;
    const found = entries.get(entryPath);
    if (found) found.count++;
    else entries.set(entryPath, { path: entryPath, directory, count: 1, file: directory ? undefined : file });
  }
  const sorted = [...entries.values()].sort((a, b) => a.path.localeCompare(b.path));
  const page = sorted.slice(offset, offset + limit);
  const lines = page.map((entry) => entry.directory
    ? `dir  ${entry.path}/ (${entry.count} files)`
    : `file ${entry.file!.id} | ${entry.file!.sourceCategory ?? 'asset'} | ${entry.file!.binary ? 'binary' : 'text'} | ${entry.path}`);
  const nextOffset = offset + page.length;
  if (nextOffset < sorted.length) {
    lines.push(`next_cursor: ${encodeCursor({ scope, depth, glob: input.glob ?? '', offset: nextOffset })}`);
  }
  return [
    `Corpus listing: scope=${scope || '.'}; depth=${depth}; entries=${sorted.length}; files=${descendants.length}`,
    ...lines,
  ].join('\n');
}

function formatSearchResults(
  index: CorpusIndex,
  queries: string[],
  hits: RankedHit[],
  path?: string,
  glob?: string,
): string {
  if (hits.length === 0) {
    return [
      'No corpus search results.',
      `queries: ${queries.map((value) => JSON.stringify(value)).join(', ')}`,
      `scope: ${path ?? '.'}${glob ? `; glob=${JSON.stringify(glob)}` : ''}`,
      'This supports only the absence of these lexical forms in the searched scope. Try another term, inspect a known identifier, or browse with list_corpus.',
    ].join('\n');
  }
  const lines = hits.map((hit, indexNumber) => {
    if (hit.symbol) {
      const owner = hit.symbol.container ? `${hit.symbol.container}::` : '';
      return `${indexNumber + 1}. ${hit.id} | symbols${hit.exact ? ' | exact' : ''} | ` +
        `${hit.symbol.sourceCategory} | ${hit.path}:${hit.symbol.line} | ${owner}${hit.symbol.name} | ${hit.symbol.signature}`;
    }
    if (hit.chunk) {
      return `${indexNumber + 1}. ${hit.id} | content${hit.exact ? ' | literal' : ''} | ` +
        `${hit.chunk.sourceCategory} | ${hit.path}:${hit.chunk.startLine}-${hit.chunk.endLine} | ` +
        `${hit.chunk.heading} | ${preview(hit.chunk.text)}`;
    }
    const file = index.filesByPath.get(hit.path);
    return `${indexNumber + 1}. ${hit.id} | paths${hit.exact ? ' | exact' : ''} | ` +
      `${file?.sourceCategory ?? 'asset'} | ${file?.binary ? 'binary' : 'text'} | ${hit.path}`;
  });
  return [
    `Corpus search: ${queries.map((value) => JSON.stringify(value)).join(' || ')}`,
    `scope: ${path ?? '.'}${glob ? `; glob=${JSON.stringify(glob)}` : ''}`,
    ...lines,
    'Pass stable IDs to inspect_corpus for exact source, relationships, references, or neighbors.',
  ].join('\n');
}

interface InspectInput {
  targets: string[];
  contextLines?: number;
  include?: Array<(typeof INSPECT_PARTS)[number]>;
  limitPerTarget?: number;
}

function inspectCorpus(
  index: CorpusIndex,
  docsRoot: string,
  input: InspectInput,
  ledgerDelta?: EvidenceLedger,
): string {
  const include = input.include ?? ['source', 'references', 'relationships', 'neighbors'];
  const context = input.contextLines ?? 4;
  const limit = input.limitPerTarget ?? 12;
  const sections: string[] = [];
  for (const target of input.targets) {
    const resolved = resolveTarget(index, target);
    if (!resolved) {
      sections.push(`## ${target}\nNot found. Use search_corpus or list_corpus to obtain an exact path or stable ID.`);
      continue;
    }
    const { file, symbol, chunk } = resolved;
    const reference = symbol ? referenceForSymbol(symbol) : chunk ? referenceForChunk(chunk) : referenceForFile(file);
    const symbolRelations = symbol ? relatedSymbols(index, symbol, Math.min(50, limit * 3)) : [];
    recordReference(ledgerDelta, reference);
    const lines: string[] = [`## ${reference.id}`, `path: ${file.path}`, `category: ${file.sourceCategory ?? 'asset'}`];
    if (symbol) lines.push(`symbol: ${symbol.container ? `${symbol.container}::` : ''}${symbol.name}`, `kind: ${symbol.kind}`, `signature: ${symbol.signature}`);
    if (include.includes('source')) {
      if (file.binary) lines.push('source: binary path only');
      else {
        const first = symbol ? Math.max(1, symbol.line - context) : chunk ? Math.max(1, chunk.startLine - context) : 1;
        const count = symbol ? Math.max(1, symbol.endLine - symbol.line + 1 + context * 2) :
          chunk ? Math.max(1, chunk.endLine - chunk.startLine + 1 + context * 2) : Math.min(80, MAX_RANGE_LINES);
        lines.push('source:', readFile(file.path, docsRoot, { offset: first, limit: count }));
      }
    }
    if (include.includes('references') && symbol) {
      const usages = (index.usagesBySymbol.get(symbol.name.toLowerCase()) ?? []).slice(0, limit);
      lines.push('references:', usages.length ? usages.map((usage) =>
        `${usage.path}:${usage.line}-${usage.endLine} | caller=${usage.callerName ?? 'file scope'}\n${usage.excerpt}`).join('\n') : 'none indexed');
      for (const usage of usages) recordReference(ledgerDelta, {
        id: `file:${usage.path}`, kind: 'file', label: usage.path, path: usage.path, line: usage.line,
      });
    }
    if (include.includes('relationships')) {
      const relationships = (index.relationshipsByPath.get(file.path) ?? []).filter((value) =>
        !symbol || value.from.toLowerCase() === symbol.name.toLowerCase() ||
        value.to.toLowerCase().includes(symbol.name.toLowerCase()) || value.sourcePath === symbol.path,
      ).slice(0, limit);
      const graphRelations = symbolRelations.filter((value) =>
        ['caller', 'callee', 'base', 'derived'].includes(value.relation)).slice(0, limit);
      const fileCalls = symbol ? [] : index.symbols.filter((value) => value.path === file.path)
        .flatMap((caller) => (index.calleesBySymbolId.get(caller.id) ?? []).flatMap((calleeId) => {
          const callee = index.symbolsById.get(calleeId);
          if (!callee) return [];
          recordReference(ledgerDelta, referenceForSymbol(callee));
          return [`callee: ${caller.container ? `${caller.container}::` : ''}${caller.name} -> ` +
            `${callee.id} | ${callee.container ? `${callee.container}::` : ''}${callee.name}`];
        }));
      const values = [
        ...relationships.map((value) =>
          `${value.kind}: ${value.from} -> ${value.to} (${value.sourcePath}${value.line ? `:${value.line}` : ''})`),
        ...graphRelations.map((value) => {
          recordReference(ledgerDelta, referenceForSymbol(value.symbol));
          return `${value.relation}: ${value.symbol.id} | ${value.symbol.container ? `${value.symbol.container}::` : ''}${value.symbol.name}`;
        }),
        ...fileCalls,
      ].slice(0, limit);
      lines.push('relationships:', values.length ? values.join('\n') : 'none indexed');
    }
    if (include.includes('neighbors')) {
      const neighbors = symbol
        ? symbolRelations.filter((value) => ['member', 'sibling', 'lexical'].includes(value.relation))
          .map((value) => ({ relation: value.relation, symbol: value.symbol }))
        : index.symbols.filter((value) => value.path === file.path)
          .map((value) => ({ relation: 'declaration', symbol: value }));
      lines.push('neighboring symbols:', neighbors.length ? neighbors.slice(0, limit).map((neighbor) => {
        const value = neighbor.symbol;
        recordReference(ledgerDelta, referenceForSymbol(value));
        return `${neighbor.relation}: ${value.id} | ${value.container ? `${value.container}::` : ''}${value.name} | ${value.signature}`;
      }).join('\n') : 'none indexed');
    }
    sections.push(lines.join('\n'));
  }
  const result = sections.join('\n\n');
  return result.length > MAX_INSPECT_CHARS
    ? `${result.slice(0, MAX_INSPECT_CHARS)}\n...(inspection truncated; inspect fewer targets or reduce context)`
    : result;
}

function resolveTarget(index: CorpusIndex, target: string): { file: FileRecord; symbol?: SymbolRecord; chunk?: ChunkRecord } | undefined {
  const symbol = index.symbolsById.get(target);
  if (symbol) return { file: index.filesByPath.get(symbol.path)!, symbol };
  const chunk = index.chunksById.get(target);
  if (chunk) return { file: index.filesByPath.get(chunk.path)!, chunk };
  const path = target.startsWith('file:') ? target.slice(5) : normalizePath(target);
  const file = index.filesByPath.get(path);
  return file ? { file } : undefined;
}

function referenceForHit(hit: RankedHit): EvidenceReference {
  return hit.symbol ? referenceForSymbol(hit.symbol) : hit.chunk ? referenceForChunk(hit.chunk) : {
    id: hit.id, kind: 'file', label: hit.path, path: hit.path,
  };
}

function referenceForSymbol(symbol: SymbolRecord): EvidenceReference {
  return { id: symbol.id, kind: 'symbol', label: symbol.container ? `${symbol.container}::${symbol.name}` : symbol.name,
    path: symbol.path, line: symbol.line };
}

function referenceForChunk(chunk: ChunkRecord): EvidenceReference {
  return { id: chunk.id, kind: 'chunk', label: chunk.heading, path: chunk.path, line: chunk.startLine };
}

function referenceForFile(file: FileRecord): EvidenceReference {
  return { id: file.id, kind: 'file', label: file.basename, path: file.path };
}

function recordReference(ledger: EvidenceLedger | undefined, value: EvidenceReference): void {
  if (!ledger) return;
  ledger.references.push(value);
}

function recordSearch(ledger: EvidenceLedger | undefined, value: SearchEvent): void {
  if (!ledger) return;
  ledger.searches.push(value);
}

function isWithin(root: string, candidate: string): boolean {
  const path = relative(root, candidate);
  return path === '' || (path !== '..' && !path.startsWith(`..${sep}`) && !isAbsolute(path));
}

function safeRelativeInput(value: string | undefined): boolean {
  if (!value) return true;
  const normalized = normalizePath(value);
  return !isAbsolute(value) && normalized !== '..' && !normalized.startsWith('../') && !normalized.includes('/../');
}

function safeResolve(docsRoot: string, userPath: string): string | null {
  const root = resolve(docsRoot);
  const absolute = resolve(root, userPath);
  return isWithin(root, absolute) ? absolute : null;
}

function normalizePath(value: string): string {
  return value.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\/+|\/+$/g, '');
}

function globMatches(path: string, glob: string): boolean {
  const escaped = normalizePath(glob)
    .replace(/[.+^${}()|[\]\\]/g, '\\$&')
    .replace(/\*\*/g, '\u0000').replace(/\*/g, '[^/]*').replace(/\?/g, '[^/]')
    .replace(/\u0000/g, '.*');
  return new RegExp(`^${escaped}$`, 'i').test(path) || new RegExp(`(?:^|/)${escaped}$`, 'i').test(path);
}

interface CursorValue { scope: string; depth: number; glob: string; offset: number }

function encodeCursor(value: CursorValue): string {
  return Buffer.from(JSON.stringify(value), 'utf8').toString('base64url');
}

function decodeCursor(value: string | undefined): CursorValue | undefined {
  if (!value) return undefined;
  try {
    const parsed = JSON.parse(Buffer.from(value, 'base64url').toString('utf8')) as CursorValue;
    return typeof parsed.scope === 'string' && typeof parsed.depth === 'number' &&
      typeof parsed.glob === 'string' && Number.isInteger(parsed.offset) && parsed.offset >= 0
      ? parsed : undefined;
  } catch {
    return undefined;
  }
}

function isLikelyBinaryFile(path: string): boolean {
  if (KNOWN_BINARY_EXTENSIONS.has(extname(path).toLowerCase())) return true;
  let descriptor: number | undefined;
  try {
    descriptor = openSync(path, 'r');
    const sample = Buffer.allocUnsafe(BINARY_SAMPLE_BYTES);
    const bytes = readSync(descriptor, sample, 0, sample.length, 0);
    for (let index = 0; index < bytes; index++) if (sample[index] === 0) return true;
    return false;
  } catch {
    return false;
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
  }
}

function readFile(userPath: string, docsRoot: string, range?: { offset?: number; limit?: number }): string {
  const absolute = safeResolve(docsRoot, userPath);
  if (!absolute) return 'Error: path traversal is not allowed.';
  try {
    const stat = statSync(absolute);
    if (stat.isDirectory()) return `Error: "${userPath}" is a directory, not a file.`;
    if (!stat.isFile()) return `Error: "${userPath}" is not a regular file.`;
    const realRoot = realpathSync(resolve(docsRoot));
    const realFile = realpathSync(absolute);
    if (!isWithin(realRoot, realFile)) return 'Error: path traversal is not allowed.';
    if (isLikelyBinaryFile(realFile)) return `Error: "${userPath}" is a binary file. read_file supports text only.`;
    const ranged = range && (range.offset !== undefined || range.limit !== undefined);
    if (!ranged && stat.size > MAX_FILE_BYTES) {
      return `Error: "${userPath}" is ${Math.round(stat.size / 1024)} KB, too large to read in full. ` +
        `Use search_files or read_file with a 1-based offset and a limit up to ${MAX_RANGE_LINES}.`;
    }
    const content = readFileSync(absolute, 'utf8');
    if (!ranged) return content;
    const lines = content.split('\n');
    const first = Math.max(1, range!.offset ?? 1);
    const wanted = Math.min(range!.limit ?? MAX_RANGE_LINES, MAX_RANGE_LINES);
    const selected = lines.slice(first - 1, first - 1 + wanted);
    if (selected.length === 0) return `Error: offset ${first} is past end of file (${lines.length} lines).`;
    const numbered = selected.map((line, index) => `${first + index}\t${line}`).join('\n');
    const last = first + selected.length - 1;
    return last < lines.length
      ? `${numbered}\n...(${lines.length - last} more lines — continue with offset: ${last + 1})`
      : numbered;
  } catch (error: unknown) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return `Error: file not found: ${userPath}`;
    return `Error reading file: ${(error as Error).message}`;
  }
}

interface SearchInput {
  query: string;
  path?: string;
  glob?: string;
  context?: number;
  caseInsensitive?: boolean;
  literal?: boolean;
}

interface RgResult { stdout: string; stderr: string; code: number; timedOut: boolean }

function runRipgrep(args: string[], cwd: string): Promise<RgResult> {
  return new Promise((done) => {
    execFile('rg', args, { cwd, maxBuffer: RG_MAX_BUFFER, timeout: RG_TIMEOUT_MS, windowsHide: true },
      (error, stdout, stderr) => {
        const value = error as (NodeJS.ErrnoException & { code?: number | string; killed?: boolean }) | null;
        done({ stdout: stdout ?? '', stderr: stderr ?? '',
          code: value && typeof value.code === 'number' ? value.code : value ? 2 : 0,
          timedOut: Boolean(value?.killed) });
      });
  });
}

async function searchFiles(input: SearchInput, docsRoot: string): Promise<string> {
  let searchPath = '.';
  if (input.path && input.path !== '.') {
    const absolute = safeResolve(docsRoot, input.path);
    if (!absolute) return 'Error: path traversal is not allowed.';
    try {
      const root = realpathSync(resolve(docsRoot));
      const scoped = realpathSync(absolute);
      if (!isWithin(root, scoped)) return 'Error: path traversal is not allowed.';
      searchPath = relative(resolve(docsRoot), absolute).split(sep).join('/') || '.';
    } catch (error: unknown) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return `Error: search path not found: ${input.path}`;
      return `Error resolving search path: ${(error as Error).message}`;
    }
  }
  const args = ['-n', '--no-heading', '--color=never', '--max-columns', String(RG_MAX_COLUMNS),
    '--max-count', String(RG_MAX_COUNT_PER_FILE)];
  if (input.caseInsensitive) args.push('-i');
  if (input.literal) args.push('-F');
  if (input.context) args.push('-C', String(input.context));
  if (input.glob) args.push('-g', input.glob);
  args.push('--', input.query, searchPath);
  const result = await runRipgrep(args, resolve(docsRoot));
  if (result.timedOut) return 'Error: search timed out. Narrow the query, glob, or path.';
  if (result.code === 1) return contentMiss(input);
  if (result.code !== 0) return `Error running search: ${(result.stderr || 'ripgrep failed').trim()}`;
  const lines = result.stdout.split('\n').filter(Boolean).map(normalizeRgLine);
  if (lines.length === 0) return contentMiss(input);
  const detailed = lines.join('\n');
  return lines.length > SEARCH_DETAIL_MAX_LINES || detailed.length > SEARCH_DETAIL_MAX_CHARS
    ? summarizeSearch(lines) : detailed;
}

function contentMiss(input: SearchInput): string {
  return [
    NO_CONTENT_MATCH,
    `scope: ${input.path ?? '.'}${input.glob ? `; glob=${JSON.stringify(input.glob)}` : ''}`,
    `${input.literal ? 'Literal' : 'Regex'} content ${JSON.stringify(input.query)} was absent from this scope.`,
    'This does not establish absence from paths, sibling scopes, related symbols, or differently worded documentation.',
  ].join('\n');
}

function normalizeRgLine(line: string): string {
  const match = line.match(/^(.*?)([:-]\d+[:-])(.*)$/s);
  return match ? `${match[1].replace(/\\/g, '/').replace(/^\.\//, '')}${match[2]}${match[3]}` : line;
}

function summarizeSearch(lines: string[]): string {
  const files = new Map<string, { matches: number; first: string }>();
  for (const line of lines) {
    const match = line.match(/^(.*?):\d+:(.*)$/s);
    if (!match) continue;
    const found = files.get(match[1]);
    if (found) found.matches++;
    else files.set(match[1], { matches: 1, first: preview(match[2]) });
  }
  const ranked = [...files.entries()].sort((a, b) => b[1].matches - a[1].matches || a[0].localeCompare(b[0]));
  return [
    `Broad search compacted: ${lines.length} returned lines across ${ranked.length} files.`,
    ...ranked.slice(0, SEARCH_SUMMARY_MAX_FILES).map(([path, value]) =>
      `- ${path} (${value.matches}${value.matches === RG_MAX_COUNT_PER_FILE ? '+' : ''} matches): ${value.first}`),
    ...(ranked.length > SEARCH_SUMMARY_MAX_FILES ? [`...(${ranked.length - SEARCH_SUMMARY_MAX_FILES} more files)`] : []),
    'Refine one relevant path or identifier.',
  ].join('\n');
}

function extractSearchPaths(result: string): string[] {
  const paths = new Set<string>();
  for (const line of result.split('\n')) {
    const detail = line.match(/^(.*?):\d+:/)?.[1];
    const summary = line.match(/^- (.*?) \(/)?.[1];
    if (detail) paths.add(detail);
    else if (summary) paths.add(summary);
  }
  return [...paths];
}

function preview(value: string): string {
  const compact = value.replace(/\s+/g, ' ').trim();
  return compact.length > 180 ? `${compact.slice(0, 177)}...` : compact;
}
