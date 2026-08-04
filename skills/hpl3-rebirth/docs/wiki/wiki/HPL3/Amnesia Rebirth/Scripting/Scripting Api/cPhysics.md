{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|[[../../iPhysicsWorld|iPhysicsWorld]]|[[#cPhysics_CreateWorld|cPhysics_CreateWorld]](bool abAddSurfaceData)|}}
{{CodeDocSummaryItem|void|[[#cPhysics_DestroyWorld|cPhysics_DestroyWorld]]([[../../iPhysicsWorld|iPhysicsWorld@]] apWorld)|}}
{{CodeDocSummaryItem|float|[[#cPhysics_GetImpactDuration|cPhysics_GetImpactDuration]]()|}}
{{CodeDocSummaryItem|int|[[#cPhysics_GetMaxImpacts|cPhysics_GetMaxImpacts]]()|}}
{{CodeDocSummaryItem|void|[[#cPhysics_SetImpactDuration|cPhysics_SetImpactDuration]](float afX)|}}
{{CodeDocSummaryItem|void|[[#cPhysics_SetMaxImpacts|cPhysics_SetMaxImpacts]](int alX)|}}
{{CodeDocSummaryItem|[[../../iPhysicsBody|iPhysicsBody]]|[[#cPhysics_ToBody|cPhysics_ToBody]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../iPhysicsJointBall|iPhysicsJointBall]]|[[#cPhysics_ToJointBall|cPhysics_ToJointBall]]([[../../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryItem|[[../../iPhysicsJointHinge|iPhysicsJointHinge]]|[[#cPhysics_ToJointHinge|cPhysics_ToJointHinge]]([[../../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryItem|[[../../iPhysicsJointSlider|iPhysicsJointSlider]]|[[#cPhysics_ToJointSlider|cPhysics_ToJointSlider]]([[../../iPhysicsJoint|iPhysicsJoint@]] apJoint)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cPhysics_CreateWorld}}
<syntaxhighlight lang="c++">iPhysicsWorld@ cPhysics_CreateWorld(bool abAddSurfaceData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abAddSurfaceData|bool|}}
{{CodeDocDetailReturn|iPhysicsWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_DestroyWorld}}
<syntaxhighlight lang="c++">void cPhysics_DestroyWorld(iPhysicsWorld@ apWorld)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../../iPhysicsWorld|iPhysicsWorld@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_GetImpactDuration}}
<syntaxhighlight lang="c++">float cPhysics_GetImpactDuration()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_GetMaxImpacts}}
<syntaxhighlight lang="c++">int cPhysics_GetMaxImpacts()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_SetImpactDuration}}
<syntaxhighlight lang="c++">void cPhysics_SetImpactDuration(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_SetMaxImpacts}}
<syntaxhighlight lang="c++">void cPhysics_SetMaxImpacts(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_ToBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ cPhysics_ToBody(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_ToJointBall}}
<syntaxhighlight lang="c++">iPhysicsJointBall@ cPhysics_ToJointBall(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|iPhysicsJointBall@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_ToJointHinge}}
<syntaxhighlight lang="c++">iPhysicsJointHinge@ cPhysics_ToJointHinge(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|iPhysicsJointHinge@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cPhysics_ToJointSlider}}
<syntaxhighlight lang="c++">iPhysicsJointSlider@ cPhysics_ToJointSlider(iPhysicsJoint@ apJoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apJoint|[[../../iPhysicsJoint|iPhysicsJoint@]]|}}
{{CodeDocDetailReturn|iPhysicsJointSlider@|}}
{{CodeDocDetailBottom}}