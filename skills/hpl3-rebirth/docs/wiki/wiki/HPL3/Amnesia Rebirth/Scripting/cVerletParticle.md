{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cVerletParticle has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddForce|AddForce]](const [[../cVector3f|cVector3f]] &in avForce)|}}
{{CodeDocSummaryItem|void|[[#AddPosition|AddPosition]](const [[../cVector3f|cVector3f]] &in avAdd, bool abSetPrevPos)|}}
{{CodeDocSummaryItem|float|[[#GetInvMass|GetInvMass]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPrevPosition|GetPrevPosition]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetSmoothPosition|GetSmoothPosition]]()|}}
{{CodeDocSummaryItem|void|[[#SetInvMass|SetInvMass]](float afInvMass)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos, bool abSetPrevPos)|}}
{{CodeDocSummaryItem|void|[[#SetPrevPosition|SetPrevPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetSmoothPosition|SetSmoothPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddForce}}
<syntaxhighlight lang="c++">void AddForce(const cVector3f &in avForce)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddPosition}}
<syntaxhighlight lang="c++">void AddPosition(const cVector3f &in avAdd,
                 bool abSetPrevPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avAdd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abSetPrevPos|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInvMass}}
<syntaxhighlight lang="c++">float GetInvMass()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPrevPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetPrevPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSmoothPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetSmoothPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetInvMass}}
<syntaxhighlight lang="c++">void SetInvMass(float afInvMass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afInvMass|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos,
                 bool abSetPrevPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abSetPrevPos|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPrevPosition}}
<syntaxhighlight lang="c++">void SetPrevPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSmoothPosition}}
<syntaxhighlight lang="c++">void SetSmoothPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}