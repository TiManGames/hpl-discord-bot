{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cMeshEntity has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#AddSocket|AddSocket]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asAttachedBoneName, const [[../cMatrixf|cMatrixf]] &in a_mtxLocalTransform, bool abRescale <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#AlignBodiesToSkeleton|AlignBodiesToSkeleton]](bool abCalculateSpeed)|}}
{{CodeDocSummaryItem|bool|[[#AnimationIsOver|AnimationIsOver]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#CalculateTransformFromSkeleton|CalculateTransformFromSkeleton]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#CalculateTransformFromSkeleton|CalculateTransformFromSkeleton]]([[../cVector3f|cVector3f]] &out apPostion, [[../cVector3f|cVector3f]] &out apAngles)|}}
{{CodeDocSummaryItem|bool|[[#CheckColliderShapeCollision|CheckColliderShapeCollision]]([[../iPhysicsWorld|iPhysicsWorld@]] apWorld, [[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxShape, [[../array|array]]<[[../cVector3f|cVector3f]]> avPosList, [[../array|array]]<int> avBoneIndexList)|}}
{{CodeDocSummaryItem|void|[[#ClearSockets|ClearSockets]]()|}}
{{CodeDocSummaryItem|[[../cProcAnimation|cProcAnimation]]|[[#CreateProcAnimation|CreateProcAnimation]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#FadeInLayer|FadeInLayer]](const [[../tString|tString]] &in asLayer, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeOutLayer|FadeOutLayer]](const [[../tString|tString]] &in asLayer, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeSkeletonPhysicsWeight|FadeSkeletonPhysicsWeight]](float afTime)|}}
{{CodeDocSummaryItem|[[../cActorAnimController|cActorAnimController]]|[[#GetActorAnimController|GetActorAnimController]]()|}}
{{CodeDocSummaryItem|bool|[[#GetAnimationEnabled|GetAnimationEnabled]]()|}}
{{CodeDocSummaryItem|[[../cAnimationState|cAnimationState]]|[[#GetAnimationState|GetAnimationState]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cAnimationState|cAnimationState]]|[[#GetAnimationStateFromName|GetAnimationStateFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetAnimationStateIndex|GetAnimationStateIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetAnimationStateNum|GetAnimationStateNum]]()|}}
{{CodeDocSummaryItem|[[../cBoneState|cBoneState]]|[[#GetBoneState|GetBoneState]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cBoneState|cBoneState]]|[[#GetBoneStateFromName|GetBoneStateFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBoneStateIndex|GetBoneStateIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBoneStateIndexFromPtr|GetBoneStateIndexFromPtr]]([[../cBoneState|cBoneState@]] apBoneState)|}}
{{CodeDocSummaryItem|int|[[#GetBoneStateNum|GetBoneStateNum]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetBoneStateRoot|GetBoneStateRoot]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|float|[[#GetCoverageAmount|GetCoverageAmount]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetDiffuseColorMul|GetDiffuseColorMul]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetIlluminationColor|GetIlluminationColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetLiquidAmount|GetLiquidAmount]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|[[../cMesh|cMesh]]|[[#GetMesh|GetMesh]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetNodeState|GetNodeState]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetNodeStateFromName|GetNodeStateFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetNodeStateIndex|GetNodeStateIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetNodeStateNum|GetNodeStateNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetNormalizeAnimationLayers|GetNormalizeAnimationLayers]]()|}}
{{CodeDocSummaryItem|bool|[[#GetNormalizeAnimationWeights|GetNormalizeAnimationWeights]]()|}}
{{CodeDocSummaryItem|[[../cProcAnimation|cProcAnimation]]|[[#GetProcAnimation|GetProcAnimation]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cProcAnimation|cProcAnimation]]|[[#GetProcAnimationFromName|GetProcAnimationFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetProcAnimationNum|GetProcAnimationNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetRenderLayer|GetRenderLayer]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSkeletonCollidersActive|GetSkeletonCollidersActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSkeletonPhysicsActive|GetSkeletonPhysicsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSkeletonPhysicsCanSleep|GetSkeletonPhysicsCanSleep]]()|}}
{{CodeDocSummaryItem|float|[[#GetSkeletonPhysicsWeight|GetSkeletonPhysicsWeight]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetSocket|GetSocket]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetSocketFromIndex|GetSocketFromIndex]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetSocketIndex|GetSocketIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetSocketNum|GetSocketNum]]()|}}
{{CodeDocSummaryItem|[[../cSubMeshEntity|cSubMeshEntity]]|[[#GetSubMeshEntity|GetSubMeshEntity]](uint alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetSubMeshEntityIndex|GetSubMeshEntityIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cSubMeshEntity|cSubMeshEntity]]|[[#GetSubMeshEntityName|GetSubMeshEntityName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetSubMeshEntityNum|GetSubMeshEntityNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#IsStatic|IsStatic]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVisible|IsVisible]]()|}}
{{CodeDocSummaryItem|void|[[#Play|Play]](int alIndex, bool abLoop, bool bStopPrev)|}}
{{CodeDocSummaryItem|void|[[#PlayFadeTo|PlayFadeTo]](int alIndex, bool abLoop, float afTime)|}}
{{CodeDocSummaryItem|void|[[#PlayFadeToName|PlayFadeToName]](const [[../tString|tString]] &in asName, bool abLoop, float afTime)|}}
{{CodeDocSummaryItem|void|[[#PlayName|PlayName]](const [[../tString|tString]] &in asName, bool abLoop, bool bStopPrev)|}}
{{CodeDocSummaryItem|void|[[#PostUpdateLogic|PostUpdateLogic]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#ProcPlay|ProcPlay]](int alIdx, float afAnimTime, bool abLoop, bool abStopPrev)|}}
{{CodeDocSummaryItem|void|[[#ProcPlayFadeTo|ProcPlayFadeTo]](int alIndex, float afAnimTime, bool abLoop, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#ProcPlayFadeToName|ProcPlayFadeToName]](const [[../tString|tString]] &in asName, float afAnimTime, bool abLoop, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#ProcPlayName|ProcPlayName]](const [[../tString|tString]] &in asName, float afAnimTime, bool abLoop, bool abStopPrev)|}}
{{CodeDocSummaryItem|void|[[#ProcStop|ProcStop]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#ResetGraphicsUpdated|ResetGraphicsUpdated]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetAnimationEnabled|SetAnimationEnabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCoverageAmount|SetCoverageAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDiffuseColorMul|SetDiffuseColorMul]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetDisableSleep|SetDisableSleep]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIlluminationColor|SetIlluminationColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetIsOccluder|SetIsOccluder]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLayerWeight|SetLayerWeight]](const [[../tString|tString]] &in asLayer, float afWeight)|}}
{{CodeDocSummaryItem|void|[[#SetLiquidAmount|SetLiquidAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetNormalizeAnimationLayers|SetNormalizeAnimationLayers]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetNormalizeAnimationWeights|SetNormalizeAnimationWeights]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetRenderFlagBit|SetRenderFlagBit]](int alFlagBit, bool abSet)|}}
{{CodeDocSummaryItem|void|[[#SetRenderLayer|SetRenderLayer]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSkeletonCollidersActive|SetSkeletonCollidersActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSkeletonPhysicsActive|SetSkeletonPhysicsActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSkeletonPhysicsCanSleep|SetSkeletonPhysicsCanSleep]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSkeletonPhysicsWeight|SetSkeletonPhysicsWeight]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetStatic|SetStatic]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUpdateBonesWhenCulled|SetUpdateBonesWhenCulled]](bool abValue)|}}
{{CodeDocSummaryItem|void|[[#SetVariableAnimationUpdate|SetVariableAnimationUpdate]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVisible|SetVisible]](bool abVisible)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]]()|}}
{{CodeDocSummaryItem|void|[[#UpdateAnimation|UpdateAnimation]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#UpdateLogic|UpdateLogic]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#UseAutomaticLiquidAmount|UseAutomaticLiquidAmount]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddChild}}
<syntaxhighlight lang="c++">void AddChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddSocket}}
<syntaxhighlight lang="c++">cNode3D@ AddSocket(const tString &in asName,
                   const tString &in asAttachedBoneName,
                   const cMatrixf &in a_mtxLocalTransform,
                   bool abRescale = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asAttachedBoneName|[[../tString|tString]]|}}
{{CodeDocDetailParam|a_mtxLocalTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|abRescale|bool|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AlignBodiesToSkeleton}}
<syntaxhighlight lang="c++">void AlignBodiesToSkeleton(bool abCalculateSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abCalculateSpeed|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AnimationIsOver}}
<syntaxhighlight lang="c++">bool AnimationIsOver(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CalculateTransformFromSkeleton}}
<syntaxhighlight lang="c++">cMatrixf CalculateTransformFromSkeleton()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CalculateTransformFromSkeleton}}
<syntaxhighlight lang="c++">cMatrixf CalculateTransformFromSkeleton(cVector3f &out apPostion,
                                        cVector3f &out apAngles)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPostion|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apAngles|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckColliderShapeCollision}}
<syntaxhighlight lang="c++">bool CheckColliderShapeCollision(iPhysicsWorld@ apWorld,
                                 iCollideShape@ apShape,
                                 const cMatrixf &in a_mtxShape,
                                 cVector3f avPosList,
                                 int avBoneIndexList)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../iPhysicsWorld|iPhysicsWorld@]]|}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxShape|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avPosList|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avBoneIndexList|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearSockets}}
<syntaxhighlight lang="c++">void ClearSockets()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateProcAnimation}}
<syntaxhighlight lang="c++">cProcAnimation@ CreateProcAnimation(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cProcAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeInLayer}}
<syntaxhighlight lang="c++">void FadeInLayer(const tString &in asLayer,
                 float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLayer|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOutLayer}}
<syntaxhighlight lang="c++">void FadeOutLayer(const tString &in asLayer,
                  float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLayer|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeSkeletonPhysicsWeight}}
<syntaxhighlight lang="c++">void FadeSkeletonPhysicsWeight(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActorAnimController}}
<syntaxhighlight lang="c++">cActorAnimController@ GetActorAnimController()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cActorAnimController@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationEnabled}}
<syntaxhighlight lang="c++">bool GetAnimationEnabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationState}}
<syntaxhighlight lang="c++">cAnimationState@ GetAnimationState(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cAnimationState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationStateFromName}}
<syntaxhighlight lang="c++">cAnimationState@ GetAnimationStateFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cAnimationState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationStateIndex}}
<syntaxhighlight lang="c++">int GetAnimationStateIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationStateNum}}
<syntaxhighlight lang="c++">int GetAnimationStateNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneState}}
<syntaxhighlight lang="c++">cBoneState@ GetBoneState(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cBoneState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneStateFromName}}
<syntaxhighlight lang="c++">cBoneState@ GetBoneStateFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cBoneState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneStateIndex}}
<syntaxhighlight lang="c++">int GetBoneStateIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneStateIndexFromPtr}}
<syntaxhighlight lang="c++">int GetBoneStateIndexFromPtr(cBoneState@ apBoneState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBoneState|[[../cBoneState|cBoneState@]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneStateNum}}
<syntaxhighlight lang="c++">int GetBoneStateNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneStateRoot}}
<syntaxhighlight lang="c++">cNode3D@ GetBoneStateRoot()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
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

{{CodeDocDetailTop|GetCoverageAmount}}
<syntaxhighlight lang="c++">float GetCoverageAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDiffuseColorMul}}
<syntaxhighlight lang="c++">const cColor& GetDiffuseColorMul()</syntaxhighlight>
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

{{CodeDocDetailTop|GetIlluminationColor}}
<syntaxhighlight lang="c++">const cColor& GetIlluminationColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLiquidAmount}}
<syntaxhighlight lang="c++">float GetLiquidAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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

{{CodeDocDetailTop|GetMesh}}
<syntaxhighlight lang="c++">cMesh@ GetMesh()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMesh@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeState}}
<syntaxhighlight lang="c++">cNode3D@ GetNodeState(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeStateFromName}}
<syntaxhighlight lang="c++">cNode3D@ GetNodeStateFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeStateIndex}}
<syntaxhighlight lang="c++">int GetNodeStateIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeStateNum}}
<syntaxhighlight lang="c++">int GetNodeStateNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNormalizeAnimationLayers}}
<syntaxhighlight lang="c++">bool GetNormalizeAnimationLayers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNormalizeAnimationWeights}}
<syntaxhighlight lang="c++">bool GetNormalizeAnimationWeights()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProcAnimation}}
<syntaxhighlight lang="c++">cProcAnimation@ GetProcAnimation(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cProcAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProcAnimationFromName}}
<syntaxhighlight lang="c++">cProcAnimation@ GetProcAnimationFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cProcAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProcAnimationNum}}
<syntaxhighlight lang="c++">int GetProcAnimationNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderLayer}}
<syntaxhighlight lang="c++">int GetRenderLayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSkeletonCollidersActive}}
<syntaxhighlight lang="c++">bool GetSkeletonCollidersActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSkeletonPhysicsActive}}
<syntaxhighlight lang="c++">bool GetSkeletonPhysicsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSkeletonPhysicsCanSleep}}
<syntaxhighlight lang="c++">bool GetSkeletonPhysicsCanSleep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSkeletonPhysicsWeight}}
<syntaxhighlight lang="c++">float GetSkeletonPhysicsWeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSocket}}
<syntaxhighlight lang="c++">cNode3D@ GetSocket(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSocketFromIndex}}
<syntaxhighlight lang="c++">cNode3D@ GetSocketFromIndex(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSocketIndex}}
<syntaxhighlight lang="c++">int GetSocketIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSocketNum}}
<syntaxhighlight lang="c++">int GetSocketNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshEntity}}
<syntaxhighlight lang="c++">cSubMeshEntity@ GetSubMeshEntity(uint alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|uint|}}
{{CodeDocDetailReturn|cSubMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshEntityIndex}}
<syntaxhighlight lang="c++">int GetSubMeshEntityIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshEntityName}}
<syntaxhighlight lang="c++">cSubMeshEntity@ GetSubMeshEntityName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cSubMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubMeshEntityNum}}
<syntaxhighlight lang="c++">int GetSubMeshEntityNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
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

{{CodeDocDetailTop|IsStatic}}
<syntaxhighlight lang="c++">bool IsStatic()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsVisible}}
<syntaxhighlight lang="c++">bool IsVisible()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Play}}
<syntaxhighlight lang="c++">void Play(int alIndex,
          bool abLoop,
          bool bStopPrev)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|bStopPrev|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayFadeTo}}
<syntaxhighlight lang="c++">void PlayFadeTo(int alIndex,
                bool abLoop,
                float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayFadeToName}}
<syntaxhighlight lang="c++">void PlayFadeToName(const tString &in asName,
                    bool abLoop,
                    float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayName}}
<syntaxhighlight lang="c++">void PlayName(const tString &in asName,
              bool abLoop,
              bool bStopPrev)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|bStopPrev|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdateLogic}}
<syntaxhighlight lang="c++">void PostUpdateLogic(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcPlay}}
<syntaxhighlight lang="c++">void ProcPlay(int alIdx,
              float afAnimTime,
              bool abLoop,
              bool abStopPrev)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailParam|afAnimTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abStopPrev|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcPlayFadeTo}}
<syntaxhighlight lang="c++">void ProcPlayFadeTo(int alIndex,
                    float afAnimTime,
                    bool abLoop,
                    float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailParam|afAnimTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcPlayFadeToName}}
<syntaxhighlight lang="c++">void ProcPlayFadeToName(const tString &in asName,
                        float afAnimTime,
                        bool abLoop,
                        float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afAnimTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcPlayName}}
<syntaxhighlight lang="c++">void ProcPlayName(const tString &in asName,
                  float afAnimTime,
                  bool abLoop,
                  bool abStopPrev)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afAnimTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abStopPrev|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcStop}}
<syntaxhighlight lang="c++">void ProcStop()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetGraphicsUpdated}}
<syntaxhighlight lang="c++">void ResetGraphicsUpdated()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAnimationEnabled}}
<syntaxhighlight lang="c++">void SetAnimationEnabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCoverageAmount}}
<syntaxhighlight lang="c++">void SetCoverageAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDiffuseColorMul}}
<syntaxhighlight lang="c++">void SetDiffuseColorMul(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisableSleep}}
<syntaxhighlight lang="c++">void SetDisableSleep(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIlluminationColor}}
<syntaxhighlight lang="c++">void SetIlluminationColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsOccluder}}
<syntaxhighlight lang="c++">void SetIsOccluder(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLayerWeight}}
<syntaxhighlight lang="c++">void SetLayerWeight(const tString &in asLayer,
                    float afWeight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLayer|[[../tString|tString]]|}}
{{CodeDocDetailParam|afWeight|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLiquidAmount}}
<syntaxhighlight lang="c++">void SetLiquidAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
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

{{CodeDocDetailTop|SetNormalizeAnimationLayers}}
<syntaxhighlight lang="c++">void SetNormalizeAnimationLayers(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNormalizeAnimationWeights}}
<syntaxhighlight lang="c++">void SetNormalizeAnimationWeights(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderFlagBit}}
<syntaxhighlight lang="c++">void SetRenderFlagBit(int alFlagBit,
                      bool abSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlagBit|int|}}
{{CodeDocDetailParam|abSet|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderLayer}}
<syntaxhighlight lang="c++">void SetRenderLayer(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScriptableIsSaved}}
<syntaxhighlight lang="c++">void SetScriptableIsSaved(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSkeletonCollidersActive}}
<syntaxhighlight lang="c++">void SetSkeletonCollidersActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSkeletonPhysicsActive}}
<syntaxhighlight lang="c++">void SetSkeletonPhysicsActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSkeletonPhysicsCanSleep}}
<syntaxhighlight lang="c++">void SetSkeletonPhysicsCanSleep(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSkeletonPhysicsWeight}}
<syntaxhighlight lang="c++">void SetSkeletonPhysicsWeight(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStatic}}
<syntaxhighlight lang="c++">void SetStatic(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUpdateBonesWhenCulled}}
<syntaxhighlight lang="c++">void SetUpdateBonesWhenCulled(bool abValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abValue|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVariableAnimationUpdate}}
<syntaxhighlight lang="c++">void SetVariableAnimationUpdate(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">void SetVisible(bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abVisible|bool|}}
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

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateAnimation}}
<syntaxhighlight lang="c++">void UpdateAnimation(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLogic}}
<syntaxhighlight lang="c++">void UpdateLogic(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UseAutomaticLiquidAmount}}
<syntaxhighlight lang="c++">void UseAutomaticLiquidAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}