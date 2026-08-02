# Randomization: Items, Props, And Traps

This document covers the stock randomization of pickup items, loose props, and traps. All behavior described here is implemented by `script/custom/modules/RandomizerHandler.hps`, with prop-side metadata in pickup and trap scripts.

## Source files

- `script/custom/modules/RandomizerHandler.hps`
- `config/item_randomization.cfg`
- `config/prop_randomization.cfg`
- `config/traps.cfg`
- `config/Inventory.cfg`
- `script/custom/helpers/helper_props_custom.hps`
- `script/custom/props/Prop_Pickup.hps`
- `script/custom/props/Prop_Trap.hps`

## Randomized item types

`RandomizerHandler.hps` declares `eItemRandomizerType` and maps string names with `StringToItemType()` / `ItemTypeToString()`.

Recognized item type strings:

- `Bandage`
- `Medkit`
- `Ammunition`
- `ShotgunAmmunition`
- `EmptyBottle`
- `Flare`
- `Grenade`
- `GasGrenade`
- `Fuel`
- `ClothPiece`
- `Stick`
- `PocketBag`
- `CommunicationsKey`
- `Fuse`
- `Meat`

The config comments in `item_randomization.cfg` say `Name` should match the item type defined in `Inventory.cfg`. In practice, it must also be recognized by `StringToItemType()` or the randomizer logs an error and ignores that entry.

## Item config format

`config/item_randomization.cfg` has two main sections:

- `DefaultItemCount`: global target count per randomized item type.
- `Maps`: per-map slot/min/max data.

`DefaultItemCount` item attributes:

- `Name`: item type string.
- `Target`: desired total count across randomized maps before difficulty adjustments.
- `AllowMultiply`: optional, defaults to `true`; when `false`, resource/ammo multipliers do not duplicate that item type.

Per-map `ItemType` attributes:

- `Name`: item type string.
- `Min`: minimum active count for that map, default `0`.
- `Max`: maximum active count for that map.
- `TotalSlots`: expected number of non-excluded placed pickups of that item type in the map.
- `AllowMultiply`: optional, defaults to `true`.
- `Limited`: marks that the map has limited instances of that item type.

`TotalSlots` is a validation value. On map entry, the randomizer counts actual matching pickups and logs an error if the count does not match the config entry.

## Item setup

`SetupRandomization_Items()` loads `item_randomization.cfg` and builds one `cMapItemData` per map. Each map entry stores:

- Map name.
- Random seed.
- Total slot count per item type.
- Min count per item type.
- Max count per item type.
- Final randomized target count per item type.
- Limited-item existence and limited caps.

Difficulty adjustments:

- `Ammunition` and `ShotgunAmmunition` use `eGameDifficultySetting_AmmunitionAmount`.
- Other multiplied item types use `eGameDifficultySetting_ResourceAmount`.
- `AllowMultiply="false"` prevents these multipliers.
- Hardcore health reduces bandage base target and increases medkit base target.
- Fuse target count is recalculated from fuse-box difficulty settings instead of using the raw config target when fuses are enabled.
- Pocket bag target count is capped by remaining inventory slots after two non-randomized pocket bags.

Distribution logic:

- For each item type, the randomizer creates map tokens from each map's max count.
- It removes random map tokens until the global target count is reached.
- It will not reduce a map below that map's configured `Min`.
- If the sum of `Min` values exceeds the target, the target is raised and a debug message is printed.
- Limited item caps are then assigned across maps that contain limited instances.

## Item map entry

`OnMapEnter_Items(map)` only runs for maps that have not already been processed by `mvVisitedMaps`.

Confirmed flow:

- Finds the `cMapItemData` for the current `map.GetName()`.
- Collects all `cScrPropPickup` props.
- Reads each pickup item type with `Item_GetEntityItemType`.
- Skips unknown item types.
- Skips pickups where `Pickup_GetExcludeFromRandomization(name)` returns true.
- Re-seeds the random stream with that map's item seed.
- Deactivates random pickups until each item type reaches its target count.
- Activates any replacement props named `<PickupName>_Replacement_*` when the original pickup is deactivated.
- Enforces limited-item caps by swapping active limited/non-limited pickups with inactive pickups.
- Gives fuse placement in `arsenal` and `prison` special handling to reduce non-limited fuse likelihood.
- Destroys inactive pickups only when they are `FallPatch` pickups or fuses, unless they are excluded from randomization.
- Resets the random stream to application time afterward.

Confirmed modding consequence: normal inactive randomized pickups usually remain inactive rather than being destroyed. Only the special `FallPatch` and fuse cleanup path destroys inactive pickups.

## Item exclusion metadata

`script/custom/props/Prop_Pickup.hps` reads the pickup instance variable `ExcludeFromRandomization` into `mbExcludeFromRandomization`.

`script/custom/helpers/helper_props_custom.hps` exposes:

- `Pickup_GetExcludeFromRandomization(item)`
- `Pickup_SetExcludeFromRandomization(item, bool)`

`Prop_Trap.hps` can call `Pickup_SetExcludeFromRandomization` on trap payload pickups so those payloads are not also treated as normal randomized pickups.

Use exclusion for hand-placed required items, scripted sequence items, trap payloads, or objects whose active/inactive state is controlled outside the item randomizer.

## Prop randomization

`RandomizerHandler.hps` declares `ePropRandomizerType` with three randomized prop families:

- `Brick`
- `ExplosiveBarrel`
- `GasCanister`

String/class mapping:

- `Brick` maps to `cScrPropHeavyThrowable`.
- `ExplosiveBarrel` maps to `cScrPropExplosiveBarrel`.
- `GasCanister` maps to `cScrPropGasCanister`.

`config/prop_randomization.cfg` provides one `Count` per prop type per map.

`SetupRandomization_Props()` loads the config, creates `cMapPropData`, and stores a random seed per map.

`OnMapEnter_Props(map)`:

- Finds matching prop data for the map.
- Collects props by the mapped script classes.
- Skips props whose unnamed string variable is `DoNotRandomize`.
- Re-seeds with the map prop seed.
- Activates random props until the configured count is reached for each type.
- Resets the random stream to application time afterward.

Confirmed limitation: the prop randomizer activates selected props; it does not explicitly deactivate every non-selected prop. Maps should have candidate randomized props authored with the expected default active state.

## Trap config format

Trap randomization is also inside `RandomizerHandler.hps`, backed by `config/traps.cfg` and stored in `cMapTrapData` records.

Each map entry can define:

- `Name`: map name.
- `GrenadeWeight`: weighted chance for grenade traps.
- `GasWeight`: weighted chance for gas traps.
- `FireWeight`: weighted chance for fire traps.

Each map contains `Difficulty` rows:

- `Level`: trap amount difficulty level.
- `Traps`: target active trap count for that map at that difficulty.

The stock config includes rows for `arsenal`, `tunnels`, `maintenance`, `officer_hub`, `prison`, `soldier_quarters`, and a temporary `patrik_traps_test` entry.

## Trap setup and map entry

`Init_Traps()` creates default trap data with:

- Map file `default`.
- Trap count `-1`.
- A random seed.
- All trap type weights set to `1.0`.

`SetupRandomization_Traps()`:

- Loads `traps.cfg`.
- Keeps the default trap data at index `0`.
- Reads `eGameDifficultySetting_TrapAmount`.
- Selects the `Traps` value from the matching `Difficulty Level`.
- Falls back to default trap count when a map has no matching difficulty row.
- Forces `officer_hub` trap count to `0` on the first playthrough.
- Stores grenade/gas/fire weights per map.

`OnMapEnter_Traps(map)`:

- Uses map-specific trap data if present, otherwise default trap data.
- Collects all `cScrPropTrap` props.
- Re-seeds with the map trap seed.
- If the configured count is non-negative, randomly removes traps until the target count is reached.
- Excluded traps are not removed, but still get a randomized type.
- Removed traps are deactivated, along with `<TrapName>_Extra_*` and `<TrapName>_Type_*` entities when present.
- Remaining traps are activated, their extras are activated, and their trap type is randomized.
- Resets the random stream to application time afterward.

## Trap metadata

`script/custom/props/Prop_Trap.hps` reads these instance variables:

- `Trap_ExcludeFromRandomization`
- `Trap_CanBeGrenade`
- `Trap_CanBeFire`
- `Trap_CanBeGas`
- Door-trap attach variables such as `Trap_DoorAttachPoint`, `Trap_DoorName`, and `Trap_MaxAttachPointDist`

`helper_props_custom.hps` exposes `Trap_GetExcludeFromRandomization`.

`RandomizeTrapType()` calls `Trap_GetAvailableTypes`, sums the configured weights for allowed trap types, picks a weighted type, and calls `Trap_SetType`.

Confirmed behavior from `Prop_Trap.hps`: door trap availability is more constrained than normal trap availability. For example, gas is not available for door traps in the inspected source.

## Notes for modders

- Item `TotalSlots` must match actual non-excluded candidate pickups, or the randomizer logs a warning/error and the map can randomize incorrectly.
- `ExcludeFromRandomization` is pickup-side metadata. `DoNotRandomize` is the loose-prop unnamed string marker.
- Trap exclusion does not mean "leave type unchanged"; excluded traps are kept active but still get randomized type.
- Candidate prop and trap names matter because the randomizer toggles related entities by naming patterns such as `_Replacement_*`, `_Extra_*`, and `_Type_*`.
- Changing config counts without changing map candidate entities can cause impossible targets or selection errors.

## Confirmed facts and assumptions

- Confirmed: Item, prop, and trap randomization are all implemented by `RandomizerHandler.hps`.
- Confirmed: Item and prop map-entry passes use per-map random seeds and reset the random stream afterward.
- Confirmed: Pickup exclusion uses `ExcludeFromRandomization` on `cScrPropPickup`.
- Confirmed: Prop randomization skips props whose unnamed string variable is `DoNotRandomize`.
- Confirmed: Trap randomization reads trap count from `traps.cfg` using the `TrapAmount` difficulty setting.
- Assumption: For modded maps, candidate randomized props should be authored inactive unless the map deliberately wants already-active candidates, because the prop randomizer only activates selected props.
