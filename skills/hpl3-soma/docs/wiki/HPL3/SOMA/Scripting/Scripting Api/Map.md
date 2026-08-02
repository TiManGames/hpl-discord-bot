{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#Map_GetBillboardArray|Map_GetBillboardArray]](const [[../../tString|tString]] &in asName, [[../../array|array]]<[[../../cBillboard|cBillboard@]]> &inout avOutBillboards)|Creates an array of billboards with a given name}}
{{CodeDocSummaryItem|bool|[[#Map_GetFogAreaArray|Map_GetFogAreaArray]](const [[../../tString|tString]] &in asName, [[../../array|array]]<[[../../cFogArea|cFogArea@]]> &inout avOutFogAreas)|Creates an array of fog areas with a given name}}
{{CodeDocSummaryItem|bool|[[#Map_GetLensFlareArray|Map_GetLensFlareArray]](const [[../../tString|tString]] &in asName, [[../../array|array]]<[[../../cLensFlare|cLensFlare@]]> &inout avOutLensFlares)|Creates an array of lens flares with a given name}}
{{CodeDocSummaryItem|bool|[[#Map_GetLightArray|Map_GetLightArray]](const [[../../tString|tString]] &in asName, [[../../array|array]]<[[../../iLight|iLight@]]> &inout avOutLights)|Creates an array of lights with a given name}}
{{CodeDocSummaryItem|bool|[[#Map_GetParticleSystemArray|Map_GetParticleSystemArray]](const [[../../tString|tString]] &in asName, [[../../array|array]]<[[../../cParticleSystem|cParticleSystem@]]> &inout avOutParticles)|Creates an array of particle systems with a given name}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Map_GetBillboardArray}}
<syntaxhighlight lang="c++">bool Map_GetBillboardArray(const tString &in asName,
                           cBillboard@ &inout avOutBillboards)</syntaxhighlight>
{{CodeDocDetailBody|Creates an array of billboards with a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of billboards. May contain * as wildcards.}}
{{CodeDocDetailParam|avOutBillboards|[[../../cBillboard|cBillboard@]]|reference to array that will be filled with billboards.}}
{{CodeDocDetailReturn|bool|array of billboards found.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Map_GetFogAreaArray}}
<syntaxhighlight lang="c++">bool Map_GetFogAreaArray(const tString &in asName,
                         cFogArea@ &inout avOutFogAreas)</syntaxhighlight>
{{CodeDocDetailBody|Creates an array of fog areas with a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of fog areas. May contain * as wildcards.}}
{{CodeDocDetailParam|avOutFogAreas|[[../../cFogArea|cFogArea@]]|reference to array that will be filled with fog areas.}}
{{CodeDocDetailReturn|bool|array of fog areas found.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Map_GetLensFlareArray}}
<syntaxhighlight lang="c++">bool Map_GetLensFlareArray(const tString &in asName,
                           cLensFlare@ &inout avOutLensFlares)</syntaxhighlight>
{{CodeDocDetailBody|Creates an array of lens flares with a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of lens flares. May contain * as wildcards.}}
{{CodeDocDetailParam|avOutLensFlares|[[../../cLensFlare|cLensFlare@]]|reference to array that will be filled with lens flares.}}
{{CodeDocDetailReturn|bool|array of lens flares found.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Map_GetLightArray}}
<syntaxhighlight lang="c++">bool Map_GetLightArray(const tString &in asName,
                       iLight@ &inout avOutLights)</syntaxhighlight>
{{CodeDocDetailBody|Creates an array of lights with a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of lights. May contain * as wildcards.}}
{{CodeDocDetailParam|avOutLights|[[../../iLight|iLight@]]|reference to array that will be filled with lights.}}
{{CodeDocDetailReturn|bool|array of lights found.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Map_GetParticleSystemArray}}
<syntaxhighlight lang="c++">bool Map_GetParticleSystemArray(const tString &in asName,
                                cParticleSystem@ &inout avOutParticles)</syntaxhighlight>
{{CodeDocDetailBody|Creates an array of particle systems with a given name.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of particle systems. May contain * as wildcards.}}
{{CodeDocDetailParam|avOutParticles|[[../../cParticleSystem|cParticleSystem@]]|reference to array that will be filled with particle systems.}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}