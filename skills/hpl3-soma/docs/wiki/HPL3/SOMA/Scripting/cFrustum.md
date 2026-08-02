{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cFrustum has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckAABBNearPlaneIntersection || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMax</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckBVNearPlaneIntersection || [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+ aBV</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckFrustumNearPlaneIntersection || [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@+ aFrustum</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckLineIntersection || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avEnd</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avIntersection</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckPyramidNearPlaneIntersection || [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@+ aFrustum</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckSphereNearPlaneIntersection || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avCenter</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight> ||
|-
| [[../eCollision|<syntaxhighlight lang="c++" inline>eCollision</syntaxhighlight>]] || CollideAABB || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMax</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMaxPlanes</syntaxhighlight> ||
|-
| [[../eCollision|<syntaxhighlight lang="c++" inline>eCollision</syntaxhighlight>]] || CollideBoundingVolume || [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+ apBV</syntaxhighlight>]] ||
|-
| [[../eCollision|<syntaxhighlight lang="c++" inline>eCollision</syntaxhighlight>]] || CollideFrustum || [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@+ apFrustum</syntaxhighlight>]] ||
|-
| [[../eCollision|<syntaxhighlight lang="c++" inline>eCollision</syntaxhighlight>]] || CollideFustrumSphere || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avCenter</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidePoint || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPoint</syntaxhighlight>]] ||
|-
| [[../eCollision|<syntaxhighlight lang="c++" inline>eCollision</syntaxhighlight>]] || CollideSphere || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avCenter</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alMaxPlanes</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAspect ||  ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>const cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFarPlane ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetForward ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFOV ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetInfFarPlane ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetInvertsCullMode ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetNearPlane ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetOrigin ||   ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetOriginBV ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetOrthoViewSize ||  ||
|-
| [[../cPlanef|<syntaxhighlight lang="c++" inline>const cPlanef&</syntaxhighlight>]] || GetPlane || [[../eFrustumPlane|<syntaxhighlight lang="c++" inline>eFrustumPlane aType</syntaxhighlight>]] ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetProjectionMatrix ||   ||
|-
| [[../eProjectionType|<syntaxhighlight lang="c++" inline>eProjectionType</syntaxhighlight>]] || GetProjectionType ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetVertex || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetViewMatrix ||  ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetInvertsCullMode || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupOrthoProj || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxProj</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxView</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFarPlane</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afNearPlane</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avViewSize</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avOrigin</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupPerspectiveProj || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxProj</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxView</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFarPlane</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afNearPlane</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFOV</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afAspect</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avOrigin</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__