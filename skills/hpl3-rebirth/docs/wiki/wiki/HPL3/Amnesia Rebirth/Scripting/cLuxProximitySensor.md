{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxProximitySensor has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddState|AddState]](int alId, float afEnterDistance, float afLeaveDistance, bool abLineOfSightCheck, bool abPlayerDetectedCheck)|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetPlayerInsideState|GetPlayerInsideState]](int alId)|}}
{{CodeDocSummaryItem|bool|[[#GetStateActive|GetStateActive]](int alId)|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|void|[[#ResetAllStates|ResetAllStates]]()|}}
{{CodeDocSummaryItem|void|[[#ResetState|ResetState]](int alId)|}}
{{CodeDocSummaryItem|void|[[#SetStateActive|SetStateActive]](int alId, bool abX)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddState}}
<syntaxhighlight lang="c++">void AddState(int alId,
              float afEnterDistance,
              float afLeaveDistance,
              bool abLineOfSightCheck,
              bool abPlayerDetectedCheck)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afEnterDistance|float|}}
{{CodeDocDetailParam|afLeaveDistance|float|}}
{{CodeDocDetailParam|abLineOfSightCheck|bool|}}
{{CodeDocDetailParam|abPlayerDetectedCheck|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPlayerInsideState}}
<syntaxhighlight lang="c++">bool GetPlayerInsideState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateActive}}
<syntaxhighlight lang="c++">bool GetStateActive(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetAllStates}}
<syntaxhighlight lang="c++">void ResetAllStates()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetState}}
<syntaxhighlight lang="c++">void ResetState(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateActive}}
<syntaxhighlight lang="c++">void SetStateActive(int alId,
                    bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}