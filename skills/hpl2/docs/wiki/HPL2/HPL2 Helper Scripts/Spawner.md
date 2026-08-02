{{TocRight}}
This page documents "HelperScripts_Spawner.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script class cSpawner provides methods for spawning entities and particle systems at specific vector positions.

===Spawn area===
The normal global functions provided by HPL2 only allow scripts to place objects at an existing Script Area. Spawner makes use of this and teleports the objects into the desired position afterwards.

There are three options for using Spawner, regarding a Spawn Area:
# Simply add a Script Area to the level named "SpawnArea", anywhere, any size.
# Tell Spawner to use a Script Area that already exists in the map, anywhere, any size, regardless of any other purpose.
# Tell Spawner to use multiple Script Areas placed in the map especially. This is only useful for semi-random rotation.

The default named Area is "SpawnArea" - you can change this using the SpawnArea property in script.
<syntaxhighlight lang="cpp">
Spawner.SpawnArea = "SomeOtherArea";
</syntaxhighlight>
Whatever it is called, there must be designated Script Area in the map, ''somewhere'', whose name matches SpawnArea. It doesn't matter what size it is or where it is located, as long as it exists.


===Spawning with shapes===
As well as spawning enties at specific positions, Spawner can also spawn entities randomly within a box or sphere shape, or spread evenly along a curve. It can also spawn particle systems at specific places or on a curve.


===Spawning with rotation===
It isn't possible to set the world rotation of an entity through script alone. However, spawned items will match the rotation of the whatever Script Area they were spawned at.

The SpawnArea propery allows one specific area to be set, but the [[HPL2/HPL2_Helper_Scripts/Spawner#SetSpawnArea.28.29|SetSpawnArea()]] ''method'' will accept an array or list of area names. When more than one Spawn Area is set, each spawned item will choose a different one at random. Having multiple Spawn Areas has no advantage other than having multiple sources for rotation.

For example, if the desired outcome is to spawn many debris objects with random-ish rotations, multiple Script Areas should be created in the level and given specific names and different rotations. It doesn't matter what size or location they are, only their rotation matters. In script, they should all be assigned with [[HPL2/HPL2_Helper_Scripts/Spawner#SetSpawnArea.28.29|SetSpawnArea()]], and then each spawned item will take on the rotation of one of the areas at random.


===Particles & temporary entities===
In order to spawn particle systems, Spawner spawns a "temp entity" - an invisible entity that the particle system is attached to. The number of temp entities is limited (256 by default) and when the full number is reached, older ones will be recycled.

If Spawner is used to create entities without specifying a name for them, they will be treated like temp entities too.

The entity file used for temp entities is called "SpawnerTemp.ent" and is located in the ""HPL2HelperScripts" folders. This can be changed using the TempEntityFile property, if required for some reason.


===Save data===
Spawner does not save any data of its own. By default, entities created by Spawner will be saved along with the save game and Spawner will have no need to remember them on the next play session. The SaveEntities property can be used to change this behaviour at run-time. Its default is true.
<syntaxhighlight lang="cpp">
Spawner.SpawnEntityAtPos("ent1", "spookyChair.ent", cVector(0.0f, 0.0f, 0.0f));		// This new entity will save by *default*.
Spawner.SaveEntities = false;		
Spawner.SpawnEntityAtPos("ent2", "spookyTable.ent", cVector(2.0f, 0.0f, 0.0f));		// This new entity will *not* save, specifically.
Spawner.SaveEntities = true;		
Spawner.SpawnEntityAtPos("ent3", "spookyCrate.ent", cVector(4.0f, 0.0f, 0.0f));		// This new entity *will* save, specifically.
</syntaxhighlight>


===Advanced info===
'''Advanced users''' may wish to examine "HelperScripts_Spawner.hps" to see how it makes use of other script classes. There are also some private variables that could to tweaked to fit the needs of a specific project, such as the default names for entities and the maximum number of temp entities allowed.


=Spawner=
Spawner is the name of the object that manages spawning entities at specific map locations.


==Behaviours==
"HelperScripts_Spawner.hps" declares an object called '''Spawner''', of the new script class cSpawner. To access its methods, just use "Spawner." followed by the function call. E.g.:
<syntaxhighlight lang="cpp">
Spawner.SpawnEntityAtPos("bigThing", "bigThing.ent", cVector(1.1f, 2.2f, 3.3f));
</syntaxhighlight>


==Properties==
Spawner provides the following properties:


====SaveEntities====
<syntaxhighlight lang="cpp">
string SaveEntities
</syntaxhighlight>
The bool property SaveEntities can be used to specify whether entities and particle systems spawned by Spawner will be saved as part of the save game. (Default = true)
<syntaxhighlight lang="cpp">
// Example:
Spawner.SpawnEntityAtPos("ent1", "spookyChair.ent", cVector(0.0f, 0.0f, 0.0f));		// This new entity will save by default.
Spawner.SaveEntities = false;		
Spawner.SpawnEntityAtPos("ent2", "spookyTable.ent", cVector(2.0f, 0.0f, 0.0f));		// This new entity will ''not'' save, specifically.
Spawner.SaveEntities = true;		
Spawner.SpawnEntityAtPos("ent3", "spookyCrate.ent", cVector(4.0f, 0.0f, 0.0f));		// This new entity ''will'' save, specifically.
</syntaxhighlight>


====SpawnArea====
<syntaxhighlight lang="cpp">
string SpawnArea
</syntaxhighlight>
The string property SpawnArea can get or set the named Script Area used for spawning entities. (Default = "SpawnArea")
<br>(The advantage of using the SpawnArea property is that it can just be set to any Script Area that happens to exist in the map.)
<syntaxhighlight lang="cpp">
// Example:
Spawner.SpawnArea = "LibraryEntranceTriggerB";
// Spawner will use the Script Area named "LibraryEntranceTriggerB" instead of the default name.
</syntaxhighlight>


====TempEntityBaseName====
<syntaxhighlight lang="cpp">
string TempEntityBaseName
</syntaxhighlight>
The string property TempEntityBaseName can get or set the prefix used when naming temp entities. (Default = "SpawnerTemp")
<br>If TempEntityBaseName is "SpawnerTemp" then temp entities will have names like "SpawnerTemp_0", "SpawnerTemp_1", etc..
<br>Note: This can only be changed before Spawner has actually spawned any temp entities, otherwise it would not be able to update or recycle them.
<syntaxhighlight lang="cpp">
// Example:
Spawner.TempEntityBaseName = "MySpecialEntityName";
// Spawner will now create temporary entities with names like "MySpecialEntityName_0", "MySpecialEntityName_1", etc..
</syntaxhighlight>


====TempEntityFile====
<syntaxhighlight lang="cpp">
string TempEntityFile
</syntaxhighlight>
The string property TempEntityFile can get or set the .ent file used for spawning temporary entities for particle systems. (Default = "SpawnerTemp.ent")
<br>The only reason to change TempEntityFile is if there is a specific entity that should be used instead.
<br>Note: This can only be changed before Spawner has actually spawned any temp entities, otherwise it would not be able to update or recycle them.
<syntaxhighlight lang="cpp">
// Example:
Spawner.TempEntityFile = "CustomTempEnt.ent";
// Spawner will attempt to spawn temp entities from the file "CustomTempEnt.ent" instead of the default file.
</syntaxhighlight>


==Methods==
Spawner provides the following methods:


===Spawning entities===


====SpawnEntityAtPos()====
<syntaxhighlight lang="cpp">
bool SpawnEntityAtPos(string asNewEntityName, string asEntityFile, cVector avPosition)
bool SpawnEntityAtPos(string asNewEntityName, cListString@ ahEntityFileList, cVector avPosition)
bool SpawnEntityAtPos(string asNewEntityName, string[] asEntityFileArray, cVector avPosition)
</syntaxhighlight>
Spawns an entity at a specific vector position. If an entity with that name already exists, it will be recycled. That is, it will be teleported into the new position. SpawnEntityAtPos returns true if the entity was recycled, or false if a new entity was created.
<br>The .ent file can be given as a specific string, e.g. "orb.ent", or it can be a list or array or strings. If a list or array is given, the .ent file that spawns will be chosen at random from the list or array.
#''string asNewEntityName'' - The name that the new entity will be given. Should either be unique, or an existing entity will be recycled instead.
#''string asEntityFile, cListString@ ahEntityFileList, string[] asEntityFileArray'' - A string, an array of strings, or a list of strings containing one or more .ent files.
#''cVector avPosition'' - A 3d vector position in the map to spawn the entity.
<syntaxhighlight lang="cpp">
// Example:
Spawner.SpawnEntityAtPos("AcmeAnvil", "anvil.ent", Math.GetPlayerPosVec() + cVector(0.0f, 3.0f, 0.0f));
// An entity of the type "anvil.ent" spawns 3m above the player's location.
</syntaxhighlight>


====SpawnEntitiesInBox()====
<syntaxhighlight lang="cpp">
bool SpawnEntitiesInBox(string asEntityBaseName = "SpawnerTemp", string asEntityFile, uint aulQty, cVector avBoxMin, cVector avBoxMax)
bool SpawnEntitiesInBox(string asEntityBaseName = "SpawnerTemp", cListString ahEntityFileList, uint aulQty, cVector avBoxMin, cVector avBoxMax)
bool SpawnEntitiesInBox(string asEntityBaseName = "SpawnerTemp", string[] asEntityFileArray, uint aulQty, cVector avBoxMin, cVector avBoxMax)
</syntaxhighlight>
Spawns a quantity of entities a random positions within a box shape defined by a pair of vectors (similar to the box shaped starting position in the particle editor). If the box is sized zero in one dimension then that is effectively a rectangle, so this can also be used spawn objects on a plane.
<br>The .ent file can be given as a specific string, e.g. "orb.ent", or it can be a list or array or strings. If a list or array is given, the .ent file that spawns will be chosen at random from the list or array.
<br>If asEntityBaseName is given, it will be used to name the new entities. E.g. if asEntityBaseName = "box", then new entities will be named like "box_0", "box_1" etc.. If asEntityBaseName is omitted, then temp entity names will be used instead. If an entity with that name already exists, it will be recycled, that is it will be teleported into the new position. If the script needs to refer to the entities by name later, use asEntityBaseName to give them specific names.
<br>SpawnEntitiesInBox returns true if any entities were recycled, or false if all the entities are newly created.
#''string asEntityBaseName'' - The name to use for the new entities, which will be appended with "_0", "_1" etc. (Optional, default = "SpawnerTemp") 
#''string asEntityFile, cListString@ ahEntityFileList, string[] asEntityFileArray'' - A string, an array of strings, or a list of strings containing one or more .ent files.
#''uint aulQty'' -  The number of entities to spawn in the box.
#''cVector avBoxMin'' - The minimum extent of the box.
#''cVector avBoxMax'' -  The maximum extent of the box.
<syntaxhighlight lang="cpp">
// Example:
cListString listJunkProps;
listJunkProps.Add("wooden_board02.ent");
listJunkProps.Add("tongs.ent");
listJunkProps.Add("hammer.ent");
listJunkProps.Add("chisel.ent");
listJunkProps.Add("basket.ent");
listJunkProps.Add("flask01.ent");
listJunkProps.Add("dungeon_small01.ent");
listJunkProps.Add("brick.ent");
listJunkProps.Add("brick.ent");
listJunkProps.Add("brick.ent");

Spawner.SpawnEntitiesInBox("Junk_A", listJunkProps, 24, cVector(10.0f, 0.25f, 15.0f), cVector(15.0f, 0.25f, 20.0f));
// 24 random junk items are selected from the list and spawned in a square, with names "Junk_A_0" to "Junk_A_23".
// Note that "brick.ent" is three times more likely to spawn than the others.
</syntaxhighlight>


====SpawnEntitiesInSphere()====
<syntaxhighlight lang="cpp">
bool SpawnEntitiesInSphere(string asEntityBaseName = "SpawnerTemp", string asEntityFile, uint aulQty, cVector avOrigin, float afRadius) 
bool SpawnEntitiesInSphere(string asEntityBaseName = "SpawnerTemp", cListString ahEntityFileList, uint aulQty, cVector avOrigin, float afRadius) 
bool SpawnEntitiesInSphere(string asEntityBaseName = "SpawnerTemp", string[] asEntityFileArray, uint aulQty, cVector avOrigin, float afRadius) 
</syntaxhighlight>
Spawns a quantity of entities a random positions within a sphere shape defined by a centre vector and a radius.
<br>The .ent file can be given as a specific string, e.g. "orb.ent", or it can be a list or array or strings. If a list or array is given, the .ent file that spawns will be chosen at random from the list or array.
<br> If asEntityBaseName is given, it will be used to name the new entities. E.g. if asEntityBaseName = "box", then new entities will be named like "box_0", "box_1" etc.. If asEntityBaseName is omitted, then temp entity names will be used instead. If an entity with that name already exists, it will be recycled, that is it will be teleported into the new position. If you need to know the names of the entities to refer to them later, use asEntityBaseName.
<br>SpawnEntitiesInSphere returns true if any entities were recycled, or false if all the entities are newly created.
#''string asEntityBaseName'' - The name to use for the new entities, which will be appended with "_0", "_1" etc. (Optional, default = "SpawnerTemp") 
#''string asEntityFile, cListString@ ahEntityFileList, string[] asEntityFileArray'' - A string, an array of strings, or a list of strings containing one or more .ent files.
#''uint aulQty'' - The number of entities to spawn in the sphere.
#''cVector avOrigin'' - The centre of the sphere.
#''cVector afRadius'' - The radius of the sphere.
<syntaxhighlight lang="cpp">
// Example:
Spawner.SpawnEntitiesInSphere("MegaOrb", "orb.ent", 1000, Math.GetPlayerPosVec(), 4.0f);
SetPlayerSanity(0.0f);
// One thousand orbs have spawned around the player, placing them at the centre of an 8m wide MegaOrb. The player had no chance to remain sane in such circumstances.
// Note: if no string was given for asEntityBaseName, then the number of entities spawned would be limited to the temp entity max (default = 256).
</syntaxhighlight>


====SpawnEntitiesOnSpline()====
<syntaxhighlight lang="cpp">
bool SpawnEntitiesOnSpline(string asEntityBaseName = "SpawnerTemp", string asEntityFile, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
bool SpawnEntitiesOnSpline(string asEntityBaseName = "SpawnerTemp", cListString ahEntityFileList, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
bool SpawnEntitiesOnSpline(string asEntityBaseName = "SpawnerTemp", string[] asEntityFileArray, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
</syntaxhighlight>
Spawns a quantity of entites evenly spaced along a spline.
<br>The .ent file can be given as a specific string, e.g. "orb.ent", or it can be a list or array or strings. If a list or array is given, the .ent file that spawns will be chosen at random from the list or array.
<br>If asEntityBaseName is given, it will be used to name the new entities. E.g. if asEntityBaseName = "box", then new entities will be named like "box_0", "box_1" etc.. If asEntityBaseName is omitted, then temp entity names will be used instead. If an entity with that name already exists, it will be recycled, that is it will be teleported into the new position. If the names of the entities are needed to refer to them later or update their position, use asEntityBaseName.
<br>SpawnEntitiesOnSpline returns true if any entities were recycled, or false if all the entities are newly created.
<br>afPhase is optional. It can be used to adjust the spread of the entities on the curve with a number between 0.0f and 1.0f, or it can be omitted. If it is omitted, or less than zero, then the default spacing will be used.
<br>The default spacing is the "full spread" - that is to say the first entity will be spawned at the start of the curve, the last entity at the very end, and all the others evenly in between.
<br>However, if value between 0.0f and 1.0f is used for afPhase, then the entities will be spawned within their own division of the curve, with the phase 0.0f - 1.0f specifying how far through that division it will appear.
<br>The following diagram illustrates the phase option:
<syntaxhighlight>
  |1----2----3----4|	<- default spacing: no phase, full spread.
  |1---2---3---4---|	<- phase = 0.0f, each object at the start of its division.
  |-1---2---3---4--|	<- phase = 0.25f, each object 1/4 of the way through its division.
  |--1---2---3---4-|	<- phase = 0.5f, each object 1/2 of the way through its division.
  |---1---2---3---4|	<- phase = 0.75f, each object 3/4 of the way through its division.
  |1---2---3---4---|	<- phase = 1.0f is the same as phase = 0.0f.
</syntaxhighlight>
<br>To update the position of the spawned entities without respawning them, for example if the spline or phase has changed, see UpdateEntitiesOnSpline().
<br>You can easily use SpawnEntitiesOnSpline() with a single Bezier or a straight line between two points, depending on how you construct your spline. See the examples, or see cSpline and cBezier classes for more information.
#''string asEntityBaseName'' - The name to use for the new entities, which will be appended with "_0", "_1" etc. (Optional, default = "SpawnerTemp")
#''string asEntityFile, cListString@ ahEntityFileList, string[] asEntityFileArray'' - A string, an array of strings, or a list of strings containing one or more .ent files.
#''uint aulQty'' - The number of entities to be placed on the spline.
#''cSpline@ ahSpline'' - A spline to place entities on.
#''float afPhase'' - An adjustment to the spread of the entities, 0.0f - 1.0f, or -1.0f for full spread. (Optional, default = -1.0f)
<syntaxhighlight lang="cpp">
// Example 1:
Spawner.SpawnEntitiesOnSpline("WigglyPathChair", "chair.ent", 10, vBigWigglyPath);
// 10x chair.ent have been spawned on the existing spline curve vBigWigglyPath.

// Example 2:
SpawnEntitiesOnSpline("rock.ent", 16, cSpline(cVector(2.0f, 2.0f, 10.0f), cVector(4.0f, 2.0f, 10.0f));
// 16x rock.ent have been spawned in a line shape.
// The line is formed from a new cSpline defined by two cVectors.
// The entities were not named, so temp entity names have been used. This means that they cannot be updated and may be recycled.

// Example 3:
cSpline vFloatyRockArch = cSpline(cVector(2.0f, 0.0f, 10.0f), cVector(2.0f, 3.0f, 10.0f), cVector(4.0f, 3.0f, 10.0f), cVector(4.0f, 0.0f, 10.0f));

cListString listRockTypes;
for (uint i = 0; i < 5; i++) listRockTypes.Add("rock_" + i + ".ent");

Spawner.SpawnEntitiesOnSpline("FloatyRockArchEnt", listRockTypes, 16, vFloatyRockArch);
// 16x rocks have been spawned in an arch shape.
// The arch is formed from a new cSpline defined by four cVectors, making a cubic bezier.
// Each rock entity was selected at random from one of five created in the list.
</syntaxhighlight>


===Spawning particles===


====SpawnParticlesAtPos()====
<syntaxhighlight lang="cpp">
bool SpawnParticlesAtPos(string asNewPSName, string asPSFile, cVector avPosition)
bool SpawnParticlesAtPos(string asNewPSName, cListString@ ahPSFileList, cVector avPosition)
bool SpawnParticlesAtPos(string asNewPSName, string[] asPSFileArray, cVector avPosition)
</syntaxhighlight>
Spawns a particle system at a specific vector position. 
<br>The .ps file can be given as a specific string, e.g. "ps_bubbles.ps", or it can be a list or array or strings. If a list or array is given, the .ps file that spawns will be chosen at random from the list or array.
<br>In order to place a particle system at an arbitrary location, a temp entity is used, using the msTempEntNameBase. If the maximum number of temp entities already exist, one will be recycled in the new position. SpawnParticlesAtPos returns true if the temp entity was recycled, or false if a new entity was created.
<br>If a particle system already exists with the given name, then it will be destroyed and replaced.
#''string asNewPSName'' - The name that the new particle system will be given. Should either be unique, or an existing system will be recycled instead.
#''string asPSFile, cListString@ ahPSFileList, string[] asPSFileArray'' - A string, an array of strings, or a list of strings containing one or more .ps files.
#''cVector avPosition'' - A 3d vector position in the map to spawn the entity.
<syntaxhighlight lang="cpp">
// Example 1:
Spawner.SpawnParticlesAtPos("FloatyFlame", "ps_fire_candle.ps", cVector(23.0f, 2.25f, 14.5f));
// A candle flame will be spawned at the given vector position, using a temp entity.

// Example 2:
string[] arrayFlameTypes = { "ps_fire_candle.ps", "ps_fire_candle_red.ps", "ps_fire_candle_blue.ps" };

Spawner.SpawnParticlesAtPos("FloatyFlame", listFlameTypes, cVector(23.0f, 2.25f, 14.5f));
// A candle flame will be spawned at the given vector position, using a temp entity.
// The .ps file will be selected at random from the array.
</syntaxhighlight>


====SpawnParticlesOnSpline()====
<syntaxhighlight lang="cpp">
bool SpawnParticlesOnSpline(string asEntityBaseName = "SpawnerTemp", string asPSFile, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
bool SpawnParticlesOnSpline(string asEntityBaseName = "SpawnerTemp", cListString ahPSFileList, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
bool SpawnParticlesOnSpline(string asEntityBaseName = "SpawnerTemp", string[] ahPSFileArray, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
</syntaxhighlight>
Spawns a quantity of particle systems evenly spaced along a spline. The ahSpline argument should refer to an existing cSpline variable if the positions of the particles should need to be updated later. See the examples, or see cSpline for further information on creating splines. To update the position of the spawned entities without respawning them, for example if the spline or phase has changed, see UpdateEntitiesOnSpline(). This will also move the particle systems.
<br>The .ps file can be given as a specific string, e.g. "ps_bubbles.ps", or it can be a list or array or strings. If a list or array is given, the .ps file that spawns will be chosen at random from the list or array.
<br>In order to place a particle system at an arbitrary location, a temp entity is used, using the default temp entity name. If the maximum number of temp entities already exist, some will be recycled in the new position on the spline. SpawnParticlesOnSpline returns true if any temp entities were recycled, or false if only new entities were used created.
<br>If a specific name is given using the asEntityBaseName argument, then it will be used instead. E.g. if asEntityBaseName = "box", then new entities will be named like "box_0", "box_1" etc.. If the names of the temp entities are needed to refer to them later, for example to update the particles on the spline, use a specific string for asEntityBaseName. SpawnParticlesOnSpline returns true is any entities were recycled, or false if all the entities are newly created.
<br>afPhase is optional. It can be used to adjust the spread of the entities on the curve with a number between 0.0f and 1.0f, or it can be omitted. If it is omitted or if it is given as any number less than zero, then the default spacing will be used. The default spacing  is the "full spread" - that is to say the first entity will be spawned at the start of the curve, the last at the end, and all the others evenly in between. However, if value between 0.0f and 1.0f is used for afPhase, then the entities will be spawned within their own division of the curve, with the phase 0.0f - 1.0f specifying how far through that division it will appear.
<br>The following diagram illustrates the phase option:
<syntaxhighlight>
  |1----2----3----4|	<- default spacing: no phase, full spread.
  |1---2---3---4---|	<- phase = 0.0f, each object at the start of its division.
  |-1---2---3---4--|	<- phase = 0.25f, each object 1/4 of the way through its division.
  |--1---2---3---4-|	<- phase = 0.5f, each object 1/2 of the way through its division.
  |---1---2---3---4|	<- phase = 0.75f, each object 3/4 of the way through its division.
  |1---2---3---4---|	<- phase = 1.0f is the same as phase = 0.0f.
</syntaxhighlight>
<br>If a particle system already exists with the given name, then it will be destroyed and replaced.
#''string asEntityBaseName'' - The name to use for the new entities, which will be appended with "_0", "_1" etc. (Optional, default = "SpawnerTemp")
#''string asPSFile, cListString@ ahPSFileList, string[] asPSFileArray'' - A string, an array of strings, or a list of strings containing one or more .ps files.
#''uint aulQty'' - The number of entities to be placed on the spline.
#''cSpline@ ahSpline'' - A spline to place entities on.
#''float afPhase'' - An adjustment to the spread of the entities, 0.0f - 1.0f, or -1.0f for full spread. (Optional, default = -1.0f)
<syntaxhighlight lang="cpp">
// Example 1:
Spawner.SpawnEntitiesOnSpline("WigglyPathFlame", "ps_fire_candle.ps", 10, vBigWigglyPath);
// 10x ps_fire_candle.ps have been spawned on the existing spline curve vBigWigglyPath.

// Example 2:
Spawner.SpawnEntitiesOnSpline("ps_fire_candle.ps", 16, cSpline(cVector(2.0f, 2.0f, 10.0f), cVector(4.0f, 2.0f, 10.0f)));
// 16x flames have been spawned in a line shape.
// The line is formed from a new anonymous cSpline defined by two cVectors.
// The temp entities have not been named, so they cannot be updated and may be recycled.

// Example 3:
cSpline vFloatyFlameArch = cSpline(cVector(2.0f, 0.0f, 10.0f), cVector(2.0f, 3.0f, 10.0f), cVector(4.0f, 3.0f, 10.0f), cVector(4.0f, 0.0f, 10.0f));

cListString listFlameTypes;
listFlameTypes.Add("ps_fire_candle.ps");
listFlameTypes.Add("ps_fire_candle_red.ps");
listFlameTypes.Add("ps_fire_candle_blue.ps");

Spawner.SpawnEntitiesOnSpline("FloatyFlame", listFlameTypes, 16, vFloatyFlameArch, 0.5f);
// 16x flames have been spawned in an arch shape, where each sits halfway through own 16th division (phase = 0.5f).
// The arch shape is provided by an existing named cSpline, defined by four cVectors, making a cubic bezier.
// Each particle system was selected at random from one of three .ps files.
// Since the cSpline and the carrier entities have been named ("FloatyFlame_0", "FloatyFlame_1" etc.) they can be referred to and updated later.
</syntaxhighlight>


===Movement and rotation===


====SetSpawnArea()====
<syntaxhighlight lang="cpp">
void SetSpawnArea(string asSpawnArea)
void SetSpawnArea(string[] asSpawnAreaArray)
void SetSpawnArea(cListString asSpawnAreaList)
</syntaxhighlight>
The simplest way to allocate a specific Spawn Area is with the SpawnArea property. (<code>Spawner.SpawnArea = "someArea";</code>)
<br>However, the SetSpawnArea() method can also be used to specify multiple Script Areas with an array or list. If multiple Script Areas are specified then one of them will be selected at random for each item spawned.
<br>This has only one advantage: spawned items take on the rotation of their Spawn Area.
<br>If the desired outcome is to [[HPL2/HPL2_Helper_Scripts/Spawner#Spawning_with_rotation|spawn objects with random rotation]], the only way to achieve this through script to create a handful of Areas with various rotations, assign them all the SetSpawnArea(), and then each spawned item will take on the rotation of one of the areas.
#''string asSpawnArea, string[] asSpawnAreaArray, cListString, asSpawnAreaList'' - One or more names to be designated as the spawn area.
<syntaxhighlight lang="cpp">
// Example 1:
Spawner.SetSpawnArea("MyScriptArea");
Spawner.SpawnEntitiesInBox("Hammer", "hammer.ent", 24, cVector(10.0f, 0.25f, 15.0f), cVector(15.0f, 0.25f, 20.0f));
// 24x hammer.ent will be spawned in the defined bos.

// Example 2:
string[] sAreas = { "MyScriptArea1", "MyScriptArea2", "MyScriptArea3", "MyScriptArea4" };
Spawner.SetSpawnArea(sAreas);
Spawner.SpawnEntitiesInBox("Hammer", "hammer.ent", 24, cVector(10.0f, 0.25f, 15.0f), cVector(15.0f, 0.25f, 20.0f));
// 24x hammer.ent will be spawned in the defined box, each with the rotation copied from one of the 4 script areas.
</syntaxhighlight>


====UpdateEntitiesOnSpline()====
<syntaxhighlight lang="cpp">
bool UpdateEntitiesOnSpline(string asEntityBaseName, uint aulQty, cSpline ahSpline, float afPhase = -1.0f)
</syntaxhighlight>
If SpawnEntitiesOnSpline() or SpawnParticlesOnSpline() has been used with a specific asEntityBaseName, and if the spline position has changed or a new phase value is desired, then UpdateEntitiesOnSpline() can be used to update the entities' or particles' positions, without recycling or further spawning.
<br>UpdateEntitiesOnSpline returns false if any of the expected entities do not exist, or true if the were all found and updated successfully.
<br>If a unique asEntityBaseName was not used, this may have enexpected results.
#''string asEntityBaseName'' - The base name used to previously spawn items on the spline.
#''uint aulQty'' - The number of items that were previously spawned in the spline.
#''cSpline ahSpline'' - A reference to an existing spline.
#''float afPhase'' - An adjustment to the spread of the entities, 0.0f - 1.0f, or -1.0f for full spread. (Optional, default = -1.0f)
<syntaxhighlight lang="cpp">
// Example 1:
Spawner.SpawnEntitiesOnSpline(vBigWigglyPath, 10, "chair.ent", "WigglyPathChair");
// 10x chair.ent have been spawned on the curve vBigWigglyPath.
// ...some time later... vBigWigglyPath has been updated with new vectors:
Spawner.UpdateEntitiesOnSpline(vBigWigglyPath, 10, "WigglyPathChair");
// The 10 entities have adjusted to the new curve vectors.

// Example 2:
OnEnter()
{
	float fWigglyPathPhase = 0.0f;
	Spawner.SpawnEntitiesOnSpline(vBigWigglyPath, 1, "chair.ent", "WigglyPathChair", fWigglyPathPhase);
}

OnUpdate(float asStep)
{
	fWigglyPathPhase = Math.Wrap(fWigglyPathPhase + afStep / 5.0f);
	Spawner.UpdateEntitiesOnSpline(vBigWigglyPath, 1, "WigglyPathChair", fWigglyPathPhase);
}
// In this example, a single chair.ent is spawned on a curve name vBigWigglyPath when the level is first entered.
// fWigglyPathPhase updates between 0.0f and 1.0f over the course of 5 seconds (see Math.Wrap()) and UpdateEntitiesOnSpline() applies the new phase.
// The result is that the chair continuous moves along the curve vBigWigglyPath every 5 seconds, then loops back to the start.
</syntaxhighlight>



__FORCETOC__