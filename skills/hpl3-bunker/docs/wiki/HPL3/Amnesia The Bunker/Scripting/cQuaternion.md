{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
{{CodeDocSummaryTop|Field Type|Field Name And Description}}
{{CodeDocSummaryItem|float|[[#w|w]]|}}
{{CodeDocSummaryItem|float|[[#x|x]]|}}
{{CodeDocSummaryItem|float|[[#y|y]]|}}
{{CodeDocSummaryItem|float|[[#z|z]]|}}
{{CodeDocSummaryBottom}}

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FromAngleAxis|FromAngleAxis]](float afAngle, const [[../cVector3f|cVector3f]] &in )|}}
{{CodeDocSummaryItem|void|[[#FromRotationMatrix|FromRotationMatrix]](const [[../cMatrixf|cMatrixf]] &in )|}}
{{CodeDocSummaryItem|float|[[#Length|Length]]()|}}
{{CodeDocSummaryItem|float|[[#LengthXYZ|LengthXYZ]]()|}}
{{CodeDocSummaryItem|void|[[#Normalize|Normalize]]()|}}
{{CodeDocSummaryItem|void|[[#SetXYZ|SetXYZ]](const [[../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|float|[[#SqrLength|SqrLength]]()|}}
{{CodeDocSummaryItem|float|[[#SqrLengthXYZ|SqrLengthXYZ]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|FromAngleAxis}}
<syntaxhighlight lang="c++">void FromAngleAxis(float afAngle,
                   const cVector3f &in )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam||[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FromRotationMatrix}}
<syntaxhighlight lang="c++">void FromRotationMatrix(const cMatrixf &in )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Length}}
<syntaxhighlight lang="c++">float Length()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LengthXYZ}}
<syntaxhighlight lang="c++">float LengthXYZ()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Normalize}}
<syntaxhighlight lang="c++">void Normalize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetXYZ}}
<syntaxhighlight lang="c++">void SetXYZ(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SqrLength}}
<syntaxhighlight lang="c++">float SqrLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SqrLengthXYZ}}
<syntaxhighlight lang="c++">float SqrLengthXYZ()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|w}}
<syntaxhighlight lang="c++">float w</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|x}}
<syntaxhighlight lang="c++">float x</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|y}}
<syntaxhighlight lang="c++">float y</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|z}}
<syntaxhighlight lang="c++">float z</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}