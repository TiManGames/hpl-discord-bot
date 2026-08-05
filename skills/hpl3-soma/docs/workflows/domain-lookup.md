# Domain Lookup — Where SOMA systems live

Use this when you need to locate the right sources for a topic. The key boundary:
use `hps_api.hps` to determine what the engine exposes, `script/` to understand
reusable implementation patterns, and `maps/` to see how systems compose in real levels.

## Topic → sources
- **Helpers** — `hps_api.hps`: wrapped low-level families (`cMath_*`, `cString_*`, `cScript_*`, `cSound_*`, `cResources_*`, `cScene_*`, `cPhysics_*`). Sources: `script/helpers/` (15 files), `script/utilities/`, `script/custom_depth/helper_*.hps`. Nearly every playable map demonstrates helper composition.
- **User Modules** — `hps_api.hps`: `cLuxUserModule`, `iScrUserModule_Interface`, module lookup/lifecycle. Sources: `script/modules/` (22 files), `script/interfaces/UserModule_Interface.hps`, `script/helpers/helper_modules.hps`. Registration in `config/Modules.cfg`. Maps configure or call modules; they should not reimplement them.
- **Player** — `hps_api.hps`: `cLuxPlayer`, `cLuxPlayerState`, `cLuxMoveState`, character-body/camera/input. Sources: `script/player/` (29 files: `Player.hps`, `Player_Types.hps`, `MoveState_*.hps`, `PlayerState_*.hps`), player interfaces, `script/helpers/helper_player.hps`. Secondary: `modules/PlayerEnergyHandler.hps`, `PlayerHandsHandler.hps`, `PlayerPickupHandler.hps`, `PlayerToolHandler.hps`, player-interaction areas and props.
- **NPCs** (narrower than Agents — story characters, not the general AI framework) — dialog, voice, bark, subject, head-tracking APIs. Sources: `script/agents/Agent_Humanoid_NPC.hps`, companion `agent_swimbot_*.hps`, `custom_depth/agent_maggot_girl.hps`, `custom_depth/agent_fixed_human.hps`, `custom_depth/prop_carl_construct.hps`, `custom_depth/prop_catherine_tool.hps`. Maps: story conversations, companions, scripted character scenes.
- **Effects** — post effects, particles, lighting, rendering, screen effects, force emitters. Sources: `script/effects/` (15 files), `script/helpers/helper_effects.hps`, `custom_depth/helper_custom_deathfx.hps`. Related modules: `DistortionEffectsHandler`, `HighlightEffectHandler`, `LightFlashHandler`, `MapEffectsHandler`, `TerrainParticleHandler`, `EmotionHandler`, `WakeHandler`. Related areas: `Area_AmbientLight.hps`, `Area_Distortion.hps`, `LiquidArea_Default.hps`.
- **Base framework** — core world, map, entity, ID, save, event, input, handler types. Sources: `script/base/` (11 files), `script/interfaces/Map_Interface.hps`, handler interfaces, `Base_Types.hps`, `maps/global_init.hps`. Covers lifecycle/infrastructure: map callbacks, input, achievements, event databases, hero stats, rich presence, saving, common types.
- **GUI and Interfaces** — `hps_api.hps`: `cGui*`, `cWidget*`, `cImGui*`, `cLuxGui*`, input objects, `iScr*` contracts. Sources: `script/interfaces/` (19 files), `script/base/GuiHandler.hps`, `script/base/InputHandler.hps`, `script/helpers/helper_imgui.hps`, `script/helpers/helper_font.hps`, `script/custom_depth/helper_custom_depth_imgui/**/*.hps`. Related modules/props: `MenuHandler`, `CreditsHandler`, `HintHandler`, `DescriptionHandler`, `InventoryHandler`, `DatamineHandler`, terminal/readable/HUD props. Strongest map examples: `maps/main_menu/main_menu.hps`, `maps/_e3/_e3_main_menu/_e3_main_menu.hps`, station-terminal scenes throughout chapters 1–5.
- **Agents** — `hps_api.hps`: `cLuxAgent`, `cLuxPathfinder`, `cAINode`, `cAI_*`, critter/mover/perception/collision. Sources: `script/agents/` (reusable humanoid and swimming-agent bases), `script/critters/`, `script/custom_depth/agent_*.hps` and `critter_*.hps` (SOMA's concrete creatures, robots, companions, enemies), `script/helpers/helper_ai.hps`, `custom_depth/helper_custom_depth_ai*.hps`, `script/areas/Area_AgentRepel.hps`. Maps: enemy encounter setup, activation, patrols, scripted movement, state changes.
- **General** — math, strings, XML/config, resources, containers, misc engine facilities. Sources: `script/areas/`, `script/props/`, `script/utilities/`, `helper_general.hps`, `helper_game.hps`, `helper_map.hps`, common custom_depth props/areas/utilities, all normal level scripts under `maps/chapter00`–`maps/chapter05`.

## Map-source grouping
- `maps/chapter00`–`chapter05`: canonical shipped level examples.
- `maps/main_menu`: canonical menu/UI map.
- `maps/_e3`: older E3-version examples.
- `maps/02_06_theta_tunnels_old`: obsolete/backup version; useful for comparison, not as the default reference.
- `maps/global_init.hps`: global initialization rather than level gameplay.
