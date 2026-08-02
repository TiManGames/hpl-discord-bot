{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxInputHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddKeyboardLayoutKey || [[../eKey|<syntaxhighlight lang="c++" inline>eKey aKey</syntaxhighlight>]],<br />[[../eLuxKeyboardLayoutType|<syntaxhighlight lang="c++" inline>eLuxKeyboardLayoutType aType</syntaxhighlight>]],<br />[[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfxKey</syntaxhighlight>]],<br />[[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData& aLabelKey</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddKeyboardLayoutRange || [[../eKey|<syntaxhighlight lang="c++" inline>eKey aFirstKey</syntaxhighlight>]],<br />[[../eKey|<syntaxhighlight lang="c++" inline>eKey aLastKey</syntaxhighlight>]],<br />[[../eLuxKeyboardLayoutType|<syntaxhighlight lang="c++" inline>eLuxKeyboardLayoutType aType</syntaxhighlight>]],<br />[[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfxKey</syntaxhighlight>]],<br />[[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData& aLabelKey</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddPresetToProfile || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asProfile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asPreset</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearKeyboardLayout ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateAction || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abConfigurable</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCat</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateActionInput || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asInputType</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alActionId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateAnalogAction || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abConfigurable</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCat</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alAxis</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMul</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alAnalogId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateAnalogGamepadAction || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCat</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alAnalogId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSmoothness</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alDirectionLimit</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateAnalogGamepadActionInput || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asInputType</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alActionId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateDebugAction || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alId</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateGamepadProfile || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asPrefix</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FetchGamepadInputLayoutString || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asInputName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>tString& asPrefixName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>tString& asLayoutString</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetActionName || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAnalog</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetActionsAssociatedToGamepadControl || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asProfile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asPreset</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asControl</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>tString& asActions</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGamepadMappingAction || <syntaxhighlight lang="c++" inline>int alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int &out alAction</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>tString &out asPrimary</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool &out abAnalog</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetGamepadMappingActionNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetGamepadSensitivity ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGamepadWasLastDeviceUsed ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetLastUsedGamepadIndex || <syntaxhighlight lang="c++" inline>float afTimeLimit = -1.0f</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetLatestKeyPressed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMouseSensitivity ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetRelMousePos ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSmoothMouse ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetSmoothMousePos || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avRelPosMouse</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimeSinceGamepadWasUsed || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsGamepadConnected ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsYAxisInverted ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LoadKeyConfig ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetSmoothMousePos ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGamepadColor || <syntaxhighlight lang="c++" inline>int alDevice</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGamepadMapping || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asProfile</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asPreset</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGamepadSensitivity || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetKeyboardLayoutDefaults || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfxKey</syntaxhighlight>]],<br />[[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData& aLabelKey</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxSmoothMousePos || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMouseLayout ||  ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMouseSensitivity || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPrevSmoothMousePosMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPrimaryGamepad || <syntaxhighlight lang="c++" inline>int alDevice</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRumble || <syntaxhighlight lang="c++" inline>int alDevice</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStrength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDuration</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSmoothMouse || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || WasAnalogueInputFromPad ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__