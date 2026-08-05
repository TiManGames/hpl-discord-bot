# Workflow — Agents & Custom Enemies

For: creating or customizing an enemy, creature, agent, or AI behavior.

## Corpus locations
- Reusable bases: `script/agents/` — `Agent_Humanoid.hps` (the `cScrAgentHumanoid : iScrAgent` base), `Agent_Humanoid_NPC.hps`, `Agent_SwimBot.hps`.
- Concrete SOMA creatures/robots/companions: `script/custom_depth/agent_*.hps` (e.g. `agent_flesher.hps`, `agent_construct_*.hps`, `agent_anglerfish.hps`, `agent_deepsea_suit.hps`).
- Critters: `script/critters/` and `custom_depth/critter_*.hps`.
- Contract: `script/interfaces/Agent_Interface.hps`.
- Helpers: `script/helpers/helper_ai.hps`, `custom_depth/helper_custom_depth_ai*.hps`.
- Engine API in `hps_api.hps`: `cLuxAgent`, `cLuxPathfinder`, `cAINode`, `cAI_*`, character-body, perception/collision.
- Repel area: `script/areas/Area_AgentRepel.hps`.

## Steps
1. Map the request to a base or an existing concrete agent. If the user names a creature by lore term, resolve it via SKILL.md's lore→file mapping (e.g. "disco head monster" → flesher), then open that `custom_depth/agent_*.hps`.
2. Inspect the closest existing concrete agent as the pattern to follow — its `#include` of an `Agent_*` base, its `SETTINGS`/const block (music, barks, sounds), and which base methods it overrides (`Init`, `SetupCharBody`, state/perception hooks).
3. For a new enemy, subclass or copy the nearest base and change only the verified settings and overrides. Keep the class/interface inheritance (`iScrAgent`, `iScrAgent_Interface`) intact.
4. For behavior changes, follow the actual method chain — character-body setup, gravity/mass/push, perception, pathfinding, state transitions — not just a single setter.
5. Confirm agent registration/spawn wiring (how the map activates the agent) before claiming it will appear or run.

## Verify before answering
- Every `cLuxAgent`/`cAI_*`/character-body identifier is confirmed in `hps_api.hps` or an inspected source file — not from memory.
- Base includes and interface inheritance are preserved.
- Secondary effects that make the enemy visibly work (sounds, barks, char-body config, perception setup) are kept, not dropped for a minimal stub.
- State any behavior that can only be validated in-editor/in-game.
