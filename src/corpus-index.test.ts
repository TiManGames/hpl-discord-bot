import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { clearCorpusIndexCache, getCorpusIndex, relatedSymbols, searchCorpus } from './corpus-index.js';

let root: string;

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), 'neutral-corpus-'));
  mkdirSync(join(root, 'script', 'custom_depth'), { recursive: true });
  mkdirSync(join(root, 'script', 'helpers'), { recursive: true });
  mkdirSync(join(root, 'wiki', 'HPL3', 'Scripting'), { recursive: true });
  mkdirSync(join(root, 'config'), { recursive: true });
  writeFileSync(join(root, 'hps_api.hps'), [
    'class cLuxMap {',
    '  void CreateEntity(const tString &in asName, const tString &in asFile, const cMatrixf &in a_mtx, const cVector3f &in avScale);',
    '}',
    'iLuxEntity@ Entity_CreateAtEntity(const tString &in asName, const tString &in asFile, const tString &in asTarget, bool abSave);',
    'iLuxEntity@ Entity_CreateAtEntityExt(const tString &in asName, const tString &in asFile, const tString &in asTarget, bool abSave);',
    'void Entity_SetActive(const tString &in asName, bool abActive);',
  ].join('\n'));
  writeFileSync(join(root, 'script', 'custom_depth', 'agent_puppet.hps'), [
    '#include "helper_custom_depth_ai_puppet.hps"',
    'class cScrAgentPuppet : cScrAgentHumanoid {',
    '  void Hunt() { Puppet_ChangeState_Hunt(); }',
    '}',
  ].join('\n'));
  writeFileSync(join(root, 'script', 'custom_depth', 'helper_custom_depth_ai_puppet.hps'), [
    'void Puppet_ChangeState_Hunt(cScrAgentPuppet @apAgent) {',
    '  cScript_RunGlobalFunc("Agent_Puppet", "_Global_ChangeState_Hunt", apAgent);',
    '}',
  ].join('\n'));
  writeFileSync(join(root, 'script', 'helpers', 'helper_entity.hps'),
    'void Example() { Entity_CreateAtEntity("a", "b.ent", "target", false); }\n');
  writeFileSync(join(root, 'wiki', 'HPL3', 'Scripting', 'Helper Files.md'),
    '# Helper Files\nHelpers expose convenient global wrappers for common engine operations.\n');
  writeFileSync(join(root, 'alias-mapping.md'), 'Proxy -> agent_puppet\n');
  writeFileSync(join(root, 'config', 'EntityTypes.cfg'),
    '<AgentType Name="Puppet" ScriptFile="custom_depth/agent_puppet.hps" ScriptClass="cScrAgentPuppet" />\n');
  writeFileSync(join(root, 'control.hps'), [
    'void ApiCall();',
    'void Test(bool value) {',
    '  if (value) ApiCall();',
    '  else if (!value) ApiCall();',
    '  else ApiCall();',
    '  return ApiCall();',
    '}',
  ].join('\n'));
  writeFileSync(join(root, 'texture.dds'), Buffer.from([0, 1, 2, 3]));
});

afterAll(() => rmSync(root, { recursive: true, force: true }));

describe('neutral corpus index', () => {
  it('indexes every path and first-class wiki content', () => {
    const index = getCorpusIndex(root);
    expect(index.filesByPath.get('texture.dds')?.binary).toBe(true);
    const hits = searchCorpus(index, { queries: ['Helper Files'], limit: 10 });
    expect(hits.some((hit) => hit.path.endsWith('Helper Files.md'))).toBe(true);
  });

  it('returns all entity creation alternatives from model-supplied variants', () => {
    const hits = searchCorpus(getCorpusIndex(root), {
      queries: ['Entity_CreateAtEntity', 'Entity_CreateAtEntityExt', 'CreateEntity'],
      channels: ['symbols'],
      limit: 10,
    });
    expect(hits.map((hit) => hit.symbol?.name)).toEqual(expect.arrayContaining([
      'Entity_CreateAtEntity', 'Entity_CreateAtEntityExt', 'CreateEntity',
    ]));
  });

  it('recovers identifier typos without a synonym table', () => {
    const hits = searchCorpus(getCorpusIndex(root), { queries: ['agent_pupet'], channels: ['paths'], limit: 5 });
    expect(hits[0]?.path).toBe('script/custom_depth/agent_puppet.hps');
  });

  it('keeps aliases as searchable content and requires a separate exact lookup', () => {
    const alias = searchCorpus(getCorpusIndex(root), { queries: ['Proxy'], limit: 5 });
    expect(alias.some((hit) => hit.path === 'alias-mapping.md')).toBe(true);
    const exact = searchCorpus(getCorpusIndex(root), { queries: ['agent_puppet'], limit: 5 });
    expect(exact.some((hit) => hit.path === 'script/custom_depth/agent_puppet.hps')).toBe(true);
  });

  it('indexes generic inheritance, include, registration, dispatch, and usage relationships', () => {
    const index = getCorpusIndex(root);
    const kinds = new Set(index.relationships.map((value) => value.kind));
    expect(kinds).toEqual(new Set(['inheritance', 'include', 'registration', 'dispatch-call']));
    expect(index.usagesBySymbol.get('entity_createatentity')?.length).toBeGreaterThan(0);
  });

  it('discovers type members and caller-callee edges without named routing rules', () => {
    const index = getCorpusIndex(root);
    const owner = index.symbols.find((symbol) => symbol.name === 'cScrAgentPuppet')!;
    const caller = index.symbols.find((symbol) => symbol.name === 'Hunt')!;
    const callee = index.symbols.find((symbol) => symbol.name === 'Puppet_ChangeState_Hunt')!;
    expect(relatedSymbols(index, owner).some((value) =>
      value.relation === 'member' && value.symbol.id === caller.id)).toBe(true);
    expect(relatedSymbols(index, caller).some((value) =>
      value.relation === 'callee' && value.symbol.id === callee.id)).toBe(true);
    expect(relatedSymbols(index, callee).some((value) =>
      value.relation === 'caller' && value.symbol.id === caller.id)).toBe(true);
  });

  it('never treats control-flow statements as declarations', () => {
    const index = getCorpusIndex(root);
    expect(index.symbols.some((symbol) => ['if', 'else', 'return'].includes(symbol.name))).toBe(false);
    expect(index.usagesBySymbol.get('apicall')?.length).toBeGreaterThanOrEqual(4);
  });

  it('keeps stable IDs across rebuilds', () => {
    const first = searchCorpus(getCorpusIndex(root), { queries: ['Entity_CreateAtEntity'], channels: ['symbols'] })[0].id;
    clearCorpusIndexCache();
    const second = searchCorpus(getCorpusIndex(root), { queries: ['Entity_CreateAtEntity'], channels: ['symbols'] })[0].id;
    expect(second).toBe(first);
  });
});
