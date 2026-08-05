# Workflow — Asset Pipeline

For: importing/authoring models, materials, textures, particles via the editors.

## Ground first
- Modeling/entities: `wiki/HPL3/SOMA/Modeling.md`, `wiki/HPL3/SOMA/Entities/Model Editor Outline.md`, `Physics Body Properties.md`.
- Materials/particles: `wiki/HPL3/SOMA/Materials.md`, `wiki/HPL3/SOMA/Particles.md`, `wiki/HPL3/SOMA/Animation.md`.
- Editor assets on disk: `editor/models/`, `editor/textures/`, `editor/shaders/`, `editor/sample_maps/`, `editor/StaticObjectDefaults.lst`.
- Resource/launch config: follow "Resources Configuration" / "Launch Configuration" links from `wiki/HPL3/SOMA/Modding.md`.

## Steps
1. Identify the asset type (model/`.ent`, material/`.mat`, texture, particle, animation) and pick the matching wiki page.
2. Quote the editor workflow steps from that wiki page — Model Editor, Material Editor, Particle Editor — do not invent menu items.
3. For where files must live and how the mod finds them, cite Resources Configuration.
4. Point to a real `editor/` example asset of the same type when helpful.

## Verify before answering
- Editor steps and file locations are quoted from a real wiki/config file.
- Distinguish authoring the asset (this workflow) from scripting its behavior (`entities.md` / `level-scripting.md`).
- State what can only be validated in the editor.
