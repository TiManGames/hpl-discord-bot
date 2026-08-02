{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Slide_AutoMoveTo|Slide_AutoMoveTo]](const [[../../tString|tString]] &in asName, float afAmount)|Auto moves the slide prop to a specific amount?}}
{{CodeDocSummaryItem|bool|[[#Slide_GetLocked|Slide_GetLocked]](const [[../../tString|tString]] &in asName)|Get if the slide prop is locked}}
{{CodeDocSummaryItem|float|[[#Slide_GetSlideAmount|Slide_GetSlideAmount]](const [[../../tString|tString]] &in asName)|Gets the slide amount of a Slide prop, 0 being at it' min position and 1 being at its max}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#Slide_GetSlideVel|Slide_GetSlideVel]](const [[../../tString|tString]] &in asName)|Gets the velocity of the slide joint}}
{{CodeDocSummaryItem|void|[[#Slide_SetLocked|Slide_SetLocked]](const [[../../tString|tString]] &in asName, bool abLocked, bool abEffects)|Locks/Unlocks a slide prop}}
{{CodeDocSummaryItem|void|[[#Slide_SetSlideAmount|Slide_SetSlideAmount]](const [[../../tString|tString]] &in asName, float afAmount)|Sets the slide amount of a Slide prop, 0 being at it' min position and 1 being at its max}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Slide_AutoMoveTo}}
<syntaxhighlight lang="c++">void Slide_AutoMoveTo(const tString &in asName,
                      float afAmount)</syntaxhighlight>
{{CodeDocDetailBody|Auto moves the slide prop to a specific amount?}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAmount|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Slide_GetLocked}}
<syntaxhighlight lang="c++">bool Slide_GetLocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get if the slide prop is locked.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Slide_GetSlideAmount}}
<syntaxhighlight lang="c++">float Slide_GetSlideAmount(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the slide amount of a Slide prop, 0 being at it' min position and 1 being at its max.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|float, the slide amount.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Slide_GetSlideVel}}
<syntaxhighlight lang="c++">cVector3f Slide_GetSlideVel(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the velocity of the slide joint.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cVector3f|cVector3f, the vel of the slide joint.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Slide_SetLocked}}
<syntaxhighlight lang="c++">void Slide_SetLocked(const tString &in asName,
                     bool abLocked,
                     bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Locks/Unlocks a slide prop.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abLocked|bool|}}
{{CodeDocDetailParam|abEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Slide_SetSlideAmount}}
<syntaxhighlight lang="c++">void Slide_SetSlideAmount(const tString &in asName,
                          float afAmount)</syntaxhighlight>
{{CodeDocDetailBody|Sets the slide amount of a Slide prop, 0 being at it' min position and 1 being at its max.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afAmount|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}