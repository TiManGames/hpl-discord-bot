{{TocRight}}
This page documents "HelperScripts_String.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].

=Summary=

The script file "HelperScripts_String.hps" provides some extended maths functionality for modders. The new String class contains additional string functions, including replacement, sequence generation and more.

Despite the name, this is not a string class itself, and does not contain text or replace the "string" type. String should be used similarly to Math, as a library of functions. For example:
<syntaxhighlight lang="cpp">
string welcomeText = "I bid you welcome to my cabinet of perturbation.";
string cabinetType = "liquor";
welcomeText = String.ReplaceAll(welcomeText, "perturbation", cabinetType);
</syntaxhighlight>

"HelperScripts_String.hps" also defines the Str class. The Str class is intended to provide something like a template parameter, or a loosely typed variable, for string formatting.

=String=


==Behaviours==
"HelperScripts_String.hps" script declares an object called '''String''', of the new script class cString. To access its methods, just use "String." followed by the function call. E.g.:
<syntaxhighlight lang="cpp">
String.Replace("catfish", "cat", "dog");
</syntaxhighlight>

==Properties==
String has no public properties. 

==Methods==

===Length===
String provides the following methods for working with string sizes:

====IsEmpty()====
<syntaxhighlight lang="cpp">
bool IsEmpty(string asString, enumStringTrim aTrimOption = trimNone)
</syntaxhighlight>
Returns true if the string is empty ("").
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone (default), only the length of the string will be considered. With any other trim option, whitespace and control characters will be not be counted. E.g. " " would count as empty if a trim option other than trimNone was used.
#''string asString'' - The string to check if empty.
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd or trimAll. (Optional, default = trimNone)
<syntaxhighlight lang="cpp">
// Example:
bool bA = String.IsEmpty(" ");
bool bB = String.IsEmpty(" ", trimAll);
// bA is assigned false. bB is assigned true, as the empty space is not counted.
</syntaxhighlight>

====Length()====
<syntaxhighlight lang="cpp">
uint Length(string asString, enumStringTrim aTrimOption = trimNone)
</syntaxhighlight>
Returns the number of characters in the string.
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone (default), only the length of the string will be considered. This is the same as asString.length(). With any other trim option, whitespace and control characters will be not be counted. E.g. " " would count as empty if a trim option other than trimNone was used.
#''string asString'' - The string to check the length of.
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimNone)
<syntaxhighlight lang="cpp">
// Example 1:
int lA = String.Length(" words words words   ");
int lB = String.Length(" words words words   ", trimEnd);
int lC = String.Length(" words words words   ", trimAll);
// lA becomes 21, lB becomes 18 and lC becomes 17.

// Example 2:
while (sSleepy.Length() < 20) sSleepy += "z";
// The while loop continues until the string is at least 20 characters long.
</syntaxhighlight>

====Trim()====
<syntaxhighlight lang="cpp">
string Trim(string &in asString, enumStringTrim aTrimOption = trimAll)
</syntaxhighlight>
Removes whitespace and control characters from the beginning and end of a string. (Only works with ASCII, not full Unicode.)
<br> aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone, the string will not be trimmed. With trimStart, whitespace and control characters will be removed from the start of the string. With trimEnd, whitespace and control characters will be removed from the end of the string. With trimAll (default), whitespace and control characters will be removed from both ends of the string.
#''string asString'' - The string to trim.
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimAll)
<syntaxhighlight lang="cpp">
// Example:
string sSpooky = "  sppoooky  ";
sSpooky = String.Trim(aSpooky, trimStart);
// The initial spaces have been removed. sSpooky now equals "sppoooky  ".
sSpooky = String.Trim(aSpooky);
// Now the trailing spaces have been removed too. sSpooky now equals "spoooky".
</syntaxhighlight>

===Parsing===
String provides the following methods for parsing strings:

====ToInt()====
<syntaxhighlight lang="cpp">
int ToInt(string asString)
</syntaxhighlight>
If possible, returns an integer converted from a string, else returns 0. This is the same as the normal global function StringToInt(), but is included here for consistency.

====ToFloat()====
<syntaxhighlight lang="cpp">
float ToFloat(string asString)
</syntaxhighlight>
If possible, returns a float converted from a string, else returns 0.0f. This is the same as the normal global function StringToFloat(), but is included here for consistency.


====ToBool()====
<syntaxhighlight lang="cpp">
bool ToBool(string asString)
</syntaxhighlight>
If possible, returns a boolean converted from a string, else returns false. This is the same as the normal global function StringToBool(), but is included here for consistency.


===Characters===
String provides the following miscellaneous methods for working with character codes:


====CharToString()====
<syntaxhighlight lang="cpp">
string CharToString(uint8 auiChar)
</syntaxhighlight>
Given an ASCII character code, this returns a string containing that single character. (Only works with ASCII, not full Unicode.)
#''uint8 auiChar'' - An ASCII character code to be converted to a string.
<syntaxhighlight lang="cpp">
// Example 1:
string sSymbols = String.CharToString(126) + String.CharToString(64) + String.CharToString(63);
// sSymbols now says "~@?".
</syntaxhighlight>


====StringToChar()====
<syntaxhighlight lang="cpp">
uint8 StringToChar(string asSingleChar)
</syntaxhighlight>
Given a single character string, this returns that character as an ASCII code. If the string is empty then 0 is returned (null character). If the string is longer than one character, the rest are ignored. (Only works with ASCII, not full Unicode.)
#''string asSingleChar'' - A string containing a character to be converted to a character code.
<syntaxhighlight lang="cpp">
// Example:
uint8 uiCharacter = String.StringToChar(sSomeText);
if (uiCharacter >= 48 && ul8Character <= 57) DoStuff();
// The condition succeeds if the first character of sSomeText is a numeric digit (ASCII codes 48-57).
</syntaxhighlight>


====CharArrayToString()====
<syntaxhighlight lang="cpp">
string CharArrayToString(uint8[] ausCharArray, enumStringTrim aTrimOption = trimNone)
</syntaxhighlight>
Given an array of ASCII codes, this returns those character joined into a string. (Only works with ASCII, not full Unicode.)
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone (default), any whitespace or control characters in the array will be included. With trimStart, any whitespace or control characters at the start of the array will be excluded. With trimEnd, any whitespace or control characters at the end of the array will be excluded. With trimAll, any whitespace or control characters at either end of the array will be excluded.
#''uint8[] ausCharArray'' - An array of ASCII character codes (unsigned 8bit ints), to be joined.
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimNone)
See StringToCharArray() for an example.<br>


====StringToCharArray()====
<syntaxhighlight lang="cpp">
uint8[] StringToCharArray(string asString, enumStringTrim aTrimOption = trimNone)
</syntaxhighlight>
Given a string, this splits the string and returns it as an array of ASCII codes. (Only works with ASCII, not full Unicode.)
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone (default), any whitespace or control characters in the string will be included. With trimStart, any whitespace or control characters at the start of the string will be excluded. With trimEnd, any whitespace or control characters at the end of the string will be excluded. With trimAll, any whitespace or control characters at either end of the string will be excluded.
#''string asString'' - A string to be split.
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimNone)
<syntaxhighlight lang="cpp">
// Example:
string Rot13(string asInput)
{
	uint8[] chars = String.StringToCharArray(asInput, trimAll);
	for (uint i = 0; i < chars.length(); i++)
	{
		if (chars[i] >= 65 && chars[i] <= 90 || chars[i] >= 141 && chars[i] <= 172)
		{
			chars[i] += 13;
			if (chars[i] > 90 && chars[i] < 141 || chars[i] > 172) 
			{
				chars[i] -= 26;
			}
		}
	}
	return String.CharArrayToString(chars );
}
// This example is a whole Rot13 function. The string arg asInput is broken into an array of chars. Any char that is a upper or lower case alphabet letter is moved 13 characters. Then the char array is made back into a string and returned.
</syntaxhighlight>


===Case===
String provides the following methods for changing the case of a string:


====ToUpper()====
<syntaxhighlight lang="cpp">
string ToUpper(string asString)
uint8 ToUpper(uint8 auiChar)
</syntaxhighlight>
Given a string or a character code, this returns the character(s) as upper case. If any character is a lower case letter, it will be swapped for upper case. Otherwise they are unchanged. (Only works with ASCII, not full Unicode.)
#''string asString, uint8 auiChar'' - A string or a single character code to be changed to upper case.
<syntaxhighlight lang="cpp">
// Example 1:
string sUpper = String.ToUpper("Dark Descent");
// sUpper is assigned "DARK DESCENT".

// Example 2:
if (String.ToUpper(sSomeTextA) == String.ToUpper(sSomeTextB))
// The condition succeeds if sSomeTextA and sSomeTextB are equal, regardless of their capitalisation.
</syntaxhighlight>


====ToLower()====
<syntaxhighlight lang="cpp">
string ToLower(string asString)
uint8 ToLower(uint8 auiChar)
</syntaxhighlight>
Given a string or a character code, this returns the character(s) as lower case. If any character is a upper case letter, it will be swapped for lower case. Otherwise they are unchanged. (Only works with ASCII, not full Unicode.)
#''string asString, uint8 auiChar'' - A string or a single character code to be changed to lower case.
<syntaxhighlight lang="cpp">
// Example:
string sLower = String.ToLower("Dark Descent");
// sLower is assigned "dark descent".
</syntaxhighlight>


===Searching===
String provides the following methods for changing the case of a string:


====Contains()====
<syntaxhighlight lang="cpp">
bool Contains(string asString, string asSubString)
</syntaxhighlight>
Returns true if asSubString can be found in asString. This is the same as the normal global function StringContains(), but is included in String for consistency.
#''string asString'' - The string to search within.
#''string asSubString'' - The string to search for.
<syntaxhighlight lang="cpp">
// Example:
if (String.Contains(sCurrentObjective, "thalers");
// The condition succeeds if the string sCurrentObjective contains the substring "thalers".
</syntaxhighlight>


====Find()====
<syntaxhighlight lang="cpp">
int Find(string asString, string asSubString, enumStringCase aCaseOption = caseSensitive, enumStringDirection aDirOption = dirFromStart)
</syntaxhighlight>
Searches for a substring within a string, and the returns the index of the first character of the first instance of the substring.
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the substring must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
<br>aDirOption can be omitted, or optionally can be either dirFromStart, or dirFromEnd. With dirFromStart (default), the string is searched from the left, and the index returned is the first instance. With dirFromEnd, the string is searched from the right, and the index returned is the last instance.
#''string asString'' - The string to search within.
#''string asSubString'' - The string to search for.
#''enumStringCase aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
#''enumStringDirection aDirOption'' - dirFromStart or dirFromEnd. (Optional, default = dirFromStart)
<syntaxhighlight lang="cpp">
// Example:
int lA = String.Find("Grunt", "run");
int lB = String.Find("Agrippa", "RIP", caseInsensitive);
int lC = String.Find("Herbert", "er");
int lD = String.Find("Herbert", "er", dirFromEnd);
// lA is assigned 1. lB is assigned 2.
// lC is assigned 1, but searching from the end lD is assigned 4.
</syntaxhighlight>


====NearlyEqual()====
<syntaxhighlight lang="cpp">
bool NearlyEqual(string asA, string asB, uint aulErrors = 0, enumStringCase aCaseOption = caseInsensitive, enumStringTrim aTrimOption = trimAll)
</syntaxhighlight>
Compares two strings and returns true if they are the almost identical, with options for ignoring case and/or leading and trailing whitespace.
<br>The argument aulErrors defines how many characters are allowed to be different for the strings to considered "nearly equal". If omitted, zero errors are allowed. Errors are counted 'after' any trimming takes place.
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the substring must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
<br> aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone, the string will not be trimmed. With trimStart, whitespace and control characters will be removed from the start of the string. With trimEnd, whitespace and control characters will be removed from the end of the string. With trimAll (default), whitespace and control characters will be removed from both ends of the string.
#''string asA'' - The first string to compare.
#''string asB'' - The second string to compare.
#''uint aulErrors'' - How many characters are allowed to not match, after trimming. (Optional, default = 0)
#''enumStringCase aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimAll)
<syntaxhighlight lang="cpp">
// Example:
if (asPasswordGuess == sPasswordAnswer) OpenDoor();
else if (String.NearlyEqual(asPasswordGuess, sPasswordAnswer, 1, caseInsensitive)) GiveHint();
</syntaxhighlight>


===Substrings===
String provides the following methods for working with parts of strings:


====Sub()====
<syntaxhighlight lang="cpp">
string Sub(string asString, uint aulStart, uint aulCount)
string Sub(string asString, uint aulStart)
</syntaxhighlight>
Returns part of a string. This is the same as the normal global function StringSub(), except that aulCount can be omitted. If aulCount is specified, the substring returned starts at aulStart and proceeds for aulCount characters. If aulCount is omitted then the substring starts at aulStart and proceeds to the end of the original string.
#''string asString'' - The string to get the substring from.
#''uint aulStart'' - The index of the character that is the start of the substring.
#''uint aulCount'' - The number of characters in the substring. (Optional, default = the remaining length of the string)
<syntaxhighlight lang="cpp">
// Example:
string sA = String.Sub("grunt", 1, 3);
string sB = String.Sub("grunt", 1);
// sA is assigned "run". sB is assigned "runt".
</syntaxhighlight>


====Replace()====
<syntaxhighlight lang="cpp">
string Replace(string asString, string asFind, string asReplace, enumStringCase aCaseOption = caseSensitive, enumStringDirection aDirOption = dirFromStart)
</syntaxhighlight>
Searches through a string and if it finds an instance of a given substring, it replaces it with another. Replace() replaces the first instance found. To replace all instances, consider ReplaceAll().
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the substring must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
<br> aDirOption can be omitted, or optionally can be either dirFromStart, or dirFromEnd. With dirFromStart (default), the string is searched from the left, and the index returned is the first instance. With dirFromEnd, the string is searched from the right, and the index returned is the last instance.
#''string asString'' - The string to search within.
#''string asFind'' - The string to search for.
#''asReplace'' - The string that will replace asFind if it is found.
#''enumStringCase aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
#''enumStringDirection aDirOption'' - dirFromStart or dirFromEnd. (Optional, default = dirFromStart)
<syntaxhighlight lang="cpp">
// Example:
string sMyStringA = "catfish catfood";
string sMyStringB = String.Replace(sMyStringA, "cat", "dog");
string sMyStringC = String.Replace(sMyStringA, "cat", "dog", dirFromEnd);
// sMyStringB becomes "dogfish catfood". sMyStringC becomes "catfish dogfood".
</syntaxhighlight>


====ReplaceAll()====
<syntaxhighlight lang="cpp">
string ReplaceAll(string asString, string asFind, string asReplace, enumStringCase aCaseOption = caseSensitive)
</syntaxhighlight>
Searches through a string and replaces all instances of a substring with another. To avoid an infinite loop, asReplace can't contain a match to asFind it would. Consider using Replace() instead.
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the substring must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
#''string asString'' - The string to search within.
#''string asFind'' - The string to search for.
#''asReplace'' - The string that will replace asFind if it is found.
#''aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
<syntaxhighlight lang="cpp">
// Example:
string sMyStringA = "catfish catfood";
string sMyStringB = String.ReplaceAll(sMyStringA, "cat", "dog");
// sMyStringB becomes "dogfish dogfood".
</syntaxhighlight>


====Format()====
<syntaxhighlight lang="cpp">
string Format(string asString, Str[] argArray)
string Format(string asString, Str arg0, Str arg1, ... Str arg7)
</syntaxhighlight>
A minimal version of the string formatting methods found in other languages. It doesn't provide number formating options, but it does allow an arbirtrary number of variables to be inserted into a string, regardless of data type, using the Str class. The Str class is just a container for a variable that can be turned into a string. In other languages we might use a template or a loosely typed variable. This is the method used by the cDebug class.
<br>Format() returns a string in which tokens like "{i}" have been replaced, where i is the index of the additional arguments, starting from zero. If an argument is supplied but the text doesn't contain a corresponding token, then the argument won't be included. If the text contains a token but not corresponding argument is supplied, then the token will remain in the output text.
<br>Up to eight individual Str arguments can be provides, or an array of Str. (Unfortunately, anonymous arrays as arguments are not supported, so the array must be declared.)
#''string asString'' - A template string containing tokens ("{i}") to be replaced by the other arguments.
#''argArray or arg0'' - An array of Str instances, or a single Str instance, to replace tokens in the string.
#''arg1 - arg7'' - If not using an array, an additional 7 single Str arguments can be optionally given.
<syntaxhighlight lang="cpp">
// Example 1:
string sNewString = String.Format("I got {0} problems but this script ain't {1}.", Str(99), Str("one"));
// sNewString is assigned "I got 99 problems but this script ain't one."

// Example 2:
Str[] myArray = { Str("Daniel"), Str("London"), Str("Mayfair") };
string myOutput = String.Format("My name is {0}, I live in {1} at... at... {2}...", myArray);
// myOutput becomes "My name is Daniel, I live in London at... at... Mayfair..."
</syntaxhighlight>


===Arrays and lists===
String provides the following methods for splitting and joining collections of strings:


====Join()====
<syntaxhighlight lang="cpp">
string Join(string[] asStringArray, string asSeparator = "", enumStringTrim aTrimOption = trimAll)
string Join(cListBase asGenericList, string asSeparator = "", enumStringTrim aTrimOption = trimAll)
</syntaxhighlight>
Given a collection of strings, this returns them joined into a single string. The collection can be a string array (string[]), a list of strings (cListString), or any type other type of list. (The ToStringArray() method of the cListBase class is used, which in turn calls the ToString() method of each node. For most list classes this will return valid strings, but if the instanced list is itself cListBase or cListGeneric, empty strings will be returned.)
<br>Optionally, a separator string can be included, which will be inserted between each item. If omitted, asSeparator defaults to "" - i.e., no separator. Example uses could be " " or "_".
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone, the strings in the array will not be trimmed. With trimStart, whitespace will be removed from the start of the strings before they are joined. With trimEnd, whitespace will be removed from the end of the strings before they are joined. With trimAll (default), whiltespace will be removed from both ends of the strings before they are joined. Additionally any empty strings will be ignored unless trimNone is used.
#''string[] asStringArray, cListString asListString'' - An array of strings, a list of strings, or any other list type that can output strings, to be joined.
#''stromg asSeparator'' - A substring to insert between each joined string. (Optional, default = "")
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, trimAll. (Optional, default = trimAll)
<syntaxhighlight lang="cpp">
// Example 1:
float[] fNumbers = { 2.33f, 3.44f, 4.55f, 5.66f };
string sNumberText = String.Join(fNumbers, " >> ");
// sNumberText will read "2.33 >> 3.44 >> 4.55 >> 5.66".

// Example 2:
cListString sJumble = String.Join(String.SplitToList("The Inner Sanctum, my most precious chamber, Daniel.").Shuffle(), " ");
// sJumble becomes the words of the string, in a random order. First the string is split into a list of strings, the list's Shuffle() method is called, and the result is passed to Join().
</syntaxhighlight>


====SplitToList()====
<syntaxhighlight lang="cpp">
cListString SplitToList(string asString, string asDelimiter = " ", enumStringCase aCaseOption = caseSensitive, enumStringTrim aTrimOption = trimAll)
</syntaxhighlight>
Given a string and a substring to use as a delimiter, this returns the string split up into a list of substrings. If the delimiter is omitted then it defaults to " " - a single space, so the returned list contains the individual words in the string.
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the substring must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone, strings in the resulting list will not be trimmed. With trimStart, whitespace will be removed from the start of the strings in the resulting list. With trimEnd, whitespace will be removed from the end of the strings in the resulting list. With trimAll (default), whiltespace will be removed from both ends of the strings in the resulting array. Additionally any empty strings will be ignored unless trimNone is used.
#''string asString'' - A string to be split into a list.
#''string asDelimiter'' - A substring to search for in asString, for the boundary of each split. (Optional, default = " ")
#''enumStringCase aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
#''enumStringTrim aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimAll)
<syntaxhighlight lang="cpp">
// Example:
cListString myListA = String.SplitToList("cat_dog_catfish_dogfish", "_");
cListString myListB = String.SplitToList("cat_dog_catfish_dogfish", "_Dog");
cListString myListC = String.SplitToList("cat_dog_catfish_dogfish", "_Dog", caseInsensitive);
// myListA is created with the items "cat", "dog", "catfish" and "dogfish".
// myListB is created with the no items, as the delimiter is not found with the defaul caseSensitive option.
// myListC is created with the items "cat", "_catfish" and "fish".
</syntaxhighlight>


====SplitToArray()====
<syntaxhighlight lang="cpp">
string[] SplitToArray(string asString, string asDelimiter = " ", enumStringCase aCaseOption = caseSensitive, enumStringTrim aTrimOption = trimAll)
</syntaxhighlight>
Given a string and a substring to use as a delimiter, this returns the string split up into an array of substrings. If the delimiter is omitted then it defaults to " " - a single space, so the returned array contains the individual words in the string. Consider also: SplitToList().
<br>aCaseOption can be omitted, or optionally can be either caseSensitive, or caseInsensitive. With caseSensitive (default), the delimiter must match exactly, including the case. With caseInsensitive, the capitalisation does not matter. (E.g. "Foobar" matches with "fooBar").
<br>aTrimOption can be omitted, or optionally can be either trimNone, trimStart, trimEnd or trimAll. With trimNone, strings in the resulting array will not be trimmed. With trimStart, whitespace will be removed from the start of the strings in the resulting array. With trimEnd, whitespace will be removed from the end of the strings in the resulting array. With trimAll (default), whiltespace will be removed from both ends of the strings in the resulting array. Additionally any empty strings will be ignored unless trimNone is used.
<br>(The max length of the array is 256, but advanced users could edit that if needed.)
#''string asString'' - A string to be split into an array.
#''asDelimiter'' - A substring to search for in asString, for the boundary of each split. (Optional, default = " ")
#''aCaseOption'' - caseSensitive or caseInsensitive. (Optional, default = caseSensitive)
#''aTrimOption'' - trimNone, trimStart, trimEnd, or trimAll. (Optional, default = trimAll)
For an example, see SplitToList()<br>


===Sequences===
String provides the following methods for working with numbered string sequences:


====StringRange()====
<syntaxhighlight lang="cpp">
string[] StringRange(string asPrefix, uint alRangeFirst, uint alRangeLast, string asSuffix)
string[] StringRange(string asPrefix, string asRangeFirst, string asRangeLast, string asSuffix)
</syntaxhighlight>
Returns an array of strings where each string in the array is made up of a prefix, followed by an iterator from given range, and then a suffix. The prefix and/or suffix can be "".
<br>Accepts the iterator range as either integers or characters, expressed as an inclusive min and inclusive max. Any integers or any ASCII characters could be used, as long as the min/first is less than the max/last.
#''string asPrefix'' - A string to add at the start of the output strings.
#''int alRangeFirst, string asRangeFirst'' - An integer or a single character string for the start of the iteration. (inclusive).
#''int alRangeLast, string asRangeLast'' - An integer or a single character string for the end of the interation (inclusive).
#''string asSuffix'' - A string to add at the end of the output strings.
<syntaxhighlight lang="cpp">
// Example 1:
string[] sDoorNames = String.StringRange("door", 2, 5);
for (uint i = 0; i < sDoorNames.length(); i++) SetSwingDoorLocked(sDoorNames, true, true);
// Creates an array of strings containing "door2", "door3", "door4" and "door5", and passes each of them to SetSwingDoorLocked().

// Example 2:
string[] sStuffAndJunk = StringRange("stuff_", "A", "C", "_andJunk");
// sStuffAndJunk is assigned with the strings "stuff_A_andJunk", "stuff_B_andJunk" and "stuff_C_andJunk".
</syntaxhighlight>


====IntToStringFixedDigits()====
<syntaxhighlight lang="cpp">
string IntToStringFixedDigits(uint aulNumber, uint8 auiDigits, enumLimitType aLimitOption = limitClamped)
string IntToStringFixedDigits(int alNumber, uint8 auiDigits, enumLimitType aLimitOption = limitClamped)
</syntaxhighlight>
Returns a string representing an unsigned or positive int, with the specified number of characters, adding leading zeros if needed. aulNumber is the number to convert. auiDigits is the number of digits. E.g. 42 as 3 digits returns the string "042". auiDigits is an unsigned 8-bit int (0-255), because the max uint is only 10 digits. (Hey, if you want to try any make a string that's 2^32 followed by 245 zeros, that's none of my business!)
<br>aLimitOption is optional and can be omitted, or it can be limitFree, limitClamped or limitWrapped. With limitFree, the number is not clamped, so auiDigits is a minimum. E.g. 1 as 2 digits returns "01" but 123 as 2 digits returns "123". With limitClamped (default), the number will be clamped within the range of the digits. E.g. 123 as 2 digits returns "99". With limitWrapped, the number will be modulated. E.g. 123 as 2 digits returns "23".
#''uint aulNumber, int alNumber' - An unsigned integer to be respresented in the string. If the supplied int is signed and less than zero, it will be treated as zero.
#''uint8 auiDigits'' - The min number of digits to include in the string.
#''enumLimitType aLimitOption'' - Can be limitFree, limitClamped or limitWrapped. (Optional, default = limitClamped)
<syntaxhighlight lang="cpp">
// Example 1:
string sNum = String.IntToStringFixedDigits(1188, 4, limitWrapped);
// sNum becomes "0088".

// Example 2:
for (uint i = 1; i <= 12; i++) SetSwingDoorLocked("door_" + String.IntToStringFixedDigits(i, 3), true, true);
// This example imagines that the level has 12 doors named in the style "door_001", "door_002", ... "door_009", "door_010", "door_011", "door_012".
</syntaxhighlight>


=Str class=
The Str class is used in the String.Format() and Debug.Message() methods.
<br>It's purpose is to provide something like a template parameter, or a loosely typed variable, for string formatting. The main goal is just to let modders pass values for string formatting without requiring hundreds of overloads. It's definitely clunkier in debug mode, but outside of debug mode it's more efficient.


==Behaviours==
The Str constructors can be passed a reference to a single string, int, uint, float, double, bool, cVector, cRotator, cPoint, cBezier, cSpline, or a list type.
<syntaxhighlight lang="cpp">
// Example:
Str(3)
Str(myInt)
Str(myVector)
</syntaxhighlight>


==Properties==
Str has no public properties.


==Methods==
The only method is the ToString() function:


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns the stored variable as a string.
<syntaxhighlight lang="cpp">
// Example 1:
Debug.Message(3, "Created new rotator {0} for puzzle #{1}.", Str(myRotator), Str(myInt));

// Example 2:
SetLevelDoorLockedText("BigDoor", "BigDoorMessages", String.Format("Door_Zone{0}_Type{1}", Str(doorZone), Str(doorType)));
</syntaxhighlight>

__FORCETOC__