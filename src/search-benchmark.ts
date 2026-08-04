import { resolve } from 'node:path';
import { clearCorpusIndexCache, getCorpusIndex } from './corpus-index.js';

const games = ['hpl2', 'hpl3-soma', 'hpl3-rebirth', 'hpl3-bunker'];
const results = games.map((game) => {
  clearCorpusIndexCache();
  const runtime = globalThis as typeof globalThis & { gc?: () => void };
  runtime.gc?.();
  const before = process.memoryUsage().heapUsed;
  const startedAt = performance.now();
  const index = getCorpusIndex(resolve(process.cwd(), 'skills', game, 'docs'));
  const elapsedMs = performance.now() - startedAt;
  runtime.gc?.();
  const heapDeltaMb = (process.memoryUsage().heapUsed - before) / (1024 * 1024);
  return {
    game,
    elapsedMs: Math.round(elapsedMs),
    heapDeltaMb: Number(heapDeltaMb.toFixed(1)),
    files: index.stats.files,
    indexedFiles: index.stats.indexedFiles,
    symbols: index.stats.symbols,
    chunks: index.stats.chunks,
    relationships: index.relationships.length,
    target: { elapsedMs: '<2000 (informational)', heapMb: '<150 (informational)' },
  };
});

console.log(JSON.stringify(results, null, 2));
