import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { fileTools, buildFileManifest } from './tools.js';

let docsRoot: string;
let outsideFile: string;

// read_file is not exported directly; exercise it through the tool's execute().
async function readFile(root: string, path: string): Promise<string> {
  const tools = fileTools(root);
  return (await tools.read_file.execute!(
    { path },
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
});

afterAll(() => {
  rmSync(docsRoot, { recursive: true, force: true });
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
