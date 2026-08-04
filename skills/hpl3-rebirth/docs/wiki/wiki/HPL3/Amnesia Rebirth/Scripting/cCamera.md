{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cCamera has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddPitch|AddPitch]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#AddRoll|AddRoll]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#AddYaw|AddYaw]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#AttachEntity|AttachEntity]]([[../iEntity3D|iEntity3D@]] aEntity)|}}
{{CodeDocSummaryItem|void|[[#ClearAttachedEntities|ClearAttachedEntities]]()|}}
{{CodeDocSummaryItem|float|[[#GetAspect|GetAspect]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetAttachmentNode|GetAttachmentNode]]()|}}
{{CodeDocSummaryItem|[[../cFrustum|cFrustum]]|[[#GetExtendedFrustum|GetExtendedFrustum]]()|}}
{{CodeDocSummaryItem|float|[[#GetFarClipPlane|GetFarClipPlane]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForward|GetForward]]()|}}
{{CodeDocSummaryItem|float|[[#GetFOV|GetFOV]]()|}}
{{CodeDocSummaryItem|[[../cFrustum|cFrustum]]|[[#GetFrustum|GetFrustum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetInifintiveFarPlane|GetInifintiveFarPlane]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetMatrix|GetMatrix]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetMoveMatrix|GetMoveMatrix]]()|}}
{{CodeDocSummaryItem|[[../eCameraMoveMode|eCameraMoveMode]]|[[#GetMoveMode|GetMoveMode]]()|}}
{{CodeDocSummaryItem|float|[[#GetNearClipPlane|GetNearClipPlane]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetOrthoViewSize|GetOrthoViewSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetPitch|GetPitch]]()|}}
{{CodeDocSummaryItem|float|[[#GetPitchMaxLimit|GetPitchMaxLimit]]()|}}
{{CodeDocSummaryItem|float|[[#GetPitchMinLimit|GetPitchMinLimit]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetProjectionMatrix|GetProjectionMatrix]]()|}}
{{CodeDocSummaryItem|[[../eProjectionType|eProjectionType]]|[[#GetProjectionType|GetProjectionType]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetRight|GetRight]]()|}}
{{CodeDocSummaryItem|float|[[#GetRoll|GetRoll]]()|}}
{{CodeDocSummaryItem|[[../eCameraRotateMode|eCameraRotateMode]]|[[#GetRotateMode|GetRotateMode]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetRotationMatrix|GetRotationMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetUp|GetUp]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVelocity|GetVelocity]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetViewMatrix|GetViewMatrix]]()|}}
{{CodeDocSummaryItem|float|[[#GetYaw|GetYaw]]()|}}
{{CodeDocSummaryItem|float|[[#GetYawMaxLimit|GetYawMaxLimit]]()|}}
{{CodeDocSummaryItem|float|[[#GetYawMinLimit|GetYawMinLimit]]()|}}
{{CodeDocSummaryItem|void|[[#MoveForward|MoveForward]](float afDist)|}}
{{CodeDocSummaryItem|void|[[#MoveRight|MoveRight]](float afDist)|}}
{{CodeDocSummaryItem|void|[[#MoveUp|MoveUp]](float afDist)|}}
{{CodeDocSummaryItem|void|[[#RemoveEntity|RemoveEntity]]([[../iEntity3D|iEntity3D@]] aEntity)|}}
{{CodeDocSummaryItem|void|[[#ResetRotation|ResetRotation]]()|}}
{{CodeDocSummaryItem|void|[[#SetAspect|SetAspect]](float afSpect)|}}
{{CodeDocSummaryItem|void|[[#SetFarClipPlane|SetFarClipPlane]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetForward|SetForward]](const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetFOV|SetFOV]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetInifintiveFarPlane|SetInifintiveFarPlane]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveMode|SetMoveMode]]([[../eCameraMoveMode|eCameraMoveMode]] aMode)|}}
{{CodeDocSummaryItem|void|[[#SetNearClipPlane|SetNearClipPlane]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetOrthoViewSize|SetOrthoViewSize]](const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetPitch|SetPitch]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetPitchLimits|SetPitchLimits]](float afMin, float afMax)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetProjectionType|SetProjectionType]]([[../eProjectionType|eProjectionType]] aType)|}}
{{CodeDocSummaryItem|void|[[#SetRight|SetRight]](const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetRoll|SetRoll]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetRotateMode|SetRotateMode]]([[../eCameraRotateMode|eCameraRotateMode]] aMode)|}}
{{CodeDocSummaryItem|void|[[#SetRotationMatrix|SetRotationMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxRot)|}}
{{CodeDocSummaryItem|void|[[#SetUp|SetUp]](const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetVelocity|SetVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetYaw|SetYaw]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetYawLimits|SetYawLimits]](float afMin, float afMax)|}}
{{CodeDocSummaryItem|void|[[#UnProject|UnProject]]([[../cVector3f|cVector3f]] &out avPosition, [[../cVector3f|cVector3f]] &out apDirection, const [[../cVector2f|cVector2f]] &in avScreenPos, const [[../cVector2f|cVector2f]] &in avVirtualScreenSize)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddPitch}}
<syntaxhighlight lang="c++">void AddPitch(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddRoll}}
<syntaxhighlight lang="c++">void AddRoll(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddYaw}}
<syntaxhighlight lang="c++">void AddYaw(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachEntity}}
<syntaxhighlight lang="c++">void AttachEntity(iEntity3D@ aEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearAttachedEntities}}
<syntaxhighlight lang="c++">void ClearAttachedEntities()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAspect}}
<syntaxhighlight lang="c++">float GetAspect()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttachmentNode}}
<syntaxhighlight lang="c++">cNode3D@ GetAttachmentNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetExtendedFrustum}}
<syntaxhighlight lang="c++">cFrustum@+ GetExtendedFrustum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cFrustum@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFarClipPlane}}
<syntaxhighlight lang="c++">float GetFarClipPlane()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForward}}
<syntaxhighlight lang="c++">cVector3f GetForward()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFOV}}
<syntaxhighlight lang="c++">float GetFOV()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFrustum}}
<syntaxhighlight lang="c++">cFrustum@+ GetFrustum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cFrustum@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInifintiveFarPlane}}
<syntaxhighlight lang="c++">bool GetInifintiveFarPlane()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetMoveMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveMode}}
<syntaxhighlight lang="c++">eCameraMoveMode GetMoveMode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eCameraMoveMode|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNearClipPlane}}
<syntaxhighlight lang="c++">float GetNearClipPlane()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOrthoViewSize}}
<syntaxhighlight lang="c++">const cVector2f& GetOrthoViewSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPitch}}
<syntaxhighlight lang="c++">float GetPitch()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPitchMaxLimit}}
<syntaxhighlight lang="c++">float GetPitchMaxLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPitchMinLimit}}
<syntaxhighlight lang="c++">float GetPitchMinLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProjectionMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetProjectionMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProjectionType}}
<syntaxhighlight lang="c++">eProjectionType GetProjectionType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eProjectionType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRight}}
<syntaxhighlight lang="c++">cVector3f GetRight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRoll}}
<syntaxhighlight lang="c++">float GetRoll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotateMode}}
<syntaxhighlight lang="c++">eCameraRotateMode GetRotateMode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eCameraRotateMode|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotationMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetRotationMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUp}}
<syntaxhighlight lang="c++">cVector3f GetUp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocity}}
<syntaxhighlight lang="c++">const cVector3f& GetVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetViewMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetViewMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetYaw}}
<syntaxhighlight lang="c++">float GetYaw()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetYawMaxLimit}}
<syntaxhighlight lang="c++">float GetYawMaxLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetYawMinLimit}}
<syntaxhighlight lang="c++">float GetYawMinLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveForward}}
<syntaxhighlight lang="c++">void MoveForward(float afDist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDist|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveRight}}
<syntaxhighlight lang="c++">void MoveRight(float afDist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDist|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveUp}}
<syntaxhighlight lang="c++">void MoveUp(float afDist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDist|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveEntity}}
<syntaxhighlight lang="c++">void RemoveEntity(iEntity3D@ aEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetRotation}}
<syntaxhighlight lang="c++">void ResetRotation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAspect}}
<syntaxhighlight lang="c++">void SetAspect(float afSpect)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpect|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFarClipPlane}}
<syntaxhighlight lang="c++">void SetFarClipPlane(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForward}}
<syntaxhighlight lang="c++">void SetForward(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFOV}}
<syntaxhighlight lang="c++">void SetFOV(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetInifintiveFarPlane}}
<syntaxhighlight lang="c++">void SetInifintiveFarPlane(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveMode}}
<syntaxhighlight lang="c++">void SetMoveMode(eCameraMoveMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eCameraMoveMode|eCameraMoveMode]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNearClipPlane}}
<syntaxhighlight lang="c++">void SetNearClipPlane(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetOrthoViewSize}}
<syntaxhighlight lang="c++">void SetOrthoViewSize(const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPitch}}
<syntaxhighlight lang="c++">void SetPitch(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPitchLimits}}
<syntaxhighlight lang="c++">void SetPitchLimits(float afMin,
                    float afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetProjectionType}}
<syntaxhighlight lang="c++">void SetProjectionType(eProjectionType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eProjectionType|eProjectionType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRight}}
<syntaxhighlight lang="c++">void SetRight(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRoll}}
<syntaxhighlight lang="c++">void SetRoll(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateMode}}
<syntaxhighlight lang="c++">void SetRotateMode(eCameraRotateMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eCameraRotateMode|eCameraRotateMode]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotationMatrix}}
<syntaxhighlight lang="c++">void SetRotationMatrix(const cMatrixf &in a_mtxRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxRot|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUp}}
<syntaxhighlight lang="c++">void SetUp(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVelocity}}
<syntaxhighlight lang="c++">void SetVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetYaw}}
<syntaxhighlight lang="c++">void SetYaw(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetYawLimits}}
<syntaxhighlight lang="c++">void SetYawLimits(float afMin,
                  float afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UnProject}}
<syntaxhighlight lang="c++">void UnProject(cVector3f &out avPosition,
               cVector3f &out apDirection,
               const cVector2f &in avScreenPos,
               const cVector2f &in avVirtualScreenSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apDirection|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avScreenPos|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avVirtualScreenSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}