# Stalker Map Transfer And Boss Fight

This document covers the Stalker's map-transfer persistence, transfer-area movement, `AgentBlackboard` handoff, arena boss fight states, and special scripted flows.

## Source files

- `script/custom/agents/agent_stalker.hps`
- `script/custom/helpers/helper_agent.hps`
- `script/custom/modules/AgentBlackboard.hps`
- `script/modules/MapTransferHandler.hps`
- `script/helpers/helper_modules.hps`
- `script/modules/ModuleInterfaces.hps`
- `maps/officer_hub/officer_hub.hps`
- `maps/arena/arena.hps`
- `entities/character/stalker/stalker.ent`

## Two map-transfer layers

There are two Stalker-related transfer mechanisms.

Generic `MapTransferHandler` layer:

- `MapTransferHandler.hps` defines `cSaveState_Stalker` with position, yaw, and state.
- `ModuleInterfaces.hps` exposes `SaveState_Stalker` and `LoadState_Stalker`.
- `helper_modules.hps` wraps those as `MapTransfer_SaveState_Stalker` and `MapTransfer_LoadState_Stalker`.

Rich Stalker blackboard layer:

- `AgentBlackboard.hps` defines `cStalkerMapTransferData`.
- `Blackboard_SetupStalkerMapTransfer` reads rich state from the current Stalker with `Stalker_GetMapTransferData`.
- `Blackboard_DoStalkerMapTransfer` positions the Stalker relative to the matching transfer area in the destination map and calls `Stalker_ApplyMapTransferData`.

The rich blackboard path is the important one for normal Stalker behavior continuity. It includes mode, presence, tenacity, emerge allowed, recently hurt, retreat active, alert state, interest data, emerging flag, path distance to player, transfer area transform, Stalker transform, and active state.

## Helper data flow

`helper_agent.hps` exposes:

- `Stalker_GetMapTransferData`
- `Stalker_ApplyMapTransferData`

`Stalker_GetMapTransferData` calls `_Global_GetMapTransferData` on the Stalker and reads global variables such as:

- `Stalker_State`
- `Stalker_Mode`
- `Stalker_Presence`
- `Stalker_Tenacity`
- `Stalker_EmergeAllowed`
- `Stalker_RecentlyHurt`
- `Stalker_RetreatActive`
- `Stalker_AlertState`
- `Stalker_InterestAlert`
- `Stalker_InterestAreaRadius`
- `Stalker_InterestIncreaseCount`
- `Stalker_InterestPauseEmergeCount`
- `Stalker_InterestEmergeCount`
- `Stalker_InterestEmergeTime`
- `Stalker_InterestAreaPos`
- `Stalker_Emerging`
- `Stalker_PathDistToPlayer`

`Stalker_ApplyMapTransferData` passes the same data back as global args and calls `_Global_ApplyMapTransferData`.

`_Global_ApplyMapTransferData` does not immediately choose final behavior. It stores the transfer record and sets `mlMapTransferData_SetupStage = 0`, causing `SetupAfterMapTransfer` to process it during updates.

## AgentBlackboard transfer behavior

`Blackboard_SetupStalkerMapTransfer`:

- Locates the current map, Stalker agent, current map transfer area, character mover, pathfinder, and mesh entity.
- Stores the current transfer area name and active state.
- Calls `Stalker_GetMapTransferData`.
- If `Stalker_GetSaveRoomBehaviorActive` is true, forces the stored mode to active.
- Stores whether the Stalker body intersects the transfer area.
- Stores the transfer area transform, Stalker transform, and yaw difference between transfer area and agent.

`Blackboard_DoStalkerMapTransfer`:

- Finds the destination map transfer area by stored name.
- Computes an offset from old transfer area transform to new transfer area transform.
- Applies that offset to the stored Stalker transform and interest-area position.
- Sets the destination Stalker position/yaw.
- If the stored Stalker was active, activates it and calls `Stalker_ApplyMapTransferData`.
- Resets the blackboard transfer record.
- In `officer_hub`, increments hub transfer count with a short cooldown.

Map example: `maps/officer_hub/officer_hub.hps` calls `Blackboard_DoStalkerMapTransfer("Stalker_1")` on map start and calls `Blackboard_SetupStalkerMapTransfer("Stalker_1")` before several hub transfer sequences.

## Stalker transfer setup stage

`cScrAgentStalker::SetupAfterMapTransfer` runs in two stages:

1. Stage 0 resets properties, stops pathfinder/mover, resets player detection/proximity, and changes to `Null`.
2. Stage 1 applies transferred mode, alert state, presence, tenacity, emerge allowed, recently hurt, interest values, and transferred interest position.

It then decides whether to enter the hole network or move through the destination transfer area.

The Stalker enters a hole when:

- The previous state was already an inside-wall state (`Null`, `WaitInHole`, or `MoveBetweenHoles`).
- Path distance to player is long enough.
- It was retreating or recently hurt and far enough.

The Stalker can avoid entering a hole when the transferred alert state is detected and the player is close.

If it enters a hole:

- It hides and changes to `Null`.
- Active mode chooses a random or player/interest-related hole.
- Passive mode chooses a far hole from the player.
- Emerging transfer data can schedule a fast emerge if near enough.
- A delayed timer changes from `Null` to `MoveBetweenHoles`.

If it does not enter a hole:

- It stays visible.
- Recently hurt or retreat active goes to `Retreat`.
- Investigating alert state goes to `InvestigateSound`.
- Detected alert state goes to `Hunt`.
- Otherwise it goes to `Idle`.
- If not already inside the transfer area, it disables senses and enters `MapTransfer` to run to the transfer AI node.

## MapTransfer state

`State_MapTransfer` is an in-world transition state used when the Stalker must move to the destination transfer area node after a map change.

Confirmed behavior:

- Pauses presence.
- Finds the map transfer area currently containing the player.
- Reads the transfer AI node name from the map transfer area helper.
- Sets yaw from the path direction near the transfer node.
- Disables collision testing and gravity.
- Plays `run_map_transfer`.
- Moves feet position toward the goal at 4 units/s.
- On arrival, changes to the stored next state.
- Restores collision, gravity, senses, and presence updates on leave.

The `run_map_transfer` animation is declared in `entities/character/stalker/stalker.ent`.

## Boss fight entry points

The arena boss fight uses direct global calls in `maps/arena/arena.hps`. These are implemented in `agent_stalker.hps`:

- `_Global_BossFight_Enter`: changes to `BossFightDefault`.
- `_Global_BossFight_AddBridgeEntityIds`: stores bridge entities for boss fight damage/path logic.
- `_Global_BossFight_AddRetreatPosition`: stores retreat positions.
- `_Global_BossFight_UpdateBehaviour`: switches desired behavior among default, pace, and retreat.
- `_Global_BossFight_SetPacePosition`: stores the pace target.
- `_Global_BossFight_SetIsDesperate`: changes desperate behavior.
- `_Global_BossFight_SetEndArea`: stores the end area.
- `_Global_BossFight_SetKillDistance`: adjusts close kill distance.
- `_Global_BossFight_SetAllowSlowdownTime`: allows time-slow handling.
- `_Global_Jump`: starts or retargets `BossFightJump`.
- `_Global_SetClosestJumpPos`: stores a nearby jump position.

These are confirmed as boss fight control points, not normal helper API.

## Boss fight states

Boss fight states are still part of `cScrAgentStalker`:

- `BossFightDefault`: main chase/combat behavior. It reveals player position when the player is in front, chooses speed from distance/path conditions, can kill or throw at close range, handles grenade detection, and routes pathfinding failures through boss fight helpers.
- `BossFightPace`: moves/turns around a pace position and can update paths toward the player.
- `BossFightRetreat`: runs to stored retreat positions and returns to the current boss fight behavior after retreat.
- `BossFightJump`: jumps/climbs/falls across arena geometry, can throw the player during the jump sequence, and has special hurt handling.

Boss fight damage differs from normal Stalker behavior:

- `GiveDamage` routes boss fight hurt handling through `OnTimer_BossFightHandleHurt` or `BossFightJump_HandleHurt`.
- Environmental damage can be ignored for a cooldown.
- Shotgun, grenade, gas, and fire have special boss fight reactions.
- Revolver damage during hanging can contribute to a fall condition.

## Arena map setup

`maps/arena/arena.hps` shows the full scripted setup:

- Finds `Stalker_1`.
- Sets boss end area.
- Adds retreat positions.
- Adds animation hitbox on `Socket_Stomach`.
- Adds bridge entity IDs.
- Activates/deactivates `Stalker_1` around arena sequences.
- Disables senses during emergence cutscenes.
- Plays `crawl_out_of_hole_ending`.
- Calls `_Global_BossFight_Enter`.
- Adds ignored/path-blocker bodies for bridge/arena obstacles.
- Calls `_Global_Jump`, `_Global_SetClosestJumpPos`, `_Global_BossFight_SetPacePosition`, `_Global_BossFight_UpdateBehaviour`, and `_Global_BossFight_SetKillDistance` in encounter phases.
- Plays `run_map_transfer` near ending transfer.
- Uses separate ending cutscene entities after the boss fight.

Treat this map as a boss fight reference rather than a template for ordinary maps.

## Rabbit and sit/wait specials

The normal Stalker script includes special non-boss states:

- `SitAndWait`: can be selected from hole behavior or admin-exit setup, plays sit start/loop/end animations, and has cooldowns in the blackboard.
- `ExamineRabbit`: responds to `eCustomEntityMessage_RabbitDollAttract`, moves toward a rabbit position, creates/uses `doll_rabbit_cutscene.ent`, plays examine animations, and then returns to boss fight, retreat, or other behavior depending on context.

`agent_stalker.hps` preloads `doll_rabbit_cutscene.ent`, and `stalker.ent` declares `examine_rabbit_doll` and `examine_rabbit_doll_end` animations.

## Notes for modders

- Use `Blackboard_SetupStalkerMapTransfer` before changing maps and `Blackboard_DoStalkerMapTransfer` on the destination when copying stock map-transfer behavior.
- The generic `MapTransfer_SaveState_Stalker` record is not enough to preserve normal Stalker behavior by itself.
- Map transfer may intentionally hide the Stalker even if it was visible in the previous map, based on path distance, recently-hurt state, retreat state, and alert state.
- Arena `_Global_BossFight_*` calls assume arena-specific setup data such as bridge IDs, retreat positions, end areas, and jump positions.
- If a transferred Stalker appears frozen, check transfer area names, transfer AI node setup, active state, destination `Stalker` nodes, and whether `mlMapTransferData_SetupStage` has progressed out of `Null`.

