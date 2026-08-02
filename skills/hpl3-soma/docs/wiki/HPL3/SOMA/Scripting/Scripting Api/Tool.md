{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#Tool_GetHandAnimationSuffix|Tool_GetHandAnimationSuffix]](const [[../../tString|tString]] &in asName)|Returns the hand animation prefix specified for the tool}}
{{CodeDocSummaryItem|void|[[#Tool_PickUp|Tool_PickUp]](const [[../../tString|tString]] &in asName, bool abEquipTool, bool abCallback)|Adds the specified tool to the player's inventory}}
{{CodeDocSummaryItem|void|[[#Tool_SetAutoHideAfterPickup|Tool_SetAutoHideAfterPickup]](const [[../../tString|tString]] &in asName, bool abX)|Sets if a tool should be hidden automatically after getting picked up and being displayed for a brief moment}}
{{CodeDocSummaryItem|void|[[#Tool_SetHighlightActive|Tool_SetHighlightActive]](const [[../../tString|tString]] &in asName, bool abX)|Sets if a tool should have the highlight effect when looked at}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Tool_GetHandAnimationSuffix}}
<syntaxhighlight lang="c++">tString Tool_GetHandAnimationSuffix(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the hand animation prefix specified for the tool.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|the name of the tool entity.}}
{{CodeDocDetailReturn|tString|the tool's hand animation prefix.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Tool_PickUp}}
<syntaxhighlight lang="c++">void Tool_PickUp(const tString &in asName,
                 bool abEquipTool,
                 bool abCallback)</syntaxhighlight>
{{CodeDocDetailBody|Adds the specified tool to the player's inventory. Similar to calling the entity interact on the tool entity, but with more control.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|the name of the tool entity to pickup.}}
{{CodeDocDetailParam|abEquipTool|bool|if the tool should be equipped immediately. If the tool has AutoHide active it will still autohide after a while.}}
{{CodeDocDetailParam|abCallback|bool|if the tool's pickup callback should be executed.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Tool_SetAutoHideAfterPickup}}
<syntaxhighlight lang="c++">void Tool_SetAutoHideAfterPickup(const tString &in asName,
                                 bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a tool should be hidden automatically after getting picked up and being displayed for a brief moment}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the tool}}
{{CodeDocDetailParam|abX|bool|if it should autohide}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Tool_SetHighlightActive}}
<syntaxhighlight lang="c++">void Tool_SetHighlightActive(const tString &in asName,
                             bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a tool should have the highlight effect when looked at.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the tool}}
{{CodeDocDetailParam|abX|bool|if it shoudl get highlighted}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}