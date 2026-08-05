# Workflow — Entities

For: creating or editing an entity (`.ent`), its type, or its components.

## Ground first
- Wiki: `wiki/HPL3/SOMA/Entities/` — `Entity Notes.md`, `Model Editor Outline.md`, `Physics Body Properties.md`; plus `wiki/HPL3/Scripting/Entity Components.md`.
- Entity type registration: `config/EntityTypes.cfg`.
- Script-side entity/base types: `script/base/` (`Base_Types.hps`), `script/interfaces/`.
- Props (entity behavior in script): `script/props/`, `script/helpers/helper_props.hps`.
- Real examples: entities referenced across `maps/chapter00`–`chapter05`.

## Steps
1. Separate the two layers: the **`.ent` asset** (model, physics body, components — authored in Model Editor) vs the **script class** that gives it behavior (`prop_*` / handler).
2. For entity types, read `config/EntityTypes.cfg` for the real type name before stating it.
3. For components, use `wiki/HPL3/Scripting/Entity Components.md` and inspect a real prop that uses the component.
4. For a new prop behavior, inspect the closest existing `script/props/*.hps` as the pattern; preserve its includes and interface inheritance.
5. For physics body properties, cite `Physics Body Properties.md`, not memory.

## Verify before answering
- Entity type names come from `EntityTypes.cfg`; component names from the wiki/a real entity.
- Model-Editor steps are quoted from `Model Editor Outline.md`, not invented.
- Every script identifier is confirmed in `hps_api.hps` or an inspected source.
- State what can only be validated in the Model/Level Editor.

## Escalation
Authoring the model/material asset itself → `assets.md`. Scripting the entity's in-level behavior → `level-scripting.md`.
