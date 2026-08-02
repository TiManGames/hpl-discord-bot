{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
In the next two chapters we will look over useful functions that exist in every map script file. 

==OnAction==
This method gets called when a key on the keyboard is pressed. It detects the keyboard input, and it is mostly used for testing parts of our script. It can be very useful to us when we want to test something quickly. Below is the default code in a map script file for <code>OnAction</code>:<syntaxhighlight lang="c++">
////////////////////////////
// To get when player makes input (mostly used for debug)
void OnAction(int alAction, bool abPressed)
{
	if (abPressed == false)
		return;

	if (alAction == eAction_Test1)
	{
			
	}
}
</syntaxhighlight>
The function has two arguments: <code>alAction</code> and <code>abPressed</code>. 
| style="width:0.1%" |
|}
===Breakdown===

*<code>alAction</code> is an integer which represents the key code of the current key has been pressed.
*<code>abPressed</code> is a boolean which checks if the key is currently pressed.
*At the very beginning, the function checks if the current button is pressed or not, because the code needs to be executed only when a key is pressed, so if the key isn’t pressed, we stop the execution of this method, which is achieved by typing <code>return;</code>.
*A condition that checks which key we have pressed. We can search for keys by typing <code>eAction_</code> and we will see a list of all of the available keys, which is pretty much every key on the keyboard. <code>eAction_Test0</code> to <code>eAction_Test9</code> are the number keys on the keyboard, so if we press 0 on our keyboard, the code inside the <code>eAction_Test0</code> condition will be executed.

{{note|You can see a full list of the input types inside the Scripting section of SOMA or Amnesia: Rebirth, under Base -> Input Types.}}

===Example===
<syntaxhighlight lang="c++">
////////////////////////////
// To get when player makes input (mostly used for debug)
void OnAction(int alAction, bool abPressed)
{
	if (abPressed == false)
		return;

	if (alAction == eAction_Test1)
	{
		Light_SetVisible("PointLight_4", false);
	}
		
	if (alAction == eAction_Test2)
	{
		Light_SetVisible("PointLight_4", true);
	}
}
</syntaxhighlight>

In this example, if the player presses 1 on the keyboard, the point light <code>PointLight_4</code> in the map will become invisible. If the player presses 2, the light will become visible again.

{{NavBar|HPL3/Scripting/Scripting_Guide/Helper Files|Helper Files|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/The Update method|The Update method}}

[[Category:HPL3 Scripting]]
[[Category:English]]