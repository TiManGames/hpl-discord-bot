{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxCharMover has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddSpeedState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || CalculateSpeedMul || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@</syntaxhighlight>]] || GetCharBody ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIdleExtraAnimActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxStuckCounter ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMoveSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStuckCounter ||   ||
|-
| [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUseMoveStateAnimations ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetWantedSpeedAmount ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LoadFromVariables || [[../cResourceVarsObject|<syntaxhighlight lang="c++" inline>cResourceVarsObject@ apVars</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveToPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avFeetPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSlowDownAndStopAtGoal = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || PlayAnimation || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFadeTime = 0.3f</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPlayTransition = true</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback = ""</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || PlayTrackAnimation || [[../cLuxTrackNode|<syntaxhighlight lang="c++" inline>cLuxTrackNode@ apNode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetStuckCounter ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBackwardAnimName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBankingActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBankingAngleMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBankingMaxAngle || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBankingMaxSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBankingSpeedMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDirection || [[../eLuxCharMoveDirection|<syntaxhighlight lang="c++" inline>eLuxCharMoveDirection aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDynamicObjectAvoidanceActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIdleAnimName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIdleExtraAnimActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIdleExtraAnimName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxBackwardSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxForwardSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveSpeedAnimMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRunAnimName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRunToWalkSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_Backward || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_Forward || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_ForwardAcc || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_ForwardDeacc || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_SidewayAcc || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_SidewayDeacc || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_Sideways || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_TurnBreakMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_TurnMaxSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedState_TurnSpeedMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStoppedToWalkSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnBreakMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnedToGoalCallbackFunc || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnMaxSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnMinBreakAngle || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnSpeedMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnStoppedToWalkSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTurnWalkToStoppedSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupDynamicObjectAvoidance || <syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinMass</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSteerAmount</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupIdleExtra || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asAnimName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinWait</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxWait</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPauseProceduralAnims</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupWallAvoidance || <syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSteerAmount</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alSamples</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUse3DMovement || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUseMoveStateAnimations || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVerticalMoveSpeedExtraAnimMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWalkAnimName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWalkToRunSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWalkToStoppedSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWallAvoidanceActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopTurning ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnInstantlyToAngle || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnInstantlyToAngle || <syntaxhighlight lang="c++" inline>float afYaw</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afPitch</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnInstantlyToPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGoalPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnToAngle || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnToAngles || <syntaxhighlight lang="c++" inline>float afYaw</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afPitch</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || TurnToPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avFeetPos</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__