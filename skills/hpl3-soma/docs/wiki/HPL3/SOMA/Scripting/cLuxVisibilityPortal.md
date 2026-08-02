{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxVisibilityPortal has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCollideCallback || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddConnection || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abInvertStateSent</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alStatesUsed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AppendAnimation || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachToEntity || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apTargetBody</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abUseRotation</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSnapToParent</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLocked = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachToSocket || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSocket</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abUseRotation</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSnapToParent</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLocked = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || BroadcastMessage || <syntaxhighlight lang="c++" inline>int alMessageId</syntaxhighlight>,<br />[[../iLuxEntityComponent|<syntaxhighlight lang="c++" inline>iLuxEntityComponent@ apSource</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avData</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alData</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CanInteract || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight>,<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeConnectionState || <syntaxhighlight lang="c++" inline>int alState</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckBodyCollision || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br />[[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckCharacterCollision || [[../iCharacterBody|<syntaxhighlight lang="c++" inline>iCharacterBody@ apBody</syntaxhighlight>]],<br />[[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckEntityCollision || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckIsOnScreen || <syntaxhighlight lang="c++" inline>bool abUseRayCast</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckShapeCollision || [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@ apShape</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf& a_mtxTransform</syntaxhighlight>]],<br />[[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@ apMap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidesWithPlayer ||   ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || CreateParticleSystem || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenDone</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAttach</syntaxhighlight> ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || CreateParticleSystemOnBone || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asBoneName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenDone</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAttach</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawProjDebugText || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFontSize = 16.0f</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abProjectSize = false</syntaxhighlight>,<br />[[../eFontAlign|<syntaxhighlight lang="c++" inline>eFontAlign aAlignment = eFontAlign_Left</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor = cColor</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avOffset = cVector3f</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMaxDistance = 20</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeEffectBaseColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aDestColor</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeMeshScaleMul || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDestScale</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_ClearAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_FadeTo || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afGoal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abReverseAtEnd = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_FadeTo || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afGoal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abReverseAtEnd = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Fader_GetValue || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Fader_GetValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_Set || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_Set || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_SetPaused || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPaused</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_SetPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abPaused</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAnimationIsPlaying ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetAreaBody ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetAttachEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAutoSleep ||   ||
|-
| [[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@</syntaxhighlight>]] || GetBaseMaterial ||   ||
|-
| [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@</syntaxhighlight>]] || GetBillboardFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetBody || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetBodyFromID || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight> ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetBodyFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetBodyIndexFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetBodyNum ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetClassName ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestCharCollider || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckDynamic</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alInteractType</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckLineOfSight</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentAnimationIndex ||   ||
|-
| [[../cAnimationState|<syntaxhighlight lang="c++" inline>cAnimationState@</syntaxhighlight>]] || GetCurrentAnimationState ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetEffectBaseColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEffectsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetEffectsAlpha ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetEffectsOffSound ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetEffectsOffTime ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetEffectsOnSound ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetEffectsOnTime ||   ||
|-
| [[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetEventInstanceTag ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetEventTag ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFileName ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetForceLookAtCheck ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>const tID&</syntaxhighlight>]] || GetID ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetInteractIconId || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight>,<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetInteractionDisabled ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIsClosedDoor ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIsDoor ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetLastCreatedSoundIsPlaying ||   ||
|-
| [[../cLensFlare|<syntaxhighlight lang="c++" inline>cLensFlare@</syntaxhighlight>]] || GetLensFlareFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../iLight|<syntaxhighlight lang="c++" inline>iLight@</syntaxhighlight>]] || GetLightFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetLightLevelAtPos || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../iLight|<syntaxhighlight lang="c++" inline>iLight@ apSkipLight</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadiusAdd</syntaxhighlight> ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetMainBody ||   ||
|-
| [[../cLuxMap|<syntaxhighlight lang="c++" inline>cLuxMap@</syntaxhighlight>]] || GetMap ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || GetMatrix ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxInteractDistance ||   ||
|-
| [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@</syntaxhighlight>]] || GetMeshEntity ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetMeshScaleMul ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetOnLoadScale ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetOnLoadTransform ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetParentId ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetParentName ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetParentType ||   ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || GetParticleSystemFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetReturnBool ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetReturnFloat ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetReturnInt ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetReturnString ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSaveDataIsUpdated ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetScriptableIsSaved ||   ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || GetSoundEntityFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetVarBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetVarColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVariableUpdateRate ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetVarString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetVarVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetVarVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetVoiceAttachNode ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GiveDamage || <syntaxhighlight lang="c++" inline>float afAmount</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alStrength</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSource</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasCollideCallbacks ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasPlayerInteractCallback ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasPlayerLookAtCallback ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncVarVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncVarVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsInteractedWith ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsLookedAtByPlayer ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOccluder ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsSleeping ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveLinearTo || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGoal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afAcc</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxSpeed</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSlowdownDist</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abResetSpeed</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback = ""</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || OnInteract || <syntaxhighlight lang="c++" inline>int alType</syntaxhighlight>,<br />[[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avFocusPos</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || PlayAnimation || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFadeTime = 0.3f</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abLoop = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPlayTransition = true</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abGlobalSpace = false</syntaxhighlight> ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || PlaySound || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenDone</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAttach</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadEntityModel || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveAllConnections ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveCollideCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asEntityName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveConnection || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveEntityAttachment ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ScriptExecute ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ScriptMethodExists || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMethod</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ScriptMethodExistsFast || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMethod</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ScriptPrepare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMethod</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ScriptPrepareFast || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMethod</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAnimationMessageEventCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoRemove</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgBool || <syntaxhighlight lang="c++" inline>int alArgNum</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgFloat || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgInt || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgString || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asStr</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoSleep || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetConnectionStateChangeCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCallbackFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCurrentAnimationPaused || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEffectBaseColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEffectsActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abFadeAndPlaySounds</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEventInstanceTag || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asTag</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForceLookAtCheck || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFullGameSave || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetInteractionDisabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsClosedDoor || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsDoor || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsInteractedWith || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsOccluder || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxInteractDistance || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMeshScaleMul || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avScale</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNormalizeAnimationWeights || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPlayerInteractCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCallbackFunc</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenInteracted</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPlayerLookAtCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCallbackFunc</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenLookedAt</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckCenterOfScreen</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckRayIntersection</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afCallbackDelay</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRecieveMessageCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSaveDataIsUpdated || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupParent || <syntaxhighlight lang="c++" inline>int alTypeId</syntaxhighlight>,<br />[[../tID|<syntaxhighlight lang="c++" inline>tID alId</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVariableUpdateRate || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVarVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Sleep ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAllAnimations || <syntaxhighlight lang="c++" inline>float afFadeTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAnimation || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFadeTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAnimation || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFadeTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopMove ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Add || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfExist = true</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abRepeat = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Add || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfExist = true</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abRepeat = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_ClearAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_Exists || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_Exists || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetTimeLeft || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetTimeLeft || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetValue || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Remove || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Remove || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_SetPaused || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_SetPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_TimeHasPassed || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_TimeHasPassed || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateEntityAttachment ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || VariableUpdate || <syntaxhighlight lang="c++" inline>float afDeltaTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || WakeUp ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__