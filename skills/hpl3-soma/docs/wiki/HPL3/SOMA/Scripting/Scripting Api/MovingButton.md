{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#MovingButton_Blink|MovingButton_Blink]](const [[../../tString|tString]] &in asName)|Makes the MovingButton blink in accordance to how it is set up in the ent file}}
{{CodeDocSummaryItem|float|[[#MovingButton_GetStateAmount|MovingButton_GetStateAmount]](const [[../../tString|tString]] &in asName)|Returns the current state of the MovingButton}}
{{CodeDocSummaryItem|bool|[[#MovingButton_IsDisabled|MovingButton_IsDisabled]](const [[../../tString|tString]] &in asName)|Checks if the MovingButton is disabled (will not light up or respond to presses)}}
{{CodeDocSummaryItem|bool|[[#MovingButton_IsLocked|MovingButton_IsLocked]](const [[../../tString|tString]] &in asName)|Checks if the MovingButton is locked}}
{{CodeDocSummaryItem|bool|[[#MovingButton_IsSwitchedOn|MovingButton_IsSwitchedOn]](const [[../../tString|tString]] &in asName)|Returns the state of the button, on/off}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetCanBeSwitchedOff|MovingButton_SetCanBeSwitchedOff]](const [[../../tString|tString]] &in asName, bool abState)|Sets if the moving button can be switched off by the player or not}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetCanBeSwitchedOn|MovingButton_SetCanBeSwitchedOn]](const [[../../tString|tString]] &in asName, bool abState)|Sets if the moving button can be switched on by the player or not}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetDisabled|MovingButton_SetDisabled]](const [[../../tString|tString]] &in asName, bool abState, bool abUseEffects <nowiki>=</nowiki> true)|Sets the MovingButtons disabled state}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetLocked|MovingButton_SetLocked]](const [[../../tString|tString]] &in asName, bool abState, bool abUseEffects <nowiki>=</nowiki> true)|Sets the MovingButtons locked state}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetReturnToOffTime|MovingButton_SetReturnToOffTime]](const [[../../tString|tString]] &in asName, float afTime)|Sets the time it should take for the button to return to its off state}}
{{CodeDocSummaryItem|void|[[#MovingButton_SetSwitchedOn|MovingButton_SetSwitchedOn]](const [[../../tString|tString]] &in asName, bool abState, bool abEffects)|Switches a button on/off}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|MovingButton_Blink}}
<syntaxhighlight lang="c++">void MovingButton_Blink(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Makes the MovingButton blink in accordance to how it is set up in the ent file.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_GetStateAmount}}
<syntaxhighlight lang="c++">float MovingButton_GetStateAmount(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the current state of the MovingButton}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_IsDisabled}}
<syntaxhighlight lang="c++">bool MovingButton_IsDisabled(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the MovingButton is disabled (will not light up or respond to presses).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailReturn|bool|true <nowiki>=</nowiki> disabled, false <nowiki>=</nowiki> enabled.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_IsLocked}}
<syntaxhighlight lang="c++">bool MovingButton_IsLocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the MovingButton is locked.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailReturn|bool|true <nowiki>=</nowiki> locked, false <nowiki>=</nowiki> unlocked.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_IsSwitchedOn}}
<syntaxhighlight lang="c++">bool MovingButton_IsSwitchedOn(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the state of the button, on/off.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of button.}}
{{CodeDocDetailReturn|bool|true <nowiki>=</nowiki> on - false <nowiki>=</nowiki> off.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetCanBeSwitchedOff}}
<syntaxhighlight lang="c++">void MovingButton_SetCanBeSwitchedOff(const tString &in asName,
                                      bool abState)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the moving button can be switched off by the player or not}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of button.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> can be switched off - false <nowiki>=</nowiki> can't be switched off.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetCanBeSwitchedOn}}
<syntaxhighlight lang="c++">void MovingButton_SetCanBeSwitchedOn(const tString &in asName,
                                     bool abState)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the moving button can be switched on by the player or not}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of button.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> can be switched on - false <nowiki>=</nowiki> can't be switched on.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetDisabled}}
<syntaxhighlight lang="c++">void MovingButton_SetDisabled(const tString &in asName,
                              bool abState,
                              bool abUseEffects = true)</syntaxhighlight>
{{CodeDocDetailBody|Sets the MovingButtons disabled state}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> disabled, false <nowiki>=</nowiki> not disabled}}
{{CodeDocDetailParam|abUseEffects|bool|if color should fade in or be set instantly.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetLocked}}
<syntaxhighlight lang="c++">void MovingButton_SetLocked(const tString &in asName,
                            bool abState,
                            bool abUseEffects = true)</syntaxhighlight>
{{CodeDocDetailBody|Sets the MovingButtons locked state}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of MovingButton.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> locked, false <nowiki>=</nowiki> unlocked.}}
{{CodeDocDetailParam|abUseEffects|bool|if color should fade in or be set instantly.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetReturnToOffTime}}
<syntaxhighlight lang="c++">void MovingButton_SetReturnToOffTime(const tString &in asName,
                                     float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Sets the time it should take for the button to return to its off state.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of button.}}
{{CodeDocDetailParam|afTime|float|time to return to off state.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MovingButton_SetSwitchedOn}}
<syntaxhighlight lang="c++">void MovingButton_SetSwitchedOn(const tString &in asName,
                                bool abState,
                                bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Switches a button on/off.<br/>the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of button.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> on - false <nowiki>=</nowiki> off.}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it. If false,}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}