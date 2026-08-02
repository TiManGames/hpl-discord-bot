<br />

==What are Input types?==
Input types ''(InputHandler_types.hps)'' is a script consisting of two Shared '''Enum classes''' which can be considered as a list of possible actions.

?<sub>Be sure to use them correctly as trying to add own Enum Class while trying to use them as a part of gameplay should not work.</sub>?

Names of these classes are somewhat self-explanatory:

==eAction==
- Button-like action (fixed step)

===Handler===
These interactions are directly handled by ''"OnAction ( alAction, abPressed )"''. However the game some of these actions later converts to Analog type and then handles just like [[HPL3/SOMA/Scripting/Input Types#eAnalogTypes|eAnalogTypes]]

====Params:====

=====(int)   alAction=====

*Number representation <sub>(?of input type position?)</sub> in eAction
**addressable using one of the '''eAction enum''' entries

=====(bool)   abPressed=====

*Has it been pressed?

====Typical use====
<syntaxhighlight lang="c++">
void OnAction(int alAction, bool abPressed)
	{	
		///////////////////////////////////
		// Flashlight
		if(abPressed && alAction==eAction_Flashlight)
		{
			
			SetFlashlightOn(!mbFlashlightOn);
		}
	}
</syntaxhighlight>code that takes care of FlashLight. <u>(- script/player/Player.hps)</u>

==eAnalogTypes==
- Joystick-like action (Analog step)

===Handler===
These are being handled by functions ''"OnAnalogInput ( alAnalogID, avAmount )"'' .

====Params:====

*(int)   alAnalogId
**number representation <sub>(?of input type position?)</sub> in eAnalogTypes
***addressable using one of the '''eAnalogTypes enum''' entries
*(cVector3f)   avAmount
**3D vector <sub>(?Basket class?)</sub> with parameters:
***X
***Y
***Z
**Values of [-1.0f ; 1.0f]

====Typical use====
<syntaxhighlight lang="c++">
	void OnAnalogInput(int alAnalogId, const cVector3f &in avAmount)
	{
         //....................
         //////////////////////
         // Move
         if(alAnalogId == eAnalogType_Move || alAnalogId == eAnalogType_GamepadMove)
		{
			iCharacterBody@ pCharBody = mBaseObj.GetCharacterBody();
			float fLength = avAmount.Length();
			
			if(fLength > 0.1f)
			{
				//////////////////////////////
				// Lean
				if(mbAnalogLeanPressed)
				{
					Lean(avAmount.x);		
				}
				//////////////////////////////
				// Movement
				else
				{
					if(cMath_Abs(avAmount.y) > 0.001f)
						pCharBody.Move(eCharDir_Forward, avAmount.y);
				
					if(cMath_Abs(avAmount.x) > 0.001f)
						pCharBody.Move(eCharDir_Right, avAmount.x);
				}
			}
		}
         //....................
	}
</syntaxhighlight>Here you can see also already mentioned analog type ''(eAnalogType_Move)'' that was earlier sampled and quantized from ''eAction_Forward / _Backward / _Right / _Left'', by other script. <u>(- script/player/Player.hps)</u>

==Uses==
This class could be considered a Weak Spot in case you ever wanted to do some new player implementations or to make your game controllable by virtually anything.

With a slight combination of [[HPL3/SOMA/Scripting/Input Handler|Input Handler]] and [[HPL3/SOMA/Scripting/Player Overview|Player]] scripts even [https://youtu.be/ZS0fIS2qrSA implementing a Microphone is possible.]