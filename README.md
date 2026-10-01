# HPL Discord Bot

A Discord bot that answers **HPL2 / HPL3 engine modding** questions (Frictional Games) using Claude via **SAP AI Core**. When a user explicitly @-mentions the bot or directly replies to one of its messages in a game-specific channel, it opens a thread, reads the relevant documentation, and replies — then keeps the conversation going in that thread.

## How it works

1. A user explicitly @-mentions the bot or directly replies to one of its messages in a mapped channel (e.g. `hpl2`, `hpl3-soma`, `hpl3-rebirth`, `hpl3-bunker`).
2. The bot reacts with 👀 and creates a **thread** under the message.
3. A simple greeting is answered locally; a real question is sent to the configured model with a compact game-specific prompt from `skills/<game>/SKILL.md`.
4. The model navigates the complete game corpus with neutral `list_corpus`, `search_corpus`, and `inspect_corpus` tools. Precise `search_files` and `read_file` tools remain available for literal verification.
5. Further messages continue the conversation only when they @-mention the bot or directly reply to one of its messages, including messages from the thread author.

Conversation history and a bounded evidence-locator ledger are kept in memory, keyed by thread ID, and mirrored to NeDB for restoration after restart.

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
- `AICORE_EUR_PER_CU` — EUR per SAP Capacity Unit for console cost estimates (default `0.45`).
- `AICORE_MODEL_CU_RATES` — single-line JSON model-rate map, replacing the built-in map; see request cost estimates below.
- `USER_MONTHLY_LIMIT_EUR` — monthly allowance per Discord user in estimated EUR (default `50`), shared across all threads and servers, resetting on the first of each month at 00:00 UTC.
- `USAGE_DB_PATH` — persistent usage receipt datastore (default `data/usage.db`). Only one bot process may own this file.
- `AICORE_MAX_STEPS` — safety ceiling for one agent run (default `20`; normal questions should finish well below it).
- `AICORE_ADAPTIVE_THINKING` — set to `true` to request Claude 4.6 adaptive thinking for a controlled A/B test (default `false`; ignored for non-Claude models).
- `AICORE_THINKING_MAX_OUTPUT_TOKENS` — output-token ceiling while adaptive thinking is requested (default `8192`).
- `HPL_INDEX_CACHE_SIZE` — maximum lazy game-corpus indexes retained in memory (default `2`; least-recently-used indexes are evicted).
- `CHANNEL_MAP` — defaults are provided; override to match your channel names.

### 4. Add documentation

Drop docs (markdown, txt, `.hps`, config/editor definitions, etc.) into `skills/<game>/docs/`. The bot does not inject the whole tree into every prompt. It lazily builds an in-memory index when a game is first queried: HPS declarations/call relationships, heading-chunked wiki content, stock script/map excerpts, and registration blocks from config/editor files. A small LRU bounds how many game indexes remain resident. Each game also has a `skills/<game>/SKILL.md` system prompt you can edit.

### 5. Run

```
npm run dev      # watch mode
npm start        # one-off
```

Explicitly mention the bot or directly reply to one of its messages in a mapped channel to test.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Run in watch mode (tsx) |
| `npm start` | Run once |
| `npm run list-deployments` | List RUNNING SAP AI Core deployments in your resource group |
| `npm run cache-probe` | Verify stable-system and rolling message-tail caching through SAP |
| `npm run thinking-probe` | Probe adaptive thinking across dependent tool calls; does not change production settings |
| `npm run eval:search` | Run corpus-derived retrieval contracts across every game index |
| `npm run benchmark:search` | Record cold index time and heap use for all game corpora |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Run the Vitest suite |
| `npm run test:watch` | Vitest in watch mode |
| `npm run build` | Compile to `dist/` |

## Project structure

```
src/
  index.ts            # Entry: validates env, starts the bot
  bot.ts              # Discord client, event handlers, prompt assembly, message splitting
  agent.ts            # Model/tool loop via Vercel AI SDK + SAP AI Core, with 429 retry
  pricing.ts          # Approximate model-specific CU/EUR inference cost estimates
  cache.ts            # Rolling message-tail cache breakpoint; preserves the full research transcript
  grounding.ts        # Rejects undocumented engine-like identifiers before Discord delivery
  corpus-index.ts     # Neutral file/symbol/content indexes and generic relationships
  evidence.ts         # Bounded cross-turn evidence locator ledger
  tools.ts            # Corpus navigation plus sandboxed exact file search/read tools
  retry.ts            # Pure retry-decision helpers (429 / auth-timeout)
  channels.ts         # Channel -> game resolution
  history.ts          # In-memory per-thread conversation store
  list-deployments.ts # One-off helper to discover deployment ids
  *.test.ts           # Vitest unit tests
skills/
  <game>/SKILL.md     # Per-game system prompt
  <game>/docs/        # Per-game documentation the bot can read
```

The search evaluation derives deterministic samples from the bundled corpora. It covers exact symbols,
paths, documentation content, identifier typo recovery, caller/callee edges, class members, and inheritance;
new files and declarations become eligible automatically without maintaining a product-specific query list.

## How the SAP AI Core connection works

The bot uses [`@jerome-benoit/sap-ai-provider`](https://www.npmjs.com/package/@jerome-benoit/sap-ai-provider) with the Vercel AI SDK, configured with only a **resource group** (`createSAPAIProvider({ resourceGroup })`). This routes requests through your provisioned resource group's quota. Do **not** pin a `deploymentId` — doing so makes the provider ignore the resource group and fall back to the shared, rate-limited `default` bucket.

The agent loop honours SAP's `x-retry-after` header on 429s (the SDK's built-in backoff ignores it). It retains every tool result for the current run and carries compact stable locators—not raw excerpts—into later Discord turns.

The HPS declaration extractor follows the production `indexScript` design from [`hpl3-language-tools`](https://github.com/TiManGames/hpl3-language-tools). That project uses Tree-sitter for live syntax/semantic analysis and a focused error-tolerant extractor for its workspace symbol index; the bot uses the latter for static corpus retrieval. [`MiniSearch`](https://github.com/lucaong/minisearch) supplies the in-process BM25/prefix/fuzzy document index.

Retrieval has no question profiles, domain seeds, evidence quotas, or source-family gates. The model supplies independent lexical variants; exact symbols, paths, and BM25 content results are fused with reciprocal-rank fusion (`k=60`). Prefix/fuzzy recovery is restricted to identifier-shaped input and two edits. Wiki pages, scripts, configuration, editor data, language files, materials, and shaders are searchable together, while binary files remain discoverable through the path catalog. Alias documents are ordinary searchable content: an identifier discovered there must be searched and inspected like any other candidate.

`list_corpus` exposes stable paginated paths, `search_corpus` returns deterministic `file:`, `symbol:`, and `chunk:` IDs, and `inspect_corpus` returns exact context, relationships, references, and neighboring symbols. Class members, siblings, bases, derived types, callers, callees, registrations, includes, dispatched global calls, and representative usages form the generic relationship layer. `search_files` searches exact text/regex content. Empty results support only the printed lexical terms and scope.

Adapted third-party code and its license are recorded in [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

After each tool batch the agent receives one short continuation checkpoint, which also gives SAP a legal text boundary for prompt caching. User disputes force a fresh exact inspection. Before delivery, grounding rejects undocumented engine-like identifiers and sends the draft back through source verification instead of exposing invented code. Raw ripgrep results are compacted when broad. The bot logs token/cache usage, steps, tool calls, duplicates, forced-final state, and surfaced reasoning. The 20-step ceiling remains an emergency fallback.

SAP's harmonized usage fields differ by model family, so `inputTokens` is normalized to include cached slices for both Claude and Gemini. `uncachedInputTokens` is the fresh input; per-step `providerInput` preserves SAP's raw prompt-token value for diagnosis.

### Request cost estimates

Each `runAgent` call emits one console `Request cost` summary with the model, completion/failure status, token totals, `estimatedCU`, and `estimatedEUR`. It includes successful research steps, the forced final answer, and successful calls made before whole-agent retries. Provider failures or missing usage mark the estimate `usage=partial`; those totals cover only known usage. Moderation and cached input (both cache reads and writes) are deliberately excluded, as stated in the log. The bot persists cumulative snapshots of these estimates to enforce monthly allowances.

The built-in `gpt-5.6-sol` rates are **approximate**, derived from two operator-provided SAP calculator samples: 141.84 CU for 2,000 requests with 5,000 input/1,000 output tokens each, and 0.54 CU for one request with 63,000 input/3,000 output tokens. These give 6.8175 CU per million fresh input tokens and 36.8325 CU per million output tokens. At EUR 0.45/CU, the first example costs about EUR 0.031914 per request, and the second EUR 0.243. Rounded calculator results and omitted cache costs mean these estimates are not invoice totals or a verified SAP tariff. SAP documents model-specific token-to-CU conversion in its [metering guide](https://help.sap.com/docs/AI_CORE/2d6c5984063c40a59eda62f4a9135bee/metering-and-pricing-for-generative-ai).

To edit the rates or price another model, set these optional values in `.env` and restart the bot:

```dotenv
AICORE_EUR_PER_CU=0.45
AICORE_MODEL_CU_RATES={"gpt-5.6-sol":{"inputCuPerMillionTokens":6.8175,"outputCuPerMillionTokens":36.8325}}
```

The formula is `CU = freshInputTokens / 1,000,000 × inputCuPerMillionTokens + outputTokens / 1,000,000 × outputCuPerMillionTokens`, then `EUR = CU × AICORE_EUR_PER_CU`. Provider-reported output includes its reasoning usage; reasoning tokens are not added a second time. Standalone agent calls log `cost unavailable` for unknown models or invalid pricing, while bot startup requires valid pricing to enforce allowances. Only `gpt-5.6-sol` has built-in rates; other models, including the default Claude model, need explicit configuration.

### Monthly allowances and usage

Each Discord user has a monthly allowance of **EUR 50.00**, configurable with `USER_MONTHLY_LIMIT_EUR`. It covers the same approximate fresh-input/output agent costs described above, including research, forced-final calls, and successful calls before retries or failures. Moderation and cached input are excluded; this is not an exact SAP invoice total.

The bot checks the balance before attachments, moderation, history changes, or thread creation. Requests are queued per user across threads and servers. A request admitted below the allowance can finish above it; the bot then sends a separate automated limit notice and blocks subsequent requests until the first of the next month at **00:00 UTC**. There are no exemptions or unused-budget rollover.

Tag the bot with **`!usage`** (case-insensitive), or directly reply to one of its messages with that command. It returns a static ASCII usage bar, percentage used, percentage remaining, and reset date. User-facing usage replies and limit notices show percentages without monetary amounts; enforcement still uses the configured EUR allowance internally. This local command works anywhere the bot can reply, including untracked threads and unmapped channels, and remains available during monthly or penalty blocks. It does not call AI, download attachments, create threads, or enter conversation history.

Usage is stored in `USAGE_DB_PATH` (default `data/usage.db`), separately from conversation sessions: one record per Discord message ID, linked to its sender, thread, and admission month. Monthly balances sum those records. Cumulative checkpoints replace the same receipt, so retries and duplicate events cannot double-charge it. Deleting a thread does not delete its usage. Recording starts at rollout; old conversations are not backfilled.

Known usage remains charged after agent failures, empty answers, or Discord delivery failures. Missing provider usage and interrupted requests are marked partial and shown with a warning in `!usage`. A request spanning midnight belongs to the month when it reached the head of the user queue. Settled checkpoints survive restart; an in-flight provider call can still have unreported costs.

Invalid allowance/pricing or failure to load the usage store prevents startup. A runtime accounting failure stops further AI calls and returns a bot-authored temporary-unavailability message; restart after fixing storage to reload balances. Run **one bot process** per set of NeDB files and preserve `data/usage.db` across deployments.

`npm run thinking-probe` checks whether SAP forwards `thinking: { type: "adaptive" }`, exposes reasoning, and survives a dependent two-tool chain. Some SAP paths accept and forward the setting without returning reasoning usage; that result is inconclusive. In that case, `AICORE_ADAPTIVE_THINKING=true` enables an explicit Claude production A/B test rather than claiming adaptive thinking is confirmed. Production ignores this flag when `AICORE_MODEL` is not an Anthropic Claude model.

## Notes

- Replies are formatted for Discord markdown and split across multiple messages when they exceed Discord's ~2000-char limit — code blocks are re-fenced across the split so each message renders correctly.
- History is in-memory only; restarting the bot clears all active threads.
