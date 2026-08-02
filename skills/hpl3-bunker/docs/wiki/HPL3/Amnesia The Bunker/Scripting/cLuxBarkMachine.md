{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxBarkMachine has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddState|AddState]](int alId)|}}
{{CodeDocSummaryItem|void|[[#ChangeState|ChangeState]](int alId)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|void|[[#PlayVoice|PlayVoice]](const [[../tString|tString]] &in asSubject, int alPrio, float afMinDistance <nowiki>=</nowiki> -1, float afMaxDistance <nowiki>=</nowiki> -1, float afMaxPlayerListeningRange <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetState_SoundBark|SetState_SoundBark]](const [[../tString|tString]] &in asSound, float afMinBetweenTime, float afMaxBetweenTime, bool abWaitForSoundToBeDone)|}}
{{CodeDocSummaryItem|void|[[#SetState_VoiceBark|SetState_VoiceBark]](const [[../tString|tString]] &in asSubject, float afMinBetweenTime, float afMaxBetweenTime, bool abWaitForSoundToBeDone, int alPrio <nowiki>=</nowiki> 0, float afMinDistance <nowiki>=</nowiki> -1, float afMaxDistance <nowiki>=</nowiki> -1, float afMaxPlayerListeningRange <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#SetupVoice|SetupVoice]](const [[../tString|tString]] &in asCharacter, bool abUse3D, float afDefaultMinDistance, float afDefaultMaxDistance, float afDefaultMaxPlayerListeningRange)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddState}}
<syntaxhighlight lang="c++">void AddState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeState}}
<syntaxhighlight lang="c++">void ChangeState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
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

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayVoice}}
<syntaxhighlight lang="c++">void PlayVoice(const tString &in asSubject,
               int alPrio,
               float afMinDistance = -1,
               float afMaxDistance = -1,
               float afMaxPlayerListeningRange = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afMaxPlayerListeningRange|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetState_SoundBark}}
<syntaxhighlight lang="c++">void SetState_SoundBark(const tString &in asSound,
                        float afMinBetweenTime,
                        float afMaxBetweenTime,
                        bool abWaitForSoundToBeDone)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSound|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinBetweenTime|float|}}
{{CodeDocDetailParam|afMaxBetweenTime|float|}}
{{CodeDocDetailParam|abWaitForSoundToBeDone|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetState_VoiceBark}}
<syntaxhighlight lang="c++">void SetState_VoiceBark(const tString &in asSubject,
                        float afMinBetweenTime,
                        float afMaxBetweenTime,
                        bool abWaitForSoundToBeDone,
                        int alPrio = 0,
                        float afMinDistance = -1,
                        float afMaxDistance = -1,
                        float afMaxPlayerListeningRange = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSubject|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinBetweenTime|float|}}
{{CodeDocDetailParam|afMaxBetweenTime|float|}}
{{CodeDocDetailParam|abWaitForSoundToBeDone|bool|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afMaxPlayerListeningRange|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupVoice}}
<syntaxhighlight lang="c++">void SetupVoice(const tString &in asCharacter,
                bool abUse3D,
                float afDefaultMinDistance,
                float afDefaultMaxDistance,
                float afDefaultMaxPlayerListeningRange)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCharacter|[[../tString|tString]]|}}
{{CodeDocDetailParam|abUse3D|bool|}}
{{CodeDocDetailParam|afDefaultMinDistance|float|}}
{{CodeDocDetailParam|afDefaultMaxDistance|float|}}
{{CodeDocDetailParam|afDefaultMaxPlayerListeningRange|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}