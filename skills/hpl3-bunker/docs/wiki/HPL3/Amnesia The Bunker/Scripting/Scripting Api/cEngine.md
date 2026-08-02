{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#cEngine_Exit|cEngine_Exit]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetAvgFrameTimeInMS|cEngine_GetAvgFrameTimeInMS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetAvgLogicFrameTimeMS|cEngine_GetAvgLogicFrameTimeMS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetAvgRenderFrameTimeMS|cEngine_GetAvgRenderFrameTimeMS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetAvgVariableFrameTimeMS|cEngine_GetAvgVariableFrameTimeMS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetFPS|cEngine_GetFPS]]()|}}
{{CodeDocSummaryItem|void|[[#cEngine_GetFPSMinMax|cEngine_GetFPSMinMax]](float &out afMin, float &out afMax)|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetFPSUpdateRate|cEngine_GetFPSUpdateRate]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetFrameTime|cEngine_GetFrameTime]]()|}}
{{CodeDocSummaryItem|void|[[#cEngine_GetFrameTimeMinMax|cEngine_GetFrameTimeMinMax]](float &out afMin, float &out afMax)|}}
{{CodeDocSummaryItem|double|[[#cEngine_GetGameTime|cEngine_GetGameTime]]()|}}
{{CodeDocSummaryItem|bool|[[#cEngine_GetLimitFPS|cEngine_GetLimitFPS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetMaxMS|cEngine_GetMaxMS]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetMinMS|cEngine_GetMinMS]]()|}}
{{CodeDocSummaryItem|uint|[[#cEngine_GetPerFrameUpdateSteps|cEngine_GetPerFrameUpdateSteps]]()|}}
{{CodeDocSummaryItem|uint|[[#cEngine_GetSceneRenderFlags|cEngine_GetSceneRenderFlags]]()|}}
{{CodeDocSummaryItem|float|[[#cEngine_GetStepSize|cEngine_GetStepSize]]()|}}
{{CodeDocSummaryItem|int|[[#cEngine_GetUpdatesPerSec|cEngine_GetUpdatesPerSec]]()|}}
{{CodeDocSummaryItem|void|[[#cEngine_ResetLogicTimer|cEngine_ResetLogicTimer]]()|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetAllGlobalUpdatersPaused|cEngine_SetAllGlobalUpdatersPaused]](bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetAllUpdatersPaused|cEngine_SetAllUpdatersPaused]](const [[../../tString|tString]] &in asContainer, bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetFPSUpdateRate|cEngine_SetFPSUpdateRate]](float afSec)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetGlobalUpdaterPaused|cEngine_SetGlobalUpdaterPaused]](const [[../../tString|tString]] &in asUpdate, bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetLimitFPS|cEngine_SetLimitFPS]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetSceneRenderFlags|cEngine_SetSceneRenderFlags]](uint alFlags)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetUpdaterPaused|cEngine_SetUpdaterPaused]](const [[../../tString|tString]] &in asContainer, const [[../../tString|tString]] &in asUpdate, bool abPaused)|}}
{{CodeDocSummaryItem|void|[[#cEngine_SetUpdatesPerSec|cEngine_SetUpdatesPerSec]](int alUpdatesPerSec, int alMinUpdatesPerSec)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cEngine_Exit}}
<syntaxhighlight lang="c++">void cEngine_Exit()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetAvgFrameTimeInMS}}
<syntaxhighlight lang="c++">float cEngine_GetAvgFrameTimeInMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetAvgLogicFrameTimeMS}}
<syntaxhighlight lang="c++">float cEngine_GetAvgLogicFrameTimeMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetAvgRenderFrameTimeMS}}
<syntaxhighlight lang="c++">float cEngine_GetAvgRenderFrameTimeMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetAvgVariableFrameTimeMS}}
<syntaxhighlight lang="c++">float cEngine_GetAvgVariableFrameTimeMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetFPS}}
<syntaxhighlight lang="c++">float cEngine_GetFPS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetFPSMinMax}}
<syntaxhighlight lang="c++">void cEngine_GetFPSMinMax(float &out afMin,
                          float &out afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetFPSUpdateRate}}
<syntaxhighlight lang="c++">float cEngine_GetFPSUpdateRate()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetFrameTime}}
<syntaxhighlight lang="c++">float cEngine_GetFrameTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetFrameTimeMinMax}}
<syntaxhighlight lang="c++">void cEngine_GetFrameTimeMinMax(float &out afMin,
                                float &out afMax)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetGameTime}}
<syntaxhighlight lang="c++">double cEngine_GetGameTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|double|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetLimitFPS}}
<syntaxhighlight lang="c++">bool cEngine_GetLimitFPS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetMaxMS}}
<syntaxhighlight lang="c++">float cEngine_GetMaxMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetMinMS}}
<syntaxhighlight lang="c++">float cEngine_GetMinMS()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetPerFrameUpdateSteps}}
<syntaxhighlight lang="c++">uint cEngine_GetPerFrameUpdateSteps()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetSceneRenderFlags}}
<syntaxhighlight lang="c++">uint cEngine_GetSceneRenderFlags()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|uint|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetStepSize}}
<syntaxhighlight lang="c++">float cEngine_GetStepSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_GetUpdatesPerSec}}
<syntaxhighlight lang="c++">int cEngine_GetUpdatesPerSec()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_ResetLogicTimer}}
<syntaxhighlight lang="c++">void cEngine_ResetLogicTimer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetAllGlobalUpdatersPaused}}
<syntaxhighlight lang="c++">void cEngine_SetAllGlobalUpdatersPaused(bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetAllUpdatersPaused}}
<syntaxhighlight lang="c++">void cEngine_SetAllUpdatersPaused(const tString &in asContainer,
                                  bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asContainer|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetFPSUpdateRate}}
<syntaxhighlight lang="c++">void cEngine_SetFPSUpdateRate(float afSec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afSec|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetGlobalUpdaterPaused}}
<syntaxhighlight lang="c++">void cEngine_SetGlobalUpdaterPaused(const tString &in asUpdate,
                                    bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asUpdate|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetLimitFPS}}
<syntaxhighlight lang="c++">void cEngine_SetLimitFPS(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetSceneRenderFlags}}
<syntaxhighlight lang="c++">void cEngine_SetSceneRenderFlags(uint alFlags)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alFlags|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetUpdaterPaused}}
<syntaxhighlight lang="c++">void cEngine_SetUpdaterPaused(const tString &in asContainer,
                              const tString &in asUpdate,
                              bool abPaused)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asContainer|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asUpdate|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abPaused|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cEngine_SetUpdatesPerSec}}
<syntaxhighlight lang="c++">void cEngine_SetUpdatesPerSec(int alUpdatesPerSec,
                              int alMinUpdatesPerSec)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alUpdatesPerSec|int|}}
{{CodeDocDetailParam|alMinUpdatesPerSec|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}