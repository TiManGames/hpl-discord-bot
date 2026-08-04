{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cNode3D has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../cNode3D|cNode3D@]] apChild)|}}
{{CodeDocSummaryItem|bool|[[#AddEntity|AddEntity]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#AddRotation|AddRotation]](const [[../cVector3f|cVector3f]] &in avRot, [[../eEulerRotationOrder|eEulerRotationOrder]] aOrder)|}}
{{CodeDocSummaryItem|void|[[#AddRotation|AddRotation]](const [[../cQuaternion|cQuaternion]] &in aqRotation, bool abNormalize <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#AddScale|AddScale]](const [[../cVector3f|cVector3f]] &in avScale)|}}
{{CodeDocSummaryItem|void|[[#AddTranslation|AddTranslation]](const [[../cVector3f|cVector3f]] &in avTrans)|}}
{{CodeDocSummaryItem|void|[[#ApplyPostAnimTransform|ApplyPostAnimTransform]](bool abSetChildrenUpdated)|}}
{{CodeDocSummaryItem|void|[[#ApplyPreAnimTransform|ApplyPreAnimTransform]](bool abSetChildrenUpdated)|}}
{{CodeDocSummaryItem|void|[[#ClearEntities|ClearEntities]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#CreateChild|CreateChild]](const [[../tString|tString]] &in asName, bool abAutoDeleteChildren <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|[[../cNode3DIterator|cNode3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|int|[[#GetCustomFlags|GetCustomFlags]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetParent|GetParent]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetPostAnimTransform|GetPostAnimTransform]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetPreAnimTransform|GetPreAnimTransform]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUsePostAnimTransform|GetUsePostAnimTransform]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUsePreAnimTransform|GetUsePreAnimTransform]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|void|[[#NormalizeRotation|NormalizeRotation]](float afWeightMul <nowiki>=</nowiki> 1.0f)|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../cNode3D|cNode3D@]] apNode)|}}
{{CodeDocSummaryItem|bool|[[#RemoveEntity|RemoveEntity]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCustomFlags|SetCustomFlags]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, bool abSetChildrenUpdated <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#SetParent|SetParent]]([[../cNode3D|cNode3D@]] apNode)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetPostTransform|SetPostTransform]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetPostTransformReversed|SetPostTransformReversed]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPreTransform|SetPreTransform]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetUsePostTransform|SetUsePostTransform]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUsePreTransform|SetUsePreTransform]](bool abX)|}}
{{CodeDocSummaryItem|int|[[#SetVisible|SetVisible]](bool abX, bool abCascade)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#UpdateEntityChildren|UpdateEntityChildren]]()|}}
{{CodeDocSummaryItem|void|[[#UpdateMatrix|UpdateMatrix]](bool abSetChildrenUpdated)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddChild}}
<syntaxhighlight lang="c++">void AddChild(cNode3D@ apChild)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apChild|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddEntity}}
<syntaxhighlight lang="c++">bool AddEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddRotation}}
<syntaxhighlight lang="c++">void AddRotation(const cVector3f &in avRot,
                 eEulerRotationOrder aOrder)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aOrder|[[../eEulerRotationOrder|eEulerRotationOrder]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddRotation}}
<syntaxhighlight lang="c++">void AddRotation(const cQuaternion &in aqRotation,
                 bool abNormalize = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqRotation|[[../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|abNormalize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddScale}}
<syntaxhighlight lang="c++">void AddScale(const cVector3f &in avScale)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avScale|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTranslation}}
<syntaxhighlight lang="c++">void AddTranslation(const cVector3f &in avTrans)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avTrans|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ApplyPostAnimTransform}}
<syntaxhighlight lang="c++">void ApplyPostAnimTransform(bool abSetChildrenUpdated)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abSetChildrenUpdated|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ApplyPreAnimTransform}}
<syntaxhighlight lang="c++">void ApplyPreAnimTransform(bool abSetChildrenUpdated)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abSetChildrenUpdated|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearEntities}}
<syntaxhighlight lang="c++">void ClearEntities()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateChild}}
<syntaxhighlight lang="c++">cNode3D@ CreateChild(const tString &in asName,
                     bool abAutoDeleteChildren = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAutoDeleteChildren|bool|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cNode3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCustomFlags}}
<syntaxhighlight lang="c++">int GetCustomFlags()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetLocalMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
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

{{CodeDocDetailTop|GetParent}}
<syntaxhighlight lang="c++">cNode3D@ GetParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostAnimTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetPostAnimTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPreAnimTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetPreAnimTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsePostAnimTransform}}
<syntaxhighlight lang="c++">bool GetUsePostAnimTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsePreAnimTransform}}
<syntaxhighlight lang="c++">bool GetUsePreAnimTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetWorldMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldPosition}}
<syntaxhighlight lang="c++">cVector3f GetWorldPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|NormalizeRotation}}
<syntaxhighlight lang="c++">void NormalizeRotation(float afWeightMul = 1.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afWeightMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(cNode3D@ apNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveEntity}}
<syntaxhighlight lang="c++">bool RemoveEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomFlags}}
<syntaxhighlight lang="c++">void SetCustomFlags(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform,
               bool abSetChildrenUpdated = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|abSetChildrenUpdated|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParent}}
<syntaxhighlight lang="c++">void SetParent(cNode3D@ apNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apNode|[[../cNode3D|cNode3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPostTransform}}
<syntaxhighlight lang="c++">void SetPostTransform(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPostTransformReversed}}
<syntaxhighlight lang="c++">void SetPostTransformReversed(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPreTransform}}
<syntaxhighlight lang="c++">void SetPreTransform(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUsePostTransform}}
<syntaxhighlight lang="c++">void SetUsePostTransform(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUsePreTransform}}
<syntaxhighlight lang="c++">void SetUsePreTransform(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">int SetVisible(bool abX,
               bool abCascade)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abCascade|bool|}}
{{CodeDocDetailReturn|int|}}
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

{{CodeDocDetailTop|UpdateEntityChildren}}
<syntaxhighlight lang="c++">void UpdateEntityChildren()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateMatrix}}
<syntaxhighlight lang="c++">void UpdateMatrix(bool abSetChildrenUpdated)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abSetChildrenUpdated|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}