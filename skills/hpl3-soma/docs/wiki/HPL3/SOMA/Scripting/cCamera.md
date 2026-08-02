{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cCamera has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddPitch || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddRoll || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddYaw || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachEntity || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ aEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearAttachedEntities ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAspect ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetAttachmentNode ||   ||
|-
| [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@+</syntaxhighlight>]] || GetExtendedFrustum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetExtendedPitch ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetExtendedYaw ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetExtenededRoll ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFarClipPlane ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetForward ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFOV ||   ||
|-
| [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@+</syntaxhighlight>]] || GetFrustum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetInifintiveFarPlane ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetMatrix ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetMoveMatrix ||   ||
|-
| [[../eCameraMoveMode|<syntaxhighlight lang="c++" inline>eCameraMoveMode</syntaxhighlight>]] || GetMoveMode ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetNearClipPlane ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetOrthoViewSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPitch ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPitchMaxLimit ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPitchMinLimit ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetPosition ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetProjectionMatrix ||   ||
|-
| [[../eProjectionType|<syntaxhighlight lang="c++" inline>eProjectionType</syntaxhighlight>]] || GetProjectionType ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetRight ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRoll ||  ||
|-
| [[../eCameraRotateMode|<syntaxhighlight lang="c++" inline>eCameraRotateMode</syntaxhighlight>]] || GetRotateMode ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetRotationMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetUp ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetVelocity ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetViewMatrix ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetYaw ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetYawMaxLimit ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetYawMinLimit ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveForward || <syntaxhighlight lang="c++" inline>float afDist</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveRight || <syntaxhighlight lang="c++" inline>float afDist</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveUp || <syntaxhighlight lang="c++" inline>float afDist</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveEntity || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ aEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetRotation ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAspect || <syntaxhighlight lang="c++" inline>float afSpect</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetExtendedPitch || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetExtendedRoll || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetExtendedYaw || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFarClipPlane || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForward || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFOV || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetInifintiveFarPlane || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMoveMode || [[../eCameraMoveMode|<syntaxhighlight lang="c++" inline>eCameraMoveMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNearClipPlane || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetOrthoViewSize || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPitch || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPitchLimits || <syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetProjectionType || [[../eProjectionType|<syntaxhighlight lang="c++" inline>eProjectionType aType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRight || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRoll || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotateMode || [[../eCameraRotateMode|<syntaxhighlight lang="c++" inline>eCameraRotateMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotationMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxRot</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUp || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetYaw || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetYawLimits || <syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UnProject || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avPosition</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& apDirection</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avScreenPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avVirtualScreenSize</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__