{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cConfigFile has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || EraseAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || EraseSetting || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || EraseValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefault</syntaxhighlight> ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aDefault</syntaxhighlight>]] ||
|-
| [[../tWString|<syntaxhighlight lang="c++" inline>const tWString&</syntaxhighlight>]] || GetFileLocation ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefault</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefault</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asDefault</syntaxhighlight>]] ||
|-
| [[../tWString|<syntaxhighlight lang="c++" inline>tWString</syntaxhighlight>]] || GetStringW || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asDefault</syntaxhighlight>]] ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avDefault</syntaxhighlight>]] ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l</syntaxhighlight>]] || GetVector2l || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avDefault</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDefault</syntaxhighlight>]] ||
|-
| [[../cVector3l|<syntaxhighlight lang="c++" inline>cVector3l</syntaxhighlight>]] || GetVector3l || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3l|<syntaxhighlight lang="c++" inline>const cVector3l &in avDefault</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Load ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Save ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFileLocation || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVector2l || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVector3l || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asLevel</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3l|<syntaxhighlight lang="c++" inline>const cVector3l &in avVal</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__