{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffect_Insanity has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#GetParams|GetParams]](float &out afAlpha, float &out afT, float &out afAmpT, float &out afWaveAlpha, float &out afZoomAlpha)|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDisabled|IsDisabled]]()|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisabled|SetDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetParams|SetParams]](float afAlpha, float afT, float afAmpT, float afWaveAlpha, float afZoomAlpha, [[../iTexture|iTexture@]] apAmp0Texture, [[../iTexture|iTexture@]] apAmp1Texture, [[../iTexture|iTexture@]] apZoomTexture)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetParams}}
<syntaxhighlight lang="c++">void GetParams(float &out afAlpha,
               float &out afT,
               float &out afAmpT,
               float &out afWaveAlpha,
               float &out afZoomAlpha)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|afAmpT|float|}}
{{CodeDocDetailParam|afWaveAlpha|float|}}
{{CodeDocDetailParam|afZoomAlpha|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDisabled}}
<syntaxhighlight lang="c++">bool IsDisabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Reset}}
<syntaxhighlight lang="c++">void Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisabled}}
<syntaxhighlight lang="c++">void SetDisabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParams}}
<syntaxhighlight lang="c++">void SetParams(float afAlpha,
               float afT,
               float afAmpT,
               float afWaveAlpha,
               float afZoomAlpha,
               iTexture@ apAmp0Texture,
               iTexture@ apAmp1Texture,
               iTexture@ apZoomTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|afAmpT|float|}}
{{CodeDocDetailParam|afWaveAlpha|float|}}
{{CodeDocDetailParam|afZoomAlpha|float|}}
{{CodeDocDetailParam|apAmp0Texture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailParam|apAmp1Texture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailParam|apZoomTexture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}