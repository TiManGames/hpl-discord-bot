# Weapon Framework

This document covers the shared weapon layer used by the revolver and shotgun: weapon item types, ammo item types, player aim/reload states, gun helper functions, weapon prop events, and map-transfer persistence.

## Source files

- `config/Inventory.cfg`
- `config/PlayerStates.cfg`
- `script/custom/player/PlayerTypes_Custom.hps`
- `script/custom/helpers/helper_gun.hps`
- `script/custom/props/Prop_Weapon_Base.hps`
- `script/custom/props/Prop_Gun.hps`
- `script/custom/props/Prop_Shotgun.hps`
- `script/custom/player/PlayerState_UsingWeapon_Aim_Base.hps`
- `script/custom/player/PlayerState_UsingWeapon_Reload_Base.hps`
- `script/custom/player/PlayerState_UsingGun_Aim.hps`
- `script/custom/player/PlayerState_UsingGun_Reload.hps`
- `script/custom/player/PlayerState_UsingShotgun_Aim.hps`
- `script/custom/player/PlayerState_UsingShotgun_Reload.hps`
- `script/modules/MapTransferHandler.hps`
- `entities/bunker/gameplay/revolver/revolver_hand.ent`
- `entities/bunker/gameplay/trench_shotgun/trench_shotgun_body/trench_shotgun_hand.ent`

## Item types and player states

`Inventory.cfg` defines the weapon and ammo item types:

- `Gun`: weapon item, right-hand held entity `revolver_hand.ent`.
- `Shotgun`: weapon item, right-hand held entity `trench_shotgun_hand.ent`.
- `Ammunition`: hidden revolver ammo.
- `ShotgunAmmunition`: hidden shotgun ammo.

`PlayerTypes_Custom.hps` and `PlayerStates.cfg` bind the weapon player states:

- `ePlayerState_Custom_UsingGun_Aim = 67`, registered as `State_UsingGun_Aim`.
- `ePlayerState_Custom_UsingGun_Reload = 68`, registered as `State_UsingGun_Reload`.
- `ePlayerState_Custom_UsingShotgun_Aim = 91`, registered as `State_UsingShotgun_Aim`.
- `ePlayerState_Custom_UsingShotgun_Reload = 92`, registered as `State_UsingShotgun_Reload`.

The weapon states are not declared as `UsingState` values in `Inventory.cfg`. Instead, equip/takeout provides the held weapon entity, and the player state layer switches between aim and reload states through input flow.

## Helper surface

`helper_gun.hps` is the public weapon bridge. It mostly wraps global function calls into the currently held or inventory-backed weapon entity.

Shared helpers:

- `Gun_ShowBulletCount(type, empty, remainOnScreen)` asks `ItemHandler` to show the ammo counter.
- `Gun_TriggerEvent(type, event)` sends an `eGunEvent` to the right-hand held weapon entity if the held type matches.
- `Gun_GetFullyLoaded(type)` queries the weapon prop.
- `Gun_GetHasSpentBullets(type)` queries the weapon prop.
- `Gun_GetCanFire(type)` queries the weapon prop.
- `Gun_GetReloadAnimationDone(type)` queries the weapon prop.
- `Gun_ActivateMuffledEffect`, `Gun_DeactivateMuffledEffect`, and `Gun_GetMuffledEffectActive` route player ear-ringing/hide-mode effect behavior.

Specific helpers:

- `Revolver_GetUnspentBulletCount`
- `Revolver_GetCurrentChamberEmpty`
- `Revolver_LoadChamber`
- `Shotgun_GetShellIsChambered`

## Gun events

`eGunEvent` values are the contract between player states, held weapon entities, and animation message events:

- `FireStart = 0`
- `EmptyBullets = 2`
- `ReloadEnd = 3`
- `Spin = 4`
- `OpenCylinder = 5`
- `CloseCylinder = 6`
- `ShowReloadBullet = 7`
- `HideReloadBullet = 8`
- `HideEjectedBullet = 9`
- `ShowEjectedBullet = 10`
- `ShotgunHammerReset = 11`
- `ShotgunPumpAction = 12`
- `ShotgunFeedNewShell = 13`
- `AlignCylinderForReload = 14`

Confirmed event paths:

- Player state code sends events with `Gun_TriggerEvent`.
- Held weapon `.ent` animation tracks send message events with the same integer values.
- `cScrPropWeapon_Base::OnRecieveMessage` handles `eLuxEntityMessage_AnimationMessageEvent` and forwards the integer into `HandleEvent`.
- Weapon subclasses override `HandleEvent` to mutate chamber/shell state and visibility.

## Shared held weapon prop

`cScrPropWeapon_Base` extends `cScrPropPickup`. It provides the shared global functions expected by `helper_gun.hps` and item handler copy/hand lifecycle:

- `_Global_OnMapLeave` calls `Save`.
- `_Global_OnMapEnter` calls `Load`.
- `_Global_CopyValues` refreshes bullet visibility.
- `_Global_OnItemStartPutAway` and `_Global_OnHeldItemDrop` save state.
- `_Global_OnItemTakenOut` loads state, refreshes bullet visibility, enables animation callbacks, and configures render flags.
- `_Global_GetCanFire`, `_Global_GetHasSpentBullets`, `_Global_GetFullyLoaded`, and `_Global_GetReloadAnimationDone` return weapon prop query state.
- `_Global_TriggerEvent` accepts an integer `eGunEvent` from helpers.

The base class intentionally leaves `UpdateBulletVisibility` and `GetFullyLoaded` to subclasses.

## Aim/fire state

`iScrPlayerState_UsingWeapon_Aim_Base` extends `iScrPlayerState_UsingItem_Base`.

Confirmed responsibilities:

- Uses `eAction_AimGun` as its use action.
- Tracks one-hand/two-hand aim mode and lantern equip/unequip transitions.
- Loads accessibility options for weapon sway and reduced camera motion.
- Applies pitch limits and arm placement offsets.
- Checks whether the gun can be used by sweeping a collision shape near the camera/muzzle.
- On fire input, queries `Gun_GetCanFire`, sends `eGunEvent_FireStart`, chooses gun/player fire animations, plays weapon sounds, spawns fire particle effects, broadcasts `OnGunshot`, and calls `SpawnProjectiles`.
- Holding check-ammo while in toggle aim mode queues the matching reload state.

Weapon subclasses provide projectile and animation differences:

- `cScrPlayerState_UsingGun_Aim` uses `eBulletType_Revolver`, allows lantern use, has 0.4 second shoot cooldown, and spawns one bullet.
- `cScrPlayerState_UsingShotgun_Aim` uses `eBulletType_Shotgun`, disallows lantern use, has 0.85 second shoot cooldown, and spawns 9 pellets with spread.

## Reload/check-ammo state

`iScrPlayerState_UsingWeapon_Reload_Base` also extends `iScrPlayerState_UsingItem_Base`.

Confirmed responsibilities:

- Uses `eAction_CheckAmmo`.
- Enters `EmptyBullets` first when `Gun_GetHasSpentBullets` returns true.
- Sends `eGunEvent_OpenCylinder` on state entry. For shotgun this is harmless unless handled by the subclass/entity.
- Drives a reload state machine: intro, loop/check, start reload, insert bullet/shell, end reload, outro, and revolver-specific spent-round clearing.
- Displays ammo count with `Gun_ShowBulletCount`.
- Queues reload attempts from input when ammo exists and the weapon is not fully loaded.
- Can hand back to aim state when aim input is pressed.

`cScrPlayerState_UsingGun_Reload` supplies revolver animation names and adds chamber-specific behavior: spin until a chamber is empty, insert a bullet, or clear spent shells.

`cScrPlayerState_UsingShotgun_Reload` supplies shotgun animation names, aligns the shotgun between hand sockets, and chooses a simple or pump reload end animation based on `Shotgun_GetShellIsChambered`.

## Persistence and map transfer

Weapon ammo state is not only visual. It is saved by the weapon prop scripts into `MapTransferHandler`:

- `cScrPropGun::Save` calls `MapTransfer_SaveState_Gun(currentChamber, cylinderAngle, chamberStates)`.
- `cScrPropGun::Load` reads that data and restores chamber states and cylinder angle.
- `cScrPropShotgun::Save` calls `MapTransfer_SaveState_Shotgun(magazineCount, chamberedShell)`.
- `cScrPropShotgun::Load` restores magazine count and chambered shell state.

`MapTransferHandler.hps` stores this in `cSaveState_Gun` and `cSaveState_Shotgun`. `ModuleInterfaces.hps` exposes the matching interface functions.

Inference from control flow: the held prop saves on map leave, start put-away, and held item drop, then loads when taken out or when the map enter hook is called. For weapon bugs across map transitions, inspect both the held prop script and `MapTransferHandler`.

## Notes for modders

- Do not update weapon ammo by only removing ammo items. The held weapon prop owns chamber/shell state.
- Do not trigger weapon animation messages manually unless the held right-hand item type matches the intended weapon type.
- When adding a new weapon, the minimum pattern is: item type, hand entity with custom prop script, aim state, reload state, helper/global functions, ammo item type, animation message events, and persistence.

