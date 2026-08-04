# Shotgun Behaviour

This document covers the stock shotgun behavior in `cScrPropShotgun` and the shotgun player states.

## Source files

- `script/custom/props/Prop_Shotgun.hps`
- `script/custom/props/Prop_Weapon_Base.hps`
- `script/custom/helpers/helper_gun.hps`
- `script/custom/player/PlayerState_UsingShotgun_Aim.hps`
- `script/custom/player/PlayerState_UsingShotgun_Reload.hps`
- `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps`
- `script/custom/player/PlayerState_UsingWeapon_Reload_Base.hps`
- `entities/bunker/gameplay/trench_shotgun/trench_shotgun_body/trench_shotgun_hand.ent`
- `config/Inventory.cfg`

## Runtime state

`cScrPropShotgun` extends `cScrPropWeapon_Base`.

Confirmed state:

- `glShotgun_MagazineCapacity` is `6`.
- `mlMagazineCount` stores shells in the magazine.
- `mbChamberedShell` stores whether a shell is currently chambered.
- Visible submeshes include the chamber shell, spent chamber shell, magazine shell, and temporary reload shell.

The shotgun does not track individual shell objects like the revolver tracks six chambers. It tracks magazine count plus one chambered-shell boolean.

## Save, load, and map-transfer guard

Confirmed behavior:

- `Save` serializes magazine count and chambered shell through `MapTransfer_SaveState_Shotgun`.
- `Load` restores them through `MapTransfer_LoadState_Shotgun`.
- `_Global_CopyFromItemEntity` and `_Global_CopyValues` copy magazine/chamber state through global args when item data is copied between entity representations.

`Load` also handles `Shotgun_ChamberShell`, a global bool guard:

- If `Shotgun_ChamberShell` is true during load and `mlMagazineCount > 0`, the script decrements magazine count, sets `mbChamberedShell = true`, saves, and clears the guard.
- The guard is set during reload when a shell has been inserted but the shotgun did not yet chamber it.
- The guard is cleared during pump action.

Inference from control flow: this is a transition guard for map changes during reload, preventing a shell from disappearing if the player leaves a map after insertion but before pump/chamber completion.

## Firing flow

The aim player state starts the shot:

1. `cScrPlayerState_UsingShotgun_Aim::OnUse` checks `Gun_GetCanFire("Shotgun")`.
2. It calls the shared weapon aim `OnUse`.
3. The shared aim state sends `eGunEvent_FireStart` through `Gun_TriggerEvent`.
4. It chooses a shotgun fire animation or empty fire animation.
5. If the shot is valid, it spawns 9 `eBulletType_Shotgun` pellets with randomized spread.
6. It increments shotgun-shell stats, starts rumble, and can start extra FOV shake when reduced camera motion is disabled.

The held shotgun prop receives `eGunEvent_FireStart` and sets `mbChamberedShell = false`. The next shot is dry unless reload/pump state chambers another shell.

## Can-fire and loaded queries

`_Global_GetCanFire` returns `mbChamberedShell`.

`_Global_GetHasSpentBullets` always returns false for shotgun. The shotgun does not use the revolver spent-round clearing path.

`_Global_GetShellIsChambered` exposes `mbChamberedShell` to the reload state.

`GetFullyLoaded` returns true when `mlMagazineCount >= glShotgun_MagazineCapacity`. It does not include the chambered shell in the capacity check.

## Reload flow

`cScrPlayerState_UsingShotgun_Reload` supplies shotgun-specific animation names and socket handling while reusing the shared reload state machine.

Confirmed behavior:

- `msWeaponType` is `Shotgun`.
- `msAmmunitionType` is `ShotgunAmmunition`.
- Reload uses shotgun-specific intro, loop, start reload, reload shell, and outro animations.
- On enter, it aligns the shotgun with the left hand socket.
- On outro, it aligns the shotgun back to the right hand.
- When entering `EndReload`, it chooses a simple ending if `Shotgun_GetShellIsChambered` is true, otherwise a pump ending.

Relevant animation-message events from `trench_shotgun_hand.ent`:

- `ReloadEnd` sends event `3`.
- `ShowReloadBullet` sends event `7`.
- `HideReloadBullet` sends event `8`.
- `HideShell` sends event `9`.
- `ShowShell` sends event `10`.
- `PumpAction` sends event `12`.
- `FeedNewShell` sends event `13`.

## Reload and pump event behavior

`cScrPropShotgun::HandleEvent` handles shotgun events as follows:

- `ShotgunFeedNewShell`: shows the temporary reload shell and shows the magazine shell only when more than one shell remains in the magazine.
- `HideReloadBullet`: increments `mlMagazineCount` up to capacity, updates visibility, sets `Shotgun_ChamberShell` if no shell is chambered, and removes one `ShotgunAmmunition` item from inventory.
- `HideEjectedBullet`: hides both chamber shell submeshes.
- `ShowEjectedBullet`: shows both chamber shell submeshes.
- `ShotgunPumpAction`: if magazine count is greater than zero, decrements magazine count and sets `mbChamberedShell = true`; then updates visibility and clears `Shotgun_ChamberShell`.
- `FireStart`: clears `mbChamberedShell`.

The base weapon class refreshes bullet visibility for shared reload events, but the shotgun subclass owns the shell-specific state changes.

## Shell visibility

`UpdateBulletVisibility` does the normal shotgun visual reset:

- Shows the unspent chamber shell when `mbChamberedShell` is true.
- Shows the magazine shell when `mlMagazineCount > 0`.
- Hides the spent chamber shell.
- Hides the temporary reload shell.

`SetSubmeshVisible` is defensive: it looks up a submesh by name and only changes visibility if the submesh exists.

## Notes for modders

- Adding `ShotgunAmmunition` only affects reserve ammo. The gun still cannot fire unless `mbChamberedShell` is true.
- Reload insertion and pump action are distinct. Inserting a shell increases `mlMagazineCount`; pump action moves one shell from magazine to chamber.
- If a shell disappears after map transfer, inspect the `Shotgun_ChamberShell` global guard and whether reload animation events reached `HideReloadBullet` and `ShotgunPumpAction`.

