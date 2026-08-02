{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iPhysicsWorld has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || CastRayOnShape || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avOrigin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avEnd</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out avOutNormal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLocalRayPositions</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckShapeCollision || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShapeA</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxA</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShapeB</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxB</syntaxhighlight>]],<br />[[../cCollideData|<syntaxhighlight lang="c++" inline>cCollideData& aCollideData</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMaxPoints</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCorrectNormalDirection</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alThreadID = 0</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckShapeWorldCollision || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out avPushVector</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apSkipBody</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSkipStatic</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abIsCharacter</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCollideCharacter</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckShapeWorldCollision || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out avPushVector</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apSkipBody</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSkipStatic</syntaxhighlight> ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || CreateBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMass</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateBodyID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMass</syntaxhighlight> ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateBoxShape || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avSize</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf &in a_mtxOffsetMtx</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateCapsuleShape || <syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afHeight</syntaxhighlight>,<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf &in a_mtxOffsetMtx</syntaxhighlight>]] ||
|-
| [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@</syntaxhighlight>]] || CreateCharacterBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avSize</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateCharacterBodyID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avSize</syntaxhighlight>]] ||
|-
| [[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@</syntaxhighlight>]] || CreateCloth || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avStartPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avClothSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDimension</syntaxhighlight> ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateCompundShape ||  ||
|-
| [[../iPhysicsController|<syntaxhighlight lang="c++" inline>iPhysicsController@</syntaxhighlight>]] || CreateController || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateCylinderShape || <syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afHeight</syntaxhighlight>,<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf &in a_mtxOffsetMtx</syntaxhighlight>]] ||
|-
| [[../iPhysicsJointBall|<syntaxhighlight lang="c++" inline>iPhysicsJointBall@</syntaxhighlight>]] || CreateJointBall || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateJointBallID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../iPhysicsJointHinge|<syntaxhighlight lang="c++" inline>iPhysicsJointHinge@</syntaxhighlight>]] || CreateJointHinge || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateJointHingeID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../iPhysicsJointSlider|<syntaxhighlight lang="c++" inline>iPhysicsJointSlider@</syntaxhighlight>]] || CreateJointSlider || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateJointSliderID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPivotPoint</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPinDir</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apParentBody</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apChildBody</syntaxhighlight>]] ||
|-
| [[../iPhysicsMaterial|<syntaxhighlight lang="c++" inline>iPhysicsMaterial@</syntaxhighlight>]] || CreateMaterial || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateMeshShape || [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@ apVtxBuffer</syntaxhighlight>]] ||
|-
| [[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@</syntaxhighlight>]] || CreateRope || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avStartPos</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avEndPos</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateSphereShape || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avRadii</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf &in a_mtxOffsetMtx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyCharacterBody || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyCloth || [[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@ apCloth</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyController || [[../iPhysicsController|<syntaxhighlight lang="c++" inline>iPhysicsController@ apController</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyJoint || [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@ apJoint</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyRope || [[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@ apRope</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyShape || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || EnableBodiesInAABB || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMax</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abEnabled</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeoutAllLoopSounds || <syntaxhighlight lang="c++" inline>float afFadeSpeed</syntaxhighlight> ||
|-
| [[../ePhysicsAccuracy|<syntaxhighlight lang="c++" inline>ePhysicsAccuracy</syntaxhighlight>]] || GetAccuracyLevel ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetBodiesInAABB || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMax</syntaxhighlight>]] ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetCharacterBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@</syntaxhighlight>]] || GetCharacterBodyFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| [[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@</syntaxhighlight>]] || GetCloth || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@</syntaxhighlight>]] || GetClothFromUniqueID || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetGravity ||   ||
|-
| [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@</syntaxhighlight>]] || GetJoint || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iPhysicsMaterial|<syntaxhighlight lang="c++" inline>iPhysicsMaterial@</syntaxhighlight>]] || GetMaterialFromId || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| [[../iPhysicsMaterial|<syntaxhighlight lang="c++" inline>iPhysicsMaterial@</syntaxhighlight>]] || GetMaterialFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxTimeStep ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumberOfThreads ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetPhysicsBodyFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@</syntaxhighlight>]] || GetPhysicsJointFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| [[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@</syntaxhighlight>]] || GetRope || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@</syntaxhighlight>]] || GetRopeFromUniqueID || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldSizeMax ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldSizeMin ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || JointExists || [[../iPhysicsJoint|<syntaxhighlight lang="c++" inline>iPhysicsJoint@ apJoint</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || LoadMeshShapeFromBuffer || [[../cBinaryBuffer|<syntaxhighlight lang="c++" inline>cBinaryBuffer@ apBuffer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RenderDebugGeometry || [[../iLowLevelGraphics|<syntaxhighlight lang="c++" inline>iLowLevelGraphics@ apLowLevel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RenderShapeDebugGeometry || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br />[[../iLowLevelGraphics|<syntaxhighlight lang="c++" inline>iLowLevelGraphics@ apLowLevel</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SaveMeshShapeToBuffer || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apMeshShape</syntaxhighlight>]],<br />[[../cBinaryBuffer|<syntaxhighlight lang="c++" inline>cBinaryBuffer@ apBuffer</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAccuracyLevel || [[../ePhysicsAccuracy|<syntaxhighlight lang="c++" inline>ePhysicsAccuracy aAccuracy</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGravity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxTimeStep || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNumberOfThreads || <syntaxhighlight lang="c++" inline>int alThreads</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldSize || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMax</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__