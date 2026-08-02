{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cAction has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddGamepadAxis || <syntaxhighlight lang="c++" inline>int alPadIndex</syntaxhighlight>,<br />[[../eGamepadAxis|<syntaxhighlight lang="c++" inline>eGamepadAxis aAxis</syntaxhighlight>]],<br />[[../eGamepadAxisRange|<syntaxhighlight lang="c++" inline>eGamepadAxisRange aRange</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinThreshold</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxThreshold</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddGamepadButton || <syntaxhighlight lang="c++" inline>int alPadIndex</syntaxhighlight>,<br />[[../eGamepadButton|<syntaxhighlight lang="c++" inline>eGamepadButton aButton</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddGamepadHat || <syntaxhighlight lang="c++" inline>int alPadIndex</syntaxhighlight>,<br />[[../eGamepadHat|<syntaxhighlight lang="c++" inline>eGamepadHat aHat</syntaxhighlight>]],<br />[[../eGamepadHatState|<syntaxhighlight lang="c++" inline>eGamepadHatState aHatState</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddKey || [[../eKey|<syntaxhighlight lang="c++" inline>eKey aKey</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddMouseButton || [[../eMouseButton|<syntaxhighlight lang="c++" inline>eMouseButton aButton</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddSubAction || [[../iSubAction|<syntaxhighlight lang="c++" inline>iSubAction@ apSubAction</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || BecameTriggered ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearSubActions ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoubleTriggered || <syntaxhighlight lang="c++" inline>float afLimit</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetId ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../iSubAction|<syntaxhighlight lang="c++" inline>iSubAction@</syntaxhighlight>]] || GetSubAction || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubActionNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsTriggered ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetToCurrentState ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || WasTriggered ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__