{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxAttackDamage has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddType|AddType]](int alId, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|int|[[#GetTypeInstanceID|GetTypeInstanceID]](int alId)|}}
{{CodeDocSummaryItem|void|[[#SetDamage|SetDamage]](int alId, float afMinDamage, float afMaxDamage, bool abLethalToPlayer)|}}
{{CodeDocSummaryItem|void|[[#SetType_AddShapeAtSocket|SetType_AddShapeAtSocket]](const [[../tString|tString]] &in asSocketName, const [[../cVector3f|cVector3f]] &in avOffset, float afRadius)|}}
{{CodeDocSummaryItem|void|[[#SetType_AddShapeFromCenter|SetType_AddShapeFromCenter]](const [[../cVector3f|cVector3f]] &in avOffset, float afRadius)|}}
{{CodeDocSummaryItem|void|[[#SetType_Affects|SetType_Affects]](bool abProps, bool abAgents, bool abPlayer)|}}
{{CodeDocSummaryItem|void|[[#SetType_Damage|SetType_Damage]](float afMinDamage, float afMaxDamage <nowiki>=</nowiki> -1, bool abLethalToPlayer <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#SetType_DamageType|SetType_DamageType]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetType_Force|SetType_Force]](float afForce, float afMaxImpulse)|}}
{{CodeDocSummaryItem|void|[[#SetType_HitSpeed|SetType_HitSpeed]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetType_Strength|SetType_Strength]](int alX)|}}
{{CodeDocSummaryItem|void|[[#Start|Start]](int alId, float afDuration, float afDamageCheckFreq <nowiki>=</nowiki> 8.0f)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](int alId)|}}
{{CodeDocSummaryItem|void|[[#StopAll|StopAll]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddType}}
<syntaxhighlight lang="c++">void AddType(int alId,
             const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTypeInstanceID}}
<syntaxhighlight lang="c++">int GetTypeInstanceID(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDamage}}
<syntaxhighlight lang="c++">void SetDamage(int alId,
               float afMinDamage,
               float afMaxDamage,
               bool abLethalToPlayer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afMinDamage|float|}}
{{CodeDocDetailParam|afMaxDamage|float|}}
{{CodeDocDetailParam|abLethalToPlayer|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_AddShapeAtSocket}}
<syntaxhighlight lang="c++">void SetType_AddShapeAtSocket(const tString &in asSocketName,
                              const cVector3f &in avOffset,
                              float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSocketName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_AddShapeFromCenter}}
<syntaxhighlight lang="c++">void SetType_AddShapeFromCenter(const cVector3f &in avOffset,
                                float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_Affects}}
<syntaxhighlight lang="c++">void SetType_Affects(bool abProps,
                     bool abAgents,
                     bool abPlayer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abProps|bool|}}
{{CodeDocDetailParam|abAgents|bool|}}
{{CodeDocDetailParam|abPlayer|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_Damage}}
<syntaxhighlight lang="c++">void SetType_Damage(float afMinDamage,
                    float afMaxDamage = -1,
                    bool abLethalToPlayer = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMinDamage|float|}}
{{CodeDocDetailParam|afMaxDamage|float|}}
{{CodeDocDetailParam|abLethalToPlayer|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_DamageType}}
<syntaxhighlight lang="c++">void SetType_DamageType(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_Force}}
<syntaxhighlight lang="c++">void SetType_Force(float afForce,
                   float afMaxImpulse)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afForce|float|}}
{{CodeDocDetailParam|afMaxImpulse|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_HitSpeed}}
<syntaxhighlight lang="c++">void SetType_HitSpeed(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetType_Strength}}
<syntaxhighlight lang="c++">void SetType_Strength(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Start}}
<syntaxhighlight lang="c++">void Start(int alId,
           float afDuration,
           float afDamageCheckFreq = 8.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afDuration|float|}}
{{CodeDocDetailParam|afDamageCheckFreq|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopAll}}
<syntaxhighlight lang="c++">void StopAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}