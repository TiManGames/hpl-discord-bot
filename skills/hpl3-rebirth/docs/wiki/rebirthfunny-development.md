# RebirthFunny Development Notes

Use these rules when working on `mods/RebirthFunny`.

## Goal

`RebirthFunny` is a comedic Amnesia Rebirth mod that adds laugh tracks and
audience-response sounds at the most inappropriate dramatic moments: emotional
beats, deaths, panic, stress, ominous reveals, failed hope, and serious story
turns.

The joke should come from contrast. Keep the stock scene intact and let the
added sound land where the base game expects seriousness.

## Scope

- Work one map at a time.
- Preserve stock map flow, voices, music, timers, callbacks, entity behavior,
  sketchbook behavior, radio behavior, heat behavior, and level transitions.
- Prefer adding sound calls, voice callbacks, and small repeat guards.
- Avoid unrelated refactors.
- Do not add FMOD or sounddata content.
- Do not edit global `.lang` files unless the user explicitly asks.
- Do not copy `.lang` or `.voice` files unless the user explicitly asks. If the
  user has copied a mod-local `.voice` file, it may be edited in place.

## Source Pass

Before choosing laugh placements for a map, read:

1. The map `.hps`, including sequences, timers, callbacks, repeated bark logic,
   and transition code.
2. Relevant entries from `config/lang_main/english.lang`.
3. The same-folder map `.voice` file, or the generated voice index if present.
4. Existing RebirthFunny patterns in nearby edited maps and
   `mods/RebirthFunny/script/helpers/helper_funny.hps`.

For `.voice` files, prefer generating an index first:

```powershell
.\.codex\skills\hpl3-modder\scripts\extract_voice_lines.ps1 `
  -VoicePath "mods\RebirthFunny\maps\chapter_01\01_01_plane_wreckage\01_01_plane_wreckage.voice"
```

The index is only for navigation. Actual callback attributes still belong in the
mod-local `.voice` file.

## Shared Laugh Helper

All map scripts should use the shared helper:

```cpp
#include "helpers/helper_funny.hps"
```

Use:

- `Funny_PlayLaugh(eFunnyLaugh_Generic)`
- `Funny_PlayLaugh(eFunnyLaugh_Major)`
- `Funny_PlayLaugh(eFunnyLaugh_Aww)`
- `Funny_PlayLaugh(eFunnyLaugh_OhhNaughty)`
- `Funny_PlayLaugh(eFunnyLaugh_Cheer)`
- `Funny_PlayLaughDelayed(...)` when a line or event needs a timed offset.

Keep `/script` and `/sounds` registered in `mods/RebirthFunny/resources.cfg`.
Do not reintroduce map-local `Sound_PlayGui("laugh_1.ogg", ...)` wrappers.

## Sound Selection

- `Generic`: awkward tension, minor panic, uncomfortable pauses, normal stress, random funny handler
- `Major`: deaths, major tragedy, crashes, explosions, big horror reveals.
- `Aww`: tender, sentimental, intimate, pathetic, or tragic moments. Also, use it in the birth scene or baby-related scenes.
- `OhhNaughty`: intimacy, awkward relationship lines, body-horror innuendo, or
  moments where the wrong audience reaction is funniest.
- `Cheer`: catastrophic success, hard impacts, false hope, survival claims that
  are about to age badly, and absurdly triumphant crashes.

Use the type that creates the strongest ironic contrast. Repetition is fine when
the scene is escalating, but repeated gameplay barks need guards.

## Voice Callback Workflow

When a laugh should follow a specific voice line:

1. Add a `Callback="Funny_On<Map>VoiceLine"` attribute to that exact `<Line>` in
   the copied mod-local `.voice` file.
2. Preserve all original text, filenames, padding, offsets, priorities, and
   statuses.
3. Implement a small map-local dispatcher in the `.hps`:

```cpp
void Funny_OnMapVoiceLine(const tString&in asScene,
						  const tString&in asSubject,
						  int alLineIndex,
						  bool abStartOfLine)
{
	if (abStartOfLine)
		return;

	if (asSubject == "Dialogue_Example" && alLineIndex == 0)
		Funny_PlayLaugh(eFunnyLaugh_Major);
}
```

Default to line-end laughs by returning when `abStartOfLine` is true. Use
start-of-line only when the sound must interrupt or collide with the line for the
joke.

Use subject name plus line index for routing. Avoid matching localized text.
For random subjects, repeated barks, radio loops, heat barks, and shouts, add
small one-shot flags so the callback cannot spam.

After editing a `.voice` file, regenerate the voice index and validate that the
callback column shows the intended lines.

## Map Script Workflow

- Add direct sequence/event laughs near the existing event code when the timing
  is script-driven.
- Add voice callbacks when the timing belongs to a spoken line.
- For delayed laughs, use `Funny_PlayLaughDelayed(...)` plus a tiny map-local
  `OnTimer_FunnyLaugh` dispatcher when the map needs timer user vars.
- Keep new state variables local to the map script unless persistent cross-map
  behavior is explicitly needed.
- Do not create a user module for simple sound selection or one-shot map flags.

## Static Checks

Before calling a map pass done:

- Confirm the map includes `helpers/helper_funny.hps`.
- Confirm no new `laugh_1.ogg` references were added.
- Confirm no map-local replacement for the shared helper was added.
- Confirm edited `.voice` XML still parses.
- Regenerate the `.codex/voice-index/*.voice.md` file for any edited `.voice`.
- Confirm `resources.cfg` still includes `/maps`, `/script`, and `/sounds`.
- Confirm level-door and map-transition code was not changed except when the
  task explicitly requires it.

## Runtime Checks

When possible, launch the mod from a fresh start or from the target map and
verify:

- Each intended laugh plays once at the intended beat.
- Repeated barks do not spam.
- No missing sound errors appear in the log.
- Stock progression still works.
- The map still transitions to the next stock target.
