{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxCharMover has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddSpeedState|AddSpeedState]](int alId)|}}
{{CodeDocSummaryItem|float|[[#CalculateSpeedMul|CalculateSpeedMul]](float afTimeStep)|}}
{{CodeDocSummaryItem|[[../iCharacterBody|iCharacterBody]]|[[#GetCharBody|GetCharBody]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetIdleExtraAnimActive|GetIdleExtraAnimActive]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxStuckCounter|GetMaxStuckCounter]]()|}}
{{CodeDocSummaryItem|float|[[#GetMoveSpeed|GetMoveSpeed]]()|}}
{{CodeDocSummaryItem|float|[[#GetSpeedMul|GetSpeedMul]]()|}}
{{CodeDocSummaryItem|int|[[#GetSpeedState|GetSpeedState]]()|}}
{{CodeDocSummaryItem|float|[[#GetStuckCounter|GetStuckCounter]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|bool|[[#GetUseMoveStateAnimations|GetUseMoveStateAnimations]]()|}}
{{CodeDocSummaryItem|float|[[#GetWantedSpeedAmount|GetWantedSpeedAmount]]()|}}
{{CodeDocSummaryItem|void|[[#LoadFromVariables|LoadFromVariables]]([[../cResourceVarsObject|cResourceVarsObject@]] apVars)|}}
{{CodeDocSummaryItem|void|[[#MoveToPos|MoveToPos]](const [[../cVector3f|cVector3f]] &in avFeetPos, bool abSlowDownAndStopAtGoal <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|int|[[#PlayAnimation|PlayAnimation]](const [[../tString|tString]] &in asName, float afFadeTime <nowiki>=</nowiki> 0.3f, bool abLoop <nowiki>=</nowiki> false, bool abPlayTransition <nowiki>=</nowiki> true, const [[../tString|tString]] &in asCallback <nowiki>=</nowiki> "")|}}
{{CodeDocSummaryItem|int|[[#PlayTrackAnimation|PlayTrackAnimation]]([[../cLuxTrackNode|cLuxTrackNode@]] apNode)|}}
{{CodeDocSummaryItem|void|[[#ResetStuckCounter|ResetStuckCounter]]()|}}
{{CodeDocSummaryItem|void|[[#SetBackwardAnimName|SetBackwardAnimName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetBankingActive|SetBankingActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBankingAngleMul|SetBankingAngleMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBankingMaxAngle|SetBankingMaxAngle]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBankingMaxSpeed|SetBankingMaxSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetBankingSpeedMul|SetBankingSpeedMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDirection|SetDirection]]([[../eLuxCharMoveDirection|eLuxCharMoveDirection]] aDir)|}}
{{CodeDocSummaryItem|void|[[#SetDynamicObjectAvoidanceActive|SetDynamicObjectAvoidanceActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDynamicObjectPlayerAvoidanceActive|SetDynamicObjectPlayerAvoidanceActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIdleAnimName|SetIdleAnimName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetIdleExtraAnimActive|SetIdleExtraAnimActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetIdleExtraAnimName|SetIdleExtraAnimName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetMaxBackwardSpeed|SetMaxBackwardSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxForwardSpeed|SetMaxForwardSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveSpeedAnimMul|SetMoveSpeedAnimMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetRunAnimName|SetRunAnimName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetRunToWalkSpeed|SetRunToWalkSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedMul|SetSpeedMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState|SetSpeedState]](int alId)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_Backward|SetSpeedState_Backward]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_Forward|SetSpeedState_Forward]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_ForwardAcc|SetSpeedState_ForwardAcc]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_ForwardDeacc|SetSpeedState_ForwardDeacc]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_SidewayAcc|SetSpeedState_SidewayAcc]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_SidewayDeacc|SetSpeedState_SidewayDeacc]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_Sideways|SetSpeedState_Sideways]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_TurnBreakMul|SetSpeedState_TurnBreakMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_TurnMaxSpeed|SetSpeedState_TurnMaxSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSpeedState_TurnSpeedMul|SetSpeedState_TurnSpeedMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetStoppedToWalkSpeed|SetStoppedToWalkSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnBreakMul|SetTurnBreakMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnedToGoalCallbackFunc|SetTurnedToGoalCallbackFunc]](const [[../tString|tString]] &in asFunc)|}}
{{CodeDocSummaryItem|void|[[#SetTurnMaxSpeed|SetTurnMaxSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnMinBreakAngle|SetTurnMinBreakAngle]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnSpeedMul|SetTurnSpeedMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnStoppedToWalkSpeed|SetTurnStoppedToWalkSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTurnWalkToStoppedSpeed|SetTurnWalkToStoppedSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetupDynamicObjectAvoidance|SetupDynamicObjectAvoidance]](float afMaxDistance, float afMinMass, float afSteerAmount)|}}
{{CodeDocSummaryItem|void|[[#SetupDynamicObjectPlayerAvoidance|SetupDynamicObjectPlayerAvoidance]](float afMaxDistance, float afSteerAmount)|}}
{{CodeDocSummaryItem|void|[[#SetupIdleExtra|SetupIdleExtra]](const [[../tString|tString]] &in asAnimName, float afMinWait, float afMaxWait, bool abPauseProceduralAnims)|}}
{{CodeDocSummaryItem|void|[[#SetupWallAvoidance|SetupWallAvoidance]](float afRadius, float afSteerAmount, int alSamples)|}}
{{CodeDocSummaryItem|void|[[#SetUse3DMovement|SetUse3DMovement]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUseMoveStateAnimations|SetUseMoveStateAnimations]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetVerticalMoveSpeedExtraAnimMul|SetVerticalMoveSpeedExtraAnimMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWalkAnimName|SetWalkAnimName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetWalkToRunSpeed|SetWalkToRunSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWalkToStoppedSpeed|SetWalkToStoppedSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWallAvoidanceActive|SetWallAvoidanceActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#StopTurning|StopTurning]]()|}}
{{CodeDocSummaryItem|void|[[#TurnInstantlyToAngle|TurnInstantlyToAngle]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#TurnInstantlyToAngle|TurnInstantlyToAngle]](float afYaw, float afPitch)|}}
{{CodeDocSummaryItem|void|[[#TurnInstantlyToPos|TurnInstantlyToPos]](const [[../cVector3f|cVector3f]] &in avGoalPos)|}}
{{CodeDocSummaryItem|void|[[#TurnToAngle|TurnToAngle]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#TurnToAngles|TurnToAngles]](float afYaw, float afPitch)|}}
{{CodeDocSummaryItem|void|[[#TurnToPos|TurnToPos]](const [[../cVector3f|cVector3f]] &in avFeetPos)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddSpeedState}}
<syntaxhighlight lang="c++">void AddSpeedState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CalculateSpeedMul}}
<syntaxhighlight lang="c++">float CalculateSpeedMul(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCharBody}}
<syntaxhighlight lang="c++">iCharacterBody@ GetCharBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iCharacterBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIdleExtraAnimActive}}
<syntaxhighlight lang="c++">bool GetIdleExtraAnimActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxStuckCounter}}
<syntaxhighlight lang="c++">float GetMaxStuckCounter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMoveSpeed}}
<syntaxhighlight lang="c++">float GetMoveSpeed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpeedMul}}
<syntaxhighlight lang="c++">float GetSpeedMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSpeedState}}
<syntaxhighlight lang="c++">int GetSpeedState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStuckCounter}}
<syntaxhighlight lang="c++">float GetStuckCounter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUseMoveStateAnimations}}
<syntaxhighlight lang="c++">bool GetUseMoveStateAnimations()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWantedSpeedAmount}}
<syntaxhighlight lang="c++">float GetWantedSpeedAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromVariables}}
<syntaxhighlight lang="c++">void LoadFromVariables(cResourceVarsObject@ apVars)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVars|[[../cResourceVarsObject|cResourceVarsObject@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveToPos}}
<syntaxhighlight lang="c++">void MoveToPos(const cVector3f &in avFeetPos,
               bool abSlowDownAndStopAtGoal = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avFeetPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|abSlowDownAndStopAtGoal|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayAnimation}}
<syntaxhighlight lang="c++">int PlayAnimation(const tString &in asName,
                  float afFadeTime = 0.3f,
                  bool abLoop = false,
                  bool abPlayTransition = true,
                  const tString &in asCallback = "")</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|abPlayTransition|bool|}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayTrackAnimation}}
<syntaxhighlight lang="c++">int PlayTrackAnimation(cLuxTrackNode@ apNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apNode|[[../cLuxTrackNode|cLuxTrackNode@]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetStuckCounter}}
<syntaxhighlight lang="c++">void ResetStuckCounter()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBackwardAnimName}}
<syntaxhighlight lang="c++">void SetBackwardAnimName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBankingActive}}
<syntaxhighlight lang="c++">void SetBankingActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBankingAngleMul}}
<syntaxhighlight lang="c++">void SetBankingAngleMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBankingMaxAngle}}
<syntaxhighlight lang="c++">void SetBankingMaxAngle(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBankingMaxSpeed}}
<syntaxhighlight lang="c++">void SetBankingMaxSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBankingSpeedMul}}
<syntaxhighlight lang="c++">void SetBankingSpeedMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDirection}}
<syntaxhighlight lang="c++">void SetDirection(eLuxCharMoveDirection aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eLuxCharMoveDirection|eLuxCharMoveDirection]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDynamicObjectAvoidanceActive}}
<syntaxhighlight lang="c++">void SetDynamicObjectAvoidanceActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDynamicObjectPlayerAvoidanceActive}}
<syntaxhighlight lang="c++">void SetDynamicObjectPlayerAvoidanceActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIdleAnimName}}
<syntaxhighlight lang="c++">void SetIdleAnimName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIdleExtraAnimActive}}
<syntaxhighlight lang="c++">void SetIdleExtraAnimActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetIdleExtraAnimName}}
<syntaxhighlight lang="c++">void SetIdleExtraAnimName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxBackwardSpeed}}
<syntaxhighlight lang="c++">void SetMaxBackwardSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxForwardSpeed}}
<syntaxhighlight lang="c++">void SetMaxForwardSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveSpeedAnimMul}}
<syntaxhighlight lang="c++">void SetMoveSpeedAnimMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRunAnimName}}
<syntaxhighlight lang="c++">void SetRunAnimName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRunToWalkSpeed}}
<syntaxhighlight lang="c++">void SetRunToWalkSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedMul}}
<syntaxhighlight lang="c++">void SetSpeedMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState}}
<syntaxhighlight lang="c++">void SetSpeedState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_Backward}}
<syntaxhighlight lang="c++">void SetSpeedState_Backward(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_Forward}}
<syntaxhighlight lang="c++">void SetSpeedState_Forward(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_ForwardAcc}}
<syntaxhighlight lang="c++">void SetSpeedState_ForwardAcc(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_ForwardDeacc}}
<syntaxhighlight lang="c++">void SetSpeedState_ForwardDeacc(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_SidewayAcc}}
<syntaxhighlight lang="c++">void SetSpeedState_SidewayAcc(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_SidewayDeacc}}
<syntaxhighlight lang="c++">void SetSpeedState_SidewayDeacc(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_Sideways}}
<syntaxhighlight lang="c++">void SetSpeedState_Sideways(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_TurnBreakMul}}
<syntaxhighlight lang="c++">void SetSpeedState_TurnBreakMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_TurnMaxSpeed}}
<syntaxhighlight lang="c++">void SetSpeedState_TurnMaxSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSpeedState_TurnSpeedMul}}
<syntaxhighlight lang="c++">void SetSpeedState_TurnSpeedMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStoppedToWalkSpeed}}
<syntaxhighlight lang="c++">void SetStoppedToWalkSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnBreakMul}}
<syntaxhighlight lang="c++">void SetTurnBreakMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnedToGoalCallbackFunc}}
<syntaxhighlight lang="c++">void SetTurnedToGoalCallbackFunc(const tString &in asFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFunc|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnMaxSpeed}}
<syntaxhighlight lang="c++">void SetTurnMaxSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnMinBreakAngle}}
<syntaxhighlight lang="c++">void SetTurnMinBreakAngle(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnSpeedMul}}
<syntaxhighlight lang="c++">void SetTurnSpeedMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnStoppedToWalkSpeed}}
<syntaxhighlight lang="c++">void SetTurnStoppedToWalkSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTurnWalkToStoppedSpeed}}
<syntaxhighlight lang="c++">void SetTurnWalkToStoppedSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupDynamicObjectAvoidance}}
<syntaxhighlight lang="c++">void SetupDynamicObjectAvoidance(float afMaxDistance,
                                 float afMinMass,
                                 float afSteerAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afMinMass|float|}}
{{CodeDocDetailParam|afSteerAmount|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupDynamicObjectPlayerAvoidance}}
<syntaxhighlight lang="c++">void SetupDynamicObjectPlayerAvoidance(float afMaxDistance,
                                       float afSteerAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|afSteerAmount|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupIdleExtra}}
<syntaxhighlight lang="c++">void SetupIdleExtra(const tString &in asAnimName,
                    float afMinWait,
                    float afMaxWait,
                    bool abPauseProceduralAnims)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asAnimName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinWait|float|}}
{{CodeDocDetailParam|afMaxWait|float|}}
{{CodeDocDetailParam|abPauseProceduralAnims|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupWallAvoidance}}
<syntaxhighlight lang="c++">void SetupWallAvoidance(float afRadius,
                        float afSteerAmount,
                        int alSamples)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|afSteerAmount|float|}}
{{CodeDocDetailParam|alSamples|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUse3DMovement}}
<syntaxhighlight lang="c++">void SetUse3DMovement(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUseMoveStateAnimations}}
<syntaxhighlight lang="c++">void SetUseMoveStateAnimations(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVerticalMoveSpeedExtraAnimMul}}
<syntaxhighlight lang="c++">void SetVerticalMoveSpeedExtraAnimMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWalkAnimName}}
<syntaxhighlight lang="c++">void SetWalkAnimName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWalkToRunSpeed}}
<syntaxhighlight lang="c++">void SetWalkToRunSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWalkToStoppedSpeed}}
<syntaxhighlight lang="c++">void SetWalkToStoppedSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWallAvoidanceActive}}
<syntaxhighlight lang="c++">void SetWallAvoidanceActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopTurning}}
<syntaxhighlight lang="c++">void StopTurning()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnInstantlyToAngle}}
<syntaxhighlight lang="c++">void TurnInstantlyToAngle(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnInstantlyToAngle}}
<syntaxhighlight lang="c++">void TurnInstantlyToAngle(float afYaw,
                          float afPitch)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afYaw|float|}}
{{CodeDocDetailParam|afPitch|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnInstantlyToPos}}
<syntaxhighlight lang="c++">void TurnInstantlyToPos(const cVector3f &in avGoalPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avGoalPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnToAngle}}
<syntaxhighlight lang="c++">void TurnToAngle(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnToAngles}}
<syntaxhighlight lang="c++">void TurnToAngles(float afYaw,
                  float afPitch)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afYaw|float|}}
{{CodeDocDetailParam|afPitch|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TurnToPos}}
<syntaxhighlight lang="c++">void TurnToPos(const cVector3f &in avFeetPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avFeetPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}