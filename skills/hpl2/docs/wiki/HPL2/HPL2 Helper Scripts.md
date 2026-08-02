{{TocRight}}
=Introduction=
''HPL2 Helper Scripts'' by Aetheric Games is a package of .hps files containing script classes and functions that may be useful to HPL2 modders and custom story creators. It is compatible with ATDD version 1.5 and later.

Would you like to...
<blockquote><small>
...make 500 candles blow out in a big wave? ...make haunted objects hover in the air? ...spawn dozens of random debris objects throughout an area? ...make a particle system move along a spline? ...manage a list of quest objectives? ...compare the distances between entities? ...make puzzles based on position and rotation? ...store an array in a global game variable? ...seamlessly teleport the player into an ''almost'' identical room? ...make a statue that twitches when the player has low sanity?
</small></blockquote>
Well, this script package isn't going to magically do those things for you, but it gives you a ''lot'' of tools to help you do them yourself.

The scripts are divided into two categories: ''utilities'' and ''features''. The ''utilities'' scripts include tools for general scripting, like new maths functions, or linked lists and vector classes. The ''features'' scripts are more specific solutions that make use of the utilities, such as a way to spawn entities at specific locations, script a large chain of events or to make entities twitch and flicker. Some modders might prefer to just adopt the ''utilities'' scripts. It's up to you!

<big>'''[[HPL2/HPL2 Helper Scripts#Set-up|See below for download and set-up instructions.]]'''</big>

=Contents=
The documentation and help is organised by file. '''''Lots of help, and full details of the new classes and functions, can be found on the following pages:'''''
{|
|-
|
==Utilities==
:* [[HPL2/HPL2 Helper Scripts/Debug|<big><big>'''Debug'''</big></big>]]
::Provides more control and options for debug messages and logging.
:* [[HPL2/HPL2 Helper Scripts/GameVars|<big><big>'''GameVars'''</big></big>]]
::Extends the functionality of the saved game global and local variable wrappers.
:* [[HPL2/HPL2 Helper Scripts/Lists|<big><big>'''Lists'''</big></big>]]
::Adds support for linked list classes.
:* [[HPL2/HPL2 Helper Scripts/LoadWatcher|<big><big>'''LoadWatcher'''</big></big>]]
::Provides an "OnLoad()" global function.
:* [[HPL2/HPL2 Helper Scripts/Math|<big><big>'''Math'''</big></big>]]
::Provides extended maths functionality.
:* [[HPL2/HPL2 Helper Scripts/String|<big><big>'''String'''</big></big>]]
::Provides extended string functionality.
:* [[HPL2/HPL2 Helper Scripts/Vectors|<big><big>'''Vectors'''</big></big>]]
::Adds support for vector classes.
||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
==Features==
:* [[HPL2/HPL2 Helper Scripts/Bobber|<big><big>'''Bobber'''</big></big>]]
::Implements a class for floating or hovering entities, without physics.
:* [[HPL2/HPL2 Helper Scripts/Fader|<big><big>'''Fader'''</big></big>]]
::Implements a class for managing global ambient sounds.
:* [[HPL2/HPL2 Helper Scripts/Glitcher|<big><big>'''Glitcher'''</big></big>]]
::Implements a class for managing entities that appear to glitch or flicker.
:* [[HPL2/HPL2 Helper Scripts/Slimer|<big><big>'''Slimer'''</big></big>]]
::Implements a class for managing large sequences of entity actions.
:* [[HPL2/HPL2 Helper Scripts/Spawner|<big><big>'''Spawner'''</big></big>]]
::Implements a class for spawning entities at specific map locations.
:<big><big>&nbsp;</big></big>
::&nbsp;
:* [[HPL2/HPL2 Helper Scripts/Misc|<big><big>'''Miscellaneous'''</big></big>]]
::Bits and pieces that don't fit anywhere else.
|}

=Set-up=
<br>
{{ReqVer|1.5}}<br>
<br>
First, download ''HPL2 Helper Scripts'' from the [https://steamcommunity.com/sharedfiles/filedetails/?id=3101276708 Steam Workshop page] or [https://www.moddb.com/mods/hpl2-helper-scripts ModDb page] and unzip it.

If you get it on Steam Workshop, you'll find the actual folder in your Steam Workshop downloads.

The current version is [[HPL2/HPL2_Helper_Scripts#Version_1.1.2C_03.2F02.2F24|1.1]].

Once you have unzipped the folder, there are three options for how you add it into your mod. '''If you are unsure, just go with option A'''.<br>

===Option A: The full feature-set package===
::If you want to be able to use all the new functions and classes, go with option A.
::#Copy the folder <code>HPL2HelperScripts</code> into your <code>maps</code> folder.
::#Include <code>HelperScripts_FullPackage.hps</code> in your level's <code>.hps</code> script file using the <code>#include</code> directive.
::#Add <code>HelperScriptsUpdate(afStep)</code> to your main <code>OnUpdate()</code> function in your level's <code>.hps</code> script file.
::For example, in <code>myLevel.hps</code>:
::<syntaxhighlight lang="cpp">
#include "HelperScripts_FullPackage.hps"

void OnUpdate(float afStep)
{
    HelperScriptsUpdate(afStep);
}
</syntaxhighlight>

===Option B: The utilities-only package===
::Choose option B if you want to have access to the functions and classes in the ''utilities'' category, but don't need the stuff in the ''features'' category.
::#Copy the folder <code>HPL2HelperScripts</code> into your <code>maps</code> folder.
::#Include <code>HelperScripts_UtilitiesOnly.hps</code> in your level's <code>.hps</code> script file using the <code>#include</code> directive.
::#Add <code>HelperScriptsUpdate(afStep)</code> to your main <code>OnUpdate()</code> function in your level's <code>.hps</code> script file.
::For example, in <code>myLevel.hps</code>:
::<syntaxhighlight lang="cpp">
#include "HelperScripts_UtilitiesOnly.hps"

void OnUpdate(float afStep)
{
    HelperScriptsUpdate(afStep);
}
</syntaxhighlight>

===Option C: Pick-n-mix===
::Advanced modders might prefer to only adopt the specific script files they need. Go nuts! But also be aware of the #include dependencies in each script file, as many of them are interdependent. You might find it easiest to start with option A or B and then remove scripts later that you definitely haven't used. You're also fully allowed and encouraged to just use HPL2HelperScripts as a learning resource or even to just copy snippets here and there.

=Licence and Credits=
You are free to use ''HPL2 Helper Scripts'' in whatever way you see fit, no rights reserved by Aetheric Games. (As long as you're not going against any licence terms between you and Frictional Games, of course!) Aetheric Games is mostly just one person, mrbehemo, me (hello), and this has been a ''stupid'' amount of work, so if you find it helpful then it would be very cool of you to give me a credit in your mod or custom story. You can list it as "HPL2&nbsp;Helper&nbsp;Scripts&nbsp;by&nbsp;Aetheric&nbsp;Games".

This script package would not have been possible without the work of the tireless and patient Luis Rodero of Frictional Games, and the ever present pillar of the community, Mudbill. 

=Support=
''HPL2 Helper Scripts'' is made by mrbehemo of Aetheric Games. If you need support, here's what to do:
#First be sure that you're familar with the official [[HPL2/Engine_Scripts|HPL2 scripting reference]] and the [[HPL2/ScriptReference|community scripting guide]].
#And second, be sure that you've read the relevant parts of this documentation, including the FAQ.
#And then if you're still stuck I'll be happy to hear from you and will help if I can. Come and find me on [https://discord.com/invite/frictionalgames the Frictional Discord server].

=FAQ=
Fervently Anticipated Questions. Nobody's asked anything yet... 
* I've added one or more scripts to my project separately, but I'm getting errors. What should I check?
** The script files are very interdependent. Check the .hps files you've added - they will have #include directives near the top for every other script they rely on. Either make sure you've also added ''those'' into your project.
* What's "#include"? What's "OnUpdate()"?
** Those are new features added with the ATDD [[HPL2/1.5 Update|1.5 update]].
* I want to make something weird happen, like make 100 flying naked guys do a loop-de-loop around the player. How?
** Sounds fun and is probably do-able! Come and find me on [https://discord.com/invite/frictionalgames the Frictional Discord server] if you want advice.
* Can I get the player's camera direction yet?
** No, sorry. I investigated multiple ways of doing that, as have many people over the years. There's just no reliable way of doing it in HPL2 without branching the source code.
* What's a uint and why have you used them everywhere?
** A "U-int" is an unsigned integer, that is, an integer that can only be positive. I think it's best to use uint in scenarios where negative numbers are nonsensical. Behind the scenes it minimises the the chance of conversion issues, and also minimises warnings in the error output.
* Why are all your function arguments passed by reference, and why is that not reflected in the docs?
** In Angelscript there's a tiny, tiny performance saving gained from passing arguments by reference (and by using const where possible). It's not enough of a saving for modders and gameplay scripters to bother with, but since I was writing hundreds of them, it was an easy thing to do. It's not reflected in the docs because most non-advanced modders don't know what "pass by reference" means, or need to know.
* I looked at your code and you did it all weird. Why did you do it weird?
** It's probably because of the version of Angelscript that is integrated into HPL2. It has some surprising versatility but also some surprising limitations.
* Why did you do any of this?
** I know, I know - HPL2 is old now, I should have done this for The Bunker or whatever. Actually, I was just tidying up The Trapdoor (ATDD mod) for a Steam release, and I got carried away with refactoring it... and then, half a million characters of script later, this had happened. Hope it's useful. If not, it was a good exercise for me. Maybe ''you'' would like to port these scripts to HPL3 as and where needed! Go ahead, just be sure to credit and it'd be cool to let me know.

=Change Log=
It should be simple to upgrade existing projects to use the current version, but take note of the changes listed below. You may need to make some minor edits.

==Version 1.1, 03/02/24==
* General
** Changed some more spammy debug messages in level 2 to level 3 in various classes.
** Fixed various sign mismatch warnings between ints and uints.

* Debug
** Default log verbosity is now 2 instead of 3.

* GameVars
** Added SetIntAsUint() method, which is just SetInt() with an explicit cast.

* Lists
** New properties for all list types: DefaultValue, Capacity
** New methods for all list types: Fill(), Extend(), AddUnique(), ToString()
** Fixed silent exception that occured when Insert() was used with index 0.
** Fixed silent exception that occured when Pop() was used with a count of 0 or 1.
** Fixed behaviour of Find() and RemoveItem() in cListGeneric.
** Added '''==''' operator to cListBase for checking if two lists of the same type are equal.
** Added optional argument abExtend to Set() methods.
** Fixed issue with incorrectly overloading Pop(), by moving the generic Pop() from cListBase to its correct place in cListGeneric.

* Math
** New method in cMath: DistToEntity()
** RandomVector3d() and RandomVector2d(), when using the vecNormal option or when no range is specified, now have a chance of returning a vector with negative axes, whereas previously they were always positive.

* String
** New method in cString: NearlyEqual()
** SplitToList() and SplitToArray() now handle empty strings by returning an empty collection. (As to opposed to previously returning a collection of one empty string.)
** Added list behaviour to Str class.

* Vectors
** New methods in cVector: DotProduct(), CrossProduct()
** New methods in cSpline: GetSegmentHandle(), GetMinLength()
** Both cVector and cPoint now implement '''* / *= /=''' operators as ''per component'' multipliers, e.g. [2, 2, 2] * [1, 3, 0.5] = [2, 6, 1]
** If cVector * cVector was previously used where a dot product was the intended result, that should now be replaced by the DotProduct() method.
** Tweaked the bezier behaviour that uses a single control point to better approximate a quadratic bezier.

* Fader
** New methods in cFader: PlayMusicTracked(), StopMusicTracked(), IsMusicPlaying(), DuckStart(), DuckRestore()
** New properties in cFader: IsMusicPlaying, MusicPlayingCount
** Group 0 now counts as "no group".
** Added "Null" behaviour - Fader sounds initialised with a name containing "Null" will not be associated with a sound entity in the map, but they can be included in a group and have a play state as normal.
** Fader sounds can now be marked as StopOnMusic. If Fader.PlayMusic() and Fader.StopMusic() are used, then Fader sounds with StopOnMusic will fade out when music starts.

* Glitcher
** Fixed the afChanceScale multiplier when adding glitches. (Was previously inverted).
** Slightly reduced the default max glitch frequency, for smoother fades.

__FORCETOC__