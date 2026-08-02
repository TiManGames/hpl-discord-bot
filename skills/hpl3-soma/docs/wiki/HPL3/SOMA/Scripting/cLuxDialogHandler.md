{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxDialogHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddBranch || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asNextBranch</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddBranchEvent || [[../eLuxDialogBranchEvent|<syntaxhighlight lang="c++" inline>eLuxDialogBranchEvent aType</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVar</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVar</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asNewBranch</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abOnlyCheckEndOfSubject</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddBranchPause || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddBranchSubject || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSubject</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddResponseCondition || [[../eLuxDialogOptionCondition|<syntaxhighlight lang="c++" inline>eLuxDialogOptionCondition aCondition</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddResponseEvent || [[../eLuxDialogOptionEvent|<syntaxhighlight lang="c++" inline>eLuxDialogOptionEvent aEvent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddResponseOption || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asEntry</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asBranch</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Begin || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CharacterIsActive || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || End || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asStartBranch</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetCharacterScene || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCharacterName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetCharactersInSubject || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSubject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetVar || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncVar || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ReturnResponseSelectChoice || <syntaxhighlight lang="c++" inline>int alSelectedOption</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCallbackFunc || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetResponseTimeLimit || <syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVar || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopAll ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__