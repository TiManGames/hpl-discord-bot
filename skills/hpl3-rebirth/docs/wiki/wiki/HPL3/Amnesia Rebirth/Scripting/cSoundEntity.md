{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cSoundEntity has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddChild|AddChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afSpeed, float afTargetVol)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeSpeedMul|FadeSpeedMul]](float afDest, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeVolumeMul|FadeVolumeMul]](float afDest, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#GetAverageSpectrum|GetAverageSpectrum]]([[../array|array]]<float> &out aDestArray, int alNumValues <nowiki>=</nowiki> 64)|}}
{{CodeDocSummaryItem|[[../cBoundingVolume|cBoundingVolume]]|[[#GetBoundingVolume|GetBoundingVolume]]()|}}
{{CodeDocSummaryItem|[[../cEntity3DIterator|cEntity3DIterator]]|[[#GetChildIterator|GetChildIterator]]()|}}
{{CodeDocSummaryItem|int|[[#GetCreationID|GetCreationID]]()|}}
{{CodeDocSummaryItem|float|[[#GetCustomMaxDistance|GetCustomMaxDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetCustomMinDistance|GetCustomMinDistance]]()|}}
{{CodeDocSummaryItem|[[../eSoundEntityDataType|eSoundEntityDataType]]|[[#GetDataType|GetDataType]]()|}}
{{CodeDocSummaryItem|float|[[#GetElapsedTime|GetElapsedTime]]()|}}
{{CodeDocSummaryItem|[[../iEntity3D|iEntity3D]]|[[#GetEntityParent|GetEntityParent]]()|}}
{{CodeDocSummaryItem|[[../eEntityType|eEntityType]]|[[#GetEntityType|GetEntityType]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetLocalMatrix|GetLocalMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxDistance|GetMaxDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetMinDistance|GetMinDistance]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|float|[[#GetParam|GetParam]](int alIdx)|}}
{{CodeDocSummaryItem|float|[[#GetParam|GetParam]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetRemoveWhenOver|GetRemoveWhenOver]]()|}}
{{CodeDocSummaryItem|bool|[[#GetReverbActive|GetReverbActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetReverbAmount|GetReverbAmount]]()|}}
{{CodeDocSummaryItem|bool|[[#GetScriptableIsSaved|GetScriptableIsSaved]]()|}}
{{CodeDocSummaryItem|[[../cSoundEntry|cSoundEntry]]|[[#GetSoundEntry|GetSoundEntry]](bool abCheckEntryValidity)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetSoundFile|GetSoundFile]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSoundFile3D|GetSoundFile3D]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSoundFileBlockable|GetSoundFileBlockable]]()|}}
{{CodeDocSummaryItem|float|[[#GetSoundFileBlockMul|GetSoundFileBlockMul]]()|}}
{{CodeDocSummaryItem|[[../eSoundEntryType|eSoundEntryType]]|[[#GetSoundFileEntryType|GetSoundFileEntryType]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSoundFileLoop|GetSoundFileLoop]]()|}}
{{CodeDocSummaryItem|int|[[#GetSoundFilePriority|GetSoundFilePriority]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSoundFileStream|GetSoundFileStream]]()|}}
{{CodeDocSummaryItem|int|[[#GetTransformUpdateCount|GetTransformUpdateCount]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUseCustomProperties|GetUseCustomProperties]]()|}}
{{CodeDocSummaryItem|float|[[#GetVolume|GetVolume]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetWorldMatrix|GetWorldMatrix]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWorldPosition|GetWorldPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#HasParent|HasParent]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsChild|IsChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#IsFadingOut|IsFadingOut]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOneShot|IsOneShot]]()|}}
{{CodeDocSummaryItem|bool|[[#IsStopped|IsStopped]]()|}}
{{CodeDocSummaryItem|void|[[#Play|Play]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetCustomMaxDistance|SetCustomMaxDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCustomMinDistance|SetCustomMinDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetElapsedTime|SetElapsedTime]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMatrix|SetMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxTransform)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](int alIdx, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetParam|SetParam]](const [[../tString|tString]] &in asName, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetParamHash|SetParamHash]](int alHash, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetReverbActive|SetReverbActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetReverbAmount|SetReverbAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetScriptableIsSaved|SetScriptableIsSaved]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFile3D|SetSoundFile3D]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFileBlockable|SetSoundFileBlockable]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFileBlockMul|SetSoundFileBlockMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFileEntryType|SetSoundFileEntryType]]([[../eSoundEntryType|eSoundEntryType]] aType)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFileLoop|SetSoundFileLoop]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFilePriority|SetSoundFilePriority]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetSoundFileStream|SetSoundFileStream]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeakerSpread|SetSpeakerSpread]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetupSoundFile|SetupSoundFile]](const [[../tString|tString]] &in asFile, bool abLoop)|}}
{{CodeDocSummaryItem|void|[[#SetUseCustomProperties|SetUseCustomProperties]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVolume|SetVolume]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWorldMatrix|SetWorldMatrix]](const [[../cMatrixf|cMatrixf]] &in a_mtxWorldTransform)|}}
{{CodeDocSummaryItem|void|[[#SetWorldPosition|SetWorldPosition]](const [[../cVector3f|cVector3f]] &in avWorldPos)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](bool abPlayEndSound)|}}
{{CodeDocSummaryItem|void|[[#UpdateLogic|UpdateLogic]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddChild}}
<syntaxhighlight lang="c++">void AddChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afSpeed,
            float afTargetVol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|afTargetVol|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOut}}
<syntaxhighlight lang="c++">void FadeOut(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeSpeedMul}}
<syntaxhighlight lang="c++">void FadeSpeedMul(float afDest,
                  float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDest|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeVolumeMul}}
<syntaxhighlight lang="c++">void FadeVolumeMul(float afDest,
                   float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDest|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAverageSpectrum}}
<syntaxhighlight lang="c++">void GetAverageSpectrum(float &out aDestArray,
                        int alNumValues = 64)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDestArray|float|}}
{{CodeDocDetailParam|alNumValues|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBoundingVolume}}
<syntaxhighlight lang="c++">cBoundingVolume@+ GetBoundingVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cBoundingVolume@+|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildIterator}}
<syntaxhighlight lang="c++">cEntity3DIterator@ GetChildIterator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cEntity3DIterator@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCreationID}}
<syntaxhighlight lang="c++">int GetCreationID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCustomMaxDistance}}
<syntaxhighlight lang="c++">float GetCustomMaxDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCustomMinDistance}}
<syntaxhighlight lang="c++">float GetCustomMinDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDataType}}
<syntaxhighlight lang="c++">eSoundEntityDataType GetDataType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eSoundEntityDataType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetElapsedTime}}
<syntaxhighlight lang="c++">float GetElapsedTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityParent}}
<syntaxhighlight lang="c++">iEntity3D@ GetEntityParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntityType}}
<syntaxhighlight lang="c++">eEntityType GetEntityType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eEntityType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetLocalMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalPosition}}
<syntaxhighlight lang="c++">cVector3f GetLocalPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
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

{{CodeDocDetailTop|GetRemoveWhenOver}}
<syntaxhighlight lang="c++">bool GetRemoveWhenOver()</syntaxhighlight>
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

{{CodeDocDetailTop|GetScriptableIsSaved}}
<syntaxhighlight lang="c++">bool GetScriptableIsSaved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundEntry}}
<syntaxhighlight lang="c++">cSoundEntry@ GetSoundEntry(bool abCheckEntryValidity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abCheckEntryValidity|bool|}}
{{CodeDocDetailReturn|cSoundEntry@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFile}}
<syntaxhighlight lang="c++">const tString& GetSoundFile()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFile3D}}
<syntaxhighlight lang="c++">bool GetSoundFile3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFileBlockable}}
<syntaxhighlight lang="c++">bool GetSoundFileBlockable()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFileBlockMul}}
<syntaxhighlight lang="c++">float GetSoundFileBlockMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFileEntryType}}
<syntaxhighlight lang="c++">eSoundEntryType GetSoundFileEntryType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eSoundEntryType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFileLoop}}
<syntaxhighlight lang="c++">bool GetSoundFileLoop()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFilePriority}}
<syntaxhighlight lang="c++">int GetSoundFilePriority()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSoundFileStream}}
<syntaxhighlight lang="c++">bool GetSoundFileStream()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTransformUpdateCount}}
<syntaxhighlight lang="c++">int GetTransformUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUseCustomProperties}}
<syntaxhighlight lang="c++">bool GetUseCustomProperties()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVolume}}
<syntaxhighlight lang="c++">float GetVolume()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldMatrix}}
<syntaxhighlight lang="c++">cMatrixf& GetWorldMatrix()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cMatrixf&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldPosition}}
<syntaxhighlight lang="c++">cVector3f GetWorldPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasParent}}
<syntaxhighlight lang="c++">bool HasParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsChild}}
<syntaxhighlight lang="c++">bool IsChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFadingOut}}
<syntaxhighlight lang="c++">bool IsFadingOut()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOneShot}}
<syntaxhighlight lang="c++">bool IsOneShot()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsStopped}}
<syntaxhighlight lang="c++">bool IsStopped()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Play}}
<syntaxhighlight lang="c++">void Play()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomMaxDistance}}
<syntaxhighlight lang="c++">void SetCustomMaxDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCustomMinDistance}}
<syntaxhighlight lang="c++">void SetCustomMinDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetElapsedTime}}
<syntaxhighlight lang="c++">void SetElapsedTime(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMatrix}}
<syntaxhighlight lang="c++">void SetMatrix(const cMatrixf &in a_mtxTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetName}}
<syntaxhighlight lang="c++">void SetName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
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

{{CodeDocDetailTop|SetParamHash}}
<syntaxhighlight lang="c++">void SetParamHash(int alHash,
                  float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alHash|int|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
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

{{CodeDocDetailTop|SetScriptableIsSaved}}
<syntaxhighlight lang="c++">void SetScriptableIsSaved(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFile3D}}
<syntaxhighlight lang="c++">void SetSoundFile3D(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFileBlockable}}
<syntaxhighlight lang="c++">void SetSoundFileBlockable(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFileBlockMul}}
<syntaxhighlight lang="c++">void SetSoundFileBlockMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFileEntryType}}
<syntaxhighlight lang="c++">void SetSoundFileEntryType(eSoundEntryType aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eSoundEntryType|eSoundEntryType]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFileLoop}}
<syntaxhighlight lang="c++">void SetSoundFileLoop(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFilePriority}}
<syntaxhighlight lang="c++">void SetSoundFilePriority(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSoundFileStream}}
<syntaxhighlight lang="c++">void SetSoundFileStream(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeakerSpread}}
<syntaxhighlight lang="c++">void SetSpeakerSpread(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupSoundFile}}
<syntaxhighlight lang="c++">void SetupSoundFile(const tString &in asFile,
                    bool abLoop)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUseCustomProperties}}
<syntaxhighlight lang="c++">void SetUseCustomProperties(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVolume}}
<syntaxhighlight lang="c++">void SetVolume(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldMatrix}}
<syntaxhighlight lang="c++">void SetWorldMatrix(const cMatrixf &in a_mtxWorldTransform)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_mtxWorldTransform|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWorldPosition}}
<syntaxhighlight lang="c++">void SetWorldPosition(const cVector3f &in avWorldPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avWorldPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(bool abPlayEndSound)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abPlayEndSound|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLogic}}
<syntaxhighlight lang="c++">void UpdateLogic(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}