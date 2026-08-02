{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLensFlare has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidesWithBV || [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+ apBV</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CollidesWithFrustum || [[../cFrustum|<syntaxhighlight lang="c++" inline>cFrustum@ apFrustum</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DisableRangeMax ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DisableRangeMin ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeIn || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeOut || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBrightness ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCoverageAmount ||  ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType</syntaxhighlight>]] || GetFirstActiveType ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetFlareColor || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]] ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetFlareSize || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetFlareSourceSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGlareBrightness ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGlareFieldOfView ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGlareRangeMaxEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGlareRangeMaxStart ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetIlluminationColor ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetInnerFieldOfView ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetLiquidAmount ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| [[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@</syntaxhighlight>]] || GetMaterial ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMatrixUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMultiIrisCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMultiIrisSeed ||   ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l</syntaxhighlight>]] || GetMultiIrisTextureAtlasGrid ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetMultiplyGlareWithMultiIris ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetOuterFieldOfView ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRangeMaxEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRangeMaxStart ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRangeMinEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetRangeMinStart ||   ||
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
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetShrinkWhenOccluded ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSizeChangeBasedOnDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUseParentMeshForOcclusion ||   ||
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
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFlareActive || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOccluder ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsStatic ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVisible ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAsPointLight ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCoverageAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlareActive || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlareColor || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>cColor aValue</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlareSize || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFlareSourceSize || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlareBrightness || <syntaxhighlight lang="c++" inline>float afBrightness</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlareFieldOfView || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlareRange || <syntaxhighlight lang="c++" inline>float afRangeMaxStart</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afRangeMaxEnd</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlareStareAt || <syntaxhighlight lang="c++" inline>float afGlare</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIlluminationColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetInnerFieldOfView || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLiquidAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaterial || [[../eLensFlareType|<syntaxhighlight lang="c++" inline>eLensFlareType aType</syntaxhighlight>]],<br />[[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@ apMaterial</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMultiIrisCount || <syntaxhighlight lang="c++" inline>int alCount</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMultiIrisSeed || <syntaxhighlight lang="c++" inline>int alSeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMultiIrisTextureAtlasGrid || [[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l avMultiIrisGrid</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMultiplyGlareWithMultiIris || <syntaxhighlight lang="c++" inline>bool abValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetOuterFieldOfView || <syntaxhighlight lang="c++" inline>float afAngle</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRangeMax || <syntaxhighlight lang="c++" inline>float afRangeMaxStart</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afRangeMaxEnd</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRangeMin || <syntaxhighlight lang="c++" inline>float afRangeMinStart</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afRangeMinEnd</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderFlagBit || <syntaxhighlight lang="c++" inline>int alFlagBit</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSet</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRenderFrameCount || <syntaxhighlight lang="c++" inline>int alCount</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShrinkWhenOccluded || <syntaxhighlight lang="c++" inline>bool abValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSizeChangeBasedOnDistance || <syntaxhighlight lang="c++" inline>float afPercent</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUseParentMeshForOcclusion || <syntaxhighlight lang="c++" inline>bool abValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abVisible</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UseAutomaticLiquidAmount || <syntaxhighlight lang="c++" inline>float afTime = 0</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__