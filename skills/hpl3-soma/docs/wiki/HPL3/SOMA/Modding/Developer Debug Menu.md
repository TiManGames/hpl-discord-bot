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
|This makes the game run 4 times faster. It is good if you want to skip specific sections in the map.
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

{{bug|Using F5 (or the debug menu 'Reload Game' option) while using mod content that overrides a base game asset will result in the game reverting to the original unmodified asset until the game is restarted. Reload the map using the 'Load Map' debug menu option to prevent this!}}

==Debug Menu==
The debug menu is where most of the work happens. There, you can find a list of useful actions which will help you in your mod development.
{{expandBox|[[File:Hpl3-soma-debug-menu.png|alt=|left|902x902px]]}}{{clr}}

==Debug Texts==
This section is at the very top of the menu and consists of checkboxes which display different information about the game, map, physics, script, etc on in the form of text on the screen.

{| class="wikitable"
|+
!Option
!Description
|-
|Show FPS
|Shows the game [[wikipedia:Frame_rate|FPS]].
|-
|Show module info
|Shows information about different [[HPL3/Scripting/User Modules Overview|user modules]]. Add custom debug outputs in the modules <code>DrawDebugOutput()</code> function.
|-
|Show map info
|Shows the amount of entities in the map and their state.
|-
|Show entity info
|Shows information about different entities (such as agents) in the map. If an entity is using the pathfinder component, area nodes and the navmesh will be visible. Add custom debug outputs in the entities <code>DrawDebugOutput()</code> function.
|-
|Show sounds playing
|Shows a list of all the sounds that currently play in the map, and information about them.
|-
|Show sound params
|Adds additional information to the sounds playing list (distance from player)
|-
|Show sound categories
|Shows a list of all the different sound level categories.
|-
|Show sound ai event
|Shows a message when an Ai agent has heard a sound.
|-
|Show debug messages
|Shows dev messages which are specified in the map script file.
|-
|Show event/voice messages
|Does not work.
|-
|Inspection Mode
|Enables inspection mode, which displays information about assets used in the map, such as texture files, location on disk, size, etc.
|-
|Occlusion Culling
|Enables occlusion culling (Skips rendering polygons that are no in the view of the player ).
|-
|God Mode
|Makes the player invincible and prevents from getting chased by enemies.
|-
|Draw physics debug
|Displays physics bodies (pink) of static objects and entities in the map.
|-
|Overlay physics debug
|Displays physics debug + normal game meshes.
|-
|Draw Gui debug
|Displays pink overlay which represents intractable GUI elements.
|-
|Show TV Safe Area
|Shows the [[wikipedia:Safe_area_(television)|safe area]] of a TV, surrounded by red borders.
|-
|Show Missing Voice Error
|Lists voice subjects which have missing voice files.
|-
|Resource Logging
|Logs game resources. {{Clarify}}
|-
|Show non-preloaded resources
|Lists resources which are not preloaded by the game. {{Clarify}}
|-
|Show Memory Usage
|Shows information about the game memory usage:

<u>Memory Usage''':'''</u> '''The amount of VRAM used by the renderer. This contains frame buffers, shadows, terrain and post-effects. It is greatly affected by the resolution of the window.'''

<u>Texture Memory Usage''':'''</u> '''The texture memory used by the level. This contains all the textures used for the materials of the objects. Texture memory is reduced by a lot with just a few changes in the config file.'''

<u>Vertex Memory Usage''':'''</u> '''The amount of VRAM used by meshes and decals. The imporant difference between Vertex and Texture memory is that Vertex memory can't be reduced by changing a setting. It takes up as much space on a good and a bad computer.'''

<u>Total Memory Usage''':'''</u> '''The sum of the above memory usage.'''
|-
|Show Rendering Info
|Shows information about the game rendering:

<u>Draw Calls</u> - '''The number of objects rendered in the current scene.'''

<u>Rendered Triangles / Vertices</u> - '''The total number of triangles and vertices rendered per frame.'''

<u>Queries</u> - '''A special draw call used to check if an object is occluded. It is more expensive than a draw call.'''
|-
|Show Garbage Collection
|Shows a graph of garbage collection. {{Clarify}}
|-
|Show Debug Info Window
|Displays a window with debug information. {{Clarify}}
|-
|Hide Sleeping Entities
|Makes sleeping entities invisible in the map. {{Todo|Link to source about sleeping entities}}
|-
|Use Portal Culling
|Enables the game to use portal culling in the map. It is recommended to always leave that on, unless you want to see the difference in performance. {{Todo|add reference link for portals}}
|-
|Brightness
|The brightness slide increases / decreases the brightness of the game. Not to be confused with gamma.
|-
|Print Container Debug Info
|This button prints container debug info to the screen.
{{Bug|The button makes the game crash.}}
|-
|Merge Lang Files
|Merges two language files between the main game language file and another.
{{note|This feature doesn't seem to be useful in practice.}}
|}

==Map==
The map section of the menu includes settings and actions which are related to maps in general, as well as the currently-loaded map.

{| class="wikitable"
|+
!Option
!Description
|-
|Auto Reload Resource
|This makes the map reload resources (mostly game assets) automatically, should you change or add something to the mod.
|-
|Reload Script At Task Switch
|The script file for the map will be updated when a [https://www.hongkiat.com/blog/switch-tasks-windows-10/ task switch] has been performed. Meaning, as long as you do not go back to the game after changing the script, the new script won't be updated in the game.
|-
|Reload Script Constantly
|The script file for the map will be updated constantly every time it is saved. It doesn't matter if the game task is focused or not.
|-
|Recompile Script and Lang
|Leftover feature from HPL2. The button does not work.
|-
|Reload from current pos
|When reloading a map, the player will retain the current position instead of starting at the beginning of the map.
|-
|Fast Physics Load
|Unknown option. {{Clarify}}
|-
|Reload Game
|Reloads the map. This also resets the state of the player and all the other scripts which run in the background.
|-
|Script Debug
|Script Debug enables further scripting features and is useful to make your map behave differently. In your map script file, you may want to change the behavior of your map depends if the script debug is enabled or not. For example: <syntaxhighlight lang="c++">
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
|Load Map
|Select a map file to load in the game. HPL3 Map File (<code>.hpm</code>) and HPL2 Map File (<code>.hpm</code>) are accepted.
{{warning|Some things are almost guranteed to not load correctly when loading HPL2 map files, mostly related to issues with static-objects. This is due to the internal structure of the .hpm files and how it handles assets information.}}
|-
|Test Change Map Save
|Unknown option. {{clarify}}
|-
|Teleport to Start Pos
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
|Keep Previous Map Loaded
|Keeps the previous map loaded. This is useful if you want to go quickly switch between two maps.
|-
|Preload Priority
|Sets the priority of the map preload process. Ranges from <code>paused</code> to <code>very high</code>
|}

==Game==
The game section of the menu includes general-purposes option which affect how you play and move in the game. It also displays debug information such as scripting errors.

{| class="wikitable"
|+
!Option
!Description
|-
|Show HPL Log
|Opens a window showing the current contents of the log file.
|-
|Show Error List
|Shows a window listing the logged errors only.
|-
|Show Debug Messages
|Opens a window showing the debug log, listing all previous debug messages.
|-
|Game Paused (F2)
|Pauses the game.
|-
|Pause at window open/close
|Toggles if opening (or closing) the debug menu should pause/resume the game.
|-
|Fast Forward (F3)
|Makes the game run 4 times faster. It is good if you want to skip specific sections in the map.
|-
|Slow Down (F3)
|This makes the game run 4 times slower. It is good if you want to want to focus on something that happens very fast in the map.
|-
|Spectator Cam (F7)
|Enables / Disables spectator camera mode (noclip).
|-
|Teleport player to camera
|Teleports the player to the spectator camera.
|-
|Teleport camera to player
|Teleports the spectator camera to the player
|-
|CamSpeed
|Sets the spectator camera movement speed.
|-
|Show player collider
|Toggles visibility of the player collider (usually only visible when spectator camera is enabled).
|-
|Always teleport player to camera
|Enabling this will cause the player to always teleport to the spectator camera after toggling the camera off.
|-
|Show Event Messages
|Unknown option {{clarify}}
|-
|Show Event Facts
|Unknown option {{clarify}}
|-
|Disable Flashbacks
|Leftover from HPL2. Does nothing.
|}

==Input==
The Input section of the menu includes tools and option for capturing and analyzing user input.

{| class="wikitable"
|+
!Option
!Description
|-
|Gamepad Input Only
|If only input from the gamepad should be allowed to move the player. Useful for playing back an input recording and being allowed to control the spec camera with the mouse and keyboard.
|-
|Record Input
|Starts / Stops input recording and saves to file. {{Bug|It is unknown if this feature works. {{confirm}} }} 
|-
|Playback Recorded Input
|Play selected input recording.
|}

==Stress Test==
This is a tool used to test the map under heavy performance conditions.

{| class="wikitable"
|+
!Option
!Description
|-
|Analyze Map
|Analyzes and prints potential map issues to the HPL log (temp materials, invalid materials, objects placed outside of the clip range, etc).
|-
|Random Input
|Spams random mouse and keyboard inputs. Can result in stuck keys when released.
|-
|Random Physics Forces
|Applies random physic forces to all entities in the map.
|-
|Unlimited Random Map Batch
|Unknown option. {{clarify}}
|}

==Misc==
The misc section include options which don't fit anywhere else.

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
|-
|Play Voice Subject
|Allows you to manually play a global or map specific voice subject. Use the selection box below this option to select the voice subject to play.
|-
|Reload Voice Data on Taskswitch
|Reloads .voice files on task switch. {{confirm}} (see 'Reload Script at Task Switch' for more info)
|}

==Graphics Debug==
Debugging the graphic performance of a level is vital to understand which parts are causing the bottleneck. It can also be used to find bugged/incorrect meshes or entities. With this section of the debug menu, you will be able to find which parts of the scene take up the most performance.

{| class="wikitable"
|+
!Option
!Description
|-
|Show FPS Graph
|This option displays on the screen a graph that shows FPS peaks on a time scale. It's useful for finding areas in a map that reduce FPS the most.
<br /> [[File:Hpl3-fps-graph.png|thumb|left|FPS graph.|500x500px]]
|-
|Large Light Test
|Unknown option.
|-
|Previous Frame Occlusion
|This option pauses the occlusion culling and renders the scene with the occlusion culling from before the checkbox was ticked. This is used to see how effective the occlusion culling is in the specific scene. After activating this you can switch to to spectator camera mode and look at the scene from another angle to see where the culling fails. Activating this will disable rendering of translucent objects since they can be unstable.
<br /> [[File:Occlusion_preview.png|alt=|thumb|left|500x500px|On the left, you can see what the player sees. On the right, the camera has been moved back and it is now possible to see all the objects that get rendered this frame. There are a lot more than what it looks like in the left picture.]]
<br /> {{bug|This option seems to be broken.}}
|-
|Render Portal Debug
|Desc {{clarify}}
|-
|Render Only Occluders
|Desc {{clarify}}
|-
|Render GBuffer
|Shows what the frame buffers look like. These are then used by the lights to shade the scene. It can be used to check if a model has incorrect textures or normals.
<br /> [[File:G_buffer.png|alt=|thumb|left|500x500px|A scene in a g-buffer mode. Notice the different graphic modes.]]
|-
|Light Complexity
|Light complexity shows how expensive the lighting of a scene is. It creates a heat map on the screen to show how much power each light takes. Overdraw of light is not very expensive, it is about twice as expensive as a translucent object. When the light has a shadow map it becomes much more expensive. The complexity of a shadow casting light is based on how many draw calls and triangles are required to generate the shadow map.
<br /> [[File:Light_complexity.png|alt=|left|thumb|500x500px|The red areas on the right image are not good. There seem to be multiple large (in screen space) shadow casting lights in this scene.]] {{clr}}
{{tip|To test if most of the complexity comes from shadows or not, you can toggle the <code>Draw Shadows</code> checkbox in the menu. Here is what the scene complexity looks like without shadows: 
[[File:light_complexity_no_shadows.png|alt=|frame|left]] {{clr}} }}
|-
|Overdraw
|Creates a [https://en.wikipedia.org/wiki/Heat_map heat map] that shows how much translucent overdraw each pixel receives. Overdraw is how many times a pixel gets rendered to.{{clarify}}<br>'''The goal should be that no part of the screen is red'''. It does not matter that much if only a small part is, however.

<br /> [[File:translucent_overdraw.png|alt=|left|650x650px|On the left you can see the scene rendered normally. The fog particles are barely visible here. On the right the pixel overdraw is rendered. The red areas show that more than 32 translucent planes are rendered, which is not good.|thumb]]
<br /> {{bug|This option seems to be broken.}}
|}
[[Category:Modding]]
[[Category:English]]