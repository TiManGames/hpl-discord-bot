import { describe, it, expect, afterEach, vi } from 'vitest';
import type { Message } from 'discord.js';

// channels.ts reads CHANNEL_MAP and builds its map at import time, so we reset
// the module registry and re-import with the env we want for each test.
async function loadResolveGame(channelMap?: string) {
  vi.resetModules();
  if (channelMap === undefined) {
    delete process.env.CHANNEL_MAP;
  } else {
    process.env.CHANNEL_MAP = channelMap;
  }
  const mod = await import('./channels.js');
  return mod.resolveGame;
}

// Minimal fake of the discord.js Message shape resolveGame actually touches.
function fakeMessage(channel: { name?: string; id: string }): Message {
  return { channel } as unknown as Message;
}

afterEach(() => {
  delete process.env.CHANNEL_MAP;
});

describe('resolveGame with default map', () => {
  it('resolves a known default channel name to its game', async () => {
    const resolveGame = await loadResolveGame();
    const info = resolveGame(fakeMessage({ name: 'hpl2-modding', id: '1' }));
    expect(info?.gameId).toBe('hpl2');
    expect(info?.skillDir).toMatch(/skills[\\/]hpl2$/);
    expect(info?.docsRoot).toMatch(/skills[\\/]hpl2[\\/]docs$/);
  });

  it('returns null for an unmapped channel', async () => {
    const resolveGame = await loadResolveGame();
    expect(resolveGame(fakeMessage({ name: 'random-chat', id: '1' }))).toBeNull();
  });
});

describe('resolveGame with custom CHANNEL_MAP', () => {
  it('honours a custom name→game mapping', async () => {
    const resolveGame = await loadResolveGame(JSON.stringify({ hpl2: 'hpl2' }));
    expect(resolveGame(fakeMessage({ name: 'hpl2', id: '1' }))?.gameId).toBe('hpl2');
  });

  it('resolves by channel ID when the name is not mapped', async () => {
    const resolveGame = await loadResolveGame(JSON.stringify({ '999': 'hpl3-soma' }));
    const info = resolveGame(fakeMessage({ name: 'anything', id: '999' }));
    expect(info?.gameId).toBe('hpl3-soma');
  });

  it('falls back to defaults when CHANNEL_MAP is invalid JSON', async () => {
    const resolveGame = await loadResolveGame('{not valid json');
    expect(resolveGame(fakeMessage({ name: 'hpl2-modding', id: '1' }))?.gameId).toBe(
      'hpl2',
    );
  });
});

describe('resolveGame with non-guild channels', () => {
  it('returns null when the channel has no name property (e.g. DM)', async () => {
    const resolveGame = await loadResolveGame();
    // A channel object with no `name` key at all.
    const info = resolveGame({ channel: { id: '1' } } as unknown as Message);
    expect(info).toBeNull();
  });
});
