{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#cResources_AddLanguageFile|cResources_AddLanguageFile]](const [[../../tString|tString]] &in asFilePath, bool abAddResourceDirs)|}}
{{CodeDocSummaryItem|bool|[[#cResources_AddResourceDir|cResources_AddResourceDir]](const [[../../tWString|tWString]] &in asDir, bool abAddSubDirectories, const [[../../tString|tString]] &in asMask)|}}
{{CodeDocSummaryItem|void|[[#cResources_ClearResourceDirs|cResources_ClearResourceDirs]]()|}}
{{CodeDocSummaryItem|void|[[#cResources_ClearTranslations|cResources_ClearTranslations]]()|}}
{{CodeDocSummaryItem|[[../../iFontData|iFontData]]|[[#cResources_CreateFontData|cResources_CreateFontData]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iGpuShader|iGpuShader]]|[[#cResources_CreateGpuShader|cResources_CreateGpuShader]](const [[../../tString|tString]] &in asName, int alType, [[../../cPrepParserVarContainer|cPrepParserVarContainer]] @apVarCont)|}}
{{CodeDocSummaryItem|[[../../iGpuShader|iGpuShader]]|[[#cResources_CreateGpuShader|cResources_CreateGpuShader]](const [[../../tString|tString]] &in asName, int alType)|}}
{{CodeDocSummaryItem|[[../../cFrameSubImage|cFrameSubImage]]|[[#cResources_CreateImage|cResources_CreateImage]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../cMaterial|cMaterial]]|[[#cResources_CreateMaterial|cResources_CreateMaterial]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../cMesh|cMesh]]|[[#cResources_CreateMesh|cResources_CreateMesh]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iSoundData|iSoundData]]|[[#cResources_CreateSoundData|cResources_CreateSoundData]](const [[../../tString|tString]] &in asName, bool abStream, bool abLooping, bool ab3, bool abNonBlockingLoad)|}}
{{CodeDocSummaryItem|[[../../cSoundEntityData|cSoundEntityData]]|[[#cResources_CreateSoundEntityData|cResources_CreateSoundEntityData]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iTexture|iTexture]]|[[#cResources_CreateTexture1D|cResources_CreateTexture1D]](const [[../../tString|tString]] &in asName, bool abUseMipMaps)|}}
{{CodeDocSummaryItem|[[../../iTexture|iTexture]]|[[#cResources_CreateTexture2D|cResources_CreateTexture2D]](const [[../../tString|tString]] &in asName, bool abUseMipMaps)|}}
{{CodeDocSummaryItem|[[../../iTexture|iTexture]]|[[#cResources_CreateTexture3D|cResources_CreateTexture3D]](const [[../../tString|tString]] &in asName, bool abUseMipMaps)|}}
{{CodeDocSummaryItem|[[../../iTexture|iTexture]]|[[#cResources_CreateTextureCubeMap|cResources_CreateTextureCubeMap]](const [[../../tString|tString]] &in asName, bool abUseMipMaps)|}}
{{CodeDocSummaryItem|[[../../iVideoStream|iVideoStream]]|[[#cResources_CreateVideo|cResources_CreateVideo]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyFontData|cResources_DestroyFontData]]([[../../iFontData|iFontData]] @apData)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyGpuShader|cResources_DestroyGpuShader]]([[../../iGpuShader|iGpuShader]] @apShader)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyImage|cResources_DestroyImage]]([[../../cFrameSubImage|cFrameSubImage]] @apData)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyMaterial|cResources_DestroyMaterial]]([[../../cMaterial|cMaterial]] @apMaterial)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyMesh|cResources_DestroyMesh]]([[../../cMesh|cMesh@]] apMesh)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroySoundData|cResources_DestroySoundData]]([[../../iSoundData|iSoundData@]] apData)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroySoundEntityData|cResources_DestroySoundEntityData]]([[../../cSoundEntityData|cSoundEntityData]] @apData)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyTexture|cResources_DestroyTexture]]([[../../iTexture|iTexture]] @apTexture)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyUnusedParticleSystems|cResources_DestroyUnusedParticleSystems]](int alMaxToKeep)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyUnusedSoundData|cResources_DestroyUnusedSoundData]](int alMaxToKeep)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyVideo|cResources_DestroyVideo]]([[../../iVideoStream|iVideoStream]] @apVideo)|}}
{{CodeDocSummaryItem|void|[[#cResources_DestroyXmlDocument|cResources_DestroyXmlDocument]]([[../../iXmlDocument|iXmlDocument@]] apDoc)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cResources_GetMaterialPhysicsName|cResources_GetMaterialPhysicsName]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|float|[[#cResources_GetMaterialTextureAnisotropy|cResources_GetMaterialTextureAnisotropy]]()|}}
{{CodeDocSummaryItem|int|[[#cResources_GetMaterialTextureFilter|cResources_GetMaterialTextureFilter]]()|}}
{{CodeDocSummaryItem|int|[[#cResources_GetMaterialTextureSizeDownScaleLevel|cResources_GetMaterialTextureSizeDownScaleLevel]]()|}}
{{CodeDocSummaryItem|bool|[[#cResources_LoadResourceDirsFile|cResources_LoadResourceDirsFile]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|[[../../iXmlDocument|iXmlDocument]]|[[#cResources_LoadXmlDocument|cResources_LoadXmlDocument]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cResources_PreloadParticleSystem|cResources_PreloadParticleSystem]](const [[../../tString|tString]] &in asDataName)|}}
{{CodeDocSummaryItem|void|[[#cResources_PreloadSoundEntityData|cResources_PreloadSoundEntityData]](const [[../../tString|tString]] &in asName, bool abNonBlockingLoad)|}}
{{CodeDocSummaryItem|void|[[#cResources_SetMaterialTextureAnisotropy|cResources_SetMaterialTextureAnisotropy]](float afX)|}}
{{CodeDocSummaryItem|void|[[#cResources_SetMaterialTextureFilter|cResources_SetMaterialTextureFilter]](int alFilter)|}}
{{CodeDocSummaryItem|void|[[#cResources_SetMaterialTextureSizeDownScaleLevel|cResources_SetMaterialTextureSizeDownScaleLevel]](int alLevel)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cResources_Translate|cResources_Translate]](const [[../../tString|tString]] &in asCat, const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cResources_AddLanguageFile}}
<syntaxhighlight lang="c++">bool cResources_AddLanguageFile(const tString &in asFilePath,
                                bool abAddResourceDirs)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFilePath|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAddResourceDirs|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_AddResourceDir}}
<syntaxhighlight lang="c++">bool cResources_AddResourceDir(const tWString &in asDir,
                               bool abAddSubDirectories,
                               const tString &in asMask)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asDir|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|abAddSubDirectories|bool|}}
{{CodeDocDetailParam|asMask|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_ClearResourceDirs}}
<syntaxhighlight lang="c++">void cResources_ClearResourceDirs()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_ClearTranslations}}
<syntaxhighlight lang="c++">void cResources_ClearTranslations()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateFontData}}
<syntaxhighlight lang="c++">iFontData@ cResources_CreateFontData(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iFontData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateGpuShader}}
<syntaxhighlight lang="c++">iGpuShader@ cResources_CreateGpuShader(const tString &in asName,
                                       int alType,
                                       cPrepParserVarContainer @apVarCont)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|@apVarCont|[[../../cPrepParserVarContainer|cPrepParserVarContainer]]|}}
{{CodeDocDetailReturn|iGpuShader@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateGpuShader}}
<syntaxhighlight lang="c++">iGpuShader@ cResources_CreateGpuShader(const tString &in asName,
                                       int alType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailReturn|iGpuShader@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateImage}}
<syntaxhighlight lang="c++">cFrameSubImage@ cResources_CreateImage(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cFrameSubImage@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateMaterial}}
<syntaxhighlight lang="c++">cMaterial@ cResources_CreateMaterial(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateMesh}}
<syntaxhighlight lang="c++">cMesh@ cResources_CreateMesh(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cMesh@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateSoundData}}
<syntaxhighlight lang="c++">iSoundData@ cResources_CreateSoundData(const tString &in asName,
                                       bool abStream,
                                       bool abLooping,
                                       bool ab3,
                                       bool abNonBlockingLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abStream|bool|}}
{{CodeDocDetailParam|abLooping|bool|}}
{{CodeDocDetailParam|ab3|bool|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailReturn|iSoundData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateSoundEntityData}}
<syntaxhighlight lang="c++">cSoundEntityData@ cResources_CreateSoundEntityData(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cSoundEntityData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateTexture1D}}
<syntaxhighlight lang="c++">iTexture@ cResources_CreateTexture1D(const tString &in asName,
                                     bool abUseMipMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseMipMaps|bool|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateTexture2D}}
<syntaxhighlight lang="c++">iTexture@ cResources_CreateTexture2D(const tString &in asName,
                                     bool abUseMipMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseMipMaps|bool|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateTexture3D}}
<syntaxhighlight lang="c++">iTexture@ cResources_CreateTexture3D(const tString &in asName,
                                     bool abUseMipMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseMipMaps|bool|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateTextureCubeMap}}
<syntaxhighlight lang="c++">iTexture@ cResources_CreateTextureCubeMap(const tString &in asName,
                                          bool abUseMipMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abUseMipMaps|bool|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_CreateVideo}}
<syntaxhighlight lang="c++">iVideoStream@ cResources_CreateVideo(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iVideoStream@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyFontData}}
<syntaxhighlight lang="c++">void cResources_DestroyFontData(iFontData @apData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apData|[[../../iFontData|iFontData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyGpuShader}}
<syntaxhighlight lang="c++">void cResources_DestroyGpuShader(iGpuShader @apShader)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apShader|[[../../iGpuShader|iGpuShader]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyImage}}
<syntaxhighlight lang="c++">void cResources_DestroyImage(cFrameSubImage @apData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apData|[[../../cFrameSubImage|cFrameSubImage]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyMaterial}}
<syntaxhighlight lang="c++">void cResources_DestroyMaterial(cMaterial @apMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apMaterial|[[../../cMaterial|cMaterial]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyMesh}}
<syntaxhighlight lang="c++">void cResources_DestroyMesh(cMesh@ apMesh)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMesh|[[../../cMesh|cMesh@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroySoundData}}
<syntaxhighlight lang="c++">void cResources_DestroySoundData(iSoundData@ apData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apData|[[../../iSoundData|iSoundData@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroySoundEntityData}}
<syntaxhighlight lang="c++">void cResources_DestroySoundEntityData(cSoundEntityData @apData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apData|[[../../cSoundEntityData|cSoundEntityData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyTexture}}
<syntaxhighlight lang="c++">void cResources_DestroyTexture(iTexture @apTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apTexture|[[../../iTexture|iTexture]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyUnusedParticleSystems}}
<syntaxhighlight lang="c++">void cResources_DestroyUnusedParticleSystems(int alMaxToKeep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMaxToKeep|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyUnusedSoundData}}
<syntaxhighlight lang="c++">void cResources_DestroyUnusedSoundData(int alMaxToKeep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMaxToKeep|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyVideo}}
<syntaxhighlight lang="c++">void cResources_DestroyVideo(iVideoStream @apVideo)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apVideo|[[../../iVideoStream|iVideoStream]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_DestroyXmlDocument}}
<syntaxhighlight lang="c++">void cResources_DestroyXmlDocument(iXmlDocument@ apDoc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apDoc|[[../../iXmlDocument|iXmlDocument@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_GetMaterialPhysicsName}}
<syntaxhighlight lang="c++">tString cResources_GetMaterialPhysicsName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_GetMaterialTextureAnisotropy}}
<syntaxhighlight lang="c++">float cResources_GetMaterialTextureAnisotropy()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_GetMaterialTextureFilter}}
<syntaxhighlight lang="c++">int cResources_GetMaterialTextureFilter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_GetMaterialTextureSizeDownScaleLevel}}
<syntaxhighlight lang="c++">int cResources_GetMaterialTextureSizeDownScaleLevel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_LoadResourceDirsFile}}
<syntaxhighlight lang="c++">bool cResources_LoadResourceDirsFile(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_LoadXmlDocument}}
<syntaxhighlight lang="c++">iXmlDocument@ cResources_LoadXmlDocument(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iXmlDocument@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_PreloadParticleSystem}}
<syntaxhighlight lang="c++">void cResources_PreloadParticleSystem(const tString &in asDataName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asDataName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_PreloadSoundEntityData}}
<syntaxhighlight lang="c++">void cResources_PreloadSoundEntityData(const tString &in asName,
                                       bool abNonBlockingLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abNonBlockingLoad|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_SetMaterialTextureAnisotropy}}
<syntaxhighlight lang="c++">void cResources_SetMaterialTextureAnisotropy(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_SetMaterialTextureFilter}}
<syntaxhighlight lang="c++">void cResources_SetMaterialTextureFilter(int alFilter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFilter|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_SetMaterialTextureSizeDownScaleLevel}}
<syntaxhighlight lang="c++">void cResources_SetMaterialTextureSizeDownScaleLevel(int alLevel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alLevel|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cResources_Translate}}
<syntaxhighlight lang="c++">const tWString& cResources_Translate(const tString &in asCat,
                                     const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCat|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}