{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cAction has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddGamepadAxis|AddGamepadAxis]](int alPadIndex, [[../eGamepadAxis|eGamepadAxis]] aAxis, [[../eGamepadAxisRange|eGamepadAxisRange]] aRange, float afMinThreshold, float afMaxThreshold)|}}
{{CodeDocSummaryItem|void|[[#AddGamepadButton|AddGamepadButton]](int alPadIndex, [[../eGamepadButton|eGamepadButton]] aButton)|}}
{{CodeDocSummaryItem|void|[[#AddGamepadHat|AddGamepadHat]](int alPadIndex, [[../eGamepadHat|eGamepadHat]] aHat, [[../eGamepadHatState|eGamepadHatState]] aHatState)|}}
{{CodeDocSummaryItem|void|[[#AddKey|AddKey]]([[../eKey|eKey]] aKey)|}}
{{CodeDocSummaryItem|void|[[#AddMouseButton|AddMouseButton]]([[../eMouseButton|eMouseButton]] aButton)|}}
{{CodeDocSummaryItem|void|[[#AddSubAction|AddSubAction]]([[../iSubAction|iSubAction@]] apSubAction)|}}
{{CodeDocSummaryItem|bool|[[#BecameTriggered|BecameTriggered]]()|}}
{{CodeDocSummaryItem|void|[[#ClearSubActions|ClearSubActions]]()|}}
{{CodeDocSummaryItem|bool|[[#DoubleTriggered|DoubleTriggered]](float afLimit)|}}
{{CodeDocSummaryItem|int|[[#GetId|GetId]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../iSubAction|iSubAction]]|[[#GetSubAction|GetSubAction]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetSubActionNum|GetSubActionNum]]()|}}
{{CodeDocSummaryItem|bool|[[#IsTriggered|IsTriggered]]()|}}
{{CodeDocSummaryItem|void|[[#ResetToCurrentState|ResetToCurrentState]]()|}}
{{CodeDocSummaryItem|bool|[[#WasTriggered|WasTriggered]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddGamepadAxis}}
<syntaxhighlight lang="c++">void AddGamepadAxis(int alPadIndex,
                    eGamepadAxis aAxis,
                    eGamepadAxisRange aRange,
                    float afMinThreshold,
                    float afMaxThreshold)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alPadIndex|int|}}
{{CodeDocDetailParam|aAxis|[[../eGamepadAxis|eGamepadAxis]]|}}
{{CodeDocDetailParam|aRange|[[../eGamepadAxisRange|eGamepadAxisRange]]|}}
{{CodeDocDetailParam|afMinThreshold|float|}}
{{CodeDocDetailParam|afMaxThreshold|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddGamepadButton}}
<syntaxhighlight lang="c++">void AddGamepadButton(int alPadIndex,
                      eGamepadButton aButton)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alPadIndex|int|}}
{{CodeDocDetailParam|aButton|[[../eGamepadButton|eGamepadButton]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddGamepadHat}}
<syntaxhighlight lang="c++">void AddGamepadHat(int alPadIndex,
                   eGamepadHat aHat,
                   eGamepadHatState aHatState)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alPadIndex|int|}}
{{CodeDocDetailParam|aHat|[[../eGamepadHat|eGamepadHat]]|}}
{{CodeDocDetailParam|aHatState|[[../eGamepadHatState|eGamepadHatState]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddKey}}
<syntaxhighlight lang="c++">void AddKey(eKey aKey)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aKey|[[../eKey|eKey]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddMouseButton}}
<syntaxhighlight lang="c++">void AddMouseButton(eMouseButton aButton)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aButton|[[../eMouseButton|eMouseButton]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddSubAction}}
<syntaxhighlight lang="c++">void AddSubAction(iSubAction@ apSubAction)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apSubAction|[[../iSubAction|iSubAction@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|BecameTriggered}}
<syntaxhighlight lang="c++">bool BecameTriggered()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearSubActions}}
<syntaxhighlight lang="c++">void ClearSubActions()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoubleTriggered}}
<syntaxhighlight lang="c++">bool DoubleTriggered(float afLimit)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afLimit|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetId}}
<syntaxhighlight lang="c++">int GetId()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubAction}}
<syntaxhighlight lang="c++">iSubAction@ GetSubAction(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|iSubAction@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSubActionNum}}
<syntaxhighlight lang="c++">int GetSubActionNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsTriggered}}
<syntaxhighlight lang="c++">bool IsTriggered()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetToCurrentState}}
<syntaxhighlight lang="c++">void ResetToCurrentState()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|WasTriggered}}
<syntaxhighlight lang="c++">bool WasTriggered()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}