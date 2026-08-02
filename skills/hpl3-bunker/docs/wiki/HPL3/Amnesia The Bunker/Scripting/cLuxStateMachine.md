{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxStateMachine has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddState|AddState]](const [[../tString|tString]] &in asName, int alId)|}}
{{CodeDocSummaryItem|void|[[#AddSubState|AddSubState]](const [[../tString|tString]] &in asName, int alId)|}}
{{CodeDocSummaryItem|void|[[#AddTimer|AddTimer]](uint64 alId, float afTime)|}}
{{CodeDocSummaryItem|void|[[#AddTimer|AddTimer]](const [[../tString|tString]] &in asId, float afTime)|}}
{{CodeDocSummaryItem|void|[[#ChangeState|ChangeState]](int alState)|}}
{{CodeDocSummaryItem|void|[[#ChangeSubState|ChangeSubState]](int alState)|}}
{{CodeDocSummaryItem|[[../cLuxEntityMessageData|cLuxEntityMessageData]]|[[#GetCurrentMessageData|GetCurrentMessageData]]()|}}
{{CodeDocSummaryItem|int|[[#GetCurrentState|GetCurrentState]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetCurrentStateName|GetCurrentStateName]]()|}}
{{CodeDocSummaryItem|int|[[#GetCurrentSubState|GetCurrentSubState]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetCurrentSubStateName|GetCurrentSubStateName]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|int|[[#GetNextState|GetNextState]]()|}}
{{CodeDocSummaryItem|int|[[#GetNextSubState|GetNextSubState]]()|}}
{{CodeDocSummaryItem|int|[[#GetPrevState|GetPrevState]]()|}}
{{CodeDocSummaryItem|int|[[#GetPrevSubState|GetPrevSubState]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|void|[[#StopTimer|StopTimer]](uint64 alId)|}}
{{CodeDocSummaryItem|void|[[#StopTimer|StopTimer]](const [[../tString|tString]] &in asId)|}}
{{CodeDocSummaryItem|bool|[[#TimerExists|TimerExists]](uint64 alId)|}}
{{CodeDocSummaryItem|bool|[[#TimerExists|TimerExists]](const [[../tString|tString]] &in asId)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddState}}
<syntaxhighlight lang="c++">void AddState(const tString &in asName,
              int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddSubState}}
<syntaxhighlight lang="c++">void AddSubState(const tString &in asName,
                 int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTimer}}
<syntaxhighlight lang="c++">void AddTimer(uint64 alId,
              float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTimer}}
<syntaxhighlight lang="c++">void AddTimer(const tString &in asId,
              float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asId|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeState}}
<syntaxhighlight lang="c++">void ChangeState(int alState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alState|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeSubState}}
<syntaxhighlight lang="c++">void ChangeSubState(int alState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alState|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentMessageData}}
<syntaxhighlight lang="c++">cLuxEntityMessageData@ GetCurrentMessageData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxEntityMessageData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentState}}
<syntaxhighlight lang="c++">int GetCurrentState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentStateName}}
<syntaxhighlight lang="c++">tString GetCurrentStateName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentSubState}}
<syntaxhighlight lang="c++">int GetCurrentSubState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentSubStateName}}
<syntaxhighlight lang="c++">tString GetCurrentSubStateName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNextState}}
<syntaxhighlight lang="c++">int GetNextState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNextSubState}}
<syntaxhighlight lang="c++">int GetNextSubState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPrevState}}
<syntaxhighlight lang="c++">int GetPrevState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPrevSubState}}
<syntaxhighlight lang="c++">int GetPrevSubState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopTimer}}
<syntaxhighlight lang="c++">void StopTimer(uint64 alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopTimer}}
<syntaxhighlight lang="c++">void StopTimer(const tString &in asId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asId|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TimerExists}}
<syntaxhighlight lang="c++">bool TimerExists(uint64 alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TimerExists}}
<syntaxhighlight lang="c++">bool TimerExists(const tString &in asId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asId|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}