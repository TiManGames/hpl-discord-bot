{{TocRight}}
This page documents "HelperScripts_Glitcher.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script class cGlitcher manages a list of entity groups that should appear to erratically twitch and move, without any animated models or shaders.


===Glitch entities===
One "''glitch''" contains at least one entity which, at semi-random intervals, should move to a slightly different position. The multiple entities within a glitch a here called "alt entities" or "alts".

If the glitch contains only one alt entity, it will only "twitch" without changing. If multiple entities are added to the glitch, then they will be substituted. The entities can be different types: for example, multiple versions of a statue, in slightly different poses. Or they can just be a different scale or rotation, which can have a similar effect.

Furthermore, glitches containing mutliple entities will quickly fade between alts rather than switching instantly. Glitches contain only one alt must twitch instantly without any fading. The fade time reduces as the intensity of the glitching increases.


===Intensity===
The amount of the glitching is controlled by Glitcher's ''intensity'' calculations. Intensity affects the interval and likelihood of glitches occuring, as well that the smoothness of the entities fading as they are substituted.

Itensity responds to the player's Sanity level, but it can also be controlled influenced in script with SetIntensity() method. The Intensity property can be used to check what the current intensity level is.


===Player distance===
Each glitching entity can have a specific distance that the player must be within for the glitches to occur. When the player is beyond this distance, the glitching will pause. The level designer should balance the player distance against the size of the entity, the visibility of the glitches, and the size of the space the player might see it in. The default distance is 24.0f units, but this can be overridden in the Add() arguments.


===Save data===
Glitcher saves its data for each level to GameVars so that it can be automatically restored when the player returns to the level or reloads a game that was saved in the level. Any entities that were registered with Glitcher at the time of saving will be re-registered and their glitching state will be restored. The restoration of the loaded state occurs on the first frame once the game has started. If the game starts and Glitcher hasn't yet been initialised, then it will check to see if there is saved data from a previous session, and restore it. If the game starts and Glitcher was already initialised in OnStart() or OnEnter(), then the load will be skipped.


===Advanced info===
'''Advanced users''' may wish to examine "HelperScripts_Glitcher.hps" to see how it makes use of other script classes. There are also some private variables that could to tweaked to fit the needs of a specific project, such as default player distance, maximum number of glitchers, and the default numbers involved in the intensity and fading calculations.


=Glitcher=
Glitcher is the name of the object that manages the glitching entities.


==Behaviours==
"HelperScripts_Glitcher.hps" declares an object called '''Glitcher''', of the new script class cGlitcher. To access its properties and methods, just use "Glitcher." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
if (Glitcher.IsEntGlitching("IllusionThing"))
Glitcher.Intensity = 1.0f;
</syntaxhighlight>


==Properties==
Glitcher provides the following properties:


====IsActive====
<syntaxhighlight lang="cpp">
bool IsActive
</syntaxhighlight>
The read-only boolean property IsActive returns whether there are currently any active glitches.
<syntaxhighlight lang="cpp">
// Example:
if (Glitcher.IsActive) DoStuff();
// The condition succeeds if Glitcher is currently glitching some entities.
</syntaxhighlight>


====Intensity====
<syntaxhighlight lang="cpp">
float Intensity
</syntaxhighlight>
The read-only float property Intensity returns the current intensity value resulting from the sanity bias and min-max intensities. If no glitches are currently active, the intensity value will be zero.
<syntaxhighlight lang="cpp">
// Example:
if (Glitcher.Intensity > 0.5f) DoStuff();
// The condition succeeds if Glitcher intensity is over 50%.
</syntaxhighlight>


====FadeDuration====
<syntaxhighlight lang="cpp">
float FadeDuration
</syntaxhighlight>
The read-only float property FadeDuration returns the current fading time resulting from the sanity bias and min-max intensities. If no glitches are currently active, the returned value will be zero.
<syntaxhighlight lang="cpp">
// Example:
FadeLightTo("someLight", 1.0f, 0.6f, 0.4f, 1.0f, 12.0f, Glitcher.FadeDuration);
// This example imagines that the level designer wants a light to fade with the same speed a glitching entities.
</syntaxhighlight>


====GlitchCount====
<syntaxhighlight lang="cpp">
uint GlitchCount
</syntaxhighlight>
The read-only integer property GlitchCount returns the number of glitches that have been registered in Glitcher.
<syntaxhighlight lang="cpp">
// Example:
if (Glitcher.GlitchCount > 8) ClearGlitches();
// The condition succeeds if Glitcher is currently glitching more than eight entities.
</syntaxhighlight>


==Methods==
Glitcher provides the following methods:


===Adding glitches===


====Add()====
<syntaxhighlight lang="cpp">
bool Add(string asEntAltOne, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
bool Add(string asEntAltOne, string asEntAltTwo, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
bool Add(string asEntAltOne, string asEntAltTwo, string asEntAltThree, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
bool Add(string[] asEntAlts, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
bool Add(cListString asEntAlts, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
</syntaxhighlight>
Registers an entity or multiple entities as a glitch. Returns true if the glitch was successfully added.
<br>Entity names can be provided as one, two or three individual strings, or array of strings, or a cListString.
<br>afJitterScale is optional. If omitted it defaults to 1.0f. The jitter scale multiplies the distance an entity can move when it twitches. The default jitter scale of 1.0 means movements of up to 5cm.
<br>afChanceScale is optional. If omitted it defaults to 1.0f. The chance scale multiplies the likelihood that a glitch will occur at each interval.
<br>Also optionally, the player distance and glitch sounds can be overridden. Otherwise the Glitcher defaults are used.
#''string asEntAltOne, string[] asEntAlts, cListString asEntAlts'' - The name of an entity, an array of entity names, or a list of entity names to include in the glitch as alt entities.
#''string asEntAltTwo'' - If specifying entities as individual strings, this is a second entity to include. (Optional)
#''string asEntAltThree'' - If specifying entities as individual strings, this is a third entity to include. (Optional)
#''float afJitterScale'' - Multiplies the distance that the mesh can move when it twitches. (Optional, default = 1.0f)
#''float afChanceScale'' - Multiplies the likelihood that a glitch will occur on each interval. (Optional, default = 1.0f)
#''float afMaxPlayerDist'' - If using an array of strings, afMaxPlayerDist can be used to override the default player distance for this glitch. (Optional, default = 24.0f)
#''float asGlitchSound'' - If using an array of strings, asGlitchSound can be used to override the default sound played when a glitch occurs. (Optional, default = "", no sound)
<syntaxhighlight lang="cpp">
// Example 1:
Glitcher.Add("SpookyTree1", "SpookyTree2", 10.0f, 50.0f, "forest_tree_creak.snt");
// A glitch is created with two alt entities.
// The jitter scale is 10.0f, which means that each twitch could be up to 0.5m.
// The max player distance is 50.0f, which would allow the movement to be see from afar.
// The glitch is assigned a sound to play on each twitch.

// Example 2:
cListString listStatueA;
listStatueA.Add("statue_A_0");
listStatueA.Add("statue_A_1");
listStatueA.Add("statue_A_2");
listStatueA.Add("statue_A_3");
Glitcher.Add(listStatueA);
// A glitch is created with default settings, using alt entities listed in listStatueA.

// Example 3:
Glitcher.Add(String.StringRange("statue_A_", 0, 3, ""));
// The StringRange() method is used to produce a list of entity names - the outcome is the same as example 2.
</syntaxhighlight>


====AddSeries()====
<syntaxhighlight lang="cpp">
bool AddSeries(string asPrefix, uint aulPostfixDigits = 0, float afJitterScale = 1.0f, float afChanceScale = 1.0f, float afMaxPlayerDist = 24.0f, string asGlitchSound = "")
</syntaxhighlight>
Registers a series of named entities as a glitch. Returns true if the glitch was successfully added.
<br>AddSeries() is useful when the alt entities have a regular naming pattern but it is unknown at the time of scripting how many there will be. Entity names are provided in the format "someNamePrefix1". The first part of the name is asPrefix. The number is an index from 0 to 128. AddSeries() counts from 0 and stops when it comes to an entity that doesn't exist.
<br>aulPostfixDigits can be used optionally to specify leading zeroes in the entity names. For example, if the entity names are formatted as "someNamePrefix01" then aulPostfixDigits should be 2.
<br>afJitterScale is optional. If omitted it defaults to 1.0f. The jitter scale multiplies the distance an entity can move when it twitches. The default jitter scale of 1.0 means movements of up to 5cm.
<br>afChanceScale is optional. If omitted it defaults to 1.0f. The chance scale multiplies the likelihood that a glitch will occur at each interval.
<br>Also optionally, the player distance and glitch sounds can be overridden. Otherwise the Glitcher defaults are used.
#''string asPrefix'' - The first part of an entity name, to be appended with an index.
#''uint aulPostfixDigits'' - The number of digits to expect in an entity name, including leading zeroes. (Optional, default = 0, no leading zeroes)
#''float afJitterScale'' - Multiplies the distance that the mesh can move when it twitches. (Optional, default = 1.0f)
#''float afChanceScale'' - Multiplies the likelihood that a glitch will occur on each interval. (Optional, default = 1.0f)
#''float afMaxPlayerDist'' - If using an array of strings, afMaxPlayerDist can be used to override the default player distance for this glitch. (Optional, default = mfDefaultMaxPlayerDist)
#''float asGlitchSound'' - If using an array of strings, asGlitchSound can be used to override the default sound played when a glitch occurs. (Optional, default = "", no sound)
<syntaxhighlight lang="cpp">
// Example:
// Example 1:
Glitcher.AddSeries("SpookyTree", 1.0f, 0.5f);
// A glitch is created with as many alt entities as are found matching the pattern "SpookyTree0", "SpookyTreek1" etc..
// The chance scale provided is 50%, so this glitcher is half as likely to twitch than default.

// Example 2:
Glitcher.Add("statue_A_", 3);
// A glitch is created with default settings, with as many alt entities as are found matching the pattern "statue_A_0", "statue_A_1" etc..
</syntaxhighlight>


===Adding glitches from Slimer===


====AddFromSlimer_InstsToSingles()====
<syntaxhighlight lang="cpp">
bool AddFromSlimer_InstsToSingles(string asSequence)
</syntaxhighlight>
Registers a series of entities as a glitch, using the default settings. The entities are sourced from Slimer. If sequences of entities have been prepared for use in Slimer, this method allows them to be passed easily to Glitcher. Note that the glitch state may override the sequence state and vice versa.
<br>In particular, AddFromSlimer_InstsToSingles() creates glitches with a single alt entity in each. Each of the instance entities in the specified sequence becomes an individual glitch with only one alt.
<br>Returns true if the glitch was successfully added.
#''string asSequence'' - The name of the Slimer sequence to add.
<syntaxhighlight lang="cpp">
// Example:
Glitcher.AddFromSlimer_InstsToSingles("CutsceneSequenceA");
// Each of the entities registered with Slimer for the sequence "CutsceneSequenceA" is now registered with Glitcher.
// Each individual Slimer instance entity has become an individual glitch with a single alt.
</syntaxhighlight>


====AddFromSlimer_StepsToAlts()====
<syntaxhighlight lang="cpp">
bool AddFromSlimer_StepsToAlts(string asSequence)
</syntaxhighlight>
Registers a series of entities as a glitch, using the default settings. The entities are sourced from Slimer. If sequences of entities have been prepared for use in Slimer, this method allows them to be passed easily to Glitcher. Note that the glitch state may override the sequence state and vice versa.
<br>In particular, AddFromSlimer_StepsToAlts() creates glitches with multiple alt entities in each. The Slimer steps in the specified sequence become individual glitches, and the instance entities in each of the steps become the alts.
<br>Returns true if the glitch was successfully added.
#''string asSequence'' - The name of the Slimer sequence to add.
<syntaxhighlight lang="cpp">
// Example:
Glitcher.AddFromSlimer_InstsToSingles("CutsceneSequenceA");
// Each of the entities registered with Slimer for the sequence "CutsceneSequenceA" is now registered with Glitcher.
// Each individual Slimer step has become a glitch with multiple alts.
</syntaxhighlight>


===Resetting/removing glitches===


====ClearGlitches()====
<syntaxhighlight lang="cpp">
void ClearGlitches()
</syntaxhighlight>
Cancels all registered glitches and empties the list. Does not return entities to their original states.
<syntaxhighlight lang="cpp">
// Example:
Glitcher.ClearGlitches();
// All registered glitches are cleared but no entity changes were made.
</syntaxhighlight>


====ResetAll()====
<syntaxhighlight lang="cpp">
void ResetAll(bool abHideAllEnts = false)
</syntaxhighlight>
Cancels all registered glitches and empties the list, and resets intensity variables to their defaults.
<br>Does not return entities to their original states, but if abHideAllEnts is true, all registered entities will be set as inactive. abHideAllEnts is optional and defaults to false if omitted.
#''bool abHideAllEnts'' - If true, all registered glitch entities will be hidden. (Optional, default = false)
<syntaxhighlight lang="cpp">
// Example:
Glitcher.ResetAll(true);
// All registered glitches are cleared, intensity variable are reset, and any entities that were part of a glitch have been hidden.
</syntaxhighlight>


===Intensity===


====SetIntensity()====
<syntaxhighlight lang="cpp">
void SetIntensity(float afIntensity)
void SetIntensity(float afMin, float afMax, float afSanityBias, float afSanityExp = 1.5f)
</syntaxhighlight>
Overrides the intensity range and calculations. If only one float is specified, that will become the actual exact intensity used, with influence from player Sanity.
<br>Optionally, the min, max and sanity bias can be specified. The min and max limit the intensity value by clamping the inverted sanity. Sanity bias defines how much influence player sanity has on the final intensity. If sanity bias is 1, the intensity will be equal to the inverse of sanity clamped to the min and max. If the bias is 0, the intensity will be equal to the mid point of the min and max. The default value for the bias is 0.666.
<br>An optional sanity exponent can also be specified. The default value is 1.5. This is the exponent that is applied to the inverse of sanity, adding a to curve the relationship between sanity and intensity. Higher afSanityExp values mean that when the player sanity is high, the intensity is less changeable but when the player sanity gets low, the glitch intensity will increase more suddenly.
#''float afIntensity or float afMin'' - Either the exact intensity value to used, or the minimum limit of player Sanity to influence intensity.
#''float afMax'' - The the maximum limit of player Sanity to influence intensity. (Optional with afMin and afSanityBias)
#''float afSanityBias'' - The extent (0.0 - 1.0) that player Sanity should influence intensity. (Optional with afMax and afSanityBias, default = 0.666f)
#''float afSanityExp'' - The exponent to apply to Sanity. (0.0 - 1.0) that player Sanity should influence intensity. (Optional with afMin, afMax and afSanityBias, default = 1.5f)
<syntaxhighlight lang="cpp">
// Example 1:
Glitcher.SetIntensity(0.5f);
Glitcher.SetIntensity(0.5f, 0.5f, 0.0f);
// These two lines have the same effect. Intensity is manually set to 50%, regardless of player Sanity.

// Example 2:
Glitcher.SetIntensity(0.0f, 0.5f, 1.0f);
// Intensity is limited between 0% - 50%, and player Sanity has 100% influence. (Sanity exponent is default 1.5f.)
// If Sanity is 100%	Intensity = 0%
// If Sanity is 80%		Intensity = 20%
// If Sanity is 60%		Intensity = 50%
// If Sanity is 40%		Intensity = 50%
// If Sanity is 20%		Intensity = 50%
// If Sanity is 0%		Intensity = 50%

// Example 2:
Glitcher.SetIntensity(0.0f, 0.5f, 0.25f);
// Intensity is limited between 0% - 50%, ''but player Sanity only has 25% influence''. (Sanity exponent is default 1.5f.)
// If Sanity is 100%	Intensity = 19%
// If Sanity is 80%		Intensity = 21%
// If Sanity is 60%		Intensity = 25%
// If Sanity is 40%		Intensity = 35%
// If Sanity is 20%		Intensity = 35%
// If Sanity is 0%		Intensity = 35%

// Example 3:
Glitcher.SetIntensity(0.0f, 0.6f, 1.0f, 0.5f);
// Intensity is limited between 0% - 60%, and player Sanity has 100% influence. ''Sanity exponent is reduced to 0.5f, so intensity rises sharply.''
// If Sanity is 100%	Intensity = 0% 
// If Sanity is 80%		Intensity = 45%  
// If Sanity is 60%		Intensity = 63%
// If Sanity is 40%		Intensity = 78%
// If Sanity is 20%		Intensity = 78%
// If Sanity is 0%		Intensity = 78%
</syntaxhighlight>


====ResetIntensity()====
<syntaxhighlight lang="cpp">
void ResetIntensity()
</syntaxhighlight>
Returns all intensity values to their defaults. (Min = 0.0f, Max = 1.0f, Bias = 0.666f, Exp = 1.5f)
<syntaxhighlight lang="cpp">
// Example:
Glitcher.ResetIntensity();
// Min, max intensity and sanity bias and exponent have been reset.
</syntaxhighlight>


===Querying glitches===


====IsEntGlitching()====
<syntaxhighlight lang="cpp">
bool IsEntGlitching(string asEntity)
</syntaxhighlight>
Returns true if the named entity already exists as one alt in a glitch in the glitch list.
#''string asEntity'' - The entity to check for.
<syntaxhighlight lang="cpp">
// Example:
if (Glitcher.IsEntGlitching("statue_1A")) DoStuff();
// The condition succeeds if the entity "statue_1A" is part of a registered glitch.
</syntaxhighlight>


=cNodeGlitching=
cNodeGlitching is a list node class used by cGlitcher to manage individual glitches. It is '''not recommended''' to work with cNodeGlitching directly. Instead, just use the methods of Glitcher and let it manage them for you.

'''Advanced users''' who intend to access cNodeGlitching instances may find the following information useful.


==Behaviours==
cNodeGlitching has constructors taking an array of entity names, or taking a single entity name. Both have an alternative version with additional args.
<syntaxhighlight lang="cpp">
cNodeGlitching(string asAltName)
cNodeGlitching(string asAltName, float afJitterScale float afChanceScale float afMaxPlayerDist string asGlitchSound)
cNodeGlitching(string[] asAltNames)
cNodeGlitching(string[] asAltNames, float afJitterScale, float afChanceScale, float afMaxPlayerDist, string asGlitchSound)
</syntaxhighlight>


==Properties==
cNodeBobbing has the following properties:


====IsActive====
<syntaxhighlight lang="cpp">
bool IsActive
</syntaxhighlight>
The read-only boolean property IsActive ''updates'' whether the bobber should be active based on the player distance and returns the result.
<br>


====CurrentAltIndex====
<syntaxhighlight lang="cpp">
uint CurrentAltIndex
</syntaxhighlight>
The read-only integer property CurrentAltIndex returns the index of this glitch's current alt entity.
<br>


====CurrentAltName====
<syntaxhighlight lang="cpp">
string CurrentAltName
</syntaxhighlight>
The read-only string property CurrentAltName returns the index of this glitch's current alt entity.
<br>


====AltNames====
<syntaxhighlight lang="cpp">
string[] AltNames
</syntaxhighlight>
The read-only string array property AltNames returns a handle to this glitch's array of alt entity names.
<br>


====NumberOfAlts====
<syntaxhighlight lang="cpp">
uint NumberOfAlts
</syntaxhighlight>
The read-only integer property NumberOfAlts gets the number of alt entities that have been registered to this glitch.
<br>


====JitterDist====
<syntaxhighlight lang="cpp">
float JitterDist
</syntaxhighlight>
The read-only float property JitterDist returns how far the glitch can move on each twitch.
<br>


====ChanceScale====
<syntaxhighlight lang="cpp">
float ChanceScale
</syntaxhighlight>
The read-only float property ChanceScale returns likelihood that this glitch will twitch at each interval.
<br>


====PlayerDistSqr====
<syntaxhighlight lang="cpp">
float PlayerDistSqr
</syntaxhighlight>
The read-only float property PlayerDistSqr returns the square of the maximum player distance to animate this glitch.
<br>



====GlitchSound====
<syntaxhighlight lang="cpp">
string GlitchSound
</syntaxhighlight>
The read-only string property GlitchSound returns the glitch's sound filename.
<br>


===Methods===


====CheckActive()====
<syntaxhighlight lang="cpp">
bool CheckActive()
</syntaxhighlight>
Updates whether the glitcher should be active based on the player distance and returns the result.
<br>


====SelectNextAlt()====
<syntaxhighlight lang="cpp">
uint SelectNextAlt()
</syntaxhighlight>
Selects a alternate entity and assigns it as the current alt. If there is only one alt, no change is made. If there are only two alts, they will alternate (flip-flop). If there are more than two alts, then a random one will be selected. The current alt is excluded so that it won't be chosen twice. (Yes, the definition of "alternate" means that there are two states, so the concept of "alt entities" here is technically erroneous.)
<br>


====DoGlitch()====
<syntaxhighlight lang="cpp">
void DoGlitch(float afIntensity, float afFadeDuration, float afFadeDelay)
</syntaxhighlight>
If a random chance succeeds (based on the intensity and fChanceScale), then this selects a new alt entity and applies the twitch.
#''float afIntensity'' - The current intensity, passed from cGlitcher.
#''float afFadeDuration'' - The current fading time, passed from cGlitcher.
#''float afFadeDelay'' - The current time to wait before fading in, passed from cGlitcher.
<br>


=Miscellaneous=


===Global functions===
"HelperScripts_Glitcher.hps" defines a global timer callback, used by cGlitcher to handle latent entity fading. It is '''not recommended''' to work with these directly. Instead, just use the methods of Glitcher and let it manage them for you.
<syntaxhighlight lang="cpp">
void GlitcherLatentFade(string &in asTimer)
</syntaxhighlight>



__FORCETOC__