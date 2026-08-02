{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cConfigFile has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#EraseAll|EraseAll]]()|}}
{{CodeDocSummaryItem|void|[[#EraseSetting|EraseSetting]](const [[../tString|tString]] &in asLevel)|}}
{{CodeDocSummaryItem|void|[[#EraseValue|EraseValue]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetBool|GetBool]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, bool abDefault)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColor|GetColor]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aDefault)|}}
{{CodeDocSummaryItem|[[../tWString|tWString]]|[[#GetFileLocation|GetFileLocation]]()|}}
{{CodeDocSummaryItem|float|[[#GetFloat|GetFloat]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, float afDefault)|}}
{{CodeDocSummaryItem|int|[[#GetInt|GetInt]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, int alDefault)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetString|GetString]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asDefault)|}}
{{CodeDocSummaryItem|[[../tWString|tWString]]|[[#GetStringW|GetStringW]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asDefault)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetVector2f|GetVector2f]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetVector2l|GetVector2l]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector2l|cVector2l]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVector3f|GetVector3f]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avDefault)|}}
{{CodeDocSummaryItem|[[../cVector3l|cVector3l]]|[[#GetVector3l|GetVector3l]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector3l|cVector3l]] &in avDefault)|}}
{{CodeDocSummaryItem|bool|[[#Load|Load]]()|}}
{{CodeDocSummaryItem|bool|[[#Save|Save]]()|}}
{{CodeDocSummaryItem|void|[[#SetBool|SetBool]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, bool abVal)|}}
{{CodeDocSummaryItem|void|[[#SetColor|SetColor]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#SetFileLocation|SetFileLocation]](const [[../tWString|tWString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#SetFloat|SetFloat]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetInt|SetInt]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetString|SetString]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asVal)|}}
{{CodeDocSummaryItem|void|[[#SetVector2f|SetVector2f]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector2f|cVector2f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetVector2l|SetVector2l]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector2l|cVector2l]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetVector3f|SetVector3f]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetVector3l|SetVector3l]](const [[../tString|tString]] &in asLevel, const [[../tString|tString]] &in asName, const [[../cVector3l|cVector3l]] &in avVal)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|EraseAll}}
<syntaxhighlight lang="c++">void EraseAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EraseSetting}}
<syntaxhighlight lang="c++">void EraseSetting(const tString &in asLevel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EraseValue}}
<syntaxhighlight lang="c++">void EraseValue(const tString &in asLevel,
                const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBool}}
<syntaxhighlight lang="c++">bool GetBool(const tString &in asLevel,
             const tString &in asName,
             bool abDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abDefault|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColor}}
<syntaxhighlight lang="c++">cColor GetColor(const tString &in asLevel,
                const tString &in asName,
                const cColor &in aDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFileLocation}}
<syntaxhighlight lang="c++">const tWString& GetFileLocation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFloat}}
<syntaxhighlight lang="c++">float GetFloat(const tString &in asLevel,
               const tString &in asName,
               float afDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetInt}}
<syntaxhighlight lang="c++">int GetInt(const tString &in asLevel,
           const tString &in asName,
           int alDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetString}}
<syntaxhighlight lang="c++">tString GetString(const tString &in asLevel,
                  const tString &in asName,
                  const tString &in asDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asDefault|[[../tString|tString]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStringW}}
<syntaxhighlight lang="c++">tWString GetStringW(const tString &in asLevel,
                    const tString &in asName,
                    const tWString &in asDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asDefault|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVector2f}}
<syntaxhighlight lang="c++">cVector2f GetVector2f(const tString &in asLevel,
                      const tString &in asName,
                      const cVector2f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVector2l}}
<syntaxhighlight lang="c++">cVector2l GetVector2l(const tString &in asLevel,
                      const tString &in asName,
                      const cVector2l &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|cVector2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVector3f}}
<syntaxhighlight lang="c++">cVector3f GetVector3f(const tString &in asLevel,
                      const tString &in asName,
                      const cVector3f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVector3l}}
<syntaxhighlight lang="c++">cVector3l GetVector3l(const tString &in asLevel,
                      const tString &in asName,
                      const cVector3l &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3l|cVector3l]]|}}
{{CodeDocDetailReturn|cVector3l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Load}}
<syntaxhighlight lang="c++">bool Load()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Save}}
<syntaxhighlight lang="c++">bool Save()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBool}}
<syntaxhighlight lang="c++">void SetBool(const tString &in asLevel,
             const tString &in asName,
             bool abVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abVal|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColor}}
<syntaxhighlight lang="c++">void SetColor(const tString &in asLevel,
              const tString &in asName,
              const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFileLocation}}
<syntaxhighlight lang="c++">void SetFileLocation(const tWString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFloat}}
<syntaxhighlight lang="c++">void SetFloat(const tString &in asLevel,
              const tString &in asName,
              float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetInt}}
<syntaxhighlight lang="c++">void SetInt(const tString &in asLevel,
            const tString &in asName,
            int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetString}}
<syntaxhighlight lang="c++">void SetString(const tString &in asLevel,
               const tString &in asName,
               const tString &in asVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asVal|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVector2f}}
<syntaxhighlight lang="c++">void SetVector2f(const tString &in asLevel,
                 const tString &in asName,
                 const cVector2f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVector2l}}
<syntaxhighlight lang="c++">void SetVector2l(const tString &in asLevel,
                 const tString &in asName,
                 const cVector2l &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVector3f}}
<syntaxhighlight lang="c++">void SetVector3f(const tString &in asLevel,
                 const tString &in asName,
                 const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVector3l}}
<syntaxhighlight lang="c++">void SetVector3l(const tString &in asLevel,
                 const tString &in asName,
                 const cVector3l &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLevel|[[../tString|tString]]|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector3l|cVector3l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}