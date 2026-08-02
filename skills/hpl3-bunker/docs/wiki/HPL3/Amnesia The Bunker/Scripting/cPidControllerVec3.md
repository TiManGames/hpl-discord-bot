{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
{{CodeDocSummaryTop|Field Type|Field Name And Description}}
{{CodeDocSummaryItem|float|[[#d|d]]|}}
{{CodeDocSummaryItem|float|[[#i|i]]|}}
{{CodeDocSummaryItem|float|[[#p|p]]|}}
{{CodeDocSummaryBottom}}

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLastDerivative|GetLastDerivative]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLastError|GetLastError]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLastIntegral|GetLastIntegral]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#Output|Output]](const [[../cVector3f|cVector3f]] &in avError, float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetErrorNum|SetErrorNum]](int alErrorNum)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|d}}
<syntaxhighlight lang="c++">float d</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastDerivative}}
<syntaxhighlight lang="c++">cVector3f GetLastDerivative()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastError}}
<syntaxhighlight lang="c++">cVector3f GetLastError()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastIntegral}}
<syntaxhighlight lang="c++">cVector3f GetLastIntegral()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|i}}
<syntaxhighlight lang="c++">float i</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Output}}
<syntaxhighlight lang="c++">cVector3f Output(const cVector3f &in avError,
                 float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avError|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|p}}
<syntaxhighlight lang="c++">float p</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Reset}}
<syntaxhighlight lang="c++">void Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetErrorNum}}
<syntaxhighlight lang="c++">void SetErrorNum(int alErrorNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alErrorNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}