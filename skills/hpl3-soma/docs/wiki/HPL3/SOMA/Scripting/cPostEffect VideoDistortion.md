{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cPostEffect_VideoDistortion has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetParams || <syntaxhighlight lang="c++" inline>float& afAmount</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float &out afRandomSeed</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float &out afLineDensity</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float &out afOffsetMul</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f &out avScreenOffset</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f &out avScreenBendAmount</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDisabled ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Reset ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParams || <syntaxhighlight lang="c++" inline>float afAmount</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afRandomSeed</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLineDensity</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOffsetMul</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avScreenOffset</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avScreenBendAmount</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__