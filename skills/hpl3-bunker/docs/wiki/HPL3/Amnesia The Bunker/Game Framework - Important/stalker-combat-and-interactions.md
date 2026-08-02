# Stalker Combat And Interactions

This document covers player-facing Stalker interactions: detection, attacks, throws, gunshot and damage response, doors, path blockers, save rooms, hiding, flashlight/gobo messages, grenades, traps, and player screen effects.

## Source files

- `script/custom/agents/agent_stalker.hps`
- `script/custom/helpers/helper_agent.hps`
- `script/custom/modules/AgentBlackboard.hps`
- `script/custom/modules/BulletHandler.hps`
- `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps`
- `script/custom/player/Player_Custom.hps`
- `script/custom/props/Prop_DynamoLantern.hps`
- `script/custom/props/Prop_Grenade.hps`
- `script/custom/props/Prop_ExplosiveBarrel.hps`
- `script/custom/props/Prop_Trap.hps`

## Player detection and attack selection

The Stalker enables player detection in `Init` and adjusts sight range in `SetupAfterLoad`. While hidden, `SetHidden(true)` disables player detection and resets detection state.

Default player-detection flow:

- `PlayerDetected` message while already detected changes to `Hunt`.
- `PlayerDetected` while investigating changes to `Alert`.
- Otherwise, close detection changes to `Alert`; farther detection changes to `PlayerDetected`.
- `Hunt` reveals player position, sets `Detected` alert state, runs, and repeatedly pursues the last known player position.

Attack selection is centered on proximity, line of sight, player state, and current state:

- `GetCanKillPlayer` requires close 2D distance, limited vertical offset, no `Timer_DontKillPlayer`, and line of sight to the player head.
- In hunt, the Stalker changes to `KillPlayer` or `ThrowPlayer` through `GetAttackState`.
- During retreat/evade, if the player is close, in front, visible, and not on a ladder, the Stalker can throw the player instead of continuing away.
- If the Stalker reaches the player inside a transfer area, proximity handling prefers `KillPlayer`.

`AttackClose` is used for close melee and obstacle hit animations. It starts `cLuxAttackDamage` on the first animation event and stops it on the second, then breaks or shoves the targeted prop when applicable.

## Kill and throw behavior

`agent_stalker.hps` declares separate animation names for front/back/hole/under/ladder deaths and player matching animations. These are consumed by `KillPlayer` state logic.

Throw behavior uses `eStalkerThrowPlayerType` values from `agent_types_custom.hps` and selects forward, backward, left, right, or behind-player animations. `ThrowPlayer_ThrowPlayerWhileInCutscene` calls the custom player thrown state setup and then schedules damage with `OnTimer_GiveThrowDamage`.

Throw damage scales with Stalker lethality difficulty. Boss fight throws can use lower damage than normal throws in low lethality.

`Player_Custom.hps` maps Stalker/monster damage deaths to death source `Monster`, which is later consumed by the death/game-over flow.

## Gunshot path

Weapon firing reaches the Stalker through two confirmed paths:

- `PlayerState_UsingWeapon_Aim_Base.hps` calls a map `void OnGunshot()` callback if the current map implements it.
- The same fire path broadcasts `eCustomEntityMessage_PlayerShotGun` to every agent in the map.

The Stalker default message handler reacts to `PlayerShotGun`:

- If senses are inactive, it ignores it.
- If recently hurt, it ignores it.
- If not already in detected alert state, it broadcasts a high-priority `Gunshot` sound event at the player position.

While hidden in `WaitInHole`, `MoveBetweenHoles`, or map-transfer `Null`, gunshots are treated as high-priority sounds and can update interest, retarget the emerge hole, and force active behavior when emergence is allowed.

## Bullet damage path

`BulletHandler.hps` applies bullet damage with `eDamageType_Gun` and records the last bullet type. Revolver bullets use normal bullet damage; shotgun pellets use distance falloff and set the last damage bullet type to shotgun.

`cScrAgentStalker::GiveDamage` handles gun damage:

- Does nothing while hidden, killing/throwing the player, or falling in boss jump.
- Marks gun damage as hurt-by-player.
- Logs the hitbox body name when available.
- Increments blackboard Stalker shot count when not already recently hurt.
- Increases the `StalkerHitCount` hero stat.
- Enters `Hurt` if allowed by state and recent-shot conditions.
- Shotgun hits count as double for shot count when not already recently hurt and start a short shotgun damage cooldown.

If a gun hit does not enter `Hurt`, the script still plays the additive shot body animation when possible.

## Hurt, retreat, and escalation

`Hurt` behavior is split between damage classification and state logic.

Damage types handled directly:

- `eDamageType_Gun`
- `eDamageType_Grenade`
- `eDamageType_Gas`
- `eDamageType_Fire`

Grenade/gas/fire can be marked hurt-by-player when the source is a player-triggered trap, player-caused non-trap, molotov, or other qualifying source. Player-caused damage increases Stalker escalation through the blackboard.

`State_Hurt_Enter`:

- Clears alert state.
- Removes normal terror/hunting registrations.
- Computes whether the Stalker should retreat.
- Sets recently-hurt when retreat should happen.
- Switches to passive mode if retreating.
- Plays hurt animation and sound timers.

`State_Hurt_Message` decides the next state after the hurt or shot-end animation:

- Retreating damage goes to `Retreat`.
- Non-retreating player damage can go to `PreHunt` or `CheckLastKnownPosition`.
- Fire/gas without retreat can go to `EvadeHazard`.
- Boss fight damage returns to the current boss fight state.

The retreat decision is difficulty-dependent through Stalker retreat behavior and bullet resistance settings.

## Doors, obstacles, and path blockers

The Stalker scans swing/slide doors on world load and stores their body bounds. It also maintains a path-blocker list for physical blockers, traps/damage areas, open doors, and map-scripted blockers.

Default door handling:

- `NearDoor` ignores invalid, broken, non-agent-openable, already open, or already-blocked doors.
- If running or too far from a breakable door, it may break through instead of opening.
- Otherwise it enters `BlockedByProp`, tries to open or handle the door, and can route into `BreakDoor`.

Obstacle handling:

- `UpdateObstacles` checks stuck counter, open door avoidance, path blocker expiry, and bodies ahead.
- `EvaluateObstacle` can take a path around blockers, attack/break a blockage, remove temporary blockers, or handle damage areas.
- `Stalker_AddPathBlockerBody` and `Stalker_RemovePathBlockerBody` expose blocker control to map scripts.
- `AgentBlackboard::SetPlayerBlocksPath` creates a temporary player-attached blocker and uses Stalker helper calls when the agent is `cScrAgentStalker`.

Physical props:

- Small props can temporarily disable agent collision and get pushed aside.
- Large breakable blockers can be broken when the Stalker runs through them.
- Props thrown by the player can stun the Stalker if hit speed is high enough and the Stalker is not already in hunt.

## Hiding and save rooms

`UpdatePlayerHiding` tracks `Player_GetIsHiding`. If the player hides while spotted, the Stalker keeps revealing the player position in many non-terminal states so it does not immediately lose track.

In `Hunt`:

- If the player is hiding behind a breakable connected prop, the Stalker attacks/breaks that prop when close.
- If the connected prop cannot be broken, the Stalker can use a hide-area kill animation when it reaches the kill position.

Save-room behavior:

- On player enter, the Stalker records whether it was active, resets investigation/interest, changes mode to passive, and marks the player as in a save room.
- On player leave, a 3-minute count starts.
- After the count, the Stalker can return to active mode if it was active before entry and is not recently hurt.
- `Stalker_GetSaveRoomBehaviorActive` exposes this state so map transfer can force the transferred mode back to active when needed.

## Flashlight and gobo interactions

`Prop_DynamoLantern.hps` drives two message paths:

- Direct flashlight hit: checks light sensor components in the flashlight frustum and broadcasts `eCustomEntityMessage_HitByFlashlight`.
- Gobo visibility: raycasts flashlight projection points, checks agent light sensors/FOV/line of sight, and broadcasts `eCustomEntityMessage_SeeFlashlightGobo`.

The Stalker default handler consumes those messages when `mbDetectFlashlight` is true and senses are active:

- Repeated `SeeFlashlightGobo` increases `mfGoboCount`.
- `UpdateFlashlightDetection` converts sustained gobo count into `eCustomEntityMessage_DetectFlashlightGobo`.
- `DetectFlashlightGobo` changes to `PlayerLightDetected`, either immediately or after a quick turn.
- `HitByFlashlight` within 10 units also changes to `PlayerLightDetected`.

Reduced enemy perception disables Stalker flashlight detection by setting `mbDetectFlashlight` false.

## Grenades, traps, gas, fire, and explosives

`Prop_Grenade.hps` broadcasts `eCustomEntityMessage_GrenadeImpact` to all agents on impact. The Stalker tracks a grenade if the impact position overlaps a grenade prop body.

`UpdateGrenadeTracking` reacts when a tracked grenade is within 6 units, inside FOV, and in line of sight. It then broadcasts `eCustomEntityMessage_GrenadeDetected`. Several special states consume grenade-detected messages, especially boss fight states, while the default handler has no implemented generic grenade-detected reaction.

Grenade explosion damage prioritizes `cScrAgentStalker` through shape damage priority classes and uses `eDamageType_Grenade`.

Fire/gas/explosive interactions:

- Explosive barrel damage prioritizes `cScrAgentStalker`.
- Trap props can trigger and identify player-caused trap damage.
- Gas and fire damage can make the Stalker hurt/retreat, ignore repeated environmental damage for a cooldown, unlock related achievements when player-caused, or evade hazards if retreat is disabled.

## Player monster screen effects

`Player_Custom.hps` implements player-side monster screen effects:

- Finds the closest blackboard agent.
- Requires that agent to be `cScrAgentStalker`.
- Activates only when the Stalker is within 25 units, visible, on screen, and god mode is off.
- Starts radial blur and image trail effects.
- Pulses blur and FOV more strongly as distance approaches 10 units.
- Fades effects out when inactive.

This effect is not owned by the Stalker script, but it depends on the blackboard agent list and the Stalker's active/visible state.

## Notes for modders

- Gunshot hearing and gun damage are separate. A shot can be heard even if no bullet damages the Stalker.
- Recently-hurt state can suppress new gunshot investigation and changes presence/mode behavior.
- If flashlight/gobo reactions do not happen, check reduced perception, Stalker senses active, light sensor component presence, and player lantern logic.
- If the Stalker clips into a blocker or refuses a path, inspect both map-added path blockers and blackboard-created player blockers.
- Save-room behavior deliberately changes mode and can affect later map-transfer data.
