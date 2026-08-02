{{TocRight}}
This page documents "HelperScripts_Fader.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script class cFader manages a list of sound entities in a level that are set to play ambient sounds.

The intent is that, rather than having many localised ambient sounds around the level, the level designer can use a handful of sound entities to provide a non-3d "soundscape" and then use scripting to switch between them, and layer them to the desired extent.

Fader handles the fading so that sounds are not cut off suddenly if, for example, a player moves repeatedly over a trigger. Since we can't smoothly change a fade that is already in progress, Fader waits and applies new changes as soon as possible, with the idea that smooth fading is more important than accurate timing.


===Initialising loops===
For Fader to control a looping sound, the sound entity (placed in the map in Level Editor) must be registered with Fader. This is done using InitLoop(), typically in the OnEnter() callback of the level.
<syntaxhighlight lang="cpp">
void OnEnter()
{
	Fader.InitLoop("MySound");
}
</syntaxhighlight>


===Groups and Priority===
Each Fader sound can be assigned a group. Only one sound from each group can play at a time. This can be used to build up a layered soundscape and swap out a specific layer. If the group is zero, that counts as "no group". Multiple group-zero sounds can play at once.
<br>Each Fader sound is also assigned a priority, or prio. If the maximum number of sounds are player and another tries to play, a random sound with the lowest priority will fade out. The StopLowPriority() method can also be used to manually stop the lowest priority sounds.


===Music===
Fader doesn't do anything special with regards to playing music files, but when the music is stopped and started via Fader using PlayMusicTracked() and StopMusicTracked(), then Fader can keep track of it. Fader sounds can be marked as "StopOnMusic" so that they can fade out when music starts. The basic script functions don't provide a way to query whether music is playing, but Fader provides the properties IsMusicPlaying and MusicPlayingCount.


===Ducking===
Fader sounds that are currently playing can be temporarily faded out and back in using DuckStart() and DuckRestore(). This could be useful for cutscenes or dramatic moments.


===Sound files===
Ideally, .snt files for use with Fader should have the following settings:
<syntaxhighlight lang="cpp">
	FadeEnd="True" FadeStart="True" Stream="True" Loop="True" Use3D="False" Blockable="False"
</syntaxhighlight>
(In theory, Fader will work ''to a certain extent'' with any other .snt file settings, but not as intended. This has not been tested.)


===Save data===
Fader saves its data for each level to GameVars so that it can be automatically restored when the player returns to the level or reloads a game that was saved in the level. Any sounds that were initialised with Fader at the time of saving will be re-initialised, and their play state will be restored.

The restoration of the loaded state occurs on the first frame once the game has started. If the game starts and Fader hasn't yet been initialised, then it will check to see if there is saved data from a previous session, and restore it. If the game starts and Fader was already initialised in OnStart() or OnEnter(), then the load will be skipped.


===Advanced info===
'''Advanced users''' may wish to examine "HelperScripts_Fader.hps" to see how it makes use of other script classes. There are also some private variables that could to tweaked to fit the needs of a specific project, such as the maximum concurrent sounds and the default fade times.


=Fader=
Fader is the name of the object that manages the sound fading.


==Behaviours==
"HelperScripts_Fader.hps" declares an object called '''Fader''', of the new script class cFader. To access its properties and methods, just use "Fader." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
Fader.InitLoop("ForestAmbienceLoop");
if (Fader.IsAnyPlaying) DoStuff();
</syntaxhighlight>


==Properties==
Fader provides the following properties:


====SoundsCount====
<syntaxhighlight lang="cpp">
uint SoundsCount
</syntaxhighlight>
The read-only integer property SoundsCount returns the number of sounds registered with Fader.
<syntaxhighlight lang="cpp">
// Example:
if (Fader.SoundsCount == 0) Fader.InitLoop("ForestAmbienceLoop");
// The condition succeeds if no sounds have been registered with Fader yet, and the first one is registered in response.
</syntaxhighlight>


====SoundsPlayingCount====
<syntaxhighlight lang="cpp">
uint SoundsPlayingCount
</syntaxhighlight>
The read-only integer property SoundsPlayingCount returns the number of Fader sounds that are currently playing.
<syntaxhighlight lang="cpp">
// Example:
if (Fader.SoundsPlayingCount > 5) StopMusic(10.0f, 1);
// The condition succeeds if there are more than 5 Fader sounds currently playing, in which case the music is faded out.
</syntaxhighlight>


====IsAnyPlaying====
<syntaxhighlight lang="cpp">
bool IsAnyPlaying
</syntaxhighlight>
The read-only boolean property IsAnyPlaying returns whether there are currently any Fader sounds playing.
<syntaxhighlight lang="cpp">
// Example:
if (Fader.IsAnyPlaying) DoStuff();
// The condition succeeds if any Fader sound is currently playing or fading in.
</syntaxhighlight>


====IsMusicPlaying====
<syntaxhighlight lang="cpp">
bool IsMusicPlaying
</syntaxhighlight>
The read-only boolean property IsMusicPlaying returns whether music is currently playing, as long as the music was started or stopped by Fader. See also the IsMusicPlaying() method, to check if music is playing at a specific music prio.


====MusicPlayingCount====
<syntaxhighlight lang="cpp">
uint MusicPlayingCount
</syntaxhighlight>
The read-only uint property MusicPlayingCount returns the number of music tracks currently playing. (If there are tracks with different prio values, only the one with the highest prio will be heard, but the rest will also be considered "playing".)


==Methods==
Fader provides the following methods:


===Adding/removing loops===


====InitLoop()====
<syntaxhighlight lang="cpp">
bool InitLoop(string asNewSound, bool abStartImmediately = false)
bool InitLoop(string asNewSound, bool abStartImmediately, float afFadeInTime = 2.5f, float afFadeOutTime = 2.5f, const afPriority = 1.0f, uint aulGroup = 0, bool abStopOnMusic = false)
</syntaxhighlight>
Sets up a sound entity in the map to be controlled by Fader, typically during the OnEnter() callback of the level. asNewSound is the name of the sound entity as named in the Level Editor. Returns true if the sound was successfully added. abStartImmediately is optional and can be omitted. If true, the sound will fade in ASAP, otherwise it be ready to start later.
<br>afFadeInTime and afFadeOutTime can be used to assign longer or short transitions to this sound, but you can also omit it and Fader will use the defaults instead.
<br>afPriority is optional. If omitted it defaults to mfPriorityDefault (1.0f). The priority of a sound is used if a sound needs to be removed from play. The sound chosen to be stopped will be one with the lowest priority value (and the oldest if there are equal lowest priorities).
<br>aulGroup is also optional. If specified with a value greater than zero, this serves to group sounds together into channels. Normally sounds layer on top when they start to play, but only one sound with the same aulGroup number greater than zero can play at once. The new sound will replace others with the same aulGroup.
<br>abStopOnMusic is also option. It defaults to false if omited. If true, this sound will fade out whenever music starts that is tracked by Fader.
#''string asNewSound'' - The name of the sound entity in the map (not the .snt file).
#''bool abStartImmediately'' - Whether the sound should be playing from the start. (Optional, default = false)
#''float afFadeInTime'' - Used to override the default fade timing for this sound. (Optional together with afFadeOutTime, default = 2.5f)
#''float afFadeInTime'' - Used to override the default fade timing for this sound. (Optional together with afFadeInTime, default = 2.5f)
#''float afPriority'' - How important is this sound? Lowest priority sounds get replaced first. (Optional, default = 1.0f)
#''uint aulGroup'' - If > 0, only one sound in each group can play at once. (Optional, default = 0)
#''bool abStopOnMusic'' - If true, the sound will fade out whenever music is playing that is tracked by Fader. (Optional, default = false)
<syntaxhighlight lang="cpp">
// Example 1:
Fader.InitLoop("CitySounds");
// The sound entity "CitySounds" is registered with Fader, with default settings.

// Example 2:
Fader.InitLoop("BasementCreaks", false, 4.0f, 8.0f, 2.0f);
// The sound entity "BasementCreaks" is registered with Fader, with specific fade times and priority.

// Example 3:
Fader.InitLoop("MountainWindQuiet", true, 1.0f, 2);
Fader.InitLoop("MountainWindLoud", false, 2.0f, 2);
// Two complementary sounds are registered. Since they are in the same group (2), only one of them can play at once.
// If Fader ever has to decide which one of the two it should stop, it will chose "MountainWindQuiet" as it has the lower priority.
</syntaxhighlight>


====ClearAllLoops()====
<syntaxhighlight lang="cpp">
void ClearAllLoops()
</syntaxhighlight>
De-registers all registered sounds. Since sounds are typically added once with InitLoop() when the player enters the level, ClearAllLoops() should only be needed in exceptional cases. Does not change the current play state of the actual sound loops.
<syntaxhighlight lang="cpp">
// Example:
Fader.InitLoop("NiceSounds");
Fader.InitLoop("SpookySounds", true);
Fader.ClearAllLoops();
// Both the "NiceSounds" and "SpookySounds" entities are de-registered. Since "SpookySounds" was set to start playing, it will probably continue playing without Fader.
</syntaxhighlight>


===Starting/stoppping sounds===


====StartLoop()====
<syntaxhighlight lang="cpp">
bool StartLoop(string asStartLoop)
bool StartLoop(string asStartLoop, float afOverrideFadeTime)
</syntaxhighlight>
Starts a loop playing as soon as possible. Returns true if the sound was successfully prepared to start.
<br>Optionally, you can override the fade-in time for the sound with afOverrideFadeTime. If omitted, the sound's default fade time will be used if it has one, or the Fader default fade time if it doesn't.
#''string asStartLoop'' - Name of the sound entity in the map to start playing.
#''float afOverrideFadeTime'' - Overrides the fade time for the sound. (Optional, default = default fade time)
<syntaxhighlight lang="cpp">
// Example 1:
Fader.StartLoop("canyon.mid");
// If there is a Fader sound with the name "canyon.mid", it will fade in and play, with its default fade time.

// Example 2:
Fader.StartLoop("roblox_oof_10hourloop", 60.0f);
// If there is a Fader sound with the name "roblox_oof_10hourloop", it will fade in and play over the course of a minute.
</syntaxhighlight>


====StopLoop()====
<syntaxhighlight lang="cpp">
void StopLoop(string asSoundToRemove)
</syntaxhighlight>
If the specified sound is currently playing, this will stop it as soon as possible.
#''string asSoundToRemove'' - The name of the sound entity to be stopped in the map.
<syntaxhighlight lang="cpp">
// Example:
Fader.StopLoop("lofi_beats_to_hide_from_grunts_to");
// If there is a Fader sound with the name "lofi_beats_to_hide_from_grunts_to" and if it is currently playing, it will fade out and stop.
</syntaxhighlight>


====StopAllLoops()====
<syntaxhighlight lang="cpp">
void StopAllLoops()
</syntaxhighlight>
Stops all playing sounds as soon as possible.
<syntaxhighlight lang="cpp">
// Example:
Fader.StopAllLoops();
// Any sounds that are currently playing will fade out and stop.
</syntaxhighlight>



====StopLowPriority()====
<syntaxhighlight lang="cpp">
void StopLowPriority()
void StopLowPriority(float afThreshold)
</syntaxhighlight>
Checks the priority of currently playing sounds, and if any of them have a priority less than or equal to the specified value, they will be stopped as soon as possible.
<br>If afThreshold is omitted, a sound with the lowest prority will be removed.
#''float afThreshold'' - Any sounds with this priority or less will be stopped. (Optional, default is lowest priorty)
<syntaxhighlight lang="cpp">
// Example 1:
Fader.StopLowPriority(2.0f);
// Any currently playing sounds with a priority of 2.0f or less will fade out and stop.

// Example 2:
if (Fader.SoundsPlayingCount >= lTooManySounds) Fader.StopLowPriority();
// If the number of sounds playing is greater than the limit set by lTooManySounds, then a single low-priority sound will fade out and stop.
</syntaxhighlight>


====StopGroup()====
<syntaxhighlight lang="cpp">
void StopGroup(uint aulGroup)
</syntaxhighlight>
Checks the group number of currently playing sounds, and if any of them have the specified group number, they will be stopped as soon as possible.
#''uint aulGroup'' - Any sounds with this group number will be stopped.
<syntaxhighlight lang="cpp">
// Example:
Fader.StopGroup(4);
// All sounds in group 4 will fade out and stop.
</syntaxhighlight>


====DuckStart()====
<syntaxhighlight lang="cpp">
void DuckStart()
</syntaxhighlight>
Fades out all currently playing sounds, storing them in a temporary list. DuckRestore() can be used to resume the sounds that have been ducked. Calling DuckStart() again (before DuckRestore()) will erase the list.
<syntaxhighlight lang="cpp">
// Example:
Fader.StartLoop("lofiBeats");
// a short while later
Fader.DuckStart();
// a while later still
Fader.DuckRestore();
// The sound named "lofiBeats" will start, duck and then restore.
</syntaxhighlight>


====DuckRestore()====
<syntaxhighlight lang="cpp">
void DuckStart()
</syntaxhighlight>
Resumes sounds that have been temporarily stoped by DuckStart(), and clears the temporary list. Any Fader sounds that were started since DuckStart() will be stopped.
<syntaxhighlight lang="cpp">
// Example:
Fader.StartLoop("lofiBeats");
// a short while later
Fader.DuckStart();
// a while later still
Fader.DuckRestore();
// The sound named "lofiBeats" will start, duck and then restore.
</syntaxhighlight>


===Music===


====PlayMusicTracked()====
<syntaxhighlight lang="cpp">
void PlayMusicTracked(string asMusicFile, bool abLoop, float afVolume, float afFadeTime, int alPrio, bool abResume)
</syntaxhighlight>
Starts music, same as the global function Fader.PlayMusicTracked(), only this method is tracked by Fader and can affect Fader sounds.


====StopMusicTracked()====
<syntaxhighlight lang="cpp">
void StopMusicTracked(float afFadeTime, int alPrio)
</syntaxhighlight>
Stops music, same as the global function Fader.StopMusicTracked(), only this method is tracked by Fader and can affect Fader sounds.


====IsMusicPlaying()====
<syntaxhighlight lang="cpp">
bool IsMusicPlaying( int alPrio)
</syntaxhighlight>
Returns true if music is playing with the given priority. See also the IsMusicPlaying and MusicPlayingCount properties.


===Querying sounds===


====IsLoopPlaying()====
<syntaxhighlight lang="cpp">
bool IsLoopPlaying(string asLoop)
</syntaxhighlight>
Given the name of a sound entity in the map, this returns true if it is currently playing in Fader.
<br>"Currently playing" includes fading in, but not fading out.  If the sound has not been initialised as a Fader loop, this will return false regardless of whether it is actually playing.
#''string asLoop'' - The name of the sound entity to check.
<syntaxhighlight lang="cpp">
// Example:
if (Fader.IsLoopPlaying("DistantMusic")) DoStuff();
// The condition succeeds if the sound "DistantMusic" is currently playing.
</syntaxhighlight>


====DebugOutput()====
<syntaxhighlight lang="cpp">
void DebugOutput()
</syntaxhighlight>
Writes the current state of all registered Fader loops as a Debug message with priority 3.
<br>


=cFaderSound=
cFaderSound is a list node class used by cFader to manage individual loops. It is '''not recommended''' to work with cFaderSound directly. Instead, just use the methods of Fader and let it manage them for you.

'''Advanced users''' who intend to access cFaderSound instances may find the following information useful.


==Behaviours==
cNodeBobbing has three constructors, from full control to minimal args that use default settings:
<syntaxhighlight lang="cpp">
cFaderSound(string asName)
cFaderSound(string asName, enumFaderState aFaderState)
cFaderSound(string asName, float afFadeInTime, float afFadeOutTime, float afPriority, uint aulGroup, enumFaderState aFaderState)
</syntaxhighlight>


==Fields==
cFaderSound has no public properties, but is does have some public fields: <code>string msName; uint mulGroup; enumFaderState mFaderState;</code>


=Miscellaneous=


===Global functions===
"HelperScripts_Fader.hps" defines five global timer callbacks used by cFader to handle latent fading. It is '''not recommended''' to work with cFaderSound directly. Instead, just use the methods of Fader and let it manage them for you.
<syntaxhighlight lang="cpp">
void Fader_StartLoop_LatentRetry(string &in asRetrySound)
void Fader_StartFocus_LatentDone(string &in asFadedSound)
void Fader_Play_LatentRetry(string &in asFadedSound)
void Fader_StopFocus_LatentDone(string &in asFadedSound)
void Fader_Stop_LatentRetry(string &in asFadedSound)
</syntaxhighlight>


===Enums===
"HelperScripts_Fader.hps" defines the enumerator enumFaderState.


__FORCETOC__