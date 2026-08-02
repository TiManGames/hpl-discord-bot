{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cPostEffect_FearTentacles has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#GetParams|GetParams]](float &out afIntensity, float &out afTentacleScale, float &out afSpreadDist, float &out afRefraction, float &out afVingette, float &out afAlpha, float &out afCircleRadius, float &out afCircleAlpha, float &out afCircleSoftness)|}}
{{CodeDocSummaryItem|[[../cMeshEntity|cMeshEntity]]|[[#GetTentacleEntity|GetTentacleEntity]](int alIndex)|}}
{{CodeDocSummaryItem|int|[[#GetTentacleEntityNum|GetTentacleEntityNum]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDisabled|IsDisabled]]()|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDisabled|SetDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetParams|SetParams]](float afIntensity, float afTentacleScale, float afSpreadDist, float afRefraction, float afVingette, float afAlpha, float afCircleRadius, float afCircleAlpha, float afCircleSoftness)|}}
{{CodeDocSummaryItem|void|[[#SetTentacleAnimationSpeed|SetTentacleAnimationSpeed]](const [[../tString|tString]] &in asAnim, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetTentacleAnimationWeight|SetTentacleAnimationWeight]](const [[../tString|tString]] &in asAnim, float afWeight)|}}
{{CodeDocSummaryItem|void|[[#SetTentacleMaterial|SetTentacleMaterial]](int alMatIndex, float afFadeTime)|}}
{{CodeDocSummaryItem|void|[[#SetTentacleTransform|SetTentacleTransform]](int alIndex, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector3f|cVector3f]] &in avRot)|}}
{{CodeDocSummaryItem|void|[[#SetupTentacleAnimation|SetupTentacleAnimation]](const [[../tString|tString]] &in asAnim, float afSpeedMin, float afSpeedMax)|}}
{{CodeDocSummaryItem|void|[[#SetupTentacleEntity|SetupTentacleEntity]](const [[../tString|tString]] &in asEntFile, int alNum, int alAnimGroupNum)|}}
{{CodeDocSummaryItem|void|[[#SetupTentacleMaterial|SetupTentacleMaterial]](int alMatIndex, const [[../tString|tString]] &in asMat)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetParams}}
<syntaxhighlight lang="c++">void GetParams(float &out afIntensity,
               float &out afTentacleScale,
               float &out afSpreadDist,
               float &out afRefraction,
               float &out afVingette,
               float &out afAlpha,
               float &out afCircleRadius,
               float &out afCircleAlpha,
               float &out afCircleSoftness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afIntensity|float|}}
{{CodeDocDetailParam|afTentacleScale|float|}}
{{CodeDocDetailParam|afSpreadDist|float|}}
{{CodeDocDetailParam|afRefraction|float|}}
{{CodeDocDetailParam|afVingette|float|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afCircleRadius|float|}}
{{CodeDocDetailParam|afCircleAlpha|float|}}
{{CodeDocDetailParam|afCircleSoftness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTentacleEntity}}
<syntaxhighlight lang="c++">cMeshEntity@ GetTentacleEntity(int alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailReturn|cMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTentacleEntityNum}}
<syntaxhighlight lang="c++">int GetTentacleEntityNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDisabled}}
<syntaxhighlight lang="c++">bool IsDisabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Reset}}
<syntaxhighlight lang="c++">void Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisabled}}
<syntaxhighlight lang="c++">void SetDisabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParams}}
<syntaxhighlight lang="c++">void SetParams(float afIntensity,
               float afTentacleScale,
               float afSpreadDist,
               float afRefraction,
               float afVingette,
               float afAlpha,
               float afCircleRadius,
               float afCircleAlpha,
               float afCircleSoftness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afIntensity|float|}}
{{CodeDocDetailParam|afTentacleScale|float|}}
{{CodeDocDetailParam|afSpreadDist|float|}}
{{CodeDocDetailParam|afRefraction|float|}}
{{CodeDocDetailParam|afVingette|float|}}
{{CodeDocDetailParam|afAlpha|float|}}
{{CodeDocDetailParam|afCircleRadius|float|}}
{{CodeDocDetailParam|afCircleAlpha|float|}}
{{CodeDocDetailParam|afCircleSoftness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTentacleAnimationSpeed}}
<syntaxhighlight lang="c++">void SetTentacleAnimationSpeed(const tString &in asAnim,
                               float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asAnim|[[../tString|tString]]|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTentacleAnimationWeight}}
<syntaxhighlight lang="c++">void SetTentacleAnimationWeight(const tString &in asAnim,
                                float afWeight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asAnim|[[../tString|tString]]|}}
{{CodeDocDetailParam|afWeight|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTentacleMaterial}}
<syntaxhighlight lang="c++">void SetTentacleMaterial(int alMatIndex,
                         float afFadeTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMatIndex|int|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTentacleTransform}}
<syntaxhighlight lang="c++">void SetTentacleTransform(int alIndex,
                          const cVector3f &in avPos,
                          const cVector3f &in avRot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|int|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avRot|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupTentacleAnimation}}
<syntaxhighlight lang="c++">void SetupTentacleAnimation(const tString &in asAnim,
                            float afSpeedMin,
                            float afSpeedMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asAnim|[[../tString|tString]]|}}
{{CodeDocDetailParam|afSpeedMin|float|}}
{{CodeDocDetailParam|afSpeedMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupTentacleEntity}}
<syntaxhighlight lang="c++">void SetupTentacleEntity(const tString &in asEntFile,
                         int alNum,
                         int alAnimGroupNum)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|alNum|int|}}
{{CodeDocDetailParam|alAnimGroupNum|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupTentacleMaterial}}
<syntaxhighlight lang="c++">void SetupTentacleMaterial(int alMatIndex,
                           const tString &in asMat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMatIndex|int|}}
{{CodeDocDetailParam|asMat|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}