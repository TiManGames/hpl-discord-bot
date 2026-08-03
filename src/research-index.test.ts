import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import {
  classifyQuestionProfile,
  clearResearchIndexCache,
  getResearchIndex,
  lookupSymbols,
  searchChunks,
} from './research-index.js';
import { lookupSymbolReport, researchTopicReport } from './research-tools.js';

let root: string;
let rootWithoutEditor: string;

function write(relativePath: string, content: string, base = root): void {
  const path = join(base, ...relativePath.split('/'));
  mkdirSync(join(path, '..'), { recursive: true });
  writeFileSync(path, content);
}

beforeAll(() => {
  root = mkdtempSync(join(tmpdir(), 'hpl-research-'));
  write('hps_api.hps', `
/** Set if an entity is active (visible and functioning). */
void Entity_SetActive(const tString &in asName, bool abActive);
bool Entity_IsActive(const tString &in asName);
void CharMover_PlayAnimation(const tString &in asName, const tString &in asAnimation);
`);
  write('script/agents/Agent_Test.hps', `
class cScrAgentTest : iScrAgent
{
  void EmergeFromFloor()
  {
    Entity_SetActive("Enemy_01", true);
    CharMover_PlayAnimation("Enemy_01", "emerge");
  }
}
`);
  write('scripts/EntityHelpers.hps', `
void Entity_DisableWithEffects(const tString &in asName)
{
  Entity_SetActive(asName, false);
}
`);
  write('maps/test_map.hps', `
// Run first time starting map
void OnStart()
{
  Entity_SetActive("Enemy_01", false);
}

void SpawnEnemy()
{
  Entity_SetActive("Enemy_01", true);
  CharMover_PlayAnimation("Enemy_01", "emerge");
}
`);
  write('wiki/HPL3/Custom Entities Guide.md', `
# Custom entities
Create a custom agent by starting from a stock agent script and keeping the script class aligned with EntityTypes.cfg.

## Runtime behavior
Use an appearance animation and activate senses after it completes.
`);
  write('config/EntityTypes.cfg', `
<EntityTypes>
  <AgentType Name="Agent_Test" ScriptFile="agents/Agent_Test.hps" ScriptClass="cScrAgentTest" />
</EntityTypes>
`);
  write('editor/userclasses/EntityClasses.def', `
<UserClasses>
  <EntityClass Name="Agent_Test" Type="Agent" />
</UserClasses>
`);

  rootWithoutEditor = mkdtempSync(join(tmpdir(), 'hpl-research-no-editor-'));
  write('hps_api.hps', 'void Entity_SetActive(const tString &in asName, bool abActive);\n', rootWithoutEditor);
  write('script/Agent.hps', 'void Spawn() { Entity_SetActive("Enemy", true); }\n', rootWithoutEditor);
  write('wiki/Guide.md', '# Custom entity\nUse a registered script class.\n', rootWithoutEditor);
  write('config/EntityTypes.cfg', '<AgentType Name="Agent" ScriptFile="Agent.hps" ScriptClass="cAgent" />\n', rootWithoutEditor);
  clearResearchIndexCache();
});

afterAll(() => {
  clearResearchIndexCache();
  rmSync(root, { recursive: true, force: true });
  rmSync(rootWithoutEditor, { recursive: true, force: true });
});

describe('HPL retrieval index', () => {
  it('indexes hps_api plus script declarations and call relationships', () => {
    const index = getResearchIndex(root);
    expect(index.symbols.some((symbol) => symbol.name === 'Entity_SetActive')).toBe(true);
    expect(index.symbols.some((symbol) =>
      symbol.name === 'EmergeFromFloor' && symbol.container === 'cScrAgentTest')).toBe(true);
    expect(index.symbols.some((symbol) => symbol.name === 'Entity_DisableWithEffects')).toBe(true);
    expect(index.usagesBySymbol.get('entity_setactive')?.length).toBeGreaterThanOrEqual(2);
    expect(index.stats.byCategory['game-script']).toBe(2);
    expect(index.stats.byCategory['map-script']).toBe(1);
  });

  it('maps fuzzy natural wording to the mutating entity API', () => {
    const matches = lookupSymbols(getResearchIndex(root), 'How do I disable an entity?');
    expect(matches[0].symbol.name).toBe('Entity_SetActive');
    expect(matches[0].confidence).toBe('high');
  });

  it('keeps a partial method guess from overriding the qualified entity intent', () => {
    const matches = lookupSymbols(getResearchIndex(root), 'SetActive entity enable');
    expect(matches[0].symbol.name).toBe('Entity_SetActive');
  });

  it('resolves a natural map-start callback request without treating "show" as visibility', () => {
    const matches = lookupSymbols(
      getResearchIndex(root),
      'What callback runs when a SOMA map starts? Show the function signature.',
    );
    expect(matches[0].symbol.name).toBe('OnStart');
    expect(matches[0].symbol.signature).toBe('void OnStart()');
    expect(matches[0].symbol.sourceCategory).toBe('map-script');
  });

  it('finds heading-chunked wiki and source-specific config evidence', () => {
    const index = getResearchIndex(root);
    const guide = searchChunks(index, 'custom entity agent', new Set(['wiki-guide']), 2);
    expect(guide[0].chunk.path).toContain('Custom Entities Guide.md');
    const config = searchChunks(index, 'AgentType ScriptClass', new Set(['config']), 2);
    expect(config[0].chunk.text).toContain('cScrAgentTest');
  });

  it('caches one immutable index per real docs root', () => {
    expect(getResearchIndex(root)).toBe(getResearchIndex(root));
  });
});

describe('evidence profiles and stopping contracts', () => {
  it('classifies simple exact requests separately from cross-source implementations', () => {
    expect(classifyQuestionProfile(
      'Give the exact API call and one minimal example to disable an entity.',
    )).toBe('api');
    expect(classifyQuestionProfile(
      'How do I create a custom enemy that emerges from the floor?',
    )).toBe('custom-entity');
  });

  it('resolves a high-confidence declaration while bounding broader claims', () => {
    const report = lookupSymbolReport({ query: 'disable entity' }, root);
    expect(report).toContain('status: resolved');
    expect(report).toContain('Entity_SetActive');
    expect(report).toContain('covered: yes');
    expect(report).toContain(
      'declaration_signature: void Entity_SetActive(const tString &in asName, bool abActive)',
    );
    expect(report).toContain('invocation_shape: Entity_SetActive(asName, abActive);');
    expect(report).toContain('Answer only those facts');
  });

  it('covers wiki, stock behavior, config, and editor for a custom agent', () => {
    const report = researchTopicReport({
      query: 'How do I create a custom enemy agent that emerges from the floor?',
      profile: 'auto',
    }, root);
    expect(report).toContain('profile: custom-entity');
    expect(report).toContain('coverage: sufficient');
    expect(report).toContain('[guide] status=covered');
    expect(report).toContain('[game-pattern] status=covered');
    expect(report).toContain('[config-registration] status=covered');
    expect(report).toContain('[editor-registration] status=covered');
  });

  it('settles an absent source as a gap instead of inviting repeated searches', () => {
    const report = researchTopicReport({
      query: 'How do I create a custom enemy agent?',
      profile: 'custom-entity',
    }, rootWithoutEditor);
    expect(report).toContain('coverage: settled-with-gaps');
    expect(report).toContain('editor-registration (source-unavailable)');
    expect(report).toContain('do not search alternate spellings');
  });

  it('requires all three indexed families before supporting a negative claim', () => {
    const report = researchTopicReport({
      query: 'Does HPL3 support teleporting an agent?',
      profile: 'negative-capability',
    }, root);
    expect(report).toContain('required_evidence: api-search, game-search, wiki-search');
    expect(report).toContain('[api-search]');
    expect(report).toContain('[game-search]');
    expect(report).toContain('[wiki-search]');
  });
});
