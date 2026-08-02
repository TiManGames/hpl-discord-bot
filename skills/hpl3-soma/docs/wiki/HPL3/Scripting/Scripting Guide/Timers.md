{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
Timers are set up to wait for a selected amount of time before executing code. It can be very useful if you want to wait a specified amount of time for something to happen in the level, such as intense countdown or to spawn / despawn particles in a dynamic way. 

==Creating Timers==
In order to add timer to a map, we need to use the function <code>Map_AddTimer</code>. Let's see an example:<syntaxhighlight lang="c++">
////////////////////////////
// Run first time starting map
void OnStart()
{
	Map_AddTimer("JumpVeryHigh", 5.0f, "Timer_JumpVeryHigh");
}

//...somewhere else in the code

void Timer_JumpVeryHigh(const tString&in asTimer)
{
	MyHelper_MakeThePlayerJumpVeryHigh();
}
</syntaxhighlight>
| style="width:0.1%" |
|}
===Breakdown===

*We called the function and gave it three arguments: The internal name of the timer (<code>JumpVeryHigh</code>), the time in seconds (<code>5</code>) of the timer, and the function callback which will be called once the timer is done (<code>Timer_JumpVeryHigh</code>).
*Our timer callback is called <code>Timer_JumpVeryHigh</code> and has one parameter called <code>asTimer</code> - this is the internal name of the timer. In our case, the internal name will be <code>JumpVeryHigh</code>.
*Inside the timer callback, we use our helper function which makes the player jump very high.

If you will execute this code, the player will jump very high after five seconds once the map has been loaded.

{{Note|You can have much more controls on timers than what was explained here. For a list of the full functions, check the Map Helper page of SOMA or Amnesia: Rebirth.}}

Timers are very easy to use as you can see, and it will help us to understand the concept of Sequences in next chapter.

==See Also==

*[[HPL3/SOMA/Scripting/Map Helper|Map Helper]] - SOMA
*[[HPL3/Amnesia: Rebirth/Scripting/Map Helper|Map Helper]] - Amnesia: Rebirth

{{NavBar|HPL3/Scripting/Scripting_Guide/The Update method|The Update method|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Sequences|Sequences}}

[[Category:HPL3 Scripting]]
[[Category:English]]