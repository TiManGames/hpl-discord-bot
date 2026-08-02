{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxModHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#CleanUpListing|CleanUpListing]]()|}}
{{CodeDocSummaryItem|float|[[#GetDownloadProgress|GetDownloadProgress]](uint32 alModID)|}}
{{CodeDocSummaryItem|bool|[[#GetIsRunningMod|GetIsRunningMod]]()|}}
{{CodeDocSummaryItem|bool|[[#GetModDownloadDetails|GetModDownloadDetails]](uint32 alModID, [[../eLuxModContentType|eLuxModContentType]] &out aType, [[../tString|tString]] &out asOutModName)|}}
{{CodeDocSummaryItem|bool|[[#GetModEntriesByName|GetModEntriesByName]]([[../eLuxModContentType|eLuxModContentType]] aType, [[../array|array]]<uint32> avOutModIDs, [[../array|array]]<[[../tString|tString]]> avOutModNames, [[../array|array]]<[[../tWString|tWString]]> avOutModAuthors, [[../array|array]]<[[../tString|tString]]> avOutModPics, bool abAscending <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|[[../tWString|tWString]]|[[#GetModLocatorFromModID|GetModLocatorFromModID]](uint32 alModID)|}}
{{CodeDocSummaryItem|uint32|[[#GetProviderIndexFromModID|GetProviderIndexFromModID]](uint32 alModID)|}}
{{CodeDocSummaryItem|bool|[[#GetProviderIsAvailable|GetProviderIsAvailable]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetProviderName|GetProviderName]](uint32 alIndex)|}}
{{CodeDocSummaryItem|uint32|[[#GetProviderNum|GetProviderNum]]()|}}
{{CodeDocSummaryItem|bool|[[#HasNextListEvent|HasNextListEvent]]()|}}
{{CodeDocSummaryItem|bool|[[#LaunchMod|LaunchMod]](uint32 alModID)|}}
{{CodeDocSummaryItem|void|[[#NextListEvent|NextListEvent]]([[../eLuxModEntryListEventType|eLuxModEntryListEventType]] &out aOutType, [[../array|array]]<uint32> avOutEntryIDs)|}}
{{CodeDocSummaryItem|bool|[[#OpenContentAcquisitionWindow|OpenContentAcquisitionWindow]](const [[../tString|tString]] &in asProvider)|}}
{{CodeDocSummaryItem|bool|[[#PrepareListing|PrepareListing]]()|}}
{{CodeDocSummaryItem|bool|[[#UninstallModEntry|UninstallModEntry]](uint32 alModID)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CleanUpListing}}
<syntaxhighlight lang="c++">bool CleanUpListing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDownloadProgress}}
<syntaxhighlight lang="c++">float GetDownloadProgress(uint32 alModID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIsRunningMod}}
<syntaxhighlight lang="c++">bool GetIsRunningMod()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModDownloadDetails}}
<syntaxhighlight lang="c++">bool GetModDownloadDetails(uint32 alModID,
                           eLuxModContentType &out aType,
                           tString &out asOutModName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailParam|aType|[[../eLuxModContentType|eLuxModContentType]]|}}
{{CodeDocDetailParam|asOutModName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModEntriesByName}}
<syntaxhighlight lang="c++">bool GetModEntriesByName(eLuxModContentType aType,
                         uint32 avOutModIDs,
                         tString avOutModNames,
                         tWString avOutModAuthors,
                         tString avOutModPics,
                         bool abAscending = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eLuxModContentType|eLuxModContentType]]|}}
{{CodeDocDetailParam|avOutModIDs|uint32|}}
{{CodeDocDetailParam|avOutModNames|[[../tString|tString]]|}}
{{CodeDocDetailParam|avOutModAuthors|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avOutModPics|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAscending|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModLocatorFromModID}}
<syntaxhighlight lang="c++">const tWString& GetModLocatorFromModID(uint32 alModID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProviderIndexFromModID}}
<syntaxhighlight lang="c++">uint32 GetProviderIndexFromModID(uint32 alModID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailReturn|uint32|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProviderIsAvailable}}
<syntaxhighlight lang="c++">bool GetProviderIsAvailable(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProviderName}}
<syntaxhighlight lang="c++">const tString& GetProviderName(uint32 alIndex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIndex|uint32|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetProviderNum}}
<syntaxhighlight lang="c++">uint32 GetProviderNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint32|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasNextListEvent}}
<syntaxhighlight lang="c++">bool HasNextListEvent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LaunchMod}}
<syntaxhighlight lang="c++">bool LaunchMod(uint32 alModID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|NextListEvent}}
<syntaxhighlight lang="c++">void NextListEvent(eLuxModEntryListEventType &out aOutType,
                   uint32 avOutEntryIDs)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aOutType|[[../eLuxModEntryListEventType|eLuxModEntryListEventType]]|}}
{{CodeDocDetailParam|avOutEntryIDs|uint32|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OpenContentAcquisitionWindow}}
<syntaxhighlight lang="c++">bool OpenContentAcquisitionWindow(const tString &in asProvider)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asProvider|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrepareListing}}
<syntaxhighlight lang="c++">bool PrepareListing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UninstallModEntry}}
<syntaxhighlight lang="c++">bool UninstallModEntry(uint32 alModID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alModID|uint32|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}