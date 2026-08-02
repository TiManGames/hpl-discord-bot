Information about importing 3D assets into HPL2. The engine supports FBX and COLLADA (.dae). Most assets were made in the latter format.
*[[Hpl2:Tutorials:modeling:tutorialoutsource|Official guide - a tutorial for outsourcers]]
Most assets have been made using [[Autodesk_Maya|Maya]]. Basic data about the model exporting can be found there. If data about what the Maya version was used to make the original assets is needed, open some .dae files from the game and check the headers.

Due to a lot of community experimentation, the [[Blender]] article might contain the most in-depth information about exporting to HPL2.

==Retexturing==
Retexturing the original assets is a fairly simple way of bringing some new things to the engine. It can be done by copying the .dae file, naming it appropriately and then changing the texture file names in the <code><library_images></code> section of the file (when editing it as text). Then open the file in the Model Viewer to generate a material file and either create an entity file or copy the original one, rename it and change the file to point to the newly retextured .dae file.