# Randomization: Codes, Dogtags, And Corpses

This document covers combination-code generation, dogtag combination assignment, randomized dogtag/corpse placement, first-playthrough and New Game Plus differences, and old-save compatibility.

## Source files

- `script/custom/modules/RandomizerHandler.hps`
- `script/custom/helpers/helper_modules_custom.hps`
- `script/custom/helpers/helper_props_custom.hps`
- `script/props/Prop_ReadableDogTag.hps`
- `config/code_randomization.cfg`
- `config/corpse_randomization.cfg`
- Map example: `maps/soldier_quarters/soldier_quarters.hps`

## Code config

`config/code_randomization.cfg` contains `Code` entries with:

- `Name`: randomizer-facing code name.
- `Lock`: combination lock entity name.
- `Dogtag`: dogtag entity file name that should display the generated code.

Stock examples include:

- `Arsenal`, used by the radio sequence in `soldier_quarters`.
- Locker names such as `Bardin`, `Fortin`, `Auclair`, `Travers`, `Giraud`, `Laval`, and `Boucher`.
- `Milliard`, used for the fuel storage code dogtag when that difficulty option is enabled.

## Code generation

`SetupRandomization_Codes()` loads `code_randomization.cfg` and builds `mvCodes`.

For each `Code` entry it stores:

- Code name.
- Lock entity name.
- Dogtag entity file name.
- A generated integer from `cMath_RandRectl(0, 9999)`.

Debug output formats the generated number through `cString_ToString(code, 4)`, so leading zeroes are meaningful when the code is displayed or added to the sketchbook.

`OnMapEnter_Codes(map)` loops over `mvCodes`. If the current map contains the configured lock entity, it calls `CombinationLock_SetCombination(lockName, code)`.

`GetCode(name)` returns the generated integer for a configured code name. If no code is found, it logs an error and returns `0`.

`helper_modules_custom.hps` exposes this as `Randomizer_GetCode(name)`.

## Map use of generated codes

`maps/soldier_quarters/soldier_quarters.hps` is the clear stock map example. The radio-code sequence calls:

- `Randomizer_GetCode("Arsenal")`
- `cString_ToString(code, 4)`
- Dialog helpers to read the code aloud.
- `Sketchbook_AddCode("RadioCode", codeString)` when the player receives the code.

This is separate from direct lock assignment. The randomizer sets the `ArsenalLock` entity's combination when it is present; the soldier quarters map also asks the randomizer for the same code so the radio can reveal it to the player.

## Readable dogtag code assignment

After corpse/dogtag placement, `OnMapEnter_DogtagsAndCorpses(map)` collects all `cScrPropReadableDogTag` props in the current map.

For each readable dogtag:

- It reads the dogtag entity file name.
- It compares that file name against each `cCodeData.msDogtagEntFile`.
- When they match, it calls `Dogtag_SetCombination(entityName, code)`.

This means generated codes are assigned by dogtag file identity, not by placed entity name.

`script/props/Prop_ReadableDogTag.hps` also has a `Randomizeable` instance variable and a helper-visible `_Global_GetIsRandomizeable` function. In the inspected sources, `RandomizerHandler.hps` does not call `Dogtag_GetIsRandomizeable`; corpse placement is driven by `corpse_randomization.cfg`, and code assignment is driven by dogtag file names.

`Prop_ReadableDogTag.hps` warns when a readable dogtag has both `Randomizeable=true` and `AddCodeCallback` set, because randomizing the dogtag removes that callback path.

## Corpse config

`config/corpse_randomization.cfg` groups corpse entries by map.

Map attributes:

- `Name`: map name.
- `MaxCorpseCount`: optional cap for active randomized corpses in that map.

Corpse attributes:

- `Name`: randomizer-facing corpse name.
- `RatFeedEntity`: rat feed/corpse entity to activate or deactivate.
- `Dogtag`: dogtag entity placed at that corpse.
- `Prioritize`: whether the corpse should be prioritized when non-dud dogtags are distributed.
- `ActiveFirstPlaythrough`: whether the corpse is active on the first playthrough.
- `ForceActive`: whether the corpse should always be active.
- `DogtagFileFirstPlaythrough`: fixed dogtag replacement file for first-playthrough cases.
- `BaseDogtagFile`: old-save compatibility key.

Blank `RatFeedEntity` also makes the corpse active during setup.

## Corpse setup

`SetupRandomization_DogtagsAndCorpses()` loads `corpse_randomization.cfg` and builds `mvMapCorpseData`.

It reads the target corpse count from `eGameDifficultySetting_RatCorpseAmount`.

For each configured corpse:

- First-playthrough active entries are activated when not in New Game Plus, or when old-save conversion forces first-playthrough data.
- Entries with blank `RatFeedEntity` are activated.
- `ForceActive` entries are activated.
- Other entries are stored as inactive candidates.
- Dogtag-bearing active corpses are added to the dogtag distribution list.
- Map `MaxCorpseCount` caps active randomized corpse count for that map.

New Game Plus behavior:

- Additional corpses are randomly activated from inactive candidates until the target corpse count is met or candidates run out.
- Map caps are respected.
- Code dogtag pool includes Laval and Giraud in New Game Plus.

First-playthrough behavior:

- Active corpses mostly come from `ActiveFirstPlaythrough`, blank `RatFeedEntity`, and `ForceActive`.
- Some entries can specify `DogtagFileFirstPlaythrough` to force a specific dogtag file.

## Dogtag distribution

After active dogtag corpses are known, `SetupRandomization_DogtagsAndCorpses()` builds a dogtag file pool:

- Code dogtags for core lockers.
- Laval and Giraud in New Game Plus.
- Millard with or without fuel-storage code depending on `eGameDifficultySetting_FuelStorageCodeLock`.
- Dud dogtags until the active dogtag corpse count is covered.

`vDogtagCorpses.sortDesc()` moves prioritized corpses earlier in the distribution list.

`DogtagsAndCorpses_DistributeDogtags()` then assigns dogtag files:

- Prioritized corpses try to draw non-dud dogtags first.
- A configured set of corpses is not allowed to receive the fuel-storage code dogtag.
- If the fuel-storage dogtag is the last remaining tag for a disallowed corpse, distribution returns `false` and the caller retries.
- After 100 failed loops, the randomizer logs an error and continues with the invalid distribution.

## Corpse map entry

`OnMapEnter_DogtagsAndCorpses(map)` applies the stored corpse data for the current map.

For each configured corpse in the current map:

- `SetCorpseActive(corpseEntity, dogtagEntity, active)` toggles the corpse entity, the rat-feed burnable entity, the dogtag entity, and dynamic decals named `<CorpseName>_Extra_*`.
- Inactive corpse entries are skipped after their active state is applied.
- Active dogtag placeholders are replaced by creating the randomized dogtag entity file at the placeholder transform.
- The original placeholder dogtag entity is destroyed after replacement succeeds.

After corpse placement, the same function assigns generated code combinations to readable dogtags by file name.

Finally, it calls `RatHandler_SetupFeedAreas()` so rat feed areas reflect the active corpse set.

## Old-save compatibility

`cDogtagData`, `mvDogtags`, and `mlDogtag_FirstDudIndex` are marked by comments as old-save compatibility support.

If `mvMapCorpseData` is empty but old saved `mvDogtags` data exists, `OnMapEnter_DogtagsAndCorpses()` calls `DogtagsAndCorpses_OldSaveConversion()`.

The conversion path:

- Rebuilds first-playthrough corpse data.
- Matches old dogtag base files against `BaseDogtagFile`.
- Replaces the newly selected dogtag file with the old saved replacement file when a match is found.

## Notes for modders

- Code names are stable script-facing IDs. Lock names and dogtag file names are separate data columns.
- Display generated codes with four digits, or leading zeroes can be lost.
- Dogtag code assignment is file-based. Reusing a dogtag file in multiple places means all matching readable dogtags can receive the same generated code.
- `Randomizeable` on readable dogtags is prop metadata, but the current randomizer does not use it as the source of corpse randomization.
- Corpse names matter for fuel-storage restrictions and old-save compatibility.
- `RatFeedEntity`, dogtag placeholder names, burnable entities, and `<CorpseName>_Extra_*` decals need to stay aligned for clean activation/deactivation.

## Confirmed facts and assumptions

- Confirmed: Codes are generated from `code_randomization.cfg` and stored in `mvCodes`.
- Confirmed: `Randomizer_GetCode("Arsenal")` is used by `soldier_quarters` to reveal the arsenal code through the radio sequence.
- Confirmed: Locks receive generated combinations on map entry when their configured lock entity exists in the current map.
- Confirmed: Readable dogtags receive generated combinations by matching their entity file name to `code_randomization.cfg`.
- Confirmed: Corpse activation and dogtag replacement are driven by `corpse_randomization.cfg`.
- Confirmed: `Dogtag_GetIsRandomizeable` exists, but no use from `RandomizerHandler.hps` was found in the inspected sources.
- Assumption: For modded corpse randomization, `BaseDogtagFile` should be kept stable if compatibility with saves made before dogtag changes matters.
