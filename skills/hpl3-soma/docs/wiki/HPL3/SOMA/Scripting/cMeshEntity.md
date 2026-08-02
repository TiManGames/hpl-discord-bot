{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cMeshEntity has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || AddSocket || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asAttachedBoneName</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxLocalTransform</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRescale = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AlignBodiesToSkeleton || <syntaxhighlight lang="c++" inline>bool abCalculateSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AnimationIsOver || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || CalculateTransformFromSkeleton ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || CalculateTransformFromSkeleton || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out apPostion</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out apAngles</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckColliderShapeCollision || [[../iPhysicsWorld|<syntaxhighlight lang="c++" inline>iPhysicsWorld@ apWorld</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf& a_mtxShape</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearSockets ||   ||
|-
| [[../cProcAnimation|<syntaxhighlight lang="c++" inline>cProcAnimation@</syntaxhighlight>]] || CreateProcAnimation || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeSkeletonPhysicsWeight || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| [[../cActorAnimController|<syntaxhighlight lang="c++" inline>cActorAnimController@</syntaxhighlight>]] || GetActorAnimController ||   ||
|-
| [[../cAnimationState|<syntaxhighlight lang="c++" inline>cAnimationState@</syntaxhighlight>]] || GetAnimationState || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight> ||
|-
| [[../cAnimationState|<syntaxhighlight lang="c++" inline>cAnimationState@</syntaxhighlight>]] || GetAnimationStateFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAnimationStateIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAnimationStateNum ||   ||
|-
| [[../cBoneState|<syntaxhighlight lang="c++" inline>cBoneState@</syntaxhighlight>]] || GetBoneState || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight> ||
|-
| [[../cBoneState|<syntaxhighlight lang="c++" inline>cBoneState@</syntaxhighlight>]] || GetBoneStateFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetBoneStateIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetBoneStateIndexFromPtr || [[../cBoneState|<syntaxhighlight lang="c++" inline>cBoneState@ apBoneState</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetBoneStateNum ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetBoneStateRoot ||   ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCoverageAmount ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetIlluminationColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetLiquidAmount ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| [[../cMesh|<syntaxhighlight lang="c++" inline>cMesh@</syntaxhighlight>]] || GetMesh ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetNodeState || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight> ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetNodeStateFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNodeStateIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNodeStateNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetNormalizeAnimationWeights ||   ||
|-
| [[../cProcAnimation|<syntaxhighlight lang="c++" inline>cProcAnimation@</syntaxhighlight>]] || GetProcAnimation || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../cProcAnimation|<syntaxhighlight lang="c++" inline>cProcAnimation@</syntaxhighlight>]] || GetProcAnimationFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetProcAnimationNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetScriptableIsSaved ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSkeletonCollidersActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSkeletonPhysicsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSkeletonPhysicsCanSleep ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSkeletonPhysicsWeight ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetSocket || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetSocketFromIndex || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSocketNum ||   ||
|-
| [[../cSubMeshEntity|<syntaxhighlight lang="c++" inline>cSubMeshEntity@</syntaxhighlight>]] || GetSubMeshEntity || <syntaxhighlight lang="c++" inline>uint alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubMeshEntityIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../cSubMeshEntity|<syntaxhighlight lang="c++" inline>cSubMeshEntity@</syntaxhighlight>]] || GetSubMeshEntityName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubMeshEntityNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetWorldMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasParent ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsStatic ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVisible ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Play || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool bStopPrev</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayFadeTo || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayFadeToName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool bStopPrev</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ProcPlay || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afAnimTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStopPrev</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ProcPlayFadeTo || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afAnimTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFadeTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ProcPlayFadeToName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAnimTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFadeTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ProcPlayName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAnimTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStopPrev</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ProcStop ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetGraphicsUpdated ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCoverageAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDiffuseColorMul || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisableSleep || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIlluminationColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsOccluder || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLiquidAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNormalizeAnimationWeights || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderFlagBit || <syntaxhighlight lang="c++" inline>int alFlagBit</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSet</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkeletonCollidersActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkeletonPhysicsActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkeletonPhysicsCanSleep || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkeletonPhysicsWeight || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStatic || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abVisible</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateAnimation || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UseAutomaticLiquidAmount ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__