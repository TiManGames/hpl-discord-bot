# Scripting Behavior Checklist

Use this checklist before editing or proposing HPL2 `.hps` behavior.

## Trace the target behavior

- Search exact entity, area, item, timer, and callback names in the relevant `.map` and `.hps` files.
- If the map was copied from base game content, read the source map's matching `.hps` implementation for the same object names.
- Treat callbacks as entry points, not full behavior. Follow timers, helper functions, global/local variables, effects, physics calls, and callback removal.
- Inspect map/user variables for the target entity or area when behavior depends on editor setup such as locked state, open amount, connected props, interaction callbacks, area type, active state, or start position.

## Avoid incomplete API-only fixes

- Do not assume one setter fully expresses visible gameplay behavior when stock scripts use a sequence of calls.
- Preserve required secondary effects when they are part of the behavior: timers, forces, impulses, move-object states, particle systems, sounds, sanity/player reactions, active-state changes, and callback cleanup.
- When replacing an existing behavior with a smaller demo behavior, explicitly decide which original dependencies are still required for the object to visibly work.

## Verify script wiring

- Confirm the script file name matches the map file name.
- Confirm the target names in script constants/calls match exact names in the `.map`.
- Confirm the callback signature matches the engine function that invokes it.
- Confirm one-shot callbacks are safe with saved game state; advise fresh map/custom-story start when testing consumed callbacks.

## Debug when the callback fires but the result is invisible

- Re-check whether the target object is locked, static, disabled, inactive, blocked, or already in the requested state.
- Look for stock examples using physics calls such as `AddPropForce`, `AddPropImpulse`, `AddBodyForce`, or `AddBodyImpulse`.
- Look for timer loops that keep applying a state change over several frames.
- Add temporary `AddDebugMessage` output only as a diagnostic aid, and remove or clearly mark it when the script is final.

## Output discipline

- Cite the exact source files used for behavioral conclusions.
- Separate documented behavior from assumptions.
- State any runtime validation that still requires the game/editor.
