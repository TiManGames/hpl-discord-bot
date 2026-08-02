import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import type { Message } from 'discord.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILLS_ROOT = resolve(__dirname, '..', 'skills');

export interface GameInfo {
  gameId: string;
  skillDir: string;
  docsRoot: string;
}

/**
 * Maps Discord channel names (or IDs) to game identifiers.
 * Override at runtime via the CHANNEL_MAP env var (JSON object).
 *
 * Example CHANNEL_MAP:
 *   {"hpl2-modding":"hpl2","soma-modding":"hpl3-soma","rebirth-modding":"hpl3-rebirth","bunker-modding":"hpl3-bunker"}
 */
function buildChannelMap(): Map<string, string> {
  const raw = process.env.CHANNEL_MAP;
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as Record<string, string>;
      return new Map(Object.entries(parsed));
    } catch {
      console.error('CHANNEL_MAP is not valid JSON — falling back to defaults');
    }
  }
  // Built-in defaults
  return new Map([
    ['hpl2-modding', 'hpl2'],
    ['soma-modding', 'hpl3-soma'],
    ['rebirth-modding', 'hpl3-rebirth'],
    ['bunker-modding', 'hpl3-bunker'],
  ]);
}

const channelMap = buildChannelMap();

/**
 * Resolves a Discord message's channel to a game info object.
 * Returns null if the channel is not a mapped modding channel.
 */
export function resolveGame(message: Message): GameInfo | null {
  const channel = message.channel;
  if (!('name' in channel)) return null;

  // Try by channel name first, then by ID
  const name = (channel as { name: string }).name;
  const gameId = channelMap.get(name) ?? channelMap.get(channel.id);
  if (!gameId) return null;

  const skillDir = join(SKILLS_ROOT, gameId);
  const docsRoot = join(skillDir, 'docs');

  return { gameId, skillDir, docsRoot };
}
