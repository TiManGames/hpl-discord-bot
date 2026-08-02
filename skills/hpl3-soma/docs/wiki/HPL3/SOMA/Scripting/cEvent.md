{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cEvent has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddActionFactSet || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddActionFloatOp || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight>,<br />[[../eEventOpType|<syntaxhighlight lang="c++" inline>eEventOpType aOpType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddActionIntOp || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alValue</syntaxhighlight>,<br />[[../eEventOpType|<syntaxhighlight lang="c++" inline>eEventOpType aOpType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddActionStringSet || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFact</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asValue</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteria || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteriaFloatCompare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight>,<br />[[../eEventCompareType|<syntaxhighlight lang="c++" inline>eEventCompareType aCompareType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteriaFloatCompare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight>,<br />[[../eEventCompareType|<syntaxhighlight lang="c++" inline>eEventCompareType aCompareType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteriaIntCompare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alValue</syntaxhighlight>,<br />[[../eEventCompareType|<syntaxhighlight lang="c++" inline>eEventCompareType aCompareType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteriaIntCompare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alMax</syntaxhighlight>,<br />[[../eEventCompareType|<syntaxhighlight lang="c++" inline>eEventCompareType aCompareType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddCriteriaStringCompare || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFactName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asValue</syntaxhighlight>]],<br />[[../eEventCompareType|<syntaxhighlight lang="c++" inline>eEventCompareType aCompareType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetActionNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCriterionNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetId ||  ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetOutput ||  ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetOutputId || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetOutput || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asOutput</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetOutputId || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__