{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#Terminal_FadeImGuiStateColor|Terminal_FadeImGuiStateColor]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, [[../../cColor|cColor]] aGoalVal, float afTime, [[../../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#Terminal_FadeImGuiStateFloat|Terminal_FadeImGuiStateFloat]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, float afGoalVal, float afTime, [[../../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#Terminal_FadeImGuiStateVector3f|Terminal_FadeImGuiStateVector3f]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, [[../../cVector3f|cVector3f]] avGoalVal, float afTime, [[../../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#Terminal_ForceCacheUpdate|Terminal_ForceCacheUpdate]](const [[../../tString|tString]] &in asName)|Forces the terminal to update its cache}}
{{CodeDocSummaryItem|bool|[[#Terminal_GetImGuiStateBool|Terminal_GetImGuiStateBool]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, bool alDefault <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|[[../../cColor|cColor]]|[[#Terminal_GetImGuiStateColor|Terminal_GetImGuiStateColor]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cColor|cColor]] &in aDefault)|}}
{{CodeDocSummaryItem|float|[[#Terminal_GetImGuiStateFloat|Terminal_GetImGuiStateFloat]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, float afDefault <nowiki>=</nowiki> 0.0f)|}}
{{CodeDocSummaryItem|int|[[#Terminal_GetImGuiStateInt|Terminal_GetImGuiStateInt]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, int alDefault <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|[[../../cVector3f|cVector3f]]|[[#Terminal_GetImGuiStateVector3f|Terminal_GetImGuiStateVector3f]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cVector3f|cVector3f]] &in avDefault)|}}
{{CodeDocSummaryItem|void|[[#Terminal_IncImGuiStateColor|Terminal_IncImGuiStateColor]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_IncImGuiStateFloat|Terminal_IncImGuiStateFloat]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_IncImGuiStateInt|Terminal_IncImGuiStateInt]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_IncImGuiStateVector3f|Terminal_IncImGuiStateVector3f]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|bool|[[#Terminal_IsGuiActive|Terminal_IsGuiActive]](const [[../../tString|tString]] &in asName)|Get if the terminal GUI is active}}
{{CodeDocSummaryItem|void|[[#Terminal_SetAllowInteraction|Terminal_SetAllowInteraction]](const [[../../tString|tString]] &in asName, bool abX)|Set if the terminal should allow interaction from player}}
{{CodeDocSummaryItem|void|[[#Terminal_SetEnterCallback|Terminal_SetEnterCallback]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asCallback)|Set the terminal's Enter callback}}
{{CodeDocSummaryItem|void|[[#Terminal_SetFPSWhenIdle|Terminal_SetFPSWhenIdle]](const [[../../tString|tString]] &in asName, float afFPS)|Sets the FPS of the terminal when not in focus}}
{{CodeDocSummaryItem|void|[[#Terminal_SetGuiActive|Terminal_SetGuiActive]](const [[../../tString|tString]] &in asName, bool abX, float afFadeTime <nowiki>=</nowiki> 0.0f)|Set if the terminal should visible}}
{{CodeDocSummaryItem|void|[[#Terminal_SetImGuiStateBool|Terminal_SetImGuiStateBool]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, bool abVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetImGuiStateColor|Terminal_SetImGuiStateColor]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetImGuiStateFloat|Terminal_SetImGuiStateFloat]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetImGuiStateInt|Terminal_SetImGuiStateInt]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetImGuiStateVector3f|Terminal_SetImGuiStateVector3f]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName, const [[../../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetLeaveCallback|Terminal_SetLeaveCallback]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asCallback)|Set the terminal's Leave callback}}
{{CodeDocSummaryItem|void|[[#Terminal_SetOnGuiFunction|Terminal_SetOnGuiFunction]](const [[../../tString|tString]] &in asName, const [[../../tString|tString]] &in asCallback)|Set the terminal's GUI method}}
{{CodeDocSummaryItem|void|[[#Terminal_SetShowMouse|Terminal_SetShowMouse]](const [[../../tString|tString]] &in asPropName, bool abShow)|}}
{{CodeDocSummaryItem|void|[[#Terminal_SetUpdateWhenOutOfView|Terminal_SetUpdateWhenOutOfView]](const [[../../tString|tString]] &in asName, bool abX)|Set if the terminal should update when not visible}}
{{CodeDocSummaryItem|void|[[#Terminal_StopImGuiFade|Terminal_StopImGuiFade]](const [[../../tString|tString]] &in asPropName, const [[../../tString|tString]] &in asVarName)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|Terminal_FadeImGuiStateColor}}
<syntaxhighlight lang="c++">void Terminal_FadeImGuiStateColor(const tString &in asPropName,
                                  const tString &in asVarName,
                                  cColor aGoalVal,
                                  float afTime,
                                  eEasing aType = eEasing_QuadInOut,
                                  bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aGoalVal|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_FadeImGuiStateFloat}}
<syntaxhighlight lang="c++">void Terminal_FadeImGuiStateFloat(const tString &in asPropName,
                                  const tString &in asVarName,
                                  float afGoalVal,
                                  float afTime,
                                  eEasing aType = eEasing_QuadInOut,
                                  bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afGoalVal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_FadeImGuiStateVector3f}}
<syntaxhighlight lang="c++">void Terminal_FadeImGuiStateVector3f(const tString &in asPropName,
                                     const tString &in asVarName,
                                     cVector3f avGoalVal,
                                     float afTime,
                                     eEasing aType = eEasing_QuadInOut,
                                     bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avGoalVal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_ForceCacheUpdate}}
<syntaxhighlight lang="c++">void Terminal_ForceCacheUpdate(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Forces the terminal to update its cache. Used to stop drastic changes to the look of a<br/>GUI from popping into view when the terminal switches from cache to normal rendering.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_GetImGuiStateBool}}
<syntaxhighlight lang="c++">bool Terminal_GetImGuiStateBool(const tString &in asPropName,
                                const tString &in asVarName,
                                bool alDefault = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_GetImGuiStateColor}}
<syntaxhighlight lang="c++">cColor Terminal_GetImGuiStateColor(const tString &in asPropName,
                                   const tString &in asVarName,
                                   const cColor &in aDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_GetImGuiStateFloat}}
<syntaxhighlight lang="c++">float Terminal_GetImGuiStateFloat(const tString &in asPropName,
                                  const tString &in asVarName,
                                  float afDefault = 0.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_GetImGuiStateInt}}
<syntaxhighlight lang="c++">int Terminal_GetImGuiStateInt(const tString &in asPropName,
                              const tString &in asVarName,
                              int alDefault = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_GetImGuiStateVector3f}}
<syntaxhighlight lang="c++">cVector3f Terminal_GetImGuiStateVector3f(const tString &in asPropName,
                                         const tString &in asVarName,
                                         const cVector3f &in avDefault)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_IncImGuiStateColor}}
<syntaxhighlight lang="c++">void Terminal_IncImGuiStateColor(const tString &in asPropName,
                                 const tString &in asVarName,
                                 const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_IncImGuiStateFloat}}
<syntaxhighlight lang="c++">void Terminal_IncImGuiStateFloat(const tString &in asPropName,
                                 const tString &in asVarName,
                                 float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_IncImGuiStateInt}}
<syntaxhighlight lang="c++">void Terminal_IncImGuiStateInt(const tString &in asPropName,
                               const tString &in asVarName,
                               int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_IncImGuiStateVector3f}}
<syntaxhighlight lang="c++">void Terminal_IncImGuiStateVector3f(const tString &in asPropName,
                                    const tString &in asVarName,
                                    const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_IsGuiActive}}
<syntaxhighlight lang="c++">bool Terminal_IsGuiActive(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|Get if the terminal GUI is active.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetAllowInteraction}}
<syntaxhighlight lang="c++">void Terminal_SetAllowInteraction(const tString &in asName,
                                  bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Set if the terminal should allow interaction from player}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal. Wildcards are allowed.}}
{{CodeDocDetailParam|abX|bool|if interactions are allowed or not}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetEnterCallback}}
<syntaxhighlight lang="c++">void Terminal_SetEnterCallback(const tString &in asName,
                               const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|Set the terminal's Enter callback<br/>Syntax for callback function: void FuncName(const tString&in asEntityName)}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|Callback called when entering terminal.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetFPSWhenIdle}}
<syntaxhighlight lang="c++">void Terminal_SetFPSWhenIdle(const tString &in asName,
                             float afFPS)</syntaxhighlight>
{{CodeDocDetailBody|Sets the FPS of the terminal when not in focus.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailParam|afFPS|float|times/second to update the terminal when not in focus.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetGuiActive}}
<syntaxhighlight lang="c++">void Terminal_SetGuiActive(const tString &in asName,
                           bool abX,
                           float afFadeTime = 0.0f)</syntaxhighlight>
{{CodeDocDetailBody|Set if the terminal should visible. If off, the offline color is used.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal. Wildcards are allowed.}}
{{CodeDocDetailParam|abX|bool|if the GUI should be active or not.}}
{{CodeDocDetailParam|afFadeTime|float|time the GUI will be fading in/out (in seconds).}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetImGuiStateBool}}
<syntaxhighlight lang="c++">void Terminal_SetImGuiStateBool(const tString &in asPropName,
                                const tString &in asVarName,
                                bool abVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVal|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetImGuiStateColor}}
<syntaxhighlight lang="c++">void Terminal_SetImGuiStateColor(const tString &in asPropName,
                                 const tString &in asVarName,
                                 const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetImGuiStateFloat}}
<syntaxhighlight lang="c++">void Terminal_SetImGuiStateFloat(const tString &in asPropName,
                                 const tString &in asVarName,
                                 float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetImGuiStateInt}}
<syntaxhighlight lang="c++">void Terminal_SetImGuiStateInt(const tString &in asPropName,
                               const tString &in asVarName,
                               int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetImGuiStateVector3f}}
<syntaxhighlight lang="c++">void Terminal_SetImGuiStateVector3f(const tString &in asPropName,
                                    const tString &in asVarName,
                                    const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetLeaveCallback}}
<syntaxhighlight lang="c++">void Terminal_SetLeaveCallback(const tString &in asName,
                               const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|Set the terminal's Leave callback<br/>Syntax for callback function: void FuncName(const tString&in asEntityName)}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|Callback called when leaving terminal.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetOnGuiFunction}}
<syntaxhighlight lang="c++">void Terminal_SetOnGuiFunction(const tString &in asName,
                               const tString &in asCallback)</syntaxhighlight>
{{CodeDocDetailBody|Set the terminal's GUI method}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailParam|asCallback|[[../../tString|tString]]|terminal update method, prototype 	void OnGUI(const tString &in asEntityName, float afTimeStep)}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetShowMouse}}
<syntaxhighlight lang="c++">void Terminal_SetShowMouse(const tString &in asPropName,
                           bool abShow)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abShow|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_SetUpdateWhenOutOfView}}
<syntaxhighlight lang="c++">void Terminal_SetUpdateWhenOutOfView(const tString &in asName,
                                     bool abX)</syntaxhighlight>
{{CodeDocDetailBody|Set if the terminal should update when not visible. Use sparingly.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|name of terminal.}}
{{CodeDocDetailParam|abX|bool|if it should update when not visible.}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Terminal_StopImGuiFade}}
<syntaxhighlight lang="c++">void Terminal_StopImGuiFade(const tString &in asPropName,
                            const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPropName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asVarName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}