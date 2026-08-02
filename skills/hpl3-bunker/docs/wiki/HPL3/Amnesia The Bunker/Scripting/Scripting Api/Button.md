{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Button_Blink|Button_Blink]](const [[../../tString|tString]] &in asName)|Makes the button blink in accordance to how it is set up in the ent file}}
{{CodeDocSummaryItem|bool|[[#Button_IsDisabled|Button_IsDisabled]](const [[../../tString|tString]] &in asName)|Checks if the button is disabled (will not light up or respond to presses)}}
{{CodeDocSummaryItem|bool|[[#Button_IsLocked|Button_IsLocked]](const [[../../tString|tString]] &in asName)|Checks if the button is locked}}
{{CodeDocSummaryItem|bool|[[#Button_IsSwitchedOn|Button_IsSwitchedOn]](const [[../../tString|tString]] &in asName)|Returns true if button is currently switched on}}
{{CodeDocSummaryItem|void|[[#Button_SetCanBeSwitchedOff|Button_SetCanBeSwitchedOff]](const [[../../tString|tString]] &in asName, bool abState)|Sets if the button can be switched off by the player or not}}
{{CodeDocSummaryItem|void|[[#Button_SetCanBeSwitchedOn|Button_SetCanBeSwitchedOn]](const [[../../tString|tString]] &in asName, bool abState)|Sets if the button can be switched on by the player or not}}
{{CodeDocSummaryItem|void|[[#Button_SetDisabled|Button_SetDisabled]](const [[../../tString|tString]] &in asName, bool abState, bool abUseEffects <nowiki>=</nowiki> true)|Sets the buttons disabled state}}
{{CodeDocSummaryItem|void|[[#Button_SetLocked|Button_SetLocked]](const [[../../tString|tString]] &in asName, bool abState, bool abUseEffects <nowiki>=</nowiki> true)|Sets the button's locked state}}
{{CodeDocSummaryItem|void|[[#Button_SetSwitchedOn|Button_SetSwitchedOn]](const [[../../tString|tString]] &in asName, bool abState, bool abEffects)|Switches a button on/off}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Button_Blink}}
<syntaxhighlight lang="c++">void Button_Blink(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Makes the button blink in accordance to how it is set up in the ent file.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_IsDisabled}}
<syntaxhighlight lang="c++">bool Button_IsDisabled(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the button is disabled (will not light up or respond to presses).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, true <nowiki>=</nowiki> disabled, false <nowiki>=</nowiki> enabled.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_IsLocked}}
<syntaxhighlight lang="c++">bool Button_IsLocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the button is locked.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, true <nowiki>=</nowiki> locked, false <nowiki>=</nowiki> unlocked.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_IsSwitchedOn}}
<syntaxhighlight lang="c++">bool Button_IsSwitchedOn(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns true if button is currently switched on.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|bool, if the button is switched on.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_SetCanBeSwitchedOff}}
<syntaxhighlight lang="c++">void Button_SetCanBeSwitchedOff(const tString &in asName,
                                bool abState)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the button can be switched off by the player or not}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abState|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_SetCanBeSwitchedOn}}
<syntaxhighlight lang="c++">void Button_SetCanBeSwitchedOn(const tString &in asName,
                               bool abState)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the button can be switched on by the player or not}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abState|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_SetDisabled}}
<syntaxhighlight lang="c++">void Button_SetDisabled(const tString &in asName,
                        bool abState,
                        bool abUseEffects = true)</syntaxhighlight>
{{CodeDocDetailBody|Sets the buttons disabled state}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abState|bool|}}
{{CodeDocDetailParam|abUseEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_SetLocked}}
<syntaxhighlight lang="c++">void Button_SetLocked(const tString &in asName,
                      bool abState,
                      bool abUseEffects = true)</syntaxhighlight>
{{CodeDocDetailBody|Sets the button's locked state}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abState|bool|}}
{{CodeDocDetailParam|abUseEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Button_SetSwitchedOn}}
<syntaxhighlight lang="c++">void Button_SetSwitchedOn(const tString &in asName,
                          bool abState,
                          bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Switches a button on/off.<br/>the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abState|bool|}}
{{CodeDocDetailParam|abEffects|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}