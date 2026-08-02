{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cEnvironmentParticles has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddClipArea|AddClipArea]]([[../iEntity3D|iEntity3D@]] apClipEntity, bool abSubtractive)|}}
{{CodeDocSummaryItem|float|[[#GetBrightness|GetBrightness]]()|}}
{{CodeDocSummaryItem|bool|[[#GetClipActive|GetClipActive]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColor|GetColor]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetGravityVelocity|GetGravityVelocity]]()|}}
{{CodeDocSummaryItem|float|[[#GetIterationNum|GetIterationNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetIterationNumInt|GetIterationNumInt]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetRotateVelocity|GetRotateVelocity]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWindVelocity|GetWindVelocity]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveClipArea|RemoveClipArea]]([[../iEntity3D|iEntity3D@]] apClipEntity)|}}
{{CodeDocSummaryItem|void|[[#SetBoxDistance|SetBoxDistance]](float afDistance)|}}
{{CodeDocSummaryItem|void|[[#SetBrightness|SetBrightness]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetClipActive|SetClipActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetColor|SetColor]](const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#SetFadeInEnd|SetFadeInEnd]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetFadeInStart|SetFadeInStart]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetFadeOutEnd|SetFadeOutEnd]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetFadeOutStart|SetFadeOutStart]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGravitySpeedRandomAmount|SetGravitySpeedRandomAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGravityVelocity|SetGravityVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetIterationNum|SetIterationNum]](float afNum)|}}
{{CodeDocSummaryItem|void|[[#SetRotateSpeedRandomAmount|SetRotateSpeedRandomAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetRotateSpeedRandomBothDirs|SetRotateSpeedRandomBothDirs]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetRotateVelocity|SetRotateVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#SetSpotLight|SetSpotLight]]([[../cLightSpot|cLightSpot@]] apSpotLight, float afMul)|}}
{{CodeDocSummaryItem|bool|[[#SetVisible|SetVisible]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetWindDirectionRandomAmount|SetWindDirectionRandomAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWindSpeedRandomAmount|SetWindSpeedRandomAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWindVelocity|SetWindVelocity]](const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddClipArea}}
<syntaxhighlight lang="c++">void AddClipArea(iEntity3D@ apClipEntity,
                 bool abSubtractive)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apClipEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailParam|abSubtractive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBrightness}}
<syntaxhighlight lang="c++">float GetBrightness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClipActive}}
<syntaxhighlight lang="c++">bool GetClipActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColor}}
<syntaxhighlight lang="c++">cColor GetColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityVelocity}}
<syntaxhighlight lang="c++">cVector3f GetGravityVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIterationNum}}
<syntaxhighlight lang="c++">float GetIterationNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIterationNumInt}}
<syntaxhighlight lang="c++">int GetIterationNumInt()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotateVelocity}}
<syntaxhighlight lang="c++">cVector3f GetRotateVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWindVelocity}}
<syntaxhighlight lang="c++">cVector3f GetWindVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveClipArea}}
<syntaxhighlight lang="c++">void RemoveClipArea(iEntity3D@ apClipEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apClipEntity|[[../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBoxDistance}}
<syntaxhighlight lang="c++">void SetBoxDistance(float afDistance)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDistance|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBrightness}}
<syntaxhighlight lang="c++">void SetBrightness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetClipActive}}
<syntaxhighlight lang="c++">void SetClipActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColor}}
<syntaxhighlight lang="c++">void SetColor(const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFadeInEnd}}
<syntaxhighlight lang="c++">void SetFadeInEnd(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFadeInStart}}
<syntaxhighlight lang="c++">void SetFadeInStart(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFadeOutEnd}}
<syntaxhighlight lang="c++">void SetFadeOutEnd(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFadeOutStart}}
<syntaxhighlight lang="c++">void SetFadeOutStart(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravitySpeedRandomAmount}}
<syntaxhighlight lang="c++">void SetGravitySpeedRandomAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityVelocity}}
<syntaxhighlight lang="c++">void SetGravityVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIterationNum}}
<syntaxhighlight lang="c++">void SetIterationNum(float afNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNum|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateSpeedRandomAmount}}
<syntaxhighlight lang="c++">void SetRotateSpeedRandomAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateSpeedRandomBothDirs}}
<syntaxhighlight lang="c++">void SetRotateSpeedRandomBothDirs(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateVelocity}}
<syntaxhighlight lang="c++">void SetRotateVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpotLight}}
<syntaxhighlight lang="c++">void SetSpotLight(cLightSpot@ apSpotLight,
                  float afMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSpotLight|[[../cLightSpot|cLightSpot@]]|}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">bool SetVisible(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWindDirectionRandomAmount}}
<syntaxhighlight lang="c++">void SetWindDirectionRandomAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWindSpeedRandomAmount}}
<syntaxhighlight lang="c++">void SetWindSpeedRandomAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWindVelocity}}
<syntaxhighlight lang="c++">void SetWindVelocity(const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}