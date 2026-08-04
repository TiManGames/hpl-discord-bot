# Revolver Behaviour

This document covers the stock revolver behavior in `cScrPropGun` and the revolver player states.

## Source files

- `script/custom/props/Prop_Gun.hps`
- `script/custom/props/Prop_Weapon_Base.hps`
- `script/custom/helpers/helper_gun.hps`
- `script/custom/player/PlayerState_UsingGun_Aim.hps`
- `script/custom/player/PlayerState_UsingGun_Reload.hps`
- `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps`
- `script/custom/player/PlayerState_UsingWeapon_Reload_Base.hps`
- `entities/bunker/gameplay/revolver/revolver_hand.ent`
- `config/Inventory.cfg`

## Runtime state

`cScrPropGun` extends `cScrPropWeapon_Base`.

Confirmed state:

- Six `cBulletChamber` entries are created in `Init`.
- Each chamber has a bullet mesh name, bone name, default local transform, and `eBulletChamberState`.
- Chamber states are `Empty`, `Unspent`, and `Spent`.
- `mlCurrentChamberId` starts at `2`.
- `mfCylinderAngle` stores the base cylinder angle.
- `mfExtraCylinderAngle` and `mlCylinderStepsToWantedChamber` animate/queue cylinder motion.
- `mlCylinderRotationsQueued` delays/queues cylinder rotation after firing until animation-over handling catches up.

The visible bullet meshes are named `Bullet_000` through `Bullet_005`; the temporary reload bullet mesh is `Bullet_006`.

## Save, load, and copy

Confirmed behavior:

- `Save` serializes the current chamber ID, cylinder angle, and six chamber states through `MapTransfer_SaveState_Gun`.
- `Load` restores the same data through `MapTransfer_LoadState_Gun` and then calls `UpdateBulletVisibility`.
- `_Global_CopyFromItemEntity` and `_Global_CopyValues` copy chamber/cylinder state through global args when item data is copied between entity representations.
- `_Global_OnItemTakenOut` calls the base implementation, then `ForceCylinderRotationToFirstBullet`.

Modding implication: when revolver state looks wrong after pickup, drop, map transfer, or held-entity spawn, trace both item data copy functions and map-transfer save/load. The ammo state is not just the count of `Ammunition` items.

## Firing flow

The aim player state starts the shot:

1. `cScrPlayerState_UsingGun_Aim::OnUse` checks `Gun_GetCanFire("Gun")`.
2. It calls the shared weapon aim `OnUse`.
3. The shared aim state sends `eGunEvent_FireStart` through `Gun_TriggerEvent`.
4. It chooses a revolver fire animation or empty fire animation.
5. If the shot is valid, it spawns one `eBulletType_Revolver` bullet from the muzzle orientation.
6. It increments bullet-fire stats and starts rumble.

The held revolver prop receives `eGunEvent_FireStart`:

- It marks the current unspent chamber as `Spent`.
- If there is a queued rotation from a previous shot, it applies it.
- It increments `mlCylinderRotationsQueued`.

`OnRecieveMessage` handles `eLuxEntityMessage_AnimationOver` and applies any queued cylinder rotation after firing animations complete.

## Can-fire and spent-bullet queries

`_Global_GetCanFire` returns true only if the current chamber state is `Unspent`.

`_Global_GetHasSpentBullets` scans all six chambers and returns true if any chamber is `Spent`. The reload base uses this to enter the spent-round-clearing state before normal reload/check flow.

`_Global_GetUnspentBulletCount` returns the number of chambers in `Unspent` state.

`_Global_GetCurrentChamberEmpty` returns whether the current chamber is `Empty`.

## Reload flow

The reload state is split between `PlayerState_UsingWeapon_Reload_Base.hps`, `PlayerState_UsingGun_Reload.hps`, revolver hand entity animation events, and `cScrPropGun`.

Confirmed state flow:

- On reload state enter, the shared reload base sends `eGunEvent_OpenCylinder`.
- If any spent bullets exist, the shared reload base enters `eUsingGun_ReloadState_EmptyBullets`.
- `cScrPlayerState_UsingGun_Reload::SetupReload` returns false if the gun is fully loaded or no `Ammunition` is present.
- If the current chamber is empty, it enters `InsertBullet`.
- If the current chamber is not empty, it enters or repeats `Spin` until `Revolver_GetCurrentChamberEmpty` becomes true.

Relevant animation-message events from `revolver_hand.ent`:

- `AlignCylinderForReload` sends event `14`.
- `CloseCylinder` sends event `6`.
- `ReloadEnd` sends event `3`.
- `ShowReloadBullet` sends event `7`.
- `HideReloadBullet` sends event `8`.
- `Spin` sends event `4`.
- `EmptyBullets` sends event `2`.

## Reload event behavior

`cScrPropGun::HandleEvent` handles revolver events as follows:

- `ShowReloadBullet`: shows the temporary reload bullet mesh.
- `HideReloadBullet`: sets the current chamber to `Unspent`, updates visibility, and removes one `Ammunition` item from inventory.
- `ReloadEnd`: rotates the cylinder one step.
- `Spin`: rotates the cylinder one step.
- `OpenCylinder`: rotates one step right when the current animation state exists, matching the animation setup.
- `AlignCylinderForReload`: rotates until the first non-unspent chamber is aligned.
- `CloseCylinder`: calculates how many animated steps are needed to align unspent chambers after closing.
- `EmptyBullets`: changes all `Spent` chambers to `Empty` and updates visibility.

The base weapon class also refreshes bullet visibility for `EmptyBullets` and `HideReloadBullet`.

## Cylinder and visibility behavior

`RotateCylinder` changes `mlCurrentChamberId`, updates `mfCylinderAngle`, and optionally updates cylinder rotation immediately.

`UpdateCylinderRotation` applies cylinder rotation to the relevant mesh/bones. `OnPostUpdate` also advances animated extra cylinder rotation when `mlCylinderStepsToWantedChamber` is active.

`OnAfterAnimationUpdate` protects unspent rounds during the remove-bullets animation by restoring their bone matrices, so only spent bullets visually fall out.

`UpdateBulletVisibility` shows chamber meshes based on chamber state and hides the temporary reload bullet by default.

`GetFullyLoaded` returns true only when all chambers are `Unspent`.

## Notes for modders

- To preload or script-load a chamber, use `Revolver_LoadChamber` rather than only adding `Ammunition`.
- Dry firing happens at the player-state layer when `Gun_GetCanFire` is false; it still plays dry-fire animation/sound but should not spawn a projectile.
- A mismatch between visible bullets and inventory ammo usually means the chamber state, reload animation event, or copy/save/load path is out of sync.

