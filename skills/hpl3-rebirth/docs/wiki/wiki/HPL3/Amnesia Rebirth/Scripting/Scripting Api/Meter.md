{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Meter_SetShakeMul|Meter_SetShakeMul]](const [[../../tString|tString]] &in asName, float afShakeMul)|Sets the shake multiplier of the needle object in meter}}
{{CodeDocSummaryItem|void|[[#Meter_SetSpeedMul|Meter_SetSpeedMul]](const [[../../tString|tString]] &in asName, float afSpeedMul)|Sets the speed multiplier of the needle object in meter}}
{{CodeDocSummaryItem|void|[[#Meter_SetState|Meter_SetState]](const [[../../tString|tString]] &in asName, float afState, bool abFadeToState <nowiki>=</nowiki> true)|Sets the state of the needle object in meter}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Meter_SetShakeMul}}
<syntaxhighlight lang="c++">void Meter_SetShakeMul(const tString &in asName,
                       float afShakeMul)</syntaxhighlight>
{{CodeDocDetailBody|Sets the shake multiplier of the needle object in meter.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afShakeMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Meter_SetSpeedMul}}
<syntaxhighlight lang="c++">void Meter_SetSpeedMul(const tString &in asName,
                       float afSpeedMul)</syntaxhighlight>
{{CodeDocDetailBody|Sets the speed multiplier of the needle object in meter.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afSpeedMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Meter_SetState}}
<syntaxhighlight lang="c++">void Meter_SetState(const tString &in asName,
                    float afState,
                    bool abFadeToState = true)</syntaxhighlight>
{{CodeDocDetailBody|Sets the state of the needle object in meter. Which then makes the needle move to the specified state.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afState|float|}}
{{CodeDocDetailParam|abFadeToState|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}