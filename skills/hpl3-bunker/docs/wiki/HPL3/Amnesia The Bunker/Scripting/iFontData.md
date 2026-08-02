{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iFontData has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|float|[[#GetHeight|GetHeight]]()|}}
{{CodeDocSummaryItem|float|[[#GetLength|GetLength]](const [[../cVector2f|cVector2f]] &in avSize, const [[../tWString|tWString]] &in asString)|}}
{{CodeDocSummaryItem|void|[[#GetWordWrapRows|GetWordWrapRows]](float afLength, const [[../cVector2f|cVector2f]] &in avSize, const [[../tWString|tWString]] &in asString, [[../array|array]]<[[../tWString|tWString]]> avRows)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetHeight}}
<syntaxhighlight lang="c++">float GetHeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLength}}
<syntaxhighlight lang="c++">float GetLength(const cVector2f &in avSize,
                const tWString &in asString)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|asString|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWordWrapRows}}
<syntaxhighlight lang="c++">void GetWordWrapRows(float afLength,
                     const cVector2f &in avSize,
                     const tWString &in asString,
                     tWString avRows)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|asString|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avRows|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}