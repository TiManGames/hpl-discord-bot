{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxFootPlacement has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afTime)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetFootActive|GetFootActive]](bool abRight, bool abFront <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|void|[[#LoadFromVariables|LoadFromVariables]]([[../cResourceVarsObject|cResourceVarsObject@]] apVars)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFootActive|SetFootActive]](bool abX, bool abRight, float afInactiveLength <nowiki>=</nowiki> -1.f, bool abFront <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOut}}
<syntaxhighlight lang="c++">void FadeOut(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFootActive}}
<syntaxhighlight lang="c++">bool GetFootActive(bool abRight,
                   bool abFront = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abRight|bool|}}
{{CodeDocDetailParam|abFront|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromVariables}}
<syntaxhighlight lang="c++">void LoadFromVariables(cResourceVarsObject@ apVars)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVars|[[../cResourceVarsObject|cResourceVarsObject@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFootActive}}
<syntaxhighlight lang="c++">void SetFootActive(bool abX,
                   bool abRight,
                   float afInactiveLength = -1.f,
                   bool abFront = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abRight|bool|}}
{{CodeDocDetailParam|afInactiveLength|float|}}
{{CodeDocDetailParam|abFront|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}