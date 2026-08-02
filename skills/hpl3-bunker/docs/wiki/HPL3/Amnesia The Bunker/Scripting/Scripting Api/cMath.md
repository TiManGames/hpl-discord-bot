{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|float|[[#cMath_Abs|cMath_Abs]](float afX)|}}
{{CodeDocSummaryItem|int|[[#cMath_Abs|cMath_Abs]](int alX)|}}
{{CodeDocSummaryItem|float|[[#cMath_ACos|cMath_ACos]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_ASin|cMath_ASin]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_ATan|cMath_ATan]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_ATan2|cMath_ATan2]](float afY, float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Ceil|cMath_Ceil]](float afVal)|}}
{{CodeDocSummaryItem|int|[[#cMath_CeilToInt|cMath_CeilToInt]](float afVal)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckAABBInside|cMath_CheckAABBInside]](const [[../../cVector3f|cVector3f]] &in avInsideMin, const [[../../cVector3f|cVector3f]] &in avInsideMax, const [[../../cVector3f|cVector3f]] &in avOutsideMin, const [[../../cVector3f|cVector3f]] &in avOutsideMax)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckAABBIntersection|cMath_CheckAABBIntersection]](const [[../../cVector3f|cVector3f]] &in avMin1, const [[../../cVector3f|cVector3f]] &in avMax1, const [[../../cVector3f|cVector3f]] &in avMin2, const [[../../cVector3f|cVector3f]] &in avMax2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckAABBLineIntersection|cMath_CheckAABBLineIntersection]](const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax, const [[../../cVector3f|cVector3f]] &in avLineStart, const [[../../cVector3f|cVector3f]] &in avLineEnd, [[../../cVector3f|cVector3f]] &out avIntersectionPos, float &out afT)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckAABBSphereCollision|cMath_CheckAABBSphereCollision]](const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax, const [[../../cVector3f|cVector3f]] &in avCenter, float afRadius)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckBVIntersection|cMath_CheckBVIntersection]]([[../../cBoundingVolume|cBoundingVolume@+]] aBV1, [[../../cBoundingVolume|cBoundingVolume@+]] aBV2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPlaneAABBCollision|cMath_CheckPlaneAABBCollision]](const [[../../cPlanef|cPlanef]] &in aPlane, const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax, const [[../../cVector3f|cVector3f]] &in avSphereCenter, float afSphereRadius)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPlaneAABBCollision|cMath_CheckPlaneAABBCollision]](const [[../../cPlanef|cPlanef]] &in aPlane, const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPlaneBVCollision|cMath_CheckPlaneBVCollision]](const [[../../cPlanef|cPlanef]] &in aPlane, [[../../cBoundingVolume|cBoundingVolume@+]] aBV)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPlaneLineIntersection|cMath_CheckPlaneLineIntersection]](const [[../../cPlanef|cPlanef]] &in aPlane, const [[../../cVector3f|cVector3f]] &in avLineStart, const [[../../cVector3f|cVector3f]] &in avLineEnd, [[../../cVector3f|cVector3f]] &out avIntersectionPos, float &out afT)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPlaneSphereCollision|cMath_CheckPlaneSphereCollision]](const [[../../cPlanef|cPlanef]] &in aPlane, const [[../../cVector3f|cVector3f]] &in avCenter, float afRadius)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPointInAABBIntersection|cMath_CheckPointInAABBIntersection]](const [[../../cVector3f|cVector3f]] &in avPoint, const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPointInBVIntersection|cMath_CheckPointInBVIntersection]](const [[../../cVector3f|cVector3f]] &in avPoint, [[../../cBoundingVolume|cBoundingVolume@+]] aBV)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPointInRectIntersection|cMath_CheckPointInRectIntersection]](const [[../../cVector2f|cVector2f]] &in avPoint, const [[../../cRect2f|cRect2f]] &in aRect)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckPointInSphereIntersection|cMath_CheckPointInSphereIntersection]](const [[../../cVector3f|cVector3f]] &in avPoint, const [[../../cVector3f|cVector3f]] &in avSpherePos, float afSphereRadius)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectFit|cMath_CheckRectFit]](const [[../../cRect2l|cRect2l]] &in aRectSrc, const [[../../cRect2l|cRect2l]] &in aRectDest)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectFit|cMath_CheckRectFit]](const [[../../cRect2f|cRect2f]] &in aRectSrc, const [[../../cRect2f|cRect2f]] &in aRectDest)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectIntersection|cMath_CheckRectIntersection]](const [[../../cRect2l|cRect2l]] &in aRect1, const [[../../cRect2l|cRect2l]] &in aRect2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectIntersection|cMath_CheckRectIntersection]](const [[../../cRect2f|cRect2f]] &in aRect1, const [[../../cRect2f|cRect2f]] &in aRect2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectIntersection|cMath_CheckRectIntersection]](const [[../../cVector2l|cVector2l]] &in avMin1, const [[../../cVector2l|cVector2l]] &in avMax1, const [[../../cVector2l|cVector2l]] &in avMin2, const [[../../cVector2l|cVector2l]] &in avMax2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckRectIntersection|cMath_CheckRectIntersection]](const [[../../cVector2f|cVector2f]] &in avMin1, const [[../../cVector2f|cVector2f]] &in avMax1, const [[../../cVector2f|cVector2f]] &in avMin2, const [[../../cVector2f|cVector2f]] &in avMax2)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckSphereIntersection|cMath_CheckSphereIntersection]](const [[../../cVector3f|cVector3f]] &in avPosA, float afRadiusA, const [[../../cVector3f|cVector3f]] &in avPosB, float afRadiusB)|}}
{{CodeDocSummaryItem|bool|[[#cMath_CheckSphereLineIntersection|cMath_CheckSphereLineIntersection]](const [[../../cVector3f|cVector3f]] &in avSpherePos, float afSphereRadius, const [[../../cVector3f|cVector3f]] &in avLineStart, const [[../../cVector3f|cVector3f]] &in avLineEnd, float &out afT1, [[../../cVector3f|cVector3f]] &out afIntersection1, float &out afT2, [[../../cVector3f|cVector3f]] &out avIntersection2)|}}
{{CodeDocSummaryItem|float|[[#cMath_Clamp|cMath_Clamp]](float afX, float afMin, float afMax)|}}
{{CodeDocSummaryItem|int|[[#cMath_Clamp|cMath_Clamp]](int alX, int alMin, int alMax)|}}
{{CodeDocSummaryItem|float|[[#cMath_Cos|cMath_Cos]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Easing|cMath_Easing]]([[../../eEasing|eEasing]] aType, float afT, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_ExpandAABBMax|cMath_ExpandAABBMax]](const [[../../cVector3f|cVector3f]] &in avBaseMax, const [[../../cVector3f|cVector3f]] &in avAddMax)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_ExpandAABBMin|cMath_ExpandAABBMin]](const [[../../cVector3f|cVector3f]] &in avBaseMin, const [[../../cVector3f|cVector3f]] &in avAddMin)|}}
{{CodeDocSummaryItem|float|[[#cMath_FastRandomFloat|cMath_FastRandomFloat]](int alSeed)|}}
{{CodeDocSummaryItem|float|[[#cMath_Floor|cMath_Floor]](float afVal)|}}
{{CodeDocSummaryItem|int|[[#cMath_FloorToInt|cMath_FloorToInt]](float afVal)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetAngleDistance|cMath_GetAngleDistance]](float afAngle1, float afAngle2, float afMaxAngle)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetAngleDistanceDeg|cMath_GetAngleDistanceDeg]](float afAngle1, float afAngle2)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetAngleDistanceRad|cMath_GetAngleDistanceRad]](float afAngle1, float afAngle2)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_GetAngleDistanceVector2f|cMath_GetAngleDistanceVector2f]](const [[../../cVector2f|cVector2f]] &in avAngle1, const [[../../cVector2f|cVector2f]] &in avAngle2, float afMaxAngle)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_GetAngleDistanceVector2fDeg|cMath_GetAngleDistanceVector2fDeg]](const [[../../cVector2f|cVector2f]] &in avAngle1, const [[../../cVector2f|cVector2f]] &in avAngle2)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_GetAngleDistanceVector2fRad|cMath_GetAngleDistanceVector2fRad]](const [[../../cVector2f|cVector2f]] &in avAngle1, const [[../../cVector2f|cVector2f]] &in avAngle2)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_GetAngleDistanceVector3f|cMath_GetAngleDistanceVector3f]](const [[../../cVector3f|cVector3f]] &in avAngle1, const [[../../cVector3f|cVector3f]] &in avAngle2, float afMaxAngle)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_GetAngleDistanceVector3fDeg|cMath_GetAngleDistanceVector3fDeg]](const [[../../cVector3f|cVector3f]] &in avAngle1, const [[../../cVector3f|cVector3f]] &in avAngle2)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_GetAngleDistanceVector3fRad|cMath_GetAngleDistanceVector3fRad]](const [[../../cVector3f|cVector3f]] &in avAngle1, const [[../../cVector3f|cVector3f]] &in avAngle2)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetAngleFromPoints2D|cMath_GetAngleFromPoints2D]](const [[../../cVector2f|cVector2f]] &in aStartPos, const [[../../cVector2f|cVector2f]] &in avGoalPos)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_GetAngleFromPoints3D|cMath_GetAngleFromPoints3D]](const [[../../cVector3f|cVector3f]] &in avStartPos, const [[../../cVector3f|cVector3f]] &in avGoalPos)|}}
{{CodeDocSummaryItem|void|[[#cMath_GetAngleFromVector|cMath_GetAngleFromVector]](const [[../../cVector2f|cVector2f]] &in avVec, float &out afAngle, float &out afLength)|}}
{{CodeDocSummaryItem|int|[[#cMath_GetBit|cMath_GetBit]](int alBitNum)|}}
{{CodeDocSummaryItem|bool|[[#cMath_GetBitFlag|cMath_GetBitFlag]](int alFlagNum, int alBit)|}}
{{CodeDocSummaryItem|[[../../cRect2f|cRect2f]]|[[#cMath_GetClipRect|cMath_GetClipRect]](const [[../../cRect2f|cRect2f]] &in aRectSrc, const [[../../cRect2f|cRect2f]] &in aRectDest)|}}
{{CodeDocSummaryItem|void|[[#cMath_GetClipRectFromBV|cMath_GetClipRectFromBV]]([[../../cRect2l|cRect2l]] &out aDestRect, [[../../cBoundingVolume|cBoundingVolume@+]] aBV, [[../../cFrustum|cFrustum@+]] apFrustum, const [[../../cVector2l|cVector2l]] &in avScreenSize)|}}
{{CodeDocSummaryItem|[[../../cRect2l|cRect2l]]|[[#cMath_GetClipRectFromNormalizedMinMax|cMath_GetClipRectFromNormalizedMinMax]](const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax, const [[../../cVector2l|cVector2l]] &in avScreenSize)|}}
{{CodeDocSummaryItem|[[../../cRect2l|cRect2l]]|[[#cMath_GetClipRectFromSphere|cMath_GetClipRectFromSphere]](const [[../../cVector3f|cVector3f]] &in avPosition, float afRadius, [[../../cFrustum|cFrustum@+]] apFrustum, const [[../../cVector2l|cVector2l]] &in avScreenSize, bool abPositionIsScreenSpace)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetCorrectSignOfSpeed|cMath_GetCorrectSignOfSpeed]](float afCurrent, float afDest, float afSpeed)|}}
{{CodeDocSummaryItem|float|[[#cMath_GetFraction|cMath_GetFraction]](float afVal)|}}
{{CodeDocSummaryItem|bool|[[#cMath_GetNormalizedClipRectFromBV|cMath_GetNormalizedClipRectFromBV]]([[../../cVector3f|cVector3f]] &out avDestMin, [[../../cVector3f|cVector3f]] &out avDestMax, [[../../cBoundingVolume|cBoundingVolume@+]] aBV, [[../../cFrustum|cFrustum@+]] aFrustum)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_GetPoint3DFromSphericalCoords|cMath_GetPoint3DFromSphericalCoords]](const [[../../cVector3f|cVector3f]] &in avSphCenter, float afSphRadius, const [[../../cVector2f|cVector2f]] &in avSphCoords)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_GetSphericalCoordsFromPoint3D|cMath_GetSphericalCoordsFromPoint3D]](const [[../../cVector3f|cVector3f]] &in avSphCenter, const [[../../cVector3f|cVector3f]] &in avPoint)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_GetVectorFromAngle2D|cMath_GetVectorFromAngle2D]](float afAngle, float afLength)|}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#cMath_HexToRGB|cMath_HexToRGB]](const [[../../tString|tString]] &in asHex)|}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#cMath_HexWToRGB|cMath_HexWToRGB]](const [[../../tWString|tWString]] &in asHex)|}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#cMath_HSBToRGB|cMath_HSBToRGB]](const [[../../cVector3f|cVector3f]] &in avHSB)|}}
{{CodeDocSummaryItem|float|[[#cMath_IncreaseTo|cMath_IncreaseTo]](float afX, float afAdd, float afDest)|}}
{{CodeDocSummaryItem|float|[[#cMath_InterpolateCosine|cMath_InterpolateCosine]](float afA, float afB, float afT)|}}
{{CodeDocSummaryItem|float|[[#cMath_InterpolateCubic|cMath_InterpolateCubic]](float afX0, float afX1, float afX2, float afX3, float afT)|}}
{{CodeDocSummaryItem|float|[[#cMath_InterpolateHermite|cMath_InterpolateHermite]](float afX0, float afX1, float afX2, float afX3, float afT, float afTension, float afBias)|}}
{{CodeDocSummaryItem|float|[[#cMath_InterpolateLinear|cMath_InterpolateLinear]](float afA, float afB, float afT)|}}
{{CodeDocSummaryItem|float|[[#cMath_InterpolateSigmoid|cMath_InterpolateSigmoid]](float afA, float afB, float afT)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsPow2|cMath_IsPow2]](int alX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](float afX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](const [[../../cVector2f|cVector2f]] &in avX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](const [[../../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](const [[../../cVector4f|cVector4f]] &in avX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](const [[../../cColor|cColor]] &in avX)|}}
{{CodeDocSummaryItem|bool|[[#cMath_IsValid|cMath_IsValid]](const [[../../cMatrixf|cMatrixf]] &in a_mtxX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Log|cMath_Log]](float afX)|}}
{{CodeDocSummaryItem|int|[[#cMath_Log2ToInt|cMath_Log2ToInt]](int alX)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixEulerAngleDistance|cMath_MatrixEulerAngleDistance]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cMatrixf|cMatrixf]] &in a_mtxB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixGetScale|cMath_MatrixGetScale]](const [[../../cMatrixf|cMatrixf]] &in a_mtx)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixInverse|cMath_MatrixInverse]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixMul|cMath_MatrixMul]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cMatrixf|cMatrixf]] &in a_mtxB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixMul|cMath_MatrixMul]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cVector3f|cVector3f]] &in avB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixMul3x3|cMath_MatrixMul3x3]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cVector3f|cVector3f]] &in avB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixMulDivideW|cMath_MatrixMulDivideW]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cVector3f|cVector3f]] &in avB)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixMulScalar|cMath_MatrixMulScalar]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, float afB)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixNormal|cMath_MatrixNormal]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, bool abTranspose)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixOrthographicProjection|cMath_MatrixOrthographicProjection]](float afNearClipPlane, float afFarClipPlane, const [[../../cVector2f|cVector2f]] &in avViewSize)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixPerspectiveProjection|cMath_MatrixPerspectiveProjection]](float afNearClipPlane, float afFarClipPlane, float afFOV, float afAspect, bool abInfFarPlane)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixPlaneMirror|cMath_MatrixPlaneMirror]](const [[../../cPlanef|cPlanef]] &in aPlane)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixQuaternion|cMath_MatrixQuaternion]](const [[../../cQuaternion|cQuaternion]] &in aqRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateX|cMath_MatrixRotateX]](float afAngle)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateXYZ|cMath_MatrixRotateXYZ]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateXZY|cMath_MatrixRotateXZY]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateY|cMath_MatrixRotateY]](float afAngle)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateYXZ|cMath_MatrixRotateYXZ]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateYZX|cMath_MatrixRotateYZX]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateZ|cMath_MatrixRotateZ]](float afAngle)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateZXY|cMath_MatrixRotateZXY]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixRotateZYX|cMath_MatrixRotateZYX]](const [[../../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixScale|cMath_MatrixScale]](const [[../../cVector3f|cVector3f]] &in avScale)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixSetScale|cMath_MatrixSetScale]](const [[../../cMatrixf|cMatrixf]] &in a_mtx, const [[../../cVector3f|cVector3f]] &in avScale)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixSlerp|cMath_MatrixSlerp]](float afT, const [[../../cMatrixf|cMatrixf]] &in a_mtxA, const [[../../cMatrixf|cMatrixf]] &in a_mtxB, bool abShortestPath)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixToEulerAngles|cMath_MatrixToEulerAngles]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_MatrixToEulerAnglesMultiSolution|cMath_MatrixToEulerAnglesMultiSolution]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA, [[../../cVector3f|cVector3f]] &out avSolution1, [[../../cVector3f|cVector3f]] &out avSolution2)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixTranslate|cMath_MatrixTranslate]](const [[../../cVector3f|cVector3f]] &in avTrans)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_MatrixUnitVectors|cMath_MatrixUnitVectors]](const [[../../cVector3f|cVector3f]] &in avRight, const [[../../cVector3f|cVector3f]] &in avUp, const [[../../cVector3f|cVector3f]] &in avForward, const [[../../cVector3f|cVector3f]] &in avTranslate)|}}
{{CodeDocSummaryItem|float|[[#cMath_Max|cMath_Max]](float afX, float afY)|}}
{{CodeDocSummaryItem|int|[[#cMath_Max|cMath_Max]](int alX, int alY)|}}
{{CodeDocSummaryItem|float|[[#cMath_Min|cMath_Min]](float afX, float afY)|}}
{{CodeDocSummaryItem|int|[[#cMath_Min|cMath_Min]](int alX, int alY)|}}
{{CodeDocSummaryItem|float|[[#cMath_Modulus|cMath_Modulus]](float afDividend, float afDivisor)|}}
{{CodeDocSummaryItem|float|[[#cMath_PlaneDot|cMath_PlaneDot]](const [[../../cPlanef|cPlanef]] &in aPlaneA, const [[../../cPlanef|cPlanef]] &in aPlaneB)|}}
{{CodeDocSummaryItem|bool|[[#cMath_PlaneIntersectionPoint|cMath_PlaneIntersectionPoint]](const [[../../cPlanef|cPlanef]] &in aP1, const [[../../cPlanef|cPlanef]] &in aP2, const [[../../cPlanef|cPlanef]] &in aP3, [[../../cVector3f|cVector3f]] &in avPoint)|}}
{{CodeDocSummaryItem|bool|[[#cMath_PlaneParallel|cMath_PlaneParallel]](const [[../../cPlanef|cPlanef]] &in aPlaneA, const [[../../cPlanef|cPlanef]] &in aPlaneB)|}}
{{CodeDocSummaryItem|float|[[#cMath_PlaneToPointDist|cMath_PlaneToPointDist]](const [[../../cPlanef|cPlanef]] &in aPlane, const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|float|[[#cMath_Pow|cMath_Pow]](float afX, float afExp)|}}
{{CodeDocSummaryItem|int|[[#cMath_Pow2|cMath_Pow2]](int alX)|}}
{{CodeDocSummaryItem|[[../../cMatrixf|cMatrixf]]|[[#cMath_ProjectionMatrixObliqueNearClipPlane|cMath_ProjectionMatrixObliqueNearClipPlane]](const [[../../cMatrixf|cMatrixf]] &in a_mtxProjMatrix, const [[../../cPlanef|cPlanef]] &in aClipPlane)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_ProjectVector2D|cMath_ProjectVector2D]](const [[../../cVector2f|cVector2f]] &in avSrcVec, const [[../../cVector2f|cVector2f]] &in avDestVec)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionConjugate|cMath_QuaternionConjugate]](const [[../../cQuaternion|cQuaternion]] &in aqA)|}}
{{CodeDocSummaryItem|float|[[#cMath_QuaternionDot|cMath_QuaternionDot]](const [[../../cQuaternion|cQuaternion]] &in aqA, const [[../../cQuaternion|cQuaternion]] &in aqB)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionEuler|cMath_QuaternionEuler]](const [[../../cVector3f|cVector3f]] &in avEuler, [[../../eEulerRotationOrder|eEulerRotationOrder]] aOrder)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionInverse|cMath_QuaternionInverse]](const [[../../cQuaternion|cQuaternion]] &in aqA)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionLerp|cMath_QuaternionLerp]](float afT, const [[../../cQuaternion|cQuaternion]] &in aqA, const [[../../cQuaternion|cQuaternion]] &in aqB)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionMatrix|cMath_QuaternionMatrix]](const [[../../cMatrixf|cMatrixf]] &in a_mtxA)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionMul|cMath_QuaternionMul]](const [[../../cQuaternion|cQuaternion]] &in aqA, const [[../../cQuaternion|cQuaternion]] &in aqB)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionNlerp|cMath_QuaternionNlerp]](float afT, const [[../../cQuaternion|cQuaternion]] &in aqA, const [[../../cQuaternion|cQuaternion]] &in aqB)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionNormalize|cMath_QuaternionNormalize]](const [[../../cQuaternion|cQuaternion]] &in aqA)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_QuaternionRotate|cMath_QuaternionRotate]](const [[../../cQuaternion|cQuaternion]] &in aqRot, const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cQuaternion|cQuaternion]]|[[#cMath_QuaternionSlerp|cMath_QuaternionSlerp]](float afT, const [[../../cQuaternion|cQuaternion]] &in aqA, const [[../../cQuaternion|cQuaternion]] &in aqB, bool abShortestPath)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_RandomCircleEdgePoint|cMath_RandomCircleEdgePoint]](float afRadius)|}}
{{CodeDocSummaryItem|void|[[#cMath_Randomize|cMath_Randomize]](int alSeed)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_RandomSphereSurfacePoint|cMath_RandomSphereSurfacePoint]](float afRadius)|}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#cMath_RandRectColor|cMath_RandRectColor]](const [[../../cColor|cColor]] &in aMin, const [[../../cColor|cColor]] &in aMax)|}}
{{CodeDocSummaryItem|float|[[#cMath_RandRectf|cMath_RandRectf]](float alMin, float alMax)|}}
{{CodeDocSummaryItem|int|[[#cMath_RandRectl|cMath_RandRectl]](int alMin, int alMax)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_RandRectVector2f|cMath_RandRectVector2f]](const [[../../cVector2f|cVector2f]] &in avMin, const [[../../cVector2f|cVector2f]] &in avMax)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_RandRectVector3f|cMath_RandRectVector3f]](const [[../../cVector3f|cVector3f]] &in avMin, const [[../../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cMath_RGBToHex|cMath_RGBToHex]](const [[../../cColor|cColor]] &in aRGB)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cMath_RGBToHexW|cMath_RGBToHexW]](const [[../../cColor|cColor]] &in aRGB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_RGBToHSB|cMath_RGBToHSB]](const [[../../cColor|cColor]] &in aX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Round|cMath_Round]](float afVal)|}}
{{CodeDocSummaryItem|float|[[#cMath_RoundFloatToDecimals|cMath_RoundFloatToDecimals]](float afVal, int alPrecision)|}}
{{CodeDocSummaryItem|int|[[#cMath_RoundToInt|cMath_RoundToInt]](float afVal)|}}
{{CodeDocSummaryItem|[[../../cVector2l|cVector2l]]|[[#cMath_RoundToInt|cMath_RoundToInt]](const [[../../cVector2f|cVector2f]] &in avX)|}}
{{CodeDocSummaryItem|[[../../cVector3l|cVector3l]]|[[#cMath_RoundToInt|cMath_RoundToInt]](const [[../../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#cMath_SetBitFlag|cMath_SetBitFlag]](int &out alFlagNum, int alBit, bool abSet)|}}
{{CodeDocSummaryItem|float|[[#cMath_SigmoidCurve|cMath_SigmoidCurve]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Sign|cMath_Sign]](float afX)|}}
{{CodeDocSummaryItem|int|[[#cMath_Sign|cMath_Sign]](int alX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Sin|cMath_Sin]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Sqrt|cMath_Sqrt]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_Tan|cMath_Tan]](float afX)|}}
{{CodeDocSummaryItem|float|[[#cMath_ToDeg|cMath_ToDeg]](float afAngle)|}}
{{CodeDocSummaryItem|float|[[#cMath_ToRad|cMath_ToRad]](float afAngle)|}}
{{CodeDocSummaryItem|[[../../cPlanef|cPlanef]]|[[#cMath_TransformPlane|cMath_TransformPlane]](const [[../../cMatrixf|cMatrixf]] &in a_mtxTransform, const [[../../cPlanef|cPlanef]] &in aPlane)|}}
{{CodeDocSummaryItem|float|[[#cMath_TurnAngle|cMath_TurnAngle]](float afAngle, float afFinalAngle, float afSpeed, float afMaxAngle)|}}
{{CodeDocSummaryItem|float|[[#cMath_TurnAngleDeg|cMath_TurnAngleDeg]](float afAngle, float afFinalAngle, float afSpeed)|}}
{{CodeDocSummaryItem|float|[[#cMath_TurnAngleRad|cMath_TurnAngleRad]](float afAngle, float afFinalAngle, float afSpeed)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Abs|cMath_Vector2Abs]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2CatmullRom|cMath_Vector2CatmullRom]](const [[../../cVector2f|cVector2f]] &in avP0, const [[../../cVector2f|cVector2f]] &in avP1, const [[../../cVector2f|cVector2f]] &in avP2, const [[../../cVector2f|cVector2f]] &in avP3, float afFract)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Ceil|cMath_Vector2Ceil]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2Dist|cMath_Vector2Dist]](const [[../../cVector2f|cVector2f]] &in avPosA, const [[../../cVector2f|cVector2f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistSqr|cMath_Vector2DistSqr]](const [[../../cVector2f|cVector2f]] &in avPosA, const [[../../cVector2f|cVector2f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistSqrXY|cMath_Vector2DistSqrXY]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistSqrXZ|cMath_Vector2DistSqrXZ]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistSqrYZ|cMath_Vector2DistSqrYZ]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistXY|cMath_Vector2DistXY]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistXZ|cMath_Vector2DistXZ]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2DistYZ|cMath_Vector2DistYZ]](const [[../../cVector3f|cVector3f]] &in avPosA, const [[../../cVector3f|cVector3f]] &in avPosB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2Dot|cMath_Vector2Dot]](const [[../../cVector2f|cVector2f]] &in avPosA, const [[../../cVector2f|cVector2f]] &in avPosB)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Floor|cMath_Vector2Floor]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2IncreaseTo|cMath_Vector2IncreaseTo]](const [[../../cVector2f|cVector2f]] &in avX, const [[../../cVector2f|cVector2f]] &in avAdd, const [[../../cVector2f|cVector2f]] &in avDest)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Max|cMath_Vector2Max]](const [[../../cVector2f|cVector2f]] &in avVecA, const [[../../cVector2f|cVector2f]] &in avVecB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2MaxElement|cMath_Vector2MaxElement]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Min|cMath_Vector2Min]](const [[../../cVector2f|cVector2f]] &in avVecA, const [[../../cVector2f|cVector2f]] &in avVecB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector2MinElement|cMath_Vector2MinElement]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Normalize|cMath_Vector2Normalize]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2Rotate|cMath_Vector2Rotate]](const [[../../cVector2f|cVector2f]] &in avVec, float afAngle)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2ToDeg|cMath_Vector2ToDeg]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cMath_Vector2ToRad|cMath_Vector2ToRad]](const [[../../cVector2f|cVector2f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Abs|cMath_Vector3Abs]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3Angle|cMath_Vector3Angle]](const [[../../cVector3f|cVector3f]] &in avVecA, const [[../../cVector3f|cVector3f]] &in avVecB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3AngleDistance|cMath_Vector3AngleDistance]](const [[../../cVector3f|cVector3f]] &in avAngles1, const [[../../cVector3f|cVector3f]] &in avAngles2, float afMaxAngle)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3AngleDistanceDeg|cMath_Vector3AngleDistanceDeg]](const [[../../cVector3f|cVector3f]] &in avAngles1, const [[../../cVector3f|cVector3f]] &in avAngles2)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3AngleDistanceRad|cMath_Vector3AngleDistanceRad]](const [[../../cVector3f|cVector3f]] &in avAngles1, const [[../../cVector3f|cVector3f]] &in avAngles2)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3CatmullRom|cMath_Vector3CatmullRom]](const [[../../cVector3f|cVector3f]] &in avP0, const [[../../cVector3f|cVector3f]] &in avP1, const [[../../cVector3f|cVector3f]] &in avP2, const [[../../cVector3f|cVector3f]] &in avP3, float afFract)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Ceil|cMath_Vector3Ceil]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3ClampLength|cMath_Vector3ClampLength]](const [[../../cVector3f|cVector3f]] &in avVec, float afMinLength, float afMaxLength)|}}
{{CodeDocSummaryItem|void|[[#cMath_Vector3ClampToLength|cMath_Vector3ClampToLength]]([[../../cVector3f|cVector3f]] &in avVec, float afMaxLength)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Cross|cMath_Vector3Cross]](const [[../../cVector3f|cVector3f]] &in avVecA, const [[../../cVector3f|cVector3f]] &in avVecB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3Dist|cMath_Vector3Dist]](const [[../../cVector3f|cVector3f]] &in avStartPos, const [[../../cVector3f|cVector3f]] &in avEndPos)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3DistSqr|cMath_Vector3DistSqr]](const [[../../cVector3f|cVector3f]] &in avStartPos, const [[../../cVector3f|cVector3f]] &in avEndPos)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3Dot|cMath_Vector3Dot]](const [[../../cVector3f|cVector3f]] &in avVecA, const [[../../cVector3f|cVector3f]] &in avVecB)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Floor|cMath_Vector3Floor]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3IncreaseTo|cMath_Vector3IncreaseTo]](const [[../../cVector3f|cVector3f]] &in avX, const [[../../cVector3f|cVector3f]] &in avAdd, const [[../../cVector3f|cVector3f]] &in avDest)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Max|cMath_Vector3Max]](const [[../../cVector3f|cVector3f]] &in avVecA, const [[../../cVector3f|cVector3f]] &in avVecB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3MaxElement|cMath_Vector3MaxElement]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3MaxLength|cMath_Vector3MaxLength]](const [[../../cVector3f|cVector3f]] &in avVec, float afMaxLength)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Min|cMath_Vector3Min]](const [[../../cVector3f|cVector3f]] &in avVecA, const [[../../cVector3f|cVector3f]] &in avVecB)|}}
{{CodeDocSummaryItem|float|[[#cMath_Vector3MinElement|cMath_Vector3MinElement]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3MinLength|cMath_Vector3MinLength]](const [[../../cVector3f|cVector3f]] &in avVec, float afMinLength)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Normalize|cMath_Vector3Normalize]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|void|[[#cMath_Vector3OrthonormalizeBasis|cMath_Vector3OrthonormalizeBasis]](const [[../../cVector3f|cVector3f]] &in avSrcRight, const [[../../cVector3f|cVector3f]] &in avSrcUp, const [[../../cVector3f|cVector3f]] &in avSrcForward, [[../../cVector3f|cVector3f]] &out avDstRight, [[../../cVector3f|cVector3f]] &out avDstUp, [[../../cVector3f|cVector3f]] &out avDstForward)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Project|cMath_Vector3Project]](const [[../../cVector3f|cVector3f]] &in avSrcVec, const [[../../cVector3f|cVector3f]] &in avDestVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3ProjectOnPlane|cMath_Vector3ProjectOnPlane]](const [[../../cVector3f|cVector3f]] &in avSrcVec, const [[../../cVector3f|cVector3f]] &in avPlaneNormal)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3Reflect|cMath_Vector3Reflect]](const [[../../cVector3f|cVector3f]] &in avVec, const [[../../cVector3f|cVector3f]] &in avNormal)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3SphereSurfacePoint|cMath_Vector3SphereSurfacePoint]](const [[../../cVector2f|cVector2f]] &in avSeed, float afRadius)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3ToDeg|cMath_Vector3ToDeg]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3ToRad|cMath_Vector3ToRad]](const [[../../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cMath_Vector3UnProject|cMath_Vector3UnProject]](const [[../../cVector3f|cVector3f]] &in avVec, const [[../../cRect2f|cRect2f]] &in aScreenRect, const [[../../cMatrixf|cMatrixf]] &in a_mtxViewProj)|}}
{{CodeDocSummaryItem|float|[[#cMath_Wrap|cMath_Wrap]](float afX, float afMin, float afMax)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cMath_Abs}}
<syntaxhighlight lang="c++">float cMath_Abs(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Abs}}
<syntaxhighlight lang="c++">int cMath_Abs(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ACos}}
<syntaxhighlight lang="c++">float cMath_ACos(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ASin}}
<syntaxhighlight lang="c++">float cMath_ASin(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ATan}}
<syntaxhighlight lang="c++">float cMath_ATan(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ATan2}}
<syntaxhighlight lang="c++">float cMath_ATan2(float afY,
                  float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afY|float|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Ceil}}
<syntaxhighlight lang="c++">float cMath_Ceil(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CeilToInt}}
<syntaxhighlight lang="c++">int cMath_CeilToInt(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckAABBInside}}
<syntaxhighlight lang="c++">bool cMath_CheckAABBInside(const cVector3f &in avInsideMin,
                           const cVector3f &in avInsideMax,
                           const cVector3f &in avOutsideMin,
                           const cVector3f &in avOutsideMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avInsideMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avInsideMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOutsideMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOutsideMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckAABBIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckAABBIntersection(const cVector3f &in avMin1,
                                 const cVector3f &in avMax1,
                                 const cVector3f &in avMin2,
                                 const cVector3f &in avMax2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMin2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckAABBLineIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckAABBLineIntersection(const cVector3f &in avMin,
                                     const cVector3f &in avMax,
                                     const cVector3f &in avLineStart,
                                     const cVector3f &in avLineEnd,
                                     cVector3f &out avIntersectionPos,
                                     float &out afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avLineStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avLineEnd|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avIntersectionPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckAABBSphereCollision}}
<syntaxhighlight lang="c++">bool cMath_CheckAABBSphereCollision(const cVector3f &in avMin,
                                    const cVector3f &in avMax,
                                    const cVector3f &in avCenter,
                                    float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avCenter|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckBVIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckBVIntersection(cBoundingVolume@+ aBV1,
                               cBoundingVolume@+ aBV2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aBV1|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailParam|aBV2|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPlaneAABBCollision}}
<syntaxhighlight lang="c++">bool cMath_CheckPlaneAABBCollision(const cPlanef &in aPlane,
                                   const cVector3f &in avMin,
                                   const cVector3f &in avMax,
                                   const cVector3f &in avSphereCenter,
                                   float afSphereRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSphereCenter|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afSphereRadius|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPlaneAABBCollision}}
<syntaxhighlight lang="c++">bool cMath_CheckPlaneAABBCollision(const cPlanef &in aPlane,
                                   const cVector3f &in avMin,
                                   const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPlaneBVCollision}}
<syntaxhighlight lang="c++">bool cMath_CheckPlaneBVCollision(const cPlanef &in aPlane,
                                 cBoundingVolume@+ aBV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|aBV|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPlaneLineIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckPlaneLineIntersection(const cPlanef &in aPlane,
                                      const cVector3f &in avLineStart,
                                      const cVector3f &in avLineEnd,
                                      cVector3f &out avIntersectionPos,
                                      float &out afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avLineStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avLineEnd|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avIntersectionPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPlaneSphereCollision}}
<syntaxhighlight lang="c++">bool cMath_CheckPlaneSphereCollision(const cPlanef &in aPlane,
                                     const cVector3f &in avCenter,
                                     float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avCenter|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPointInAABBIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckPointInAABBIntersection(const cVector3f &in avPoint,
                                        const cVector3f &in avMin,
                                        const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPointInBVIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckPointInBVIntersection(const cVector3f &in avPoint,
                                      cBoundingVolume@+ aBV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aBV|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPointInRectIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckPointInRectIntersection(const cVector2f &in avPoint,
                                        const cRect2f &in aRect)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aRect|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckPointInSphereIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckPointInSphereIntersection(const cVector3f &in avPoint,
                                          const cVector3f &in avSpherePos,
                                          float afSphereRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSpherePos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afSphereRadius|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectFit}}
<syntaxhighlight lang="c++">bool cMath_CheckRectFit(const cRect2l &in aRectSrc,
                        const cRect2l &in aRectDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRectSrc|[[../../cRect2l|cRect2l]]|}}
{{CodeDocDetailParam|aRectDest|[[../../cRect2l|cRect2l]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectFit}}
<syntaxhighlight lang="c++">bool cMath_CheckRectFit(const cRect2f &in aRectSrc,
                        const cRect2f &in aRectDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRectSrc|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailParam|aRectDest|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckRectIntersection(const cRect2l &in aRect1,
                                 const cRect2l &in aRect2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRect1|[[../../cRect2l|cRect2l]]|}}
{{CodeDocDetailParam|aRect2|[[../../cRect2l|cRect2l]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckRectIntersection(const cRect2f &in aRect1,
                                 const cRect2f &in aRect2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRect1|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailParam|aRect2|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckRectIntersection(const cVector2l &in avMin1,
                                 const cVector2l &in avMax1,
                                 const cVector2l &in avMin2,
                                 const cVector2l &in avMax2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin1|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avMax1|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avMin2|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avMax2|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckRectIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckRectIntersection(const cVector2f &in avMin1,
                                 const cVector2f &in avMax1,
                                 const cVector2f &in avMin2,
                                 const cVector2f &in avMax2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMax1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMin2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMax2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckSphereIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckSphereIntersection(const cVector3f &in avPosA,
                                   float afRadiusA,
                                   const cVector3f &in avPosB,
                                   float afRadiusB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadiusA|float|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadiusB|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_CheckSphereLineIntersection}}
<syntaxhighlight lang="c++">bool cMath_CheckSphereLineIntersection(const cVector3f &in avSpherePos,
                                       float afSphereRadius,
                                       const cVector3f &in avLineStart,
                                       const cVector3f &in avLineEnd,
                                       float &out afT1,
                                       cVector3f &out afIntersection1,
                                       float &out afT2,
                                       cVector3f &out avIntersection2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSpherePos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afSphereRadius|float|}}
{{CodeDocDetailParam|avLineStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avLineEnd|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afT1|float|}}
{{CodeDocDetailParam|afIntersection1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afT2|float|}}
{{CodeDocDetailParam|avIntersection2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Clamp}}
<syntaxhighlight lang="c++">float cMath_Clamp(float afX,
                  float afMin,
                  float afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Clamp}}
<syntaxhighlight lang="c++">int cMath_Clamp(int alX,
                int alMin,
                int alMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailParam|alMin|int|}}
{{CodeDocDetailParam|alMax|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Cos}}
<syntaxhighlight lang="c++">float cMath_Cos(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Easing}}
<syntaxhighlight lang="c++">float cMath_Easing(eEasing aType,
                   float afT,
                   float afMin = 0,
                   float afMax = 1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ExpandAABBMax}}
<syntaxhighlight lang="c++">cVector3f cMath_ExpandAABBMax(const cVector3f &in avBaseMax,
                              const cVector3f &in avAddMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avBaseMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAddMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ExpandAABBMin}}
<syntaxhighlight lang="c++">cVector3f cMath_ExpandAABBMin(const cVector3f &in avBaseMin,
                              const cVector3f &in avAddMin)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avBaseMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAddMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_FastRandomFloat}}
<syntaxhighlight lang="c++">float cMath_FastRandomFloat(int alSeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alSeed|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Floor}}
<syntaxhighlight lang="c++">float cMath_Floor(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_FloorToInt}}
<syntaxhighlight lang="c++">int cMath_FloorToInt(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistance}}
<syntaxhighlight lang="c++">float cMath_GetAngleDistance(float afAngle1,
                             float afAngle2,
                             float afMaxAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle1|float|}}
{{CodeDocDetailParam|afAngle2|float|}}
{{CodeDocDetailParam|afMaxAngle|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceDeg}}
<syntaxhighlight lang="c++">float cMath_GetAngleDistanceDeg(float afAngle1,
                                float afAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle1|float|}}
{{CodeDocDetailParam|afAngle2|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceRad}}
<syntaxhighlight lang="c++">float cMath_GetAngleDistanceRad(float afAngle1,
                                float afAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle1|float|}}
{{CodeDocDetailParam|afAngle2|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector2f}}
<syntaxhighlight lang="c++">cVector2f cMath_GetAngleDistanceVector2f(const cVector2f &in avAngle1,
                                         const cVector2f &in avAngle2,
                                         float afMaxAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afMaxAngle|float|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector2fDeg}}
<syntaxhighlight lang="c++">cVector2f cMath_GetAngleDistanceVector2fDeg(const cVector2f &in avAngle1,
                                            const cVector2f &in avAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector2fRad}}
<syntaxhighlight lang="c++">cVector2f cMath_GetAngleDistanceVector2fRad(const cVector2f &in avAngle1,
                                            const cVector2f &in avAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector3f}}
<syntaxhighlight lang="c++">cVector3f cMath_GetAngleDistanceVector3f(const cVector3f &in avAngle1,
                                         const cVector3f &in avAngle2,
                                         float afMaxAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMaxAngle|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector3fDeg}}
<syntaxhighlight lang="c++">cVector3f cMath_GetAngleDistanceVector3fDeg(const cVector3f &in avAngle1,
                                            const cVector3f &in avAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleDistanceVector3fRad}}
<syntaxhighlight lang="c++">cVector3f cMath_GetAngleDistanceVector3fRad(const cVector3f &in avAngle1,
                                            const cVector3f &in avAngle2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngle1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngle2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleFromPoints2D}}
<syntaxhighlight lang="c++">float cMath_GetAngleFromPoints2D(const cVector2f &in aStartPos,
                                 const cVector2f &in avGoalPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aStartPos|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avGoalPos|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleFromPoints3D}}
<syntaxhighlight lang="c++">cVector3f cMath_GetAngleFromPoints3D(const cVector3f &in avStartPos,
                                     const cVector3f &in avGoalPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStartPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avGoalPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetAngleFromVector}}
<syntaxhighlight lang="c++">void cMath_GetAngleFromVector(const cVector2f &in avVec,
                              float &out afAngle,
                              float &out afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetBit}}
<syntaxhighlight lang="c++">int cMath_GetBit(int alBitNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alBitNum|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetBitFlag}}
<syntaxhighlight lang="c++">bool cMath_GetBitFlag(int alFlagNum,
                      int alBit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlagNum|int|}}
{{CodeDocDetailParam|alBit|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetClipRect}}
<syntaxhighlight lang="c++">cRect2f cMath_GetClipRect(const cRect2f &in aRectSrc,
                          const cRect2f &in aRectDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRectSrc|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailParam|aRectDest|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailReturn|cRect2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetClipRectFromBV}}
<syntaxhighlight lang="c++">void cMath_GetClipRectFromBV(cRect2l &out aDestRect,
                             cBoundingVolume@+ aBV,
                             cFrustum@+ apFrustum,
                             const cVector2l &in avScreenSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDestRect|[[../../cRect2l|cRect2l]]|}}
{{CodeDocDetailParam|aBV|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailParam|apFrustum|[[../../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailParam|avScreenSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetClipRectFromNormalizedMinMax}}
<syntaxhighlight lang="c++">cRect2l cMath_GetClipRectFromNormalizedMinMax(const cVector3f &in avMin,
                                              const cVector3f &in avMax,
                                              const cVector2l &in avScreenSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avScreenSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|cRect2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetClipRectFromSphere}}
<syntaxhighlight lang="c++">cRect2l cMath_GetClipRectFromSphere(const cVector3f &in avPosition,
                                    float afRadius,
                                    cFrustum@+ apFrustum,
                                    const cVector2l &in avScreenSize,
                                    bool abPositionIsScreenSpace)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|apFrustum|[[../../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailParam|avScreenSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|abPositionIsScreenSpace|bool|}}
{{CodeDocDetailReturn|cRect2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetCorrectSignOfSpeed}}
<syntaxhighlight lang="c++">float cMath_GetCorrectSignOfSpeed(float afCurrent,
                                  float afDest,
                                  float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afCurrent|float|}}
{{CodeDocDetailParam|afDest|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetFraction}}
<syntaxhighlight lang="c++">float cMath_GetFraction(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetNormalizedClipRectFromBV}}
<syntaxhighlight lang="c++">bool cMath_GetNormalizedClipRectFromBV(cVector3f &out avDestMin,
                                       cVector3f &out avDestMax,
                                       cBoundingVolume@+ aBV,
                                       cFrustum@+ aFrustum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avDestMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDestMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aBV|[[../../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailParam|aFrustum|[[../../cFrustum|cFrustum@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetPoint3DFromSphericalCoords}}
<syntaxhighlight lang="c++">cVector3f cMath_GetPoint3DFromSphericalCoords(const cVector3f &in avSphCenter,
                                              float afSphRadius,
                                              const cVector2f &in avSphCoords)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSphCenter|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afSphRadius|float|}}
{{CodeDocDetailParam|avSphCoords|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetSphericalCoordsFromPoint3D}}
<syntaxhighlight lang="c++">cVector2f cMath_GetSphericalCoordsFromPoint3D(const cVector3f &in avSphCenter,
                                              const cVector3f &in avPoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSphCenter|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPoint|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_GetVectorFromAngle2D}}
<syntaxhighlight lang="c++">cVector2f cMath_GetVectorFromAngle2D(float afAngle,
                                     float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_HexToRGB}}
<syntaxhighlight lang="c++">cColor cMath_HexToRGB(const tString &in asHex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asHex|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_HexWToRGB}}
<syntaxhighlight lang="c++">cColor cMath_HexWToRGB(const tWString &in asHex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asHex|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_HSBToRGB}}
<syntaxhighlight lang="c++">cColor cMath_HSBToRGB(const cVector3f &in avHSB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avHSB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IncreaseTo}}
<syntaxhighlight lang="c++">float cMath_IncreaseTo(float afX,
                       float afAdd,
                       float afDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afAdd|float|}}
{{CodeDocDetailParam|afDest|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_InterpolateCosine}}
<syntaxhighlight lang="c++">float cMath_InterpolateCosine(float afA,
                              float afB,
                              float afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afA|float|}}
{{CodeDocDetailParam|afB|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_InterpolateCubic}}
<syntaxhighlight lang="c++">float cMath_InterpolateCubic(float afX0,
                             float afX1,
                             float afX2,
                             float afX3,
                             float afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX0|float|}}
{{CodeDocDetailParam|afX1|float|}}
{{CodeDocDetailParam|afX2|float|}}
{{CodeDocDetailParam|afX3|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_InterpolateHermite}}
<syntaxhighlight lang="c++">float cMath_InterpolateHermite(float afX0,
                               float afX1,
                               float afX2,
                               float afX3,
                               float afT,
                               float afTension,
                               float afBias)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX0|float|}}
{{CodeDocDetailParam|afX1|float|}}
{{CodeDocDetailParam|afX2|float|}}
{{CodeDocDetailParam|afX3|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|afTension|float|}}
{{CodeDocDetailParam|afBias|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_InterpolateLinear}}
<syntaxhighlight lang="c++">float cMath_InterpolateLinear(float afA,
                              float afB,
                              float afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afA|float|}}
{{CodeDocDetailParam|afB|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_InterpolateSigmoid}}
<syntaxhighlight lang="c++">float cMath_InterpolateSigmoid(float afA,
                               float afB,
                               float afT)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afA|float|}}
{{CodeDocDetailParam|afB|float|}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsPow2}}
<syntaxhighlight lang="c++">bool cMath_IsPow2(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(const cVector4f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector4f|cVector4f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(const cColor &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_IsValid}}
<syntaxhighlight lang="c++">bool cMath_IsValid(const cMatrixf &in a_mtxX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxX|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Log}}
<syntaxhighlight lang="c++">float cMath_Log(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Log2ToInt}}
<syntaxhighlight lang="c++">int cMath_Log2ToInt(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixEulerAngleDistance}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixEulerAngleDistance(const cMatrixf &in a_mtxA,
                                         const cMatrixf &in a_mtxB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|a_mtxB|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixGetScale}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixGetScale(const cMatrixf &in a_mtx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtx|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixInverse}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixInverse(const cMatrixf &in a_mtxA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixMul}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixMul(const cMatrixf &in a_mtxA,
                         const cMatrixf &in a_mtxB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|a_mtxB|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixMul}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixMul(const cMatrixf &in a_mtxA,
                          const cVector3f &in avB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixMul3x3}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixMul3x3(const cMatrixf &in a_mtxA,
                             const cVector3f &in avB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixMulDivideW}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixMulDivideW(const cMatrixf &in a_mtxA,
                                 const cVector3f &in avB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixMulScalar}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixMulScalar(const cMatrixf &in a_mtxA,
                               float afB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|afB|float|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixNormal}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixNormal(const cMatrixf &in a_mtxA,
                            bool abTranspose)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|abTranspose|bool|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixOrthographicProjection}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixOrthographicProjection(float afNearClipPlane,
                                            float afFarClipPlane,
                                            const cVector2f &in avViewSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNearClipPlane|float|}}
{{CodeDocDetailParam|afFarClipPlane|float|}}
{{CodeDocDetailParam|avViewSize|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixPerspectiveProjection}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixPerspectiveProjection(float afNearClipPlane,
                                           float afFarClipPlane,
                                           float afFOV,
                                           float afAspect,
                                           bool abInfFarPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNearClipPlane|float|}}
{{CodeDocDetailParam|afFarClipPlane|float|}}
{{CodeDocDetailParam|afFOV|float|}}
{{CodeDocDetailParam|afAspect|float|}}
{{CodeDocDetailParam|abInfFarPlane|bool|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixPlaneMirror}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixPlaneMirror(const cPlanef &in aPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixQuaternion}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixQuaternion(const cQuaternion &in aqRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqRot|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateX}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateX(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateXYZ}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateXYZ(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateXZY}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateXZY(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateY}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateY(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateYXZ}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateYXZ(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateYZX}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateYZX(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateZ}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateZ(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateZXY}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateZXY(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixRotateZYX}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixRotateZYX(const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRot|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixScale}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixScale(const cVector3f &in avScale)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avScale|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixSetScale}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixSetScale(const cMatrixf &in a_mtx,
                              const cVector3f &in avScale)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtx|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avScale|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixSlerp}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixSlerp(float afT,
                           const cMatrixf &in a_mtxA,
                           const cMatrixf &in a_mtxB,
                           bool abShortestPath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|a_mtxB|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|abShortestPath|bool|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixToEulerAngles}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixToEulerAngles(const cMatrixf &in a_mtxA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixToEulerAnglesMultiSolution}}
<syntaxhighlight lang="c++">cVector3f cMath_MatrixToEulerAnglesMultiSolution(const cMatrixf &in a_mtxA,
                                                 cVector3f &out avSolution1,
                                                 cVector3f &out avSolution2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avSolution1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSolution2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixTranslate}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixTranslate(const cVector3f &in avTrans)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avTrans|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_MatrixUnitVectors}}
<syntaxhighlight lang="c++">cMatrixf cMath_MatrixUnitVectors(const cVector3f &in avRight,
                                 const cVector3f &in avUp,
                                 const cVector3f &in avForward,
                                 const cVector3f &in avTranslate)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRight|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avUp|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avForward|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avTranslate|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Max}}
<syntaxhighlight lang="c++">float cMath_Max(float afX,
                float afY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afY|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Max}}
<syntaxhighlight lang="c++">int cMath_Max(int alX,
              int alY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailParam|alY|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Min}}
<syntaxhighlight lang="c++">float cMath_Min(float afX,
                float afY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afY|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Min}}
<syntaxhighlight lang="c++">int cMath_Min(int alX,
              int alY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailParam|alY|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Modulus}}
<syntaxhighlight lang="c++">float cMath_Modulus(float afDividend,
                    float afDivisor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDividend|float|}}
{{CodeDocDetailParam|afDivisor|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_PlaneDot}}
<syntaxhighlight lang="c++">float cMath_PlaneDot(const cPlanef &in aPlaneA,
                     const cPlanef &in aPlaneB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlaneA|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|aPlaneB|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_PlaneIntersectionPoint}}
<syntaxhighlight lang="c++">bool cMath_PlaneIntersectionPoint(const cPlanef &in aP1,
                                  const cPlanef &in aP2,
                                  const cPlanef &in aP3,
                                  cVector3f &in avPoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aP1|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|aP2|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|aP3|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avPoint|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_PlaneParallel}}
<syntaxhighlight lang="c++">bool cMath_PlaneParallel(const cPlanef &in aPlaneA,
                         const cPlanef &in aPlaneB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlaneA|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|aPlaneB|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_PlaneToPointDist}}
<syntaxhighlight lang="c++">float cMath_PlaneToPointDist(const cPlanef &in aPlane,
                             const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Pow}}
<syntaxhighlight lang="c++">float cMath_Pow(float afX,
                float afExp)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afExp|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Pow2}}
<syntaxhighlight lang="c++">int cMath_Pow2(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ProjectionMatrixObliqueNearClipPlane}}
<syntaxhighlight lang="c++">cMatrixf cMath_ProjectionMatrixObliqueNearClipPlane(const cMatrixf &in a_mtxProjMatrix,
                                                    const cPlanef &in aClipPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxProjMatrix|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|aClipPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ProjectVector2D}}
<syntaxhighlight lang="c++">cVector2f cMath_ProjectVector2D(const cVector2f &in avSrcVec,
                                const cVector2f &in avDestVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSrcVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avDestVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionConjugate}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionConjugate(const cQuaternion &in aqA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionDot}}
<syntaxhighlight lang="c++">float cMath_QuaternionDot(const cQuaternion &in aqA,
                          const cQuaternion &in aqB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|aqB|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionEuler}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionEuler(const cVector3f &in avEuler,
                                  eEulerRotationOrder aOrder)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avEuler|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aOrder|[[../../eEulerRotationOrder|eEulerRotationOrder]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionInverse}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionInverse(const cQuaternion &in aqA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionLerp}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionLerp(float afT,
                                 const cQuaternion &in aqA,
                                 const cQuaternion &in aqB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|aqB|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionMatrix}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionMatrix(const cMatrixf &in a_mtxA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxA|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionMul}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionMul(const cQuaternion &in aqA,
                                const cQuaternion &in aqB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|aqB|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionNlerp}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionNlerp(float afT,
                                  const cQuaternion &in aqA,
                                  const cQuaternion &in aqB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|aqB|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionNormalize}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionNormalize(const cQuaternion &in aqA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionRotate}}
<syntaxhighlight lang="c++">cVector3f cMath_QuaternionRotate(const cQuaternion &in aqRot,
                                 const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aqRot|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_QuaternionSlerp}}
<syntaxhighlight lang="c++">cQuaternion cMath_QuaternionSlerp(float afT,
                                  const cQuaternion &in aqA,
                                  const cQuaternion &in aqB,
                                  bool abShortestPath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afT|float|}}
{{CodeDocDetailParam|aqA|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|aqB|[[../../cQuaternion|cQuaternion]]|}}
{{CodeDocDetailParam|abShortestPath|bool|}}
{{CodeDocDetailReturn|cQuaternion|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandomCircleEdgePoint}}
<syntaxhighlight lang="c++">cVector2f cMath_RandomCircleEdgePoint(float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Randomize}}
<syntaxhighlight lang="c++">void cMath_Randomize(int alSeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alSeed|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandomSphereSurfacePoint}}
<syntaxhighlight lang="c++">cVector3f cMath_RandomSphereSurfacePoint(float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandRectColor}}
<syntaxhighlight lang="c++">cColor cMath_RandRectColor(const cColor &in aMin,
                           const cColor &in aMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMin|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|aMax|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandRectf}}
<syntaxhighlight lang="c++">float cMath_RandRectf(float alMin,
                      float alMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMin|float|}}
{{CodeDocDetailParam|alMax|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandRectl}}
<syntaxhighlight lang="c++">int cMath_RandRectl(int alMin,
                    int alMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMin|int|}}
{{CodeDocDetailParam|alMax|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandRectVector2f}}
<syntaxhighlight lang="c++">cVector2f cMath_RandRectVector2f(const cVector2f &in avMin,
                                 const cVector2f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RandRectVector3f}}
<syntaxhighlight lang="c++">cVector3f cMath_RandRectVector3f(const cVector3f &in avMin,
                                 const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RGBToHex}}
<syntaxhighlight lang="c++">tString cMath_RGBToHex(const cColor &in aRGB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRGB|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RGBToHexW}}
<syntaxhighlight lang="c++">tWString cMath_RGBToHexW(const cColor &in aRGB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aRGB|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RGBToHSB}}
<syntaxhighlight lang="c++">cVector3f cMath_RGBToHSB(const cColor &in aX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aX|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Round}}
<syntaxhighlight lang="c++">float cMath_Round(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RoundFloatToDecimals}}
<syntaxhighlight lang="c++">float cMath_RoundFloatToDecimals(float afVal,
                                 int alPrecision)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailParam|alPrecision|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RoundToInt}}
<syntaxhighlight lang="c++">int cMath_RoundToInt(float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RoundToInt}}
<syntaxhighlight lang="c++">cVector2l cMath_RoundToInt(const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_RoundToInt}}
<syntaxhighlight lang="c++">cVector3l cMath_RoundToInt(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_SetBitFlag}}
<syntaxhighlight lang="c++">void cMath_SetBitFlag(int &out alFlagNum,
                      int alBit,
                      bool abSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlagNum|int|}}
{{CodeDocDetailParam|alBit|int|}}
{{CodeDocDetailParam|abSet|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_SigmoidCurve}}
<syntaxhighlight lang="c++">float cMath_SigmoidCurve(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Sign}}
<syntaxhighlight lang="c++">float cMath_Sign(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Sign}}
<syntaxhighlight lang="c++">int cMath_Sign(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Sin}}
<syntaxhighlight lang="c++">float cMath_Sin(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Sqrt}}
<syntaxhighlight lang="c++">float cMath_Sqrt(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Tan}}
<syntaxhighlight lang="c++">float cMath_Tan(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ToDeg}}
<syntaxhighlight lang="c++">float cMath_ToDeg(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_ToRad}}
<syntaxhighlight lang="c++">float cMath_ToRad(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_TransformPlane}}
<syntaxhighlight lang="c++">cPlanef cMath_TransformPlane(const cMatrixf &in a_mtxTransform,
                             const cPlanef &in aPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|aPlane|[[../../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|cPlanef|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_TurnAngle}}
<syntaxhighlight lang="c++">float cMath_TurnAngle(float afAngle,
                      float afFinalAngle,
                      float afSpeed,
                      float afMaxAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|afFinalAngle|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|afMaxAngle|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_TurnAngleDeg}}
<syntaxhighlight lang="c++">float cMath_TurnAngleDeg(float afAngle,
                         float afFinalAngle,
                         float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|afFinalAngle|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_TurnAngleRad}}
<syntaxhighlight lang="c++">float cMath_TurnAngleRad(float afAngle,
                         float afFinalAngle,
                         float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|afFinalAngle|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Abs}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Abs(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2CatmullRom}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2CatmullRom(const cVector2f &in avP0,
                                  const cVector2f &in avP1,
                                  const cVector2f &in avP2,
                                  const cVector2f &in avP3,
                                  float afFract)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avP0|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avP1|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avP2|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avP3|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afFract|float|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Ceil}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Ceil(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Dist}}
<syntaxhighlight lang="c++">float cMath_Vector2Dist(const cVector2f &in avPosA,
                        const cVector2f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistSqr}}
<syntaxhighlight lang="c++">float cMath_Vector2DistSqr(const cVector2f &in avPosA,
                           const cVector2f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistSqrXY}}
<syntaxhighlight lang="c++">float cMath_Vector2DistSqrXY(const cVector3f &in avPosA,
                             const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistSqrXZ}}
<syntaxhighlight lang="c++">float cMath_Vector2DistSqrXZ(const cVector3f &in avPosA,
                             const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistSqrYZ}}
<syntaxhighlight lang="c++">float cMath_Vector2DistSqrYZ(const cVector3f &in avPosA,
                             const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistXY}}
<syntaxhighlight lang="c++">float cMath_Vector2DistXY(const cVector3f &in avPosA,
                          const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistXZ}}
<syntaxhighlight lang="c++">float cMath_Vector2DistXZ(const cVector3f &in avPosA,
                          const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2DistYZ}}
<syntaxhighlight lang="c++">float cMath_Vector2DistYZ(const cVector3f &in avPosA,
                          const cVector3f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Dot}}
<syntaxhighlight lang="c++">float cMath_Vector2Dot(const cVector2f &in avPosA,
                       const cVector2f &in avPosB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosA|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avPosB|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Floor}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Floor(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2IncreaseTo}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2IncreaseTo(const cVector2f &in avX,
                                  const cVector2f &in avAdd,
                                  const cVector2f &in avDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avAdd|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avDest|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Max}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Max(const cVector2f &in avVecA,
                           const cVector2f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2MaxElement}}
<syntaxhighlight lang="c++">float cMath_Vector2MaxElement(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Min}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Min(const cVector2f &in avVecA,
                           const cVector2f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2MinElement}}
<syntaxhighlight lang="c++">float cMath_Vector2MinElement(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Normalize}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Normalize(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2Rotate}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2Rotate(const cVector2f &in avVec,
                              float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2ToDeg}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2ToDeg(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector2ToRad}}
<syntaxhighlight lang="c++">cVector2f cMath_Vector2ToRad(const cVector2f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Abs}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Abs(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Angle}}
<syntaxhighlight lang="c++">float cMath_Vector3Angle(const cVector3f &in avVecA,
                         const cVector3f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3AngleDistance}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3AngleDistance(const cVector3f &in avAngles1,
                                     const cVector3f &in avAngles2,
                                     float afMaxAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngles1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngles2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMaxAngle|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3AngleDistanceDeg}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3AngleDistanceDeg(const cVector3f &in avAngles1,
                                        const cVector3f &in avAngles2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngles1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngles2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3AngleDistanceRad}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3AngleDistanceRad(const cVector3f &in avAngles1,
                                        const cVector3f &in avAngles2)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAngles1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAngles2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3CatmullRom}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3CatmullRom(const cVector3f &in avP0,
                                  const cVector3f &in avP1,
                                  const cVector3f &in avP2,
                                  const cVector3f &in avP3,
                                  float afFract)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avP0|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avP1|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avP2|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avP3|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afFract|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Ceil}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Ceil(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3ClampLength}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3ClampLength(const cVector3f &in avVec,
                                   float afMinLength,
                                   float afMaxLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinLength|float|}}
{{CodeDocDetailParam|afMaxLength|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3ClampToLength}}
<syntaxhighlight lang="c++">void cMath_Vector3ClampToLength(cVector3f &in avVec,
                                float afMaxLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMaxLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Cross}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Cross(const cVector3f &in avVecA,
                             const cVector3f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Dist}}
<syntaxhighlight lang="c++">float cMath_Vector3Dist(const cVector3f &in avStartPos,
                        const cVector3f &in avEndPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStartPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEndPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3DistSqr}}
<syntaxhighlight lang="c++">float cMath_Vector3DistSqr(const cVector3f &in avStartPos,
                           const cVector3f &in avEndPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStartPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEndPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Dot}}
<syntaxhighlight lang="c++">float cMath_Vector3Dot(const cVector3f &in avVecA,
                       const cVector3f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Floor}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Floor(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3IncreaseTo}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3IncreaseTo(const cVector3f &in avX,
                                  const cVector3f &in avAdd,
                                  const cVector3f &in avDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avAdd|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDest|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Max}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Max(const cVector3f &in avVecA,
                           const cVector3f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3MaxElement}}
<syntaxhighlight lang="c++">float cMath_Vector3MaxElement(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3MaxLength}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3MaxLength(const cVector3f &in avVec,
                                 float afMaxLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMaxLength|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Min}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Min(const cVector3f &in avVecA,
                           const cVector3f &in avVecB)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVecA|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avVecB|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3MinElement}}
<syntaxhighlight lang="c++">float cMath_Vector3MinElement(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3MinLength}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3MinLength(const cVector3f &in avVec,
                                 float afMinLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinLength|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Normalize}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Normalize(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3OrthonormalizeBasis}}
<syntaxhighlight lang="c++">void cMath_Vector3OrthonormalizeBasis(const cVector3f &in avSrcRight,
                                      const cVector3f &in avSrcUp,
                                      const cVector3f &in avSrcForward,
                                      cVector3f &out avDstRight,
                                      cVector3f &out avDstUp,
                                      cVector3f &out avDstForward)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSrcRight|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSrcUp|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSrcForward|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDstRight|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDstUp|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDstForward|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Project}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Project(const cVector3f &in avSrcVec,
                               const cVector3f &in avDestVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSrcVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDestVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3ProjectOnPlane}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3ProjectOnPlane(const cVector3f &in avSrcVec,
                                      const cVector3f &in avPlaneNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSrcVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPlaneNormal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3Reflect}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3Reflect(const cVector3f &in avVec,
                               const cVector3f &in avNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avNormal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3SphereSurfacePoint}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3SphereSurfacePoint(const cVector2f &in avSeed,
                                          float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSeed|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3ToDeg}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3ToDeg(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3ToRad}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3ToRad(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Vector3UnProject}}
<syntaxhighlight lang="c++">cVector3f cMath_Vector3UnProject(const cVector3f &in avVec,
                                 const cRect2f &in aScreenRect,
                                 const cMatrixf &in a_mtxViewProj)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aScreenRect|[[../../cRect2f|cRect2f]]|}}
{{CodeDocDetailParam|a_mtxViewProj|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cMath_Wrap}}
<syntaxhighlight lang="c++">float cMath_Wrap(float afX,
                 float afMin,
                 float afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}