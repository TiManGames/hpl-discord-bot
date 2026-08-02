{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxBarkMachine has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeState || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntity ||   ||
|-
| [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PlayVoice || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSubject</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alPrio</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinDistance = -1</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance = -1</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxPlayerListeningRange = -1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetState_SoundBark || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSound</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinBetweenTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxBetweenTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abWaitForSoundToBeDone</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetState_VoiceBark || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSubject</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinBetweenTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxBetweenTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abWaitForSoundToBeDone</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alPrio = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMinDistance = -1</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance = -1</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxPlayerListeningRange = -1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupVoice || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacter</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abUse3D</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDefaultMinDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDefaultMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDefaultMaxPlayerListeningRange</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__