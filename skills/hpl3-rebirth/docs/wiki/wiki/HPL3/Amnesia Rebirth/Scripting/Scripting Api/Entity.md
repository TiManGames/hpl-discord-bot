{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#Entity_AddCollideCallback|Entity_AddCollideCallback]](const [[../../tString|tString]] &in asParentName, const [[../../tString|tString]] &in asChildName, const [[../../tString|tString]] &in asFunction)|Add a callback for when entities (objects, areas etc) collide and/or collides with the player}}
{{CodeDocSummaryItem|void|[[#Entity_AddForce|Entity_AddForce]](const [[../../tString|tString]] &in asEntityName, const [[../../cVector3f|cVector3f]] &in avForce, bool abLocalSpace, bool abOnlyMainBody)|Adds force to the entity}}
{{CodeDocSummaryItem|void|[[#Entity_AddForceFromEntity|Entity_AddForceFromEntity]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asForceEntityName, float afForce, bool abOnlyMainBody)|Adds force to the entity away from another entity}}
{{CodeDocSummaryItem|void|[[#Entity_AddImpulse|Entity_AddImpulse]](const [[../../tString|tString]] &in asEntityName, const [[../../cVector3f|cVector3f]] &in avImpulse, bool abLocalSpace, bool abOnlyMainBody)|Adds an impulse to the entity}}
{{CodeDocSummaryItem|void|[[#Entity_AddImpulseFromEntity|Entity_AddImpulseFromEntity]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asImpulseEntityName, float afImpulse, bool abOnlyMainBody)|Adds an impulse to the entity away from another entity}}
{{CodeDocSummaryItem|void|[[#Entity_AddTorque|Entity_AddTorque]](const [[../../tString|tString]] &in asEntityName, const [[../../cVector3f|cVector3f]] &in avTorque, bool abLocalSpace, bool abOnlyMainBody)|Adds torque to an entity to provide some angular velocity}}
{{CodeDocSummaryItem|bool|[[#Entity_AttachToEntity|Entity_AttachToEntity]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asParentName, const [[../../tString|tString]] &in asParentBodyName, bool abUseRotation, bool abSnapToParent <nowiki>=</nowiki> false, bool abLocked <nowiki>=</nowiki> false)|Attaches the entity to another entity}}
{{CodeDocSummaryItem|bool|[[#Entity_AttachToSocket|Entity_AttachToSocket]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asParentName, const [[../../tString|tString]] &in asParentSocketName, bool abUseRotation, bool abSnapToParent <nowiki>=</nowiki> true)|Attaches the entity to another entity}}
{{CodeDocSummaryItem|void|[[#Entity_CallEntityInteract|Entity_CallEntityInteract]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asBodyName <nowiki>=</nowiki> "", const [[../../cVector3f|cVector3f]] &in avFocusBodyOffset <nowiki>=</nowiki> cVector3f_Zero, const [[../../tString|tString]] &in asData <nowiki>=</nowiki> "")|Calls OnInteract on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_Connect|Entity_Connect]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asMainEntity, const [[../../tString|tString]] &in asConnectEntity, bool abInvertStateSent, int alStatesUsed)|Creates a connection between two entities}}
{{CodeDocSummaryItem|[[../../iLuxEntity|iLuxEntity]]|[[#Entity_CreateAtEntity|Entity_CreateAtEntity]](const [[../../tString|tString]] &in asNewEntityName, const [[../../tString|tString]] &in asEntityFile, const [[../../tString|tString]] &in asTargetEntityName, bool abFullGameSave)|Creates an entity at another entity}}
{{CodeDocSummaryItem|[[../../iLuxEntity|iLuxEntity]]|[[#Entity_CreateAtEntityExt|Entity_CreateAtEntityExt]](const [[../../tString|tString]] &in asNewEntityName, const [[../../tString|tString]] &in asEntityFile, const [[../../tString|tString]] &in asTargetEntityName, bool abFullGameSave, const [[../../cVector3f|cVector3f]] &in avScale, const [[../../cVector3f|cVector3f]] &in avOffsetPosition, const [[../../cVector3f|cVector3f]] &in avOffsetRotation, bool abLocalOffset)|Creates an entity at another entity with extra options}}
{{CodeDocSummaryItem|void|[[#Entity_Destroy|Entity_Destroy]](const [[../../tString|tString]] &in asName)|Destroys an entity of a given name}}
{{CodeDocSummaryItem|bool|[[#Entity_EntityIsInFront|Entity_EntityIsInFront]](const [[../../tString|tString]] &in asTargetEntity, const [[../../tString|tString]] &in asForwardEntity)|Returns true if the specified entity is in front of the other entity}}
{{CodeDocSummaryItem|bool|[[#Entity_Exists|Entity_Exists]](const [[../../tString|tString]] &in asName)|Check if an entity exists in the level}}
{{CodeDocSummaryItem|bool|[[#Entity_Exists|Entity_Exists]]([[../../tID|tID]] aID)|Check if an entity exists in the level}}
{{CodeDocSummaryItem|void|[[#Entity_FadeEffectBaseColor|Entity_FadeEffectBaseColor]](const [[../../tString|tString]] &in asEntityName, const [[../../cColor|cColor]] &in aColor, float afTime)|Fades the base color of the effects}}
{{CodeDocSummaryItem|void|[[#Entity_FadeProcAnimationSpeed|Entity_FadeProcAnimationSpeed]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName, float afSpeed, float afTime)|Fade the speed of a proc animation}}
{{CodeDocSummaryItem|bool|[[#Entity_GetAutoSleep|Entity_GetAutoSleep]](const [[../../tString|tString]] &in asName)|Get if an entity automatically falls asleep when it isnt active}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#Entity_GetBodyOffset|Entity_GetBodyOffset]](const [[../../tString|tString]] &in asEntityName)|Returns the offset from centre specified in the }}
{{CodeDocSummaryItem|bool|[[#Entity_GetCollide|Entity_GetCollide]](const [[../../tString|tString]] &in asEntityA, const [[../../tString|tString]] &in asEntityB)|Checks for collision between two specific entities}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#Entity_GetDeltaToEntity|Entity_GetDeltaToEntity]](const [[../../tString|tString]] &in asEntityA, const [[../../tString|tString]] &in asEntityB)|Gets the direction and distance between two entities}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#Entity_GetEffectBaseColor|Entity_GetEffectBaseColor]](const [[../../tString|tString]] &in asEntityName)|Returns the base color of the effects}}
{{CodeDocSummaryItem|bool|[[#Entity_GetVarBool|Entity_GetVarBool]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#Entity_GetVarColor|Entity_GetVarColor]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|float|[[#Entity_GetVarFloat|Entity_GetVarFloat]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|int|[[#Entity_GetVarInt|Entity_GetVarInt]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#Entity_GetVarString|Entity_GetVarString]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#Entity_GetVarVector2f|Entity_GetVarVector2f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#Entity_GetVarVector3f|Entity_GetVarVector3f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName)|Get value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_IncVarFloat|Entity_IncVarFloat]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, float afX)|Add a value to the current value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_IncVarInt|Entity_IncVarInt]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, int alX)|Add a value to the current value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_IncVarVector2f|Entity_IncVarVector2f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../cVector2f|cVector2f]] &in avX)|Add a value to the current value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_IncVarVector3f|Entity_IncVarVector3f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../cVector3f|cVector3f]] &in avX)|Add a value to the current value of an entity variable}}
{{CodeDocSummaryItem|bool|[[#Entity_IsActive|Entity_IsActive]](const [[../../tString|tString]] &in asName)|Get if an entity is active (visible and functioning) or not}}
{{CodeDocSummaryItem|bool|[[#Entity_IsInPlayerFOV|Entity_IsInPlayerFOV]](const [[../../tString|tString]] &in asEntity)|Returns true if the object is within the player's field of view}}
{{CodeDocSummaryItem|bool|[[#Entity_IsInteractedWith|Entity_IsInteractedWith]](const [[../../tString|tString]] &in asName)|Checks if the entity is being interacted with}}
{{CodeDocSummaryItem|bool|[[#Entity_IsOccluder|Entity_IsOccluder]](const [[../../tString|tString]] &in asName)|Get if an entity is an occluder}}
{{CodeDocSummaryItem|bool|[[#Entity_IsSleeping|Entity_IsSleeping]](const [[../../tString|tString]] &in asName)|Check if an entity is asleep}}
{{CodeDocSummaryItem|void|[[#Entity_PlaceAtEntity|Entity_PlaceAtEntity]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asTargetEntity, const [[../../cVector3f|cVector3f]] &in avOffset <nowiki>=</nowiki> cVector3f_Zero, bool abAlignRotation <nowiki>=</nowiki> false, bool abUseEntFileCenter <nowiki>=</nowiki> false)|Places the specified entity at another entity}}
{{CodeDocSummaryItem|void|[[#Entity_PlayAnimation|Entity_PlayAnimation]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimation, float afFadeTime <nowiki>=</nowiki> 0.1f, bool abLoop <nowiki>=</nowiki> false, bool abPlayTransition <nowiki>=</nowiki> true, const [[../../tString|tString]] &in asCallback <nowiki>=</nowiki> "", bool abGlobal <nowiki>=</nowiki> false, bool abApplyBoneRootMotion <nowiki>=</nowiki> false)|Plays an animation on the entity}}
{{CodeDocSummaryItem|bool|[[#Entity_PlayerIsInFront|Entity_PlayerIsInFront]](const [[../../tString|tString]] &in asName)|Returns true if the player is in front of the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_PlayProcAnimation|Entity_PlayProcAnimation]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimation, float afLength, bool abLoop <nowiki>=</nowiki> false, float afAmountFadeTime <nowiki>=</nowiki> 0.1, float afSpeedFadeTime <nowiki>=</nowiki> -1.0f)|Plays a procedural animation on the entity}}
{{CodeDocSummaryItem|void|[[#Entity_Preload|Entity_Preload]](const [[../../tString|tString]] &in asEntityFile)|Preloads an entity}}
{{CodeDocSummaryItem|void|[[#Entity_RemoveAllConnections|Entity_RemoveAllConnections]](const [[../../tString|tString]] &in asMainEntity)|Removes all connections on an entity}}
{{CodeDocSummaryItem|bool|[[#Entity_RemoveCollideCallback|Entity_RemoveCollideCallback]](const [[../../tString|tString]] &in asParentName, const [[../../tString|tString]] &in asChildName)|Remove a callback for when entities (objects, areas etc) collide and/or collide with the player}}
{{CodeDocSummaryItem|void|[[#Entity_RemoveConnection|Entity_RemoveConnection]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asMainEntity)|Removes a specific connection on an entity}}
{{CodeDocSummaryItem|bool|[[#Entity_RemoveEntityAttachment|Entity_RemoveEntityAttachment]](const [[../../tString|tString]] &in asName)|Removes an attachment to another entity if the entity(ies) has one}}
{{CodeDocSummaryItem|void|[[#Entity_SetActive|Entity_SetActive]](const [[../../tString|tString]] &in asName, bool abActive)|Set if entity is active (visible and functioning) or not}}
{{CodeDocSummaryItem|void|[[#Entity_SetAnimationMessageEventCallback|Entity_SetAnimationMessageEventCallback]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asCallbackFunc, bool abAutoRemove)|Sets a callback for the message events in the currently playing animation}}
{{CodeDocSummaryItem|void|[[#Entity_SetAnimationPaused|Entity_SetAnimationPaused]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName, bool abPaused <nowiki>=</nowiki> true)|Pause or unpause an animation on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetAnimationRelativeTimePosition|Entity_SetAnimationRelativeTimePosition]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName, float afTimePos)|Sets the relative time position of a specific animation}}
{{CodeDocSummaryItem|void|[[#Entity_SetAutoSleep|Entity_SetAutoSleep]](const [[../../tString|tString]] &in asName, bool abX)|Sets if the entity should sleep automatically when it need no updating}}
{{CodeDocSummaryItem|void|[[#Entity_SetCastShadows|Entity_SetCastShadows]](const [[../../tString|tString]] &in asEntityName, bool abCast)|Sets whether the entity casts shadows}}
{{CodeDocSummaryItem|void|[[#Entity_SetCollide|Entity_SetCollide]](const [[../../tString|tString]] &in asEntityName, bool abActive)|Turn off or on collision for all the bodies in the given entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetCollideCharacter|Entity_SetCollideCharacter]](const [[../../tString|tString]] &in asEntityName, bool abActive)|Turn off or on character collision for all the bodies in the given entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetColorMul|Entity_SetColorMul]](const [[../../tString|tString]] &in asEntityName, const [[../../cColor|cColor]] &in aColor)|Set the color mul of the entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetConnectionStateChangeCallback|Entity_SetConnectionStateChangeCallback]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asCallback)|Sets the callback for when the connection state changes on an entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetEffectBaseColor|Entity_SetEffectBaseColor]](const [[../../tString|tString]] &in asEntityName, const [[../../cColor|cColor]] &in aColor)|Sets the base color of the effects}}
{{CodeDocSummaryItem|void|[[#Entity_SetEffectsActive|Entity_SetEffectsActive]](const [[../../tString|tString]] &in asEntityName, bool abActive, bool abFadeAndPlaySounds)|Activates or deactivates the effects on a entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetEffectsActiveExt|Entity_SetEffectsActiveExt]](const [[../../tString|tString]] &in asEntityName, bool abActive, bool abFadeAndPlaySounds, float afEffectsOnTime, float afEffectsOffTime)|Activates or deactivates the effects on a entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetInteractionDisabled|Entity_SetInteractionDisabled]](const [[../../tString|tString]] &in asEntityName, bool abX)|Sets if the player can interact with an entity or not}}
{{CodeDocSummaryItem|void|[[#Entity_SetIsOccluder|Entity_SetIsOccluder]](const [[../../tString|tString]] &in asName, bool abOccluder)|Set if entity is an occluder}}
{{CodeDocSummaryItem|void|[[#Entity_SetMaxInteractionDistance|Entity_SetMaxInteractionDistance]](const [[../../tString|tString]] &in asEntityName, float afDistance)|Change the max interaction distance of an entity from the default/entity configured distance}}
{{CodeDocSummaryItem|void|[[#Entity_SetPlayerInteractCallback|Entity_SetPlayerInteractCallback]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asCallback, bool abRemoveWhenInteracted)|Sets the callback for when the player interacts with a specific entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetPlayerLookAtCallback|Entity_SetPlayerLookAtCallback]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asCallback, bool abRemoveWhenLookedAt <nowiki>=</nowiki> true, bool abCheckCenterOfScreen <nowiki>=</nowiki> true, bool abCheckRayIntersection <nowiki>=</nowiki> true, float afMaxDistance <nowiki>=</nowiki> -1, float afCallbackDelay <nowiki>=</nowiki> 0)|Sets the callback for when the player looks at or turns away from a specific entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetProcAnimationPaused|Entity_SetProcAnimationPaused]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName, bool abPaused <nowiki>=</nowiki> true)|Pause or unpause a procedural animation on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_SetProcAnimationSpeed|Entity_SetProcAnimationSpeed]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName, float afSpeed)|Sets the speed of a proc animation}}
{{CodeDocSummaryItem|void|[[#Entity_SetReflectionVisibility|Entity_SetReflectionVisibility]](const [[../../tString|tString]] &in asEntityName, bool abVisibleInReflection, bool abVisibleInWorld)|Sets whether the entity is drawn in reflections or not, and the real world or not}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarBool|Entity_SetVarBool]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, bool abX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarColor|Entity_SetVarColor]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../cColor|cColor]] &in aX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarFloat|Entity_SetVarFloat]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, float afX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarInt|Entity_SetVarInt]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, int alX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarString|Entity_SetVarString]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../tString|tString]] &in asX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarVector2f|Entity_SetVarVector2f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../cVector2f|cVector2f]] &in avX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_SetVarVector3f|Entity_SetVarVector3f]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asVarName, const [[../../cVector3f|cVector3f]] &in avX)|Sets the value of an entity variable}}
{{CodeDocSummaryItem|void|[[#Entity_Sleep|Entity_Sleep]](const [[../../tString|tString]] &in asName)|Forces the entity to sleep (disabling Update/PostUpdate)}}
{{CodeDocSummaryItem|void|[[#Entity_StopAnimation|Entity_StopAnimation]](const [[../../tString|tString]] &in asEntityName)|Stops any currently playing animation on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_StopProcAnimation|Entity_StopProcAnimation]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimation, float afFadeTime <nowiki>=</nowiki> 0.1f)|Stops a procedural animation on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_StopSpecificAnimation|Entity_StopSpecificAnimation]](const [[../../tString|tString]] &in asEntityName, const [[../../tString|tString]] &in asAnimationName)|Stop a specific animation currently playing on the specified entity}}
{{CodeDocSummaryItem|void|[[#Entity_WakeUp|Entity_WakeUp]](const [[../../tString|tString]] &in asName)|Forces the entity to wake up (enabling Update/PostUpdate)}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Entity_AddCollideCallback}}
<syntaxhighlight lang="c++">bool Entity_AddCollideCallback(const tString &in asParentName,
                               const tString &in asChildName,
                               const tString &in asFunction)</syntaxhighlight>
{{CodeDocDetailBody|Add a callback for when entities (objects, areas etc) collide and/or collides with the player.<br/>Collision include when "uncolliding" as well.<br/>Wildcard(s) * can be used in names to check for collisions.<br/>@callback syntax for callback function, FunctionName(const tString &in asParent, const tString &in asChild, int alState).<br/>@abbreviation syntax for the callback function code snippet, clbCollide.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asParentName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asChildName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asFunction|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, false <nowiki>=</nowiki> callback is removed, true <nowiki>=</nowiki> callback can trigger again.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AddForce}}
<syntaxhighlight lang="c++">void Entity_AddForce(const tString &in asEntityName,
                     const cVector3f &in avForce,
                     bool abLocalSpace,
                     bool abOnlyMainBody)</syntaxhighlight>
{{CodeDocDetailBody|Adds force to the entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avForce|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalSpace|bool|}}
{{CodeDocDetailParam|abOnlyMainBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AddForceFromEntity}}
<syntaxhighlight lang="c++">void Entity_AddForceFromEntity(const tString &in asEntityName,
                               const tString &in asForceEntityName,
                               float afForce,
                               bool abOnlyMainBody)</syntaxhighlight>
{{CodeDocDetailBody|Adds force to the entity away from another entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asForceEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afForce|float|}}
{{CodeDocDetailParam|abOnlyMainBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AddImpulse}}
<syntaxhighlight lang="c++">void Entity_AddImpulse(const tString &in asEntityName,
                       const cVector3f &in avImpulse,
                       bool abLocalSpace,
                       bool abOnlyMainBody)</syntaxhighlight>
{{CodeDocDetailBody|Adds an impulse to the entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avImpulse|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalSpace|bool|}}
{{CodeDocDetailParam|abOnlyMainBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AddImpulseFromEntity}}
<syntaxhighlight lang="c++">void Entity_AddImpulseFromEntity(const tString &in asEntityName,
                                 const tString &in asImpulseEntityName,
                                 float afImpulse,
                                 bool abOnlyMainBody)</syntaxhighlight>
{{CodeDocDetailBody|Adds an impulse to the entity away from another entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asImpulseEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afImpulse|float|}}
{{CodeDocDetailParam|abOnlyMainBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AddTorque}}
<syntaxhighlight lang="c++">void Entity_AddTorque(const tString &in asEntityName,
                      const cVector3f &in avTorque,
                      bool abLocalSpace,
                      bool abOnlyMainBody)</syntaxhighlight>
{{CodeDocDetailBody|Adds torque to an entity to provide some angular velocity}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avTorque|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalSpace|bool|}}
{{CodeDocDetailParam|abOnlyMainBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AttachToEntity}}
<syntaxhighlight lang="c++">bool Entity_AttachToEntity(const tString &in asName,
                           const tString &in asParentName,
                           const tString &in asParentBodyName,
                           bool abUseRotation,
                           bool abSnapToParent = false,
                           bool abLocked = false)</syntaxhighlight>
{{CodeDocDetailBody|Attaches the entity to another entity. If already attached, it will be removed before attaching to new}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asParentName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asParentBodyName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseRotation|bool|}}
{{CodeDocDetailParam|abSnapToParent|bool|}}
{{CodeDocDetailParam|abLocked|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_AttachToSocket}}
<syntaxhighlight lang="c++">bool Entity_AttachToSocket(const tString &in asName,
                           const tString &in asParentName,
                           const tString &in asParentSocketName,
                           bool abUseRotation,
                           bool abSnapToParent = true)</syntaxhighlight>
{{CodeDocDetailBody|Attaches the entity to another entity. If already attached, it will be removed before attaching to new}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asParentName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asParentSocketName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseRotation|bool|}}
{{CodeDocDetailParam|abSnapToParent|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_CallEntityInteract}}
<syntaxhighlight lang="c++">void Entity_CallEntityInteract(const tString &in asName,
                               const tString &in asBodyName = "",
                               const cVector3f &in avFocusBodyOffset = cVector3f_Zero,
                               const tString &in asData = "")</syntaxhighlight>
{{CodeDocDetailBody|Calls OnInteract on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asBodyName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avFocusBodyOffset|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|asData|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|bool, true if the position is in front of the entity.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Connect}}
<syntaxhighlight lang="c++">void Entity_Connect(const tString &in asName,
                    const tString &in asMainEntity,
                    const tString &in asConnectEntity,
                    bool abInvertStateSent,
                    int alStatesUsed)</syntaxhighlight>
{{CodeDocDetailBody|Creates a connection between two entities.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asMainEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asConnectEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abInvertStateSent|bool|}}
{{CodeDocDetailParam|alStatesUsed|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_CreateAtEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ Entity_CreateAtEntity(const tString &in asNewEntityName,
                                  const tString &in asEntityFile,
                                  const tString &in asTargetEntityName,
                                  bool abFullGameSave)</syntaxhighlight>
{{CodeDocDetailBody|Creates an entity at another entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNewEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntityFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTargetEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abFullGameSave|bool|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_CreateAtEntityExt}}
<syntaxhighlight lang="c++">iLuxEntity@ Entity_CreateAtEntityExt(const tString &in asNewEntityName,
                                     const tString &in asEntityFile,
                                     const tString &in asTargetEntityName,
                                     bool abFullGameSave,
                                     const cVector3f &in avScale,
                                     const cVector3f &in avOffsetPosition,
                                     const cVector3f &in avOffsetRotation,
                                     bool abLocalOffset)</syntaxhighlight>
{{CodeDocDetailBody|Creates an entity at another entity with extra options.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNewEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntityFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTargetEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abFullGameSave|bool|}}
{{CodeDocDetailParam|avScale|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOffsetPosition|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOffsetRotation|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalOffset|bool|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Destroy}}
<syntaxhighlight lang="c++">void Entity_Destroy(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Destroys an entity of a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_EntityIsInFront}}
<syntaxhighlight lang="c++">bool Entity_EntityIsInFront(const tString &in asTargetEntity,
                            const tString &in asForwardEntity)</syntaxhighlight>
{{CodeDocDetailBody|Returns true if the specified entity is in front of the other entity.<br/>The function assumes the entity's z-axis points forward. Anything less than 90<br/>degrees offset from the forward vector counts as "in front".}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asTargetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asForwardEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, true if the target entity is in front.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Exists}}
<syntaxhighlight lang="c++">bool Entity_Exists(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Check if an entity exists in the level.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if entity exists.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Exists}}
<syntaxhighlight lang="c++">bool Entity_Exists(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|Check if an entity exists in the level.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|bool|bool, if entity exists.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_FadeEffectBaseColor}}
<syntaxhighlight lang="c++">void Entity_FadeEffectBaseColor(const tString &in asEntityName,
                                const cColor &in aColor,
                                float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fades the base color of the effects}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_FadeProcAnimationSpeed}}
<syntaxhighlight lang="c++">void Entity_FadeProcAnimationSpeed(const tString &in asEntityName,
                                   const tString &in asAnimationName,
                                   float afSpeed,
                                   float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fade the speed of a proc animation.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetAutoSleep}}
<syntaxhighlight lang="c++">bool Entity_GetAutoSleep(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get if an entity automatically falls asleep when it isnt active}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if sleeping or not.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetBodyOffset}}
<syntaxhighlight lang="c++">cVector3f Entity_GetBodyOffset(const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the offset from centre specified in the .ent file. Only works for props.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cVector3f|cVector3f, the offset}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetCollide}}
<syntaxhighlight lang="c++">bool Entity_GetCollide(const tString &in asEntityA,
                       const tString &in asEntityB)</syntaxhighlight>
{{CodeDocDetailBody|Checks for collision between two specific entities. Wildcard(s) * are NOT supported!}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityA|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntityB|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetDeltaToEntity}}
<syntaxhighlight lang="c++">cVector3f Entity_GetDeltaToEntity(const tString &in asEntityA,
                                  const tString &in asEntityB)</syntaxhighlight>
{{CodeDocDetailBody|Gets the direction and distance between two entities}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityA|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntityB|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cVector3f|cVector3f, delta between the entities, delta <nowiki>=</nowiki> direction * distance <nowiki>=</nowiki> entity_b_pos - entity_a_pos}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetEffectBaseColor}}
<syntaxhighlight lang="c++">cColor Entity_GetEffectBaseColor(const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the base color of the effects}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarBool}}
<syntaxhighlight lang="c++">bool Entity_GetVarBool(const tString &in asEntityName,
                       const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarColor}}
<syntaxhighlight lang="c++">cColor Entity_GetVarColor(const tString &in asEntityName,
                          const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarFloat}}
<syntaxhighlight lang="c++">float Entity_GetVarFloat(const tString &in asEntityName,
                         const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarInt}}
<syntaxhighlight lang="c++">int Entity_GetVarInt(const tString &in asEntityName,
                     const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarString}}
<syntaxhighlight lang="c++">tString Entity_GetVarString(const tString &in asEntityName,
                            const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarVector2f}}
<syntaxhighlight lang="c++">cVector2f Entity_GetVarVector2f(const tString &in asEntityName,
                                const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_GetVarVector3f}}
<syntaxhighlight lang="c++">cVector3f Entity_GetVarVector3f(const tString &in asEntityName,
                                const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|Get value of an entity variable.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IncVarFloat}}
<syntaxhighlight lang="c++">void Entity_IncVarFloat(const tString &in asEntityName,
                        const tString &in asVarName,
                        float afX)</syntaxhighlight>
{{CodeDocDetailBody|Add a value to the current value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IncVarInt}}
<syntaxhighlight lang="c++">void Entity_IncVarInt(const tString &in asEntityName,
                      const tString &in asVarName,
                      int alX)</syntaxhighlight>
{{CodeDocDetailBody|Add a value to the current value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IncVarVector2f}}
<syntaxhighlight lang="c++">void Entity_IncVarVector2f(const tString &in asEntityName,
                           const tString &in asVarName,
                           const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|Add a value to the current value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IncVarVector3f}}
<syntaxhighlight lang="c++">void Entity_IncVarVector3f(const tString &in asEntityName,
                           const tString &in asVarName,
                           const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|Add a value to the current value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IsActive}}
<syntaxhighlight lang="c++">bool Entity_IsActive(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get if an entity is active (visible and functioning) or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if active or not.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IsInPlayerFOV}}
<syntaxhighlight lang="c++">bool Entity_IsInPlayerFOV(const tString &in asEntity)</syntaxhighlight>
{{CodeDocDetailBody|Returns true if the object is within the player's field of view. This does not take into account line of sight.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, true if the entity is in the player's field of view.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IsInteractedWith}}
<syntaxhighlight lang="c++">bool Entity_IsInteractedWith(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the entity is being interacted with.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if the entity is being interacted with}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IsOccluder}}
<syntaxhighlight lang="c++">bool Entity_IsOccluder(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get if an entity is an occluder}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if occluder}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_IsSleeping}}
<syntaxhighlight lang="c++">bool Entity_IsSleeping(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Check if an entity is asleep}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if sleeping or not.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_PlaceAtEntity}}
<syntaxhighlight lang="c++">void Entity_PlaceAtEntity(const tString &in asEntityName,
                          const tString &in asTargetEntity,
                          const cVector3f &in avOffset = cVector3f_Zero,
                          bool abAlignRotation = false,
                          bool abUseEntFileCenter = false)</syntaxhighlight>
{{CodeDocDetailBody|Places the specified entity at another entity. Optionally aligning its rotation with the target entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTargetEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avOffset|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abAlignRotation|bool|}}
{{CodeDocDetailParam|abUseEntFileCenter|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_PlayAnimation}}
<syntaxhighlight lang="c++">void Entity_PlayAnimation(const tString &in asEntityName,
                          const tString &in asAnimation,
                          float afFadeTime = 0.1f,
                          bool abLoop = false,
                          bool abPlayTransition = true,
                          const tString &in asCallback = "",
                          bool abGlobal = false,
                          bool abApplyBoneRootMotion = false)</syntaxhighlight>
{{CodeDocDetailBody|Plays an animation on the entity<br/>@callback syntax, MyFunc(string &in asProp)}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimation|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abPlayTransition|bool|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|(optional), name of callback function. Syntax void Func(const tString &in asEntityName, const tString &in asAnimName)}}
{{CodeDocDetailParam|abGlobal|bool|(optional), if animation is played in global space}}
{{CodeDocDetailParam|abApplyBoneRootMotion|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_PlayerIsInFront}}
<syntaxhighlight lang="c++">bool Entity_PlayerIsInFront(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns true if the player is in front of the specified entity.<br/>The function assumes the entity's z-axis points forward. Anything less than 90<br/>degrees offset from the forward vector counts as "in front".}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, true if the target entity is in front.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_PlayProcAnimation}}
<syntaxhighlight lang="c++">void Entity_PlayProcAnimation(const tString &in asEntityName,
                              const tString &in asAnimation,
                              float afLength,
                              bool abLoop = false,
                              float afAmountFadeTime = 0.1,
                              float afSpeedFadeTime = -1.0f)</syntaxhighlight>
{{CodeDocDetailBody|Plays a procedural animation on the entity}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimation|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afAmountFadeTime|float|}}
{{CodeDocDetailParam|afSpeedFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Preload}}
<syntaxhighlight lang="c++">void Entity_Preload(const tString &in asEntityFile)</syntaxhighlight>
{{CodeDocDetailBody|Preloads an entity}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_RemoveAllConnections}}
<syntaxhighlight lang="c++">void Entity_RemoveAllConnections(const tString &in asMainEntity)</syntaxhighlight>
{{CodeDocDetailBody|Removes all connections on an entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMainEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_RemoveCollideCallback}}
<syntaxhighlight lang="c++">bool Entity_RemoveCollideCallback(const tString &in asParentName,
                                  const tString &in asChildName)</syntaxhighlight>
{{CodeDocDetailBody|Remove a callback for when entities (objects, areas etc) collide and/or collide with the player.<br/>Wildcard(s) * can be used in names.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asParentName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asChildName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_RemoveConnection}}
<syntaxhighlight lang="c++">void Entity_RemoveConnection(const tString &in asName,
                             const tString &in asMainEntity)</syntaxhighlight>
{{CodeDocDetailBody|Removes a specific connection on an entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asMainEntity|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_RemoveEntityAttachment}}
<syntaxhighlight lang="c++">bool Entity_RemoveEntityAttachment(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Removes an attachment to another entity if the entity(ies) has one.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetActive}}
<syntaxhighlight lang="c++">void Entity_SetActive(const tString &in asName,
                      bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|Set if entity is active (visible and functioning) or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetAnimationMessageEventCallback}}
<syntaxhighlight lang="c++">void Entity_SetAnimationMessageEventCallback(const tString &in asEntityName,
                                             const tString &in asCallbackFunc,
                                             bool abAutoRemove)</syntaxhighlight>
{{CodeDocDetailBody|Sets a callback for the message events in the currently playing animation.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asCallbackFunc|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAutoRemove|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetAnimationPaused}}
<syntaxhighlight lang="c++">void Entity_SetAnimationPaused(const tString &in asEntityName,
                               const tString &in asAnimationName,
                               bool abPaused = true)</syntaxhighlight>
{{CodeDocDetailBody|Pause or unpause an animation on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetAnimationRelativeTimePosition}}
<syntaxhighlight lang="c++">void Entity_SetAnimationRelativeTimePosition(const tString &in asEntityName,
                                             const tString &in asAnimationName,
                                             float afTimePos)</syntaxhighlight>
{{CodeDocDetailBody|Sets the relative time position of a specific animation.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afTimePos|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetAutoSleep}}
<syntaxhighlight lang="c++">void Entity_SetAutoSleep(const tString &in asName,
                         bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the entity should sleep automatically when it need no updating}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetCastShadows}}
<syntaxhighlight lang="c++">void Entity_SetCastShadows(const tString &in asEntityName,
                           bool abCast)</syntaxhighlight>
{{CodeDocDetailBody|Sets whether the entity casts shadows.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abCast|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetCollide}}
<syntaxhighlight lang="c++">void Entity_SetCollide(const tString &in asEntityName,
                       bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|Turn off or on collision for all the bodies in the given entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetCollideCharacter}}
<syntaxhighlight lang="c++">void Entity_SetCollideCharacter(const tString &in asEntityName,
                                bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|Turn off or on character collision for all the bodies in the given entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetColorMul}}
<syntaxhighlight lang="c++">void Entity_SetColorMul(const tString &in asEntityName,
                        const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|Set the color mul of the entity}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetConnectionStateChangeCallback}}
<syntaxhighlight lang="c++">void Entity_SetConnectionStateChangeCallback(const tString &in asEntityName,
                                             const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|Sets the callback for when the connection state changes on an entity<br/>@callback callback syntax, FunctionName(string &in asEntityName, int alState).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetEffectBaseColor}}
<syntaxhighlight lang="c++">void Entity_SetEffectBaseColor(const tString &in asEntityName,
                               const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|Sets the base color of the effects}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetEffectsActive}}
<syntaxhighlight lang="c++">void Entity_SetEffectsActive(const tString &in asEntityName,
                             bool abActive,
                             bool abFadeAndPlaySounds)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates the effects on a entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailParam|abFadeAndPlaySounds|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetEffectsActiveExt}}
<syntaxhighlight lang="c++">void Entity_SetEffectsActiveExt(const tString &in asEntityName,
                                bool abActive,
                                bool abFadeAndPlaySounds,
                                float afEffectsOnTime,
                                float afEffectsOffTime)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates the effects on a entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailParam|abFadeAndPlaySounds|bool|}}
{{CodeDocDetailParam|afEffectsOnTime|float|}}
{{CodeDocDetailParam|afEffectsOffTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetInteractionDisabled}}
<syntaxhighlight lang="c++">void Entity_SetInteractionDisabled(const tString &in asEntityName,
                                   bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the player can interact with an entity or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetIsOccluder}}
<syntaxhighlight lang="c++">void Entity_SetIsOccluder(const tString &in asName,
                          bool abOccluder)</syntaxhighlight>
{{CodeDocDetailBody|Set if entity is an occluder}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abOccluder|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetMaxInteractionDistance}}
<syntaxhighlight lang="c++">void Entity_SetMaxInteractionDistance(const tString &in asEntityName,
                                      float afDistance)</syntaxhighlight>
{{CodeDocDetailBody|Change the max interaction distance of an entity from the default/entity configured distance.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afDistance|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetPlayerInteractCallback}}
<syntaxhighlight lang="c++">void Entity_SetPlayerInteractCallback(const tString &in asEntityName,
                                      const tString &in asCallback,
                                      bool abRemoveWhenInteracted)</syntaxhighlight>
{{CodeDocDetailBody|Sets the callback for when the player interacts with a specific entity.<br/>@callback callback syntax, FunctionName(string &in asEntityName).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenInteracted|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetPlayerLookAtCallback}}
<syntaxhighlight lang="c++">void Entity_SetPlayerLookAtCallback(const tString &in asEntityName,
                                    const tString &in asCallback,
                                    bool abRemoveWhenLookedAt = true,
                                    bool abCheckCenterOfScreen = true,
                                    bool abCheckRayIntersection = true,
                                    float afMaxDistance = -1,
                                    float afCallbackDelay = 0)</syntaxhighlight>
{{CodeDocDetailBody|Sets the callback for when the player looks at or turns away from a specific entity.<br/>@callback callback syntax, void FunctionName(const tString &in asEntityName, int alState). alState is 1 if the player looks at the entity and -1 if the player stops looking.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenLookedAt|bool|}}
{{CodeDocDetailParam|abCheckCenterOfScreen|bool|}}
{{CodeDocDetailParam|abCheckRayIntersection|bool|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afCallbackDelay|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetProcAnimationPaused}}
<syntaxhighlight lang="c++">void Entity_SetProcAnimationPaused(const tString &in asEntityName,
                                   const tString &in asAnimationName,
                                   bool abPaused = true)</syntaxhighlight>
{{CodeDocDetailBody|Pause or unpause a procedural animation on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetProcAnimationSpeed}}
<syntaxhighlight lang="c++">void Entity_SetProcAnimationSpeed(const tString &in asEntityName,
                                  const tString &in asAnimationName,
                                  float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|Sets the speed of a proc animation.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetReflectionVisibility}}
<syntaxhighlight lang="c++">void Entity_SetReflectionVisibility(const tString &in asEntityName,
                                    bool abVisibleInReflection,
                                    bool abVisibleInWorld)</syntaxhighlight>
{{CodeDocDetailBody|Sets whether the entity is drawn in reflections or not, and the real world or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVisibleInReflection|bool|}}
{{CodeDocDetailParam|abVisibleInWorld|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarBool}}
<syntaxhighlight lang="c++">void Entity_SetVarBool(const tString &in asEntityName,
                       const tString &in asVarName,
                       bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarColor}}
<syntaxhighlight lang="c++">void Entity_SetVarColor(const tString &in asEntityName,
                        const tString &in asVarName,
                        const cColor &in aX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aX|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarFloat}}
<syntaxhighlight lang="c++">void Entity_SetVarFloat(const tString &in asEntityName,
                        const tString &in asVarName,
                        float afX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarInt}}
<syntaxhighlight lang="c++">void Entity_SetVarInt(const tString &in asEntityName,
                      const tString &in asVarName,
                      int alX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarString}}
<syntaxhighlight lang="c++">void Entity_SetVarString(const tString &in asEntityName,
                         const tString &in asVarName,
                         const tString &in asX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asX|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarVector2f}}
<syntaxhighlight lang="c++">void Entity_SetVarVector2f(const tString &in asEntityName,
                           const tString &in asVarName,
                           const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_SetVarVector3f}}
<syntaxhighlight lang="c++">void Entity_SetVarVector3f(const tString &in asEntityName,
                           const tString &in asVarName,
                           const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the value of an entity variable. Wildcard(s) * are supported for EntityName.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_Sleep}}
<syntaxhighlight lang="c++">void Entity_Sleep(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Forces the entity to sleep (disabling Update/PostUpdate). Has no effect if it is already sleeping}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_StopAnimation}}
<syntaxhighlight lang="c++">void Entity_StopAnimation(const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|Stops any currently playing animation on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_StopProcAnimation}}
<syntaxhighlight lang="c++">void Entity_StopProcAnimation(const tString &in asEntityName,
                              const tString &in asAnimation,
                              float afFadeTime = 0.1f)</syntaxhighlight>
{{CodeDocDetailBody|Stops a procedural animation on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimation|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_StopSpecificAnimation}}
<syntaxhighlight lang="c++">void Entity_StopSpecificAnimation(const tString &in asEntityName,
                                  const tString &in asAnimationName)</syntaxhighlight>
{{CodeDocDetailBody|Stop a specific animation currently playing on the specified entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asAnimationName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Entity_WakeUp}}
<syntaxhighlight lang="c++">void Entity_WakeUp(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Forces the entity to wake up (enabling Update/PostUpdate). Has no effect if it is already awake}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}