== EditMode selection bar ==
Here you will be able to switch between the different EditModes available in this editor. An EditMode describes the state the editor is going to work in when selected. These five EditModes can be found in both this and the Model Editor.


''' [[hpl3:tools:maineditors:common:select_editmode|Select EditMode]]: this mode is used to select and edit objects.
''' [[hpl3:tools:maineditors:common:light_editmode|Light EditMode]]: with this mode you will be able to place lights around.
''' [[hpl3:tools:maineditors:common:billboard_editmode|Billboard EditMode]]: use this to create Billboards. Light halos, light shafts, and some other
''' [[hpl3:tools:maineditors:common:particlesystem_editmode|Particle System EditMode]]: one can add Particle systems to the map with this mode.
''' [[hpl3:tools:maineditors:common:sound_editmode|Sound EditMode]]: used to place sound entities in the map.
''' [[hpl3:tools:maineditors:common:lensflare_editmode|LensFlare EditMode]]: used to create objects that will generate a lensflare effect when looked at.

The following EditModes are exclusive to the Level Editor


''' [[:hpl3:tools:maineditors:level_editor:staticobject_editmode|StaticObject EditMode]]: this, and the Primitive EditMode, are the actual building tools. StaticObjects (aka level pieces) are placed using this.
''' [[:hpl3:tools:maineditors:level_editor:entity_editmode|Entity EditMode]]: objects that are interactive, such as doors, boxes and NPCs are created here.
''' [[:hpl3:tools:maineditors:level_editor:area_editmode|Area EditMode]]: Areas are places that can be used for several ends, like linking to scripts, setting up where the player starts the map, and so on.
''' [[:hpl3:tools:maineditors:level_editor:primitive_editmode|Primitive EditMode]]: creates static geometry to be part of the map. Only Planes are currently supported.
''' [[:hpl3:tools:maineditors:level_editor:decal_editmode|Decal EditMode]]: give detail to objects by placing decals on them.
''' [[:hpl3:tools:maineditors:level_editor:fogarea_editmode|FogArea EditMode]]: similar to the Area EditMode, but will place volumes containing a fog effect.
''' [[:hpl3:tools:maineditors:level_editor:Combine_editmode|Combine EditMode]]: useful for optimizing, creates groups of static geometry that will be loaded by the engine as a whole.
''' [[hpl3:tools:maineditors:level_editor:lightmask_editmode|LightMask EditMode]]: creates objects that will keep light from illuminating the space outside them.
''' [[hpl3:tools:maineditors:level_editor:exposurearea_editmode|ExposureArea EditMode]]: creates areas that will modify the camera exposure values when inside them.
''' [[hpl3:tools:maineditors:level_editor:combo_editmode|Combo EditMode]]: used to place combo objects (compound objects saved as combos)
''' [[hpl3:tools:maineditors:level_editor:terrain_editmode|Terrain EditMode]]: used to create and set up a terrain.
''' [[hpl3:tools:maineditors:level_editor:detailmeshentity_editmode|DetailMeshEntity EditMode]]: places mesh objects that can be drawn really fast, thus can be used for adding detail to the scene.


== Lower Toolbar ==

You can find some useful controls in this bar located at all times at the lower part of the screen.

[[File:leveleditor_lowertoolbar.png]]

## Grid Controls:
'''* '''Grid Plane''': cycles through the available grid planes (XZ, XY, YZ).
'''* '''Toggle Snap'''    (magnet button): enables/disables snapping for translation (over grid), rotation and scale.
'''* '''Grid Height''': height of the plane, measured on the plane normal.
'''* '''Snap Separation''': separation of snapping points.
## '''Enlarge Viewport button''': will toggle enlargement of the focused viewport.
## Misc controls:
'''* '''A''': toggles global ambient lighting
'''* '''P''': togles global point light
'''* '''LT''': toggles Lock to grid for tracking in focused viewport
'''* '''F''': focus on currently selected object(s)
'''* '''I''': toggles displaying of icons.
## Clip Plane controls
'''* '''Selected clip plane''': used to select a clip plane among the available ones.
'''* '''Add'''   /'''Remove clip plane'''    (+/- buttons): adds a new clip plane / removes the selected one.
'''* '''Actual Plane''': cycles through the available planes (XZ, XY, YZ).
'''* '''Plane height''': height of the plane, measured on the plane normal.
'''* '''Pos'''   /'''Neg Button''': sets the culling side of the plane.
'''* '''Active''': sets whether the plane should cull objects.