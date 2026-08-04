import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileTools } from './tools.js';
import { emptyEvidenceLedger } from './evidence.js';

let root: string;
let parent: string;

beforeAll(() => {
  parent = mkdtempSync(join(tmpdir(), 'neutral-tools-'));
  root = join(parent, 'docs');
  mkdirSync(join(root, 'wiki', 'HPL3'), { recursive: true });
  mkdirSync(join(root, 'script', 'helpers'), { recursive: true });
  writeFileSync(join(root, 'wiki', 'HPL3', 'Guide.md'), '# Spawn Entities\nUse a helper for common creation.\n');
  writeFileSync(join(root, 'hps_api.hps'), [
    'class cLuxMap {',
    '  void CreateEntity(const tString &in asName);',
    '}',
    'iLuxEntity@ Entity_CreateAtEntity(const tString &in asName);',
    'iLuxEntity@ Entity_CreateAtEntityExt(const tString &in asName);',
  ].join('\n'));
  writeFileSync(join(root, 'script', 'helpers', 'helper_entity.hps'),
    'void Spawn() { Entity_CreateAtEntity("test"); }\n');
  writeFileSync(join(root, 'texture.bin'), Buffer.from([0, 1, 2]));
  writeFileSync(join(parent, 'secret.env'), 'SECRET=value');
});

afterAll(() => rmSync(parent, { recursive: true, force: true }));

const execute = async (name: string, input: Record<string, unknown>, ledger = emptyEvidenceLedger()) => {
  const tools = fileTools(root, ledger) as Record<string, { execute?: Function }>;
  const result = await tools[name].execute!(input, { toolCallId: 'test', messages: [] });
  return { result: result as string, ledger };
};

describe('neutral corpus tools', () => {
  it('exposes only neutral navigation plus precise read/search tools', () => {
    const names = Object.keys(fileTools(root));
    expect(names).toEqual(['list_corpus', 'search_corpus', 'inspect_corpus', 'read_file', 'search_files']);
  });

  it('lists root sections, paginates, and includes binary paths', async () => {
    const rootPage = await execute('list_corpus', { limit: 2 });
    expect(rootPage.result).toContain('next_cursor:');
    expect(rootPage.result).toContain('Corpus listing');
    const binary = await execute('list_corpus', { glob: '*.bin' });
    expect(binary.result).toContain('texture.bin');
    expect(binary.result).toContain('binary');
  });

  it('searches wiki and source together and records stable locators', async () => {
    const { result, ledger } = await execute('search_corpus', {
      queries: ['Spawn Entities', 'Entity_CreateAtEntity'], limit: 10,
    });
    expect(result).toContain('wiki/HPL3/Guide.md');
    expect(result).toContain('Entity_CreateAtEntity');
    expect(ledger.references.length).toBeGreaterThan(0);
    expect(ledger.searches[0].queries).toEqual(['Spawn Entities', 'Entity_CreateAtEntity']);
  });

  it('inspects a method and exposes helper alternatives as neighboring symbols', async () => {
    const searched = await execute('search_corpus', { queries: ['CreateEntity'], channels: ['symbols'] });
    const id = searched.result.match(/(symbol:hps_api\.hps:\d+:CreateEntity)/)?.[1];
    expect(id).toBeTruthy();
    const inspected = await execute('inspect_corpus', { targets: [id!], include: ['source', 'neighbors'] });
    expect(inspected.result).toContain('Entity_CreateAtEntity');
    expect(inspected.result).toContain('Entity_CreateAtEntityExt');
  });

  it('reads ranged text and blocks traversal and binary reads', async () => {
    expect((await execute('read_file', { path: 'hps_api.hps', offset: 1, limit: 1 })).result).toMatch(/^1\t/);
    expect((await execute('read_file', { path: '../secret.env' })).result).toMatch(/traversal/i);
    expect((await execute('read_file', { path: 'texture.bin' })).result).toMatch(/binary/i);
  });

  it('keeps literal search misses scoped and records them', async () => {
    const { result, ledger } = await execute('search_files', {
      query: 'DefinitelyMissing', path: 'wiki', literal: true,
    });
    expect(result).toContain('No matches found.');
    expect(result).toContain('scope: wiki');
    expect(ledger.searches[0].empty).toBe(true);
  });
});

describe('attachment tools', () => {
  // The docs `root` doubles as an "uploads" workspace here; the point is that
  // attachment tools are rooted at whatever attachmentsRoot is passed, reusing
  // the same sandboxed read/search helpers as the corpus tools.
  const attTools = (attachmentsRoot?: string) =>
    fileTools(root, emptyEvidenceLedger(), attachmentsRoot) as Record<string, { execute?: Function }>;
  const runTool = async (tools: ReturnType<typeof attTools>, name: string, input: Record<string, unknown>) =>
    (await tools[name].execute!(input, { toolCallId: 'test', messages: [] })) as string;

  let hasRg = false;
  try {
    execFileSync('rg', ['--version'], { stdio: 'ignore' });
    hasRg = true;
  } catch {
    hasRg = false;
  }

  it('are absent without an attachmentsRoot and present with one', () => {
    expect(Object.keys(fileTools(root))).not.toContain('read_attachment');
    expect(Object.keys(fileTools(root, emptyEvidenceLedger(), ''))).not.toContain('read_attachment');

    const names = Object.keys(fileTools(root, emptyEvidenceLedger(), root));
    expect(names).toContain('list_attachments');
    expect(names).toContain('read_attachment');
    expect(names).toContain('search_attachments');
  });

  it('read_attachment reads under the workspace and cannot escape it', async () => {
    const tools = attTools(root);
    expect(await runTool(tools, 'read_attachment', { path: 'hps_api.hps', offset: 1, limit: 1 })).toMatch(/^1\t/);
    expect(await runTool(tools, 'read_attachment', { path: '../secret.env' })).toMatch(/traversal/i);
  });

  it('list_attachments lists files in the workspace', async () => {
    const out = await runTool(attTools(root), 'list_attachments', {});
    expect(out).toContain('hps_api.hps');
  });

  (hasRg ? it : it.skip)('search_attachments finds a line in an uploaded file', async () => {
    const out = await runTool(attTools(root), 'search_attachments', {
      query: 'Entity_CreateAtEntity', literal: true,
    });
    expect(out).toContain('Entity_CreateAtEntity');
  });
});
