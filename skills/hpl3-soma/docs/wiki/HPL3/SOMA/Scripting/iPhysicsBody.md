{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iPhysicsBody has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avForce</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddForceAtPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avForce</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddImpulse || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avImpulse</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddImpulseAtPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avImpulse</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTorque || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avTorque</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Enable ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Freeze ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAngularDamping ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetAngularVelocity ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAutoDisable ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoDisableAngularThreshold ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoDisableLinearThreshold ||  ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAutoDisableNumSteps ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetBlocksLight ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetBlocksSound ||   ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetBuoyancyActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBuoyancyAngularViscosity ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBuoyancyDensity ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBuoyancyDensityMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBuoyancyLinearViscosity ||   ||
|-
| [[../cPlanef|<syntaxhighlight lang="c++" inline>cPlanef</syntaxhighlight>]] || GetBuoyancySurface ||   ||
|-
| [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@</syntaxhighlight>]] || GetCharacterBody ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollide ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollideCharacter ||  ||
|-
| <syntaxhighlight lang="c++" inline>uint</syntaxhighlight> || GetCollideFlags ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollideRagDoll ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetContinuousCollision ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEnabled ||  ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFrozen ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGravity ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGravityAttachmentRotation ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGravityAttachmentVelocity ||   ||
|-
| [[../eVelocityAxes|<syntaxhighlight lang="c++" inline>eVelocityAxes</syntaxhighlight>]] || GetGravityAttachmentVelocityAxes ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGravityCanAttachCharacter ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || GetInertiaMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetInertiaVector ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIsUnderwater ||   ||
|-
| [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@</syntaxhighlight>]] || GetJoint || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetJointNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetLinearDamping ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLinearVelocity ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMass ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetMassCenter ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMassMulApplied ||   ||
|-
| [[../iPhysicsMaterial|<syntaxhighlight lang="c++" inline>iPhysicsMaterial@</syntaxhighlight>]] || GetMaterial ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxAngularSpeed ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxLinearSpeed ||  ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetNoGravityWhenUnderwater ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPushedByCharacterGravity ||  ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetPushStrength ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetScriptableIsSaved ||   ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || GetShape ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetTorqueFromForceAtPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avForce</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUseSurfaceEffects ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetVelocityAtPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetWorldMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasParent ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsCharacter ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsRagDoll ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVolatile ||  ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveJoint || [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@ apJoint</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RenderDebugGeometry || [[../iLowLevelGraphics|<syntaxhighlight lang="c++" inline>iLowLevelGraphics@ apLowLevel</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAngularDamping || <syntaxhighlight lang="c++" inline>float afDamping</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAngularVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoDisable || <syntaxhighlight lang="c++" inline>bool abEnabled</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoDisableAngularThreshold || <syntaxhighlight lang="c++" inline>float afThresold</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoDisableLinearThreshold || <syntaxhighlight lang="c++" inline>float afThresold</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoDisableNumSteps || <syntaxhighlight lang="c++" inline>int alNum</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBlocksLight || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBlocksSound || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancyActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancyAngularViscosity || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancyDensity || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancyDensityMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancyLinearViscosity || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBuoyancySurface || [[../cPlanef|<syntaxhighlight lang="c++" inline>const cPlanef& aP</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollide || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideCharacter || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideFlags || <syntaxhighlight lang="c++" inline>uint alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideRagDoll || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetContinuousCollision || <syntaxhighlight lang="c++" inline>bool abOn</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravity || <syntaxhighlight lang="c++" inline>bool abEnabled</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityAttachmentRotation || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityAttachmentVelocity || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityAttachmentVelocityAxes || [[../eVelocityAxes|<syntaxhighlight lang="c++" inline>eVelocityAxes aAxes</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityCanAttachCharacter || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsUnderwater || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLinearDamping || <syntaxhighlight lang="c++" inline>float afDamping</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLinearVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMass || <syntaxhighlight lang="c++" inline>float afMass</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMassCenter || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avCentre</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMassMulApplied || <syntaxhighlight lang="c++" inline>float afMul</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxAngularSpeed || <syntaxhighlight lang="c++" inline>float afDamping</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxLinearSpeed || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNoGravityWhenUnderwater || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPushedByCharacterGravity || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPushStrength || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUseSurfaceEffects || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVolatile || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StaticAngularMove || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVelocity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StaticLinearMove || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVelocity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__