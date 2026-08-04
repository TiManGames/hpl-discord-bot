{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cEvent has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddActionFactSet|AddActionFactSet]](const [[../tString|tString]] &in asFact)|}}
{{CodeDocSummaryItem|void|[[#AddActionFloatOp|AddActionFloatOp]](const [[../tString|tString]] &in asFact, float afValue, [[../eEventOpType|eEventOpType]] aOpType)|}}
{{CodeDocSummaryItem|void|[[#AddActionIntOp|AddActionIntOp]](const [[../tString|tString]] &in asFact, int alValue, [[../eEventOpType|eEventOpType]] aOpType)|}}
{{CodeDocSummaryItem|void|[[#AddActionStringSet|AddActionStringSet]](const [[../tString|tString]] &in asFact, const [[../tString|tString]] &in asValue)|}}
{{CodeDocSummaryItem|void|[[#AddCriteria|AddCriteria]](const [[../tString|tString]] &in asFactName)|}}
{{CodeDocSummaryItem|void|[[#AddCriteriaFloatCompare|AddCriteriaFloatCompare]](const [[../tString|tString]] &in asFactName, float afValue, [[../eEventCompareType|eEventCompareType]] aCompareType)|}}
{{CodeDocSummaryItem|void|[[#AddCriteriaFloatCompare|AddCriteriaFloatCompare]](const [[../tString|tString]] &in asFactName, float afMin, float afMax, [[../eEventCompareType|eEventCompareType]] aCompareType)|}}
{{CodeDocSummaryItem|void|[[#AddCriteriaIntCompare|AddCriteriaIntCompare]](const [[../tString|tString]] &in asFactName, int alValue, [[../eEventCompareType|eEventCompareType]] aCompareType)|}}
{{CodeDocSummaryItem|void|[[#AddCriteriaIntCompare|AddCriteriaIntCompare]](const [[../tString|tString]] &in asFactName, int alMin, int alMax, [[../eEventCompareType|eEventCompareType]] aCompareType)|}}
{{CodeDocSummaryItem|void|[[#AddCriteriaStringCompare|AddCriteriaStringCompare]](const [[../tString|tString]] &in asFactName, const [[../tString|tString]] &in asValue, [[../eEventCompareType|eEventCompareType]] aCompareType)|}}
{{CodeDocSummaryItem|int|[[#GetActionNum|GetActionNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetCriterionNum|GetCriterionNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetId|GetId]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetOutput|GetOutput]]()|}}
{{CodeDocSummaryItem|int|[[#GetOutputId|GetOutputId]](int alId)|}}
{{CodeDocSummaryItem|void|[[#SetOutput|SetOutput]](const [[../tString|tString]] &in asOutput)|}}
{{CodeDocSummaryItem|void|[[#SetOutputId|SetOutputId]](int alId)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddActionFactSet}}
<syntaxhighlight lang="c++">void AddActionFactSet(const tString &in asFact)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddActionFloatOp}}
<syntaxhighlight lang="c++">void AddActionFloatOp(const tString &in asFact,
                      float afValue,
                      eEventOpType aOpType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailParam|aOpType|[[../eEventOpType|eEventOpType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddActionIntOp}}
<syntaxhighlight lang="c++">void AddActionIntOp(const tString &in asFact,
                    int alValue,
                    eEventOpType aOpType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|alValue|int|}}
{{CodeDocDetailParam|aOpType|[[../eEventOpType|eEventOpType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddActionStringSet}}
<syntaxhighlight lang="c++">void AddActionStringSet(const tString &in asFact,
                        const tString &in asValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFact|[[../tString|tString]]|}}
{{CodeDocDetailParam|asValue|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteria}}
<syntaxhighlight lang="c++">void AddCriteria(const tString &in asFactName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteriaFloatCompare}}
<syntaxhighlight lang="c++">void AddCriteriaFloatCompare(const tString &in asFactName,
                             float afValue,
                             eEventCompareType aCompareType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailParam|aCompareType|[[../eEventCompareType|eEventCompareType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteriaFloatCompare}}
<syntaxhighlight lang="c++">void AddCriteriaFloatCompare(const tString &in asFactName,
                             float afMin,
                             float afMax,
                             eEventCompareType aCompareType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aCompareType|[[../eEventCompareType|eEventCompareType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteriaIntCompare}}
<syntaxhighlight lang="c++">void AddCriteriaIntCompare(const tString &in asFactName,
                           int alValue,
                           eEventCompareType aCompareType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alValue|int|}}
{{CodeDocDetailParam|aCompareType|[[../eEventCompareType|eEventCompareType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteriaIntCompare}}
<syntaxhighlight lang="c++">void AddCriteriaIntCompare(const tString &in asFactName,
                           int alMin,
                           int alMax,
                           eEventCompareType aCompareType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alMin|int|}}
{{CodeDocDetailParam|alMax|int|}}
{{CodeDocDetailParam|aCompareType|[[../eEventCompareType|eEventCompareType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddCriteriaStringCompare}}
<syntaxhighlight lang="c++">void AddCriteriaStringCompare(const tString &in asFactName,
                              const tString &in asValue,
                              eEventCompareType aCompareType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFactName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asValue|[[../tString|tString]]|}}
{{CodeDocDetailParam|aCompareType|[[../eEventCompareType|eEventCompareType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActionNum}}
<syntaxhighlight lang="c++">int GetActionNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCriterionNum}}
<syntaxhighlight lang="c++">int GetCriterionNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetId}}
<syntaxhighlight lang="c++">int GetId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOutput}}
<syntaxhighlight lang="c++">const tString& GetOutput()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetOutputId}}
<syntaxhighlight lang="c++">int GetOutputId(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetOutput}}
<syntaxhighlight lang="c++">void SetOutput(const tString &in asOutput)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asOutput|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetOutputId}}
<syntaxhighlight lang="c++">void SetOutputId(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}