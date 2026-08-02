# Wiki Guidance For Non-Scripting Tasks

Use wiki documentation as primary evidence for:

- Scripting API
- Mod config setup
- Level editor and map creation workflow
- Asset import and pipeline steps
- Packaging and launcher behavior
- General HPL2 modding practices that are not script-specific

## Required behavior

- Prefer wiki-backed answers over memory.
- If a claim is not supported by available wiki material, mark it as unknown.
- Ask for clarification when critical inputs are missing (game/mod version, file path, current config, target outcome).
- Do not infer undocumented behavior.

## Local map-authoring notes

- Many Amnesia wall static-object meshes are visually one-sided. Verify the rendered side/normal against stock map examples before placing repeated wall segments. For mansionbase wall defaults, the visible side faces the asset's local positive Z direction; back walls at positive world Z typically need a Y rotation near `-3.14159` to face into the room.

## If information is missing

Ask the user for:

- Relevant wiki link or section
- Exact target file path
- Engine/game version
- Current error message or observed behavior
