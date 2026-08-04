{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxDialogHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddBranch|AddBranch]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asNextBranch)|}}
{{CodeDocSummaryItem|void|[[#AddBranchEvent|AddBranchEvent]]([[../eLuxDialogBranchEvent|eLuxDialogBranchEvent]] aType, float afVar, const [[../tString|tString]] &in asVar, const [[../tString|tString]] &in asNewBranch, bool abOnlyCheckEndOfSubject)|}}
{{CodeDocSummaryItem|void|[[#AddBranchPause|AddBranchPause]](float afTime, const [[../tString|tString]] &in asCallback)|}}
{{CodeDocSummaryItem|void|[[#AddBranchSubject|AddBranchSubject]](const [[../tString|tString]] &in asSubject, const [[../tString|tString]] &in asCallback)|}}
{{CodeDocSummaryItem|void|[[#AddResponseCondition|AddResponseCondition]]([[../eLuxDialogOptionCondition|eLuxDialogOptionCondition]] aCondition, const [[../tString|tString]] &in asVarName, int alValue)|}}
{{CodeDocSummaryItem|void|[[#AddResponseEvent|AddResponseEvent]]([[../eLuxDialogOptionEvent|eLuxDialogOptionEvent]] aEvent, const [[../tString|tString]] &in asVarName, int alValue)|}}
{{CodeDocSummaryItem|void|[[#AddResponseOption|AddResponseOption]](const [[../tString|tString]] &in asEntry, const [[../tString|tString]] &in asBranch, int alId, const [[../tString|tString]] &in asCallback)|}}
{{CodeDocSummaryItem|void|[[#Begin|Begin]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#CharacterIsActive|CharacterIsActive]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#End|End]](const [[../tString|tString]] &in asStartBranch)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetCharacterScene|GetCharacterScene]](const [[../tString|tString]] &in asCharacterName)|}}
{{CodeDocSummaryItem|void|[[#GetCharactersInSubject|GetCharactersInSubject]](const [[../tString|tString]] &in asSubject, [[../array|array]]<[[../tString|tString]]> avOutCharacters)|}}
{{CodeDocSummaryItem|int|[[#GetVar|GetVar]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#IncVar|IncVar]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|void|[[#ReturnResponseSelectChoice|ReturnResponseSelectChoice]](int alSelectedOption)|}}
{{CodeDocSummaryItem|void|[[#SetCallbackFunc|SetCallbackFunc]](const [[../tString|tString]] &in asFunc)|}}
{{CodeDocSummaryItem|void|[[#SetResponseTimeLimit|SetResponseTimeLimit]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#SetVar|SetVar]](const [[../tString|tString]] &in asName, int alX)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#StopAll|StopAll]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddBranch}}
<syntaxhighlight lang="c++">void AddBranch(const tString &in asName,
               const tString &in asNextBranch)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asNextBranch|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddBranchEvent}}
<syntaxhighlight lang="c++">void AddBranchEvent(eLuxDialogBranchEvent aType,
                    float afVar,
                    const tString &in asVar,
                    const tString &in asNewBranch,
                    bool abOnlyCheckEndOfSubject)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eLuxDialogBranchEvent|eLuxDialogBranchEvent]]|}}
{{CodeDocDetailParam|afVar|float|}}
{{CodeDocDetailParam|asVar|[[../tString|tString]]|}}
{{CodeDocDetailParam|asNewBranch|[[../tString|tString]]|}}
{{CodeDocDetailParam|abOnlyCheckEndOfSubject|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddBranchPause}}
<syntaxhighlight lang="c++">void AddBranchPause(float afTime,
                    const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddBranchSubject}}
<syntaxhighlight lang="c++">void AddBranchSubject(const tString &in asSubject,
                      const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddResponseCondition}}
<syntaxhighlight lang="c++">void AddResponseCondition(eLuxDialogOptionCondition aCondition,
                          const tString &in asVarName,
                          int alValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aCondition|[[../eLuxDialogOptionCondition|eLuxDialogOptionCondition]]|}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alValue|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddResponseEvent}}
<syntaxhighlight lang="c++">void AddResponseEvent(eLuxDialogOptionEvent aEvent,
                      const tString &in asVarName,
                      int alValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aEvent|[[../eLuxDialogOptionEvent|eLuxDialogOptionEvent]]|}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alValue|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddResponseOption}}
<syntaxhighlight lang="c++">void AddResponseOption(const tString &in asEntry,
                       const tString &in asBranch,
                       int alId,
                       const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntry|[[../tString|tString]]|}}
{{CodeDocDetailParam|asBranch|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Begin}}
<syntaxhighlight lang="c++">void Begin(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CharacterIsActive}}
<syntaxhighlight lang="c++">bool CharacterIsActive(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|End}}
<syntaxhighlight lang="c++">void End(const tString &in asStartBranch)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asStartBranch|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterScene}}
<syntaxhighlight lang="c++">tString GetCharacterScene(const tString &in asCharacterName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacterName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharactersInSubject}}
<syntaxhighlight lang="c++">void GetCharactersInSubject(const tString &in asSubject,
                            tString avOutCharacters)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutCharacters|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVar}}
<syntaxhighlight lang="c++">int GetVar(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncVar}}
<syntaxhighlight lang="c++">void IncVar(const tString &in asName,
            int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ReturnResponseSelectChoice}}
<syntaxhighlight lang="c++">void ReturnResponseSelectChoice(int alSelectedOption)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alSelectedOption|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCallbackFunc}}
<syntaxhighlight lang="c++">void SetCallbackFunc(const tString &in asFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetResponseTimeLimit}}
<syntaxhighlight lang="c++">void SetResponseTimeLimit(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVar}}
<syntaxhighlight lang="c++">void SetVar(const tString &in asName,
            int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAll}}
<syntaxhighlight lang="c++">void StopAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}