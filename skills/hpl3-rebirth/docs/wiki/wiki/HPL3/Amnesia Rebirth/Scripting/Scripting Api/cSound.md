{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#cSound_CheckSoundIsBlocked|cSound_CheckSoundIsBlocked]](const [[../../cVector3f|cVector3f]] &in avSoundPosition)|}}
{{CodeDocSummaryItem|[[../../iSoundEvent|iSoundEvent]]|[[#cSound_CreateEvent|cSound_CreateEvent]]([[../../iSoundEventData|iSoundEventData@]] apData, bool abNonBlockingLoad)|}}
{{CodeDocSummaryItem|void|[[#cSound_DestroyEvent|cSound_DestroyEvent]]([[../../iSoundEvent|iSoundEvent@]] apEvent)|}}
{{CodeDocSummaryItem|void|[[#cSound_DestroyUnusedData|cSound_DestroyUnusedData]](int alMaxAmount, int alMaxAge, bool abRemoveUnusedProjects, bool abRemovePreloaded)|}}
{{CodeDocSummaryItem|int|[[#cSound_FadeGlobalSpeed|cSound_FadeGlobalSpeed]](float afDestSpeed, float afSpeed, uint mAffectedTypes, int alId, bool abDestroyIdAtDest)|}}
{{CodeDocSummaryItem|int|[[#cSound_FadeGlobalVolume|cSound_FadeGlobalVolume]](float afDestVolume, float afSpeed, uint mAffectedTypes, int alId, bool abDestroyIdAtDest)|}}
{{CodeDocSummaryItem|void|[[#cSound_FadeHighPassFilter|cSound_FadeHighPassFilter]](float afDestCutOff, float afDestResonance, float afTime, uint mAffectedTypes)|}}
{{CodeDocSummaryItem|void|[[#cSound_FadeLowPassFilter|cSound_FadeLowPassFilter]](float afDestCutOff, float afDestResonance, float afTime, uint mAffectedTypes)|}}
{{CodeDocSummaryItem|void|[[#cSound_FadeMusicVolumeMul|cSound_FadeMusicVolumeMul]](float afDest, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#cSound_FadeOutAll|cSound_FadeOutAll]](uint mTypes, float afFadeSpeed, bool abDisableStop)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_GetEntry|cSound_GetEntry]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cSound_GetEventCategory_Gui|cSound_GetEventCategory_Gui]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cSound_GetEventCategory_World|cSound_GetEventCategory_World]]()|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cSound_GetEventCategory_WorldClean|cSound_GetEventCategory_WorldClean]]()|}}
{{CodeDocSummaryItem|[[../../iSoundEventData|iSoundEventData]]|[[#cSound_GetEventData|cSound_GetEventData]](const [[../../tString|tString]] &in asInternalPath, bool abLoadData, bool abNonBlockingLoad)|}}
{{CodeDocSummaryItem|[[../../iSoundEventProject|iSoundEventProject]]|[[#cSound_GetEventProject|cSound_GetEventProject]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|uint|[[#cSound_GetEventSystemMemoryUsed|cSound_GetEventSystemMemoryUsed]]()|}}
{{CodeDocSummaryItem|float|[[#cSound_GetGlobalSpeed|cSound_GetGlobalSpeed]]([[../../eSoundEntryType|eSoundEntryType]] aType)|}}
{{CodeDocSummaryItem|float|[[#cSound_GetGlobalSpeedFromId|cSound_GetGlobalSpeedFromId]](int alId)|}}
{{CodeDocSummaryItem|float|[[#cSound_GetGlobalVolume|cSound_GetGlobalVolume]]([[../../eSoundEntryType|eSoundEntryType]] aType)|}}
{{CodeDocSummaryItem|float|[[#cSound_GetGlobalVolumeFromId|cSound_GetGlobalVolumeFromId]](int alId)|}}
{{CodeDocSummaryItem|float|[[#cSound_GetMusicVolumeMul|cSound_GetMusicVolumeMul]]()|}}
{{CodeDocSummaryItem|bool|[[#cSound_GetSilent|cSound_GetSilent]]()|}}
{{CodeDocSummaryItem|bool|[[#cSound_IsPlaying|cSound_IsPlaying]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#cSound_IsValid|cSound_IsValid]]([[../../cSoundEntry|cSoundEntry]] @apEntry, int alID)|}}
{{CodeDocSummaryItem|void|[[#cSound_PauseAll|cSound_PauseAll]](uint mTypes)|}}
{{CodeDocSummaryItem|void|[[#cSound_PauseMusic|cSound_PauseMusic]]()|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_Play|cSound_Play]](const [[../../tString|tString]] &in asName, bool abLoop, float afVolume, const [[../../cVector3f|cVector3f]] &in avPos, float afMinDist, float afMaxDist, [[../../eSoundEntryType|eSoundEntryType]] aEntryType, bool abRelative, bool ab3D, int alPriorityModifier, bool abStream, bool abNonBlockedLoad)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_Play3D|cSound_Play3D]](const [[../../tString|tString]] &in asName, bool abLoop, float afVolume, const [[../../cVector3f|cVector3f]] &in avPos, float afMinDist, float afMaxDist, [[../../eSoundEntryType|eSoundEntryType]] aEntryType, bool abRelative, int alPriorityModifier, bool abStream, bool abNonBlockedLoad)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_PlayGui|cSound_PlayGui]](const [[../../tString|tString]] &in asName, bool abLoop, float afVolume, const [[../../cVector3f|cVector3f]] &in avPos, [[../../eSoundEntryType|eSoundEntryType]] aEntryType)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_PlayGuiStream|cSound_PlayGuiStream]](const [[../../tString|tString]] &in asFileName, bool abLoop, float afVolume, const [[../../cVector3f|cVector3f]] &in avPos, [[../../eSoundEntryType|eSoundEntryType]] aEntryType)|}}
{{CodeDocSummaryItem|bool|[[#cSound_PlayMusic|cSound_PlayMusic]](const [[../../tString|tString]] &in asFileName, float afVolume, float afVolumeFadeStepSize, float afFreq, float afFreqFadeStepSize, bool abLoop, bool abResume)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_PlaySoundEntityGui|cSound_PlaySoundEntityGui]](const [[../../tString|tString]] &in asName, bool abLoop, float afVolume, [[../../eSoundEntryType|eSoundEntryType]] aEntryType, const [[../../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|[[../../cSoundEntry|cSoundEntry]]|[[#cSound_PlaySoundEvent|cSound_PlaySoundEvent]](const [[../../tString|tString]] &in asInternalPath, float afVolume, const [[../../cVector3f|cVector3f]] &in avPos, const [[../../cVector3f|cVector3f]] &in avOrientation, bool abNonBlockLoad)|}}
{{CodeDocSummaryItem|void|[[#cSound_PreloadGroup|cSound_PreloadGroup]](const [[../../tString|tString]] &in asInternalPath, bool abNonBlockingLoad, bool abSubGroups)|}}
{{CodeDocSummaryItem|void|[[#cSound_PreloadProject|cSound_PreloadProject]](const [[../../tString|tString]] &in asName, bool abNonBlockingLoad)|}}
{{CodeDocSummaryItem|void|[[#cSound_PreloadSoundEvent|cSound_PreloadSoundEvent]](const [[../../tString|tString]] &in asInternalPath)|}}
{{CodeDocSummaryItem|void|[[#cSound_ResumeAll|cSound_ResumeAll]](uint mTypes)|}}
{{CodeDocSummaryItem|void|[[#cSound_ResumeMusic|cSound_ResumeMusic]]()|}}
{{CodeDocSummaryItem|void|[[#cSound_SetEventCategory_Gui|cSound_SetEventCategory_Gui]](const [[../../tString|tString]] &in asCat)|}}
{{CodeDocSummaryItem|void|[[#cSound_SetEventCategory_World|cSound_SetEventCategory_World]](const [[../../tString|tString]] &in asCat)|}}
{{CodeDocSummaryItem|void|[[#cSound_SetEventCategory_WorldClean|cSound_SetEventCategory_WorldClean]](const [[../../tString|tString]] &in asCat)|}}
{{CodeDocSummaryItem|int|[[#cSound_SetGlobalSpeed|cSound_SetGlobalSpeed]](float afSpeed, uint mAffectedTypes, int alId)|}}
{{CodeDocSummaryItem|int|[[#cSound_SetGlobalVolume|cSound_SetGlobalVolume]](float afVolume, uint mAffectedTypes, int alId)|}}
{{CodeDocSummaryItem|void|[[#cSound_SetMusicVolumeMul|cSound_SetMusicVolumeMul]](float afMul)|}}
{{CodeDocSummaryItem|void|[[#cSound_SetSilent|cSound_SetSilent]](bool abX)|}}
{{CodeDocSummaryItem|bool|[[#cSound_Stop|cSound_Stop]](const [[../../tString|tString]] &in asName, bool abPlayEnd)|}}
{{CodeDocSummaryItem|void|[[#cSound_StopAll|cSound_StopAll]](uint mTypes, bool abPlayEnd)|}}
{{CodeDocSummaryItem|void|[[#cSound_StopMusic|cSound_StopMusic]](float afFadeStepSize)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cSound_CheckSoundIsBlocked}}
<syntaxhighlight lang="c++">bool cSound_CheckSoundIsBlocked(const cVector3f &in avSoundPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSoundPosition|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_CreateEvent}}
<syntaxhighlight lang="c++">iSoundEvent@ cSound_CreateEvent(iSoundEventData@ apData,
                                bool abNonBlockingLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apData|[[../../iSoundEventData|iSoundEventData@]]|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailReturn|iSoundEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_DestroyEvent}}
<syntaxhighlight lang="c++">void cSound_DestroyEvent(iSoundEvent@ apEvent)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEvent|[[../../iSoundEvent|iSoundEvent@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_DestroyUnusedData}}
<syntaxhighlight lang="c++">void cSound_DestroyUnusedData(int alMaxAmount,
                              int alMaxAge,
                              bool abRemoveUnusedProjects,
                              bool abRemovePreloaded)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMaxAmount|int|}}
{{CodeDocDetailParam|alMaxAge|int|}}
{{CodeDocDetailParam|abRemoveUnusedProjects|bool|}}
{{CodeDocDetailParam|abRemovePreloaded|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeGlobalSpeed}}
<syntaxhighlight lang="c++">int cSound_FadeGlobalSpeed(float afDestSpeed,
                           float afSpeed,
                           uint mAffectedTypes,
                           int alId,
                           bool abDestroyIdAtDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestSpeed|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abDestroyIdAtDest|bool|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeGlobalVolume}}
<syntaxhighlight lang="c++">int cSound_FadeGlobalVolume(float afDestVolume,
                            float afSpeed,
                            uint mAffectedTypes,
                            int alId,
                            bool abDestroyIdAtDest)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestVolume|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abDestroyIdAtDest|bool|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeHighPassFilter}}
<syntaxhighlight lang="c++">void cSound_FadeHighPassFilter(float afDestCutOff,
                               float afDestResonance,
                               float afTime,
                               uint mAffectedTypes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestCutOff|float|}}
{{CodeDocDetailParam|afDestResonance|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeLowPassFilter}}
<syntaxhighlight lang="c++">void cSound_FadeLowPassFilter(float afDestCutOff,
                              float afDestResonance,
                              float afTime,
                              uint mAffectedTypes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestCutOff|float|}}
{{CodeDocDetailParam|afDestResonance|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeMusicVolumeMul}}
<syntaxhighlight lang="c++">void cSound_FadeMusicVolumeMul(float afDest,
                               float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDest|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_FadeOutAll}}
<syntaxhighlight lang="c++">void cSound_FadeOutAll(uint mTypes,
                       float afFadeSpeed,
                       bool abDisableStop)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|mTypes|uint|}}
{{CodeDocDetailParam|afFadeSpeed|float|}}
{{CodeDocDetailParam|abDisableStop|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEntry}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_GetEntry(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventCategory_Gui}}
<syntaxhighlight lang="c++">const tString& cSound_GetEventCategory_Gui()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventCategory_World}}
<syntaxhighlight lang="c++">const tString& cSound_GetEventCategory_World()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventCategory_WorldClean}}
<syntaxhighlight lang="c++">const tString& cSound_GetEventCategory_WorldClean()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventData}}
<syntaxhighlight lang="c++">iSoundEventData@ cSound_GetEventData(const tString &in asInternalPath,
                                     bool abLoadData,
                                     bool abNonBlockingLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInternalPath|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoadData|bool|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailReturn|iSoundEventData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventProject}}
<syntaxhighlight lang="c++">iSoundEventProject@ cSound_GetEventProject(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iSoundEventProject@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetEventSystemMemoryUsed}}
<syntaxhighlight lang="c++">uint cSound_GetEventSystemMemoryUsed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetGlobalSpeed}}
<syntaxhighlight lang="c++">float cSound_GetGlobalSpeed(eSoundEntryType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetGlobalSpeedFromId}}
<syntaxhighlight lang="c++">float cSound_GetGlobalSpeedFromId(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetGlobalVolume}}
<syntaxhighlight lang="c++">float cSound_GetGlobalVolume(eSoundEntryType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetGlobalVolumeFromId}}
<syntaxhighlight lang="c++">float cSound_GetGlobalVolumeFromId(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetMusicVolumeMul}}
<syntaxhighlight lang="c++">float cSound_GetMusicVolumeMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_GetSilent}}
<syntaxhighlight lang="c++">bool cSound_GetSilent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_IsPlaying}}
<syntaxhighlight lang="c++">bool cSound_IsPlaying(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_IsValid}}
<syntaxhighlight lang="c++">bool cSound_IsValid(cSoundEntry @apEntry,
                    int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apEntry|[[../../cSoundEntry|cSoundEntry]]|}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PauseAll}}
<syntaxhighlight lang="c++">void cSound_PauseAll(uint mTypes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|mTypes|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PauseMusic}}
<syntaxhighlight lang="c++">void cSound_PauseMusic()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_Play}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_Play(const tString &in asName,
                         bool abLoop,
                         float afVolume,
                         const cVector3f &in avPos,
                         float afMinDist,
                         float afMaxDist,
                         eSoundEntryType aEntryType,
                         bool abRelative,
                         bool ab3D,
                         int alPriorityModifier,
                         bool abStream,
                         bool abNonBlockedLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDist|float|}}
{{CodeDocDetailParam|afMaxDist|float|}}
{{CodeDocDetailParam|aEntryType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailParam|abRelative|bool|}}
{{CodeDocDetailParam|ab3D|bool|}}
{{CodeDocDetailParam|alPriorityModifier|int|}}
{{CodeDocDetailParam|abStream|bool|}}
{{CodeDocDetailParam|abNonBlockedLoad|bool|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_Play3D}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_Play3D(const tString &in asName,
                           bool abLoop,
                           float afVolume,
                           const cVector3f &in avPos,
                           float afMinDist,
                           float afMaxDist,
                           eSoundEntryType aEntryType,
                           bool abRelative,
                           int alPriorityModifier,
                           bool abStream,
                           bool abNonBlockedLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDist|float|}}
{{CodeDocDetailParam|afMaxDist|float|}}
{{CodeDocDetailParam|aEntryType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailParam|abRelative|bool|}}
{{CodeDocDetailParam|alPriorityModifier|int|}}
{{CodeDocDetailParam|abStream|bool|}}
{{CodeDocDetailParam|abNonBlockedLoad|bool|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PlayGui}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_PlayGui(const tString &in asName,
                            bool abLoop,
                            float afVolume,
                            const cVector3f &in avPos,
                            eSoundEntryType aEntryType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aEntryType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PlayGuiStream}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_PlayGuiStream(const tString &in asFileName,
                                  bool abLoop,
                                  float afVolume,
                                  const cVector3f &in avPos,
                                  eSoundEntryType aEntryType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aEntryType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PlayMusic}}
<syntaxhighlight lang="c++">bool cSound_PlayMusic(const tString &in asFileName,
                      float afVolume,
                      float afVolumeFadeStepSize,
                      float afFreq,
                      float afFreqFadeStepSize,
                      bool abLoop,
                      bool abResume)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|afVolumeFadeStepSize|float|}}
{{CodeDocDetailParam|afFreq|float|}}
{{CodeDocDetailParam|afFreqFadeStepSize|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abResume|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PlaySoundEntityGui}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_PlaySoundEntityGui(const tString &in asName,
                                       bool abLoop,
                                       float afVolume,
                                       eSoundEntryType aEntryType,
                                       const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|aEntryType|[[../../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PlaySoundEvent}}
<syntaxhighlight lang="c++">cSoundEntry@ cSound_PlaySoundEvent(const tString &in asInternalPath,
                                   float afVolume,
                                   const cVector3f &in avPos,
                                   const cVector3f &in avOrientation,
                                   bool abNonBlockLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInternalPath|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|avPos|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOrientation|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abNonBlockLoad|bool|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PreloadGroup}}
<syntaxhighlight lang="c++">void cSound_PreloadGroup(const tString &in asInternalPath,
                         bool abNonBlockingLoad,
                         bool abSubGroups)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInternalPath|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailParam|abSubGroups|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PreloadProject}}
<syntaxhighlight lang="c++">void cSound_PreloadProject(const tString &in asName,
                           bool abNonBlockingLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_PreloadSoundEvent}}
<syntaxhighlight lang="c++">void cSound_PreloadSoundEvent(const tString &in asInternalPath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInternalPath|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_ResumeAll}}
<syntaxhighlight lang="c++">void cSound_ResumeAll(uint mTypes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|mTypes|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_ResumeMusic}}
<syntaxhighlight lang="c++">void cSound_ResumeMusic()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetEventCategory_Gui}}
<syntaxhighlight lang="c++">void cSound_SetEventCategory_Gui(const tString &in asCat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetEventCategory_World}}
<syntaxhighlight lang="c++">void cSound_SetEventCategory_World(const tString &in asCat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetEventCategory_WorldClean}}
<syntaxhighlight lang="c++">void cSound_SetEventCategory_WorldClean(const tString &in asCat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetGlobalSpeed}}
<syntaxhighlight lang="c++">int cSound_SetGlobalSpeed(float afSpeed,
                          uint mAffectedTypes,
                          int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetGlobalVolume}}
<syntaxhighlight lang="c++">int cSound_SetGlobalVolume(float afVolume,
                           uint mAffectedTypes,
                           int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|mAffectedTypes|uint|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetMusicVolumeMul}}
<syntaxhighlight lang="c++">void cSound_SetMusicVolumeMul(float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_SetSilent}}
<syntaxhighlight lang="c++">void cSound_SetSilent(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_Stop}}
<syntaxhighlight lang="c++">bool cSound_Stop(const tString &in asName,
                 bool abPlayEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPlayEnd|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_StopAll}}
<syntaxhighlight lang="c++">void cSound_StopAll(uint mTypes,
                    bool abPlayEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|mTypes|uint|}}
{{CodeDocDetailParam|abPlayEnd|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSound_StopMusic}}
<syntaxhighlight lang="c++">void cSound_StopMusic(float afFadeStepSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFadeStepSize|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}