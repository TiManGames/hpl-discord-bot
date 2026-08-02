{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

{| class="wikitable"
! Field Name !! Type !! Description
|-
| mlId || <syntaxhighlight lang="c++" inline>int</syntaxhighlight> ||
|}

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_ClearAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_FadeTo || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afGoal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abReverseAtEnd = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_FadeTo || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afGoal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abReverseAtEnd = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Fader_GetValue || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Fader_GetValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_Set || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_Set || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipIfExists = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_SetPaused || <syntaxhighlight lang="c++" inline>uint alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPaused</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Fader_SetPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abPaused</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Add || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfExist = true</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abRepeat = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Add || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfExist = true</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abRepeat = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_ClearAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_Exists || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_Exists || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetTimeLeft || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetTimeLeft || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetValue || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Timer_GetValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin = 0</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax = 1</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aEasing = eEasing_Linear</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAbsValue = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Remove || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_Remove || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_SetPaused || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Timer_SetPaused || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_TimeHasPassed || <syntaxhighlight lang="c++" inline>uint64 alID</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Timer_TimeHasPassed || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asID</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__