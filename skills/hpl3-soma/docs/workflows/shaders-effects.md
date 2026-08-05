# Workflow — Shaders & Effects

For: shaders, materials, post effects, particles, rendering.

## Ground first
- Shader wiki: `wiki/HPL3/Shaders/` — `HPSL Shading Language.md`, `Overwriting Existing Shaders.md`; overview `wiki/HPL3/Shaders.md`.
- Shader sources: `core/shaders/` (incl. `core/shaders/hpsl/*.hpsl`), `editor/shaders/`.
- Materials/particles wiki: `wiki/HPL3/SOMA/Materials.md`, `wiki/HPL3/SOMA/Particles.md`.
- Effect scripts: `script/effects/` (15 files), `script/helpers/helper_effects.hps`, `custom_depth/helper_custom_deathfx.hps`.
- Effect modules: `DistortionEffectsHandler`, `HighlightEffectHandler`, `LightFlashHandler`, `MapEffectsHandler`, `TerrainParticleHandler`.
- Effect areas: `Area_AmbientLight.hps`, `Area_Distortion.hps`, `LiquidArea_Default.hps`.

## Steps
1. Separate the layers: **HPSL shader code** (`.hpsl`/`.glsl`), **material** (`.mat`), **script-driven effect** (`script/effects/`, effect modules/areas).
2. For shader edits, prefer overriding per `Overwriting Existing Shaders.md`; inspect a real `core/shaders/hpsl/*.hpsl` before writing HPSL.
3. For script-driven effects, inspect the closest `script/effects/*.hps` or effect module and reuse `helper_effects.hps`.
4. For particles/materials, cite the SOMA wiki page and a real asset, not memory.

## Verify before answering
- HPSL syntax and uniforms are confirmed against `HPSL Shading Language.md` and a real shader file.
- Override procedure follows the wiki, not an invented path.
- Every effect-script identifier is confirmed in `hps_api.hps` or an inspected source.
- State what requires the editor/renderer to validate.

## Escalation
Importing the material/texture/particle asset via editors → `assets.md`.
