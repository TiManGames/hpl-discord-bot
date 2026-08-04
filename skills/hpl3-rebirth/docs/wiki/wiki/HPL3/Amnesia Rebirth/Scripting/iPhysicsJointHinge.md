{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iPhysicsJointHinge has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#Break|Break]]()|}}
{{CodeDocSummaryItem|bool|[[#GetAllowPositionReset|GetAllowPositionReset]]()|}}
{{CodeDocSummaryItem|float|[[#GetAngle|GetAngle]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetAngularVelocity|GetAngularVelocity]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetChildBody|GetChildBody]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollideBodies|GetCollideBodies]]()|}}
{{CodeDocSummaryItem|float|[[#GetDistance|GetDistance]]()|}}
{{CodeDocSummaryItem|float|[[#GetForceSize|GetForceSize]]()|}}
{{CodeDocSummaryItem|[[../tID|tID]]|[[#GetID|GetID]]()|}}
{{CodeDocSummaryItem|bool|[[#GetLimitAutoSleep|GetLimitAutoSleep]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxAngle|GetMaxAngle]]()|}}
{{CodeDocSummaryItem|float|[[#GetMinAngle|GetMinAngle]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../iPhysicsBody|iPhysicsBody]]|[[#GetParentBody|GetParentBody]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPinDir|GetPinDir]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetPivotPoint|GetPivotPoint]]()|}}
{{CodeDocSummaryItem|bool|[[#GetStickyMaxLimit|GetStickyMaxLimit]]()|}}
{{CodeDocSummaryItem|bool|[[#GetStickyMinLimit|GetStickyMinLimit]]()|}}
{{CodeDocSummaryItem|float|[[#GetStiffness|GetStiffness]]()|}}
{{CodeDocSummaryItem|[[../ePhysicsJointType|ePhysicsJointType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetVelocity|GetVelocity]]()|}}
{{CodeDocSummaryItem|bool|[[#IsBreakable|IsBreakable]]()|}}
{{CodeDocSummaryItem|bool|[[#IsBroken|IsBroken]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveBody|RemoveBody]]([[../iPhysicsBody|iPhysicsBody@]] apBody)|}}
{{CodeDocSummaryItem|void|[[#SetAllowPositionReset|SetAllowPositionReset]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetBreakable|SetBreakable]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCollideBodies|SetCollideBodies]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetLimitAutoSleep|SetLimitAutoSleep]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxAngle|SetMaxAngle]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetMaxLimitSound|SetMaxLimitSound]](const [[../tString|tString]] &in asSound, float afMinSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetMinAngle|SetMinAngle]](float afAngle)|}}
{{CodeDocSummaryItem|void|[[#SetMinLimitSound|SetMinLimitSound]](const [[../tString|tString]] &in asSound, float afMinSpeed)|}}
{{CodeDocSummaryItem|void|[[#SetMinMoveSpeed|SetMinMoveSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveSound|SetMoveSound]]([[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetMoveSpeedType|SetMoveSpeedType]]([[../ePhysicsJointSpeed|ePhysicsJointSpeed]] aType)|}}
{{CodeDocSummaryItem|void|[[#SetStickyMaxLimit|SetStickyMaxLimit]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetStickyMinLimit|SetStickyMinLimit]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetStiffness|SetStiffness]](float afX)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|Break}}
<syntaxhighlight lang="c++">void Break()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAllowPositionReset}}
<syntaxhighlight lang="c++">bool GetAllowPositionReset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAngle}}
<syntaxhighlight lang="c++">float GetAngle()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAngularVelocity}}
<syntaxhighlight lang="c++">cVector3f GetAngularVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetChildBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollideBodies}}
<syntaxhighlight lang="c++">bool GetCollideBodies()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDistance}}
<syntaxhighlight lang="c++">float GetDistance()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetForceSize}}
<syntaxhighlight lang="c++">float GetForceSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetID}}
<syntaxhighlight lang="c++">tID GetID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tID|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLimitAutoSleep}}
<syntaxhighlight lang="c++">bool GetLimitAutoSleep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxAngle}}
<syntaxhighlight lang="c++">float GetMaxAngle()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMinAngle}}
<syntaxhighlight lang="c++">float GetMinAngle()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentBody}}
<syntaxhighlight lang="c++">iPhysicsBody@ GetParentBody()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iPhysicsBody@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPinDir}}
<syntaxhighlight lang="c++">const cVector3f& GetPinDir()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPivotPoint}}
<syntaxhighlight lang="c++">const cVector3f& GetPivotPoint()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStickyMaxLimit}}
<syntaxhighlight lang="c++">bool GetStickyMaxLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStickyMinLimit}}
<syntaxhighlight lang="c++">bool GetStickyMinLimit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStiffness}}
<syntaxhighlight lang="c++">float GetStiffness()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">ePhysicsJointType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|ePhysicsJointType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetVelocity}}
<syntaxhighlight lang="c++">cVector3f GetVelocity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsBreakable}}
<syntaxhighlight lang="c++">bool IsBreakable()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsBroken}}
<syntaxhighlight lang="c++">bool IsBroken()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveBody}}
<syntaxhighlight lang="c++">void RemoveBody(iPhysicsBody@ apBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAllowPositionReset}}
<syntaxhighlight lang="c++">void SetAllowPositionReset(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBreakable}}
<syntaxhighlight lang="c++">void SetBreakable(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollideBodies}}
<syntaxhighlight lang="c++">void SetCollideBodies(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetLimitAutoSleep}}
<syntaxhighlight lang="c++">void SetLimitAutoSleep(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxAngle}}
<syntaxhighlight lang="c++">void SetMaxAngle(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxLimitSound}}
<syntaxhighlight lang="c++">void SetMaxLimitSound(const tString &in asSound,
                      float afMinSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSound|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMinAngle}}
<syntaxhighlight lang="c++">void SetMinAngle(float afAngle)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMinLimitSound}}
<syntaxhighlight lang="c++">void SetMinLimitSound(const tString &in asSound,
                      float afMinSpeed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSound|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinSpeed|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMinMoveSpeed}}
<syntaxhighlight lang="c++">void SetMinMoveSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveSound}}
<syntaxhighlight lang="c++">void SetMoveSound(tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveSpeedType}}
<syntaxhighlight lang="c++">void SetMoveSpeedType(ePhysicsJointSpeed aType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../ePhysicsJointSpeed|ePhysicsJointSpeed]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStickyMaxLimit}}
<syntaxhighlight lang="c++">void SetStickyMaxLimit(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStickyMinLimit}}
<syntaxhighlight lang="c++">void SetStickyMinLimit(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStiffness}}
<syntaxhighlight lang="c++">void SetStiffness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}