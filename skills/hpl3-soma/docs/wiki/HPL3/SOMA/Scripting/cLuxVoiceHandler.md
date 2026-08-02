{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxVoiceHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCharacterSpeakingCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacter</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AdvanceFromCurrentSound || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AnySceneIsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CharacterIsSpeaking || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeSceneVolumeTo || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVolume</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetSpectrumFromScene || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alNumSamples = 64</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetSpectrumFromSpeakingCharacter || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacter</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alNumSamples = 64</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubjectLineNumber || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asSubject</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetSubjectSceneName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asSubject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUnderwaterEffectsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Play || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asSubject</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alSpecificLine</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asCallback</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alPrio</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveCharacterSpeakingCallback || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacter</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SceneInvolvingCharacterIsActive || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacter</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SceneIsActive || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFocusScene || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPausedAll || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUnderwaterEffectsActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SkipCurrentLine || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SkipCurrentSound || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SubjectExists || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asSubject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SubjectIsPlaying || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__