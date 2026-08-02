{{DISPLAYTITLE:game.cfg}}
{{TocRight}}
This page lists entries within the '''game.cfg''' file found in '''/config''' and in full conversion mods. Warning: Some of the descriptions are missing and some are currently untested assumptions. WIP page.
== Input ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|MaxSmoothMousePos||The maximum amount of interpolated positions for mouse smoothing 
|-
|PrevSmoothMousePosMul||The multiplier for the weight of smoothed mouse positions
|}

== Sound ==
{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|InGameMusicvolume||Global volume for music
|}

== Effects ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|VoiceTextFontSize||Subtitle font size
|-
|VoiceTextRowWidth||Subtitle width limit before it breaks a new line
|}

== Quest ==
Used to calculate the level completion percentage formerly seen when looking at a LevelDoor. The amount is still calculated, but the percentage is never displayed.
{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|QuestCompletionValue||The amount each quest contributes to the completion amount
|-
|ItemCompletionValue||The amount each item contributes to the completion amount
|-
|NoteCompletionValue||The amount each note contributes to the completion amount
|-
|DiaryCompletionValue||The amount each diary contributes to the completion amount
|-
|FlashbackCompletionValue||The amount each flashback contributes to the completion amount
|-
|ChestCompletionValue||The amount each chest contributes to the completion amount
|}

== Saving ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|MaxAutoSaves||Amount of maximum auto saves to store in user files
|}

== Enemy ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|EnemyDarknessGlowMaxDistance||Maximum distance from player that enemies glow in darkness
|}

== Insanity ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|EventsFile||Name of file to use for insanity events. Default: '''misc/main_sanity_events.cfg''' 
|-
|MinTimeBetweenEvents||Minimum time until another insanity event can happen again
|-
|MaxEventSanity||Maximum sanity the player can have to experience insanity events (unused, MaxSanity_LongWait is used instead)
|-
|MaxSanity_LongWait||The maximum sanity to use the long delay between events
|-
|MaxSanity_MedWait||The maximum sanity to use the medium delay between events
|-
|MaxSanity_ShortWait||The maximum sanity to use the short delay between events
|-
|TimeBetween_LongWait||The long delay between events
|-
|TimeBetween_MedWait||The medium delay between events
|-
|TimeBetween_ShortWait||The short delay between events
|-
|MaxExamineSanity||The sanity below which ExamineAreas will display their "Insane" message (non-functional)
|-
|InsanityArea_CheckTimeMin||The minimum amount of time between InsanityArea collision checks
|-
|InsanityArea_CheckTimeMax||The maximum amount of time between InsanityArea collision checks
|}

== Slime ==
As of version 1.5, additional slime types can be defined with additional sets of SlimeTypeX_ entries.
{| class="wikitable sortable" border=1
|SlimeType0_AttackSound||Sound played when attacked by a slime area
|-
|SlimeType0_AttackPS||Particles played when attacked by a slime area
|-
|SlimeType0_MinAttackDamage||Minimum damage a slime area can inflict
|-
|SlimeType0_MaxAttackDamage||Maximum damage a slime area can inflict
|-
|SlimeType0_ScreenShakeAmount||Amount of screen shake applied when hit by a slime area
|}

== Player_General ==

{| class="wikitable sortable" border=1
|FOV||The "Field of View" of the player's camera
|-
|FarClipPlane||The distance from the camera past which to cut off rendering, for optimization
|-
|NearClipPlane||The distance from the camera before which to cut off rendering
|-
|FocusTextFont||The font used when displaying text in focus by the player (extension .fnt)
|-
|HeadSpinDamageSpeed||The speed at which the player's head spins when damaged
|-
|HeadSpinDeacc||The deacceleration to slow down head spin
|-
|MaxCameraSmoothAngles||Unused
|-
|TerrorSound||The sound played when chased by an enemy
|-
|TerrorIncSpeed||The speed that the terror meter volume increases
|-
|TerrorDecSpeed||The speed that the terror meter volume decreases
|-
|MaxPrevSpeedsSaved||The maximum amount of previous speeds to keep track of when calculating average speed
|-
|AutoKillYPos||The Y coordinate position in the level to automatically kill the player at if they pass
|-
|FlashbackRadialBlurSize||The size of the radial blur effect applied during flashbacks
|-
|FlashbackRadialBlurStartDist||The start distance of the radial blur during flashbacks
|-
|FlashbackWorldSoundVolume||The global sound level used during flashbacks
|-
|FlashbackMoveSpeedMul||The walk speed multiplier during flashbacks
|-
|FlashbackRunSpeedMul||The run speed multiplier during flashbacks
|-
|Death_HeightAdd||The height change of the camera during death
|-
|Death_HeightAddCrouch||The height change of the camera during death (while crouching)
|-
|Death_FadeTime||The fade out time during death
|-
|Death_MaxSanityGain||The maximum amount of sanity the player respawns with
|-
|Death_MaxHealthGain||The maximum amount of health the player respawns with
|-
|Death_MaxOilGain||The maximum amount of oil the player respawns with
|-
|Death_MinSanityGain||The minimum amount of sanity the player respawns with
|-
|Death_MinHealthGain||The minimum amount of health the player respawns with
|-
|Death_MinOilGain||The minimum amount of oil the player respawns with
|-
|Death_HeightAddSpeed||The speed of which the height change of the camera changes
|-
|Death_RollSpeed||The speed of camera roll when dying
|-
|Death_StartSound||The sound played when dying
|-
|Death_AwakenSound||The sound played when respawning
|-
|InsanityCollapse_HeightAddGoal||The height change of the camera during a sanity collapse
|-
|InsanityCollapse_HeightAddCollapseSpeed||The speed of which the camera change happens
|-
|InsanityCollapse_HeightAddAwakeSpeed||The speed of which the camera changes back to normal
|-
|InsanityCollapse_RollCollapseSpeed||The speed of which the camera rolls when collapsing
|-
|InsanityCollapse_RollAwakeSpeed||The speed of which the camera rolls back to normal
|-
|InsanityCollapse_AwakenSanity||The sanity the player is left with after awaking a sanity collapse
|-
|InsanityCollapse_SleepTime||The time the player is collapsed
|-
|InsanityCollapse_SleepSpeedMul||The speed multiplier while collapsed
|-
|InsanityCollapse_WakeUpSpeedMul||The speed multiplier while waking up
|-
|InsanityCollapse_StartSound||The sound played when collapsing
|-
|InsanityCollapse_AwakenSound||The sound played when awaking a collapse
|-
|InsanityCollapse_SleepLoopSound||The sound played while being collapsed
|-
|InsanityCollapse_SleepLoopSoundVolume||The sound volume while collapsed
|-
|InsanityCollapse_SleepRandomSound||Random sounds being played while collapsed
|-
|InsanityCollapse_SleepRandomMinTime||The minimum amount of time between a random sound
|-
|InsanityCollapse_SleepRandomMaxTime||The maximum amount of time between a random sound
|-
|Hurt_EffectStartHealth||At what health amount should damage effects start playing
|-
|Hurt_MinSpeedMul||Minimum speed multiplier while hurt
|-
|Hurt_MaxPantCount||The maximum duration of panting while hurt and standing still
|-
|Hurt_PantSpeed||The speed that the camera bobs when hurt panting
|-
|Hurt_PantSize||The amount that the camera bobs when hurt panting
|-
|HealthRegainSpeed||The amount of health regenerated per second
|-
|HealthRegainLimit||The maximum amount that health regenerates to
|-
|Hurt_NoiseAlpha||The amount of opacity for the noise effect when on low health
|-
|Hurt_NoiseFreq||The frequency of the noise effect
|-
|Hurt_NoiseColor||The color of the noise effect (red, green, blue, alpha)
|-
|SanityGain_Color||The color of the sanity boost effect (red, green, blue, alpha)
|-
|SanityGain_Sound||The sound played when given a sanity boost
|-
|SanityGain_FadeInTime||The time it takes to fade in a sanity boost
|-
|SanityGain_FadeOutTime||The time it takes to fade out a sanity boost
|-
|HandsRotationSmoothNum||The amount of intervals used when smoothing the player hand rotation
|-
|HandsPosAddMul||The multiplier for player hand position
|-
|FallDamageBounceSizeMul||The multiplier for camera bounce amount when taking fall damage
|-
|FallDamageBounceSpeedMul||The multiplier for camera bounce speed when taking fall damage
|-
|FallDamageSpeed_Min||The minimum amount of speed needed to receive minimum fall damage
|-
|FallDamage_Min||The minimum amount of damage received from minor falls
|-
|FallDamageSound_Min||The sound played when taking minimum fall damage
|-
|FallDamageSpeed_Med||The minimum amount of speed needed to receive medium fall damage
|-
|FallDamage_Med||The minimum amount of damage received from medium falls
|-
|FallDamageSound_Med||The sound played when taking medium fall damage
|-
|FallDamageSpeed_Max||The minimum amount of speed needed to receive maximum fall damage
|-
|FallDamage_Max||The minimum amount of damage received from major falls
|-
|FallDamageSound_Max||The sound played when taking maximum fall damage
|}

== Player_Interaction ==

{| class="wikitable sortable" border=1
|GrabMaxForce||Maximum force applied to the held grab object
|-
|GrabMaxTorque||Maximum torque applied to the held grab object
|-
|GrabMaxAngularSpeed||Maximum angular speed for held grab object
|-
|GrabMinSlowPlayerMass||The minimum mass to slow the player when holding a grab object
|-
|GrabMaxSlowPlayerMass||The maximum mass to slow the player when holding a grab object
|-
|GrabMinSlowPlayerMul||The minimum multiplier to slow the player by when holding a grab object (scales with object mass)
|-
|GrabMaxLeaveAngularSpeed||The maximum angular speed to apply to a grab object when dropping it
|-
|GrabMaxLeaveLinearSpeed||The maximum linear speed to apply to a grab object when dropping it
|-
|PushMaxSpeedWalk||The maximum amount of force applied to a push object while walking
|-
|PushMaxSpeedRun||The maximum amount of force applied to a push object while running
|-
|PushMaxSpeedCrouch||The maximum amount of force applied to a push object while crouching
|-
|PushForceWalk||The amount of force applied to a push object while walking
|-
|PushForceRun||The amount of force applied to a push object while running
|-
|PushForceCrouch||The amount of force applied to a push object while crouching
|-
|PushYawRange||The range of the yaw limit when pushing
|-
|PushPitchMinRange||The minimum pitch range when pushing
|-
|PushPitchMaxRange||The maximum pitch range when pushing
|-
|PushMaxForce||Maximum amount of force applied when pushing
|-
|MoveToMouseAddFactor||The multiplier for the amount the mouse is moved by when moving a slide object, wheel, lever, or swing door
|-
|MoveMaxForce||Maximum amount of torque applied when moving a wheel, lever, or swing door
|-
|SlideMaxForce||Maximum amount of force applied to a slide object
|-
|Default_DefaultMaxFocusDist||The default maximum distance at which the player can focus objects from
|-
|Grab_DefaultMaxFocusDist||The default maximum distance at which the player can grab objects from
|-
|Push_DefaultMaxFocusDist||The default maximum distance at which the player can push objects from
|-
|Slide_DefaultMaxFocusDist||The default maximum distance at which the player can slide objects from
|-
|SwingDoor_DefaultMaxFocusDist||The default maximum distance at which the player can use a swing door from
|-
|Lever_DefaultMaxFocusDist||The default maximum distance at which the player can use a lever from
|-
|Wheel_DefaultMaxFocusDist||The default maximum distance at which the player can use a wheel from
|-
|Item_DefaultMaxFocusDist||The default maximum distance at which the player can use an item from
|-
|LevelDoor_DefaultMaxFocusDist||The default maximum distance at which the player can use a level door from
|-
|MultiSlider_DefaultMaxFocusDist||The default maximum distance at which the player can use a multi slider from
|-
|Commentary_MaxFocusDist||The maximum distance at which the player can activate a commentary icon from
|-
|Ladder_MaxFocusDist||The maximum distance at which the player can use a ladder from
|-
|Examine_MaxFocusDist||The maximum distance at which the player can focus an examine area from
|-
|Sign_MaxFocusDist||The maximum distance at which the player can focus a sign area from
|-
|ScriptArea_MaxFocusDist||The maximum distance at which the player can focus a script area from
|-
|MinUseItemDistance||The minimum distance an item can be used from
|}

== Player_Body ==

{| class="wikitable sortable" border=1
|Mass||The mass of the player's body
|-
|Size||The size of the player's cylinder shape body
|-
|CrouchSize||the size of the player while crouching
|-
|GravityForce||The amount and direction of the gravitational pull (X, Y, Z)
|-
|CameraPosAdd||The position of the camera on the player (X, Y, Z)
|-
|CameraSmoothPosNum||The maximum amount of smoothed camera positions to keep track of
|-
|AccurateClimbing||Whether climbing on ladders should be accurate
|-
|MaxNoSlideSlopeAngle||Maximum angle of environment before the player starts sliding down
|-
|MaxPushMass||The maximum mass the player can push by the use of objects
|-
|PushForce||The force used when pushing by object collision
|-
|CharacterMaxPushMass||The maximum mass the player's body can push
|-
|CharacterPushForce||The force used when pushing by player collision.
|-
|MaxStepSize||The maximum size of the player's steps
|-
|MaxStepSizeInAir||The maximum step size while in the air
|-
|StepClimbSpeed||The speed at which the player's steps happen when climbing a ladder
|}

== Player_Darkness ==

{| class="wikitable sortable" border=1
|MinLightLevel||The minimum level of light before the night vision is activated
|-
|RadiusAdd||The radius of the active night vision effect
|-
|AmbientLightMinLightLevel||The minimum light level for the night vision effect
|-
|AmbientLightRadius||The radius of the night vision effect
|-
|AmbientLightIntensity||The intensity of the night vision effect's light level
|-
|AmbientLightFadeInTime||The time it takes to fade in the full night vision effect
|-
|AmbientLightFadeOutTime||The time it takes to fade out from the full night vision effect
|-
|AmbientLightColor||The color for the night vision effect
|-
|LoopSoundFile||The sound file played and looped while in the darkness
|-
|LoopSoundVolume||The volume for the darkness sound
|-
|LoopSoundStartupTime||The time it takes for the darkness sound to start playing
|-
|LoopSoundFadeInSpeed||The time it takes for the darkness sound to fade in
|-
|LoopSoundFadeOutSpeed||The time it takes for the darkness sound to fade out
|-
|SanityLossPerSecond||The amount of sanity drained per second while in the darkness
|}

== Player_Sanity ==

{| class="wikitable sortable" border=1
|HitZoomInSpeed||The zoom in speed of the sanity drain effect when hit for sanity damage
|-
|HitZoomOutSpeed||The zoom out speed of the sanity drain effect when hit for sanity damage
|-
|HitZoomInFOVMul||The field of view multiplier when zooming in
|-
|HitZoomInAspectMul||The aspect ratio multiplier when zooming in
|-
|SanityRegainSpeed||The speed for regaining sanity when in light
|-
|SanityRegainLimit||The maximum limit for automatically regaining sanity
|-
|SanityVeryLowLimit||The limit to determine very low sanity, below which adds pant sounds and image trails
|-
|SanityEffectsStart||The maximum amount of sanity before sanity effects can play
|-
|SanityWaveAlphaMul||The alpha multiplier for the wave effect during sanity drain
|-
|SanityWaveSpeedMul||The speed multiplier for the wave effect during sanity drain
|-
|CheckNearEnemyInterval||The frequency of the interval to check for nearby enemies
|-
|NearEnemyDecrease||The sanity decrease when looking at enemies
|-
|NearCritterDecrease||The sanity decrease when near critters (only used by CritterSpider)
|-
|StartSwayMaxSanity||The maximum amount of sanity before the swaying sanity effect plays
|-
|SwayMaxSavedPositions||The maximum amount of sway (pitch and yaw) positions to keep track of
|-
|SanityLowLimit||The amount of sanity below which is considered having low sanity
|-
|SanityLowLimitMaxTime||The duration that sanity must be low in order to be set to SanityLowNewSanityAmount
|-
|SanityLowNewSanityAmount||The amount to set sanity to after being low (below SanityLowLimit) for SanityLowLimitMaxTime seconds
|-
|LightLampMinSanityIncrease||The minimum sanity increase while in the light of the lantern
|-
|LightLampMaxSanityIncrease||The maximum sanity increase while in the light of the lantern
|}

== Player_Lantern ==
The main properties of the lantern light actually come from a light entity attached to the lantern model itself, not the entries here.
{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|Color||The color of the lantern light (red, green, blue, alpha)
|-
|Radius||The radius of the lantern light<br>0.0001 by default, making it too small to be visible
|-
|Gobo||The gobo file for the lantern light
|-
|LocalOffset||The offset of the lantern light relative to the camera
|-
|TurnOnSound||The sound for enabling the lantern
|-
|TurnOffSound||The sound for disabling the lantern
|-
|OutOfOilSound||The sound for when the lantern is out of oil
|-
|DisabledSound||The sound for when the lantern is disabled
|-
|CastShadows||Whether the lantern light should cast shadows
|-
|LowerOilSpeed||The speed at which the oil is drained from the lantern
|-
|FadeLightOilAmount||The level of oil at which to fade the lantern light
|}

== Player_Ladder ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|UpSpeed||The speed the player climbs up the ladder
|-
|DownSpeed||The speed the player climbs down the ladder
|-
|StepLength||The length of each step in the ladder
|}

== Player_Movement_Default ==

{| class="wikitable sortable" border=1
|ForwardAcc||The forwards acceleration speed
|-
|SidewayAcc||The sideways acceleration speed
|-
|ForwardDeacc||The forwards deacceleration speed
|-
|SidewayDeacc||The sideways deacceleration speed
|-
|ForwardOppositeDirAccMul||The acceleration speed when changing to the opposite direction while moving forwards
|-
|SidewayOppositeDirAccMul||The acceleration speed when changing to the opposite direction while moving sideways
|}

== Player_Movement_Normal ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|JumpSound||The sound played when jumping
|-
|CrouchSound||The sound played when crouching
|-
|StandSound||The sound played when un-crouching
|-
|MaxForwardSpeed||The maximum speed when walking forwards
|-
|MaxBackwardSpeed||The maximum speed when walking backwards
|-
|MaxSidwaySpeed||The maximum speed when walking sideways
|-
|RunForwardMul||The forwards running multiplier
|-
|RunBackwardMul||The backwards running multiplier
|-
|RunSidewayMul||The sideways running multiplier
|-
|CrouchForwardMul||The multiplier for crouching forwards
|-
|CrouchBackwardMul||The multiplier for crouching backwards
|-
|CrouchSidewayMul||The multiplier for crouching sideways
|-
|InAirForwardMul||The multiplier for moving forwards while in mid-air
|-
|InAirBackwardMul||The multiplier for moving backwards while in mid-air
|-
|InAirSidewayMul||The multiplier for moving sideways while in mid-air
|-
|MaxJumpCount||The maximum amount of time the jump button can be held down before jumping is stopped
|-
|JumpStartForce||The force applied when jumping
|-
|JumpCrouchStartForce||The force applied when crouch jumping
|-
|CrouchBobMax||The maximum amount of camera bobbing while crouching
|-
|WalkBobMax||The maximum amount of camera bobbing while walking
|-
|RunBobMax||The maximum amount of camera bobbing while running
|-
|CrouchMinBobSpeed||The minimum speed of bobbing while crouching
|-
|CrouchMaxBobSpeed||The maximum speed of bobbing while crouching
|-
|WalkMinBobSpeed||The minimum speed of bobbing while walking
|-
|WalkMaxBobSpeed||The maximum speed of bobbing while walking
|-
|RunMinBobSpeed||The minimum speed of bobbing while running
|-
|RunMaxBobSpeed||The maximum speed of bobbing while running
|-
|GroundBounceSize||The amount to bounce the camera when hitting the ground after falling
|-
|GroundBounceSpeed||The speed at which the camera bounces when hitting the ground after falling
|-
|MinHitGroundBounceSpeed||The minimum falling speed to do a ground bounce on landing
|}

== Player_Movement_ClimbLedge ==

{| class="wikitable sortable" border=1
!Parameter!!Functionality
|-
|CheckUpdatesPerSecond||The amount of updates per second while climbing
|-
|ClimbLedgeCheckDistForward||The distance forward of the player to start the ledge check
|-
|ClimbLedgeCheckDistFromTop||The distance above the player's feet to start the ledge check
|-
|ClimbLedgeCheckDistTopToEnd||The distance to the end position of the ledge check
|-
|CheckMaxPushDist||The maximum distance to move the player when climbing a ledge
|-
|HeadMoveSpeed||The speed at which the player's head (the camera) moves
|-
|HeadMoveSlowdownDist||The distance where the head starts slowing down
|-
|GivePlayerControlDist||The distance at which the player regains control from the edge of the ladder
|-
|MovePitchFactor||The amount to multiply camera pitch by when climbing a ledge
|-
|MaxMovePitchSpeed||The maximum amount to change the pitch by when climbing a ledge
|}