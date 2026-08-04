{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffect_ToneMapping has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FadeExposure|FadeExposure]](float afExposure, float afWhiteCut, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeWindowExposure|FadeWindowExposure]](float afExposure, float afWhiteCut)|}}
{{CodeDocSummaryItem|bool|[[#GetBloomActive|GetBloomActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetColorGradingActive|GetColorGradingActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetExposure|GetExposure]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFilmGrainActive|GetFilmGrainActive]]()|}}
{{CodeDocSummaryItem|void|[[#GetParams|GetParams]](float &out afKey, float &out afGammaCorrection, float &out afFilmGrainIntensity, float &out afBrightPass, float &out afBloomWidth, [[../cColor|cColor]] &out avBloomTint, float &out afBloomFalloff)|}}
{{CodeDocSummaryItem|float|[[#GetTransitionTime|GetTransitionTime]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDisabled|IsDisabled]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveGradingTexture|RemoveGradingTexture]](const [[../tString|tString]] &in asTexture)|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBloomActive|SetBloomActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetColorGradingActive|SetColorGradingActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisabled|SetDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFilmGrainActive|SetFilmGrainActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetGradingTexture|SetGradingTexture]](int alPrio, const [[../tString|tString]] &in asTexture, float afAlpha)|}}
{{CodeDocSummaryItem|void|[[#SetParams|SetParams]](float afKey, float afGammaCorrection, float afFilmGrainIntensity, float afBrightPass, float afBloomWidth, const [[../cColor|cColor]] &in avBloomTint, float afBloomFalloff)|}}
{{CodeDocSummaryItem|void|[[#SetSRGBGamma|SetSRGBGamma]](bool abX)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|FadeExposure}}
<syntaxhighlight lang="c++">void FadeExposure(float afExposure,
                  float afWhiteCut,
                  float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afExposure|float|}}
{{CodeDocDetailParam|afWhiteCut|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeWindowExposure}}
<syntaxhighlight lang="c++">void FadeWindowExposure(float afExposure,
                        float afWhiteCut)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afExposure|float|}}
{{CodeDocDetailParam|afWhiteCut|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBloomActive}}
<syntaxhighlight lang="c++">bool GetBloomActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColorGradingActive}}
<syntaxhighlight lang="c++">bool GetColorGradingActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetExposure}}
<syntaxhighlight lang="c++">float GetExposure()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFilmGrainActive}}
<syntaxhighlight lang="c++">bool GetFilmGrainActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParams}}
<syntaxhighlight lang="c++">void GetParams(float &out afKey,
               float &out afGammaCorrection,
               float &out afFilmGrainIntensity,
               float &out afBrightPass,
               float &out afBloomWidth,
               cColor &out avBloomTint,
               float &out afBloomFalloff)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afKey|float|}}
{{CodeDocDetailParam|afGammaCorrection|float|}}
{{CodeDocDetailParam|afFilmGrainIntensity|float|}}
{{CodeDocDetailParam|afBrightPass|float|}}
{{CodeDocDetailParam|afBloomWidth|float|}}
{{CodeDocDetailParam|avBloomTint|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afBloomFalloff|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransitionTime}}
<syntaxhighlight lang="c++">float GetTransitionTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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

{{CodeDocDetailTop|RemoveGradingTexture}}
<syntaxhighlight lang="c++">void RemoveGradingTexture(const tString &in asTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asTexture|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
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

{{CodeDocDetailTop|SetBloomActive}}
<syntaxhighlight lang="c++">void SetBloomActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColorGradingActive}}
<syntaxhighlight lang="c++">void SetColorGradingActive(bool abX)</syntaxhighlight>
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

{{CodeDocDetailTop|SetFilmGrainActive}}
<syntaxhighlight lang="c++">void SetFilmGrainActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGradingTexture}}
<syntaxhighlight lang="c++">void SetGradingTexture(int alPrio,
                       const tString &in asTexture,
                       float afAlpha)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|asTexture|[[../tString|tString]]|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParams}}
<syntaxhighlight lang="c++">void SetParams(float afKey,
               float afGammaCorrection,
               float afFilmGrainIntensity,
               float afBrightPass,
               float afBloomWidth,
               const cColor &in avBloomTint,
               float afBloomFalloff)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afKey|float|}}
{{CodeDocDetailParam|afGammaCorrection|float|}}
{{CodeDocDetailParam|afFilmGrainIntensity|float|}}
{{CodeDocDetailParam|afBrightPass|float|}}
{{CodeDocDetailParam|afBloomWidth|float|}}
{{CodeDocDetailParam|avBloomTint|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afBloomFalloff|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSRGBGamma}}
<syntaxhighlight lang="c++">void SetSRGBGamma(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}