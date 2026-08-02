{{TocRight}}
This page documents various extra bits and pieces of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Enums=
''HPL2 Helper Scripts'' defines a number of enumerators. Shared enumerators can be found in "HelperScripts_Enums.hps", but there are also a few special purpose enums in some of the ''features'' scripts.

For users not familiar with enumerators, or enums - an enum is basically a list of text labels that are used as options. Another way to think of it is an integer where some of the numbers also have names. (In fact, that's exactly what it is.)

==Shared enums==

The following enumerators are shared between multiple scripts and purposes, and are defined in "HelperScripts_Enums.hps".

<syntaxhighlight lang="cpp">
enum enumVecType
{
	vecFree,
	vecOrtho,
	vecNormal
}
// Lists options for generating vectors.

enum enumLimitType
{
	limitFree,
	limitClamped,
	limitWrapped
}
// Lists options for limiting a number.

enum enumLengthType
{
	lengthFinal,
	lengthSquared
}
// Lists options for calculating euclidean length.

enum enumAngleUnits
{
	angleRadians,
	angleDegrees
}
// Lists options for angle units.

enum enumOrthoDir
{
	dirNone,
	dirForward,
	dirBackward,
	dirLeft,
	dirRight,
	dirUp,
	dirDown
}
// Lists orthogonal directions in 3d space.

enum enumStringDirection
{
	dirFromStart,
	dirFromEnd
}
// Lists optional directions for searching a string.

enum enumStringCase
{
	caseSensitive,
	caseInsensitive
}
// Lists optional techniques to match a string by letter case.

enum enumStringTrim
{
	trimNone,
	trimStart,
	trimEnd,
	trimAll
}
// Lists options for trimming whitespace from a string.

enum enumVarScope
{
	varLocal,
	varGlobal
}
// Lists the scopes of a save game variable.
</syntaxhighlight>


==Slimer enums==

The following enumerators are used by cSlimer, and are defined in "HelperScripts_Slimer.hps".

<syntaxhighlight lang="cpp">
enum enumSlimerActionType
{
	actionFade,
	actionActivate,
	actionLight,
	actionLamp,
	actionSwingDoor,
	actionMoveObject,
	actionWheel,
	actionLever,
	actionNone
}
// Lists the action types that a Slimer instance can perform.

enum enumSlimerPlayMethod
{
	playRandom,
	playForward,
	playReverse,
	playImmediate
}
// Lists the options for ordering Slimer sequences.

enum enumSlimerQueueMethod
{
	queueAppend,
	queueInsert,
	queueReplace
}
// Lists the options for enqueueing Slimer sequences.

enum enumSlimerCancelMethod
{
	cancelFlush,
	cancelDelete
}
// Lists the options for cancelling a pending Slimer queue.
</syntaxhighlight>


==Fader enums==

The following enumerator is used by cFader, and is defined in "HelperScripts_Fader.hps".

<syntaxhighlight lang="cpp">
enum enumFaderState 
{
	faderStandby,
	faderFadingIn,
	faderPlaying,
	faderFadingOut,
	faderNone
}
// Lists the play-states of a Fader sound.
</syntaxhighlight>

__FORCETOC__