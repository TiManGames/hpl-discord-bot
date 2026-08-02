{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cMesh has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddAnimation|AddAnimation]]([[../cAnimation|cAnimation@]] apAnimation)|}}
{{CodeDocSummaryItem|void|[[#AddNode|AddNode]]([[../cNode3D|cNode3D@]] apNode)|}}
{{CodeDocSummaryItem|void|[[#ClearAnimations|ClearAnimations]](bool abDeleteAll)|}}
{{CodeDocSummaryItem|void|[[#CompileBonesAndSubMeshes|CompileBonesAndSubMeshes]]()|}}
{{CodeDocSummaryItem|[[../cSubMesh|cSubMesh]]|[[#CreateSubMesh|CreateSubMesh]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cAnimation|cAnimation]]|[[#GetAnimation|GetAnimation]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cAnimation|cAnimation]]|[[#GetAnimationFromName|GetAnimationFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetAnimationIndex|GetAnimationIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetAnimationNum|GetAnimationNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetBoneBoundingRadius|GetBoneBoundingRadius]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetNode|GetNode]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetNodeByName|GetNodeByName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetNodeNum|GetNodeNum]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetRootNode|GetRootNode]]()|}}
{{CodeDocSummaryItem|[[../cSkeleton|cSkeleton]]|[[#GetSkeleton|GetSkeleton]]()|}}
{{CodeDocSummaryItem|[[../cSubMesh|cSubMesh]]|[[#GetSubMesh|GetSubMesh]](uint alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetSubMeshIndex|GetSubMeshIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cSubMesh|cSubMesh]]|[[#GetSubMeshName|GetSubMeshName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetSubMeshNum|GetSubMeshNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetTriangleCount|GetTriangleCount]]()|}}
{{CodeDocSummaryItem|void|[[#SetSkeleton|SetSkeleton]]([[../cSkeleton|cSkeleton@]] apSkeleton)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddAnimation}}
<syntaxhighlight lang="c++">void AddAnimation(cAnimation@ apAnimation)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apAnimation|[[../cAnimation|cAnimation@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddNode}}
<syntaxhighlight lang="c++">void AddNode(cNode3D@ apNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearAnimations}}
<syntaxhighlight lang="c++">void ClearAnimations(bool abDeleteAll)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abDeleteAll|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CompileBonesAndSubMeshes}}
<syntaxhighlight lang="c++">void CompileBonesAndSubMeshes()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateSubMesh}}
<syntaxhighlight lang="c++">cSubMesh@ CreateSubMesh(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cSubMesh@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimation}}
<syntaxhighlight lang="c++">cAnimation@ GetAnimation(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationFromName}}
<syntaxhighlight lang="c++">cAnimation@ GetAnimationFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationIndex}}
<syntaxhighlight lang="c++">int GetAnimationIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationNum}}
<syntaxhighlight lang="c++">int GetAnimationNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneBoundingRadius}}
<syntaxhighlight lang="c++">float GetBoneBoundingRadius(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNode}}
<syntaxhighlight lang="c++">cNode3D@ GetNode(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeByName}}
<syntaxhighlight lang="c++">cNode3D@ GetNodeByName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeNum}}
<syntaxhighlight lang="c++">int GetNodeNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRootNode}}
<syntaxhighlight lang="c++">cNode3D@ GetRootNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSkeleton}}
<syntaxhighlight lang="c++">cSkeleton@ GetSkeleton()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cSkeleton@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMesh}}
<syntaxhighlight lang="c++">cSubMesh@ GetSubMesh(uint alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|uint|}}
{{CodeDocDetailReturn|cSubMesh@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshIndex}}
<syntaxhighlight lang="c++">int GetSubMeshIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshName}}
<syntaxhighlight lang="c++">cSubMesh@ GetSubMeshName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cSubMesh@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshNum}}
<syntaxhighlight lang="c++">int GetSubMeshNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTriangleCount}}
<syntaxhighlight lang="c++">int GetTriangleCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSkeleton}}
<syntaxhighlight lang="c++">void SetSkeleton(cSkeleton@ apSkeleton)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSkeleton|[[../cSkeleton|cSkeleton@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}