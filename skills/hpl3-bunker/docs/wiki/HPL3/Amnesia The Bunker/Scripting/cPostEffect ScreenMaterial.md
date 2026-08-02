{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffect_ScreenMaterial has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#Clear|Clear]]()|}}
{{CodeDocSummaryItem|void|[[#CreateScreenMaterial|CreateScreenMaterial]](int alID, const [[../tString|tString]] &in asMaterial, const [[../cVector2f|cVector2f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize, float afAlpha, float afDepth)|}}
{{CodeDocSummaryItem|void|[[#DestroyScreenMaterial|DestroyScreenMaterial]](int alID)|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDisabled|IsDisabled]]()|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisabled|SetDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetScreenMaterialAlpha|SetScreenMaterialAlpha]](int alID, float afAlpha)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|Clear}}
<syntaxhighlight lang="c++">void Clear()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateScreenMaterial}}
<syntaxhighlight lang="c++">void CreateScreenMaterial(int alID,
                          const tString &in asMaterial,
                          const cVector2f &in avPos,
                          const cVector2f &in avSize,
                          float afAlpha,
                          float afDepth)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|asMaterial|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afDepth|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyScreenMaterial}}
<syntaxhighlight lang="c++">void DestroyScreenMaterial(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
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

{{CodeDocDetailTop|SetScreenMaterialAlpha}}
<syntaxhighlight lang="c++">void SetScreenMaterialAlpha(int alID,
                            float afAlpha)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}