import { tool } from 'ai';
import { zodSchema } from 'ai';
import { z } from 'zod';
import {
  closeSync,
  openSync,
  readdirSync,
  readFileSync,
  readSync,
  realpathSync,
  statSync,
} from 'fs';
import { execFile } from 'node:child_process';
import { extname, isAbsolute, join, resolve, relative, sep } from 'path';
import { lookupSymbolReport, researchTopicReport } from './research-tools.js';

// ─── Tool definitions (Vercel AI SDK v6 format) ───────────────────────────────

const MAX_FILE_BYTES = 64 * 1024; // cap for a FULL (unranged) read
const MAX_RANGE_LINES = 300; // max lines returned by a single ranged read

// ripgrep bounds (search_files)
const RG_MAX_COUNT_PER_FILE = 20; // --max-count, per file
const RG_MAX_COLUMNS = 300; // --max-columns, skip minified/huge lines
const SEARCH_DETAIL_MAX_LINES = 80;
const SEARCH_DETAIL_MAX_CHARS = 12 * 1024;
const SEARCH_SUMMARY_MAX_FILES = 12;
const RG_TIMEOUT_MS = 10_000;
const RG_MAX_BUFFER = 8 * 1024 * 1024;

const BINARY_SAMPLE_BYTES = 8 * 1024;
const KNOWN_BINARY_EXTENSIONS = new Set([
  '.alex',
  '.dds',
  '.gif',
  '.hmm',
  '.jpeg',
  '.jpg',
  '.msh',
  '.png',
  '.tga',
  '.webp',
]);

function toolLog(msg: string): void {
  console.log(`[${new Date().toISOString()}] [TOOL] ${msg}`);
}

const SYMBOL_KINDS = [
  'function', 'method', 'class', 'interface', 'enum', 'enum-member',
  'namespace', 'typedef', 'constant',
] as const;

const QUESTION_PROFILES = [
  'auto', 'api', 'concept', 'implementation', 'behavior', 'custom-entity',
  'user-module', 'debugging', 'negative-capability', 'stock-behavior',
  'editor-pipeline',
] as const;

// The corpus tree is intentionally not injected into every prompt. Two indexed
// tools handle normal research; the lower-level find/search/read tools remain
// available as escape hatches for a specific gap or user-supplied path.
export const fileTools = (docsRoot: string) => ({
  lookup_symbol: tool({
    description:
      'Look up an HPS API or game-script symbol using a lazy index over hps_api.hps, ' +
      'script/**/*.hps, scripts/**/*.hps, and maps/**/*.hps. This normalizes CamelCase/underscores, ' +
      'handles common HPL synonyms (for example disable -> active), ranks overloads, ' +
      'and returns exact signatures plus representative call sites. Use this FIRST for ' +
      'exact API calls, callbacks, class/method names, or fuzzy symbol wording. Its ' +
      'answer_boundary states exactly what the excerpt verifies. Do not reconfirm the ' +
      'same declaration, but read the returned source before adding unshown behavior, ' +
      'inheritance, naming rules, or examples.',
    inputSchema: zodSchema(
      z.object({
        query: z.string().min(1).describe(
          'Symbol name or short natural-language concept, e.g. "disable entity" or "Entity_SetActive".',
        ),
        kind: z.enum(SYMBOL_KINDS).optional().describe('Optional declaration-kind filter.'),
        limit: z.number().int().min(1).max(10).optional().describe('Maximum ranked matches. Default 4.'),
      }),
    ),
    execute: async ({ query, kind, limit }) => {
      const input = { query, kind, limit };
      const result = lookupSymbolReport(input, docsRoot);
      toolLog(`lookup_symbol(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  research_topic: tool({
    description:
      'Retrieve sufficient cross-source evidence for a modding question in one indexed ' +
      'operation. It searches heading-chunked wiki guides, engine declarations, stock ' +
      'script/map patterns, config registrations, and editor definitions; follows symbol ' +
      'to usage relationships; and returns a structured evidence profile with required, ' +
      'covered, and unavailable categories. Use this FIRST for concepts, implementations, ' +
      'runtime behavior, custom entities, user modules, debugging, stock behavior, editor ' +
      'pipelines, and negative capability claims. Use profile=auto unless the request type ' +
      'is unambiguous. Coverage identifies available excerpts, not permission to infer ' +
      'unstated facts. Follow answer_boundary; if coverage is settled-with-gaps, state ' +
      'that corpus gap instead of repeating synonym searches.',
    inputSchema: zodSchema(
      z.object({
        query: z.string().min(1).describe('The user question or a concise faithful restatement.'),
        profile: z.enum(QUESTION_PROFILES).optional().describe(
          'Evidence profile. Default auto; use an explicit value only when clearly known.',
        ),
      }),
    ),
    execute: async ({ query, profile }) => {
      const input = { query, profile };
      const result = researchTopicReport(input, docsRoot);
      toolLog(`research_topic(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  find_files: tool({
    description:
      'Find documentation paths by a case-insensitive filename or path substring. ' +
      'Use this only when an indexed result identifies a filename gap or the user named ' +
      'a file whose path is unknown; indexed tools and search_files already return paths ' +
      'for content matches. Examples: find_files({ query: "Light.md" }) or ' +
      'find_files({ query: "agent_flesher", path: "script" }). Do not enumerate the ' +
      'whole corpus or repeat a query whose result is already in the conversation.',
    inputSchema: zodSchema(
      z.object({
        query: z
          .string()
          .min(1)
          .describe('Case-insensitive substring to match against relative file paths.'),
        path: z
          .string()
          .optional()
          .describe('Optional subdirectory under the active game corpus, e.g. "wiki" or "maps".'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(100)
          .optional()
          .describe('Maximum paths to return. Default 50, maximum 100.'),
      }),
    ),
    execute: async ({ query, path, limit }) => {
      const input = { query, path, limit };
      const result = findFiles(input, docsRoot);
      toolLog(`find_files(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  read_file: tool({
    description:
      'Read a known documentation path relative to the docs folder (for example ' +
      '"wiki/Scripting/Areas.md"). Get paths from indexed results or find_files; do not guess ' +
      'them. For large files, read a slice with offset (1-based start line) and limit ' +
      '(max lines) instead of the whole file, or use search_files first. Only text ' +
      'files are supported. Results remain in the conversation: do not repeat the ' +
      'same path/range unless it was truncated, failed, or new evidence requires it.',
    inputSchema: zodSchema(
      z.object({
        path: z
          .string()
          .describe('Relative path to the file inside the docs folder'),
        offset: z
          .number()
          .int()
          .min(1)
          .optional()
          .describe('1-based line to start reading from. Use with limit to page a large file.'),
        limit: z
          .number()
          .int()
          .min(1)
          .optional()
          .describe(`Maximum number of lines to return (capped at ${MAX_RANGE_LINES}).`),
      }),
    ),
    execute: async ({ path, offset, limit }) => {
      const input = { path, offset, limit };
      const result = readFile(path, docsRoot, { offset, limit });
      toolLog(`read_file(${JSON.stringify(input)}) -> ${result.length} chars`);
      return result;
    },
  }),

  search_files: tool({
    description:
      'Escape hatch: search the documentation for a specific text/regex using ripgrep ' +
      'when lookup_symbol/research_topic reports a concrete unresolved gap. Returns matches as ' +
      '"path:line: text" relative to the docs folder. Use this instead of reading a ' +
      'whole large file: e.g. search_files({ query: "OnStart|void", glob: "*.hps" }) ' +
      'or scope it with path: search_files({ query: "OnStart", ' +
      'path: "maps", glob: "*.hps", literal: true }). query is a ripgrep regex by default; ' +
      'set literal=true for an exact symbol/string without regex syntax. Optional: ' +
      'glob (e.g. "*.hps"), path (a subfolder to scope to), context (0-5 surrounding ' +
      'lines), caseInsensitive. Search output with enough context can be used directly ' +
      'as evidence; do not read the same lines again merely to confirm them. ' +
      'Do not use broad raw search as the first step for a normal question. Do not ' +
      'repeat an equivalent search unless the output says it was truncated or a new ' +
      'identifier gives you a materially narrower query. An empty result is useful ' +
      'negative evidence: after one exact authoritative search and one broader scoped ' +
      'search for a concept, stop trying synonyms and answer with the closest supported ' +
      'alternative. Broad result sets are automatically summarized by file; refine one ' +
      'of those paths instead of launching several overlapping broad searches.',
    inputSchema: zodSchema(
      z.object({
        query: z.string().describe('Ripgrep regular expression to search for (rg syntax).'),
        path: z
          .string()
          .optional()
          .describe('Optional subdirectory under the active game corpus, e.g. "wiki", "script", or "maps". Omit to search everything.'),
        glob: z
          .string()
          .optional()
          .describe('Optional filename glob to include, e.g. "*.hps" or "*.md".'),
        context: z
          .number()
          .int()
          .min(0)
          .max(5)
          .optional()
          .describe('Lines of surrounding context per match (rg -C). Default 0.'),
        caseInsensitive: z
          .boolean()
          .optional()
          .describe('Case-insensitive search (rg -i). Default false.'),
        literal: z
          .boolean()
          .optional()
          .describe('Treat query as a fixed string (rg -F), not a regex. Prefer this for exact API or object names.'),
      }),
    ),
    execute: async ({ query, path, glob, context, caseInsensitive, literal }) => {
      const input = { query, path, glob, context, caseInsensitive, literal };
      const result = await searchFiles(input, docsRoot);
      const mode = result.startsWith('Broad search compacted:') ? ', compacted' : '';
      toolLog(`search_files(${JSON.stringify(input)}) -> ${result.length} chars${mode}`);
      return result;
    },
  }),
});

// ─── Sandboxed file operations ───────────────────────────────────────────────

function isWithin(root: string, candidate: string): boolean {
  const rel = relative(root, candidate);
  return rel === '' || (rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel));
}

function safeResolve(docsRoot: string, userPath: string): string | null {
  const root = resolve(docsRoot);
  const abs = resolve(root, userPath);
  return isWithin(root, abs) ? abs : null;
}

function isLikelyBinaryFile(path: string): boolean {
  if (KNOWN_BINARY_EXTENSIONS.has(extname(path).toLowerCase())) return true;

  let fd: number | undefined;
  try {
    fd = openSync(path, 'r');
    const sample = Buffer.allocUnsafe(BINARY_SAMPLE_BYTES);
    const bytesRead = readSync(fd, sample, 0, sample.length, 0);
    for (let i = 0; i < bytesRead; i++) {
      if (sample[i] === 0) return true;
    }
    return false;
  } catch {
    // Let the caller's normal stat/read error handling report inaccessible files.
    return false;
  } finally {
    if (fd !== undefined) closeSync(fd);
  }
}

interface FindFilesInput {
  query: string;
  path?: string;
  limit?: number;
}

function findFiles(input: FindFilesInput, docsRoot: string): string {
  const root = resolve(docsRoot);
  const scope = input.path ? safeResolve(docsRoot, input.path) : root;
  if (!scope) return 'Error: path traversal is not allowed.';

  try {
    const realRoot = realpathSync(root);
    const realScope = realpathSync(scope);
    if (!isWithin(realRoot, realScope)) return 'Error: path traversal is not allowed.';
    if (!statSync(realScope).isDirectory()) {
      return `Error: find path is not a directory: ${input.path}`;
    }

    const needle = input.query.trim().toLowerCase();
    const maxResults = input.limit ?? 50;
    const matches: Array<{ path: string; score: number }> = [];

    const walk = (dir: string): void => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        if (entry.name === '.gitkeep') continue;
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
          continue;
        }
        if (!entry.isFile()) continue;

        const rel = relative(root, full).split(sep).join('/');
        const relLower = rel.toLowerCase();
        if (!relLower.includes(needle) || isLikelyBinaryFile(full)) continue;

        const nameLower = entry.name.toLowerCase();
        const score =
          nameLower === needle ? 0 :
          nameLower.startsWith(needle) ? 1 :
          nameLower.includes(needle) ? 2 :
          3;
        matches.push({ path: rel, score });
      }
    };

    walk(realScope);
    matches.sort((a, b) => a.score - b.score || a.path.localeCompare(b.path));
    if (matches.length === 0) return 'No matching file paths found.';

    const selected = matches.slice(0, maxResults).map((match) => match.path);
    if (matches.length > maxResults) {
      selected.push(
        `...(${matches.length - maxResults} more paths — narrow query or add path)`,
      );
    }
    return selected.join('\n');
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return `Error: find path not found: ${input.path ?? '.'}`;
    }
    return `Error finding files: ${(err as Error).message}`;
  }
}

function readFile(
  userPath: string,
  docsRoot: string,
  range?: { offset?: number; limit?: number },
): string {
  const abs = safeResolve(docsRoot, userPath);
  if (!abs) return 'Error: path traversal is not allowed.';

  try {
    const stat = statSync(abs);
    if (stat.isDirectory()) return `Error: "${userPath}" is a directory, not a file.`;
    if (!stat.isFile()) return `Error: "${userPath}" is not a regular file.`;

    // A symlink inside docsRoot must not become an escape hatch to a file outside
    // the sandbox. realpathSync also normalizes platform-specific path casing.
    const realRoot = realpathSync(resolve(docsRoot));
    const realFile = realpathSync(abs);
    if (!isWithin(realRoot, realFile)) return 'Error: path traversal is not allowed.';
    if (isLikelyBinaryFile(realFile)) {
      return `Error: "${userPath}" is a binary file. read_file only supports text documentation.`;
    }

    const ranged = range && (range.offset !== undefined || range.limit !== undefined);

    // A FULL read of an over-cap file is refused — but with an actionable message
    // pointing at the tools that CAN reach it, unlike a plain dead end.
    if (!ranged && stat.size > MAX_FILE_BYTES) {
      return (
        `Error: "${userPath}" is ${Math.round(stat.size / 1024)} KB, too large to read in ` +
        `full (max ${MAX_FILE_BYTES / 1024} KB). Use search_files to find the relevant lines, ` +
        `or read a slice with read_file({ path, offset, limit }) (offset is a 1-based line, ` +
        `limit up to ${MAX_RANGE_LINES}).`
      );
    }

    const content = readFileSync(abs, 'utf-8');
    if (!ranged) return content; // small non-ranged file: byte-identical to before

    const allLines = content.split('\n');
    const start = Math.max(1, range!.offset ?? 1);
    const want = Math.min(range!.limit ?? MAX_RANGE_LINES, MAX_RANGE_LINES);
    const slice = allLines.slice(start - 1, start - 1 + want);
    if (slice.length === 0) {
      return `Error: offset ${start} is past end of file (${allLines.length} lines).`;
    }

    const numbered = slice.map((line, i) => `${start + i}\t${line}`).join('\n');
    const endLine = start + slice.length - 1;
    const more =
      endLine < allLines.length
        ? `\n...(${allLines.length - endLine} more lines — continue with offset: ${endLine + 1})`
        : '';
    return `${numbered}${more}`;
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT')
      return `Error: file not found: ${userPath}`;
    return `Error reading file: ${(err as Error).message}`;
  }
}

// ─── Search (ripgrep) ────────────────────────────────────────────────────────

interface RgResult {
  stdout: string;
  stderr: string;
  code: number;
  timedOut: boolean;
}

// Run ripgrep with an argv array (never a shell string — the model-supplied regex
// could otherwise inject shell). rg exit 1 = "no matches" (normal), 2 = real error.
function runRipgrep(args: string[], cwd: string): Promise<RgResult> {
  return new Promise((resolveP) => {
    execFile(
      'rg',
      args,
      { cwd, maxBuffer: RG_MAX_BUFFER, timeout: RG_TIMEOUT_MS, windowsHide: true },
      (err, stdout, stderr) => {
        const e = err as (NodeJS.ErrnoException & { code?: number | string; killed?: boolean }) | null;
        const timedOut = !!(e && e.killed);
        // execFile sets err.code to the numeric exit code, or a string like 'ENOENT'
        // when the binary is missing — treat the latter as a real error (2).
        const code = e && typeof e.code === 'number' ? e.code : e ? 2 : 0;
        resolveP({ stdout: stdout ?? '', stderr: stderr ?? '', code, timedOut });
      },
    );
  });
}

interface SearchInput {
  query: string;
  path?: string;
  glob?: string;
  context?: number;
  caseInsensitive?: boolean;
  literal?: boolean;
}

// An rg output line is "path:lineno:text" (a match) or "path-lineno-text" (a
// context line). Normalize only the leading path (backslashes → "/", strip a
// leading "./") so it round-trips through read_file, without touching the match
// text (which may contain literal backslashes in code).
function normalizeRgPathPrefix(line: string): string {
  const m = line.match(/^(.*?)([:-]\d+[:-])(.*)$/s);
  if (!m) return line;
  const path = m[1].replace(/\\/g, '/').replace(/^\.\//, '');
  return `${path}${m[2]}${m[3]}`;
}

interface SearchFileSummary {
  path: string;
  matches: number;
  firstMatch: string;
}

/**
 * Keep precise searches verbatim. A broad query is instead reduced to ranked
 * candidate files plus one representative line per file, which gives the model
 * enough information to refine without carrying a huge result through every
 * later turn.
 */
function summarizeBroadSearch(lines: string[]): string {
  const byFile = new Map<string, SearchFileSummary>();

  for (const line of lines) {
    const match = line.match(/^(.*?):\d+:(.*)$/s);
    if (!match) continue; // context and separator lines are not actual matches

    const path = match[1];
    const matchText = match[2].trim().replace(/\s+/g, ' ');
    const existing = byFile.get(path);
    if (existing) {
      existing.matches++;
      continue;
    }

    byFile.set(path, {
      path,
      matches: 1,
      firstMatch:
        matchText.length > 180 ? `${matchText.slice(0, 177)}...` : matchText,
    });
  }

  const ranked = [...byFile.values()].sort(
    (a, b) => b.matches - a.matches || a.path.localeCompare(b.path),
  );
  if (ranked.length === 0) {
    return (
      lines.slice(0, SEARCH_DETAIL_MAX_LINES).join('\n') +
      '\n...(truncated — refine the query, add a glob, or scope with path)'
    );
  }

  const totalMatches = ranked.reduce((sum, file) => sum + file.matches, 0);
  const selected = ranked.slice(0, SEARCH_SUMMARY_MAX_FILES).map(
    ({ path, matches, firstMatch }) => {
      const displayedMatches =
        matches === RG_MAX_COUNT_PER_FILE ? `${matches}+` : String(matches);
      return `- ${path} (${displayedMatches} match${matches === 1 ? '' : 'es'}): ${firstMatch}`;
    },
  );
  const omitted = ranked.length - selected.length;

  return [
    `Broad search compacted: ${totalMatches} returned matches across ${ranked.length} files.`,
    ...selected,
    ...(omitted > 0 ? [`...(${omitted} more matching files omitted)`] : []),
    'Refine one relevant path or use a more specific identifier; do not run overlapping broad variants.',
  ].join('\n');
}

async function searchFiles(input: SearchInput, docsRoot: string): Promise<string> {
  const { query, path, glob, context, caseInsensitive, literal } = input;

  // Scope the search root, sandboxed to docsRoot.
  let searchRel = '.';
  if (path && path !== '.' && path !== '') {
    const abs = safeResolve(docsRoot, path);
    if (!abs) return 'Error: path traversal is not allowed.';

    try {
      const realRoot = realpathSync(resolve(docsRoot));
      const realSearchPath = realpathSync(abs);
      if (!isWithin(realRoot, realSearchPath)) return 'Error: path traversal is not allowed.';
    } catch (err: unknown) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
        return `Error: search path not found: ${path}`;
      }
      return `Error resolving search path: ${(err as Error).message}`;
    }

    searchRel = relative(resolve(docsRoot), abs).split(sep).join('/') || '.';
  }

  const args: string[] = [
    '-n',
    '--no-heading',
    '--color=never',
    '--max-columns',
    String(RG_MAX_COLUMNS),
    '--max-count',
    String(RG_MAX_COUNT_PER_FILE),
  ];
  if (caseInsensitive) args.push('-i');
  if (literal) args.push('-F');
  if (context && context > 0) args.push('-C', String(context));
  if (glob) args.push('-g', glob);
  args.push('--', query); // '--' ends flags so a query starting with '-' is safe
  args.push(searchRel);

  const { stdout, stderr, code, timedOut } = await runRipgrep(args, resolve(docsRoot));

  if (timedOut)
    return 'Error: search timed out. Narrow it with a more specific query, a glob, or a path.';
  if (code === 1) return 'No matches found.'; // NOT an error
  if (code !== 0) return `Error running search: ${(stderr || 'ripgrep failed').trim()}`;

  const lines = stdout
    .split('\n')
    .filter((l) => l.length > 0)
    // rg prints paths relative to cwd; on Windows (native rg.exe) they use
    // backslashes and a leading ".\". Normalize ONLY the leading path segment to
    // the forward-slash form find_files/read_file use — never the match text,
    // which may legitimately contain backslashes (e.g. escapes in .hps code).
    .map(normalizeRgPathPrefix);
  if (lines.length === 0) return 'No matches found.';

  const detailed = lines.join('\n');
  return lines.length > SEARCH_DETAIL_MAX_LINES || detailed.length > SEARCH_DETAIL_MAX_CHARS
    ? summarizeBroadSearch(lines)
    : detailed;
}
