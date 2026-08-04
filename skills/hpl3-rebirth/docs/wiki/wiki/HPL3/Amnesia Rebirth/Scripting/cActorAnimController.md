{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cActorAnimController has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#BeginLipsync|BeginLipsync]]([[../iLipsyncResult|iLipsyncResult@]] apLipsync)|}}
{{CodeDocSummaryItem|void|[[#PlayEmotion|PlayEmotion]](const [[../tString|tString]] &in asEmotion, float afDuration, float afWeight <nowiki>=</nowiki> 1.0f, float afFadeTime <nowiki>=</nowiki> 0.1f)|}}
{{CodeDocSummaryItem|void|[[#PlayGesture|PlayGesture]](int alID, const [[../tString|tString]] &in asGesture)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](bool abFadeOut <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#StopLipsync|StopLipsync]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|BeginLipsync}}
<syntaxhighlight lang="c++">void BeginLipsync(iLipsyncResult@ apLipsync)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLipsync|[[../iLipsyncResult|iLipsyncResult@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayEmotion}}
<syntaxhighlight lang="c++">void PlayEmotion(const tString &in asEmotion,
                 float afDuration,
                 float afWeight = 1.0f,
                 float afFadeTime = 0.1f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asEmotion|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDuration|float|}}
{{CodeDocDetailParam|afWeight|float|}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PlayGesture}}
<syntaxhighlight lang="c++">void PlayGesture(int alID,
                 const tString &in asGesture)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|asGesture|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(bool abFadeOut = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abFadeOut|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopLipsync}}
<syntaxhighlight lang="c++">void StopLipsync()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}