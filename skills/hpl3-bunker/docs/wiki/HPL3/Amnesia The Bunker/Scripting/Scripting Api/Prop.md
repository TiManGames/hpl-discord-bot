{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Prop_AddAttachedProp|Prop_AddAttachedProp]]([[../../tString|tString]] &in asPropName, [[../../tString|tString]] &in asAttachName, [[../../tString|tString]] &in asAttachFile, [[../../cVector3f|cVector3f]] &in avPosOffset, [[../../cVector3f|cVector3f]] &in avRotOffset)|Attaches a prop mesh (any other data is skipped) to a Prop}}
{{CodeDocSummaryItem|void|[[#Prop_AddHealth|Prop_AddHealth]](const [[../../tString|tString]] &in asPropName, float afHealth)|Adds health to a prop}}
{{CodeDocSummaryItem|void|[[#Prop_AlignRotation|Prop_AlignRotation]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asTargetEntity, float afAcceleration, float afMaxSpeed, float afSlowDownDist, bool abResetSpeed, const [[../../tString|tString]] &in asCallback <nowiki>=</nowiki> "", const [[../../tString|tString]] &in asOffsetEntity <nowiki>=</nowiki> "")|Aligns the rotation of the specified prop to the current rotation of the target entity}}
{{CodeDocSummaryItem|void|[[#Prop_ClearVelocity|Prop_ClearVelocity]](const [[../../tString|tString]] &in asPropName)|Clear out all velocity on a prop}}
{{CodeDocSummaryItem|bool|[[#Prop_Clone|Prop_Clone]](const [[../../tString|tString]] &in asSourceProp, const [[../../tString|tString]] &in asDestName, float afScale <nowiki>=</nowiki> 1.0f)|Returns a new copy of asSourceProp as a new prop called asDestName, with asSourceProp's properties}}
{{CodeDocSummaryItem|bool|[[#Prop_CopyScriptProperties|Prop_CopyScriptProperties]](const [[../../tString|tString]] &in asSourceProp, const [[../../tString|tString]] &in asDestProp)|Copies all script properties (but not position, bodies and so on) from one prop to another existing prop of the same type}}
{{CodeDocSummaryItem|bool|[[#Prop_CopyState|Prop_CopyState]](const [[../../tString|tString]] &in asSourceProp, const [[../../tString|tString]] &in asDestProp)|Copies all properties etc}}
{{CodeDocSummaryItem|void|[[#Prop_DisableCollisionUntilOutsidePlayer|Prop_DisableCollisionUntilOutsidePlayer]](const [[../../tString|tString]] &in asPropName)|}}
{{CodeDocSummaryItem|float|[[#Prop_GetHealth|Prop_GetHealth]](const [[../../tString|tString]] &in asPropName)|Gets the health of a prop}}
{{CodeDocSummaryItem|void|[[#Prop_MoveLinearTo|Prop_MoveLinearTo]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asTargetEntity, float afAcceleration, float afMaxSpeed, float afSlowDownDist, bool abResetSpeed, const [[../../tString|tString]] &in asCallback <nowiki>=</nowiki> "")|Moves the specified prop to the current position of the target entity}}
{{CodeDocSummaryItem|void|[[#Prop_RemoveAttachedProp|Prop_RemoveAttachedProp]]([[../../tString|tString]] &in asPropName, [[../../tString|tString]] &in asAttachName)|Removes an attached prop from a prop}}
{{CodeDocSummaryItem|void|[[#Prop_RotateToSpeed|Prop_RotateToSpeed]](const [[../../tString|tString]] &in asPropName, float afAcc, float afGoalSpeed, const [[../../cVector3f|cVector3f]] &in avAxis, bool abResetSpeed, const [[../../tString|tString]] &in asOffsetEntity)|Rotates a prop to a target speed}}
{{CodeDocSummaryItem|void|[[#Prop_RotateToSpeed|Prop_RotateToSpeed]](const [[../../tString|tString]] &in asPropName, float afAcc, float afGoalSpeed, bool abResetSpeed, const [[../../tString|tString]] &in asOffsetEntity)|Rotates a prop to a target speed}}
{{CodeDocSummaryItem|void|[[#Prop_SetActiveAndFade|Prop_SetActiveAndFade]](const [[../../tString|tString]] &in asPropName, bool abActive, float afFadeTime)|Activates or deactivates a entity and fades the mesh in or out}}
{{CodeDocSummaryItem|void|[[#Prop_SetAllowMapTransfer|Prop_SetAllowMapTransfer]](const [[../../tString|tString]] &in asPropName, bool abX)|Sets if a prop should be transfered}}
{{CodeDocSummaryItem|void|[[#Prop_SetHealth|Prop_SetHealth]](const [[../../tString|tString]] &in asPropName, float afHealth)|Sets the health of a prop}}
{{CodeDocSummaryItem|void|[[#Prop_SetStaticPhysics|Prop_SetStaticPhysics]](const [[../../tString|tString]] &in asPropName, bool abX)|Sets the physics of the object to static or dynamic}}
{{CodeDocSummaryItem|void|[[#Prop_StopMovement|Prop_StopMovement]](const [[../../tString|tString]] &in asPropName)|Stops the static movement of a prop}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Prop_AddAttachedProp}}
<syntaxhighlight lang="c++">void Prop_AddAttachedProp(tString &in asPropName,
                          tString &in asAttachName,
                          tString &in asAttachFile,
                          cVector3f &in avPosOffset,
                          cVector3f &in avRotOffset)</syntaxhighlight>
{{CodeDocDetailBody|Attaches a prop mesh (any other data is skipped) to a Prop}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAttachName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAttachFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avPosOffset|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avRotOffset|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_AddHealth}}
<syntaxhighlight lang="c++">void Prop_AddHealth(const tString &in asPropName,
                    float afHealth)</syntaxhighlight>
{{CodeDocDetailBody|Adds health to a prop.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afHealth|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_AlignRotation}}
<syntaxhighlight lang="c++">void Prop_AlignRotation(const tString &in asName,
                        const tString &in asTargetEntity,
                        float afAcceleration,
                        float afMaxSpeed,
                        float afSlowDownDist,
                        bool abResetSpeed,
                        const tString &in asCallback = "",
                        const tString &in asOffsetEntity = "")</syntaxhighlight>
{{CodeDocDetailBody|Aligns the rotation of the specified prop to the current rotation of the target entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTargetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAcceleration|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|afSlowDownDist|float|}}
{{CodeDocDetailParam|abResetSpeed|bool|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asOffsetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_ClearVelocity}}
<syntaxhighlight lang="c++">void Prop_ClearVelocity(const tString &in asPropName)</syntaxhighlight>
{{CodeDocDetailBody|Clear out all velocity on a prop.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_Clone}}
<syntaxhighlight lang="c++">bool Prop_Clone(const tString &in asSourceProp,
                const tString &in asDestName,
                float afScale = 1.0f)</syntaxhighlight>
{{CodeDocDetailBody|Returns a new copy of asSourceProp as a new prop called asDestName, with asSourceProp's properties.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSourceProp|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asDestName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afScale|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_CopyScriptProperties}}
<syntaxhighlight lang="c++">bool Prop_CopyScriptProperties(const tString &in asSourceProp,
                               const tString &in asDestProp)</syntaxhighlight>
{{CodeDocDetailBody|Copies all script properties (but not position, bodies and so on) from one prop to another existing prop of the same type.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSourceProp|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asDestProp|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_CopyState}}
<syntaxhighlight lang="c++">bool Prop_CopyState(const tString &in asSourceProp,
                    const tString &in asDestProp)</syntaxhighlight>
{{CodeDocDetailBody|Copies all properties etc. from one prop to another existing prop of the same type.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSourceProp|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asDestProp|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_DisableCollisionUntilOutsidePlayer}}
<syntaxhighlight lang="c++">void Prop_DisableCollisionUntilOutsidePlayer(const tString &in asPropName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_GetHealth}}
<syntaxhighlight lang="c++">float Prop_GetHealth(const tString &in asPropName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the health of a prop.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|float, the health of the specified prop.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_MoveLinearTo}}
<syntaxhighlight lang="c++">void Prop_MoveLinearTo(const tString &in asName,
                       const tString &in asTargetEntity,
                       float afAcceleration,
                       float afMaxSpeed,
                       float afSlowDownDist,
                       bool abResetSpeed,
                       const tString &in asCallback = "")</syntaxhighlight>
{{CodeDocDetailBody|Moves the specified prop to the current position of the target entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTargetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAcceleration|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|afSlowDownDist|float|}}
{{CodeDocDetailParam|abResetSpeed|bool|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_RemoveAttachedProp}}
<syntaxhighlight lang="c++">void Prop_RemoveAttachedProp(tString &in asPropName,
                             tString &in asAttachName)</syntaxhighlight>
{{CodeDocDetailBody|Removes an attached prop from a prop}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAttachName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_RotateToSpeed}}
<syntaxhighlight lang="c++">void Prop_RotateToSpeed(const tString &in asPropName,
                        float afAcc,
                        float afGoalSpeed,
                        const cVector3f &in avAxis,
                        bool abResetSpeed,
                        const tString &in asOffsetEntity)</syntaxhighlight>
{{CodeDocDetailBody|Rotates a prop to a target speed.<br/>the prop will rotate around its own axis.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afGoalSpeed|float|}}
{{CodeDocDetailParam|avAxis|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abResetSpeed|bool|}}
{{CodeDocDetailParam|asOffsetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_RotateToSpeed}}
<syntaxhighlight lang="c++">void Prop_RotateToSpeed(const tString &in asPropName,
                        float afAcc,
                        float afGoalSpeed,
                        bool abResetSpeed,
                        const tString &in asOffsetEntity)</syntaxhighlight>
{{CodeDocDetailBody|Rotates a prop to a target speed. Using the up vector of offset entity as axis.<br/>If left as , the prop will rotate around its own up axis.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afGoalSpeed|float|}}
{{CodeDocDetailParam|abResetSpeed|bool|}}
{{CodeDocDetailParam|asOffsetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_SetActiveAndFade}}
<syntaxhighlight lang="c++">void Prop_SetActiveAndFade(const tString &in asPropName,
                           bool abActive,
                           float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates a entity and fades the mesh in or out.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_SetAllowMapTransfer}}
<syntaxhighlight lang="c++">void Prop_SetAllowMapTransfer(const tString &in asPropName,
                              bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a prop should be transfered}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_SetHealth}}
<syntaxhighlight lang="c++">void Prop_SetHealth(const tString &in asPropName,
                    float afHealth)</syntaxhighlight>
{{CodeDocDetailBody|Sets the health of a prop}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afHealth|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_SetStaticPhysics}}
<syntaxhighlight lang="c++">void Prop_SetStaticPhysics(const tString &in asPropName,
                           bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the physics of the object to static or dynamic}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Prop_StopMovement}}
<syntaxhighlight lang="c++">void Prop_StopMovement(const tString &in asPropName)</syntaxhighlight>
{{CodeDocDetailBody|Stops the static movement of a prop.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}