{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#PhysicsSlideDoor_AutoMoveToState|PhysicsSlideDoor_AutoMoveToState]](const [[../../tString|tString]] &in asName, int alState)|Automove physics slide door to a state}}
{{CodeDocSummaryItem|bool|[[#PhysicsSlideDoor_GetClosed|PhysicsSlideDoor_GetClosed]](const [[../../tString|tString]] &in asName)|Returns true if door is closed}}
{{CodeDocSummaryItem|float|[[#PhysicsSlideDoor_GetOpenAmount|PhysicsSlideDoor_GetOpenAmount]](const [[../../tString|tString]] &in asName)|Returns the open amount of the door}}
{{CodeDocSummaryItem|void|[[#PhysicsSlideDoor_SetLocked|PhysicsSlideDoor_SetLocked]](const [[../../tString|tString]] &in asName, bool abLocked, bool abEffects)|Sets the physics slide door as locked or unlocked}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|PhysicsSlideDoor_AutoMoveToState}}
<syntaxhighlight lang="c++">void PhysicsSlideDoor_AutoMoveToState(const tString &in asName,
                                      int alState)</syntaxhighlight>
{{CodeDocDetailBody|Automove physics slide door to a state.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailParam|alState|int|-1<nowiki>=</nowiki>closed, 1<nowiki>=</nowiki> open}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PhysicsSlideDoor_GetClosed}}
<syntaxhighlight lang="c++">bool PhysicsSlideDoor_GetClosed(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns true if door is closed.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PhysicsSlideDoor_GetOpenAmount}}
<syntaxhighlight lang="c++">float PhysicsSlideDoor_GetOpenAmount(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the open amount of the door}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PhysicsSlideDoor_SetLocked}}
<syntaxhighlight lang="c++">void PhysicsSlideDoor_SetLocked(const tString &in asName,
                                bool abLocked,
                                bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Sets the physics slide door as locked or unlocked}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the door.}}
{{CodeDocDetailParam|abLocked|bool|true <nowiki>=</nowiki> lock the door - false <nowiki>=</nowiki> unlock the door}}
{{CodeDocDetailParam|abEffects|bool|true <nowiki>=</nowiki> use effects - false <nowiki>=</nowiki> do not use effects.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}