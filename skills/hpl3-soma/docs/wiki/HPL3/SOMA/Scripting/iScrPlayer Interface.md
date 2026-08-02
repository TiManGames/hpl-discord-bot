{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iScrPlayer_Interface has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CharBody_GravityCollide || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apCharBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br />[[../cCollideData|<syntaxhighlight lang="c++" inline>cCollideData@ apCollideData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CharBody_HitGround || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apCharBody</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateWorldEntities || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyWorldEntities || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DrawDebugOutput || [[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@ apSet</syntaxhighlight>]],<br />[[../iFontData|<syntaxhighlight lang="c++" inline>iFontData@ apFont</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afStartY</syntaxhighlight> ||
|-
| [[../cLuxPlayer|<syntaxhighlight lang="c++" inline>cLuxPlayer@</syntaxhighlight>]] || GetBase ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCharacterState ||   ||
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
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnUnderwaterEffectActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abUseStartAndEndEffects</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadData || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Reset ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SaveUserConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCharacterState || <syntaxhighlight lang="c++" inline>int alState</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupStartPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCrouching</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__