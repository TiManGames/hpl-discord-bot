# Local Scripting Sources

Use these sources before changing or proposing script code.

## Core API and syntax files

See wiki documentation for scripting API and scripting guides.

## Project script locations

- Primary map scripts: `maps/**/*.hps`
- Global map bootstrap: `maps/main/global.hps` and `maps/main/inventory.hps`
- Additional mod scripts: scan mod directories for `*.hps` when present.

## Recommended discovery commands

```powershell
rg --files -g "*.hps" maps
rg --files -g "*.hps" mods
rg -n "Function|void|OnStart|OnEnter|OnLeave" maps -g "*.hps"
rg -n "ExactEntityOrAreaName" maps custom_stories -g "*.hps" -g "*.map"
Select-String -Path "path/to/map.map" -Pattern 'Name="ExactEntityOrAreaName"' -Context 0,40
```

## Working rule

- Read the closest existing script files in the same map or system area first.
- Reuse the local callback and helper style unless the user requests a different pattern.
- For existing/copy-derived maps, search exact object names in both `.map` and `.hps` files and follow the full behavior sequence before replacing it with a smaller script.
