{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cSkeleton has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|float|[[#GetBoneBoundingRadius|GetBoneBoundingRadius]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cBone|cBone]]|[[#GetBoneByIndex|GetBoneByIndex]](int alIndex)|}}
{{CodeDocSummaryItem|[[../cBone|cBone]]|[[#GetBoneByName|GetBoneByName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cBone|cBone]]|[[#GetBoneBySid|GetBoneBySid]](const [[../tString|tString]] &in asSid)|}}
{{CodeDocSummaryItem|int|[[#GetBoneIndexByName|GetBoneIndexByName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBoneIndexBySid|GetBoneIndexBySid]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetBoneNum|GetBoneNum]]()|}}
{{CodeDocSummaryItem|[[../cBone|cBone]]|[[#GetRootBone|GetRootBone]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetBoneBoundingRadius}}
<syntaxhighlight lang="c++">float GetBoneBoundingRadius(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneByIndex}}
<syntaxhighlight lang="c++">cBone@ GetBoneByIndex(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cBone@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneByName}}
<syntaxhighlight lang="c++">cBone@ GetBoneByName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cBone@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneBySid}}
<syntaxhighlight lang="c++">cBone@ GetBoneBySid(const tString &in asSid)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSid|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cBone@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneIndexByName}}
<syntaxhighlight lang="c++">int GetBoneIndexByName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneIndexBySid}}
<syntaxhighlight lang="c++">int GetBoneIndexBySid(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoneNum}}
<syntaxhighlight lang="c++">int GetBoneNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRootBone}}
<syntaxhighlight lang="c++">cBone@ GetRootBone()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBone@|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}