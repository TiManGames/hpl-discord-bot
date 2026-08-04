{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLightBox has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#AttachBillboard|AttachBillboard]]([[../cBillboard|cBillboard@]] apBillboard, const [[../cColor|cColor]] &in aBaseColor, float afBaseBrightness)|}}
{{CodeDocSummaryItem|void|[[#AttachParticleSystem|AttachParticleSystem]]([[../cParticleSystem|cParticleSystem@]] apPS)|}}
{{CodeDocSummaryItem|bool|[[#CollidesWithBV|CollidesWithBV]]([[../cBoundingVolume|cBoundingVolume@+]] apBV)|}}
{{CodeDocSummaryItem|bool|[[#CollidesWithFrustum|CollidesWithFrustum]]([[../cFrustum|cFrustum@]] apFrustum)|}}
{{CodeDocSummaryItem|void|[[#FadeBrightnessTo|FadeBrightnessTo]](float afBrightness, float afTime, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear)|}}
{{CodeDocSummaryItem|void|[[#FadeBrightnessToDefault|FadeBrightnessToDefault]](float afTime, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear)|}}
{{CodeDocSummaryItem|void|[[#FadeIrradianceSet|FadeIrradianceSet]](const [[../tString|tString]] &in asSetName, float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeTo|FadeTo]](const [[../cColor|cColor]] &in aCol, float afRadius, float afTime)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetAmbientColorGround|GetAmbientColorGround]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetAmbientColorSky|GetAmbientColorSky]]()|}}
{{CodeDocSummaryItem|float|[[#GetBevel|GetBevel]]()|}}
{{CodeDocSummaryItem|[[../eLightBoxBlendFunc|eLightBoxBlendFunc]]|[[#GetBlendFunc|GetBlendFunc]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetBrightness|GetBrightness]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCastDiffuseLight|GetCastDiffuseLight]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCastShadows|GetCastShadows]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCastSpecularLight|GetCastSpecularLight]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCastTerrainShadow|GetCastTerrainShadow]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|float|[[#GetCoverageAmount|GetCoverageAmount]]()|}}
{{CodeDocSummaryItem|float|[[#GetDefaultBrightness|GetDefaultBrightness]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetDefaultDiffuseColor|GetDefaultDiffuseColor]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetDestColor|GetDestColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetDestRadius|GetDestRadius]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetDiffuseColor|GetDiffuseColor]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|float|[[#GetFalloffPow|GetFalloffPow]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFlickerActive|GetFlickerActive]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFlickerFade|GetFlickerFade]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetFlickerOffColor|GetFlickerOffColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOffFadeMaxLength|GetFlickerOffFadeMaxLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOffFadeMinLength|GetFlickerOffFadeMinLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOffMaxLength|GetFlickerOffMaxLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOffMinLength|GetFlickerOffMinLength]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFlickerOffPS|GetFlickerOffPS]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOffRadius|GetFlickerOffRadius]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFlickerOffSound|GetFlickerOffSound]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetFlickerOnColor|GetFlickerOnColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOnFadeMaxLength|GetFlickerOnFadeMaxLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOnFadeMinLength|GetFlickerOnFadeMinLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOnMaxLength|GetFlickerOnMaxLength]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOnMinLength|GetFlickerOnMinLength]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFlickerOnPS|GetFlickerOnPS]]()|}}
{{CodeDocSummaryItem|float|[[#GetFlickerOnRadius|GetFlickerOnRadius]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetFlickerOnSound|GetFlickerOnSound]]()|}}
{{CodeDocSummaryItem|float|[[#GetGoboAnimFrameTime|GetGoboAnimFrameTime]]()|}}
{{CodeDocSummaryItem|[[../eTextureAnimMode|eTextureAnimMode]]|[[#GetGoboAnimMode|GetGoboAnimMode]]()|}}
{{CodeDocSummaryItem|float|[[#GetGoboAnimStartTime|GetGoboAnimStartTime]]()|}}
{{CodeDocSummaryItem|int|[[#GetGoboNextFrame|GetGoboNextFrame]]()|}}
{{CodeDocSummaryItem|[[../iTexture|iTexture]]|[[#GetGoboTexture|GetGoboTexture]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetIlluminationColor|GetIlluminationColor]]()|}}
{{CodeDocSummaryItem|[[../eLightType|eLightType]]|[[#GetLightType|GetLightType]]()|}}
{{CodeDocSummaryItem|float|[[#GetLiquidAmount|GetLiquidAmount]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|[[../cLightMaskBox|cLightMaskBox]]|[[#GetMask|GetMask]]()|}}
{{CodeDocSummaryItem|[[../cMaterial|cMaterial]]|[[#GetMaterial|GetMaterial]]()|}}
{{CodeDocSummaryItem|int|[[#GetMatrixUpdateCount|GetMatrixUpdateCount]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|bool|[[#GetOcclusionCullShadowCasters|GetOcclusionCullShadowCasters]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetProbeOffset|GetProbeOffset]]()|}}
{{CodeDocSummaryItem|float|[[#GetRadius|GetRadius]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetRenderBV|GetRenderBV]]()|}}
{{CodeDocSummaryItem|bool|[[#GetRenderFlagBit|GetRenderFlagBit]](int alFlagBit)|}}
{{CodeDocSummaryItem|int|[[#GetRenderFlags|GetRenderFlags]]()|}}
{{CodeDocSummaryItem|int|[[#GetRenderFrameCount|GetRenderFrameCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetRenderLayer|GetRenderLayer]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetRenderName|GetRenderName]]()|}}
{{CodeDocSummaryItem|[[../eRenderableType|eRenderableType]]|[[#GetRenderType|GetRenderType]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|int|[[#GetShadowCastersAffected|GetShadowCastersAffected]]()|}}
{{CodeDocSummaryItem|float|[[#GetShadowMapBiasMul|GetShadowMapBiasMul]]()|}}
{{CodeDocSummaryItem|[[../eShadowMapResolution|eShadowMapResolution]]|[[#GetShadowMapResolution|GetShadowMapResolution]]()|}}
{{CodeDocSummaryItem|float|[[#GetShadowMapSlopeScaleBiasMul|GetShadowMapSlopeScaleBiasMul]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetSourceRadius|GetSourceRadius]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetSpecularColor|GetSpecularColor]]()|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|float|[[#GetTranslucency|GetTranslucency]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUseSphericalHarmonics|GetUseSphericalHarmonics]]()|}}
{{CodeDocSummaryItem|[[../iVertexBuffer|iVertexBuffer]]|[[#GetVertexBuffer|GetVertexBuffer]]()|}}
{{CodeDocSummaryItem|bool|[[#GetVisibleVar|GetVisibleVar]]()|}}
{{CodeDocSummaryItem|float|[[#GetWeight|GetWeight]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldCenterPosition|GetWorldCenterPosition]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#IsFading|IsFading]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOccluder|IsOccluder]]()|}}
{{CodeDocSummaryItem|bool|[[#IsStatic|IsStatic]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVisible|IsVisible]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveBillboard|RemoveBillboard]]([[../cBillboard|cBillboard@]] apBillboard)|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#RemoveParticleSystem|RemoveParticleSystem]]([[../cParticleSystem|cParticleSystem@]] apPS)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetAmbientColorGround|SetAmbientColorGround]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetAmbientColorSky|SetAmbientColorSky]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetBevel|SetBevel]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBlendFunc|SetBlendFunc]]([[../eLightBoxBlendFunc|eLightBoxBlendFunc]] aFunc)|}}
{{CodeDocSummaryItem|void|[[#SetBrightness|SetBrightness]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCastDiffuseLight|SetCastDiffuseLight]](bool afX)|}}
{{CodeDocSummaryItem|void|[[#SetCastShadows|SetCastShadows]](bool afX)|}}
{{CodeDocSummaryItem|void|[[#SetCastSpecularLight|SetCastSpecularLight]](bool afX)|}}
{{CodeDocSummaryItem|void|[[#SetCastTerrainShadow|SetCastTerrainShadow]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCoverageAmount|SetCoverageAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultBrightness|SetDefaultBrightness]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultDiffuseColor|SetDefaultDiffuseColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetDiffuseColor|SetDiffuseColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetFalloffPow|SetFalloffPow]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetFlicker|SetFlicker]](const [[../cColor|cColor]] &in aOffCol, float afOffRadius, float afOnMinLength, float afOnMaxLength, const [[../tString|tString]] &in asOnSound, const [[../tString|tString]] &in asOnPS, float afOffMinLength, float afOffMaxLength, const [[../tString|tString]] &in asOffSound, const [[../tString|tString]] &in asOffPS, bool abFade, float afOnFadeMinLength, float afOnFadeMaxLength, float afOffFadeMinLength, float afOffFadeMaxLength)|}}
{{CodeDocSummaryItem|void|[[#SetFlickerActive|SetFlickerActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFlickerOnColor|SetFlickerOnColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetGoboAnimFrameTime|SetGoboAnimFrameTime]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGoboAnimMode|SetGoboAnimMode]]([[../eTextureAnimMode|eTextureAnimMode]] aMode)|}}
{{CodeDocSummaryItem|void|[[#SetGoboAnimStartTime|SetGoboAnimStartTime]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGoboTexture|SetGoboTexture]]([[../iTexture|iTexture@]] apTexture)|}}
{{CodeDocSummaryItem|void|[[#SetIlluminationColor|SetIlluminationColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetLiquidAmount|SetLiquidAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMask|SetMask]]([[../cLightMaskBox|cLightMaskBox@]] apMask)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetOcclusionCullShadowCasters|SetOcclusionCullShadowCasters]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetProbeOffset|SetProbeOffset]](const [[../cVector3f|cVector3f]] &in avPosition)|}}
{{CodeDocSummaryItem|void|[[#SetRadius|SetRadius]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetRenderFlagBit|SetRenderFlagBit]](int alFlagBit, bool abSet)|}}
{{CodeDocSummaryItem|void|[[#SetRenderFrameCount|SetRenderFrameCount]](int alCount)|}}
{{CodeDocSummaryItem|void|[[#SetRenderLayer|SetRenderLayer]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetShadowCastersAffected|SetShadowCastersAffected]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetShadowMapBiasMul|SetShadowMapBiasMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetShadowMapResolution|SetShadowMapResolution]]([[../eShadowMapResolution|eShadowMapResolution]] aQuality)|}}
{{CodeDocSummaryItem|void|[[#SetShadowMapSlopeScaleBiasMul|SetShadowMapSlopeScaleBiasMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSize|SetSize]](const [[../cVector3f|cVector3f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetSourceRadius|SetSourceRadius]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpecularColor|SetSpecularColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetTranslucency|SetTranslucency]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetUseSphericalHarmonics|SetUseSphericalHarmonics]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVisible|SetVisible]](bool abVisible)|}}
{{CodeDocSummaryItem|void|[[#SetWeight|SetWeight]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#StopFading|StopFading]]()|}}
{{CodeDocSummaryItem|void|[[#UpdateLogic|UpdateLogic]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#UseAutomaticLiquidAmount|UseAutomaticLiquidAmount]](float afTime <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddChild}}
<syntaxhighlight lang="c++">void AddChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachBillboard}}
<syntaxhighlight lang="c++">void AttachBillboard(cBillboard@ apBillboard,
                     const cColor &in aBaseColor,
                     float afBaseBrightness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBillboard|[[../cBillboard|cBillboard@]]|}}
{{CodeDocDetailParam|aBaseColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afBaseBrightness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachParticleSystem}}
<syntaxhighlight lang="c++">void AttachParticleSystem(cParticleSystem@ apPS)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPS|[[../cParticleSystem|cParticleSystem@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollidesWithBV}}
<syntaxhighlight lang="c++">bool CollidesWithBV(cBoundingVolume@+ apBV)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBV|[[../cBoundingVolume|cBoundingVolume@+]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CollidesWithFrustum}}
<syntaxhighlight lang="c++">bool CollidesWithFrustum(cFrustum@ apFrustum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFrustum|[[../cFrustum|cFrustum@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeBrightnessTo}}
<syntaxhighlight lang="c++">void FadeBrightnessTo(float afBrightness,
                      float afTime,
                      eEasing aEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeBrightnessToDefault}}
<syntaxhighlight lang="c++">void FadeBrightnessToDefault(float afTime,
                             eEasing aEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeIrradianceSet}}
<syntaxhighlight lang="c++">void FadeIrradianceSet(const tString &in asSetName,
                       float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSetName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeTo}}
<syntaxhighlight lang="c++">void FadeTo(const cColor &in aCol,
            float afRadius,
            float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAmbientColorGround}}
<syntaxhighlight lang="c++">const cColor& GetAmbientColorGround()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAmbientColorSky}}
<syntaxhighlight lang="c++">const cColor& GetAmbientColorSky()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBevel}}
<syntaxhighlight lang="c++">float GetBevel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBlendFunc}}
<syntaxhighlight lang="c++">eLightBoxBlendFunc GetBlendFunc()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eLightBoxBlendFunc|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBrightness}}
<syntaxhighlight lang="c++">float GetBrightness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCastDiffuseLight}}
<syntaxhighlight lang="c++">bool GetCastDiffuseLight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCastShadows}}
<syntaxhighlight lang="c++">bool GetCastShadows()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCastSpecularLight}}
<syntaxhighlight lang="c++">bool GetCastSpecularLight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCastTerrainShadow}}
<syntaxhighlight lang="c++">bool GetCastTerrainShadow()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cEntity3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEntity3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCoverageAmount}}
<syntaxhighlight lang="c++">float GetCoverageAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultBrightness}}
<syntaxhighlight lang="c++">float GetDefaultBrightness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultDiffuseColor}}
<syntaxhighlight lang="c++">const cColor& GetDefaultDiffuseColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDestColor}}
<syntaxhighlight lang="c++">const cColor& GetDestColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDestRadius}}
<syntaxhighlight lang="c++">float GetDestRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDiffuseColor}}
<syntaxhighlight lang="c++">const cColor& GetDiffuseColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityParent}}
<syntaxhighlight lang="c++">iEntity3D@ GetEntityParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityType}}
<syntaxhighlight lang="c++">eEntityType GetEntityType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eEntityType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFalloffPow}}
<syntaxhighlight lang="c++">float GetFalloffPow()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerActive}}
<syntaxhighlight lang="c++">bool GetFlickerActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerFade}}
<syntaxhighlight lang="c++">bool GetFlickerFade()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffColor}}
<syntaxhighlight lang="c++">const cColor& GetFlickerOffColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffFadeMaxLength}}
<syntaxhighlight lang="c++">float GetFlickerOffFadeMaxLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffFadeMinLength}}
<syntaxhighlight lang="c++">float GetFlickerOffFadeMinLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffMaxLength}}
<syntaxhighlight lang="c++">float GetFlickerOffMaxLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffMinLength}}
<syntaxhighlight lang="c++">float GetFlickerOffMinLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffPS}}
<syntaxhighlight lang="c++">const tString& GetFlickerOffPS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffRadius}}
<syntaxhighlight lang="c++">float GetFlickerOffRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOffSound}}
<syntaxhighlight lang="c++">const tString& GetFlickerOffSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnColor}}
<syntaxhighlight lang="c++">const cColor& GetFlickerOnColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnFadeMaxLength}}
<syntaxhighlight lang="c++">float GetFlickerOnFadeMaxLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnFadeMinLength}}
<syntaxhighlight lang="c++">float GetFlickerOnFadeMinLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnMaxLength}}
<syntaxhighlight lang="c++">float GetFlickerOnMaxLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnMinLength}}
<syntaxhighlight lang="c++">float GetFlickerOnMinLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnPS}}
<syntaxhighlight lang="c++">const tString& GetFlickerOnPS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnRadius}}
<syntaxhighlight lang="c++">float GetFlickerOnRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFlickerOnSound}}
<syntaxhighlight lang="c++">const tString& GetFlickerOnSound()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoboAnimFrameTime}}
<syntaxhighlight lang="c++">float GetGoboAnimFrameTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoboAnimMode}}
<syntaxhighlight lang="c++">eTextureAnimMode GetGoboAnimMode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eTextureAnimMode|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoboAnimStartTime}}
<syntaxhighlight lang="c++">float GetGoboAnimStartTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoboNextFrame}}
<syntaxhighlight lang="c++">int GetGoboNextFrame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoboTexture}}
<syntaxhighlight lang="c++">iTexture@ GetGoboTexture()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iTexture@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIlluminationColor}}
<syntaxhighlight lang="c++">const cColor& GetIlluminationColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLightType}}
<syntaxhighlight lang="c++">eLightType GetLightType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eLightType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLiquidAmount}}
<syntaxhighlight lang="c++">float GetLiquidAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetLocalMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalPosition}}
<syntaxhighlight lang="c++">cVector3f GetLocalPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMask}}
<syntaxhighlight lang="c++">cLightMaskBox@ GetMask()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLightMaskBox@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterial}}
<syntaxhighlight lang="c++">cMaterial@ GetMaterial()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMaterial@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMatrixUpdateCount}}
<syntaxhighlight lang="c++">int GetMatrixUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOcclusionCullShadowCasters}}
<syntaxhighlight lang="c++">bool GetOcclusionCullShadowCasters()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProbeOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetProbeOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRadius}}
<syntaxhighlight lang="c++">float GetRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderBV}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetRenderBV()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderFlagBit}}
<syntaxhighlight lang="c++">bool GetRenderFlagBit(int alFlagBit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlagBit|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderFlags}}
<syntaxhighlight lang="c++">int GetRenderFlags()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderFrameCount}}
<syntaxhighlight lang="c++">int GetRenderFrameCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderLayer}}
<syntaxhighlight lang="c++">int GetRenderLayer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderName}}
<syntaxhighlight lang="c++">const tString& GetRenderName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRenderType}}
<syntaxhighlight lang="c++">eRenderableType GetRenderType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eRenderableType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShadowCastersAffected}}
<syntaxhighlight lang="c++">int GetShadowCastersAffected()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShadowMapBiasMul}}
<syntaxhighlight lang="c++">float GetShadowMapBiasMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShadowMapResolution}}
<syntaxhighlight lang="c++">eShadowMapResolution GetShadowMapResolution()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eShadowMapResolution|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShadowMapSlopeScaleBiasMul}}
<syntaxhighlight lang="c++">float GetShadowMapSlopeScaleBiasMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">const cVector3f& GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSourceRadius}}
<syntaxhighlight lang="c++">float GetSourceRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpecularColor}}
<syntaxhighlight lang="c++">const cColor& GetSpecularColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransformUpdateCount}}
<syntaxhighlight lang="c++">int GetTransformUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTranslucency}}
<syntaxhighlight lang="c++">float GetTranslucency()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUseSphericalHarmonics}}
<syntaxhighlight lang="c++">bool GetUseSphericalHarmonics()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVertexBuffer}}
<syntaxhighlight lang="c++">iVertexBuffer@ GetVertexBuffer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iVertexBuffer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVisibleVar}}
<syntaxhighlight lang="c++">bool GetVisibleVar()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWeight}}
<syntaxhighlight lang="c++">float GetWeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldCenterPosition}}
<syntaxhighlight lang="c++">cVector3f GetWorldCenterPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetWorldMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldPosition}}
<syntaxhighlight lang="c++">cVector3f GetWorldPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasParent}}
<syntaxhighlight lang="c++">bool HasParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsChild}}
<syntaxhighlight lang="c++">bool IsChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFading}}
<syntaxhighlight lang="c++">bool IsFading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOccluder}}
<syntaxhighlight lang="c++">bool IsOccluder()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsStatic}}
<syntaxhighlight lang="c++">bool IsStatic()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsVisible}}
<syntaxhighlight lang="c++">bool IsVisible()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveBillboard}}
<syntaxhighlight lang="c++">void RemoveBillboard(cBillboard@ apBillboard)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBillboard|[[../cBillboard|cBillboard@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveParticleSystem}}
<syntaxhighlight lang="c++">void RemoveParticleSystem(cParticleSystem@ apPS)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPS|[[../cParticleSystem|cParticleSystem@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAmbientColorGround}}
<syntaxhighlight lang="c++">void SetAmbientColorGround(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAmbientColorSky}}
<syntaxhighlight lang="c++">void SetAmbientColorSky(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBevel}}
<syntaxhighlight lang="c++">void SetBevel(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlendFunc}}
<syntaxhighlight lang="c++">void SetBlendFunc(eLightBoxBlendFunc aFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFunc|[[../eLightBoxBlendFunc|eLightBoxBlendFunc]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBrightness}}
<syntaxhighlight lang="c++">void SetBrightness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCastDiffuseLight}}
<syntaxhighlight lang="c++">void SetCastDiffuseLight(bool afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCastShadows}}
<syntaxhighlight lang="c++">void SetCastShadows(bool afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCastSpecularLight}}
<syntaxhighlight lang="c++">void SetCastSpecularLight(bool afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCastTerrainShadow}}
<syntaxhighlight lang="c++">void SetCastTerrainShadow(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCoverageAmount}}
<syntaxhighlight lang="c++">void SetCoverageAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultBrightness}}
<syntaxhighlight lang="c++">void SetDefaultBrightness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultDiffuseColor}}
<syntaxhighlight lang="c++">void SetDefaultDiffuseColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDiffuseColor}}
<syntaxhighlight lang="c++">void SetDiffuseColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFalloffPow}}
<syntaxhighlight lang="c++">void SetFalloffPow(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlicker}}
<syntaxhighlight lang="c++">void SetFlicker(const cColor &in aOffCol,
                float afOffRadius,
                float afOnMinLength,
                float afOnMaxLength,
                const tString &in asOnSound,
                const tString &in asOnPS,
                float afOffMinLength,
                float afOffMaxLength,
                const tString &in asOffSound,
                const tString &in asOffPS,
                bool abFade,
                float afOnFadeMinLength,
                float afOnFadeMaxLength,
                float afOffFadeMinLength,
                float afOffFadeMaxLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aOffCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afOffRadius|float|}}
{{CodeDocDetailParam|afOnMinLength|float|}}
{{CodeDocDetailParam|afOnMaxLength|float|}}
{{CodeDocDetailParam|asOnSound|[[../tString|tString]]|}}
{{CodeDocDetailParam|asOnPS|[[../tString|tString]]|}}
{{CodeDocDetailParam|afOffMinLength|float|}}
{{CodeDocDetailParam|afOffMaxLength|float|}}
{{CodeDocDetailParam|asOffSound|[[../tString|tString]]|}}
{{CodeDocDetailParam|asOffPS|[[../tString|tString]]|}}
{{CodeDocDetailParam|abFade|bool|}}
{{CodeDocDetailParam|afOnFadeMinLength|float|}}
{{CodeDocDetailParam|afOnFadeMaxLength|float|}}
{{CodeDocDetailParam|afOffFadeMinLength|float|}}
{{CodeDocDetailParam|afOffFadeMaxLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlickerActive}}
<syntaxhighlight lang="c++">void SetFlickerActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFlickerOnColor}}
<syntaxhighlight lang="c++">void SetFlickerOnColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGoboAnimFrameTime}}
<syntaxhighlight lang="c++">void SetGoboAnimFrameTime(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGoboAnimMode}}
<syntaxhighlight lang="c++">void SetGoboAnimMode(eTextureAnimMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eTextureAnimMode|eTextureAnimMode]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGoboAnimStartTime}}
<syntaxhighlight lang="c++">void SetGoboAnimStartTime(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGoboTexture}}
<syntaxhighlight lang="c++">void SetGoboTexture(iTexture@ apTexture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apTexture|[[../iTexture|iTexture@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIlluminationColor}}
<syntaxhighlight lang="c++">void SetIlluminationColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLiquidAmount}}
<syntaxhighlight lang="c++">void SetLiquidAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMask}}
<syntaxhighlight lang="c++">void SetMask(cLightMaskBox@ apMask)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMask|[[../cLightMaskBox|cLightMaskBox@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetName}}
<syntaxhighlight lang="c++">void SetName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetOcclusionCullShadowCasters}}
<syntaxhighlight lang="c++">void SetOcclusionCullShadowCasters(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetProbeOffset}}
<syntaxhighlight lang="c++">void SetProbeOffset(const cVector3f &in avPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRadius}}
<syntaxhighlight lang="c++">void SetRadius(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderFlagBit}}
<syntaxhighlight lang="c++">void SetRenderFlagBit(int alFlagBit,
                      bool abSet)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlagBit|int|}}
{{CodeDocDetailParam|abSet|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderFrameCount}}
<syntaxhighlight lang="c++">void SetRenderFrameCount(int alCount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alCount|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRenderLayer}}
<syntaxhighlight lang="c++">void SetRenderLayer(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScriptableIsSaved}}
<syntaxhighlight lang="c++">void SetScriptableIsSaved(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShadowCastersAffected}}
<syntaxhighlight lang="c++">void SetShadowCastersAffected(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShadowMapBiasMul}}
<syntaxhighlight lang="c++">void SetShadowMapBiasMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShadowMapResolution}}
<syntaxhighlight lang="c++">void SetShadowMapResolution(eShadowMapResolution aQuality)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aQuality|[[../eShadowMapResolution|eShadowMapResolution]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShadowMapSlopeScaleBiasMul}}
<syntaxhighlight lang="c++">void SetShadowMapSlopeScaleBiasMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSize}}
<syntaxhighlight lang="c++">void SetSize(const cVector3f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSourceRadius}}
<syntaxhighlight lang="c++">void SetSourceRadius(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpecularColor}}
<syntaxhighlight lang="c++">void SetSpecularColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTranslucency}}
<syntaxhighlight lang="c++">void SetTranslucency(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUseSphericalHarmonics}}
<syntaxhighlight lang="c++">void SetUseSphericalHarmonics(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">void SetVisible(bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abVisible|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWeight}}
<syntaxhighlight lang="c++">void SetWeight(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldMatrix}}
<syntaxhighlight lang="c++">void SetWorldMatrix(const cMatrixf &in a_mtxWorldTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxWorldTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldPosition}}
<syntaxhighlight lang="c++">void SetWorldPosition(const cVector3f &in avWorldPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avWorldPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopFading}}
<syntaxhighlight lang="c++">void StopFading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLogic}}
<syntaxhighlight lang="c++">void UpdateLogic(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UseAutomaticLiquidAmount}}
<syntaxhighlight lang="c++">void UseAutomaticLiquidAmount(float afTime = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}