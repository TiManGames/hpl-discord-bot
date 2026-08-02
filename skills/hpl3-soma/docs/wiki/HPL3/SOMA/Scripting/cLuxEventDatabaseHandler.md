{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxEventDatabaseHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| [[../cEventDatabase|<syntaxhighlight lang="c++" inline>cEventDatabase@</syntaxhighlight>]] || GetEventDataBase ||   ||
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || Query || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asOwner</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asTrigger</syntaxhighlight>]],<br />[[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@ apExtraFacts</syntaxhighlight>]] ||
|-
| [[../cEvent|<syntaxhighlight lang="c++" inline>cEvent@</syntaxhighlight>]] || QueryToAll || <syntaxhighlight lang="c++" inline>int alOwnerFlags</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asTrigger</syntaxhighlight>]],<br />[[../cFactStateContainer|<syntaxhighlight lang="c++" inline>cFactStateContainer@ apExtraFacts</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveGlobalFact || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveLocalFact || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalFact || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalFactFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalFactInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalFactString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asStr</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLocalFact || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLocalFactFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLocalFactInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLocalFactString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asStr</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || UseStandardTriggers ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__