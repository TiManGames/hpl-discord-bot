{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxPlayer has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddCollideCallback|AddCollideCallback]]([[../iLuxEntity|iLuxEntity@]] apEntity, const [[../tString|tString]] &in asCallbackFunc, bool abAddedFromScript <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#AddHealth|AddHealth]](float afX, float afMinHealth)|}}
{{CodeDocSummaryItem|void|[[#AddMoveState|AddMoveState]](const [[../tString|tString]] &in asName, int alId, const [[../tString|tString]] &in asScriptFile, const [[../tString|tString]] &in asScriptClass)|}}
{{CodeDocSummaryItem|void|[[#AddState|AddState]](const [[../tString|tString]] &in asName, int alId, const [[../tString|tString]] &in asScriptFile, const [[../tString|tString]] &in asScriptClass)|}}
{{CodeDocSummaryItem|void|[[#AddUsedLiquidArea|AddUsedLiquidArea]]([[../cLuxLiquidArea|cLuxLiquidArea@]] apArea)|}}
{{CodeDocSummaryItem|void|[[#AutomoveCharBodyTo|AutomoveCharBodyTo]](float afAcc, float afSpeedMul, float afMaxSpeed, const [[../cVector3f|cVector3f]] &in avPosition)|}}
{{CodeDocSummaryItem|void|[[#ChangeMoveState|ChangeMoveState]](int alId)|}}
{{CodeDocSummaryItem|void|[[#ChangeState|ChangeState]](int alId)|}}
{{CodeDocSummaryItem|bool|[[#CheckBodyCollision|CheckBodyCollision]]([[../iPhysicsBody|iPhysicsBody@]] apBody, [[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|bool|[[#CheckCharacterCollision|CheckCharacterCollision]]([[../iCharacterBody|iCharacterBody@]] apBody, [[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|bool|[[#CheckEntityCollision|CheckEntityCollision]]([[../iLuxEntity|iLuxEntity@]] apEntity)|}}
{{CodeDocSummaryItem|void|[[#DisableCameraLock|DisableCameraLock]]()|}}
{{CodeDocSummaryItem|void|[[#EnableCameraLock|EnableCameraLock]](float afLocalYawMin, float afLocalYawMax, float afLocalPitchMin, float afLocalPitchMax)|}}
{{CodeDocSummaryItem|void|[[#FadeCameraAspectMulTo|FadeCameraAspectMulTo]](float afX, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeCameraFOVMulTo|FadeCameraFOVMulTo]](int alId, float afX, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeCameraFOVTo|FadeCameraFOVTo]](float afTargetFOV, float afSpeed)|}}
{{CodeDocSummaryItem|void|[[#FadeCameraRollTo|FadeCameraRollTo]](int alId, float afX, float afSpeedMul, float afMaxSpeed)|}}
{{CodeDocSummaryItem|float|[[#GetAutoMoveTargetDistance|GetAutoMoveTargetDistance]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAverageMoveDirection|GetAverageMoveDirection]]()|}}
{{CodeDocSummaryItem|float|[[#GetAverageMoveSpeed|GetAverageMoveSpeed]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetBaseCameraPosAdd|GetBaseCameraPosAdd]]()|}}
{{CodeDocSummaryItem|[[../cCamera|cCamera]]|[[#GetCamera|GetCamera]]()|}}
{{CodeDocSummaryItem|[[../iCollideShape|iCollideShape]]|[[#GetCameraCollideShape|GetCameraCollideShape]]()|}}
{{CodeDocSummaryItem|float|[[#GetCameraFOVMul|GetCameraFOVMul]](int alId)|}}
{{CodeDocSummaryItem|float|[[#GetCameraFOVMul|GetCameraFOVMul]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCameraPosAdd|GetCameraPosAdd]](int alType)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCameraPosAddGoal|GetCameraPosAddGoal]](int alType)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCameraPosAddSum|GetCameraPosAddSum]]()|}}
{{CodeDocSummaryItem|float|[[#GetCameraRoll|GetCameraRoll]](int alId)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetCameraTrackingAvgMovement|GetCameraTrackingAvgMovement]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCanDie|GetCanDie]]()|}}
{{CodeDocSummaryItem|[[../iCharacterBody|iCharacterBody]]|[[#GetCharacterBody|GetCharacterBody]]()|}}
{{CodeDocSummaryItem|[[../cLuxMoveState|cLuxMoveState]]|[[#GetCurrentMoveState|GetCurrentMoveState]]()|}}
{{CodeDocSummaryItem|int|[[#GetCurrentMoveStateId|GetCurrentMoveStateId]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetCurrentMoveStateName|GetCurrentMoveStateName]]()|}}
{{CodeDocSummaryItem|int|[[#GetCurrentStateId|GetCurrentStateId]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetCurrentStateName|GetCurrentStateName]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetDamageSourceID|GetDamageSourceID]]()|}}
{{CodeDocSummaryItem|float|[[#GetDefaultFOV|GetDefaultFOV]]()|}}
{{CodeDocSummaryItem|float|[[#GetHealth|GetHealth]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIsLiquidAreaUsed|GetIsLiquidAreaUsed]]([[../cLuxLiquidArea|cLuxLiquidArea@]] apArea)|}}
{{CodeDocSummaryItem|float|[[#GetLiquidHeight|GetLiquidHeight]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxHealth|GetMaxHealth]]()|}}
{{CodeDocSummaryItem|float|[[#GetRotateCameraTargetDistance|GetRotateCameraTargetDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetSmoothingPosAmount|GetSmoothingPosAmount]]()|}}
{{CodeDocSummaryItem|float|[[#GetSmoothingRotAmount|GetSmoothingRotAmount]]()|}}
{{CodeDocSummaryItem|float|[[#GetTimeSincePhysicsObjectInteraction|GetTimeSincePhysicsObjectInteraction]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetUsedLiquidAreaID|GetUsedLiquidAreaID]](int alId)|}}
{{CodeDocSummaryItem|int|[[#GetUsedLiquidAreaNum|GetUsedLiquidAreaNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetVisibilityMaxRange|GetVisibilityMaxRange]]()|}}
{{CodeDocSummaryItem|float|[[#GetVisibilityRangeMul|GetVisibilityRangeMul]]()|}}
{{CodeDocSummaryItem|bool|[[#GiveDamage|GiveDamage]](float afAmount, int alStrength, int aType, float afMinHealth, [[../tID|tID]] a_idSource, int alDamageID)|}}
{{CodeDocSummaryItem|bool|[[#HasCollideCallbacks|HasCollideCallbacks]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsAutomoveCharBodyActive|IsAutomoveCharBodyActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsCameraRotateActive|IsCameraRotateActive]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDamaged|IsDamaged]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDead|IsDead]]()|}}
{{CodeDocSummaryItem|bool|[[#IsInLiquid|IsInLiquid]]()|}}
{{CodeDocSummaryItem|void|[[#MoveCameraPosAdd|MoveCameraPosAdd]](int alType, const [[../cVector3f|cVector3f]] &in avGoal, float afAcc, float afSpeed, float afSlowdownDist)|}}
{{CodeDocSummaryItem|void|[[#RemoveCollideCallback|RemoveCollideCallback]](const [[../tString|tString]] &in asEntityName)|}}
{{CodeDocSummaryItem|void|[[#RemoveUsedLiquidArea|RemoveUsedLiquidArea]]([[../cLuxLiquidArea|cLuxLiquidArea@]] apArea)|}}
{{CodeDocSummaryItem|void|[[#ResetBasicProperties|ResetBasicProperties]]()|}}
{{CodeDocSummaryItem|void|[[#ResetTimeSincePhysicsObjectInteraction|ResetTimeSincePhysicsObjectInteraction]]()|}}
{{CodeDocSummaryItem|void|[[#RotateCameraTowards|RotateCameraTowards]](float afAcc, float afSpeedMul, float afMaxSpeed, const [[../cVector3f|cVector3f]] &in avLookAtPos, bool abLocalCoord)|}}
{{CodeDocSummaryItem|void|[[#RotateCameraTowards|RotateCameraTowards]](float afAcc, float afSpeedMul, float afMaxSpeed, [[../tID|tID]] a_idTarget, bool abLocalCoord)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetAutomoveCharBodyTarget|SetAutomoveCharBodyTarget]](const [[../cVector3f|cVector3f]] &in avPosition)|}}
{{CodeDocSummaryItem|void|[[#SetBaseCameraPosAdd|SetBaseCameraPosAdd]](const [[../cVector3f|cVector3f]] &in avVec)|}}
{{CodeDocSummaryItem|void|[[#SetCameraFOVMul|SetCameraFOVMul]](int alId, float afFOVMul)|}}
{{CodeDocSummaryItem|void|[[#SetCameraPosAdd|SetCameraPosAdd]](int alType, const [[../cVector3f|cVector3f]] &in avVector)|}}
{{CodeDocSummaryItem|void|[[#SetCameraRoll|SetCameraRoll]](int alId, float afX)|}}
{{CodeDocSummaryItem|bool|[[#SetCanDie|SetCanDie]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCharacterBody|SetCharacterBody]]([[../iCharacterBody|iCharacterBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#SetCollideCallbacksActive|SetCollideCallbacksActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetHealth|SetHealth]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxCameraTrackingAmount|SetMaxCameraTrackingAmount]](int alSize)|}}
{{CodeDocSummaryItem|void|[[#SetMaxHealth|SetMaxHealth]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetRotateCameraTarget|SetRotateCameraTarget]](const [[../cVector3f|cVector3f]] &in avLookAtPos, bool abLocalCoord)|}}
{{CodeDocSummaryItem|void|[[#SetRotateCameraTarget|SetRotateCameraTarget]]([[../tID|tID]] a_idTarget, bool abLocalCoord)|}}
{{CodeDocSummaryItem|void|[[#SetSmoothingPosAmount|SetSmoothingPosAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSmoothingRotAmount|SetSmoothingRotAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVisibilityMaxRange|SetVisibilityMaxRange]](int alId, float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVisibilityRangeMul|SetVisibilityRangeMul]](int alId, float afX)|}}
{{CodeDocSummaryItem|void|[[#StopAutomoveCharBody|StopAutomoveCharBody]]()|}}
{{CodeDocSummaryItem|void|[[#StopCameraRotate|StopCameraRotate]](float afDeacc)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddCollideCallback}}
<syntaxhighlight lang="c++">void AddCollideCallback(iLuxEntity@ apEntity,
                        const tString &in asCallbackFunc,
                        bool abAddedFromScript = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAddedFromScript|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddHealth}}
<syntaxhighlight lang="c++">void AddHealth(float afX,
               float afMinHealth)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afMinHealth|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddMoveState}}
<syntaxhighlight lang="c++">void AddMoveState(const tString &in asName,
                  int alId,
                  const tString &in asScriptFile,
                  const tString &in asScriptClass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|asScriptFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddState}}
<syntaxhighlight lang="c++">void AddState(const tString &in asName,
              int alId,
              const tString &in asScriptFile,
              const tString &in asScriptClass)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|asScriptFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asScriptClass|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddUsedLiquidArea}}
<syntaxhighlight lang="c++">void AddUsedLiquidArea(cLuxLiquidArea@ apArea)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apArea|[[../cLuxLiquidArea|cLuxLiquidArea@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AutomoveCharBodyTo}}
<syntaxhighlight lang="c++">void AutomoveCharBodyTo(float afAcc,
                        float afSpeedMul,
                        float afMaxSpeed,
                        const cVector3f &in avPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afSpeedMul|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeMoveState}}
<syntaxhighlight lang="c++">void ChangeMoveState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ChangeState}}
<syntaxhighlight lang="c++">void ChangeState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckBodyCollision}}
<syntaxhighlight lang="c++">bool CheckBodyCollision(iPhysicsBody@ apBody,
                        cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckCharacterCollision}}
<syntaxhighlight lang="c++">bool CheckCharacterCollision(iCharacterBody@ apBody,
                             cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckEntityCollision}}
<syntaxhighlight lang="c++">bool CheckEntityCollision(iLuxEntity@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DisableCameraLock}}
<syntaxhighlight lang="c++">void DisableCameraLock()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|EnableCameraLock}}
<syntaxhighlight lang="c++">void EnableCameraLock(float afLocalYawMin,
                      float afLocalYawMax,
                      float afLocalPitchMin,
                      float afLocalPitchMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afLocalYawMin|float|}}
{{CodeDocDetailParam|afLocalYawMax|float|}}
{{CodeDocDetailParam|afLocalPitchMin|float|}}
{{CodeDocDetailParam|afLocalPitchMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeCameraAspectMulTo}}
<syntaxhighlight lang="c++">void FadeCameraAspectMulTo(float afX,
                           float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeCameraFOVMulTo}}
<syntaxhighlight lang="c++">void FadeCameraFOVMulTo(int alId,
                        float afX,
                        float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeCameraFOVTo}}
<syntaxhighlight lang="c++">void FadeCameraFOVTo(float afTargetFOV,
                     float afSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTargetFOV|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeCameraRollTo}}
<syntaxhighlight lang="c++">void FadeCameraRollTo(int alId,
                      float afX,
                      float afSpeedMul,
                      float afMaxSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailParam|afSpeedMul|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAutoMoveTargetDistance}}
<syntaxhighlight lang="c++">float GetAutoMoveTargetDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAverageMoveDirection}}
<syntaxhighlight lang="c++">const cVector3f& GetAverageMoveDirection()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAverageMoveSpeed}}
<syntaxhighlight lang="c++">float GetAverageMoveSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBaseCameraPosAdd}}
<syntaxhighlight lang="c++">const cVector3f& GetBaseCameraPosAdd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCamera}}
<syntaxhighlight lang="c++">cCamera@ GetCamera()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cCamera@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraCollideShape}}
<syntaxhighlight lang="c++">iCollideShape@ GetCameraCollideShape()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCollideShape@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraFOVMul}}
<syntaxhighlight lang="c++">float GetCameraFOVMul(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraFOVMul}}
<syntaxhighlight lang="c++">float GetCameraFOVMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraPosAdd}}
<syntaxhighlight lang="c++">const cVector3f& GetCameraPosAdd(int alType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraPosAddGoal}}
<syntaxhighlight lang="c++">const cVector3f& GetCameraPosAddGoal(int alType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraPosAddSum}}
<syntaxhighlight lang="c++">const cVector3f& GetCameraPosAddSum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraRoll}}
<syntaxhighlight lang="c++">float GetCameraRoll(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCameraTrackingAvgMovement}}
<syntaxhighlight lang="c++">const cVector2f& GetCameraTrackingAvgMovement()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCanDie}}
<syntaxhighlight lang="c++">bool GetCanDie()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharacterBody}}
<syntaxhighlight lang="c++">iCharacterBody@ GetCharacterBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentMoveState}}
<syntaxhighlight lang="c++">cLuxMoveState@ GetCurrentMoveState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxMoveState@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentMoveStateId}}
<syntaxhighlight lang="c++">int GetCurrentMoveStateId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentMoveStateName}}
<syntaxhighlight lang="c++">const tString& GetCurrentMoveStateName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentStateId}}
<syntaxhighlight lang="c++">int GetCurrentStateId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentStateName}}
<syntaxhighlight lang="c++">const tString& GetCurrentStateName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDamageSourceID}}
<syntaxhighlight lang="c++">tID GetDamageSourceID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultFOV}}
<syntaxhighlight lang="c++">float GetDefaultFOV()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHealth}}
<syntaxhighlight lang="c++">float GetHealth()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsLiquidAreaUsed}}
<syntaxhighlight lang="c++">bool GetIsLiquidAreaUsed(cLuxLiquidArea@ apArea)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apArea|[[../cLuxLiquidArea|cLuxLiquidArea@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLiquidHeight}}
<syntaxhighlight lang="c++">float GetLiquidHeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxHealth}}
<syntaxhighlight lang="c++">float GetMaxHealth()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRotateCameraTargetDistance}}
<syntaxhighlight lang="c++">float GetRotateCameraTargetDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSmoothingPosAmount}}
<syntaxhighlight lang="c++">float GetSmoothingPosAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSmoothingRotAmount}}
<syntaxhighlight lang="c++">float GetSmoothingRotAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeSincePhysicsObjectInteraction}}
<syntaxhighlight lang="c++">float GetTimeSincePhysicsObjectInteraction()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsedLiquidAreaID}}
<syntaxhighlight lang="c++">tID GetUsedLiquidAreaID(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsedLiquidAreaNum}}
<syntaxhighlight lang="c++">int GetUsedLiquidAreaNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVisibilityMaxRange}}
<syntaxhighlight lang="c++">float GetVisibilityMaxRange()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVisibilityRangeMul}}
<syntaxhighlight lang="c++">float GetVisibilityRangeMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GiveDamage}}
<syntaxhighlight lang="c++">bool GiveDamage(float afAmount,
                int alStrength,
                int aType,
                float afMinHealth,
                tID a_idSource,
                int alDamageID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAmount|float|}}
{{CodeDocDetailParam|alStrength|int|}}
{{CodeDocDetailParam|aType|int|}}
{{CodeDocDetailParam|afMinHealth|float|}}
{{CodeDocDetailParam|a_idSource|[[../tID|tID]]|}}
{{CodeDocDetailParam|alDamageID|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasCollideCallbacks}}
<syntaxhighlight lang="c++">bool HasCollideCallbacks()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsAutomoveCharBodyActive}}
<syntaxhighlight lang="c++">bool IsAutomoveCharBodyActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsCameraRotateActive}}
<syntaxhighlight lang="c++">bool IsCameraRotateActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDamaged}}
<syntaxhighlight lang="c++">bool IsDamaged()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDead}}
<syntaxhighlight lang="c++">bool IsDead()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsInLiquid}}
<syntaxhighlight lang="c++">bool IsInLiquid()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveCameraPosAdd}}
<syntaxhighlight lang="c++">void MoveCameraPosAdd(int alType,
                      const cVector3f &in avGoal,
                      float afAcc,
                      float afSpeed,
                      float afSlowdownDist)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|avGoal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afSpeed|float|}}
{{CodeDocDetailParam|afSlowdownDist|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveCollideCallback}}
<syntaxhighlight lang="c++">void RemoveCollideCallback(const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEntityName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveUsedLiquidArea}}
<syntaxhighlight lang="c++">void RemoveUsedLiquidArea(cLuxLiquidArea@ apArea)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apArea|[[../cLuxLiquidArea|cLuxLiquidArea@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetBasicProperties}}
<syntaxhighlight lang="c++">void ResetBasicProperties()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetTimeSincePhysicsObjectInteraction}}
<syntaxhighlight lang="c++">void ResetTimeSincePhysicsObjectInteraction()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RotateCameraTowards}}
<syntaxhighlight lang="c++">void RotateCameraTowards(float afAcc,
                         float afSpeedMul,
                         float afMaxSpeed,
                         const cVector3f &in avLookAtPos,
                         bool abLocalCoord)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afSpeedMul|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|avLookAtPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalCoord|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RotateCameraTowards}}
<syntaxhighlight lang="c++">void RotateCameraTowards(float afAcc,
                         float afSpeedMul,
                         float afMaxSpeed,
                         tID a_idTarget,
                         bool abLocalCoord)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afSpeedMul|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|a_idTarget|[[../tID|tID]]|}}
{{CodeDocDetailParam|abLocalCoord|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAutomoveCharBodyTarget}}
<syntaxhighlight lang="c++">void SetAutomoveCharBodyTarget(const cVector3f &in avPosition)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBaseCameraPosAdd}}
<syntaxhighlight lang="c++">void SetBaseCameraPosAdd(const cVector3f &in avVec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVec|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraFOVMul}}
<syntaxhighlight lang="c++">void SetCameraFOVMul(int alId,
                     float afFOVMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afFOVMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraPosAdd}}
<syntaxhighlight lang="c++">void SetCameraPosAdd(int alType,
                     const cVector3f &in avVector)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alType|int|}}
{{CodeDocDetailParam|avVector|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraRoll}}
<syntaxhighlight lang="c++">void SetCameraRoll(int alId,
                   float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCanDie}}
<syntaxhighlight lang="c++">bool SetCanDie(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCharacterBody}}
<syntaxhighlight lang="c++">void SetCharacterBody(iCharacterBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iCharacterBody|iCharacterBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollideCallbacksActive}}
<syntaxhighlight lang="c++">void SetCollideCallbacksActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHealth}}
<syntaxhighlight lang="c++">void SetHealth(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxCameraTrackingAmount}}
<syntaxhighlight lang="c++">void SetMaxCameraTrackingAmount(int alSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alSize|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxHealth}}
<syntaxhighlight lang="c++">void SetMaxHealth(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateCameraTarget}}
<syntaxhighlight lang="c++">void SetRotateCameraTarget(const cVector3f &in avLookAtPos,
                           bool abLocalCoord)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avLookAtPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abLocalCoord|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRotateCameraTarget}}
<syntaxhighlight lang="c++">void SetRotateCameraTarget(tID a_idTarget,
                           bool abLocalCoord)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_idTarget|[[../tID|tID]]|}}
{{CodeDocDetailParam|abLocalCoord|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSmoothingPosAmount}}
<syntaxhighlight lang="c++">void SetSmoothingPosAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSmoothingRotAmount}}
<syntaxhighlight lang="c++">void SetSmoothingRotAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisibilityMaxRange}}
<syntaxhighlight lang="c++">void SetVisibilityMaxRange(int alId,
                           float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisibilityRangeMul}}
<syntaxhighlight lang="c++">void SetVisibilityRangeMul(int alId,
                           float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAutomoveCharBody}}
<syntaxhighlight lang="c++">void StopAutomoveCharBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopCameraRotate}}
<syntaxhighlight lang="c++">void StopCameraRotate(float afDeacc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDeacc|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}