{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cAnimationState has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddTimePosition|AddTimePosition]](float afAdd)|}}
{{CodeDocSummaryItem|bool|[[#DataIsInMeshFile|DataIsInMeshFile]]()|}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeSpeed|FadeSpeed]](float afSpeed, float afTime)|}}
{{CodeDocSummaryItem|[[../cAnimation|cAnimation]]|[[#GetAnimation|GetAnimation]]()|}}
{{CodeDocSummaryItem|bool|[[#GetApplyRootMotionToBone|GetApplyRootMotionToBone]]()|}}
{{CodeDocSummaryItem|bool|[[#GetApplyRootMotionToEntity|GetApplyRootMotionToEntity]]()|}}
{{CodeDocSummaryItem|float|[[#GetBaseSpeed|GetBaseSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetFadeStep|GetFadeStep]]()|}}
{{CodeDocSummaryItem|float|[[#GetLength|GetLength]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|float|[[#GetPreviousTimePosition|GetPreviousTimePosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetRelativeTimePosition|GetRelativeTimePosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeed|GetSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetTimePosition|GetTimePosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetWeight|GetWeight]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsFading|IsFading]]()|}}
{{CodeDocSummaryItem|bool|[[#IsLooping|IsLooping]]()|}}
{{CodeDocSummaryItem|bool|[[#IsOver|IsOver]]()|}}
{{CodeDocSummaryItem|bool|[[#IsPaused|IsPaused]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abActive)|}}
{{CodeDocSummaryItem|void|[[#SetApplyRootMotionToBone|SetApplyRootMotionToBone]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetApplyRootMotionToEntity|SetApplyRootMotionToEntity]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBaseSpeed|SetBaseSpeed]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetFadeStep|SetFadeStep]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetLength|SetLength]](float afLength)|}}
{{CodeDocSummaryItem|void|[[#SetLoop|SetLoop]](bool abLoop)|}}
{{CodeDocSummaryItem|void|[[#SetPaused|SetPaused]](bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#SetRelativeTimePosition|SetRelativeTimePosition]](float afPosition)|}}
{{CodeDocSummaryItem|void|[[#SetSpeed|SetSpeed]](float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetTimePosition|SetTimePosition]](float afPosition)|}}
{{CodeDocSummaryItem|void|[[#SetWeight|SetWeight]](float afWeight)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddTimePosition}}
<syntaxhighlight lang="c++">void AddTimePosition(float afAdd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAdd|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DataIsInMeshFile}}
<syntaxhighlight lang="c++">bool DataIsInMeshFile()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeIn}}
<syntaxhighlight lang="c++">void FadeIn(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOut}}
<syntaxhighlight lang="c++">void FadeOut(float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeSpeed}}
<syntaxhighlight lang="c++">void FadeSpeed(float afSpeed,
               float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAnimation}}
<syntaxhighlight lang="c++">cAnimation@ GetAnimation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cAnimation@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetApplyRootMotionToBone}}
<syntaxhighlight lang="c++">bool GetApplyRootMotionToBone()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetApplyRootMotionToEntity}}
<syntaxhighlight lang="c++">bool GetApplyRootMotionToEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBaseSpeed}}
<syntaxhighlight lang="c++">float GetBaseSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFadeStep}}
<syntaxhighlight lang="c++">float GetFadeStep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLength}}
<syntaxhighlight lang="c++">float GetLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPreviousTimePosition}}
<syntaxhighlight lang="c++">float GetPreviousTimePosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRelativeTimePosition}}
<syntaxhighlight lang="c++">float GetRelativeTimePosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpeed}}
<syntaxhighlight lang="c++">float GetSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimePosition}}
<syntaxhighlight lang="c++">float GetTimePosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWeight}}
<syntaxhighlight lang="c++">float GetWeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFading}}
<syntaxhighlight lang="c++">bool IsFading()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsLooping}}
<syntaxhighlight lang="c++">bool IsLooping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsOver}}
<syntaxhighlight lang="c++">bool IsOver()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsPaused}}
<syntaxhighlight lang="c++">bool IsPaused()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetApplyRootMotionToBone}}
<syntaxhighlight lang="c++">void SetApplyRootMotionToBone(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetApplyRootMotionToEntity}}
<syntaxhighlight lang="c++">void SetApplyRootMotionToEntity(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBaseSpeed}}
<syntaxhighlight lang="c++">void SetBaseSpeed(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFadeStep}}
<syntaxhighlight lang="c++">void SetFadeStep(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLength}}
<syntaxhighlight lang="c++">void SetLength(float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLoop}}
<syntaxhighlight lang="c++">void SetLoop(bool abLoop)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPaused}}
<syntaxhighlight lang="c++">void SetPaused(bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRelativeTimePosition}}
<syntaxhighlight lang="c++">void SetRelativeTimePosition(float afPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afPosition|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeed}}
<syntaxhighlight lang="c++">void SetSpeed(float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTimePosition}}
<syntaxhighlight lang="c++">void SetTimePosition(float afPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afPosition|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWeight}}
<syntaxhighlight lang="c++">void SetWeight(float afWeight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afWeight|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}