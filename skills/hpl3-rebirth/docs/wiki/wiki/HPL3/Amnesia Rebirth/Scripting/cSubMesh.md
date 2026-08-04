{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cSubMesh has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#Compile|Compile]]()|}}
{{CodeDocSummaryItem|[[../cMeshCollider|cMeshCollider]]|[[#CreateCollider|CreateCollider]]([[../eCollideShapeType|eCollideShapeType]] aType)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateCollideShape|CreateCollideShape]]([[../iPhysicsWorld|iPhysicsWorld@]] apWorld)|}}
{{CodeDocSummaryItem|[[../cMeshCollider|cMeshCollider]]|[[#GetCollider|GetCollider]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetColliderNum|GetColliderNum]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalTransform|GetLocalTransform]]()|}}
{{CodeDocSummaryItem|[[../cMaterial|cMaterial]]|[[#GetMaterial|GetMaterial]]()|}}
{{CodeDocSummaryItem|void|[[#GetMaterialName|GetMaterialName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetMaterialName|GetMaterialName]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetModelScale|GetModelScale]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../iVertexBuffer|iVertexBuffer]]|[[#GetVertexBuffer|GetVertexBuffer]]()|}}
{{CodeDocSummaryItem|bool|[[#IsCollideShape|IsCollideShape]]()|}}
{{CodeDocSummaryItem|void|[[#SetIsCollideShape|SetIsCollideShape]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLocalTransform|SetLocalTransform]](const [[../cMatrixf|cMatrixf]] &in a_mtxTrans)|}}
{{CodeDocSummaryItem|void|[[#SetMaterial|SetMaterial]]([[../cMaterial|cMaterial@]] apMaterial)|}}
{{CodeDocSummaryItem|void|[[#SetVertexBuffer|SetVertexBuffer]]([[../iVertexBuffer|iVertexBuffer@]] apVtxBuffer)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|Compile}}
<syntaxhighlight lang="c++">void Compile()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCollider}}
<syntaxhighlight lang="c++">cMeshCollider@ CreateCollider(eCollideShapeType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eCollideShapeType|eCollideShapeType]]|}}
{{CodeDocDetailReturn|cMeshCollider@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCollideShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateCollideShape(iPhysicsWorld@ apWorld)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../iPhysicsWorld|iPhysicsWorld@]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollider}}
<syntaxhighlight lang="c++">cMeshCollider@ GetCollider(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cMeshCollider@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColliderNum}}
<syntaxhighlight lang="c++">int GetColliderNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetLocalTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterial}}
<syntaxhighlight lang="c++">cMaterial@ GetMaterial()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterialName}}
<syntaxhighlight lang="c++">void GetMaterialName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterialName}}
<syntaxhighlight lang="c++">const tString& GetMaterialName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModelScale}}
<syntaxhighlight lang="c++">cVector3f GetModelScale()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVertexBuffer}}
<syntaxhighlight lang="c++">iVertexBuffer@ GetVertexBuffer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iVertexBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsCollideShape}}
<syntaxhighlight lang="c++">bool IsCollideShape()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsCollideShape}}
<syntaxhighlight lang="c++">void SetIsCollideShape(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalTransform}}
<syntaxhighlight lang="c++">void SetLocalTransform(const cMatrixf &in a_mtxTrans)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTrans|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaterial}}
<syntaxhighlight lang="c++">void SetMaterial(cMaterial@ apMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMaterial|[[../cMaterial|cMaterial@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVertexBuffer}}
<syntaxhighlight lang="c++">void SetVertexBuffer(iVertexBuffer@ apVtxBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVtxBuffer|[[../iVertexBuffer|iVertexBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}