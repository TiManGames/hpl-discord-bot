{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iSoundEvent has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAudibility ||   ||
|-
| [[../iSoundEventData|<syntaxhighlight lang="c++" inline>iSoundEventData@</syntaxhighlight>]] || GetData ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElapsedTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMinDistance ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParam || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
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
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTotalTime ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetVelocity ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVolume ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Is3D ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsLoading ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOneShot ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsPlaying ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsPriorityReleased ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxDistance || <syntaxhighlight lang="c++" inline>float fMax</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMinDistance || <syntaxhighlight lang="c++" inline>float fMin</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPaused || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPostionIsHeadRelative || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeakerSpread || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSpeed || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVelocity || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avVel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVolume || <syntaxhighlight lang="c++" inline>float afVolume</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Start ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || <syntaxhighlight lang="c++" inline>bool abPlayEnd</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__