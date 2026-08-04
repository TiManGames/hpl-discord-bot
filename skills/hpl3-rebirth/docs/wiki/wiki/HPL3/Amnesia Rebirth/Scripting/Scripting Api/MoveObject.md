{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#MoveObject_SetState|MoveObject_SetState]](const [[../../tString|tString]] &in asName, float afState)|Sets the state of the move object}}
{{CodeDocSummaryItem|void|[[#MoveObject_SetStateExt|MoveObject_SetStateExt]](const [[../../tString|tString]] &in asName, float afState, float afAcc, float afMaxSpeed, float afSlowdownDist, bool abResetSpeed)|Sets the state of the move object}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|MoveObject_SetState}}
<syntaxhighlight lang="c++">void MoveObject_SetState(const tString &in asName,
                         float afState)</syntaxhighlight>
{{CodeDocDetailBody|Sets the state of the move object. This makes it move to a certain postion between<br/>min or max pos (or outside of that is <0 or >1).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afState|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveObject_SetStateExt}}
<syntaxhighlight lang="c++">void MoveObject_SetStateExt(const tString &in asName,
                            float afState,
                            float afAcc,
                            float afMaxSpeed,
                            float afSlowdownDist,
                            bool abResetSpeed)</syntaxhighlight>
{{CodeDocDetailBody|Sets the state of the move object. This makes it move to a certain postion between<br/>min or max pos (or outside of that is <0 or >1).<br/>This will also set the speeed and acc at which the movement occurs.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afState|float|}}
{{CodeDocDetailParam|afAcc|float|}}
{{CodeDocDetailParam|afMaxSpeed|float|}}
{{CodeDocDetailParam|afSlowdownDist|float|}}
{{CodeDocDetailParam|abResetSpeed|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}