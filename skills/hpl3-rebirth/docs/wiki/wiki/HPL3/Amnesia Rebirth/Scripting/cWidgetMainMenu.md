{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cWidgetMainMenu has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|[[../cWidgetMenuItem|cWidgetMenuItem]]|[[#AddMenuItem|AddMenuItem]](const [[../tWString|tWString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#AddSeparator|AddSeparator]]()|}}
{{CodeDocSummaryItem|[[../cGuiGlobalShortcut|cGuiGlobalShortcut]]|[[#AddShortcut|AddShortcut]](int alKeyModifiers, [[../eKey|eKey]] aKey, [[../eGuiMessage|eGuiMessage]] aMsg <nowiki>=</nowiki> eGuiMessage_ButtonPressed, const [[../cGuiMessageData|cGuiMessageData]] &in aData <nowiki>=</nowiki> cGuiMessageData, bool abBypassVisibility <nowiki>=</nowiki> true, bool abBypassEnabled <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#AttachChild|AttachChild]]([[../iWidget|iWidget@]] apChild)|}}
{{CodeDocSummaryItem|void|[[#CenterGlobalPositionInSet|CenterGlobalPositionInSet]]()|}}
{{CodeDocSummaryItem|void|[[#ClearMenuItems|ClearMenuItems]]()|}}
{{CodeDocSummaryItem|bool|[[#ClipsGraphics|ClipsGraphics]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetArrowOffset|GetArrowOffset]]()|}}
{{CodeDocSummaryItem|bool|[[#GetCallbacksDisabled|GetCallbacksDisabled]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCheckOffset|GetCheckOffset]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetChildrenOffset|GetChildrenOffset]]()|}}
{{CodeDocSummaryItem|bool|[[#GetClipActive|GetClipActive]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetColorMul|GetColorMul]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetDefaultFontColor|GetDefaultFontColor]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetDefaultFontSize|GetDefaultFontSize]]()|}}
{{CodeDocSummaryItem|[[../iFontData|iFontData]]|[[#GetDefaultFontType|GetDefaultFontType]]()|}}
{{CodeDocSummaryItem|[[../iWidget|iWidget]]|[[#GetFocusNavigation|GetFocusNavigation]]([[../eUIArrow|eUIArrow]] aDir)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetGlobalPosition|GetGlobalPosition]]()|}}
{{CodeDocSummaryItem|[[../cWidgetMenuItem|cWidgetMenuItem]]|[[#GetHighlightedItem|GetHighlightedItem]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetLocalPosition|GetLocalPosition]]()|}}
{{CodeDocSummaryItem|float|[[#GetMenuItemWidth|GetMenuItemWidth]]()|}}
{{CodeDocSummaryItem|bool|[[#GetMouseIsOver|GetMouseIsOver]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../iWidget|iWidget]]|[[#GetParent|GetParent]]()|}}
{{CodeDocSummaryItem|[[../cWidgetMenuItem|cWidgetMenuItem]]|[[#GetParentItem|GetParentItem]]()|}}
{{CodeDocSummaryItem|[[../iWidgetMenu|iWidgetMenu]]|[[#GetParentMenu|GetParentMenu]]()|}}
{{CodeDocSummaryItem|[[../cGuiGfxElement|cGuiGfxElement]]|[[#GetPointerGfx|GetPointerGfx]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetScrollAmount|GetScrollAmount]]()|}}
{{CodeDocSummaryItem|[[../cGuiSet|cGuiSet]]|[[#GetSet|GetSet]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetSize|GetSize]]()|}}
{{CodeDocSummaryItem|[[../tWString|tWString]]|[[#GetText|GetText]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetTextOffset|GetTextOffset]]()|}}
{{CodeDocSummaryItem|[[../tWString|tWString]]|[[#GetToolTip|GetToolTip]]()|}}
{{CodeDocSummaryItem|[[../iWidget|iWidget]]|[[#GetToolTipWidget|GetToolTipWidget]]()|}}
{{CodeDocSummaryItem|[[../iWidgetMenu|iWidgetMenu]]|[[#GetTopMostMenu|GetTopMostMenu]]()|}}
{{CodeDocSummaryItem|[[../eWidgetType|eWidgetType]]|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|int|[[#GetUserValue|GetUserValue]]()|}}
{{CodeDocSummaryItem|bool|[[#HasFocus|HasFocus]]()|}}
{{CodeDocSummaryItem|bool|[[#HasFocusNavigation|HasFocusNavigation]]()|}}
{{CodeDocSummaryItem|void|[[#Hide|Hide]]()|}}
{{CodeDocSummaryItem|void|[[#Init|Init]]()|}}
{{CodeDocSummaryItem|bool|[[#IsConnectedTo|IsConnectedTo]]([[../iWidget|iWidget@]] apWidget, bool abIsStartWidget <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|bool|[[#IsConnectedToChildren|IsConnectedToChildren]]()|}}
{{CodeDocSummaryItem|bool|[[#IsEnabled|IsEnabled]]()|}}
{{CodeDocSummaryItem|bool|[[#IsGlobalKeyPressListener|IsGlobalKeyPressListener]]()|}}
{{CodeDocSummaryItem|bool|[[#IsGlobalUIInputListener|IsGlobalUIInputListener]]()|}}
{{CodeDocSummaryItem|bool|[[#IsRightUnderMouse|IsRightUnderMouse]]()|}}
{{CodeDocSummaryItem|bool|[[#IsSubmenuOpen|IsSubmenuOpen]]()|}}
{{CodeDocSummaryItem|bool|[[#IsVisible|IsVisible]]()|}}
{{CodeDocSummaryItem|bool|[[#PointIsInside|PointIsInside]](const [[../cVector2f|cVector2f]] &in avPoint, bool abOnlyClipped)|}}
{{CodeDocSummaryItem|bool|[[#ProcessMessage|ProcessMessage]]([[../eGuiMessage|eGuiMessage]] aMessage, const [[../cGuiMessageData|cGuiMessageData]] &in aData, bool abSkipVisCheck <nowiki>=</nowiki> false, bool abSkipEnabledCheck <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#RemoveChild|RemoveChild]]([[../iWidget|iWidget@]] apChild)|}}
{{CodeDocSummaryItem|void|[[#SetAffectedByScroll|SetAffectedByScroll]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetArrowPos|SetArrowPos]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetCallbacksDisabled|SetCallbacksDisabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCheckPos|SetCheckPos]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetChildrenOffset|SetChildrenOffset]](const [[../cVector3f|cVector3f]] &in )|}}
{{CodeDocSummaryItem|void|[[#SetClipActive|SetClipActive]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetColorMul|SetColorMul]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetConnectedToChildren|SetConnectedToChildren]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultFontColor|SetDefaultFontColor]](const [[../cColor|cColor]] &in aColor)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultFontSize|SetDefaultFontSize]](const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultFontType|SetDefaultFontType]]([[../iFontData|iFontData@]] apFont)|}}
{{CodeDocSummaryItem|void|[[#SetEnabled|SetEnabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFocusNavigation|SetFocusNavigation]]([[../eUIArrow|eUIArrow]] aDir, [[../iWidget|iWidget@]] apWidget)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalKeyPressListener|SetGlobalKeyPressListener]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalPosition|SetGlobalPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetGlobalUIInputListener|SetGlobalUIInputListener]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetHighlightedItem|SetHighlightedItem]]([[../cWidgetMenuItem|cWidgetMenuItem@]] apItem)|}}
{{CodeDocSummaryItem|void|[[#SetMustHide|SetMustHide]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetName|SetName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetParentItem|SetParentItem]]([[../cWidgetMenuItem|cWidgetMenuItem@]] apParentItem)|}}
{{CodeDocSummaryItem|void|[[#SetPosition|SetPosition]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetPrevAttention|SetPrevAttention]]([[../iWidget|iWidget@]] apWidget)|}}
{{CodeDocSummaryItem|void|[[#SetScrollAmount|SetScrollAmount]](const [[../cVector3f|cVector3f]] &in avX)|}}
{{CodeDocSummaryItem|void|[[#SetSize|SetSize]](const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#SetText|SetText]](const [[../tWString|tWString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#SetTextPos|SetTextPos]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|void|[[#SetToolTip|SetToolTip]](const [[../tWString|tWString]] &in asToolTip)|}}
{{CodeDocSummaryItem|void|[[#SetToolTipEnabled|SetToolTipEnabled]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetUserValue|SetUserValue]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetVisible|SetVisible]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddMenuItem}}
<syntaxhighlight lang="c++">cWidgetMenuItem@ AddMenuItem(const tWString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|cWidgetMenuItem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddSeparator}}
<syntaxhighlight lang="c++">void AddSeparator()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddShortcut}}
<syntaxhighlight lang="c++">cGuiGlobalShortcut@ AddShortcut(int alKeyModifiers,
                                eKey aKey,
                                eGuiMessage aMsg = eGuiMessage_ButtonPressed,
                                const cGuiMessageData &in aData = cGuiMessageData,
                                bool abBypassVisibility = true,
                                bool abBypassEnabled = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alKeyModifiers|int|}}
{{CodeDocDetailParam|aKey|[[../eKey|eKey]]|}}
{{CodeDocDetailParam|aMsg|[[../eGuiMessage|eGuiMessage]]|}}
{{CodeDocDetailParam|aData|[[../cGuiMessageData|cGuiMessageData]]|}}
{{CodeDocDetailParam|abBypassVisibility|bool|}}
{{CodeDocDetailParam|abBypassEnabled|bool|}}
{{CodeDocDetailReturn|cGuiGlobalShortcut@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AttachChild}}
<syntaxhighlight lang="c++">void AttachChild(iWidget@ apChild)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apChild|[[../iWidget|iWidget@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CenterGlobalPositionInSet}}
<syntaxhighlight lang="c++">void CenterGlobalPositionInSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearMenuItems}}
<syntaxhighlight lang="c++">void ClearMenuItems()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClipsGraphics}}
<syntaxhighlight lang="c++">bool ClipsGraphics()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetArrowOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetArrowOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCallbacksDisabled}}
<syntaxhighlight lang="c++">bool GetCallbacksDisabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCheckOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetCheckOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChildrenOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetChildrenOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetClipActive}}
<syntaxhighlight lang="c++">bool GetClipActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetColorMul}}
<syntaxhighlight lang="c++">const cColor& GetColorMul()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultFontColor}}
<syntaxhighlight lang="c++">const cColor& GetDefaultFontColor()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cColor&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultFontSize}}
<syntaxhighlight lang="c++">const cVector2f& GetDefaultFontSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultFontType}}
<syntaxhighlight lang="c++">iFontData@ GetDefaultFontType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iFontData@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFocusNavigation}}
<syntaxhighlight lang="c++">iWidget@ GetFocusNavigation(eUIArrow aDir)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eUIArrow|eUIArrow]]|}}
{{CodeDocDetailReturn|iWidget@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGlobalPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetGlobalPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHighlightedItem}}
<syntaxhighlight lang="c++">cWidgetMenuItem@ GetHighlightedItem()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cWidgetMenuItem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetLocalPosition}}
<syntaxhighlight lang="c++">const cVector3f& GetLocalPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMenuItemWidth}}
<syntaxhighlight lang="c++">float GetMenuItemWidth()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMouseIsOver}}
<syntaxhighlight lang="c++">bool GetMouseIsOver()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParent}}
<syntaxhighlight lang="c++">iWidget@ GetParent()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iWidget@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentItem}}
<syntaxhighlight lang="c++">cWidgetMenuItem@ GetParentItem()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cWidgetMenuItem@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetParentMenu}}
<syntaxhighlight lang="c++">iWidgetMenu@ GetParentMenu()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iWidgetMenu@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPointerGfx}}
<syntaxhighlight lang="c++">cGuiGfxElement@ GetPointerGfx()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiGfxElement@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScrollAmount}}
<syntaxhighlight lang="c++">const cVector3f& GetScrollAmount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSet}}
<syntaxhighlight lang="c++">cGuiSet@ GetSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSize}}
<syntaxhighlight lang="c++">const cVector2f& GetSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetText}}
<syntaxhighlight lang="c++">const tWString& GetText()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTextOffset}}
<syntaxhighlight lang="c++">const cVector3f& GetTextOffset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetToolTip}}
<syntaxhighlight lang="c++">const tWString& GetToolTip()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tWString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetToolTipWidget}}
<syntaxhighlight lang="c++">iWidget@ GetToolTipWidget()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iWidget@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTopMostMenu}}
<syntaxhighlight lang="c++">iWidgetMenu@ GetTopMostMenu()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iWidgetMenu@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">eWidgetType GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|eWidgetType|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUserValue}}
<syntaxhighlight lang="c++">int GetUserValue()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasFocus}}
<syntaxhighlight lang="c++">bool HasFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|HasFocusNavigation}}
<syntaxhighlight lang="c++">bool HasFocusNavigation()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Hide}}
<syntaxhighlight lang="c++">void Hide()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Init}}
<syntaxhighlight lang="c++">void Init()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsConnectedTo}}
<syntaxhighlight lang="c++">bool IsConnectedTo(iWidget@ apWidget,
                   bool abIsStartWidget = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWidget|[[../iWidget|iWidget@]]|}}
{{CodeDocDetailParam|abIsStartWidget|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsConnectedToChildren}}
<syntaxhighlight lang="c++">bool IsConnectedToChildren()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsEnabled}}
<syntaxhighlight lang="c++">bool IsEnabled()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsGlobalKeyPressListener}}
<syntaxhighlight lang="c++">bool IsGlobalKeyPressListener()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsGlobalUIInputListener}}
<syntaxhighlight lang="c++">bool IsGlobalUIInputListener()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsRightUnderMouse}}
<syntaxhighlight lang="c++">bool IsRightUnderMouse()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsSubmenuOpen}}
<syntaxhighlight lang="c++">bool IsSubmenuOpen()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsVisible}}
<syntaxhighlight lang="c++">bool IsVisible()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PointIsInside}}
<syntaxhighlight lang="c++">bool PointIsInside(const cVector2f &in avPoint,
                   bool abOnlyClipped)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPoint|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|abOnlyClipped|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ProcessMessage}}
<syntaxhighlight lang="c++">bool ProcessMessage(eGuiMessage aMessage,
                    const cGuiMessageData &in aData,
                    bool abSkipVisCheck = false,
                    bool abSkipEnabledCheck = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMessage|[[../eGuiMessage|eGuiMessage]]|}}
{{CodeDocDetailParam|aData|[[../cGuiMessageData|cGuiMessageData]]|}}
{{CodeDocDetailParam|abSkipVisCheck|bool|}}
{{CodeDocDetailParam|abSkipEnabledCheck|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveChild}}
<syntaxhighlight lang="c++">void RemoveChild(iWidget@ apChild)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apChild|[[../iWidget|iWidget@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAffectedByScroll}}
<syntaxhighlight lang="c++">void SetAffectedByScroll(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetArrowPos}}
<syntaxhighlight lang="c++">void SetArrowPos(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCallbacksDisabled}}
<syntaxhighlight lang="c++">void SetCallbacksDisabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCheckPos}}
<syntaxhighlight lang="c++">void SetCheckPos(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetChildrenOffset}}
<syntaxhighlight lang="c++">void SetChildrenOffset(const cVector3f &in )</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam||[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetClipActive}}
<syntaxhighlight lang="c++">void SetClipActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetColorMul}}
<syntaxhighlight lang="c++">void SetColorMul(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetConnectedToChildren}}
<syntaxhighlight lang="c++">void SetConnectedToChildren(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultFontColor}}
<syntaxhighlight lang="c++">void SetDefaultFontColor(const cColor &in aColor)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultFontSize}}
<syntaxhighlight lang="c++">void SetDefaultFontSize(const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultFontType}}
<syntaxhighlight lang="c++">void SetDefaultFontType(iFontData@ apFont)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apFont|[[../iFontData|iFontData@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEnabled}}
<syntaxhighlight lang="c++">void SetEnabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFocusNavigation}}
<syntaxhighlight lang="c++">void SetFocusNavigation(eUIArrow aDir,
                        iWidget@ apWidget)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aDir|[[../eUIArrow|eUIArrow]]|}}
{{CodeDocDetailParam|apWidget|[[../iWidget|iWidget@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalKeyPressListener}}
<syntaxhighlight lang="c++">void SetGlobalKeyPressListener(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalPosition}}
<syntaxhighlight lang="c++">void SetGlobalPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGlobalUIInputListener}}
<syntaxhighlight lang="c++">void SetGlobalUIInputListener(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetHighlightedItem}}
<syntaxhighlight lang="c++">void SetHighlightedItem(cWidgetMenuItem@ apItem)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apItem|[[../cWidgetMenuItem|cWidgetMenuItem@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMustHide}}
<syntaxhighlight lang="c++">void SetMustHide(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetName}}
<syntaxhighlight lang="c++">void SetName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetParentItem}}
<syntaxhighlight lang="c++">void SetParentItem(cWidgetMenuItem@ apParentItem)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apParentItem|[[../cWidgetMenuItem|cWidgetMenuItem@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPosition}}
<syntaxhighlight lang="c++">void SetPosition(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetPrevAttention}}
<syntaxhighlight lang="c++">void SetPrevAttention(iWidget@ apWidget)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWidget|[[../iWidget|iWidget@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetScrollAmount}}
<syntaxhighlight lang="c++">void SetScrollAmount(const cVector3f &in avX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avX|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetSize}}
<syntaxhighlight lang="c++">void SetSize(const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetText}}
<syntaxhighlight lang="c++">void SetText(const tWString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTextPos}}
<syntaxhighlight lang="c++">void SetTextPos(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetToolTip}}
<syntaxhighlight lang="c++">void SetToolTip(const tWString &in asToolTip)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asToolTip|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetToolTipEnabled}}
<syntaxhighlight lang="c++">void SetToolTipEnabled(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUserValue}}
<syntaxhighlight lang="c++">void SetUserValue(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVisible}}
<syntaxhighlight lang="c++">void SetVisible(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}