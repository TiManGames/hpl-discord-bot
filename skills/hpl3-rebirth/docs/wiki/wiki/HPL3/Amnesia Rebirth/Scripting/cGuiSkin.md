{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cGuiSkin has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAttribute|GetAttribute]]([[../eGuiSkinAttribute|eGuiSkinAttribute]] aType)|}}
{{CodeDocSummaryItem|[[../cGuiSkinFont|cGuiSkinFont]]|[[#GetFont|GetFont]]([[../eGuiSkinFont|eGuiSkinFont]] aType)|}}
{{CodeDocSummaryItem|[[../cGuiGfxElement|cGuiGfxElement]]|[[#GetGfx|GetGfx]]([[../eGuiSkinGfx|eGuiSkinGfx]] aType)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|bool|[[#LoadFromFile|LoadFromFile]](const [[../tWString|tWString]] &in asFile)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetAttribute}}
<syntaxhighlight lang="c++">const cVector3f& GetAttribute(eGuiSkinAttribute aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eGuiSkinAttribute|eGuiSkinAttribute]]|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFont}}
<syntaxhighlight lang="c++">cGuiSkinFont@ GetFont(eGuiSkinFont aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eGuiSkinFont|eGuiSkinFont]]|}}
{{CodeDocDetailReturn|cGuiSkinFont@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGfx}}
<syntaxhighlight lang="c++">cGuiGfxElement@ GetGfx(eGuiSkinGfx aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eGuiSkinGfx|eGuiSkinGfx]]|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromFile}}
<syntaxhighlight lang="c++">bool LoadFromFile(const tWString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}