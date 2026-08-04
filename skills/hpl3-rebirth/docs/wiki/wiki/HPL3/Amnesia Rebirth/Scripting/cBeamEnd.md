{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cBeamEnd has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColor|GetColor]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetColor|SetColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#UpdateLogic|UpdateLogic]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddChild}}
<syntaxhighlight lang="c++">void AddChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cEntity3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEntity3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColor}}
<syntaxhighlight lang="c++">const cColor& GetColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityParent}}
<syntaxhighlight lang="c++">iEntity3D@ GetEntityParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityType}}
<syntaxhighlight lang="c++">eEntityType GetEntityType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eEntityType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetLocalMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalPosition}}
<syntaxhighlight lang="c++">cVector3f GetLocalPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransformUpdateCount}}
<syntaxhighlight lang="c++">int GetTransformUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetWorldMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldPosition}}
<syntaxhighlight lang="c++">cVector3f GetWorldPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasParent}}
<syntaxhighlight lang="c++">bool HasParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsChild}}
<syntaxhighlight lang="c++">bool IsChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColor}}
<syntaxhighlight lang="c++">void SetColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetName}}
<syntaxhighlight lang="c++">void SetName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScriptableIsSaved}}
<syntaxhighlight lang="c++">void SetScriptableIsSaved(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldMatrix}}
<syntaxhighlight lang="c++">void SetWorldMatrix(const cMatrixf &in a_mtxWorldTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxWorldTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldPosition}}
<syntaxhighlight lang="c++">void SetWorldPosition(const cVector3f &in avWorldPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avWorldPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLogic}}
<syntaxhighlight lang="c++">void UpdateLogic(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}