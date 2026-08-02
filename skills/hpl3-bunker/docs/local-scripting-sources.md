# Local Scripting Sources

Use these sources before changing or proposing script code.

## Core API and syntax files

See wiki documentation for scripting API and scripting guides.

Core Bunker api can be found in:
`hps_api.hps` file in the base game folder

`.codex/skills/hpl3-modder/references/wiki/HPL3/Amnesia The Bunker/Game Framework - Important` - This is EXTREMELY important in order to undersatnd the game framework, do not skip this!
`.codex/skills/hpl3-modder/references//HPL3/Amnesia The Bunker/Scripting/**/`
`.codex/skills/hpl3-modder/references//HPL3/Amnesia The Bunker/Scripting/**/Scripting Api`


## important note
It is important to read the AgnelScript Fundementals Guide and Scripting Guide under wiki/hpl3/scripting


## Project script locations

- Game Framework: Everything inside `script/**/*.hps` AND `Wiki/hpl3/Amnesia The Bunker/Game Framework - Important`
- Primary map scripts: `maps/**/*.hps`
- Additional mod scripts: scan mod directories for `*.hps` when present.

## Recommended discovery commands

```powershell
rg --files -g "*.hps" maps
rg --files -g "*.hps" mods
rg -n "Function|void|OnStart|OnEnter|OnLeave" maps -g "*.hps"
rg -n "ExactEntityName" maps mods -g "*.hps" -g "*.hpm_Entity"
rg -n "ExactAreaName" maps mods -g "*.hps" -g "*.hpm_Area"
Select-String -Path "path/to/map.hpm" -Pattern 'Name="ExactEntityOrAreaName"' -Context 0,40
```

## Working rule

- Read the closest existing script files in the same map or system area first.
- Reuse the local callback and helper style unless the user requests a different pattern.
- For existing/copy-derived maps, search exact object names in both `.map` and `.hps` files and follow the full behavior sequence before replacing it with a smaller script.
