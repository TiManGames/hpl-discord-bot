{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cXmlElement has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| [[../cXmlElement|<syntaxhighlight lang="c++" inline>cXmlElement@</syntaxhighlight>]] || CreateChildElement || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cXmlText|<syntaxhighlight lang="c++" inline>cXmlText@</syntaxhighlight>]] || CreateChildText || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asText</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAttributeBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefault</syntaxhighlight> ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetAttributeColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aDefault</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAttributeFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefault</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAttributeInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefault</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetAttributeString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asDefault</syntaxhighlight>]] ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetAttributeVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avDefault</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetAttributeVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDefault</syntaxhighlight>]] ||
|-
| [[../cXmlNodeListIterator|<syntaxhighlight lang="c++" inline>cXmlNodeListIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| [[../cXmlElement|<syntaxhighlight lang="c++" inline>cXmlElement@</syntaxhighlight>]] || GetFirstElement ||   ||
|-
| [[../cXmlElement|<syntaxhighlight lang="c++" inline>cXmlElement@</syntaxhighlight>]] || GetFirstElement || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cXmlText|<syntaxhighlight lang="c++" inline>cXmlText@</syntaxhighlight>]] || GetFirstText ||   ||
|-
| [[../cXmlText|<syntaxhighlight lang="c++" inline>cXmlText@</syntaxhighlight>]] || GetFirstText || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asText</syntaxhighlight>]] ||
|-
| [[../iXmlNode|<syntaxhighlight lang="c++" inline>iXmlNode@</syntaxhighlight>]] || GetParent ||   ||
|-
| [[../eXmlNodeType|<syntaxhighlight lang="c++" inline>eXmlNodeType</syntaxhighlight>]] || GetType ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetValue ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeBool || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeString || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeVector2f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttributeVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetValue || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asValue</syntaxhighlight>]] ||
|-
| [[../cXmlElement|<syntaxhighlight lang="c++" inline>cXmlElement@</syntaxhighlight>]] || ToElement ||   ||
|-
| [[../cXmlText|<syntaxhighlight lang="c++" inline>cXmlText@</syntaxhighlight>]] || ToText ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__