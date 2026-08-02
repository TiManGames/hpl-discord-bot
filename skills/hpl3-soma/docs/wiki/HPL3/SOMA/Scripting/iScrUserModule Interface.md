{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iScrUserModule_Interface has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AppGotInputFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AppLostInputFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateWorldEntities || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyWorldEntities || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| [[../cLuxUserModule|<syntaxhighlight lang="c++" inline>cLuxUserModule@</syntaxhighlight>]] || GetBase ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LoadUserConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnAction || <syntaxhighlight lang="c++" inline>int alAction</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPressed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnAnalogInput || <syntaxhighlight lang="c++" inline>int alAnalogId</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avAmount</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnDraw || <syntaxhighlight lang="c++" inline>float afFrameTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnEnterContainer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asOldContainer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnExitPressed ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnLeaveContainer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asNewContainer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnMapEnter || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnMapLeave || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnPostRender || <syntaxhighlight lang="c++" inline>float afFrameTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadData || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Reset ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SaveUserConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || VariableUpdate || <syntaxhighlight lang="c++" inline>float afDeltaTime</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__