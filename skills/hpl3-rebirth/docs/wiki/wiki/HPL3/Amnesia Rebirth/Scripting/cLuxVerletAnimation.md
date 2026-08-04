{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxVerletAnimation has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FadeAnimationTransformMul|FadeAnimationTransformMul]](float afNewMul, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeAnimationTransformMul|FadeAnimationTransformMul]](int alTreeIdx, float afNewMul, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeMoveToPosMul|FadeMoveToPosMul]](float afNewMul, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeMoveToPosMul|FadeMoveToPosMul]](int alTreeIdx, float afNewMul, float afTime)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|void|[[#LoadFromInstanceVariables|LoadFromInstanceVariables]]([[../cResourceVarsObject|cResourceVarsObject@]] apInstanceVars)|}}
{{CodeDocSummaryItem|void|[[#SetMovementOffsetMul|SetMovementOffsetMul]](float afGlobal, float afLocal)|}}
{{CodeDocSummaryItem|void|[[#SetPaused|SetPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetupVerletTree|SetupVerletTree]]([[../cNode3D|cNode3D@]] apRootNode, [[../cNode3D|cNode3D@]] apFinalNode, [[../cNode3D|cNode3D@]] apMoveNode, float afBaseDampingMul, float afBaseMoveToPositionMul, float afNodeStartMoveToPosMul, float afNodeEndMoveToPosMul, [[../eEasing|eEasing]] aNodeMoveToPosMulEasing <nowiki>=</nowiki> eEasing_Linear)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|FadeAnimationTransformMul}}
<syntaxhighlight lang="c++">void FadeAnimationTransformMul(float afNewMul,
                               float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNewMul|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeAnimationTransformMul}}
<syntaxhighlight lang="c++">void FadeAnimationTransformMul(int alTreeIdx,
                               float afNewMul,
                               float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alTreeIdx|int|}}
{{CodeDocDetailParam|afNewMul|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeMoveToPosMul}}
<syntaxhighlight lang="c++">void FadeMoveToPosMul(float afNewMul,
                      float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNewMul|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeMoveToPosMul}}
<syntaxhighlight lang="c++">void FadeMoveToPosMul(int alTreeIdx,
                      float afNewMul,
                      float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alTreeIdx|int|}}
{{CodeDocDetailParam|afNewMul|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromInstanceVariables}}
<syntaxhighlight lang="c++">void LoadFromInstanceVariables(cResourceVarsObject@ apInstanceVars)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apInstanceVars|[[../cResourceVarsObject|cResourceVarsObject@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMovementOffsetMul}}
<syntaxhighlight lang="c++">void SetMovementOffsetMul(float afGlobal,
                          float afLocal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afGlobal|float|}}
{{CodeDocDetailParam|afLocal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPaused}}
<syntaxhighlight lang="c++">void SetPaused(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupVerletTree}}
<syntaxhighlight lang="c++">void SetupVerletTree(cNode3D@ apRootNode,
                     cNode3D@ apFinalNode,
                     cNode3D@ apMoveNode,
                     float afBaseDampingMul,
                     float afBaseMoveToPositionMul,
                     float afNodeStartMoveToPosMul,
                     float afNodeEndMoveToPosMul,
                     eEasing aNodeMoveToPosMulEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apRootNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailParam|apFinalNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailParam|apMoveNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailParam|afBaseDampingMul|float|}}
{{CodeDocDetailParam|afBaseMoveToPositionMul|float|}}
{{CodeDocDetailParam|afNodeStartMoveToPosMul|float|}}
{{CodeDocDetailParam|afNodeEndMoveToPosMul|float|}}
{{CodeDocDetailParam|aNodeMoveToPosMulEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}