{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iCharacterBody has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|int|[[#AddExtraSize|AddExtraSize]](const [[../cVector3f|cVector3f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#AddForce|AddForce]](const [[../cVector3f|cVector3f]] &in avForce)|}}
{{CodeDocSummaryItem|void|[[#AddForceVelocity|AddForceVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#AddPitch|AddPitch]](float afX)|}}
{{CodeDocSummaryItem|void|[[#AddRoll|AddRoll]](float afX)|}}
{{CodeDocSummaryItem|void|[[#AddYaw|AddYaw]](float afX)|}}
{{CodeDocSummaryItem|bool|[[#CheckCharacterFits|CheckCharacterFits]](const [[../cVector3f|cVector3f]] &in avPosition, bool abFeetPosition, int alSizeIdx, [[../cVector3f|cVector3f]] &out avOutPushBackVec)|}}
{{CodeDocSummaryItem|bool|[[#CheckRayIntersection|CheckRayIntersection]](const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd, float &out afOutDistance, [[../cVector3f|cVector3f]] &out avOutNormalVec)|}}
{{CodeDocSummaryItem|bool|[[#GetAccurateClimbing|GetAccurateClimbing]]()|}}
{{CodeDocSummaryItem|int|[[#GetActiveSize|GetActiveSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetAirFriction|GetAirFriction]]()|}}
{{CodeDocSummaryItem|[[../cCamera|cCamera]]|[[#GetCamera|GetCamera]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCameraPosAdd|GetCameraPosAdd]]()|}}
{{CodeDocSummaryItem|int|[[#GetCameraSmoothPosNum|GetCameraSmoothPosNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCameraUpdateActive|GetCameraUpdateActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCameraUseSmoothing|GetCameraUseSmoothing]]()|}}
{{CodeDocSummaryItem|float|[[#GetCharacterMaxPushMass|GetCharacterMaxPushMass]]()|}}
{{CodeDocSummaryItem|float|[[#GetCharacterPushForce|GetCharacterPushForce]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCharacterPushIn2D|GetCharacterPushIn2D]]()|}}
{{CodeDocSummaryItem|float|[[#GetClimbForwardMul|GetClimbForwardMul]]()|}}
{{CodeDocSummaryItem|float|[[#GetClimbHeightAdd|GetClimbHeightAdd]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollideCharacter|GetCollideCharacter]]()|}}
{{CodeDocSummaryItem|uint|[[#GetCollideFlags|GetCollideFlags]]()|}}
{{CodeDocSummaryItem|float|[[#GetConstantContactForceMul|GetConstantContactForceMul]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetCurrentBody|GetCurrentBody]]()|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#GetCurrentShape|GetCurrentShape]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCustomGravity|GetCustomGravity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCustomGravityActive|GetCustomGravityActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetDeaccelerateMoveSpeedInAir|GetDeaccelerateMoveSpeedInAir]]()|}}
{{CodeDocSummaryItem|bool|[[#GetDisableDiagSpeedBoost|GetDisableDiagSpeedBoost]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetEntityOffset|GetEntityOffset]]()|}}
{{CodeDocSummaryItem|float|[[#GetEntityPitchAmount|GetEntityPitchAmount]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetEntityPostOffset|GetEntityPostOffset]]()|}}
{{CodeDocSummaryItem|int|[[#GetEntitySmoothPosNum|GetEntitySmoothPosNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetEntitySmoothYPosNum|GetEntitySmoothYPosNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetEntityUseSmoothing|GetEntityUseSmoothing]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetExtraBody|GetExtraBody]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetFeetPosition|GetFeetPosition]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForce|GetForce]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForceVelocity|GetForceVelocity]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForward|GetForward]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetGravityAttachedBody|GetGravityAttachedBody]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsMaterial|iPhysicsMaterial]]|[[#GetGravityCollideMaterial|GetGravityCollideMaterial]]()|}}
{{CodeDocSummaryItem|float|[[#GetGroundAngleMin|GetGroundAngleMin]]()|}}
{{CodeDocSummaryItem|[[../eCollideShapeType|eCollideShapeType]]|[[#GetGroundCollideType|GetGroundCollideType]]()|}}
{{CodeDocSummaryItem|float|[[#GetGroundFriction|GetGroundFriction]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLastGroundNormal|GetLastGroundNormal]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLastPosition|GetLastPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetMass|GetMass]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxContactForcePerMassUnit|GetMaxContactForcePerMassUnit]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxGravitySpeed|GetMaxGravitySpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxNegativeMoveSpeed|GetMaxNegativeMoveSpeed]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|float|[[#GetMaxNoSlideSlopeAngle|GetMaxNoSlideSlopeAngle]]()|}}
{{CodeDocSummaryItem|int|[[#GetMaxOnGroundCount|GetMaxOnGroundCount]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxPositiveMoveSpeed|GetMaxPositiveMoveSpeed]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|float|[[#GetMaxPushForce|GetMaxPushForce]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxPushMass|GetMaxPushMass]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxStepSize|GetMaxStepSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxStepSizeInAir|GetMaxStepSizeInAir]]()|}}
{{CodeDocSummaryItem|float|[[#GetMoveAcc|GetMoveAcc]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|float|[[#GetMoveDeacc|GetMoveDeacc]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|bool|[[#GetMovedLastUpdate|GetMovedLastUpdate]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetMoveMatrix|GetMoveMatrix]]()|}}
{{CodeDocSummaryItem|float|[[#GetMoveOppositeDirAccMul|GetMoveOppositeDirAccMul]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|float|[[#GetMoveSpeed|GetMoveSpeed]]([[../eCharDir|eCharDir]] aDir)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPhysicsBodyActive|GetPhysicsBodyActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetPitch|GetPitch]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetPushImpulse|GetPushImpulse]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPushIn2D|GetPushIn2D]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetRight|GetRight]]()|}}
{{CodeDocSummaryItem|float|[[#GetRoll|GetRoll]]()|}}
{{CodeDocSummaryItem|bool|[[#GetRotateYawWhenGravityAttached|GetRotateYawWhenGravityAttached]]()|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#GetShape|GetShape]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetStepClimbSpeed|GetStepClimbSpeed]]()|}}
{{CodeDocSummaryItem|bool|[[#GetStickToSlope|GetStickToSlope]]()|}}
{{CodeDocSummaryItem|bool|[[#GetTestCollision|GetTestCollision]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetUp|GetUp]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUpdateCameraVelocity|GetUpdateCameraVelocity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUpdateCameraYaw|GetUpdateCameraYaw]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUseEntitySmoothYPos|GetUseEntitySmoothYPos]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVelocity|GetVelocity]](float afFrameTime)|}}
{{CodeDocSummaryItem|float|[[#GetVelocityContactForceMul|GetVelocityContactForceMul]]()|}}
{{CodeDocSummaryItem|float|[[#GetYaw|GetYaw]]()|}}
{{CodeDocSummaryItem|bool|[[#GravityIsActive|GravityIsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsClimbing|IsClimbing]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOnGround|IsOnGround]]()|}}
{{CodeDocSummaryItem|void|[[#Move|Move]]([[../eCharDir|eCharDir]] aDir, float afMul)|}}
{{CodeDocSummaryItem|void|[[#ResetClimbing|ResetClimbing]]()|}}
{{CodeDocSummaryItem|void|[[#SetAccurateClimbing|SetAccurateClimbing]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetActiveSize|SetActiveSize]](int alNum)|}}
{{CodeDocSummaryItem|void|[[#SetAirFriction|SetAirFriction]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCamera|SetCamera]]([[../cCamera|cCamera@]] apCam)|}}
{{CodeDocSummaryItem|void|[[#SetCameraPosAdd|SetCameraPosAdd]](const [[../cVector3f|cVector3f]] &in avAdd)|}}
{{CodeDocSummaryItem|void|[[#SetCameraSmoothPosNum|SetCameraSmoothPosNum]](int alNum)|}}
{{CodeDocSummaryItem|void|[[#SetCameraUpdateActive|SetCameraUpdateActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCameraUseSmoothing|SetCameraUseSmoothing]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCharacterMaxPushMass|SetCharacterMaxPushMass]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCharacterPushForce|SetCharacterPushForce]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCharacterPushIn2D|SetCharacterPushIn2D]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCharacterPushStrength|SetCharacterPushStrength]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetClimbForwardMul|SetClimbForwardMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetClimbHeightAdd|SetClimbHeightAdd]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideCharacter|SetCollideCharacter]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideFlags|SetCollideFlags]](uint alX)|}}
{{CodeDocSummaryItem|void|[[#SetConstantContactForceMul|SetConstantContactForceMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCustomGravity|SetCustomGravity]](const [[../cVector3f|cVector3f]] &in avCustomGravity)|}}
{{CodeDocSummaryItem|void|[[#SetCustomGravityActive|SetCustomGravityActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDeaccelerateMoveSpeedInAir|SetDeaccelerateMoveSpeedInAir]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisableDiagSpeedBoost|SetDisableDiagSpeedBoost]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetEntity|SetEntity]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#SetEntityOffset|SetEntityOffset]](const [[../cMatrixf|cMatrixf]] &in a_mtxOffset)|}}
{{CodeDocSummaryItem|void|[[#SetEntityPitchAmount|SetEntityPitchAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetEntityPostOffset|SetEntityPostOffset]](const [[../cMatrixf|cMatrixf]] &in a_mtxOffset)|}}
{{CodeDocSummaryItem|void|[[#SetEntitySmoothPosNum|SetEntitySmoothPosNum]](int alNum)|}}
{{CodeDocSummaryItem|void|[[#SetEntitySmoothYPosNum|SetEntitySmoothYPosNum]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetEntityUseSmoothing|SetEntityUseSmoothing]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetExtraBody|SetExtraBody]]([[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#SetFeetPosition|SetFeetPosition]](const [[../cVector3f|cVector3f]] &in avPos, bool abSmooth)|}}
{{CodeDocSummaryItem|void|[[#SetForce|SetForce]](const [[../cVector3f|cVector3f]] &in avForce)|}}
{{CodeDocSummaryItem|void|[[#SetForceVelocity|SetForceVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetGravityActive|SetGravityActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetGroundAngleMin|SetGroundAngleMin]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGroundFriction|SetGroundFriction]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetHitboxCollider|SetHitboxCollider]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMass|SetMass]](float afMass)|}}
{{CodeDocSummaryItem|void|[[#SetMaxContactForcePerMassUnit|SetMaxContactForcePerMassUnit]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxGravitySpeed|SetMaxGravitySpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxNegativeMoveSpeed|SetMaxNegativeMoveSpeed]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxNoSlideSlopeAngle|SetMaxNoSlideSlopeAngle]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetMaxOnGroundCount|SetMaxOnGroundCount]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxPositiveMoveSpeed|SetMaxPositiveMoveSpeed]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxPushForce|SetMaxPushForce]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxPushMass|SetMaxPushMass]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxStepSize|SetMaxStepSize]](float afSize)|}}
{{CodeDocSummaryItem|void|[[#SetMaxStepSizeInAir|SetMaxStepSizeInAir]](float afSize)|}}
{{CodeDocSummaryItem|void|[[#SetMoveAcc|SetMoveAcc]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveDeacc|SetMoveDeacc]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveOppositeDirAccMul|SetMoveOppositeDirAccMul]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveSpeed|SetMoveSpeed]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveSpeedMul|SetMoveSpeedMul]]([[../eCharDir|eCharDir]] aDir, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPhysicsBodyActive|SetPhysicsBodyActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPitch|SetPitch]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos, bool abSmooth)|}}
{{CodeDocSummaryItem|void|[[#SetPushImpulse|SetPushImpulse]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPushIn2D|SetPushIn2D]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetRoll|SetRoll]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetRotateYawWhenGravityAttached|SetRotateYawWhenGravityAttached]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetStepClimbSpeed|SetStepClimbSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetStickToSlope|SetStickToSlope]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetTestCollision|SetTestCollision]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUpdateCameraVelocity|SetUpdateCameraVelocity]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUpdateCameraYaw|SetUpdateCameraYaw]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetupSafePositions|SetupSafePositions]](float afSafePositionSaveInterval, float afSafePositionBufferTime)|}}
{{CodeDocSummaryItem|void|[[#SetUseEntitySmoothYPos|SetUseEntitySmoothYPos]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVelocityContactForceMul|SetVelocityContactForceMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetYaw|SetYaw]](float afX)|}}
{{CodeDocSummaryItem|void|[[#StopMovement|StopMovement]]()|}}
{{CodeDocSummaryItem|void|[[#TeleportToSafePosition|TeleportToSafePosition]](float afElapsedTime, bool abSmooth <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddExtraSize}}
<syntaxhighlight lang="c++">int AddExtraSize(const cVector3f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddForce}}
<syntaxhighlight lang="c++">void AddForce(const cVector3f &in avForce)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddForceVelocity}}
<syntaxhighlight lang="c++">void AddForceVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddPitch}}
<syntaxhighlight lang="c++">void AddPitch(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddRoll}}
<syntaxhighlight lang="c++">void AddRoll(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddYaw}}
<syntaxhighlight lang="c++">void AddYaw(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckCharacterFits}}
<syntaxhighlight lang="c++">bool CheckCharacterFits(const cVector3f &in avPosition,
                        bool abFeetPosition,
                        int alSizeIdx,
                        cVector3f &out avOutPushBackVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abFeetPosition|bool|}}
{{CodeDocDetailParam|alSizeIdx|int|}}
{{CodeDocDetailParam|avOutPushBackVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckRayIntersection}}
<syntaxhighlight lang="c++">bool CheckRayIntersection(const cVector3f &in avStart,
                          const cVector3f &in avEnd,
                          float &out afOutDistance,
                          cVector3f &out avOutNormalVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afOutDistance|float|}}
{{CodeDocDetailParam|avOutNormalVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAccurateClimbing}}
<syntaxhighlight lang="c++">bool GetAccurateClimbing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActiveSize}}
<syntaxhighlight lang="c++">int GetActiveSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAirFriction}}
<syntaxhighlight lang="c++">float GetAirFriction()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCamera}}
<syntaxhighlight lang="c++">cCamera@ GetCamera()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cCamera@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraPosAdd}}
<syntaxhighlight lang="c++">cVector3f GetCameraPosAdd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraSmoothPosNum}}
<syntaxhighlight lang="c++">int GetCameraSmoothPosNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraUpdateActive}}
<syntaxhighlight lang="c++">bool GetCameraUpdateActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraUseSmoothing}}
<syntaxhighlight lang="c++">bool GetCameraUseSmoothing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterMaxPushMass}}
<syntaxhighlight lang="c++">float GetCharacterMaxPushMass()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterPushForce}}
<syntaxhighlight lang="c++">float GetCharacterPushForce()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterPushIn2D}}
<syntaxhighlight lang="c++">bool GetCharacterPushIn2D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClimbForwardMul}}
<syntaxhighlight lang="c++">float GetClimbForwardMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClimbHeightAdd}}
<syntaxhighlight lang="c++">float GetClimbHeightAdd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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

{{CodeDocDetailTop|GetConstantContactForceMul}}
<syntaxhighlight lang="c++">float GetConstantContactForceMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetCurrentBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentShape}}
<syntaxhighlight lang="c++">iCollideShape@ GetCurrentShape()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCustomGravity}}
<syntaxhighlight lang="c++">cVector3f GetCustomGravity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCustomGravityActive}}
<syntaxhighlight lang="c++">bool GetCustomGravityActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDeaccelerateMoveSpeedInAir}}
<syntaxhighlight lang="c++">bool GetDeaccelerateMoveSpeedInAir()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDisableDiagSpeedBoost}}
<syntaxhighlight lang="c++">bool GetDisableDiagSpeedBoost()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iEntity3D@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityOffset}}
<syntaxhighlight lang="c++">const cMatrixf& GetEntityOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityPitchAmount}}
<syntaxhighlight lang="c++">float GetEntityPitchAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityPostOffset}}
<syntaxhighlight lang="c++">const cMatrixf& GetEntityPostOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntitySmoothPosNum}}
<syntaxhighlight lang="c++">int GetEntitySmoothPosNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntitySmoothYPosNum}}
<syntaxhighlight lang="c++">int GetEntitySmoothYPosNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityUseSmoothing}}
<syntaxhighlight lang="c++">bool GetEntityUseSmoothing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetExtraBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetExtraBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFeetPosition}}
<syntaxhighlight lang="c++">cVector3f GetFeetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForce}}
<syntaxhighlight lang="c++">cVector3f GetForce()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForceVelocity}}
<syntaxhighlight lang="c++">cVector3f GetForceVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForward}}
<syntaxhighlight lang="c++">const cVector3f& GetForward()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityAttachedBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetGravityAttachedBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityCollideMaterial}}
<syntaxhighlight lang="c++">iPhysicsMaterial@ GetGravityCollideMaterial()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGroundAngleMin}}
<syntaxhighlight lang="c++">float GetGroundAngleMin()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGroundCollideType}}
<syntaxhighlight lang="c++">eCollideShapeType GetGroundCollideType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eCollideShapeType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGroundFriction}}
<syntaxhighlight lang="c++">float GetGroundFriction()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastGroundNormal}}
<syntaxhighlight lang="c++">const cVector3f& GetLastGroundNormal()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetLastPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMass}}
<syntaxhighlight lang="c++">float GetMass()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxContactForcePerMassUnit}}
<syntaxhighlight lang="c++">float GetMaxContactForcePerMassUnit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxGravitySpeed}}
<syntaxhighlight lang="c++">float GetMaxGravitySpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxNegativeMoveSpeed}}
<syntaxhighlight lang="c++">float GetMaxNegativeMoveSpeed(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxNoSlideSlopeAngle}}
<syntaxhighlight lang="c++">float GetMaxNoSlideSlopeAngle()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxOnGroundCount}}
<syntaxhighlight lang="c++">int GetMaxOnGroundCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxPositiveMoveSpeed}}
<syntaxhighlight lang="c++">float GetMaxPositiveMoveSpeed(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxPushForce}}
<syntaxhighlight lang="c++">float GetMaxPushForce()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxPushMass}}
<syntaxhighlight lang="c++">float GetMaxPushMass()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxStepSize}}
<syntaxhighlight lang="c++">float GetMaxStepSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxStepSizeInAir}}
<syntaxhighlight lang="c++">float GetMaxStepSizeInAir()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveAcc}}
<syntaxhighlight lang="c++">float GetMoveAcc(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveDeacc}}
<syntaxhighlight lang="c++">float GetMoveDeacc(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMovedLastUpdate}}
<syntaxhighlight lang="c++">bool GetMovedLastUpdate()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetMoveMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveOppositeDirAccMul}}
<syntaxhighlight lang="c++">float GetMoveOppositeDirAccMul(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveSpeed}}
<syntaxhighlight lang="c++">float GetMoveSpeed(eCharDir aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPhysicsBodyActive}}
<syntaxhighlight lang="c++">bool GetPhysicsBodyActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPitch}}
<syntaxhighlight lang="c++">float GetPitch()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPushImpulse}}
<syntaxhighlight lang="c++">float GetPushImpulse()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPushIn2D}}
<syntaxhighlight lang="c++">bool GetPushIn2D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRight}}
<syntaxhighlight lang="c++">const cVector3f& GetRight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRoll}}
<syntaxhighlight lang="c++">float GetRoll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotateYawWhenGravityAttached}}
<syntaxhighlight lang="c++">bool GetRotateYawWhenGravityAttached()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShape}}
<syntaxhighlight lang="c++">iCollideShape@ GetShape(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">const cVector3f& GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStepClimbSpeed}}
<syntaxhighlight lang="c++">float GetStepClimbSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStickToSlope}}
<syntaxhighlight lang="c++">bool GetStickToSlope()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTestCollision}}
<syntaxhighlight lang="c++">bool GetTestCollision()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUp}}
<syntaxhighlight lang="c++">const cVector3f& GetUp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUpdateCameraVelocity}}
<syntaxhighlight lang="c++">bool GetUpdateCameraVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUpdateCameraYaw}}
<syntaxhighlight lang="c++">bool GetUpdateCameraYaw()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUseEntitySmoothYPos}}
<syntaxhighlight lang="c++">bool GetUseEntitySmoothYPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocity}}
<syntaxhighlight lang="c++">cVector3f GetVelocity(float afFrameTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFrameTime|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocityContactForceMul}}
<syntaxhighlight lang="c++">float GetVelocityContactForceMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetYaw}}
<syntaxhighlight lang="c++">float GetYaw()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GravityIsActive}}
<syntaxhighlight lang="c++">bool GravityIsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsClimbing}}
<syntaxhighlight lang="c++">bool IsClimbing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOnGround}}
<syntaxhighlight lang="c++">bool IsOnGround()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Move}}
<syntaxhighlight lang="c++">void Move(eCharDir aDir,
          float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetClimbing}}
<syntaxhighlight lang="c++">void ResetClimbing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAccurateClimbing}}
<syntaxhighlight lang="c++">void SetAccurateClimbing(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActiveSize}}
<syntaxhighlight lang="c++">void SetActiveSize(int alNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAirFriction}}
<syntaxhighlight lang="c++">void SetAirFriction(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCamera}}
<syntaxhighlight lang="c++">void SetCamera(cCamera@ apCam)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCam|[[../cCamera|cCamera@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraPosAdd}}
<syntaxhighlight lang="c++">void SetCameraPosAdd(const cVector3f &in avAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAdd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraSmoothPosNum}}
<syntaxhighlight lang="c++">void SetCameraSmoothPosNum(int alNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraUpdateActive}}
<syntaxhighlight lang="c++">void SetCameraUpdateActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraUseSmoothing}}
<syntaxhighlight lang="c++">void SetCameraUseSmoothing(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterMaxPushMass}}
<syntaxhighlight lang="c++">void SetCharacterMaxPushMass(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterPushForce}}
<syntaxhighlight lang="c++">void SetCharacterPushForce(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterPushIn2D}}
<syntaxhighlight lang="c++">void SetCharacterPushIn2D(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterPushStrength}}
<syntaxhighlight lang="c++">void SetCharacterPushStrength(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetClimbForwardMul}}
<syntaxhighlight lang="c++">void SetClimbForwardMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetClimbHeightAdd}}
<syntaxhighlight lang="c++">void SetClimbHeightAdd(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
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

{{CodeDocDetailTop|SetConstantContactForceMul}}
<syntaxhighlight lang="c++">void SetConstantContactForceMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomGravity}}
<syntaxhighlight lang="c++">void SetCustomGravity(const cVector3f &in avCustomGravity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avCustomGravity|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomGravityActive}}
<syntaxhighlight lang="c++">void SetCustomGravityActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDeaccelerateMoveSpeedInAir}}
<syntaxhighlight lang="c++">void SetDeaccelerateMoveSpeedInAir(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisableDiagSpeedBoost}}
<syntaxhighlight lang="c++">void SetDisableDiagSpeedBoost(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntity}}
<syntaxhighlight lang="c++">void SetEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntityOffset}}
<syntaxhighlight lang="c++">void SetEntityOffset(const cMatrixf &in a_mtxOffset)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxOffset|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntityPitchAmount}}
<syntaxhighlight lang="c++">void SetEntityPitchAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntityPostOffset}}
<syntaxhighlight lang="c++">void SetEntityPostOffset(const cMatrixf &in a_mtxOffset)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxOffset|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntitySmoothPosNum}}
<syntaxhighlight lang="c++">void SetEntitySmoothPosNum(int alNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntitySmoothYPosNum}}
<syntaxhighlight lang="c++">void SetEntitySmoothYPosNum(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEntityUseSmoothing}}
<syntaxhighlight lang="c++">void SetEntityUseSmoothing(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetExtraBody}}
<syntaxhighlight lang="c++">void SetExtraBody(iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFeetPosition}}
<syntaxhighlight lang="c++">void SetFeetPosition(const cVector3f &in avPos,
                     bool abSmooth)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abSmooth|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForce}}
<syntaxhighlight lang="c++">void SetForce(const cVector3f &in avForce)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForceVelocity}}
<syntaxhighlight lang="c++">void SetForceVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityActive}}
<syntaxhighlight lang="c++">void SetGravityActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGroundAngleMin}}
<syntaxhighlight lang="c++">void SetGroundAngleMin(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGroundFriction}}
<syntaxhighlight lang="c++">void SetGroundFriction(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHitboxCollider}}
<syntaxhighlight lang="c++">void SetHitboxCollider(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMass}}
<syntaxhighlight lang="c++">void SetMass(float afMass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMass|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxContactForcePerMassUnit}}
<syntaxhighlight lang="c++">void SetMaxContactForcePerMassUnit(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxGravitySpeed}}
<syntaxhighlight lang="c++">void SetMaxGravitySpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxNegativeMoveSpeed}}
<syntaxhighlight lang="c++">void SetMaxNegativeMoveSpeed(eCharDir aDir,
                             float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxNoSlideSlopeAngle}}
<syntaxhighlight lang="c++">void SetMaxNoSlideSlopeAngle(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxOnGroundCount}}
<syntaxhighlight lang="c++">void SetMaxOnGroundCount(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxPositiveMoveSpeed}}
<syntaxhighlight lang="c++">void SetMaxPositiveMoveSpeed(eCharDir aDir,
                             float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxPushForce}}
<syntaxhighlight lang="c++">void SetMaxPushForce(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxPushMass}}
<syntaxhighlight lang="c++">void SetMaxPushMass(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxStepSize}}
<syntaxhighlight lang="c++">void SetMaxStepSize(float afSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSize|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxStepSizeInAir}}
<syntaxhighlight lang="c++">void SetMaxStepSizeInAir(float afSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSize|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveAcc}}
<syntaxhighlight lang="c++">void SetMoveAcc(eCharDir aDir,
                float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveDeacc}}
<syntaxhighlight lang="c++">void SetMoveDeacc(eCharDir aDir,
                  float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveOppositeDirAccMul}}
<syntaxhighlight lang="c++">void SetMoveOppositeDirAccMul(eCharDir aDir,
                              float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveSpeed}}
<syntaxhighlight lang="c++">void SetMoveSpeed(eCharDir aDir,
                  float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveSpeedMul}}
<syntaxhighlight lang="c++">void SetMoveSpeedMul(eCharDir aDir,
                     float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eCharDir|eCharDir]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPhysicsBodyActive}}
<syntaxhighlight lang="c++">void SetPhysicsBodyActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPitch}}
<syntaxhighlight lang="c++">void SetPitch(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos,
                 bool abSmooth)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abSmooth|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPushImpulse}}
<syntaxhighlight lang="c++">void SetPushImpulse(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPushIn2D}}
<syntaxhighlight lang="c++">void SetPushIn2D(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRoll}}
<syntaxhighlight lang="c++">void SetRoll(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateYawWhenGravityAttached}}
<syntaxhighlight lang="c++">void SetRotateYawWhenGravityAttached(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStepClimbSpeed}}
<syntaxhighlight lang="c++">void SetStepClimbSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStickToSlope}}
<syntaxhighlight lang="c++">void SetStickToSlope(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTestCollision}}
<syntaxhighlight lang="c++">void SetTestCollision(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUpdateCameraVelocity}}
<syntaxhighlight lang="c++">void SetUpdateCameraVelocity(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUpdateCameraYaw}}
<syntaxhighlight lang="c++">void SetUpdateCameraYaw(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupSafePositions}}
<syntaxhighlight lang="c++">void SetupSafePositions(float afSafePositionSaveInterval,
                        float afSafePositionBufferTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSafePositionSaveInterval|float|}}
{{CodeDocDetailParam|afSafePositionBufferTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUseEntitySmoothYPos}}
<syntaxhighlight lang="c++">void SetUseEntitySmoothYPos(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVelocityContactForceMul}}
<syntaxhighlight lang="c++">void SetVelocityContactForceMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetYaw}}
<syntaxhighlight lang="c++">void SetYaw(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopMovement}}
<syntaxhighlight lang="c++">void StopMovement()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TeleportToSafePosition}}
<syntaxhighlight lang="c++">void TeleportToSafePosition(float afElapsedTime,
                            bool abSmooth = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afElapsedTime|float|}}
{{CodeDocDetailParam|abSmooth|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}