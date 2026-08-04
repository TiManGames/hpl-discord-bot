{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iLuxHeroStatsHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#CreateHeroStat|CreateHeroStat]](int alID, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetHeroStatAmount|GetHeroStatAmount]](int alID)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetHeroStatDescription|GetHeroStatDescription]](int alID)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetHeroStatName|GetHeroStatName]](int alID)|}}
{{CodeDocSummaryItem|void|[[#IncreaseHeroStatAmount|IncreaseHeroStatAmount]](int alID, int alAmount)|}}
{{CodeDocSummaryItem|void|[[#RegisterHeroStats|RegisterHeroStats]]()|}}
{{CodeDocSummaryItem|void|[[#SetHeroStatAmount|SetHeroStatAmount]](int alID, int alAmount)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CreateHeroStat}}
<syntaxhighlight lang="c++">void CreateHeroStat(int alID,
                    const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeroStatAmount}}
<syntaxhighlight lang="c++">int GetHeroStatAmount(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeroStatDescription}}
<syntaxhighlight lang="c++">tString GetHeroStatDescription(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeroStatName}}
<syntaxhighlight lang="c++">tString GetHeroStatName(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncreaseHeroStatAmount}}
<syntaxhighlight lang="c++">void IncreaseHeroStatAmount(int alID,
                            int alAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|alAmount|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RegisterHeroStats}}
<syntaxhighlight lang="c++">void RegisterHeroStats()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHeroStatAmount}}
<syntaxhighlight lang="c++">void SetHeroStatAmount(int alID,
                       int alAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|alAmount|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}