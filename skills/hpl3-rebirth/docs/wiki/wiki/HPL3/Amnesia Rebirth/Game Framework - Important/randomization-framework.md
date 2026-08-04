# Randomization Framework

This document covers the stock Bunker randomization framework: module registration, lifecycle, saved module data, public helper surface, difficulty hooks, random seeds, and the boundary between the framework and incidental random math elsewhere in scripts.

## Source files

- `config/Modules.cfg`
- `config/difficulty_settings.cfg`
- `script/helpers/helper_game.hps`
- `script/custom/modules/ModuleInterfaces_Custom.hps`
- `script/custom/modules/RandomizerHandler.hps`
- `script/custom/helpers/helper_modules_custom.hps`
- `script/custom/helpers/helper_props_custom.hps`
- `script/custom/props/Prop_Pickup.hps`
- `script/custom/props/Prop_Trap.hps`
- `script/props/Prop_ReadableDogTag.hps`
- Config data: `config/item_randomization.cfg`, `config/prop_randomization.cfg`, `config/traps.cfg`, `config/code_randomization.cfg`, `config/corpse_randomization.cfg`

## Module registration

`config/Modules.cfg` registers the randomizer as a non-global user module:

- Module ID: `89`
- Name: `RandomizerHandler`
- Script file: `custom/modules/RandomizerHandler.hps`
- Script class: `cScrRandomizerHandler`
- Container: `Default`
- Input callbacks: disabled

`script/custom/modules/ModuleInterfaces_Custom.hps` maps `eModuleType_Custom_RandomizerHandler` to ID `89` and declares `iScrRandomizerHandler_Interface`.

The script class is:

- `cScrRandomizerHandler : iScrUserModule, iScrUserModule_Interface, iScrRandomizerHandler_Interface`

The module does not use normal input/update behavior for randomization. `OnAction`, `OnAnalogInput`, `Update`, `VariableUpdate`, `OnMapLeave`, `CreateWorldEntities`, and `DestroyWorldEntities` are empty. Most work happens in initial setup and `OnMapEnter`.

## Public API

The interface in `ModuleInterfaces_Custom.hps` declares:

- `GetTotalItemCount(itemType)`
- `GetCode(name)`
- `GetLockerIsInHub(lockerName)`

`script/custom/helpers/helper_modules_custom.hps` exposes helper wrappers for:

- `Randomizer_GetCode(name)`: returns a generated code by configured code name.
- `Randomizer_GetLockerIsInHub(lockerName)`: returns whether a named locker was not moved out of the officer hub.

Confirmed limitation: `GetTotalItemCount` is present on the interface and implemented by `RandomizerHandler.hps`, but there is no matching helper wrapper in `helper_modules_custom.hps` in the stock sources inspected here.

## Stored data

`RandomizerHandler.hps` stores randomized results in module member arrays:

- `mvVisitedMaps`: map names already processed by the randomizer.
- `mvMapItemData`: per-map item target counts, min/max counts, limited-item caps, and item random seeds.
- `mvMapTrapData`: array of `cMapTrapData` records with per-map trap counts, type weights, and trap random seeds.
- `mvMapPropData`: per-map prop counts and prop random seeds.
- `mvMapCorpseData`: per-map corpse activation and dogtag replacement data.
- `mvCodes`: generated combination codes and their lock/dogtag mapping.
- `mvLockerData`: lockers moved out of the officer hub and their target levels/positions.

The script also keeps compatibility and patch-fix state:

- `mbApplyRandomizePropsFix`
- `mbApplyNewItemTypeFix`
- `mbApplyDogtagsFix`
- `mbApplyAddedItemLocationsFix`
- `mbMeatAddedInNewItemTypeFix`
- `mvMapsWithNewItemTypeFix`
- `mvMapsWithAddedItemLocationsFix`

`LoadUserConfig` and `SaveUserConfig` are empty. Randomized state is regular user-module script state, not a separate user config file.

## Lifecycle

`Init()` calls `Init_Traps()`, which creates a default trap data entry with map file `default`, trap count `-1`, default weights, and a random seed.

`OnMapEnter(map)` is the main entry point:

- If `mvVisitedMaps` is empty, `SetupRandomization()` runs.
- If the current map has not been visited, the map name is recorded and the module runs item, trap, code, corpse/dogtag, prop, and locker map-entry handlers.
- If the current map was already visited, normal randomization is skipped to prevent re-randomizing the map. Patch compatibility handlers can still run, and rat feed areas are refreshed.
- `FixItemMultiplication(map)` runs after both first-entry and revisit paths.

`SetupRandomization()` runs these setup passes in order:

- `SetupRandomization_Items()`
- `SetupRandomization_Traps()`
- `SetupRandomization_Codes()`
- `SetupRandomization_DogtagsAndCorpses()`
- `SetupRandomization_Props()`
- `SetupRandomization_Lockers()`

`PreloadData()` preloads dogtag entity files used by the randomizer, mostly code dogtags and dud dogtags.

`PostUpdate()` exists mostly for compatibility/fix-up flags. It can rebuild prop data, reapply dogtags/corpses to the current map, apply new item type save fixes, and apply added item-location fixes.

## Random seeds

Items, traps, and props each store a per-map random seed. On map entry the module calls `cMath_Randomize(seed)` before choosing active entities, then resets the random stream with `cMath_Randomize(cSystem_GetApplicationTime())`.

This gives a map stable randomized choices after the setup data has been generated, while the `mvVisitedMaps` gate prevents the same map from being re-rolled during the same playthrough state.

Codes and locker moves are generated during setup and stored in `mvCodes` and `mvLockerData`. They are not re-randomized per map entry.

## Difficulty hooks

The randomizer reads several stock difficulty settings through `helper_game.hps` constants and `GameDifficulty_*` helpers:

- `eGameDifficultySetting_ResourceAmount`: resource item multiplier.
- `eGameDifficultySetting_AmmunitionAmount`: ammunition item multiplier.
- `eGameDifficultySetting_HardcoreHealthSystem`: changes bandage and medkit targets.
- `eGameDifficultySetting_FusesAndFuseBoxes`: disables fuse targets when fuse boxes are disabled.
- `eGameDifficultySetting_InitialPoweredFuseBoxes`: reduces needed fuse count.
- `eGameDifficultySetting_TrapAmount`: selects trap count rows in `traps.cfg`.
- `eGameDifficultySetting_RatCorpseAmount`: target corpse count for corpse randomization.
- `eGameDifficultySetting_FuelStorageCodeLock`: decides whether the Millard dogtag can carry the fuel storage code.
- `eGameDifficultySetting_RandomizedLockerLocations`: enables or disables locker relocation.
- `eGameDifficultySetting_RevolverInLocker`: changes Travers locker shelf handling.

`GameDifficulty_GetNewGamePlusActive()` is also used by dogtag/corpse distribution, locker shelf handling, and the first-playthrough officer hub trap override.

## Config loading and errors

The randomizer loads XML files by resource name:

- `item_randomization.cfg`
- `traps.cfg`
- `code_randomization.cfg`
- `corpse_randomization.cfg`
- `prop_randomization.cfg`

Missing or malformed config data prints `Error(...)` messages with a subsystem prefix such as `[Randomizer - Items]`, `[Randomizer - Traps]`, `[Randomizer - Codes]`, `[Randomizer - Corpses]`, or `[Randomizer - Props]`.

Normal successful setup and map-entry paths also write debug messages through `cLux_AddDebugMessage`.

## Framework boundary

The stock randomizer framework is `RandomizerHandler.hps` plus the five randomization config files and the small helper/prop surfaces it calls.

Do not treat every `cMath_RandRect*` call in the game as part of this framework. Many systems use random math locally for effects, AI timing, sounds, particles, or scripted events. Those are incidental random behaviors unless they flow through `cScrRandomizerHandler` or one of the randomization configs listed above.

## Notes for modders

- Keep config map names aligned with `cLuxMap.GetName()`.
- Keep item type names aligned with `RandomizerHandler.StringToItemType()` and `Inventory.cfg`.
- Use `Randomizer_GetCode` and `Randomizer_GetLockerIsInHub` from map scripts instead of reaching into the module directly.
- Adding a new randomized content family requires more than config entries: the enum, string conversion, setup data, map-entry behavior, and any helper/prop metadata must all agree.
- Existing randomizer state is designed around first setup plus visited-map gating. Re-running setup mid-playthrough can desync maps already processed by `mvVisitedMaps`.

## Confirmed facts and assumptions

- Confirmed: `RandomizerHandler` is a user module registered in `config/Modules.cfg` with ID `89`.
- Confirmed: The main setup pass runs on the first `OnMapEnter` when no maps have been visited.
- Confirmed: Map-entry randomization is skipped for maps already recorded in `mvVisitedMaps`, except for patch/fix-up paths and `FixItemMultiplication`.
- Confirmed: `Randomizer_GetCode` and `Randomizer_GetLockerIsInHub` are public helper wrappers in `helper_modules_custom.hps`.
- Confirmed: `GetTotalItemCount` exists on the interface and implementation, but no stock helper wrapper was found.
- Assumption: Mod documentation should treat `RandomizerHandler.hps` and the randomization config files as the randomization system boundary, with unrelated random math documented elsewhere only when specifically needed.
