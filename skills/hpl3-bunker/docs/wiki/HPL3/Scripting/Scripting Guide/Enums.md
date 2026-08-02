{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
Enum is a user defined datatype in HPL3. It is used to assign names to the integral constants which makes a script easy to read and maintain. The keyword <code>enum</code> is used to declare an enumeration.

==Declaring Enum Variable==
The general syntax for declaring an enumeration is
<syntaxhighlight lang="c++">
enum enum_name
{
   enumeration list 
}
</syntaxhighlight>
Where:

*<code>enum_name</code> specifies the enumeration type name.
*<code>enumeration</code> list is a comma-separated list of identifiers.

Each of the symbols in the enumeration list stands for an integer value, one greater than the symbol that precedes it. By default, the value of the first enumeration symbol is 0. For example:
<syntaxhighlight lang="c++">
enum WeekDay
{
   Day_Sun, // The value here is 0
   Day_Mon, // The value here is 1
   Day_Tue, // etc
   Day_Wed,
   Day_Thu,
   Day_Fri,
   Day_Sat
}
</syntaxhighlight>
| style="width:0.1%" |
|}
==Using Enums==
The following example demonstrates use of <code>enum</code> variable:<syntaxhighlight lang="c++">
enum WeekDay
{
   Day_Sun,
   Day_Mon, 
   Day_Tue,
   Day_Wed,
   Day_Thu,
   Day_Fri,
   Day_Sat
}

//--------------------------------------------------

class cScrMap : iScrMap
{
	////////////////////////////
	// Run first time starting map
	void OnStart()
	{
		WeekDay currentDay = Day_Mon;
		cLux_AddDebugMessage("The current day is: " + currentDay);
	}
</syntaxhighlight>
When the above code is run, the number 1 will be printed to the screen, because the internal value of <code>Day_Mon</code> is 1.
===In HPL3===
Enums are mostly required as a parameter for existing HPL3 functions. One of the most common function which uses an enum is <code>Music_Play</code>. For example:<syntaxhighlight lang="c++">
Music_Play("MyMusicFile.ogg", 1.0f, false, eMusicPrio_BgAmb);
</syntaxhighlight>
The last parameter, <code>eMusicPrio_BgAmb</code>, is a value of the enum <code>eMusicPrio</code>. 

== See Also == 
* [[HPL3/Scripting/AngelScript_Fundamentals/Chapter_9_-_Miscellaneous_AngelScript_Features#Enums|Enums - AngelScript]]

{{NavBar|HPL3/Scripting/Scripting_Guide/Local and Global Variables|Local and Global Variables|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Conclusion - Basic|Conclusion}}

[[Category:HPL3 Scripting]]
[[Category:English]]