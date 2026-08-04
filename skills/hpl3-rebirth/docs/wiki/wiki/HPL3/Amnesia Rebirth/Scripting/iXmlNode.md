{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iXmlNode has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#CreateChildElement|CreateChildElement]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#CreateChildText|CreateChildText]](const [[../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|[[../cXmlNodeListIterator|cXmlNodeListIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#GetFirstElement|GetFirstElement]]()|}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#GetFirstElement|GetFirstElement]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#GetFirstText|GetFirstText]]()|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#GetFirstText|GetFirstText]](const [[../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|[[../iXmlNode|iXmlNode]]|[[#GetParent|GetParent]]()|}}
{{CodeDocSummaryItem|[[../eXmlNodeType|eXmlNodeType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetValue|GetValue]]()|}}
{{CodeDocSummaryItem|void|[[#SetValue|SetValue]](const [[../tString|tString]] &in asValue)|}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#ToElement|ToElement]]()|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#ToText|ToText]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CreateChildElement}}
<syntaxhighlight lang="c++">cXmlElement@ CreateChildElement(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cXmlElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateChildText}}
<syntaxhighlight lang="c++">cXmlText@ CreateChildText(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cXmlText@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cXmlNodeListIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cXmlNodeListIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFirstElement}}
<syntaxhighlight lang="c++">cXmlElement@ GetFirstElement()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cXmlElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFirstElement}}
<syntaxhighlight lang="c++">cXmlElement@ GetFirstElement(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cXmlElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFirstText}}
<syntaxhighlight lang="c++">cXmlText@ GetFirstText()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cXmlText@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFirstText}}
<syntaxhighlight lang="c++">cXmlText@ GetFirstText(const tString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cXmlText@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParent}}
<syntaxhighlight lang="c++">iXmlNode@ GetParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iXmlNode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">eXmlNodeType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eXmlNodeType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetValue}}
<syntaxhighlight lang="c++">const tString& GetValue()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetValue}}
<syntaxhighlight lang="c++">void SetValue(const tString &in asValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asValue|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ToElement}}
<syntaxhighlight lang="c++">cXmlElement@ ToElement()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cXmlElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ToText}}
<syntaxhighlight lang="c++">cXmlText@ ToText()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cXmlText@|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}