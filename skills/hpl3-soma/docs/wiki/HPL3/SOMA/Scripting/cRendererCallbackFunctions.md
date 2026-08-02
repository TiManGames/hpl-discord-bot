{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cRendererCallbackFunctions has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearFrameBuffer || <syntaxhighlight lang="c++" inline>uint aFlags</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abUsePosAndSize</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawCurrent || [[../eVertexBufferDrawType|<syntaxhighlight lang="c++" inline>eVertexBufferDrawType aDrawType = eVertexBufferDrawType_LastEnum</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alStart = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alCount = -1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawQuad || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in aPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avMinUV = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avMaxUV = 1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abInvertY = false</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawWireFrame || [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@ apVtxBuffer</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aColor</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alStart = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alCount = -1</syntaxhighlight> ||
|-
| [[../iLowLevelGraphics|<syntaxhighlight lang="c++" inline>iLowLevelGraphics@</syntaxhighlight>]] || GetLowLevelGfx ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetBlendMode || [[../eMaterialBlendMode|<syntaxhighlight lang="c++" inline>eMaterialBlendMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetChannelMode || [[../eMaterialChannelMode|<syntaxhighlight lang="c++" inline>eMaterialChannelMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetCullActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetCullMode || [[../eCullMode|<syntaxhighlight lang="c++" inline>eCullMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetDepthTest || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetDepthTestFunc || [[../eDepthTestFunc|<syntaxhighlight lang="c++" inline>eDepthTestFunc aFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetDepthWrite || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlatProjection || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = 1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin = -100</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 100</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlatProjectionMinMax || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avMax</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFrameBuffer || [[../iFrameBuffer|<syntaxhighlight lang="c++" inline>iFrameBuffer@ apFrameBuffer</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abUsePosAndSize = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in apMatrix</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModelViewMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxModelView</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNormalFrustumProjection ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetProgram || [[../iGpuProgram|<syntaxhighlight lang="c++" inline>iGpuProgram@ apProgram</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetScissorActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetScissorRect || [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avPos</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoEnabling</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetScissorRect || [[../cRect2l|<syntaxhighlight lang="c++" inline>const cRect2l &in aClipRect</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoEnabling</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SetStencilActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTexture || <syntaxhighlight lang="c++" inline>int alUnit</syntaxhighlight>,<br />[[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTextureRange || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alFirstUnit</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alLastUnit = kMaxTextureUnits-1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVertexBuffer || [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@ apVtxBuffer</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__