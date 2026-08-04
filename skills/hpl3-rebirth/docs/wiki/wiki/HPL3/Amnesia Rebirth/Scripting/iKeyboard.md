{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iKeyboard has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cKeyPress|cKeyPress]]|[[#GetKey|GetKey]]()|}}
{{CodeDocSummaryItem|int|[[#GetModifier|GetModifier]]()|}}
{{CodeDocSummaryItem|[[../cKeyPress|cKeyPress]]|[[#GetReleasedKey|GetReleasedKey]]()|}}
{{CodeDocSummaryItem|bool|[[#KeyIsDown|KeyIsDown]]([[../eKey|eKey]] aKey)|}}
{{CodeDocSummaryItem|bool|[[#KeyIsPressed|KeyIsPressed]]()|}}
{{CodeDocSummaryItem|bool|[[#KeyIsReleased|KeyIsReleased]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#KeyToString|KeyToString]]([[../eKey|eKey]] )|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#KeyToSymbol|KeyToSymbol]]([[../eKey|eKey]] )|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#ModifierKeyToString|ModifierKeyToString]]([[../eKeyModifier|eKeyModifier]] )|}}
{{CodeDocSummaryItem|[[../eKey|eKey]]|[[#StringToKey|StringToKey]](const [[../tString|tString]] &in )|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|GetKey}}
<syntaxhighlight lang="c++">cKeyPress GetKey()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cKeyPress|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModifier}}
<syntaxhighlight lang="c++">int GetModifier()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetReleasedKey}}
<syntaxhighlight lang="c++">cKeyPress GetReleasedKey()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cKeyPress|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|KeyIsDown}}
<syntaxhighlight lang="c++">bool KeyIsDown(eKey aKey)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aKey|[[../eKey|eKey]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|KeyIsPressed}}
<syntaxhighlight lang="c++">bool KeyIsPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|KeyIsReleased}}
<syntaxhighlight lang="c++">bool KeyIsReleased()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|KeyToString}}
<syntaxhighlight lang="c++">tString KeyToString(eKey )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../eKey|eKey]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|KeyToSymbol}}
<syntaxhighlight lang="c++">tString KeyToSymbol(eKey )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../eKey|eKey]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ModifierKeyToString}}
<syntaxhighlight lang="c++">tString ModifierKeyToString(eKeyModifier )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../eKeyModifier|eKeyModifier]]|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StringToKey}}
<syntaxhighlight lang="c++">eKey StringToKey(const tString &in )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../tString|tString]]|}}
{{CodeDocDetailReturn|eKey|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}