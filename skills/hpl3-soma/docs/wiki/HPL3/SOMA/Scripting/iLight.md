{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iLight has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachBillboard || [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@ apBillboard</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aBaseColor</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afBaseBrightness</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachParticleSystem || [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@ apPS</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidesWithBV || [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+ apBV</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidesWithFrustum || [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@ apFrustum</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeTo || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBrightness ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCastShadows ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCastTerrainShadow ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCoverageAmount ||  ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetDefaultDiffuseColor ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetDestColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDestRadius ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetDiffuseColor ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFalloffPow ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFlickerActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFlickerFade ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetFlickerOffColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOffFadeMaxLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOffFadeMinLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOffMaxLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOffMinLength ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFlickerOffPS ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOffRadius ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFlickerOffSound ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetFlickerOnColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOnFadeMaxLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOnFadeMinLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOnMaxLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOnMinLength ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFlickerOnPS ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFlickerOnRadius ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetFlickerOnSound ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGoboAnimFrameTime ||   ||
|-
| [[../eTextureAnimMode|<syntaxhighlight lang="c++" inline>eTextureAnimMode</syntaxhighlight>]] || GetGoboAnimMode ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGoboAnimStartTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetGoboNextFrame ||   ||
|-
| [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@</syntaxhighlight>]] || GetGoboTexture ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetIlluminationColor ||  ||
|-
| [[../eLightType|<syntaxhighlight lang="c++" inline>eLightType</syntaxhighlight>]] || GetLightType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetLiquidAmount ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| [[../cLightMaskBox|<syntaxhighlight lang="c++" inline>cLightMaskBox@</syntaxhighlight>]] || GetMask ||   ||
|-
| [[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@</syntaxhighlight>]] || GetMaterial ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMatrixUpdateCount ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetOcclusionCullShadowCasters ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRadius ||   ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetRenderBV ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetRenderFlagBit || <syntaxhighlight lang="c++" inline>int alFlagBit</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetRenderFlags ||  ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetRenderFrameCount ||  ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetRenderName ||   ||
|-
| [[../eRenderableType|<syntaxhighlight lang="c++" inline>eRenderableType</syntaxhighlight>]] || GetRenderType ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetScriptableIsSaved ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetShadowCastersAffected ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetShadowMapBiasMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetShadowMapBlurAmount ||  ||
|-
| [[../eShadowMapResolution|<syntaxhighlight lang="c++" inline>eShadowMapResolution</syntaxhighlight>]] || GetShadowMapResolution ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetShadowMapSlopeScaleBiasMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSourceRadius ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetSpecularColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTranslucency ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@</syntaxhighlight>]] || GetVertexBuffer ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetVisibleVar ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldCenterPosition ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetWorldMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasParent ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFading ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOccluder ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsStatic ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVisible ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveBillboard || [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@ apBillboard</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveParticleSystem || [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@ apPS</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCastShadows || <syntaxhighlight lang="c++" inline>bool afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCastTerrainShadow || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCoverageAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultDiffuseColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDiffuseColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFalloffPow || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlicker || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aOffCol</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afOffRadius</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOnMinLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOnMaxLength</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asOnSound</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asOnPS</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afOffMinLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOffMaxLength</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asOffSound</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asOffPS</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abFade</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOnFadeMinLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOnFadeMaxLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOffFadeMinLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afOffFadeMaxLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlickerActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGoboAnimFrameTime || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGoboAnimMode || [[../eTextureAnimMode|<syntaxhighlight lang="c++" inline>eTextureAnimMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGoboAnimStartTime || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGoboTexture || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIlluminationColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLiquidAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMask || [[../cLightMaskBox|<syntaxhighlight lang="c++" inline>cLightMaskBox@ apMask</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetOcclusionCullShadowCasters || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRadius || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderFlagBit || <syntaxhighlight lang="c++" inline>int alFlagBit</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSet</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderFrameCount || <syntaxhighlight lang="c++" inline>int alCount</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShadowCastersAffected || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShadowMapBiasMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShadowMapBlurAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShadowMapResolution || [[../eShadowMapResolution|<syntaxhighlight lang="c++" inline>eShadowMapResolution aQuality</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShadowMapSlopeScaleBiasMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSourceRadius || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpecularColor || [[../cColor|<syntaxhighlight lang="c++" inline>cColor aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTranslucency || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abVisible</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopFading ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UseAutomaticLiquidAmount || <syntaxhighlight lang="c++" inline>float afTime = 0</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__