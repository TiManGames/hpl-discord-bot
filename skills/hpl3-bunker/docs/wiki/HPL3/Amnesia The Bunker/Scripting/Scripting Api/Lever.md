{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|int|[[#Lever_GetState|Lever_GetState]](const [[../../tString|tString]] &in asName)|Gets the state of the lever}}
{{CodeDocSummaryItem|void|[[#Lever_SetAutoMoveEnabled|Lever_SetAutoMoveEnabled]](const [[../../tString|tString]] &in asName, bool abAutoMove)|Enables or disables the auto move property of the lever}}
{{CodeDocSummaryItem|void|[[#Lever_SetAutoMoveTarget|Lever_SetAutoMoveTarget]](const [[../../tString|tString]] &in asName, int alTarget)|Sets the auto move target of the lever}}
{{CodeDocSummaryItem|void|[[#Lever_SetInteractionDisablesStuck|Lever_SetInteractionDisablesStuck]](const [[../../tString|tString]] &in asName, bool abX)|Sets if player interaction will disable the stuck state of a lever}}
{{CodeDocSummaryItem|void|[[#Lever_SetStuckState|Lever_SetStuckState]](const [[../../tString|tString]] &in asName, int alState, bool abEffects)|Sets the stuck state of a lever}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Lever_GetState}}
<syntaxhighlight lang="c++">int Lever_GetState(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the state of the lever}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|int|int, -1 <nowiki>=</nowiki> min, 0 <nowiki>=</nowiki> middle, 1 <nowiki>=</nowiki> max}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lever_SetAutoMoveEnabled}}
<syntaxhighlight lang="c++">void Lever_SetAutoMoveEnabled(const tString &in asName,
                              bool abAutoMove)</syntaxhighlight>
{{CodeDocDetailBody|Enables or disables the auto move property of the lever.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAutoMove|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lever_SetAutoMoveTarget}}
<syntaxhighlight lang="c++">void Lever_SetAutoMoveTarget(const tString &in asName,
                             int alTarget)</syntaxhighlight>
{{CodeDocDetailBody|Sets the auto move target of the lever.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alTarget|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lever_SetInteractionDisablesStuck}}
<syntaxhighlight lang="c++">void Lever_SetInteractionDisablesStuck(const tString &in asName,
                                       bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if player interaction will disable the stuck state of a lever.<br/>effect on stuck state.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lever_SetStuckState}}
<syntaxhighlight lang="c++">void Lever_SetStuckState(const tString &in asName,
                         int alState,
                         bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Sets the stuck state of a lever.<br/>the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alState|int|}}
{{CodeDocDetailParam|abEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}