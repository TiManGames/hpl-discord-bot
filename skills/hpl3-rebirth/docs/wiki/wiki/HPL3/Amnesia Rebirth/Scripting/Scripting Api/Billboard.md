{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Billboard_SetBrightness|Billboard_SetBrightness]](const [[../../tString|tString]] &in asBillboardName, float afBrightness)|Sets the brightness of a billboard}}
{{CodeDocSummaryItem|void|[[#Billboard_SetRangeMax|Billboard_SetRangeMax]](const [[../../tString|tString]] &in asBillboardName, float afRangeStart, float afRangeEnd)|Sets the max range of a billboard, getting far away will cause the billboard to fade out}}
{{CodeDocSummaryItem|void|[[#Billboard_SetRangeMin|Billboard_SetRangeMin]](const [[../../tString|tString]] &in asBillboardName, float afRangeStart, float afRangeEnd)|Sets the minimum range of a billboard, getting closer will cause the billboard to fade out}}
{{CodeDocSummaryItem|void|[[#Billboard_SetReflectionVisibility|Billboard_SetReflectionVisibility]](const [[../../tString|tString]] &in asBillboardName, bool abVisibleInReflection, bool abVisibleInWorld)|Sets whether the billboard is drawn in reflections or not, and the real world or not}}
{{CodeDocSummaryItem|void|[[#Billboard_SetRenderLayer|Billboard_SetRenderLayer]](const [[../../tString|tString]] &in asBillboardName, int alLayer)|Sets the layer to render the billboard on}}
{{CodeDocSummaryItem|void|[[#Billboard_SetVisible|Billboard_SetVisible]](const [[../../tString|tString]] &in asBillboardName, bool abVisible)|Sets if a billboard should be rendered or not}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Billboard_SetBrightness}}
<syntaxhighlight lang="c++">void Billboard_SetBrightness(const tString &in asBillboardName,
                             float afBrightness)</syntaxhighlight>
{{CodeDocDetailBody|Sets the brightness of a billboard}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetRangeMax}}
<syntaxhighlight lang="c++">void Billboard_SetRangeMax(const tString &in asBillboardName,
                           float afRangeStart,
                           float afRangeEnd)</syntaxhighlight>
{{CodeDocDetailBody|Sets the max range of a billboard, getting far away will cause the billboard to fade out}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afRangeStart|float|}}
{{CodeDocDetailParam|afRangeEnd|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetRangeMin}}
<syntaxhighlight lang="c++">void Billboard_SetRangeMin(const tString &in asBillboardName,
                           float afRangeStart,
                           float afRangeEnd)</syntaxhighlight>
{{CodeDocDetailBody|Sets the minimum range of a billboard, getting closer will cause the billboard to fade out}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afRangeStart|float|}}
{{CodeDocDetailParam|afRangeEnd|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetReflectionVisibility}}
<syntaxhighlight lang="c++">void Billboard_SetReflectionVisibility(const tString &in asBillboardName,
                                       bool abVisibleInReflection,
                                       bool abVisibleInWorld)</syntaxhighlight>
{{CodeDocDetailBody|Sets whether the billboard is drawn in reflections or not, and the real world or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVisibleInReflection|bool|}}
{{CodeDocDetailParam|abVisibleInWorld|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetRenderLayer}}
<syntaxhighlight lang="c++">void Billboard_SetRenderLayer(const tString &in asBillboardName,
                              int alLayer)</syntaxhighlight>
{{CodeDocDetailBody|Sets the layer to render the billboard on}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alLayer|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetVisible}}
<syntaxhighlight lang="c++">void Billboard_SetVisible(const tString &in asBillboardName,
                          bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a billboard should be rendered or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVisible|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}