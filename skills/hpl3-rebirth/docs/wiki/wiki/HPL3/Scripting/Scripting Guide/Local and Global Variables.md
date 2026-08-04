{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}

Local and global variables are variables that have a certain scope compared to the script in which it is located in.

==Variables Scopes==
A scope is a region of the program and broadly speaking there are three places, where variables can be declared:

*Inside a function or a block which is called local variables.
*In the definition of function parameters which is called formal parameters.
*Outside of all functions which is called global variables.

In HPL3, there are two main variable scopes: Local Variables and Global Variables.

==Local Variables==
Variables that are declared inside a function or block are local variables. They can be used only by statements that are inside that function or block of code. Local variables that are declared inside functions are not known to functions outside their own. The following is the example using local variables:<syntaxhighlight lang="c++">
void foo()
{
	tString msLocalVariable = "Value"; // Declaring and Initializing a variable inside this function
	cLux_AddDebugMessage(msLocalVariable); // This will work
}

void foo2()
{
	cLux_AddDebugMessage(msLocalVariable); // This will result an error because the variable cannot be used, since it's created inside the scope of foo.
}
</syntaxhighlight>

Local variables can be on the class-scope as well, and so they could be used in multiple functions, for example:<syntaxhighlight lang="c++">
class cScrMap : iScrMap
{
	tString msLocalVariable = "Value";
	
	void foo()
	{
		cLux_AddDebugMessage(msLocalVariable); // This will work
	}

	void foo2()
	{
		cLux_AddDebugMessage(msLocalVariable + "Hello"); // This will work as well
	}
</syntaxhighlight>

==Global Variables==
Global variables are defined outside of all the functions, usually on top of the script file. The global variables will hold their value throughout the life-time of your script.

A global variable can be accessed by any function. That is, a global variable is available for use throughout your entire script after its declaration. The following is the example using global variable:<syntaxhighlight lang="c++">
const tString mlMyGlobalStringVariable = "Value";

class cScrMap : iScrMap
{
  // The rest of the script file...
</syntaxhighlight>

{{note|A variable which is declared outside a class scope must be a <code>[[HPL3/Scripting/AngelScript_Fundamentals/Chapter_9_-_Miscellaneous_AngelScript_Features#Constants|const]]</code> variable!}}

===Cross-Script Global Variables===
Cross-Script global variables are variables which can be used across multiple script files. They are usually used to check if the player has done specific things within the map to make something happen in another map.

This is achieved using the two different functions: <code>cScript_SetGlobalVar</code> and <code>cScript_GetGlobalVar</code>. For example:

'''''FirstMap.hps'''''<syntaxhighlight lang="c++">
void PickUpChip()
{
	cScript_SetGlobalVarBool("IsChipPickedUp", true);
}
</syntaxhighlight>

'''''SecondMap.hps'''''<syntaxhighlight lang="c++">
void DoSomething()
{
	if (cScript_GetGlobalVarBool("IsChipPickedUp")) 
	{
		// Do sometething 
	}
}
</syntaxhighlight>In the first map script file, we create a global <code>bool</code> variable and set the value to <code>true</code>. In the second map script file, we check if the value of that global variable is true and execute the code inside.{{NavBar|HPL3/Scripting/Scripting_Guide/Sequences|Sequences|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Enums|Enums}}

[[Category:HPL3 Scripting]]
[[Category:English]]