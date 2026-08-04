{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iCollideShape has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetDepth|GetDepth]]()|}}
{{CodeDocSummaryItem|float|[[#GetHeight|GetHeight]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetHeightMapOffset|GetHeightMapOffset]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetOffset|GetOffset]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#GetSubShape|GetSubShape]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetSubShapeNum|GetSubShapeNum]]()|}}
{{CodeDocSummaryItem|[[../eCollideShapeType|eCollideShapeType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|float|[[#GetVolume|GetVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetWidth|GetWidth]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDepth}}
<syntaxhighlight lang="c++">float GetDepth()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeight}}
<syntaxhighlight lang="c++">float GetHeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeightMapOffset}}
<syntaxhighlight lang="c++">cVector3f GetHeightMapOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOffset}}
<syntaxhighlight lang="c++">const cMatrixf& GetOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">const cVector3f& GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubShape}}
<syntaxhighlight lang="c++">iCollideShape@ GetSubShape(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubShapeNum}}
<syntaxhighlight lang="c++">int GetSubShapeNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">eCollideShapeType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eCollideShapeType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVolume}}
<syntaxhighlight lang="c++">float GetVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWidth}}
<syntaxhighlight lang="c++">float GetWidth()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}