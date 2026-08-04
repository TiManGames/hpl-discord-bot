# Randomized Lockers And Map Integration

This document covers randomized locker relocation, random locker entity naming conventions, map callbacks, generated code use, and stock map integration examples.

## Source files

- `script/custom/modules/RandomizerHandler.hps`
- `script/custom/helpers/helper_modules_custom.hps`
- `script/custom/modules/ModuleInterfaces_Custom.hps`
- `config/difficulty_settings.cfg`
- `script/helpers/helper_game.hps`
- `config/code_randomization.cfg`
- Map examples: `maps/officer_hub/officer_hub.hps`, `maps/arsenal/arsenal.hps`, `maps/maintenance/maintenance.hps`, `maps/prison/prison.hps`, `maps/soldier_quarters/soldier_quarters.hps`

## Difficulty gate

`config/difficulty_settings.cfg` defines setting ID `31`:

- Name: `RandomizedLockerLocations`
- Type: `Bool`
- Control type: `Checkbox`
- Implemented: `true`

`script/helpers/helper_game.hps` exposes it as `eGameDifficultySetting_RandomizedLockerLocations`.

`SetupRandomization_Lockers()` immediately returns when this setting is false. When the setting is false, `mvLockerData` remains empty and `GetLockerIsInHub(lockerName)` returns true for every locker name because none were moved.

## Locker data

`RandomizerHandler.hps` defines `cLockerData` with:

- `msName`: locker/code name.
- `msLevel`: destination map if moved.
- `mlPositionIndex`: random placement index used with `LockerPos_*`.
- `msHubLockerName`: original officer hub locker door entity.
- `msHubLockName`: original officer hub lock entity.
- `msHubNametagBaseName`: original officer hub nameplate base entity.
- `msHubNametagTextName`: original officer hub nameplate text entity.

Stock movable locker names:

- `Travers`
- `Auclair`
- `Laval`
- `Giraud`
- `Boucher`
- `Fortin`
- `Bardin`

Stock destination levels:

- `arsenal`
- `maintenance`
- `prison`
- `soldier_quarters`

Only four lockers are moved per setup because there are four destination levels. The remaining lockers stay in the officer hub.

## Locker setup

`SetupRandomization_Lockers()`:

- Checks `RandomizedLockerLocations`.
- Builds an array of the seven movable lockers.
- Loops once per destination level.
- Picks a random locker from the remaining pool.
- Assigns the destination level.
- Assigns a large random `mlPositionIndex`.
- Pushes the result into `mvLockerData`.
- Removes the selected locker from the pool.

The randomizer does not move every hub locker. It picks one moved locker per destination level.

## Officer hub behavior

`OnMapEnter_Lockers(map)` has a special path for `officer_hub`.

For each moved locker in `mvLockerData`, it disables the original hub presentation:

- `LockerPickup_<LockerName>*`
- `InteractAux_<LockerName>*`
- Hub nameplate base.
- Hub nameplate text.

It also unblocks the original locker door and disables interaction on the original hub lock.

Boucher has a pocket bag special case. If Boucher remains in the hub but the player has no remaining inventory slot upgrade available, the hub Boucher pickup/aux setup is swapped so the pocket bag is not available while the replacement shelf items are.

Map-specific hub examples:

- `maps/officer_hub/officer_hub.hps` uses `Randomizer_GetLockerIsInHub("Travers")` before activating the revolver locker pickup in the hub.
- The same map checks `Randomizer_GetLockerIsInHub("Fortin")` before activating the NG+ Fortin shotgun pickup in the hub.

## Non-hub random locker behavior

For maps other than `officer_hub`, `OnMapEnter_Lockers(map)` checks whether any moved locker has `msLevel` equal to the current map name.

For the matching locker, it activates:

- `RandomLocker`
- `RandomLocker_Lock`
- `RandomLocker_Plate`
- `RandomLocker_<LockerName>`
- `RandomLocker_Description_<LockerName>`

Shelf handling uses `Top`, `Mid`, and `Bottom`:

- Travers mid shelf is skipped when `eGameDifficultySetting_RevolverInLocker` is false.
- Fortin bottom shelf is skipped when not in New Game Plus.
- Boucher top/mid shelves swap depending on whether the player still has inventory slot capacity.

When a shelf pickup exists, the randomizer activates:

- `RandomLocker_Pickup_<Shelf>_<LockerName>_*`
- `RandomLocker_InteractAux_<Shelf>`

It attaches the shelf interact aux to `RandomLocker` body `Body_1` and sets the aux parent to `RandomLocker_Pickup_<Shelf>_<LockerName>_1`.

## Random locker placement

The destination map must contain `LockerPos_*` area entities.

Placement flow:

- Count `LockerPos_*` areas.
- Compute selected position as `mlPositionIndex % count + 1`.
- Place `RandomLocker` at `LockerPos_<SelectedPos>`.
- Activate `LockerPos_<SelectedPos>_Extra_*` if matching extras exist.

This makes the destination position deterministic for the generated locker data, while still depending on how many `LockerPos_*` areas the map provides.

## Random locker codes

Locker names also appear as code names in `config/code_randomization.cfg`.

When a moved locker is placed in a non-hub map, `OnMapEnter_Lockers()` finds the matching `cCodeData` by `msName` and calls:

- `CombinationLock_SetCombination("RandomLocker_Lock", code)`

This means the moved random locker uses the same generated code as the original named locker.

## Map unlock callbacks

The stock destination maps have similar `OnCombinationLock_Unlocked` handlers. Examples are present in:

- `maps/arsenal/arsenal.hps`
- `maps/maintenance/maintenance.hps`
- `maps/prison/prison.hps`
- `maps/soldier_quarters/soldier_quarters.hps`

The handlers:

- Read the lock's unnamed string variable with `Entity_GetVarString(asEntityName, "")`.
- Build a normal hub-style pickup pattern such as `LockerPickup_<Name>_*`.
- Enable `RandomLocker_Pickup_*` pickups.
- Mark them as not locker items with `Pickup_SetIsLockerItem("RandomLocker_Pickup_*", false)`.
- Remove highlight line-of-sight ignores.
- Increase the unlocked locker achievement count.
- Disable `RandomLocker_InteractAux_*`.

The local variable for `LockerPickup_<Name>_*` is present in these callbacks, but the inspected snippets primarily use the `RandomLocker_*` pickup pattern for the moved locker.

## Helper API

`helper_modules_custom.hps` exposes:

- `Randomizer_GetLockerIsInHub(lockerName)`

It calls the randomizer module's `GetLockerIsInHub(lockerName)`.

`GetLockerIsInHub` returns:

- `false` when the locker name is present in `mvLockerData`.
- `true` when the locker name was not moved.

Use this helper when hub scripts need to decide whether original hub locker content should be present.

## Notes for modders

- Randomized destination maps need a complete `RandomLocker` setup and at least one `LockerPos_*` area.
- Moved locker variants use naming patterns, not a data table in the map script. Keep `RandomLocker_<Name>`, `RandomLocker_Description_<Name>`, and shelf pickup names aligned.
- Hub locker names need to match the names in `cLockerData` and `code_randomization.cfg`.
- A moved locker still depends on the generated code for the same named locker.
- If `RandomizedLockerLocations` is false, hub scripts that ask `Randomizer_GetLockerIsInHub` should behave as if all named lockers stayed in the hub.

## Confirmed facts and assumptions

- Confirmed: Randomized lockers are enabled only by `eGameDifficultySetting_RandomizedLockerLocations`.
- Confirmed: Four lockers are moved per setup, one each to `arsenal`, `maintenance`, `prison`, and `soldier_quarters`.
- Confirmed: Officer hub locker content is disabled only for lockers present in `mvLockerData`.
- Confirmed: Destination maps place a generic `RandomLocker` at `LockerPos_*` areas and activate locker-specific presentation/pickups by name.
- Confirmed: The moved lock receives the generated code for the moved locker name.
- Assumption: A modded destination map should copy the full random locker naming pattern from stock maps before enabling randomized locker locations for that map.
