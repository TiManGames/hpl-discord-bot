{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iPhysicsWorld has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|float|[[#CastRayOnShape|CastRayOnShape]]([[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, const [[../cVector3f|cVector3f]] &in avOrigin, const [[../cVector3f|cVector3f]] &in avEnd, [[../cVector3f|cVector3f]] &out avOutNormal, bool abLocalRayPositions)|}}
{{CodeDocSummaryItem|bool|[[#CheckShapeCollision|CheckShapeCollision]]([[../iCollideShape|iCollideShape@]] apShapeA, const [[../cMatrixf|cMatrixf]] &in a_mtxA, [[../iCollideShape|iCollideShape@]] apShapeB, const [[../cMatrixf|cMatrixf]] &in a_mtxB, [[../cCollideData|cCollideData]] &inout aCollideData, int alMaxPoints, bool abCorrectNormalDirection, int alThreadID <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|bool|[[#CheckShapeWorldCollision|CheckShapeWorldCollision]]([[../cVector3f|cVector3f]] &out avPushVector, [[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, [[../iPhysicsBody|iPhysicsBody@]] apSkipBody, bool abSkipStatic, bool abIsCharacter, bool abCollideCharacter)|}}
{{CodeDocSummaryItem|bool|[[#CheckShapeWorldCollision|CheckShapeWorldCollision]]([[../cVector3f|cVector3f]] &out avPushVector, [[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, [[../iPhysicsBody|iPhysicsBody@]] apSkipBody, bool abSkipStatic)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#CreateBody|CreateBody]](const [[../tString|tString]] &in asName, [[../iCollideShape|iCollideShape@]] apShape, float afMass)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#CreateBodyID|CreateBodyID]](const [[../tString|tString]] &in asName, [[../iCollideShape|iCollideShape@]] apShape, float afMass)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateBoxShape|CreateBoxShape]](const [[../cVector3f|cVector3f]] &in avSize, [[../cMatrixf|cMatrixf]] &in a_mtxOffsetMtx)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateCapsuleShape|CreateCapsuleShape]](float afRadius, float afHeight, [[../cMatrixf|cMatrixf]] &in a_mtxOffsetMtx)|}}
{{CodeDocSummaryItem|[[../iCharacterBody|iCharacterBody]]|[[#CreateCharacterBody|CreateCharacterBody]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avSize)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#CreateCharacterBodyID|CreateCharacterBodyID]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avSize)|}}
{{CodeDocSummaryItem|[[../iPhysicsCloth|iPhysicsCloth]]|[[#CreateCloth|CreateCloth]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avStartPos, const [[../cVector2f|cVector2f]] &in avClothSize, int alDimension)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateCompundShape|CreateCompundShape]]([[../array|array]]<[[../iCollideShape|iCollideShape@]]> avShapes)|}}
{{CodeDocSummaryItem|[[../iPhysicsController|iPhysicsController]]|[[#CreateController|CreateController]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateCylinderShape|CreateCylinderShape]](float afRadius, float afHeight, [[../cMatrixf|cMatrixf]] &in a_mtxOffsetMtx)|}}
{{CodeDocSummaryItem|[[../iPhysicsJointBall|iPhysicsJointBall]]|[[#CreateJointBall|CreateJointBall]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#CreateJointBallID|CreateJointBallID]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../iPhysicsJointHinge|iPhysicsJointHinge]]|[[#CreateJointHinge|CreateJointHinge]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#CreateJointHingeID|CreateJointHingeID]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../iPhysicsJointSlider|iPhysicsJointSlider]]|[[#CreateJointSlider|CreateJointSlider]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#CreateJointSliderID|CreateJointSliderID]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPivotPoint, const [[../cVector3f|cVector3f]] &in avPinDir, [[../iPhysicsBody|iPhysicsBody@]] apParentBody, [[../iPhysicsBody|iPhysicsBody@]] apChildBody)|}}
{{CodeDocSummaryItem|[[../iPhysicsMaterial|iPhysicsMaterial]]|[[#CreateMaterial|CreateMaterial]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateMeshShape|CreateMeshShape]]([[../iVertexBuffer|iVertexBuffer@]] apVtxBuffer)|}}
{{CodeDocSummaryItem|[[../iPhysicsRope|iPhysicsRope]]|[[#CreateRope|CreateRope]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avStartPos, const [[../cVector3f|cVector3f]] &in avEndPos)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#CreateSphereShape|CreateSphereShape]](const [[../cVector3f|cVector3f]] &in avRadii, [[../cMatrixf|cMatrixf]] &in a_mtxOffsetMtx)|}}
{{CodeDocSummaryItem|void|[[#DestroyBody|DestroyBody]]([[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#DestroyCharacterBody|DestroyCharacterBody]]([[../iCharacterBody|iCharacterBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#DestroyCloth|DestroyCloth]]([[../iPhysicsCloth|iPhysicsCloth@]] apCloth)|}}
{{CodeDocSummaryItem|void|[[#DestroyController|DestroyController]]([[../iPhysicsController|iPhysicsController@]] apController)|}}
{{CodeDocSummaryItem|void|[[#DestroyJoint|DestroyJoint]]([[../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryItem|void|[[#DestroyRope|DestroyRope]]([[../iPhysicsRope|iPhysicsRope@]] apRope)|}}
{{CodeDocSummaryItem|void|[[#DestroyShape|DestroyShape]]([[../iCollideShape|iCollideShape@]] apShape)|}}
{{CodeDocSummaryItem|void|[[#EnableBodiesInAABB|EnableBodiesInAABB]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax, bool abEnabled)|}}
{{CodeDocSummaryItem|void|[[#FadeoutAllLoopSounds|FadeoutAllLoopSounds]](float afFadeSpeed)|}}
{{CodeDocSummaryItem|[[../ePhysicsAccuracy|ePhysicsAccuracy]]|[[#GetAccuracyLevel|GetAccuracyLevel]]()|}}
{{CodeDocSummaryItem|void|[[#GetBodiesInAABB|GetBodiesInAABB]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax, [[../array|array]]<[[../iPhysicsBody|iPhysicsBody@]]> apBodyVec)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetBody|GetBody]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetCharacterBody|GetCharacterBody]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iCharacterBody|iCharacterBody]]|[[#GetCharacterBodyFromID|GetCharacterBodyFromID]]([[../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../iPhysicsCloth|iPhysicsCloth]]|[[#GetCloth|GetCloth]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iPhysicsCloth|iPhysicsCloth]]|[[#GetClothFromUniqueID|GetClothFromUniqueID]](int alID)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetGravity|GetGravity]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsJoint|iPhysicsJoint]]|[[#GetJoint|GetJoint]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iPhysicsMaterial|iPhysicsMaterial]]|[[#GetMaterialFromId|GetMaterialFromId]](int alId)|}}
{{CodeDocSummaryItem|[[../iPhysicsMaterial|iPhysicsMaterial]]|[[#GetMaterialFromName|GetMaterialFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|float|[[#GetMaxTimeStep|GetMaxTimeStep]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumberOfThreads|GetNumberOfThreads]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetPhysicsBodyFromID|GetPhysicsBodyFromID]]([[../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../iPhysicsJoint|iPhysicsJoint]]|[[#GetPhysicsJointFromID|GetPhysicsJointFromID]]([[../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../iPhysicsRope|iPhysicsRope]]|[[#GetRope|GetRope]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iPhysicsRope|iPhysicsRope]]|[[#GetRopeFromUniqueID|GetRopeFromUniqueID]](int alID)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldSizeMax|GetWorldSizeMax]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldSizeMin|GetWorldSizeMin]]()|}}
{{CodeDocSummaryItem|bool|[[#JointExists|JointExists]]([[../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#LoadMeshShapeFromBuffer|LoadMeshShapeFromBuffer]]([[../cBinaryBuffer|cBinaryBuffer@]] apBuffer)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#RenderDebugGeometry|RenderDebugGeometry]]([[../iLowLevelGraphics|iLowLevelGraphics@]] apLowLevel)|}}
{{CodeDocSummaryItem|void|[[#RenderShapeDebugGeometry|RenderShapeDebugGeometry]]([[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, [[../iLowLevelGraphics|iLowLevelGraphics@]] apLowLevel, const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SaveMeshShapeToBuffer|SaveMeshShapeToBuffer]]([[../iCollideShape|iCollideShape@]] apMeshShape, [[../cBinaryBuffer|cBinaryBuffer@]] apBuffer)|}}
{{CodeDocSummaryItem|void|[[#SetAccuracyLevel|SetAccuracyLevel]]([[../ePhysicsAccuracy|ePhysicsAccuracy]] aAccuracy)|}}
{{CodeDocSummaryItem|void|[[#SetGravity|SetGravity]](const [[../cVector3f|cVector3f]] &in avGravity)|}}
{{CodeDocSummaryItem|void|[[#SetMaxTimeStep|SetMaxTimeStep]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#SetNumberOfThreads|SetNumberOfThreads]](int alThreads)|}}
{{CodeDocSummaryItem|void|[[#SetWorldSize|SetWorldSize]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CastRayOnShape}}
<syntaxhighlight lang="c++">float CastRayOnShape(iCollideShape@ apShape,
                     const cMatrixf &in a_mtxTransform,
                     const cVector3f &in avOrigin,
                     const cVector3f &in avEnd,
                     cVector3f &out avOutNormal,
                     bool abLocalRayPositions)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avOrigin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOutNormal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalRayPositions|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckShapeCollision}}
<syntaxhighlight lang="c++">bool CheckShapeCollision(iCollideShape@ apShapeA,
                         const cMatrixf &in a_mtxA,
                         iCollideShape@ apShapeB,
                         const cMatrixf &in a_mtxB,
                         cCollideData &inout aCollideData,
                         int alMaxPoints,
                         bool abCorrectNormalDirection,
                         int alThreadID = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apShapeA|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxA|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|apShapeB|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxB|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|aCollideData|[[../cCollideData|cCollideData]]|}}
{{CodeDocDetailParam|alMaxPoints|int|}}
{{CodeDocDetailParam|abCorrectNormalDirection|bool|}}
{{CodeDocDetailParam|alThreadID|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckShapeWorldCollision}}
<syntaxhighlight lang="c++">bool CheckShapeWorldCollision(cVector3f &out avPushVector,
                              iCollideShape@ apShape,
                              const cMatrixf &in a_mtxTransform,
                              iPhysicsBody@ apSkipBody,
                              bool abSkipStatic,
                              bool abIsCharacter,
                              bool abCollideCharacter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPushVector|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|apSkipBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|abSkipStatic|bool|}}
{{CodeDocDetailParam|abIsCharacter|bool|}}
{{CodeDocDetailParam|abCollideCharacter|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckShapeWorldCollision}}
<syntaxhighlight lang="c++">bool CheckShapeWorldCollision(cVector3f &out avPushVector,
                              iCollideShape@ apShape,
                              const cMatrixf &in a_mtxTransform,
                              iPhysicsBody@ apSkipBody,
                              bool abSkipStatic)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPushVector|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|apSkipBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|abSkipStatic|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ CreateBody(const tString &in asName,
                         iCollideShape@ apShape,
                         float afMass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|afMass|float|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateBodyID}}
<syntaxhighlight lang="c++">tID CreateBodyID(const tString &in asName,
                 iCollideShape@ apShape,
                 float afMass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|afMass|float|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateBoxShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateBoxShape(const cVector3f &in avSize,
                              cMatrixf &in a_mtxOffsetMtx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|a_mtxOffsetMtx|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCapsuleShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateCapsuleShape(float afRadius,
                                  float afHeight,
                                  cMatrixf &in a_mtxOffsetMtx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|afHeight|float|}}
{{CodeDocDetailParam|a_mtxOffsetMtx|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCharacterBody}}
<syntaxhighlight lang="c++">iCharacterBody@ CreateCharacterBody(const tString &in asName,
                                    const cVector3f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCharacterBodyID}}
<syntaxhighlight lang="c++">tID CreateCharacterBodyID(const tString &in asName,
                          const cVector3f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCloth}}
<syntaxhighlight lang="c++">iPhysicsCloth@ CreateCloth(const tString &in asName,
                           const cVector3f &in avStartPos,
                           const cVector2f &in avClothSize,
                           int alDimension)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStartPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avClothSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|alDimension|int|}}
{{CodeDocDetailReturn|iPhysicsCloth@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCompundShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateCompundShape(iCollideShape@ avShapes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avShapes|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateController}}
<syntaxhighlight lang="c++">iPhysicsController@ CreateController(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsController@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCylinderShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateCylinderShape(float afRadius,
                                   float afHeight,
                                   cMatrixf &in a_mtxOffsetMtx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|afHeight|float|}}
{{CodeDocDetailParam|a_mtxOffsetMtx|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointBall}}
<syntaxhighlight lang="c++">iPhysicsJointBall@ CreateJointBall(const tString &in asName,
                                   const cVector3f &in avPivotPoint,
                                   const cVector3f &in avPinDir,
                                   iPhysicsBody@ apParentBody,
                                   iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|iPhysicsJointBall@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointBallID}}
<syntaxhighlight lang="c++">tID CreateJointBallID(const tString &in asName,
                      const cVector3f &in avPivotPoint,
                      const cVector3f &in avPinDir,
                      iPhysicsBody@ apParentBody,
                      iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointHinge}}
<syntaxhighlight lang="c++">iPhysicsJointHinge@ CreateJointHinge(const tString &in asName,
                                     const cVector3f &in avPivotPoint,
                                     const cVector3f &in avPinDir,
                                     iPhysicsBody@ apParentBody,
                                     iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|iPhysicsJointHinge@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointHingeID}}
<syntaxhighlight lang="c++">tID CreateJointHingeID(const tString &in asName,
                       const cVector3f &in avPivotPoint,
                       const cVector3f &in avPinDir,
                       iPhysicsBody@ apParentBody,
                       iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointSlider}}
<syntaxhighlight lang="c++">iPhysicsJointSlider@ CreateJointSlider(const tString &in asName,
                                       const cVector3f &in avPivotPoint,
                                       const cVector3f &in avPinDir,
                                       iPhysicsBody@ apParentBody,
                                       iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|iPhysicsJointSlider@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateJointSliderID}}
<syntaxhighlight lang="c++">tID CreateJointSliderID(const tString &in asName,
                        const cVector3f &in avPivotPoint,
                        const cVector3f &in avPinDir,
                        iPhysicsBody@ apParentBody,
                        iPhysicsBody@ apChildBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPivotPoint|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avPinDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apParentBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apChildBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateMaterial}}
<syntaxhighlight lang="c++">iPhysicsMaterial@ CreateMaterial(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateMeshShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateMeshShape(iVertexBuffer@ apVtxBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVtxBuffer|[[../iVertexBuffer|iVertexBuffer@]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateRope}}
<syntaxhighlight lang="c++">iPhysicsRope@ CreateRope(const tString &in asName,
                         const cVector3f &in avStartPos,
                         const cVector3f &in avEndPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStartPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEndPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|iPhysicsRope@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateSphereShape}}
<syntaxhighlight lang="c++">iCollideShape@ CreateSphereShape(const cVector3f &in avRadii,
                                 cMatrixf &in a_mtxOffsetMtx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRadii|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|a_mtxOffsetMtx|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyBody}}
<syntaxhighlight lang="c++">void DestroyBody(iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyCharacterBody}}
<syntaxhighlight lang="c++">void DestroyCharacterBody(iCharacterBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyCloth}}
<syntaxhighlight lang="c++">void DestroyCloth(iPhysicsCloth@ apCloth)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCloth|[[../iPhysicsCloth|iPhysicsCloth@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyController}}
<syntaxhighlight lang="c++">void DestroyController(iPhysicsController@ apController)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apController|[[../iPhysicsController|iPhysicsController@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyJoint}}
<syntaxhighlight lang="c++">void DestroyJoint(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyRope}}
<syntaxhighlight lang="c++">void DestroyRope(iPhysicsRope@ apRope)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apRope|[[../iPhysicsRope|iPhysicsRope@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyShape}}
<syntaxhighlight lang="c++">void DestroyShape(iCollideShape@ apShape)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EnableBodiesInAABB}}
<syntaxhighlight lang="c++">void EnableBodiesInAABB(const cVector3f &in avMin,
                        const cVector3f &in avMax,
                        bool abEnabled)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abEnabled|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeoutAllLoopSounds}}
<syntaxhighlight lang="c++">void FadeoutAllLoopSounds(float afFadeSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFadeSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAccuracyLevel}}
<syntaxhighlight lang="c++">ePhysicsAccuracy GetAccuracyLevel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|ePhysicsAccuracy|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBodiesInAABB}}
<syntaxhighlight lang="c++">void GetBodiesInAABB(const cVector3f &in avMin,
                     const cVector3f &in avMax,
                     iPhysicsBody@ apBodyVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apBodyVec|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetBody(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetCharacterBody(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterBodyFromID}}
<syntaxhighlight lang="c++">iCharacterBody@ GetCharacterBodyFromID(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../tID|tID]]|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCloth}}
<syntaxhighlight lang="c++">iPhysicsCloth@ GetCloth(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsCloth@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClothFromUniqueID}}
<syntaxhighlight lang="c++">iPhysicsCloth@ GetClothFromUniqueID(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|iPhysicsCloth@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravity}}
<syntaxhighlight lang="c++">cVector3f GetGravity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetJoint}}
<syntaxhighlight lang="c++">iPhysicsJoint@ GetJoint(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsJoint@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterialFromId}}
<syntaxhighlight lang="c++">iPhysicsMaterial@ GetMaterialFromId(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|iPhysicsMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterialFromName}}
<syntaxhighlight lang="c++">iPhysicsMaterial@ GetMaterialFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxTimeStep}}
<syntaxhighlight lang="c++">float GetMaxTimeStep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumberOfThreads}}
<syntaxhighlight lang="c++">int GetNumberOfThreads()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPhysicsBodyFromID}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetPhysicsBodyFromID(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../tID|tID]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPhysicsJointFromID}}
<syntaxhighlight lang="c++">iPhysicsJoint@ GetPhysicsJointFromID(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../tID|tID]]|}}
{{CodeDocDetailReturn|iPhysicsJoint@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRope}}
<syntaxhighlight lang="c++">iPhysicsRope@ GetRope(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsRope@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRopeFromUniqueID}}
<syntaxhighlight lang="c++">iPhysicsRope@ GetRopeFromUniqueID(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|iPhysicsRope@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldSizeMax}}
<syntaxhighlight lang="c++">cVector3f GetWorldSizeMax()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldSizeMin}}
<syntaxhighlight lang="c++">cVector3f GetWorldSizeMin()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|JointExists}}
<syntaxhighlight lang="c++">bool JointExists(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadMeshShapeFromBuffer}}
<syntaxhighlight lang="c++">iCollideShape@ LoadMeshShapeFromBuffer(cBinaryBuffer@ apBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBuffer|[[../cBinaryBuffer|cBinaryBuffer@]]|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RenderDebugGeometry}}
<syntaxhighlight lang="c++">void RenderDebugGeometry(iLowLevelGraphics@ apLowLevel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLowLevel|[[../iLowLevelGraphics|iLowLevelGraphics@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RenderShapeDebugGeometry}}
<syntaxhighlight lang="c++">void RenderShapeDebugGeometry(iCollideShape@ apShape,
                              const cMatrixf &in a_mtxTransform,
                              iLowLevelGraphics@ apLowLevel,
                              const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|apLowLevel|[[../iLowLevelGraphics|iLowLevelGraphics@]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SaveMeshShapeToBuffer}}
<syntaxhighlight lang="c++">void SaveMeshShapeToBuffer(iCollideShape@ apMeshShape,
                           cBinaryBuffer@ apBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMeshShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|apBuffer|[[../cBinaryBuffer|cBinaryBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAccuracyLevel}}
<syntaxhighlight lang="c++">void SetAccuracyLevel(ePhysicsAccuracy aAccuracy)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAccuracy|[[../ePhysicsAccuracy|ePhysicsAccuracy]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravity}}
<syntaxhighlight lang="c++">void SetGravity(const cVector3f &in avGravity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avGravity|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxTimeStep}}
<syntaxhighlight lang="c++">void SetMaxTimeStep(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNumberOfThreads}}
<syntaxhighlight lang="c++">void SetNumberOfThreads(int alThreads)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alThreads|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldSize}}
<syntaxhighlight lang="c++">void SetWorldSize(const cVector3f &in avMin,
                  const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}