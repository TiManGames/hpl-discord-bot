# Workflow — Modding Setup

For: environment setup, mod folder layout, config files, packaging, "how do I start a SOMA mod."

## Ground first
Wiki is primary evidence here. Read before answering:
- `wiki/HPL3/SOMA/Modding.md` — index of setup, config, and release pages.
- Follow its links via `search_corpus` for the specific task: "Creating a Mod", "Setup Modding Environment", "MinimalCustomMapMod", "MinimalAddOnMod".
- Config references live in `config/` — `main_init.cfg`, `game.cfg`, `Modules.cfg`, `EntityTypes.cfg`, `database_settings.cfg`, `default_user_settings.cfg`, and the `.lang` files.

## Steps
1. Identify which the user needs: a **custom map mod** (own levels) vs an **add-on mod** (alters base game). They have different minimal layouts — cite the matching Minimal*Mod wiki page.
2. For folder layout and required files, quote the minimal-mod wiki page exactly; do not invent file names or paths.
3. For a config value, open the actual file in `config/` and read the real key before stating its name or default.
4. For launch/resources/language config, follow the "Mod Configuration" links in `Modding.md` (Resources Configuration, Launch Configuration, Language Configuration, Mod Dependencies).
5. For packaging/release, cite the "Releasing" section pages.

## Verify before answering
- File names, folder names, and config keys are quoted from a real corpus file, not memory.
- The mod type (custom map vs add-on) matches the layout you describe.
- If the user's engine/game version or current folder state matters and is unknown, ask.

## Common escalation
If setup is done but the mod won't load or launch, switch to `troubleshooting.md` and ask for `hpl.log`.
