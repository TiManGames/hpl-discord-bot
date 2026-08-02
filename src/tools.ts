import { tool } from 'ai';
import { zodSchema } from 'ai';
import { z } from 'zod';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join, resolve, normalize, relative, sep } from 'path';

// ─── Tool definitions (Vercel AI SDK v6 format) ───────────────────────────────

const MAX_FILE_BYTES = 512 * 1024; // 512 KB

function toolLog(msg: string): void {
  console.log(`[${new Date().toISOString()}] [TOOL] ${msg}`);
}

// Only read_file is exposed. list_directory is removed — the model gets the full
// file tree up front via the manifest injected into the system prompt, so it can
// jump straight to reading the right files instead of probing the directory
// (which cost an extra rate-limited round-trip on every step).
export const fileTools = (docsRoot: string) => ({
  read_file: tool({
    description:
      'Read the contents of a documentation file. Provide a path relative to the ' +
      'docs folder exactly as listed in <available_files> (e.g. ' +
      '"wiki/HPL2/Areas.md"). You may call this multiple times in parallel to ' +
      'read several files at once. Only text files are supported.',
    inputSchema: zodSchema(
      z.object({
        path: z
          .string()
          .describe('Relative path to the file inside the docs folder'),
      }),
    ),
    execute: async ({ path }) => {
      toolLog(`read_file("${path}")`);
      return readFile(path, docsRoot);
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
 * Read paths are still full paths (directory header + "/" + filename), so the
 * read_file tool contract is unchanged.
 */
export function buildFileManifest(docsRoot: string): string {
  const root = resolve(docsRoot);
  // dir (POSIX, relative to root; '' = root) -> filenames
  const byDir = new Map<string, string[]>();

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
        const relDir = relative(root, dir).split(sep).join('/');
        const list = byDir.get(relDir) ?? [];
        list.push(e.name);
        byDir.set(relDir, list);
      }
    }
  };

  walk(root);
  if (byDir.size === 0) return '';

  const dirs = [...byDir.keys()].sort();
  const lines: string[] = [];
  for (const dir of dirs) {
    const files = byDir.get(dir)!.sort();
    if (dir === '') {
      // Root-level files: list with no header.
      for (const f of files) lines.push(f);
    } else {
      lines.push(`${dir}/`);
      for (const f of files) lines.push(`  ${f}`);
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

function readFile(userPath: string, docsRoot: string): string {
  const abs = safeResolve(docsRoot, userPath);
  if (!abs) return 'Error: path traversal is not allowed.';

  try {
    const stat = statSync(abs);
    if (stat.isDirectory()) return `Error: "${userPath}" is a directory, not a file.`;
    if (stat.size > MAX_FILE_BYTES) {
      return `Error: file is too large (${Math.round(stat.size / 1024)} KB). Max is ${
        MAX_FILE_BYTES / 1024
      } KB.`;
    }
    return readFileSync(abs, 'utf-8');
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT')
      return `Error: file not found: ${userPath}`;
    return `Error reading file: ${(err as Error).message}`;
  }
}
