{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|[[../../iDepthStencilBuffer|iDepthStencilBuffer]]|[[#cGraphics_CreateDepthStencilBuffer|cGraphics_CreateDepthStencilBuffer]](const [[../../cVector2l|cVector2l]] &in avSize, int alDepthBits, int alStencilBits, bool abLookForMatchingFirst)|}}
{{CodeDocSummaryItem|[[../../iFrameBuffer|iFrameBuffer]]|[[#cGraphics_CreateFrameBuffer|cGraphics_CreateFrameBuffer]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iGpuProgram|iGpuProgram]]|[[#cGraphics_CreateGpuProgram|cGraphics_CreateGpuProgram]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iGpuProgram|iGpuProgram]]|[[#cGraphics_CreateGpuProgramFromShaders|cGraphics_CreateGpuProgramFromShaders]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asVtxShader, const [[../../tString|tString]] &in asFragShader, [[../../cPrepParserVarContainer|cPrepParserVarContainer]] @apVarContainer)|}}
{{CodeDocSummaryItem|[[../../cHeightMap|cHeightMap]]|[[#cGraphics_CreateHeightMap|cGraphics_CreateHeightMap]]()|}}
{{CodeDocSummaryItem|[[../../cHeightMap|cHeightMap]]|[[#cGraphics_CreateHeightMapResizedCopy|cGraphics_CreateHeightMapResizedCopy]]([[../../cHeightMap|cHeightMap]] @apHeightMap, const [[../../cVector2l|cVector2l]] &in avSize)|}}
{{CodeDocSummaryItem|[[../../cPostEffect_ChromaticAberration|cPostEffect_ChromaticAberration]]|[[#cGraphics_CreatePostEffect_ChromaticAberration|cGraphics_CreatePostEffect_ChromaticAberration]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffect_ImageFadeFX|cPostEffect_ImageFadeFX]]|[[#cGraphics_CreatePostEffect_ImageFadeFX|cGraphics_CreatePostEffect_ImageFadeFX]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffect_ImageTrail|cPostEffect_ImageTrail]]|[[#cGraphics_CreatePostEffect_ImageTrail|cGraphics_CreatePostEffect_ImageTrail]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffect_RadialBlur|cPostEffect_RadialBlur]]|[[#cGraphics_CreatePostEffect_RadialBlur|cGraphics_CreatePostEffect_RadialBlur]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffect_ToneMapping|cPostEffect_ToneMapping]]|[[#cGraphics_CreatePostEffect_ToneMapping|cGraphics_CreatePostEffect_ToneMapping]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffect_VideoDistortion|cPostEffect_VideoDistortion]]|[[#cGraphics_CreatePostEffect_VideoDistortion|cGraphics_CreatePostEffect_VideoDistortion]]()|}}
{{CodeDocSummaryItem|[[../../cPostEffectComposite|cPostEffectComposite]]|[[#cGraphics_CreatePostEffectComposite|cGraphics_CreatePostEffectComposite]]()|}}
{{CodeDocSummaryItem|[[../../iTexture|iTexture]]|[[#cGraphics_CreateTexture|cGraphics_CreateTexture]](const [[../../tString|tString]] &in asName, [[../../eTextureType|eTextureType]] aType, [[../../eTextureUsage|eTextureUsage]] aUsage)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestoroyDepthStencilBuffer|cGraphics_DestoroyDepthStencilBuffer]]([[../../iDepthStencilBuffer|iDepthStencilBuffer@]] apBuffer)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyFrameBuffer|cGraphics_DestroyFrameBuffer]]([[../../iFrameBuffer|iFrameBuffer@]] apFrameBuffer)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyGpuProgram|cGraphics_DestroyGpuProgram]]([[../../iGpuProgram|iGpuProgram@]] apProgram)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyHeightMap|cGraphics_DestroyHeightMap]]([[../../cHeightMap|cHeightMap@]] apHeightMap)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyPostEffect|cGraphics_DestroyPostEffect]]([[../../iPostEffect|iPostEffect@]] apPostEffect)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyPostEffectComposite|cGraphics_DestroyPostEffectComposite]]([[../../cPostEffectComposite|cPostEffectComposite@]] apComposite)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_DestroyTexture|cGraphics_DestroyTexture]]([[../../iTexture|iTexture@]] apTexture)|}}
{{CodeDocSummaryItem|[[../../iDepthStencilBuffer|iDepthStencilBuffer]]|[[#cGraphics_FindDepthStencilBuffer|cGraphics_FindDepthStencilBuffer]](const [[../../cVector2l|cVector2l]] &in avSize, int alMinDepthBits, int alMinStencilBits)|}}
{{CodeDocSummaryItem|[[../../iLowLevelGraphics|iLowLevelGraphics]]|[[#cGraphics_GetLowLevel|cGraphics_GetLowLevel]]()|}}
{{CodeDocSummaryItem|[[../../iMaterialType|iMaterialType]]|[[#cGraphics_GetMaterialType|cGraphics_GetMaterialType]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../iRenderer|iRenderer]]|[[#cGraphics_GetRenderer|cGraphics_GetRenderer]]([[../../eRenderer|eRenderer]] aType)|}}
{{CodeDocSummaryItem|[[../../iFrameBuffer|iFrameBuffer]]|[[#cGraphics_GetTempFrameBuffer|cGraphics_GetTempFrameBuffer]](const [[../../cVector2l|cVector2l]] &in avSize, [[../../ePixelFormat|ePixelFormat]] aPixelFormat, int alIndex)|}}
{{CodeDocSummaryItem|[[../../cHeightMap|cHeightMap]]|[[#cGraphics_LoadHeightMapPackedRGB|cGraphics_LoadHeightMapPackedRGB]](const [[../../tString|tString]] &in asFileName)|}}
{{CodeDocSummaryItem|[[../../cHeightMap|cHeightMap]]|[[#cGraphics_LoadHeightMapRaw|cGraphics_LoadHeightMapRaw]](const [[../../tString|tString]] &in asFileName, const [[../../cVector2l|cVector2l]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#cGraphics_ReloadMaterials|cGraphics_ReloadMaterials]]()|}}
{{CodeDocSummaryItem|void|[[#cGraphics_ReloadRendererData|cGraphics_ReloadRendererData]]()|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cGraphics_CreateDepthStencilBuffer}}
<syntaxhighlight lang="c++">iDepthStencilBuffer@ cGraphics_CreateDepthStencilBuffer(const cVector2l &in avSize,
                                                        int alDepthBits,
                                                        int alStencilBits,
                                                        bool abLookForMatchingFirst)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|alDepthBits|int|}}
{{CodeDocDetailParam|alStencilBits|int|}}
{{CodeDocDetailParam|abLookForMatchingFirst|bool|}}
{{CodeDocDetailReturn|iDepthStencilBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateFrameBuffer}}
<syntaxhighlight lang="c++">iFrameBuffer@ cGraphics_CreateFrameBuffer(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iFrameBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateGpuProgram}}
<syntaxhighlight lang="c++">iGpuProgram@ cGraphics_CreateGpuProgram(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iGpuProgram@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateGpuProgramFromShaders}}
<syntaxhighlight lang="c++">iGpuProgram@ cGraphics_CreateGpuProgramFromShaders(const tString &in asName,
                                                   const tString &in asVtxShader,
                                                   const tString &in asFragShader,
                                                   cPrepParserVarContainer @apVarContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVtxShader|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asFragShader|[[../../tString|tString]]|}}
{{CodeDocDetailParam|@apVarContainer|[[../../cPrepParserVarContainer|cPrepParserVarContainer]]|}}
{{CodeDocDetailReturn|iGpuProgram@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateHeightMap}}
<syntaxhighlight lang="c++">cHeightMap@ cGraphics_CreateHeightMap()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cHeightMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateHeightMapResizedCopy}}
<syntaxhighlight lang="c++">cHeightMap@ cGraphics_CreateHeightMapResizedCopy(cHeightMap @apHeightMap,
                                                 const cVector2l &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apHeightMap|[[../../cHeightMap|cHeightMap]]|}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|cHeightMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_ChromaticAberration}}
<syntaxhighlight lang="c++">cPostEffect_ChromaticAberration@ cGraphics_CreatePostEffect_ChromaticAberration()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_ChromaticAberration@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_ImageFadeFX}}
<syntaxhighlight lang="c++">cPostEffect_ImageFadeFX@ cGraphics_CreatePostEffect_ImageFadeFX()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_ImageFadeFX@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_ImageTrail}}
<syntaxhighlight lang="c++">cPostEffect_ImageTrail@ cGraphics_CreatePostEffect_ImageTrail()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_ImageTrail@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_RadialBlur}}
<syntaxhighlight lang="c++">cPostEffect_RadialBlur@ cGraphics_CreatePostEffect_RadialBlur()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_RadialBlur@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_ToneMapping}}
<syntaxhighlight lang="c++">cPostEffect_ToneMapping@ cGraphics_CreatePostEffect_ToneMapping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_ToneMapping@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffect_VideoDistortion}}
<syntaxhighlight lang="c++">cPostEffect_VideoDistortion@ cGraphics_CreatePostEffect_VideoDistortion()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffect_VideoDistortion@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreatePostEffectComposite}}
<syntaxhighlight lang="c++">cPostEffectComposite@ cGraphics_CreatePostEffectComposite()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cPostEffectComposite@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_CreateTexture}}
<syntaxhighlight lang="c++">iTexture@ cGraphics_CreateTexture(const tString &in asName,
                                  eTextureType aType,
                                  eTextureUsage aUsage)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aType|[[../../eTextureType|eTextureType]]|}}
{{CodeDocDetailParam|aUsage|[[../../eTextureUsage|eTextureUsage]]|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestoroyDepthStencilBuffer}}
<syntaxhighlight lang="c++">void cGraphics_DestoroyDepthStencilBuffer(iDepthStencilBuffer@ apBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBuffer|[[../../iDepthStencilBuffer|iDepthStencilBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyFrameBuffer}}
<syntaxhighlight lang="c++">void cGraphics_DestroyFrameBuffer(iFrameBuffer@ apFrameBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFrameBuffer|[[../../iFrameBuffer|iFrameBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyGpuProgram}}
<syntaxhighlight lang="c++">void cGraphics_DestroyGpuProgram(iGpuProgram@ apProgram)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apProgram|[[../../iGpuProgram|iGpuProgram@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyHeightMap}}
<syntaxhighlight lang="c++">void cGraphics_DestroyHeightMap(cHeightMap@ apHeightMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apHeightMap|[[../../cHeightMap|cHeightMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyPostEffect}}
<syntaxhighlight lang="c++">void cGraphics_DestroyPostEffect(iPostEffect@ apPostEffect)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPostEffect|[[../../iPostEffect|iPostEffect@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyPostEffectComposite}}
<syntaxhighlight lang="c++">void cGraphics_DestroyPostEffectComposite(cPostEffectComposite@ apComposite)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apComposite|[[../../cPostEffectComposite|cPostEffectComposite@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_DestroyTexture}}
<syntaxhighlight lang="c++">void cGraphics_DestroyTexture(iTexture@ apTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apTexture|[[../../iTexture|iTexture@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_FindDepthStencilBuffer}}
<syntaxhighlight lang="c++">iDepthStencilBuffer@ cGraphics_FindDepthStencilBuffer(const cVector2l &in avSize,
                                                      int alMinDepthBits,
                                                      int alMinStencilBits)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|alMinDepthBits|int|}}
{{CodeDocDetailParam|alMinStencilBits|int|}}
{{CodeDocDetailReturn|iDepthStencilBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_GetLowLevel}}
<syntaxhighlight lang="c++">iLowLevelGraphics@ cGraphics_GetLowLevel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLowLevelGraphics@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_GetMaterialType}}
<syntaxhighlight lang="c++">iMaterialType@ cGraphics_GetMaterialType(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|iMaterialType@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_GetRenderer}}
<syntaxhighlight lang="c++">iRenderer@ cGraphics_GetRenderer(eRenderer aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eRenderer|eRenderer]]|}}
{{CodeDocDetailReturn|iRenderer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_GetTempFrameBuffer}}
<syntaxhighlight lang="c++">iFrameBuffer@ cGraphics_GetTempFrameBuffer(const cVector2l &in avSize,
                                           ePixelFormat aPixelFormat,
                                           int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|aPixelFormat|[[../../ePixelFormat|ePixelFormat]]|}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|iFrameBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_LoadHeightMapPackedRGB}}
<syntaxhighlight lang="c++">cHeightMap@ cGraphics_LoadHeightMapPackedRGB(const tString &in asFileName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cHeightMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_LoadHeightMapRaw}}
<syntaxhighlight lang="c++">cHeightMap@ cGraphics_LoadHeightMapRaw(const tString &in asFileName,
                                       const cVector2l &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avSize|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|cHeightMap@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_ReloadMaterials}}
<syntaxhighlight lang="c++">void cGraphics_ReloadMaterials()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGraphics_ReloadRendererData}}
<syntaxhighlight lang="c++">void cGraphics_ReloadRendererData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}