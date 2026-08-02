{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxGuiHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AttachCameraTextureToEntity|AttachCameraTextureToEntity]](const [[../tString|tString]] &in asName, [[../iLuxEntity|iLuxEntity@]] apEnt)|}}
{{CodeDocSummaryItem|void|[[#CreateCameraTexture|CreateCameraTexture]](const [[../tString|tString]] &in asName, const [[../cVector2l|cVector2l]] &in avSize, uint alFrameRate, float afFOV, float afNearPlane, float afFarPlane)|}}
{{CodeDocSummaryItem|void|[[#DestroyCameraTexture|DestroyCameraTexture]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#GetGameHudInputFocus|GetGameHudInputFocus]]()|}}
{{CodeDocSummaryItem|void|[[#SetCameraTextureBackgroundTransparent|SetCameraTextureBackgroundTransparent]](const [[../tString|tString]] &in asName, bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCameraTextureMatrix|SetCameraTextureMatrix]](const [[../tString|tString]] &in asName, const [[../cMatrixf|cMatrixf]] &in a_mtxCamera)|}}
{{CodeDocSummaryItem|void|[[#SetCameraTextureSettings|SetCameraTextureSettings]](const [[../tString|tString]] &in asName, float afFOV, float afNearPlane, float afFarPlane)|}}
{{CodeDocSummaryItem|void|[[#SetGameHudInputFocus|SetGameHudInputFocus]](bool abX)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AttachCameraTextureToEntity}}
<syntaxhighlight lang="c++">void AttachCameraTextureToEntity(const tString &in asName,
                                 iLuxEntity@ apEnt)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|apEnt|[[../iLuxEntity|iLuxEntity@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateCameraTexture}}
<syntaxhighlight lang="c++">void CreateCameraTexture(const tString &in asName,
                         const cVector2l &in avSize,
                         uint alFrameRate,
                         float afFOV,
                         float afNearPlane,
                         float afFarPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|alFrameRate|uint|}}
{{CodeDocDetailParam|afFOV|float|}}
{{CodeDocDetailParam|afNearPlane|float|}}
{{CodeDocDetailParam|afFarPlane|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyCameraTexture}}
<syntaxhighlight lang="c++">void DestroyCameraTexture(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGameHudInputFocus}}
<syntaxhighlight lang="c++">bool GetGameHudInputFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraTextureBackgroundTransparent}}
<syntaxhighlight lang="c++">void SetCameraTextureBackgroundTransparent(const tString &in asName,
                                           bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraTextureMatrix}}
<syntaxhighlight lang="c++">void SetCameraTextureMatrix(const tString &in asName,
                            const cMatrixf &in a_mtxCamera)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|a_mtxCamera|[[../cMatrixf|cMatrixf]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCameraTextureSettings}}
<syntaxhighlight lang="c++">void SetCameraTextureSettings(const tString &in asName,
                              float afFOV,
                              float afNearPlane,
                              float afFarPlane)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afFOV|float|}}
{{CodeDocDetailParam|afNearPlane|float|}}
{{CodeDocDetailParam|afFarPlane|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGameHudInputFocus}}
<syntaxhighlight lang="c++">void SetGameHudInputFocus(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}