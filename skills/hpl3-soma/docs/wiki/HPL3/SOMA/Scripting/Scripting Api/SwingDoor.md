{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#SwingDoor_AddDoorBodyImpulse|SwingDoor_AddDoorBodyImpulse]](const [[../../tString|tString]] &in asName, float afImpulseAmount)|}}
{{CodeDocSummaryItem|bool|[[#SwingDoor_GetBlocked|SwingDoor_GetBlocked]](const [[../../tString|tString]] &in asName)|Checks if door is blocked}}
{{CodeDocSummaryItem|bool|[[#SwingDoor_GetClosed|SwingDoor_GetClosed]](const [[../../tString|tString]] &in asName)|Checks if door is closed}}
{{CodeDocSummaryItem|bool|[[#SwingDoor_GetLocked|SwingDoor_GetLocked]](const [[../../tString|tString]] &in asName)|Checks if door is locked}}
{{CodeDocSummaryItem|float|[[#SwingDoor_GetOpenAmount|SwingDoor_GetOpenAmount]](const [[../../tString|tString]] &in asName)|Get open amount of a door}}
{{CodeDocSummaryItem|int|[[#SwingDoor_GetState|SwingDoor_GetState]](const [[../../tString|tString]] &in asName)|Checks the state of the door}}
{{CodeDocSummaryItem|void|[[#SwingDoor_SetBlocked|SwingDoor_SetBlocked]](const [[../../tString|tString]] &in asName, bool abBlocked, bool abEffects)|Blocks or unblocks a SwingDoor}}
{{CodeDocSummaryItem|void|[[#SwingDoor_SetClosed|SwingDoor_SetClosed]](const [[../../tString|tString]] &in asName, bool abClosed, bool abEffects)|Sets the close state of a SwingDoor}}
{{CodeDocSummaryItem|void|[[#SwingDoor_SetDisableAutoClose|SwingDoor_SetDisableAutoClose]](const [[../../tString|tString]] &in asName, bool abDisableAutoClose)|Disables or enables the automatic close functionality of a door}}
{{CodeDocSummaryItem|void|[[#SwingDoor_SetLocked|SwingDoor_SetLocked]](const [[../../tString|tString]] &in asName, bool abLocked, bool abEffects)|Locks or unlocks a SwingDoor}}
{{CodeDocSummaryItem|void|[[#SwingDoor_SetOpenAmount|SwingDoor_SetOpenAmount]](const [[../../tString|tString]] &in asName, float afOpenAmount)|Sets the door to a specific open state instantly}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|SwingDoor_AddDoorBodyImpulse}}
<syntaxhighlight lang="c++">void SwingDoor_AddDoorBodyImpulse(const tString &in asName,
                                  float afImpulseAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afImpulseAmount|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_GetBlocked}}
<syntaxhighlight lang="c++">bool SwingDoor_GetBlocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if door is blocked.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|bool|true if the door is blocked.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_GetClosed}}
<syntaxhighlight lang="c++">bool SwingDoor_GetClosed(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if door is closed.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|bool|true if the door is closed.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_GetLocked}}
<syntaxhighlight lang="c++">bool SwingDoor_GetLocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if door is locked.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|bool|true if the door is locked.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_GetOpenAmount}}
<syntaxhighlight lang="c++">float SwingDoor_GetOpenAmount(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get open amount of a door}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|float|open amount of door}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_GetState}}
<syntaxhighlight lang="c++">int SwingDoor_GetState(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Checks the state of the door.<br/>0 <nowiki>=</nowiki> inbetween -1 and 1.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|int|-1 <nowiki>=</nowiki> angle is close to 0, 1 <nowiki>=</nowiki> angle is 70% or higher of max,}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_SetBlocked}}
<syntaxhighlight lang="c++">void SwingDoor_SetBlocked(const tString &in asName,
                          bool abBlocked,
                          bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Blocks or unblocks a SwingDoor. A blocked door can still be opened slightly.<br/>If false, the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door, wildcards (*) supported.}}
{{CodeDocDetailParam|abBlocked|bool|true <nowiki>=</nowiki> block door, false <nowiki>=</nowiki> unblock door.}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_SetClosed}}
<syntaxhighlight lang="c++">void SwingDoor_SetClosed(const tString &in asName,
                         bool abClosed,
                         bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Sets the close state of a SwingDoor.<br/>If false, the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door, wildcards (*) supported.}}
{{CodeDocDetailParam|abClosed|bool|true <nowiki>=</nowiki> close - false <nowiki>=</nowiki> open}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_SetDisableAutoClose}}
<syntaxhighlight lang="c++">void SwingDoor_SetDisableAutoClose(const tString &in asName,
                                   bool abDisableAutoClose)</syntaxhighlight>
{{CodeDocDetailBody|Disables or enables the automatic close functionality of a door.<br/>If enabled, the door will not lose any force pushing it toward its closed position.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door, wildcards (*) supported.}}
{{CodeDocDetailParam|abDisableAutoClose|bool|true <nowiki>=</nowiki> disable - false <nowiki>=</nowiki> enable}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_SetLocked}}
<syntaxhighlight lang="c++">void SwingDoor_SetLocked(const tString &in asName,
                         bool abLocked,
                         bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Locks or unlocks a SwingDoor<br/>If false, the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door, wildcards (*) supported.}}
{{CodeDocDetailParam|abLocked|bool|true <nowiki>=</nowiki> lock door, false <nowiki>=</nowiki> unlock door.}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SwingDoor_SetOpenAmount}}
<syntaxhighlight lang="c++">void SwingDoor_SetOpenAmount(const tString &in asName,
                             float afOpenAmount)</syntaxhighlight>
{{CodeDocDetailBody|Sets the door to a specific open state instantly.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door, wildcards (*) supported.}}
{{CodeDocDetailParam|afOpenAmount|float|0 <nowiki>=</nowiki> closed, 1 <nowiki>=</nowiki> completely open.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}