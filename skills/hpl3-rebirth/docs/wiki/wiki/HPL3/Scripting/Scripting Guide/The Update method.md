{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
==Update==
<code>Update</code> is one of the most commonly used methods in HPL3. It’s called once per-frame in every script that uses it. Almost anything that needs to be changed or adjusted regularly happens here. 

The Update method gets called on a fixed timeline and has the same time between calls. Immediately after Update is called, any necessary calculations are made, such as physics or dynamic value changes.
Anything that affects rigid bodies, meaning a physics object, should be executed in this method.

Below is the default code in a map script file for <code>Update</code>:<syntaxhighlight lang="c++">
void Update(float afTimeStep) 
{
}
</syntaxhighlight>
| style="width:0.1%" |
|}
===Breakdown===

*<code>afTimeStep</code> represents the time (in seconds) which takes the function to get called. It is called every frame, and the game can run up to 60 frames per seconds. Therefore, the value of <code>afTimeStep</code> will almost always be <code>0.0167 seconds</code> (60 fps in seconds).

However, we can also use it to calculate different things that aren’t related to physics.

===Example===
If we wanted to increase the brightness of a light based on the distance of the player from that light, we could use the <code>Update</code> method to always update the brightness value at any given time:<syntaxhighlight lang="c++">
float mfMinBrightness = 0.0f;
float mfMaxBrightness = 50.0f;

void Update(float afTimeStep) 
{		
	cVector3f vPlayerPos = Player_GetPosition();
	cVector3f vLightPos = Map_GetLight("PointLight_4").GetLocalPosition();
		
	float fDistance = (vLightPos - vPlayerPos).SqrLength(); // Calculate the square root distance of the player from the light.
	float fCurrentDistanceRatio = vPlayerPos.Length() / fDistance; // Calculate the ratio of the total distance and the current position.
	float fBrightness = cMath_Clamp(fCurrentDistanceRatio, mfMinBrightness, mfMaxBrightness); // Make sure the brightness value is within bounds.
						
	Light_SetBrightness("PointLight_4", fBrightness); // Apply the brightness
}
</syntaxhighlight>
{{#evt:
service=youtube
|id=https://youtu.be/rWafPQPO8AI
|dimensions=480
|alignment=left
|description=The above script in-game.
|container=frame
}}

{{NavBar|HPL3/Scripting/Scripting_Guide/The OnAction method|The OnAction method|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Timers|Timers}}

[[Category:HPL3 Scripting]]
[[Category:English]]