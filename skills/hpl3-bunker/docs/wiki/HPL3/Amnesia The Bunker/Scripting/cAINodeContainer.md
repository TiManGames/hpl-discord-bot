{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cAINodeContainer has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCollideSize|GetCollideSize]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNode|GetNode]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeFromID|GetNodeFromID]](int alID)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeFromName|GetNodeFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cAINodeIterator|cAINodeIterator]]|[[#GetNodeIterator|GetNodeIterator]](const [[../cVector3f|cVector3f]] &in avPosition, float afRadius)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetNodeName|GetNodeName]]()|}}
{{CodeDocSummaryItem|int|[[#GetNodeNum|GetNodeNum]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetCollideSize}}
<syntaxhighlight lang="c++">const cVector3f& GetCollideSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNode}}
<syntaxhighlight lang="c++">cAINode@ GetNode(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeFromID}}
<syntaxhighlight lang="c++">cAINode@ GetNodeFromID(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeFromName}}
<syntaxhighlight lang="c++">cAINode@ GetNodeFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeIterator}}
<syntaxhighlight lang="c++">cAINodeIterator@ GetNodeIterator(const cVector3f &in avPosition,
                                 float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|cAINodeIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeName}}
<syntaxhighlight lang="c++">const tString& GetNodeName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeNum}}
<syntaxhighlight lang="c++">int GetNodeNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}