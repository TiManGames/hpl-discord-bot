# Stalker Framework

This document covers the stock Stalker framework shape: entity registration, script class, helper API, blackboard support, path nodes, and how map scripts normally control the monster.

## Source files

- `config/EntityTypes.cfg`
- `editor/userclasses/EntityClasses.def`
- `entities/character/stalker/stalker.ent`
- `entities/character/stalker/stalker_rigid.ent`
- `entities/character/stalker/stalker_static.ent`
- `script/custom/agents/agent_stalker.hps`
- `script/custom/agents/agent_types_custom.hps`
- `script/custom/helpers/helper_agent.hps`
- `script/custom/modules/AgentBlackboard.hps`
- `script/modules/MapTransferHandler.hps`
- `script/helpers/helper_modules.hps`
- `maps/*/*_Stalker.nodes`
- Map examples: `maps/officer_hub/officer_hub.hps`, `maps/arena/arena.hps`, `maps/arsenal/arsenal.hps`, `maps/maintenance/maintenance.hps`, `maps/prison/prison.hps`, `maps/soldier_quarters/soldier_quarters.hps`

## Registration and entity setup

`config/EntityTypes.cfg` registers the Stalker entity type:

- Type name: `Agent_Stalker`
- Script file: `custom/agents/agent_stalker.hps`
- Script class: `cScrAgentStalker`

`editor/userclasses/EntityClasses.def` declares the matching editor class `Agent_Stalker`, inheriting from `Agent` and using `CharMover`, `HeadTracker`, `Listener`, and `FootPlacement` components.

`entities/character/stalker/stalker.ent` is the main runtime entity. It points at `entities/character/stalker/stalker_body/stalker_new.fbx`, declares the body/head/bayonet submeshes, contains the animation set used by `agent_stalker.hps`, and has `<UserDefinedVariables EntityType="Agent_Stalker">`.

`stalker_rigid.ent` and `stalker_static.ent` are related Stalker entity assets, but the scripted monster behavior is tied to `Agent_Stalker` and `cScrAgentStalker`.

## Main script class

`cScrAgentStalker` extends `cScrAgentHumanoid` in `script/custom/agents/agent_stalker.hps`.

Confirmed setup in `Init`, `SetupCharBody`, `SetupAfterLoad`, and `SetupComponents`:

- Enables player detection, door checking, and animation callbacks.
- Sets mass, movement acceleration/deceleration, push force, collision behavior, safe positions, and character body extra size.
- Sets FOV and sight range from the Stalker reactivity difficulty setting.
- Sets the pathfinder node container name to `Stalker`; matching map files include names such as `maps/officer_hub/officer_hub_Stalker.nodes`.
- Creates the Stalker state machine and registers all named states.
- Creates a sound listener, light sensor, foot placement, head tracker, proximity sensor, attack damage component, and verlet animation component.
- Defaults the ghoul hole network pattern to `GhoulHole_*`.
- Preloads Stalker hole particles and the rabbit cutscene entity.

Important modding consequence: a map with an active Stalker needs a Stalker path node container. `OnStart` disables the Stalker and logs an error when no node container exists.

## Shared Stalker enums

`script/custom/agents/agent_types_custom.hps` exposes map/helper-facing enums:

- `eStalkerMode_Active`
- `eStalkerMode_Passive`
- `eStalkerSpeed_Walk`
- `eStalkerSpeed_Run`
- `eStalkerSpeed_Stopped`
- `eStalkerThrowPlayerType_*`
- `eStalkerInterestIncreaseBehaviour_*`
- `eStalkerEscalation_*`

`agent_stalker.hps` defines internal state and alert enums:

- `eStalkerState`: all state-machine states, including `Idle`, `Emerge`, `InvestigateSound`, `Hunt`, `AttackClose`, `Retreat`, `Stalk`, `WaitInHole`, `MoveBetweenHoles`, `Hurt`, `KillPlayer`, `ThrowPlayer`, `BossFight_*`, `MapTransfer`, `Null`, and `EvadeHazard`.
- `eStalkerAlertState`: `None`, `Investigating`, and `Detected`.
- `eStalkerBossFightBehaviour`: `Default`, `Pace`, and `Retreat`.
- `eStalkerAnimationMessageSoundEvent`: animation-message IDs used to play breath, hand, break, talk, and door-impact sounds.

## Helper API

`script/custom/helpers/helper_agent.hps` is the normal map-facing helper surface. It wraps `cScript_RunGlobalFunc` calls into the named Stalker entity.

Common control helpers:

- `Stalker_GoToHole(stalker, hole, force, instant, speed)`: sends `_Global_GoToHole`. Instant movement hides the Stalker and places it in `WaitInHole`; non-instant movement routes through hole/return states depending on current hidden state.
- `Stalker_EmergeFromHole(stalker, hole, instant)`: sends `_Global_EmergeFromHole` and schedules emergence from the hole network.
- `Stalker_SetMode(stalker, mode, resetPresence)`: switches active/passive mode.
- `Stalker_GetMode(stalker)`: returns the current `eStalkerMode` integer.
- `Stalker_SetTenacity(stalker, value)` and `Stalker_GetTenacity(stalker)`: set/read clamped tenacity.
- `Stalker_SetEmergeAllowed(stalker, bool)` and `Stalker_GetEmergeAllowed(stalker)`: gate whether normal hole logic may emerge.
- `Stalker_Retreat(stalker)`: changes to `Retreat` if the Stalker is not hidden, delaying the retreat if a cutscene animation is active.
- `Stalker_PlayCutsceneAtEntity(stalker, anim, ent, fadeTime, startCallback)`: sets idle cutscene animation data and enters `Idle`.

State/query helpers:

- `Stalker_GetIsInsideWalls(stalker)`: returns the hidden flag from `_Global_GetIsInsideWalls`.
- `Stalker_GetPresence(stalker)`: returns current presence.
- `Stalker_GetRecentlyHurt(stalker)`: returns the recently hurt flag.
- `Stalker_GetSaveRoomBehaviorActive(stalker)`: returns whether the save-room grace behavior is active.
- `Stalker_GetGhoulHoleNetworkId(stalker)`: returns the registered blackboard hole-network ID.
- `Stalker_GetInterestAlertHoleID(stalker)`: returns the current wait-hole ID only when interest alert is active and the Stalker is waiting in a hole.

Path/sound helpers:

- `Stalker_AddPathBlockerBody`, `Stalker_RemovePathBlockerBody`
- `Stalker_AddIgnoredPathBlockerBody`, `Stalker_RemoveIgnoredPathBlockerBody`
- `Stalker_RemoveIgnoredSoundSourceBody`

Map transfer helpers:

- `Stalker_GetMapTransferData`
- `Stalker_ApplyMapTransferData`

These use global variables/arguments to move a richer state record than the generic `MapTransferHandler` Stalker save.

## Blackboard support

`script/custom/modules/AgentBlackboard.hps` is the shared agent coordination module. Stalker-specific responsibilities include:

- Registering ghoul hole networks from area name patterns.
- Returning closest, farthest, random, directional, and filtered ghoul holes.
- Tracking which hole is used by which agent.
- Holding Stalker map-transfer data across map changes.
- Applying reduced enemy perception to `cScrAgentStalker` and `cScrAgentShotgunner`.
- Creating a player-attached path blocker body when an agent needs the player to block pathfinding.
- Tracking Stalker cooldowns and counters such as random emerge, sit and wait, reach-out hole, wait-by-admin, shot count, hub transfer count, escalation, and interest-increase behavior.

`cScrAgentStalker` registers itself with the blackboard on world/map load and removes itself on map leave/destruction.

## Map integration patterns

Normal maps usually control the Stalker by name, typically `Stalker_1`, through helper functions:

- `maps/officer_hub/officer_hub.hps` activates `Stalker_1`, toggles emerge allowed, switches active/passive mode, sets tenacity, sends the Stalker to named ghoul holes, and uses `Blackboard_SetupStalkerMapTransfer` / `Blackboard_DoStalkerMapTransfer`.
- `maps/arsenal/arsenal.hps`, `maps/prison/prison.hps`, `maps/soldier_quarters/soldier_quarters.hps`, and `maps/maintenance/maintenance.hps` show smaller local setup and path-blocker examples.

The arena map is special. `maps/arena/arena.hps` uses direct `_Global_BossFight_*` calls for boss-specific setup, jump positions, bridge entity IDs, retreat positions, pace positions, kill distance, and end-area behavior. Treat those calls as arena boss fight controls, not the general-purpose Stalker API.

## Notes for modders

- Keep `Agent_Stalker`, `cScrAgentStalker`, and the `.ent` user variable type aligned if copying the Stalker into a mod-local setup.
- The Stalker pathfinder expects a node container named `Stalker`; missing nodes disable the agent.
- Most map scripts should call `helper_agent.hps` wrappers instead of direct `_Global_*` calls.
- Direct `_Global_BossFight_*` calls are confirmed in the arena boss fight but are not the normal map-control pattern.
- Ghoul hole behavior depends on area names, blackboard registration, and the Stalker's `msHoleNetwork`, not just on map scripts calling `Stalker_GoToHole`.

