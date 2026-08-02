{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cViewport has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddGuiSet || [[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@ apSet</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddRendererCallback || [[../iRendererCallback|<syntaxhighlight lang="c++" inline>iRendererCallback@ apCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddViewportCallback || [[../iViewportCallback|<syntaxhighlight lang="c++" inline>iViewportCallback@ apCallback</syntaxhighlight>]] ||
|-
| [[../cCamera|<syntaxhighlight lang="c++" inline>cCamera@</syntaxhighlight>]] || GetCamera ||   ||
|-
| [[../iFrameBuffer|<syntaxhighlight lang="c++" inline>iFrameBuffer@</syntaxhighlight>]] || GetFrameBuffer ||   ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l&</syntaxhighlight>]] || GetPosition ||   ||
|-
| [[../cPostEffectComposite|<syntaxhighlight lang="c++" inline>cPostEffectComposite@</syntaxhighlight>]] || GetPostEffectComposite ||   ||
|-
| [[../iRenderer|<syntaxhighlight lang="c++" inline>iRenderer@</syntaxhighlight>]] || GetRenderer ||   ||
|-
| [[../cRenderSettings|<syntaxhighlight lang="c++" inline>cRenderSettings@</syntaxhighlight>]] || GetRenderSettings ||   ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l&</syntaxhighlight>]] || GetSize ||   ||
|-
| [[../cPostEffect_ToneMapping|<syntaxhighlight lang="c++" inline>cPostEffect_ToneMapping@</syntaxhighlight>]] || GetToneMappingEffect ||   ||
|-
| [[../cWorld|<syntaxhighlight lang="c++" inline>cWorld@</syntaxhighlight>]] || GetWorld ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsListener ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVisible ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveGuiSet || [[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@ apSet</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveRendererCallback || [[../iRendererCallback|<syntaxhighlight lang="c++" inline>iRendererCallback@ apCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveViewportCallback || [[../iViewportCallback|<syntaxhighlight lang="c++" inline>iViewportCallback@ apCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCamera || [[../cCamera|<syntaxhighlight lang="c++" inline>cCamera@ apCamera</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFrameBuffer || [[../iFrameBuffer|<syntaxhighlight lang="c++" inline>iFrameBuffer@ apFrameBuffer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsListener || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPostEffectComposite || [[../cPostEffectComposite|<syntaxhighlight lang="c++" inline>cPostEffectComposite@ apPostEffectComposite</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderer || [[../iRenderer|<syntaxhighlight lang="c++" inline>iRenderer@ apRenderer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSize || [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorld || [[../cWorld|<syntaxhighlight lang="c++" inline>cWorld@ apWorld</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abResetEffects = false</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__