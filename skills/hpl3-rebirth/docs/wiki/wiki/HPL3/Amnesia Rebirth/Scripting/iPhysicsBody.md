{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iPhysicsBody has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#AddForce|AddForce]](const [[../cVector3f|cVector3f]] &in avForce)|}}
{{CodeDocSummaryItem|void|[[#AddForceAtPosition|AddForceAtPosition]](const [[../cVector3f|cVector3f]] &in avForce, const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#AddImpulse|AddImpulse]](const [[../cVector3f|cVector3f]] &in avImpulse)|}}
{{CodeDocSummaryItem|void|[[#AddImpulseAtPosition|AddImpulseAtPosition]](const [[../cVector3f|cVector3f]] &in avImpulse, const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#AddTorque|AddTorque]](const [[../cVector3f|cVector3f]] &in avTorque)|}}
{{CodeDocSummaryItem|void|[[#Enable|Enable]]()|}}
{{CodeDocSummaryItem|void|[[#Freeze|Freeze]]()|}}
{{CodeDocSummaryItem|float|[[#GetAngularDamping|GetAngularDamping]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAngularVelocity|GetAngularVelocity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetAutoDisable|GetAutoDisable]]()|}}
{{CodeDocSummaryItem|float|[[#GetAutoDisableAngularThreshold|GetAutoDisableAngularThreshold]]()|}}
{{CodeDocSummaryItem|float|[[#GetAutoDisableLinearThreshold|GetAutoDisableLinearThreshold]]()|}}
{{CodeDocSummaryItem|int|[[#GetAutoDisableNumSteps|GetAutoDisableNumSteps]]()|}}
{{CodeDocSummaryItem|bool|[[#GetBlocksLight|GetBlocksLight]]()|}}
{{CodeDocSummaryItem|bool|[[#GetBlocksSound|GetBlocksSound]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|bool|[[#GetBuoyancyActive|GetBuoyancyActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetBuoyancyAngularViscosity|GetBuoyancyAngularViscosity]]()|}}
{{CodeDocSummaryItem|float|[[#GetBuoyancyDensity|GetBuoyancyDensity]]()|}}
{{CodeDocSummaryItem|float|[[#GetBuoyancyDensityMul|GetBuoyancyDensityMul]]()|}}
{{CodeDocSummaryItem|float|[[#GetBuoyancyLinearViscosity|GetBuoyancyLinearViscosity]]()|}}
{{CodeDocSummaryItem|[[../cPlanef|cPlanef]]|[[#GetBuoyancySurface|GetBuoyancySurface]]()|}}
{{CodeDocSummaryItem|[[../iCharacterBody|iCharacterBody]]|[[#GetCharacterBody|GetCharacterBody]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollide|GetCollide]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollideCharacter|GetCollideCharacter]]()|}}
{{CodeDocSummaryItem|uint|[[#GetCollideFlags|GetCollideFlags]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollideRagDoll|GetCollideRagDoll]]()|}}
{{CodeDocSummaryItem|bool|[[#GetContinuousCollision|GetContinuousCollision]]()|}}
{{CodeDocSummaryItem|int|[[#GetDebug_HasBeenHitCount|GetDebug_HasBeenHitCount]]()|}}
{{CodeDocSummaryItem|bool|[[#GetEnabled|GetEnabled]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFrozen|GetFrozen]]()|}}
{{CodeDocSummaryItem|bool|[[#GetGravity|GetGravity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetGravityAttachmentRotation|GetGravityAttachmentRotation]]()|}}
{{CodeDocSummaryItem|bool|[[#GetGravityAttachmentVelocity|GetGravityAttachmentVelocity]]()|}}
{{CodeDocSummaryItem|[[../eVelocityAxes|eVelocityAxes]]|[[#GetGravityAttachmentVelocityAxes|GetGravityAttachmentVelocityAxes]]()|}}
{{CodeDocSummaryItem|bool|[[#GetGravityCanAttachCharacter|GetGravityCanAttachCharacter]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetInertiaMatrix|GetInertiaMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetInertiaVector|GetInertiaVector]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIsUnderwater|GetIsUnderwater]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsJoint|iPhysicsJoint]]|[[#GetJoint|GetJoint]](int alIndex)|}}
{{CodeDocSummaryItem|int|[[#GetJointNum|GetJointNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetLinearDamping|GetLinearDamping]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLinearVelocity|GetLinearVelocity]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetMass|GetMass]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMassCenter|GetMassCenter]]()|}}
{{CodeDocSummaryItem|float|[[#GetMassMulApplied|GetMassMulApplied]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsMaterial|iPhysicsMaterial]]|[[#GetMaterial|GetMaterial]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxAngularSpeed|GetMaxAngularSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxLinearSpeed|GetMaxLinearSpeed]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|bool|[[#GetNoGravityWhenUnderwater|GetNoGravityWhenUnderwater]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPushedByCharacterGravity|GetPushedByCharacterGravity]]()|}}
{{CodeDocSummaryItem|int|[[#GetPushStrength|GetPushStrength]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#GetShape|GetShape]]()|}}
{{CodeDocSummaryItem|bool|[[#GetThrownByPlayer|GetThrownByPlayer]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetTorqueFromForceAtPosition|GetTorqueFromForceAtPosition]](const [[../cVector3f|cVector3f]] &in avForce, const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUseSurfaceEffects|GetUseSurfaceEffects]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVelocityAtPosition|GetVelocityAtPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsCharacter|IsCharacter]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#IsHitboxCollectionBounds|IsHitboxCollectionBounds]]()|}}
{{CodeDocSummaryItem|bool|[[#IsHitboxCollider|IsHitboxCollider]]()|}}
{{CodeDocSummaryItem|bool|[[#IsRagDoll|IsRagDoll]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVolatile|IsVolatile]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#RemoveJoint|RemoveJoint]]([[../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryItem|void|[[#RenderDebugGeometry|RenderDebugGeometry]]([[../iLowLevelGraphics|iLowLevelGraphics@]] apLowLevel, const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetAngularDamping|SetAngularDamping]](float afDamping)|}}
{{CodeDocSummaryItem|void|[[#SetAngularVelocity|SetAngularVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetAutoDisable|SetAutoDisable]](bool abEnabled)|}}
{{CodeDocSummaryItem|void|[[#SetAutoDisableAngularThreshold|SetAutoDisableAngularThreshold]](float afThresold)|}}
{{CodeDocSummaryItem|void|[[#SetAutoDisableLinearThreshold|SetAutoDisableLinearThreshold]](float afThresold)|}}
{{CodeDocSummaryItem|void|[[#SetAutoDisableNumSteps|SetAutoDisableNumSteps]](int alNum)|}}
{{CodeDocSummaryItem|void|[[#SetBlocksLight|SetBlocksLight]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBlocksSound|SetBlocksSound]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancyActive|SetBuoyancyActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancyAngularViscosity|SetBuoyancyAngularViscosity]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancyDensity|SetBuoyancyDensity]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancyDensityMul|SetBuoyancyDensityMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancyLinearViscosity|SetBuoyancyLinearViscosity]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBuoyancySurface|SetBuoyancySurface]](const [[../cPlanef|cPlanef]] &in aP)|}}
{{CodeDocSummaryItem|void|[[#SetCollide|SetCollide]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideCharacter|SetCollideCharacter]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideFlags|SetCollideFlags]](uint alX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideRagDoll|SetCollideRagDoll]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetContinuousCollision|SetContinuousCollision]](bool abOn)|}}
{{CodeDocSummaryItem|void|[[#SetDebug_HasBeenHitCount|SetDebug_HasBeenHitCount]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetGravity|SetGravity]](bool abEnabled)|}}
{{CodeDocSummaryItem|void|[[#SetGravityAttachmentRotation|SetGravityAttachmentRotation]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetGravityAttachmentVelocity|SetGravityAttachmentVelocity]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetGravityAttachmentVelocityAxes|SetGravityAttachmentVelocityAxes]]([[../eVelocityAxes|eVelocityAxes]] aAxes)|}}
{{CodeDocSummaryItem|void|[[#SetGravityCanAttachCharacter|SetGravityCanAttachCharacter]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetHitboxCollectionBounds|SetHitboxCollectionBounds]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetHitboxCollider|SetHitboxCollider]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIsUnderwater|SetIsUnderwater]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLinearDamping|SetLinearDamping]](float afDamping)|}}
{{CodeDocSummaryItem|void|[[#SetLinearVelocity|SetLinearVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetMass|SetMass]](float afMass)|}}
{{CodeDocSummaryItem|void|[[#SetMassCenter|SetMassCenter]](const [[../cVector3f|cVector3f]] &in avCentre)|}}
{{CodeDocSummaryItem|void|[[#SetMassMulApplied|SetMassMulApplied]](float afMul)|}}
{{CodeDocSummaryItem|void|[[#SetMaterial|SetMaterial]]([[../iPhysicsMaterial|iPhysicsMaterial@]] aMat)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetMaxAngularSpeed|SetMaxAngularSpeed]](float afDamping)|}}
{{CodeDocSummaryItem|void|[[#SetMaxLinearSpeed|SetMaxLinearSpeed]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetNoGravityWhenUnderwater|SetNoGravityWhenUnderwater]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetPushedByCharacterGravity|SetPushedByCharacterGravity]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPushStrength|SetPushStrength]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetThrownByPlayer|SetThrownByPlayer]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUseSurfaceEffects|SetUseSurfaceEffects]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVolatile|SetVolatile]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#StaticAngularMove|StaticAngularMove]](const [[../cVector3f|cVector3f]] &in avVelocity)|}}
{{CodeDocSummaryItem|void|[[#StaticLinearMove|StaticLinearMove]](const [[../cVector3f|cVector3f]] &in avVelocity)|}}
{{CodeDocSummaryItem|void|[[#StopRollSound|StopRollSound]]()|}}
{{CodeDocSummaryItem|void|[[#StopScrapeSound|StopScrapeSound]]()|}}
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

{{CodeDocDetailTop|AddForce}}
<syntaxhighlight lang="c++">void AddForce(const cVector3f &in avForce)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddForceAtPosition}}
<syntaxhighlight lang="c++">void AddForceAtPosition(const cVector3f &in avForce,
                        const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddImpulse}}
<syntaxhighlight lang="c++">void AddImpulse(const cVector3f &in avImpulse)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avImpulse|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddImpulseAtPosition}}
<syntaxhighlight lang="c++">void AddImpulseAtPosition(const cVector3f &in avImpulse,
                          const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avImpulse|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTorque}}
<syntaxhighlight lang="c++">void AddTorque(const cVector3f &in avTorque)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avTorque|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Enable}}
<syntaxhighlight lang="c++">void Enable()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Freeze}}
<syntaxhighlight lang="c++">void Freeze()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAngularDamping}}
<syntaxhighlight lang="c++">float GetAngularDamping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAngularVelocity}}
<syntaxhighlight lang="c++">cVector3f GetAngularVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoDisable}}
<syntaxhighlight lang="c++">bool GetAutoDisable()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoDisableAngularThreshold}}
<syntaxhighlight lang="c++">float GetAutoDisableAngularThreshold()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoDisableLinearThreshold}}
<syntaxhighlight lang="c++">float GetAutoDisableLinearThreshold()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoDisableNumSteps}}
<syntaxhighlight lang="c++">int GetAutoDisableNumSteps()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBlocksLight}}
<syntaxhighlight lang="c++">bool GetBlocksLight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBlocksSound}}
<syntaxhighlight lang="c++">bool GetBlocksSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancyActive}}
<syntaxhighlight lang="c++">bool GetBuoyancyActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancyAngularViscosity}}
<syntaxhighlight lang="c++">float GetBuoyancyAngularViscosity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancyDensity}}
<syntaxhighlight lang="c++">float GetBuoyancyDensity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancyDensityMul}}
<syntaxhighlight lang="c++">float GetBuoyancyDensityMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancyLinearViscosity}}
<syntaxhighlight lang="c++">float GetBuoyancyLinearViscosity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBuoyancySurface}}
<syntaxhighlight lang="c++">cPlanef GetBuoyancySurface()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPlanef|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterBody}}
<syntaxhighlight lang="c++">iCharacterBody@ GetCharacterBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cEntity3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEntity3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollide}}
<syntaxhighlight lang="c++">bool GetCollide()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollideCharacter}}
<syntaxhighlight lang="c++">bool GetCollideCharacter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollideFlags}}
<syntaxhighlight lang="c++">uint GetCollideFlags()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollideRagDoll}}
<syntaxhighlight lang="c++">bool GetCollideRagDoll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetContinuousCollision}}
<syntaxhighlight lang="c++">bool GetContinuousCollision()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebug_HasBeenHitCount}}
<syntaxhighlight lang="c++">int GetDebug_HasBeenHitCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEnabled}}
<syntaxhighlight lang="c++">bool GetEnabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
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

{{CodeDocDetailTop|GetFrozen}}
<syntaxhighlight lang="c++">bool GetFrozen()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravity}}
<syntaxhighlight lang="c++">bool GetGravity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityAttachmentRotation}}
<syntaxhighlight lang="c++">bool GetGravityAttachmentRotation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityAttachmentVelocity}}
<syntaxhighlight lang="c++">bool GetGravityAttachmentVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityAttachmentVelocityAxes}}
<syntaxhighlight lang="c++">eVelocityAxes GetGravityAttachmentVelocityAxes()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eVelocityAxes|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityCanAttachCharacter}}
<syntaxhighlight lang="c++">bool GetGravityCanAttachCharacter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInertiaMatrix}}
<syntaxhighlight lang="c++">cMatrixf GetInertiaMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInertiaVector}}
<syntaxhighlight lang="c++">cVector3f GetInertiaVector()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsUnderwater}}
<syntaxhighlight lang="c++">bool GetIsUnderwater()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetJoint}}
<syntaxhighlight lang="c++">iPhysicsJoint@ GetJoint(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|iPhysicsJoint@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetJointNum}}
<syntaxhighlight lang="c++">int GetJointNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLinearDamping}}
<syntaxhighlight lang="c++">float GetLinearDamping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLinearVelocity}}
<syntaxhighlight lang="c++">cVector3f GetLinearVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
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

{{CodeDocDetailTop|GetMass}}
<syntaxhighlight lang="c++">float GetMass()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMassCenter}}
<syntaxhighlight lang="c++">cVector3f GetMassCenter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMassMulApplied}}
<syntaxhighlight lang="c++">float GetMassMulApplied()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterial}}
<syntaxhighlight lang="c++">iPhysicsMaterial@ GetMaterial()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxAngularSpeed}}
<syntaxhighlight lang="c++">float GetMaxAngularSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxLinearSpeed}}
<syntaxhighlight lang="c++">float GetMaxLinearSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNoGravityWhenUnderwater}}
<syntaxhighlight lang="c++">bool GetNoGravityWhenUnderwater()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPushedByCharacterGravity}}
<syntaxhighlight lang="c++">bool GetPushedByCharacterGravity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPushStrength}}
<syntaxhighlight lang="c++">int GetPushStrength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShape}}
<syntaxhighlight lang="c++">iCollideShape@ GetShape()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetThrownByPlayer}}
<syntaxhighlight lang="c++">bool GetThrownByPlayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTorqueFromForceAtPosition}}
<syntaxhighlight lang="c++">cVector3f GetTorqueFromForceAtPosition(const cVector3f &in avForce,
                                       const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
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

{{CodeDocDetailTop|GetUseSurfaceEffects}}
<syntaxhighlight lang="c++">bool GetUseSurfaceEffects()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocityAtPosition}}
<syntaxhighlight lang="c++">cVector3f GetVelocityAtPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
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

{{CodeDocDetailTop|IsCharacter}}
<syntaxhighlight lang="c++">bool IsCharacter()</syntaxhighlight>
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

{{CodeDocDetailTop|IsHitboxCollectionBounds}}
<syntaxhighlight lang="c++">bool IsHitboxCollectionBounds()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsHitboxCollider}}
<syntaxhighlight lang="c++">bool IsHitboxCollider()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsRagDoll}}
<syntaxhighlight lang="c++">bool IsRagDoll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsVolatile}}
<syntaxhighlight lang="c++">bool IsVolatile()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveJoint}}
<syntaxhighlight lang="c++">void RemoveJoint(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RenderDebugGeometry}}
<syntaxhighlight lang="c++">void RenderDebugGeometry(iLowLevelGraphics@ apLowLevel,
                         const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLowLevel|[[../iLowLevelGraphics|iLowLevelGraphics@]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAngularDamping}}
<syntaxhighlight lang="c++">void SetAngularDamping(float afDamping)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDamping|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAngularVelocity}}
<syntaxhighlight lang="c++">void SetAngularVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutoDisable}}
<syntaxhighlight lang="c++">void SetAutoDisable(bool abEnabled)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abEnabled|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutoDisableAngularThreshold}}
<syntaxhighlight lang="c++">void SetAutoDisableAngularThreshold(float afThresold)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afThresold|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutoDisableLinearThreshold}}
<syntaxhighlight lang="c++">void SetAutoDisableLinearThreshold(float afThresold)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afThresold|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutoDisableNumSteps}}
<syntaxhighlight lang="c++">void SetAutoDisableNumSteps(int alNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlocksLight}}
<syntaxhighlight lang="c++">void SetBlocksLight(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlocksSound}}
<syntaxhighlight lang="c++">void SetBlocksSound(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancyActive}}
<syntaxhighlight lang="c++">void SetBuoyancyActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancyAngularViscosity}}
<syntaxhighlight lang="c++">void SetBuoyancyAngularViscosity(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancyDensity}}
<syntaxhighlight lang="c++">void SetBuoyancyDensity(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancyDensityMul}}
<syntaxhighlight lang="c++">void SetBuoyancyDensityMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancyLinearViscosity}}
<syntaxhighlight lang="c++">void SetBuoyancyLinearViscosity(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBuoyancySurface}}
<syntaxhighlight lang="c++">void SetBuoyancySurface(const cPlanef &in aP)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aP|[[../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollide}}
<syntaxhighlight lang="c++">void SetCollide(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollideCharacter}}
<syntaxhighlight lang="c++">void SetCollideCharacter(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollideFlags}}
<syntaxhighlight lang="c++">void SetCollideFlags(uint alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollideRagDoll}}
<syntaxhighlight lang="c++">void SetCollideRagDoll(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetContinuousCollision}}
<syntaxhighlight lang="c++">void SetContinuousCollision(bool abOn)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abOn|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDebug_HasBeenHitCount}}
<syntaxhighlight lang="c++">void SetDebug_HasBeenHitCount(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravity}}
<syntaxhighlight lang="c++">void SetGravity(bool abEnabled)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abEnabled|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityAttachmentRotation}}
<syntaxhighlight lang="c++">void SetGravityAttachmentRotation(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityAttachmentVelocity}}
<syntaxhighlight lang="c++">void SetGravityAttachmentVelocity(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityAttachmentVelocityAxes}}
<syntaxhighlight lang="c++">void SetGravityAttachmentVelocityAxes(eVelocityAxes aAxes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAxes|[[../eVelocityAxes|eVelocityAxes]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityCanAttachCharacter}}
<syntaxhighlight lang="c++">void SetGravityCanAttachCharacter(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHitboxCollectionBounds}}
<syntaxhighlight lang="c++">void SetHitboxCollectionBounds(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHitboxCollider}}
<syntaxhighlight lang="c++">void SetHitboxCollider(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsUnderwater}}
<syntaxhighlight lang="c++">void SetIsUnderwater(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLinearDamping}}
<syntaxhighlight lang="c++">void SetLinearDamping(float afDamping)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDamping|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLinearVelocity}}
<syntaxhighlight lang="c++">void SetLinearVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMass}}
<syntaxhighlight lang="c++">void SetMass(float afMass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMass|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMassCenter}}
<syntaxhighlight lang="c++">void SetMassCenter(const cVector3f &in avCentre)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avCentre|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMassMulApplied}}
<syntaxhighlight lang="c++">void SetMassMulApplied(float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaterial}}
<syntaxhighlight lang="c++">void SetMaterial(iPhysicsMaterial@ aMat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMat|[[../iPhysicsMaterial|iPhysicsMaterial@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxAngularSpeed}}
<syntaxhighlight lang="c++">void SetMaxAngularSpeed(float afDamping)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDamping|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxLinearSpeed}}
<syntaxhighlight lang="c++">void SetMaxLinearSpeed(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetName}}
<syntaxhighlight lang="c++">void SetName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNoGravityWhenUnderwater}}
<syntaxhighlight lang="c++">void SetNoGravityWhenUnderwater(bool abX)</syntaxhighlight>
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

{{CodeDocDetailTop|SetPushedByCharacterGravity}}
<syntaxhighlight lang="c++">void SetPushedByCharacterGravity(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPushStrength}}
<syntaxhighlight lang="c++">void SetPushStrength(int alX)</syntaxhighlight>
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

{{CodeDocDetailTop|SetThrownByPlayer}}
<syntaxhighlight lang="c++">void SetThrownByPlayer(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUseSurfaceEffects}}
<syntaxhighlight lang="c++">void SetUseSurfaceEffects(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVolatile}}
<syntaxhighlight lang="c++">void SetVolatile(bool abX)</syntaxhighlight>
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

{{CodeDocDetailTop|StaticAngularMove}}
<syntaxhighlight lang="c++">void StaticAngularMove(const cVector3f &in avVelocity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVelocity|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StaticLinearMove}}
<syntaxhighlight lang="c++">void StaticLinearMove(const cVector3f &in avVelocity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVelocity|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopRollSound}}
<syntaxhighlight lang="c++">void StopRollSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopScrapeSound}}
<syntaxhighlight lang="c++">void StopScrapeSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
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

{{HPL3The BunkerScriptingCategories}}