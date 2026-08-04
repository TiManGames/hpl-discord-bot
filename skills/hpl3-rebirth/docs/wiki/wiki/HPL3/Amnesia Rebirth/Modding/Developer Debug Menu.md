{{shortPageTitle}}
{{TocRight}}
When developing your mod, it is important to be able to have a fast feedback loop and have extensive set of tools which can help to test our mod. Exactly for that reason, we have the Developer Menu. This article goes in detail over the menu and all of its features. 

==Keyboard Shortcuts==
The following keyboard shortcuts are enabled during dev mode:
{| class="wikitable"
|+
!Shortcut Key
!Action
|-
|F1
|Brings up the developer debug menu. This needs to be done in order to have full access to the developer features when running a game in debug mode.
|-
|F2
|Pauses / Resumes the game world processes, basically makes the game freeze. Note that you can still noclip in this state.
|-
|F3
|This makes the game run 4 times faster (by default). It is good if you want to skip specific sections in the map.
|-
|F4
|This makes the game run 4 times slower. It is good if you want to want to focus on something that happens very fast in the map.
|-
|F5
|Reloads the current map.
|-
|F7
|Enables / Disables spectator camera mode (noclip).
|-
|F8
|Takes a screenshot of the game and saves it inside the main game folder.
|-
|F9
|Quick-saves the game.
|-
|F10
|Quick-loads the last save.
|-
|Insert
|Starts / Stops quick input recording and saves to the file QuickRecord.sav.
|-
|Home
|Starts playing back the last quick input recorded file.
|}

==Debug Menu==
The debug menu is where most of the work happens. There, you can find a list of useful actions which will help you in your mod development.

You will find the actions and option grouped in the following categories:

===CMD Debug===
Commands can be entered after pressing F1. Type the command and press Enter.
{| class="wikitable"
|+
!Command
!Action
|-
|help
|Prints usable commands to the Debug Log
|-
|ailog
|Opens the AI Log
|-
|dlog, debuglog
|Opens the Debug Log
|-
|einfo, entinfo, entityinfo
|Toggles the Entity Info debug option
|-
|fps
|Toggles FPS counter
|-
|fpsg, fpsgraph
|Toggles the FPS Graph
|-
|god
|Toggles God Mode
|-
|hpllog
|Opens the HPL Log
|-
|light, lightlvl, lightlevel
|Toggles the Light Level Info debug option
|-
|minfo, mapinfo
|Toggles the Map Info debug option
|-
|mem, memory
|Toggles the Memory Usage graphics debug option
|-
|mess, messages
|Toggles debug messages
|-
|module, modout, moduleout
|Toggles the Module Output debug option
|-
|notes
|Toggles the Notes debug option
|-
|pdebug, physicsdebug, physics
|Toggles Physics Debug
|-
|poverlay, physicsoverlay
|Toggles the Physics Overlay (if physics debug is enabled)
|-
|coll, pcoll, pcollider, collider
|Toggles visibility of the player collider
|-
|profile, profiler
|Toggles the Profiler
|-
|rinfo, rend, rendering
|Toggles the Rendering Info graphics debug option
|-
|sdebug, scriptdebug, debugscript
|Toggles Script Debug
|-
|hide, show, output, debugoutput, hidedebugoutput
|Toggles the Hide Debug Output debug option
|}

===Game & Script===
The game section of the menu includes general-purposes option which affect how you play and move in the game. It also displays debug information such as scripting errors.
{| class="wikitable"
|+
!Option
!Description
|-
|Reload
|Reloads the current map.


If the option 'Reload from current pos' is checked,   the player will retain the current position instead of starting at the beginning of the map.
|-
|Pause
|Pauses the game
|-
|Reload
|Reloads the game
|-
|Fast
|This makes the game run 4 times faster (by default). It is good if you want to skip specific sections in the map.
|-
|Slow
|This makes the game run 4 times slower. It is good if you want to want to focus on something that happens very fast in the map.
|-
|Script Debug
|Script Debug enables further scripting features that won't work otherwise, such as [[HPL3/Scripting/Scripting Guide/The OnAction method|OnAction]]. It is also useful to make your map behave differently. In your map script file, you may want to change the behavior of your map depends if the script debug is enabled or not. For example: <syntaxhighlight lang="c++">
// This script will enable the player's flashlight only if the script debug is on.
void OnStart()
{
  if (cScript_ScriptDebugOn()) // Checks if Script Debug option is turned on or not
  {
     Player_SetFlashlightDisabled(false);  
  } 
}
</syntaxhighlight>

|-
|God Mode
|Makes the player invincible and prevents from getting chased by enemies.
|-
|Spectator Cam
|Enables / Disables spectator camera mode (noclip).
|-
|Slo-mo
|Toggles slow motion camera movement
|-
|Speed
|Sets the spectator camera movement speed
|-
|SM Move
|Sets the spectator camera slo-mo movement speed
|-
|SM Look
|Sets the spectator camera slo-mo turning speed
|-
|Cam->Player
|Teleports the spectator camera to the player {{bug|The spectator camera will teleport back to its last position unless you toggle it off and back on after teleporting.}}
|-
|Player->Cam
|Teleports the player to the spectator camera.
|-
|Player-SpecCam auto-teleport
|Enabling this will cause the player to always teleport to the spectator camera after toggling the camera off.
|-
|Recompile Script and Lang
|Desc{{Clarify}}
|-
|Merge Lang Files
|Desc{{Clarify}}
|-
|Reload script at task switch
|The script file for the map will be updated when a [https://www.hongkiat.com/blog/switch-tasks-windows-10/ task switch] has been performed. Meaning, as long as you do not go back to the game after changing the script, the new script won't be updated in the game.
|-
|Reload script constantly
|The script file for the map will be updated every frame. Meaning any changes made to the script will immediately be loaded in game. Usually you can just use the task switch option instead.
|-
|Show Garbage Collection
|Shows a graph of garbage collection. {{Clarify}}
|-
|Skip AI Rebuild On Reload
|Unknown option. {{Clarify}}
|-
|Fast Physics Load
|Unknown option. {{Clarify}}
|}

===Map & Scene===
The map section of the menu includes settings and actions which are related to maps in general, as well as the currently-loaded map.
{| class="wikitable"
|+
!Option
!Description
|-
|Load Map
|Select a map file to load in the game. HPL3 Map File (<code>.hpm</code>) and HPL2 Map File (<code>.map</code>) are accepted. Fast Physics Load can be enabled here before loading the map.{{warning|Some things are almost guranteed to not load correctly when loading HPL2 map files, mostly related to issues with static-objects. This is due to the internal structure of the .map files and how it handles assets information.}}
|-
|Test Change Map Save
|Unknown option. {{clarify}}
|-
|Teleport to start pos
|Teleports the player to a specific [[HPL3/Inputs_and_Outputs_Systems/PlayerStart_Area|PlayerStart Area]] that can be selected from the dropdown list. Useful for skipping areas in a map.
|-
|Map Batch
|Unknown option. {{clarify}}
|-
|Preload Map
|Loads another map in the background so it can be loaded later much faster. ''Main article: [[HPL3/Scripting/Level_Streaming|Level Streaming]]''
|-
|Start Preloaded Map
|Loads the pre-loaded map. If no map has been pre-loaded, the button will do nothing.
|-
|Preload Map Batch
|Unknown option. {{clarify}}
|-
|Preload Priority
|Sets the priority of the map preload process. Ranges from <code>Paused</code> to <code>Very High</code>
|-
|Preload Time
|Lists the time in seconds it took to load to preload the map.
|-
|Keep Previous Map Loaded
|Keeps the previous map loaded. This is useful if you want to go quickly switch between two maps.
|-
|Export Map to Mesh
|Exports the map geometry to an .obj file. Allows inputting a distance from the camera to export meshes from.
|-
|Trigger Permafail
|This calls the <code>_Global_TriggerPermaFail()</code> function found within <code>FearHandler.hps</code>. Normally used to trigger a permafail (effectively a death) for testing, however the function can be edited to allow for custom functionality.
|}

===Logging===
{| class="wikitable"
|+
!Option
!Description
|-
|HPL Log
|Opens a window showing the current contents of the log file
|-
|Show Error List
|Shows a window listing the logged errors only
|-
|AI Log
|Opens a window showing AI debug messages (created via script with the <code>cLux_AddAIDebugMessage()</code> function)
|-
|Debug Log
|Opens a window showing the debug log, listing all previous debug messages. 
|-
|Resource Logging
|Logs game resources. {{Clarify}}
|-
|Show non-preloaded resources
|Lists resources which are not preloaded by the game. {{Clarify}}
|}

===Debug===
{| class="wikitable"
|+
!Option
!Description
|-
|Hide Debug Output
|Check to disable debug output being printed to screen.
|-
|Module Output
|Shows information about different [[HPL3/Scripting/User Modules Overview|user modules]]. Add custom debug outputs in the modules <code>DrawDebugOutput()</code> function.
|-
|Map Info
|Shows the amount of entities in the map and their state.
|-
|Entity Info
|Shows information about different entities (such as agents) in the map. If an entity is using the pathfinder component, area nodes and the navmesh will be visible. Add custom debug outputs in the entities <code>DrawDebugOutput()</code> function.
|-
|Light Level Info
|Displays information about lights in the map. 
|-
|Messages
|Toggles debug message visibility, including debug messages added with <code>cLux_AddDebugMessage()</code>.
|-
|Notes
|Toggles visibility of notes placed on objects in the map editor. 
|-
|Pause on assert
|Unknown option. {{Clarify}}
|-
|Debug Info
|Toggles the Debug Info window. {{Clarify}}
|-
|Hide Sleeping
|Makes sleeping entities invisible in the map. {{Todo|Link to source about sleeping entities}}
|-
|Inspection Mode
|Enables inspection mode, which displays information about assets used in the map, such as texture files, location on disk, size, etc.
|-
|GUI Debug
|Displays pink overlay which represents intractable GUI elements.
|-
|Hide crosshair
|Hides the player crosshair. This includes crosshair and interaction icons.
|-
|Hide hints
|Hides hints from showing up. They'll still trigger but won't be visible.
|-
|Hide popup icons
|Unknown option. {{Clarify}}
|-
|Hide tentacles
|Hides the fear tentacle effect that occurs when you have high fear. Useful for screenshots.
|-
|Display Safe Area
|Allows you to reduce the area that the debug outputs display in.
|-
|Player Collider
|Toggles visibility of the player collider (only visible when spectator camera is enabled).
|-
|Physics Debug
|Displays physics bodies (pink) of static objects and entities in the map.
|-
|Overlay
|Displays physics debug + normal game meshes.
|-
|Light Level Grid
|Displays the light grid. {{Clarify}}
|-
|Deep Shadow
|While Light Level Grid is enabled, only display points that are in shadow.
|}

===Graphics Debug===
Debugging the graphic performance of a level is vital to understand which parts are causing the bottleneck. It can also be used to find bugged/incorrect meshes or entities. With this section of the debug menu, you will be able to find which parts of the scene take up the most performance.
{| class="wikitable"
!Option
!Description
|-
|FPS
|Shows the game [[wikipedia:Frame_rate|FPS]].
|-
|FPS Graph
|This option displays on the screen a graph that shows FPS peaks on a time scale. It's useful for finding areas in a map that reduce FPS the most.
<br />[[File:Hpl3-fps-graph.png|thumb|500x500px|alt=|left]]
|-
|Memory Usage
|Shows information about the game memory usage:

<u>Memory Usage''':'''</u> '''The amount of VRAM used by the renderer. This contains frame buffers, shadows, terrain and post-effects. It is greatly affected by the resolution of the window.'''

<u>Texture Memory Usage''':'''</u> '''The texture memory used by the level. This contains all the textures used for the materials of the objects. Texture memory is reduced by a lot with just a few changes in the config file.'''

<u>Vertex Memory Usage''':'''</u> '''The amount of VRAM used by meshes and decals. The imporant difference between Vertex and Texture memory is that Vertex memory can't be reduced by changing a setting. It takes up as much space on a good and a bad computer.'''

<u>Total Memory Usage''':'''</u> '''The sum of the above memory usage.'''
|-
|Rendering Info
|Shows information about the game rendering:

<u>Draw Calls</u> - '''The number of objects rendered in the current scene.'''

<u>Rendered Triangles / Vertices</u> - '''The total number of triangles and vertices rendered per frame.'''

<u>Queries</u> - '''A special draw call used to check if an object is occluded. It is more expensive than a draw call.'''

<u>State Changes</u> - {{Clarify}}
|-
|Print Container Debug Info
|This button prints container debug info to the screen.{{Bug|The button makes the game crash. {{confirm}} }} 
|-
|Render Portal Debug
|Desc {{Clarify}}
|-
|Use Portal Culling
|Enables the game to use portal culling in the map. It is recommended to always leave that on, unless you want to see the difference in performance. {{Todo|add reference link for portals}}
|-
|Draw Skeletons
|Enables visibility of entity skeletons.
|-
|Offset Skeletons
|Offsets skeletons a few meters in front of the entity.
|-
|Wireframe Mode
|Enables wireframe rendering.
|-
|Previous Frame Occlusion
|This option pauses the occlusion culling and renders the scene with the occlusion culling from before the checkbox was ticked. This is used to see how effective the occlusion culling is in the specific scene. After activating this you can switch to to spectator camera mode and look at the scene from another angle to see where the culling fails. Activating this will disable rendering of translucent objects since they can be unstable.[[File:Occlusion_preview.png|alt=|thumb|left|500x500px]]
{{bug|This option seems to be broken.}}
|-
|Debug Mode
|Offers a set of display modes to help catch rendering issues
|-
|Gamma
|The gamma slider increases / decreases the gamma. Note the gamma also affects the debug menu itself so be careful not to set it too dark.
|-
|Brightness
|The brightness slider increases / decreases the brightness of the game. Not to be confused with gamma.
|-
|Contrast
|The contrast slider increases / decreases the contrast of the game. Be careful not to set it too low or the entire game, debug menu included, will be solid grey.
|-
|Disable Textures
|Unknown Option. {{Clarify}}
|-
|Disable Post-Effects
|Disables all post effects. {{Clarify}}
|-
|Occlusion Culling
|Enables occlusion culling (Skips rendering polygons that are not in the view of the player).
|-
|Draw Shadows
|Toggles shadow visibility. {{bug|Shadows don't always show up after re-enabling this option. If this occurs, toggle "Render Portal Debug" on/off to fix.}}
|}

===Resources===
{| class="wikitable"
|+
!Option
!Description
|-
|Auto reload resources
|This makes the map reload resources (mostly game assets) automatically, should you change or add something to the mod.
|-
|Load files in _temp folders
|Allows loading of assets found in _temp folders. This is off by default.
|-
|Find Duplicate File Names
|Prints duplicate files to the debug log.

|}

===Sound===
{| class="wikitable"
|+
!Option
!Description
|-
|Show sounds playing
|Shows a list of all the sounds that currently play in the map, and information about them.
|-
|Show sound params
|Adds further information to the sounds playing list (distance from player)
|-
|Show sound categories
|Shows a list of all the different sound level categories.
|-
|Show sound AI events
|Shows a message when an Ai agent has heard a sound.

|}

===Music===
{| class="wikitable"
|+
!Option
!Description
|-
|Play Music
|Allows you to manually play an .ogg music track.
|-
|Stop All Music
|Stops all currently playing music tracks.

|}

===Voices===
{| class="wikitable"
|+
!Option
!Description
|-
|Show event/voice messages
|Does not work. {{confirm}}
|-
|Show Missing Voice Error
|Lists voice subjects which have missing voice files.
|-
|Play Voice Subject
|Allows you to manually play a voice subject (Seems to list only global voices {{confirm}})
|-
|Reload Voice Data on Taskswitch
|Reloads .voice files on task switch {{confirm}} (see 'Reload Script at Task Switch' for more info)
|}

===Events===
{| class="wikitable"
|+
!Option
!Description
|-
|Show Event Messages
|Unknown Option. {{Clarify}}
|-
|Show Event Facts
|Unknown Option. {{Clarify}}
|-
|Disable Flashbacks
|Unknown if this option works {{confirm}}
|}

===Input===
The Input section of the menu includes tools and option for capturing and analyzing user input.
{| class="wikitable"
|+
!Option
!Description
|-
|Gamepad Input Only
|Disables mouse and keyboard inputs (can still be used on the debug menu)
|-
|Record Input
|Starts / Stops input recording and saves to file.
|-
|Playback Recorded Input
|Play selected input recording.
|}

===Stress Test===
This is a tool used to test the map under heavy performance conditions.
{| class="wikitable"
|+
!Option
!Description
|-
|Analyze Map
|Analyzes and prints potential map issues to the HPL log (temp materials, invalid materials, objects placed outside of the clip range, etc).
|-
|Analyze Entities
|Analyzes and prints entity info to the HPL log (instances, triangles, etc).
|-
|Analyze Materials
|Analyzes and prints material info to the HPL log (instances, VRAM usage, etc).
|-
|Analyze Active Entities
|Analyzes and prints active entities to the HPL log.
|-
|Print Resource Usage
|Enter the name of a resource and press button. {{Clarify}}
|-
|Random Input
|Spams random mouse and keyboard inputs. Can result in stuck keys when released.
|-
|Random Physics Forces
|Applies random physic forces to all entities in the map.
|-
|Stress test map batch
|Unknown Option. {{Clarify}}
|}

===Profile===
{| class="wikitable"
|+
!Option
!Description
|-
|Show Profiler
|Enables the CPU Profiler.
|-
|Show GPU Profiler
|Enables the GPU Profiler.
|-
|Pause Profiling
|Pauses profile updates.
|-
|Profile Longest Frame
|Only profile longest frame.
|-
|Profile Filter
|Enter profile layers. Separate with a space. Valid options are: <code>EngineLoop</code> <code>GameLoop</code> <code>RenderAll</code> <code>Variable</code> <code>Message_PostUpdate</code> <code>HPL_Scene_PostUpdate</code> <code>Physics</code>
|}

===Debug UI Settings===
{| class="wikitable"
|+
!Option
!Description
|-
|Debug Lines
|Changes the max number of lines that can be printed to the in game debug log (bottom left messages).
|-
|Pause game when open
|Toggles pausing the game when opening the debug menu (defaults to on)
|-
|Set Fast Forward Mul
|Allows you to change the speed of the Fast Forward option (F3). Defaults to 4. {{bug|Setting this value too low or too high can crash the game. Only set it to sane values.}}
|}

===Platform & Language===
{| class="wikitable"
|+
!Option
!Description
|-
|Set Suffix
|Set custom platform suffix {{Clarify}}
|}

<br/>
[[Category:Modding]]
[[Category:English]]