# Player Item Framework

This document covers the stock player item framework: inventory type data, pickups, inventory entries, held entities, hand state, and generic item use.

## Source files

- `config/Inventory.cfg`
- `script/custom/modules/ItemHandler.hps`
- `script/custom/helpers/helper_items.hps`
- `script/custom/player/ItemCallbacks.hps`
- `script/custom/player/PlayerState_UsingItem_Base.hps`
- `script/custom/props/Prop_Pickup.hps`
- `config/PlayerStates.cfg`
- `script/custom/player/PlayerTypes_Custom.hps`

## Inventory type model

`Inventory.cfg` is the main data source for stock player items. Each `<ItemType>` can define:

- `<Inventory>`: icon, alternate icon, pickup icon, `CanDrop`, `Hidden`, and `IsWeapon`.
- `<Use>`: `OnSelf`, `OnWorld`, `CanUse`, `RequiredToUseItem`, `UsingState`, and optional map callback names.
- `<Hands>`: held entity file, drop entity file, left-hand flag, arm animation flags, light-source flag, parent bone rotation, scale, accessory data, and equip/unequip toggle delays.
- `<Bulk>`: stack/container metadata read by `cItemType` and `cItemEntry`.

Confirmed examples from `Inventory.cfg`:

- `Gun` has `IsWeapon="true"`, `OnWorld="true"`, and `EntityFile="revolver_hand.ent"`.
- `Shotgun` has `IsWeapon="true"`, `OnWorld="true"`, and `EntityFile="trench_shotgun_hand.ent"`.
- `Ammunition` and `ShotgunAmmunition` are `Hidden="true"` and are counted through inventory helpers instead of visible item grid slots.
- `DynamoLantern` is a left-hand light source through `LeftHand="true"` and `LightSource="true"`.

## Runtime data classes

`ItemHandler.hps` parses the config and owns runtime item data:

- `cItemType` wraps an `<ItemType>` XML element and exposes config reads such as `GetInventoryIcon`, `GetIsWeapon`, `CanUseOnSelf`, `CanUseOnWorld`, `GetUsingState`, `GetHandEntityFile`, and `GetDropEntityFile`.
- `cItemEntry` stores one runtime inventory item: ID, type, amount/fullness, health, disabled-use flags, and internal entity data.
- `cInventory` owns an inventory instance and item list.
- `cScrItemHandler` is the user module that coordinates inventory instances, pickup/drop/spawn, hand state, use callbacks, map enter/leave, and UI counters.

`helper_items.hps` is the public map/helper surface. Most scripts should call helpers such as `Item_AddToInventory`, `Item_PickUpEntity`, `Item_TakeOut`, `Item_Equip`, `Item_Unequip`, `ItemType_GetCountInInventory`, and `ItemType_GetFirstInInventory` instead of directly reaching into `cScrItemHandler`.

## Pickup flow

World pickup entities normally use `cScrPropPickup` from `Prop_Pickup.hps`.

Confirmed flow:

1. `cScrPropPickup::SetupAfterLoad` reads `ItemType`, `ContentSubType`, `ContentLevel`, `OnlyNeedOne`, `PutAwayAfter`, pickup sound, and pickup flags from entity and instance variables.
2. It stores the resolved type in the entity variable `Item_Type`.
3. `CanInteract` blocks pickup visually when the item does not fit or when `OnlyNeedOne` is already satisfied.
4. `OnInteract` calls `PickUp`.
5. `PickUp` calls `cScrItemHandler::PickUpEntity`.
6. `PickUpEntity` reads the entity item type, adds a runtime item to player inventory, copies entity data into the item, calls `ItemCallbacks.OnPickUp`, destroys or deactivates the world entity, starts pickup GUI animation, and optionally takes the item out.

Important detail: item data is copied across representations. The handler uses `CopyEntityToItemData`, `CopyItemDataToEntity`, and `CopyItemEntityInfo` to preserve values such as content subtype/level, health, disabled-use state, and custom prop data. Weapon props extend this with their own global copy functions.

## Adding, removing, dropping, and spawning

Common helper calls:

- `Item_AddToInventory(type)`: creates a runtime inventory item by type.
- `Item_AddManyToInventory(type, count)`: adds multiple items, used for ammo.
- `Item_RemoveFromInventory(itemID)`: removes one item or one stack amount unless asked to remove a whole bulk entry.
- `ItemType_RemoveFromInventory(type, count)`: removes by item type.
- `Item_DropAsEntity(itemID)`: spawns the configured drop entity near the camera, removes the item from inventory, sets pickup/save/transfer flags, wakes physics, and applies a small impulse.
- `ItemType_SpawnAsEntity(type, transform, name, scale, spawn, spawnType)`: spawns by type using config entity files.

`SpawnTypeAsEntity` chooses the entity file from the item type:

- default spawn: `GetHandEntityFile`
- accessory spawn: `GetAccessoryEntityFile`
- drop spawn: `GetDropEntityFile`

After creation it sets script/save flags and calls `SetEntityItemType`, so spawned entities should not rely only on raw `.ent` defaults.

## Held items and hand state

The item handler tracks each hand with `cScrItemHandlerHand` and `eHeldItemState`:

- `None`
- `TakingOut`
- `PuttingAway`
- `Held`

`cItemType::GetEquipHand` returns left or right based on the `<Hands LeftHand="true">` flag. Without that flag, items default to the right hand.

Confirmed equip flow:

1. `Item_Equip(itemID)` calls `cScrItemHandler::Equip`.
2. `Equip` rejects use if player item equip is disabled, if the item does not exist, if a required item is missing, or if the type cannot be used on self/world.
3. If a self-use item has no arm animation, `Equip` can use it directly without spawning a held entity.
4. Weapon types set `msLastWeaponUsed` to the type ID.
5. Physical use items call `TakeOut`.
6. `TakeOut` spawns a held entity using the item type hand entity file, disables collision/interaction, puts it on `glArmsRenderLayer`, copies item data into the entity, calls held-item callbacks, and switches the hand to `TakingOut`.
7. `UpdateHeldItems` advances the hand through draw/idle/holster animations and calls put-away callbacks when the holster phase ends.

`PutAway` switches a hand to `PuttingAway`. `Unequip(itemID, abInstant)` either kills the held entity immediately or calls `PutAway`.

Confirmed map callbacks:

- `OnTakeOutItem(const tString &in asItemType, const tString &in asItemID)`
- `OnPutAwayItem(const tString &in asItemType, const tString &in asItemID)`

## Generic item use

`PlayerState_UsingItem_Base.hps` is the shared base for focused item use states. It owns intro/loop/outro flow, use input, pick checks, crosshair state, camera pitch/fov adjustments, optional unequip of the other hand, and dispatch to item handler use functions.

Confirmed use dispatch:

- Interact while in a valid use state calls `OnUse`.
- `OnUse` first tries `CanUseHeldItemOnWorld` against the focused entity.
- If world use is valid, it calls `Item_UseHeldOnWorld`.
- Otherwise it tries `CanUseHeldItemOnSelf`.
- If self use is valid, it calls `Item_UseHeldOnSelf`.

The item handler resolves callbacks in this order:

1. Specific callback name from `Inventory.cfg`, such as `CanUseOnWorldMapCallback` or `UseOnWorldMapCallback`.
2. Default map callback, such as `CanUseHeldItemOnWorld` or `OnUseHeldItemOnWorld`.
3. Default `cScrItemCallbacks` implementation in `ItemCallbacks.hps`.

For use execution, the handler calls an update once immediately, then changes the player to the item type `UsingState`. If no `UsingState` is configured, it falls back to `ePlayerState_Normal`.

## Notes for modders

- Treat `Inventory.cfg` as the item type contract. The script classes read it repeatedly instead of hardcoding all item behavior.
- Do not assume a visible inventory item exists for every collectible. Ammo is hidden but still counted through item type helpers.
- For map scripts, prefer `helper_items.hps` functions. Direct module access is possible but makes scripts harder to port.
- When debugging a held item, trace all three representations: world pickup entity, runtime inventory item/internal entity, and held entity.

