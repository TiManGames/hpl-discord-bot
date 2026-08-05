# Workflow — User Modules

For: using, configuring, or extending a user module (`Handler` / `cLuxUserModule`).

## Ground first
- Wiki: `wiki/HPL3/Scripting/User Modules Overview.md`.
- Registered modules: `script/modules/` (22 files — e.g. `HintHandler`, `DescriptionHandler`, `InventoryHandler`, `PlayerToolHandler`, `PlayerPickupHandler`, `MapEffectsHandler`, `DistortionEffectsHandler`, `DatamineHandler`, `MenuHandler`, `GameOverHandler`).
- Contracts: `script/interfaces/UserModule_Interface.hps`, `script/modules/ModuleInterfaces.hps`.
- Helper: `script/helpers/helper_modules.hps`.
- Registration config: `config/Modules.cfg`.
- Engine API in `hps_api.hps`: `cLuxUserModule`, `iScrUserModule_Interface`, module lookup/lifecycle.

## Steps
1. Determine whether the user wants to **call an existing module** (most cases) or **create/extend one** (rare).
2. To call one: find the module in `script/modules/`, inspect its public methods, and use `helper_modules.hps` lookup rather than re-instantiating it.
3. To create one: inspect a small existing module as the template, implement `iScrUserModule_Interface`, and register it in `Modules.cfg` — confirm the real registration format from that file.
4. Maps configure or call modules; they should not reimplement module logic — steer the user toward the existing handler.

## Verify before answering
- The module name and its methods are confirmed in `script/modules/`, not memory.
- Registration syntax is quoted from `Modules.cfg`.
- Every `cLuxUserModule`/interface identifier is confirmed in `hps_api.hps` or an inspected source.
