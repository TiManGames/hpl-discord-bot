{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#IrradianceSet_FadeIn|IrradianceSet_FadeIn]](const [[../../tString|tString]] &in asSet, float afTime)|Fades in the specified set on all probes belonging to it}}
{{CodeDocSummaryItem|void|[[#IrradianceSet_FadeInSingleProbe|IrradianceSet_FadeInSingleProbe]](const [[../../tString|tString]] &in asProbe, const [[../../tString|tString]] &in asSet, float afTime)|Fades in the specified set on a specific probe}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|IrradianceSet_FadeIn}}
<syntaxhighlight lang="c++">void IrradianceSet_FadeIn(const tString &in asSet,
                          float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fades in the specified set on all probes belonging to it. This also fades out the currently active set for these probes.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSet|[[../../tString|tString]]|set to fade in.}}
{{CodeDocDetailParam|afTime|float|how long it should take until the fade is done.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IrradianceSet_FadeInSingleProbe}}
<syntaxhighlight lang="c++">void IrradianceSet_FadeInSingleProbe(const tString &in asProbe,
                                     const tString &in asSet,
                                     float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fades in the specified set on a specific probe. This also fades out the currently active set for these probes.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asProbe|[[../../tString|tString]]|the probe to fade in the set on. Wildcards (*) supported.}}
{{CodeDocDetailParam|asSet|[[../../tString|tString]]|set to fade in.}}
{{CodeDocDetailParam|afTime|float|how long it should take until the fade is done.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}