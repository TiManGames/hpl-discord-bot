{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Light_FadeBrightnessTo|Light_FadeBrightnessTo]](const [[../../tString|tString]] &in asLightName, float afBrightness, float afTime, [[../../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear)|Fades the brightness of one or more lights to a specified value}}
{{CodeDocSummaryItem|void|[[#Light_FadeBrightnessToDefault|Light_FadeBrightnessToDefault]](const [[../../tString|tString]] &in asLightName, float afTime, [[../../eEasing|eEasing]] aEasing <nowiki>=</nowiki> eEasing_Linear)|Fades the brightness of one or more lights to a the default value}}
{{CodeDocSummaryItem|void|[[#Light_FadeTo|Light_FadeTo]](const [[../../tString|tString]] &in asLightName, const [[../../cColor|cColor]] &in acColor, float afRadius, float afTime)|Fades one or more lights to a specified color and radius}}
{{CodeDocSummaryItem|float|[[#Light_GetBrightness|Light_GetBrightness]](const [[../../tString|tString]] &in asLightName)|Gets the brightness of a light}}
{{CodeDocSummaryItem|float|[[#Light_GetDefaultBrightness|Light_GetDefaultBrightness]](const [[../../tString|tString]] &in asLightName)|Returns the default brightness of a light}}
{{CodeDocSummaryItem|void|[[#Light_SetBrightness|Light_SetBrightness]](const [[../../tString|tString]] &in asLightName, float afBrightness)|Sets the brightness of one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetCastShadows|Light_SetCastShadows]](const [[../../tString|tString]] &in asLightName, bool abX)|Sets the casts shadow}}
{{CodeDocSummaryItem|void|[[#Light_SetCheapGobo|Light_SetCheapGobo]](const [[../../tString|tString]] &in asLightName, bool abX)|Sets if a cheaper version of gobo rendering should be used}}
{{CodeDocSummaryItem|void|[[#Light_SetFlickerActive|Light_SetFlickerActive]](const [[../../tString|tString]] &in asLightName, bool abX)|Activates or deactivates the flicker of one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetShadowBiasMul|Light_SetShadowBiasMul]](const [[../../tString|tString]] &in asLightName, float afBias, float afSlopeBias)|Sets the shadow bias for one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetupFlicker|Light_SetupFlicker]](const [[../../tString|tString]] &in asLightName, const [[../../cColor|cColor]] &in aOffCol, float afOffRadius, float afOnMinLength, float afOnMaxLength, const [[../../tString|tString]] &in asOnSound, const [[../../tString|tString]] &in asOnPS, float afOffMinLength, float afOffMaxLength, const [[../../tString|tString]] &in asOffSound, const [[../../tString|tString]] &in asOffPS, bool abFade, float afOnFadeMinLength, float afOnFadeMaxLength, float afOffFadeMinLength, float afOffFadeMaxLength)|Set up the flicker of one or more lights}}
{{CodeDocSummaryItem|void|[[#Light_SetVisible|Light_SetVisible]](const [[../../tString|tString]] &in asLightName, bool abVisible)|Sets the visibility of one or more lights}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Light_FadeBrightnessTo}}
<syntaxhighlight lang="c++">void Light_FadeBrightnessTo(const tString &in asLightName,
                            float afBrightness,
                            float afTime,
                            eEasing aEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|Fades the brightness of one or more lights to a specified value.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aEasing|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_FadeBrightnessToDefault}}
<syntaxhighlight lang="c++">void Light_FadeBrightnessToDefault(const tString &in asLightName,
                                   float afTime,
                                   eEasing aEasing = eEasing_Linear)</syntaxhighlight>
{{CodeDocDetailBody|Fades the brightness of one or more lights to a the default value.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aEasing|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_FadeTo}}
<syntaxhighlight lang="c++">void Light_FadeTo(const tString &in asLightName,
                  const cColor &in acColor,
                  float afRadius,
                  float afTime)</syntaxhighlight>
{{CodeDocDetailBody|Fades one or more lights to a specified color and radius.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|acColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_GetBrightness}}
<syntaxhighlight lang="c++">float Light_GetBrightness(const tString &in asLightName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the brightness of a light}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|float, the brightness of the light}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_GetDefaultBrightness}}
<syntaxhighlight lang="c++">float Light_GetDefaultBrightness(const tString &in asLightName)</syntaxhighlight>
{{CodeDocDetailBody|Returns the default brightness of a light}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetBrightness}}
<syntaxhighlight lang="c++">void Light_SetBrightness(const tString &in asLightName,
                         float afBrightness)</syntaxhighlight>
{{CodeDocDetailBody|Sets the brightness of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetCastShadows}}
<syntaxhighlight lang="c++">void Light_SetCastShadows(const tString &in asLightName,
                          bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets the casts shadow. Used only by spotlights (for now).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetCheapGobo}}
<syntaxhighlight lang="c++">void Light_SetCheapGobo(const tString &in asLightName,
                        bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Sets if a cheaper version of gobo rendering should be used}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetFlickerActive}}
<syntaxhighlight lang="c++">void Light_SetFlickerActive(const tString &in asLightName,
                            bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates the flicker of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetShadowBiasMul}}
<syntaxhighlight lang="c++">void Light_SetShadowBiasMul(const tString &in asLightName,
                            float afBias,
                            float afSlopeBias)</syntaxhighlight>
{{CodeDocDetailBody|Sets the shadow bias for one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afBias|float|}}
{{CodeDocDetailParam|afSlopeBias|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetupFlicker}}
<syntaxhighlight lang="c++">void Light_SetupFlicker(const tString &in asLightName,
                        const cColor &in aOffCol,
                        float afOffRadius,
                        float afOnMinLength,
                        float afOnMaxLength,
                        const tString &in asOnSound,
                        const tString &in asOnPS,
                        float afOffMinLength,
                        float afOffMaxLength,
                        const tString &in asOffSound,
                        const tString &in asOffPS,
                        bool abFade,
                        float afOnFadeMinLength,
                        float afOnFadeMaxLength,
                        float afOffFadeMinLength,
                        float afOffFadeMaxLength)</syntaxhighlight>
{{CodeDocDetailBody|Set up the flicker of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aOffCol|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|afOffRadius|float|}}
{{CodeDocDetailParam|afOnMinLength|float|}}
{{CodeDocDetailParam|afOnMaxLength|float|}}
{{CodeDocDetailParam|asOnSound|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asOnPS|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afOffMinLength|float|}}
{{CodeDocDetailParam|afOffMaxLength|float|}}
{{CodeDocDetailParam|asOffSound|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asOffPS|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abFade|bool|}}
{{CodeDocDetailParam|afOnFadeMinLength|float|}}
{{CodeDocDetailParam|afOnFadeMaxLength|float|}}
{{CodeDocDetailParam|afOffFadeMinLength|float|}}
{{CodeDocDetailParam|afOffFadeMaxLength|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Light_SetVisible}}
<syntaxhighlight lang="c++">void Light_SetVisible(const tString &in asLightName,
                      bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|Sets the visibility of one or more lights}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asLightName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVisible|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}