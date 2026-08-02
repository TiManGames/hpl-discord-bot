{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iCharacterBody has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || AddExtraSize || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avForce</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddForceVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddPitch || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddRoll || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddYaw || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckCharacterFits || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPosition</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abFeetPosition</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alSizeIdx</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avOutPushBackVec</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckRayIntersection || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avEnd</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float& afOutDistance</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avOutNormalVec</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAccurateClimbing ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetActiveSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAirFriction ||   ||
|-
| [[../cCamera|<syntaxhighlight lang="c++" inline>cCamera@</syntaxhighlight>]] || GetCamera ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetCameraPosAdd ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCameraSmoothPosNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCameraUpdateActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCameraUseSmoothing ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCharacterMaxPushMass ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCharacterPushForce ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCharacterPushIn2D ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetClimbForwardMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetClimbHeightAdd ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollideCharacter ||   ||
|-
| <syntaxhighlight lang="c++" inline>uint</syntaxhighlight> || GetCollideFlags ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetConstantContactForceMul ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetCurrentBody ||   ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || GetCurrentShape ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetCustomGravity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCustomGravityActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDeaccelerateMoveSpeedInAir ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDisableDiagSpeedBoost ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntity ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetEntityOffset ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetEntityPitchAmount ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetEntityPostOffset ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetEntitySmoothPosNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetEntitySmoothYPosNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEntityUseSmoothing ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetFeetPosition ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetForce ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetForceVelocity ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetForward ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetGravityAttachedBody ||   ||
|-
| [[../iPhysicsMaterial|<syntaxhighlight lang="c++" inline>iPhysicsMaterial@</syntaxhighlight>]] || GetGravityCollideMaterial ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGroundAngleMin ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGroundFriction ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetLastGroundNormal ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetLastPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMass ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxContactForcePerMassUnit ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxGravitySpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxNegativeMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxNoSlideSlopeAngle ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMaxOnGroundCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxPositiveMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxPushForce ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxPushMass ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxStepSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxStepSizeInAir ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMoveAcc || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMoveDeacc || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetMovedLastUpdate ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetMoveMatrix ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMoveOppositeDirAccMul || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPhysicsBodyActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPitch ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPushImpulse ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPushIn2D ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetRight ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRoll ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetRotateYawWhenGravityAttached ||   ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || GetShape || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStepClimbSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetStickToSlope ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTestCollision ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetUp ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUpdateCameraVelocity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUpdateCameraYaw ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUseEntitySmoothYPos ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetVelocity || <syntaxhighlight lang="c++" inline>float afFrameTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVelocityContactForceMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetYaw ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GravityIsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsClimbing ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOnGround ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Move || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMul</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetClimbing ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAccurateClimbing || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActiveSize || <syntaxhighlight lang="c++" inline>int alNum</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAirFriction || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCamera || [[../cCamera|<syntaxhighlight lang="c++" inline>cCamera@ apCam</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraPosAdd || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avAdd</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraSmoothPosNum || <syntaxhighlight lang="c++" inline>int alNum</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraUpdateActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraUseSmoothing || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCharacterMaxPushMass || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCharacterPushForce || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCharacterPushIn2D || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetClimbForwardMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetClimbHeightAdd || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideCharacter || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideFlags || <syntaxhighlight lang="c++" inline>uint alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetConstantContactForceMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCustomGravity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avCustomGravity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCustomGravityActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDeaccelerateMoveSpeedInAir || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisableDiagSpeedBoost || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntity || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntityOffset || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf& a_mtxOffset</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntityPitchAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntityPostOffset || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf& a_mtxOffset</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntitySmoothPosNum || <syntaxhighlight lang="c++" inline>int alNum</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntitySmoothYPosNum || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEntityUseSmoothing || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFeetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSmooth</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avForce</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForceVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGroundAngleMin || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGroundFriction || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMass || <syntaxhighlight lang="c++" inline>float afMass</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxContactForcePerMassUnit || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxGravitySpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxNegativeMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxNoSlideSlopeAngle || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxOnGroundCount || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxPositiveMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxPushForce || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxPushMass || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxStepSize || <syntaxhighlight lang="c++" inline>float afSize</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxStepSizeInAir || <syntaxhighlight lang="c++" inline>float afSize</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveAcc || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveDeacc || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveOppositeDirAccMul || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveSpeed || [[../eCharDir|<syntaxhighlight lang="c++" inline>eCharDir aDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPhysicsBodyActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPitch || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSmooth</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPushImpulse || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPushIn2D || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRoll || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotateYawWhenGravityAttached || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStepClimbSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStickToSlope || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTestCollision || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUpdateCameraVelocity || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUpdateCameraYaw || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUseEntitySmoothYPos || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVelocityContactForceMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetYaw || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopMovement ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__