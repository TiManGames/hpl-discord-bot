{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cSoundEntry has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeIn || <syntaxhighlight lang="c++" inline>float afVolumeMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeOut || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeSpeedMulTo || <syntaxhighlight lang="c++" inline>float afDestMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeVolumeMulTo || <syntaxhighlight lang="c++" inline>float afDestMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAudibility ||   ||
|-
| [[../eSoundEntryDataType|<syntaxhighlight lang="c++" inline>eSoundEntryDataType</syntaxhighlight>]] || GetDataType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElapsedTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetId ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMinDistance ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParamMax || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParamMin || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetParamName || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetParamNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParamValue || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPaused ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPostionIsHeadRelative ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetReverbActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetReverbAmount ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSpeakerSpread ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSpeedMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetStopDisabled ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTotalTime ||   ||
|-
| [[../eSoundEntryType|<syntaxhighlight lang="c++" inline>eSoundEntryType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVolumeMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Is3D ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFirstTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOneShot ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsPlaying ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsPriorityReleased ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVirtual ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBlockable || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBlockVolumeMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetElapsedTime || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPaused || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPostionIsHeadRelative || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeakerSpread || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeedMul || <syntaxhighlight lang="c++" inline>float afMul</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStopDisabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVelocity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVolume || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVolumeMul || <syntaxhighlight lang="c++" inline>float afMul</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || <syntaxhighlight lang="c++" inline>bool abPlayEnd</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__