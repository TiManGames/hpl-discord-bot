import { tool } from 'ai';
import { zodSchema } from 'ai';
import { z } from 'zod';
import { readdirSync, readFileSync, statSync } from 'fs';
import { execFile } from 'node:child_process';
import { join, resolve, normalize, relative, sep } from 'path';

// ─── Tool definitions (Vercel AI SDK v6 format) ───────────────────────────────

const MAX_FILE_BYTES = 512 * 1024; // 512 KB — cap for a FULL (unranged) read
const MAX_RANGE_LINES = 1000; // max lines returned by a single ranged read

// ripgrep bounds (search_files)
const RG_MAX_COUNT_PER_FILE = 20; // --max-count, per file
const RG_MAX_COLUMNS = 300; // --max-columns, skip minified/huge lines
const SEARCH_MAX_LINES = 200; // total match lines returned to the model
const RG_TIMEOUT_MS = 10_000;
const RG_MAX_BUFFER = 8 * 1024 * 1024;

// Manifest: only annotate files above this size with a «size, lines» marker.
const MANIFEST_ANNOTATE_BYTES = 50 * 1024;

function toolLog(msg: string): void {
  console.log(`[${new Date().toISOString()}] [TOOL] ${msg}`);
}

// Two tools are exposed. read_file reads a whole file or a line range; search_files
// greps the docs (ripgrep) so the model can locate the relevant lines of a large file
// instead of reading it whole. list_directory is intentionally absent — the model gets
// the full file tree up front via the manifest injected into the system prompt.
export const fileTools = (docsRoot: string) => ({
  read_file: tool({
    description:
      'Read the contents of a documentation file. Provide a path relative to the ' +
      'docs folder exactly as listed in <available_files> (e.g. ' +
      '"wiki/HPL2/Areas.md"). For large files, read a slice with offset (1-based ' +
      'start line) and limit (max lines) instead of the whole file, or use ' +
      'search_files first to find the right lines. You may call this multiple ' +
      'times in parallel. Only text files are supported.',
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
      toolLog(`read_file(${JSON.stringify({ path, offset, limit })})`);
      return readFile(path, docsRoot, { offset, limit });
    },
  }),

  search_files: tool({
    description:
      'Search the documentation for text/regex using ripgrep. Returns matches as ' +
      '"path:line: text" relative to the docs folder. Use this instead of reading a ' +
      'whole large file: e.g. search_files({ query: "OnStart|void", glob: "*.hps" }) ' +
      'or scope it with path: search_files({ query: "AddEntityCollideCallback", ' +
      'path: "wiki/HPL3" }). query is a ripgrep regex (same syntax the docs show for ' +
      'rg). Optional: glob (e.g. "*.hps"), path (a subfolder to scope to), context ' +
      '(0-5 surrounding lines), caseInsensitive. Output is capped; refine the query ' +
      'if truncated.',
    inputSchema: zodSchema(
      z.object({
        query: z.string().describe('Ripgrep regular expression to search for (rg syntax).'),
        path: z
          .string()
          .optional()
          .describe('Optional subdirectory under docs to scope the search, e.g. "wiki/HPL3". Omit to search everything.'),
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
      }),
    ),
    execute: async ({ query, path, glob, context, caseInsensitive }) => {
      toolLog(`search_files(${JSON.stringify({ query, path, glob, context, caseInsensitive })})`);
      return searchFiles({ query, path, glob, context, caseInsensitive }, docsRoot);
    },
  }),
});

// ─── File-tree manifest (injected into the system prompt) ─────────────────────

/**
 * List every file under docsRoot, grouped by directory. Instead of repeating the
 * full path on every line (which for deep trees like HPL3 wastes thousands of
 * tokens re-writing the same long prefix hundreds of times), each directory is
 * printed once as a header followed by its bare filenames.
 *
 * Example output:
 *   wiki/HPL3/Amnesia The Bunker/Scripting/Scripting Api/
 *     Entity.md
 *     Map.md
 *
 * Files above MANIFEST_ANNOTATE_BYTES get a «size, lines» marker so the model
 * knows to search / range-read them instead of reading them whole. The marker is
 * delimited by guillemets (never present in filenames here), so the read path is
 * still just the text up to the first "  «".
 *
 * Read paths are still full paths (directory header + "/" + filename), so the
 * read_file tool contract is unchanged.
 */
export function buildFileManifest(docsRoot: string): string {
  const root = resolve(docsRoot);
  // dir (POSIX, relative to root; '' = root) -> entries
  const byDir = new Map<string, { name: string; annotation: string }[]>();

  const walk = (dir: string): void => {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (e.name === '.gitkeep') continue;
      const full = join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else {
        let annotation = '';
        try {
          const st = statSync(full);
          if (st.size > MANIFEST_ANNOTATE_BYTES) {
            const lineCount = readFileSync(full, 'utf-8').split('\n').length;
            annotation = `  «${Math.round(st.size / 1024)} KB, ${lineCount} lines — use search_files or read_file offset/limit»`;
          }
        } catch {
          // Can't stat/read — leave the entry bare.
        }
        const relDir = relative(root, dir).split(sep).join('/');
        const list = byDir.get(relDir) ?? [];
        list.push({ name: e.name, annotation });
        byDir.set(relDir, list);
      }
    }
  };

  walk(root);
  if (byDir.size === 0) return '';

  const dirs = [...byDir.keys()].sort();
  const lines: string[] = [];
  for (const dir of dirs) {
    const files = byDir.get(dir)!.sort((a, b) => a.name.localeCompare(b.name));
    if (dir === '') {
      // Root-level files: list with no header.
      for (const f of files) lines.push(`${f.name}${f.annotation}`);
    } else {
      lines.push(`${dir}/`);
      for (const f of files) lines.push(`  ${f.name}${f.annotation}`);
    }
  }
  return lines.join('\n');
}

// ─── Sandboxed file operations ───────────────────────────────────────────────

function safeResolve(docsRoot: string, userPath: string): string | null {
  const abs = resolve(join(docsRoot, normalize(userPath)));
  if (!abs.startsWith(resolve(docsRoot))) return null;
  return abs;
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

    const content = readFileSync(abs, 'utf-8'); // 563 KB into RAM is fine; the cap is about tokens
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

async function searchFiles(input: SearchInput, docsRoot: string): Promise<string> {
  const { query, path, glob, context, caseInsensitive } = input;

  // Scope the search root, sandboxed to docsRoot.
  let searchRel = '.';
  if (path && path !== '.' && path !== '') {
    const abs = safeResolve(docsRoot, path);
    if (!abs) return 'Error: path traversal is not allowed.';
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
    // the forward-slash form the manifest/read_file use — never the match text,
    // which may legitimately contain backslashes (e.g. escapes in .hps code).
    .map(normalizeRgPathPrefix);
  if (lines.length === 0) return 'No matches found.';

  if (lines.length > SEARCH_MAX_LINES) {
    return (
      lines.slice(0, SEARCH_MAX_LINES).join('\n') +
      `\n...(truncated at ${SEARCH_MAX_LINES} matches — refine your query, add a glob, or scope with path)`
    );
  }
  return lines.join('\n');
}
