{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Joint_Break|Joint_Break]](const [[../../tString|tString]] &in asJointName)|Breaks the specified joint}}
{{CodeDocSummaryItem|float|[[#Joint_GetForceSize|Joint_GetForceSize]](const [[../../tString|tString]] &in asJointName)|Gets the force magnitude applied to the specified joint}}
{{CodeDocSummaryItem|bool|[[#Joint_IsBroken|Joint_IsBroken]](const [[../../tString|tString]] &in asJointName)|Checks if the specified joint is broken}}
{{CodeDocSummaryItem|void|[[#Joint_SetBreakable|Joint_SetBreakable]](const [[../../tString|tString]] &in asJointName, bool abBreakable)|Sets if the joint should be breakable by force or not}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Joint_Break}}
<syntaxhighlight lang="c++">void Joint_Break(const tString &in asJointName)</syntaxhighlight>
{{CodeDocDetailBody|Breaks the specified joint.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asJointName|[[../../tString|tString]]|name of the joint.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Joint_GetForceSize}}
<syntaxhighlight lang="c++">float Joint_GetForceSize(const tString &in asJointName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the force magnitude applied to the specified joint.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asJointName|[[../../tString|tString]]|name of the joint.}}
{{CodeDocDetailReturn|float|force size}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Joint_IsBroken}}
<syntaxhighlight lang="c++">bool Joint_IsBroken(const tString &in asJointName)</syntaxhighlight>
{{CodeDocDetailBody|Checks if the specified joint is broken.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asJointName|[[../../tString|tString]]|name of the joint.}}
{{CodeDocDetailReturn|bool|true if the joint is broken.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Joint_SetBreakable}}
<syntaxhighlight lang="c++">void Joint_SetBreakable(const tString &in asJointName,
                        bool abBreakable)</syntaxhighlight>
{{CodeDocDetailBody|Sets if the joint should be breakable by force or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asJointName|[[../../tString|tString]]|name of the joint.}}
{{CodeDocDetailParam|abBreakable|bool|true if the joint should be breakable, false if it shouldn't.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}