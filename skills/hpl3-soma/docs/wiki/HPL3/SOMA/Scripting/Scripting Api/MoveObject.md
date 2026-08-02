Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

''Note: The official documentation for these functions had a typo where it wrongly documented the use of 'afState' in the function.''

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
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of move object}}
{{CodeDocDetailParam|afState|float|the position of the door you want to set it to (between 0.0f and 1.0f).}}
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
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of move object}}
{{CodeDocDetailParam|afState|float|the position of the door you want to set it to (between 0.0f and 1.0f).}}
{{CodeDocDetailParam|afAcc|float|the acceleration of the movement}}
{{CodeDocDetailParam|afMaxSpeed|float|the max speed.}}
{{CodeDocDetailParam|afSlowdownDist|float|the distance from the state postion that it will start slowing to a halt.}}
{{CodeDocDetailParam|abResetSpeed|bool|if the previous speed should be reset.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}