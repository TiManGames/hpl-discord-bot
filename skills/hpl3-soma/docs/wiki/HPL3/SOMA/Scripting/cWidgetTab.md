{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cWidgetTab has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| [[../cGuiGlobalShortcut|<syntaxhighlight lang="c++" inline>cGuiGlobalShortcut@</syntaxhighlight>]] || AddShortcut || <syntaxhighlight lang="c++" inline>int alKeyModifiers</syntaxhighlight>,<br />[[../eKey|<syntaxhighlight lang="c++" inline>eKey aKey</syntaxhighlight>]],<br />[[../eGuiMessage|<syntaxhighlight lang="c++" inline>eGuiMessage aMsg = eGuiMessage_ButtonPressed</syntaxhighlight>]],<br />[[../cGuiMessageData|<syntaxhighlight lang="c++" inline>const cGuiMessageData &in aData = cGuiMessageData</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abBypassVisibility = true</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abBypassEnabled = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachChild || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apChild</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CenterGlobalPositionInSet ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ClipsGraphics ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCallbacksDisabled ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetChildrenOffset ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetClipActive ||  ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetColorMul ||  ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetDefaultFontColor ||  ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetDefaultFontSize ||  ||
|-
| [[../iFontData|<syntaxhighlight lang="c++" inline>iFontData@</syntaxhighlight>]] || GetDefaultFontType ||  ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetFocusNavigation || [[../eUIArrow|<syntaxhighlight lang="c++" inline>eUIArrow aDir</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetGlobalPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetIndex ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetLocalPosition ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetMouseIsOver ||  ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetParent ||   ||
|-
| [[../cWidgetTabFrame|<syntaxhighlight lang="c++" inline>cWidgetTabFrame@</syntaxhighlight>]] || GetParentTabFrame ||   ||
|-
| [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@</syntaxhighlight>]] || GetPointerGfx ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetScrollAmount ||  ||
|-
| [[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@</syntaxhighlight>]] || GetSet ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetSize ||  ||
|-
| [[../tWString|<syntaxhighlight lang="c++" inline>const tWString&</syntaxhighlight>]] || GetText ||  ||
|-
| [[../tWString|<syntaxhighlight lang="c++" inline>const tWString&</syntaxhighlight>]] || GetToolTip ||   ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetToolTipWidget ||   ||
|-
| [[../eWidgetType|<syntaxhighlight lang="c++" inline>eWidgetType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUserValue ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasFocusNavigation ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Init ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsConnectedTo || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abIsStartWidget = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsConnectedToChildren ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsEnabled ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFocusedTab ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsGlobalKeyPressListener ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsGlobalUIInputListener ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsRightUnderMouse ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsVisible ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PointIsInside || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avPoint</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abOnlyClipped</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ProcessMessage || [[../eGuiMessage|<syntaxhighlight lang="c++" inline>eGuiMessage aMessage</syntaxhighlight>]],<br />[[../cGuiMessageData|<syntaxhighlight lang="c++" inline>const cGuiMessageData &in aData</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSkipVisCheck = false</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipEnabledCheck = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apChild</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAffectedByScroll || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCallbacksDisabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetChildrenOffset || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetClipActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColorMul || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetConnectedToChildren || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultFontColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultFontSize || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultFontType || [[../iFontData|<syntaxhighlight lang="c++" inline>iFontData@ apFont</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEnabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFocusedTab || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFocusNavigation || [[../eUIArrow|<syntaxhighlight lang="c++" inline>eUIArrow aDir</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalKeyPressListener || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGlobalUIInputListener || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIcon || [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@ apIcon</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLabelPosX || <syntaxhighlight lang="c++" inline>float afPosX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScrollAmount || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSize || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetText || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetToolTip || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asToolTip</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetToolTipEnabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUserValue || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__