{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxMap has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddDissolveEntity|AddDissolveEntity]]([[../cMeshEntity|cMeshEntity@]] apMeshEntity, float afTime, float afAlpha <nowiki>=</nowiki> 1.0f)|}}
{{CodeDocSummaryItem|void|[[#AddEntityComponent|AddEntityComponent]]([[../iLuxEntityComponent|iLuxEntityComponent@]] apComp)|}}
{{CodeDocSummaryItem|void|[[#AddTimer|AddTimer]](const [[../tString|tString]] &in asName, float afTime, const [[../tString|tString]] &in asFunction)|}}
{{CodeDocSummaryItem|void|[[#BroadcastSoundHeardEvent|BroadcastSoundHeardEvent]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avPosition, float afRadius, int alPrio, bool abPhysicsObject <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#CheckLineOfSight|CheckLineOfSight]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd, bool abCheckOnlyShadowCasters, bool abCheckOnlyStatic)|}}
{{CodeDocSummaryItem|bool|[[#CloneProp|CloneProp]](const [[../tString|tString]] &in asPropSource, const [[../tString|tString]] &in asPropDest)|}}
{{CodeDocSummaryItem|bool|[[#CopyPropState|CopyPropState]](const [[../tString|tString]] &in asPropSource, const [[../tString|tString]] &in asPropDest)|}}
{{CodeDocSummaryItem|void|[[#CreateEntity|CreateEntity]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asFile, const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, const [[../cVector3f|cVector3f]] &in avScale)|}}
{{CodeDocSummaryItem|bool|[[#DestroyEntity|DestroyEntity]]([[../iLuxEntity|iLuxEntity@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#EntityExists|EntityExists]]([[../iLuxEntity|iLuxEntity@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#EntityWasDestroyed|EntityWasDestroyed]]()|}}
{{CodeDocSummaryItem|void|[[#GetClosestBody|GetClosestBody]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, int alUserValue <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#GetClosestCharCollideBody|GetClosestCharCollideBody]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength)|}}
{{CodeDocSummaryItem|void|[[#GetClosestCharCollider|GetClosestCharCollider]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, bool abCheckDynamic)|}}
{{CodeDocSummaryItem|void|[[#GetClosestEntity|GetClosestEntity]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avDir, float afRayLength, int alInteractType, bool abCheckLineOfSight)|}}
{{CodeDocSummaryItem|uint|[[#GetCollideFlag|GetCollideFlag]](const [[../tString|tString]] &in asGroupName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetDisplayNameEntry|GetDisplayNameEntry]]()|}}
{{CodeDocSummaryItem|float|[[#GetElapsedTime|GetElapsedTime]](int alTimeStamp)|}}
{{CodeDocSummaryItem|bool|[[#GetEntityArray|GetEntityArray]](const [[../tString|tString]] &in asName, [[../eLuxEntityType|eLuxEntityType]] aType, const [[../tString|tString]] &in asClassName, [[../array|array]]<[[../iLuxEntity|iLuxEntity@]]> avOutEntities)|}}
{{CodeDocSummaryItem|bool|[[#GetEntityArrayID|GetEntityArrayID]](const [[../tString|tString]] &in asName, [[../eLuxEntityType|eLuxEntityType]] aType, const [[../tString|tString]] &in asClassName, [[../array|array]]<[[../tID|tID]]> avOutEntities)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntityByID|GetEntityByID]]([[../tID|tID]] alID, [[../eLuxEntityType|eLuxEntityType]] aType <nowiki>=</nowiki> eLuxEntityType_LastEnum, const [[../tString|tString]] &in asClassName <nowiki>=</nowiki> "")|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntityByName|GetEntityByName]](const [[../tString|tString]] &in asName, [[../eLuxEntityType|eLuxEntityType]] aType <nowiki>=</nowiki> eLuxEntityType_LastEnum, const [[../tString|tString]] &in asClassName <nowiki>=</nowiki> "")|}}
{{CodeDocSummaryItem|[[../iLuxEntityComponent|iLuxEntityComponent]]|[[#GetEntityComponent|GetEntityComponent]](int aType, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cLuxEntityComponentIterator|cLuxEntityComponentIterator]]|[[#GetEntityComponentIterator|GetEntityComponentIterator]](int aType)|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetEntityIDByName|GetEntityIDByName]](const [[../tString|tString]] &in asName, [[../eLuxEntityType|eLuxEntityType]] aType <nowiki>=</nowiki> eLuxEntityType_LastEnum, const [[../tString|tString]] &in asClassName <nowiki>=</nowiki> "")|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFileName|GetFileName]]()|}}
{{CodeDocSummaryItem|[[../cNode3D|cNode3D]]|[[#GetHackNode|GetHackNode]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIsUnderwater|GetIsUnderwater]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetLatestEntity|GetLatestEntity]]()|}}
{{CodeDocSummaryItem|void|[[#GetLightLevelAtPos|GetLightLevelAtPos]](const [[../tString|tString]] &in asCallbackFunc, const [[../cVector3f|cVector3f]] &in avPos, [[../iLight|iLight@]] apSkipLight, float afRadiusAdd)|}}
{{CodeDocSummaryItem|float|[[#GetMaxInteractDistance|GetMaxInteractDistance]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|int|[[#GetNewAttackInstanceID|GetNewAttackInstanceID]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsWorld|iPhysicsWorld]]|[[#GetPhysicsWorld|GetPhysicsWorld]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetPlayerEntity|GetPlayerEntity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPlayerTerrainCollision|GetPlayerTerrainCollision]]()|}}
{{CodeDocSummaryItem|bool|[[#GetReturnBool|GetReturnBool]]()|}}
{{CodeDocSummaryItem|float|[[#GetReturnFloat|GetReturnFloat]]()|}}
{{CodeDocSummaryItem|int|[[#GetReturnInt|GetReturnInt]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetReturnString|GetReturnString]]()|}}
{{CodeDocSummaryItem|bool|[[#GetTimersNamed|GetTimersNamed]](const [[../tString|tString]] &in asPattern, [[../array|array]]<[[../tString|tString]]> avOutNames)|}}
{{CodeDocSummaryItem|float|[[#GetTimerTime|GetTimerTime]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|float|[[#GetTimerUserVarFloat|GetTimerUserVarFloat]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetTimerUserVarInt|GetTimerUserVarInt]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetTimerUserVarString|GetTimerUserVarString]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetTimeStamp|GetTimeStamp]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetVoiceSourceEntity|GetVoiceSourceEntity]](const [[../tString|tString]] &in asCharacter)|}}
{{CodeDocSummaryItem|[[../cWorld|cWorld]]|[[#GetWorld|GetWorld]]()|}}
{{CodeDocSummaryItem|float|[[#IncTimerUserVarFloat|IncTimerUserVarFloat]](const [[../tString|tString]] &in asName, float afX)|}}
{{CodeDocSummaryItem|int|[[#IncTimerUserVarInt|IncTimerUserVarInt]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDeletingAllWorldEntities|IsDeletingAllWorldEntities]]()|}}
{{CodeDocSummaryItem|void|[[#PlacePlayerAtStartPos|PlacePlayerAtStartPos]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#PreloadEntity|PreloadEntity]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#PreloadGuiGfx|PreloadGuiGfx]](const [[../tString|tString]] &in asFile, [[../eImGuiGfx|eImGuiGfx]] aType)|}}
{{CodeDocSummaryItem|void|[[#PreloadMaterial|PreloadMaterial]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#PreloadParticleSystem|PreloadParticleSystem]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#RemoveEntityComponent|RemoveEntityComponent]]([[../iLuxEntityComponent|iLuxEntityComponent@]] apComp)|}}
{{CodeDocSummaryItem|void|[[#RemoveTimer|RemoveTimer]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#ResetLatestEntity|ResetLatestEntity]]()|}}
{{CodeDocSummaryItem|void|[[#RestartCurrentTimer|RestartCurrentTimer]](float afNewTime <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#ScriptExecute|ScriptExecute]]()|}}
{{CodeDocSummaryItem|bool|[[#ScriptMethodExists|ScriptMethodExists]](const [[../tString|tString]] &in asMethod)|}}
{{CodeDocSummaryItem|bool|[[#ScriptMethodExistsFast|ScriptMethodExistsFast]](const [[../tString|tString]] &in asMethod, int alId)|}}
{{CodeDocSummaryItem|bool|[[#ScriptPrepare|ScriptPrepare]](const [[../tString|tString]] &in asMethod)|}}
{{CodeDocSummaryItem|bool|[[#ScriptPrepareFast|ScriptPrepareFast]](const [[../tString|tString]] &in asMethod, int alId)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetArgBool|SetArgBool]](int alArgNum, bool abVal)|}}
{{CodeDocSummaryItem|void|[[#SetArgFloat|SetArgFloat]](int alArg, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetArgInt|SetArgInt]](int alArg, int alX)|}}
{{CodeDocSummaryItem|void|[[#SetArgString|SetArgString]](int alArg, const [[../tString|tString]] &in asStr)|}}
{{CodeDocSummaryItem|void|[[#SetArgVector2f|SetArgVector2f]](int alArg, const [[../cVector2f|cVector2f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetArgVector2l|SetArgVector2l]](int alArg, const [[../cVector2l|cVector2l]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetArgVector3f|SetArgVector3f]](int alArg, const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetArgVector3l|SetArgVector3l]](int alArg, const [[../cVector3l|cVector3l]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetDisplayNameEntry|SetDisplayNameEntry]](const [[../tString|tString]] &in asEntry)|}}
{{CodeDocSummaryItem|void|[[#SetIsUnderwater|SetIsUnderwater]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxInteractDistance|SetMaxInteractDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPlayerTerrainCollision|SetPlayerTerrainCollision]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetTimerPaused|SetTimerPaused]](const [[../tString|tString]] &in asName, bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetTimerUserVarFloat|SetTimerUserVarFloat]](const [[../tString|tString]] &in asName, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTimerUserVarInt|SetTimerUserVarInt]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|void|[[#SetTimerUserVarString|SetTimerUserVarString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asX)|}}
{{CodeDocSummaryItem|void|[[#SetVoiceSource|SetVoiceSource]](const [[../tString|tString]] &in asCharacter, const [[../tString|tString]] &in asEntityName, float afMinDistance, float afMaxDistance, bool abUse3D, float afMaxPlayerListeningRange, float afMinFreq <nowiki>=</nowiki> 22000, float afMaxFreq <nowiki>=</nowiki> 22000, uint aFrequencyFlag <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#VariableUpdate|VariableUpdate]](float afDeltaTime)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddDissolveEntity}}
<syntaxhighlight lang="c++">void AddDissolveEntity(cMeshEntity@ apMeshEntity,
                       float afTime,
                       float afAlpha = 1.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMeshEntity|[[../cMeshEntity|cMeshEntity@]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddEntityComponent}}
<syntaxhighlight lang="c++">void AddEntityComponent(iLuxEntityComponent@ apComp)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apComp|[[../iLuxEntityComponent|iLuxEntityComponent@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTimer}}
<syntaxhighlight lang="c++">void AddTimer(const tString &in asName,
              float afTime,
              const tString &in asFunction)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asFunction|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|BroadcastSoundHeardEvent}}
<syntaxhighlight lang="c++">void BroadcastSoundHeardEvent(const tString &in asName,
                              const cVector3f &in avPosition,
                              float afRadius,
                              int alPrio,
                              bool abPhysicsObject = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|abPhysicsObject|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckLineOfSight}}
<syntaxhighlight lang="c++">void CheckLineOfSight(const tString &in asCallbackFunc,
                      const cVector3f &in avStart,
                      const cVector3f &in avEnd,
                      bool abCheckOnlyShadowCasters,
                      bool abCheckOnlyStatic)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abCheckOnlyShadowCasters|bool|}}
{{CodeDocDetailParam|abCheckOnlyStatic|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CloneProp}}
<syntaxhighlight lang="c++">bool CloneProp(const tString &in asPropSource,
               const tString &in asPropDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropSource|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPropDest|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CopyPropState}}
<syntaxhighlight lang="c++">bool CopyPropState(const tString &in asPropSource,
                   const tString &in asPropDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropSource|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPropDest|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateEntity}}
<syntaxhighlight lang="c++">void CreateEntity(const tString &in asName,
                  const tString &in asFile,
                  const cMatrixf &in a_mtxTransform,
                  const cVector3f &in avScale)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avScale|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyEntity}}
<syntaxhighlight lang="c++">bool DestroyEntity(iLuxEntity@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EntityExists}}
<syntaxhighlight lang="c++">bool EntityExists(iLuxEntity@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EntityWasDestroyed}}
<syntaxhighlight lang="c++">bool EntityWasDestroyed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
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
                               float afRayLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
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

{{CodeDocDetailTop|GetCollideFlag}}
<syntaxhighlight lang="c++">uint GetCollideFlag(const tString &in asGroupName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asGroupName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDisplayNameEntry}}
<syntaxhighlight lang="c++">const tString& GetDisplayNameEntry()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetElapsedTime}}
<syntaxhighlight lang="c++">float GetElapsedTime(int alTimeStamp)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alTimeStamp|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityArray}}
<syntaxhighlight lang="c++">bool GetEntityArray(const tString &in asName,
                    eLuxEntityType aType,
                    const tString &in asClassName,
                    iLuxEntity@ avOutEntities)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../eLuxEntityType|eLuxEntityType]]|}}
{{CodeDocDetailParam|asClassName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutEntities|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityArrayID}}
<syntaxhighlight lang="c++">bool GetEntityArrayID(const tString &in asName,
                      eLuxEntityType aType,
                      const tString &in asClassName,
                      tID avOutEntities)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../eLuxEntityType|eLuxEntityType]]|}}
{{CodeDocDetailParam|asClassName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutEntities|[[../tID|tID]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityByID}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntityByID(tID alID,
                          eLuxEntityType aType = eLuxEntityType_LastEnum,
                          const tString &in asClassName = "")</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|[[../tID|tID]]|}}
{{CodeDocDetailParam|aType|[[../eLuxEntityType|eLuxEntityType]]|}}
{{CodeDocDetailParam|asClassName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityByName}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntityByName(const tString &in asName,
                            eLuxEntityType aType = eLuxEntityType_LastEnum,
                            const tString &in asClassName = "")</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../eLuxEntityType|eLuxEntityType]]|}}
{{CodeDocDetailParam|asClassName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityComponent}}
<syntaxhighlight lang="c++">iLuxEntityComponent@ GetEntityComponent(int aType,
                                        const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|int|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iLuxEntityComponent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityComponentIterator}}
<syntaxhighlight lang="c++">cLuxEntityComponentIterator@ GetEntityComponentIterator(int aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|int|}}
{{CodeDocDetailReturn|cLuxEntityComponentIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityIDByName}}
<syntaxhighlight lang="c++">tID GetEntityIDByName(const tString &in asName,
                      eLuxEntityType aType = eLuxEntityType_LastEnum,
                      const tString &in asClassName = "")</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../eLuxEntityType|eLuxEntityType]]|}}
{{CodeDocDetailParam|asClassName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFileName}}
<syntaxhighlight lang="c++">const tString& GetFileName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHackNode}}
<syntaxhighlight lang="c++">cNode3D@ GetHackNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cNode3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsUnderwater}}
<syntaxhighlight lang="c++">bool GetIsUnderwater()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLatestEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetLatestEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
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

{{CodeDocDetailTop|GetMaxInteractDistance}}
<syntaxhighlight lang="c++">float GetMaxInteractDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNewAttackInstanceID}}
<syntaxhighlight lang="c++">int GetNewAttackInstanceID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPhysicsWorld}}
<syntaxhighlight lang="c++">iPhysicsWorld@ GetPhysicsWorld()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPlayerEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetPlayerEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPlayerTerrainCollision}}
<syntaxhighlight lang="c++">bool GetPlayerTerrainCollision()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
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

{{CodeDocDetailTop|GetTimersNamed}}
<syntaxhighlight lang="c++">bool GetTimersNamed(const tString &in asPattern,
                    tString avOutNames)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPattern|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutNames|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimerTime}}
<syntaxhighlight lang="c++">float GetTimerTime(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimerUserVarFloat}}
<syntaxhighlight lang="c++">float GetTimerUserVarFloat(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimerUserVarInt}}
<syntaxhighlight lang="c++">int GetTimerUserVarInt(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimerUserVarString}}
<syntaxhighlight lang="c++">const tString& GetTimerUserVarString(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeStamp}}
<syntaxhighlight lang="c++">int GetTimeStamp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVoiceSourceEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetVoiceSourceEntity(const tString &in asCharacter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorld}}
<syntaxhighlight lang="c++">cWorld@ GetWorld()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncTimerUserVarFloat}}
<syntaxhighlight lang="c++">float IncTimerUserVarFloat(const tString &in asName,
                           float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncTimerUserVarInt}}
<syntaxhighlight lang="c++">int IncTimerUserVarInt(const tString &in asName,
                       int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDeletingAllWorldEntities}}
<syntaxhighlight lang="c++">bool IsDeletingAllWorldEntities()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlacePlayerAtStartPos}}
<syntaxhighlight lang="c++">void PlacePlayerAtStartPos(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadEntity}}
<syntaxhighlight lang="c++">void PreloadEntity(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadGuiGfx}}
<syntaxhighlight lang="c++">void PreloadGuiGfx(const tString &in asFile,
                   eImGuiGfx aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../eImGuiGfx|eImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadMaterial}}
<syntaxhighlight lang="c++">void PreloadMaterial(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadParticleSystem}}
<syntaxhighlight lang="c++">void PreloadParticleSystem(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveEntityComponent}}
<syntaxhighlight lang="c++">void RemoveEntityComponent(iLuxEntityComponent@ apComp)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apComp|[[../iLuxEntityComponent|iLuxEntityComponent@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveTimer}}
<syntaxhighlight lang="c++">void RemoveTimer(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetLatestEntity}}
<syntaxhighlight lang="c++">void ResetLatestEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RestartCurrentTimer}}
<syntaxhighlight lang="c++">void RestartCurrentTimer(float afNewTime = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNewTime|float|}}
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

{{CodeDocDetailTop|SetArgVector2f}}
<syntaxhighlight lang="c++">void SetArgVector2f(int alArg,
                    const cVector2f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|avX|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgVector2l}}
<syntaxhighlight lang="c++">void SetArgVector2l(int alArg,
                    const cVector2l &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|avX|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgVector3f}}
<syntaxhighlight lang="c++">void SetArgVector3f(int alArg,
                    const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArgVector3l}}
<syntaxhighlight lang="c++">void SetArgVector3l(int alArg,
                    const cVector3l &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alArg|int|}}
{{CodeDocDetailParam|avX|[[../cVector3l|cVector3l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisplayNameEntry}}
<syntaxhighlight lang="c++">void SetDisplayNameEntry(const tString &in asEntry)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntry|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIsUnderwater}}
<syntaxhighlight lang="c++">void SetIsUnderwater(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxInteractDistance}}
<syntaxhighlight lang="c++">void SetMaxInteractDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPlayerTerrainCollision}}
<syntaxhighlight lang="c++">void SetPlayerTerrainCollision(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTimerPaused}}
<syntaxhighlight lang="c++">void SetTimerPaused(const tString &in asName,
                    bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTimerUserVarFloat}}
<syntaxhighlight lang="c++">void SetTimerUserVarFloat(const tString &in asName,
                          float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTimerUserVarInt}}
<syntaxhighlight lang="c++">void SetTimerUserVarInt(const tString &in asName,
                        int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTimerUserVarString}}
<syntaxhighlight lang="c++">void SetTimerUserVarString(const tString &in asName,
                           const tString &in asX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asX|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVoiceSource}}
<syntaxhighlight lang="c++">void SetVoiceSource(const tString &in asCharacter,
                    const tString &in asEntityName,
                    float afMinDistance,
                    float afMaxDistance,
                    bool abUse3D,
                    float afMaxPlayerListeningRange,
                    float afMinFreq = 22000,
                    float afMaxFreq = 22000,
                    uint aFrequencyFlag = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailParam|asEntityName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|abUse3D|bool|}}
{{CodeDocDetailParam|afMaxPlayerListeningRange|float|}}
{{CodeDocDetailParam|afMinFreq|float|}}
{{CodeDocDetailParam|afMaxFreq|float|}}
{{CodeDocDetailParam|aFrequencyFlag|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|VariableUpdate}}
<syntaxhighlight lang="c++">void VariableUpdate(float afDeltaTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDeltaTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}