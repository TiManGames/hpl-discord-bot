# Stalker Behaviour

This document covers the Stalker's normal behavior loop: state machine, modes, alert states, senses, presence, tenacity, interest, hole movement, search, hunt, and debug output.

## Source files

- `script/custom/agents/agent_stalker.hps`
- `script/custom/agents/agent_types_custom.hps`
- `script/custom/helpers/helper_agent.hps`
- `script/custom/modules/AgentBlackboard.hps`
- `entities/character/stalker/stalker.ent`
- `maps/*/*_Stalker.nodes`

## State machine shape

`cScrAgentStalker::SetupComponents` creates a state-machine component and registers every Stalker state by name. The main groups are:

- Default perception/idle flow: `Idle`, `InvestigateSound`, `ReturnToHole`, `PlayerDetected`, `Alert`, `PreHunt`, `Hunt`, `PostHunt`, `SearchArea`, `CheckLastKnownPosition`.
- Light and flashlight flow: `PlayerLightDetected`, `CheckGobo`, `CheckFlashlightHit`.
- Movement/obstacle flow: `Blocked`, `BlockedByProp`, `BreakDoor`, `EvaluateObstacle`, `CrawlThroughVent`, `EvadeHazard`.
- Hole-network flow: `Emerge`, `Stalk`, `WaitInHole`, `MoveBetweenHoles`, `Retreat`.
- Combat/player flow: `AttackClose`, `Stunned`, `Hurt`, `Rage`, `KillPlayer`, `Roar`, `ThrowPlayer`.
- Special flow: `SitAndWait`, `ExamineRabbit`, `BossFight_Default`, `BossFight_Pace`, `BossFight_Retreat`, `BossFight_Jump`, `MapTransfer`, `Null`, `Debug`.

The default message handler reacts to player detection, sounds, path blocking, door proximity, gunshots, generator changes, grenade impacts, save-room messages, rabbit attraction, and flashlight messages. State-specific message handlers then consume or override parts of that behavior.

## Modes and presence

The high-level mode is `eStalkerMode`:

- `Active`: presence increases. When active and generator conditions allow, the Stalker can emerge or move to an active hole.
- `Passive`: presence decreases. Passive behavior tends to return the Stalker to holes far from the player.

`UpdateMode` is the main presence loop:

- Active mode increases `mfPresence` from proximity, being on screen, aggressive states, generator state, difficulty, tenacity, and `mfPresenceIncreaseMul`.
- If active presence reaches 1.0, the Stalker normally enters passive mode unless interest alert or boss fight logic keeps it active.
- Passive mode decreases `mfPresence`, especially while hidden. Hurt/recovery, generator state, difficulty, escalation, tenacity, and `mfPresenceDecreaseMul` affect the rate.
- If passive presence reaches 0.0, the Stalker returns to active mode unless save-room behavior or boss fight logic blocks the switch.

`Stalker_SetMode` calls `ChangeMode`. With `resetPresence`, active mode resets presence to 0.0 and passive mode resets it to 1.0. Active mode also clears recently-hurt flags and calls `SetupModeBehaviour`; passive mode clears interest alert and calls `SetupModeBehaviour`.

## Alert states and locomotion

`eStalkerAlertState` has three tiers:

- `None`: patrol locomotion animations.
- `Investigating`: stalk locomotion animations.
- `Detected`: rage locomotion animations.

`SetAlertState` updates `mAlertState` and calls `SetLocomotionAnimState`. The animation state selects idle, walk, cramped-walk, and run animation families:

- None: `idle_patrol`, `walk_patrol`, `walk_cramped_patrol`, `run_patrol`.
- Investigating: `idle_stalk`, `walk_stalk`, `walk_cramped_stalk`, `run_stalk`.
- Detected: `idle_rage`, `walk_rage`, `walk_cramped_rage`, `run_rage`.

The Stalker can also switch into upright or cramped walk variants based on movement and collision checks. The entity file `entities/character/stalker/stalker.ent` contains the corresponding animation names.

## Senses and perception

Confirmed components:

- Player detection is enabled when the Stalker is visible and disabled while hidden.
- Sight range is based on the `StalkerReactivity` difficulty setting.
- A `SoundListener` component receives sound events and is scaled by hearing multipliers.
- A `LightSensor` component receives flashlight/gobo interactions.
- A `ProximitySensor` defines distance bands from touching through far.

`UpdatePerceptionMuls` applies reduced enemy perception from the blackboard/user config. Reduced perception lowers sight and hearing multipliers and disables flashlight detection. Normal perception keeps flashlight detection enabled.

`GetSensesActive` returns false during active retreat unless called without retreat checking. Many state/message handlers stop early when senses are inactive.

## Sound, interest, and investigation

The Stalker has two related but distinct sound systems:

- Immediate investigation: sound events can register an investigation target and enter `InvestigateSound`.
- Interest area: repeated or important sound events grow an area that influences hole movement, warning sounds, and emergence decisions.

`IncreaseInterest` filters low-priority, non-player, physics, too-frequent, far-away, or occluded sounds. Accepted sound data updates:

- `mvInterest_AreaPos`
- `mfInterest_AreaRadius`
- interest increase counters
- interest alert state
- emerge timing

`UpdateInterest` expands the radius over time, pauses or speeds radius growth based on alert state and generator state, and can trigger a high-priority sound broadcast from the interest area when hidden and ready to emerge.

`InHole_ShouldInvestigateSound` is the hole-network filter. It uses sound priority, occlusion, distance to the current/listener hole, footstep priority, passive-mode sound counter requirements, and special gunshot handling.

## Hole network behavior

The Stalker uses `AgentBlackboard` to register and query a ghoul hole network, normally from `GhoulHole_*`.

Hidden Stalker states:

- `WaitInHole`: the Stalker is positioned at a hole, mesh/body collision is disabled, player detection is reset, the hole is marked used in the blackboard, and optional hole effects/warning sounds run.
- `MoveBetweenHoles`: the Stalker stays hidden but moves its entity position through a path or zig-zag point list between holes, with wall movement sound and ceiling dust.
- `Null`: used as a safe hidden/no-behavior state, especially during map-transfer staging.

`SetHidden(true)` stops animations, disables the character body and mesh, resets player detection, clears strong presence, and clears retreat active. `SetHidden(false)` reverses the body/mesh visibility/collision side.

`Stalker_GoToHole` behavior:

- Instant call: sets the target wait hole, hides the Stalker, positions it at the hole, and changes to `WaitInHole`.
- If already hidden: changes or retargets `MoveBetweenHoles`.
- If visible: stores a return hole and speed; with force or during retreat, changes to `ReturnToHole`.

`Stalker_EmergeFromHole` behavior:

- Works only while hidden.
- Optionally positions the Stalker at the hole.
- Stores the emerge hole and uses `MoveBetweenHoles` or retargets the current hidden movement.

## Emerge and wait-in-hole behavior

`WaitInHole` decides whether to stay, move, play hole effects, reach out, or emerge:

- Passive mode waits much longer before moving to another hole.
- Active mode waits for shorter windows and may enable hole effects during interest alert.
- Increased unpredictability can trigger random emergence with blackboard cooldowns.
- If the player is near and in front of the hole during interest alert, the Stalker can delay warning, emerge, or attack on emerge.
- Reach-out animations can play when the player sees a hole and cooldown allows it.

`MoveBetweenHoles` chooses movement speed:

- Fast mode uses 12 units/s, doubled when far from the player.
- Interest alert or last-known-player shortcuts use 7 units/s.
- Normal hidden movement uses 4 units/s.

At the target hole, active mode with generator off and no save-room block can schedule emergence. Otherwise it changes back to `WaitInHole`.

## Search and hunt flow

Default player detection flow:

- If already detected, player detection changes to `Hunt`.
- If investigating, it changes to `Alert`.
- Otherwise it changes to `PlayerDetected` or directly `Alert` when close.

`PreHunt` leads into `Hunt`. `Hunt`:

- Reveals player position if not already detected.
- Sets alert state to `Detected`.
- Runs at Stalker run speed.
- Registers terror/hunting state with the blackboard.
- Increases sight multiplier and FOV multiplier.
- Repeatedly pursues the last known player position or hide-area kill position.
- Gives up into `PostHunt` after losing the player and reaching the end of path.
- Retreats if the player cannot be reached after repeated failed close attacks.

If the player is hiding, `Hunt` either breaks a breakable connected prop or kills the player through a hide-area animation when close enough. If the player is not hiding, `Hunt` uses line of sight and `GetCanKillPlayer` to choose `KillPlayer` or `ThrowPlayer`.

`PostHunt` temporarily disables senses, plays a frustration/search sequence, then either enters `SearchArea`, registers a new sound investigation, returns to `Hunt`, or exits to `Idle`.

`SearchArea` gathers nearby interesting positions around doors and hide areas, then searches them with walk speed and investigating alert state.

## Generator and save-room behavior

Default messages handle generator state:

- `eCustomEntityMessage_GeneratorTurnedOn`: if the player is not in a save room, switches to passive mode and resets presence.
- `eCustomEntityMessage_GeneratorTurnedOff`: if not in a save room and not recently hurt, switches or refreshes active behavior and can play a delayed roar.

Save-room messages:

- Player enters save room: marks save-room state, records whether Stalker was active, clears investigation/interest, sets pre-blocked state to idle, and switches to passive.
- Player leaves save room: starts a 3-minute counter.
- When the counter expires, if the Stalker was active before save-room entry and is not recently hurt, it switches back to active with reset presence.

`Stalker_GetSaveRoomBehaviorActive` exposes this temporary post-save-room state for map-transfer logic.

## Debug output

`DrawDebugOutput` in `agent_stalker.hps` prints high-signal runtime state:

- escalation
- player distance
- sound counter
- senses active
- mode
- speed state
- alert state
- tenacity
- player sound counts
- recently hurt / hurt by player
- current animation state
- active animation names
- state-specific values for `Stalk`, `WaitInHole`, `MoveBetweenHoles`, and `MapTransfer`

Map scripts can enter the debug state through `_Global_Debug`; `maps/arena/arena.hps` contains an example debug call for `Stalker_1`.

## Notes for modders

- Active/passive is not the same as visible/hidden. A hidden Stalker can be active and preparing to move or emerge.
- Player detection, sound interest, and hole behavior are interlocked. Changing only one state often leaves timers or interest values behind.
- If a Stalker seems inert, verify three things first: active entity, `Stalker` path nodes, and registered `GhoulHole_*` areas.
- For map scripting, prefer changing mode, emerge allowed, tenacity, and hole targets through `helper_agent.hps` instead of forcing arbitrary state-machine names.

