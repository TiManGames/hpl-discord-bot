import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { execFileSync } from 'child_process';
import { tmpdir } from 'os';
import { join } from 'path';
import { fileTools } from './tools.js';

let docsRoot: string;
let tempRoot: string;
// A second root used for search and ranged-read fixtures.
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

async function findFiles(root: string, input: Record<string, unknown>): Promise<string> {
  const tools = fileTools(root);
  return (await tools.find_files.execute!(
    input as never,
    { toolCallId: 't', messages: [] } as never,
  )) as string;
}

beforeAll(() => {
  tempRoot = mkdtempSync(join(tmpdir(), 'hpl-tools-'));
  docsRoot = join(tempRoot, 'docs');
  mkdirSync(join(docsRoot, 'wiki', 'HPL2'), { recursive: true });

  writeFileSync(join(docsRoot, 'root.md'), 'root content');
  writeFileSync(join(docsRoot, 'wiki', 'HPL2', 'Areas.md'), 'areas doc');
  writeFileSync(join(docsRoot, '.gitkeep'), '');
  writeFileSync(join(docsRoot, 'texture.bin'), Buffer.from([0, 1, 2, 3]));

  // A secret file OUTSIDE the docs sandbox — must never be readable.
  const outsideFile = join(tempRoot, 'secret.env');
  writeFileSync(outsideFile, 'SECRET=topsecret');
  const prefixSiblingRoot = join(tempRoot, 'docs-private');
  mkdirSync(prefixSiblingRoot);
  writeFileSync(join(prefixSiblingRoot, 'secret.env'), 'SECRET=prefix-bypass');

  // Separate root for search and ranged-read fixtures.
  bigRoot = join(tempRoot, 'big');
  mkdirSync(join(bigRoot, 'wiki', 'HPL2'), { recursive: true });
  writeFileSync(
    join(bigRoot, 'wiki', 'HPL2', 'script.hps'),
    'void OnStart() {\n  AddEntityCollideCallback("x");\n}\n',
  );
  writeFileSync(join(bigRoot, 'notes.md'), 'nothing special here\n');
  // Large text file over the full-read cap.
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
  rmSync(tempRoot, { recursive: true, force: true });
});

describe('tool-schema dialect isolation', () => {
  it('does not seed a game-specific API name into every model request', () => {
    const tools = fileTools(docsRoot);
    const descriptions = Object.values(tools).map((tool) => tool.description ?? '').join('\n');
    expect(descriptions).not.toContain('AddEntityCollideCallback');
    expect(descriptions).not.toContain('SetEntityActive');
  });
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

  it('blocks traversal into a sibling whose path shares the docs-root prefix', async () => {
    const result = await readFile(docsRoot, '../docs-private/secret.env');
    expect(result).toMatch(/path traversal is not allowed/i);
    expect(result).not.toContain('prefix-bypass');
  });

  it('rejects binary files', async () => {
    expect(await readFile(docsRoot, 'texture.bin')).toMatch(/binary file/i);
  });

  it('returns a not-found error for a missing file', async () => {
    expect(await readFile(docsRoot, 'nope.md')).toMatch(/file not found/i);
  });

  it('refuses to read a directory as a file', async () => {
    expect(await readFile(docsRoot, 'wiki')).toMatch(/is a directory/i);
  });
});

describe('find_files', () => {
  it('finds a path by case-insensitive filename substring', async () => {
    expect(await findFiles(docsRoot, { query: 'areas.MD' })).toBe('wiki/HPL2/Areas.md');
  });

  it('supports directory scoping', async () => {
    expect(await findFiles(docsRoot, { query: '.md', path: 'wiki' })).toBe(
      'wiki/HPL2/Areas.md',
    );
  });

  it('blocks path traversal', async () => {
    expect(await findFiles(docsRoot, { query: 'secret', path: '../' })).toMatch(
      /path traversal is not allowed/i,
    );
  });

  it('omits binary and placeholder files', async () => {
    expect(await findFiles(docsRoot, { query: 'texture' })).toBe(
      'No matching file paths found.',
    );
    expect(await findFiles(docsRoot, { query: '.gitkeep' })).toBe(
      'No matching file paths found.',
    );
  });

  it('returns a clean no-match result', async () => {
    expect(await findFiles(docsRoot, { query: 'not-present' })).toBe(
      'No matching file paths found.',
    );
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
    expect(contentLines.length).toBe(300);
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

  rgIt('supports fixed-string searches for symbols containing regex characters', async () => {
    const out = await search(bigRoot, {
      query: 'AddEntityCollideCallback("x")',
      literal: true,
    });
    expect(out).toContain('wiki/HPL2/script.hps:2:');
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

  rgIt('compacts broad results into ranked file candidates', async () => {
    const out = await search(bigRoot, { query: 'needle' });
    expect(out).toContain('Broad search compacted: 300 returned matches across 300 files.');
    expect(out).toContain('many/f0.md (1 match): needle here');
    expect(out).toContain('more matching files omitted');
    expect(out).toContain('Refine one relevant path');
    expect(out.split('\n').length).toBeLessThanOrEqual(15);
  });
});
