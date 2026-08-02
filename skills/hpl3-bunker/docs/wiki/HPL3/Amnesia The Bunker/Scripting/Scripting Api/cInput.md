{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#cInput_BecameTriggered|cInput_BecameTriggered]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#cInput_BecameTriggered|cInput_BecameTriggered]](int alId)|}}
{{CodeDocSummaryItem|bool|[[#cInput_CheckForInput|cInput_CheckForInput]]()|}}
{{CodeDocSummaryItem|[[../../cAction|cAction]]|[[#cInput_CreateAction|cInput_CreateAction]](const [[../../tString|tString]] &in asName, int alId)|}}
{{CodeDocSummaryItem|void|[[#cInput_DestroyAction|cInput_DestroyAction]]([[../../cAction|cAction]] @apAction)|}}
{{CodeDocSummaryItem|bool|[[#cInput_DoubleTriggered|cInput_DoubleTriggered]](const [[../../tString|tString]] &in asName, float afLimit)|}}
{{CodeDocSummaryItem|bool|[[#cInput_DoubleTriggered|cInput_DoubleTriggered]](int alId, float afLimit)|}}
{{CodeDocSummaryItem|[[../../cAction|cAction]]|[[#cInput_GetAction|cInput_GetAction]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../../cAction|cAction]]|[[#cInput_GetAction|cInput_GetAction]](int alId)|}}
{{CodeDocSummaryItem|[[../../iEyeTracker|iEyeTracker]]|[[#cInput_GetEyeTracker|cInput_GetEyeTracker]]()|}}
{{CodeDocSummaryItem|[[../../iKeyboard|iKeyboard]]|[[#cInput_GetKeyboard|cInput_GetKeyboard]]()|}}
{{CodeDocSummaryItem|[[../../iMouse|iMouse]]|[[#cInput_GetMouse|cInput_GetMouse]]()|}}
{{CodeDocSummaryItem|[[../../iSubAction|iSubAction]]|[[#cInput_InputToSubAction|cInput_InputToSubAction]]()|}}
{{CodeDocSummaryItem|bool|[[#cInput_IsTriggered|cInput_IsTriggered]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#cInput_IsTriggered|cInput_IsTriggered]](int alId)|}}
{{CodeDocSummaryItem|void|[[#cInput_ResetActionsToCurrentState|cInput_ResetActionsToCurrentState]]()|}}
{{CodeDocSummaryItem|void|[[#cInput_Update|cInput_Update]](float afX)|}}
{{CodeDocSummaryItem|bool|[[#cInput_WasTriggered|cInput_WasTriggered]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#cInput_WasTriggered|cInput_WasTriggered]](int alId)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cInput_BecameTriggered}}
<syntaxhighlight lang="c++">bool cInput_BecameTriggered(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_BecameTriggered}}
<syntaxhighlight lang="c++">bool cInput_BecameTriggered(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_CheckForInput}}
<syntaxhighlight lang="c++">bool cInput_CheckForInput()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_CreateAction}}
<syntaxhighlight lang="c++">cAction@ cInput_CreateAction(const tString &in asName,
                             int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|cAction@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_DestroyAction}}
<syntaxhighlight lang="c++">void cInput_DestroyAction(cAction @apAction)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apAction|[[../../cAction|cAction]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_DoubleTriggered}}
<syntaxhighlight lang="c++">bool cInput_DoubleTriggered(const tString &in asName,
                            float afLimit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afLimit|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_DoubleTriggered}}
<syntaxhighlight lang="c++">bool cInput_DoubleTriggered(int alId,
                            float afLimit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|afLimit|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_GetAction}}
<syntaxhighlight lang="c++">cAction@ cInput_GetAction(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cAction@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_GetAction}}
<syntaxhighlight lang="c++">cAction@ cInput_GetAction(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|cAction@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_GetEyeTracker}}
<syntaxhighlight lang="c++">iEyeTracker@ cInput_GetEyeTracker()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iEyeTracker@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_GetKeyboard}}
<syntaxhighlight lang="c++">iKeyboard@ cInput_GetKeyboard()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iKeyboard@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_GetMouse}}
<syntaxhighlight lang="c++">iMouse@ cInput_GetMouse()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iMouse@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_InputToSubAction}}
<syntaxhighlight lang="c++">iSubAction@ cInput_InputToSubAction()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iSubAction@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_IsTriggered}}
<syntaxhighlight lang="c++">bool cInput_IsTriggered(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_IsTriggered}}
<syntaxhighlight lang="c++">bool cInput_IsTriggered(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_ResetActionsToCurrentState}}
<syntaxhighlight lang="c++">void cInput_ResetActionsToCurrentState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_Update}}
<syntaxhighlight lang="c++">void cInput_Update(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_WasTriggered}}
<syntaxhighlight lang="c++">bool cInput_WasTriggered(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cInput_WasTriggered}}
<syntaxhighlight lang="c++">bool cInput_WasTriggered(int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}