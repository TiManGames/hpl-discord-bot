{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Readable_SetCloseCallback|Readable_SetCloseCallback]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asCallback)|Sets the close callback of a readable prop}}
{{CodeDocSummaryItem|void|[[#Readable_SetOpenEntityFile|Readable_SetOpenEntityFile]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asEntityFile)|Sets the open entity file of the readable prop}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Readable_SetCloseCallback}}
<syntaxhighlight lang="c++">void Readable_SetCloseCallback(const tString &in asName,
                               const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|Sets the close callback of a readable prop.<br/>Syntax for callback function: void FuncName(const tString &in asEntity).}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of readable prop}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|the callback function}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Readable_SetOpenEntityFile}}
<syntaxhighlight lang="c++">void Readable_SetOpenEntityFile(const tString &in asName,
                                const tString &in asEntityFile)</syntaxhighlight>
{{CodeDocDetailBody|Sets the open entity file of the readable prop}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of readable prop}}
{{CodeDocDetailParam|asEntityFile|[[../../tString|tString]]|the new entity file name}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}