{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxFilledRect|cGui_CreateGfxFilledRect]](const [[../../cColor|cColor]] &in aColor, [[../../eGuiMaterial|eGuiMaterial]] aMaterial)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxImage|cGui_CreateGfxImage]](const [[../../tString|tString]] &in asFile, [[../../eGuiMaterial|eGuiMaterial]] aMaterial)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxImage|cGui_CreateGfxImage]](const [[../../tString|tString]] &in asFile, [[../../eGuiMaterial|eGuiMaterial]] aMaterial, const [[../../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxImageBuffer|cGui_CreateGfxImageBuffer]](const [[../../tString|tString]] &in asFile, [[../../eGuiMaterial|eGuiMaterial]] aMaterial, bool abCreateAnimation, const [[../../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxTexture|cGui_CreateGfxTexture]](const [[../../tString|tString]] &in asFile, [[../../eGuiMaterial|eGuiMaterial]] aMaterial, [[../../eTextureType|eTextureType]] aTextureType)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxTexture|cGui_CreateGfxTexture]](const [[../../tString|tString]] &in asFile, [[../../eGuiMaterial|eGuiMaterial]] aMaterial, [[../../eTextureType|eTextureType]] aTextureType, const [[../../cColor|cColor]] &in aColor, bool abMipMaps)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxTexture|cGui_CreateGfxTexture]]([[../../iTexture|iTexture]] @apTexture, bool abAutoDestroyTexture, [[../../eGuiMaterial|eGuiMaterial]] aMaterial)|}}
{{CodeDocSummaryItem|[[../../cGuiGfxElement|cGuiGfxElement]]|[[#cGui_CreateGfxTexture|cGui_CreateGfxTexture]]([[../../iTexture|iTexture]] @apTexture, bool abAutoDestroyTexture, [[../../eGuiMaterial|eGuiMaterial]] aMaterial, const [[../../cColor|cColor]] &in aColor, const [[../../cVector2f|cVector2f]] &in avStartUV, const [[../../cVector2f|cVector2f]] &in avEndUV)|}}
{{CodeDocSummaryItem|[[../../cImGui|cImGui]]|[[#cGui_CreateImGui|cGui_CreateImGui]](const [[../../tString|tString]] &in asName, [[../../cGuiSet|cGuiSet]] @apSet)|}}
{{CodeDocSummaryItem|[[../../cGuiSet|cGuiSet]]|[[#cGui_CreateSet|cGui_CreateSet]](const [[../../tString|tString]] &in asName, [[../../cGuiSkin|cGuiSkin]] @apSkin)|}}
{{CodeDocSummaryItem|[[../../cGuiSkin|cGuiSkin]]|[[#cGui_CreateSkin|cGui_CreateSkin]](const [[../../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#cGui_DestroyGfx|cGui_DestroyGfx]]([[../../cGuiGfxElement|cGuiGfxElement@]] apGfx)|}}
{{CodeDocSummaryItem|void|[[#cGui_DestroyImGui|cGui_DestroyImGui]]([[../../cImGui|cImGui@]] apImGui)|}}
{{CodeDocSummaryItem|void|[[#cGui_DestroySet|cGui_DestroySet]]([[../../cGuiSet|cGuiSet]] @apSet)|}}
{{CodeDocSummaryItem|[[../../cGuiSet|cGuiSet]]|[[#cGui_GetFocusedSet|cGui_GetFocusedSet]]()|}}
{{CodeDocSummaryItem|void|[[#cGui_GetImGuiIdFromName|cGui_GetImGuiIdFromName]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cGui_GetImGuiStateVarString|cGui_GetImGuiStateVarString]]([[../../eImGuiStateVar|eImGuiStateVar]] aVar)|}}
{{CodeDocSummaryItem|[[../../cGuiSet|cGuiSet]]|[[#cGui_GetSetFromName|cGui_GetSetFromName]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cGui_SetFocus|cGui_SetFocus]]([[../../cGuiSet|cGuiSet@]] apSet)|}}
{{CodeDocSummaryItem|void|[[#cGui_SetFocusByName|cGui_SetFocusByName]](const [[../../tString|tString]] &in asSetName)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cGui_CreateGfxFilledRect}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxFilledRect(const cColor &in aColor,
                                         eGuiMaterial aMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxImage}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxImage(const tString &in asFile,
                                    eGuiMaterial aMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxImage}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxImage(const tString &in asFile,
                                    eGuiMaterial aMaterial,
                                    const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxImageBuffer}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxImageBuffer(const tString &in asFile,
                                          eGuiMaterial aMaterial,
                                          bool abCreateAnimation,
                                          const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailParam|abCreateAnimation|bool|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxTexture}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxTexture(const tString &in asFile,
                                      eGuiMaterial aMaterial,
                                      eTextureType aTextureType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailParam|aTextureType|[[../../eTextureType|eTextureType]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxTexture}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxTexture(const tString &in asFile,
                                      eGuiMaterial aMaterial,
                                      eTextureType aTextureType,
                                      const cColor &in aColor,
                                      bool abMipMaps)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailParam|aTextureType|[[../../eTextureType|eTextureType]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|abMipMaps|bool|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxTexture}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxTexture(iTexture @apTexture,
                                      bool abAutoDestroyTexture,
                                      eGuiMaterial aMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apTexture|[[../../iTexture|iTexture]]|}}
{{CodeDocDetailParam|abAutoDestroyTexture|bool|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateGfxTexture}}
<syntaxhighlight lang="c++">cGuiGfxElement@ cGui_CreateGfxTexture(iTexture @apTexture,
                                      bool abAutoDestroyTexture,
                                      eGuiMaterial aMaterial,
                                      const cColor &in aColor,
                                      const cVector2f &in avStartUV,
                                      const cVector2f &in avEndUV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apTexture|[[../../iTexture|iTexture]]|}}
{{CodeDocDetailParam|abAutoDestroyTexture|bool|}}
{{CodeDocDetailParam|aMaterial|[[../../eGuiMaterial|eGuiMaterial]]|}}
{{CodeDocDetailParam|aColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|avStartUV|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avEndUV|[[../../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateImGui}}
<syntaxhighlight lang="c++">cImGui@ cGui_CreateImGui(const tString &in asName,
                         cGuiSet @apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|@apSet|[[../../cGuiSet|cGuiSet]]|}}
{{CodeDocDetailReturn|cImGui@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateSet}}
<syntaxhighlight lang="c++">cGuiSet@ cGui_CreateSet(const tString &in asName,
                        cGuiSkin @apSkin)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|@apSkin|[[../../cGuiSkin|cGuiSkin]]|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_CreateSkin}}
<syntaxhighlight lang="c++">cGuiSkin@ cGui_CreateSkin(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cGuiSkin@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_DestroyGfx}}
<syntaxhighlight lang="c++">void cGui_DestroyGfx(cGuiGfxElement@ apGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apGfx|[[../../cGuiGfxElement|cGuiGfxElement@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_DestroyImGui}}
<syntaxhighlight lang="c++">void cGui_DestroyImGui(cImGui@ apImGui)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apImGui|[[../../cImGui|cImGui@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_DestroySet}}
<syntaxhighlight lang="c++">void cGui_DestroySet(cGuiSet @apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apSet|[[../../cGuiSet|cGuiSet]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_GetFocusedSet}}
<syntaxhighlight lang="c++">cGuiSet@ cGui_GetFocusedSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_GetImGuiIdFromName}}
<syntaxhighlight lang="c++">void cGui_GetImGuiIdFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_GetImGuiStateVarString}}
<syntaxhighlight lang="c++">void cGui_GetImGuiStateVarString(eImGuiStateVar aVar)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aVar|[[../../eImGuiStateVar|eImGuiStateVar]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_GetSetFromName}}
<syntaxhighlight lang="c++">cGuiSet@ cGui_GetSetFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_SetFocus}}
<syntaxhighlight lang="c++">void cGui_SetFocus(cGuiSet@ apSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSet|[[../../cGuiSet|cGuiSet@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cGui_SetFocusByName}}
<syntaxhighlight lang="c++">void cGui_SetFocusByName(const tString &in asSetName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSetName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}