{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|float|[[#Wheel_GetCurrentAngle|Wheel_GetCurrentAngle]](const [[../../tString|tString]] &in asName)|Gets the angle of a wheel}}
{{CodeDocSummaryItem|int|[[#Wheel_GetState|Wheel_GetState]](const [[../../tString|tString]] &in asName)|Gets the state of the wheel}}
{{CodeDocSummaryItem|void|[[#Wheel_SetAngle|Wheel_SetAngle]](const [[../../tString|tString]] &in asName, float afAngle, bool abAutoMove)|Sets the angle of a wheel}}
{{CodeDocSummaryItem|void|[[#Wheel_SetInteractionDisablesStuck|Wheel_SetInteractionDisablesStuck]](const [[../../tString|tString]] &in asName, bool abX)|Sets if player interaction will disable the stuck state of a wheel}}
{{CodeDocSummaryItem|void|[[#Wheel_SetStuckState|Wheel_SetStuckState]](const [[../../tString|tString]] &in asName, int alState, bool abEffects)|Sets the stuck state of a wheel}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Wheel_GetCurrentAngle}}
<syntaxhighlight lang="c++">float Wheel_GetCurrentAngle(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the angle of a wheel.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of wheel.}}
{{CodeDocDetailReturn|float|angle in radians}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Wheel_GetState}}
<syntaxhighlight lang="c++">int Wheel_GetState(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the state of the wheel}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of wheel.}}
{{CodeDocDetailReturn|int|-1 <nowiki>=</nowiki> min, 0 <nowiki>=</nowiki> middle, 1 <nowiki>=</nowiki> max}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Wheel_SetAngle}}
<syntaxhighlight lang="c++">void Wheel_SetAngle(const tString &in asName,
                    float afAngle,
                    bool abAutoMove)</syntaxhighlight>
{{CodeDocDetailBody|Sets the angle of a wheel.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of wheel.}}
{{CodeDocDetailParam|afAngle|float|angle to set in radians.}}
{{CodeDocDetailParam|abAutoMove|bool|if the wheel should move to the angle automatically.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Wheel_SetInteractionDisablesStuck}}
<syntaxhighlight lang="c++">void Wheel_SetInteractionDisablesStuck(const tString &in asName,
                                       bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if player interaction will disable the stuck state of a wheel.<br/>effect on stuck state.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of wheel.}}
{{CodeDocDetailParam|abX|bool|true <nowiki>=</nowiki> interaction disables stuck state - false <nowiki>=</nowiki> interaction has no}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Wheel_SetStuckState}}
<syntaxhighlight lang="c++">void Wheel_SetStuckState(const tString &in asName,
                         int alState,
                         bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Sets the stuck state of a wheel.<br/>the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of wheel.}}
{{CodeDocDetailParam|alState|int|stuck state where -1 <nowiki>=</nowiki> stuck at min, 1 <nowiki>=</nowiki> stuck at max and 0 <nowiki>=</nowiki> not stuck.}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it. If false,}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}