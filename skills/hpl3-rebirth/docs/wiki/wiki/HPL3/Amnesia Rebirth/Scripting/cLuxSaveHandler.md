{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxSaveHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#AutoSave|AutoSave]](bool abSaveCheckpoint, bool abDelayed <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#ContinueLoading|ContinueLoading]](bool abDisableWaits)|}}
{{CodeDocSummaryItem|void|[[#DelayedLoadGameFromFile|DelayedLoadGameFromFile]](const [[../tWString|tWString]] &in asSaveFile, const [[../tString|tString]] &in asCallbackObject, const [[../tString|tString]] &in asCallbackFunction, bool abWaitAfterHeader, bool abWaitAfterLoad)|}}
{{CodeDocSummaryItem|void|[[#DelayedSaveGameToFile|DelayedSaveGameToFile]](const [[../tWString|tWString]] &in asSaveFile, bool abSaveAsCheckpoint)|}}
{{CodeDocSummaryItem|void|[[#DeleteSaveFile|DeleteSaveFile]](const [[../tWString|tWString]] &in asSaveFile)|}}
{{CodeDocSummaryItem|bool|[[#GetSaveFiles|GetSaveFiles]]([[../array|array]]<[[../tWString|tWString]]> avNames, [[../array|array]]<[[../tString|tString]]> avDates, [[../array|array]]<[[../tWString|tWString]]> avFiles)|}}
{{CodeDocSummaryItem|bool|[[#GetSaveThreadActive|GetSaveThreadActive]]()|}}
{{CodeDocSummaryItem|bool|[[#HasLoadError|HasLoadError]]([[../tString|tString]] &out asError)|}}
{{CodeDocSummaryItem|bool|[[#IsDoneLoadingHeader|IsDoneLoadingHeader]]()|}}
{{CodeDocSummaryItem|bool|[[#IsDoneLoadingSavedGame|IsDoneLoadingSavedGame]]()|}}
{{CodeDocSummaryItem|void|[[#LoadGameFromFile|LoadGameFromFile]](const [[../tWString|tWString]] &in asSaveFile)|}}
{{CodeDocSummaryItem|void|[[#SaveGameToFile|SaveGameToFile]](const [[../tWString|tWString]] &in asSaveFile)|}}
{{CodeDocSummaryItem|void|[[#StartLoadedGame|StartLoadedGame]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AutoSave}}
<syntaxhighlight lang="c++">bool AutoSave(bool abSaveCheckpoint,
              bool abDelayed = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abSaveCheckpoint|bool|}}
{{CodeDocDetailParam|abDelayed|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ContinueLoading}}
<syntaxhighlight lang="c++">void ContinueLoading(bool abDisableWaits)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abDisableWaits|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DelayedLoadGameFromFile}}
<syntaxhighlight lang="c++">void DelayedLoadGameFromFile(const tWString &in asSaveFile,
                             const tString &in asCallbackObject,
                             const tString &in asCallbackFunction,
                             bool abWaitAfterHeader,
                             bool abWaitAfterLoad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSaveFile|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|asCallbackObject|[[../tString|tString]]|}}
{{CodeDocDetailParam|asCallbackFunction|[[../tString|tString]]|}}
{{CodeDocDetailParam|abWaitAfterHeader|bool|}}
{{CodeDocDetailParam|abWaitAfterLoad|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DelayedSaveGameToFile}}
<syntaxhighlight lang="c++">void DelayedSaveGameToFile(const tWString &in asSaveFile,
                           bool abSaveAsCheckpoint)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSaveFile|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|abSaveAsCheckpoint|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DeleteSaveFile}}
<syntaxhighlight lang="c++">void DeleteSaveFile(const tWString &in asSaveFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSaveFile|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSaveFiles}}
<syntaxhighlight lang="c++">bool GetSaveFiles(tWString avNames,
                  tString avDates,
                  tWString avFiles)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avNames|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avDates|[[../tString|tString]]|}}
{{CodeDocDetailParam|avFiles|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSaveThreadActive}}
<syntaxhighlight lang="c++">bool GetSaveThreadActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasLoadError}}
<syntaxhighlight lang="c++">bool HasLoadError(tString &out asError)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asError|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDoneLoadingHeader}}
<syntaxhighlight lang="c++">bool IsDoneLoadingHeader()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsDoneLoadingSavedGame}}
<syntaxhighlight lang="c++">bool IsDoneLoadingSavedGame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadGameFromFile}}
<syntaxhighlight lang="c++">void LoadGameFromFile(const tWString &in asSaveFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSaveFile|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SaveGameToFile}}
<syntaxhighlight lang="c++">void SaveGameToFile(const tWString &in asSaveFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSaveFile|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StartLoadedGame}}
<syntaxhighlight lang="c++">void StartLoadedGame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}