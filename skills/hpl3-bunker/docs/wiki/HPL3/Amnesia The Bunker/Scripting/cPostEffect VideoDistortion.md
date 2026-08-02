{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffect_VideoDistortion has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#GetParams|GetParams]](float &out afAmount, float &out afRandomSeed, float &out afLineDensity, float &out afOffsetMul, [[../cVector2f|cVector2f]] &out avScreenOffset, [[../cVector2f|cVector2f]] &out avScreenBendAmount)|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDisabled|IsDisabled]]()|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisabled|SetDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetParams|SetParams]](float afAmount, float afRandomSeed, float afLineDensity, float afOffsetMul, const [[../cVector2f|cVector2f]] &in avScreenOffset, const [[../cVector2f|cVector2f]] &in avScreenBendAmount)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetParams}}
<syntaxhighlight lang="c++">void GetParams(float &out afAmount,
               float &out afRandomSeed,
               float &out afLineDensity,
               float &out afOffsetMul,
               cVector2f &out avScreenOffset,
               cVector2f &out avScreenBendAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAmount|float|}}
{{CodeDocDetailParam|afRandomSeed|float|}}
{{CodeDocDetailParam|afLineDensity|float|}}
{{CodeDocDetailParam|afOffsetMul|float|}}
{{CodeDocDetailParam|avScreenOffset|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avScreenBendAmount|[[../cVector2f|cVector2f]]|}}
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
<syntaxhighlight lang="c++">void SetParams(float afAmount,
               float afRandomSeed,
               float afLineDensity,
               float afOffsetMul,
               const cVector2f &in avScreenOffset,
               const cVector2f &in avScreenBendAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAmount|float|}}
{{CodeDocDetailParam|afRandomSeed|float|}}
{{CodeDocDetailParam|afLineDensity|float|}}
{{CodeDocDetailParam|afOffsetMul|float|}}
{{CodeDocDetailParam|avScreenOffset|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avScreenBendAmount|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}