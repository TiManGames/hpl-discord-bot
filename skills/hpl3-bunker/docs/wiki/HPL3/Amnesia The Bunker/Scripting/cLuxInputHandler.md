{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxInputHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddKeyboardLayoutKey|AddKeyboardLayoutKey]]([[../eKey|eKey]] aKey, [[../eLuxKeyboardLayoutType|eLuxKeyboardLayoutType]] aType, const [[../cImGuiGfx|cImGuiGfx]] &in aGfxKey, const [[../cImGuiLabelData|cImGuiLabelData]] &in aLabelKey)|}}
{{CodeDocSummaryItem|void|[[#AddKeyboardLayoutRange|AddKeyboardLayoutRange]]([[../eKey|eKey]] aFirstKey, [[../eKey|eKey]] aLastKey, [[../eLuxKeyboardLayoutType|eLuxKeyboardLayoutType]] aType, const [[../cImGuiGfx|cImGuiGfx]] &in aGfxKey, const [[../cImGuiLabelData|cImGuiLabelData]] &in aLabelKey)|}}
{{CodeDocSummaryItem|void|[[#AddPresetToProfile|AddPresetToProfile]](const [[../tString|tString]] &in asProfile, const [[../tString|tString]] &in asPreset, const [[../array|array]]<int> avActions, const [[../array|array]]<[[../tString|tString]]> avBindings, const [[../array|array]]<bool> avAnalog)|}}
{{CodeDocSummaryItem|void|[[#ClearKeyboardLayout|ClearKeyboardLayout]]()|}}
{{CodeDocSummaryItem|void|[[#CreateAction|CreateAction]](const [[../tString|tString]] &in asName, int alId, bool abConfigurable, const [[../tString|tString]] &in asCat)|}}
{{CodeDocSummaryItem|void|[[#CreateActionInput|CreateActionInput]](const [[../tString|tString]] &in asInputType, int alActionId)|}}
{{CodeDocSummaryItem|void|[[#CreateAnalogAction|CreateAnalogAction]](const [[../tString|tString]] &in asName, int alId, bool abConfigurable, const [[../tString|tString]] &in asCat, int alAxis, float afMul, int alAnalogId)|}}
{{CodeDocSummaryItem|void|[[#CreateAnalogGamepadAction|CreateAnalogGamepadAction]](const [[../tString|tString]] &in asName, int alId, const [[../tString|tString]] &in asCat, int alAnalogId, float afSmoothness, int alDirectionLimit, int alMaxAccelerationPos, float afPrevAccelerationPosMul)|}}
{{CodeDocSummaryItem|void|[[#CreateAnalogGamepadActionInput|CreateAnalogGamepadActionInput]](const [[../tString|tString]] &in asInputType, int alActionId)|}}
{{CodeDocSummaryItem|void|[[#CreateDebugAction|CreateDebugAction]](const [[../tString|tString]] &in asName, int alId)|}}
{{CodeDocSummaryItem|void|[[#CreateGamepadProfile|CreateGamepadProfile]](const [[../tString|tString]] &in asName, const [[../tString|tString]] &in asPrefix, const [[../array|array]]<[[../tString|tString]]> avButtons, const [[../array|array]]<[[../tString|tString]]> avAxes, const [[../array|array]]<uint> avDPad)|}}
{{CodeDocSummaryItem|void|[[#FetchGamepadInputLayoutString|FetchGamepadInputLayoutString]](const [[../tString|tString]] &in asInputName, [[../tString|tString]] &out asPrefixName, [[../tString|tString]] &out asLayoutString)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetActionName|GetActionName]](int alId, bool abAnalog)|}}
{{CodeDocSummaryItem|void|[[#GetActionsAssociatedToGamepadControl|GetActionsAssociatedToGamepadControl]](const [[../tString|tString]] &in asProfile, const [[../tString|tString]] &in asPreset, const [[../tString|tString]] &in asControl, [[../tString|tString]] &out asActions)|}}
{{CodeDocSummaryItem|bool|[[#GetGamepadMappingAction|GetGamepadMappingAction]](int alId, int &out alAction, [[../tString|tString]] &out asPrimary, bool &out abAnalog)|}}
{{CodeDocSummaryItem|int|[[#GetGamepadMappingActionNum|GetGamepadMappingActionNum]]()|}}
{{CodeDocSummaryItem|float|[[#GetGamepadSensitivity|GetGamepadSensitivity]]()|}}
{{CodeDocSummaryItem|bool|[[#GetGamepadWasLastDeviceUsed|GetGamepadWasLastDeviceUsed]]()|}}
{{CodeDocSummaryItem|int|[[#GetLastUsedGamepadIndex|GetLastUsedGamepadIndex]](float afTimeLimit <nowiki>=</nowiki> -1.0f)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetLatestKeyPressed|GetLatestKeyPressed]]()|}}
{{CodeDocSummaryItem|int|[[#GetMaxSmoothMousePos|GetMaxSmoothMousePos]]()|}}
{{CodeDocSummaryItem|float|[[#GetMouseSensitivity|GetMouseSensitivity]]()|}}
{{CodeDocSummaryItem|float|[[#GetPrevSmoothMousePosMul|GetPrevSmoothMousePosMul]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetRelMousePos|GetRelMousePos]]()|}}
{{CodeDocSummaryItem|bool|[[#GetSmoothMouse|GetSmoothMouse]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetSmoothMousePos|GetSmoothMousePos]](const [[../cVector2f|cVector2f]] &in avRelPosMouse)|}}
{{CodeDocSummaryItem|float|[[#GetTimeSinceGamepadWasUsed|GetTimeSinceGamepadWasUsed]](int alID)|}}
{{CodeDocSummaryItem|bool|[[#IsGamepadConnected|IsGamepadConnected]]()|}}
{{CodeDocSummaryItem|bool|[[#IsYAxisInverted|IsYAxisInverted]]()|}}
{{CodeDocSummaryItem|void|[[#LoadKeyConfig|LoadKeyConfig]]()|}}
{{CodeDocSummaryItem|void|[[#ResetSmoothMousePos|ResetSmoothMousePos]]()|}}
{{CodeDocSummaryItem|void|[[#SetGamepadColor|SetGamepadColor]](int alDevice, const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetGamepadMapping|SetGamepadMapping]](const [[../tString|tString]] &in asProfile, const [[../tString|tString]] &in asPreset)|}}
{{CodeDocSummaryItem|void|[[#SetGamepadSensitivity|SetGamepadSensitivity]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetKeyboardLayoutDefaults|SetKeyboardLayoutDefaults]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfxKey, const [[../cImGuiLabelData|cImGuiLabelData]] &in aLabelKey)|}}
{{CodeDocSummaryItem|void|[[#SetMaxSmoothMousePos|SetMaxSmoothMousePos]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMouseLayout|SetMouseLayout]](const [[../array|array]]<[[../tString|tString]]> avButtons)|}}
{{CodeDocSummaryItem|void|[[#SetMouseSensitivity|SetMouseSensitivity]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPrevSmoothMousePosMul|SetPrevSmoothMousePosMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetPrimaryGamepad|SetPrimaryGamepad]](int alDevice)|}}
{{CodeDocSummaryItem|void|[[#SetRumble|SetRumble]](int alDevice, float afStrength, float afDuration)|}}
{{CodeDocSummaryItem|void|[[#SetSmoothMouse|SetSmoothMouse]](bool abX)|}}
{{CodeDocSummaryItem|bool|[[#WasAnalogueInputFromPad|WasAnalogueInputFromPad]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddKeyboardLayoutKey}}
<syntaxhighlight lang="c++">void AddKeyboardLayoutKey(eKey aKey,
                          eLuxKeyboardLayoutType aType,
                          const cImGuiGfx &in aGfxKey,
                          const cImGuiLabelData &in aLabelKey)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aKey|[[../eKey|eKey]]|}}
{{CodeDocDetailParam|aType|[[../eLuxKeyboardLayoutType|eLuxKeyboardLayoutType]]|}}
{{CodeDocDetailParam|aGfxKey|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|aLabelKey|[[../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddKeyboardLayoutRange}}
<syntaxhighlight lang="c++">void AddKeyboardLayoutRange(eKey aFirstKey,
                            eKey aLastKey,
                            eLuxKeyboardLayoutType aType,
                            const cImGuiGfx &in aGfxKey,
                            const cImGuiLabelData &in aLabelKey)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFirstKey|[[../eKey|eKey]]|}}
{{CodeDocDetailParam|aLastKey|[[../eKey|eKey]]|}}
{{CodeDocDetailParam|aType|[[../eLuxKeyboardLayoutType|eLuxKeyboardLayoutType]]|}}
{{CodeDocDetailParam|aGfxKey|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|aLabelKey|[[../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddPresetToProfile}}
<syntaxhighlight lang="c++">void AddPresetToProfile(const tString &in asProfile,
                        const tString &in asPreset,
                        const int avActions,
                        const tString avBindings,
                        const bool avAnalog)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asProfile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPreset|[[../tString|tString]]|}}
{{CodeDocDetailParam|avActions|int|}}
{{CodeDocDetailParam|avBindings|[[../tString|tString]]|}}
{{CodeDocDetailParam|avAnalog|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearKeyboardLayout}}
<syntaxhighlight lang="c++">void ClearKeyboardLayout()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateAction}}
<syntaxhighlight lang="c++">void CreateAction(const tString &in asName,
                  int alId,
                  bool abConfigurable,
                  const tString &in asCat)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abConfigurable|bool|}}
{{CodeDocDetailParam|asCat|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateActionInput}}
<syntaxhighlight lang="c++">void CreateActionInput(const tString &in asInputType,
                       int alActionId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInputType|[[../tString|tString]]|}}
{{CodeDocDetailParam|alActionId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateAnalogAction}}
<syntaxhighlight lang="c++">void CreateAnalogAction(const tString &in asName,
                        int alId,
                        bool abConfigurable,
                        const tString &in asCat,
                        int alAxis,
                        float afMul,
                        int alAnalogId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abConfigurable|bool|}}
{{CodeDocDetailParam|asCat|[[../tString|tString]]|}}
{{CodeDocDetailParam|alAxis|int|}}
{{CodeDocDetailParam|afMul|float|}}
{{CodeDocDetailParam|alAnalogId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateAnalogGamepadAction}}
<syntaxhighlight lang="c++">void CreateAnalogGamepadAction(const tString &in asName,
                               int alId,
                               const tString &in asCat,
                               int alAnalogId,
                               float afSmoothness,
                               int alDirectionLimit,
                               int alMaxAccelerationPos,
                               float afPrevAccelerationPosMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|asCat|[[../tString|tString]]|}}
{{CodeDocDetailParam|alAnalogId|int|}}
{{CodeDocDetailParam|afSmoothness|float|}}
{{CodeDocDetailParam|alDirectionLimit|int|}}
{{CodeDocDetailParam|alMaxAccelerationPos|int|}}
{{CodeDocDetailParam|afPrevAccelerationPosMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateAnalogGamepadActionInput}}
<syntaxhighlight lang="c++">void CreateAnalogGamepadActionInput(const tString &in asInputType,
                                    int alActionId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInputType|[[../tString|tString]]|}}
{{CodeDocDetailParam|alActionId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateDebugAction}}
<syntaxhighlight lang="c++">void CreateDebugAction(const tString &in asName,
                       int alId)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateGamepadProfile}}
<syntaxhighlight lang="c++">void CreateGamepadProfile(const tString &in asName,
                          const tString &in asPrefix,
                          const tString avButtons,
                          const tString avAxes,
                          const uint avDPad)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPrefix|[[../tString|tString]]|}}
{{CodeDocDetailParam|avButtons|[[../tString|tString]]|}}
{{CodeDocDetailParam|avAxes|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDPad|uint|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FetchGamepadInputLayoutString}}
<syntaxhighlight lang="c++">void FetchGamepadInputLayoutString(const tString &in asInputName,
                                   tString &out asPrefixName,
                                   tString &out asLayoutString)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asInputName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPrefixName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asLayoutString|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActionName}}
<syntaxhighlight lang="c++">tString GetActionName(int alId,
                      bool abAnalog)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|abAnalog|bool|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetActionsAssociatedToGamepadControl}}
<syntaxhighlight lang="c++">void GetActionsAssociatedToGamepadControl(const tString &in asProfile,
                                          const tString &in asPreset,
                                          const tString &in asControl,
                                          tString &out asActions)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asProfile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPreset|[[../tString|tString]]|}}
{{CodeDocDetailParam|asControl|[[../tString|tString]]|}}
{{CodeDocDetailParam|asActions|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGamepadMappingAction}}
<syntaxhighlight lang="c++">bool GetGamepadMappingAction(int alId,
                             int &out alAction,
                             tString &out asPrimary,
                             bool &out abAnalog)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|int|}}
{{CodeDocDetailParam|alAction|int|}}
{{CodeDocDetailParam|asPrimary|[[../tString|tString]]|}}
{{CodeDocDetailParam|abAnalog|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGamepadMappingActionNum}}
<syntaxhighlight lang="c++">int GetGamepadMappingActionNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGamepadSensitivity}}
<syntaxhighlight lang="c++">float GetGamepadSensitivity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGamepadWasLastDeviceUsed}}
<syntaxhighlight lang="c++">bool GetGamepadWasLastDeviceUsed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLastUsedGamepadIndex}}
<syntaxhighlight lang="c++">int GetLastUsedGamepadIndex(float afTimeLimit = -1.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeLimit|float|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLatestKeyPressed}}
<syntaxhighlight lang="c++">const tString& GetLatestKeyPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxSmoothMousePos}}
<syntaxhighlight lang="c++">int GetMaxSmoothMousePos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMouseSensitivity}}
<syntaxhighlight lang="c++">float GetMouseSensitivity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPrevSmoothMousePosMul}}
<syntaxhighlight lang="c++">float GetPrevSmoothMousePosMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetRelMousePos}}
<syntaxhighlight lang="c++">cVector2f GetRelMousePos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSmoothMouse}}
<syntaxhighlight lang="c++">bool GetSmoothMouse()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSmoothMousePos}}
<syntaxhighlight lang="c++">cVector2f GetSmoothMousePos(const cVector2f &in avRelPosMouse)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avRelPosMouse|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeSinceGamepadWasUsed}}
<syntaxhighlight lang="c++">float GetTimeSinceGamepadWasUsed(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsGamepadConnected}}
<syntaxhighlight lang="c++">bool IsGamepadConnected()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsYAxisInverted}}
<syntaxhighlight lang="c++">bool IsYAxisInverted()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadKeyConfig}}
<syntaxhighlight lang="c++">void LoadKeyConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetSmoothMousePos}}
<syntaxhighlight lang="c++">void ResetSmoothMousePos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGamepadColor}}
<syntaxhighlight lang="c++">void SetGamepadColor(int alDevice,
                     const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alDevice|int|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGamepadMapping}}
<syntaxhighlight lang="c++">void SetGamepadMapping(const tString &in asProfile,
                       const tString &in asPreset)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asProfile|[[../tString|tString]]|}}
{{CodeDocDetailParam|asPreset|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGamepadSensitivity}}
<syntaxhighlight lang="c++">void SetGamepadSensitivity(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetKeyboardLayoutDefaults}}
<syntaxhighlight lang="c++">void SetKeyboardLayoutDefaults(const cImGuiGfx &in aGfxKey,
                               const cImGuiLabelData &in aLabelKey)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfxKey|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|aLabelKey|[[../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxSmoothMousePos}}
<syntaxhighlight lang="c++">void SetMaxSmoothMousePos(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMouseLayout}}
<syntaxhighlight lang="c++">void SetMouseLayout(const tString avButtons)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avButtons|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMouseSensitivity}}
<syntaxhighlight lang="c++">void SetMouseSensitivity(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPrevSmoothMousePosMul}}
<syntaxhighlight lang="c++">void SetPrevSmoothMousePosMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPrimaryGamepad}}
<syntaxhighlight lang="c++">void SetPrimaryGamepad(int alDevice)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alDevice|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetRumble}}
<syntaxhighlight lang="c++">void SetRumble(int alDevice,
               float afStrength,
               float afDuration)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alDevice|int|}}
{{CodeDocDetailParam|afStrength|float|}}
{{CodeDocDetailParam|afDuration|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSmoothMouse}}
<syntaxhighlight lang="c++">void SetSmoothMouse(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|WasAnalogueInputFromPad}}
<syntaxhighlight lang="c++">bool WasAnalogueInputFromPad()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}