{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#Lamp_GetLit|Lamp_GetLit]](const [[../../tString|tString]] &in asName)|Gets the lit state of a lamp}}
{{CodeDocSummaryItem|void|[[#Lamp_SetFlickerActive|Lamp_SetFlickerActive]](const [[../../tString|tString]] &in asName, bool abActive)|Activates or deactivates flicker on the specified lamp(s)}}
{{CodeDocSummaryItem|void|[[#Lamp_SetLit|Lamp_SetLit]](const [[../../tString|tString]] &in asName, bool abLit, bool abEffects)|Sets the lit state of a lamp}}
{{CodeDocSummaryItem|void|[[#Lamp_SetupFlicker|Lamp_SetupFlicker]](const [[../../tString|tString]] &in asName, float afMinOnTime, float afMaxOnTime, float afMinOffTime, float afMaxOffTime, bool abFade <nowiki>=</nowiki> false, const [[../../tString|tString]] &in asOnSound <nowiki>=</nowiki> "", const [[../../tString|tString]] &in asOffSound <nowiki>=</nowiki> "", const [[../../tString|tString]] &in asOnPS <nowiki>=</nowiki> "", const [[../../tString|tString]] &in asOffPS <nowiki>=</nowiki> "")|Sets the properties of the flicker of a lamp}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Lamp_GetLit}}
<syntaxhighlight lang="c++">bool Lamp_GetLit(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Gets the lit state of a lamp.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the lamp.}}
{{CodeDocDetailReturn|bool|if the lamp is lit.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lamp_SetFlickerActive}}
<syntaxhighlight lang="c++">void Lamp_SetFlickerActive(const tString &in asName,
                           bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates flicker on the specified lamp(s)}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the lamp, wildcards (*) supported.}}
{{CodeDocDetailParam|abActive|bool|flicker state to set.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lamp_SetLit}}
<syntaxhighlight lang="c++">void Lamp_SetLit(const tString &in asName,
                 bool abLit,
                 bool abEffects)</syntaxhighlight>
{{CodeDocDetailBody|Sets the lit state of a lamp.<br/>If false, the change will not be apparent to the player.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the lamp.}}
{{CodeDocDetailParam|abLit|bool|lit state to set.}}
{{CodeDocDetailParam|abEffects|bool|if the change should activate effects associated with it.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Lamp_SetupFlicker}}
<syntaxhighlight lang="c++">void Lamp_SetupFlicker(const tString &in asName,
                       float afMinOnTime,
                       float afMaxOnTime,
                       float afMinOffTime,
                       float afMaxOffTime,
                       bool abFade = false,
                       const tString &in asOnSound = "",
                       const tString &in asOffSound = "",
                       const tString &in asOnPS = "",
                       const tString &in asOffPS = "")</syntaxhighlight>
{{CodeDocDetailBody|Sets the properties of the flicker of a lamp.<br/>with setting the lit state of the lamp. Default <nowiki>=</nowiki> false.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of the lamp, wildcards (*) supported.}}
{{CodeDocDetailParam|afMinOnTime|float|The minimum time the lamp will be turned on when flickering.}}
{{CodeDocDetailParam|afMaxOnTime|float|The maximum time the lamp will be turned on when flickering.}}
{{CodeDocDetailParam|afMinOffTime|float|The minimum time the lamp will be turned off when flickering.}}
{{CodeDocDetailParam|afMaxOffTime|float|The maximum time the lamp will be turned off when flickering.}}
{{CodeDocDetailParam|abFade|bool|if the lamp should fade on or off, and use any effects associated}}
{{CodeDocDetailParam|asOnSound|[[../../tString|tString]]|sound to play when turned on. Default <nowiki>=</nowiki> .}}
{{CodeDocDetailParam|asOffSound|[[../../tString|tString]]|sound to play when turned off. Default <nowiki>=</nowiki> .}}
{{CodeDocDetailParam|asOnPS|[[../../tString|tString]]|particle system to create when turned on. Default <nowiki>=</nowiki> .}}
{{CodeDocDetailParam|asOffPS|[[../../tString|tString]]|sparticle system to create when turned off. Default <nowiki>=</nowiki> .}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}