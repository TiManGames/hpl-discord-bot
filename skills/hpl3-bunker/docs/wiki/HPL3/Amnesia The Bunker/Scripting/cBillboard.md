{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cBillboard has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#CollidesWithBV|CollidesWithBV]]([[../cBoundingVolume|cBoundingVolume@+]] apBV)|}}
{{CodeDocSummaryItem|bool|[[#CollidesWithFrustum|CollidesWithFrustum]]([[../cFrustum|cFrustum@]] apFrustum)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAxis|GetAxis]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetBrightness|GetBrightness]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColor|GetColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetCoverageAmount|GetCoverageAmount]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|float|[[#GetForwardOffset|GetForwardOffset]]()|}}
{{CodeDocSummaryItem|float|[[#GetHaloAlpha|GetHaloAlpha]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetIlluminationColor|GetIlluminationColor]]()|}}
{{CodeDocSummaryItem|float|[[#GetLiquidAmount|GetLiquidAmount]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|[[../cMaterial|cMaterial]]|[[#GetMaterial|GetMaterial]]()|}}
{{CodeDocSummaryItem|int|[[#GetMatrixUpdateCount|GetMatrixUpdateCount]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|float|[[#GetRangeMaxEnd|GetRangeMaxEnd]]()|}}
{{CodeDocSummaryItem|float|[[#GetRangeMaxStart|GetRangeMaxStart]]()|}}
{{CodeDocSummaryItem|float|[[#GetRangeMinEnd|GetRangeMinEnd]]()|}}
{{CodeDocSummaryItem|float|[[#GetRangeMinStart|GetRangeMinStart]]()|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetRenderBV|GetRenderBV]]()|}}
{{CodeDocSummaryItem|bool|[[#GetRenderFlagBit|GetRenderFlagBit]](int alFlagBit)|}}
{{CodeDocSummaryItem|int|[[#GetRenderFlags|GetRenderFlags]]()|}}
{{CodeDocSummaryItem|int|[[#GetRenderFrameCount|GetRenderFrameCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetRenderLayer|GetRenderLayer]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetRenderName|GetRenderName]]()|}}
{{CodeDocSummaryItem|[[../eRenderableType|eRenderableType]]|[[#GetRenderType|GetRenderType]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|[[../eBillboardType|eBillboardType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|[[../iVertexBuffer|iVertexBuffer]]|[[#GetVertexBuffer|GetVertexBuffer]]()|}}
{{CodeDocSummaryItem|bool|[[#GetVisibleVar|GetVisibleVar]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldCenterPosition|GetWorldCenterPosition]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#IsOccluder|IsOccluder]]()|}}
{{CodeDocSummaryItem|bool|[[#IsStatic|IsStatic]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVisible|IsVisible]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetAxis|SetAxis]](const [[../cVector3f|cVector3f]] &in avAxis)|}}
{{CodeDocSummaryItem|void|[[#SetBrightness|SetBrightness]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetColor|SetColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetCoverageAmount|SetCoverageAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetForwardOffset|SetForwardOffset]](float afOffset)|}}
{{CodeDocSummaryItem|void|[[#SetHaloAlpha|SetHaloAlpha]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetIlluminationColor|SetIlluminationColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetLiquidAmount|SetLiquidAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaterial|SetMaterial]]([[../cMaterial|cMaterial@]] apMaterial)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetRangeMax|SetRangeMax]](float afRangeMaxStart, float afRangeMaxEnd)|}}
{{CodeDocSummaryItem|void|[[#SetRangeMin|SetRangeMin]](float afRangeMinStart, float afRangeMinEnd)|}}
{{CodeDocSummaryItem|void|[[#SetRenderFlagBit|SetRenderFlagBit]](int alFlagBit, bool abSet)|}}
{{CodeDocSummaryItem|void|[[#SetRenderFrameCount|SetRenderFrameCount]](int alCount)|}}
{{CodeDocSummaryItem|void|[[#SetRenderLayer|SetRenderLayer]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSize|SetSize]](const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetVisible|SetVisible]](bool abVisible)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
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

{{CodeDocDetailTop|GetAxis}}
<syntaxhighlight lang="c++">const cVector3f& GetAxis()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
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

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cEntity3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEntity3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColor}}
<syntaxhighlight lang="c++">const cColor& GetColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCoverageAmount}}
<syntaxhighlight lang="c++">float GetCoverageAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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

{{CodeDocDetailTop|GetForwardOffset}}
<syntaxhighlight lang="c++">float GetForwardOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHaloAlpha}}
<syntaxhighlight lang="c++">float GetHaloAlpha()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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

{{CodeDocDetailTop|GetRangeMaxEnd}}
<syntaxhighlight lang="c++">float GetRangeMaxEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRangeMaxStart}}
<syntaxhighlight lang="c++">float GetRangeMaxStart()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRangeMinEnd}}
<syntaxhighlight lang="c++">float GetRangeMinEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRangeMinStart}}
<syntaxhighlight lang="c++">float GetRangeMinStart()</syntaxhighlight>
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

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">cVector2f GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransformUpdateCount}}
<syntaxhighlight lang="c++">int GetTransformUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">eBillboardType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eBillboardType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
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

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAxis}}
<syntaxhighlight lang="c++">void SetAxis(const cVector3f &in avAxis)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAxis|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBrightness}}
<syntaxhighlight lang="c++">void SetBrightness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColor}}
<syntaxhighlight lang="c++">void SetColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCoverageAmount}}
<syntaxhighlight lang="c++">void SetCoverageAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForwardOffset}}
<syntaxhighlight lang="c++">void SetForwardOffset(float afOffset)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afOffset|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHaloAlpha}}
<syntaxhighlight lang="c++">void SetHaloAlpha(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
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

{{CodeDocDetailTop|SetMaterial}}
<syntaxhighlight lang="c++">void SetMaterial(cMaterial@ apMaterial)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMaterial|[[../cMaterial|cMaterial@]]|}}
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

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRangeMax}}
<syntaxhighlight lang="c++">void SetRangeMax(float afRangeMaxStart,
                 float afRangeMaxEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRangeMaxStart|float|}}
{{CodeDocDetailParam|afRangeMaxEnd|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRangeMin}}
<syntaxhighlight lang="c++">void SetRangeMin(float afRangeMinStart,
                 float afRangeMinEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRangeMinStart|float|}}
{{CodeDocDetailParam|afRangeMinEnd|float|}}
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

{{CodeDocDetailTop|SetSize}}
<syntaxhighlight lang="c++">void SetSize(const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">void SetVisible(bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abVisible|bool|}}
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