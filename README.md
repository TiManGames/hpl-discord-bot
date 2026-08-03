# HPL Discord Bot

A Discord bot that answers **HPL2 / HPL3 engine modding** questions (Frictional Games) using Claude via **SAP AI Core**. When a user @-mentions the bot in a game-specific channel, it opens a thread, reads the relevant documentation, and replies — then keeps the conversation going in that thread.

## How it works

1. A user @-mentions the bot in a mapped channel (e.g. `hpl2`, `hpl3-soma`, `hpl3-rebirth`, `hpl3-bunker`).
2. The bot reacts with 👀 and creates a **thread** under the message.
3. The question is sent to Claude with a game-specific system prompt (from `skills/<game>/SKILL.md`) plus a manifest of every available doc file.
4. Claude searches and reads the relevant text docs through sandboxed `search_files` and `read_file` tools, then posts the answer in the thread.
5. Any further replies **in that thread** continue the conversation — no @-mention needed.

Conversation history is kept **in memory**, keyed by thread ID (it resets when the bot restarts).

## Prerequisites

- Node.js >= 18
- A Discord bot application
- SAP AI Core credentials with access to a Claude deployment in your **own resource group**

## Setup

### 1. Install

```
npm install
```

### 2. Discord bot

1. Create an app at the [Discord Developer Portal](https://discord.com/developers/applications).
2. Under **Bot**, reset/copy the token and enable the **Message Content Intent** (privileged).
3. Invite the bot (Guild install) with permissions integer **`309237713984`** — that covers: View Channel, Send Messages, Send Messages in Threads, Create Public Threads, Add Reactions, Read Message History.

### 3. Environment

Copy `.env.example` to `.env` and fill it in:

```
# SAP AI Core credentials — MUST be a SINGLE-LINE JSON blob
AICORE_SERVICE_KEY={"clientid":"...","clientsecret":"...","url":"https://...authentication...","serviceurls":{"AI_API_URL":"https://api.ai.prod....ml.hana.ondemand.com/v2"}}

# Your provisioned resource group (NOT "default" — that's a shared, throttled bucket)
AICORE_RESOURCE_GROUP=your-resource-group

DISCORD_TOKEN=your-bot-token

# Channel name (or ID) -> game id
CHANNEL_MAP={"hpl2":"hpl2","hpl3-soma":"hpl3-soma","hpl3-rebirth":"hpl3-rebirth","hpl3-bunker":"hpl3-bunker"}
```

> **`AICORE_SERVICE_KEY` must stay on one line.** dotenv only reads the first line of a value, so pretty-printed multi-line JSON will fail to parse.

Optional env vars:
- `AICORE_MODEL` — override the model (default `anthropic--claude-4.6-sonnet`).
- `AICORE_MAX_STEPS` — safety ceiling for one agent run (default `20`; normal questions should finish well below it).
- `AICORE_ADAPTIVE_THINKING` — set to `true` to request Claude 4.6 adaptive thinking for a controlled A/B test (default `false`).
- `AICORE_THINKING_MAX_OUTPUT_TOKENS` — output-token ceiling while adaptive thinking is requested (default `8192`).
- `CHANNEL_MAP` — defaults are provided; override to match your channel names.

### 4. Add documentation

Drop docs (markdown, txt, `.hps`, etc.) into `skills/<game>/docs/`. The bot builds a file manifest from these and lets Claude read them on demand. Each game also has a `skills/<game>/SKILL.md` system prompt you can edit.

### 5. Run

```
npm run dev      # watch mode
npm start        # one-off
```

Mention the bot in a mapped channel to test.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Run in watch mode (tsx) |
| `npm start` | Run once |
| `npm run list-deployments` | List RUNNING SAP AI Core deployments in your resource group |
| `npm run cache-probe` | Verify stable-system and rolling message-tail caching through SAP |
| `npm run thinking-probe` | Probe adaptive thinking across dependent tool calls; does not change production settings |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Vitest in watch mode |
| `npm run build` | Compile to `dist/` |

## Project structure

```
src/
  index.ts            # Entry: validates env, starts the bot
  bot.ts              # Discord client, event handlers, prompt assembly, message splitting
  agent.ts            # Claude agent loop via Vercel AI SDK + SAP AI Core, with 429 retry
  cache.ts            # Rolling message-tail cache breakpoint; preserves the full research transcript
  tools.ts            # Sandboxed text read/search tools + filtered docs manifest builder
  retry.ts            # Pure retry-decision helpers (429 / auth-timeout)
  channels.ts         # Channel -> game resolution
  history.ts          # In-memory per-thread conversation store
  list-deployments.ts # One-off helper to discover deployment ids
  *.test.ts           # Vitest unit tests
skills/
  <game>/SKILL.md     # Per-game system prompt
  <game>/docs/        # Per-game documentation the bot can read
```

## How the SAP AI Core connection works

The bot uses [`@jerome-benoit/sap-ai-provider`](https://www.npmjs.com/package/@jerome-benoit/sap-ai-provider) with the Vercel AI SDK, configured with only a **resource group** (`createSAPAIProvider({ resourceGroup })`). This routes requests through your provisioned resource group's quota. Do **not** pin a `deploymentId` — doing so makes the provider ignore the resource group and fall back to the shared, rate-limited `default` bucket.

The agent loop honours SAP's `x-retry-after` header on 429s (the SDK's built-in backoff ignores it). It retains every search and file result for the whole run. After each tool batch it persists a compact research checkpoint that asks the same model to decide whether the gathered evidence is sufficient: answer now, or call only the minimum tools needed for one concrete gap. That checkpoint also places an Anthropic cache breakpoint after the complete tool transcript without annotating tool messages, whose content SAP requires to remain a string. The bot records step, tool-call, duplicate-call, forced-final, and surfaced reasoning metrics in the logs. The 20-step ceiling remains an emergency fallback, not a convergence mechanism.

`npm run thinking-probe` checks whether SAP forwards `thinking: { type: "adaptive" }`, exposes reasoning, and survives a dependent two-tool chain. Some SAP paths accept and forward the setting without returning reasoning usage; that result is inconclusive. In that case, `AICORE_ADAPTIVE_THINKING=true` enables an explicit production A/B test rather than claiming adaptive thinking is confirmed.

## Notes

- Replies are formatted for Discord markdown and split across multiple messages when they exceed Discord's ~2000-char limit — code blocks are re-fenced across the split so each message renders correctly.
- History is in-memory only; restarting the bot clears all active threads.
