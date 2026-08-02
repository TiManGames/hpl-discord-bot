{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxPlayer has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCollideCallback || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddHealth || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinHealth</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddMoveState || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScriptFile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScriptClass</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddState || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScriptFile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScriptClass</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddUsedLiquidArea || [[../cLuxLiquidArea|<syntaxhighlight lang="c++" inline>cLuxLiquidArea@ apArea</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AutomoveCharBodyTo || <syntaxhighlight lang="c++" inline>float afAcc</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeedMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxSpeed</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeMoveState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckBodyCollision || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br />[[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckCharacterCollision || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apBody</syntaxhighlight>]],<br />[[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckEntityCollision || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DisableCameraLock ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || EnableCameraLock || <syntaxhighlight lang="c++" inline>float afLocalYawMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLocalYawMax</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLocalPitchMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLocalPitchMax</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeCameraAspectMulTo || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeCameraFOVMulTo || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeCameraFOVTo || <syntaxhighlight lang="c++" inline>float afTargetFOV</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeCameraRollTo || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeedMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoMoveTargetDistance ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetAverageMoveDirection ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAverageMoveSpeed ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetBaseCameraPosAdd ||   ||
|-
| [[../cCamera|<syntaxhighlight lang="c++" inline>cCamera@</syntaxhighlight>]] || GetCamera ||   ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || GetCameraCollideShape ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetCameraPosAdd || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetCameraPosAddGoal || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetCameraPosAddSum ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetCameraTrackingAvgMovement ||   ||
|-
| [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@</syntaxhighlight>]] || GetCharacterBody ||   ||
|-
| [[../cLuxMoveState|<syntaxhighlight lang="c++" inline>cLuxMoveState@</syntaxhighlight>]] || GetCurrentMoveState ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentMoveStateId ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetCurrentMoveStateName ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentStateId ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetCurrentStateName ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDefaultFOV ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetHealth ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIsLiquidAreaUsed || [[../cLuxLiquidArea|<syntaxhighlight lang="c++" inline>cLuxLiquidArea@ apArea</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetLiquidHeight ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxHealth ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRotateCameraTargetDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimeSincePhysicsObjectInteraction ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVisibilityMaxRange ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVisibilityRangeMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GiveDamage || <syntaxhighlight lang="c++" inline>float afAmount</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alStrength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int aType</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinHealth</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSource</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasCollideCallbacks ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsAutomoveCharBodyActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsCameraRotateActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDead ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsInLiquid ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveCameraPosAdd || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGoal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAcc</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSlowdownDist</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveCollideCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asEntityName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveUsedLiquidArea || [[../cLuxLiquidArea|<syntaxhighlight lang="c++" inline>cLuxLiquidArea@ apArea</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetBasicProperties ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetTimeSincePhysicsObjectInteraction ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RotateCameraTowards || <syntaxhighlight lang="c++" inline>float afAcc</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeedMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxSpeed</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avLookAtPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLocalCoord</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutomoveCharBodyTarget || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBaseCameraPosAdd || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVec</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraPosAdd || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVector</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraRoll || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCharacterBody || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetHealth || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxCameraTrackingAmount || <syntaxhighlight lang="c++" inline>int alSize</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxHealth || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotateCameraTarget || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avLookAtPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLocalCoord</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisibilityMaxRange || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisibilityRangeMul || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAutomoveCharBody ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopCameraRotate || <syntaxhighlight lang="c++" inline>float afDeacc</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__