{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cPostEffect_ToneMapping has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeExposure || <syntaxhighlight lang="c++" inline>float afExposure</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afWhiteCut</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeGradingTexture || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apGrading</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeWindowExposure || <syntaxhighlight lang="c++" inline>float afExposure</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afWhiteCut</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetBloomActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetColorGradingActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetExposure ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFilmGrainActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetParams || <syntaxhighlight lang="c++" inline>float& afKey</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float& afGammaCorrection</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float& afFilmGrainIntensity</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float& afBrightPass</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float& afBloomWidth</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>cColor& avBloomTint</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float& afBloomFalloff</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTransitionTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDisabled ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Reset ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBloomActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColorGradingActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFilmGrainActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParams || <syntaxhighlight lang="c++" inline>float afKey</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afGammaCorrection</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFilmGrainIntensity</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afBrightPass</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afBloomWidth</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in avBloomTint</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afBloomFalloff</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSRGBGamma || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__