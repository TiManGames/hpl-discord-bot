{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Billboard_SetBrightness|Billboard_SetBrightness]](const [[../../tString|tString]] &in asBillboardName, float afBrightness)|Sets the brightness of a billboard}}
{{CodeDocSummaryItem|void|[[#Billboard_SetRangeMax|Billboard_SetRangeMax]](const [[../../tString|tString]] &in asBillboardName, float afRangeStart, float afRangeEnd)|Sets the max range of a billboard, getting far away will cause the billboard to fade out}}
{{CodeDocSummaryItem|void|[[#Billboard_SetRangeMin|Billboard_SetRangeMin]](const [[../../tString|tString]] &in asBillboardName, float afRangeStart, float afRangeEnd)|Sets the minimum range of a billboard, getting closer will cause the billboard to fade out}}
{{CodeDocSummaryItem|void|[[#Billboard_SetReflectionVisibility|Billboard_SetReflectionVisibility]](const [[../../tString|tString]] &in asBillboardName, bool abVisibleInReflection, bool abVisibleInWorld)|Sets whether the billboard is drawn in reflections or not, and the real world or not}}
{{CodeDocSummaryItem|void|[[#Billboard_SetVisible|Billboard_SetVisible]](const [[../../tString|tString]] &in asBillboardName, bool abVisible)|Sets if a billboard should be rendered or not}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Billboard_SetBrightness}}
<syntaxhighlight lang="c++">void Billboard_SetBrightness(const tString &in asBillboardName,
                             float afBrightness)</syntaxhighlight>
{{CodeDocDetailBody|Sets the brightness of a billboard}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|name of billboard. Can contain wildcards.}}
{{CodeDocDetailParam|afBrightness|float|new brightness}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetRangeMax}}
<syntaxhighlight lang="c++">void Billboard_SetRangeMax(const tString &in asBillboardName,
                           float afRangeStart,
                           float afRangeEnd)</syntaxhighlight>
{{CodeDocDetailBody|Sets the max range of a billboard, getting far away will cause the billboard to fade out}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|name of billboard. Can contain wildcards.}}
{{CodeDocDetailParam|afRangeStart|float|distance the object should start to fade, -1 <nowiki>=</nowiki> no fade}}
{{CodeDocDetailParam|afRangeEnd|float|distance the object fade is complete, -1 <nowiki>=</nowiki> no fade}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetRangeMin}}
<syntaxhighlight lang="c++">void Billboard_SetRangeMin(const tString &in asBillboardName,
                           float afRangeStart,
                           float afRangeEnd)</syntaxhighlight>
{{CodeDocDetailBody|Sets the minimum range of a billboard, getting closer will cause the billboard to fade out}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|name of billboard. Can contain wildcards.}}
{{CodeDocDetailParam|afRangeStart|float|distance the object should start to fade, -1 <nowiki>=</nowiki> no fade}}
{{CodeDocDetailParam|afRangeEnd|float|distance the object fade is complete, -1 <nowiki>=</nowiki> no fade}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetReflectionVisibility}}
<syntaxhighlight lang="c++">void Billboard_SetReflectionVisibility(const tString &in asBillboardName,
                                       bool abVisibleInReflection,
                                       bool abVisibleInWorld)</syntaxhighlight>
{{CodeDocDetailBody|Sets whether the billboard is drawn in reflections or not, and the real world or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|name of billboard. Can contain wildcards.}}
{{CodeDocDetailParam|abVisibleInReflection|bool|whether the entity is drawn in reflections}}
{{CodeDocDetailParam|abVisibleInWorld|bool|whether the entity is drawn in the real world}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Billboard_SetVisible}}
<syntaxhighlight lang="c++">void Billboard_SetVisible(const tString &in asBillboardName,
                          bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a billboard should be rendered or not.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asBillboardName|[[../../tString|tString]]|name of billboard. Can contain wildcards.}}
{{CodeDocDetailParam|abVisible|bool|if the billboard should be visible or not.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}