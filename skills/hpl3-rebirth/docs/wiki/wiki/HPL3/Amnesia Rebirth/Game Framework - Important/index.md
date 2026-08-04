# Bunker Framework Reference

This folder documents stock Amnesia: The Bunker framework behavior from local game sources. It is meant as a modding reference for tracing behavior before changing scripts, entities, maps, or inventory configuration.

## Reading order

1. `player-items.md` - inventory item types, pickup flow, held entities, hand state, and generic item use.
2. `weapon-framework.md` - weapon-specific item types, aim/reload player states, `helper_gun.hps`, weapon prop events, and map-transfer persistence.
3. `revolver-behaviour.md` - revolver chamber state, cylinder rotation, firing, reload, and ammo removal.
4. `shotgun-behaviour.md` - shotgun magazine/chamber state, pump/reload events, shell visibility, and the map-transfer reload guard.
5. `stalker-framework.md` - Stalker registration, entity setup, helper API, blackboard dependencies, path nodes, and map-facing control points.
6. `stalker-behaviour.md` - Stalker state machine, modes, alert states, senses, presence, tenacity, hole movement, and normal hunt/search flow.
7. `stalker-combat-and-interactions.md` - player detection, gunshot and damage response, doors, blockers, hiding, save rooms, flashlight, grenades, and player screen effects.
8. `stalker-map-transfer-and-bossfight.md` - Stalker map-transfer data, `AgentBlackboard` handoff, map transfer state, arena boss fight states, and scripted specials.
9. `randomization-framework.md` - `RandomizerHandler` registration, lifecycle, random seeds, difficulty hooks, helper API, and framework boundary.
10. `randomization-items-props-and-traps.md` - item, prop, and trap config formats, map-entry activation flow, exclusions, weights, and difficulty-driven counts.
11. `randomization-codes-dogtags-corpses.md` - generated codes, lock assignment, readable dogtag combinations, corpse activation, dogtag distribution, and old-save conversion.
12. `randomized-lockers-and-map-integration.md` - randomized locker relocation, hub disabling, `RandomLocker_*` naming, placement, codes, and map callbacks.

## Core source map

| Source | Role |
| --- | --- |
| `config/Inventory.cfg` | Declares item type IDs, icons, hidden/weapon flags, use permissions, use-state IDs, hand entity files, left-hand flags, and drop entity files. |
| `config/PlayerStates.cfg` | Registers custom player states such as gun aim/reload and shotgun aim/reload. |
| `script/custom/player/PlayerTypes_Custom.hps` | Defines custom player-state enum values used by weapon and item scripts. |
| `script/custom/modules/ItemHandler.hps` | Owns item type parsing, player inventory data, held hand state, pickup/drop/spawn/equip/unequip/use flow, and pickup/count UI. |
| `script/custom/helpers/helper_items.hps` | Public helper wrapper around the item handler module. |
| `script/custom/player/ItemCallbacks.hps` | Default callbacks for pickup, combine, can-use, use, stop-use, and item-specific side effects. |
| `script/custom/player/PlayerState_UsingItem_Base.hps` | Generic player use-state base: intro/loop/outro animation flow, input handling, pick checks, crosshair, zoom, and item use dispatch. |
| `script/custom/helpers/helper_gun.hps` | Public weapon helper wrapper: gun events, can-fire queries, ammo-count display, muffled effect helpers, and revolver/shotgun-specific queries. |
| `script/custom/props/Prop_Weapon_Base.hps` | Shared held weapon prop base: save/load hooks, global query/event entry points, animation-message dispatch, bullet visibility hooks. |
| `script/custom/props/Prop_Gun.hps` | Revolver held prop state: six chambers, cylinder angle, spent/unspent/empty bullets, and reload bullet visibility. |
| `script/custom/props/Prop_Shotgun.hps` | Shotgun held prop state: magazine count, chambered shell, reload/pump events, shell submesh visibility. |
| `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps` | Shared weapon aim/fire state: aim modes, lantern transitions, collision use check, firing animation, sound, particle, projectile, and reload handoff. |
| `script/custom/player/PlayerState_UsingWeapon_Reload_Base.hps` | Shared weapon reload/check-ammo state: reload state machine, ammo-count UI, animation updates, and aim-state handoff. |
| `script/custom/player/PlayerState_UsingGun_Aim.hps` and `PlayerState_UsingGun_Reload.hps` | Revolver-specific aim/reload animation names, projectile behavior, chamber checks, and reload setup. |
| `script/custom/player/PlayerState_UsingShotgun_Aim.hps` and `PlayerState_UsingShotgun_Reload.hps` | Shotgun-specific aim/reload animation names, pellet spread, socket alignment, and pump-vs-simple reload outro. |
| `script/modules/MapTransferHandler.hps` and `script/modules/ModuleInterfaces.hps` | Map-transfer storage for revolver and shotgun state. |
| `entities/bunker/gameplay/revolver/revolver_hand.ent` | Held revolver entity, custom prop class, muzzle/body markers, and animation message events. |
| `entities/bunker/gameplay/trench_shotgun/trench_shotgun_body/trench_shotgun_hand.ent` | Held shotgun entity, custom prop class, muzzle/body markers, and animation message events. |
| `config/EntityTypes.cfg` | Registers `Agent_Stalker` to `custom/agents/agent_stalker.hps` and `cScrAgentStalker`. |
| `editor/userclasses/EntityClasses.def` | Declares the Level Editor `Agent_Stalker` class and required components. |
| `entities/character/stalker/stalker.ent` | Main Stalker entity: mesh, animation set, and `Agent_Stalker` user-defined variables. |
| `script/custom/agents/agent_stalker.hps` | Main Stalker script: state machine, senses, sound/interest handling, hole movement, combat, map transfer, boss fight, and debug output. |
| `script/custom/agents/agent_types_custom.hps` | Shared Stalker enums such as mode, speed, throw type, interest increase behavior, and escalation. |
| `script/custom/helpers/helper_agent.hps` | Public helper wrapper for Stalker map scripts: hole control, mode/tenacity, map-transfer data, path blockers, retreat, and cutscene playback. |
| `script/custom/modules/AgentBlackboard.hps` | Shared agent blackboard: ghoul hole networks, Stalker map-transfer data, reduced perception, player path blockers, escalation, cooldowns, and debug GUI. |
| `script/modules/MapTransferHandler.hps` and `script/helpers/helper_modules.hps` | Generic map-transfer storage helpers, including the small `cSaveState_Stalker` position/yaw/state record. |
| `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps` and `script/custom/modules/BulletHandler.hps` | Weapon fire broadcast and bullet damage path that feed Stalker gunshot/damage behavior. |
| `script/custom/player/Player_Custom.hps` | Player-side monster screen effects and death-source mapping for Stalker proximity/combat. |
| `script/custom/props/Prop_DynamoLantern.hps`, `Prop_Grenade.hps`, `Prop_ExplosiveBarrel.hps`, and `Prop_Trap.hps` | Prop-side interactions that send flashlight/gobo/grenade messages or prioritize Stalker damage. |
| `maps/*/*_Stalker.nodes` | Path node containers named `Stalker`, used by the Stalker pathfinder. |
| `maps/officer_hub/officer_hub.hps` and `maps/arena/arena.hps` | High-value map examples: normal Stalker setup/map transfer in the hub, and boss fight setup in the arena. |
| `config/Modules.cfg` | Registers `RandomizerHandler` as custom user module ID `89`. |
| `script/custom/modules/RandomizerHandler.hps` | Main randomization module: item, prop, trap, code, dogtag, corpse, and locker setup plus map-entry application. |
| `script/custom/modules/ModuleInterfaces_Custom.hps` | Declares `eModuleType_Custom_RandomizerHandler` and `iScrRandomizerHandler_Interface`. |
| `script/custom/helpers/helper_modules_custom.hps` | Public map-facing helper wrappers for generated codes and locker hub-location checks. |
| `script/custom/helpers/helper_props_custom.hps` | Prop helper wrappers used by randomization, including pickup/trap exclusion and dogtag combination helpers. |
| `script/custom/props/Prop_Pickup.hps` | Pickup-side `ExcludeFromRandomization` metadata used by item randomization. |
| `script/custom/props/Prop_Trap.hps` | Trap-side randomization metadata, allowed trap types, trap exclusion, and payload pickup exclusion. |
| `script/props/Prop_ReadableDogTag.hps` | Readable dogtag combination storage, `Randomizeable` metadata, and add-code callback behavior. |
| `config/item_randomization.cfg` | Global and per-map randomized pickup targets, min/max counts, total slot validation, multipliers, limited item markers, and item type names. |
| `config/prop_randomization.cfg` | Per-map loose prop counts for bricks, explosive barrels, and gas canisters. |
| `config/traps.cfg` | Per-map trap counts by trap amount difficulty level and grenade/gas/fire trap type weights. |
| `config/code_randomization.cfg` | Generated code names, lock entity names, and dogtag entity files that display generated codes. |
| `config/corpse_randomization.cfg` | Corpse activation, rat-feed entities, dogtag placeholders, first-playthrough flags, priority, force-active, and old-save base dogtag data. |
| `config/difficulty_settings.cfg` and `script/helpers/helper_game.hps` | Difficulty settings used by the randomizer, including resource/ammo amount, trap amount, rat corpse amount, fuse settings, fuel storage code lock, and randomized locker locations. |
| `maps/officer_hub/officer_hub.hps`, `maps/arsenal/arsenal.hps`, `maps/maintenance/maintenance.hps`, `maps/prison/prison.hps`, and `maps/soldier_quarters/soldier_quarters.hps` | Map examples for generated codes, randomized locker hub checks, destination locker callbacks, and `RandomLocker_*` pickup activation. |

## Glossary

- **Item type**: A stable string ID from `Inventory.cfg`, such as `Gun`, `Shotgun`, `Ammunition`, or `ShotgunAmmunition`.
- **Item ID**: A runtime inventory entry ID generated by `cInventory`, often based on item type plus an incrementing inventory number.
- **Inventory instance**: A container enum used by the item handler. Most player-facing calls use `eInventoryInstance_Player`; auxiliary storage uses separate instances.
- **Hidden item**: An item with `Hidden="true"` in `Inventory.cfg`. Ammunition uses this so it can be collected and counted without occupying the visible main inventory grid.
- **Held item**: An inventory item currently assigned to a hand.
- **Held entity**: The spawned prop entity that represents a held item on the player arms render layer.
- **Internal entity**: The saved backing entity attached to an inventory entry. The item handler copies data between world entities, internal entities, and held/drop entities.
- **Use state**: A player state entered when an item is used. `Inventory.cfg` can provide a `UsingState`; otherwise the item handler falls back to normal state.
- **Aim state**: The custom weapon state used while holding aim/fire input for a weapon.
- **Reload state**: The custom weapon state used while checking ammo or reloading.
- **Gun event**: An `eGunEvent` value sent from player-state code or animation message events into the held weapon prop script.
- **Map-transfer state**: Weapon state saved in `MapTransferHandler` so weapon ammo/chamber state survives map changes.
- **Agent type**: An entity type from `EntityTypes.cfg`. `Agent_Stalker` maps to `cScrAgentStalker`.
- **Stalker mode**: High-level active/passive behavior from `eStalkerMode`. Active increases presence and can lead to emergence; passive retreats or stays away through the hole network.
- **Alert state**: Visual/behavior tier from `eStalkerAlertState`: none, investigating, or detected. It also changes locomotion animation families.
- **Presence**: A float in `cScrAgentStalker` that moves the Stalker between active and passive modes based on proximity, visibility, aggression, generator state, difficulty, and tenacity.
- **Tenacity**: A clamped tuning value used by the Stalker to modify presence and recovery/retreat pacing.
- **Ghoul hole network**: Area set registered through `AgentBlackboard` from the Stalker's `msHoleNetwork`, normally `GhoulHole_*`.
- **Inside walls**: The Stalker's hidden state, usually `WaitInHole`, `MoveBetweenHoles`, or `Null`, where mesh/body collision and player detection are disabled.
- **Interest area**: A position/radius accumulated from sounds and alert events; it can focus hole selection and trigger warning/emerge behavior.
- **Path blocker body**: A physics body temporarily registered with the Stalker pathfinder so it can path around obstacles, traps, open doors, or the player.
- **Boss fight behavior**: Arena-specific Stalker behavior using `eStalkerBossFightBehaviour` and `_Global_BossFight_*` functions.
- **RandomizerHandler**: Custom user module ID `89`, implemented by `cScrRandomizerHandler`, that owns stock item, prop, trap, code, dogtag, corpse, and locker randomization.
- **Randomization config**: One of the XML config files consumed by `RandomizerHandler`, such as `item_randomization.cfg`, `traps.cfg`, or `code_randomization.cfg`.
- **Randomized item type**: An item type string recognized by `RandomizerHandler.StringToItemType`, usually matching an `Inventory.cfg` item type.
- **TotalSlots**: Item randomization validation count for the number of non-excluded placed pickups of a type in a map.
- **Limited item**: A randomized pickup with unnamed string variable `Limited`, controlled by the limited-item cap logic.
- **Excluded pickup**: A `cScrPropPickup` with `ExcludeFromRandomization=true`, skipped by item randomization.
- **Randomized prop**: A loose prop family handled by prop randomization: brick, explosive barrel, or gas canister.
- **Trap count level**: The selected `TrapAmount` difficulty value used to choose a `Difficulty Level` row in `traps.cfg`.
- **Randomized code**: A generated four-digit combination stored in `mvCodes`, assigned to locks and matching readable dogtag files.
- **Randomizeable dogtag**: A readable dogtag instance flag exposed by `Prop_ReadableDogTag`; the stock randomizer's corpse placement is still driven by `corpse_randomization.cfg`.
- **Randomized corpse**: A corpse/dogtag placement entry from `corpse_randomization.cfg`, activated or replaced by `OnMapEnter_DogtagsAndCorpses`.
- **Random locker**: The generic `RandomLocker` entity setup placed in destination maps when locker location randomization moves a named hub locker.
- **Hub locker**: An original officer hub locker. `Randomizer_GetLockerIsInHub` returns whether a named locker stayed there.

## Confirmed facts and assumptions

- Confirmed: The item framework is split across `Inventory.cfg`, `ItemHandler.hps`, helper wrappers, item callbacks, player states, and prop scripts.
- Confirmed: Revolver and shotgun ammo state is owned by the held weapon prop scripts, then exposed through `helper_gun.hps` and saved through `MapTransferHandler`.
- Confirmed: Weapon firing uses both player state logic and held prop animation-message events. The player state starts firing; the held prop updates chamber/shell state when it receives events.
- Confirmed: The Stalker is the `Agent_Stalker` entity type, implemented by `cScrAgentStalker` and backed by a large state machine in `script/custom/agents/agent_stalker.hps`.
- Confirmed: Map scripts should use `helper_agent.hps` helpers for normal Stalker control, while some arena boss fight setup calls `_Global_BossFight_*` directly.
- Confirmed: Normal Stalker movement depends on a path node container named `Stalker` plus ghoul hole areas registered by `AgentBlackboard`.
- Confirmed: Gunshots reach the Stalker through two paths: map `OnGunshot()` callbacks and `eCustomEntityMessage_PlayerShotGun` broadcasts to agents.
- Confirmed: Stalker map-transfer behavior has two layers: generic position/yaw/state storage in `MapTransferHandler` and richer active Stalker behavior data in `AgentBlackboard`.
- Confirmed: `RandomizerHandler` is a custom user module registered as ID `89` and implemented by `script/custom/modules/RandomizerHandler.hps`.
- Confirmed: The stock randomizer covers pickups, loose props, traps, generated codes, readable dogtag combinations, corpse/dogtag placement, and randomized locker relocation.
- Confirmed: `Randomizer_GetCode` and `Randomizer_GetLockerIsInHub` are helper wrappers in `script/custom/helpers/helper_modules_custom.hps`.
- Confirmed: The randomizer uses config-driven behavior from `item_randomization.cfg`, `prop_randomization.cfg`, `traps.cfg`, `code_randomization.cfg`, and `corpse_randomization.cfg`.
- Confirmed: Incidental `cMath_RandRect*` calls elsewhere in scripts are not automatically part of the randomizer framework.
- Assumption: "Player Item" in this documentation means the stock inventory, held-item, and use-state framework, not a separate engine class named `PlayerItem`.
- Assumption: "Stalker" in this documentation means the stock Bunker monster agent framework, not only the arena boss fight.
- Assumption: "Randomization system" in this folder means the stock `RandomizerHandler` module and its config-driven content families, not every local use of random math.
- Assumption: This folder uses the correctly spelled path `.codex/skills/hpl3-modder/references/bunker_framework`.
