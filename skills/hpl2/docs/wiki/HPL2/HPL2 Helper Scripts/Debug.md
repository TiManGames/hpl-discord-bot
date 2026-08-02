{{TocRight}}
This page documents "HelperScripts_Debug.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script file "HelperScripts_Debug.hps" provides more control and options for how debug messages are written to the screen and to the log. There are three purposes behind Debug.


===Verbosity===
The first is '''verbosity levels'''. Verbosity means "wordiness". Debug defines three verbosity values that control how much debug information is posted to screen and log files. The modder can control the verbosity level in script, and create lots of debug output whilst only spamming the screen and log when actually needed. The SetVerbosity() method, and the properties VerbosityInLogFile, VerbosityOnScreen and LogInReleaseMode, can be used to set a verbosity level 0-3 for posting messages to the screen in debug mode, to the log in debug mode and to the log in normal mode.
<br>When using Debug's Message() method to post debug messages, they are given a priority level, 1-3, which is checked against the verbosity level. Priority level 1 should be used for errors, warnings and important messages, level 2 for more general, more frequent debug information, and level 3 for very detailed "spammy" debug messages. For example:
<syntaxhighlight lang="cpp">
Debug.VerbosityInLogFile = 2;
Debug.VerbosityOnScreen = 1;
Debug.Message(1, "With the current settings, this will appear onscreen and in the log.");
Debug.Message(2, "With the current settings, this will appear in the log only.");
Debug.Message(3, "With the current settings, this won't appear anywhere.");
</syntaxhighlight>


===New Types and Formatting===
Secondly, Debug provides methods to pass multiple '''new argument types'''. As well as composing messages from strings, ints, etc., you can also pass arrays, lists, vectors, or make use of the String.Format() method and Str class.


===Performance===
And thirdly, Debug allow modders to include complex debug messages whilst '''computing strings in debug mode only'''. For example, sometimes it's useful to have complex debug messages incorporating lots of variables. Compare these two lines of script:
<syntaxhighlight lang="cpp">
// Example 1 - The basic way:
AddDebugMessage("A grunt has arrived, grunt number: " + gruntNum, true);
AddDebugMessage("Grunt number " + gruntNum + " has touched area " + triggerName + "!", true);
// Example 2 - The Helper Scripts way:
Debug.Message(3, "A grunt has arrived, grunt number", gruntNum);
Debug.Message(3, "Grunt number {0} has touched area {1}!", Str(gruntNum), Str(triggerName));
</syntaxhighlight>
Both examples give the same output, visually. In example 1, the work to compose the final string happens at the point of calling AddDebugMessage(), ''regardless of whether debug mode is active or not''. That's not a big deal if it's not used often, but processing a lot of complex debug messages can have a performance impact even while the player is playing the game outside of debug mode. In example 2, Debug provides methods to pass the parts of the string as individual arguments, and the string computation only takes place if the message will actually be posted to the screen or log file. This doesn't improve performance in debug mode, but if a lot of complex debug messages are used then it will improve performance in normal play mode.


=Debug=


==Behaviours==
"HelperScripts_Debug.hps" declares an object called '''Debug''', of the new script class cDebug. To access its properties and methods, just use "Debug." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
Debug.Message(1, "this is an error message!");
Debug.LogInReleaseMode = false;
</syntaxhighlight>


==Properties==
Debug provides the following properties:


====VerbosityInLogFile====
<syntaxhighlight lang="cpp">
uint VerbosityInLogFile
</syntaxhighlight>
The integer property VerbosityInLogFile can get or set the minimum priority for Debug messages printed to the log file. (See also: SetVerbosity())
<syntaxhighlight lang="cpp">
// Example:
Debug.VerbosityInLogFile = 3;
</syntaxhighlight>


====VerbosityOnScreen====
<syntaxhighlight lang="cpp">
uint VerbosityOnScreen
</syntaxhighlight>
The integer property VerbosityOnScreen can get or set the minimum priority for Debug messages shown on-screen. (See also: SetVerbosity())
<syntaxhighlight lang="cpp">
// Example:
Debug.VerbosityOnScreen = 1;
</syntaxhighlight>


====LogInReleaseMode====
<syntaxhighlight lang="cpp">
bool LogInReleaseMode
</syntaxhighlight>
The bool property LogInReleaseMode can get or set whether to print debug messages to the log file even when debug mode is off. If set to true, the same priority as VerbosityInLogFile is used. (See also: SetVerbosity())
<syntaxhighlight lang="cpp">
// Example:
Debug.LogInReleaseMode = true;
</syntaxhighlight>


====CheckForDuplicates====
<syntaxhighlight lang="cpp">
bool CheckForDuplicates
</syntaxhighlight>
The bool property CheckForDuplicates can get or set whether on-screen messages are checked for duplicates. This is the same as the abCheckForDuplicates argument in the global function AddDebugMessage(). The default is false because, using Debug, the modder can use verbosity levels to control spamming instead.
<syntaxhighlight lang="cpp">
// Example:
Debug.CheckForDuplicates = true;
</syntaxhighlight>


==Methods==
Debug provides the following methods:


====SetVerbosity()====
<syntaxhighlight lang="cpp">
void SetVerbosity(uint aulOnScreen, uint aulLogAlways, uint aulLogDebug)
</syntaxhighlight>
Changes the verbosity limits at runtime. They are not saved, so they will reset to default on level load. (See also: VerbosityInLogFile, VerbosityOnScreen and LogInReleaseMode properties)
#''uint aulOnScreen'' - The new minimum priority for Debug messages shown on-screen.
#''uint aulLogAlways'' - The new minimum priority for Debug messages printed to the log file when debug mode is off.
#''uint aulLogDebug'' - The new minimum priority for Debug messages printed to the log file when debug mode is on.
<syntaxhighlight lang="cpp">
// Example:
Debug.SetVerbosity(0, 1, 3);
</syntaxhighlight>


====TestPriority()====
<syntaxhighlight lang="cpp">
bool TestPriority(uint aulPrio)
</syntaxhighlight>
Returns true if a message of the given priority would be posted at all.
#''uint aulPrio'' - The priority level to be tested.
<syntaxhighlight lang="cpp">
// Example:
if (Debug.TestPriority(3))
{
    // Do some fancy debug stuff.
}
</syntaxhighlight>


===Message()===
<br>Message() can be used to post a debug message to the log and/or screen. It is intended as a replacement for AddDebugMessage() and Print().
<br>There are multiple overloads of Message() that allow for different types of arguments. In each case the string computation only happens if the message will actually be posted.
<br>alPrio represents the importance of your message, 1-3. alPrio is checked against the relevant verbosity limit. In general, use priority level 1 for errors, warnings and important messages, level 2 for more general, more frequent debug information, and level 3 for very detailed "spammy" debug messages.


====Basic message====
<syntaxhighlight lang="cpp">
void Message(const alPrio, string asText)
</syntaxhighlight>
Posts a debug message to the log and/or screen. alPrio is optional and defaults to 1 if omitted.
#''uint alPrio'' - An integer specifying the priority of the message, 1-3 (rare/important-to-verbose/spam). '''(Optional, default = 1)'''
#''string asText'' - The text of the message.
<syntaxhighlight lang="cpp">
// Example:
Debug.Message(3, "Something has happened."); // Priority 3.
Debug.Message("Something else has happened."); // Priority 1.
</syntaxhighlight>


====Message appended with a variable====
<syntaxhighlight lang="cpp">
void Message(uint alPrio, string asText, string arg)
void Message(uint alPrio, string asText, uint arg)
void Message(uint alPrio, string asText, int arg)
void Message(uint alPrio, string asText, float arg)
void Message(uint alPrio, string asText, double arg)
void Message(uint alPrio, string asText, bool arg)
void Message(uint alPrio, string asText, cVector arg)
void Message(uint alPrio, string asText, cPoint arg)
void Message(uint alPrio, string asText, cRotator arg)
void Message(uint alPrio, string asText, cBezier arg)
void Message(uint alPrio, string asText, cSpline arg)
</syntaxhighlight>
Appends a single variable to the debug message, evaluating the arguments only if the message will be posted. alPrio is optional and defaults to 1 if omitted.
#''uint alPrio'' - An integer specifying the priority of the message, 1-3 (rare/important-to-verbose/spam). '''(Optional, default = 1)'''
#''string asText'' - The text of the message, to be appended to.
#''string arg, uint arg, int arg, float arg, double arg, bool arg, cVector arg, cPoint arg, cBezier arg, or cSpline arg'' - A variable to be appended to the message.
<syntaxhighlight lang="cpp">
// Example:
bool bSpookyZone = true;
Debug.Message(2, "Player is in spooky zone", bSpookyZone);
// outputs "Player is in spooky zone: true" at verbosity level 2
</syntaxhighlight>


====Message appended with a list====
<syntaxhighlight lang="cpp">
void Message(uint alPrio, string asText, cListBase ahList)
</syntaxhighlight>
Appends a [[HPL2/HPL2_Helper_Scripts/Lists|list]] object to the message. The list is only evaluated if the message will actually be posted. Any derived list class can be used, including cListInt, cListFloat, cListBool, etc.. Uses the ToStringArray() function of the list, which is turn uses the ToString() function of the relevant node class. alPrio is optional and defaults to 1 if omitted.
#''uint alPrio'' - An integer specifying the priority of the message, 1-3 (rare/important-to-verbose/spam).  '''(Optional, default = 1)'''
#''string asText'' - The text of the message.
#''cListBase ahList'' - A reference to a list class that will be appended to the message.
<syntaxhighlight lang="cpp">
// Example:
cListFloat myFloats;
myFloats.Add(11.1f);
myFloats.Add(2.22f);
Debug.Message(3, "Let's print some floats", myFloats);
// outputs "Let's print some floats: [11.1], [2.22]" at verbosity level 3
</syntaxhighlight>


====Message appended with an array====
<syntaxhighlight lang="cpp">
void Message(uint alPrio, string asText, int[] alArray)
void Message(uint alPrio, string asText, float[] afArray)
void Message(uint alPrio, string asText, double[] adArray)
void Message(uint alPrio, string asText, bool[] abArray)
void Message(uint alPrio, string asText, string[] asArray)
</syntaxhighlight>
Appends an array of values to the message. The array is only evaluated if the message will actually be posted. alPrio is optional and defaults to 1 if omitted.
#''alPrio'' - An integer specifying the priority of the message, 1-3 (rare/important-to-verbose/spam). '''(Optional, default = 1)'''
#''asText'' - The text of the message.
#''int[] alArray, float[] afArray, double[] adArray, bool[] abArray, or string[] asArray'' - A reference to a list that will be appended to the message.
<syntaxhighlight lang="cpp">
// Example:
string[] someWords = { "good", "boy", "Daniel" };
Debug.Message(1, "You're a", someWords);
// outputs "You're a: [good], [boy], [Daniel]" at verbosity level 1
</syntaxhighlight>


====Message with string formatting====
<syntaxhighlight lang="cpp">
void Message(const alPrio, Str@[] argArray)
void Message(uint alPrio, Str arg0, Str arg1, ... Str arg7);
</syntaxhighlight>
The most versatile overload of Message(). The debug message is a string in which tokens like "{i}" have been replaced, where i is the index of the additional arguments, starting from zero.
<br>This uses the String.Format() method, allowing an arbitrary number of variables to be inserted into a string, using the Str class, regardless of data type. The Str class is just a container for a variable that can be turned into a string. In other languages we might use a template or a loosely typed variable.
<br>When using the array version, the Str arguments can be provided as Str@[] - an array of ''handles''. Be sure to declare an array of Str handles (Str@[]) rather than an array of Str instances (Str[]). See Example 3. ('''Advanced users''' may note that Angelscript handles work similarly reference parameters, or pointers in C++.)
#''alPrio'' - An integer specifying the priority of the message, 1-3 (rare/important-to-verbose/spam). '''(Optional, default = 1)'''
#''asText'' - The text of the message as a template containing tokens ("{i}") to be replaced by the other arguments.
#''Str@[] argArray, or Str arg0'' - An array of Str handles, or a single Str instance, to replace tokens in the string.
#''Str arg1 ... Str arg7'' - An additional 7 single Str arguments can be given. '''(Optional, when not using an array.)'''
<syntaxhighlight lang="cpp">
// Example 1:
string sPlayerName = "Justine";
string sSuitorName = "Basile";
int lScore = 7;
int lScoreMax = 10;
Debug.Message(1, "{0} has been given {1}/{2} by {3}!", Str(sSuitorName), Str(lScore), Str(lScoreMax), Str(sPlayerName));
// Outputs "Basile has been given 7/10 by Justine!"

// Example 2:
int lNumMonsters = 13;
string sMonsterType = "ManPig";
Debug.Message(1, "Error: Too many {3}s! {0} out of {1} found. Pork = {2}!", Str(lNumMonsters), Str(12), Str(lNumMonsters > 12), Str(sMonsterType));
// Outputs "Error: Too many ManPigs! 13 out of 12 found. Pork = true!"
// Note that the numbers match the order of the args, not the order of insertion.

// Example 3:
Str@[] someArgs(2);
someArgs[0] = Str("strange");
someArgs[1] = Str("unnartural");
Debug.Message(3, "The darkness in the Storage feels {0} and {1}.", someArgs);
// Outputs "The darkness in the Storage feels strange and unnatural."
// Note the syntax for declaring the array: "Str@[]"
</syntaxhighlight>

__FORCETOC__