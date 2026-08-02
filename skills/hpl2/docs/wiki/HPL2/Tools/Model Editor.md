=Model Editor=
The Model Editor is our own application to create entities. An entity (saved in a .ent file) is composed of a mesh and a set of physical properties, bodies, and optionally joints and sub-entities. It can also contain animations for an animated entity, such as NPCs. Also worth noting is that an entity must be set up with a user defined type.

==Overview==
When run, the first screen we get to see is like this:

[[File: modeleditoroverview.jpg]]

Each part of the screen has a specific function, as follows:

#Main menu bar: this is where every non-editor command lies, as well as some edition ones.
#EditMode sidebar: here you will find a set of buttons used to switch the current behaviour of the editor. More on this later.
#EditMode window area: any helper input the current EditMode needs will appear here.
#Viewport area: this area of the screen is reserved for the viewports, which are used to actually see what you are doing to the map. Every viewport has its own menu bar, to control some parameters of the visualization.
#Lower toolbar: some tools that are either viewport-dependent or global are located here.

These will be explained in the following sections.

==Main Menu bar==
This is a menu bar, just like in any other windowed application. Available options for this particular editor are as follows:

*'''File'''
**'''New''': This command will reset the map to an empty one, and the editor to a default state as well.
**'''Open''': This will load an entity file in the editor.
**'''Save''': Use this to save your work to a file in disk. Will ask for a file name when no file has been created.
**'''Save As''': This will also save your work, but will ask for a file name everytime it is called.
**'''Import Mesh''': This option will open a dialog for importing a mesh file into the entity.
**'''Open Recent''': This will show a list of up to 10 files that have been recently loaded or saved.
**'''Quit''': This will exit the program.
*'''Edit'''
**'''Undo''': Use this to undo the last action. Note that not everything you can do in the editor is undo-able.
**'''Redo''': Use this to redo the last undone action.
**'''Delete''': This will delete the current selected objects. Note that not all objects can be deleted.
**'''Clone''': This will create copy objects out of the currently selected ones. Note that not all objects can be cloned.
*'''View'''
**'''Outline''': This will bring up the [[HPL2/Tools/Model Editor/Outline Dialog|Outline Window]]. It can be used to edit attachments with ease.
*'''Settings'''
**'''User defined variables''': This will bring up the [[HPL2/Tools/Model Editor/User-Defined Variables|User Defined Variables window]]. Use this to set up a defined type to your created entity.
**'''Animations''': This will bring up the [[HPL2/Tools/Model Editor/Animations|Animations window]]. Animations are added and its parameters set here.

==EditMode selection bar==
Here you will be able to switch between the different EditModes available in this editor. An EditMode describes the state the editor is going to work in when selected. These five EditModes can be found in this editor and the Level Editor:

*[[HPL2/Tools/Select Editmode|Select EditMode]]: this mode is used to select and edit objects.
*[[HPL2/Tools/Light Editmode|Light EditMode]]: with this mode you will be able to place lights.
*[[HPL2/Tools/Billboard Editmode|Billboard EditMode]]: use this to create billboards; light halos, light shafts, etc.
*[[HPL2/Tools/Particle System Editmode|Particle System EditMode]]: one can add Particle systems to the entity with this mode.
*[[HPL2/Tools/Sound Editmode|Sound EditMode]]: used to place sound entities in the entity.

The following EditModes are exclusive to the Model Editor:

*[[HPL2/Tools/Model Editor/Shape Editmode|Shape EditMode]]: physical bodies are created over shapes. Create shapes with this EditMode.
*[[HPL2/Tools/Model Editor/Joint Editmode|Joint EditMode]]: using this mode you will be able to create joints. Joints are used to add contraints to body movements.

==Viewport area==
This area is meant to actually show what the entity contains. Main article: [[HPL2/Tools/Viewport|editor viewport]].

==Lower Toolbar==
You can find some useful controls in this bar located at all times at the lower part of the screen.

[[File:model_lowertoolbar.jpg]]

#Grid Controls:  
#*'''Grid Plane''': cycles through the available grid planes (XZ, XY, YZ).
#*'''Toggle Snap''' (magnet button): enables/disables snapping for translation (over grid), rotation and scale.
#*'''Grid Height''': height of the plane, measured on the plane normal.
#*'''Snap Separation''': separation of snapping points.
#'''Enlarge Viewport button''': will toggle enlargement of the focused viewport.
#'''Entity Preview button''': will toggle the [[HPL2/Tools/Model Editor/Preview|entity preview window]].
#Misc controls (Note: these are not shortcuts):
#*'''A''': toggles global ambient lighting
#*'''P''': togles global point light
#*'''LT''': toggles Lock to grid for tracking in focused viewport
#*'''F''': focus on current selection

==Types of Objects==
These are the kinds of objects that you can create and place in this editor. Details on each one and parameter listing in the following links:

*[[HPL2/Lights|Lights]]
*[[HPL2/Billboards|Billboards]]
*[[HPL2/Particle Systems|Particle Systems]]
*[[HPL2/Sounds|Sounds]]

The following types are exclusive to the Model Editor:

*[[HPL2/Tools/Model Editor/Shapes|Shapes]]
*[[HPL2/Tools/Model Editor/Bodies|Bodies]]
*[[HPL2/Tools/Model Editor/Joints|Joints]]
*[[HPL2/Tools/Model Editor/Submeshes|SubMeshes]]
*[[HPL2/Tools/Model Editor/Bones|Bones]]