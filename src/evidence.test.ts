import { describe, expect, it } from 'vitest';
import { emptyEvidenceLedger, formatEvidenceLedger, mergeEvidenceLedger } from './evidence.js';

describe('bounded evidence ledger', () => {
  it('deduplicates stable IDs, refreshes recent entries, and enforces caps', () => {
    const current = emptyEvidenceLedger();
    for (let index = 0; index < 45; index++) {
      current.references.push({
        id: `file:path-${index}.md`, kind: 'file', label: `path-${index}.md`, path: `path-${index}.md`,
      });
    }
    const delta = emptyEvidenceLedger();
    delta.references.push({
      id: 'file:path-10.md', kind: 'file', label: 'refreshed', path: 'path-10.md', line: 7,
    });
    for (let index = 0; index < 25; index++) {
      delta.searches.push({
        queries: [`query-${index}`], channels: ['content'], resultIds: [], empty: true, truncated: false,
      });
    }
    const merged = mergeEvidenceLedger(current, delta);
    expect(merged.references).toHaveLength(40);
    expect(merged.references.at(-1)?.label).toBe('refreshed');
    expect(merged.searches).toHaveLength(20);
  });

  it('serializes locators and search scopes without storing source excerpts', () => {
    const ledger = mergeEvidenceLedger(undefined, {
      references: [{ id: 'symbol:hps_api.hps:3:Create', kind: 'symbol', label: 'Create', path: 'hps_api.hps', line: 3 }],
      searches: [{ queries: ['Create'], channels: ['symbols'], resultIds: ['symbol:hps_api.hps:3:Create'], empty: false, truncated: false }],
    });
    const formatted = formatEvidenceLedger(ledger);
    expect(formatted).toContain('symbol:hps_api.hps:3:Create');
    expect(formatted).toContain('locators, not source excerpts');
    expect(formatted).not.toContain('void Create(');
  });
});
