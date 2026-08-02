{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxHandPlacement has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#FadeIn|FadeIn]](float afTime)|}}
{{CodeDocSummaryItem|void|[[#FadeOut|FadeOut]](float afTime)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|[[../cMatrixf|cMatrixf]]|[[#GetPreMatrix|GetPreMatrix]]([[../eLuxHand|eLuxHand]] aHand, int alBone)|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|bool|[[#IsActive|IsActive]]()|}}
{{CodeDocSummaryItem|void|[[#LoadFromVariables|LoadFromVariables]]([[../cResourceVarsObject|cResourceVarsObject@]] apVars)|}}
{{CodeDocSummaryItem|void|[[#RemoveTarget|RemoveTarget]]([[../eLuxHand|eLuxHand]] aHand)|}}
{{CodeDocSummaryItem|void|[[#SetActive|SetActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFade|SetFade]]([[../eLuxHand|eLuxHand]] aHand, float afFade)|}}
{{CodeDocSummaryItem|void|[[#SetMaxTargetDistance|SetMaxTargetDistance]]([[../eLuxHand|eLuxHand]] aHand, float afValue)|}}
{{CodeDocSummaryItem|void|[[#SetTarget|SetTarget]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetTarget|SetTarget]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector3f|cVector3f]] &in avNormal)|}}
{{CodeDocSummaryItem|void|[[#SetTargetCapsule|SetTargetCapsule]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd, float afRadius)|}}
{{CodeDocSummaryItem|void|[[#SetTargetEntity|SetTargetEntity]]([[../eLuxHand|eLuxHand]] aHand, const [[../tString|tString]] &in asEntity)|}}
{{CodeDocSummaryItem|void|[[#SetTargetLine|SetTargetLine]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd)|}}
{{CodeDocSummaryItem|void|[[#SetTargetLine|SetTargetLine]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avEnd, const [[../cVector3f|cVector3f]] &in avNormal)|}}
{{CodeDocSummaryItem|void|[[#SetTargetPlane|SetTargetPlane]]([[../eLuxHand|eLuxHand]] aHand, const [[../cPlanef|cPlanef]] &in avPlane)|}}
{{CodeDocSummaryItem|void|[[#SetTargetSphere|SetTargetSphere]]([[../eLuxHand|eLuxHand]] aHand, const [[../cVector3f|cVector3f]] &in avPos, float afRadius)|}}
{{CodeDocSummaryBottom}}

==Details==
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

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPreMatrix}}
<syntaxhighlight lang="c++">cMatrixf GetPreMatrix(eLuxHand aHand,
                      int alBone)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|alBone|int|}}
{{CodeDocDetailReturn|cMatrixf|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsActive}}
<syntaxhighlight lang="c++">bool IsActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadFromVariables}}
<syntaxhighlight lang="c++">void LoadFromVariables(cResourceVarsObject@ apVars)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apVars|[[../cResourceVarsObject|cResourceVarsObject@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveTarget}}
<syntaxhighlight lang="c++">void RemoveTarget(eLuxHand aHand)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetActive}}
<syntaxhighlight lang="c++">void SetActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFade}}
<syntaxhighlight lang="c++">void SetFade(eLuxHand aHand,
             float afFade)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|afFade|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxTargetDistance}}
<syntaxhighlight lang="c++">void SetMaxTargetDistance(eLuxHand aHand,
                          float afValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|afValue|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTarget}}
<syntaxhighlight lang="c++">void SetTarget(eLuxHand aHand,
               const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTarget}}
<syntaxhighlight lang="c++">void SetTarget(eLuxHand aHand,
               const cVector3f &in avPos,
               const cVector3f &in avNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avNormal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetCapsule}}
<syntaxhighlight lang="c++">void SetTargetCapsule(eLuxHand aHand,
                      const cVector3f &in avStart,
                      const cVector3f &in avEnd,
                      float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetEntity}}
<syntaxhighlight lang="c++">void SetTargetEntity(eLuxHand aHand,
                     const tString &in asEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|asEntity|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetLine}}
<syntaxhighlight lang="c++">void SetTargetLine(eLuxHand aHand,
                   const cVector3f &in avStart,
                   const cVector3f &in avEnd)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetLine}}
<syntaxhighlight lang="c++">void SetTargetLine(eLuxHand aHand,
                   const cVector3f &in avStart,
                   const cVector3f &in avEnd,
                   const cVector3f &in avNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avNormal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetPlane}}
<syntaxhighlight lang="c++">void SetTargetPlane(eLuxHand aHand,
                    const cPlanef &in avPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avPlane|[[../cPlanef|cPlanef]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTargetSphere}}
<syntaxhighlight lang="c++">void SetTargetSphere(eLuxHand aHand,
                     const cVector3f &in avPos,
                     float afRadius)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aHand|[[../eLuxHand|eLuxHand]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}