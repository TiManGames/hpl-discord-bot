{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cSoundEntry has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afVolumeMul, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeSpeedMulTo|FadeSpeedMulTo]](float afDestMul, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeVolumeMulTo|FadeVolumeMulTo]](float afDestMul, float afSpeed)|}}
{{CodeDocSummaryItem|float|[[#GetAudibility|GetAudibility]]()|}}
{{CodeDocSummaryItem|[[../eSoundEntryDataType|eSoundEntryDataType]]|[[#GetDataType|GetDataType]]()|}}
{{CodeDocSummaryItem|float|[[#GetElapsedTime|GetElapsedTime]]()|}}
{{CodeDocSummaryItem|int|[[#GetId|GetId]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxDistance|GetMaxDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetMinDistance|GetMinDistance]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|float|[[#GetParamMax|GetParamMax]](int alIdx)|}}
{{CodeDocSummaryItem|float|[[#GetParamMin|GetParamMin]](int alIdx)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetParamName|GetParamName]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetParamNum|GetParamNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetParamValue|GetParamValue]](int alIdx)|}}
{{CodeDocSummaryItem|bool|[[#GetPaused|GetPaused]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPosition|GetPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPostionIsHeadRelative|GetPostionIsHeadRelative]]()|}}
{{CodeDocSummaryItem|bool|[[#GetReverbActive|GetReverbActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetReverbAmount|GetReverbAmount]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeakerSpread|GetSpeakerSpread]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeed|GetSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeedMul|GetSpeedMul]]()|}}
{{CodeDocSummaryItem|bool|[[#GetStopDisabled|GetStopDisabled]]()|}}
{{CodeDocSummaryItem|float|[[#GetTotalTime|GetTotalTime]]()|}}
{{CodeDocSummaryItem|[[../eSoundEntryType|eSoundEntryType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|float|[[#GetVolume|GetVolume]]()|}}
{{CodeDocSummaryItem|float|[[#GetVolumeMul|GetVolumeMul]]()|}}
{{CodeDocSummaryItem|bool|[[#Is3D|Is3D]]()|}}
{{CodeDocSummaryItem|bool|[[#IsFirstTime|IsFirstTime]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOneShot|IsOneShot]]()|}}
{{CodeDocSummaryItem|bool|[[#IsPlaying|IsPlaying]]()|}}
{{CodeDocSummaryItem|bool|[[#IsPriorityReleased|IsPriorityReleased]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVirtual|IsVirtual]]()|}}
{{CodeDocSummaryItem|void|[[#SetBlockable|SetBlockable]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBlockVolumeMul|SetBlockVolumeMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetElapsedTime|SetElapsedTime]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](const [[../tString|tString]] &in asName, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](int alIdx, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetPaused|SetPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPosition)|}}
{{CodeDocSummaryItem|void|[[#SetPostionIsHeadRelative|SetPostionIsHeadRelative]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetReverbActive|SetReverbActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetReverbAmount|SetReverbAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeakerSpread|SetSpeakerSpread]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeed|SetSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedMul|SetSpeedMul]](float afMul)|}}
{{CodeDocSummaryItem|void|[[#SetStopDisabled|SetStopDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVelocity|SetVelocity]](const [[../cVector3f|cVector3f]] &in avVelocity)|}}
{{CodeDocSummaryItem|void|[[#SetVolume|SetVolume]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVolumeMul|SetVolumeMul]](float afMul)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](bool abPlayEnd)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afVolumeMul,
            float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afVolumeMul|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOut}}
<syntaxhighlight lang="c++">void FadeOut(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeSpeedMulTo}}
<syntaxhighlight lang="c++">void FadeSpeedMulTo(float afDestMul,
                    float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestMul|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeVolumeMulTo}}
<syntaxhighlight lang="c++">void FadeVolumeMulTo(float afDestMul,
                     float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDestMul|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAudibility}}
<syntaxhighlight lang="c++">float GetAudibility()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDataType}}
<syntaxhighlight lang="c++">eSoundEntryDataType GetDataType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eSoundEntryDataType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetElapsedTime}}
<syntaxhighlight lang="c++">float GetElapsedTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetId}}
<syntaxhighlight lang="c++">int GetId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
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

{{CodeDocDetailTop|GetParamMax}}
<syntaxhighlight lang="c++">float GetParamMax(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamMin}}
<syntaxhighlight lang="c++">float GetParamMin(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamName}}
<syntaxhighlight lang="c++">const tString& GetParamName(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamNum}}
<syntaxhighlight lang="c++">int GetParamNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParamValue}}
<syntaxhighlight lang="c++">float GetParamValue(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
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

{{CodeDocDetailTop|GetSpeedMul}}
<syntaxhighlight lang="c++">float GetSpeedMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStopDisabled}}
<syntaxhighlight lang="c++">bool GetStopDisabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTotalTime}}
<syntaxhighlight lang="c++">float GetTotalTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">eSoundEntryType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eSoundEntryType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVolume}}
<syntaxhighlight lang="c++">float GetVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVolumeMul}}
<syntaxhighlight lang="c++">float GetVolumeMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Is3D}}
<syntaxhighlight lang="c++">bool Is3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFirstTime}}
<syntaxhighlight lang="c++">bool IsFirstTime()</syntaxhighlight>
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

{{CodeDocDetailTop|IsVirtual}}
<syntaxhighlight lang="c++">bool IsVirtual()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlockable}}
<syntaxhighlight lang="c++">void SetBlockable(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBlockVolumeMul}}
<syntaxhighlight lang="c++">void SetBlockVolumeMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetElapsedTime}}
<syntaxhighlight lang="c++">void SetElapsedTime(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
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

{{CodeDocDetailTop|SetParam}}
<syntaxhighlight lang="c++">void SetParam(int alIdx,
              float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
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
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
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
<syntaxhighlight lang="c++">void SetSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedMul}}
<syntaxhighlight lang="c++">void SetSpeedMul(float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStopDisabled}}
<syntaxhighlight lang="c++">void SetStopDisabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVelocity}}
<syntaxhighlight lang="c++">void SetVelocity(const cVector3f &in avVelocity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVelocity|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVolume}}
<syntaxhighlight lang="c++">void SetVolume(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVolumeMul}}
<syntaxhighlight lang="c++">void SetVolumeMul(float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMul|float|}}
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

{{HPL3SOMAScriptingCategories}}