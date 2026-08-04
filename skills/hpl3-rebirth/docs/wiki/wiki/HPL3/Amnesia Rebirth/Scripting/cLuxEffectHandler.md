{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxEffectHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddEdgeGlowObject|AddEdgeGlowObject]]([[../iLuxEntity|iLuxEntity@]] apEntity, const [[../cColor|cColor]] &in aColor, float afAlpha, float afEdgeThickness, float afLightLimit)|}}
{{CodeDocSummaryItem|void|[[#AddGlowObject|AddGlowObject]]([[../iLuxEntity|iLuxEntity@]] apEntity, const [[../cColor|cColor]] &in aColor, float afY)|}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afTime)|}}
{{CodeDocSummaryItem|[[../iScrEffect_Interface|iScrEffect_Interface]]|[[#GetEffect|GetEffect]](int alId)|}}
{{CodeDocSummaryItem|float|[[#GetFadeAlpha|GetFadeAlpha]]()|}}
{{CodeDocSummaryItem|bool|[[#IsFading|IsFading]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddEdgeGlowObject}}
<syntaxhighlight lang="c++">void AddEdgeGlowObject(iLuxEntity@ apEntity,
                       const cColor &in aColor,
                       float afAlpha,
                       float afEdgeThickness,
                       float afLightLimit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afEdgeThickness|float|}}
{{CodeDocDetailParam|afLightLimit|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddGlowObject}}
<syntaxhighlight lang="c++">void AddGlowObject(iLuxEntity@ apEntity,
                   const cColor &in aColor,
                   float afY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afY|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOut}}
<syntaxhighlight lang="c++">void FadeOut(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffect}}
<syntaxhighlight lang="c++">iScrEffect_Interface@ GetEffect(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|iScrEffect_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFadeAlpha}}
<syntaxhighlight lang="c++">float GetFadeAlpha()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFading}}
<syntaxhighlight lang="c++">bool IsFading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}