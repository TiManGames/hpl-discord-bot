== Engine scripts ==

A list of script functions available in A Machine For Pigs (that are not present in The Dark Descent). Many of TDD's scripts are available in AMFP, but not all. Some are replaced by ones listed below, and others are removed.

=== General ===

<syntaxhighlight lang="cpp">
void CheckPoint(string& asName, string& asStartPos, string& asCallback, string& asDeathHintCat, string& asDeathHintEntry, bool abKeepPlayerInLimbo);
</syntaxhighlight>

Creates a check point where the player will respawn if they die. '''Callback syntax:'''<code>void MyFunc(string &in asName, int alCount)</code>
This function replaces TDD's <code>CheckPoint()</code>.

# ''asName'' - The internal name of the callback
# ''asStartPos'' - The name of the PlayerStartArea to respawn at
# ''asCallback'' - The name of the callback function to run
# ''asDeathHintCat'' - The name of the .lang file category
# ''asDeathHintEntry'' - The name of the .lang file entry
# ''abKeepPlayerInLimbo'' - Whether to put the player into a state of "limbo" upon death. In limbo, the death occurs normally, but once the screen fades to black, it remains so until <code>ReleasePlayerFromLimbo()</code>  is called. Player is still controllable during death.
<syntaxhighlight lang="cpp">
void ReleasePlayerFromLimbo();
</syntaxhighlight>

Respawns the player if stuck in "limbo". Limbo can be enabled with ''CheckPoint''. Limbo is the state between life and death. The player enters limbo upon dying but won't respawn until this function is called.

=== Particle Systems ===

<syntaxhighlight lang="c++">
void SetParticleSystemActive(string& asName, bool abActive);
</syntaxhighlight>

Pauses a particle system in its current frame. The paused particle system remains frozen at this frame until reactivated or destroyed.

# ''asName'' - The name of the particle system
# ''abActive'' - False to pause, true to unpause

<syntaxhighlight lang="c++">
void DestroyParticleSystemInstantly(string& asName);
</syntaxhighlight>

Destroys a particle system and any existing particles already emitted from it. Similar to ''DestroyParticleSystem'', except that one will not destroy the existing particles and rather let them live out their lives. This function will cut all particles' lives short.

#''asName'' - The internal name of the particle system

=== Sounds ===

<syntaxhighlight lang="c++">
void AddEffectVoice2(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with two consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 2 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

<syntaxhighlight lang="c++">
void AddEffectVoice3(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, string& asText3Entry, float afText3Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with three consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 3 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''asText3Entry''  - The third .lang subtitle entry
# ''afText3Delay''  - The time to wait until the third subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

<syntaxhighlight lang="c++">
void AddEffectVoice4(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, string& asText3Entry, float afText3Delay, string& asText4Entry, float afText4Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with four consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 4 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''asText3Entry''  - The third .lang subtitle entry
# ''afText3Delay''  - The time to wait until the third subtitle starts
# ''asText4Entry''  - The fourth .lang subtitle entry
# ''afText4Delay''  - The time to wait until the fourth subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

<syntaxhighlight lang="c++">
void AddEffectVoice5(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, string& asText3Entry, float afText3Delay, string& asText4Entry, float afText4Delay, string& asText5Entry, float afText5Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with five consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 5 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''asText3Entry''  - The third .lang subtitle entry
# ''afText3Delay''  - The time to wait until the third subtitle starts
# ''asText4Entry''  - The fourth .lang subtitle entry
# ''afText4Delay''  - The time to wait until the fourth subtitle starts
# ''asText5Entry''  - The fifth .lang subtitle entry
# ''afText5Delay''  - The time to wait until the fifth subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

<syntaxhighlight lang="c++">
void AddEffectVoice5(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, string& asText3Entry, float afText3Delay, string& asText4Entry, float afText4Delay, string& asText5Entry, float afText5Delay, string& asText6Entry, float afText6Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with six consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 6 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''asText3Entry''  - The third .lang subtitle entry
# ''afText3Delay''  - The time to wait until the third subtitle starts
# ''asText4Entry''  - The fourth .lang subtitle entry
# ''afText4Delay''  - The time to wait until the fourth subtitle starts
# ''asText5Entry''  - The fifth .lang subtitle entry
# ''afText5Delay''  - The time to wait until the fifth subtitle starts
# ''asText6Entry''  - The sixth .lang subtitle entry
# ''afText6Delay''  - The time to wait until the sixth subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

<syntaxhighlight lang="c++">
void AddEffectVoice7(string& asVoiceFile, string& asEffectFile, string& asTextCat, string& asTextEntry, float afTextDelay, string& asText2Entry, float afText2Delay, string& asText3Entry, float afText3Delay, string& asText4Entry, float afText4Delay, string& asText5Entry, float afText5Delay, string& asText6Entry, float afText6Delay, string& asText7Entry, float afText7Delay, bool abUsePostion, string& asPosEnitity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

Plays an audio file with seven consecutive subtitles.

# ''asVoiceFile''  - The entire voice file to play (intended to include 7 sections)
# ''asEffectFile''  - The background effect file to play during voices. Leave empty for no extra effect
# ''asTextCat''  - The .lang text category for the subtitles
# ''asTextEntry''  - The first .lang subtitle entry
# ''afTextDelay''  - The time to wait until the first subtitle starts
# ''asText2Entry''  - The second .lang subtitle entry
# ''afText2Delay''  - The time to wait until the second subtitle starts
# ''asText3Entry''  - The third .lang subtitle entry
# ''afText3Delay''  - The time to wait until the third subtitle starts
# ''asText4Entry''  - The fourth .lang subtitle entry
# ''afText4Delay''  - The time to wait until the fourth subtitle starts
# ''asText5Entry''  - The fifth .lang subtitle entry
# ''afText5Delay''  - The time to wait until the fifth subtitle starts
# ''asText6Entry''  - The sixth .lang subtitle entry
# ''afText6Delay''  - The time to wait until the sixth subtitle starts
# ''asText7Entry''  - The seventh .lang subtitle entry
# ''afText7Delay ''- The time to wait until the seventh subtitle starts
# ''abUsePosition''  - Whether to use 3D to play the sound from an entity
# ''asPosEntity''  - The entity to play the sound from. If empty, plays from player
# ''afMinDistance''  - The minimum distance required between the player and the entity in order to hear the audio
# ''afMaxDistance''  - The maximum distance allowed between the player and the entity in order to hear the audio

=== Screen Effects ===

<syntaxhighlight lang="cpp">
void ShowScreenImage(string& asImageName, float afX, float afY, float afScale, bool abUseRelativeCoordinates, float afDuration, float afFadeIn, float afFadeOut);
</syntaxhighlight>

Shows a 2D image on the screen. Originally used for showing the intro logo during a sequence.

May work similarly to the [[HPL2/Tutorials/ShowScreenImage()|ATTD 1.5 ShowScreenImage()]].

# ''asImageName''  - The image file to show. Does not have to be pow2 (although it gives a warning if not)
# ''afX''- The X position of the top left corner, starting from the center of the screen. Use negative half of the width of the image to center it.
# ''afY''- The Y position of the top left corner, starting from the center of the screen.
# ''afScale'' - The size of the image in pixels (not scale), or original image size if negative
# ''abUseRelativeCoordinates'' - Whether X and Y are relative to the screen resoltion, or pixel co-ordinates if not
# ''afDuration'' - How long, in seconds, the image displays. This does not include fade times
# ''afFadeIn'' - How long, in seconds, the fade in spends
# ''afFadeOut'' - How long, in seconds, the fade out spends

=== Journal ===

<syntaxhighlight lang="cpp">
void AddHint(string& asNameAndTextEntry, string& asImage);
</syntaxhighlight>

Adds a hint to the player's journal.<br>This function replaces TDD's ''AddDiary''.

# ''asNameAndTextEntry'' - The .lang text entry of the hint. The entry must be in category "Journal" and use the format Hint_MyHint_Name for the title and Hint_MyHint_Text for the body, where MyHint replaces the value you put in this argument.
# ''asImage'' - This argument does not seem to be used. Presumed to be for displaying an image but possibly removed functionality. All existing occurrences are empty.

<syntaxhighlight lang="cpp">
bool GetJournalDisabled();
</syntaxhighlight>

Returns if the journal is currently disabled.

<syntaxhighlight lang="cpp">
void SetJournalDisabled(bool abX);
</syntaxhighlight>

Disables the player's ability to open their journal.

# ''abX''  - True to disable, false to enable again

=== Player ===

<syntaxhighlight lang="c++">
void SetLanternFlickerActive(bool abX);
</syntaxhighlight>

Enables/disables the flicker effect for the lantern's light.

# ''abX'' - True to flicker, false to not flicker

<syntaxhighlight lang="c++">
void SetPlayerInfection(float afInfection);
</syntaxhighlight>

Sets the [[HPL2/AMFP/Infection|infection]] level for the player. Infection replaces sanity from TDD and acts similar, however it goes from 0-100 instead of 100-0. An infection level above 50 will affect the player's ability to move. Infection level above 80 will kill the player after a 2 second delay. Infection slowly decreases over time, unless above 75. <br />This function replaces TDD's ''SetPlayerSanity''.

# ''afInfection'' - The level of infection to set

<syntaxhighlight lang="c++">
void AddPlayerInfection(float afInfection);
</syntaxhighlight>

Adds an amount of infection to the player's current amount.<br>This function replaces TDD's ''AddPlayerSanity''.

# ''afInfection'' - The amount to add

<syntaxhighlight lang="cpp">
float GetPlayerInfection();
</syntaxhighlight>

Returns the amount of infection the player currently has.<br>This function replaces TDD's ''GetPlayerSanity''.

<syntaxhighlight lang="cpp">
void GiveInfectionDamage(float afAmount, bool abUseEffect);
</syntaxhighlight>

Increases the infection of the player.<br>This function replaces TDD's ''GiveSanityDamage''.

# ''afAmount'' - Amount of infection damage done
# ''abUseEffect'' - Determines whether a sound effect is played when the infection damage is dealt

<syntaxhighlight lang="c++">
void SetInfectionFauxMode(bool abFauxMode);
</syntaxhighlight>

Enable/disable "faux mode" for infection. In faux mode, the player cannot die of infection and infection sounds don't play.

<syntaxhighlight lang="c++">
void FadePlayerPitchTo(float afX, float afSpeedMul, float afMaxSpeed);
</syntaxhighlight>

Moves the player's pitch (up and down rotation).

# ''afX'' - The target pitch to move towards. 0 = straight forward. Clamped to range: -70 to +70.
# ''afSpeedMul'' - The speed multiplier of the movement. A low value makes a slow change.
# ''afMaxSpeed'' - The max speed of the movement.

<syntaxhighlight lang="c++">
void SetPlayerUsesDragFootsteps(bool abX);
</syntaxhighlight>

Sets whether the player's footstep sounds are replaced with "drag" versions. Some surface materials do not have drag steps, and will therefore play no footstep sounds.

# abX - Whether to use "drag" step sounds

=== Entities ===

==== General ====

<syntaxhighlight lang="c++">
bool GetEntityActive(string& asName);
</syntaxhighlight>

Returns whether an entity in the level is active or not.

# ''asName'' - The entity to check

<syntaxhighlight lang="c++">
void CreateEntityAtArea(string& asEntityName, string& asEntityFile, string& asAreaName, bool abFullGameSave, float afPosX, float afPosY, float afPosZ, float afRotX, float afRotY, float afRotZ);
</syntaxhighlight>

Creates an entity at an area with the specified offsets and rotation. <br />This function replaces TDD's ''CreateEntityAtArea''.

# ''asEntityName'' - The internal name of the created entity
# ''asEntityFile'' - The file for the entity (extension .ent)
# ''asAreaName'' - The area to create entity at
# ''abFullGameSave'' - Determines whether an entity "remembers" its state
# ''afOffsetX'' - The offset along the X axis in units
# ''afOffsetY'' - The offset along the Y axis in units
# ''afOffsetZ'' - The offset along the Z axis in units
# ''afRotX'' - The rotation on the X axis in degrees
# ''afRotY'' - The rotation on the Y axis in degrees
# ''afRotZ'' - The rotation on the Z axis in degrees

==== Props ====

<syntaxhighlight lang="c++">
void SetPhysicsAutoDisable(string& asName, bool abAutoDisable);
</syntaxhighlight>

If physics bodies will automatically sleep (become inactive and stop moving). Only used on chandeliers in the campaign.

# ''asName'' - The prop to affect
# ''abAutoDisable'' - Whether physics auto disables or not

<syntaxhighlight lang="c++">
void AttachPropToBone(string& asChildEntityName, string& asParentEntityName, string& asParentBoneName, float fPosX, float fPosY, float fPosZ, float fRotX, float fRotY, float fRotZ);
</syntaxhighlight>

Attaches a prop to a specific bone within another entity. You can inspect bones in the Model Editor. Note: Offsets and rotations are local to the bone and relative to its rotation.

# ''asChildEntityName'' - The prop to attach
# ''asParentEntityName'' - The entity that holds the bone to attach to
# ''asParentBoneName'' - The bone within the entity to attach to
# ''afPosX'' - Offset along the X axis
# ''afPosY'' - Offset along the Y axis
# ''afPosZ'' - Offset along the Z axis
# ''afRotX'' - Rotation along the X axis
# ''afRotY'' - Rotation along the Y axis
# ''afRotZ'' - Rotation along the Z axis

<syntaxhighlight lang="c++">
void DetachPropFromBone(string& asChildEntityName);
</syntaxhighlight>

Detaches an attached prop. Note: When detached, physics are not automatically enabled on the prop.

# ''asChildEntityName'' - The attached prop

<syntaxhighlight lang="c++">
void AttachAreaToProp(string& asAreaName, string& asProp, int alBody);
</syntaxhighlight>

Attaches an area to a prop. Originally used to attach a liquid area to a movable water plane entity in the sewers map.

# ''asAreaName'' - The area to attach
# ''asProp'' - The prop to attach area to
# ''alBody'' - The ID of the physics body of the prop to attach to

<syntaxhighlight lang="c++">
void StopPropAnimation(string& asProp);
</syntaxhighlight>

Stops the animation currently playing on a prop. Animations can be started with ''PlayPropAnimation''.

# ''asProp'' - The name of the prop

<syntaxhighlight lang="c++">
void PlayCurrentAnimation(string& asProp, float afFadeTime, bool abLoop);
</syntaxhighlight>

Fades in the active animation, optionally allowing it to loop.

# ''asProp'' - The name of the prop
# ''afFadeTime'' - The fade time between animations
# ''abLoop'' - If the animation should be looped

<syntaxhighlight lang="c++">
void PauseCurrentAnimation(string& asProp, float afFadeTime);
</syntaxhighlight>

Fades out the active animation.

# ''asProp'' - The name of the prop
# ''afFadeTime'' - The fade time between animations

<syntaxhighlight lang="c++">
void SetPropAnimationSpeed(string& asProp, float afSpeed);
</syntaxhighlight>

Set the speed of the animation. Generally used in conjunction with ''PlayPropAnimation''.

# ''asProp'' - The prop that is being animated
# ''afSpeed'' - The new animation speed

<syntaxhighlight lang="c++">
void SetPropAnimationPosition(string& asProp, float afPos);
</syntaxhighlight>

Jumps to a specific point in an animation. Generally used in conjunction with ''PlayPropAnimation''.

# ''asProp'' - The prop that is being animated
# ''afPos'' - The time within the animation, in seconds, to jump to

==== Lamps ====

<syntaxhighlight lang="c++">
void SetLampFlickerActive(string& asName, bool abActive);
</syntaxhighlight>

Enables a flickering effect on a Lamp.

# ''asName'' - The lamp entity
# ''abActive'' - Whether to enable flicker

<syntaxhighlight lang="c++">
void FadeLampTo(string& asName, float afR, float afG, float afB, float afA, float afRadius, float afTime);
</syntaxhighlight>

Fades a Lamp's light to another color. This function uses integers for color values instead of floats, which is a little odd. Likewise, it uses a double floating point for the last argument instead of a regular one.

# ''asName'' - The lamp to change
# ''afR'' - Red value (appropriate values are 0 - 10)
# ''afG'' - Green value (appropriate values are 0 - 10)
# ''afB'' - Blue value (appropriate values are 0 - 10)
# ''afA'' - Alpha value (has no effect?)
# ''afRadius'' - The new radius to use (affects illumination strength)
# ''afTime'' - Time in seconds until the light properties have changed

<syntaxhighlight lang="c++">
void SetLampCanBeLitByPlayer(string& asName, bool abX);
</syntaxhighlight>

Enables/disables the player's ability to light a lamp.

# ''asName'' - The name of the Lamp
# ''abX'' - State to set

==== Doors ====

<syntaxhighlight lang="c++">
void SetSwingDoorOpenAmount(string& asName, float afOpenAmount, float afDuration, bool abOpenTowardsMaxAngle);
</syntaxhighlight>

Sets the open amount for a SwingDoor.

# ''asName'' - The SwingDoor entity
# ''afOpenAmount'' - The new amount state to set. Range: 0 - 1
# ''afDuration'' - The time in seconds until the door has changed state
# ''abOpenTowardsMaxAngle'' - If the door will swing to its max angle instead of its min angle

==== Buttons ====

<syntaxhighlight lang="c++">
void SetButtonCanBeSwitchedOn(string& asName, bool abCanBeSwitchedOn);
</syntaxhighlight>

Changes whether a Button can be switched from off to on.

# ''asName'' - The Button entity
# ''abCanBeSwitchedOn'' - Whether it can be switched on

<syntaxhighlight lang="c++">
void SetButtonCanBeSwitchedOff(string& asName, bool abCanBeSwitchedOff);
</syntaxhighlight>

Changes whether a Button can be switched from on to off.

# ''asName'' - The Button entity
# ''abCanBeSwitchedOff'' - Whether it can be switched off

==== PhoneBoxes ====

<syntaxhighlight lang="c++">
void StartPhoneRinging(string& asName);
</syntaxhighlight>

Enables a PhoneBox to start ringing. A ringing phone box can be interacted with to play some audio files. After interacting, the phone will stop ringing.

# ''asName'' - The PhoneBox entity

<syntaxhighlight lang="c++">
void StopPhoneRinging(string& asName);
</syntaxhighlight>

Stops a ringing PhoneBox.

# ''asName'' - The PhoneBox entity

<syntaxhighlight lang="c++">
void HangUpPhone(string& asName);
</syntaxhighlight>

Hangs up a PhoneBox.

# ''asName'' - The PhoneBox entity

==== Enemies ====

<syntaxhighlight lang="c++">
void AddEnemyPatrolNode(string& asName, string& asNodeName, float afWaitTime, string& asAnimation, bool abLoopAnimation);
</syntaxhighlight>

Adds a patrol node to the enemy's walking path. A path is restarted from the beginning when the final node is reached. Note: Inputting an invalid animation in asAnimation at the final node will make the enemy wait there indefinitely.<br />This function replaces TDD's AddEnemyPatrolNode.

# ''asName'' - The name of the enemy
# ''asNodeName'' - Internal name of path node
# ''afWaitTime'' - The time, in seconds, the enemy waits at this node before continuing. Note: A time of 0 instead randomizes between 1 and 3 seconds, so use 0.01 instead if you want the enemy to immediately continue to the next node.
# ''asAnimation'' - The animation to play on the enemy when they arrive at this path node. Animations can be found in the Model Editor. Leave empty to play no special animation (uses default Idle animation). Note: If the animation lasts longer than afWaitTime, the enemy waits until the animation is complete before continuing the path.
# ''abLoopAnimation'' - If the animation should be looped

<syntaxhighlight lang="c++">
void SetEnemyMoveType(string& asName, string& asMoveType);
</syntaxhighlight>

Changes how an enemy moves.

# ''asName'' - The name of the enemy
# ''asMoveType'' - The type to change to. Can be "WalkBiped", "RunBiped", "ChargeBiped", "Idle"

<syntaxhighlight lang="c++">
void SetManPigType(string& asName, string& asManPigType);
</syntaxhighlight>

Sets the personality type for a ManPig enemy. Non-functional; left over from an earlier state of development. Only "Freddy" is used as the type, but supposedly it should also accept "Rod" and "Jane".

# ''asName'' - The ManPig enemy.
# ''asManPigType'' - The type to set. Type can be "Freddy", "Rod", "Jane"

The three types allegedly describe three different personality types for the AI, according to Peter Howell in [https://researchportal.port.ac.uk/portal/files/3364888/PeterHowell_PhD.pdf his PhD, section 7.4.4].

Extract:

''The initial design of the game’s enemy artificial intelligence system contained three unique sets of behavioural controls. There was only one visual enemy style, however every enemy agent in the game would be assigned one of three possible ‘personalities’, referred to in the game’s code as the ‘Rod’, ‘Jane’ and ‘Freddy’ personality types. These personalities each had a different set of behavioural rules, thus allowing enemy agents that may otherwise appear identical to behave very differently to one another.''

{| class="wikitable"
! Enemy Agent Personality Type !! Primary Behavioral Traits
|-
| Rod || 
*Will maintain a 'safe' distance to the player-character.
*If unable to do so, will approach player character, investigate them (by getting close and smelling them), before continuing its patrol. 
|-
| Jane || 
*Will maintain a ‘safe’ distance from player-character, whilst observing the player-character’s movements
*If unable to maintain ‘safe’ distance, will panic and flee.
*If cornered and unable to flee, will attack and knock player-character to floor, then flee. 
*Will only attack and kill player-character as a last resort. 
|-
| Freddy || 
*Will actively hunt the player-character.
*Will attack and kill them if given the opportunity. 
|-
|}

<syntaxhighlight lang="c">
void SetTeslaPigFadeDisabled(string& asName, bool abX);
</syntaxhighlight>

Enables/disables whether a specified Tesla ManPig should fade the player's view in and out.

#''asName ''- Internal name of the enemy
#''abX''- Enabled/disabled

<syntaxhighlight lang="c">
void SetTeslaPigSoundDisabled(string& asName, bool abX);
</syntaxhighlight>

Enables/disables whether a specified Tesla ManPig should play the proximity sounds.

#''asName'' - Internal name of the enemy
#''abX'' - Enabled/disabled

<syntaxhighlight lang="c">
void SetTeslaPigEasyEscapeDisabled(string& asName, bool abX);
</syntaxhighlight>

Enables/disables whether a specified Tesla ManPig should be easier to escape from when hunted. If not disabled, easy escape is activated if the player is more than 12.35 meters away, the enemy can't see the player, and the player has less than 75 health. When this occurs, the enemy is forced to stop hunting and wait for half a second.

#''asName'' - Internal name of the enemy
#''abX'' - Enabled/disabled

<syntaxhighlight lang="c">
void ForceTeslaPigSighting(string& asName);
</syntaxhighlight>

Forces a Tesla ManPig to be visible for a short time.

#''asName'' - Internal name of the enemy

<syntaxhighlight lang="c++">
void PlayEnemyAnimation(string& asEnemyName, string& asAnimName, bool abLoop, float afFadeTime);
</syntaxhighlight>

Plays a specific animation for an enemy.

# ''asEnemyName'' - Internal name of the enemy (asterisk is allowed)
# ''asAnimName'' - The name of an animation registered to the enemy
# ''abLoop'' - Whether the animation loops
# ''afFadeTime'' - The fade time between animations

<syntaxhighlight lang="cpp">
void PlayScriptedAnimation(string& asName, string& asAnimationName, bool abLoopAnimation);
</syntaxhighlight>

Plays an animation that has been added to an entity through the Model Editor. Similar to ''PlayEnemyAnimation''.

# ''asName'' - Internal name of the enemy
# ''asAnimationName'' - The animation name
# ''abLoopAnimation'' - Whether to loop the animation or play it only once

<syntaxhighlight lang="c++">
void ChangeEnemyPose(string& asName, string& asPoseType);
</syntaxhighlight>

Changes the pose for an enemy. Can be either "Biped" or "Quadruped".

# ''asName'' - Internal name of the enemy
# ''asPoseType''  - The pose to change to

<syntaxhighlight lang="c++">
void ForceEnemyWaitState(string& asName);
</syntaxhighlight>

Forces the enemy's AI to change its state to "Wait", which makes the enemy wait for a short while before continuing its' normal actions. An enemy without patrol nodes defaults to the "Wait" state. Otherwise, if patrol nodes are added, the enemy will continue the path after waiting is done.

# ''asName'' - Internal name of the enemy

<syntaxhighlight lang="c++">
void SendEnemyTimeOut(string& asName, float afTimeOut );
</syntaxhighlight>

Forces the enemy's AI to change its state to "TimeOut", which forces the enemy to pause.

# ''asName'' - Internal name of the enemy
# ''afTimeOut'' - The length of the time out

<syntaxhighlight lang="c++">
void StopAnimationAndContinue(string& asName, float afTimeOut);
</syntaxhighlight>

Forces the enemy to stop its patrol animation for the specified amount of time.

# ''asName'' - Internal name of the enemy
# ''afTimeOut'' - The length of the time out

<syntaxhighlight lang="c++">
void SetEnemyBlind(string& asName, bool abX);
</syntaxhighlight>

Sets whether the enemy can see the player if they are within visible range.

# ''asName'' - Internal name of the enemy
# ''abX'' - Whether enemy is blind

<syntaxhighlight lang="c++">
void SetEnemyDeaf(string& asName, bool abX);
</syntaxhighlight>

Sets whether the enemy can hear the player make sound if they are within audible range.

# ''asName'' - Internal name of the enemy
# ''abX'' - Whether enemy is deaf

<syntaxhighlight lang="c++">
bool GetPlayerCanSeeEnemy(string& asEnemyName);
</syntaxhighlight>

Returns whether the enemy is within visible range of the player.

# ''asEnemyName'' - Internal name of the enemy

<syntaxhighlight lang="c++">
float GetEnemyPlayerDistance(string& asEnemyName);
</syntaxhighlight>

Returns the distance (in meters) between the enemy and the player.

# ''asEnemyName'' - Internal name of the enemy

<syntaxhighlight lang="c++">
int GetEnemyState(string& asName);
</syntaxhighlight>

Returns the enemy's current state as an integer.

# ''asName'' - Internal name of the enemy

<br />