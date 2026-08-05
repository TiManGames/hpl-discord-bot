# Workflow — Level Scripting

For: writing or debugging level/map `.hps` scripts — callbacks, sequences, timers, triggers.

## Ground first
- Wiki guides: `wiki/HPL3/SOMA/Scripting/` and `wiki/HPL3/Scripting/` — especially `Level Scripting - Best Practices.md`, `Scripting Guide/` (The Update method, The OnAction method, Timers, Sequences, Working with Classes), `Local and Global Variables.md`, `ID Handles.md`, `Trigger Areas.md`, `Calling Functions and Function Callbacks.md`.
- Real level examples: `maps/chapter00`–`maps/chapter05` (canonical), `maps/global_init.hps` (global init, not gameplay).
- Map lifecycle contract: `script/interfaces/Map_Interface.hps`, `script/base/`.
- Map-facing helpers: `script/helpers/helper_map.hps`, `helper_game.hps`, `helper_general.hps`, `helper_sequences.hps`.

## Steps
1. Start from the user's exact map file, entity/area names, callback, and observed vs wanted behavior.
2. For a copied/derived map, read the source map's matching `.hps` for the same object names before proposing changes.
3. Treat callbacks (`OnStart`, `OnEnter`, connect callbacks) as entry points, not full behavior — follow the timers, helpers, local/global vars, effects, and callback removal they trigger.
4. Confirm the target names in script constants/calls match exact names in the map's `.hpm_Entity`/`.hpm_Area`.
5. Confirm the callback signature matches the engine function that invokes it.
6. For sequences/timers, follow the whole loop — a state change often re-applies over several frames.

## Verify before answering
- Script file name matches the map file name; target names match the `.hpm` exactly.
- One-shot callbacks are safe with saved games; advise a fresh map/mod start when testing consumed callbacks.
- Every engine API/callback identifier is confirmed in `hps_api.hps` or an inspected source — never imported from another HPL game or memory.
- Diagnostic `cLux_AddDebugMessage` is marked as temporary.

## Escalation
Invisible result despite the callback firing → check locked/static/disabled/inactive/already-in-state; see `troubleshooting.md`.
