{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#LevelDoor_GetLocked|LevelDoor_GetLocked]](const [[../../tString|tString]] &in asName)|Gets the lock state of a level door}}
{{CodeDocSummaryItem|void|[[#LevelDoor_SetLocked|LevelDoor_SetLocked]](const [[../../tString|tString]] &in asName, bool abState)|Sets the lock state of a level door}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|LevelDoor_GetLocked}}
<syntaxhighlight lang="c++">bool LevelDoor_GetLocked(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the lock state of a level door}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of level door.}}
{{CodeDocDetailReturn|bool|true <nowiki>=</nowiki> locked - false <nowiki>=</nowiki> unlocked.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LevelDoor_SetLocked}}
<syntaxhighlight lang="c++">void LevelDoor_SetLocked(const tString &in asName,
                         bool abState)</syntaxhighlight>
{{CodeDocDetailBody|Sets the lock state of a level door}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of level door.}}
{{CodeDocDetailParam|abState|bool|true <nowiki>=</nowiki> locked - false <nowiki>=</nowiki> unlocked.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}