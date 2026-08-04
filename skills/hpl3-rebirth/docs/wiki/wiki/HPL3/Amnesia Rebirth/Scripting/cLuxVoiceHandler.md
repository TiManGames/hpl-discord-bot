{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxVoiceHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddCharacterSpeakingCallback|AddCharacterSpeakingCallback]](const [[../tString|tString]] &in asCharacter, const [[../tString|tString]] &in asCallback)|}}
{{CodeDocSummaryItem|void|[[#AddClosedCaption|AddClosedCaption]](const [[../tWString|tWString]] &in asText, float afTime)|}}
{{CodeDocSummaryItem|void|[[#AdvanceFromCurrentSound|AdvanceFromCurrentSound]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|bool|[[#AnySceneIsActive|AnySceneIsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#CharacterIsSpeaking|CharacterIsSpeaking]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#DoesSubjectHaveUnplayedLines|DoesSubjectHaveUnplayedLines]](const [[../tString|tString]] &in asSubject)|}}
{{CodeDocSummaryItem|void|[[#FadeSceneVolumeTo|FadeSceneVolumeTo]](const [[../tString|tString]] &in asScene, float afVolume, float afTime)|}}
{{CodeDocSummaryItem|int|[[#GetCurrentSubjectLineIndex|GetCurrentSubjectLineIndex]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#GetSpectrumFromScene|GetSpectrumFromScene]](const [[../tString|tString]] &in asScene, [[../array|array]]<float> &out aDestArray, int alNumSamples <nowiki>=</nowiki> 64)|}}
{{CodeDocSummaryItem|void|[[#GetSpectrumFromSpeakingCharacter|GetSpectrumFromSpeakingCharacter]](const [[../tString|tString]] &in asCharacter, [[../array|array]]<float> &out aDestArray, int alNumSamples <nowiki>=</nowiki> 64)|}}
{{CodeDocSummaryItem|int|[[#GetSubjectLineNumber|GetSubjectLineNumber]](const [[../tString|tString]] &in asSubject)|}}
{{CodeDocSummaryItem|bool|[[#GetSubjectLines|GetSubjectLines]](const [[../tString|tString]] &in asSubject, [[../array|array]]<[[../tWString|tWString]]> avOutLines)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetSubjectSceneName|GetSubjectSceneName]](const [[../tString|tString]] &in asSubject)|}}
{{CodeDocSummaryItem|float|[[#GetTimeLeftOnLastLineOfPlayingSubject|GetTimeLeftOnLastLineOfPlayingSubject]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetUnderwaterEffectsActive|GetUnderwaterEffectsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#LoadFromFile|LoadFromFile]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|bool|[[#Play|Play]](const [[../tString|tString]] &in asSubject, int alSpecificLine, const [[../tString|tString]] &in asCallback, int alPrio, bool abPlayWhilePaused)|}}
{{CodeDocSummaryItem|void|[[#RemoveCharacterSpeakingCallback|RemoveCharacterSpeakingCallback]](const [[../tString|tString]] &in asCharacter)|}}
{{CodeDocSummaryItem|bool|[[#SceneInvolvingCharacterIsActive|SceneInvolvingCharacterIsActive]](const [[../tString|tString]] &in asCharacter)|}}
{{CodeDocSummaryItem|bool|[[#SceneIsActive|SceneIsActive]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#SetFocusScene|SetFocusScene]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#SetForceHideSubtitles|SetForceHideSubtitles]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPaused|SetPaused]](const [[../tString|tString]] &in asScene, bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPausedAll|SetPausedAll]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUnderwaterEffectsActive|SetUnderwaterEffectsActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SkipCurrentLine|SkipCurrentLine]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#SkipCurrentSound|SkipCurrentSound]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](const [[../tString|tString]] &in asScene)|}}
{{CodeDocSummaryItem|void|[[#StopAll|StopAll]]()|}}
{{CodeDocSummaryItem|void|[[#StopScenesWithCharacter|StopScenesWithCharacter]](const [[../tString|tString]] &in asCharacter)|}}
{{CodeDocSummaryItem|bool|[[#SubjectExists|SubjectExists]](const [[../tString|tString]] &in asSubject)|}}
{{CodeDocSummaryItem|bool|[[#SubjectIsPlaying|SubjectIsPlaying]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddCharacterSpeakingCallback}}
<syntaxhighlight lang="c++">void AddCharacterSpeakingCallback(const tString &in asCharacter,
                                  const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddClosedCaption}}
<syntaxhighlight lang="c++">void AddClosedCaption(const tWString &in asText,
                      float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AdvanceFromCurrentSound}}
<syntaxhighlight lang="c++">void AdvanceFromCurrentSound(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AnySceneIsActive}}
<syntaxhighlight lang="c++">bool AnySceneIsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CharacterIsSpeaking}}
<syntaxhighlight lang="c++">bool CharacterIsSpeaking(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoesSubjectHaveUnplayedLines}}
<syntaxhighlight lang="c++">bool DoesSubjectHaveUnplayedLines(const tString &in asSubject)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeSceneVolumeTo}}
<syntaxhighlight lang="c++">void FadeSceneVolumeTo(const tString &in asScene,
                       float afVolume,
                       float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentSubjectLineIndex}}
<syntaxhighlight lang="c++">int GetCurrentSubjectLineIndex(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpectrumFromScene}}
<syntaxhighlight lang="c++">void GetSpectrumFromScene(const tString &in asScene,
                          float &out aDestArray,
                          int alNumSamples = 64)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDestArray|float|}}
{{CodeDocDetailParam|alNumSamples|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpectrumFromSpeakingCharacter}}
<syntaxhighlight lang="c++">void GetSpectrumFromSpeakingCharacter(const tString &in asCharacter,
                                      float &out aDestArray,
                                      int alNumSamples = 64)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDestArray|float|}}
{{CodeDocDetailParam|alNumSamples|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubjectLineNumber}}
<syntaxhighlight lang="c++">int GetSubjectLineNumber(const tString &in asSubject)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubjectLines}}
<syntaxhighlight lang="c++">bool GetSubjectLines(const tString &in asSubject,
                     tWString avOutLines)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutLines|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubjectSceneName}}
<syntaxhighlight lang="c++">const tString& GetSubjectSceneName(const tString &in asSubject)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeLeftOnLastLineOfPlayingSubject}}
<syntaxhighlight lang="c++">float GetTimeLeftOnLastLineOfPlayingSubject(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUnderwaterEffectsActive}}
<syntaxhighlight lang="c++">bool GetUnderwaterEffectsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromFile}}
<syntaxhighlight lang="c++">bool LoadFromFile(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Play}}
<syntaxhighlight lang="c++">bool Play(const tString &in asSubject,
          int alSpecificLine,
          const tString &in asCallback,
          int alPrio,
          bool abPlayWhilePaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|alSpecificLine|int|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|abPlayWhilePaused|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveCharacterSpeakingCallback}}
<syntaxhighlight lang="c++">void RemoveCharacterSpeakingCallback(const tString &in asCharacter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SceneInvolvingCharacterIsActive}}
<syntaxhighlight lang="c++">bool SceneInvolvingCharacterIsActive(const tString &in asCharacter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SceneIsActive}}
<syntaxhighlight lang="c++">bool SceneIsActive(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFocusScene}}
<syntaxhighlight lang="c++">void SetFocusScene(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetForceHideSubtitles}}
<syntaxhighlight lang="c++">void SetForceHideSubtitles(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPaused}}
<syntaxhighlight lang="c++">void SetPaused(const tString &in asScene,
               bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPausedAll}}
<syntaxhighlight lang="c++">void SetPausedAll(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUnderwaterEffectsActive}}
<syntaxhighlight lang="c++">void SetUnderwaterEffectsActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SkipCurrentLine}}
<syntaxhighlight lang="c++">void SkipCurrentLine(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SkipCurrentSound}}
<syntaxhighlight lang="c++">void SkipCurrentSound(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(const tString &in asScene)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asScene|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAll}}
<syntaxhighlight lang="c++">void StopAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopScenesWithCharacter}}
<syntaxhighlight lang="c++">void StopScenesWithCharacter(const tString &in asCharacter)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SubjectExists}}
<syntaxhighlight lang="c++">bool SubjectExists(const tString &in asSubject)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SubjectIsPlaying}}
<syntaxhighlight lang="c++">bool SubjectIsPlaying(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}