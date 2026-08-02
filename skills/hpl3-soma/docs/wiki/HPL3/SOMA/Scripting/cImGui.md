{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cImGui has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ActionIsDown || [[../eImGuiAction|<syntaxhighlight lang="c++" inline>eImGuiAction aAction</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckIfUsed = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ActionTriggered || [[../eImGuiAction|<syntaxhighlight lang="c++" inline>eImGuiAction aAction</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckIfUsed = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddItemGfx || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddItemString || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asStr</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddItemStringList || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asStrList</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddLayoutHorizontalSpace || <syntaxhighlight lang="c++" inline>float afWidth</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afHeight = 0</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddLayoutVerticalSpace || <syntaxhighlight lang="c++" inline>float afHeight</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddLineStripVertex || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avVertex</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Begin || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || CalcWidgetSize || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avArgSize</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avDefaultSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckBecamePressedAction || <syntaxhighlight lang="c++" inline>bool abCheckConfirm</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckMouseLeft</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckCurrentWidgetBecamePressed || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckConfirm</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckMouseLeft</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckCurrentWidgetIsPressed || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCheckConfirm</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckMouseLeft</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckIsPressedAction || <syntaxhighlight lang="c++" inline>bool abCheckConfirm</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCheckMouseLeft</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckMouseHasMoved ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckMouseOver || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearItems ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearPrevData ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearStates ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClipAreaBegin || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClipAreaEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyAssets ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoCheckBox || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefaultChecked</syntaxhighlight>,<br />[[../cImGuiCheckBoxData|<syntaxhighlight lang="c++" inline>const cImGuiCheckBoxData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoCheckBox || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefaultChecked</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoFrame || [[../cImGuiFrameData|<syntaxhighlight lang="c++" inline>const cImGuiFrameData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoFrame || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoGauge || [[../cImGuiGaugeData|<syntaxhighlight lang="c++" inline>const cImGuiGaugeData& aData</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFillAmount</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoGauge || <syntaxhighlight lang="c++" inline>float afFillAmount</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoImage || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfxImage</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoLabel || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFontSizeMul = 1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoLabel || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFontSizeMul = 1</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoMouse || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avOffset = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || DoMultiSelect || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefaultSelectedItem</syntaxhighlight>,<br />[[../cImGuiMultiSelectData|<syntaxhighlight lang="c++" inline>const cImGuiMultiSelectData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || DoMultiSelect || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefaultSelectedItem</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || DoMultiToggle || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefaultSelectedItem</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alColumnNum</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSpacing</syntaxhighlight>]],<br />[[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || DoMultiToggle || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefaultSelectedItem</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alColumnNum</syntaxhighlight>,<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSpacing</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoRepeatButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoRepeatButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoSliderHorizontal || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefaultValue</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStepSize</syntaxhighlight>,<br />[[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoSliderHorizontal || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefaultValue</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStepSize = -1</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoSliderVertical || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefaultValue</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStepSize</syntaxhighlight>,<br />[[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoSliderVertical || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefaultValue</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMin</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMax</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStepSize = -1</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoTextFrame || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avEdgeSpacing</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRowSpace</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStartRowOffset</syntaxhighlight>,<br />[[../cImGuiTextFrameData|<syntaxhighlight lang="c++" inline>const cImGuiTextFrameData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || DoTextFrame || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avEdgeSpacing</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRowSpace</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStartRowOffset</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoToggleButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefaultChecked</syntaxhighlight>,<br />[[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || DoToggleButton || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDefaultChecked</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoWindowEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoWindowStart || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asCaption</syntaxhighlight>]],<br />[[../cImGuiWindowData|<syntaxhighlight lang="c++" inline>const cImGuiWindowData& aData</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abClip = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DoWindowStart || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString& asCaption</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize = -1</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abClip = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawAlignedGfx || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../eImGuiAlign|<syntaxhighlight lang="c++" inline>eImGuiAlign aAlignment</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aCol = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColTopLeft = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColTopRight = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColBotRight = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColBotLeft = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawAll ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawAndClearLineStrip || <syntaxhighlight lang="c++" inline>float afZ</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afThickness</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor& aCol = cColor_White</syntaxhighlight>]],<br />[[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx = cImGuiGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawFont || [[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br />[[../cImGuiFont|<syntaxhighlight lang="c++" inline>const cImGuiFont& aFont</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../eFontAlign|<syntaxhighlight lang="c++" inline>eFontAlign aAlign</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSizeMul = 1</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColMul = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawFrame || [[../cImGuiFrameGfx|<syntaxhighlight lang="c++" inline>const cImGuiFrameGfx& aGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawGfx || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColTopLeft = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColTopRight = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColBotRight = cColor</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColBotLeft = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawLine || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avStart</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avEnd</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afZ</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afThickness = 1.0f</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol = cColor</syntaxhighlight>]],<br />[[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx = cImGuiGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || End ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || FadeOscillateColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aStart</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aGoal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || FadeOscillateFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afStart</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afGoal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || FadeOscillateVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGoal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || FadeOver || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeStateColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aGoalVal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abReplaceIfExist = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeStateFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afGoalVal</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abReplaceIfExist = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeStateVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avGoalVal</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight>,<br />[[../eEasing|<syntaxhighlight lang="c++" inline>eEasing aType = eEasing_QuadInOut</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abReplaceIfExist = true</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetCurrentGroupPos ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetCurrentGroupSize ||   ||
|-
| [[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData&</syntaxhighlight>]] || GetDefaultButton ||   ||
|-
| [[../cImGuiCheckBoxData|<syntaxhighlight lang="c++" inline>const cImGuiCheckBoxData&</syntaxhighlight>]] || GetDefaultCheckBox ||   ||
|-
| [[../cImGuiFrameData|<syntaxhighlight lang="c++" inline>const cImGuiFrameData&</syntaxhighlight>]] || GetDefaultFrame ||   ||
|-
| [[../cImGuiGaugeData|<syntaxhighlight lang="c++" inline>const cImGuiGaugeData&</syntaxhighlight>]] || GetDefaultGauge ||   ||
|-
| [[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData&</syntaxhighlight>]] || GetDefaultLabel ||   ||
|-
| [[../cImGuiMultiSelectData|<syntaxhighlight lang="c++" inline>const cImGuiMultiSelectData&</syntaxhighlight>]] || GetDefaultMultiSelect ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDefaultOrCurrentFloat || <syntaxhighlight lang="c++" inline>uint64 alDefaultVarId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint64 alCurrentVarId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDefaultValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetDefaultOrCurrentInt || <syntaxhighlight lang="c++" inline>uint64 alDefaultVarId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint64 alCurrentVarId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alDefaultValue</syntaxhighlight> ||
|-
| [[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData&</syntaxhighlight>]] || GetDefaultSliderHorizontal ||   ||
|-
| [[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData&</syntaxhighlight>]] || GetDefaultSliderVertical ||   ||
|-
| [[../cImGuiTextFrameData|<syntaxhighlight lang="c++" inline>const cImGuiTextFrameData&</syntaxhighlight>]] || GetDefaultTextFrame ||   ||
|-
| [[../cImGuiWindowData|<syntaxhighlight lang="c++" inline>const cImGuiWindowData&</syntaxhighlight>]] || GetDefaultWindow ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFontLength || [[../cImGuiFont|<syntaxhighlight lang="c++" inline>const cImGuiFont &in aFont</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afSizeMul</syntaxhighlight>,<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetFontWordWrapRows || [[../cImGuiFont|<syntaxhighlight lang="c++" inline>const cImGuiFont &in aFont</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afSizeMul</syntaxhighlight>,<br />[[../tWString|<syntaxhighlight lang="c++" inline>const tWString &in asText</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLineWidth</syntaxhighlight> ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetGfxSize || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>uint64</syntaxhighlight> || GetIdFromNameAndCheckCollision || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alTableIdx</syntaxhighlight> ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetMousePosition ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetMousePosition3D ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetMouseRel ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetMouseRel3D ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@</syntaxhighlight>]] || GetSet ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetShowMouse ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetShowMouseAutomatically ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetStateColor || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aDefault = cColor</syntaxhighlight>]] ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || GetStateColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aDefault = cColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStateFloat || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afDefault = 0.0f</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStateFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afDefault = 0.0f</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetStateInt || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alDefault = 0</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetStateInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alDefault = 0</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetStateVector3f || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDefault = 0.0f</syntaxhighlight>]] ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetStateVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avDefault = cVector3f</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimeCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTimeStep ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || GetUsedFontSize || [[../cImGuiFont|<syntaxhighlight lang="c++" inline>const cImGuiFont &in aFont</syntaxhighlight>]] ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetUsedGfxSize || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfx</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avCustomSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GroupBegin || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = 0</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abClip = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GroupEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateColor || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateFloat || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateInt || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateVector3f || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncStateVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFading || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFirstRun ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LayoutBegin || [[../eImGuiLayout|<syntaxhighlight lang="c++" inline>eImGuiLayout aType</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos = 0</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize = -1</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSpacing = 0</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LayoutEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || LockMouseFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || MouseFocusIsLocked ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PopModifiers ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevBecameInFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevBecamePressed ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevInFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevMouseOver ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || PrevPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevPressed ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f&</syntaxhighlight>]] || PrevSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevUpdated ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || PrevWasInFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || PushModifiers ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || RepeatTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetModifiers ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SendAction || [[../eImGuiAction|<syntaxhighlight lang="c++" inline>eImGuiAction aAction</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abDown</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abTriggered</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SendMousePosition || [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avPos</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avRel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SendMouseVirtualPosition || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avRel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAlignment || [[../eImGuiAlign|<syntaxhighlight lang="c++" inline>eImGuiAlign aAlign</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultButton || [[../cImGuiButtonData|<syntaxhighlight lang="c++" inline>const cImGuiButtonData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultCheckBox || [[../cImGuiCheckBoxData|<syntaxhighlight lang="c++" inline>const cImGuiCheckBoxData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultFont || [[../cImGuiFont|<syntaxhighlight lang="c++" inline>const cImGuiFont &in aFont</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultFrame || [[../cImGuiFrameData|<syntaxhighlight lang="c++" inline>const cImGuiFrameData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultGauge || [[../cImGuiGaugeData|<syntaxhighlight lang="c++" inline>const cImGuiGaugeData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultLabel || [[../cImGuiLabelData|<syntaxhighlight lang="c++" inline>const cImGuiLabelData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultMouse || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultMultiSelect || [[../cImGuiMultiSelectData|<syntaxhighlight lang="c++" inline>const cImGuiMultiSelectData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultSliderHorizontal || [[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultSliderVertical || [[../cImGuiSliderData|<syntaxhighlight lang="c++" inline>const cImGuiSliderData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultTextFrame || [[../cImGuiTextFrameData|<syntaxhighlight lang="c++" inline>const cImGuiTextFrameData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultWindow || [[../cImGuiWindowData|<syntaxhighlight lang="c++" inline>const cImGuiWindowData& aData</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDrawUIDebugBoxes || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFocus || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asWidgetName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModColorMul || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModGfx || [[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx &in aGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModRotateAngle || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModRotateCustomPivot || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModRotatePivot || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avPivot</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModTextColorMul || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModUISizeHoriExpansion || <syntaxhighlight lang="c++" inline>float afNeg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afPos</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModUISizeVertExpansion || <syntaxhighlight lang="c++" inline>float afNeg</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afPos</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModUseInput || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetModUseUIPos || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShowMouse || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetShowMouseAutomatically || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateColor || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateColor || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateFloat || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateFloat || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateInt || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateInt || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alVal</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateVector3f || <syntaxhighlight lang="c++" inline>uint64 alId</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStateVector3f || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUIMoveGroupFlags || <syntaxhighlight lang="c++" inline>int alGroupFlags</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUIMoveWrapMode || [[../eImGuiWrap|<syntaxhighlight lang="c++" inline>eImGuiWrap aWrap</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUpAlignment || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avAlignedPos</syntaxhighlight>]],<br />[[../eImGuiAlign|<syntaxhighlight lang="c++" inline>eImGuiAlign aAlignment</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupWidgetRect || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avInPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avInSize</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f &out avOutPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f &out avOutSize</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avDefaultSize</syntaxhighlight>]],<br />[[../cImGuiGfx|<syntaxhighlight lang="c++" inline>const cImGuiGfx& aGfx</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopFade || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asVarName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopTimer || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || TimerExists || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || TimerOver || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__