{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cBillboard has no public fields.

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
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetAxis ||   ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBrightness ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCoverageAmount ||  ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetForwardOffset ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetHaloAlpha ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetIlluminationColor ||  ||
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
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
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
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| [[../eBillboardType|<syntaxhighlight lang="c++" inline>eBillboardType</syntaxhighlight>]] || GetType ||   ||
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
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAxis || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avAxis</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCoverageAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForwardOffset || <syntaxhighlight lang="c++" inline>float afOffset</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetHaloAlpha || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIlluminationColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLiquidAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
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