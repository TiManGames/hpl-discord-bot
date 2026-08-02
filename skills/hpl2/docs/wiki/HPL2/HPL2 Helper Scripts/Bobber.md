{{TocRight}}
This page documents "HelperScripts_Bobber.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script class cBobber manages a list of entities that should bob up and down, as if they are floating in water or hovering in air. A use case for this might be for a haunted item that hovers in the air temporarily. Or for example, if you need an entity to float in water in a specific location and can't rely on the physics simulation.


===Bobber vs buoyancy===
The HPL2 physics simulation already allows for physics objects to be buoyant in liquid. Bobber is intended to complement this system. The main difference is that, for a physics item to float in liquid, it needs to have some freedom of movement. On the other hand, Bobber keeps objects right where they're told to be.

Example 1: Imagine a scenario in a flooded cellar, where the player has to manoeuvre a floating box into position to make a bridge. The level designer might prefer to the floating box to be a free-moving physics object while the player finds it and manipulates it into position. Then, once in position it could become managed by Bobber instead. This would allow, for example, non-simulated level elements to come into play, such as an invisible solid bridge that an enemy might cross. The Bobber-managed crate would have no risk of drifting out of position or flipping over whilst it was pretending to be a bridge.

Example 2: Imagine a scenario in a haunted room, where a poltergeist lifts a vase into the air, floating in the centre of the room. Rather than making the vase freeze in place, the level designer might want it to bob in the air. To do this using buoyancy, there would need to be a Liquid Area in the room, which could interfere with other objects or be noticeable to the player. On the other hand, using Bobber to float the vase would not have these side effects.


===Player distance===
Each bobbing entity can have a specific distance that the player must be within for the bobbing animation to occur. When the player is beyond this distance, the animation will pause. The level designer should balance the player distance against the size of the entity, the size of it's bobbing movement, and the size of the space the player might see it in. The default distance is 24m, but this can be overridden in the Add() arguments.


===Save data===
Bobber saves its data for each level to GameVars so that it can be automatically restored when the player returns to the level or reloads a game that was saved in the level. Any entities that were registered with Bobber at the time of saving will be re-registered and their bobbing state will be restored. The restoration of the loaded state occurs on the first frame once the game has started. If the game starts and Bobber hasn't yet been initialised, then it will check to see if there is saved data from a  previous session, and restore it. If the game starts and Bobber was already initialised in OnStart() or OnEnter(), then the load will be skipped.


===Advanced info===
'''Advanced users''' may wish to examine "HelperScripts_Bobber.hps" to see how it makes use of other script classes. There are also some private variables that could to tweaked to fit the needs of a specific project, such as default player distance or the maximum number of bobbers.

The methods [[HPL2/HPL2_Helper_Scripts/Bobber#AddAbstract.28.29|AddAbstract()]] and [[HPL2/HPL2_Helper_Scripts/Bobber#GetBob.28.29|GetBob()]] can be used without a world entity, which means that Bobber can also be used just as a source of waving floats. Abstract bobbers are not saved.


=Bobber=
Bobber is the name of the object that manages the bobbing entities.


==Behaviours==
"HelperScripts_Bobber.hps" declares an object called '''Bobber''', of the new script class cBobber. To access its properties and methods, just use "Bobber." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
Bobber.Remove("NakedDeadGuy");
Bobber.Turbulence = 1.0f;
</syntaxhighlight>


==Properties==
Bobber provides the following properties:


====IsActive====
<syntaxhighlight lang="cpp">
bool IsActive
</syntaxhighlight>
The read-only boolean property IsActive returns whether there are currently any active bobbers.
<syntaxhighlight lang="cpp">
// Example:
if (Bobber.IsActive) DoStuff();
// The condition succeeds if Bobber is currently bobbing some entities.
</syntaxhighlight>


====BobberCount====
<syntaxhighlight lang="cpp">
uint BobberCount
</syntaxhighlight>
The read-only integer property BobberCount returns the number of bobbers that have been registered in Bobber.
<syntaxhighlight lang="cpp">
// Example:
if (Bobber.BobberCount < 8) MoarBobbers();
// The condition succeeds if Bobber is currently bobbing fewer than eight entities.
</syntaxhighlight>


====FrameRate====
<syntaxhighlight lang="cpp">
float FrameRate
</syntaxhighlight>
The float property FrameRate can be used to get or set the animation frame rate that Bobber uses. Default = 30. For lower distances and speeds, 30 fps looks fine! For faster or more turbulent bobbing, or large wave distances, a higher frame rate may be desired. Obviously, the higher this is, the more it risks impacting performance.
<syntaxhighlight lang="cpp">
// Example:
if (bUseHighFrameRate) Bobber.FrameRate = 120.0f;
else Bobber.FrameRate = 30.0f;
// The frame rate is set to either 120 or 30.
</syntaxhighlight>


====Turbulence====
<syntaxhighlight lang="cpp">
float Turbulence
</syntaxhighlight>
The float property Turbulence can be used to get or set the turbulence value that Bobber uses. Applies to all bobbers together. Valid values are 0.0 - 1.0. Default = 0.0. The turbulence value introduces a chaotic element to the animation, to simulate choppy waters or erratic hovering.
<syntaxhighlight lang="cpp">
// Example:
Bobber.Turbulence = 1.0f;
// The maximum turbulence has been applied.
</syntaxhighlight>


==Methods==
Bobber provides the following methods:


===Adding/removing bobbers===


====Add()====
<syntaxhighlight lang="cpp">
bool Add(string asEntity, bool abStartActive = true, float afScale = 1.0f, float afSpeed = 1.0f)
bool Add(string asEntity, bool abStartActive = true, float afScale = 1.0f, float afSpeed = 1.0f, cVector avMoveTo)
bool Add(string asEntity, bool abStartActive, cVector avMoveTo, cVector avDist, cVector avSpeed, cVector avPhase, float afMaxPlayerDist)
</syntaxhighlight>
Adds a named entity to the bob list for bobbing. Returns true if the entity was successfully added.
<br>The optional bool abStartActive defines whether the bobber starts out bobbing or not. If false, it is added to the list but doesn't start animating yet. If omitted, the default is true.
<br>The optional cVector avMoveTo defines a position for the entity to bob around. If omitted, its current position is used. The entity will move towards its bob position as it starts bobbing.
<br>If floats are provided, afScale and afSpeed multiply the default distance and frequency, and mfDefaultMaxPlayerDist informs how close the player has to be for the bobber to animate.
<br>More precise movement can be arranged by providing cVectors avDist, avSpeed and avPhase. If specified, they will override the default distance and frequency, making any size or speed of movement possible.
<br>avPhase will add an offset to time, making it possible to control how bobbing entities synchronised, or not.
<br>Additionally, the float afMaxPlayerDist specifies a player distance for this bobber. This is the distance the player has to be within for the bobber to animate.
EITHER:
#''string asEntity'' - The entity to add.
#''bool abStartActive'' - Whether the bobber be bobbin'. (Optional, default = true)
#''float afScale'' - Multiplies the default wave size.  (Optional, default = 1.0f)
#''float afSpeed'' - Multiplies the default wave speed. (Optional, default = 1.0f)
#''cVector avMoveTo'' - A world position for the entity to move to and bob around.  (Optional, default = current location)
OR:
#''string asEntity'' - The entity to add.
#''bool abStartActive'' - Whether the bobber be bobbin'.
#''cVector avMoveTo'' - A world position for the entity to move to and bob around.
#''cVector avDist'' - Distance in X,Y,Z dimensions for size of the wave.
#''cVector avSpeed'' - Velocity in X,Y,Z dimensions for speed of the wave.
#''cVector avPhase'' - Distance in X,Y,Z dimensions for time offset of the wave.
#''float afMaxPlayerDist'' - Distance the player must be within for the bobber to animate.
<syntaxhighlight lang="cpp">
// Example 1:
Bobber.Add("floatyBoi");
// An entity called "floatyBoi" has been added to Bobber, at its current positiong, with the normal wave size and speed.

// Example 2:
if (!Bobber.Add("floatyBoi")) DoSomethingElse();
// If the Add failed, possibly because "floatyBoi" is already registered with Bobber, then the condition succeeds and the function DoSomethingElse() is called instead.

// Example 3:
Bobber.Add("floatyBoi", true, 2.0f, 0.5f, cVector(0.0f, 10.0f, 0.0f));
// An entity called "floatyBoi" has been added to Bobber, with twice the normal wave size, and half the normal speed, and will bob around 0,10,0.

// Example 4:
Bobber.Add("floatyBoi", false, cVector(0.0f, 10.0f, 0.0f), cVector(0.5f, 8.0f, 0.5f), cVector(16.0f, 2.0f, 16.0f), cVector(), 4.0f);
// An entity called "floatyBoi" has been added to Bobber, with some unusual parameters. It will bob around 0,10,0. It will drift up and down slowly, over a range of 8m, but it will vibrate rapidly in both horizontal directions, and it will only do this while the player is within a distance of 4m.
</syntaxhighlight>


====AddAbstract()====
<syntaxhighlight lang="cpp">
bool AddAbstract(string asName, cVector avDist, cVector avSpeed, cVector avPhase)
</syntaxhighlight>
Adds an abstract bobber to the list. An abstract bobber doesn't have a corresponding entity in the world, but can be used with [[HPL2/HPL2_Helper_Scripts/Bobber#GetBob.28.29|GetBob()]] to return the bobbing vector for use in other ways. Abstract bobbers are not saved in the game variables.
#''string asName'' - The name to give the abstract bobber in the bob list.
#''cVector avDist'' - Distance in X,Y,Z dimensions for size of the wave.
#''cVector avSpeed'' - Velocity in X,Y,Z dimensions for speed of the wave.
#''cVector avPhase'' - Distance in X,Y,Z dimensions for time offset of the wave.
<syntaxhighlight lang="cpp">
// Example:
Bobber.AddAbstract("SomeWavyNumbers", cVector(1.0f, 1.0f, 1.0f), cVector(0.5f, 1.0f, 0.5f), cVector(0.3f, 0.0f, 0.7f));
float MyWavyNumber = Bobber.GetBob("SomeWavyNumbers").X;
// A bobber called "SomeWavyNumbers" has been added to the bob list, and the float MyWavyNumber is assigned the X value from the wave vector.
</syntaxhighlight>



====Remove()====
<syntaxhighlight lang="cpp">
bool Remove(string asEntity)
bool Remove(uint aulEntIdx)
</syntaxhighlight>
Removes a bobbing entity from the bob list. Returns true if the entity was successfully removed, or false if it was not found.
The entity to remove can be specified by name or by an index. (The index corresponds to the order the bobbers were added.)
#''string asEntity, uint aulEntIdx'' - The entity to check for, by name or by index.
<syntaxhighlight lang="cpp">
// Example 1:
Bobber.Remove(0);
// The entity that was first registered with Bobber will be de-registered.

// Example 2:
Bobber.Remove("floatyBoi");
// If the entity named "floatyBoi" is registered with Bobber, it will be de-registered.

// Example 3:
if (Bobber.Remove("floatyBoi")) Bobber.Add("floatyBoi2");
// If the entity named "floatyBoi" is registered with Bobber, it will be de-registered. In that case, the condition will succeed and "floatyBoi2" will be added instead.
</syntaxhighlight>


====ClearBobbing()====
<syntaxhighlight lang="cpp">
void ClearBobbing()
</syntaxhighlight>
Cancels all bobers and empties the list. Bobbing entities will be left at their current position.
<syntaxhighlight lang="cpp">
// Example:
Bobber.ClearBobbing();
// All bobbers have been de-registered. Even "floatyBoi"!
</syntaxhighlight>


===Querying bobbers===


====IsEntBobbing()====
<syntaxhighlight lang="cpp">
bool IsEntBobbing(string asEntity)
</syntaxhighlight>
Returns true if the named entity is in the bob list.
#''string asEntity'' - The entity to check for.
<syntaxhighlight lang="cpp">
// Example:
if (Bobber.IsEntBobbing("barrel1")) DoStuff();
// The condition succeeds if the entity "barrel1" is a registered bobber.
</syntaxhighlight>


====IsEntBobbing()====
<syntaxhighlight lang="cpp">
bool IsEntBobbing(string asEntity)
</syntaxhighlight>
Returns true if the named entity is in the bob list.
#''string asEntity'' - The entity to check for.
<syntaxhighlight lang="cpp">
// Example:
if (Bobber.IsEntBobbing("barrel1")) DoStuff();
// The condition succeeds if the entity "barrel1" is a registered bobber.
</syntaxhighlight>


====GetBob()====
<syntaxhighlight lang="cpp">
cVector GetBob(string asName)
</syntaxhighlight>
Returns a 3d vector indicating the bobber's position. This is most useful with [[HPL2/HPL2_Helper_Scripts/Bobber#AddAbstract.28.29|abstract bobbers]] and will be the current wave vector offset.
<br>For a normal bobber that is active, this will be its current world position. For an inactive bobber, this will return zero.
<syntaxhighlight lang="cpp">
// Example:
Bobber.AddAbstract("SomeWavyNumbers", cVector(1.0f, 1.0f, 1.0f), cVector(0.5f, 1.0f, 0.5f), cVector(0.3f, 0.0f, 0.7f));
float MyWavyNumber = Bobber.GetBob("SomeWavyNumbers").X;
// A bobber called "SomeWavyNumbers" has been added to the bob list, and the float MyWavyNumber is assigned the X value from the wave vector.
</syntaxhighlight>


=cNodeBobbing=
cNodeBobbing is a list node class used by cBobber to manage individual bobbing entities. It is '''not recommended''' to work with cNodeBobbing directly. Instead, just use the methods of Bobber and let it manage them for you.

'''Advanced users''' who intend to access cNodeBobbing instances may find the following information useful.


==Behaviours==
cNodeBobbing has two constructors, one with full control and one with minimal args:
<syntaxhighlight lang="cpp">
cNodeBobbing(string &in asEntity, cVector avDist, cVector avSpeed, float afMaxPlayerDist)
cNodeBobbing(string &in asEntity, bool abStartActive, cVector avMoveTo, cVector avDist, cVector avSpeed, cVector avPhase, float afMaxPlayerDist)
</syntaxhighlight>
A third constructor exists for abstract bobbers (math only, no entities in the world):
<syntaxhighlight lang="cpp">
cNodeBobbing(string &in asName, cVector avDist, cVector avSpeed, cVector avPhase)
</syntaxhighlight>


==Properties==
cNodeBobbing has the following properties:


====IsActive====
<syntaxhighlight lang="cpp">
bool IsActive
</syntaxhighlight>
The read-only boolean property IsActive ''updates'' whether the bobber should be active based on the player distance and returns the result.
<br>


====EntityName====
<syntaxhighlight lang="cpp">
string EntityName
</syntaxhighlight>
The read-only string property EntityName returns the index of this bobber's actual entity.
<br>


====Origin====
<syntaxhighlight lang="cpp">
cVector Origin
</syntaxhighlight>
The read-only cVector property Origin returns the cVector defining the centre of the bobber's movement.
<br>


====Distance====
<syntaxhighlight lang="cpp">
cVector Distance
</syntaxhighlight>
The read-only cVector property Distance returns the cVector defining the bobber's wave amplitude on each axis.
<br>


====Speed====
<syntaxhighlight lang="cpp">
cVector Speed
</syntaxhighlight>
The read-only cVector property Speed returns the cVector defining the bobber's wave frequency on each axis.
<br>


====Phase====
<syntaxhighlight lang="cpp">
cVector Phase
</syntaxhighlight>
The read-only cVector property Phase returns the cVector offsetting the bobber's movement in time.
<br>


====PlayerDistSqr====
<syntaxhighlight lang="cpp">
float PlayerDistSqr
</syntaxhighlight>
The read-only float property PlayerDistSqr returns the square of the maximum player distance to animate this bobber.
<br>


===Methods===


====CheckActive()====
<syntaxhighlight lang="cpp">
bool CheckActive()
</syntaxhighlight>
Updates whether the bobber should be active based on the player distance and returns the result.
<br>


====UpdatePos()====
<syntaxhighlight lang="cpp">
void UpdatePos(float afTime, float afInterpWeight)
</syntaxhighlight>
Updates the bobber's wave position based on the the current time and Bobber's interpolation weight value.
#''float afTime'' - The current Bobber time.
#''float afInterpWeight'' - The interpolation weight value in Bobber. Higher numbers make more smoothing. 4.0f is recommended.
<br>


====GetBob()====
<syntaxhighlight lang="cpp">
cVector GetBob(float afTime, float afInterpWeight)
</syntaxhighlight>
Returns the bobber's current wave position without updating an entity position.
#''float afTime'' - The current Bobber time.
#''float afInterpWeight'' - The interpolation weight value in Bobber. Higher numbers make more smoothing. 4.0f is recommended.
<br>


__FORCETOC__