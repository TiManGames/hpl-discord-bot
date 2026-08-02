{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxStateMachine has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddState || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddSubState || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTimer || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asId</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeState || <syntaxhighlight lang="c++" inline>int alState</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ChangeSubState || <syntaxhighlight lang="c++" inline>int alState</syntaxhighlight> ||
|-
| [[../cLuxEntityMessageData|<syntaxhighlight lang="c++" inline>cLuxEntityMessageData@</syntaxhighlight>]] || GetCurrentMessageData ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentState ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentSubState ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntity ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNextState ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNextSubState ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetPrevState ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetPrevSubState ||   ||
|-
| [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopTimer || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asId</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || TimerExists || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || TimerExists || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asId</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__