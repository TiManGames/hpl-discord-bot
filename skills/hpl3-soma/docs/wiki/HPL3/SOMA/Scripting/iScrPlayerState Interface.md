{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iScrPlayerState_Interface has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AllowBuoyancy || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
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
| [[../cLuxPlayerState|<syntaxhighlight lang="c++" inline>cLuxPlayerState@</syntaxhighlight>]] || GetBase ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LoadUserConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || OnAction || <syntaxhighlight lang="c++" inline>int alAction</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPressed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || OnAnalogInput || <syntaxhighlight lang="c++" inline>int alAnalogId</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avAmount</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnEnterState || <syntaxhighlight lang="c++" inline>int alPrevStateId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || OnExitPressed ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnLeaveState || <syntaxhighlight lang="c++" inline>int alNextStateId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnMapEnter || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || OnMapLeave || [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Reset ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SaveUserConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__