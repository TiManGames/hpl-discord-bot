{{TocRight}}

This page documents all scripts available in Amnesia: The Dark Descent.

{{note|'''Note''': Some of the functions require the Amnesia 1.3 or 1.5 update. Steam and other online store copies should be automatically updated. Other copies can get 1.3 [http://www.frictionalgames.com/forum/thread-24334.html here].}}

== Directives ==

First off, <code>#include "file.hps"</code> can be used to programmatically merge together multiple separate files to make organizing scripts easier.


{{ReqVer|1.5}}

==Engine scripts==
===Main===

The following functions are the main hps functions that the HPL2 engine looks to run on certain events - similar to the C++ int main() function.

<syntaxhighlight lang="cpp">
void OnStart();
</syntaxhighlight>

The function that runs when the map is loaded for the first time.

<syntaxhighlight lang="c++">
void OnEnter();
</syntaxhighlight>

The function that runs whenever the player enters a map.

<syntaxhighlight lang="c++">
void OnLeave();
</syntaxhighlight>

The function that runs when the player leaves a map.

<syntaxhighlight lang="c++">
void OnGameStart();
</syntaxhighlight>

This function is found in the global.hps file and the inventory.hps file, and is run when the game is first started by the player (ie via "Start New Game").

<syntaxhighlight lang="c++">
void OnUpdate(float afStep);
</syntaxhighlight>
{{ReqVer|1.5}}

This function is executed for every game update or "tick". Can be used for rapid-firing updates instead of looping timers. Keep in mind that this can affect game performance if not used with care.

#''afStep''- Time elapsed in seconds since the last frame. Multiply speeds, distances etc. by this argument to avoid framerate dependence issues (for example: if you move something in this function with constant speed, it will move faster on computers which run the game with high FPS and slower on computers with low FPS).

===General===

<syntaxhighlight lang="c++">
float RandFloat(float afMin, float afMax);
</syntaxhighlight>

Generates a random float.

#''afMin ''- minimum value
#''afMax ''- maximum value
<syntaxhighlight lang="c++">
int RandInt(int alMin, int alMax);
</syntaxhighlight>

Generates a random int. Note: the maximum value is ''inclusive''  - the RandInt() function may return this value.

#''alMin ''- minimum value
#''alMax ''- maximum value
<syntaxhighlight lang="c++">
bool StringContains(string &in asString, string &in asSubString);
</syntaxhighlight>

Checks whether a string contains the specified string. <br />Example: searching for "hello" in "hello world" would return '''true'''.

#''asString ''- the string to check
#''asSubString ''- the string to search for
<syntaxhighlight lang="c++">
string& StringSub(string &in asString, int alStart, int alCount);
</syntaxhighlight>

Returns the substring in a string. <br />Example: in the string "frictional games rocks", using 4 as ''alStart''  and 6 as ''alCount''  would return '''"tional"'''.

#''asString ''- the string
#''alStart ''- starting character of the string, with 0 being the first character
#''alCount ''- amount of characters
<syntaxhighlight lang="c++">
int StringToInt(string &in asString);
</syntaxhighlight>

{{ReqVer|1.3}}

If possible, returns an integer converted from a string, else returns 0.

#''asString''  - String to convert.
<syntaxhighlight lang="c++">
float StringToFloat(string &in asString);
</syntaxhighlight>

{{ReqVer|1.3}}

If possible, returns a float converted from a string, else returns 0.

#''asString''  - String to convert.
<syntaxhighlight lang="c++">
bool StringToBool(string &in asString);
</syntaxhighlight>

{{ReqVer|1.3}}

If possible, returns a boolean converted from a string, else returns false.

#''asString''  - String to convert.

===Mathematical Operations===

<syntaxhighlight lang="c++">
float MathSin(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the sine of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathCos(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the cosine of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathTan(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the tangent of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathAsin(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the arc sine of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathAcos(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the arc cosine of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathAtan(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the arc tangent of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathAtan2(float afX, float afY);
</syntaxhighlight>

{{ReqVer|1.3}}

Calculates and returns the arc tangent of the specified values.

#''afX''  - First value to operate.
#''afY''  - Second value to operate.
<syntaxhighlight lang="c++">
float MathSqrt(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the square root of the specified value.

#''afX''  - Value to operate.
<syntaxhighlight lang="c++">
float MathPow(float afBase, float afExp);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the value of afBase raised to the power of afExp.

#''afBase''  - The base value.
#''afExp''  - Value to calculate the base with.
<syntaxhighlight lang="c++">
float MathMin(float afA, float afB);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the lowest value.

#''afA''  - First value.
#''afB''  - Second value.
<syntaxhighlight lang="c++">
float MathMax(float afA, float afB);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the highest value.

#''afA''  - First value.
#''afB''  - Second value.
<syntaxhighlight lang="c++">
float MathClamp(float afX, float afMin, float afMax);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns afX clamped between afMin and afMax. If afX < afMin, returns afMin, and if afX > afMax, returns afMax.

#''afX''  - The value to clamp.
#''afMin''  - The minimum value to clamp afX with.
#''afMax''  - The maximum value to clamp afX with.
<syntaxhighlight lang="c++">
float MathAbs(float afX);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the absolute value.

#''afX''  - Value to operate.

===Debugging===

<syntaxhighlight lang="cpp">
void Print(string &in asString);
</syntaxhighlight>

Prints a string to the log file (''hpl.log'').

<syntaxhighlight lang="c++">
void AddDebugMessage(string &in asString, bool abCheckForDuplicates);
</syntaxhighlight>

Prints a line of text to the debug console at the bottom left of the screen. Debug mode must be enabled for the console messages to be visible.

#''asString ''- the string to print
#''abCheckForDuplicates ''- if true, the string won't be printed more than once on screen until it disappears
<syntaxhighlight lang="c++">
void ProgLog(string &in asLevel, string &in asMessage);
</syntaxhighlight>

Prints an entry to the ProgLog (progression log). <br />ProgLog is a file created in Documents/Amnesia/main (or an FC folder if one is being used). It logs certain events, such us opening the menu or picking up the lantern, as well as the player's state (Health, Sanity, Oil, Tinderboxes, Coins), for the purpose of documenting a tester's playstyle. <br /> <br />This function allows to log custom messages.The messages in the ProgLog file are sorted by time elapsed since a map was loaded.

ProgLog has to be enabled for a player profile in ''user_settings.cfg''  before it starts working.

#''asLevel ''- can be "Low", "Medium" or "High". It's a tag which appears in each log entry, for event prioritising.
#''asMessage ''- The custom message to be printed to the log.
<syntaxhighlight lang="c++">
bool ScriptDebugOn();
</syntaxhighlight>

Checks whether the debug mode is enabled. <br />See [[HPL2/Development_Environment|"Setting up Development Environment"]] to setup debug mode on your own computer.

===Variables===
{{warning|Regular variables (int, float, etc.) are '''not''' saved by the game. Using them in important parts of yor script will break it upon loading a game save. In HPL, those variables should only be used for disposable counters, like spawning objects in a "for" loop. For variables which need to be saved, use the wrappers as described below.}}

====Local====

Local variables can be used throughout the same script file.

<syntaxhighlight lang="cpp">
void SetLocalVarInt(string &in asName, int alVal);
void AddLocalVarInt(string &in asName, int alVal);
int GetLocalVarInt(string &in asName);
</syntaxhighlight>

<syntaxhighlight lang="c++">
void SetLocalVarFloat(string &in asName, float afVal);
void AddLocalVarFloat(string &in asName, float afVal);
float GetLocalVarFloat(string &in asName);
</syntaxhighlight>

<syntaxhighlight lang="c++">
void SetLocalVarString(string &in asName, const string &in asVal);
void AddLocalVarString(string &in asName, string &in asVal);
string& GetLocalVarString(string &in asName);
</syntaxhighlight>

====Global====

Global variables can be used throughout several maps and can be accessed by several script files.

<syntaxhighlight lang="c++">
void SetGlobalVarInt(string &in asName, int alVal);
void AddGlobalVarInt(string &in asName, int alVal);
int GetGlobalVarInt(string &in asName);
</syntaxhighlight>

<syntaxhighlight lang="c++">
void SetGlobalVarFloat(string &in asName, float afVal);
void AddGlobalVarFloat(string &in asName, float afVal);
float GetGlobalVarFloat(string &in asName);
</syntaxhighlight>

<syntaxhighlight lang="c++">
void SetGlobalVarString(string &in asName, const string &in asVal);
void AddGlobalVarString(string &in asName, string &in asVal);
string& GetGlobalVarString(string &in asName);
</syntaxhighlight>

===Particle Systems===

<syntaxhighlight lang="c++">
void PreloadParticleSystem(string &in asPSFile);
</syntaxhighlight>

Preloads a particle system.

#''asPSFile''  - The particle system file to load. Extension: .ps
<syntaxhighlight lang="c++">
void CreateParticleSystemAtEntity(string &in asPSName, string &in asPSFile, string &in asEntity, bool abSavePS);
</syntaxhighlight>

Creates a particle system on an entity.

#''asPSName ''- internal name
#''asPSFile ''- the particle system to use + extension .ps
#''asEntity ''- the entity to create the particle system at
#''abSavePS ''- determines whether a particle system should "remember" its shown/hidden state, so that this state can be restored when the player revisits the level
<syntaxhighlight lang="c++">
void CreateParticleSystemAtEntityExt(string &in asPSName, string &in asPSFile, string &in asEntity, bool abSavePS,
float afR, float afG, float afB, float afA, bool abFadeAtDistance, float afFadeMinEnd, float afFadeMinStart,
float afFadeMaxStart, float afFadeMaxEnd);
</syntaxhighlight>

Creates a particle system on an entity, extended method with more options.

#''asPSName ''- internal name
#''asPSFile ''- the particle system to use + extension .ps
#''asEntity ''- the entity to create the particle system at
#''abSavePS ''- determines whether a particle system should "remember" its shown/hidden state, so that this state can be restored when the player revisits the level
#''afR ''- red value
#''afG ''- green value
#''afB ''- blue value
#''afA ''- alpha value
#''abFadeAtDistance ''- determines whether a particle system fades from a certain distance on
#''afFadeMinEnd ''- minimum distance at which the particle system stops fading
#''afFadeMinStart ''- minimum distance at which the particle system starts fading
#''afFadeMaxStart ''- maximum distance at which the particle system starts fading
#''afFadeMaxEnd ''- maximum distance at which the particle system stops fading
<syntaxhighlight lang="c++">
void DestroyParticleSystem(string &in asName);
</syntaxhighlight>

Destroys a particle system.

#''asName''  - The internal name of the particle system

===Sounds & Music===

<syntaxhighlight lang="c++">
void PreloadSound(string &in asSoundFile);
</syntaxhighlight>

Preloads a sound.

#''asSoundFile''  - The sound file to load (extension .snt optional)

<syntaxhighlight lang="c++">
void PlayGuiSound(string &in asSoundFile, float afVolume);
</syntaxhighlight>

Plays a sound, not using 3D.

#''asSoundFile ''- the sound to play (extension .snt/.ogg optional)
#''afVolume ''- the volume of the sound

<syntaxhighlight lang="c++">
void PlaySoundAtEntity(string &in asSoundName, string &in asSoundFile, string &in asEntity, float afFadeTime, bool abSaveSound);
</syntaxhighlight>

Creates a sound at an entity.

#''asSoundName ''- internal name
#''asSoundFile ''- the sound to use (extension .snt optional)
#''asEntity ''- the entity to create the sound at. Using "Player" is effectively the same as <code>PlayGuiSound</code>, yet this function allows a looping sound to be saved
#''afFadeTime ''- time in seconds the sound needs to fade. Avoids enemies hearing the sound if afFadeTime is at least 0.1f
#''abSaveSound ''- if ''true'', a looping sound will "remember" its playback state (currently playing/stopped), and that state will be restored the next time the level is entered. If ''true'', the sound is never attached to the entity! Note that saving should only be used on ''looping sounds''!

<syntaxhighlight lang="c++">
void FadeInSound(string &in asSoundName, float afFadeTime, bool abPlayStart);
</syntaxhighlight>

Fades in a sound.

#''asSoundName ''- internal name
#''afFadeTime ''- time in seconds
#''abPlayStart ''- Play the sound defined in the <code><Start></code> section of the .snt before playing the main sound

<syntaxhighlight lang="c++">
void StopSound(string &in asSoundName, float afFadeTime);
</syntaxhighlight>

Fades out a sound.

#''asSoundName ''- internal name
#''afFadeTime ''- time in seconds, use 0 to immediately stop the sound

<syntaxhighlight lang="c++">
void PlayMusic(string &in asMusicFile, bool abLoop, float afVolume, float afFadeTime, int alPrio, bool abResume);
</syntaxhighlight>

Plays music.

#''asMusicFile ''- the music file to play (extension .ogg optional)
#''abLoop ''- determines whether a music track should loop
#''afVolume ''- volume of the music
#''afFadeTime ''- time in seconds until music reaches full volume
#''alPrio ''- priority of the music. Note that only the music with the highest priority can be heard! 0 - lowest, 1 - higher, etc.
#''abResume''  - if ''true'', playback will be continued from where the track stopped after the call to <code>StopMusic()</code>. If ''false'', the track will be restarted.

<syntaxhighlight lang="c++">
void StopMusic(float afFadeTime, int alPrio);
</syntaxhighlight>

Stops music.

#''afFadeTime ''- time in seconds until music stops
#''alPrio ''- the priority of the music that should stop

{{bug|When loading a map from the debug menu, music from the previously loaded map cannot be stopped! It can only be overridden by playing another instance of music at the same priority level.<br><br>To work around this, call <code>PlayMusic</code> first, where the volume is greater than 0 and the priority matches the previous map's music, then call <code>StopMusic</code> immediately afterward.}}

<syntaxhighlight lang="c++">
void AddEffectVoice(string &in asVoiceFile, string &in asEffectFile, string &in asTextCat, string &in asTextEntry,
bool abUsePosition, string &in asPosEntity, float afMinDistance, float afMaxDistance);
</syntaxhighlight>

This adds a voice and an additional sound effect to be played. It is okay to call this many times in order to play many voices in a row. The EffectVoiceOverCallback is not called until ALL voices have finished.

#''asVoiceFile ''- the voice to play
#''asEffectFile ''- the sound effect to play
#''asTextCat ''- the category in the .lang file, usually "Voice"
#''asTextEntry ''- the text entry in the .lang file
#''abUsePosition ''- plays using 3D from the entity, or without 3D
#''asPosEntity ''- the entity at which the voice and sound are played from
#''afMinDistance ''- minimum distance the voice and sound are heard
#''afMaxDistance ''- maximum distance the voice and sound are heard

<syntaxhighlight lang="c++">
void StopAllEffectVoices(float afFadeOutTime);
</syntaxhighlight>

Stops all voices and calls the EffectVoiceOverCallback.

<syntaxhighlight lang="c++">
bool GetEffectVoiceActive();
</syntaxhighlight>

Checks whether EffectVoices are still active.

<syntaxhighlight lang="c++">
void SetEffectVoiceOverCallback(string &in asFunc);
</syntaxhighlight>

Sets the function to be called when the EffectVoices are finished. <br />Callback syntax: <code>void MyFunc()</code>

<syntaxhighlight lang="c++">
void FadeGlobalSoundVolume(float afDestVolume, float afTime);
</syntaxhighlight>

Influences the global sound volume, that means everything you can hear '''from the world'''. This does not affect music of GUI sounds.

#''afDestVolume ''- desired volume
#''afTime ''- time in seconds until volume reaches desired volume
<syntaxhighlight lang="c++">
void FadeGlobalSoundSpeed(float afDestSpeed, float afTime);
</syntaxhighlight>

Influences the global sound speed.

#''afDestSpeed ''- desired speed
#''afTime ''- time in seconds until volume reaches desired speed

===Lights===

<syntaxhighlight lang="c++">
void SetLightVisible(string &in asLightName, bool abVisible);
</syntaxhighlight>

Enables/disables lights.

#''asLightName ''- internal name
#''abVisible ''- determines the state of the light
<syntaxhighlight lang="c++">
void FadeLightTo(string &in asLightName, float afR, float afG, float afB, float afA, float afRadius, float afTime);
</syntaxhighlight>

Changes the properties of a light.

#''asLightName ''- internal name
#''afR ''- red value
#''afG ''- green value
#''afB ''- blue value
#''afA ''- alpha value
#''afRadius ''- radius of the light. -1 means keeping the radius
#''afTime ''- time in seconds until change is done
<syntaxhighlight lang="c++">
void SetLightFlickerActive(string &in asLightName, bool abActive);
</syntaxhighlight>

Activates flickering on a light.

#''asLightName'' - The internal light name
#''abActive'' - true = active, false = inactive

==Game scripts==

===General===

<syntaxhighlight lang="c++">
void StartCredits(string &in asMusic, bool abLoopMusic, string &in asTextCat, string &in asTextEntry, int alEndNum);
</syntaxhighlight>

Starts the end credits screen.

#''asMusic ''- the music to play (including .ogg)
#''abLoopMusic ''- determines whether the music should loop
#''asTextCat ''- the category to be used in the .lang file, usually "Ending"
#''asTextEntry ''- the entry in the .lang file
#''alEndNum ''- Amnesia has 3 different endings and displays a code at the bottom. Determines which code is displayed. 0-2 will display codes, any other integer will not.
<syntaxhighlight lang="c++">
void StartDemoEnd();
</syntaxhighlight>

Shows the demo end screen. The background and UI elements are defined in demo.cfg, with the text using the entries in the "Demo" category of the .lang file.

<syntaxhighlight lang="c++">
void AutoSave();
</syntaxhighlight>

Creates an auto save file.

<syntaxhighlight lang="c++">
void CheckPoint(string &in asName, string &in asStartPos, string &in asCallback, string &in asDeathHintCat, string &in asDeathHintEntry);
</syntaxhighlight>

Sets a checkpoint at which the player will respawn in case he dies. <br />Callback syntax: <code>void MyFunc(string &in asName, int alCount)</code>  <br />Count is 0 on the first checkpoint load!

#''asName ''- the internal name
#''asStartPos ''- the name of the StartPos in the editor
#''asCallback ''- the function to call when the player dies/respawns
#''asDeathHintCat ''- the category of the death hint message to be used in the .lang file, usually "Hints"
#''asDeathHintEntry ''- the entry in the .lang file
<syntaxhighlight lang="c++">
void ChangeMap(string &in asMapName, string &in asStartPos, string &in asStartSound, string &in asEndSound);
</syntaxhighlight>

Loads another map after a 1.5 second fade out.

#''asMapName ''- the file to load
#''asStartPos ''- the name of the StartPos in the next map
#''asStartSound ''- the sound that is played when the change starts
#''asEndSound ''- the sound that is played when the new map is loaded
<syntaxhighlight lang="c++">
void ClearSavedMaps();
</syntaxhighlight>

Clears the "history" of the save, useful to do when you know the player will not be able to go back anymore. Makes the next save much smaller in size.

<syntaxhighlight lang="c++">
void CreateDataCache();
void DestroyDataCache();
</syntaxhighlight>

This caches all current textures and models and they are not released until destroy is called. If there is already cached data it is destroyed.
Create caches to enable faster loading when going back to a map. Destroy the cache if you know the player won't go back to that map.

<syntaxhighlight lang="c++">
void SetMapDisplayNameEntry(string &in asNameEntry);
</syntaxhighlight>

Sets the map name shown in save file names. If none is set NULL is assumed.

#''asNameEntry ''- the entry to display, category must be "Levels"!
<syntaxhighlight lang="c++">
void SetSkyBoxActive(bool abActive);
</syntaxhighlight>

Enables/Disables the skybox.

#''abActive''  - true = active, false = inactive
<syntaxhighlight lang="c++">
void SetSkyBoxTexture(string &in asTexture);
</syntaxhighlight>

Sets the texture of the skybox.

#''asTexture''  - The texture file to set. Extension: .dds
<syntaxhighlight lang="c++">
void SetSkyBoxColor(float afR, float afG, float afB, float afA);
</syntaxhighlight>

Sets the solid color of the skybox rather than a texture.

#''afR ''- red value
#''afG ''- green value
#''afB ''- blue value
#''afA ''- alpha value
<syntaxhighlight lang="c++">
void SetFogActive(bool abActive);
</syntaxhighlight>

Enables/Disables the global fog.

#''abActive''  - true = active, false = inactive
<syntaxhighlight lang="c++">
void SetFogColor(float afR, float afG, float afB, float afA);
</syntaxhighlight>

Sets the color to use for the global fog.

#''afR ''- red value
#''afG ''- green value
#''afB ''- blue value
#''afA ''- alpha value
<syntaxhighlight lang="c++">
void SetFogProperties(float afStart, float afEnd, float afFalloffExp, bool abCulling);
</syntaxhighlight>

Sets the properties for the global fog.

#''afStart ''- how many meters from the camera should the fog begin
#''afEnd ''- how many meters from the camera should the fog reach full thickness
#''afFalloffExp ''- the amount by which the thinkness increases
#''abCulling ''- whether occlusion culling is active for the fog; this prevents objects behind the fog from being loaded

<syntaxhighlight lang="c++">
void SetupLoadScreen(string &in asTextCat, string &in asTextEntry, int alRandomNum, string &in asImageFile);
</syntaxhighlight>

Determines which loading screen will be shown when changing maps.

#''asTextCat ''- the category of the loading text in the .lang file to be shown on the loading screen, usually "LoadingText"
#''asTextEntry ''- the entry in the .lang file
#''alRandomNum ''- if greater 1, then it will randomize between 1 and alRandom for each LoadScreen giving entry the suffix XX (eg 01). If < =1 then no suffix is added
#''asImageFile ''- the image to be shown (optional)

<syntaxhighlight lang="c++">
void UnlockAchievement(string &in asName);
</syntaxhighlight>

Unlocks the specified achievement. Only able to be used for the ending achievements.

#''asName'' - The name of the achievement. Only the following strings are valid:
::* Benefactor
::* Survivor
::* Sacrifice
::* Quitter
::* Egotist
::* Altruist
::* Vacillator

===Game Timer===

<syntaxhighlight lang="c++">
void AddTimer(string &in asName, float afTime, string &in asFunction);
</syntaxhighlight>

Creates a timer which calls a function when it expires. <br />Callback syntax: <code>void MyFunc(string &in asTimer)</code>

#''asName ''- the name of the timer
#''afTime ''- time in seconds
#''asFunction ''- the function to call
<syntaxhighlight lang="c++">
void RemoveTimer(string &in asName);
</syntaxhighlight>

Removes a timer, no matter how much time is left.

#''asName'' - the internal name of the timer.
<syntaxhighlight lang="c++">
float GetTimerTimeLeft(string &in asName);
</syntaxhighlight>

Returns the time left on a timer.

#''asName''  - the internal name of the timer.

===Screen Effects===

<syntaxhighlight lang="c++">
void FadeOut(float afTime);
</syntaxhighlight>

Fades the screen to black.

#''afTime ''- time in seconds until the screen is completly black

<syntaxhighlight lang="c++">
void FadeIn(float afTime);
</syntaxhighlight>

Fades the screen back to normal.

#''afTime ''- time in seconds until the screen back to normal

<syntaxhighlight lang="c++">
void FadeImageTrailTo(float afAmount, float afSpeed);
</syntaxhighlight>

Applies the image trail effect to the screen.

#''afAmount ''- intensity (default: 0)
#''afSpeed ''- time in seconds until full effect

<syntaxhighlight lang="c++">
void FadeSepiaColorTo(float afAmount, float afSpeed);
</syntaxhighlight>

Makes the screen go dark red.

#''afAmount ''- intensity (default: 0) 
#''afSpeed ''- time in seconds until full effect

<syntaxhighlight lang="c++">
void FadeRadialBlurTo(float afSize, float afSpeed);
</syntaxhighlight>

Applies radial blur effects to the screen.

#''afSize ''- intensity (default: 0)
#''afSpeed ''- time in seconds until full effect

<syntaxhighlight lang="c++">
void SetRadialBlurStartDist(float afStartDist);
</syntaxhighlight>

Determines at which distance the radial blur effects appear.

#''afStartDist ''- the distance at which the effect starts

<syntaxhighlight lang="c++">
void StartEffectFlash(float afFadeIn, float afWhite, float afFadeOut);
</syntaxhighlight>

Fades the screen to white.

#''afFadeIn ''- time in seconds until screen is white
#''afWhite ''- determines to which percentage the screen fades to white (1.0 = completly white)
#''afFadeOut ''- time in seconds until screen is back to normal again

<syntaxhighlight lang="c++">
void StartEffectEmotionFlash(string &in asTextCat, string &in asTextEntry, string &in asSound);
</syntaxhighlight>

Fades the screen to white and shows a text message.

#''asTextCat ''- the category in the .lang file
#''asTextEntry ''- the text entry in the .lang file
#''asSound ''- the sound to play while fading

<syntaxhighlight lang="c++">
bool GetFlashbackIsActive();
</syntaxhighlight>

Checks whether a flashback is still in effect.

<syntaxhighlight lang="c++">
void StartPlayerSpawnPS(string &in asSPSFile);
void StopPlayerSpawnPS();
</syntaxhighlight>

Continuously spawn regular particle systems (''.ps'') around the player. Particles created by this script carry over from map to map.

#''asSPSFile''  - the ''.sps''  file to use. Example ''.sps''  files are located in the ''/misc''  folder in the main game directory.<br>Custom ''.sps''  files can be created by hand in a text editor (see existing ones and mimic how those are written). <br />Since ''StopPlayerSpawnPS()''  doesn't seem to work, to stop an SPS you must create an ''.sps''  file with an empty particle field field and override the old SPS by calling ''StartPlayerSpawnPS''  again.

<syntaxhighlight lang="c++">
void StartScreenShake(float afAmount, float afTime, float afFadeInTime, float afFadeOutTime);
</syntaxhighlight>

Shakes the screen.

#''afAmount ''- intensity of the shake
#''afTime ''- duration of the shake
#''afFadeInTime ''- time in seconds until full intensity is reached
#''afFadeOutTime ''- time until screen is back to normal

<syntaxhighlight lang="c++">
void SetInDarknessEffectsActive(bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables the sanity drain and night vision effects while in the darkness.

''bool abX''  - Enable/disable effects.

<syntaxhighlight lang="c++">
void ShowScreenImage(string &in asImageName, float afX, float afY, float afScale, bool abUseRelativeCoordinates, float afDuration, float afFadeIn, float afFadeOut);
</syntaxhighlight>

{{ReqVer|1.5}}

Displays an image file directly onto the screen. See [[HPL2/Tutorials/ShowScreenImage()|ShowScreenImage()]] in the tutorials section for more information.

# ''asImageName'' - The image file to render (.jpg, .png, .tga, .dds)
# ''afX'' - The X position of the image
# ''afY'' - The Y position of the image
# ''afScale'' - The size of the image in pixels (not scale), or original image size if negative
# ''abUseRelativeCoordinates'' - Whether X and Y are relative to the screen resoltion, or pixel co-ordinates if not
# ''afDuration'' - The duration that the image is displayed for
# ''afFadeIn'' - The time, in seconds, to fade in the image
# ''afFadeOut'' - The time, in seconds, to fade out the image

===Insanity===

<syntaxhighlight lang="c++">
void SetInsanitySetEnabled(string &in asSet, bool abX);
</syntaxhighlight>

Determines which InsanitySets are enabled.

#''asSet ''- the set
#''abX ''- enabled or not

<syntaxhighlight lang="c++">
void StartInsanityEvent(string &in asEventName);
</syntaxhighlight>

{{ReqVer|1.3}}

Starts a specified insanity event.

#''asEventName ''- Insanity event to play.

<syntaxhighlight lang="c++">
void StartRandomInsanityEvent();
</syntaxhighlight>

Starts a random insanity event from the available sets.

<syntaxhighlight lang="c++">
void StopCurrentInsanityEvent();
</syntaxhighlight>

{{ReqVer|1.3}}

Stops the currently playing insanity event.

<syntaxhighlight lang="c++">
void InsanityEventIsActive();
</syntaxhighlight>

Checks whether an insanity event is currently in effect.<br>Not useful at all due to having a return type of <code>void</code> when it should be <code>bool</code>.

===Player===

Note that the player's maximum health and sanity is 100.

<syntaxhighlight lang="c++">
void SetPlayerActive(bool abActive);
</syntaxhighlight>

Enabled/Disable player controlled movement.

<syntaxhighlight lang="c++">
void ChangePlayerStateToNormal();
</syntaxhighlight>

Resets the player's state, forcing them to stop interacting with objects. It also clears the inventory item to be used (as if it was double-clicked on in the inventory again) and dismounts the player from ladders.

<syntaxhighlight lang="c++">
void SetPlayerCrouching(bool abCrouch);
</syntaxhighlight>

Forces the player to crouch.

<syntaxhighlight lang="c++">
void AddPlayerBodyForce(float afX, float afY, float afZ, bool abUseLocalCoords);
</syntaxhighlight>

Pushes the player into a certain direction. Note that you need values above ~2000 to see any effects.

#''afX'' - amount along the X-axis
#''afY'' - amount along the Y-axis
#''afZ'' - amount along the Z-axis
#''abUseLocalCoords'' - If true, axes are based on where the player is facing, not the world.

<syntaxhighlight lang="c++">
void ShowPlayerCrossHairIcons(bool abX);
</syntaxhighlight>

Enables/Disables the icons when a player has something in focus.

<syntaxhighlight lang="c++">
void SetPlayerSanity(float afSanity);
void AddPlayerSanity(float afSanity);
float GetPlayerSanity();
</syntaxhighlight>

Modifies/returns the sanity of the player.

<syntaxhighlight lang="c++">
void SetPlayerHealth(float afHealth);
void AddPlayerHealth(float afHealth);
float GetPlayerHealth();
</syntaxhighlight>

Modifies/returns the health of the player.

<syntaxhighlight lang="c++">
void SetPlayerLampOil(float afOil);
void AddPlayerLampOil(float afOil);
float GetPlayerLampOil();
</syntaxhighlight>

Modifies/returns the lamp oil of the player.

<syntaxhighlight lang="c++">
float GetPlayerSpeed();
float GetPlayerYSpeed();
</syntaxhighlight>

Returns the current speed of the player.

<syntaxhighlight lang="c++">
void SetSanityDrainDisabled(bool abX);
</syntaxhighlight>

Enables/Disables sanity drain from darkness.
{{bug|Sanity drain is reenabled on loading a save, as the game is unable to load the value properly from the save data.}}

<syntaxhighlight lang="c++">
void GiveSanityBoost();
</syntaxhighlight>

Boosts the player's sanity by a large amount depending on the current sanity.

{|class=wikitable
! Sanity !! New Sanity
|-
| 0-24 || 100
|-
| 25-49 || 90
|-
| 50-74 || 80
|-
| 75-100 || +5
|-
|}

<syntaxhighlight lang="c++">
void GiveSanityBoostSmall();
</syntaxhighlight>

Boosts the player's sanity by a small amount depending on the current sanity.

{|class=wikitable
! Sanity !! Sanity Bonus
|-
| 0-24 || +20
|-
| 25-49 || +15
|-
| 50-75 || +10
|-
| 75-100 || +5
|-
|}

<syntaxhighlight lang="c++">
void GiveSanityDamage(float afAmount, bool abUseEffect);
</syntaxhighlight>

Reduces the sanity of the player.

#''afAmount'' - amount of sanity damage done
#''abUseEffect'' - if a sound is played and screen effects are shown when the sanity damage is dealt

<syntaxhighlight lang="c++">
void GivePlayerDamage(float afAmount, string &in asType, bool abSpinHead, bool abLethal);
</syntaxhighlight>

Reduces the health of the player.

#''afAmount'' - amount of damage done to health
#''asType'' - plays a certain effect on the screen when the damage is dealt (BloodSplat, Claws, or Slash) 
#''abSpinHead'' - changes the camera view when damage is dealt
#''abLethal'' - set to true if player can die from given damage. If ''false'' and the damage would have left the player with less than 10 health, health is set to 10.

<syntaxhighlight lang="c++">
void FadePlayerFOVMulTo(float afX, float afSpeed);
</syntaxhighlight>

Changes the field of view of the player. A shorter FOV will create a zoom effect.

#''afX'' - multiplier of default FOV (1 is default)
#''afSpeed'' - the speed of change between FOVs

<syntaxhighlight lang="c++">
void FadePlayerAspectMulTo(float afX, float afSpeed);
</syntaxhighlight>

Changes the aspect ratio of the player. Basically stretches or narrows the screen horizontally.

#''afX'' - multiplier of default aspect (default is 1)
#''afSpeed'' - the speed of change between FOVs

<syntaxhighlight lang="c++">
void FadePlayerRollTo(float afX, float afSpeedMul, float afMaxSpeed);
</syntaxhighlight>

Rotates the position of the camera on the player's body.

#''afX'' - angle of rotation of head, positive being counter-clockwise
#''afSpeedMul'' - speed (possibly acceleration) multiplier of the rotation (default 1, which is really slow)
#''afMaxSpeed'' - maximum speed of rotation

<syntaxhighlight lang="c++">
void MovePlayerForward(float afAmount);
</syntaxhighlight>

{{ReqVer|1.2}}

Moves the player forward. It needs to be called in a timer that updates 60 times / second.

<syntaxhighlight lang="c++">
void MovePlayerHeadPos(float afX, float afY, float afZ, float afSpeed, float afSlowDownDist);
</syntaxhighlight>

Changes the position of the camera on the player's body.

#''afX ''- amount along the X-axis
#''afY ''- amount along the Y-axis
#''afZ ''- amount along the Z-axis
#''afSpeed ''- speed at which the change happens
#''afSlowDownDist ''- distance at which to start slowing down (prevents the head from abruptly stopping)

<syntaxhighlight lang="c++">
void StartPlayerLookAt(string &in asEntityName, float afSpeedMul, float afMaxSpeed, string &in asAtTargetCallback);
void StopPlayerLookAt();
</syntaxhighlight>

Forces the player to look at a certain entity until StopPlayerLookAt is used.

#''asEntityName ''- the entity to look at 
#''afSpeedMul ''- how fast should the player look at the entity
#''afMaxSpeed ''- maximum speed allowed
#''asAtTargetCallback ''- function to call when player looks at target

<syntaxhighlight lang="c++">
void SetPlayerMoveSpeedMul(float afMul);
void SetPlayerRunSpeedMul(float afMul);
void SetPlayerLookSpeedMul(float afMul);
</syntaxhighlight>

Changes the player's move/run/look speed. Default is 1.

<syntaxhighlight lang="c++">
void SetPlayerJumpForceMul(float afMul);
</syntaxhighlight>

{{ReqVer|1.3}}

Changes the player's jump multiplier. Higher values = higher jumps. Default is 1.

<syntaxhighlight lang="c++">
void SetPlayerJumpDisabled(bool abX);
void SetPlayerCrouchDisabled(bool abX);
</syntaxhighlight>

Enables/Disables the player's ability to jump/crouch.

<syntaxhighlight lang="c++">
void TeleportPlayer(string &in asStartPosName);
</syntaxhighlight>

Instantly teleports the player to the target StartPos.

<syntaxhighlight lang="c++">
void SetLanternActive(bool abX, bool abUseEffects);
</syntaxhighlight>

Makes the player use his lantern.

# ''abX'' - Set lantern to be active (true) or inactive (false)
# ''abUseEffects'' - Play on/off sounds

<syntaxhighlight lang="c++">
bool GetLanternActive();
</syntaxhighlight>

Checks whether the player is currently using the lantern.

<syntaxhighlight lang="c++">
void SetLanternDisabled(bool abX);
</syntaxhighlight>

Enables/Disables the player's ability to use the lantern.

<syntaxhighlight lang="c++">
void SetLanternLitCallback(string &in asCallback);
</syntaxhighlight>

Sets the function to call when the player uses the lantern. <br />Callback syntax: <code>MyFunc(bool abLit)</code>

<syntaxhighlight lang="c++">
void SetMessage(string &in asTextCategory, string &in asTextEntry, float afTime);
</syntaxhighlight>

Displays a message on the screen.

#''asTextCategory'' - the category in the .lang file
#''asTextEntry'' - the entry in the .lang file
#''afTime'' - determines how long the message is displayed. If time is <= 0 then the life time is calculated based on string length.

<syntaxhighlight lang="c++">
void SetDeathHint(string &in asTextCategory, string &in asTextEntry);
</syntaxhighlight>

Sets the message that appears when the player dies.

#''asTextCategory'' - the category in the .lang file, usually "Hints"
#''asTextEntry'' - the entry in the .lang file

<syntaxhighlight lang="c++">
void DisableDeathStartSound();
</syntaxhighlight>

Disables the death sound when the player dies. This must be called directly before player is killed! The variable as soon as player dies too.

<syntaxhighlight lang="c++">
void SetPlayerPermaDeathSound(string &in asSound);
</syntaxhighlight>

{{ReqVer|1.2}}

Sets the sound played after the player dies when permadeath is active. Permadeath is only active when the game is launched with the <code>ptest</code> command line parameter. Only used for the post-death Suitor lines in ''Justine''.

#''asSound'' - The sound to be played after death. Expects a voice-type sound.

<syntaxhighlight lang="c++">
void SetPlayerFallDamageDisabled(bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables the player's ability to take fall damage.

<syntaxhighlight lang="c++">
void SetPlayerPos(float afX, float afY, float afZ);
</syntaxhighlight>

{{ReqVer|1.3}}

Sets the player's position within the level.

#''afX'' - X co-ordinate position.
#''afY'' - Y co-ordinate position.
#''afZ'' - Z co-ordinate position.

<syntaxhighlight lang="c++">
float GetPlayerPosX();
float GetPlayerPosY();
float GetPlayerPosZ();
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the player's position within the level on the specified axis.

===Journal===

<syntaxhighlight lang="c++">
void AddNote(string &in asNameAndTextEntry, string &in asImage);
</syntaxhighlight>

Adds a note to the player's journal.

#''asNameAndTextEntry ''- entries in the .lang file. Must end with _Name and _Text and be in category "Journal"!
#''asImage ''- the background image to be used

<syntaxhighlight lang="c++">
void AddDiary(string &in asNameAndTextEntry, string &in asImage);
</syntaxhighlight>

Adds a diary to the player's journal.

#''asNameAndTextEntry ''- entries in the .lang file. Must end with _NameX and _TextY whereas X and Y are numbers of the parts (_Name1: first diary, _Text1: first page) and be in category "Journal"! 
#''asImage ''- the background image to be used

<syntaxhighlight lang="c++">
void ReturnOpenJournal(bool abOpenJournal);
</syntaxhighlight>

Only called in the pickup diary callback! If true the journal displays the entry else not.

===Quests===

<syntaxhighlight lang="c++">
void AddQuest(string &in asName, string &in asNameAndTextEntry);
</syntaxhighlight>

Adds a quest to the player's journal under mementos. Completed quests cannot be readded.

#''asName ''- the internal name to be used
#''asNameAndTextEntry ''- entry in the .lang file. Must start with "Quest_<texthere>_Text”, and be in category “Journal”!

<syntaxhighlight lang="c++">
void CompleteQuest(string &in asName, string &in asNameAndTextEntry);
</syntaxhighlight>

Completes a quest. If the quest has not been added, it's marked as complete anyway, preventing it from being added.

#''asName ''- the internal name of the quest
#''asNameAndTextEntry ''- entry in the .lang file. Must start with " Quest_<texthere>_Text ”, and be in category “Journal”!

<syntaxhighlight lang="c++">
bool QuestIsCompleted(string &in asName);
bool QuestIsAdded(string &in asName);
</syntaxhighlight>

Checks whether a quest is completed/added.

#''asName ''- the internal name of the quest

<syntaxhighlight lang="c++">
void SetNumberOfQuestsInMap(int alNumberOfQuests);
</syntaxhighlight>

Sets the number of quests in the map. Obsolete; formerly used to calculate a completion percentage when looking at a level door.

#''alNumberOfQuests ''- Amount of quests

<syntaxhighlight lang="c++">
void GiveHint(string &in asName, string &in asMessageCat, string &in asMessageEntry, float afTimeShown);
</syntaxhighlight>

Displays a hint on the player's screen.

#''asName ''- the internal name
#''asMessageCat ''- the category in the .lang file, usually "Hints"
#''asMessageEntry ''- the entry in the .lang file
#''afTimeShown ''- time in seconds until the message disappears. If time is <= 0 then the life time is calculated based on string length.

<syntaxhighlight lang="c++">
void BlockHint(string &in asName);
void UnBlockHint(string &in asName);

</syntaxhighlight>

Blocking a hint prevents it from being shown. Blocked hints are included in savefiles, so they should persist between levels. Unblocking a hint allows it to be shown.

#''asName ''- the internal name. Basic game hints use the same name as their respective lang entries, with the exception of "numbered" hints. For example, <code>EntityGrab</code> blocks the <code>EntityGrab01</code> and <code>EntityGrab02</code> entries.

<syntaxhighlight lang="c++">
void RemoveHint(string &in asName);
</syntaxhighlight>

Removes the hint from the list of already shown hints, allowing it to appear again.

#''asName ''- the internal name. Basic game hints use the same name as their respective lang entries, with the exception of "numbered" hints. For example, <code>EntityGrab</code> reenables the <code>EntityGrab01</code> and <code>EntityGrab02</code> entries.

===Inventory===

<syntaxhighlight lang="c++">
void ExitInventory();
</syntaxhighlight>

Exits the inventory by force.

<syntaxhighlight lang="c++">
void SetInventoryDisabled(bool abX);
</syntaxhighlight>

Disables the player's ability to open his inventory.

<syntaxhighlight lang="c++">
void SetInventoryMessage(string &in asTextCategory, string &in asTextEntry, float afTime);
</syntaxhighlight>

Adds a message on the inventory screen. Used for feedback messages when failing to combine items.

#''asTextCategory ''- the category in the .lang file, usually "Inventory"
#''asTextEntry ''- the entry in the .lang file
#''afTime ''- time in seconds until the message disappears. If life time is <= 0 then the life time is calculated based on string length.

<syntaxhighlight lang="c++">
void GiveItem(string &in asName, string &in asType, string &in asSubTypeName, string &in asImageName, float afAmount);
</syntaxhighlight>

Adds an item to the inventory of the player. Note that the item does not have to exist as entity in the world to be able to do this.

#''asName ''- internal name
#''asType ''- item type to give, Available types are:
::*Puzzle
::*Lantern
::*Health
::*Sanity
::*LampOil
::*Tinderbox
#''asSubTypeName ''- item name for .lang file
#''asImageName ''- the image which will appear in inventory. For example: <code>void GiveItem("chemical_container_full_1", "Puzzle", "chemical_container_full", "chemical_container_full.tga", 1);</code> will use the image from <code>graphics/item/chemical_container_full.tga</code> 
#''afAmount ''- amount the item gives, - For example: Oil potions will fill the oil meter by this amount, Health potions will heal by this amount, etc.

<syntaxhighlight lang="c++">
void RemoveItem(string &in asName);
</syntaxhighlight>

Removes an item from the player's inventory.

#''asName ''- internal name

<syntaxhighlight lang="c++">
bool HasItem(string &in asName);
</syntaxhighlight>

Checks whether the player has an item in his inventory.

#''asName ''- internal name

<syntaxhighlight lang="c++">
void GiveItemFromFile(string &in asName, string &in asFileName);
</syntaxhighlight>

Adds a single item to the player's inventory. This is meant to be used for debug mostly as it creates the actual item and then destroys it.

#''asName ''- internal name
#''asFileName ''- item to give + extension (.ent)

<syntaxhighlight lang="c++">
void AddCombineCallback(string &in asName, string &in asItemA, string &in asItemB, string &in asFunction, bool abAutoRemove);
</syntaxhighlight>

Allows the player to combine items in his inventory. <br />Callback syntax: <code>void MyFunc(string &in asItemA, string &in asItemB)</code>

#''asName ''- internal name for the callback
#''asItemA ''- internal name of first item
#''asItemB ''- internal name of second item
#''asFunction ''- the function to call
#''abAutoRemove ''- determines whether the callback should be removed when the items are combined

<syntaxhighlight lang="c++">
void RemoveCombineCallback(string &in asName);
</syntaxhighlight>

Removes a combine callback.

#''asName'' - the internal name of the callback to be removed (as specified in AddCombineCallback)

<syntaxhighlight lang="c++">
void AddUseItemCallback(string &in asName, string &in asItem, string &in asEntity, string &in asFunction, bool abAutoDestroy);
</syntaxhighlight>

Allows the player to use items on the world. <br />Callback syntax: <code>void MyFunc(string &in asItem, string &in asEntity)</code>

#''asName ''- internal name of the callback
#''asItem ''- internal name of the item
#''asEntity ''- entity to be able to use the item on
#''asFunction ''- function to call
#''abAutoDestroy ''- determines whether the callback should be removed when the item is used

<syntaxhighlight lang="c++">
void RemoveUseItemCallback(string &in asName);
</syntaxhighlight>

Removes an item callback.

#''asName ''- internal name of the callback

===Entities===

====General====

<syntaxhighlight lang="c">
void SetEntityActive(string &in asName, bool abActive);
</syntaxhighlight>

Activates/deactivates an entity.

<syntaxhighlight lang="c">
void SetEntityVisible(string &in asName, bool abVisible);
</syntaxhighlight>

{{ReqVer|1.3}}

Activates/deactivates an entity's visual mesh. The collision body remains.

#''asName''  - Name of the entity.
#''abActive''  - Activate/deactivate mesh.

<syntaxhighlight lang="c">
bool GetEntityExists(string &in asName);
</syntaxhighlight>

Checks whether an entity exists.

<syntaxhighlight lang="c">
void SetEntityCustomFocusCrossHair(string &in asName, string& asCrossHair);
</syntaxhighlight>

Changes the crosshair that is used when focusing an entity.

#''asName ''- internal name
#''asCrossHair ''- desired crosshair, can be: 
::*Default (no crosshair)
::*Grab
::*Push
::*Ignite
::*Pick
::*LevelDoor
::*Ladder

<syntaxhighlight lang="c">
void CreateEntityAtArea(string &in asEntityName, string &in asEntityFile, string &in asAreaName, bool abFullGameSave);
</syntaxhighlight>

Creates an entity at an area. When creating an enemy though, it cannot chase properly along PathNodes (using for example <code>ShowEnemyPlayerPosition</code>).

#''asEntityName ''- internal name
#''asEntityFile ''- entity to be used extension .ent
#''asAreaName ''- the area to create the entity at
#''abFullGameSave ''- determines whether an entity "remembers" its state

<syntaxhighlight lang="c">
void ReplaceEntity(string &in asName, string &in asBodyName, string &in asNewEntityName, string &in asNewEntityFile, bool abFullGameSave);
</syntaxhighlight>

{{ReqVer|1.3}}

Removes an entity and places a new one in its place.

#''asName'' - Name of the entity to replace.
#''asBodyName'' - Name of the body of the entity to place the new entity at. If empty the first body is used (might be buggy, recommended to name a body anyway).
#''asNewEntityName'' - Name of the new entity.
#''asNewEntityFile'' - Name of the new entity file. Extension .ent. 
#''abFullGameSave'' - Whether ALL properties of this entity should be saved throughout levels.

<syntaxhighlight lang="c++">
void PlaceEntityAtEntity(string &in asName, string &in asTargetEntity, string &in asTargetBodyName, bool abUseRotation);
</syntaxhighlight>

{{ReqVer|1.3}}

Places an entity at the position of another entity. Does not work for enemies, use TeleportEnemyToEntity instead.

#''asName'' - Name of the entity to place.
#''asTargetEntity'' - Name of the other entity to place the first entity at.
#''asTargetBodyName'' - Name of the body of the entity to place the first entity at. If empty the first body is used (might be buggy, recommended to name a body anyway).
#''abUseRotation'' - Whether the entity should be rotated like the target entity.

<syntaxhighlight lang="c">
void SetEntityPos(string &in asName, float afX, float afY, float afZ);
</syntaxhighlight>

{{ReqVer|1.3}}

Moves an entity to a position in the level.

#''asName'' - Name of the entity to move.
#''afX'' - X co-ordinate position.
#''afY'' - Y co-ordinate position.
#''afZ'' - Z co-ordinate position.

<syntaxhighlight lang="c">
float GetEntityPosX(string &in asName);
float GetEntityPosY(string &in asName);
float GetEntityPosZ(string &in asName);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns an entity's position in the level on the specified axis.

#''asName'' - Name of the entity.

<syntaxhighlight lang="c">
void SetEntityPlayerLookAtCallback(string &in asName, string &in asCallback, bool abRemoveWhenLookedAt);
</syntaxhighlight>

Calls a function when the player looks at a certain entity. <br />Callback syntax: <code>void MyFunc(string &in asEntity, int alState)</code>  <br />alState: 1 = looking, -1 = not looking

#''asName ''- internal name
#''asCallback ''- function to call
#''abRemoveWhenLookedAt ''- determines whether the callback should be removed when the player looked at the entity

<syntaxhighlight lang="c">
void SetEntityPlayerInteractCallback(string &in asName, string &in asCallback, bool abRemoveOnInteraction);
</syntaxhighlight>

Calls a function when the player interacts with a certain entity. <br />Callback syntax: <code>void MyFunc(string &in asEntity)</code>

#''asName ''- internal name
#''asCallback ''- function to call
#''abRemoveOnInteraction ''- determines whether the callback should be removed when the player interacts with the entity

<syntaxhighlight lang="c">
void SetEntityCallbackFunc(string &in asName, string &in asCallback);
</syntaxhighlight>

Calls a function when certain events occur with an entity. <br />Callback syntax: <code>void MyFunc(string &in asEntity, string &in asType)</code>

<code>asType</code> values depend on entity type:

{|class=wikitable
! Entity Type !! asType Value
|-
| Object || Break
|-
| Lamp || OnIgnite
|-
| Item || OnPickup
|-
| Enemy || OnDeath
|-
| Enemy_Grunt<br>Enemy_Manpig || OnAutoDisabled
|-
|}

<syntaxhighlight lang="c">
void SetEntityConnectionStateChangeCallback(string &in asName, string &in asCallback);
</syntaxhighlight>

A callback called when ever the connection state changes (button being switched on, lever switched, etc). <br />Callback syntax: <code>void Func(string &in asEntity, int alState)</code>  <br />alState: -1 = off, 0 = between, 1 = on

<syntaxhighlight lang="c">
void SetEntityInteractionDisabled(string &in asName, bool abDisabled);
</syntaxhighlight>

Disallows interaction with an entity.

<syntaxhighlight lang="c">
void BreakJoint (string &in asName);
</syntaxhighlight>

Breaks a joint. Do not use this on joints in SwingDoors, Levers, Wheels, etc. where the joint is part of an interaction. That will make the game crash.

<syntaxhighlight lang="c">
void AddEntityCollideCallback(string &in asParentName, string &in asChildName, string &in asFunction, bool abDeleteOnCollide, int alStates);
</syntaxhighlight>

Calls a function when two entities collide. <br />Callback syntax: <code>void MyFunc(string &in asParent, string &in asChild, int alState)</code>  <br />alState: 1 = enter, -1 = leave

#''asParentName ''- internal name of main object
#''asChildName ''- internal name of object that collides with main object (asterix (<nowiki>*</nowiki>) NOT supported!)
#''asFunction ''- function to call
#''abDeleteOnCollide ''- determines whether the callback after it was called
#''alStates ''- 1 = only enter, -1 = only leave, 0 = both

<syntaxhighlight lang="c">
void RemoveEntityCollideCallback(string &in asParentName, string &in asChildName);
</syntaxhighlight>

Removes an EntityCollideCallback. Asterix (<nowiki>*</nowiki>) not supported in ''asChildName''.

<syntaxhighlight lang="c">
bool GetEntitiesCollide(string &in asEntityA, string &in asEntityB);
</syntaxhighlight>

Checks whether two entities collide. This function does NOT support asterix (<nowiki>*</nowiki>) or "Player"!

<syntaxhighlight lang="c">
void SetBodyMass(string &in asName, float afMass);
</syntaxhighlight>

{{ReqVer|1.3}}

Sets the mass of an entity's body.

#''asName''  - Name of the body of an entity. The body name of an entity is EntityName_BodyName.
#''afMass''  - The mass to set.

<syntaxhighlight lang="c">
float GetBodyMass(string &in asName);
</syntaxhighlight>

{{ReqVer|1.3}}

Gets the mass of an entity's body.

#''asName''  - Name of the body of an entity. The body name of an entity is EntityName_BodyName. 
#''afMass''  - The mass to get.

====Props====

<syntaxhighlight lang="c">
void SetPropEffectActive(string &in asName, bool abActive, bool abFadeAndPlaySounds);
</syntaxhighlight>

Turns the texture illumination, billboards, particles, light flicker, and sounds of a prop on or off.

Can be used on coal to give it the black color it should have.

#''asName'' - internal name 
#''abActive'' - active state
#''abFadeAndPlaySounds'' - if all effects should fade in/out or not

<syntaxhighlight lang="c">
void SetPropActiveAndFade(string &in asName, bool abActive, float afFadeTime);
</syntaxhighlight>

Activates/deactivates a prop.

#''asName ''- internal name 
#''abActive ''- nothing to add
#''afFadeTime ''- time in seconds until prop fully fades

<syntaxhighlight lang="c">
void SetPropStaticPhysics(string &in asName, bool abX);
</syntaxhighlight>

Activates/deactivates the physics of a prop, setting the mass to 0. Setting as true will make entities static in midair.

<syntaxhighlight lang="c">
bool GetPropIsInteractedWith(string &in asName);
</syntaxhighlight>

Checks whether a prop is interacted with.

<syntaxhighlight lang="c">
void RotatePropToSpeed(string &in asName, float afAcc, float afGoalSpeed, float afAxisX, float afAxisY, float afAxisZ, bool abResetSpeed, string &in asOffsetArea);
</syntaxhighlight>

Rotates the prop up to a set speed.

#''asName ''- internal name 
#''afAcc ''- acceleration
#''afGoalSpeed ''- desired speed 
#''afAxisX ''- rotation around X axis
#''afAxisY ''- rotation around Y axis
#''afAxisZ ''- rotation around Z axis
#''abResetSpeed ''- determines whether the speed is resetted after goal speed is reached
#''asOffsetArea ''- the area to rotate around, if empty, then the center of the body is used Note: The entity you want to rotate MUST be a "StaticObject" entity!

<syntaxhighlight lang="cpp">
void StopPropMovement(string &in asName);
</syntaxhighlight>

Stops all movement of a prop.

<syntaxhighlight lang="cpp">
void AddAttachedPropToProp(string &in asPropName, string &in asAttachName, string &in asAttachFile, float afPosX, float afPosY, float afPosZ, float afRotX, float afRotY, float afRotZ);
</syntaxhighlight>

Attaches a prop to another prop.

#''asPropName''- the prop to attach another prop at 
#''asAttachName ''- internal name of the prop that gets attached
#''asAttachFile ''- the prop that gets attached extension .ent
#''afPosX ''- X position of the attach from the prop
#''afPosY ''- Y position of the attach from the prop
#''afPosZ ''- Z position of the attach from the prop
#''afRotX ''- rotation around X axis of the attach
#''afRotY ''- rotation around Y axis of the attach
#''afRotZ ''- rotation around ZX axis of the attach

Note: for the purposes of <code>AddEntityCollideCallback</code>, attached props will not call the callback function if they collide with a "static_object" or a "StaticProp" entity type!

{{bug|''afRotZ '' is used for both the ZX rotation and the Z position of the attached prop. Unwanted rotation can be avoided by using: <br />''AddAttachedPropToProp(asPropName, asAttachName, asAttachFile, afPosX, afPosY, '''0''', afPosZ, '''90.0f''', afPosZ)''}}

{{bug|Attaching a breakable prop to a physically active prop, and then breaking the attached prop, will cause the game to crash, should the parent object be moved or reset.}}

<syntaxhighlight lang="cpp">
void AttachPropToProp(string &in asPropName, string &in asAttachName, string &in asAttachFile, float afPosX, float afPosY, float afPosZ, float afRotX, float afRotY, float afRotZ);
</syntaxhighlight>

{{ReqVer|1.3}}

Attaches a prop to another prop. Fixed version of <code>AddAttachedPropToProp</code>.

#''asPropName ''- the prop to attach another prop at
#''asAttachName ''- internal name of the prop that gets attached
#''asAttachFile ''- the prop that gets attached extension .ent
#''afPosX ''- X position of the attach from the prop 
#''afPosY ''- Y position of the attach from the prop
#''afPosZ ''- Z position of the attach from the prop
#''afRotX ''- rotation around X axis of the attach
#''afRotY ''- rotation around Y axis of the attach
#''afRotZ ''- rotation around ZX axis of the attach

Note: for the purposes of <code>AddEntityCollideCallback</code>, attached props will not call the callback function if they collide with a "static_object" or a "StaticProp" entity type!

<syntaxhighlight lang="cpp">
void RemoveAttachedPropFromProp(string &in asPropName, string &in asAttachName);
</syntaxhighlight>

Detaches a prop from a prop.

<syntaxhighlight lang="cpp">
void SetPropHealth(string &in asName, float afHealth);
void AddPropHealth(string &in asName, float afHealth);
float GetPropHealth(string &in asName);
</syntaxhighlight>

Modifies/returns the health of a prop.

<syntaxhighlight lang="cpp">
void ResetProp(string &in asName);
</syntaxhighlight>

Resets a prop's state to the original one when the map was loaded.

<syntaxhighlight lang="cpp">
void PlayPropAnimation(string &in asProp, string &in asAnimation, float afFadeTime, bool abLoop, string &in asCallback);
</syntaxhighlight>

Makes the prop play an animation and calls a function when it stops. <br />Callback syntax: <code>void MyFunc(string &in asProp)</code>

#''asProp ''- internal name of the prop
#''asAnimation ''- animation to play
#''afFadeTime ''- Fade time between current and new animations
#''abLoop ''- determines whether the animation loops 
#''asCallback ''- function to call when the animation ends

<syntaxhighlight lang="cpp">
void AddPropForce(string &in asName, float afX, float afY, float afZ, string &in asCoordSystem);
void AddPropImpulse(string &in asName, float afX, float afY, float afZ, string &in asCoordSystem);
void AddBodyForce(string &in asName, float afX, float afY, float afZ, string &in asCoordSystem);
void AddBodyImpulse(string &in asName, float afX, float afY, float afZ, string &in asCoordSystem);
</syntaxhighlight>

These functions push objects. Note that rather high values are needed when applying ''forces''  (on the order of ~100 (weak) to ~10000 (strong)), but not impulses (values less than 10 can be appropriate). Forces are external influences, and will have different effect depending on the mass of the object they are being applied to; impulses disregard mass, and can cause objects to break, as if hit. A "Body" is a physics-related helper object, to which a force or an impulse can be applied. Entities can consist of several bodies, interconnected in various ways (you can create/examine bodies in the model editor).

#''asName ''- the object to push; for bodies, use this format: "''entityName''_''bodyName''"
#''afX ''- magnitude along the X-axis
#''afY ''- magnitude along the Y-axis
#''afZ ''- magnitude along the Z-axis
#''asCoordSystem ''- determines which coordinate system is used, "local" or "world"

All of these functions are ''additive''  - when called consecutively, for each call, the vectors defined by (afX, afY, afZ) will be added together, and a resultant force/impulse will be calculated ''before''  any physics simulation is applied to the target object.

====Connections====

<syntaxhighlight lang="cpp">
void InteractConnectPropWithRope(string &in asName, string &in asPropName, string &in asRopeName, bool abInteractOnly, float afSpeedMul, float afToMinSpeed, float afToMaxSpeed, bool abInvert, int alStatesUsed);
</syntaxhighlight>

Connects a prop with the movement of a rope (i.e. turn a wheel to move a rope). For Levers, the rope only moves when the Lever is at the min, max, or middle.

#''asName''- The name of the connection
#''asPropName'' - The name of the prop; can be a Lever or Wheel
#''asRopeName'' - The name of the rope
#''abInteractOnly'' - If the connection is only affected by interacting with the prop directly
#''afSpeedMul'' - Speed multiplier of how quickly the rope moves
#''afToMinSpeed'' - The slowest the rope can move
#''afToMaxSpeed'' - The fastest the rope can move
#''abInvert'' - Whether to invert the direction the rope moves
#''alStatesUsed'' - The state to use, ignoring the other (1=max only, -1=min only, 0=both)

<syntaxhighlight lang="cpp">
void InteractConnectPropWithMoveObject(string &in asName, string &in asPropName, string &in asMoveObjectName, bool abInteractOnly, bool abInvert, int alStatesUsed);
</syntaxhighlight>

This one should only be used if there must be an exact correspondence to prop "amount" and the MoveObject open amount. It is best used for Wheel-door connections, where the MoveObject moves continuously along with the Wheel. For Levers, the MoveObject only moves when the Lever is at the min, max, or middle.

#''asName'' - The name of the connection
#''asPropName'' - The entity that controls the movement; can be a Lever or Wheel
#''asMoveObject'' - The MoveObject to move
#''abInteractOnly'' - If the connection is only affected by interacting with the prop directly
#''abInvert'' - If the state is inverted, making the MoveObject move in the opposite direction
#''alStatesUsed'' - The state to use, ignoring the other (1=max only, -1=min only, 0=both)

<syntaxhighlight lang="cpp">
void ConnectEntities(string &in asName, string &in asMainEntity, string &in asConnectEntity, bool abInvertStateSent, int alStatesUsed, string &in asCallbackFunc);
</syntaxhighlight>

Connects two entities together so that changing the state of the main entity changes the state of the connected entity.

{|class=wikitable
! Entity Type !! Max State (1) !! Min State (-1)
|-
| Lamp || Lit || Unlit
|-
| MoveObject || Open || Close
|-
| SwingDoor
|rowspan=2| Locked
|rowspan=2| Unlocked
|-
| Chest
|-
| Button || Switched on || Switched off
|-
| Lever
|rowspan=2| Unstuck
|rowspan=2| Stuck (at min)
|-
| Wheel
|-
|}

#''asName'' - The name of the connection
#''asMainEntity'' - The entity that causes the change; can be a Lever, Wheel, Button, or Photocell
#''asConnectEntity'' - The entity that is affected by the change
#''abInvertStateSent'' - If the state is inverted, making the connected entity change to the opposite state
#''alStatesUsed'' - The state to use, ignoring the other (1=max only, -1=min only, 0=both)
#''asCallbackFunc'' - The name of the connection callback

Callback syntax: <code>void MyFunc(string &in asConnectionName, string &in asMainEntity, string &in asConnectEntity, int alState)</code><br />alState is what is sent to connection entity and will be inverted if abInvertStateSent = true!

====Lamps====

<syntaxhighlight lang="cpp">
void SetLampLit(string &in asName, bool abLit, bool abEffects);
</syntaxhighlight>

Turns a lamp on or off.

#''asName ''- Name of the lamp
#''abLit ''- Set true if you want the lamp to be lit, set to false if you want the lamp to be unlit
#''abEffects ''- If you want to have the lamp fade in/out when it gets lit/unlit

====Doors====

<syntaxhighlight lang="cpp">
void SetSwingDoorLocked(string &in asName, bool abLocked, bool abEffects);
</syntaxhighlight>

Locks a SwingDoor.

#''asName ''- Name of the door
#''abLocked'' - Locked/unlocked
#''abEffects ''- If sounds are played when the door is locked/unlocked

<syntaxhighlight lang="cpp">
void SetSwingDoorClosed(string &in asName, bool abClosed, bool abEffects);
</syntaxhighlight>

Closes a SwingDoor.

#''asName ''- Name of the door
#''abClosed'' - Closed/open
#''abEffects ''- If sounds are played when the door is closed/opened

<syntaxhighlight lang="cpp">
bool GetSwingDoorLocked(string &in asName);
bool GetSwingDoorClosed(string &in asName);
</syntaxhighlight>

Checks whether a swing door is locked/closed.

<syntaxhighlight lang="cpp">
void SetSwingDoorDisableAutoClose(string &in asName, bool abDisableAutoClose);
</syntaxhighlight>

Deactivates the "auto-close" when a door is nearly closed.

<syntaxhighlight lang="cpp">
int GetSwingDoorState(string &in asName);
</syntaxhighlight>

Returns an integer depending on how far the door is opened. <br />-1 = angle is close to 0°, 1 = angle is 70% or higher of max, 0 = inbetween -1 and 1.

<syntaxhighlight lang="cpp">
void SetLevelDoorLocked(string &in asName, bool abLocked);
</syntaxhighlight>

Locks a level door. Note that level doors are NOT swing doors.

<syntaxhighlight lang="cpp">
void SetLevelDoorLockedSound(string &in asName, string &in asSound);
</syntaxhighlight>

Determines which sound is played when interacting with a locked level door.

<syntaxhighlight lang="cpp">
void SetLevelDoorLockedText(string &in asName, string &in asTextCat, string &in asTextEntry);
</syntaxhighlight>

Displays a message when interacting with a locked level door.

#''asName ''- internal name
#''asTextCat ''- the category in the .lang file
#''asTextEntry ''- the entry in the .lang file

<syntaxhighlight lang="cpp">
void SetMoveObjectState(string &in asName, float afState);
</syntaxhighlight>

Moves an object to a certain state.

#''asName ''- internal name 
#''afState ''- state of the object, 0 = closed, 1 = open, values inbetween (and above, for example, the bridge_metal_vert) are valid too!

<syntaxhighlight lang="cpp">
void SetMoveObjectStateExt(string &in asName, float afState, float afAcc, float afMaxSpeed, float afSlowdownDist, bool abResetSpeed);
</syntaxhighlight>

Moves an object to a certain state, extended method.

#''asName ''- internal name
#''afState ''- state of the object, 0 = closed, 1 = open, values inbetween are valid too!
#''afAcc ''- acceleration
#''afMaxSpeed ''- maximum speed
#''afSlowdownDist ''- Distance to the target state before deceleration occurs.
#''abResetSpeed ''- Set to ''true'' if the prop's speed should be reset before performing the movement, else the prop will accelerate from its current speed to afMaxSpeed.

====Levers, wheels and buttons====

<syntaxhighlight lang="cpp">
void SetPropObjectStuckState(string &in asName, int alState);
void SetWheelStuckState(string &in asName, int alState, bool abEffects);
void SetLeverStuckState(string &in asName, int alState, bool abEffects);
</syntaxhighlight>

Makes an object/wheel/lever stuck in a certain state.

#''asName'' - internal name
#''alState'' - 0 = not stuck, 1 = at max, -1 = at min 
#''abEffects'' - play sound effects

<syntaxhighlight lang="cpp">
void SetWheelAngle(string &in asName, float afAngle, bool abAutoMove);
</syntaxhighlight>

Moves a wheel to a certain angle.

#''asName'' - internal name
#''afAngle'' - angle
#''abAutoMove'' - true = wheel physically moves to the new angle; false = angle is changed without moving the wheel

<syntaxhighlight lang="cpp">
void SetWheelInteractionDisablesStuck(string &in asName, bool abX);
void SetLeverInteractionDisablesStuck(string &in asName, bool abX);
</syntaxhighlight>

Allows the player to make a wheel/lever unstuck when interacted with.

<syntaxhighlight lang="cpp">
int GetLeverState(string &in asName);
</syntaxhighlight>

Returns the state of the lever. <br />0 = not stuck, 1 = at max, -1 = at min

<syntaxhighlight lang="cpp">
void SetMultiSliderStuckState(string &in asName, int alStuckState, bool abEffects);
</syntaxhighlight>

Makes a MultiSlider stuck in a certain state.

<syntaxhighlight lang="cpp">
void SetMultiSliderCallback(string &in asName, string &in asCallback);
</syntaxhighlight>

Calls a function when state changes. <br />Callback syntax: <code>void MyFunc(string &in asEntity, int alState)</code>

<syntaxhighlight lang="cpp">
void SetButtonSwitchedOn(string &in asName, bool abSwitchedOn, bool abEffects);
</syntaxhighlight>

====Sticky areas====

<syntaxhighlight lang="cpp">
void SetAllowStickyAreaAttachment(bool abX);
</syntaxhighlight>

Allows entities to stick to a StickyArea.

<syntaxhighlight lang="cpp">
void AttachPropToStickyArea(string &in asAreaName, string &in asProp);
void AttachBodyToStickyArea(string &in asAreaName, string &in asBody);
</syntaxhighlight>

Attaches a prop/body to a StickyArea.

<syntaxhighlight lang="cpp">
void DetachFromStickyArea(string &in asAreaName);
</syntaxhighlight>

Detaches everything from a StickyArea.

====NPCs====

<syntaxhighlight lang="cpp">
void SetNPCAwake(string &in asName, bool abAwake, bool abEffects);
</syntaxhighlight>

Wakes/sleeps a NPC.

#''asName'' - The name of the NPC
#''abAwake'' - ''true'' to awaken, ''false'' to sleep
#''abEffects'' - Play the "Awake" or "Sleep" animations

<syntaxhighlight lang="cpp">
void SetNPCFollowPlayer(string &in asName, bool abX);
</syntaxhighlight>

Sets a NPC's head to follow the player's movements.

====Enemies====

<syntaxhighlight lang="cpp">
void SetEnemyDisabled(string &in asName, bool abDisabled);
</syntaxhighlight>

Disables an enemy.

<syntaxhighlight lang="cpp">
void SetEnemyIsHallucination(string &in asName, bool abX);
</syntaxhighlight>

Makes an enemy a hallucination. Hallucinations fade to smoke when they get near the player.

<syntaxhighlight lang="cpp">
void FadeEnemyToSmoke(string &in asName, bool abPlaySound);
</syntaxhighlight>

Instantly fades an enemy to smoke.

<syntaxhighlight lang="cpp">
void ShowEnemyPlayerPosition(string &in asName);
</syntaxhighlight>

Makes the enemy run to the player, no matter where he is.

<syntaxhighlight lang="cpp">
void AlertEnemyOfPlayerPresence(string &in asName);
</syntaxhighlight>

{{ReqVer|1.3}}

Gives the specified enemy the player's current position and makes it search the area.

<syntaxhighlight lang="cpp">
void SetEnemyDisableTriggers(string &in asName, bool abX);
</syntaxhighlight>

Enables or disables enemy triggers. If disabled, enemy will not react to player or attack.

<syntaxhighlight lang="cpp">
void AddEnemyPatrolNode(string &in asName, string &in asNodeName, float afWaitTime, string &in asAnimation);
</syntaxhighlight>

Adds a patrol node to the enemy's path.

#''asName''- Internal name of the enemy 
#''asNodeName'' - Path node 
#''afWaitTime'' - Time in seconds that the enemy waits at the path node before continuing. If 0, randomized between 1-3.
#''asAnimation'' - The animation the enemy uses when reaching the path node

<syntaxhighlight lang="cpp">
void ClearEnemyPatrolNodes(string &in asEnemyName);
</syntaxhighlight>

Clears the current path of patrol nodes of the enemy.

<syntaxhighlight lang="cpp">
void SetEnemySanityDecreaseActive(string &in asName, bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables whether an enemy activates the player's sanity drain when stared at.

#''asName'' - Internal name of the enemy 
#''abX'' - Enabled/disabled

<syntaxhighlight lang="cpp">
void TeleportEnemyToNode(string &in asEnemyName, string &in asNodeName, bool abChangeY);
</syntaxhighlight>

{{ReqVer|1.3}}

Teleports an enemy to a specific PathNode.

#''asEnemyName'' - Internal name of the enemy
#''asNodeName'' - Internal name of the node to teleport to 
#''abChangeY'' - Whether the Y position of the node will be used when teleporting the enemy

<syntaxhighlight lang="cpp">
void TeleportEnemyToEntity(string &in asEnemyName, string &in asTargetEntity, string &in asTargetBody, bool abChangeY);
</syntaxhighlight>

{{ReqVer|1.3}}

Teleports an enemy to a specific entity.

#''asEnemyName'' - Internal name of the enemy
#''asTargetEntity'' - Internal name of the entity to teleport to
#''asTargetBody'' - Internal name of the entity's body name to teleport to. If empty, the first body will be used (might be unstable, recommended to input a body anyway)
#''abChangeY'' - Whether the Y position of the entity will be used when teleporting the enemy

<syntaxhighlight lang="c">
void ChangeManPigPose(string &in asName, string &in asPoseType);
</syntaxhighlight>

{{ReqVer|1.3}}

Changes the pose a specified ManPig.

#''asName'' - Internal name of the enemy
#''asPoseType'' - Name of the ManPig pose to use. Can be "Biped" or "Quadruped"

<syntaxhighlight lang="c">
void SetTeslaPigFadeDisabled(string &in asName, bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables whether a specified Tesla ManPig should fade the player's view in and out.

#''asName'' - Internal name of the enemy
#''abX'' - Enabled/disabled

<syntaxhighlight lang="c">
void SetTeslaPigSoundDisabled(string &in asName, bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables whether a specified Tesla ManPig should play the proximity sounds.

#''asName'' - Internal name of the enemy
#''abX'' - Enabled/disabled

<syntaxhighlight lang="c">
void SetTeslaPigEasyEscapeDisabled(string &in asName, bool abX);
</syntaxhighlight>

{{ReqVer|1.3}}

Enables/disables whether a specified Tesla ManPig should be easier to escape from when hunted. If not disabled, easy escape is activated if the player is more than 12.35 meters away, the enemy can't see the player, and the player has less than 75 health. When this occurs, the enemy is forced to stop hunting and wait for half a second.

#''asName'' - Internal name of the enemy
#''abX'' - Enabled/disabled

<syntaxhighlight lang="c">
void ForceTeslaPigSighting(string &in asName);
</syntaxhighlight>

{{ReqVer|1.3}}

Forces a Tesla ManPig to be visible for a short time.

#''asName'' - Internal name of the enemy

<syntaxhighlight lang="c">
string& GetEnemyStateName(string &in asName);
</syntaxhighlight>

{{ReqVer|1.3}}

Returns the name of the state a specified enemy is current in.

#''asName'' - Internal name of the enemy

Possible states for all enemies:
*Idle
*Wait
*Patrol
*Investigate
*Alert
*Search
*Hurt
*Hunt
*HuntPause
*HuntWander
*AttackMeleeShort
*AttackMeleeLong
*BreakDoor
*Dead

Waterlurker-only states:
*GoHome
*Eat

ManPig-only states: 
*Flee
*Stalk
*Track

Unused states:
*AttackRange