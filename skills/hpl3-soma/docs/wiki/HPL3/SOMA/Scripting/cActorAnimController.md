{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cActorAnimController has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || BeginLipsync || [[../iLipsyncResult|<syntaxhighlight lang="c++" inline>iLipsyncResult@ apLipsync</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayEmotion || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asEmotion</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDuration</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afWeight = 1.0f</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFadeTime = 0.1f</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayGesture || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asGesture</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || <syntaxhighlight lang="c++" inline>bool abFadeOut = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopLipsync ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__