{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cBoundingVolume has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalCenter|GetLocalCenter]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalMax|GetLocalMax]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalMin|GetLocalMin]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMax|GetMax]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMin|GetMin]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetRadius|GetRadius]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetTransform|GetTransform]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldCenter|GetWorldCenter]]()|}}
{{CodeDocSummaryItem|void|[[#SetLocalMinMax|SetLocalMinMax]](const [[../cVector3f|cVector3f]] &in mvMin, const [[../cVector3f|cVector3f]] &in mvMax, bool abUpdateSize <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetSize|SetSize]](const [[../cVector3f|cVector3f]] &in avSize, bool abUpdateSize <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#SetTransform|SetTransform]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform, bool abUpdateSize <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetLocalCenter}}
<syntaxhighlight lang="c++">cVector3f GetLocalCenter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMax}}
<syntaxhighlight lang="c++">const cVector3f& GetLocalMax()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMin}}
<syntaxhighlight lang="c++">const cVector3f& GetLocalMin()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMax}}
<syntaxhighlight lang="c++">cVector3f GetMax()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMin}}
<syntaxhighlight lang="c++">cVector3f GetMin()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">cVector3f GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRadius}}
<syntaxhighlight lang="c++">float GetRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">cVector3f GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransform}}
<syntaxhighlight lang="c++">const cMatrixf& GetTransform()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldCenter}}
<syntaxhighlight lang="c++">cVector3f GetWorldCenter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalMinMax}}
<syntaxhighlight lang="c++">void SetLocalMinMax(const cVector3f &in mvMin,
                    const cVector3f &in mvMax,
                    bool abUpdateSize = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|mvMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|mvMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abUpdateSize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSize}}
<syntaxhighlight lang="c++">void SetSize(const cVector3f &in avSize,
             bool abUpdateSize = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abUpdateSize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTransform}}
<syntaxhighlight lang="c++">void SetTransform(const cMatrixf &in a_mtxTransform,
                  bool abUpdateSize = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailParam|abUpdateSize|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}