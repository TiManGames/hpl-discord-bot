A <code>tString</code> is the HPL3 type for storing strings, or sequences of characters. They are created through use of a string literal, or a series of characters surrounded by quotation marks ( " ).

<syntaxhighlight lang="c++">tString sStr = "This is a string.";</syntaxhighlight>

==Fields==

tString has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>uint64</syntaxhighlight> || length ||  || Returns the length of the tString.
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || resize || <syntaxhighlight lang="c++" inline>uint64 alLength</syntaxhighlight> || Resizes the tString, removing characters and adding null characters as necessary.
|}

==Remarks==
A thing to note is that a <code>tString</code> is essentially a wrapper for an array of characters, meaning that you can retrieve characters within a <code>tString</code> by using square bracket ( [ ] ) syntax. (Characters in the HPL3 engine are represented by unsigned 8-bit integers, or <code>uint8</code>.)

<syntaxhighlight lang="c++">uint8 c = sStr[1];</syntaxhighlight>

A <code>tString</code> is [[wikipedia:Null-terminated_string|null-terminated]], meaning that when a <code>tString</code> is read (for example, in a <code>cLux_AddDebugMessage</code> function), the <code>tString</code> will only process its characters until it reaches a null-character, and characters after the null-character, if any, are ignored.

<syntaxhighlight lang="c++">sStr.resize(5);
sStr[0] = 'H';
sStr[1] = 'i';
sStr[2] = '\0'; // This is a null-character
sStr[3] = 'Q';
sStr[4] = '9';
cLux_AddDebugMessage(sStr);

// The message as printed: 
// Hi</syntaxhighlight>

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__