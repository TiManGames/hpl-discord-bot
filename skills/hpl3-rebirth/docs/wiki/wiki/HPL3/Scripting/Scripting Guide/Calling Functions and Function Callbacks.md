{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
Now that we learned how to write our very first piece of code, we can look into calling functions and function callbacks.

==Functions==
If we want to make the game do something in our script, we need to call a specific function that does what we want.

''Main article: [[HPL3/Scripting/AngelScript Fundamentals/Chapter 6 - Functions|AngelScript - Functions]]''


For example, if we want to make the game do something related to the player, we will type <code>Player_</code>, and then all of the relevant functions for the player can be displayed, with an explanation of what each function does. 
If you were to write <pre>Player_SetActive(false);</pre> in your script file, the player will not be able to be move. This is done through calling the function <code>Player_SetActive</code>. We didn't write any piece of new code, we just used an existing code (function) that does this already.

==Function Callbacks==

Function callbacks are used a lot in scripting and they take a big part of our map script file.

Simply put, '''a callback function is just an existing function which is supposed to be, at some later point, called by some other piece of code, when some event of interest happens.''' It is used a lot when calling game script functions.

For example, the function <code>Player_SetFlashlightOnOffCallback</code>, is a function which requires to give a name for a callback function, which will be called when the flashlight is turned on or off.In other words, when the player turns the flashlight or on off, a callback function will be called and perform the code inside it. 

In the following example, the point light <code>PointLight_4</code> will be visibile or not, depending if the player's flashlight is lit or not. The function <code>OnFlashlightOnOff</code> is called whenever we turn the flashlight on or off. <code>OnFlashlightOnOff</code>  is our '''callback''' '''function''', which is defined in <code>OnStart</code>.<syntaxhighlight lang="c++">
////////////////////////////
// Run first time starting map
void OnStart()
{
	Player_SetFlashlightOnOffCallback("OnFlashlightOnOff");
}

//... Somewhere else in the code....
void OnFlashlightOnOff(bool abLit)
{
	Light_SetVisible("PointLight_4", abLit);
}

</syntaxhighlight>
[[File:Callback-test-hpl3-soma.gif|left|thumb|The above code in action. The flashlight turns the light on / off via callback.]]
| style="width:0.1%" |
|}
{{NavBar|HPL3/Scripting/Scripting_Guide/Hello World|Hello World|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Helper Files|Helper Files}}

[[Category:HPL3 Scripting]]
[[Category:English]]