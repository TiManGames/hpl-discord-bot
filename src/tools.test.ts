import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { execFileSync } from 'child_process';
import { tmpdir } from 'os';
import { join } from 'path';
import { fileTools, buildFileManifest } from './tools.js';

let docsRoot: string;
let outsideFile: string;
// A second root used for search / range / manifest-annotation fixtures, kept
// separate so the existing exact-equality manifest test on docsRoot stays valid.
let bigRoot: string;

// ripgrep is expected on PATH; skip search tests cleanly if it is somehow absent.
let hasRg = false;
try {
  execFileSync('rg', ['--version'], { stdio: 'ignore' });
  hasRg = true;
} catch {
  hasRg = false;
}
const rgIt = hasRg ? it : it.skip;

// read_file is not exported directly; exercise it through the tool's execute().
async function readFile(
  root: string,
  path: string,
  range?: { offset?: number; limit?: number },
): Promise<string> {
  const tools = fileTools(root);
  return (await tools.read_file.execute!(
    { path, ...range },
    { toolCallId: 't', messages: [] } as never,
  )) as string;
}

async function search(root: string, input: Record<string, unknown>): Promise<string> {
  const tools = fileTools(root);
  return (await tools.search_files.execute!(
    input as never,
    { toolCallId: 't', messages: [] } as never,
  )) as string;
}

beforeAll(() => {
  const base = mkdtempSync(join(tmpdir(), 'hpl-tools-'));
  docsRoot = join(base, 'docs');
  mkdirSync(join(docsRoot, 'wiki', 'HPL2'), { recursive: true });

  writeFileSync(join(docsRoot, 'root.md'), 'root content');
  writeFileSync(join(docsRoot, 'wiki', 'HPL2', 'Areas.md'), 'areas doc');
  writeFileSync(join(docsRoot, '.gitkeep'), '');

  // A secret file OUTSIDE the docs sandbox — must never be readable.
  outsideFile = join(base, 'secret.env');
  writeFileSync(outsideFile, 'SECRET=topsecret');

  // Separate root for search / range / annotation fixtures.
  bigRoot = join(base, 'big');
  mkdirSync(join(bigRoot, 'wiki', 'HPL2'), { recursive: true });
  writeFileSync(
    join(bigRoot, 'wiki', 'HPL2', 'script.hps'),
    'void OnStart() {\n  AddEntityCollideCallback("x");\n}\n',
  );
  writeFileSync(join(bigRoot, 'notes.md'), 'nothing special here\n');
  // > 512 KB text file — over the full-read cap. 20,000 lines, each padded to
  // ~40 bytes so the total comfortably exceeds 512 KB.
  const pad = 'x'.repeat(30);
  const bigLines = Array.from({ length: 20000 }, (_, i) => `line ${i + 1} ${pad}`);
  writeFileSync(join(bigRoot, 'big.txt'), bigLines.join('\n'));
  // Many small files that each match "needle" — since --max-count caps matches
  // PER FILE, flooding the total cap requires many files, not one big one.
  mkdirSync(join(bigRoot, 'many'), { recursive: true });
  for (let i = 0; i < 300; i++) {
    writeFileSync(join(bigRoot, 'many', `f${i}.md`), 'needle here\n');
  }
});

afterAll(() => {
  rmSync(docsRoot, { recursive: true, force: true });
  rmSync(bigRoot, { recursive: true, force: true });
});

describe('read_file sandbox', () => {
  it('reads a file at the docs root', async () => {
    expect(await readFile(docsRoot, 'root.md')).toBe('root content');
  });

  it('reads a nested file', async () => {
    expect(await readFile(docsRoot, 'wiki/HPL2/Areas.md')).toBe('areas doc');
  });

  it('blocks path traversal with ../', async () => {
    const result = await readFile(docsRoot, '../secret.env');
    expect(result).toMatch(/path traversal is not allowed/i);
    expect(result).not.toContain('topsecret');
  });

  it('blocks deep path traversal', async () => {
    const result = await readFile(docsRoot, '../../../../etc/passwd');
    expect(result).toMatch(/path traversal is not allowed/i);
  });

  it('returns a not-found error for a missing file', async () => {
    expect(await readFile(docsRoot, 'nope.md')).toMatch(/file not found/i);
  });

  it('refuses to read a directory as a file', async () => {
    expect(await readFile(docsRoot, 'wiki')).toMatch(/is a directory/i);
  });
});

describe('buildFileManifest', () => {
  it('groups files under directory headers, root files bare', () => {
    const manifest = buildFileManifest(docsRoot);
    const lines = manifest.split('\n');
    // Root file has no header; nested file sits under its dir header, indented.
    expect(lines).toEqual([
      'root.md',
      'wiki/HPL2/',
      '  Areas.md',
    ]);
  });

  it('a read path can be reconstructed from header + filename', () => {
    // header "wiki/HPL2/" + "Areas.md" → "wiki/HPL2/Areas.md", which read_file accepts.
    const manifest = buildFileManifest(docsRoot);
    expect(manifest).toContain('wiki/HPL2/');
    expect(manifest).toContain('  Areas.md');
  });

  it('does not repeat the directory prefix on every file line', () => {
    const manifest = buildFileManifest(docsRoot);
    // The long prefix appears once (as the header), not inlined on the file line.
    expect(manifest).not.toContain('wiki/HPL2/Areas.md');
  });

  it('excludes .gitkeep placeholder files', () => {
    expect(buildFileManifest(docsRoot)).not.toContain('.gitkeep');
  });

  it('uses forward slashes even on Windows', () => {
    expect(buildFileManifest(docsRoot)).not.toContain('\\');
  });

  it('returns an empty string for a non-existent directory', () => {
    expect(buildFileManifest(join(docsRoot, 'does-not-exist'))).toBe('');
  });
});

describe('read_file line ranges', () => {
  it('slices by offset/limit with line numbers and a more-lines hint', async () => {
    const out = await readFile(bigRoot, 'big.txt', { offset: 5, limit: 3 });
    const lines = out.split('\n');
    expect(lines[0]).toMatch(/^5\tline 5\b/);
    expect(lines[1]).toMatch(/^6\tline 6\b/);
    expect(lines[2]).toMatch(/^7\tline 7\b/);
    expect(out).toMatch(/more lines — continue with offset: 8/);
  });

  it('allows a ranged read on a file over the full-read cap', async () => {
    const out = await readFile(bigRoot, 'big.txt', { offset: 1, limit: 10 });
    expect(out).not.toMatch(/too large/i);
    expect(out).toMatch(/^1\tline 1\b/);
  });

  it('refuses a full read of an over-cap file with an actionable error', async () => {
    const out = await readFile(bigRoot, 'big.txt');
    expect(out).toMatch(/too large/i);
    expect(out).toMatch(/search_files|offset/i);
  });

  it('errors when offset is past end of file', async () => {
    const out = await readFile(bigRoot, 'big.txt', { offset: 999999, limit: 5 });
    expect(out).toMatch(/past end of file/i);
  });

  it('caps the returned slice at MAX_RANGE_LINES', async () => {
    const out = await readFile(bigRoot, 'big.txt', { offset: 1, limit: 100000 });
    // Numbered content lines, minus the trailing "...(more lines)" hint line.
    const contentLines = out.split('\n').filter((l) => /^\d+\t/.test(l));
    expect(contentLines.length).toBe(1000);
  });

  it('reads a small file unranged exactly as before', async () => {
    expect(await readFile(bigRoot, 'notes.md')).toBe('nothing special here\n');
  });
});

describe('search_files', () => {
  rgIt('finds a match as path:line: text', async () => {
    const out = await search(bigRoot, { query: 'AddEntityCollideCallback' });
    expect(out).toContain('wiki/HPL2/script.hps:2:');
    expect(out).not.toMatch(/\.\//); // no leading ./
  });

  rgIt('respects a glob', async () => {
    expect(await search(bigRoot, { query: 'OnStart', glob: '*.hps' })).toContain('script.hps');
    expect(await search(bigRoot, { query: 'OnStart', glob: '*.md' })).toBe('No matches found.');
  });

  rgIt('respects path scoping', async () => {
    const out = await search(bigRoot, { query: 'OnStart', path: 'wiki/HPL2' });
    expect(out).toContain('script.hps:1:');
  });

  rgIt('blocks path traversal via the path arg', async () => {
    const out = await search(bigRoot, { query: 'SECRET', path: '../' });
    expect(out).toMatch(/path traversal is not allowed/i);
    expect(out).not.toContain('topsecret');
  });

  rgIt('returns a clean no-match result, not an error', async () => {
    const out = await search(bigRoot, { query: 'zzz_no_such_string_zzz' });
    expect(out).toBe('No matches found.');
    expect(out).not.toMatch(/error/i);
  });

  rgIt('caps flooded output', async () => {
    // 300 files each match "needle" — well over the 200-line total cap.
    const out = await search(bigRoot, { query: 'needle' });
    expect(out).toMatch(/truncated/i);
    expect(out.split('\n').length).toBeLessThanOrEqual(201);
  });
});

describe('buildFileManifest size hints', () => {
  it('annotates a large file with «size, lines»', () => {
    const manifest = buildFileManifest(bigRoot);
    const bigLine = manifest.split('\n').find((l) => l.startsWith('big.txt'));
    expect(bigLine).toBeDefined();
    expect(bigLine).toContain('«');
    expect(bigLine).toMatch(/lines/);
  });

  it('leaves small files bare', () => {
    const manifest = buildFileManifest(bigRoot);
    const notesLine = manifest.split('\n').find((l) => l.startsWith('notes.md'));
    expect(notesLine).toBe('notes.md');
  });
});
