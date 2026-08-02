{{TocRight}}

This page lists the different types of entities found within the HPL2 engine. The type determines how the entity will be set up, what kind it is, what it does under different circumstances etc. Using the Model Editor you can identify and specify which type an entity has and its type vars, in Settings > User defined variables. In the Level Editor, the different types have different settings applicable for them, known as instance vars. For example, a MoveObject type will have the OffsetArea box available in the Level Editor, and an Item (Note) type will have a NoteText box available.

A list of all the types and subtypes can be found in the table of contents to the right.

== StaticProp ==

A StaticProp entity resembles a static object. They have no available type properties, but they can still use physics bodies (collision boxes) and have mass/gravity. Note that they cannot be interacted with in the game, and cannot be disabled. If you need this feature, use Object (Static) instead.

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| CastShadows || Bool || true || If entity casts shadows.
|-
| IsAffectedByDecal || Bool || true || If decals can be created on entity.
|-
|}

== CommentaryIcon ==

A CommentaryIcon entity is simply an object that can execute commentary sound files, as it was done in the main game. These only appear if the player has "Commentary" enabled in their settings.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| RotateSubMesh || String || || The name of the submesh that is to be rotated
|-
|}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| File || File (.comment) || || The .comment file for the commentary.
|-
|}

== Object ==

Objects are entities that can be activated/deactivated, broken, and interact with physics.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| BreakActive || Bool || false || If entity is broken when hit hard enough or health is 0.
|-
| BreakDestroyJoints || Bool || false || If all physics joints should be destroyed when broken.
|-
| BreakMinEnergy || Float || 100 || The minimum energy needed for breakage. Energy = Object1Speed * Object1Mass + Object2Speed * Object2Mass. Speed = m/s. If Object 2 is floor or something static, its speed is always 0 and does not contribute to total energy!
|-
| BreakEntity || File (.ent) || || The entity this entity turns into when broken.
|-
| BreakEntityAlignBody || String || || The body BreakEntity uses to align itself when created. No entity is created if left empty.
|-
| BreakSound || File (.snt) || || The sound made when broken.
|-
| BreakParticleSystem || File (.ps) || || Particle system shown when broken.
|-
| BreakImpulse || Float || 4 || Impulse (speed in m/s really) added to all bodies in BreakEntity when created. The direction of impulse is outwards from center of entity.
|-
| HitDamageAmount || Float || 5 || The amount of damage made when hitting an enemy or player.
|-
| HitDamageStrength || Int || 1 || The strength of the damage.
|-
| MinHitDamageSpeed || Float || 3 || The minimum speed (m/s) needed for damage to be made.
|-
| LifeLength || Float || 0 || A time after which the entity automatically breaks. 0=lasts forever.
|-
| IsFood || Bool || false || If this is food for some enemies and can be used to lure them. Needs to have break active and health determines how long the food lasts.<br>Waterlurkers are the only enemy type that is lured by and eats food objects.
|-
| ShowHints || Bool || true || If a hint can be triggered by interacting with the prop.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| ContainedItem || String || None || An item that is created when entity breaks.<br>Must match an entity file name (extension .ent optional) in the "items" folder.
|-
| DisableBreakable || Bool || false || If the entity is breakable then having this true will make it unbreakable.
|-
| IsInsanityVision || Bool || false || If the prop is only shown when insanity is low enough.
|-
| VisionMaxSanity || Float || 30 || The max sanity the player can have for prop to show if it is an insanity vision.<br>The object will only be visible if the player's sanity is less than this value.
|-
|}

=== Static ===

Not to be confused with an actual static object. This Object subtype is a generic object with common properties. The static subtype simply disables any additional properties from the other subtypes. An Object (Static) is similar in concept to a StaticProp type entity, however the Object (Static) can be deactivated, can break, has physics, and can have an interact callback set.

=== Grab ===

A Grab subtype is a normal Object entity with the ability to be grabbed by the player in the game. In order for this to work, the object must have a mass above 0.

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| GrabUseDepth || Bool || false || If GrabDepth is used. If not the interaction distance is used.
|-
| GrabDepth || Float || 1.5 || The distance which a grabbed object is automatically placed at.
|-
| GrabDepthInc || Float || 0.15 || Steps that the entity will move in when moving the mouse scroll.
|-
| GrabMinDepth || Float || 1.0 || Minimum distance the entity can be from player when grabbed.
|-
| GrabMaxDepth || Float || 2.2 || Maximum distance the entity can be from player when grabbed.
|-
| GrabUseOffset || Bool || false || If rotation and position offset is used. If not offset will be relative to the interact position.
|-
| GrabPositionOffset || Vector3f || 0 || Positional offset of entity.
|-
| GrabRotationOffset || Vector3f || 0 || Rotational offset of entity. It will automatically rotate to this when grabbed.
|-
| GrabThrowImpulse || Float || 10 || The speed (m/s) at which the entity is thrown.
|-
| GrabMassMul || Float || 0.1 || How much the object will weight when grabbed. Useful for heavier objects since they can wreck mayhem otherwise. 0.5% means half (50%) of the original weight.
|-
| GrabForceMul || Float || 1 || Change how much force is added to grabbed object.
|-
| GrabTorqueMul || Float || 1 || Change how much torque is added to grabbed object.
|-
| GrabUseRotation || Bool || true || If rotation should be used on grabbed object
|-
| GrabSkipNonOuterBodies || Bool || false || If true, then bodies that are inside a chain (has two or more joints attached to it) will not be grabbed.
|-
|}

=== Push ===

Similar to the Grab subtype, the Push subtype allows the player to push or drag the object by taking hold of it and walking or right clicking. Examples include large rocks and the bed covering the hole in the floor in the Prison - Southern Block.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| PushAtPoint || Bool || false || If the push force should be applied to the point at the object where interaction took place.
|-
| PushForceMul || Float || 1 || Multiplier for force applied. Used to fine tune interaction.
|-
| PushImpulse || Float || 2 || Impulse added when thrown.
|-
|}

=== Slide ===

A Slide Object is similar to the Grab subtype, except it can only be slid in a single direction for a certain amount. An existing (but unused) entity that uses this is the secret floor carpet you can slide to the side.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| SlideMaxSpeed || Float || 10 || The maximum speed it can be moved.
|-
| SlideSlowDownFactor || Float || 1 || Amount of slowdown applied to object when not moved.
|-
| SlideSpeedFactor || Float || 1 || The higher value the more speed gain a mouse movement makes.
|-
| SlideThrowImpulse || Float || 3 || Impulse added when thrown.
|-
|}

== SwingDoor ==

A SwingDoor entity is standard hinged door. Any door you can grab and swing open is considered a SwingDoor. To use a SwingDoor, you need to attach joints to where you want the door to swing around. These are usually placed by the hinges of the door. On the joint you can set the min and max values to limit how much the door can be opened. These are usually approximately 90 degrees apart in either positive or negative directions.

If the FullGameSave instance var is not enabled, SwingDoors will reset to their initial open amount when leaving a level and returning to it.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MoveMaxSpeed || Float || 13.5 || The maximum speed it can be moved.
|-
| MoveSlowDownFactor || Float || 3.0 || Amount of slowdown applied to object when not moved.
|-
| MoveSpeedFactor || Float || 1.0 || The higher value the more speed gain a mouse movement makes.
|-
| MoveThrowImpulse || Float || 6.0 || Impulse added when thrown.
|-
| CanInteractWithStaticBody || Bool || false || If by interacting with a static body in the entity, the door is interacted with. Meaning that interacting with any part of the entity will work.
|-
| CloseOnSound || File (.snt) || || Sound played when the door is closed.
|-
| CloseOffSound || File (.snt) || || Sound played when the door is opened.
|-
| LockOnSound || File (.snt) || || Sound played when the door is locked.
|-
| LockOffSound || File (.snt) || || Sound played when the door is unlocked.
|-
| InteractLockedSound || File (.snt) || || Sound made when player interacts with a locked door.
|-
| Breakable || Bool || false || Can the door be broken.
|-
| DamageMesh1 || File (.dae/.msh/.mesh) || || Mesh used when health is below HealthDamage1
|-
| DamageMesh2 || File (.dae/.msh/.mesh) || || Mesh used when health is below HealthDamage2
|-
| BrokenEntity || File (.ent) || || The entity this entity turns into when broken.
|-
| DamageSound || File (.snt) || || Sound made when a new damage mesh is used.
|-
| DamagePS || File (.ps) || || Particles created when a new damage mesh is used.
|-
| BreakSound || File (.snt) || || Sound made when broken.
|-
| BreakPS || File (.ps) || || Particles created when broken.
|-
| BreakImpulse || Float || 3 || Impulse set to objects in broken mesh.<br>Incorrectly defined as a sound file in EntityTypes.cfg.
|-
| HealthDamage1 || Float || 66 || Health when damage mesh 1 is used.
|-
| HealthDamage2 || Float || 33 || Health when damage mesh 2 is used.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| Locked || Bool || false || If the door is locked
|-
| OpenAmount || Float || 0 || The amount the door is open. 0 - 1.
|-
| DisableBreakable || Bool || false || If the entity is breakable then having this true will make it unbreakable.
|-
|}

== Lever ==

A Lever entity is an entity that can be swung between states to trigger callbacks. A lever requires a joint to swing around.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MoveMaxSpeed || Float || 13.5 || The maximum speed it can be moved.
|-
| MoveSlowDownFactor || Float || 3.0 || Amount of slowdown applied to object when not moved.
|-
| MoveSpeedFactor || Float || 1.0 || The higher value the more speed gain a mouse movement makes.
|-
| MoveThrowImpulse || Float || 6.0 || Impulse added when thrown.
|-
| CanInteractWithStaticBody || Bool || false || If by interacting with a static body in the entity, the lever is interacted with. Meaning that interacting with any part of the entity will work.
|-
| MinLimitRange || Float || 5.0 || The distance from min the joint can be to be considered at min limit.
|-
| MaxLimitRange || Float || 5.0 || The distance from max the joint can be to be considered at max limit.
|-
| MinLimitSound || File (.snt) || || Sound played when at min limit<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| MaxLimitSound || File (.snt) || || Sound played when at max limit<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| MinLimitStuck || Bool || false || If the lever becomes stuck when reaching min.<br>Missing from EntityTypes.cfg.
|-
| MaxLimitStuck || Bool || false || If the lever becomes stuck when reaching max.<br>Missing from EntityTypes.cfg.
|-
| StuckSound || File (.snt) || || Sound played when stuck<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| MiddleAngleAmount || Float || 0 || The amount between min and max that is considered middle. -1 to 1. -1=at min, 0=exactly between min and max, 1=at max
|-
| AutoMoveToAngle || Bool || True || If the lever should move to position when not interacted with.
|-
| AutoMoveSpeedFactor || Float || 2 || Multiplier applied to speed to determine the speed it moves towards wanted position. The higher the faster it gets to the position.
|-
| AutoMoveMaxSpeed || Float || 8 || Max speed it can move at to the wanted position
|-
| AutoMoveGoal || String || Middle || Where it should go when auto moving.<br>Can be "Middle", "Min", or "Max".
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| StuckState || String || None || The initial stuck state for the lever.<br>Can be "None", "Min", or "Max".
|-
| InteractionDisablesStuck || Bool || false || If stuck is disabled when player interacts.
|-
| OverrideDefaults || Bool || false || If normal settings, set in ent file, should be overridden by settings below.
|-
| MiddleAngleAmount || Float || 0 || The amount between min and max that is considered middle. -1 to 1. -1=at min, 0=exactly between min and max, 1=at max
|-
| AutoMoveToAngle || Bool || True || If the lever should move to position when not interacted with.
|-
| AutoMoveGoal || String || Middle || Where it should go when auto moving.<br>Can be "Middle", "Min", or "Max".
|-
|}

== Wheel ==

A Wheel entity is a wheel that can be turned. They use states similar to the levers. Some wheels can be turned indefinitely and some (mostly valves) can be turned for a fixed amount in order to trigger an event. Wheels require a joint.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MoveMaxSpeed || Float || 13.5 || The maximum speed it can be moved.
|-
| MoveSlowDownFactor || Float || 3.0 || Amount of slowdown applied to object when not moved.
|-
| MoveSpeedFactor || Float || 1.0 || The higher value the more speed gain a mouse movement makes.
|-
| MoveThrowImpulse || Float || 6.0 || Impulse added when thrown.
|-
| CanInteractWithStaticBody || Bool || false || If by interacting with a static body in the entity, the wheel is interacted with. Meaning that interacting with any part of the entity will work.
|-
| MinLimit || Float || -180 || Min limit of the wheel, should be equal or below 0 but can be as low as wanted. Several revolutions are supported!
|-
| MaxLimit || Float || 180 || Max limit of the wheel, should be equal or above 0 but can be as high as wanted. Several revolutions are supported!
|-
| MinLimitRange || Float || 5.0 || The distance from min the joint can be to be considered at min limit.
|-
| MaxLimitRange || Float || 5.0 || The distance from max the joint can be to be considered at max limit.
|-
| MinLimitStuck || Bool || false || If the wheel becomes stuck when reaching min limit.
|-
| MaxLimitStuck || Bool || false || If the wheel becomes stuck when reaching max limit.
|-
| SpinDir || String || BothWays || The direction the wheel can be spun<br>Can be "BothWays", "ToMin", or "ToMax".
|-
| MinLimitSound || File (.snt) || || Sound played at min limit
|-
| MaxLimitSound || File (.snt) || || Sound played at max limit
|-
| StuckSound || File (.snt) || || Sound played when stuck.
|-
| SlowDownRotation || Bool || true || If rotation should be slowed to 0 when not interacting.
|-
| SkipMiddleState || Bool || true || If the middle state (when not in max or min) should be skipped by script and connections.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| StuckState || String || None || The stuck state for the wheel.<br>Can be "None", "Min", or "Max".
|-
| InteractionDisablesStuck || Bool || false || If stuck is disabled when player interacts.
|-
| OverrideDefaults || Bool || false || If normal settings, set in ent file, should be overridden by settings below.
|-
| MinLimit || Float || -180 || Min limit of the wheel, should be equal or below 0 but can be as low as wanted. Several revolutions are supported!
|-
| MaxLimit || Float || 180 || Max limit of the wheel, should be equal or above 0 but can be as high as wanted. Several revolutions are supported!
|-
| MinLimitStuck || Bool || false || If the wheel becomes stuck when reaching min limit.
|-
| MaxLimitStuck || Bool || false || If the wheel becomes stuck when reaching max limit.
|-
| SpinDir || String || BothWays || The direction the wheel can be spun<br>Can be "BothWays", "ToMin", or "ToMax".
|-
|}

== MultiSlider ==

A sliding-type lever that can be set to multiple states. Used for the gear levers in the Sewer.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| SlideMaxSpeed || Float || 10 || The maximum speed it can be moved.
|-
| SlideSlowDownFactor || Float || 1 || Amount of slowdown applied to object when not moved.
|-
| SlideSpeedFactor || Float || 1 || The higher value the more speed gain a mouse movement makes.
|-
| SlideThrowImpulse || Float || 3 || Impulse added when thrown.
|-
| NumOfStates || Int || 3 || The number of states used.
|-
| StickToStateMaxDist || Float || 0.1 || The distance from a state that the slider sticks.
|-
| CanInteractWithStaticBody || Bool || false || If by interacting with a static body in the entity, the lever is interacted with. Meaning that interacting with any part of the entity will work.
|-
| AutoMoveToCurrentState || Bool || true || If body should automove to current state when not interacted with.
|-
| AutoMoveSpeedFactor || Float || 2 || Multiplier applied to speed to determine the speed it moves towards wanted position. The higher the faster it gets to the postion.
|-
| AutoMoveMaxSpeed || Float || 8 || Max speed it can move at to the wanted position
|-
| ChangeStateSound || File (.snt) || || Sound played when state is changed<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| StuckSound || File (.snt) || || Sound played when stuck<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| StuckState || String || None || The stuck state for the wheel.<br>Can be "None", "Min", or "Max".
|-
| InteractionDisablesStuck || Bool || false || If stuck is disabled when player interacts.
|-
| ChangeStateCallback || String || || Called when state changes Syntax: <code>void MyFunc(string &in asEntity, int alState)</code><br>Used instead of ConnectionStateChangeCallback, as this entity type can have more than two possible states.
|-
|}

== Lamp ==

A Lamp entity is a light source. If they are unlit, they can be lit by the player, consuming a tinderbox. Examples are torches and candles.

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| CanBeLitByPlayer || Bool || true || If the player can use a tinderbox on it to light it.
|-
| CanBeGrabbed || Bool || false || If it can be grabbed by the player.<br>No effect. Presumably intended to make the entity behave like a Grab Object, yet this is unimplemented.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| Lit || Bool || true || If the lamp is lit or not.
|-
| ConnectedLight || String || || Name of a light (that is not in an entity!) that will be connected to the this light and will increase/decrease in color as the lamp is turned on/off.
|-
| ConnectionLightAmount || Float || 1 || The amount to multiply the lamp's color by before adding it to the connected light's color.
|-
| ConnectionLightUseOnColor || Bool || true || If the on color should always be used. If false the light color (which might be flickering) is used.
|-
| ConnectionLightUseSpec || Bool || false || If the specular of the lamp color should be used.
|-
|}

== Button ==

A Button entity acts like a Lever, except it does not use a joint. It simply changes its connection state and toggles effects when interacted with.

{{HPL2 TypeVars Prop}}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| SwitchedOn || Bool || false || If the button starts as on or off
|-
| CanBeSwitchedOn || Bool || true || If player can switch it on.
|-
| CanBeSwitchedOff || Bool || false || If player can switch it off.
|-
|}

== Photocell ==

A prop that changes its texture illumination and connection state based on the light level around it. Presumably a leftover from Lux Tenebris, which featured light-based puzzles.

{{HPL2 TypeVars Prop}}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| LightLevelOnLimit || Float || 0.9 || Light level above this value turns the photocell on.
|-
| LightLevelOffLimit || Float || 0.1 || Light level below this value turns the photocell off.
|-
|}

== MoveObject ==

A MoveObject entity is an entity that can be specifically moved on a single axis through the use of scripting. It can be set to either Angular or Linear. Angular rotates the object around its own center point, unless otherwise specified by the use of an OffsetArea. Linear moves the object in a direction for a specified amount. Note that a linear move object can only move on one axis. You can pick X, Y, or Z in the entity and this cannot be changed mid-game. If you want the same object to move on more than 1 axis (for example left then forward) you can switch out the entity with an identical one that uses another axis. The script to move a MoveObject is <code>SetMoveObjectState</code> and <code>SetMoveObjectStateExt</code> (see [[HPL2/Engine Scripts|Engine Scripts]]).

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MoveObjectType || String || Linear || The way the object moves. Linear means position changes and Angular means rotation changes.<br>Can be "Linear" or "Angular".
|-
| OpenAmount || Float || 1.0 || Linear: How much of the MoveAxis size that will mean that it is open. Angular: 1=90 degrees. 0.5=45deg and 2=180deg (any numbers inbetween are okay of course)
|-
| MoveAxis || String || X || he axis that the movement is about. For angular it is rotation axis and for linear it is the position axis that is changed.<br>Can be "X", "Y", or "Z".
|-
| OpenAcc || Float || 5.0 || The acceleration for reaching OpenSpeed
|-
| OpenSpeed || Float || 1.0 || The goal speed when opening.
|-
| CloseAcc || Float || 5.0 || The acceleration for reaching CloseSpeed
|-
| CloseSpeed || Float || 1.0 || The goal speed when closing.
|-
| AutoMove || Bool || false || If the door should move towards some goal automatically.
|-
| AutoMoveStateGoal || Float || 0.0 || The amount (relative to the what is considered open) that it shall move towards.
|-
| AutoMoveAcc || Float || 9.0 || The acceleration when automoving
|-
| AutoMoveSpeed || Float || 5.0 || The goal speed when automoving
|-
| AutoMoveSlowdownDist || Float || 0.1 || The distance from state goal where it begins to slow down (in meters for linear and degrees for angular).
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| AngularOffsetArea || String || || When mode is angular, this the point it rotates around. If empty, it rotates around its center.
|-
|}

== Item ==

Item entities become inventory items when interacted with. They glow when in pickup range.

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| SubItemTypeName || String || || Determines its name and description by putting 'ItemDesc_' or 'ItemName_' as prefix for the lang file entry. Category is always Inventory
|-
| ImageFile || File (.tga/.dds/.jpg/.jpeg/.png) || || The icon shown in the inventory when picked up.
|-
| PickSound || String || Generic || The sound played when picked up.<br>Must match a sound file name in the "ui" folder, starting with "pick_".
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| CustomSubItemTypeName || String || || If not emtpy it overrides SubItemTypeName in entity file. Determines its name and description by putting 'ItemDesc_' or 'ItemName_' as prefix for the lang file entry. Category is always Inventory
|-
|}

=== Puzzle ===

A Puzzle subtype item is a general item with no extra properties. Use this if you only need an inventory item to be used to trigger a scripted action. Other subtypes have special properties, but Puzzle only has the ability to be collected and used from the inventory. When used, it's loaded onto the crosshair so the player can use it on objects.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| TempVar || Float || 0 || User specfic usage.
|-
|}

=== Coins ===

Unused item type for the cut Thaler items. Thalers were once used to unlock Chests and use OilBarrels, with only the former functionality remaining.

{{warning|You can create custom coin items, but there is a single language entry which is hardcoded into the engine and can't be changed. This means that even if all the others are changed, looking at Chests will always say "Locked. Costs X Thalers to open."}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| CoinAmount || Int || 10 || The amount of coins it contains.
|-
|}

=== Note ===

A Note item is an item that adds text to the player's journal. It displays itself when picked up. The note can be narrated, in which case it will automatically close once it's finished. If it isn't voiced, the player must close it. Use this if you want to make a Note item using a custom model or custom properties that differ from the main notes.

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| NoteText || String || || The text and name of entry for note. Entry names for these are calculated: 'Note_'+NoteText+'_Name' and 'Note_'+NoteText+'_Text'
|-
| OpenNoteInJournal || Bool || true || If the journal should be opened when the note is picked up.
|-
| UseNarration || Bool || false || If the note has narration.
|-
|}

=== Diary ===

A Diary item is nearly identical to the Note item. Instead, it adds itself to the Diary section of the player's journal, whereas the Note adds itself to the Notes section. Additionally, diary entries are grouped together, so that when one is split into multiple parts, the player will always read them in order, regardless of the specific Diary items that were picked up.

Diaries are also always voice enabled, while Notes have the option for it. As such, a Diary without any voice files defined in its text will instantly close the journal on pickup.

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| DiaryText || String || || The text and name of entry for diary. Entry name for these calculated: 'Diary_'+DiaryText+'_Name'+Idx and 'Diary_'+DiaryText+'_Text'+Idx. Idx starts at 1.
|-
| DiaryCallback || String || || A special callback for diary pickup. Syntax: <code>void Func(string &in asItem, int lDiaryIdx)</code>. Call <code>ReturnOpenJournal(false)</code> to not open diary in journal after callback.
|-
|}

=== Lantern ===

A Lantern item can be picked up like a normal item, but is added as a lantern to the inventory. While having this item, the player can press F to toggle it, or click it in the inventory. Note: This is NOT the lantern model in the player's hands, only the item that gives it to the player. If you want a custom lantern model, you can follow [https://www.frictionalgames.com/forum/thread-12391.html this guide].

=== Health ===

A Health item acts like a health potion (Laudanum). When used, it increases the player's health by a specified amount.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| HealAmount || Float || 25 || How much health is regained when used.
|-
|}

=== Sanity ===

A Sanity item acts like a sanity potion. When used, it increases the player's sanity by a specified amount.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| HealAmount || Float || 25 || How much sanity is regained when used.
|-
|}

=== LampOil ===

A LampOil item acts like an oil potion. When used, it increases the player's lantern oil by a specified amount.

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| OilAmount || Float || 25 || How much oil is regained when used.
|-
|}

=== Tinderbox ===

A Tinderbox item adds itself to the player's tinderbox counter in the inventory. Tinderboxes can be used once to light a light source.

=== HandObject ===

Unused. Would have equipped the corresponding hand object on use.

== Chest ==

This is an unused feature, but it was kept in the engine and can be restored by making a custom entity. It is a object which can be opened using coins (or their replacements, if a custom Coin-type entity is made). Interacting with it brings up a text GUI. The text GUI can be changed in the base language file.
To make an entity of this type, just copy an existing entity file and change its entity type.
'''The chests that ended up in the game are actually just Levers.'''

{{warning|In versions before 1.5, Chests did not write their CoinsNeeded instance var to save data, which caused the coin requirement of all Chests to default to 0 when loading a save.}}

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| MoveMaxSpeed || Float || 13.5 || The maximum speed it can be moved.
|-
| MoveSlowDownFactor || Float || 3.0 || Amount of slowdown applied to object when not moved.
|-
| MoveSpeedFactor || Float || 1.0 || The higher value the more speed gain a mouse movement makes.
|-
| MoveThrowImpulse || Float || 6.0 || Impulse added when thrown.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| CoinsNeeded || Int || 200 || Coins required to open the chest.
|-
|}

== OilBarrel ==

An OilBarrel entity simply adds some oil to the player's lantern upon interaction. The oil amount depends on the player's combined total oil stored in their lantern and as LampOil type items (the sum of the oil that the items would refill on use), determined when the player first looks at the OilBarrel. If the total oil is less than 100, the OilBarrel will contain exactly enough oil to bring it to 100. Otherwise (or if Hard Mode is enabled), it provides only 10 oil.

If the FullGameSave instance var is not enabled, OilBarrels can be used again when leaving a level and returning to it.

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| FillSound || File (.snt) || || Sound played when lantern is filled.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| EmptySound || File (.snt) || || Sound played when barrel is empty.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
|}

{{HPL2 InstanceVars Prop}}

== EmotionStone ==

The memory capsule entities found in the game. Interacting with an EmotionStone causes an emotion flash effect to display, fading the screen to white and displaying a message.

{{HPL2 TypeVars Prop}}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| DescCat || String || || Category of text shown when in focus.
|-
| DescEntry || String || || Entry of text shown when in focus.
|-
| TextCat || String || || Category of text shown when interacted with.<br>Typically "EmotionStone".
|-
| TextEntry || String || || Entry of text shown when interacted with.
|-
| Sound || File (.snt) || || Sound played when interacted with.
|-
|}

== NPC ==

Non-Player Characters are non-enemy characters. Agrippa and Alexander as they appear in-game are NPCs. Their only purpose is to stand in place and look at the player (if you enable the option).

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| MoveHeadBones || String || || List of bones that is rotated when the NPC rotates its head.
|-
| MoveHeadBoneMuls || String || || List of floats specifying how much each bone shall be rotated (-1 to 1).
|-
| HeadMoveSpeedMul || Float || 1 || Speed multiplier that that determines move speed based on distance to wanted angle.
|-
| HeadMoveMaxSpeed || Float || 1 || The max speed that the head moves in.
|-
| MaxHeadAngle || Float || 30 || The max angle that the head can turn when looking at the player.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| FollowPlayerArea || String || || When player is in this area, the NPC will look at him.
|-
| Awake || Bool || true || If the NPC is awake and looks at the player when in area.
|-
|}

== LevelDoor ==

A LevelDoor transports the player to the specified level when interacted with. The locked sounds, text, and destination can be entered in the Level Editor itself.

LevelDoors can also teleport the player (without a loading screen) if the same map is picked.

{{HPL2 TypeVars Prop}}

{|class=wikitable
|+Type Vars
! Name !! Type !! Default !! Description
|-
| EnterSound || File (.snt) || || Sound played when entering door.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| ExitSound || File (.snt) || || Sound played when entering new map after having interacted with door.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
|}

{{HPL2 InstanceVars Prop}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| TextEntry || String || || The text shown when door is in focus. Category is always Levels
|-
| StartPos || String || || The start position of the next map that the player is transported to.
|-
| MapFile || File (.map) || || The file of the next map.
|-
| Locked || Bool || false || If the door is locked.
|-
| LockedSound || File (.snt) || || Sound heard if locked and interacted with.
|-
| LockedTextCat || String || || Category of message shown if locked and interacted with.
|-
| LockedTextEntry || String || || Entry of message shown if locked and interacted with.
|-
| ShowStats || Bool || true || If stats of map it leads to should be shown (NOT IN USE)<br>Non-functional. Formerly used to display a completion percentage.
|-
|}

== CritterBug ==

Critters like rats, roaches, or fish on the ground (or in the case of fish, water). They move around the room they are placed in and run away from the player.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MeshOffsetRot || Vector3 || 0 0 0 || The mesh offset rotation.
|-
| MeshOffsetPos || Vector3 || 0 0 0 || The mesh offset position.
|-
| MaxSpeedNormal || Float || 0.5 || Max speed when in normal state
|-
| MaxSpeedAfraid || Float || 1.3 || Max speed when in the scared state
|-
| Gravity || Float || 9.8 || Amount of gravity applied.
|-
| HasRandomPauses || Bool || false || If the critter shall have random pauses
|-
| RandomPauseTimeMinMax || Vector2 || 1 3 || Random time length of pause
|-
| RandomMoveTimeMinMax || Vector2 || 2 6 || Random time length of movement (between pauses)
|-
| PlayerFleeDistance || Float || 3 || The distance from player which it begins to flee
|-
| FleeMul || Float || 2.1 || Factor for moving away from player (if fleeing)
|-
| BackToSpawnPointMul || Float || 0.1 || Factor for moving back to spawn point
|-
| WanderCircleRadius || Float || 4 || Picture a circle in front critter at a certain distance. A point inside the circle is randomly selected and then the vector from the critter to this point is the speed added. The larger the circle, the more random the walk.
|-
| WanderCircleDist || Float || 2 || The distance at which the wander circle is placed. The higher the distance, the more likely the critter is to move forward.
|-
| NormalSound || File (.snt) || || Sound made when in normal state
|-
| NormalSoundRandMinMax || Vector2 || 1 3 || Random time length between normal sounds. x=min, y=max
|-
| ScaredSound || File (.snt) || || Sound made when in afraid state
|-
| ScaredSoundRandMinMax || Vector2 || 1 3 || Random time length between afraid sounds. x=min, y=max
|-
| DeathEntity || File (.ent) || || Entity created when dead.
|-
| DeathPS || File (.ps) || || Particle created when dead.
|-
| DeathSound || File (.snt) || || Sound played when dead.
|-
|}

{{HPL2 InstanceVars Prop}}

== CritterSpider ==

A unused critter similar to the spider enemies from [[wikipedia:Penumbra: Overture|Penumbra: Overture]]. Capable of climbing walls and ceilings, as well as attacking the player.

{{HPL2 TypeVars Prop}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| MaxIdleSpeed || Float || 0.5 ||
|-
| MaxHuntSpeed || Float || 0.75 ||
|-
| HitSound || File (.snt) || || Incorrectly defined as a string in EntityTypes.cfg.
|-
| IdleSound || File (.snt) || || Incorrectly defined as a string in EntityTypes.cfg.
|-
| IdleSoundRandMinMax || Vector2 || 1 3 ||
|-
| AttackSound || File (.snt) || || Incorrectly defined as a string in EntityTypes.cfg.
|-
| AttackPlayerDistMinMax || Vector2 || 1 3 ||
|-
| HuntPlayerDist || Float || 8 ||
|-
| HuntTimeMinMax || Vector2 || 10 30 ||
|-
| MoveTimeMinMax || Vector2 || 4 8 ||
|-
| IdleTimeMinMax || Vector2 || 0.4 2 ||
|-
| DeathEntity || File (.ent) || || Entity created when dead.
|-
| DeathPS || File (.ps) || || Particle created when dead.
|-
| DeathSound || File (.snt) || || Sound played when dead.
|-
| AttackSizeRadius || Float || 0.3 ||
|-
| AttackOffset || Vector3 || 0 0 1 ||
|-
| AttackDamageMinMax || Vector2 || 5 15 ||
|-
| AttackForce || Vector2 || 5 1 ||
|-
| AttackStrength || Int || 1 ||
|-
| AttackHitSound || File (.snt) || ||
|-
|}

{{HPL2 InstanceVars Prop}}

== Enemy_Grunt ==

An Enemy_Grunt entity is a standard enemy entity, used for the Grunt, Brute, and Suitor. Enemy entities require advanced setup, and should include animations added through Settings > Animations. Enemy properties can be modified in the entity type window, like certain sounds and music tracks playing, the enemy's awareness levels and damage, speed and other similar settings. An enemy does not use a collision box, but instead a skeleton and the aforementioned properties to determine how to collide/hit something.

{{HPL2 TypeVars Enemy}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| NoticeSound || File (.snt) || || Sound played when enemy notices that player is nearby
|-
| GiveUpNoticeSound || File (.snt) || || Sound played when enemy gives up investigation (after a notice)
|-
| EnabledSound || File (.snt) || || Sound played when enemy is enabled
|-
| GroggyDamageCount || Float || 15 || The accumulated amount of damage the enemy can take before getting groggy by the hit.<br>The enemy will flinch after taking this amount of damage.
|-
| AlertToHuntDistance || Float || 10 || If range is above this then enemy can go from alert to hunt
|-
| AlertToInstantHuntDistance || Float || 3.5 || If range is below this, enemy geos instantly to hunt.
|-
| HuntPauseMinTime || Float || 2.0 || Min time enemy spends not attacking after an attack.
|-
| HuntPauseMaxTime || Float || 4.5 || Max time enemy spends not attacking after an attack.
|-
| IncreaseAlertSpeedDistance || Float || 6 || Distance at which the alert move speed increases.
|-
| IncreasedAlertSpeedMul || Float || 1.5 || The amount that move speed is multiplied by when alert.
|-
| AlertRunTowardsToHuntLimit || Float || 30 || The accumulated limit value when alert goes to hunt because of player running towards enemy.
|-
| AlertRunTowardsCheckDistance || Float || 5 || The distance where the move toward enemy check starts
|-
| IdleExtraTimeMin || Float || 2 || Min time between extra idle animations
|-
| IdleExtraTimeMax || Float || 6 || Max time between extra idle animations
|-
| IdleExtraNum || Int || 3 || Number of extra idle animations
|-
|}

{{HPL2 InstanceVars Enemy}}

== Enemy_ManPig ==
{{clr}}
{{ReqVer|1.3}}

An enemy type ported from A Machine For Pigs. Compare to the [[HPL2/AMFP/NewEntities#Enemy_ManPig|AMFP version]] of the enemy.

{{HPL2 TypeVars Enemy}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| Quadruped_Walk_ForwardSpeed || Float || 1.0 || Forward speed when walking on all fours, in meters per second.
|-
| Quadruped_Walk_BackwardSpeed || Float || 1.0 || Backward speed when walking on all fours, in meters per second.
|-
| Quadruped_Walk_ForwardAcc || Float || 2.0 || 
|-
| Quadruped_Walk_ForwardDeacc || Float || 8.0 || 
|-
| Quadruped_Run_ForwardSpeed || Float || 3.0 || Forward speed when running on all fours, in meters per second.
|-
| Quadruped_Run_BackwardSpeed || Float || 2.0 || Backward speed when running on all fours, in meters per second.
|-
| Quadruped_Run_ForwardAcc || Float || 4.0 || 
|-
| Quadruped_Run_ForwardDeacc || Float || 8.0 || 
|-
| Quadruped_StoppedToWalkSpeed || Float || 0.05 || Speed at which the walk animation is played when on all fours
|-
| Quadruped_WalkToStoppedSpeed || Float || 0.02 || Speed at which walk goes to stopped when on all fours
|-
| Quadruped_WalkToRunSpeed || Float || 2.0 || Speed at which walk turns to run animation when on all fours
|-
| Quadruped_RunToWalkSpeed || Float || 0.9 || Speed at which run turns to walk when on all fours
|-
| NoticeSound || File (.snt) || || Sound played when enemy notices that player is nearby
|-
| GiveUpNoticeSound || File (.snt) || || Sound played when enemy gives up investigation (after a notice)
|-
| EnabledSound || File (.snt) || || Sound played when enemy is enabled
|-
| GroggyDamageCount || Float || 1 || The accumulated amount of damage the enemy can take before getting groggy by the hit.<br>The enemy will flinch after taking this amount of damage.
|-
| AlertToHuntDistance || Float || 6 || If range is above this then enemy can go from alert to hunt
|-
| AlertToInstantHuntDistance || Float || 2.5 || If range is below this, enemy geos instantly to hunt.
|-
| HuntPauseMinTime || Float || 0.5 || Min time enemy spends not attacking after an attack.
|-
| HuntPauseMaxTime || Float || 1.0 || Max time enemy spends not attacking after an attack.
|-
| IncreaseAlertSpeedDistance || Float || 6 || Distance at which the alert move speed increases.
|-
| IncreasedAlertSpeedMul || Float || 1.25 || The amount that move speed is multiplied by when alert.
|-
| AlertRunTowardsToHuntLimit || Float || 30 || The accumulated limit value when alert goes to hunt because of player running towards enemy.
|-
| AlertRunTowardsCheckDistance || Float || 6 || The distance where the move toward enemy check starts
|-
| IsTelsa || Bool || false || If this is the tesla pig
|-
| TeslaSoundLoop || File (.snt) || || Sound file played when the tesla's proximity effects are active.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
| ChaseSound || File (.snt) || || Played when the pig is chasing.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
|}

{{HPL2 InstanceVars Enemy}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Instance Vars
! Name !! Type !! Default !! Description
|-
| Pose || String || Biped || The pose of the enemy to start with<br>Can be "Biped" or "Quadruped".
|-
| ThreatenOnAlert || Bool || false || If the pig should stand still and threaten instead of walking towards player when in alert mode.
|-
| FleeFromPlayer || Bool || false || The pig will flee instead of hunting (threaten if ThreatenOnAlert). Disabled if far enough away. Will attack if cornered.
|-
| AutoDisableAfterFlee || Bool || false || If pig should be disabled after having fled (if possible)
|-
| LanternSensitivity || Float || 1 || A modifier for how quickly the pig reacts to being shined on by the lantern.<br>Not defined in EntityTypes.cfg.
|-
| IdleBehavior || String || None || The behavior used when there are no patrol nodes left to walk.<br>Can be "None", "Stalk", or "Track".
|-
| PlayActivateSound || Bool || true || If the enemy can play its EnabledSound.
|-
| AllowZeroNodeWaitTimes || Bool || false || If set to true, path node wait times with value 0 actually mean no waiting<br>Normally, specifying a wait time of 0 in <code>AddEnemyPatrolNode</code> results in a wait time of 1-3 seconds.
|-
| PatrolMoveSpeed || String || Walk || Whether this pig walks or runs along its patrol<br>Can be "Walk" or "Run".
|-
| DamageMul || Float || 1 || Multiplier for the enemy's attack damage.<br>Not defined in EntityTypes.cfg.
|-
| RunSpeedMul || Float || 1 || Multiplier for the enemy's run speed.<br>Not defined in EntityTypes.cfg.
|-
| HuntPauseTimeMul || Float || 1 || Multiplier for wait time between attacks.
|-
|}

== Enemy_Waterlurker ==

Enemy type of the "water monster". Since you can't assign animations to it, you might as well just use the normal waterlurker of the base game unless you want to change its properties (such as damage, movement speed, or music played).

{{HPL2 TypeVars Enemy}}

{|class="wikitable mw-collapsible mw-collapsed"
|+style="white-space:nowrap;text-align:-webkit-center"| Type Vars
! Name !! Type !! Default !! Description
|-
| PlayerDetectionHeight || Float || 0.6 || The y-distance from the enemy that the player is detected.
|-
| EatDamage || Float || 20 || The damage dealt to food being eaten
|-
| AfterAttackPauseTime || Float || 0 || The amount of timer lurker waits after an attack
|-
| SplashPS_Walk || File (.ps) || || Particle system created at surface when walking.
|-
| SplashPS_Run || File (.ps) || || Particle system created at surface when running.
|-
| SplashPS_Eat || File (.ps) || || Particle system created at surface when eating.
|-
| SplashPS_Attack || File (.ps) || || Particle system created at surface when attacking.
|-
| SplashSound_Walk || File (.snt) || || Sound played when walking.
|-
| SplashSound_Run || File (.snt) || || Sound played when running.
|-
| SplashSound_Eat || File (.snt) || || Sound played when eating.
|-
| SplashSound_Attack || File (.snt) || || Sound played when attacking.
|-
|}

{{HPL2 InstanceVars Enemy}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| PlayerDetectionHeight || Float || 0 || If equal or below 0 the default in data file is used! The y-distance from the enemy that the player is detected.
|-
|}

== PlayerHands ==

Player's hands. Unless you want to make a different looking hand for a full conversion mod, you don't have to worry about this.

== HandObject ==

The only available HandObject is the lantern. It is used in conjunction with a <code>.ho</code> config file to place it properly in PlayerHands.

Mostly a remnant of cut items that functioned as weapons, like in [[wikipedia:Penumbra: Overture|Penumbra: Overture]], including the pickaxe from that game.