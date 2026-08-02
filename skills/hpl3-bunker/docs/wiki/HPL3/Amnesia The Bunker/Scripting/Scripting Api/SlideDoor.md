{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|float|[[#SlideDoor_GetOpenAmount|SlideDoor_GetOpenAmount]](const [[../../tString|tString]] &in asName)|Gets the open amount of a SlideDoor, 0 being completely closed and 1 being completely open}}
{{CodeDocSummaryItem|void|[[#SlideDoor_SetClosed|SlideDoor_SetClosed]](const [[../../tString|tString]] &in asName, bool abClosed, bool abInstant <nowiki>=</nowiki> false)|Sets the close state of a SlideDoor}}
{{CodeDocSummaryItem|void|[[#SlideDoor_SetOpenableByAgent|SlideDoor_SetOpenableByAgent]](const [[../../tString|tString]] &in asName, bool abX)|Sets if the agents should be able to open the slide door}}
{{CodeDocSummaryItem|void|[[#SlideDoor_SetOpenAmount|SlideDoor_SetOpenAmount]](const [[../../tString|tString]] &in asName, float afOpenAmount, bool abInstant <nowiki>=</nowiki> false)|Moves a SlideDoor to a specific open amount}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|SlideDoor_GetOpenAmount}}
<syntaxhighlight lang="c++">float SlideDoor_GetOpenAmount(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the open amount of a SlideDoor, 0 being completely closed and 1 being completely open.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|float, open amount of the door.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SlideDoor_SetClosed}}
<syntaxhighlight lang="c++">void SlideDoor_SetClosed(const tString &in asName,
                         bool abClosed,
                         bool abInstant = false)</syntaxhighlight>
{{CodeDocDetailBody|Sets the close state of a SlideDoor. Simplified version of SlideDoor_SetOpenAmount.<br/>new position set instantly.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abClosed|bool|}}
{{CodeDocDetailParam|abInstant|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SlideDoor_SetOpenableByAgent}}
<syntaxhighlight lang="c++">void SlideDoor_SetOpenableByAgent(const tString &in asName,
                                  bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the agents should be able to open the slide door.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SlideDoor_SetOpenAmount}}
<syntaxhighlight lang="c++">void SlideDoor_SetOpenAmount(const tString &in asName,
                             float afOpenAmount,
                             bool abInstant = false)</syntaxhighlight>
{{CodeDocDetailBody|Moves a SlideDoor to a specific open amount.<br/>new position set instantly.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afOpenAmount|float|}}
{{CodeDocDetailParam|abInstant|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}