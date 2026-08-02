{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cGuiGfxElement has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cGuiGfxAnimation|cGuiGfxAnimation]]|[[#CreateAnimtion|CreateAnimtion]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetActiveSize|GetActiveSize]]()|}}
{{CodeDocSummaryItem|[[../cGuiGfxAnimation|cGuiGfxAnimation]]|[[#GetAnimation|GetAnimation]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetAnimationNum|GetAnimationNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetAnimationPaused|GetAnimationPaused]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFlipUvYAxis|GetFlipUvYAxis]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetImageSize|GetImageSize]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetOffset|GetOffset]]()|}}
{{CodeDocSummaryItem|void|[[#PlayAnimation|PlayAnimation]](int alNum)|}}
{{CodeDocSummaryItem|void|[[#SetActiveSize|SetActiveSize]](const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetAnimationPaused|SetAnimationPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetAnimationTime|SetAnimationTime]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#SetColor|SetColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetFlipUvYAxis|SetFlipUvYAxis]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMaterial|SetMaterial]]([[../iGuiMaterial|iGuiMaterial@]] apMat)|}}
{{CodeDocSummaryItem|void|[[#SetOffset|SetOffset]](const [[../cVector3f|cVector3f]] &in avOffset)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CreateAnimtion}}
<syntaxhighlight lang="c++">cGuiGfxAnimation@ CreateAnimtion(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cGuiGfxAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActiveSize}}
<syntaxhighlight lang="c++">const cVector2f& GetActiveSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimation}}
<syntaxhighlight lang="c++">cGuiGfxAnimation@ GetAnimation(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cGuiGfxAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationNum}}
<syntaxhighlight lang="c++">int GetAnimationNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationPaused}}
<syntaxhighlight lang="c++">bool GetAnimationPaused()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlipUvYAxis}}
<syntaxhighlight lang="c++">bool GetFlipUvYAxis()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetImageSize}}
<syntaxhighlight lang="c++">const cVector2f& GetImageSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayAnimation}}
<syntaxhighlight lang="c++">void PlayAnimation(int alNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActiveSize}}
<syntaxhighlight lang="c++">void SetActiveSize(const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAnimationPaused}}
<syntaxhighlight lang="c++">void SetAnimationPaused(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAnimationTime}}
<syntaxhighlight lang="c++">void SetAnimationTime(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColor}}
<syntaxhighlight lang="c++">void SetColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlipUvYAxis}}
<syntaxhighlight lang="c++">void SetFlipUvYAxis(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaterial}}
<syntaxhighlight lang="c++">void SetMaterial(iGuiMaterial@ apMat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMat|[[../iGuiMaterial|iGuiMaterial@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetOffset}}
<syntaxhighlight lang="c++">void SetOffset(const cVector3f &in avOffset)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}