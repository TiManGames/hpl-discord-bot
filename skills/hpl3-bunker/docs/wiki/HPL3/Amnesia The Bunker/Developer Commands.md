{{ShortPageTitle}}
When launching a game or a mod via the command line, you can pass optional arguments which will affect the way the game is loaded. It can be useful for mods which require custom assets and scripts, or if you want to customize it further than that.

An example of useful arguments to use in a Windows .bat file, to start a mod in developer mode:
 AmnesiaTheBunker_NoSteam.exe -user Dev -cfg config/main_init_dev.cfg -mod local:MyMod

==Command Line Arguments==
{{Note|You can add multiple arguments and combine them when launching the game.}}
{| class="wikitable"
!Argument
!Default Value
!Description
!Example
|-
|<code>-user</code>
|<code>Default</code>
|Starts the game with a different user name. 

This is useful for starting a game / mod with a different set of save files, as they are saved per-user.
|<code>-user Default_dev</code>
|-
|<code>-cfg</code>
|<code>config/main_init.cfg</code>
|Changes the main config file that is used when starting the mod.

This is useful if the relative path of the config file inside your mod folder is different and you want to point to your file.
|<code>-cfg config/main_init_dev.cfg</code>
|-
|<code>-mod</code>
|''No default value.''
|Launches a mod instead of the main game. Use this if you want to run your mod in dev mode.
This argument begins with either <code>local:</code> or <code>steamworkshop:</code> depending on where the mod is sourced from. In most cases you want to use <code>local:</code>, since this is mostly for mod developers. After this first keyword immediately follows the name of the mod folder or the Steam Workshop ID of the mod.
|<code>-mod local:MyMod</code><br><code>-mod steamworkshop:42069</code>
|-
|<code>-map</code>
|Stated at <code>StartMap->File</code> in <code>main_init.cfg</code>.
|The game loads a specific map after startup.

This is useful if you want to load a specific map quickly or if you want to skip the "load map" option in the debug menu.
|<code>-map "mods/myMod/maps/myMap.hpm"</code>
|-
|<code>-mapfolder</code>
|Stated at <code>StartMap->Folder</code> in <code>main_init.cfg</code>.
|Starts the game with a specific map folder.
|<code>-mapfolder "mods/myMod/maps"</code>
|-
|<code>-mappos</code>
|Stated at <code>StartMap->Pos</code> in <code>main_init.cfg.</code>
|Sets a specific start position to be used in a map.

This is useful if you want to test your map from a specific position or if you want to skip the "jump to start pos" option in the debug menu.
|<code>-map "PathToMap/myMap.hpm" -mappos "MyPos"</code>
|-
|<code>-workdir</code>
|''No default value.''
|Which directory the game exe is located. Can be used to change between engine and main redist. 
'''This command line argument is useful for the engine developers only!'''
|''No default value.''
|}