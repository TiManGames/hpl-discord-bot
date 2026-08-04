{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iSoundEventData has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#DecUserCount|DecUserCount]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxDistance|GetMaxDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetMinDistance|GetMinDistance]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cSoundEventParamInfo|cSoundEventParamInfo]]|[[#GetParam|GetParam]](int alIdx)|}}
{{CodeDocSummaryItem|[[../cSoundEventParamInfo|cSoundEventParamInfo]]|[[#GetParamFromName|GetParamFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|int|[[#GetParamNum|GetParamNum]]()|}}
{{CodeDocSummaryItem|uint|[[#GetTimeStamp|GetTimeStamp]]()|}}
{{CodeDocSummaryItem|bool|[[#HasUsers|HasUsers]]()|}}
{{CodeDocSummaryItem|void|[[#IncUserCount|IncUserCount]]()|}}
{{CodeDocSummaryItem|bool|[[#Is3D|Is3D]]()|}}
{{CodeDocSummaryItem|bool|[[#IsHeadRelative|IsHeadRelative]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOneShot|IsOneShot]]()|}}
{{CodeDocSummaryItem|void|[[#SetDefaultOrientation|SetDefaultOrientation]](const [[../cVector3f|cVector3f]] &in avOrientation)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultPosition|SetDefaultPosition]](const [[../cVector3f|cVector3f]] &in avPostion)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultVolume|SetDefaultVolume]](float afVolume)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|DecUserCount}}
<syntaxhighlight lang="c++">void DecUserCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxDistance}}
<syntaxhighlight lang="c++">float GetMaxDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMinDistance}}
<syntaxhighlight lang="c++">float GetMinDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParam}}
<syntaxhighlight lang="c++">cSoundEventParamInfo@ GetParam(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cSoundEventParamInfo@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamFromName}}
<syntaxhighlight lang="c++">cSoundEventParamInfo@ GetParamFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cSoundEventParamInfo@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamNum}}
<syntaxhighlight lang="c++">int GetParamNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeStamp}}
<syntaxhighlight lang="c++">uint GetTimeStamp()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasUsers}}
<syntaxhighlight lang="c++">bool HasUsers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncUserCount}}
<syntaxhighlight lang="c++">void IncUserCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Is3D}}
<syntaxhighlight lang="c++">bool Is3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsHeadRelative}}
<syntaxhighlight lang="c++">bool IsHeadRelative()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOneShot}}
<syntaxhighlight lang="c++">bool IsOneShot()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultOrientation}}
<syntaxhighlight lang="c++">void SetDefaultOrientation(const cVector3f &in avOrientation)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avOrientation|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultPosition}}
<syntaxhighlight lang="c++">void SetDefaultPosition(const cVector3f &in avPostion)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPostion|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultVolume}}
<syntaxhighlight lang="c++">void SetDefaultVolume(float afVolume)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}