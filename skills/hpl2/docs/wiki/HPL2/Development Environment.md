In order to mod Amnesia comfortably, you will need to set up the game so you can easily test maps and reload scripts. To do that, it is recommended to have two in-game users; a regular one (for testing how the mod works for the player) and a developer one. This article is about the basic set up of a developer user.

==Setting up a dev user==

Follow these steps to create a developer user:

#Enter the game (or Full Conversion mod) normally and create a new profile (call it Dev, for example) and then exit. Some of the following steps can be overwritten by the game if it is left running.
#Enter the save directory (<code>My Documents/Amnesia/Main</code> in Windows by default; <code>~/.frictionalgames/Amnesia/Main</code> in Linux). If your mod is an FC, do this in its save folder.
#Open main_settings.cfg and change set the following options:
##<code>LoadDebugMenu="true"</code>
##<code>ShowPreMenu="false"</code> (this will skip you some waiting on each game launch)
##<code>SaveConfig="false"</code>  will make sure that the in-game option changes don't overwrite changes to this file
##Optional: <code>ExitMenuDirectly="true"</code> if you wish to exit the game without visiting the main menu
##<code>ForceCacheLoadingAndSkipSaving="false"</code>, otherwise certain map changes might not show! You will sometimes need to delete the map's cache file even with this setting
#Open user_settings.cfg (in the "Dev" folder) and set the following:
##<code>AllowQuickSave="true"</code>  ('''F4'''=save, '''F5'''=load)
##<code>ScriptDebugOn="true"</code>. This makes debugging easier (more on that below)
#In order to avoid running into "File index out of bounds" errors in the Level Editor, edit the file '''resources.cfg''' located in the root the directory of Amnesia and add the ''custom_stories'' directory to the end of the list. This will also make custom assets load in the editors.

You can now press '''F1''' to open the '''debug menu''' to turn on/off various things and more importantly - quick reload the map. After editing a script or a map simply press "Quick reload" or '''F2'''. If a mesh or texture has been updated (e.g. in an Entity file), you need to press "Reload".

{{tip|If you start the game with a syntax error in your script file, it will crash. But if you reload the script with F2 with a syntax error, it will instead give you an error description. Therefore it's a good idea to load into a map before making changes to its script.}}

By setting <code>ScriptDebugOn="true"</code> you have set the script function <code>ScriptDebugOn()</code> to return true. This is quite useful, as you can add something like this in your startup code:
<syntaxhighlight lang="cpp">if(ScriptDebugOn()) {
//Do your setup stuff
}</syntaxhighlight>

This will enable you to easily add all kinds of debug stuff (giving a lantern to the player, extra items, etc.) wihout having to worry about removing it for the final release. If you wish to test a map without this feature, you can use your normal user profile.

Another very useful function this mode enables is [[HPL2/Engine_Scripts|<code>AddDebugMessage</code>]] which shows a message in the bottom left corner of the screen.
This can make debugging much easier; in particular, if something isn't working, you can print a message to see if your code is being executed at all.

Now you should be ready to start some editing!

==Loading directly into a map==
The following config will let you load directly into a level when starting the game. This will only work if you place your maps in the main game's maps folder, which is not recommended, so this feature has very limited usage.

#Open '''main_settings.cfg''' again and set <code>ShowMenu="false"</code> (this feature doesn't work without the next steps).
#In '''user_settings.cfg''', inside the '''Map''' element set:
##<code>Folder=""</code> to the root folder for your maps (eg <code>Folder="MyMaps/"</code>), this folder MUST be located inside the maps folder in the game directory (where you put the tools).
##<code>File=""</code>  to point to the map you want to load (eg <code>File="my_map.map"</code>).

Now you can simply run Amnesia and the map will be loaded directly without any menu.