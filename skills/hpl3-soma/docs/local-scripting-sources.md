# Local Scripting Sources

Use these sources before changing or proposing script code.

## Core API and syntax files

See wiki documentation for scripting API and scripting guides.

Core SOMA api can be found in:
`hps_api.hps` file in the base game folder
`Wiki/hpl3/SOMA/Scripting/**/`
`Wiki/hpl3/SOMA/Scripting/**/Scripting Api`

## important note
It is important to read the AgnelScript Fundementals Guide and Scripting Guide under wiki/hpl3/scripting


## Game script locations

- Game Framework: Everything inside `script/**/*.hps`. Relevant for Player, Agents, Props, Effects, Utilities, Custom Agents/Props, interfaces, critters, base, areas, modules, etc.
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
- For existing/copy-derived maps, search exact object names in both `.hpm` and `.hps` files and follow the full behavior sequence before replacing it with a smaller script.
