{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxEventDatabaseHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cEventDatabase|cEventDatabase]]|[[#GetEventDataBase|GetEventDataBase]]()|}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#Query|Query]](const [[../tString|tString]] &in asOwner, const [[../tString|tString]] &in asTrigger, [[../cFactStateContainer|cFactStateContainer@]] apExtraFacts)|}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#QueryToAll|QueryToAll]](int alOwnerFlags, const [[../tString|tString]] &in asTrigger, [[../cFactStateContainer|cFactStateContainer@]] apExtraFacts)|}}
{{CodeDocSummaryItem|void|[[#RemoveGlobalFact|RemoveGlobalFact]](const [[../tString|tString]] &in asFact)|}}
{{CodeDocSummaryItem|void|[[#RemoveLocalFact|RemoveLocalFact]](const [[../tString|tString]] &in asFact)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalFact|SetGlobalFact]](const [[../tString|tString]] &in asFact)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalFactFloat|SetGlobalFactFloat]](const [[../tString|tString]] &in asFact, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalFactInt|SetGlobalFactInt]](const [[../tString|tString]] &in asFact, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalFactString|SetGlobalFactString]](const [[../tString|tString]] &in asFact, const [[../tString|tString]] &in asStr)|}}
{{CodeDocSummaryItem|void|[[#SetLocalFact|SetLocalFact]](const [[../tString|tString]] &in asFact)|}}
{{CodeDocSummaryItem|void|[[#SetLocalFactFloat|SetLocalFactFloat]](const [[../tString|tString]] &in asFact, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetLocalFactInt|SetLocalFactInt]](const [[../tString|tString]] &in asFact, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetLocalFactString|SetLocalFactString]](const [[../tString|tString]] &in asFact, const [[../tString|tString]] &in asStr)|}}
{{CodeDocSummaryItem|bool|[[#UseStandardTriggers|UseStandardTriggers]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetEventDataBase}}
<syntaxhighlight lang="c++">cEventDatabase@ GetEventDataBase()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEventDatabase@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Query}}
<syntaxhighlight lang="c++">cEvent@ Query(const tString &in asOwner,
              const tString &in asTrigger,
              cFactStateContainer@ apExtraFacts)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asOwner|[[../tString|tString]]|}}
{{CodeDocDetailParam|asTrigger|[[../tString|tString]]|}}
{{CodeDocDetailParam|apExtraFacts|[[../cFactStateContainer|cFactStateContainer@]]|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|QueryToAll}}
<syntaxhighlight lang="c++">cEvent@ QueryToAll(int alOwnerFlags,
                   const tString &in asTrigger,
                   cFactStateContainer@ apExtraFacts)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alOwnerFlags|int|}}
{{CodeDocDetailParam|asTrigger|[[../tString|tString]]|}}
{{CodeDocDetailParam|apExtraFacts|[[../cFactStateContainer|cFactStateContainer@]]|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveGlobalFact}}
<syntaxhighlight lang="c++">void RemoveGlobalFact(const tString &in asFact)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveLocalFact}}
<syntaxhighlight lang="c++">void RemoveLocalFact(const tString &in asFact)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalFact}}
<syntaxhighlight lang="c++">void SetGlobalFact(const tString &in asFact)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalFactFloat}}
<syntaxhighlight lang="c++">void SetGlobalFactFloat(const tString &in asFact,
                        float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalFactInt}}
<syntaxhighlight lang="c++">void SetGlobalFactInt(const tString &in asFact,
                      int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalFactString}}
<syntaxhighlight lang="c++">void SetGlobalFactString(const tString &in asFact,
                         const tString &in asStr)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|asStr|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalFact}}
<syntaxhighlight lang="c++">void SetLocalFact(const tString &in asFact)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalFactFloat}}
<syntaxhighlight lang="c++">void SetLocalFactFloat(const tString &in asFact,
                       float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalFactInt}}
<syntaxhighlight lang="c++">void SetLocalFactInt(const tString &in asFact,
                     int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLocalFactString}}
<syntaxhighlight lang="c++">void SetLocalFactString(const tString &in asFact,
                        const tString &in asStr)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|asStr|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UseStandardTriggers}}
<syntaxhighlight lang="c++">bool UseStandardTriggers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}