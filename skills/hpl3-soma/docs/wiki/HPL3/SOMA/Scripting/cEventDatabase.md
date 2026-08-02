{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cEventDatabase has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || AddEvent || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asOwner</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asTrigger</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asScene</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Clear ||   ||
|-
| [[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@</syntaxhighlight>]] || CreateFactStateContainer ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyFactStateContainer || [[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@ apContainer</syntaxhighlight>]] ||
|-
| [[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@</syntaxhighlight>]] || GetDefaultMemory ||   ||
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || GetEvent || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetEventNum ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cEventOwner|<syntaxhighlight lang="c++" inline>cEventOwner@</syntaxhighlight>]] || GetOwner || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfNotExist</syntaxhighlight> ||
|-
| [[../cEventScene|<syntaxhighlight lang="c++" inline>cEventScene@</syntaxhighlight>]] || GetScene || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfNotExist</syntaxhighlight> ||
|-
| [[../cEventTrigger|<syntaxhighlight lang="c++" inline>cEventTrigger@</syntaxhighlight>]] || GetTrigger || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCreateIfNotExist</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PerformEventActions || [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@ apEvent</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || QueryAddFactStates || [[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@ apFactStates</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || QueryBegin || [[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@ apCustomMemory</syntaxhighlight>]] ||
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || QueryExecute || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asOwner</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asTrigger</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asScene</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abPerformEventActions</syntaxhighlight> ||
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || QueryExecuteMultiOwner || <syntaxhighlight lang="c++" inline>int alOwnerFlags</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asTrigger</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asScene</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abPerformEventActions</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupData ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__