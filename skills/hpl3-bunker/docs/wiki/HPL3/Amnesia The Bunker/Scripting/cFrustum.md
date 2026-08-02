{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cFrustum has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#CheckAABBNearPlaneIntersection|CheckAABBNearPlaneIntersection]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryItem|bool|[[#CheckBVNearPlaneIntersection|CheckBVNearPlaneIntersection]]([[../cBoundingVolume|cBoundingVolume@+]] aBV)|}}
{{CodeDocSummaryItem|bool|[[#CheckFrustumNearPlaneIntersection|CheckFrustumNearPlaneIntersection]]([[../cFrustum|cFrustum@+]] aFrustum)|}}
{{CodeDocSummaryItem|bool|[[#CheckLineIntersection|CheckLineIntersection]](const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd, [[../cVector3f|cVector3f]] &in avIntersection)|}}
{{CodeDocSummaryItem|bool|[[#CheckPyramidNearPlaneIntersection|CheckPyramidNearPlaneIntersection]]([[../cFrustum|cFrustum@+]] aFrustum)|}}
{{CodeDocSummaryItem|bool|[[#CheckSphereNearPlaneIntersection|CheckSphereNearPlaneIntersection]](const [[../cVector3f|cVector3f]] &in avCenter, float afRadius)|}}
{{CodeDocSummaryItem|[[../eCollision|eCollision]]|[[#CollideAABB|CollideAABB]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax, int alMaxPlanes)|}}
{{CodeDocSummaryItem|[[../eCollision|eCollision]]|[[#CollideBoundingVolume|CollideBoundingVolume]]([[../cBoundingVolume|cBoundingVolume@+]] apBV)|}}
{{CodeDocSummaryItem|[[../eCollision|eCollision]]|[[#CollideFrustum|CollideFrustum]]([[../cFrustum|cFrustum@+]] apFrustum)|}}
{{CodeDocSummaryItem|[[../eCollision|eCollision]]|[[#CollideFustrumSphere|CollideFustrumSphere]](const [[../cVector3f|cVector3f]] &in avCenter, float afRadius)|}}
{{CodeDocSummaryItem|bool|[[#CollidePoint|CollidePoint]](const [[../cVector3f|cVector3f]] &in avPoint)|}}
{{CodeDocSummaryItem|[[../eCollision|eCollision]]|[[#CollideSphere|CollideSphere]](const [[../cVector3f|cVector3f]] &in avCenter, float afRadius, int alMaxPlanes)|}}
{{CodeDocSummaryItem|float|[[#GetAspect|GetAspect]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetFarPlane|GetFarPlane]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForward|GetForward]]()|}}
{{CodeDocSummaryItem|float|[[#GetFOV|GetFOV]]()|}}
{{CodeDocSummaryItem|bool|[[#GetInfFarPlane|GetInfFarPlane]]()|}}
{{CodeDocSummaryItem|bool|[[#GetInvertsCullMode|GetInvertsCullMode]]()|}}
{{CodeDocSummaryItem|float|[[#GetNearPlane|GetNearPlane]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetOrigin|GetOrigin]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetOriginBV|GetOriginBV]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetOrthoViewSize|GetOrthoViewSize]]()|}}
{{CodeDocSummaryItem|[[../cPlanef|cPlanef]]|[[#GetPlane|GetPlane]]([[../eFrustumPlane|eFrustumPlane]] aType)|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetProjectionMatrix|GetProjectionMatrix]]()|}}
{{CodeDocSummaryItem|[[../eProjectionType|eProjectionType]]|[[#GetProjectionType|GetProjectionType]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVertex|GetVertex]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetViewMatrix|GetViewMatrix]]()|}}
{{CodeDocSummaryItem|void|[[#SetInvertsCullMode|SetInvertsCullMode]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetupOrthoProj|SetupOrthoProj]](const [[../cMatrixf|cMatrixf]] &in a_mtxProj, const [[../cMatrixf|cMatrixf]] &in a_mtxView, float afFarPlane, float afNearPlane, const [[../cVector2f|cVector2f]] &in avViewSize, const [[../cVector3f|cVector3f]] &in avOrigin)|}}
{{CodeDocSummaryItem|void|[[#SetupPerspectiveProj|SetupPerspectiveProj]](const [[../cMatrixf|cMatrixf]] &in a_mtxProj, const [[../cMatrixf|cMatrixf]] &in a_mtxView, float afFarPlane, float afNearPlane, float afFOV, float afAspect, const [[../cVector3f|cVector3f]] &in avOrigin)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CheckAABBNearPlaneIntersection}}
<syntaxhighlight lang="c++">bool CheckAABBNearPlaneIntersection(const cVector3f &in avMin,
                                    const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckBVNearPlaneIntersection}}
<syntaxhighlight lang="c++">bool CheckBVNearPlaneIntersection(cBoundingVolume@+ aBV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aBV|[[../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckFrustumNearPlaneIntersection}}
<syntaxhighlight lang="c++">bool CheckFrustumNearPlaneIntersection(cFrustum@+ aFrustum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFrustum|[[../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckLineIntersection}}
<syntaxhighlight lang="c++">bool CheckLineIntersection(const cVector3f &in avStart,
                           const cVector3f &in avEnd,
                           cVector3f &in avIntersection)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avIntersection|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckPyramidNearPlaneIntersection}}
<syntaxhighlight lang="c++">bool CheckPyramidNearPlaneIntersection(cFrustum@+ aFrustum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFrustum|[[../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckSphereNearPlaneIntersection}}
<syntaxhighlight lang="c++">bool CheckSphereNearPlaneIntersection(const cVector3f &in avCenter,
                                      float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avCenter|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollideAABB}}
<syntaxhighlight lang="c++">eCollision CollideAABB(const cVector3f &in avMin,
                       const cVector3f &in avMax,
                       int alMaxPlanes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|alMaxPlanes|int|}}
{{CodeDocDetailReturn|eCollision|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollideBoundingVolume}}
<syntaxhighlight lang="c++">eCollision CollideBoundingVolume(cBoundingVolume@+ apBV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBV|[[../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|eCollision|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollideFrustum}}
<syntaxhighlight lang="c++">eCollision CollideFrustum(cFrustum@+ apFrustum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFrustum|[[../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailReturn|eCollision|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollideFustrumSphere}}
<syntaxhighlight lang="c++">eCollision CollideFustrumSphere(const cVector3f &in avCenter,
                                float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avCenter|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|eCollision|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollidePoint}}
<syntaxhighlight lang="c++">bool CollidePoint(const cVector3f &in avPoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollideSphere}}
<syntaxhighlight lang="c++">eCollision CollideSphere(const cVector3f &in avCenter,
                         float afRadius,
                         int alMaxPlanes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avCenter|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|alMaxPlanes|int|}}
{{CodeDocDetailReturn|eCollision|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAspect}}
<syntaxhighlight lang="c++">float GetAspect()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">const cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFarPlane}}
<syntaxhighlight lang="c++">float GetFarPlane()</syntaxhighlight>
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

{{CodeDocDetailTop|GetInfFarPlane}}
<syntaxhighlight lang="c++">bool GetInfFarPlane()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInvertsCullMode}}
<syntaxhighlight lang="c++">bool GetInvertsCullMode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNearPlane}}
<syntaxhighlight lang="c++">float GetNearPlane()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOrigin}}
<syntaxhighlight lang="c++">const cVector3f& GetOrigin()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOriginBV}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetOriginBV()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOrthoViewSize}}
<syntaxhighlight lang="c++">const cVector2f& GetOrthoViewSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPlane}}
<syntaxhighlight lang="c++">const cPlanef& GetPlane(eFrustumPlane aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eFrustumPlane|eFrustumPlane]]|}}
{{CodeDocDetailReturn|const cPlanef&|}}
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

{{CodeDocDetailTop|GetVertex}}
<syntaxhighlight lang="c++">const cVector3f& GetVertex(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetViewMatrix}}
<syntaxhighlight lang="c++">const cMatrixf& GetViewMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetInvertsCullMode}}
<syntaxhighlight lang="c++">void SetInvertsCullMode(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupOrthoProj}}
<syntaxhighlight lang="c++">void SetupOrthoProj(const cMatrixf &in a_mtxProj,
                    const cMatrixf &in a_mtxView,
                    float afFarPlane,
                    float afNearPlane,
                    const cVector2f &in avViewSize,
                    const cVector3f &in avOrigin)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxProj|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|a_mtxView|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|afFarPlane|float|}}
{{CodeDocDetailParam|afNearPlane|float|}}
{{CodeDocDetailParam|avViewSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avOrigin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupPerspectiveProj}}
<syntaxhighlight lang="c++">void SetupPerspectiveProj(const cMatrixf &in a_mtxProj,
                          const cMatrixf &in a_mtxView,
                          float afFarPlane,
                          float afNearPlane,
                          float afFOV,
                          float afAspect,
                          const cVector3f &in avOrigin)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxProj|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|a_mtxView|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|afFarPlane|float|}}
{{CodeDocDetailParam|afNearPlane|float|}}
{{CodeDocDetailParam|afFOV|float|}}
{{CodeDocDetailParam|afAspect|float|}}
{{CodeDocDetailParam|avOrigin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}