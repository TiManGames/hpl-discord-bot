{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Body_AddForce|Body_AddForce]](const [[../../tString|tString]] &in asBodyName, const [[../../cVector3f|cVector3f]] &in avForce, bool abLocalSpace)|Adds force to the specified body}}
{{CodeDocSummaryItem|void|[[#Body_AddImpulse|Body_AddImpulse]](const [[../../tString|tString]] &in asBodyName, const [[../../cVector3f|cVector3f]] &in avImpulse, bool abLocalSpace)|Adds an impulse to the specified body}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#Body_GetEntityName|Body_GetEntityName]](const [[../../tString|tString]] &in asBodyName)|Gets the name of the entity the body belongs to}}
{{CodeDocSummaryItem|void|[[#Body_SetCollides|Body_SetCollides]](const [[../../tString|tString]] &in asBodyName, bool abCollides)|Sets whether a body collides with other bodies or not}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Body_AddForce}}
<syntaxhighlight lang="c++">void Body_AddForce(const tString &in asBodyName,
                   const cVector3f &in avForce,
                   bool abLocalSpace)</syntaxhighlight>
{{CodeDocDetailBody|Adds force to the specified body.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBodyName|[[../../tString|tString]]|name of the body.}}
{{CodeDocDetailParam|avForce|[[../../cVector3f|cVector3f]]|force to add.}}
{{CodeDocDetailParam|abLocalSpace|bool|if the force is in the body's local space.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Body_AddImpulse}}
<syntaxhighlight lang="c++">void Body_AddImpulse(const tString &in asBodyName,
                     const cVector3f &in avImpulse,
                     bool abLocalSpace)</syntaxhighlight>
{{CodeDocDetailBody|Adds an impulse to the specified body.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBodyName|[[../../tString|tString]]|name of the body.}}
{{CodeDocDetailParam|avImpulse|[[../../cVector3f|cVector3f]]|impulse to add.}}
{{CodeDocDetailParam|abLocalSpace|bool|if the impulse is in the body's local space.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Body_GetEntityName}}
<syntaxhighlight lang="c++">tString Body_GetEntityName(const tString &in asBodyName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the name of the entity the body belongs to}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBodyName|[[../../tString|tString]]|name of the body.}}
{{CodeDocDetailReturn|tString|Name of the entity.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Body_SetCollides}}
<syntaxhighlight lang="c++">void Body_SetCollides(const tString &in asBodyName,
                      bool abCollides)</syntaxhighlight>
{{CodeDocDetailBody|Sets whether a body collides with other bodies or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBodyName|[[../../tString|tString]]|name of the body.}}
{{CodeDocDetailParam|abCollides|bool|if it should collide or not.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}