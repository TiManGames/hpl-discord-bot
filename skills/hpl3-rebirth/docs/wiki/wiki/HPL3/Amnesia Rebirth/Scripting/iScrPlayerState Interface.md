{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iScrPlayerState_Interface has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#AllowBuoyancy|AllowBuoyancy]]([[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#CharBody_GravityCollide|CharBody_GravityCollide]]([[../iCharacterBody|iCharacterBody@]] apCharBody, [[../iPhysicsBody|iPhysicsBody@]] apBody, [[../cCollideData|cCollideData@]] apCollideData)|}}
{{CodeDocSummaryItem|void|[[#CharBody_HitGround|CharBody_HitGround]]([[../iCharacterBody|iCharacterBody@]] apCharBody, const [[../cVector3f|cVector3f]] &in avVel)|}}
{{CodeDocSummaryItem|void|[[#CreateWorldEntities|CreateWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#DestroyWorldEntities|DestroyWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|float|[[#DrawDebugOutput|DrawDebugOutput]]([[../cGuiSet|cGuiSet@]] apSet, [[../iFontData|iFontData@]] apFont, float afStartY)|}}
{{CodeDocSummaryItem|[[../cLuxPlayerState|cLuxPlayerState]]|[[#GetBase|GetBase]]()|}}
{{CodeDocSummaryItem|void|[[#LoadUserConfig|LoadUserConfig]]()|}}
{{CodeDocSummaryItem|bool|[[#OnAction|OnAction]](int alAction, bool abPressed)|}}
{{CodeDocSummaryItem|bool|[[#OnAnalogInput|OnAnalogInput]](int alAnalogId, const [[../cVector3f|cVector3f]] &in avAmount)|}}
{{CodeDocSummaryItem|void|[[#OnEnterState|OnEnterState]](int alPrevStateId)|}}
{{CodeDocSummaryItem|bool|[[#OnExitPressed|OnExitPressed]]()|}}
{{CodeDocSummaryItem|void|[[#OnLeaveState|OnLeaveState]](int alNextStateId)|}}
{{CodeDocSummaryItem|void|[[#OnMapEnter|OnMapEnter]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#OnMapLeave|OnMapLeave]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SaveUserConfig|SaveUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AllowBuoyancy}}
<syntaxhighlight lang="c++">bool AllowBuoyancy(iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

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
<syntaxhighlight lang="c++">cLuxPlayerState@ GetBase()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxPlayerState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadUserConfig}}
<syntaxhighlight lang="c++">void LoadUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAction}}
<syntaxhighlight lang="c++">bool OnAction(int alAction,
              bool abPressed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAction|int|}}
{{CodeDocDetailParam|abPressed|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAnalogInput}}
<syntaxhighlight lang="c++">bool OnAnalogInput(int alAnalogId,
                   const cVector3f &in avAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAnalogId|int|}}
{{CodeDocDetailParam|avAmount|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnEnterState}}
<syntaxhighlight lang="c++">void OnEnterState(int alPrevStateId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alPrevStateId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnExitPressed}}
<syntaxhighlight lang="c++">bool OnExitPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnLeaveState}}
<syntaxhighlight lang="c++">void OnLeaveState(int alNextStateId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alNextStateId|int|}}
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

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
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

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}