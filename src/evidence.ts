export interface EvidenceReference {
  id: string;
  kind: 'file' | 'symbol' | 'chunk';
  label: string;
  path: string;
  line?: number;
}

export interface SearchEvent {
  queries: string[];
  channels: string[];
  scope?: string;
  glob?: string;
  resultIds: string[];
  empty: boolean;
  truncated: boolean;
}

export interface EvidenceLedger {
  references: EvidenceReference[];
  searches: SearchEvent[];
}

const MAX_REFERENCES = 40;
const MAX_SEARCHES = 20;
const MAX_RESULT_IDS_PER_SEARCH = 10;
const MAX_CONTEXT_CHARS = 6_000;

export function emptyEvidenceLedger(): EvidenceLedger {
  return { references: [], searches: [] };
}

export function mergeEvidenceLedger(
  current: EvidenceLedger | undefined,
  delta: EvidenceLedger | undefined,
): EvidenceLedger {
  const merged = emptyEvidenceLedger();
  const references = [...(current?.references ?? []), ...(delta?.references ?? [])];
  for (const reference of references) {
    const existing = merged.references.findIndex((value) => value.id === reference.id);
    if (existing >= 0) merged.references.splice(existing, 1);
    merged.references.push(reference);
  }
  merged.references = merged.references.slice(-MAX_REFERENCES);

  const searches = [...(current?.searches ?? []), ...(delta?.searches ?? [])];
  for (const event of searches) {
    const compactEvent = {
      ...event,
      queries: event.queries.slice(0, 8),
      resultIds: event.resultIds.slice(0, MAX_RESULT_IDS_PER_SEARCH),
    };
    const key = searchKey(compactEvent);
    const existing = merged.searches.findIndex((value) => searchKey(value) === key);
    if (existing >= 0) merged.searches.splice(existing, 1);
    merged.searches.push(compactEvent);
  }
  merged.searches = merged.searches.slice(-MAX_SEARCHES);
  return merged;
}

export function formatEvidenceLedger(ledger: EvidenceLedger | undefined): string {
  if (!ledger || (ledger.references.length === 0 && ledger.searches.length === 0)) return '';
  const references = ledger.references.map((value) =>
    `${value.id} | ${value.label} | ${value.path}${value.line ? `:${value.line}` : ''}`);
  const searches = ledger.searches.map((value) =>
    `${value.queries.join(' || ')} | channels=${value.channels.join(',')} | ` +
    `scope=${value.scope ?? '.'}${value.glob ? ` | glob=${value.glob}` : ''} | ` +
    `results=${value.resultIds.join(',') || 'none'}`);
  const formatted = [
    'Research locator ledger from earlier turns. It contains locators, not source excerpts; inspect IDs before relying on exact details.',
    references.length ? `Evidence:\n${references.join('\n')}` : '',
    searches.length ? `Searches:\n${searches.join('\n')}` : '',
  ].filter(Boolean).join('\n');
  return formatted.length <= MAX_CONTEXT_CHARS
    ? formatted
    : `${formatted.slice(0, formatted.indexOf('\n'))}\n...(older locator details omitted)\n` +
      formatted.slice(-(MAX_CONTEXT_CHARS - 180));
}

function searchKey(event: SearchEvent): string {
  return JSON.stringify({
    queries: event.queries,
    channels: event.channels,
    scope: event.scope ?? '',
    glob: event.glob ?? '',
  });
}
