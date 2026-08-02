{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iPhysicsCloth has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#ApplyForceToParticles|ApplyForceToParticles]](const [[../cVector3f|cVector3f]] &in avForce, [[../cVerletParticle|cVerletParticle@]] apBaseParticle, const [[../cVector3f|cVector3f]] &in avOffset <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#AttachToLine|AttachToLine]]([[../cVector3f|cVector3f]] avStart, [[../cVector3f|cVector3f]] avEnd, int alRow, int alColumnStride, bool abFixedPositions <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|bool|[[#GetActive|GetActive]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetClothSize|GetClothSize]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCollide|GetCollide]]()|}}
{{CodeDocSummaryItem|float|[[#GetDamping|GetDamping]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetGravityForce|GetGravityForce]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cVerletParticle|cVerletParticle]]|[[#GetParticle|GetParticle]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetParticleNum|GetParticleNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetParticleRadius|GetParticleRadius]]()|}}
{{CodeDocSummaryItem|float|[[#GetSlideAmount|GetSlideAmount]]()|}}
{{CodeDocSummaryItem|int|[[#GetUniqueID|GetUniqueID]]()|}}
{{CodeDocSummaryItem|int|[[#GetUpdateCount|GetUpdateCount]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetWindForce|GetWindForce]]()|}}
{{CodeDocSummaryItem|void|[[#IncUpdateCount|IncUpdateCount]]()|}}
{{CodeDocSummaryItem|void|[[#RemoveAttachedBody|RemoveAttachedBody]]([[../iPhysicsBody|iPhysicsBody@]] apBody, bool abRemoveContainerFromBody)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCollide|SetCollide]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDamping|SetDamping]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetGravityForce|SetGravityForce]](const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetParticleRadius|SetParticleRadius]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetSleeping|SetSleeping]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetSleepParamters|SetSleepParamters]](float afSleepCheckInterval, float afSleepCheckDistance, int alSleepCountMax)|}}
{{CodeDocSummaryItem|void|[[#SetSlideAmount|SetSlideAmount]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetWindForce|SetWindForce]](const [[../cVector3f|cVector3f]] avWindForce)|}}
{{CodeDocSummaryItem|void|[[#UpdateLengthConstraint|UpdateLengthConstraint]]([[../cVerletParticle|cVerletParticle@]] apP1, [[../cVerletParticle|cVerletParticle@]] apP2, float afLength)|}}
{{CodeDocSummaryItem|void|[[#UpdateLengthConstraint|UpdateLengthConstraint]]([[../cVerletParticle|cVerletParticle@]] apP1, [[../cVerletParticle|cVerletParticle@]] apP2, float afLength, float afStiffness)|}}
{{CodeDocSummaryItem|void|[[#UpdateLengthConstraint|UpdateLengthConstraint]]([[../cVerletParticle|cVerletParticle@]] apP1, [[../cVerletParticle|cVerletParticle@]] apP2, float afMinLength, float afMaxLength, float afStiffness)|}}
{{CodeDocSummaryItem|void|[[#UpdateLengthConstraintStretch|UpdateLengthConstraintStretch]]([[../cVerletParticle|cVerletParticle@]] apP1, [[../cVerletParticle|cVerletParticle@]] apP2, float afLength, float afStiffness)|}}
{{CodeDocSummaryItem|void|[[#UpdateParticleCollisionConstraint|UpdateParticleCollisionConstraint]]([[../cVerletParticle|cVerletParticle@]] apPart, const [[../cVector3f|cVector3f]] &in avPrevPos, float afRadius)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|ApplyForceToParticles}}
<syntaxhighlight lang="c++">void ApplyForceToParticles(const cVector3f &in avForce,
                           cVerletParticle@ apBaseParticle,
                           const cVector3f &in avOffset = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|apBaseParticle|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachToLine}}
<syntaxhighlight lang="c++">void AttachToLine(cVector3f avStart,
                  cVector3f avEnd,
                  int alRow,
                  int alColumnStride,
                  bool abFixedPositions = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|alRow|int|}}
{{CodeDocDetailParam|alColumnStride|int|}}
{{CodeDocDetailParam|abFixedPositions|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActive}}
<syntaxhighlight lang="c++">bool GetActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClothSize}}
<syntaxhighlight lang="c++">cVector2f GetClothSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCollide}}
<syntaxhighlight lang="c++">bool GetCollide()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDamping}}
<syntaxhighlight lang="c++">float GetDamping()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGravityForce}}
<syntaxhighlight lang="c++">const cVector3f& GetGravityForce()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParticle}}
<syntaxhighlight lang="c++">cVerletParticle@ GetParticle(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cVerletParticle@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParticleNum}}
<syntaxhighlight lang="c++">int GetParticleNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParticleRadius}}
<syntaxhighlight lang="c++">float GetParticleRadius()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSlideAmount}}
<syntaxhighlight lang="c++">float GetSlideAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUniqueID}}
<syntaxhighlight lang="c++">int GetUniqueID()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUpdateCount}}
<syntaxhighlight lang="c++">int GetUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWindForce}}
<syntaxhighlight lang="c++">cVector3f GetWindForce()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncUpdateCount}}
<syntaxhighlight lang="c++">void IncUpdateCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveAttachedBody}}
<syntaxhighlight lang="c++">void RemoveAttachedBody(iPhysicsBody@ apBody,
                        bool abRemoveContainerFromBody)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apBody|[[../iPhysicsBody|iPhysicsBody@]]|}}
{{CodeDocDetailParam|abRemoveContainerFromBody|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCollide}}
<syntaxhighlight lang="c++">void SetCollide(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDamping}}
<syntaxhighlight lang="c++">void SetDamping(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGravityForce}}
<syntaxhighlight lang="c++">void SetGravityForce(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParticleRadius}}
<syntaxhighlight lang="c++">void SetParticleRadius(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSleeping}}
<syntaxhighlight lang="c++">void SetSleeping(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSleepParamters}}
<syntaxhighlight lang="c++">void SetSleepParamters(float afSleepCheckInterval,
                       float afSleepCheckDistance,
                       int alSleepCountMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSleepCheckInterval|float|}}
{{CodeDocDetailParam|afSleepCheckDistance|float|}}
{{CodeDocDetailParam|alSleepCountMax|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSlideAmount}}
<syntaxhighlight lang="c++">void SetSlideAmount(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetWindForce}}
<syntaxhighlight lang="c++">void SetWindForce(const cVector3f avWindForce)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avWindForce|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLengthConstraint}}
<syntaxhighlight lang="c++">void UpdateLengthConstraint(cVerletParticle@ apP1,
                            cVerletParticle@ apP2,
                            float afLength)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apP1|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|apP2|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLengthConstraint}}
<syntaxhighlight lang="c++">void UpdateLengthConstraint(cVerletParticle@ apP1,
                            cVerletParticle@ apP2,
                            float afLength,
                            float afStiffness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apP1|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|apP2|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailParam|afStiffness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLengthConstraint}}
<syntaxhighlight lang="c++">void UpdateLengthConstraint(cVerletParticle@ apP1,
                            cVerletParticle@ apP2,
                            float afMinLength,
                            float afMaxLength,
                            float afStiffness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apP1|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|apP2|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|afMinLength|float|}}
{{CodeDocDetailParam|afMaxLength|float|}}
{{CodeDocDetailParam|afStiffness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateLengthConstraintStretch}}
<syntaxhighlight lang="c++">void UpdateLengthConstraintStretch(cVerletParticle@ apP1,
                                   cVerletParticle@ apP2,
                                   float afLength,
                                   float afStiffness)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apP1|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|apP2|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|afLength|float|}}
{{CodeDocDetailParam|afStiffness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UpdateParticleCollisionConstraint}}
<syntaxhighlight lang="c++">void UpdateParticleCollisionConstraint(cVerletParticle@ apPart,
                                       const cVector3f &in avPrevPos,
                                       float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apPart|[[../cVerletParticle|cVerletParticle@]]|}}
{{CodeDocDetailParam|avPrevPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}