{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iGamepad has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#AxesUpdated|AxesUpdated]]()|}}
{{CodeDocSummaryItem|bool|[[#ButtonIsDown|ButtonIsDown]]([[../eGamepadButton|eGamepadButton]] aButton)|}}
{{CodeDocSummaryItem|bool|[[#ButtonIsPressed|ButtonIsPressed]]()|}}
{{CodeDocSummaryItem|bool|[[#ButtonIsReleased|ButtonIsReleased]]()|}}
{{CodeDocSummaryItem|float|[[#GetAxisDeadZoneRadiusValue|GetAxisDeadZoneRadiusValue]]()|}}
{{CodeDocSummaryItem|float|[[#GetAxisValue|GetAxisValue]]([[../eGamepadAxis|eGamepadAxis]] aAxis)|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetBallAbsPos|GetBallAbsPos]]([[../eGamepadBall|eGamepadBall]] aBall)|}}
{{CodeDocSummaryItem|[[../cGamepadInputData|cGamepadInputData]]|[[#GetButton|GetButton]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColorLED|GetColorLED]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetGamepadName|GetGamepadName]]()|}}
{{CodeDocSummaryItem|[[../eGamepadHatState|eGamepadHatState]]|[[#GetHatCurrentState|GetHatCurrentState]]([[../eGamepadHat|eGamepadHat]] aHat)|}}
{{CodeDocSummaryItem|[[../cGamepadInputData|cGamepadInputData]]|[[#GetHatState|GetHatState]]()|}}
{{CodeDocSummaryItem|[[../cGamepadInputData|cGamepadInputData]]|[[#GetInputUpdate|GetInputUpdate]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumAxes|GetNumAxes]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumBalls|GetNumBalls]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumButtons|GetNumButtons]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumHats|GetNumHats]]()|}}
{{CodeDocSummaryItem|[[../cGamepadInputData|cGamepadInputData]]|[[#GetReleasedButton|GetReleasedButton]]()|}}
{{CodeDocSummaryItem|[[../cGamepadInputData|cGamepadInputData]]|[[#GetUpdatedAxis|GetUpdatedAxis]]()|}}
{{CodeDocSummaryItem|bool|[[#HasInputUpdates|HasInputUpdates]]()|}}
{{CodeDocSummaryItem|bool|[[#HatIsInState|HatIsInState]]([[../eGamepadHat|eGamepadHat]] aHat, [[../eGamepadHatState|eGamepadHatState]] aState)|}}
{{CodeDocSummaryItem|bool|[[#HatsChanged|HatsChanged]]()|}}
{{CodeDocSummaryItem|void|[[#SetAxisDeadZoneRadiusValue|SetAxisDeadZoneRadiusValue]](float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetColorLED|SetColorLED]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetRumble|SetRumble]](float afValue, int alMillisec)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AxesUpdated}}
<syntaxhighlight lang="c++">bool AxesUpdated()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ButtonIsDown}}
<syntaxhighlight lang="c++">bool ButtonIsDown(eGamepadButton aButton)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aButton|[[../eGamepadButton|eGamepadButton]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ButtonIsPressed}}
<syntaxhighlight lang="c++">bool ButtonIsPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ButtonIsReleased}}
<syntaxhighlight lang="c++">bool ButtonIsReleased()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAxisDeadZoneRadiusValue}}
<syntaxhighlight lang="c++">float GetAxisDeadZoneRadiusValue()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAxisValue}}
<syntaxhighlight lang="c++">float GetAxisValue(eGamepadAxis aAxis)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAxis|[[../eGamepadAxis|eGamepadAxis]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBallAbsPos}}
<syntaxhighlight lang="c++">cVector2l GetBallAbsPos(eGamepadBall aBall)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aBall|[[../eGamepadBall|eGamepadBall]]|}}
{{CodeDocDetailReturn|cVector2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetButton}}
<syntaxhighlight lang="c++">cGamepadInputData GetButton()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGamepadInputData|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColorLED}}
<syntaxhighlight lang="c++">cColor GetColorLED()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGamepadName}}
<syntaxhighlight lang="c++">tString GetGamepadName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHatCurrentState}}
<syntaxhighlight lang="c++">eGamepadHatState GetHatCurrentState(eGamepadHat aHat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHat|[[../eGamepadHat|eGamepadHat]]|}}
{{CodeDocDetailReturn|eGamepadHatState|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHatState}}
<syntaxhighlight lang="c++">cGamepadInputData GetHatState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGamepadInputData|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInputUpdate}}
<syntaxhighlight lang="c++">cGamepadInputData GetInputUpdate()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGamepadInputData|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumAxes}}
<syntaxhighlight lang="c++">int GetNumAxes()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumBalls}}
<syntaxhighlight lang="c++">int GetNumBalls()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumButtons}}
<syntaxhighlight lang="c++">int GetNumButtons()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumHats}}
<syntaxhighlight lang="c++">int GetNumHats()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReleasedButton}}
<syntaxhighlight lang="c++">cGamepadInputData GetReleasedButton()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGamepadInputData|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUpdatedAxis}}
<syntaxhighlight lang="c++">cGamepadInputData GetUpdatedAxis()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGamepadInputData|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasInputUpdates}}
<syntaxhighlight lang="c++">bool HasInputUpdates()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HatIsInState}}
<syntaxhighlight lang="c++">bool HatIsInState(eGamepadHat aHat,
                  eGamepadHatState aState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHat|[[../eGamepadHat|eGamepadHat]]|}}
{{CodeDocDetailParam|aState|[[../eGamepadHatState|eGamepadHatState]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HatsChanged}}
<syntaxhighlight lang="c++">bool HatsChanged()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAxisDeadZoneRadiusValue}}
<syntaxhighlight lang="c++">void SetAxisDeadZoneRadiusValue(float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColorLED}}
<syntaxhighlight lang="c++">void SetColorLED(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRumble}}
<syntaxhighlight lang="c++">void SetRumble(float afValue,
               int alMillisec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailParam|alMillisec|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}