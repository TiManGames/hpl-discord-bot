{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#cLux_AddAIDebugMessage|cLux_AddAIDebugMessage]](const [[../../tString|tString]] &in asText, bool abAddToDebugLog, bool abCheckForDuplicates)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddAIDebugMessage|cLux_AddAIDebugMessage]](const [[../../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddAreaType|cLux_AddAreaType]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, bool abForceFullGameSave)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddCritterType|cLux_AddCritterType]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, bool abForceFullGameSave)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddDebugMessage|cLux_AddDebugMessage]](const [[../../tString|tString]] &in asText, bool abCheckForDuplicates)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddDebugMessage|cLux_AddDebugMessage]](const [[../../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddEntityToInteractionWhiteList|cLux_AddEntityToInteractionWhiteList]]([[../../iLuxEntity|iLuxEntity@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddIgnoredLight|cLux_AddIgnoredLight]]([[../../tID|tID]] a_idLight)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddLiquidAreaType|cLux_AddLiquidAreaType]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, bool abForceFullGameSave)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddModule|cLux_AddModule]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, int alId, bool abIsGlobal, const [[../../tString|tString]] &in sContainer, bool abUseInputCallbacks)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddPropType|cLux_AddPropType]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, bool abForceFullGameSave)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddTodoMessage|cLux_AddTodoMessage]](const [[../../tString|tString]] &in asText, bool abCheckForDuplicates)|}}
{{CodeDocSummaryItem|void|[[#cLux_AddTodoMessage|cLux_AddTodoMessage]](const [[../../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|bool|[[#cLux_ApplyUserConfig|cLux_ApplyUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_CacheAddMaterial|cLux_CacheAddMaterial]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_CacheAddMesh|cLux_CacheAddMesh]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_CacheRemoveMaterial|cLux_CacheRemoveMaterial]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_CacheRemoveMesh|cLux_CacheRemoveMesh]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|bool|[[#cLux_CanContinue|cLux_CanContinue]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_ChangeMap|cLux_ChangeMap]](const [[../../tString|tString]] &in asMapName, const [[../../tString|tString]] &in asStartPos, const [[../../tString|tString]] &in asTransferArea, const [[../../tString|tString]] &in asStartSound, const [[../../tString|tString]] &in asEndSound, bool abShowLoadingScreen, float afFadeInTime <nowiki>=</nowiki> -1.0f)|}}
{{CodeDocSummaryItem|void|[[#cLux_ChangeMapDebug|cLux_ChangeMapDebug]](const [[../../tString|tString]] &in asMap)|}}
{{CodeDocSummaryItem|bool|[[#cLux_CheckIsInDirectLight|cLux_CheckIsInDirectLight]](const [[../../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|bool|[[#cLux_CheckLineOfSight|cLux_CheckLineOfSight]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avEnd, bool abCheckOnlyShadowCasters, bool abCheckOnlyStatic, [[../../iLuxEntity|iLuxEntity@]] apSkipEntity <nowiki>=</nowiki> null)|}}
{{CodeDocSummaryItem|void|[[#cLux_CleanupData|cLux_CleanupData]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_ClearAllMapSaveData|cLux_ClearAllMapSaveData]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_ClearIgnoredLights|cLux_ClearIgnoredLights]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_ClearMapSaveData|cLux_ClearMapSaveData]](const [[../../tString|tString]] &in asMapName)|}}
{{CodeDocSummaryItem|void|[[#cLux_ClearPlayedVoiceLines|cLux_ClearPlayedVoiceLines]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_Continue|cLux_Continue]]()|}}
{{CodeDocSummaryItem|[[../../cLuxAttackDamage|cLuxAttackDamage]]|[[#cLux_CreateEntityComponent_AttackDamage|cLux_CreateEntityComponent_AttackDamage]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxBackboneTail|cLuxBackboneTail]]|[[#cLux_CreateEntityComponent_BackboneTail|cLux_CreateEntityComponent_BackboneTail]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxBarkMachine|cLuxBarkMachine]]|[[#cLux_CreateEntityComponent_BarkMachine|cLux_CreateEntityComponent_BarkMachine]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxCharMover|cLuxCharMover]]|[[#cLux_CreateEntityComponent_CharMover|cLux_CreateEntityComponent_CharMover]]([[../../iLuxEntity|iLuxEntity]] @apEntity, [[../../iCharacterBody|iCharacterBody]] @apCharBody)|}}
{{CodeDocSummaryItem|[[../../cLuxEdgeGlow|cLuxEdgeGlow]]|[[#cLux_CreateEntityComponent_EdgeGlow|cLux_CreateEntityComponent_EdgeGlow]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxFootPlacement|cLuxFootPlacement]]|[[#cLux_CreateEntityComponent_FootPlacement|cLux_CreateEntityComponent_FootPlacement]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxForceEmitter|cLuxForceEmitter]]|[[#cLux_CreateEntityComponent_ForceEmitter|cLux_CreateEntityComponent_ForceEmitter]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxHandPlacement|cLuxHandPlacement]]|[[#cLux_CreateEntityComponent_HandPlacement|cLux_CreateEntityComponent_HandPlacement]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxHeadTracker|cLuxHeadTracker]]|[[#cLux_CreateEntityComponent_HeadTracker|cLux_CreateEntityComponent_HeadTracker]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxLightSensor|cLuxLightSensor]]|[[#cLux_CreateEntityComponent_LightSensor|cLux_CreateEntityComponent_LightSensor]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxPathfinder|cLuxPathfinder]]|[[#cLux_CreateEntityComponent_Pathfinder|cLux_CreateEntityComponent_Pathfinder]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxProximitySensor|cLuxProximitySensor]]|[[#cLux_CreateEntityComponent_ProximitySensor|cLux_CreateEntityComponent_ProximitySensor]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxSoundListener|cLuxSoundListener]]|[[#cLux_CreateEntityComponent_SoundListener|cLux_CreateEntityComponent_SoundListener]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxStateMachine|cLuxStateMachine]]|[[#cLux_CreateEntityComponent_StateMachine|cLux_CreateEntityComponent_StateMachine]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxVerletAnimation|cLuxVerletAnimation]]|[[#cLux_CreateEntityComponent_VerletAnimation|cLux_CreateEntityComponent_VerletAnimation]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_CreateHTMLImage|cLux_CreateHTMLImage]](const [[../../tString|tString]] &in asSrc, const [[../../tString|tString]] &in asTitle <nowiki>=</nowiki> "", const [[../../cVector2l|cVector2l]] &in avSize <nowiki>=</nowiki> cVector2l_MinusOne)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_CreateHTMLParagraph|cLux_CreateHTMLParagraph]](const [[../../tString|tString]] &in asContent)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_CreateHTMLTag|cLux_CreateHTMLTag]](const [[../../tString|tString]] &in asTag, const [[../../tString|tString]] &in asContent <nowiki>=</nowiki> "", const [[../../tString|tString]] &in asParams <nowiki>=</nowiki> "")|}}
{{CodeDocSummaryItem|[[../../cLuxScriptImGui|cLuxScriptImGui]]|[[#cLux_CreateScriptImGui|cLux_CreateScriptImGui]](const [[../../tString|tString]] &in asName, bool abRegisterForDrawing, bool abSkipResetOnRegistration <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|[[../../iScrUserComponent_Interface|iScrUserComponent_Interface]]|[[#cLux_CreateUserComponent|cLux_CreateUserComponent]]([[../../iLuxEntity|iLuxEntity@]] apEntity, const [[../../tString|tString]] &in asComponentName, const [[../../tString|tString]] &in asScriptFile, const [[../../tString|tString]] &in asScriptClass, int alID)|}}
{{CodeDocSummaryItem|bool|[[#cLux_DebugModeOn|cLux_DebugModeOn]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_DecUnderwaterEffectUserCount|cLux_DecUnderwaterEffectUserCount]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_DeloadMap|cLux_DeloadMap]](const [[../../tString|tString]] &in asTransferArea)|}}
{{CodeDocSummaryItem|void|[[#cLux_DisableSaving|cLux_DisableSaving]](float afDuration)|}}
{{CodeDocSummaryItem|float|[[#cLux_DrawDebugText|cLux_DrawDebugText]](const [[../../tString|tString]] &in asText, float afY, float afSize <nowiki>=</nowiki> 14, [[../../cColor|cColor]] aColor <nowiki>=</nowiki> cColor, [[../../|../../]] 1, [[../../|../../]] 1, bool abAddNewLine <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#cLux_DrawHint|cLux_DrawHint]]([[../../cImGui|cImGui]] @apImGui, float afTimeStep, const [[../../cImGuiLabelData|cImGuiLabelData]] &in aLabel, const [[../../cVector3f|cVector3f]] &in avPosition, float afLineWidth, float afLineSpacing, const [[../../array|array]]<[[../../tWString|tWString]]> &in avTextLines, const [[../../array|array]]<[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]> &in avIcons, const [[../../array|array]]<[[../../array|array]]> &in avIconsPerLine)|}}
{{CodeDocSummaryItem|void|[[#cLux_DrawScreenText|cLux_DrawScreenText]]([[../../cImGui|cImGui]] @apImGui, float afTimeStep, const [[../../cImGuiLabelData|cImGuiLabelData]] &in aLabel, const [[../../cVector3f|cVector3f]] &in avPosition, float afLineWidth, float afLineSpacing, const [[../../array|array]]<[[../../tWString|tWString]]> &in avTextLines, const [[../../array|array]]<[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]> &in avIcons, const [[../../array|array]]<[[../../array|array]]> &in avIconsPerLine)|}}
{{CodeDocSummaryItem|void|[[#cLux_DrawSetToScreen|cLux_DrawSetToScreen]](bool abClearScreen, const [[../../cColor|cColor]] &in aCol, [[../../cGuiSet|cGuiSet@]] apSet)|}}
{{CodeDocSummaryItem|void|[[#cLux_DropPageFocus|cLux_DropPageFocus]](const [[../../tString|tString]] &in asX)|}}
{{CodeDocSummaryItem|void|[[#cLux_EnableSaving|cLux_EnableSaving]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_Exit|cLux_Exit]]()|}}
{{CodeDocSummaryItem|[[../../iLuxAchievementHandler|iLuxAchievementHandler]]|[[#cLux_GetAchievementHandler|cLux_GetAchievementHandler]]()|}}
{{CodeDocSummaryItem|float|[[#cLux_GetAverageBrightness|cLux_GetAverageBrightness]]()|}}
{{CodeDocSummaryItem|[[../../iLuxEntity|iLuxEntity]]|[[#cLux_GetBodyEntity|cLux_GetBodyEntity]]([[../../iPhysicsBody|iPhysicsBody]] @apBody)|}}
{{CodeDocSummaryItem|[[../../iPhysicsBody|iPhysicsBody]]|[[#cLux_GetClosestBody|cLux_GetClosestBody]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avDir, float afRayLength, float &out afDistance, [[../../cVector3f|cVector3f]] &out avSurfaceNormal)|}}
{{CodeDocSummaryItem|[[../../iPhysicsBody|iPhysicsBody]]|[[#cLux_GetClosestCharCollideBody|cLux_GetClosestCharCollideBody]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avDir, float afRayLength, float &out afDistance, [[../../cVector3f|cVector3f]] &out avSurfaceNormal)|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetClosestCharCollider|cLux_GetClosestCharCollider]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avDir, float afRayLength, bool abCheckDynamic, [[../../cLuxClosestCharCollider|cLuxClosestCharCollider]] @apOutput)|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetClosestEntity|cLux_GetClosestEntity]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avDir, float afRayLength, int alIteractType, bool abCheckLineOfSight, [[../../cLuxClosestEntityData|cLuxClosestEntityData]] @apOutput)|}}
{{CodeDocSummaryItem|void|[[#cLux_GetConsoleMaps|cLux_GetConsoleMaps]]([[../../array|array]]<[[../../tString|tString]]> &out avMaps)|}}
{{CodeDocSummaryItem|[[../../cImGui|cImGui]]|[[#cLux_GetCurrentImGui|cLux_GetCurrentImGui]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_GetCurrentLanguage|cLux_GetCurrentLanguage]]()|}}
{{CodeDocSummaryItem|[[../../cLuxMap|cLuxMap]]|[[#cLux_GetCurrentMap|cLux_GetCurrentMap]]()|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cLux_GetCurrentUserProfilePath|cLux_GetCurrentUserProfilePath]]()|}}
{{CodeDocSummaryItem|int|[[#cLux_GetDebugGameSpeed|cLux_GetDebugGameSpeed]]()|}}
{{CodeDocSummaryItem|[[../../iFontData|iFontData]]|[[#cLux_GetDefaultFont|cLux_GetDefaultFont]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_GetDefaultGameLanguage|cLux_GetDefaultGameLanguage]]()|}}
{{CodeDocSummaryItem|[[../../cLuxDialogHandler|cLuxDialogHandler]]|[[#cLux_GetDialogHandler|cLux_GetDialogHandler]]()|}}
{{CodeDocSummaryItem|[[../../cLuxEffectHandler|cLuxEffectHandler]]|[[#cLux_GetEffectHandler|cLux_GetEffectHandler]]()|}}
{{CodeDocSummaryItem|[[../../cLuxEventDatabaseHandler|cLuxEventDatabaseHandler]]|[[#cLux_GetEventDatabaseHandler|cLux_GetEventDatabaseHandler]]()|}}
{{CodeDocSummaryItem|[[../../cConfigFile|cConfigFile]]|[[#cLux_GetGameConfig|cLux_GetGameConfig]]()|}}
{{CodeDocSummaryItem|[[../../cImGui|cImGui]]|[[#cLux_GetGameHudImGui|cLux_GetGameHudImGui]]()|}}
{{CodeDocSummaryItem|[[../../cGuiSet|cGuiSet]]|[[#cLux_GetGameHudSet|cLux_GetGameHudSet]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_GetGameLanguageFolder|cLux_GetGameLanguageFolder]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetGamePaused|cLux_GetGamePaused]]()|}}
{{CodeDocSummaryItem|double|[[#cLux_GetGameTime|cLux_GetGameTime]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetGodModeActivated|cLux_GetGodModeActivated]]()|}}
{{CodeDocSummaryItem|[[../../cLuxGuiHandler|cLuxGuiHandler]]|[[#cLux_GetGuiHandler|cLux_GetGuiHandler]]()|}}
{{CodeDocSummaryItem|[[../../cGuiSet|cGuiSet]]|[[#cLux_GetHelpGuiSet|cLux_GetHelpGuiSet]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetHideCrosshair|cLux_GetHideCrosshair]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetHideHints|cLux_GetHideHints]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetHidePopupIcons|cLux_GetHidePopupIcons]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetHidingEffectsActive|cLux_GetHidingEffectsActive]]()|}}
{{CodeDocSummaryItem|float|[[#cLux_GetHudDisplayScale|cLux_GetHudDisplayScale]]()|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cLux_GetHudVirtualCenterScreenSize|cLux_GetHudVirtualCenterScreenSize]]()|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cLux_GetHudVirtualCenterScreenStartPos|cLux_GetHudVirtualCenterScreenStartPos]]()|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cLux_GetHudVirtualCenterSize|cLux_GetHudVirtualCenterSize]]()|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cLux_GetHudVirtualOffset|cLux_GetHudVirtualOffset]]()|}}
{{CodeDocSummaryItem|[[../../cVector2f|cVector2f]]|[[#cLux_GetHudVirtualSize|cLux_GetHudVirtualSize]]()|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#cLux_GetHudVirtualStartPos|cLux_GetHudVirtualStartPos]]()|}}
{{CodeDocSummaryItem|[[../../cImGui|cImGui]]|[[#cLux_GetInputFocusImGui|cLux_GetInputFocusImGui]]()|}}
{{CodeDocSummaryItem|[[../../cLuxInputHandler|cLuxInputHandler]]|[[#cLux_GetInputHandler|cLux_GetInputHandler]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetInteractionWhiteListActive|cLux_GetInteractionWhiteListActive]]()|}}
{{CodeDocSummaryItem|[[../../cConfigFile|cConfigFile]]|[[#cLux_GetKeyConfig|cLux_GetKeyConfig]]()|}}
{{CodeDocSummaryItem|float|[[#cLux_GetLightLeveAtPosWithoutIgnoredLights|cLux_GetLightLeveAtPosWithoutIgnoredLights]](const [[../../cVector3f|cVector3f]] &in avPos, float afRadiusAdd)|}}
{{CodeDocSummaryItem|float|[[#cLux_GetLightLevelAtPos|cLux_GetLightLevelAtPos]](const [[../../cVector3f|cVector3f]] &in avPos, [[../../iLight|iLight]] @apSkipLight, float afRadiusAdd)|}}
{{CodeDocSummaryItem|float|[[#cLux_GetLogAverageBrightness|cLux_GetLogAverageBrightness]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetLookAtCallbacksActive|cLux_GetLookAtCallbacksActive]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cLux_GetMainMenuFile|cLux_GetMainMenuFile]]()|}}
{{CodeDocSummaryItem|[[../../cLuxModHandler|cLuxModHandler]]|[[#cLux_GetModHandler|cLux_GetModHandler]]()|}}
{{CodeDocSummaryItem|[[../../cLuxMusicHandler|cLuxMusicHandler]]|[[#cLux_GetMusicHandler|cLux_GetMusicHandler]]()|}}
{{CodeDocSummaryItem|[[../../cLuxPlayer|cLuxPlayer]]|[[#cLux_GetPlayer|cLux_GetPlayer]]()|}}
{{CodeDocSummaryItem|[[../../cLuxMap|cLuxMap]]|[[#cLux_GetPreloadMap|cLux_GetPreloadMap]]()|}}
{{CodeDocSummaryItem|[[../../cImGui|cImGui]]|[[#cLux_GetPrevInputFocusImGui|cLux_GetPrevInputFocusImGui]]()|}}
{{CodeDocSummaryItem|int|[[#cLux_GetProfilerActive|cLux_GetProfilerActive]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetSaveConfigAtExit|cLux_GetSaveConfigAtExit]]()|}}
{{CodeDocSummaryItem|[[../../cLuxSaveHandler|cLuxSaveHandler]]|[[#cLux_GetSaveHandler|cLux_GetSaveHandler]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetSavingEnabled|cLux_GetSavingEnabled]]()|}}
{{CodeDocSummaryItem|float|[[#cLux_GetSingleLightLevelAtPos|cLux_GetSingleLightLevelAtPos]](const [[../../cVector3f|cVector3f]] &in avPos, [[../../tID|tID]] a_idLight, float afRadiusAdd)|}}
{{CodeDocSummaryItem|[[../../cLuxSoundscapeHandler|cLuxSoundscapeHandler]]|[[#cLux_GetSoundscapeHandler|cLux_GetSoundscapeHandler]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_GetStartPositions|cLux_GetStartPositions]]([[../../array|array]]<[[../../tString|tString]]> &out avStartPos)|}}
{{CodeDocSummaryItem|float|[[#cLux_GetStringDuration|cLux_GetStringDuration]](const [[../../tWString|tWString]] &in asStr)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cLux_GetStringWFromDate|cLux_GetStringWFromDate]](const [[../../cDate|cDate]] &in aDate)|}}
{{CodeDocSummaryItem|void|[[#cLux_GetTextCatAndEntryFromString|cLux_GetTextCatAndEntryFromString]](const [[../../tString|tString]] &in asData, [[../../tString|tString]] &out asOutCat, [[../../tString|tString]] &out asOutEntry)|}}
{{CodeDocSummaryItem|bool|[[#cLux_GetUnderwaterEffectsActive|cLux_GetUnderwaterEffectsActive]]()|}}
{{CodeDocSummaryItem|[[../../iScrUserComponent_Interface|iScrUserComponent_Interface]]|[[#cLux_GetUserComponent|cLux_GetUserComponent]]([[../../iLuxEntity|iLuxEntity@]] apEntity, int alID)|}}
{{CodeDocSummaryItem|[[../../iScrUserComponent_Interface|iScrUserComponent_Interface]]|[[#cLux_GetUserComponentScriptInterface|cLux_GetUserComponentScriptInterface]]([[../../iLuxEntityComponent|iLuxEntityComponent@]] apComponent)|}}
{{CodeDocSummaryItem|[[../../cConfigFile|cConfigFile]]|[[#cLux_GetUserConfig|cLux_GetUserConfig]]()|}}
{{CodeDocSummaryItem|[[../../iScrUserModule_Interface|iScrUserModule_Interface]]|[[#cLux_GetUserModuleFromID|cLux_GetUserModuleFromID]](int alID, bool abSilent <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|[[../../iScrUserModule_Interface|iScrUserModule_Interface]]|[[#cLux_GetUserModuleFromName|cLux_GetUserModuleFromName]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../cViewport|cViewport]]|[[#cLux_GetViewport|cLux_GetViewport]]()|}}
{{CodeDocSummaryItem|[[../../cLuxVoiceHandler|cLuxVoiceHandler]]|[[#cLux_GetVoiceHandler|cLux_GetVoiceHandler]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_HasConfigLoadError|cLux_HasConfigLoadError]]([[../../tString|tString]] &out asError)|}}
{{CodeDocSummaryItem|bool|[[#cLux_HasTranslation|cLux_HasTranslation]](const [[../../tString|tString]] &in asCat, const [[../../tString|tString]] &in asEntry)|}}
{{CodeDocSummaryItem|bool|[[#cLux_HasUnderwaterEffectUsers|cLux_HasUnderwaterEffectUsers]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_HideDebugOutputOn|cLux_HideDebugOutputOn]]()|}}
{{CodeDocSummaryItem|[[../../cLuxAgent|cLuxAgent]]|[[#cLux_ID_Agent|cLux_ID_Agent]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxArea|cLuxArea]]|[[#cLux_ID_Area|cLux_ID_Area]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cBeam|cBeam]]|[[#cLux_ID_Beam|cLux_ID_Beam]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cBillboard|cBillboard]]|[[#cLux_ID_Billboard|cLux_ID_Billboard]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cBillboardGroup|cBillboardGroup]]|[[#cLux_ID_BillboardGroup|cLux_ID_BillboardGroup]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iPhysicsBody|iPhysicsBody]]|[[#cLux_ID_Body|cLux_ID_Body]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iCharacterBody|iCharacterBody]]|[[#cLux_ID_CharacterBody|cLux_ID_CharacterBody]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cClothEntity|cClothEntity]]|[[#cLux_ID_ClothEntity|cLux_ID_ClothEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxCritter|cLuxCritter]]|[[#cLux_ID_Critter|cLux_ID_Critter]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iLuxEntity|iLuxEntity]]|[[#cLux_ID_Entity|cLux_ID_Entity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iEntity3D|iEntity3D]]|[[#cLux_ID_Entity3D|cLux_ID_Entity3D]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cExposureArea|cExposureArea]]|[[#cLux_ID_ExposureArea|cLux_ID_ExposureArea]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cFogArea|cFogArea]]|[[#cLux_ID_FogArea|cLux_ID_FogArea]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cForceField|cForceField]]|[[#cLux_ID_ForceField|cLux_ID_ForceField]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cGuiSetEntity|cGuiSetEntity]]|[[#cLux_ID_GuiSetEntity|cLux_ID_GuiSetEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iPhysicsJoint|iPhysicsJoint]]|[[#cLux_ID_Joint|cLux_ID_Joint]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLensFlare|cLensFlare]]|[[#cLux_ID_LensFlare|cLux_ID_LensFlare]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iLight|iLight]]|[[#cLux_ID_Light|cLux_ID_Light]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLightMaskBox|cLightMaskBox]]|[[#cLux_ID_LightMaskBox|cLux_ID_LightMaskBox]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxLiquidArea|cLuxLiquidArea]]|[[#cLux_ID_LiquidArea|cLux_ID_LiquidArea]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cMeshEntity|cMeshEntity]]|[[#cLux_ID_MeshEntity|cLux_ID_MeshEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cParticleSystem|cParticleSystem]]|[[#cLux_ID_ParticleSystem|cLux_ID_ParticleSystem]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxProp|cLuxProp]]|[[#cLux_ID_Prop|cLux_ID_Prop]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxPushableFogArea|cLuxPushableFogArea]]|[[#cLux_ID_PushableFogArea|cLux_ID_PushableFogArea]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cLuxSoundscapeArea|cLuxSoundscapeArea]]|[[#cLux_ID_ReverbArea|cLux_ID_ReverbArea]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../iRopeEntity|iRopeEntity]]|[[#cLux_ID_RopeEntity|cLux_ID_RopeEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cSoundEntity|cSoundEntity]]|[[#cLux_ID_SoundEntity|cLux_ID_SoundEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|[[../../cSubMeshEntity|cSubMeshEntity]]|[[#cLux_ID_SubMeshEntity|cLux_ID_SubMeshEntity]]([[../../tID|tID]] aID)|}}
{{CodeDocSummaryItem|void|[[#cLux_IncUnderwaterEffectUserCount|cLux_IncUnderwaterEffectUserCount]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_IsChangingMap|cLux_IsChangingMap]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_IsLoadingScreenVisible|cLux_IsLoadingScreenVisible]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_IsPlayGoReady|cLux_IsPlayGoReady]](int64 &out alETA)|}}
{{CodeDocSummaryItem|bool|[[#cLux_IsReadyToChangeMap|cLux_IsReadyToChangeMap]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_IsStreamingMap|cLux_IsStreamingMap]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_LoadScreenSetBarPosAndSize|cLux_LoadScreenSetBarPosAndSize]](const [[../../cVector2f|cVector2f]] &in avPos, const [[../../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#cLux_LoadScreenSetForceBackground|cLux_LoadScreenSetForceBackground]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#cLux_LoadScreenShowLoadingIcon|cLux_LoadScreenShowLoadingIcon]](float afTime)|}}
{{CodeDocSummaryItem|bool|[[#cLux_MapChangeIsTransfer|cLux_MapChangeIsTransfer]]()|}}
{{CodeDocSummaryItem|bool|[[#cLux_MapIsLoaded|cLux_MapIsLoaded]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_OutputTextToFile|cLux_OutputTextToFile]](const [[../../tWString|tWString]] &in asPath, const [[../../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cLux_ParseString|cLux_ParseString]](const [[../../tWString|tWString]] &in asInput)|}}
{{CodeDocSummaryItem|void|[[#cLux_ParseStringIntoScreenText|cLux_ParseStringIntoScreenText]](const [[../../tWString|tWString]] &in asInput, [[../../cImGui|cImGui]] @apImGui, const [[../../cLuxScreenTextFormatParameters|cLuxScreenTextFormatParameters]] & aFormatParams, [[../../array|array]]<[[../../tWString|tWString]]> &out aOutLines, [[../../array|array]]<[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]> &out aIconArray, [[../../array|array]]<[[../../array|array]]> &out aOutIconsPerLine, float &out afMaxLineHeight, float &out afDisplayTime, bool abTriggeredByGamepad)|}}
{{CodeDocSummaryItem|bool|[[#cLux_PlayGuiSoundData|cLux_PlayGuiSoundData]](const [[../../tString|tString]] &in asName, [[../../eSoundEntryType|eSoundEntryType]] aDestType, float afVolMul, bool abSkipPreviousRandom)|}}
{{CodeDocSummaryItem|bool|[[#cLux_PlayGuiSoundDataEx|cLux_PlayGuiSoundDataEx]](const [[../../tString|tString]] &in asName, [[../../eSoundEntryType|eSoundEntryType]] aDestType, float afVolMul, bool abSkipPreviousRandom, [[../../cLuxSoundExtraData|cLuxSoundExtraData]] @apExtraData)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadEntity|cLux_PreloadEntity]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadGuiGfx|cLux_PreloadGuiGfx]](const [[../../tString|tString]] &in asFile, [[../../eImGuiGfx|eImGuiGfx]] aType)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadMap|cLux_PreloadMap]](const [[../../tString|tString]] &in asMapName, [[../../eWorldStreamPriority|eWorldStreamPriority]] aPrio <nowiki>=</nowiki> eWorldStreamPriority_Normal)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadMaterial|cLux_PreloadMaterial]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadParticleSystem|cLux_PreloadParticleSystem]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadSound|cLux_PreloadSound]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cLux_PreloadWebpage|cLux_PreloadWebpage]](const [[../../tString|tString]] &in asX)|}}
{{CodeDocSummaryItem|void|[[#cLux_ProfileEnd|cLux_ProfileEnd]](const [[../../tString|tString]] &in asMarker)|}}
{{CodeDocSummaryItem|void|[[#cLux_ProfileStart|cLux_ProfileStart]](const [[../../tString|tString]] &in asMarker)|}}
{{CodeDocSummaryItem|void|[[#cLux_RayDamage|cLux_RayDamage]](const [[../../cVector3f|cVector3f]] &in avStart, const [[../../cVector3f|cVector3f]] &in avDirection, float afRayLength, float afDamage, float afForce, float afMaxImpulse, int alStrength, float afHitSpeed, int aDamageType, bool abCheckAgents, bool abCheckPlayer, bool abCheckProps, bool abLethalForPlayer, [[../../tID|tID]] a_idSource, int alInstanceId)|}}
{{CodeDocSummaryItem|void|[[#cLux_RegisterCollisionRadius|cLux_RegisterCollisionRadius]](int alX)|}}
{{CodeDocSummaryItem|void|[[#cLux_RegisterEventListenerUserModule_AgentSetActive|cLux_RegisterEventListenerUserModule_AgentSetActive]](const [[../../tString|tString]] &in asModuleName)|}}
{{CodeDocSummaryItem|void|[[#cLux_ReloadGame|cLux_ReloadGame]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_RenderBackgroundScreen|cLux_RenderBackgroundScreen]](bool abDrawFullHUD)|}}
{{CodeDocSummaryItem|void|[[#cLux_ResetShudderEffects|cLux_ResetShudderEffects]](int alX)|}}
{{CodeDocSummaryItem|void|[[#cLux_RunTestButton|cLux_RunTestButton]](int alX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SaveScreenshotToFile|cLux_SaveScreenshotToFile]](const [[../../tWString|tWString]] &in asPath, const [[../../cVector2l|cVector2l]] &in avSize <nowiki>=</nowiki> cVector2l_MinusOne, bool abKeepAspect <nowiki>=</nowiki> true, float afBrightness <nowiki>=</nowiki> 1.0f)|}}
{{CodeDocSummaryItem|bool|[[#cLux_ScriptDebugOn|cLux_ScriptDebugOn]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_SendInputToGui|cLux_SendInputToGui]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetAreaOffline|cLux_SetAreaOffline]](int alX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetComputeAverageFrameColor|cLux_SetComputeAverageFrameColor]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetDebugGameSpeed|cLux_SetDebugGameSpeed]](int alX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetDebugInfoWindowText|cLux_SetDebugInfoWindowText]](const [[../../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetGamePaused|cLux_SetGamePaused]](bool abX, bool abPauseMusic, bool abPauseSounds, bool abPauseAmbience)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetGodModeActivated|cLux_SetGodModeActivated]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetHideDebugOutputOn|cLux_SetHideDebugOutputOn]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetHideModeEffectsActive|cLux_SetHideModeEffectsActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetImGuiInputFocus|cLux_SetImGuiInputFocus]]([[../../cImGui|cImGui@]] apImGui, bool abShowMouse)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetInteractionWhiteListActive|cLux_SetInteractionWhiteListActive]](bool abX, bool abClearList)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetLookAtCallbacksActive|cLux_SetLookAtCallbacksActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetMapPreloadPriority|cLux_SetMapPreloadPriority]]([[../../eWorldStreamPriority|eWorldStreamPriority]] aPrio)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetProfilerActive|cLux_SetProfilerActive]](int alMode)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetProfilerFilter|cLux_SetProfilerFilter]](const [[../../tString|tString]] &in asFilter)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetProfilerPauseInterval|cLux_SetProfilerPauseInterval]](float afInterval)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetScriptDebugOn|cLux_SetScriptDebugOn]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetTerrainSettings|cLux_SetTerrainSettings]](int alTextureSize, int alDiffuseTexelsPerMeter, int alNormalTexelsPerMeter, int alSpecTexelsPerMeter)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetUnderwaterEffectsActive|cLux_SetUnderwaterEffectsActive]](bool abX, bool abUseStartAndEndEffects)|}}
{{CodeDocSummaryItem|void|[[#cLux_SetupDefaultGlobalReverb|cLux_SetupDefaultGlobalReverb]]([[../../eSoundReverbPreset|eSoundReverbPreset]] aType, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#cLux_ShapeDamage|cLux_ShapeDamage]]([[../../iCollideShape|iCollideShape]] @apShape, const [[../../cMatrixf|cMatrixf]] &in a_mtxTransform, const [[../../cVector3f|cVector3f]] &in avOrigin, float afDamage, float afForce, float afMaxImpulse, int alStrength, float afHitSpeed, int aDamageType, bool abCheckAgents, bool abCheckPlayer, bool abCheckProps, bool abLethalForPlayer, [[../../tID|tID]] a_idSource, int alInstanceId)|}}
{{CodeDocSummaryItem|bool|[[#cLux_ShowEntityInfoOn|cLux_ShowEntityInfoOn]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_StartMap|cLux_StartMap]](const [[../../tString|tString]] &in asMapName)|}}
{{CodeDocSummaryItem|void|[[#cLux_StartNewGame|cLux_StartNewGame]]()|}}
{{CodeDocSummaryItem|void|[[#cLux_TeleportToStartPos|cLux_TeleportToStartPos]](const [[../../tString|tString]] &in asStartPos)|}}
{{CodeDocSummaryItem|bool|[[#cLux_TestModeOn|cLux_TestModeOn]]()|}}
{{CodeDocSummaryItem|[[../../cLuxAgent|cLuxAgent]]|[[#cLux_ToAgent|cLux_ToAgent]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxArea|cLuxArea]]|[[#cLux_ToArea|cLux_ToArea]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxCritter|cLuxCritter]]|[[#cLux_ToCritter|cLux_ToCritter]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxLiquidArea|cLuxLiquidArea]]|[[#cLux_ToLiquidArea|cLux_ToLiquidArea]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxProp|cLuxProp]]|[[#cLux_ToProp|cLux_ToProp]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../cLuxPushableFogArea|cLuxPushableFogArea]]|[[#cLux_ToPushableFogArea|cLux_ToPushableFogArea]]([[../../iLuxEntity|iLuxEntity]] @apEntity)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cLux_Translate|cLux_Translate]](const [[../../tString|tString]] &in asCat, const [[../../tString|tString]] &in asEntry)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cLux_TranslatePlatformSpecific|cLux_TranslatePlatformSpecific]](const [[../../tString|tString]] &in asCat, const [[../../tString|tString]] &in asEntry)|}}
{{CodeDocSummaryItem|void|[[#cLux_TruncateTextFile|cLux_TruncateTextFile]](const [[../../tWString|tWString]] &in asPath, const [[../../tString|tString]] &in asPattern, int alTimes)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cLux_AddAIDebugMessage}}
<syntaxhighlight lang="c++">void cLux_AddAIDebugMessage(const tString &in asText,
                            bool abAddToDebugLog,
                            bool abCheckForDuplicates)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAddToDebugLog|bool|}}
{{CodeDocDetailParam|abCheckForDuplicates|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddAIDebugMessage}}
<syntaxhighlight lang="c++">void cLux_AddAIDebugMessage(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddAreaType}}
<syntaxhighlight lang="c++">void cLux_AddAreaType(const tString &in asName,
                      const tString &in asScriptFile,
                      const tString &in asScriptClass,
                      bool abForceFullGameSave)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abForceFullGameSave|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddCritterType}}
<syntaxhighlight lang="c++">void cLux_AddCritterType(const tString &in asName,
                         const tString &in asScriptFile,
                         const tString &in asScriptClass,
                         bool abForceFullGameSave)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abForceFullGameSave|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddDebugMessage}}
<syntaxhighlight lang="c++">void cLux_AddDebugMessage(const tString &in asText,
                          bool abCheckForDuplicates)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abCheckForDuplicates|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddDebugMessage}}
<syntaxhighlight lang="c++">void cLux_AddDebugMessage(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddEntityToInteractionWhiteList}}
<syntaxhighlight lang="c++">void cLux_AddEntityToInteractionWhiteList(iLuxEntity@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddIgnoredLight}}
<syntaxhighlight lang="c++">void cLux_AddIgnoredLight(tID a_idLight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_idLight|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddLiquidAreaType}}
<syntaxhighlight lang="c++">void cLux_AddLiquidAreaType(const tString &in asName,
                            const tString &in asScriptFile,
                            const tString &in asScriptClass,
                            bool abForceFullGameSave)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abForceFullGameSave|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddModule}}
<syntaxhighlight lang="c++">void cLux_AddModule(const tString &in asName,
                    const tString &in asScriptFile,
                    const tString &in asScriptClass,
                    int alId,
                    bool abIsGlobal,
                    const tString &in sContainer,
                    bool abUseInputCallbacks)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abIsGlobal|bool|}}
{{CodeDocDetailParam|sContainer|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseInputCallbacks|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddPropType}}
<syntaxhighlight lang="c++">void cLux_AddPropType(const tString &in asName,
                      const tString &in asScriptFile,
                      const tString &in asScriptClass,
                      bool abForceFullGameSave)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abForceFullGameSave|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddTodoMessage}}
<syntaxhighlight lang="c++">void cLux_AddTodoMessage(const tString &in asText,
                         bool abCheckForDuplicates)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abCheckForDuplicates|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_AddTodoMessage}}
<syntaxhighlight lang="c++">void cLux_AddTodoMessage(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ApplyUserConfig}}
<syntaxhighlight lang="c++">bool cLux_ApplyUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CacheAddMaterial}}
<syntaxhighlight lang="c++">void cLux_CacheAddMaterial(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CacheAddMesh}}
<syntaxhighlight lang="c++">void cLux_CacheAddMesh(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CacheRemoveMaterial}}
<syntaxhighlight lang="c++">void cLux_CacheRemoveMaterial(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CacheRemoveMesh}}
<syntaxhighlight lang="c++">void cLux_CacheRemoveMesh(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CanContinue}}
<syntaxhighlight lang="c++">bool cLux_CanContinue()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ChangeMap}}
<syntaxhighlight lang="c++">void cLux_ChangeMap(const tString &in asMapName,
                    const tString &in asStartPos,
                    const tString &in asTransferArea,
                    const tString &in asStartSound,
                    const tString &in asEndSound,
                    bool abShowLoadingScreen,
                    float afFadeInTime = -1.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMapName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asStartPos|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTransferArea|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asStartSound|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEndSound|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abShowLoadingScreen|bool|}}
{{CodeDocDetailParam|afFadeInTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ChangeMapDebug}}
<syntaxhighlight lang="c++">void cLux_ChangeMapDebug(const tString &in asMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMap|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CheckIsInDirectLight}}
<syntaxhighlight lang="c++">bool cLux_CheckIsInDirectLight(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CheckLineOfSight}}
<syntaxhighlight lang="c++">bool cLux_CheckLineOfSight(const cVector3f &in avStart,
                           const cVector3f &in avEnd,
                           bool abCheckOnlyShadowCasters,
                           bool abCheckOnlyStatic,
                           iLuxEntity@ apSkipEntity = null)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abCheckOnlyShadowCasters|bool|}}
{{CodeDocDetailParam|abCheckOnlyStatic|bool|}}
{{CodeDocDetailParam|apSkipEntity|[[../../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CleanupData}}
<syntaxhighlight lang="c++">void cLux_CleanupData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ClearAllMapSaveData}}
<syntaxhighlight lang="c++">void cLux_ClearAllMapSaveData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ClearIgnoredLights}}
<syntaxhighlight lang="c++">void cLux_ClearIgnoredLights()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ClearMapSaveData}}
<syntaxhighlight lang="c++">void cLux_ClearMapSaveData(const tString &in asMapName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMapName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ClearPlayedVoiceLines}}
<syntaxhighlight lang="c++">void cLux_ClearPlayedVoiceLines()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_Continue}}
<syntaxhighlight lang="c++">void cLux_Continue()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_AttackDamage}}
<syntaxhighlight lang="c++">cLuxAttackDamage@ cLux_CreateEntityComponent_AttackDamage(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxAttackDamage@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_BackboneTail}}
<syntaxhighlight lang="c++">cLuxBackboneTail@ cLux_CreateEntityComponent_BackboneTail(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxBackboneTail@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_BarkMachine}}
<syntaxhighlight lang="c++">cLuxBarkMachine@ cLux_CreateEntityComponent_BarkMachine(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxBarkMachine@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_CharMover}}
<syntaxhighlight lang="c++">cLuxCharMover@ cLux_CreateEntityComponent_CharMover(iLuxEntity @apEntity,
                                                    iCharacterBody @apCharBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailParam|@apCharBody|[[../../iCharacterBody|iCharacterBody]]|}}
{{CodeDocDetailReturn|cLuxCharMover@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_EdgeGlow}}
<syntaxhighlight lang="c++">cLuxEdgeGlow@ cLux_CreateEntityComponent_EdgeGlow(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxEdgeGlow@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_FootPlacement}}
<syntaxhighlight lang="c++">cLuxFootPlacement@ cLux_CreateEntityComponent_FootPlacement(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxFootPlacement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_ForceEmitter}}
<syntaxhighlight lang="c++">cLuxForceEmitter@ cLux_CreateEntityComponent_ForceEmitter(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxForceEmitter@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_HandPlacement}}
<syntaxhighlight lang="c++">cLuxHandPlacement@ cLux_CreateEntityComponent_HandPlacement(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxHandPlacement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_HeadTracker}}
<syntaxhighlight lang="c++">cLuxHeadTracker@ cLux_CreateEntityComponent_HeadTracker(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxHeadTracker@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_LightSensor}}
<syntaxhighlight lang="c++">cLuxLightSensor@ cLux_CreateEntityComponent_LightSensor(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxLightSensor@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_Pathfinder}}
<syntaxhighlight lang="c++">cLuxPathfinder@ cLux_CreateEntityComponent_Pathfinder(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxPathfinder@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_ProximitySensor}}
<syntaxhighlight lang="c++">cLuxProximitySensor@ cLux_CreateEntityComponent_ProximitySensor(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxProximitySensor@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_SoundListener}}
<syntaxhighlight lang="c++">cLuxSoundListener@ cLux_CreateEntityComponent_SoundListener(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxSoundListener@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_StateMachine}}
<syntaxhighlight lang="c++">cLuxStateMachine@ cLux_CreateEntityComponent_StateMachine(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxStateMachine@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateEntityComponent_VerletAnimation}}
<syntaxhighlight lang="c++">cLuxVerletAnimation@ cLux_CreateEntityComponent_VerletAnimation(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxVerletAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateHTMLImage}}
<syntaxhighlight lang="c++">tString cLux_CreateHTMLImage(const tString &in asSrc,
                             const tString &in asTitle = "",
                             const cVector2l &in avSize = cVector2l_MinusOne)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSrc|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asTitle|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateHTMLParagraph}}
<syntaxhighlight lang="c++">tString cLux_CreateHTMLParagraph(const tString &in asContent)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asContent|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateHTMLTag}}
<syntaxhighlight lang="c++">tString cLux_CreateHTMLTag(const tString &in asTag,
                           const tString &in asContent = "",
                           const tString &in asParams = "")</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asTag|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asContent|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asParams|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateScriptImGui}}
<syntaxhighlight lang="c++">cLuxScriptImGui@ cLux_CreateScriptImGui(const tString &in asName,
                                        bool abRegisterForDrawing,
                                        bool abSkipResetOnRegistration = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abRegisterForDrawing|bool|}}
{{CodeDocDetailParam|abSkipResetOnRegistration|bool|}}
{{CodeDocDetailReturn|cLuxScriptImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_CreateUserComponent}}
<syntaxhighlight lang="c++">iScrUserComponent_Interface@ cLux_CreateUserComponent(iLuxEntity@ apEntity,
                                                      const tString &in asComponentName,
                                                      const tString &in asScriptFile,
                                                      const tString &in asScriptClass,
                                                      int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|asComponentName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|iScrUserComponent_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DebugModeOn}}
<syntaxhighlight lang="c++">bool cLux_DebugModeOn()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DecUnderwaterEffectUserCount}}
<syntaxhighlight lang="c++">void cLux_DecUnderwaterEffectUserCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DeloadMap}}
<syntaxhighlight lang="c++">void cLux_DeloadMap(const tString &in asTransferArea)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asTransferArea|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DisableSaving}}
<syntaxhighlight lang="c++">void cLux_DisableSaving(float afDuration)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDuration|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DrawDebugText}}
<syntaxhighlight lang="c++">float cLux_DrawDebugText(const tString &in asText,
                         float afY,
                         float afSize = 14,
                         cColor aColor = cColor,
                          1,
                          1,
                         bool abAddNewLine = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afY|float|}}
{{CodeDocDetailParam|afSize|float|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../../|../../]]|}}
{{CodeDocDetailParam|1|[[../../|../../]]|}}
{{CodeDocDetailParam|abAddNewLine|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DrawHint}}
<syntaxhighlight lang="c++">void cLux_DrawHint(cImGui @apImGui,
                   float afTimeStep,
                   const cImGuiLabelData &in aLabel,
                   const cVector3f &in avPosition,
                   float afLineWidth,
                   float afLineSpacing,
                   const tWString &in avTextLines,
                   const cLuxScreenTextIcon@ &in avIcons,
                   const array &in avIconsPerLine)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apImGui|[[../../cImGui|cImGui]]|}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailParam|aLabel|[[../../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailParam|avPosition|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afLineWidth|float|}}
{{CodeDocDetailParam|afLineSpacing|float|}}
{{CodeDocDetailParam|avTextLines|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|avIcons|[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]|}}
{{CodeDocDetailParam|avIconsPerLine|[[../../array|array]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DrawScreenText}}
<syntaxhighlight lang="c++">void cLux_DrawScreenText(cImGui @apImGui,
                         float afTimeStep,
                         const cImGuiLabelData &in aLabel,
                         const cVector3f &in avPosition,
                         float afLineWidth,
                         float afLineSpacing,
                         const tWString &in avTextLines,
                         const cLuxScreenTextIcon@ &in avIcons,
                         const array &in avIconsPerLine)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apImGui|[[../../cImGui|cImGui]]|}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailParam|aLabel|[[../../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailParam|avPosition|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afLineWidth|float|}}
{{CodeDocDetailParam|afLineSpacing|float|}}
{{CodeDocDetailParam|avTextLines|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|avIcons|[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]|}}
{{CodeDocDetailParam|avIconsPerLine|[[../../array|array]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DrawSetToScreen}}
<syntaxhighlight lang="c++">void cLux_DrawSetToScreen(bool abClearScreen,
                          const cColor &in aCol,
                          cGuiSet@ apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abClearScreen|bool|}}
{{CodeDocDetailParam|aCol|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|apSet|[[../../cGuiSet|cGuiSet@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_DropPageFocus}}
<syntaxhighlight lang="c++">void cLux_DropPageFocus(const tString &in asX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asX|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_EnableSaving}}
<syntaxhighlight lang="c++">void cLux_EnableSaving()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_Exit}}
<syntaxhighlight lang="c++">void cLux_Exit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetAchievementHandler}}
<syntaxhighlight lang="c++">iLuxAchievementHandler@ cLux_GetAchievementHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxAchievementHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetAverageBrightness}}
<syntaxhighlight lang="c++">float cLux_GetAverageBrightness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetBodyEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ cLux_GetBodyEntity(iPhysicsBody @apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apBody|[[../../iPhysicsBody|iPhysicsBody]]|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetClosestBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ cLux_GetClosestBody(const cVector3f &in avStart,
                                  const cVector3f &in avDir,
                                  float afRayLength,
                                  float &out afDistance,
                                  cVector3f &out avSurfaceNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|afDistance|float|}}
{{CodeDocDetailParam|avSurfaceNormal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetClosestCharCollideBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ cLux_GetClosestCharCollideBody(const cVector3f &in avStart,
                                             const cVector3f &in avDir,
                                             float afRayLength,
                                             float &out afDistance,
                                             cVector3f &out avSurfaceNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|afDistance|float|}}
{{CodeDocDetailParam|avSurfaceNormal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetClosestCharCollider}}
<syntaxhighlight lang="c++">bool cLux_GetClosestCharCollider(const cVector3f &in avStart,
                                 const cVector3f &in avDir,
                                 float afRayLength,
                                 bool abCheckDynamic,
                                 cLuxClosestCharCollider @apOutput)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|abCheckDynamic|bool|}}
{{CodeDocDetailParam|@apOutput|[[../../cLuxClosestCharCollider|cLuxClosestCharCollider]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetClosestEntity}}
<syntaxhighlight lang="c++">bool cLux_GetClosestEntity(const cVector3f &in avStart,
                           const cVector3f &in avDir,
                           float afRayLength,
                           int alIteractType,
                           bool abCheckLineOfSight,
                           cLuxClosestEntityData @apOutput)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDir|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|alIteractType|int|}}
{{CodeDocDetailParam|abCheckLineOfSight|bool|}}
{{CodeDocDetailParam|@apOutput|[[../../cLuxClosestEntityData|cLuxClosestEntityData]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetConsoleMaps}}
<syntaxhighlight lang="c++">void cLux_GetConsoleMaps(tString &out avMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMaps|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetCurrentImGui}}
<syntaxhighlight lang="c++">cImGui@ cLux_GetCurrentImGui()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetCurrentLanguage}}
<syntaxhighlight lang="c++">const tString& cLux_GetCurrentLanguage()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetCurrentMap}}
<syntaxhighlight lang="c++">cLuxMap@ cLux_GetCurrentMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetCurrentUserProfilePath}}
<syntaxhighlight lang="c++">tWString cLux_GetCurrentUserProfilePath()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetDebugGameSpeed}}
<syntaxhighlight lang="c++">int cLux_GetDebugGameSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetDefaultFont}}
<syntaxhighlight lang="c++">iFontData@ cLux_GetDefaultFont()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iFontData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetDefaultGameLanguage}}
<syntaxhighlight lang="c++">tString cLux_GetDefaultGameLanguage()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetDialogHandler}}
<syntaxhighlight lang="c++">cLuxDialogHandler@ cLux_GetDialogHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxDialogHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetEffectHandler}}
<syntaxhighlight lang="c++">cLuxEffectHandler@ cLux_GetEffectHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxEffectHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetEventDatabaseHandler}}
<syntaxhighlight lang="c++">cLuxEventDatabaseHandler@ cLux_GetEventDatabaseHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxEventDatabaseHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGameConfig}}
<syntaxhighlight lang="c++">cConfigFile@ cLux_GetGameConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cConfigFile@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGameHudImGui}}
<syntaxhighlight lang="c++">cImGui@ cLux_GetGameHudImGui()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGameHudSet}}
<syntaxhighlight lang="c++">cGuiSet@ cLux_GetGameHudSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGameLanguageFolder}}
<syntaxhighlight lang="c++">tString cLux_GetGameLanguageFolder()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGamePaused}}
<syntaxhighlight lang="c++">bool cLux_GetGamePaused()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGameTime}}
<syntaxhighlight lang="c++">double cLux_GetGameTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|double|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGodModeActivated}}
<syntaxhighlight lang="c++">bool cLux_GetGodModeActivated()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetGuiHandler}}
<syntaxhighlight lang="c++">cLuxGuiHandler@ cLux_GetGuiHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxGuiHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHelpGuiSet}}
<syntaxhighlight lang="c++">cGuiSet@ cLux_GetHelpGuiSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHideCrosshair}}
<syntaxhighlight lang="c++">bool cLux_GetHideCrosshair()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHideHints}}
<syntaxhighlight lang="c++">bool cLux_GetHideHints()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHidePopupIcons}}
<syntaxhighlight lang="c++">bool cLux_GetHidePopupIcons()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHidingEffectsActive}}
<syntaxhighlight lang="c++">bool cLux_GetHidingEffectsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudDisplayScale}}
<syntaxhighlight lang="c++">float cLux_GetHudDisplayScale()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualCenterScreenSize}}
<syntaxhighlight lang="c++">const cVector2f& cLux_GetHudVirtualCenterScreenSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualCenterScreenStartPos}}
<syntaxhighlight lang="c++">const cVector3f& cLux_GetHudVirtualCenterScreenStartPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualCenterSize}}
<syntaxhighlight lang="c++">const cVector2f& cLux_GetHudVirtualCenterSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualOffset}}
<syntaxhighlight lang="c++">const cVector2f& cLux_GetHudVirtualOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualSize}}
<syntaxhighlight lang="c++">const cVector2f& cLux_GetHudVirtualSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetHudVirtualStartPos}}
<syntaxhighlight lang="c++">const cVector3f& cLux_GetHudVirtualStartPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetInputFocusImGui}}
<syntaxhighlight lang="c++">cImGui@ cLux_GetInputFocusImGui()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetInputHandler}}
<syntaxhighlight lang="c++">cLuxInputHandler@ cLux_GetInputHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxInputHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetInteractionWhiteListActive}}
<syntaxhighlight lang="c++">bool cLux_GetInteractionWhiteListActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetKeyConfig}}
<syntaxhighlight lang="c++">cConfigFile@ cLux_GetKeyConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cConfigFile@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetLightLeveAtPosWithoutIgnoredLights}}
<syntaxhighlight lang="c++">float cLux_GetLightLeveAtPosWithoutIgnoredLights(const cVector3f &in avPos,
                                                 float afRadiusAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadiusAdd|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetLightLevelAtPos}}
<syntaxhighlight lang="c++">float cLux_GetLightLevelAtPos(const cVector3f &in avPos,
                              iLight @apSkipLight,
                              float afRadiusAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|@apSkipLight|[[../../iLight|iLight]]|}}
{{CodeDocDetailParam|afRadiusAdd|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetLogAverageBrightness}}
<syntaxhighlight lang="c++">float cLux_GetLogAverageBrightness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetLookAtCallbacksActive}}
<syntaxhighlight lang="c++">bool cLux_GetLookAtCallbacksActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetMainMenuFile}}
<syntaxhighlight lang="c++">const tString& cLux_GetMainMenuFile()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetModHandler}}
<syntaxhighlight lang="c++">cLuxModHandler@ cLux_GetModHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxModHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetMusicHandler}}
<syntaxhighlight lang="c++">cLuxMusicHandler@ cLux_GetMusicHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxMusicHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetPlayer}}
<syntaxhighlight lang="c++">cLuxPlayer@ cLux_GetPlayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxPlayer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetPreloadMap}}
<syntaxhighlight lang="c++">cLuxMap@ cLux_GetPreloadMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetPrevInputFocusImGui}}
<syntaxhighlight lang="c++">cImGui@ cLux_GetPrevInputFocusImGui()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetProfilerActive}}
<syntaxhighlight lang="c++">int cLux_GetProfilerActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetSaveConfigAtExit}}
<syntaxhighlight lang="c++">bool cLux_GetSaveConfigAtExit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetSaveHandler}}
<syntaxhighlight lang="c++">cLuxSaveHandler@ cLux_GetSaveHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxSaveHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetSavingEnabled}}
<syntaxhighlight lang="c++">bool cLux_GetSavingEnabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetSingleLightLevelAtPos}}
<syntaxhighlight lang="c++">float cLux_GetSingleLightLevelAtPos(const cVector3f &in avPos,
                                    tID a_idLight,
                                    float afRadiusAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|a_idLight|[[../../tID|tID]]|}}
{{CodeDocDetailParam|afRadiusAdd|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetSoundscapeHandler}}
<syntaxhighlight lang="c++">cLuxSoundscapeHandler@ cLux_GetSoundscapeHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxSoundscapeHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetStartPositions}}
<syntaxhighlight lang="c++">void cLux_GetStartPositions(tString &out avStartPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStartPos|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetStringDuration}}
<syntaxhighlight lang="c++">float cLux_GetStringDuration(const tWString &in asStr)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asStr|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetStringWFromDate}}
<syntaxhighlight lang="c++">tWString cLux_GetStringWFromDate(const cDate &in aDate)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDate|[[../../cDate|cDate]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetTextCatAndEntryFromString}}
<syntaxhighlight lang="c++">void cLux_GetTextCatAndEntryFromString(const tString &in asData,
                                       tString &out asOutCat,
                                       tString &out asOutEntry)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asData|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asOutCat|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asOutEntry|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUnderwaterEffectsActive}}
<syntaxhighlight lang="c++">bool cLux_GetUnderwaterEffectsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUserComponent}}
<syntaxhighlight lang="c++">iScrUserComponent_Interface@ cLux_GetUserComponent(iLuxEntity@ apEntity,
                                                   int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|iScrUserComponent_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUserComponentScriptInterface}}
<syntaxhighlight lang="c++">iScrUserComponent_Interface@ cLux_GetUserComponentScriptInterface(iLuxEntityComponent@ apComponent)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apComponent|[[../../iLuxEntityComponent|iLuxEntityComponent@]]|}}
{{CodeDocDetailReturn|iScrUserComponent_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUserConfig}}
<syntaxhighlight lang="c++">cConfigFile@ cLux_GetUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cConfigFile@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUserModuleFromID}}
<syntaxhighlight lang="c++">iScrUserModule_Interface@ cLux_GetUserModuleFromID(int alID,
                                                   bool abSilent = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|abSilent|bool|}}
{{CodeDocDetailReturn|iScrUserModule_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetUserModuleFromName}}
<syntaxhighlight lang="c++">iScrUserModule_Interface@ cLux_GetUserModuleFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iScrUserModule_Interface@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetViewport}}
<syntaxhighlight lang="c++">cViewport@ cLux_GetViewport()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cViewport@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_GetVoiceHandler}}
<syntaxhighlight lang="c++">cLuxVoiceHandler@ cLux_GetVoiceHandler()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxVoiceHandler@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_HasConfigLoadError}}
<syntaxhighlight lang="c++">bool cLux_HasConfigLoadError(tString &out asError)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asError|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_HasTranslation}}
<syntaxhighlight lang="c++">bool cLux_HasTranslation(const tString &in asCat,
                         const tString &in asEntry)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntry|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_HasUnderwaterEffectUsers}}
<syntaxhighlight lang="c++">bool cLux_HasUnderwaterEffectUsers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_HideDebugOutputOn}}
<syntaxhighlight lang="c++">bool cLux_HideDebugOutputOn()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Agent}}
<syntaxhighlight lang="c++">cLuxAgent@ cLux_ID_Agent(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxAgent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Area}}
<syntaxhighlight lang="c++">cLuxArea@ cLux_ID_Area(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Beam}}
<syntaxhighlight lang="c++">cBeam@ cLux_ID_Beam(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cBeam@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Billboard}}
<syntaxhighlight lang="c++">cBillboard@ cLux_ID_Billboard(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cBillboard@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_BillboardGroup}}
<syntaxhighlight lang="c++">cBillboardGroup@ cLux_ID_BillboardGroup(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cBillboardGroup@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Body}}
<syntaxhighlight lang="c++">iPhysicsBody@ cLux_ID_Body(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_CharacterBody}}
<syntaxhighlight lang="c++">iCharacterBody@ cLux_ID_CharacterBody(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_ClothEntity}}
<syntaxhighlight lang="c++">cClothEntity@ cLux_ID_ClothEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cClothEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Critter}}
<syntaxhighlight lang="c++">cLuxCritter@ cLux_ID_Critter(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxCritter@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Entity}}
<syntaxhighlight lang="c++">iLuxEntity@ cLux_ID_Entity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Entity3D}}
<syntaxhighlight lang="c++">iEntity3D@ cLux_ID_Entity3D(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_ExposureArea}}
<syntaxhighlight lang="c++">cExposureArea@ cLux_ID_ExposureArea(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cExposureArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_FogArea}}
<syntaxhighlight lang="c++">cFogArea@ cLux_ID_FogArea(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cFogArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_ForceField}}
<syntaxhighlight lang="c++">cForceField@ cLux_ID_ForceField(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cForceField@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_GuiSetEntity}}
<syntaxhighlight lang="c++">cGuiSetEntity@ cLux_ID_GuiSetEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cGuiSetEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Joint}}
<syntaxhighlight lang="c++">iPhysicsJoint@ cLux_ID_Joint(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iPhysicsJoint@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_LensFlare}}
<syntaxhighlight lang="c++">cLensFlare@ cLux_ID_LensFlare(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLensFlare@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Light}}
<syntaxhighlight lang="c++">iLight@ cLux_ID_Light(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iLight@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_LightMaskBox}}
<syntaxhighlight lang="c++">cLightMaskBox@ cLux_ID_LightMaskBox(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLightMaskBox@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_LiquidArea}}
<syntaxhighlight lang="c++">cLuxLiquidArea@ cLux_ID_LiquidArea(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxLiquidArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_MeshEntity}}
<syntaxhighlight lang="c++">cMeshEntity@ cLux_ID_MeshEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_ParticleSystem}}
<syntaxhighlight lang="c++">cParticleSystem@ cLux_ID_ParticleSystem(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cParticleSystem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_Prop}}
<syntaxhighlight lang="c++">cLuxProp@ cLux_ID_Prop(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxProp@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_PushableFogArea}}
<syntaxhighlight lang="c++">cLuxPushableFogArea@ cLux_ID_PushableFogArea(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxPushableFogArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_ReverbArea}}
<syntaxhighlight lang="c++">cLuxSoundscapeArea@ cLux_ID_ReverbArea(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cLuxSoundscapeArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_RopeEntity}}
<syntaxhighlight lang="c++">iRopeEntity@ cLux_ID_RopeEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|iRopeEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_SoundEntity}}
<syntaxhighlight lang="c++">cSoundEntity@ cLux_ID_SoundEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cSoundEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ID_SubMeshEntity}}
<syntaxhighlight lang="c++">cSubMeshEntity@ cLux_ID_SubMeshEntity(tID aID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aID|[[../../tID|tID]]|}}
{{CodeDocDetailReturn|cSubMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IncUnderwaterEffectUserCount}}
<syntaxhighlight lang="c++">void cLux_IncUnderwaterEffectUserCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IsChangingMap}}
<syntaxhighlight lang="c++">bool cLux_IsChangingMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IsLoadingScreenVisible}}
<syntaxhighlight lang="c++">bool cLux_IsLoadingScreenVisible()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IsPlayGoReady}}
<syntaxhighlight lang="c++">bool cLux_IsPlayGoReady(int64 &out alETA)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alETA|int64|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IsReadyToChangeMap}}
<syntaxhighlight lang="c++">bool cLux_IsReadyToChangeMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_IsStreamingMap}}
<syntaxhighlight lang="c++">bool cLux_IsStreamingMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_LoadScreenSetBarPosAndSize}}
<syntaxhighlight lang="c++">void cLux_LoadScreenSetBarPosAndSize(const cVector2f &in avPos,
                                     const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avSize|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_LoadScreenSetForceBackground}}
<syntaxhighlight lang="c++">void cLux_LoadScreenSetForceBackground(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_LoadScreenShowLoadingIcon}}
<syntaxhighlight lang="c++">void cLux_LoadScreenShowLoadingIcon(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_MapChangeIsTransfer}}
<syntaxhighlight lang="c++">bool cLux_MapChangeIsTransfer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_MapIsLoaded}}
<syntaxhighlight lang="c++">bool cLux_MapIsLoaded()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_OutputTextToFile}}
<syntaxhighlight lang="c++">void cLux_OutputTextToFile(const tWString &in asPath,
                           const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ParseString}}
<syntaxhighlight lang="c++">tWString cLux_ParseString(const tWString &in asInput)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInput|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ParseStringIntoScreenText}}
<syntaxhighlight lang="c++">void cLux_ParseStringIntoScreenText(const tWString &in asInput,
                                    cImGui @apImGui,
                                    const cLuxScreenTextFormatParameters & aFormatParams,
                                    tWString &out aOutLines,
                                    cLuxScreenTextIcon@ &out aIconArray,
                                    array &out aOutIconsPerLine,
                                    float &out afMaxLineHeight,
                                    float &out afDisplayTime,
                                    bool abTriggeredByGamepad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInput|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|@apImGui|[[../../cImGui|cImGui]]|}}
{{CodeDocDetailParam|aFormatParams|[[../../cLuxScreenTextFormatParameters|cLuxScreenTextFormatParameters]]|}}
{{CodeDocDetailParam|aOutLines|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|aIconArray|[[../../cLuxScreenTextIcon|cLuxScreenTextIcon@]]|}}
{{CodeDocDetailParam|aOutIconsPerLine|[[../../array|array]]|}}
{{CodeDocDetailParam|afMaxLineHeight|float|}}
{{CodeDocDetailParam|afDisplayTime|float|}}
{{CodeDocDetailParam|abTriggeredByGamepad|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PlayGuiSoundData}}
<syntaxhighlight lang="c++">bool cLux_PlayGuiSoundData(const tString &in asName,
                           eSoundEntryType aDestType,
                           float afVolMul,
                           bool abSkipPreviousRandom)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aDestType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailParam|afVolMul|float|}}
{{CodeDocDetailParam|abSkipPreviousRandom|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PlayGuiSoundDataEx}}
<syntaxhighlight lang="c++">bool cLux_PlayGuiSoundDataEx(const tString &in asName,
                             eSoundEntryType aDestType,
                             float afVolMul,
                             bool abSkipPreviousRandom,
                             cLuxSoundExtraData @apExtraData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aDestType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailParam|afVolMul|float|}}
{{CodeDocDetailParam|abSkipPreviousRandom|bool|}}
{{CodeDocDetailParam|@apExtraData|[[../../cLuxSoundExtraData|cLuxSoundExtraData]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadEntity}}
<syntaxhighlight lang="c++">void cLux_PreloadEntity(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadGuiGfx}}
<syntaxhighlight lang="c++">void cLux_PreloadGuiGfx(const tString &in asFile,
                        eImGuiGfx aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../../eImGuiGfx|eImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadMap}}
<syntaxhighlight lang="c++">void cLux_PreloadMap(const tString &in asMapName,
                     eWorldStreamPriority aPrio = eWorldStreamPriority_Normal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMapName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aPrio|[[../../eWorldStreamPriority|eWorldStreamPriority]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadMaterial}}
<syntaxhighlight lang="c++">void cLux_PreloadMaterial(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadParticleSystem}}
<syntaxhighlight lang="c++">void cLux_PreloadParticleSystem(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadSound}}
<syntaxhighlight lang="c++">void cLux_PreloadSound(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_PreloadWebpage}}
<syntaxhighlight lang="c++">void cLux_PreloadWebpage(const tString &in asX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asX|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ProfileEnd}}
<syntaxhighlight lang="c++">void cLux_ProfileEnd(const tString &in asMarker)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMarker|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ProfileStart}}
<syntaxhighlight lang="c++">void cLux_ProfileStart(const tString &in asMarker)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMarker|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_RayDamage}}
<syntaxhighlight lang="c++">void cLux_RayDamage(const cVector3f &in avStart,
                    const cVector3f &in avDirection,
                    float afRayLength,
                    float afDamage,
                    float afForce,
                    float afMaxImpulse,
                    int alStrength,
                    float afHitSpeed,
                    int aDamageType,
                    bool abCheckAgents,
                    bool abCheckPlayer,
                    bool abCheckProps,
                    bool abLethalForPlayer,
                    tID a_idSource,
                    int alInstanceId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avDirection|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRayLength|float|}}
{{CodeDocDetailParam|afDamage|float|}}
{{CodeDocDetailParam|afForce|float|}}
{{CodeDocDetailParam|afMaxImpulse|float|}}
{{CodeDocDetailParam|alStrength|int|}}
{{CodeDocDetailParam|afHitSpeed|float|}}
{{CodeDocDetailParam|aDamageType|int|}}
{{CodeDocDetailParam|abCheckAgents|bool|}}
{{CodeDocDetailParam|abCheckPlayer|bool|}}
{{CodeDocDetailParam|abCheckProps|bool|}}
{{CodeDocDetailParam|abLethalForPlayer|bool|}}
{{CodeDocDetailParam|a_idSource|[[../../tID|tID]]|}}
{{CodeDocDetailParam|alInstanceId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_RegisterCollisionRadius}}
<syntaxhighlight lang="c++">void cLux_RegisterCollisionRadius(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_RegisterEventListenerUserModule_AgentSetActive}}
<syntaxhighlight lang="c++">void cLux_RegisterEventListenerUserModule_AgentSetActive(const tString &in asModuleName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asModuleName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ReloadGame}}
<syntaxhighlight lang="c++">void cLux_ReloadGame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_RenderBackgroundScreen}}
<syntaxhighlight lang="c++">void cLux_RenderBackgroundScreen(bool abDrawFullHUD)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abDrawFullHUD|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ResetShudderEffects}}
<syntaxhighlight lang="c++">void cLux_ResetShudderEffects(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_RunTestButton}}
<syntaxhighlight lang="c++">void cLux_RunTestButton(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SaveScreenshotToFile}}
<syntaxhighlight lang="c++">void cLux_SaveScreenshotToFile(const tWString &in asPath,
                               const cVector2l &in avSize = cVector2l_MinusOne,
                               bool abKeepAspect = true,
                               float afBrightness = 1.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|abKeepAspect|bool|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ScriptDebugOn}}
<syntaxhighlight lang="c++">bool cLux_ScriptDebugOn()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SendInputToGui}}
<syntaxhighlight lang="c++">void cLux_SendInputToGui(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetAreaOffline}}
<syntaxhighlight lang="c++">void cLux_SetAreaOffline(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetComputeAverageFrameColor}}
<syntaxhighlight lang="c++">void cLux_SetComputeAverageFrameColor(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetDebugGameSpeed}}
<syntaxhighlight lang="c++">void cLux_SetDebugGameSpeed(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetDebugInfoWindowText}}
<syntaxhighlight lang="c++">void cLux_SetDebugInfoWindowText(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetGamePaused}}
<syntaxhighlight lang="c++">void cLux_SetGamePaused(bool abX,
                        bool abPauseMusic,
                        bool abPauseSounds,
                        bool abPauseAmbience)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abPauseMusic|bool|}}
{{CodeDocDetailParam|abPauseSounds|bool|}}
{{CodeDocDetailParam|abPauseAmbience|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetGodModeActivated}}
<syntaxhighlight lang="c++">void cLux_SetGodModeActivated(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetHideDebugOutputOn}}
<syntaxhighlight lang="c++">void cLux_SetHideDebugOutputOn(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetHideModeEffectsActive}}
<syntaxhighlight lang="c++">void cLux_SetHideModeEffectsActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetImGuiInputFocus}}
<syntaxhighlight lang="c++">void cLux_SetImGuiInputFocus(cImGui@ apImGui,
                             bool abShowMouse)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apImGui|[[../../cImGui|cImGui@]]|}}
{{CodeDocDetailParam|abShowMouse|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetInteractionWhiteListActive}}
<syntaxhighlight lang="c++">void cLux_SetInteractionWhiteListActive(bool abX,
                                        bool abClearList)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abClearList|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetLookAtCallbacksActive}}
<syntaxhighlight lang="c++">void cLux_SetLookAtCallbacksActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetMapPreloadPriority}}
<syntaxhighlight lang="c++">void cLux_SetMapPreloadPriority(eWorldStreamPriority aPrio)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPrio|[[../../eWorldStreamPriority|eWorldStreamPriority]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetProfilerActive}}
<syntaxhighlight lang="c++">void cLux_SetProfilerActive(int alMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMode|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetProfilerFilter}}
<syntaxhighlight lang="c++">void cLux_SetProfilerFilter(const tString &in asFilter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFilter|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetProfilerPauseInterval}}
<syntaxhighlight lang="c++">void cLux_SetProfilerPauseInterval(float afInterval)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afInterval|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetScriptDebugOn}}
<syntaxhighlight lang="c++">void cLux_SetScriptDebugOn(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetTerrainSettings}}
<syntaxhighlight lang="c++">void cLux_SetTerrainSettings(int alTextureSize,
                             int alDiffuseTexelsPerMeter,
                             int alNormalTexelsPerMeter,
                             int alSpecTexelsPerMeter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alTextureSize|int|}}
{{CodeDocDetailParam|alDiffuseTexelsPerMeter|int|}}
{{CodeDocDetailParam|alNormalTexelsPerMeter|int|}}
{{CodeDocDetailParam|alSpecTexelsPerMeter|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetUnderwaterEffectsActive}}
<syntaxhighlight lang="c++">void cLux_SetUnderwaterEffectsActive(bool abX,
                                     bool abUseStartAndEndEffects)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abUseStartAndEndEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_SetupDefaultGlobalReverb}}
<syntaxhighlight lang="c++">void cLux_SetupDefaultGlobalReverb(eSoundReverbPreset aType,
                                   float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eSoundReverbPreset|eSoundReverbPreset]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ShapeDamage}}
<syntaxhighlight lang="c++">void cLux_ShapeDamage(iCollideShape @apShape,
                      const cMatrixf &in a_mtxTransform,
                      const cVector3f &in avOrigin,
                      float afDamage,
                      float afForce,
                      float afMaxImpulse,
                      int alStrength,
                      float afHitSpeed,
                      int aDamageType,
                      bool abCheckAgents,
                      bool abCheckPlayer,
                      bool abCheckProps,
                      bool abLethalForPlayer,
                      tID a_idSource,
                      int alInstanceId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apShape|[[../../iCollideShape|iCollideShape]]|}}
{{CodeDocDetailParam|a_mtxTransform|[[../../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|avOrigin|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afDamage|float|}}
{{CodeDocDetailParam|afForce|float|}}
{{CodeDocDetailParam|afMaxImpulse|float|}}
{{CodeDocDetailParam|alStrength|int|}}
{{CodeDocDetailParam|afHitSpeed|float|}}
{{CodeDocDetailParam|aDamageType|int|}}
{{CodeDocDetailParam|abCheckAgents|bool|}}
{{CodeDocDetailParam|abCheckPlayer|bool|}}
{{CodeDocDetailParam|abCheckProps|bool|}}
{{CodeDocDetailParam|abLethalForPlayer|bool|}}
{{CodeDocDetailParam|a_idSource|[[../../tID|tID]]|}}
{{CodeDocDetailParam|alInstanceId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ShowEntityInfoOn}}
<syntaxhighlight lang="c++">bool cLux_ShowEntityInfoOn()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_StartMap}}
<syntaxhighlight lang="c++">void cLux_StartMap(const tString &in asMapName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMapName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_StartNewGame}}
<syntaxhighlight lang="c++">void cLux_StartNewGame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_TeleportToStartPos}}
<syntaxhighlight lang="c++">void cLux_TeleportToStartPos(const tString &in asStartPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asStartPos|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_TestModeOn}}
<syntaxhighlight lang="c++">bool cLux_TestModeOn()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToAgent}}
<syntaxhighlight lang="c++">cLuxAgent@ cLux_ToAgent(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxAgent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToArea}}
<syntaxhighlight lang="c++">cLuxArea@ cLux_ToArea(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToCritter}}
<syntaxhighlight lang="c++">cLuxCritter@ cLux_ToCritter(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxCritter@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToLiquidArea}}
<syntaxhighlight lang="c++">cLuxLiquidArea@ cLux_ToLiquidArea(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxLiquidArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToProp}}
<syntaxhighlight lang="c++">cLuxProp@ cLux_ToProp(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxProp@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_ToPushableFogArea}}
<syntaxhighlight lang="c++">cLuxPushableFogArea@ cLux_ToPushableFogArea(iLuxEntity @apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntity|[[../../iLuxEntity|iLuxEntity]]|}}
{{CodeDocDetailReturn|cLuxPushableFogArea@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_Translate}}
<syntaxhighlight lang="c++">const tWString& cLux_Translate(const tString &in asCat,
                               const tString &in asEntry)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntry|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_TranslatePlatformSpecific}}
<syntaxhighlight lang="c++">const tWString& cLux_TranslatePlatformSpecific(const tString &in asCat,
                                               const tString &in asEntry)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntry|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cLux_TruncateTextFile}}
<syntaxhighlight lang="c++">void cLux_TruncateTextFile(const tWString &in asPath,
                           const tString &in asPattern,
                           int alTimes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asPattern|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alTimes|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}