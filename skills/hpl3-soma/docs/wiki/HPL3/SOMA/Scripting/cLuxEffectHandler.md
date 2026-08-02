{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxEffectHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddEdgeGlowObject || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aColor</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAlpha</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afEdgeThickness</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLightLimit</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddGlowObject || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAlpha</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afY</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeIn || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeOut || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| [[../iScrEffect_Interface|<syntaxhighlight lang="c++" inline>iScrEffect_Interface@</syntaxhighlight>]] || GetEffect || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFadeAlpha ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFading ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__