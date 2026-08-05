# Workflow — Troubleshooting

For: a crash, error, or "it doesn't work" with a log or symptom.

## Get the evidence first
- Ask for the `hpl.log`: Documents → My Games → soma → mods → your-mod-name → `hpl.log`.
- Ask for the exact error text, the map/script involved, and what the user expected vs saw.
- Reference: `wiki/HPL3/Troubleshooting.md`; developer aids in `wiki/HPL3/SOMA/Developer Commands.md` and the Developer Debug Menu page (linked from `Modding.md`).

## Diagnose by symptom
1. **Script/compile error in log** — read the named file and line; confirm the identifier exists in `hps_api.hps` or a source; check declaration-vs-call form and callback signature.
2. **Entity/area not found** — confirm the script name matches the exact name in the `.hpm_Entity`/`.hpm_Area`.
3. **Any other symptom** - Follow common sense

## Verify before answering
- Conclusions are tied to a specific log line or an inspected source file.
- Separate confirmed cause from hypothesis; say which checks the user must run in-game/editor.
- Any `cLux_AddDebugMessage` you suggest is marked temporary.
