AMFP features a few new entity types.

== PhoneBox ==

The entity which executes phone calls. There's only one such asset in the game, and the entity file doesn't have any unique type vars (User Defined Variables). However, in the Level Editor, it has multiple instance vars.

{{HPL2 TypeVars Prop}}

{{HPL2 InstanceVars Prop|amfp}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| VoiceFile1 || File (.ogg) || || Voice file to be played.<br>The file has to be located in the ''sounds'' folder or one of its subfolders.
|-
| TextEntry1 || String || || The text entry to be used. Category is always Voice
|-
| Delay1 || Float || 1 || The time between text entries.
|-
| TextEntry2 || String || || The text entry to be used. Category is always Voice
|-
| Delay2 || Float || 1 || The time between text entries.
|-
| TextEntry3 || String || || The text entry to be used. Category is always Voice
|-
| Delay3 || Float || 1 || The time between text entries.
|-
| TextEntry4 || String || || The text entry to be used. Category is always Voice
|-
| Delay4 || Float || 1 || The time between text entries.
|-
| TextEntry5 || String || || The text entry to be used. Category is always Voice
|-
| Delay5 || Float || 1 || The time between text entries.
|-
| TextEntry6 || String || || The text entry to be used. Category is always Voice
|-
| Delay6 || Float || 1 || The time between text entries.
|-
| TextEntry7 || String || || The text entry to be used. Category is always Voice
|-
| Delay7 || Float || 1 || The time between text entries.
|-
|}

Not all 7 entries must be used, but there can't be more than that in a single phonecall.

The PhoneBox entity has three dedicated functions for it:

<syntaxhighlight lang="cpp">
void StartPhoneRinging(string& asName);
void StopPhoneRinging(string& asName);
void HangUpPhone(string& asName);
</syntaxhighlight>

#''asName '' - The phone box entity to use.

The PhoneBox won't ring until the <code>StartPhoneRinging</code> function is called. <code>StopPhoneRinging</code> can be used if the player leaves an area without picking up the phone, or takes too long.

When <code>StartPhoneRinging</code> is used, the PhoneBox will start ringing (the sound is only audible at a quite short distance, and a bell animation will play). A unique crosshair is shown when looking at the PhoneBox. Interacting with it will play a switch animation as well as the voice file, and display all the defined subtitles at specified intervals. After the voice file finishes playing, another switch animation will play and the glow will disappear (if it was used).

<code>HangUpPhone</code> ends the call early, stopping any voice lines currently playing. Plays a unique hang up sound (''entities/telephone/telephone_down.snt'') that is not used anywhere else.

Keep in mind that the green light which appears on the PhoneBox is not a part of the entity; it's a Lamp entity which needs to be enabled by scripting.

== Enemy_ManPig ==
The entity type used for the Wretch, Engineer, and Tesla manpigs. The Failed Experiments reuse Enemy_WaterLurker instead.

{{HPL2 TypeVars Enemy|amfp}}

{|class=wikitable
|+Type Vars
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
| HuntPauseMinTime || Float || 2 || Min time enemy spends not attacking after an attack.
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
| IsTesla || Bool || false || If this is the tesla pig
|-
| ChaseSound || File (.snt) || || Played when the pig is chasing.<br>Incorrectly defined as a string in EntityTypes.cfg.
|-
|}

{{HPL2 InstanceVars Enemy|amfp}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| ThreatenOnAlert || Bool || false || If the pig should stand still and threaten instead of walking towards player when in alert mode.
|-
| FleeFromPlayer || Bool || false || The pig will flee instead of hunting (threaten if ThreatenOnAlert). Disabled if far enough away. Will attack if cornered.<br>Running to the furthest PathNode seems to be the main behavior.<br>'''If the map has no PathNodes, the game will crash when the enemy notices the player!'''
|-
| AutoDisableAfterFlee || Bool || false || If pig should be disabled after having fled (if possible)<br>Must not be seen by the player and must be more than 15 meters away from them.
|-
| LanternSensitivity || Float || 1 || A modifier for how quickly the pig reacts to being shined on by the lantern.
|-
| IdleBehavior || String || || The behavior used when there are no patrol nodes left to walk.<br>Can be "None", "Stalk", or "Track".
|-
| PlayActivateSound || Bool || true || If the enemy can play its EnabledSound.
|-
| AllowZeroNodeWaitTimes || Bool || false || If set to true, path node wait times with value 0 actually mean no waiting<br>Normally, specifying a wait time of 0 in <code>AddEnemyPatrolNode</code> results in a wait time of 1-3 seconds.
|-
| PatrolMoveSpeed || String || Walk || Whether this pig walks or runs along its patrol<br>Can be "Walk" or "Run".
|-
| DamageMul || Float || 1 || Multiplier for the enemy's attack damage.
|-
| RunSpeedMul || Float || 1 || Multiplier for the enemy's run speed.
|-
| HuntPauseTimeMul || Float || 1 || Multiplier for the wait time between attacks.
|-
|}

== Enemy_Child ==

An enemy variation used for acting out scenes. This "enemy" doesn't seem to respond to any player input, aside from proximity. Used mainly for the Mandus twins, but also for the NPCs seen running in the Streets chapter.

{{HPL2 TypeVars Enemy|amfp}}

{{HPL2 InstanceVars Enemy|amfp}}

EntityTypes.cfg has a few instance vars listed in the Enemy base class that in fact only apply to Enemy_ManPig. These are skipped here.

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| PatrolMoveSpeed || String || Walk || The movement speed type to use when patrolling.<br>Can be "Walk" or "Run".
|-
|}

== AnimatedProp ==
Identical to StaticProp, except it can play an animation. Used for models that have a continuous looping animation but otherwise have no interactivity, such as fans and machines that have moving dials or spin.

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| CastShadows || Bool || true || If entity casts shadows.
|-
| IsAffectedByDecal || Bool || true || If decals can be created on entity.
|-
|}

== VoiceFlashbackTrigger ==

A prop that plays a voice flashback with screen effects when interacted with. The type of all entities in ''entities/voice_triggers''. Unused in the official maps, as they seem to have been replaced by Script areas that call <code>PlayEffectVoice</code> when collided with.

{{HPL2 TypeVars Prop|amfp}}

{{HPL2 InstanceVars Prop|amfp}}

{|class=wikitable
|+Instance Vars
! Name !! Type !! Default !! Description
|-
| VoiceFile || File (.ogg) || || Voice file to be played.
|-
| TextEntry || String || || The text entry to be used. Category is always Voice
|-
|}