{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Light_FadeTo|Light_FadeTo]](const [[../../tString|tString]] &in asLightName, const [[../../cColor|cColor]] &in acColor, float afRadius, float afTime)|Fades one or more lights to a specified color and radius}}
{{CodeDocSummaryItem|float|[[#Light_GetBrightness|Light_GetBrightness]](const [[../../tString|tString]] &in asLightName)|Gets the brightness of a light}}
{{CodeDocSummaryItem|void|[[#Light_SetBrightness|Light_SetBrightness]](const [[../../tString|tString]] &in asLightName, float afBrightness)|Sets the brightness of one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetCastShadows|Light_SetCastShadows]](const [[../../tString|tString]] &in asLightName, bool abX)|Sets the casts shadow}}
{{CodeDocSummaryItem|void|[[#Light_SetCheapGobo|Light_SetCheapGobo]](const [[../../tString|tString]] &in asLightName, bool abX)|Sets if a cheaper version of gobo rendering should be used}}
{{CodeDocSummaryItem|void|[[#Light_SetFlickerActive|Light_SetFlickerActive]](const [[../../tString|tString]] &in asLightName, bool abX)|Activates or deactivates the flicker of one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetShadowBiasMul|Light_SetShadowBiasMul]](const [[../../tString|tString]] &in asLightName, float afBias, float afSlopeBias)|Sets the shadow bias for one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetVisible|Light_SetVisible]](const [[../../tString|tString]] &in asLightName, bool abVisible)|Sets the visibility of one or more lights}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Light_FadeTo}}
<syntaxhighlight lang="c++">void Light_FadeTo(const tString &in asLightName,
                  const cColor &in acColor,
                  float afRadius,
                  float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fades one or more lights to a specified color and radius.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|acColor|[[../../cColor|cColor]]|color to fade to.}}
{{CodeDocDetailParam|afRadius|float|radius to fade to, if lower than 0, the current radius will be used.}}
{{CodeDocDetailParam|afTime|float|time to fade over.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_GetBrightness}}
<syntaxhighlight lang="c++">float Light_GetBrightness(const tString &in asLightName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the brightness of a light}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light.}}
{{CodeDocDetailReturn|float|the brightness of the light}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetBrightness}}
<syntaxhighlight lang="c++">void Light_SetBrightness(const tString &in asLightName,
                         float afBrightness)</syntaxhighlight>
{{CodeDocDetailBody|Sets the brightness of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|afBrightness|float|the brightness to set.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetCastShadows}}
<syntaxhighlight lang="c++">void Light_SetCastShadows(const tString &in asLightName,
                          bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the casts shadow. Used only by spotlights (for now).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of the light. Can contain wildcards.}}
{{CodeDocDetailParam|abX|bool|if light should cast shadows.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetCheapGobo}}
<syntaxhighlight lang="c++">void Light_SetCheapGobo(const tString &in asLightName,
                        bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a cheaper version of gobo rendering should be used}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|abX|bool|if cheap version should be used, off by default}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetFlickerActive}}
<syntaxhighlight lang="c++">void Light_SetFlickerActive(const tString &in asLightName,
                            bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates the flicker of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|abX|bool|if flicker should be active.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetShadowBiasMul}}
<syntaxhighlight lang="c++">void Light_SetShadowBiasMul(const tString &in asLightName,
                            float afBias,
                            float afSlopeBias)</syntaxhighlight>
{{CodeDocDetailBody|Sets the shadow bias for one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|afBias|float|bias mul}}
{{CodeDocDetailParam|afSlopeBias|float|slope bias mul}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetVisible}}
<syntaxhighlight lang="c++">void Light_SetVisible(const tString &in asLightName,
                      bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|Sets the visibility of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|name of light. Can contain wildcards.}}
{{CodeDocDetailParam|abVisible|bool|if light should be visible.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}