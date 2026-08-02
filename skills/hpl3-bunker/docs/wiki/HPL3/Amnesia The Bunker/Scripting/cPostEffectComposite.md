{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffectComposite has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddPostEffect|AddPostEffect]]([[../iPostEffect|iPostEffect@]] apPostEffect, int alPrio)|}}
{{CodeDocSummaryItem|[[../iPostEffect|iPostEffect]]|[[#GetPostEffect|GetPostEffect]](int alIdx)|}}
{{CodeDocSummaryItem|[[../iPostEffect|iPostEffect]]|[[#GetPostEffectFromType|GetPostEffectFromType]](const [[../tString|tString]] &in asType)|}}
{{CodeDocSummaryItem|int|[[#GetPostEffectNum|GetPostEffectNum]]()|}}
{{CodeDocSummaryItem|bool|[[#HasActiveEffects|HasActiveEffects]]()|}}
{{CodeDocSummaryItem|void|[[#RemovePostEffect|RemovePostEffect]]([[../iPostEffect|iPostEffect@]] apPostEffect)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddPostEffect}}
<syntaxhighlight lang="c++">void AddPostEffect(iPostEffect@ apPostEffect,
                   int alPrio)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPostEffect|[[../iPostEffect|iPostEffect@]]|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostEffect}}
<syntaxhighlight lang="c++">iPostEffect@ GetPostEffect(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|iPostEffect@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostEffectFromType}}
<syntaxhighlight lang="c++">iPostEffect@ GetPostEffectFromType(const tString &in asType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asType|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPostEffect@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostEffectNum}}
<syntaxhighlight lang="c++">int GetPostEffectNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasActiveEffects}}
<syntaxhighlight lang="c++">bool HasActiveEffects()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemovePostEffect}}
<syntaxhighlight lang="c++">void RemovePostEffect(iPostEffect@ apPostEffect)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPostEffect|[[../iPostEffect|iPostEffect@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}