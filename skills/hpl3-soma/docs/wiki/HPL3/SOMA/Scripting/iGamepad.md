{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iGamepad has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AxesUpdated ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ButtonIsDown || [[../eGamepadButton|<syntaxhighlight lang="c++" inline>eGamepadButton aButton</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ButtonIsPressed ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ButtonIsReleased ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAxisDeadZoneRadiusValue ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAxisValue || [[../eGamepadAxis|<syntaxhighlight lang="c++" inline>eGamepadAxis aAxis</syntaxhighlight>]] ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l</syntaxhighlight>]] || GetBallAbsPos || [[../eGamepadBall|<syntaxhighlight lang="c++" inline>eGamepadBall aBall</syntaxhighlight>]] ||
|-
| [[../cGamepadInputData|<syntaxhighlight lang="c++" inline>cGamepadInputData</syntaxhighlight>]] || GetButton ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetColorLED ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetGamepadName ||   ||
|-
| [[../eGamepadHatState|<syntaxhighlight lang="c++" inline>eGamepadHatState</syntaxhighlight>]] || GetHatCurrentState || [[../eGamepadHat|<syntaxhighlight lang="c++" inline>eGamepadHat aHat</syntaxhighlight>]] ||
|-
| [[../cGamepadInputData|<syntaxhighlight lang="c++" inline>cGamepadInputData</syntaxhighlight>]] || GetHatState ||   ||
|-
| [[../cGamepadInputData|<syntaxhighlight lang="c++" inline>cGamepadInputData</syntaxhighlight>]] || GetInputUpdate ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumAxes ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumBalls ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumButtons ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumHats ||   ||
|-
| [[../cGamepadInputData|<syntaxhighlight lang="c++" inline>cGamepadInputData</syntaxhighlight>]] || GetReleasedButton ||   ||
|-
| [[../cGamepadInputData|<syntaxhighlight lang="c++" inline>cGamepadInputData</syntaxhighlight>]] || GetUpdatedAxis ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasInputUpdates ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HatIsInState || [[../eGamepadHat|<syntaxhighlight lang="c++" inline>eGamepadHat aHat</syntaxhighlight>]],<br />[[../eGamepadHatState|<syntaxhighlight lang="c++" inline>eGamepadHatState aState</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HatsChanged ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAxisDeadZoneRadiusValue || <syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColorLED || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRumble || <syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alMillisec</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__