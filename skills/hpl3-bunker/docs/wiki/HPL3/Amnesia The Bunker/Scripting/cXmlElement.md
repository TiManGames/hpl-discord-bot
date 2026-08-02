{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cXmlElement has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#CreateChildElement|CreateChildElement]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#CreateChildText|CreateChildText]](const [[../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|bool|[[#GetAttributeBool|GetAttributeBool]](const [[../tString|tString]] &in asName, bool abDefault)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetAttributeColor|GetAttributeColor]](const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aDefault)|}}
{{CodeDocSummaryItem|float|[[#GetAttributeFloat|GetAttributeFloat]](const [[../tString|tString]] &in asName, float afDefault)|}}
{{CodeDocSummaryItem|int|[[#GetAttributeInt|GetAttributeInt]](const [[../tString|tString]] &in asName, int alDefault)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetAttributeString|GetAttributeString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asDefault)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetAttributeVector2f|GetAttributeVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAttributeVector3f|GetAttributeVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cXmlNodeListIterator|cXmlNodeListIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#GetFirstElement|GetFirstElement]]()|}}
{{CodeDocSummaryItem|[[../cXmlElement|cXmlElement]]|[[#GetFirstElement|GetFirstElement]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#GetFirstText|GetFirstText]]()|}}
{{CodeDocSummaryItem|[[../cXmlText|cXmlText]]|[[#GetFirstText|GetFirstText]](const [[../tString|tString]] &in asText)|}}
{{CodeDocSummaryItem|[[../iXmlNode|iXmlNode]]|[[#GetParent|GetParent]]()|}}
{{CodeDocSummaryItem|[[../eXmlNodeType|eXmlNodeType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetValue|GetValue]]()|}}
{{CodeDocSummaryItem|void|[[#SetAttributeBool|SetAttributeBool]](const [[../tString|tString]] &in asName, bool abVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeColor|SetAttributeColor]](const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeFloat|SetAttributeFloat]](const [[../tString|tString]] &in asName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeInt|SetAttributeInt]](const [[../tString|tString]] &in asName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeString|SetAttributeString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeVector2f|SetAttributeVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetAttributeVector3f|SetAttributeVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avVal)|}}
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

{{CodeDocDetailTop|GetAttributeBool}}
<syntaxhighlight lang="c++">bool GetAttributeBool(const tString &in asName,
                      bool abDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abDefault|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeColor}}
<syntaxhighlight lang="c++">cColor GetAttributeColor(const tString &in asName,
                         const cColor &in aDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeFloat}}
<syntaxhighlight lang="c++">float GetAttributeFloat(const tString &in asName,
                        float afDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeInt}}
<syntaxhighlight lang="c++">int GetAttributeInt(const tString &in asName,
                    int alDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeString}}
<syntaxhighlight lang="c++">tString GetAttributeString(const tString &in asName,
                           const tString &in asDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asDefault|[[../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeVector2f}}
<syntaxhighlight lang="c++">cVector2f GetAttributeVector2f(const tString &in asName,
                               const cVector2f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAttributeVector3f}}
<syntaxhighlight lang="c++">cVector3f GetAttributeVector3f(const tString &in asName,
                               const cVector3f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
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

{{CodeDocDetailTop|SetAttributeBool}}
<syntaxhighlight lang="c++">void SetAttributeBool(const tString &in asName,
                      bool abVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abVal|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeColor}}
<syntaxhighlight lang="c++">void SetAttributeColor(const tString &in asName,
                       const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeFloat}}
<syntaxhighlight lang="c++">void SetAttributeFloat(const tString &in asName,
                       float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeInt}}
<syntaxhighlight lang="c++">void SetAttributeInt(const tString &in asName,
                     int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeString}}
<syntaxhighlight lang="c++">void SetAttributeString(const tString &in asName,
                        const tString &in asVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asVal|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeVector2f}}
<syntaxhighlight lang="c++">void SetAttributeVector2f(const tString &in asName,
                          const cVector2f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAttributeVector3f}}
<syntaxhighlight lang="c++">void SetAttributeVector3f(const tString &in asName,
                          const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
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