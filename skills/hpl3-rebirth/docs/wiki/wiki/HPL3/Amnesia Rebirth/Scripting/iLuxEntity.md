{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iLuxEntity has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddCollideCallback|AddCollideCallback]]([[../iLuxEntity|iLuxEntity@]] apEntity, const [[../tString|tString]] &in asCallbackFunc, bool abAddedFromScript <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#AddConnection|AddConnection]](const [[../tString|tString]] &in asName, [[../iLuxEntity|iLuxEntity@]] apEntity, bool abInvertStateSent, int alStatesUsed)|}}
{{CodeDocSummaryItem|void|[[#AppendAnimation|AppendAnimation]](const [[../tString|tString]] &in asName, bool abLoop)|}}
{{CodeDocSummaryItem|void|[[#AttachToEntity|AttachToEntity]]([[../iLuxEntity|iLuxEntity@]] apEntity, [[../iPhysicsBody|iPhysicsBody@]] apTargetBody, bool abUseRotation, bool abSnapToParent, bool abLocked <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#AttachToSocket|AttachToSocket]]([[../iLuxEntity|iLuxEntity@]] apEntity, const [[../tString|tString]] &in asSocket, bool abUseRotation, bool abSnapToParent, bool abLocked <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#BroadcastMessage|BroadcastMessage]](int alMessageId, [[../iLuxEntityComponent|iLuxEntityComponent@]] apSource, const [[../cVector3f|cVector3f]] &in avData, int alData)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#CalculateRootMotion|CalculateRootMotion]]()|}}
{{CodeDocSummaryItem|bool|[[#CanInteract|CanInteract]](int alType, [[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#ChangeConnectionState|ChangeConnectionState]](int alState)|}}
{{CodeDocSummaryItem|bool|[[#CheckBodyCollision|CheckBodyCollision]]([[../iPhysicsBody|iPhysicsBody@]] apBody, [[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|bool|[[#CheckCharacterCollision|CheckCharacterCollision]]([[../iCharacterBody|iCharacterBody@]] apBody, [[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|bool|[[#CheckEntityCollision|CheckEntityCollision]]([[../iLuxEntity|iLuxEntity@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#CheckIsOnScreen|CheckIsOnScreen]](bool abUseRayCast)|}}
{{CodeDocSummaryItem|bool|[[#CheckShapeCollision|CheckShapeCollision]]([[../iCollideShape|iCollideShape@]] apShape, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, [[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|bool|[[#CollidesWithPlayer|CollidesWithPlayer]]()|}}
{{CodeDocSummaryItem|[[../cParticleSystem|cParticleSystem]]|[[#CreateParticleSystem|CreateParticleSystem]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asFile, bool abRemoveWhenDone, bool abAttach)|}}
{{CodeDocSummaryItem|[[../cParticleSystem|cParticleSystem]]|[[#CreateParticleSystemOnBone|CreateParticleSystemOnBone]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asFile, const [[../tString|tString]] &in asBoneName, bool abRemoveWhenDone, bool abAttach)|}}
{{CodeDocSummaryItem|void|[[#DrawProjDebugText|DrawProjDebugText]](const [[../tString|tString]] &in asText, float afFontSize <nowiki>=</nowiki> 16.0f, bool abProjectSize <nowiki>=</nowiki> false, [[../eFontAlign|eFontAlign]] aAlignment <nowiki>=</nowiki> eFontAlign_Left, const [[../cColor|cColor]] &in aColor <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cVector3f|cVector3f]] &in avOffset <nowiki>=</nowiki> cVector3f, [[../|../]] 0, float afMaxDistance <nowiki>=</nowiki> 20)|}}
{{CodeDocSummaryItem|void|[[#FadeEffectBaseColor|FadeEffectBaseColor]](const [[../cColor|cColor]] &in aDestColor, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeMeshScaleMul|FadeMeshScaleMul]](const [[../cVector3f|cVector3f]] &in avDestScale, float afTime, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear)|}}
{{CodeDocSummaryItem|void|[[#Fader_ClearAll|Fader_ClearAll]]()|}}
{{CodeDocSummaryItem|void|[[#Fader_FadeTo|Fader_FadeTo]](uint alID, float afGoal, float afTime, bool abReverseAtEnd <nowiki>=</nowiki> false, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_FadeTo|Fader_FadeTo]](const [[../tString|tString]] &in asName, float afGoal, float afTime, bool abReverseAtEnd <nowiki>=</nowiki> false, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Fader_GetValue|Fader_GetValue]](uint alID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Fader_GetValue|Fader_GetValue]](const [[../tString|tString]] &in asName, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_Set|Fader_Set]](uint alID, float afX, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_Set|Fader_Set]](const [[../tString|tString]] &in asName, float afX, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_SetPaused|Fader_SetPaused]](uint alID, bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#Fader_SetPaused|Fader_SetPaused]](const [[../tString|tString]] &in asName, bool abPaused)|}}
{{CodeDocSummaryItem|bool|[[#GetAnimationIsPlaying|GetAnimationIsPlaying]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetAttachEntity|GetAttachEntity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetAutoSleep|GetAutoSleep]]()|}}
{{CodeDocSummaryItem|[[../cMaterial|cMaterial]]|[[#GetBaseMaterial|GetBaseMaterial]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetBaseMatrix|GetBaseMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetBasePosition|GetBasePosition]]()|}}
{{CodeDocSummaryItem|[[../cBillboard|cBillboard]]|[[#GetBillboardFromName|GetBillboardFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetBody|GetBody]](int alIdx)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetBodyFromID|GetBodyFromID]](int alID)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetBodyFromName|GetBodyFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBodyIndexFromName|GetBodyIndexFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBodyNum|GetBodyNum]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetClassName|GetClassName]]()|}}
{{CodeDocSummaryItem|void|[[#GetClosestBody|GetClosestBody]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, int alUserValue <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#GetClosestCharCollideBody|GetClosestCharCollideBody]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, int alUserValue <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#GetClosestCharCollider|GetClosestCharCollider]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, bool abCheckDynamic)|}}
{{CodeDocSummaryItem|void|[[#GetClosestEntity|GetClosestEntity]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, int alInteractType, bool abCheckLineOfSight)|}}
{{CodeDocSummaryItem|[[../iLuxEntityComponent|iLuxEntityComponent]]|[[#GetComponentByType|GetComponentByType]]([[../eLuxEntityComponentType|eLuxEntityComponentType]] aType)|}}
{{CodeDocSummaryItem|int|[[#GetCurrentAnimationIndex|GetCurrentAnimationIndex]]()|}}
{{CodeDocSummaryItem|[[../cAnimationState|cAnimationState]]|[[#GetCurrentAnimationState|GetCurrentAnimationState]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetEffectBaseColor|GetEffectBaseColor]]()|}}
{{CodeDocSummaryItem|bool|[[#GetEffectsActive|GetEffectsActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetEffectsAlpha|GetEffectsAlpha]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetEffectsOffSound|GetEffectsOffSound]]()|}}
{{CodeDocSummaryItem|float|[[#GetEffectsOffTime|GetEffectsOffTime]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetEffectsOnSound|GetEffectsOnSound]]()|}}
{{CodeDocSummaryItem|float|[[#GetEffectsOnTime|GetEffectsOnTime]]()|}}
{{CodeDocSummaryItem|[[../eLuxEntityType|eLuxEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetEventInstanceTag|GetEventInstanceTag]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetEventTag|GetEventTag]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFileName|GetFileName]]()|}}
{{CodeDocSummaryItem|bool|[[#GetForceLookAtCheck|GetForceLookAtCheck]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIgnoreDynamicAvoidance|GetIgnoreDynamicAvoidance]]()|}}
{{CodeDocSummaryItem|int|[[#GetInteractIconId|GetInteractIconId]](int alType, [[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|bool|[[#GetInteractionDisabled|GetInteractionDisabled]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIsClosedDoor|GetIsClosedDoor]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIsDoor|GetIsDoor]]()|}}
{{CodeDocSummaryItem|bool|[[#GetLastCreatedSoundIsPlaying|GetLastCreatedSoundIsPlaying]]()|}}
{{CodeDocSummaryItem|[[../cLensFlare|cLensFlare]]|[[#GetLensFlareFromName|GetLensFlareFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iLight|iLight]]|[[#GetLightFromName|GetLightFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#GetLightLevelAtPos|GetLightLevelAtPos]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avPos, [[../iLight|iLight@]] apSkipLight, float afRadiusAdd)|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetMainBody|GetMainBody]]()|}}
{{CodeDocSummaryItem|[[../cLuxMap|cLuxMap]]|[[#GetMap|GetMap]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetMatrix|GetMatrix]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxInteractDistance|GetMaxInteractDistance]]()|}}
{{CodeDocSummaryItem|[[../cMeshEntity|cMeshEntity]]|[[#GetMeshEntity|GetMeshEntity]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMeshScaleMul|GetMeshScaleMul]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetOnLoadOffsetTransform|GetOnLoadOffsetTransform]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetOnLoadScale|GetOnLoadScale]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetOnLoadTransform|GetOnLoadTransform]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetParentId|GetParentId]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetParentName|GetParentName]]()|}}
{{CodeDocSummaryItem|int|[[#GetParentType|GetParentType]]()|}}
{{CodeDocSummaryItem|[[../cParticleSystem|cParticleSystem]]|[[#GetParticleSystemFromName|GetParticleSystemFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#GetReturnBool|GetReturnBool]]()|}}
{{CodeDocSummaryItem|float|[[#GetReturnFloat|GetReturnFloat]]()|}}
{{CodeDocSummaryItem|int|[[#GetReturnInt|GetReturnInt]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetReturnString|GetReturnString]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSaveDataIsUpdated|GetSaveDataIsUpdated]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|[[../cSoundEntity|cSoundEntity]]|[[#GetSoundEntityFromName|GetSoundEntityFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetVarBool|GetVarBool]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetVarColor|GetVarColor]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|float|[[#GetVarFloat|GetVarFloat]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|float|[[#GetVariableUpdateRate|GetVariableUpdateRate]]()|}}
{{CodeDocSummaryItem|int|[[#GetVarInt|GetVarInt]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetVarString|GetVarString]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetVarVector2f|GetVarVector2f]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVarVector3f|GetVarVector3f]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetVoiceAttachNode|GetVoiceAttachNode]]()|}}
{{CodeDocSummaryItem|bool|[[#GiveDamage|GiveDamage]]([[../iPhysicsBody|iPhysicsBody@]] apBody, const [[../cVector3f|cVector3f]] &in avOrigin, const [[../cVector3f|cVector3f]] &in avHitPos, [[../cLuxDamageProperties|cLuxDamageProperties@]] apDamageProps)|}}
{{CodeDocSummaryItem|bool|[[#HasCollideCallbacks|HasCollideCallbacks]]()|}}
{{CodeDocSummaryItem|bool|[[#HasPlayerInteractCallback|HasPlayerInteractCallback]]()|}}
{{CodeDocSummaryItem|bool|[[#HasPlayerInteractLeaveCallback|HasPlayerInteractLeaveCallback]]()|}}
{{CodeDocSummaryItem|bool|[[#HasPlayerLookAtCallback|HasPlayerLookAtCallback]]()|}}
{{CodeDocSummaryItem|void|[[#IncVarFloat|IncVarFloat]](const [[../tString|tString]] &in asName, float afX)|}}
{{CodeDocSummaryItem|void|[[#IncVarInt|IncVarInt]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|void|[[#IncVarVector2f|IncVarVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#IncVarVector3f|IncVarVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsEffectsFading|IsEffectsFading]]()|}}
{{CodeDocSummaryItem|bool|[[#IsInteractedWith|IsInteractedWith]]()|}}
{{CodeDocSummaryItem|bool|[[#IsLookedAtByPlayer|IsLookedAtByPlayer]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOccluder|IsOccluder]]()|}}
{{CodeDocSummaryItem|bool|[[#IsSleeping|IsSleeping]]()|}}
{{CodeDocSummaryItem|bool|[[#OnInteract|OnInteract]](int alType, [[../iPhysicsBody|iPhysicsBody@]] apBody, const [[../cVector3f|cVector3f]] &in avFocusPos, const [[../tString|tString]] &in asData)|}}
{{CodeDocSummaryItem|int|[[#PlayAnimation|PlayAnimation]](const [[../tString|tString]] &in asName, float afFadeTime <nowiki>=</nowiki> 0.3f, bool abLoop <nowiki>=</nowiki> false, bool abPlayTransition <nowiki>=</nowiki> true, const [[../tString|tString]] &in asCallback <nowiki>=</nowiki> "", bool abGlobalSpace <nowiki>=</nowiki> false, bool abApplyBoneRootMotion <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|[[../cSoundEntity|cSoundEntity]]|[[#PlaySound|PlaySound]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asFile, bool abRemoveWhenDone, bool abAttach, float afCustomMinDist <nowiki>=</nowiki> -1, float afCustomMaxDist <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#PreloadEntityModel|PreloadEntityModel]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#RemoveAllConnections|RemoveAllConnections]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveCollideCallback|RemoveCollideCallback]](const [[../tString|tString]] &in asEntityName)|}}
{{CodeDocSummaryItem|void|[[#RemoveConnection|RemoveConnection]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#RemoveEntityAttachment|RemoveEntityAttachment]]()|}}
{{CodeDocSummaryItem|void|[[#RunPlayerInteractLeaveCallback|RunPlayerInteractLeaveCallback]]()|}}
{{CodeDocSummaryItem|bool|[[#ScriptExecute|ScriptExecute]]()|}}
{{CodeDocSummaryItem|bool|[[#ScriptMethodExists|ScriptMethodExists]](const [[../tString|tString]] &in asMethod)|}}
{{CodeDocSummaryItem|bool|[[#ScriptMethodExistsFast|ScriptMethodExistsFast]](const [[../tString|tString]] &in asMethod, int alId)|}}
{{CodeDocSummaryItem|bool|[[#ScriptPrepare|ScriptPrepare]](const [[../tString|tString]] &in asMethod)|}}
{{CodeDocSummaryItem|bool|[[#ScriptPrepareFast|ScriptPrepareFast]](const [[../tString|tString]] &in asMethod, int alId)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetAnimationCallbackActive|SetAnimationCallbackActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetAnimationMessageEventCallback|SetAnimationMessageEventCallback]](const [[../tString|tString]] &in asFunc, bool abAutoRemove)|}}
{{CodeDocSummaryItem|void|[[#SetArgBool|SetArgBool]](int alArgNum, bool abVal)|}}
{{CodeDocSummaryItem|void|[[#SetArgFloat|SetArgFloat]](int alArg, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetArgInt|SetArgInt]](int alArg, int alX)|}}
{{CodeDocSummaryItem|void|[[#SetArgString|SetArgString]](int alArg, const [[../tString|tString]] &in asStr)|}}
{{CodeDocSummaryItem|void|[[#SetAutoSleep|SetAutoSleep]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetConnectionStateChangeCallback|SetConnectionStateChangeCallback]](const [[../tString|tString]] &in asCallbackFunc)|}}
{{CodeDocSummaryItem|void|[[#SetCurrentAnimationPaused|SetCurrentAnimationPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCustomEffectsOffAlpha|SetCustomEffectsOffAlpha]](float afAlpha)|}}
{{CodeDocSummaryItem|void|[[#SetEffectBaseColor|SetEffectBaseColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetEffectsActive|SetEffectsActive]](bool abActive, bool abFadeAndPlaySounds)|}}
{{CodeDocSummaryItem|void|[[#SetEffectsOffTime|SetEffectsOffTime]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#SetEffectsOnTime|SetEffectsOnTime]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#SetEventInstanceTag|SetEventInstanceTag]](const [[../tString|tString]] &in asTag)|}}
{{CodeDocSummaryItem|void|[[#SetForceLookAtCheck|SetForceLookAtCheck]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFullGameSave|SetFullGameSave]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIgnoreDynamicAvoidance|SetIgnoreDynamicAvoidance]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIlluminationBaseColor|SetIlluminationBaseColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetInteractionDisabled|SetInteractionDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIsClosedDoor|SetIsClosedDoor]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIsDoor|SetIsDoor]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIsInteractedWith|SetIsInteractedWith]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIsOccluder|SetIsOccluder]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLookAtCheckCenterOfScreen|SetLookAtCheckCenterOfScreen]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLookAtCheckRayIntersection|SetLookAtCheckRayIntersection]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLookAtMaxDistance|SetLookAtMaxDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetMaxInteractDistance|SetMaxInteractDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMeshScaleMul|SetMeshScaleMul]](const [[../cVector3f|cVector3f]] &in avScale)|}}
{{CodeDocSummaryItem|void|[[#SetNormalizeAnimationWeights|SetNormalizeAnimationWeights]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPlayerInteractCallback|SetPlayerInteractCallback]](const [[../tString|tString]] &in asCallbackFunc, bool abRemoveWhenInteracted)|}}
{{CodeDocSummaryItem|void|[[#SetPlayerInteractLeaveCallback|SetPlayerInteractLeaveCallback]](const [[../tString|tString]] &in asCallbackFunc, bool abRemoveWhenInteracted)|}}
{{CodeDocSummaryItem|void|[[#SetPlayerLookAtCallback|SetPlayerLookAtCallback]](const [[../tString|tString]] &in asCallbackFunc, bool abRemoveWhenLookedAt, bool abCheckCenterOfScreen, bool abCheckRayIntersection, float afMaxDistance, float afCallbackDelay)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetRecieveMessageCallback|SetRecieveMessageCallback]](const [[../tString|tString]] &in asCallbackFunc)|}}
{{CodeDocSummaryItem|void|[[#SetSaveDataIsUpdated|SetSaveDataIsUpdated]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetupParent|SetupParent]](int alTypeId, [[../tID|tID]] alId, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetupRootBoneMotion|SetupRootBoneMotion]](const [[../tString|tString]] &in asAnimName, bool abApplyMotionToEntity, bool abApplyMotionToBone)|}}
{{CodeDocSummaryItem|void|[[#SetVarBool|SetVarBool]](const [[../tString|tString]] &in asName, bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVarColor|SetVarColor]](const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aX)|}}
{{CodeDocSummaryItem|void|[[#SetVarFloat|SetVarFloat]](const [[../tString|tString]] &in asName, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVariableUpdateRate|SetVariableUpdateRate]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVarInt|SetVarInt]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|void|[[#SetVarString|SetVarString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asX)|}}
{{CodeDocSummaryItem|void|[[#SetVarVector2f|SetVarVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetVarVector3f|SetVarVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#Sleep|Sleep]]()|}}
{{CodeDocSummaryItem|void|[[#StopAllAnimations|StopAllAnimations]](float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#StopAnimation|StopAnimation]](const [[../tString|tString]] &in asName, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#StopAnimation|StopAnimation]](int alIdx, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#StopEffectBaseColorFade|StopEffectBaseColorFade]]()|}}
{{CodeDocSummaryItem|void|[[#Timer_Add|Timer_Add]](uint64 alID, float afTime, const [[../tString|tString]] &in asFunc <nowiki>=</nowiki> "", bool abCreateIfExist <nowiki>=</nowiki> true, bool abRepeat <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_Add|Timer_Add]](const [[../tString|tString]] &in asID, float afTime, const [[../tString|tString]] &in asFunc <nowiki>=</nowiki> "", bool abCreateIfExist <nowiki>=</nowiki> true, bool abRepeat <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_ClearAll|Timer_ClearAll]]()|}}
{{CodeDocSummaryItem|bool|[[#Timer_Exists|Timer_Exists]](uint64 alID)|}}
{{CodeDocSummaryItem|bool|[[#Timer_Exists|Timer_Exists]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetTimeLeft|Timer_GetTimeLeft]](uint64 alID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetTimeLeft|Timer_GetTimeLeft]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetValue|Timer_GetValue]](uint64 alID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetValue|Timer_GetValue]](const [[../tString|tString]] &in asID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_Remove|Timer_Remove]](uint64 alID)|}}
{{CodeDocSummaryItem|void|[[#Timer_Remove|Timer_Remove]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|void|[[#Timer_SetPaused|Timer_SetPaused]](uint64 alID, bool abX)|}}
{{CodeDocSummaryItem|void|[[#Timer_SetPaused|Timer_SetPaused]](const [[../tString|tString]] &in asID, bool abX)|}}
{{CodeDocSummaryItem|bool|[[#Timer_TimeHasPassed|Timer_TimeHasPassed]](uint64 alID, float afLength)|}}
{{CodeDocSummaryItem|bool|[[#Timer_TimeHasPassed|Timer_TimeHasPassed]](const [[../tString|tString]] &in asID, float afLength)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#UpdateEntityAttachment|UpdateEntityAttachment]]()|}}
{{CodeDocSummaryItem|void|[[#VariableUpdate|VariableUpdate]](float afDeltaTime)|}}
{{CodeDocSummaryItem|void|[[#WakeUp|WakeUp]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddCollideCallback}}
<syntaxhighlight lang="c++">void AddCollideCallback(iLuxEntity@ apEntity,
                        const tString &in asCallbackFunc,
                        bool abAddedFromScript = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAddedFromScript|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddConnection}}
<syntaxhighlight lang="c++">void AddConnection(const tString &in asName,
                   iLuxEntity@ apEntity,
                   bool abInvertStateSent,
                   int alStatesUsed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|abInvertStateSent|bool|}}
{{CodeDocDetailParam|alStatesUsed|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AppendAnimation}}
<syntaxhighlight lang="c++">void AppendAnimation(const tString &in asName,
                     bool abLoop)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachToEntity}}
<syntaxhighlight lang="c++">void AttachToEntity(iLuxEntity@ apEntity,
                    iPhysicsBody@ apTargetBody,
                    bool abUseRotation,
                    bool abSnapToParent,
                    bool abLocked = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|apTargetBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|abUseRotation|bool|}}
{{CodeDocDetailParam|abSnapToParent|bool|}}
{{CodeDocDetailParam|abLocked|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachToSocket}}
<syntaxhighlight lang="c++">void AttachToSocket(iLuxEntity@ apEntity,
                    const tString &in asSocket,
                    bool abUseRotation,
                    bool abSnapToParent,
                    bool abLocked = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|asSocket|[[../tString|tString]]|}}
{{CodeDocDetailParam|abUseRotation|bool|}}
{{CodeDocDetailParam|abSnapToParent|bool|}}
{{CodeDocDetailParam|abLocked|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|BroadcastMessage}}
<syntaxhighlight lang="c++">void BroadcastMessage(int alMessageId,
                      iLuxEntityComponent@ apSource,
                      const cVector3f &in avData,
                      int alData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMessageId|int|}}
{{CodeDocDetailParam|apSource|[[../iLuxEntityComponent|iLuxEntityComponent@]]|}}
{{CodeDocDetailParam|avData|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|alData|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CalculateRootMotion}}
<syntaxhighlight lang="c++">cVector3f CalculateRootMotion()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CanInteract}}
<syntaxhighlight lang="c++">bool CanInteract(int alType,
                 iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeConnectionState}}
<syntaxhighlight lang="c++">void ChangeConnectionState(int alState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alState|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckBodyCollision}}
<syntaxhighlight lang="c++">bool CheckBodyCollision(iPhysicsBody@ apBody,
                        cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckCharacterCollision}}
<syntaxhighlight lang="c++">bool CheckCharacterCollision(iCharacterBody@ apBody,
                             cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckEntityCollision}}
<syntaxhighlight lang="c++">bool CheckEntityCollision(iLuxEntity@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckIsOnScreen}}
<syntaxhighlight lang="c++">bool CheckIsOnScreen(bool abUseRayCast)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abUseRayCast|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckShapeCollision}}
<syntaxhighlight lang="c++">bool CheckShapeCollision(iCollideShape@ apShape,
                         const cMatrixf &in a_mtxTransform,
                         cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apShape|[[../iCollideShape|iCollideShape@]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollidesWithPlayer}}
<syntaxhighlight lang="c++">bool CollidesWithPlayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateParticleSystem}}
<syntaxhighlight lang="c++">cParticleSystem@ CreateParticleSystem(const tString &in asName,
                                      const tString &in asFile,
                                      bool abRemoveWhenDone,
                                      bool abAttach)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenDone|bool|}}
{{CodeDocDetailParam|abAttach|bool|}}
{{CodeDocDetailReturn|cParticleSystem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateParticleSystemOnBone}}
<syntaxhighlight lang="c++">cParticleSystem@ CreateParticleSystemOnBone(const tString &in asName,
                                            const tString &in asFile,
                                            const tString &in asBoneName,
                                            bool abRemoveWhenDone,
                                            bool abAttach)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asBoneName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenDone|bool|}}
{{CodeDocDetailParam|abAttach|bool|}}
{{CodeDocDetailReturn|cParticleSystem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawProjDebugText}}
<syntaxhighlight lang="c++">void DrawProjDebugText(const tString &in asText,
                       float afFontSize = 16.0f,
                       bool abProjectSize = false,
                       eFontAlign aAlignment = eFontAlign_Left,
                       const cColor &in aColor = cColor,
                        1,
                        1,
                       const cVector3f &in avOffset = cVector3f,
                        0,
                       float afMaxDistance = 20)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tString|tString]]|}}
{{CodeDocDetailParam|afFontSize|float|}}
{{CodeDocDetailParam|abProjectSize|bool|}}
{{CodeDocDetailParam|aAlignment|[[../eFontAlign|eFontAlign]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|0|[[../|../]]|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeEffectBaseColor}}
<syntaxhighlight lang="c++">void FadeEffectBaseColor(const cColor &in aDestColor,
                         float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDestColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeMeshScaleMul}}
<syntaxhighlight lang="c++">void FadeMeshScaleMul(const cVector3f &in avDestScale,
                      float afTime,
                      eEasing aEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avDestScale|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_ClearAll}}
<syntaxhighlight lang="c++">void Fader_ClearAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_FadeTo}}
<syntaxhighlight lang="c++">void Fader_FadeTo(uint alID,
                  float afGoal,
                  float afTime,
                  bool abReverseAtEnd = false,
                  bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afGoal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|abReverseAtEnd|bool|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_FadeTo}}
<syntaxhighlight lang="c++">void Fader_FadeTo(const tString &in asName,
                  float afGoal,
                  float afTime,
                  bool abReverseAtEnd = false,
                  bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afGoal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|abReverseAtEnd|bool|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_GetValue}}
<syntaxhighlight lang="c++">float Fader_GetValue(uint alID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_GetValue}}
<syntaxhighlight lang="c++">float Fader_GetValue(const tString &in asName,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_Set}}
<syntaxhighlight lang="c++">void Fader_Set(uint alID,
               float afX,
               bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_Set}}
<syntaxhighlight lang="c++">void Fader_Set(const tString &in asName,
               float afX,
               bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_SetPaused}}
<syntaxhighlight lang="c++">void Fader_SetPaused(uint alID,
                     bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_SetPaused}}
<syntaxhighlight lang="c++">void Fader_SetPaused(const tString &in asName,
                     bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimationIsPlaying}}
<syntaxhighlight lang="c++">bool GetAnimationIsPlaying()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttachEntity}}
<syntaxhighlight lang="c++">iEntity3D@ GetAttachEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoSleep}}
<syntaxhighlight lang="c++">bool GetAutoSleep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBaseMaterial}}
<syntaxhighlight lang="c++">cMaterial@ GetBaseMaterial()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBaseMatrix}}
<syntaxhighlight lang="c++">cMatrixf GetBaseMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBasePosition}}
<syntaxhighlight lang="c++">cVector3f GetBasePosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBillboardFromName}}
<syntaxhighlight lang="c++">cBillboard@ GetBillboardFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cBillboard@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetBody(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBodyFromID}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetBodyFromID(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBodyFromName}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetBodyFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBodyIndexFromName}}
<syntaxhighlight lang="c++">int GetBodyIndexFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBodyNum}}
<syntaxhighlight lang="c++">int GetBodyNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClassName}}
<syntaxhighlight lang="c++">const tString& GetClassName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClosestBody}}
<syntaxhighlight lang="c++">void GetClosestBody(const tString &in asCallbackFunc,
                    const cVector3f &in avStart,
                    const cVector3f &in avDir,
                    float afRayLength,
                    int alUserValue = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|alUserValue|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClosestCharCollideBody}}
<syntaxhighlight lang="c++">void GetClosestCharCollideBody(const tString &in asCallbackFunc,
                               const cVector3f &in avStart,
                               const cVector3f &in avDir,
                               float afRayLength,
                               int alUserValue = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|alUserValue|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClosestCharCollider}}
<syntaxhighlight lang="c++">void GetClosestCharCollider(const tString &in asCallbackFunc,
                            const cVector3f &in avStart,
                            const cVector3f &in avDir,
                            float afRayLength,
                            bool abCheckDynamic)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|abCheckDynamic|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClosestEntity}}
<syntaxhighlight lang="c++">void GetClosestEntity(const tString &in asCallbackFunc,
                      const cVector3f &in avStart,
                      const cVector3f &in avDir,
                      float afRayLength,
                      int alInteractType,
                      bool abCheckLineOfSight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|alInteractType|int|}}
{{CodeDocDetailParam|abCheckLineOfSight|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetComponentByType}}
<syntaxhighlight lang="c++">iLuxEntityComponent@ GetComponentByType(eLuxEntityComponentType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eLuxEntityComponentType|eLuxEntityComponentType]]|}}
{{CodeDocDetailReturn|iLuxEntityComponent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentAnimationIndex}}
<syntaxhighlight lang="c++">int GetCurrentAnimationIndex()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentAnimationState}}
<syntaxhighlight lang="c++">cAnimationState@ GetCurrentAnimationState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cAnimationState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectBaseColor}}
<syntaxhighlight lang="c++">const cColor& GetEffectBaseColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsActive}}
<syntaxhighlight lang="c++">bool GetEffectsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsAlpha}}
<syntaxhighlight lang="c++">float GetEffectsAlpha()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsOffSound}}
<syntaxhighlight lang="c++">const tString& GetEffectsOffSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsOffTime}}
<syntaxhighlight lang="c++">float GetEffectsOffTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsOnSound}}
<syntaxhighlight lang="c++">const tString& GetEffectsOnSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEffectsOnTime}}
<syntaxhighlight lang="c++">float GetEffectsOnTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityType}}
<syntaxhighlight lang="c++">eLuxEntityType GetEntityType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eLuxEntityType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEventInstanceTag}}
<syntaxhighlight lang="c++">const tString& GetEventInstanceTag()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEventTag}}
<syntaxhighlight lang="c++">const tString& GetEventTag()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFileName}}
<syntaxhighlight lang="c++">const tString& GetFileName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForceLookAtCheck}}
<syntaxhighlight lang="c++">bool GetForceLookAtCheck()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">const tID& GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tID&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIgnoreDynamicAvoidance}}
<syntaxhighlight lang="c++">bool GetIgnoreDynamicAvoidance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInteractIconId}}
<syntaxhighlight lang="c++">int GetInteractIconId(int alType,
                      iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInteractionDisabled}}
<syntaxhighlight lang="c++">bool GetInteractionDisabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsClosedDoor}}
<syntaxhighlight lang="c++">bool GetIsClosedDoor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsDoor}}
<syntaxhighlight lang="c++">bool GetIsDoor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastCreatedSoundIsPlaying}}
<syntaxhighlight lang="c++">bool GetLastCreatedSoundIsPlaying()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLensFlareFromName}}
<syntaxhighlight lang="c++">cLensFlare@ GetLensFlareFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cLensFlare@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLightFromName}}
<syntaxhighlight lang="c++">iLight@ GetLightFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iLight@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLightLevelAtPos}}
<syntaxhighlight lang="c++">void GetLightLevelAtPos(const tString &in asCallbackFunc,
                        const cVector3f &in avPos,
                        iLight@ apSkipLight,
                        float afRadiusAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apSkipLight|[[../iLight|iLight@]]|}}
{{CodeDocDetailParam|afRadiusAdd|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMainBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetMainBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMap}}
<syntaxhighlight lang="c++">cLuxMap@ GetMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMatrix}}
<syntaxhighlight lang="c++">cMatrixf GetMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxInteractDistance}}
<syntaxhighlight lang="c++">float GetMaxInteractDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMeshEntity}}
<syntaxhighlight lang="c++">cMeshEntity@ GetMeshEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMeshScaleMul}}
<syntaxhighlight lang="c++">cVector3f GetMeshScaleMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOnLoadOffsetTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetOnLoadOffsetTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOnLoadScale}}
<syntaxhighlight lang="c++">const cVector3f& GetOnLoadScale()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOnLoadTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetOnLoadTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentId}}
<syntaxhighlight lang="c++">tID GetParentId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentName}}
<syntaxhighlight lang="c++">const tString& GetParentName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentType}}
<syntaxhighlight lang="c++">int GetParentType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParticleSystemFromName}}
<syntaxhighlight lang="c++">cParticleSystem@ GetParticleSystemFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cParticleSystem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">cVector3f GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReturnBool}}
<syntaxhighlight lang="c++">bool GetReturnBool()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReturnFloat}}
<syntaxhighlight lang="c++">float GetReturnFloat()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReturnInt}}
<syntaxhighlight lang="c++">int GetReturnInt()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReturnString}}
<syntaxhighlight lang="c++">tString GetReturnString()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSaveDataIsUpdated}}
<syntaxhighlight lang="c++">bool GetSaveDataIsUpdated()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundEntityFromName}}
<syntaxhighlight lang="c++">cSoundEntity@ GetSoundEntityFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cSoundEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarBool}}
<syntaxhighlight lang="c++">bool GetVarBool(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarColor}}
<syntaxhighlight lang="c++">cColor GetVarColor(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarFloat}}
<syntaxhighlight lang="c++">float GetVarFloat(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVariableUpdateRate}}
<syntaxhighlight lang="c++">float GetVariableUpdateRate()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarInt}}
<syntaxhighlight lang="c++">int GetVarInt(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarString}}
<syntaxhighlight lang="c++">const tString& GetVarString(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarVector2f}}
<syntaxhighlight lang="c++">cVector2f GetVarVector2f(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarVector3f}}
<syntaxhighlight lang="c++">cVector3f GetVarVector3f(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVoiceAttachNode}}
<syntaxhighlight lang="c++">cNode3D@ GetVoiceAttachNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GiveDamage}}
<syntaxhighlight lang="c++">bool GiveDamage(iPhysicsBody@ apBody,
                const cVector3f &in avOrigin,
                const cVector3f &in avHitPos,
                cLuxDamageProperties@ apDamageProps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|avOrigin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avHitPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apDamageProps|[[../cLuxDamageProperties|cLuxDamageProperties@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasCollideCallbacks}}
<syntaxhighlight lang="c++">bool HasCollideCallbacks()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasPlayerInteractCallback}}
<syntaxhighlight lang="c++">bool HasPlayerInteractCallback()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasPlayerInteractLeaveCallback}}
<syntaxhighlight lang="c++">bool HasPlayerInteractLeaveCallback()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasPlayerLookAtCallback}}
<syntaxhighlight lang="c++">bool HasPlayerLookAtCallback()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncVarFloat}}
<syntaxhighlight lang="c++">void IncVarFloat(const tString &in asName,
                 float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncVarInt}}
<syntaxhighlight lang="c++">void IncVarInt(const tString &in asName,
               int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncVarVector2f}}
<syntaxhighlight lang="c++">void IncVarVector2f(const tString &in asName,
                    const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncVarVector3f}}
<syntaxhighlight lang="c++">void IncVarVector3f(const tString &in asName,
                    const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsEffectsFading}}
<syntaxhighlight lang="c++">bool IsEffectsFading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsInteractedWith}}
<syntaxhighlight lang="c++">bool IsInteractedWith()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsLookedAtByPlayer}}
<syntaxhighlight lang="c++">bool IsLookedAtByPlayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOccluder}}
<syntaxhighlight lang="c++">bool IsOccluder()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsSleeping}}
<syntaxhighlight lang="c++">bool IsSleeping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnInteract}}
<syntaxhighlight lang="c++">bool OnInteract(int alType,
                iPhysicsBody@ apBody,
                const cVector3f &in avFocusPos,
                const tString &in asData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|avFocusPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|asData|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayAnimation}}
<syntaxhighlight lang="c++">int PlayAnimation(const tString &in asName,
                  float afFadeTime = 0.3f,
                  bool abLoop = false,
                  bool abPlayTransition = true,
                  const tString &in asCallback = "",
                  bool abGlobalSpace = false,
                  bool abApplyBoneRootMotion = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abPlayTransition|bool|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|abGlobalSpace|bool|}}
{{CodeDocDetailParam|abApplyBoneRootMotion|bool|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlaySound}}
<syntaxhighlight lang="c++">cSoundEntity@ PlaySound(const tString &in asName,
                        const tString &in asFile,
                        bool abRemoveWhenDone,
                        bool abAttach,
                        float afCustomMinDist = -1,
                        float afCustomMaxDist = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenDone|bool|}}
{{CodeDocDetailParam|abAttach|bool|}}
{{CodeDocDetailParam|afCustomMinDist|float|}}
{{CodeDocDetailParam|afCustomMaxDist|float|}}
{{CodeDocDetailReturn|cSoundEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadEntityModel}}
<syntaxhighlight lang="c++">void PreloadEntityModel(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveAllConnections}}
<syntaxhighlight lang="c++">void RemoveAllConnections()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveCollideCallback}}
<syntaxhighlight lang="c++">void RemoveCollideCallback(const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveConnection}}
<syntaxhighlight lang="c++">void RemoveConnection(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveEntityAttachment}}
<syntaxhighlight lang="c++">void RemoveEntityAttachment()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RunPlayerInteractLeaveCallback}}
<syntaxhighlight lang="c++">void RunPlayerInteractLeaveCallback()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ScriptExecute}}
<syntaxhighlight lang="c++">bool ScriptExecute()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ScriptMethodExists}}
<syntaxhighlight lang="c++">bool ScriptMethodExists(const tString &in asMethod)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMethod|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ScriptMethodExistsFast}}
<syntaxhighlight lang="c++">bool ScriptMethodExistsFast(const tString &in asMethod,
                            int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMethod|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ScriptPrepare}}
<syntaxhighlight lang="c++">bool ScriptPrepare(const tString &in asMethod)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMethod|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ScriptPrepareFast}}
<syntaxhighlight lang="c++">bool ScriptPrepareFast(const tString &in asMethod,
                       int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMethod|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAnimationCallbackActive}}
<syntaxhighlight lang="c++">void SetAnimationCallbackActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAnimationMessageEventCallback}}
<syntaxhighlight lang="c++">void SetAnimationMessageEventCallback(const tString &in asFunc,
                                      bool abAutoRemove)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAutoRemove|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgBool}}
<syntaxhighlight lang="c++">void SetArgBool(int alArgNum,
                bool abVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArgNum|int|}}
{{CodeDocDetailParam|abVal|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgFloat}}
<syntaxhighlight lang="c++">void SetArgFloat(int alArg,
                 float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgInt}}
<syntaxhighlight lang="c++">void SetArgInt(int alArg,
               int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgString}}
<syntaxhighlight lang="c++">void SetArgString(int alArg,
                  const tString &in asStr)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|asStr|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutoSleep}}
<syntaxhighlight lang="c++">void SetAutoSleep(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetConnectionStateChangeCallback}}
<syntaxhighlight lang="c++">void SetConnectionStateChangeCallback(const tString &in asCallbackFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCurrentAnimationPaused}}
<syntaxhighlight lang="c++">void SetCurrentAnimationPaused(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomEffectsOffAlpha}}
<syntaxhighlight lang="c++">void SetCustomEffectsOffAlpha(float afAlpha)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEffectBaseColor}}
<syntaxhighlight lang="c++">void SetEffectBaseColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEffectsActive}}
<syntaxhighlight lang="c++">void SetEffectsActive(bool abActive,
                      bool abFadeAndPlaySounds)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailParam|abFadeAndPlaySounds|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEffectsOffTime}}
<syntaxhighlight lang="c++">void SetEffectsOffTime(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEffectsOnTime}}
<syntaxhighlight lang="c++">void SetEffectsOnTime(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEventInstanceTag}}
<syntaxhighlight lang="c++">void SetEventInstanceTag(const tString &in asTag)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asTag|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForceLookAtCheck}}
<syntaxhighlight lang="c++">void SetForceLookAtCheck(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFullGameSave}}
<syntaxhighlight lang="c++">void SetFullGameSave(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIgnoreDynamicAvoidance}}
<syntaxhighlight lang="c++">void SetIgnoreDynamicAvoidance(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIlluminationBaseColor}}
<syntaxhighlight lang="c++">void SetIlluminationBaseColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetInteractionDisabled}}
<syntaxhighlight lang="c++">void SetInteractionDisabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsClosedDoor}}
<syntaxhighlight lang="c++">void SetIsClosedDoor(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsDoor}}
<syntaxhighlight lang="c++">void SetIsDoor(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsInteractedWith}}
<syntaxhighlight lang="c++">void SetIsInteractedWith(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsOccluder}}
<syntaxhighlight lang="c++">void SetIsOccluder(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLookAtCheckCenterOfScreen}}
<syntaxhighlight lang="c++">void SetLookAtCheckCenterOfScreen(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLookAtCheckRayIntersection}}
<syntaxhighlight lang="c++">void SetLookAtCheckRayIntersection(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLookAtMaxDistance}}
<syntaxhighlight lang="c++">void SetLookAtMaxDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxInteractDistance}}
<syntaxhighlight lang="c++">void SetMaxInteractDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMeshScaleMul}}
<syntaxhighlight lang="c++">void SetMeshScaleMul(const cVector3f &in avScale)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avScale|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNormalizeAnimationWeights}}
<syntaxhighlight lang="c++">void SetNormalizeAnimationWeights(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPlayerInteractCallback}}
<syntaxhighlight lang="c++">void SetPlayerInteractCallback(const tString &in asCallbackFunc,
                               bool abRemoveWhenInteracted)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenInteracted|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPlayerInteractLeaveCallback}}
<syntaxhighlight lang="c++">void SetPlayerInteractLeaveCallback(const tString &in asCallbackFunc,
                                    bool abRemoveWhenInteracted)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenInteracted|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPlayerLookAtCallback}}
<syntaxhighlight lang="c++">void SetPlayerLookAtCallback(const tString &in asCallbackFunc,
                             bool abRemoveWhenLookedAt,
                             bool abCheckCenterOfScreen,
                             bool abCheckRayIntersection,
                             float afMaxDistance,
                             float afCallbackDelay)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRemoveWhenLookedAt|bool|}}
{{CodeDocDetailParam|abCheckCenterOfScreen|bool|}}
{{CodeDocDetailParam|abCheckRayIntersection|bool|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afCallbackDelay|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRecieveMessageCallback}}
<syntaxhighlight lang="c++">void SetRecieveMessageCallback(const tString &in asCallbackFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSaveDataIsUpdated}}
<syntaxhighlight lang="c++">void SetSaveDataIsUpdated(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScriptableIsSaved}}
<syntaxhighlight lang="c++">void SetScriptableIsSaved(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupParent}}
<syntaxhighlight lang="c++">void SetupParent(int alTypeId,
                 tID alId,
                 const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alTypeId|int|}}
{{CodeDocDetailParam|alId|[[../tID|tID]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupRootBoneMotion}}
<syntaxhighlight lang="c++">void SetupRootBoneMotion(const tString &in asAnimName,
                         bool abApplyMotionToEntity,
                         bool abApplyMotionToBone)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asAnimName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abApplyMotionToEntity|bool|}}
{{CodeDocDetailParam|abApplyMotionToBone|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarBool}}
<syntaxhighlight lang="c++">void SetVarBool(const tString &in asName,
                bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarColor}}
<syntaxhighlight lang="c++">void SetVarColor(const tString &in asName,
                 const cColor &in aX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aX|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarFloat}}
<syntaxhighlight lang="c++">void SetVarFloat(const tString &in asName,
                 float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVariableUpdateRate}}
<syntaxhighlight lang="c++">void SetVariableUpdateRate(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarInt}}
<syntaxhighlight lang="c++">void SetVarInt(const tString &in asName,
               int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarString}}
<syntaxhighlight lang="c++">void SetVarString(const tString &in asName,
                  const tString &in asX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asX|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarVector2f}}
<syntaxhighlight lang="c++">void SetVarVector2f(const tString &in asName,
                    const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVarVector3f}}
<syntaxhighlight lang="c++">void SetVarVector3f(const tString &in asName,
                    const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Sleep}}
<syntaxhighlight lang="c++">void Sleep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAllAnimations}}
<syntaxhighlight lang="c++">void StopAllAnimations(float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAnimation}}
<syntaxhighlight lang="c++">void StopAnimation(const tString &in asName,
                   float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAnimation}}
<syntaxhighlight lang="c++">void StopAnimation(int alIdx,
                   float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopEffectBaseColorFade}}
<syntaxhighlight lang="c++">void StopEffectBaseColorFade()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Add}}
<syntaxhighlight lang="c++">void Timer_Add(uint64 alID,
               float afTime,
               const tString &in asFunc = "",
               bool abCreateIfExist = true,
               bool abRepeat = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfExist|bool|}}
{{CodeDocDetailParam|abRepeat|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Add}}
<syntaxhighlight lang="c++">void Timer_Add(const tString &in asID,
               float afTime,
               const tString &in asFunc = "",
               bool abCreateIfExist = true,
               bool abRepeat = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfExist|bool|}}
{{CodeDocDetailParam|abRepeat|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_ClearAll}}
<syntaxhighlight lang="c++">void Timer_ClearAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Exists}}
<syntaxhighlight lang="c++">bool Timer_Exists(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Exists}}
<syntaxhighlight lang="c++">bool Timer_Exists(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetTimeLeft}}
<syntaxhighlight lang="c++">float Timer_GetTimeLeft(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetTimeLeft}}
<syntaxhighlight lang="c++">float Timer_GetTimeLeft(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetValue}}
<syntaxhighlight lang="c++">float Timer_GetValue(uint64 alID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetValue}}
<syntaxhighlight lang="c++">float Timer_GetValue(const tString &in asID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Remove}}
<syntaxhighlight lang="c++">void Timer_Remove(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Remove}}
<syntaxhighlight lang="c++">void Timer_Remove(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_SetPaused}}
<syntaxhighlight lang="c++">void Timer_SetPaused(uint64 alID,
                     bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_SetPaused}}
<syntaxhighlight lang="c++">void Timer_SetPaused(const tString &in asID,
                     bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_TimeHasPassed}}
<syntaxhighlight lang="c++">bool Timer_TimeHasPassed(uint64 alID,
                         float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_TimeHasPassed}}
<syntaxhighlight lang="c++">bool Timer_TimeHasPassed(const tString &in asID,
                         float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateEntityAttachment}}
<syntaxhighlight lang="c++">void UpdateEntityAttachment()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|VariableUpdate}}
<syntaxhighlight lang="c++">void VariableUpdate(float afDeltaTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDeltaTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|WakeUp}}
<syntaxhighlight lang="c++">void WakeUp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}