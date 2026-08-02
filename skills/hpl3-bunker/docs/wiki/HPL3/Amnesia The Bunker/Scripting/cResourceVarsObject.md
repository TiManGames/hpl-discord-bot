{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cResourceVarsObject has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddVarBool|AddVarBool]](const [[../tString|tString]] &in asName, bool abDefault)|}}
{{CodeDocSummaryItem|void|[[#AddVarColor|AddVarColor]](const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aDefault)|}}
{{CodeDocSummaryItem|void|[[#AddVarFloat|AddVarFloat]](const [[../tString|tString]] &in asName, float afDefault <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#AddVarInt|AddVarInt]](const [[../tString|tString]] &in asName, int alDefault)|}}
{{CodeDocSummaryItem|void|[[#AddVarString|AddVarString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in alDefault)|}}
{{CodeDocSummaryItem|void|[[#AddVarVector2f|AddVarVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avDefault)|}}
{{CodeDocSummaryItem|void|[[#AddVarVector3f|AddVarVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avDefault)|}}
{{CodeDocSummaryItem|bool|[[#GetVarBool|GetVarBool]](const [[../tString|tString]] &in asName, bool abDefault)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetVarColor|GetVarColor]](const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aDefault)|}}
{{CodeDocSummaryItem|float|[[#GetVarFloat|GetVarFloat]](const [[../tString|tString]] &in asName, float afDefault)|}}
{{CodeDocSummaryItem|int|[[#GetVarInt|GetVarInt]](const [[../tString|tString]] &in asName, int alDefault)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetVarString|GetVarString]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asDefault)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetVarVector2f|GetVarVector2f]](const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVarVector3f|GetVarVector3f]](const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avDefault)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddVarBool}}
<syntaxhighlight lang="c++">void AddVarBool(const tString &in asName,
                bool abDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abDefault|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarColor}}
<syntaxhighlight lang="c++">void AddVarColor(const tString &in asName,
                 const cColor &in aDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarFloat}}
<syntaxhighlight lang="c++">void AddVarFloat(const tString &in asName,
                 float afDefault = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarInt}}
<syntaxhighlight lang="c++">void AddVarInt(const tString &in asName,
               int alDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarString}}
<syntaxhighlight lang="c++">void AddVarString(const tString &in asName,
                  const tString &in alDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarVector2f}}
<syntaxhighlight lang="c++">void AddVarVector2f(const tString &in asName,
                    const cVector2f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddVarVector3f}}
<syntaxhighlight lang="c++">void AddVarVector3f(const tString &in asName,
                    const cVector3f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarBool}}
<syntaxhighlight lang="c++">bool GetVarBool(const tString &in asName,
                bool abDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abDefault|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarColor}}
<syntaxhighlight lang="c++">cColor GetVarColor(const tString &in asName,
                   const cColor &in aDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarFloat}}
<syntaxhighlight lang="c++">float GetVarFloat(const tString &in asName,
                  float afDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarInt}}
<syntaxhighlight lang="c++">int GetVarInt(const tString &in asName,
              int alDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarString}}
<syntaxhighlight lang="c++">tString GetVarString(const tString &in asName,
                     const tString &in asDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asDefault|[[../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarVector2f}}
<syntaxhighlight lang="c++">cVector2f GetVarVector2f(const tString &in asName,
                         const cVector2f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVarVector3f}}
<syntaxhighlight lang="c++">cVector3f GetVarVector3f(const tString &in asName,
                         const cVector3f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}