{{TocRight}}
This page documents "HelperScripts_LoadWatcher.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script file "HelperScripts_LoadWatcher.hps" provides a new "OnLoad()" global callback.


===OnLoad()===
OnLoad() is used in the same way as OnEnter(). It can be added to the level's .hps file and used to excecute script that should happen '''every time the level loads'''. It is managed by LoadWatcher.

The difference between OnLoad() and OnEnter() is that OnEnter() is only called when the player enters the map. It is not called when the player reloads a game which was saved in the map. '''OnLoad() will be called last, one frame after the level has started.'''

The syntax to use for OnLoad() is as follows:
<syntaxhighlight lang="cpp">
void OnLoad(string &in asMessage)
</syntaxhighlight>


===Messages===
The string argument asMessage can optionally be used to pass some information about the state of your world or story. The message can be set using the '''Message property or the SetMessage() function''' of LoadWatcher. An example use case might be to note some detail about the story progress, for example the Message property could be assigned when the player triggers a story event:
<syntaxhighlight lang="cpp">
LoadWatcher.Message = "chapter2";
</syntaxhighlight>
			
The string will be stored in a local variable wrapper and saved with the game. Then, the next time the level is loaded, OnLoad() will use that message as it's asMessage argument. It can be thought of as a way for the script to leave a message for itself for the next session or next life.

'''Each level has its own message.''' Changing the message only affects reloading into the level that is current at the time of changing the message. If no message has been set, or if it is set as an empty string (""), then the default message "OnLoadCallback" is used.


===Extra Callbacks===
Another feature of LoadWatcher is that you can register '''extra callbacks''' to use alongside OnLoad(). These have the same syntax and share the same message, but they can be added and removed at any time, so that they are ready to be called on the next reload. LoadWatcher handles storing the callback names in local variable wrappers, so they are also saved with the game, and also apply only to the current level.

The methods AddExtraCallback(), RemoveExtraCallback(), ClearExtraCallbacks() and IsExtraCallbackRegistered() are provided for working with extra callbacks.


=LoadWatcher=


==Behaviours==
"HelperScripts_LoadWatcher.hps" declares an object called '''LoadWatcher''', of the new script class cLoadWatcher. To access its properties and methods, just use "LoadWatcher." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
LoadWatcher.AddExtraCallback("OnLoad2");
LoadWatcher.Message = "just_loaded";
</syntaxhighlight>


==Properties==
LoadWatcher provides the following properties:


====Message====
<syntaxhighlight lang="cpp">
string Message
</syntaxhighlight>
The string property Message let's you set the global string that will be used with the OnLoad() callback next time the game is loaded, and each time after that until it is changed.
<syntaxhighlight lang="cpp">
// Example:
// When a gameplay or story event has occurred, set the message.
LoadWatcher.Message = "AfterTheBigCutscene";

// Next time the level loads:
OnLoad(string &in asMessage)
{
    if (asMessage == "AfterTheBigCutscene") DoStuff();
}
</syntaxhighlight>

==Methods==
LoadWatcher provides the following methods:


===OnLoad() message===


====SetMessage()====
<syntaxhighlight lang="cpp">
void SetMessage(string asMessage, bool abOnce = false)
</syntaxhighlight>
Sets the global message string that will be used with the OnLoad() callback next time the game is loaded.
<br>abOnce is optional. It defaults to false if omitted. If it is specified as true, then the message will be used once next time the game is loaded and then cleared. If abOnce is false or omitted then the message will persist until it is changed.
#''string asMessage'' - A message to pass to the OnLoad function when the reload happens.
#''bool abOnce'' - Whether to clear the message after the next reload. (Optional, default = false)
<syntaxhighlight lang="cpp">
// Example:
// When a gameplay or story event has occurred, set the message.
LoadWatcher.SetMessage("AfterTheBigCutscene");

// Next time the level loads:
OnLoad(string &in asMessage)
{
    if (asMessage == "AfterTheBigCutscene") DoStuff();
}
</syntaxhighlight>


===Extra Callbacks===


====AddExtraCallback()====
<syntaxhighlight lang="cpp">
bool AddExtraCallback(string asCallback)
</syntaxhighlight>
Registers an additional callback to use when the level is loaded. Returns false if the callback is already registered, and true if it otherwise registered successfully.
#''string asCallback'' - Name of the callback function to register.
<syntaxhighlight lang="cpp">
// Example:
// When a gameplay or story event has occurred, add a new callback.
LoadWatcher.AddExtraCallback("OnLoadWhileDoorIsLocked");

// Next time the level loads:
OnLoad(string &in asMessage)
{
    // Do normal stuff
}

OnLoadWhileDoorIsLocked(string &in asMessage)
{
    // Do stuff specific to the door-locked scenario, whatever that is.
}
</syntaxhighlight>


====IsExtraCallbackRegistered()====
<syntaxhighlight lang="cpp">
bool IsExtraCallbackRegistered(string asCallback)
</syntaxhighlight>
Returns true if the additional callback has already been registered. This includes callbacks that have been registered in this level in a previous session.
#''string asCallback'' - Name of the callback function to check.
<syntaxhighlight lang="cpp">
// Example:
if (LoadWatcher.IsExtraCallbackRegistered("ReloadInChapter2"))
// The condition will succeed if the extra callback with that name has been registered.
</syntaxhighlight>


====RemoveExtraCallback()====
<syntaxhighlight lang="cpp">
bool RemoveExtraCallback(string asCallback)
</syntaxhighlight>
Un-registers an additional callback. Returns true if the callback was found and removed.
#''string asCallback'' - Name of the callback function to remove.
<syntaxhighlight lang="cpp">
// Example:
// When a gameplay or story event has occurred, add a new callback.
LoadWatcher.RemoveExtraCallback("OnLoadWhileDoorIsLocked");

// Next time the level loads:
OnLoad(string &in asMessage)
{
    // Do normal stuff
}

OnLoadWhileDoorIsLocked(string &in asMessage)
{
    // Do stuff specific to the door-locked scenario, whatever that is.
	// If the callback has been removed, this will no longer happen.
}
</syntaxhighlight>


====ClearExtraCallbacks()====
<syntaxhighlight lang="cpp">
void ClearExtraCallbacks()
</syntaxhighlight>
Un-registers all extra callbacks.
<syntaxhighlight lang="cpp">
// Example:
LoadWatcher.ClearExtraCallbacks();
// Now only the OnLoad() callback will be called.
</syntaxhighlight>

__FORCETOC__