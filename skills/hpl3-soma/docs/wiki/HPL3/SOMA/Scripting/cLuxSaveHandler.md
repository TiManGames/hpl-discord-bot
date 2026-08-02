{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxSaveHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AutoSave || <syntaxhighlight lang="c++" inline>bool abSaveCheckpoint</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abDelayed = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ContinueLoading || <syntaxhighlight lang="c++" inline>bool abDisableWaits</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DelayedLoadGameFromFile || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asSaveFile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackObject</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCallbackFunction</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abWaitAfterHeader</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abWaitAfterLoad</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DelayedSaveGameToFile || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asSaveFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSaveAsCheckpoint</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DeleteSaveFile || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asSaveFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSaveFiles ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSaveThreadActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasLoadError || [[../tString|<syntaxhighlight lang="c++" inline>tString &out asError</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDoneLoadingHeader ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDoneLoadingSavedGame ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LoadGameFromFile || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asSaveFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SaveGameToFile || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asSaveFile</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StartLoadedGame ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__