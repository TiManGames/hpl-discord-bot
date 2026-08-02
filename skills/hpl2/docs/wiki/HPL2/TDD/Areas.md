This page lists the different types of areas available in [[HPL2/TDD|Amnesia – The Dark Descent]] and what they do. Area types are defined in the file <code>editor/AreaTypes.cfg</code>.

==Script==
Script areas are used for a variety of purposes in conjunction with [[HPL2/TDD/Scripting|scripting]], like detecting collisions or spawning particle systems and entities. See [[HPL2/TDD/Area/Script|Script Areas]].

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| PlayerLookAtCallback || String || || Callback called when player looks at entity. Syntax: <code>void Func(string &in asEntity, int alState)</code> alState: 1=looking, -1=stopped looking
|-
| PlayerLookAtCallbackAutoRemove || Bool || false || Should look at callback be removed when entity is looked at and callback is called.
|-
| PlayerInteractCallback || String || || Callback called when player interacts with entity. Syntax: <code>void Func(string &in asEntity)</code>
|-
| PlayerInteractCallbackAutoRemove || Bool || false || Should interact callback be removed when entity is interacted with and callback called.
|-
| ItemInteraction || Bool || false || Set true if an item is used on this area.
|-
| MaxFocusDistance || Float || -1 || The max focus distance. If -1 then default (from game.cfg) is used.
|-
|}

==PosNode==
This is used in combination with Rope areas, to show where the rope ends.

==Flashback==
These trigger flashbacks when the player collides with them. Shows a white flash on the screen when a flashback starts and ends. When a flashback is active, radial blur is applied and the player's movement speed is slowed down (60% by default). These properties are defined in the [[HPL2/game.cfg#Player_General|Player_General]] section of game.cfg. Additionally, darkness sanity drain is disabled, the lantern does not use oil, and enemies ignore the player when a flashback is active.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| FlashbackFile || File (.flash) || || The flashback file played when player enters area. Flashbacks should be "flashbacks" folder.
|-
| Callback || String || || Callback that runs when flashback is over. Syntax: <code>MyFunc()</code>
|-
|}

==Sign==
Displays text when the player looks at it. Note: Interactions cannot pass through.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| TextCat || String || || Text lang category.
|-
| TextEntry || String || || Text lang entry.
|-
|}

==SlimeDamage==
Gives minor damage to the player when they collide with it. Used for the Guardian/Shadow flesh damage. Collision is only checked for at randomized intervals: 2 to 5 seconds by default. This value is re-rolled each time the interval ends, so the player only receives damage if they're colliding with the area on one of those intervals.

As of version 1.5, multiple slime types can be used, defined in the [[HPL2/game.cfg#Slime|Slime]] section of game.cfg. It specifies the sounds and particles played, range of damage dealt, and amount of screen shake applied.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| mlSlimeType || Int || 0 || Determines attack properties. See game.cfg for the different proper values.
|-
| MinCheckAttackTime || Float || 2 || The min time between check to attack.
|-
| MaxCheckAttackTime || Float || 5 || The max time between check to attack.
|-
| DisableAfterAttack || Bool || false || If area should be disabled after an attack on player.
|-
| Callback || String || || Called when attacking player. Syntax: <code>MyFunc(string &in asArea)</code>
|-
|}

==Examine==
Displays a message on screen when interacted with by the player, similar to the <code>SetMessage</code> script function. Supposed to display a different message if the player's sanity is below a threshold defined in game.cfg (default 50), yet this doesn't work due to the game reading the MaxExamineSanity value from [[HPL2/game.cfg#Player_Interaction|Player_Interaction]] when it's actually under [[HPL2/game.cfg#Insanity|Insanity]]. This can be worked around by moving the property to Player_Interaction.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| DescCat || String || || Normal description lang category. Leave empty for no description
|-
| DescEntry || String || || Normal description entry.
|-
| DescInsaneCat || String || || Insane description lang category. If empty normal is used.
|-
| DescInsaneEntry || String || || Insane description lang entry.
|-
| Sound || File (.snt) || || Normal sound played.
|-
| InsaneSound || File (.snt) || || Insane sound played. If empty, normal sound is played.
|-
|}

==Insanity==
Plays a random insanity event when the player collides with it, if their sanity doesn't exceed the value of MaxSanity_LongWait in the [[HPL2/game.cfg#Insanity|Insanity]] section of game.cfg (default 65). Each individual event has a MaxSanity value, above which the event cannot occur. There is a wait time between events, the exact amount depending on the player's current sanity, configured in the Insanity section of game.cfg. Insanity events do not repeat until all events have been played. See [[HPL2/TDD/main sanity events.cfg|main_sanity_events.cfg]] for more information on insanity events and their properties.

Similar to SlimeDamage areas, Insanity areas check for collision at random intervals. This is determined by the InsanityArea_CheckTimeMin and InsanityArea_CheckTimeMax properties in the Insanity section of game.cfg (default 1 to 15 seconds).

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| AutoDisable || Bool || false || If the area is disabled once effect is triggered.
|-
|}

==Ladder==
Defines an area that is considered a climbable ladder. Note: This is not the visible ladder that the player will see, just the area that lets them climb. This area should be placed a bit away from the ladder model.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| Material || String || metal || The type of sounds the player will make climbing the ladder<br>Can be "metal", "wood", or "rope".
|-
|}

==Liquid==
Defines an area that is considered water. Produces splash particles and sounds when the player, objects, and enemies are colliding with it. Slows down the player and affects the movement of objects; lighter objects will float and bob. Note: It is not visible in-game, and is usually accompanied by a no-collision plane with a water texture.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| Density || Float || 100 || Density of the water. The higher the heavier things float.
|-
| LinearViscosity || Float || 0.1 || The higher, the more slowed down things will be in linear transformations (changing position)
|-
| AngularViscosity || Float || 0.1 || The higher, the more slowed down things will be in angular transformations (changing rotation)
|-
| HasWaves || Bool || true || If object will go up and down in a wavelike manner.
|-
| WaveAmp || Float || 0.04 || Height of waves.
|-
| WaveFreq || Float || 3 || How fast the waves will go up and down.
|-
| PlayerSpeedMul || Float || 0.8 || Player speed is multiplied by this when in water.
|-
| MaxWaveDistance || Float || 25 || Max distance from player that objects get waves. This is an optimization thingie.
|-
| PhysicsMaterial || String || Water || Material of water.<br>Can be the name of any material defined in materials.cfg.
|-
|}

==Sticky==
Used to make entities "stick" to something. When an entity collides with this area, it will snap to it. The behavior can be configured. Example of Sticky areas in The Dark Descent include the Machine Room cogwheels and the Control Room pipe wall.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| MoveBody || Bool || true || If body is moved into position when placed<br>Moves the object so that the center of its body matches the area's center.
|-
| RotateBody || Bool || true || If body is rotated according to area.<br>Rotates the object so that its rotation matches the area's rotation.
|-
| CheckCenterInArea || Bool || true || If body center must be in area for it to be attached.
|-
| CanDetach || Bool || true || If the body can be detached.
|-
| PoseTime || Float || 1 || The time it takes to get moved and rotated into postion.
|-
| AttachableBodyName || String || || If not empty then this determines if a body can be attached or not. If the string exists in a body name, then it is attached.<br>A body name of an entity is EntityName_BodyName. Because of this, using a partial entity name will allow all entities with that string in their name to be attached.
|-
| AttachFunction || String || || Called on attach. Call AllowStickyAreaAttachment with if attachment should work (if AttachableBodyName succeeded then no need to call) ! Syntax: <code>void Func(string &in asStickyArea, string &in asBodyName)</code>
|-
| DetachFunction || String || || Called on detach. Syntax: <code>void Func(string &in asStickyArea, string &in asBodyName)</code>
|-
| AttachSound || File (.snt) || || Sound played when attaching body.
|-
| DetachSound || File (.snt) || || Sound played when detaching body.
|-
| AttachPS || File (.ps) || || Particles created when attaching body.
|-
| DetachPS || File (.ps) || || Particles created when detaching body.
|-
|}

==Rope==
Defines a rope. See [[HPL2/TDD/Rope|Rope]].

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| EndPosNode || String || || A PosNode area that sets the end of the rope
|-
| StartBody || String || || The body at the start of the rope. Game first looks for Body with name, and then for entity. Can be empty
|-
| EndBody || String || || The body at the end of the rope. Game first looks for Body with name, and then for entity. Can be empty
|-
| MinTotalLength || Float || 0.5 || The minimum length of the rope.
|-
| MaxTotalLength || Float || 10 || The maximum length of the rope.
|-
| AutoMove || Bool || false || If the rope automoves.
|-
| AutoMoveAcc || Float || 5 || Acceleration of automovement.
|-
| AutoMoveMaxSpeed || Float || 3 || The maximum speed for automovement.
|-
| RopeFile || File (.rope) || || If set, it overrides all of the settings below.
|-
| SegmentLength || Float || 0.3 || Length of each segment.
|-
| Damping || Float || 0.1 || The amount of air resistance. The higher the faster it slows down
|-
| Strength || Float || 200 || How much the rope pulls on the connected bodies
|-
| Stiffness || Float || 3 || How much slacking is allowed in the rope. The higher the less slacking.
|-
| Material || File (.mat) || textures/ropes/default.mat || The material used
|-
| Radius || Float || 0.025 || Radius of each segment
|-
| LengthTileAmount || Float || 1 || How many times each material is tiled in a segment
|-
| LengthTileSize || Float || 0.5 || Only used if SegmentLength=0. The length (in m) where material repeats.
|-
| Sound || File (.snt) || || Sound played when moving
|-
| SoundStartSpeed || Float || 0.49 || Speed when sound starts playing.
|-
| SoundStopSpeed || Float || 0.45 || Speed when sound stops playing.
|-
|}

==PathNode==
Used for enemy navigation and patrolling around the map. They can guide the enemies so they can avoid obstacles, climb stairs and over objects, not get stuck on walls or corners, and can wander around more freely. See [[HPL2/TDD/Entities/Enemies|Enemies]].

==PlayerStart==
Defines a location where the player may spawn, either at the start of the level or at a checkpoint after dying. Note: The player spawns looking in the direction of the blue arrow (positive Z), with their feet level at the area's center.

Also used as a teleport destination by the <code>TeleportPlayer</code> script function and as a camera position (when named "CameraPos") for menu background maps. When used as a camera position, the camera faces the ''opposite'' direction of the blue arrow (negative Z).