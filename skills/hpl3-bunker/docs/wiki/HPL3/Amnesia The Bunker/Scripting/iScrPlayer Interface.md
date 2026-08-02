{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iScrPlayer_Interface has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#CharBody_GravityCollide|CharBody_GravityCollide]]([[../iCharacterBody|iCharacterBody@]] apCharBody, [[../iPhysicsBody|iPhysicsBody@]] apBody, [[../cCollideData|cCollideData@]] apCollideData)|}}
{{CodeDocSummaryItem|void|[[#CharBody_HitGround|CharBody_HitGround]]([[../iCharacterBody|iCharacterBody@]] apCharBody, const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#CreateWorldEntities|CreateWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#DestroyWorldEntities|DestroyWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|float|[[#DrawDebugOutput|DrawDebugOutput]]([[../cGuiSet|cGuiSet@]] apSet, [[../iFontData|iFontData@]] apFont, float afStartY)|}}
{{CodeDocSummaryItem|[[../cLuxPlayer|cLuxPlayer]]|[[#GetBase|GetBase]]()|}}
{{CodeDocSummaryItem|int|[[#GetCharacterState|GetCharacterState]]()|}}
{{CodeDocSummaryItem|void|[[#LoadUserConfig|LoadUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#OnAction|OnAction]](int alAction, bool abPressed)|}}
{{CodeDocSummaryItem|void|[[#OnAnalogInput|OnAnalogInput]](int alAnalogId, const [[../cVector3f|cVector3f]] &in avAmount)|}}
{{CodeDocSummaryItem|void|[[#OnDraw|OnDraw]](float afFrameTime)|}}
{{CodeDocSummaryItem|void|[[#OnEnterContainer|OnEnterContainer]](const [[../tString|tString]] &in asOldContainer)|}}
{{CodeDocSummaryItem|void|[[#OnExitPressed|OnExitPressed]]()|}}
{{CodeDocSummaryItem|void|[[#OnLeaveContainer|OnLeaveContainer]](const [[../tString|tString]] &in asNewContainer)|}}
{{CodeDocSummaryItem|void|[[#OnMapEnter|OnMapEnter]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#OnMapLeave|OnMapLeave]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#OnUnderwaterEffectActive|OnUnderwaterEffectActive]](bool abX, bool abUseStartAndEndEffects)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#PreloadData|PreloadData]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SaveUserConfig|SaveUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#SetCharacterState|SetCharacterState]](int alState)|}}
{{CodeDocSummaryItem|void|[[#SetupStartPos|SetupStartPos]](const [[../cVector3f|cVector3f]] &in avPos, float afAngle, bool abCrouching)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CharBody_GravityCollide}}
<syntaxhighlight lang="c++">void CharBody_GravityCollide(iCharacterBody@ apCharBody,
                             iPhysicsBody@ apBody,
                             cCollideData@ apCollideData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCharBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apCollideData|[[../cCollideData|cCollideData@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CharBody_HitGround}}
<syntaxhighlight lang="c++">void CharBody_HitGround(iCharacterBody@ apCharBody,
                        const cVector3f &in avVel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCharBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailParam|avVel|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateWorldEntities}}
<syntaxhighlight lang="c++">void CreateWorldEntities(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyWorldEntities}}
<syntaxhighlight lang="c++">void DestroyWorldEntities(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawDebugOutput}}
<syntaxhighlight lang="c++">float DrawDebugOutput(cGuiSet@ apSet,
                      iFontData@ apFont,
                      float afStartY)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSet|[[../cGuiSet|cGuiSet@]]|}}
{{CodeDocDetailParam|apFont|[[../iFontData|iFontData@]]|}}
{{CodeDocDetailParam|afStartY|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBase}}
<syntaxhighlight lang="c++">cLuxPlayer@ GetBase()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxPlayer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterState}}
<syntaxhighlight lang="c++">int GetCharacterState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadUserConfig}}
<syntaxhighlight lang="c++">void LoadUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAction}}
<syntaxhighlight lang="c++">void OnAction(int alAction,
              bool abPressed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAction|int|}}
{{CodeDocDetailParam|abPressed|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAnalogInput}}
<syntaxhighlight lang="c++">void OnAnalogInput(int alAnalogId,
                   const cVector3f &in avAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAnalogId|int|}}
{{CodeDocDetailParam|avAmount|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnDraw}}
<syntaxhighlight lang="c++">void OnDraw(float afFrameTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFrameTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnEnterContainer}}
<syntaxhighlight lang="c++">void OnEnterContainer(const tString &in asOldContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asOldContainer|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnExitPressed}}
<syntaxhighlight lang="c++">void OnExitPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnLeaveContainer}}
<syntaxhighlight lang="c++">void OnLeaveContainer(const tString &in asNewContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNewContainer|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnMapEnter}}
<syntaxhighlight lang="c++">void OnMapEnter(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnMapLeave}}
<syntaxhighlight lang="c++">void OnMapLeave(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnUnderwaterEffectActive}}
<syntaxhighlight lang="c++">void OnUnderwaterEffectActive(bool abX,
                              bool abUseStartAndEndEffects)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailParam|abUseStartAndEndEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadData}}
<syntaxhighlight lang="c++">void PreloadData(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Reset}}
<syntaxhighlight lang="c++">void Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SaveUserConfig}}
<syntaxhighlight lang="c++">void SaveUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterState}}
<syntaxhighlight lang="c++">void SetCharacterState(int alState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alState|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupStartPos}}
<syntaxhighlight lang="c++">void SetupStartPos(const cVector3f &in avPos,
                   float afAngle,
                   bool abCrouching)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|abCrouching|bool|}}
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

{{HPL3The BunkerScriptingCategories}}