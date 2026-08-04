{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cEventDatabase has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#AddEvent|AddEvent]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asOwner, const [[../tString|tString]] &in asTrigger, const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#Clear|Clear]]()|}}
{{CodeDocSummaryItem|[[../cFactStateContainer|cFactStateContainer]]|[[#CreateFactStateContainer|CreateFactStateContainer]]()|}}
{{CodeDocSummaryItem|void|[[#DestroyFactStateContainer|DestroyFactStateContainer]]([[../cFactStateContainer|cFactStateContainer@]] apContainer)|}}
{{CodeDocSummaryItem|[[../cFactStateContainer|cFactStateContainer]]|[[#GetDefaultMemory|GetDefaultMemory]]()|}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#GetEvent|GetEvent]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetEventNum|GetEventNum]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cEventOwner|cEventOwner]]|[[#GetOwner|GetOwner]](const [[../tString|tString]] &in asName, bool abCreateIfNotExist)|}}
{{CodeDocSummaryItem|[[../cEventScene|cEventScene]]|[[#GetScene|GetScene]](const [[../tString|tString]] &in asName, bool abCreateIfNotExist)|}}
{{CodeDocSummaryItem|[[../cEventTrigger|cEventTrigger]]|[[#GetTrigger|GetTrigger]](const [[../tString|tString]] &in asName, bool abCreateIfNotExist)|}}
{{CodeDocSummaryItem|void|[[#PerformEventActions|PerformEventActions]]([[../cEvent|cEvent@]] apEvent)|}}
{{CodeDocSummaryItem|void|[[#QueryAddFactStates|QueryAddFactStates]]([[../cFactStateContainer|cFactStateContainer@]] apFactStates)|}}
{{CodeDocSummaryItem|void|[[#QueryBegin|QueryBegin]]([[../cFactStateContainer|cFactStateContainer@]] apCustomMemory)|}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#QueryExecute|QueryExecute]](const [[../tString|tString]] &in asOwner, const [[../tString|tString]] &in asTrigger, const [[../tString|tString]] &in asScene, bool abPerformEventActions)|}}
{{CodeDocSummaryItem|[[../cEvent|cEvent]]|[[#QueryExecuteMultiOwner|QueryExecuteMultiOwner]](int alOwnerFlags, const [[../tString|tString]] &in asTrigger, const [[../tString|tString]] &in asScene, bool abPerformEventActions)|}}
{{CodeDocSummaryItem|void|[[#SetupData|SetupData]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddEvent}}
<syntaxhighlight lang="c++">cEvent@ AddEvent(const tString &in asName,
                 const tString &in asOwner,
                 const tString &in asTrigger,
                 const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asOwner|[[../tString|tString]]|}}
{{CodeDocDetailParam|asTrigger|[[../tString|tString]]|}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Clear}}
<syntaxhighlight lang="c++">void Clear()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateFactStateContainer}}
<syntaxhighlight lang="c++">cFactStateContainer@ CreateFactStateContainer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cFactStateContainer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyFactStateContainer}}
<syntaxhighlight lang="c++">void DestroyFactStateContainer(cFactStateContainer@ apContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apContainer|[[../cFactStateContainer|cFactStateContainer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultMemory}}
<syntaxhighlight lang="c++">cFactStateContainer@ GetDefaultMemory()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cFactStateContainer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEvent}}
<syntaxhighlight lang="c++">cEvent@ GetEvent(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEventNum}}
<syntaxhighlight lang="c++">int GetEventNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOwner}}
<syntaxhighlight lang="c++">cEventOwner@ GetOwner(const tString &in asName,
                      bool abCreateIfNotExist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfNotExist|bool|}}
{{CodeDocDetailReturn|cEventOwner@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScene}}
<syntaxhighlight lang="c++">cEventScene@ GetScene(const tString &in asName,
                      bool abCreateIfNotExist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfNotExist|bool|}}
{{CodeDocDetailReturn|cEventScene@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrigger}}
<syntaxhighlight lang="c++">cEventTrigger@ GetTrigger(const tString &in asName,
                          bool abCreateIfNotExist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfNotExist|bool|}}
{{CodeDocDetailReturn|cEventTrigger@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PerformEventActions}}
<syntaxhighlight lang="c++">void PerformEventActions(cEvent@ apEvent)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEvent|[[../cEvent|cEvent@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|QueryAddFactStates}}
<syntaxhighlight lang="c++">void QueryAddFactStates(cFactStateContainer@ apFactStates)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFactStates|[[../cFactStateContainer|cFactStateContainer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|QueryBegin}}
<syntaxhighlight lang="c++">void QueryBegin(cFactStateContainer@ apCustomMemory)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCustomMemory|[[../cFactStateContainer|cFactStateContainer@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|QueryExecute}}
<syntaxhighlight lang="c++">cEvent@ QueryExecute(const tString &in asOwner,
                     const tString &in asTrigger,
                     const tString &in asScene,
                     bool abPerformEventActions)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asOwner|[[../tString|tString]]|}}
{{CodeDocDetailParam|asTrigger|[[../tString|tString]]|}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailParam|abPerformEventActions|bool|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|QueryExecuteMultiOwner}}
<syntaxhighlight lang="c++">cEvent@ QueryExecuteMultiOwner(int alOwnerFlags,
                               const tString &in asTrigger,
                               const tString &in asScene,
                               bool abPerformEventActions)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alOwnerFlags|int|}}
{{CodeDocDetailParam|asTrigger|[[../tString|tString]]|}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailParam|abPerformEventActions|bool|}}
{{CodeDocDetailReturn|cEvent@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupData}}
<syntaxhighlight lang="c++">void SetupData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}