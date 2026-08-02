{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cViewport has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddGuiSet|AddGuiSet]]([[../cGuiSet|cGuiSet@]] apSet)|}}
{{CodeDocSummaryItem|void|[[#AddRendererCallback|AddRendererCallback]]([[../iRendererCallback|iRendererCallback@]] apCallback)|}}
{{CodeDocSummaryItem|void|[[#AddViewportCallback|AddViewportCallback]]([[../iViewportCallback|iViewportCallback@]] apCallback)|}}
{{CodeDocSummaryItem|[[../cCamera|cCamera]]|[[#GetCamera|GetCamera]]()|}}
{{CodeDocSummaryItem|[[../iFrameBuffer|iFrameBuffer]]|[[#GetFrameBuffer|GetFrameBuffer]]()|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|[[../cPostEffectComposite|cPostEffectComposite]]|[[#GetPostEffectComposite|GetPostEffectComposite]]()|}}
{{CodeDocSummaryItem|[[../iRenderer|iRenderer]]|[[#GetRenderer|GetRenderer]]()|}}
{{CodeDocSummaryItem|[[../cRenderSettings|cRenderSettings]]|[[#GetRenderSettings|GetRenderSettings]]()|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|[[../cPostEffect_ToneMapping|cPostEffect_ToneMapping]]|[[#GetToneMappingEffect|GetToneMappingEffect]]()|}}
{{CodeDocSummaryItem|[[../cWorld|cWorld]]|[[#GetWorld|GetWorld]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsListener|IsListener]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVisible|IsVisible]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveGuiSet|RemoveGuiSet]]([[../cGuiSet|cGuiSet@]] apSet)|}}
{{CodeDocSummaryItem|void|[[#RemoveRendererCallback|RemoveRendererCallback]]([[../iRendererCallback|iRendererCallback@]] apCallback)|}}
{{CodeDocSummaryItem|void|[[#RemoveViewportCallback|RemoveViewportCallback]]([[../iViewportCallback|iViewportCallback@]] apCallback)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCamera|SetCamera]]([[../cCamera|cCamera@]] apCamera)|}}
{{CodeDocSummaryItem|void|[[#SetFrameBuffer|SetFrameBuffer]]([[../iFrameBuffer|iFrameBuffer@]] apFrameBuffer)|}}
{{CodeDocSummaryItem|void|[[#SetIsListener|SetIsListener]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector2l|cVector2l]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetPostEffectComposite|SetPostEffectComposite]]([[../cPostEffectComposite|cPostEffectComposite@]] apPostEffectComposite)|}}
{{CodeDocSummaryItem|void|[[#SetRenderer|SetRenderer]]([[../iRenderer|iRenderer@]] apRenderer)|}}
{{CodeDocSummaryItem|void|[[#SetSize|SetSize]](const [[../cVector2l|cVector2l]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetVisible|SetVisible]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetWorld|SetWorld]]([[../cWorld|cWorld@]] apWorld, bool abResetEffects <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddGuiSet}}
<syntaxhighlight lang="c++">void AddGuiSet(cGuiSet@ apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSet|[[../cGuiSet|cGuiSet@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddRendererCallback}}
<syntaxhighlight lang="c++">void AddRendererCallback(iRendererCallback@ apCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCallback|[[../iRendererCallback|iRendererCallback@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddViewportCallback}}
<syntaxhighlight lang="c++">void AddViewportCallback(iViewportCallback@ apCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCallback|[[../iViewportCallback|iViewportCallback@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCamera}}
<syntaxhighlight lang="c++">cCamera@ GetCamera()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cCamera@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFrameBuffer}}
<syntaxhighlight lang="c++">iFrameBuffer@ GetFrameBuffer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iFrameBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">const cVector2l& GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2l&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostEffectComposite}}
<syntaxhighlight lang="c++">cPostEffectComposite@ GetPostEffectComposite()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffectComposite@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderer}}
<syntaxhighlight lang="c++">iRenderer@ GetRenderer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iRenderer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderSettings}}
<syntaxhighlight lang="c++">cRenderSettings@ GetRenderSettings()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cRenderSettings@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">const cVector2l& GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2l&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetToneMappingEffect}}
<syntaxhighlight lang="c++">cPostEffect_ToneMapping@ GetToneMappingEffect()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_ToneMapping@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorld}}
<syntaxhighlight lang="c++">cWorld@ GetWorld()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsListener}}
<syntaxhighlight lang="c++">bool IsListener()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsVisible}}
<syntaxhighlight lang="c++">bool IsVisible()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveGuiSet}}
<syntaxhighlight lang="c++">void RemoveGuiSet(cGuiSet@ apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSet|[[../cGuiSet|cGuiSet@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveRendererCallback}}
<syntaxhighlight lang="c++">void RemoveRendererCallback(iRendererCallback@ apCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCallback|[[../iRendererCallback|iRendererCallback@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveViewportCallback}}
<syntaxhighlight lang="c++">void RemoveViewportCallback(iViewportCallback@ apCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCallback|[[../iViewportCallback|iViewportCallback@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCamera}}
<syntaxhighlight lang="c++">void SetCamera(cCamera@ apCamera)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCamera|[[../cCamera|cCamera@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFrameBuffer}}
<syntaxhighlight lang="c++">void SetFrameBuffer(iFrameBuffer@ apFrameBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFrameBuffer|[[../iFrameBuffer|iFrameBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsListener}}
<syntaxhighlight lang="c++">void SetIsListener(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector2l &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPostEffectComposite}}
<syntaxhighlight lang="c++">void SetPostEffectComposite(cPostEffectComposite@ apPostEffectComposite)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPostEffectComposite|[[../cPostEffectComposite|cPostEffectComposite@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderer}}
<syntaxhighlight lang="c++">void SetRenderer(iRenderer@ apRenderer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apRenderer|[[../iRenderer|iRenderer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSize}}
<syntaxhighlight lang="c++">void SetSize(const cVector2l &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">void SetVisible(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorld}}
<syntaxhighlight lang="c++">void SetWorld(cWorld@ apWorld,
              bool abResetEffects = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../cWorld|cWorld@]]|}}
{{CodeDocDetailParam|abResetEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}