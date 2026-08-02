{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cGuiSet has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| [[../cWidgetButton|<syntaxhighlight lang="c++" inline>cWidgetButton@</syntaxhighlight>]] || CreateWidgetButton || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abToggleable</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetCheckBox|<syntaxhighlight lang="c++" inline>cWidgetCheckBox@</syntaxhighlight>]] || CreateWidgetCheckBox || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetComboBox|<syntaxhighlight lang="c++" inline>cWidgetComboBox@</syntaxhighlight>]] || CreateWidgetComboBox || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetContextMenu|<syntaxhighlight lang="c++" inline>cWidgetContextMenu@</syntaxhighlight>]] || CreateWidgetContextMenu || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetDummy|<syntaxhighlight lang="c++" inline>cWidgetDummy@</syntaxhighlight>]] || CreateWidgetDummy || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetFrame|<syntaxhighlight lang="c++" inline>cWidgetFrame@</syntaxhighlight>]] || CreateWidgetFrame || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDrawFrame</syntaxhighlight>,<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abHScrollBar</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abVScrollBar</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetGroup|<syntaxhighlight lang="c++" inline>cWidgetGroup@</syntaxhighlight>]] || CreateWidgetGroup || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetImage|<syntaxhighlight lang="c++" inline>cWidgetImage@</syntaxhighlight>]] || CreateWidgetImage || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asFile</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../eGuiMaterial|<syntaxhighlight lang="c++" inline>eGuiMaterial aMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAnimate</syntaxhighlight>,<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetLabel|<syntaxhighlight lang="c++" inline>cWidgetLabel@</syntaxhighlight>]] || CreateWidgetLabel || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetListBox|<syntaxhighlight lang="c++" inline>cWidgetListBox@</syntaxhighlight>]] || CreateWidgetListBox || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetMainMenu|<syntaxhighlight lang="c++" inline>cWidgetMainMenu@</syntaxhighlight>]] || CreateWidgetMainMenu || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetMenuItem|<syntaxhighlight lang="c++" inline>cWidgetMenuItem@</syntaxhighlight>]] || CreateWidgetMenuItem || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetMultiPropertyListBox|<syntaxhighlight lang="c++" inline>cWidgetMultiPropertyListBox@</syntaxhighlight>]] || CreateWidgetMultiPropertyListBox || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetSlider|<syntaxhighlight lang="c++" inline>cWidgetSlider@</syntaxhighlight>]] || CreateWidgetSlider || [[../eWidgetSliderOrientation|<syntaxhighlight lang="c++" inline>eWidgetSliderOrientation aOrientation</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMaxValue</syntaxhighlight>,<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetTabFrame|<syntaxhighlight lang="c++" inline>cWidgetTabFrame@</syntaxhighlight>]] || CreateWidgetTabFrame || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAllowHScroll</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAllowVScroll</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetTextBox|<syntaxhighlight lang="c++" inline>cWidgetTextBox@</syntaxhighlight>]] || CreateWidgetTextBox || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../eWidgetTextBoxInputType|<syntaxhighlight lang="c++" inline>eWidgetTextBoxInputType aeType</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afNumericAdd</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abShowButtons</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cWidgetWindow|<syntaxhighlight lang="c++" inline>cWidgetWindow@</syntaxhighlight>]] || CreateWidgetWindow || <syntaxhighlight lang="c++" inline>int alFlags</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avLocalPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apParent</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyAllWidgets ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyWidget || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDestroyChildren</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawFont || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iFontData|<syntaxhighlight lang="c++" inline>iFontData@ apFont</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawFontEx || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asText</syntaxhighlight>]],<br />[[../iFontData|<syntaxhighlight lang="c++" inline>iFontData@ apFont</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]],<br />[[../eFontAlign|<syntaxhighlight lang="c++" inline>eFontAlign aAlign</syntaxhighlight>]],<br />[[../eGuiMaterial|<syntaxhighlight lang="c++" inline>eGuiMaterial aMaterial</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawGfx || [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@ apGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawGfx || [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@ apGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawGfx || [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@ apGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]],<br />[[../eGuiMaterial|<syntaxhighlight lang="c++" inline>eGuiMaterial aMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRotationAngle</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abUseCustomPivot</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avCustomPivot</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || Get3DSize ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || Get3DTransform ||   ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetAttentionWidget ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCullBackface ||   ||
|-
| [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@</syntaxhighlight>]] || GetCurrentPointer ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDrawMouse ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetDrawPriority ||   ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetFocusedWidget ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetMouseMovementEnabled ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetMousePos ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMouseZ ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetRootWidgetClips ||   ||
|-
| [[../cGuiSkin|<syntaxhighlight lang="c++" inline>cGuiSkin@</syntaxhighlight>]] || GetSkin ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetVirtualSize ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetVirtualSizeOffset ||   ||
|-
| [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@</syntaxhighlight>]] || GetWidgetFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || Is3D ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsValidWidget || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveWindow || [[../cWidgetWindow|<syntaxhighlight lang="c++" inline>cWidgetWindow@ apWin</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetMouseOver ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Set3DSize || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Set3DTransform || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttentionWidget || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abClearFocus</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCullBackface || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCurrentPointer || [[../cGuiGfxElement|<syntaxhighlight lang="c++" inline>cGuiGfxElement@ apGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDrawMouse || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDrawPriority || <syntaxhighlight lang="c++" inline>int alPrio</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFocusedWidget || [[../iWidget|<syntaxhighlight lang="c++" inline>iWidget@ apWidget</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckForValidity = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIs3D || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLastWindowZ || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMouseMovementEnabled || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMouseZ || <syntaxhighlight lang="c++" inline>float afZ</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRootWidgetClips || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkin || [[../cGuiSkin|<syntaxhighlight lang="c++" inline>cGuiSkin@ apSkin</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVirtualSize || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinZ</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxZ</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avOffset</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWindowOnTop || [[../cWidgetWindow|<syntaxhighlight lang="c++" inline>cWidgetWindow@ apWin</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ShowContextMenu || [[../cWidgetContextMenu|<syntaxhighlight lang="c++" inline>cWidgetContextMenu@ apMenu</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__