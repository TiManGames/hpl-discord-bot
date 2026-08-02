{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxMap has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddDissolveEntity || [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@ apMeshEntity</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddEntityComponent || [[../iLuxEntityComponent|<syntaxhighlight lang="c++" inline>iLuxEntityComponent@ apComp</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunction</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || BroadcastSoundHeardEvent || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alPrio</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPhysicsObject = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CheckLineOfSight || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avEnd</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckOnlyShadowCasters</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckOnlyStatic</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avScale</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DestroyEntity || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || EntityExists || [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || EntityWasDestroyed ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestBody || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestCharCollider || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckDynamic</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetClosestEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDir</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRayLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alInteractType</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckLineOfSight</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>uint</syntaxhighlight> || GetCollideFlag || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asGroupName</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetDisplayNameEntry ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElapsedTime || <syntaxhighlight lang="c++" inline>int alTimeStamp</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEntityArray || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType aType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asClassName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEntityArrayID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType aType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asClassName</syntaxhighlight>]] ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntityByID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]],<br />[[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType aType = eLuxEntityType_LastEnum</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asClassName = ""</syntaxhighlight>]] ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntityByName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType aType = eLuxEntityType_LastEnum</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asClassName = ""</syntaxhighlight>]] ||
|-
| [[../iLuxEntityComponent|<syntaxhighlight lang="c++" inline>iLuxEntityComponent@</syntaxhighlight>]] || GetEntityComponent || [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType aType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cLuxEntityComponentIterator|<syntaxhighlight lang="c++" inline>cLuxEntityComponentIterator@</syntaxhighlight>]] || GetEntityComponentIterator || [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType aType</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetEntityIDByName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eLuxEntityType|<syntaxhighlight lang="c++" inline>eLuxEntityType aType = eLuxEntityType_LastEnum</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asClassName = ""</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFileName ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetIsUnderwater ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetLatestEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetLightLevelAtPos || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunc</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../iLight|<syntaxhighlight lang="c++" inline>iLight@ apSkipLight</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadiusAdd</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxInteractDistance ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../iPhysicsWorld|<syntaxhighlight lang="c++" inline>iPhysicsWorld@</syntaxhighlight>]] || GetPhysicsWorld ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetPlayerEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPlayerTerrainCollision ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetReturnBool ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetReturnFloat ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetReturnInt ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetReturnString ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTimersNamed || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asPattern</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimerTime || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimerUserVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTimerUserVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetTimerUserVarString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTimeStamp ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetVoiceSourceEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCharacter</syntaxhighlight>]] ||
|-
| [[../cWorld|<syntaxhighlight lang="c++" inline>cWorld@</syntaxhighlight>]] || GetWorld ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || IncTimerUserVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || IncTimerUserVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDeletingAllWorldEntities ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlacePlayerAtStartPos || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PostUpdate || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadGuiGfx || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br />[[../eImGuiGfx|<syntaxhighlight lang="c++" inline>eImGuiGfx aType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadMaterial || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PreloadParticleSystem || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveEntityComponent || [[../iLuxEntityComponent|<syntaxhighlight lang="c++" inline>iLuxEntityComponent@ apComp</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetLatestEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RestartCurrentTimer || <syntaxhighlight lang="c++" inline>float afNewTime = -1</syntaxhighlight> ||
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
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgBool || <syntaxhighlight lang="c++" inline>int alArgNum</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgFloat || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgInt || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgString || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asStr</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgVector2f || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgVector2l || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l& avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgVector3f || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetArgVector3l || <syntaxhighlight lang="c++" inline>int alArg</syntaxhighlight>,<br />[[../cVector3l|<syntaxhighlight lang="c++" inline>const cVector3l& avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisplayNameEntry || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asEntry</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsUnderwater || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxInteractDistance || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPlayerTerrainCollision || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTimerPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTimerUserVarFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTimerUserVarInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTimerUserVarString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVoiceSource || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCharacter</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asEntityName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abUse3D</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxPlayerListeningRange</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinFreq = 22000</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxFreq = 22000</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint aFrequencyFlag = 0</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || VariableUpdate || <syntaxhighlight lang="c++" inline>float afDeltaTime</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__