{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cRendererCallbackFunctions has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#ClearFrameBuffer|ClearFrameBuffer]](uint aFlags, bool abUsePosAndSize)|}}
{{CodeDocSummaryItem|void|[[#DrawCurrent|DrawCurrent]]([[../eVertexBufferDrawType|eVertexBufferDrawType]] aDrawType <nowiki>=</nowiki> eVertexBufferDrawType_LastEnum, int alStart <nowiki>=</nowiki> 0, int alCount <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DrawQuad|DrawQuad]](const [[../cVector3f|cVector3f]] &in aPos, const [[../cVector2f|cVector2f]] &in avSize, const [[../cVector2f|cVector2f]] &in avMinUV <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avMaxUV <nowiki>=</nowiki> 1, bool abInvertY <nowiki>=</nowiki> false, const [[../cColor|cColor]] &in aColor <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|void|[[#DrawWireFrame|DrawWireFrame]]([[../iVertexBuffer|iVertexBuffer@]] apVtxBuffer, const [[../cColor|cColor]] &in aColor, int alStart <nowiki>=</nowiki> 0, int alCount <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|[[../iLowLevelGraphics|iLowLevelGraphics]]|[[#GetLowLevelGfx|GetLowLevelGfx]]()|}}
{{CodeDocSummaryItem|bool|[[#SetBlendMode|SetBlendMode]]([[../eMaterialBlendMode|eMaterialBlendMode]] aMode)|}}
{{CodeDocSummaryItem|bool|[[#SetChannelMode|SetChannelMode]]([[../eMaterialChannelMode|eMaterialChannelMode]] aMode)|}}
{{CodeDocSummaryItem|bool|[[#SetCullActive|SetCullActive]](bool abX)|}}
{{CodeDocSummaryItem|bool|[[#SetCullMode|SetCullMode]]([[../eCullMode|eCullMode]] aMode)|}}
{{CodeDocSummaryItem|bool|[[#SetDepthTest|SetDepthTest]](bool abX)|}}
{{CodeDocSummaryItem|bool|[[#SetDepthTestFunc|SetDepthTestFunc]]([[../eDepthTestFunc|eDepthTestFunc]] aFunc)|}}
{{CodeDocSummaryItem|bool|[[#SetDepthWrite|SetDepthWrite]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFlatProjection|SetFlatProjection]](const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> 1, float afMin <nowiki>=</nowiki> -100, float afMax <nowiki>=</nowiki> 100)|}}
{{CodeDocSummaryItem|void|[[#SetFlatProjectionMinMax|SetFlatProjectionMinMax]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax)|}}
{{CodeDocSummaryItem|void|[[#SetFrameBuffer|SetFrameBuffer]]([[../iFrameBuffer|iFrameBuffer@]] apFrameBuffer, bool abUsePosAndSize <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in apMatrix)|}}
{{CodeDocSummaryItem|void|[[#SetModelViewMatrix|SetModelViewMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxModelView)|}}
{{CodeDocSummaryItem|void|[[#SetNormalFrustumProjection|SetNormalFrustumProjection]]()|}}
{{CodeDocSummaryItem|bool|[[#SetProgram|SetProgram]]([[../iGpuProgram|iGpuProgram@]] apProgram)|}}
{{CodeDocSummaryItem|bool|[[#SetScissorActive|SetScissorActive]](bool abX)|}}
{{CodeDocSummaryItem|bool|[[#SetScissorRect|SetScissorRect]](const [[../cVector2l|cVector2l]] &in avPos, const [[../cVector2l|cVector2l]] &in avSize, bool abAutoEnabling)|}}
{{CodeDocSummaryItem|bool|[[#SetScissorRect|SetScissorRect]](const [[../cRect2l|cRect2l]] &in aClipRect, bool abAutoEnabling)|}}
{{CodeDocSummaryItem|bool|[[#SetStencilActive|SetStencilActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetTexture|SetTexture]](int alUnit, [[../iTexture|iTexture@]] apTexture)|}}
{{CodeDocSummaryItem|void|[[#SetTextureRange|SetTextureRange]]([[../iTexture|iTexture@]] apTexture, int alFirstUnit, int alLastUnit <nowiki>=</nowiki> kMaxTextureUnits-1)|}}
{{CodeDocSummaryItem|void|[[#SetVertexBuffer|SetVertexBuffer]]([[../iVertexBuffer|iVertexBuffer@]] apVtxBuffer)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|ClearFrameBuffer}}
<syntaxhighlight lang="c++">void ClearFrameBuffer(uint aFlags,
                      bool abUsePosAndSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFlags|uint|}}
{{CodeDocDetailParam|abUsePosAndSize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawCurrent}}
<syntaxhighlight lang="c++">void DrawCurrent(eVertexBufferDrawType aDrawType = eVertexBufferDrawType_LastEnum,
                 int alStart = 0,
                 int alCount = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDrawType|[[../eVertexBufferDrawType|eVertexBufferDrawType]]|}}
{{CodeDocDetailParam|alStart|int|}}
{{CodeDocDetailParam|alCount|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawQuad}}
<syntaxhighlight lang="c++">void DrawQuad(const cVector3f &in aPos,
              const cVector2f &in avSize,
              const cVector2f &in avMinUV = 0,
              const cVector2f &in avMaxUV = 1,
              bool abInvertY = false,
              const cColor &in aColor = cColor,
               1,
               1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMinUV|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMaxUV|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|abInvertY|bool|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawWireFrame}}
<syntaxhighlight lang="c++">void DrawWireFrame(iVertexBuffer@ apVtxBuffer,
                   const cColor &in aColor,
                   int alStart = 0,
                   int alCount = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVtxBuffer|[[../iVertexBuffer|iVertexBuffer@]]|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|alStart|int|}}
{{CodeDocDetailParam|alCount|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLowLevelGfx}}
<syntaxhighlight lang="c++">iLowLevelGraphics@ GetLowLevelGfx()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLowLevelGraphics@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlendMode}}
<syntaxhighlight lang="c++">bool SetBlendMode(eMaterialBlendMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eMaterialBlendMode|eMaterialBlendMode]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetChannelMode}}
<syntaxhighlight lang="c++">bool SetChannelMode(eMaterialChannelMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eMaterialChannelMode|eMaterialChannelMode]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCullActive}}
<syntaxhighlight lang="c++">bool SetCullActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCullMode}}
<syntaxhighlight lang="c++">bool SetCullMode(eCullMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eCullMode|eCullMode]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDepthTest}}
<syntaxhighlight lang="c++">bool SetDepthTest(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDepthTestFunc}}
<syntaxhighlight lang="c++">bool SetDepthTestFunc(eDepthTestFunc aFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFunc|[[../eDepthTestFunc|eDepthTestFunc]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDepthWrite}}
<syntaxhighlight lang="c++">bool SetDepthWrite(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlatProjection}}
<syntaxhighlight lang="c++">void SetFlatProjection(const cVector2f &in avSize = 1,
                       float afMin = -100,
                       float afMax = 100)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlatProjectionMinMax}}
<syntaxhighlight lang="c++">void SetFlatProjectionMinMax(const cVector3f &in avMin,
                             const cVector3f &in avMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFrameBuffer}}
<syntaxhighlight lang="c++">void SetFrameBuffer(iFrameBuffer@ apFrameBuffer,
                    bool abUsePosAndSize = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFrameBuffer|[[../iFrameBuffer|iFrameBuffer@]]|}}
{{CodeDocDetailParam|abUsePosAndSize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in apMatrix)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMatrix|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModelViewMatrix}}
<syntaxhighlight lang="c++">void SetModelViewMatrix(const cMatrixf &in a_mtxModelView)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxModelView|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNormalFrustumProjection}}
<syntaxhighlight lang="c++">void SetNormalFrustumProjection()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetProgram}}
<syntaxhighlight lang="c++">bool SetProgram(iGpuProgram@ apProgram)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apProgram|[[../iGpuProgram|iGpuProgram@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScissorActive}}
<syntaxhighlight lang="c++">bool SetScissorActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScissorRect}}
<syntaxhighlight lang="c++">bool SetScissorRect(const cVector2l &in avPos,
                    const cVector2l &in avSize,
                    bool abAutoEnabling)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|abAutoEnabling|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScissorRect}}
<syntaxhighlight lang="c++">bool SetScissorRect(const cRect2l &in aClipRect,
                    bool abAutoEnabling)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aClipRect|[[../cRect2l|cRect2l]]|}}
{{CodeDocDetailParam|abAutoEnabling|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStencilActive}}
<syntaxhighlight lang="c++">bool SetStencilActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTexture}}
<syntaxhighlight lang="c++">void SetTexture(int alUnit,
                iTexture@ apTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alUnit|int|}}
{{CodeDocDetailParam|apTexture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTextureRange}}
<syntaxhighlight lang="c++">void SetTextureRange(iTexture@ apTexture,
                     int alFirstUnit,
                     int alLastUnit = kMaxTextureUnits-1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apTexture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailParam|alFirstUnit|int|}}
{{CodeDocDetailParam|alLastUnit|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVertexBuffer}}
<syntaxhighlight lang="c++">void SetVertexBuffer(iVertexBuffer@ apVtxBuffer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVtxBuffer|[[../iVertexBuffer|iVertexBuffer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}