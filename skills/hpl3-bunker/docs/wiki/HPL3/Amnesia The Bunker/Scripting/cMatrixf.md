{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cMatrixf has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|float|[[#GetElement|GetElement]](uint64 , uint64 )|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetForward|GetForward]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetRight|GetRight]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetRotation|GetRotation]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetTranslation|GetTranslation]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetTranspose|GetTranspose]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetUp|GetUp]]()|}}
{{CodeDocSummaryItem|void|[[#SetForward|SetForward]](const [[../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|void|[[#SetRight|SetRight]](const [[../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|void|[[#SetRotation|SetRotation]](float afXX, float afXY, float afXZ, float afYX, float afYY, float afYZ, float afZX, float afZY, float afZZ)|}}
{{CodeDocSummaryItem|void|[[#SetRotation|SetRotation]](const [[../cMatrixf|cMatrixf]] &in a_mtxRot)|}}
{{CodeDocSummaryItem|void|[[#SetTranslation|SetTranslation]](const [[../cVector3f|cVector3f]] &in avTrans)|}}
{{CodeDocSummaryItem|void|[[#SetUp|SetUp]](const [[../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetElement}}
<syntaxhighlight lang="c++">float GetElement(uint64 ,
                 uint64 )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||uint64|}}
{{CodeDocDetailParam||uint64|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForward}}
<syntaxhighlight lang="c++">cVector3f GetForward()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRight}}
<syntaxhighlight lang="c++">cVector3f GetRight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotation}}
<syntaxhighlight lang="c++">cMatrixf GetRotation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTranslation}}
<syntaxhighlight lang="c++">cVector3f GetTranslation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTranspose}}
<syntaxhighlight lang="c++">cMatrixf GetTranspose()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUp}}
<syntaxhighlight lang="c++">cVector3f GetUp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForward}}
<syntaxhighlight lang="c++">void SetForward(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRight}}
<syntaxhighlight lang="c++">void SetRight(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotation}}
<syntaxhighlight lang="c++">void SetRotation(float afXX,
                 float afXY,
                 float afXZ,
                 float afYX,
                 float afYY,
                 float afYZ,
                 float afZX,
                 float afZY,
                 float afZZ)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afXX|float|}}
{{CodeDocDetailParam|afXY|float|}}
{{CodeDocDetailParam|afXZ|float|}}
{{CodeDocDetailParam|afYX|float|}}
{{CodeDocDetailParam|afYY|float|}}
{{CodeDocDetailParam|afYZ|float|}}
{{CodeDocDetailParam|afZX|float|}}
{{CodeDocDetailParam|afZY|float|}}
{{CodeDocDetailParam|afZZ|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotation}}
<syntaxhighlight lang="c++">void SetRotation(const cMatrixf &in a_mtxRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxRot|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTranslation}}
<syntaxhighlight lang="c++">void SetTranslation(const cVector3f &in avTrans)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avTrans|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUp}}
<syntaxhighlight lang="c++">void SetUp(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}