{{DISPLAYTITLE:Level Editor}}
[[File:LevelEditorGr.jpg|thumb|right|The level editor.]]
The Level Editor is our own application to build maps for HPL2-based games. It is comprised of a set of basic object creation and edition modes which make the building task a lot easier.

==Overview==

When run, the first screen we get to see is like this:

[[File:leveleditoroverview-small.jpg]]

Each part of the screen has a specific function, as follows:

#[[#main_menu|Main menu bar]]: this is where every non-editor command lies, as well as some edition ones.
#[[#editmode_selection_bar|EditMode sidebar]]: here you will find a set of buttons used to switch the current behaviour of the editor. More on this later.
#EditMode window area: any helper input the current EditMode needs will appear here.
#[[HPL2/Tools/Viewport|Viewport area]]: this area of the screen is reserved for the viewports, which are used to actually see what you are doing to the map. Every viewport has its own menu bar, to control some parameters of the visualization.
#[[#lower_toolbar|Lower toolbar]]: some tools that are either viewport-dependent or global are located here.

Not listed above are some special windows, used pretty often here:

*''' [[HPL2/Tools/Save Dialog|Save file dialog]] '''
*''' [[HPL2/Tools/Load Dialog|Load file dialog]] '''
*''' [[HPL2/Tools/Color Picker|Color Picker]] '''
*''' [[HPL2/Tools/Texture Browser|Texture Browser]] '''
*''' [[HPL2/Tools/Sound Browser|Sound Browser]]'''

==Main Menu==

This is a menu bar, just like in any other windowed application. Available options for this particular editor are as follows:

*'''File:'''     
**'''New''': This command will reset the map to an empty one, and the editor to a default state as well.
**'''Open''': This will load a map file picked in a dialog in the editor.
**'''Save''': Use this to save your work to a file in disk. Will ask for a file name when no file has been created.
**'''Save As''': This will also save your work, but will ask for a file name everytime it is called.
**'''Open Recent''': This will show a list of up to 10 files that have been recently loaded or saved.
**'''Import Objects''': This will show a file dialog with exported object (.expobj) files. When picked, the objects in the file will be added to the map.
**'''Export Selection''': This will save the current selection to a .expobj file.
**'''Quit''': This will exit the program.

*'''Edit:'''     
**'''Undo''': Use this to undo the last action. Note that not everything you can do in the editor is undo-able.
**'''Redo''': Use this to redo the last undone action.
**'''Duplicate''': This will clone the current selected objects. More details on selection later.
**'''Delete''': This will delete the current selected objects.
**'''Create''' /'''Destroy compound object''': Use this to create a compound object with the current selected objects, or to destroy the currently selected compound object. More on compound objects [[HPL2/Tools/Level Editor/Compounds|here]].
**'''Search for object''': This will open the [[HPL2/Tools/Level Editor/Find Objects|Find Objects window]] window. It is useful when you want to find a particular object and don't want to actually look for it.
**'''Browse groups''': This will open the [[HPL2/Tools/Level Editor/Group Window|Group window]]. This one is used to manage groups of objects.
**'''Level Settings''': This will open the [[HPL2/Tools/Level Editor/Level Settings|Level Settings window]] window. This is used to add global fog and skybox to a level, also has other tools.
**'''Options''': This will open the [[HPL2/Tools/Level Editor/Options Window|Options Window]]. You will find general settings for the editor here.

==EditMode selection bar==
Here you will be able to switch between the different EditModes available in this editor. An EditMode describes the state the editor is going to work in when selected. These five EditModes can be found in this editor and the Model Editor.

*[[HPL2/Tools/Select Editmode|Select EditMode]]: this mode is used to select and edit objects.
*[[HPL2/Tools/Light Editmode|Light EditMode]]: with this mode you will be able to place lights.
*[[HPL2/Tools/Billboard Editmode|Billboard EditMode]]: use this to create billboards; light halos, light shafts, etc.
*[[HPL2/Tools/Particle System Editmode|Particle System EditMode]]: one can add Particle systems to the entity with this mode.
*[[HPL2/Tools/Sound Editmode|Sound EditMode]]: used to place sound entities in the map.

The following EditModes are exclusive to the Level Editor:

*[[HPL2/Tools/Level Editor/Static Object Editmode|Static object EditMode]]: this, and the Primitive EditMode, are the actual building tools. StaticObjects (aka level pieces) are placed using this.
*[[HPL2/Tools/Level Editor/Primitive Editmode|Primitive EditMode]]: creates static geometry to be part of the map. Only Planes are currently supported.
*[[HPL2/Tools/Level Editor/Entity Editmode|Entity EditMode]]: objects that are interactive, such as doors, boxes and NPCs are created here.
*[[HPL2/Tools/Level Editor/Area Editmode|Area EditMode]]: Areas are places that can be used for several purposes, like linking to scripts, setting up where the player starts the map, and so on.
*[[HPL2/Tools/Level Editor/Decal Editmode|Decal EditMode]]: give detail to objects by placing decals on them.
*[[HPL2/Tools/Level Editor/Fog Editmode|Fog EditMode]]: similar to the Area EditMode, but will place volumes containing a fog effect.
*[[HPL2/Tools/Level Editor/Combine Editmode|Combine EditMode]]: useful for optimizing, creates groups of static geometry that will be loaded by the engine as a whole.

==Viewport area==
This area is meant to actually show what the map contains. Main article: [[HPL2/Tools/Viewport|editor viewport]].

==Lower Toolbar==
You can find some useful controls in this bar located at all times at the lower part of the screen.

[[File:Level-editor-lower-toolbar.PNG]]

#Grid Controls:  
#*'''Grid Plane''': cycles through the available grid planes (XZ, XY, YZ).
#*'''Toggle Snap''' (magnet button): enables/disables snapping for translation (over grid), rotation and scale.
#*'''Grid Height''': height of the plane, measured on the plane normal.
#*'''Snap Separation''': separation of snapping points.
#'''Enlarge Viewport button''': will toggle enlargement of the focused viewport.
#Misc controls(Note: these are not shortcuts):
#*'''A''': toggles global ambient lighting
#*'''P''': togles global point light
#*'''LT''': toggles Lock to grid for tracking in focused viewport
#*'''F''': focus on current selection
#Clip Plane controls
#*'''Selected clip plane''': used to select a clip plane among the available ones.
#*'''Add/Remove clip plane''' (+/- buttons): adds a new clip plane / removes the selected one.
#*'''Actual Plane''': cycles through the available planes (XZ, XY, YZ).
#*'''Plane height''': height of the plane, measured on the plane normal.
#*'''Pos'''/'''Neg Button''': sets the culling side of the plane.
#*'''Active''': sets whether the plane should cull objects.

==Types of Objects==
These are the kinds of objects that you can create and place in this editor. Details on each one and parameter listing in the following links:

*[[HPL2/Lights|Lights]]
*[[HPL2/Billboards|Billboards]]
*[[HPL2/Particle Systems|Particle Systems]]
*[[HPL2/Sounds|Sounds]]

The following types are exclusive to the Level Editor:

*[[HPL2/Static Objects|Static Objects]]
*[[HPL2/Entities| Entities]]
*[[HPL2/Areas|Areas]]
*[[HPL2/Primitives|Primitives]]
*[[HPL2/Decals|Decals]]
*[[HPL2/Fog Areas|FogAreas]]
*[[HPL2/Tools/Level Editor/Compounds|Compound Objects]]