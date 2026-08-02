{{ShortPageTitle}}
When launching a game or a mod via a Command Prompt (CMD .bat file), you can pass optional arguments which will affect the way the mod is loaded by the game. It can be useful for mods which require custom assets and scripts, or if you want to customize it further than that.

==Command Line Arguments==
{{Note|You can add multiple arguments and combine them when launching the game. It doesn't have to be only one argument.}}
{| class="wikitable"
!Argument
!Default Value
!Description
!Example
|-
|user
|<code>Default</code>
|Starts the game with a different user name. 

This is useful for starting a game / mod with a different set of save files, as they are saved per-user.
|<code>Soma.exe -user Default_dev</code>
|-
|cfg
|<code>config/main_init.cfg</code>
|Changes the main config file that is used when starting the mod.

This is useful if the relative path of the config file inside your mod folder is different and you want to point to your file.
|<code>Soma.exe -cfg config/main_init_dev.cfg</code>
|-
|mod
|''No default value.''
|Points to a mod entry file and launches the mod instead of the main game. Use this if you want to run your mod in dev mode.
This argument requires a full path of the game / mod directory.
|<code>Soma.exe -mod "C:\SOMA\mods\myMod\entry.hpc"</code>
|-
|map
|Stated at <code>StartMap->File</code> in <code>main_init.cfg</code>.
|The game loads a specific map after startup.

This is useful if you want to load a specific map quickly or if you want to skip the "load map" option in the debug menu.
|<code>Soma.exe -map "mods/myMod/maps/myMap.hpm"</code>
|-
|mapfolder
|Stated at StartMap->Folder in <code>main_init.cfg</code>.
|Starts the game with a specific map folder.
|<code>Soma.exe -mapfolder "mods/myMod/maps"</code>
|-
|mappos
|Stated at <code>StartMap->Pos</code> in <code>main_init.cfg.</code>
|Sets a specific start position to be used in a map.

This is useful if you want to test your map from a specific position or if you want to skip the "jump to start pos" option in the debug menu.
|<code>Soma.exe -map "PathToMap/myMap.hpm" -mappos "MyPos"</code>
|-
|workdir
|''No default value.''
|Which directory the game exe is located. Can be used to change between engine and main redist. 
'''This command line argument is useful for the engine developers only!'''
|''No default value.''
|}