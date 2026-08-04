{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
{{CodeDocSummaryTop|Field Type|Field Name And Description}}
{{CodeDocSummaryItem|int|[[#mlId|mlId]]|}}
{{CodeDocSummaryBottom}}

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#Fader_ClearAll|Fader_ClearAll]]()|}}
{{CodeDocSummaryItem|void|[[#Fader_FadeTo|Fader_FadeTo]](uint alID, float afGoal, float afTime, bool abReverseAtEnd <nowiki>=</nowiki> false, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_FadeTo|Fader_FadeTo]](const [[../tString|tString]] &in asName, float afGoal, float afTime, bool abReverseAtEnd <nowiki>=</nowiki> false, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Fader_GetValue|Fader_GetValue]](uint alID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Fader_GetValue|Fader_GetValue]](const [[../tString|tString]] &in asName, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_Set|Fader_Set]](uint alID, float afX, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_Set|Fader_Set]](const [[../tString|tString]] &in asName, float afX, bool abSkipIfExists <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Fader_SetPaused|Fader_SetPaused]](uint alID, bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#Fader_SetPaused|Fader_SetPaused]](const [[../tString|tString]] &in asName, bool abPaused)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetComponentName|GetComponentName]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|void|[[#Timer_Add|Timer_Add]](uint64 alID, float afTime, const [[../tString|tString]] &in asFunc <nowiki>=</nowiki> "", bool abCreateIfExist <nowiki>=</nowiki> true, bool abRepeat <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_Add|Timer_Add]](const [[../tString|tString]] &in asID, float afTime, const [[../tString|tString]] &in asFunc <nowiki>=</nowiki> "", bool abCreateIfExist <nowiki>=</nowiki> true, bool abRepeat <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_ClearAll|Timer_ClearAll]]()|}}
{{CodeDocSummaryItem|bool|[[#Timer_Exists|Timer_Exists]](uint64 alID)|}}
{{CodeDocSummaryItem|bool|[[#Timer_Exists|Timer_Exists]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetTimeLeft|Timer_GetTimeLeft]](uint64 alID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetTimeLeft|Timer_GetTimeLeft]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetValue|Timer_GetValue]](uint64 alID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|float|[[#Timer_GetValue|Timer_GetValue]](const [[../tString|tString]] &in asID, float afMin <nowiki>=</nowiki> 0, float afMax <nowiki>=</nowiki> 1, [[../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear, bool abAbsValue <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Timer_Remove|Timer_Remove]](uint64 alID)|}}
{{CodeDocSummaryItem|void|[[#Timer_Remove|Timer_Remove]](const [[../tString|tString]] &in asID)|}}
{{CodeDocSummaryItem|void|[[#Timer_SetPaused|Timer_SetPaused]](uint64 alID, bool abX)|}}
{{CodeDocSummaryItem|void|[[#Timer_SetPaused|Timer_SetPaused]](const [[../tString|tString]] &in asID, bool abX)|}}
{{CodeDocSummaryItem|bool|[[#Timer_TimeHasPassed|Timer_TimeHasPassed]](uint64 alID, float afLength)|}}
{{CodeDocSummaryItem|bool|[[#Timer_TimeHasPassed|Timer_TimeHasPassed]](const [[../tString|tString]] &in asID, float afLength)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|Fader_ClearAll}}
<syntaxhighlight lang="c++">void Fader_ClearAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_FadeTo}}
<syntaxhighlight lang="c++">void Fader_FadeTo(uint alID,
                  float afGoal,
                  float afTime,
                  bool abReverseAtEnd = false,
                  bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afGoal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|abReverseAtEnd|bool|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_FadeTo}}
<syntaxhighlight lang="c++">void Fader_FadeTo(const tString &in asName,
                  float afGoal,
                  float afTime,
                  bool abReverseAtEnd = false,
                  bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afGoal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|abReverseAtEnd|bool|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_GetValue}}
<syntaxhighlight lang="c++">float Fader_GetValue(uint alID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_GetValue}}
<syntaxhighlight lang="c++">float Fader_GetValue(const tString &in asName,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_Set}}
<syntaxhighlight lang="c++">void Fader_Set(uint alID,
               float afX,
               bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_Set}}
<syntaxhighlight lang="c++">void Fader_Set(const tString &in asName,
               float afX,
               bool abSkipIfExists = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|abSkipIfExists|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_SetPaused}}
<syntaxhighlight lang="c++">void Fader_SetPaused(uint alID,
                     bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Fader_SetPaused}}
<syntaxhighlight lang="c++">void Fader_SetPaused(const tString &in asName,
                     bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetComponentName}}
<syntaxhighlight lang="c++">const tString& GetComponentName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|mlId}}
<syntaxhighlight lang="c++">int mlId</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Add}}
<syntaxhighlight lang="c++">void Timer_Add(uint64 alID,
               float afTime,
               const tString &in asFunc = "",
               bool abCreateIfExist = true,
               bool abRepeat = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfExist|bool|}}
{{CodeDocDetailParam|abRepeat|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Add}}
<syntaxhighlight lang="c++">void Timer_Add(const tString &in asID,
               float afTime,
               const tString &in asFunc = "",
               bool abCreateIfExist = true,
               bool abRepeat = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCreateIfExist|bool|}}
{{CodeDocDetailParam|abRepeat|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_ClearAll}}
<syntaxhighlight lang="c++">void Timer_ClearAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Exists}}
<syntaxhighlight lang="c++">bool Timer_Exists(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Exists}}
<syntaxhighlight lang="c++">bool Timer_Exists(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetTimeLeft}}
<syntaxhighlight lang="c++">float Timer_GetTimeLeft(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetTimeLeft}}
<syntaxhighlight lang="c++">float Timer_GetTimeLeft(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetValue}}
<syntaxhighlight lang="c++">float Timer_GetValue(uint64 alID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_GetValue}}
<syntaxhighlight lang="c++">float Timer_GetValue(const tString &in asID,
                     float afMin = 0,
                     float afMax = 1,
                     eEasing aEasing = eEasing_Linear,
                     bool abAbsValue = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|aEasing|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abAbsValue|bool|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Remove}}
<syntaxhighlight lang="c++">void Timer_Remove(uint64 alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_Remove}}
<syntaxhighlight lang="c++">void Timer_Remove(const tString &in asID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_SetPaused}}
<syntaxhighlight lang="c++">void Timer_SetPaused(uint64 alID,
                     bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_SetPaused}}
<syntaxhighlight lang="c++">void Timer_SetPaused(const tString &in asID,
                     bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_TimeHasPassed}}
<syntaxhighlight lang="c++">bool Timer_TimeHasPassed(uint64 alID,
                         float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|uint64|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Timer_TimeHasPassed}}
<syntaxhighlight lang="c++">bool Timer_TimeHasPassed(const tString &in asID,
                         float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asID|[[../tString|tString]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}