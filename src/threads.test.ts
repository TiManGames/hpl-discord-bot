import { describe, it, expect, beforeEach } from 'vitest';
import type { ModelMessage } from 'ai';
import {
  initInMemoryThreadStore,
  saveThread,
  deleteThread,
  findAllThreads,
  stripImageParts,
  toRecord,
  threadStoreReady,
  IMAGE_PLACEHOLDER,
  _clearAll,
} from './threads.js';
import type { Session } from './history.js';

const NOW = 1_700_000_000_000;

function session(overrides: Partial<Session> = {}): Session {
  return {
    gameId: 'hpl3-soma',
    docsRoot: '/abs/skills/hpl3-soma/docs',
    authorId: 'author-1',
    messages: [{ role: 'user', content: 'hello' }],
    ...overrides,
  };
}

describe('stripImageParts', () => {
  it('leaves string-content messages untouched', () => {
    const messages: ModelMessage[] = [{ role: 'user', content: 'plain text' }];
    expect(stripImageParts(messages)).toEqual(messages);
  });

  it('replaces image parts with a text placeholder, keeping other parts', () => {
    const messages: ModelMessage[] = [
      {
        role: 'user',
        content: [
          { type: 'text', text: 'look at this' },
          { type: 'image', image: new ArrayBuffer(8), mediaType: 'image/png' },
        ],
      },
    ];
    const stripped = stripImageParts(messages) as Array<{ content: unknown[] }>;
    expect(stripped[0].content).toEqual([
      { type: 'text', text: 'look at this' },
      { type: 'text', text: IMAGE_PLACEHOLDER },
    ]);
  });

  it('produces a JSON-serializable history (no ArrayBuffer survives)', () => {
    const messages: ModelMessage[] = [
      { role: 'user', content: [{ type: 'image', image: new ArrayBuffer(4), mediaType: 'image/jpeg' }] },
    ];
    const stripped = stripImageParts(messages);
    // Would throw if a raw ArrayBuffer remained un-plain; round-trips cleanly.
    expect(() => JSON.parse(JSON.stringify(stripped))).not.toThrow();
    expect(JSON.stringify(stripped)).toContain(IMAGE_PLACEHOLDER);
  });

  it('does not mutate the original messages array', () => {
    const original: ModelMessage[] = [
      { role: 'user', content: [{ type: 'image', image: new ArrayBuffer(2), mediaType: 'image/png' }] },
    ];
    const snapshot = JSON.stringify(original.map((m) => (Array.isArray(m.content) ? m.content.map((p) => (p as { type: string }).type) : m.content)));
    stripImageParts(original);
    const after = JSON.stringify(original.map((m) => (Array.isArray(m.content) ? m.content.map((p) => (p as { type: string }).type) : m.content)));
    expect(after).toEqual(snapshot);
  });
});

describe('toRecord', () => {
  it('projects a session and omits docsRoot (re-derived on restore)', () => {
    const rec = toRecord('thread-1', session(), NOW);
    expect(rec).toMatchObject({
      _id: 'thread-1',
      gameId: 'hpl3-soma',
      authorId: 'author-1',
      updatedAt: NOW,
    });
    expect(rec).not.toHaveProperty('docsRoot');
  });

  it('strips images in the projected messages', () => {
    const rec = toRecord(
      'thread-2',
      session({ messages: [{ role: 'user', content: [{ type: 'image', image: new ArrayBuffer(1), mediaType: 'image/png' }] }] }),
      NOW,
    );
    expect(JSON.stringify(rec.messages)).toContain(IMAGE_PLACEHOLDER);
  });
});

describe('thread store (in-memory)', () => {
  beforeEach(async () => {
    await initInMemoryThreadStore();
    await _clearAll();
  });

  it('reports ready once initialised', () => {
    expect(threadStoreReady()).toBe(true);
  });

  it('saves a thread and reads it back', async () => {
    await saveThread('thread-1', session(), NOW);
    const all = await findAllThreads();
    expect(all).toHaveLength(1);
    expect(all[0]).toMatchObject({ _id: 'thread-1', gameId: 'hpl3-soma', authorId: 'author-1' });
  });

  it('upserts on repeated save (no duplicate records)', async () => {
    await saveThread('thread-1', session(), NOW);
    await saveThread('thread-1', session({ messages: [{ role: 'user', content: 'updated' }] }), NOW + 1);
    const all = await findAllThreads();
    expect(all).toHaveLength(1);
    expect(all[0].updatedAt).toBe(NOW + 1);
  });

  it('persists image-stripped history so records stay JSON-safe', async () => {
    await saveThread(
      'thread-img',
      session({ messages: [{ role: 'user', content: [{ type: 'image', image: new ArrayBuffer(4), mediaType: 'image/png' }] }] }),
      NOW,
    );
    const all = await findAllThreads();
    expect(JSON.stringify(all[0].messages)).toContain(IMAGE_PLACEHOLDER);
  });

  it('deletes a thread record and is idempotent for unknown ids', async () => {
    await saveThread('thread-del', session(), NOW);
    await deleteThread('thread-del');
    expect(await findAllThreads()).toHaveLength(0);
    await deleteThread('thread-del'); // no throw
    expect(await findAllThreads()).toHaveLength(0);
  });
});
