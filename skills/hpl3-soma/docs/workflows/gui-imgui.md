# Workflow — GUI, HUD & ImGui

For: GUI, HUD, menus, terminals, or ImGui (`cImGui*`, `cGui*`, `cWidget*`, `cLuxGui*`).

## Ground first
- Contracts: `script/interfaces/` (`GuiHandler_Interface.hps`, `GuiSet_Interface.hps`, and other `iScr*` GUI contracts).
- Handlers: `script/base/GuiHandler.hps`, `script/base/InputHandler.hps`.
- Helpers: `script/helpers/helper_imgui.hps`, `script/helpers/helper_font.hps`.
- ImGui app examples (SOMA station terminals): `script/custom_depth/helper_custom_depth_imgui/**/*.hps` — e.g. `helper_imgui_station*.hps`, `helper_imgui_station_app_*.hps`, `helper_imgui_cellphone.hps`, `helper_imgui_options.hps`.
- Related modules: `MenuHandler`, `CreditsHandler`, `HintHandler`, `DescriptionHandler`, `InventoryHandler`, `DatamineHandler`.
- Strongest map examples: `maps/main_menu/main_menu.hps`, `maps/_e3/_e3_main_menu/_e3_main_menu.hps`, station-terminal scenes in chapters 1–5.
- Engine API in `hps_api.hps`: `cGui*`, `cWidget*`, `cImGui*`, `cLuxGui*`, input objects.

## Steps
1. Distinguish **immediate-mode ImGui** (terminals, station apps, debug panels) from **retained widgets / GuiSet** (menus, HUD). Pick the matching example family.
2. For an ImGui panel, inspect the closest `helper_imgui_station_app_*.hps` as the pattern — its per-frame build calls and `helper_imgui.hps` usage.
3. For menus/HUD, follow `GuiHandler.hps` + a real menu map, and the relevant handler module.
4. Wire input via `InputHandler.hps` / input objects as the examples do.

## Verify before answering
- Every `cImGui*`/`cGui*`/`cWidget*` identifier is confirmed in `hps_api.hps` or an inspected source.
- ImGui build code is per-frame where the examples are per-frame; retained widgets are created once.
- State what can only be validated visually in-game.
