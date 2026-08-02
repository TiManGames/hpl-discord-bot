{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iSoundEvent has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|float|[[#GetAudibility|GetAudibility]]()|}}
{{CodeDocSummaryItem|[[../iSoundEventData|iSoundEventData]]|[[#GetData|GetData]]()|}}
{{CodeDocSummaryItem|float|[[#GetElapsedTime|GetElapsedTime]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxDistance|GetMaxDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetMinDistance|GetMinDistance]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|float|[[#GetParam|GetParam]](int alIdx)|}}
{{CodeDocSummaryItem|float|[[#GetParam|GetParam]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetPaused|GetPaused]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPostionIsHeadRelative|GetPostionIsHeadRelative]]()|}}
{{CodeDocSummaryItem|bool|[[#GetReverbActive|GetReverbActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetReverbAmount|GetReverbAmount]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeakerSpread|GetSpeakerSpread]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeed|GetSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetTotalTime|GetTotalTime]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVelocity|GetVelocity]]()|}}
{{CodeDocSummaryItem|float|[[#GetVolume|GetVolume]]()|}}
{{CodeDocSummaryItem|bool|[[#Is3D|Is3D]]()|}}
{{CodeDocSummaryItem|bool|[[#IsLoading|IsLoading]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOneShot|IsOneShot]]()|}}
{{CodeDocSummaryItem|bool|[[#IsPlaying|IsPlaying]]()|}}
{{CodeDocSummaryItem|bool|[[#IsPriorityReleased|IsPriorityReleased]]()|}}
{{CodeDocSummaryItem|void|[[#SetMaxDistance|SetMaxDistance]](float fMax)|}}
{{CodeDocSummaryItem|void|[[#SetMinDistance|SetMinDistance]](float fMin)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](int alIdx, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](const [[../tString|tString]] &in asName, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetPaused|SetPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetPostionIsHeadRelative|SetPostionIsHeadRelative]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetReverbActive|SetReverbActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetReverbAmount|SetReverbAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeakerSpread|SetSpeakerSpread]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeed|SetSpeed]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetVelocity|SetVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetVolume|SetVolume]](float afVolume)|}}
{{CodeDocSummaryItem|void|[[#Start|Start]]()|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](bool abPlayEnd)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetAudibility}}
<syntaxhighlight lang="c++">float GetAudibility()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetData}}
<syntaxhighlight lang="c++">iSoundEventData@ GetData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iSoundEventData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetElapsedTime}}
<syntaxhighlight lang="c++">float GetElapsedTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
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
<syntaxhighlight lang="c++">float GetParam(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParam}}
<syntaxhighlight lang="c++">float GetParam(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPaused}}
<syntaxhighlight lang="c++">bool GetPaused()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPostionIsHeadRelative}}
<syntaxhighlight lang="c++">bool GetPostionIsHeadRelative()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReverbActive}}
<syntaxhighlight lang="c++">bool GetReverbActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReverbAmount}}
<syntaxhighlight lang="c++">float GetReverbAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpeakerSpread}}
<syntaxhighlight lang="c++">float GetSpeakerSpread()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpeed}}
<syntaxhighlight lang="c++">float GetSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTotalTime}}
<syntaxhighlight lang="c++">float GetTotalTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocity}}
<syntaxhighlight lang="c++">const cVector3f& GetVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVolume}}
<syntaxhighlight lang="c++">float GetVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Is3D}}
<syntaxhighlight lang="c++">bool Is3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsLoading}}
<syntaxhighlight lang="c++">bool IsLoading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOneShot}}
<syntaxhighlight lang="c++">bool IsOneShot()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsPlaying}}
<syntaxhighlight lang="c++">bool IsPlaying()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsPriorityReleased}}
<syntaxhighlight lang="c++">bool IsPriorityReleased()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxDistance}}
<syntaxhighlight lang="c++">void SetMaxDistance(float fMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|fMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMinDistance}}
<syntaxhighlight lang="c++">void SetMinDistance(float fMin)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|fMin|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParam}}
<syntaxhighlight lang="c++">void SetParam(int alIdx,
              float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParam}}
<syntaxhighlight lang="c++">void SetParam(const tString &in asName,
              float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPaused}}
<syntaxhighlight lang="c++">void SetPaused(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPostionIsHeadRelative}}
<syntaxhighlight lang="c++">void SetPostionIsHeadRelative(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetReverbActive}}
<syntaxhighlight lang="c++">void SetReverbActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetReverbAmount}}
<syntaxhighlight lang="c++">void SetReverbAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeakerSpread}}
<syntaxhighlight lang="c++">void SetSpeakerSpread(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeed}}
<syntaxhighlight lang="c++">void SetSpeed(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVelocity}}
<syntaxhighlight lang="c++">void SetVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVolume}}
<syntaxhighlight lang="c++">void SetVolume(float afVolume)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Start}}
<syntaxhighlight lang="c++">void Start()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(bool abPlayEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abPlayEnd|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}