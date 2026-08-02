{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|bool|[[#cSystem_CloneFile|cSystem_CloneFile]](const [[../../tWString|tWString]] &in asSrcFileName, const [[../../tWString|tWString]] &in asDestFileName, bool abFailIfExists)|}}
{{CodeDocSummaryItem|void|[[#cSystem_CopyTextToClipboard|cSystem_CopyTextToClipboard]](const [[../../tWString|tWString]] &in asText)|}}
{{CodeDocSummaryItem|bool|[[#cSystem_CreateFolder|cSystem_CreateFolder]](const [[../../tWString|tWString]] &in asPath)|}}
{{CodeDocSummaryItem|[[../../cDate|cDate]]|[[#cSystem_FileCreationDate|cSystem_FileCreationDate]](const [[../../tWString|tWString]] &in asFilePath)|}}
{{CodeDocSummaryItem|bool|[[#cSystem_FileExists|cSystem_FileExists]](const [[../../tWString|tWString]] &in asFileName)|}}
{{CodeDocSummaryItem|[[../../cDate|cDate]]|[[#cSystem_FileModifiedDate|cSystem_FileModifiedDate]](const [[../../tWString|tWString]] &in asFilePath)|}}
{{CodeDocSummaryItem|void|[[#cSystem_FindFilesInDir|cSystem_FindFilesInDir]]([[../../array|array]]<[[../../tWString|tWString]]> &inout avStrings, const [[../../tWString|tWString]] &in asDir, const [[../../tWString|tWString]] &in asMask, bool abAddHidden)|}}
{{CodeDocSummaryItem|void|[[#cSystem_FindFoldersInDir|cSystem_FindFoldersInDir]]([[../../array|array]]<[[../../tWString|tWString]]> &inout avtStrings, const [[../../tWString|tWString]] &in asDir, bool abAddHidden, bool abAddUpFolder)|}}
{{CodeDocSummaryItem|bool|[[#cSystem_FolderExists|cSystem_FolderExists]](const [[../../tWString|tWString]] &in asPath)|}}
{{CodeDocSummaryItem|uint|[[#cSystem_GetApplicationTime|cSystem_GetApplicationTime]]()|}}
{{CodeDocSummaryItem|void|[[#cSystem_GetAvailableVideoDrivers|cSystem_GetAvailableVideoDrivers]]([[../../array|array]]<[[../../tString|tString]]> &inout avDrivers)|}}
{{CodeDocSummaryItem|void|[[#cSystem_GetAvailableVideoModes|cSystem_GetAvailableVideoModes]]([[../../array|array]]<[[../../cVector2l|cVector2l]]> &inout avScreenSizes, [[../../array|array]]<int> &inout avBpps, [[../../array|array]]<int> &inout avMinRefreshRates, int alMinBpp, int alMinRefreshRate, bool abRemoveDuplicates)|}}
{{CodeDocSummaryItem|[[../../cDate|cDate]]|[[#cSystem_GetDate|cSystem_GetDate]]()|}}
{{CodeDocSummaryItem|uint|[[#cSystem_GetFileSize|cSystem_GetFileSize]](const [[../../tWString|tWString]] &in asFileName)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cSystem_GetFullFilePath|cSystem_GetFullFilePath]](const [[../../tWString|tWString]] &in asFilePath)|}}
{{CodeDocSummaryItem|[[../../tString|tString]]|[[#cSystem_GetPlatformName|cSystem_GetPlatformName]]()|}}
{{CodeDocSummaryItem|uint|[[#cSystem_GetSystemAvailableDrives|cSystem_GetSystemAvailableDrives]]()|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cSystem_GetSystemSpecialPath|cSystem_GetSystemSpecialPath]]([[../../eSystemPath|eSystemPath]] aPathType)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cSystem_GetWorkingDir|cSystem_GetWorkingDir]]()|}}
{{CodeDocSummaryItem|bool|[[#cSystem_HasWindowFocus|cSystem_HasWindowFocus]](const [[../../tWString|tWString]] &in asWindowCaption)|}}
{{CodeDocSummaryItem|[[../../tWString|tWString]]|[[#cSystem_LoadTextFromClipboard|cSystem_LoadTextFromClipboard]]()|}}
{{CodeDocSummaryItem|void|[[#cSystem_ProfileEnd|cSystem_ProfileEnd]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cSystem_ProfileStart|cSystem_ProfileStart]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cSystem_RemoveFile|cSystem_RemoveFile]](const [[../../tWString|tWString]] &in asFileName)|}}
{{CodeDocSummaryItem|bool|[[#cSystem_RemoveFolder|cSystem_RemoveFolder]](const [[../../tWString|tWString]] &in asPath, bool abDeleteAllFiles, bool abDeleteAllSubFolders)|}}
{{CodeDocSummaryItem|void|[[#cSystem_Sleep|cSystem_Sleep]](uint alMilliSecs)|}}
{{CodeDocSummaryItem|void|[[#cSystem_Wrapper_CreateMessageBox|cSystem_Wrapper_CreateMessageBox]]([[../../eMsgBoxType|eMsgBoxType]] aType, const [[../../tWString|tWString]] &in asCaption, const [[../../tWString|tWString]] &in asMessage)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cSystem_CloneFile}}
<syntaxhighlight lang="c++">bool cSystem_CloneFile(const tWString &in asSrcFileName,
                       const tWString &in asDestFileName,
                       bool abFailIfExists)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asSrcFileName|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asDestFileName|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|abFailIfExists|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_CopyTextToClipboard}}
<syntaxhighlight lang="c++">void cSystem_CopyTextToClipboard(const tWString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_CreateFolder}}
<syntaxhighlight lang="c++">bool cSystem_CreateFolder(const tWString &in asPath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FileCreationDate}}
<syntaxhighlight lang="c++">cDate cSystem_FileCreationDate(const tWString &in asFilePath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFilePath|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|cDate|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FileExists}}
<syntaxhighlight lang="c++">bool cSystem_FileExists(const tWString &in asFileName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FileModifiedDate}}
<syntaxhighlight lang="c++">cDate cSystem_FileModifiedDate(const tWString &in asFilePath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFilePath|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|cDate|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FindFilesInDir}}
<syntaxhighlight lang="c++">void cSystem_FindFilesInDir(tWString &inout avStrings,
                            const tWString &in asDir,
                            const tWString &in asMask,
                            bool abAddHidden)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStrings|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asDir|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asMask|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|abAddHidden|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FindFoldersInDir}}
<syntaxhighlight lang="c++">void cSystem_FindFoldersInDir(tWString &inout avtStrings,
                              const tWString &in asDir,
                              bool abAddHidden,
                              bool abAddUpFolder)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avtStrings|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asDir|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|abAddHidden|bool|}}
{{CodeDocDetailParam|abAddUpFolder|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_FolderExists}}
<syntaxhighlight lang="c++">bool cSystem_FolderExists(const tWString &in asPath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetApplicationTime}}
<syntaxhighlight lang="c++">uint cSystem_GetApplicationTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetAvailableVideoDrivers}}
<syntaxhighlight lang="c++">void cSystem_GetAvailableVideoDrivers(tString &inout avDrivers)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avDrivers|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetAvailableVideoModes}}
<syntaxhighlight lang="c++">void cSystem_GetAvailableVideoModes(cVector2l &inout avScreenSizes,
                                    int &inout avBpps,
                                    int &inout avMinRefreshRates,
                                    int alMinBpp,
                                    int alMinRefreshRate,
                                    bool abRemoveDuplicates)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avScreenSizes|[[../../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avBpps|int|}}
{{CodeDocDetailParam|avMinRefreshRates|int|}}
{{CodeDocDetailParam|alMinBpp|int|}}
{{CodeDocDetailParam|alMinRefreshRate|int|}}
{{CodeDocDetailParam|abRemoveDuplicates|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetDate}}
<syntaxhighlight lang="c++">cDate cSystem_GetDate()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cDate|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetFileSize}}
<syntaxhighlight lang="c++">uint cSystem_GetFileSize(const tWString &in asFileName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetFullFilePath}}
<syntaxhighlight lang="c++">tWString cSystem_GetFullFilePath(const tWString &in asFilePath)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFilePath|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetPlatformName}}
<syntaxhighlight lang="c++">const tString& cSystem_GetPlatformName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetSystemAvailableDrives}}
<syntaxhighlight lang="c++">uint cSystem_GetSystemAvailableDrives()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetSystemSpecialPath}}
<syntaxhighlight lang="c++">tWString cSystem_GetSystemSpecialPath(eSystemPath aPathType)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aPathType|[[../../eSystemPath|eSystemPath]]|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_GetWorkingDir}}
<syntaxhighlight lang="c++">tWString cSystem_GetWorkingDir()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_HasWindowFocus}}
<syntaxhighlight lang="c++">bool cSystem_HasWindowFocus(const tWString &in asWindowCaption)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asWindowCaption|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_LoadTextFromClipboard}}
<syntaxhighlight lang="c++">tWString cSystem_LoadTextFromClipboard()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tWString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_ProfileEnd}}
<syntaxhighlight lang="c++">void cSystem_ProfileEnd(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_ProfileStart}}
<syntaxhighlight lang="c++">void cSystem_ProfileStart(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_RemoveFile}}
<syntaxhighlight lang="c++">void cSystem_RemoveFile(const tWString &in asFileName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFileName|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_RemoveFolder}}
<syntaxhighlight lang="c++">bool cSystem_RemoveFolder(const tWString &in asPath,
                          bool abDeleteAllFiles,
                          bool abDeleteAllSubFolders)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPath|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|abDeleteAllFiles|bool|}}
{{CodeDocDetailParam|abDeleteAllSubFolders|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_Sleep}}
<syntaxhighlight lang="c++">void cSystem_Sleep(uint alMilliSecs)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alMilliSecs|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cSystem_Wrapper_CreateMessageBox}}
<syntaxhighlight lang="c++">void cSystem_Wrapper_CreateMessageBox(eMsgBoxType aType,
                                      const tWString &in asCaption,
                                      const tWString &in asMessage)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../../eMsgBoxType|eMsgBoxType]]|}}
{{CodeDocDetailParam|asCaption|[[../../tWString|tWString]]|}}
{{CodeDocDetailParam|asMessage|[[../../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}