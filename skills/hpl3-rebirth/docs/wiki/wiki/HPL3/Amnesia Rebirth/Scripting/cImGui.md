{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cImGui has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|bool|[[#ActionIsDown|ActionIsDown]]([[../eImGuiAction|eImGuiAction]] aAction, bool abCheckIfUsed <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|bool|[[#ActionTriggered|ActionTriggered]]([[../eImGuiAction|eImGuiAction]] aAction, bool abCheckIfUsed <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#AddItemGfx|AddItemGfx]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx)|}}
{{CodeDocSummaryItem|void|[[#AddItemString|AddItemString]](const [[../tWString|tWString]] &in asStr)|}}
{{CodeDocSummaryItem|void|[[#AddItemStringList|AddItemStringList]](const [[../tWString|tWString]] &in asStrList)|}}
{{CodeDocSummaryItem|void|[[#AddLayoutHorizontalSpace|AddLayoutHorizontalSpace]](float afWidth, float afHeight <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#AddLayoutVerticalSpace|AddLayoutVerticalSpace]](float afHeight)|}}
{{CodeDocSummaryItem|void|[[#AddLineStripVertex|AddLineStripVertex]](const [[../cVector2f|cVector2f]] &in avVertex)|}}
{{CodeDocSummaryItem|void|[[#AddTimer|AddTimer]](const [[../tString|tString]] &in asName, float afTime)|}}
{{CodeDocSummaryItem|void|[[#Begin|Begin]](float afTimeStep)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#CalcWidgetSize|CalcWidgetSize]](const [[../cVector2f|cVector2f]] &in avArgSize, const [[../cVector2f|cVector2f]] &in avDefaultSize)|}}
{{CodeDocSummaryItem|bool|[[#CheckBecamePressedAction|CheckBecamePressedAction]](bool abCheckConfirm, bool abCheckMouseLeft)|}}
{{CodeDocSummaryItem|bool|[[#CheckCurrentWidgetBecamePressed|CheckCurrentWidgetBecamePressed]](const [[../tString|tString]] &in asName, bool abCheckConfirm, bool abCheckMouseLeft)|}}
{{CodeDocSummaryItem|bool|[[#CheckCurrentWidgetIsPressed|CheckCurrentWidgetIsPressed]](const [[../tString|tString]] &in asName, bool abCheckConfirm, bool abCheckMouseLeft)|}}
{{CodeDocSummaryItem|bool|[[#CheckIsPressedAction|CheckIsPressedAction]](bool abCheckConfirm, bool abCheckMouseLeft)|}}
{{CodeDocSummaryItem|bool|[[#CheckMouseHasMoved|CheckMouseHasMoved]]()|}}
{{CodeDocSummaryItem|bool|[[#CheckMouseOver|CheckMouseOver]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#ClearItems|ClearItems]]()|}}
{{CodeDocSummaryItem|void|[[#ClearPrevData|ClearPrevData]]()|}}
{{CodeDocSummaryItem|void|[[#ClearStates|ClearStates]]()|}}
{{CodeDocSummaryItem|void|[[#ClipAreaBegin|ClipAreaBegin]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|void|[[#ClipAreaEnd|ClipAreaEnd]]()|}}
{{CodeDocSummaryItem|void|[[#DestroyAssets|DestroyAssets]]()|}}
{{CodeDocSummaryItem|bool|[[#DoButton|DoButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, const [[../cImGuiButtonData|cImGuiButtonData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#DoButton|DoButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#DoCheckBox|DoCheckBox]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, bool abDefaultChecked, const [[../cImGuiCheckBoxData|cImGuiCheckBoxData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#DoCheckBox|DoCheckBox]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, bool abDefaultChecked, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoFrame|DoFrame]](const [[../cImGuiFrameData|cImGuiFrameData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoFrame|DoFrame]](const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoGauge|DoGauge]](const [[../cImGuiGaugeData|cImGuiGaugeData]] &in aData, float afFillAmount, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoGauge|DoGauge]](float afFillAmount, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoImage|DoImage]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfxImage, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoLabel|DoLabel]](const [[../tWString|tWString]] &in asText, const [[../cImGuiLabelData|cImGuiLabelData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, float afFontSizeMul <nowiki>=</nowiki> 1)|}}
{{CodeDocSummaryItem|void|[[#DoLabel|DoLabel]](const [[../tWString|tWString]] &in asText, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, float afFontSizeMul <nowiki>=</nowiki> 1)|}}
{{CodeDocSummaryItem|void|[[#DoMouse|DoMouse]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx, const [[../cVector3f|cVector3f]] &in avOffset <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|int|[[#DoMultiSelect|DoMultiSelect]](const [[../tString|tString]] &in asName, int alDefaultSelectedItem, const [[../cImGuiMultiSelectData|cImGuiMultiSelectData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|int|[[#DoMultiSelect|DoMultiSelect]](const [[../tString|tString]] &in asName, int alDefaultSelectedItem, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|int|[[#DoMultiToggle|DoMultiToggle]](const [[../tString|tString]] &in asName, int alDefaultSelectedItem, uint alColumnNum, const [[../cVector2f|cVector2f]] &in avSpacing, const [[../cImGuiButtonData|cImGuiButtonData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|int|[[#DoMultiToggle|DoMultiToggle]](const [[../tString|tString]] &in asName, int alDefaultSelectedItem, uint alColumnNum, const [[../cVector2f|cVector2f]] &in avSpacing, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|bool|[[#DoRepeatButton|DoRepeatButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, const [[../cImGuiButtonData|cImGuiButtonData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#DoRepeatButton|DoRepeatButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#DoSliderHorizontal|DoSliderHorizontal]](const [[../tString|tString]] &in asName, float afDefaultValue, float afMin, float afMax, float afStepSize, const [[../cImGuiSliderData|cImGuiSliderData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#DoSliderHorizontal|DoSliderHorizontal]](const [[../tString|tString]] &in asName, float afDefaultValue, float afMin, float afMax, float afStepSize <nowiki>=</nowiki> -1, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#DoSliderVertical|DoSliderVertical]](const [[../tString|tString]] &in asName, float afDefaultValue, float afMin, float afMax, float afStepSize, const [[../cImGuiSliderData|cImGuiSliderData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#DoSliderVertical|DoSliderVertical]](const [[../tString|tString]] &in asName, float afDefaultValue, float afMin, float afMax, float afStepSize <nowiki>=</nowiki> -1, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#DoTextFrame|DoTextFrame]](const [[../tWString|tWString]] &in asText, const [[../cVector2f|cVector2f]] &in avEdgeSpacing, float afRowSpace, float afStartRowOffset, const [[../cImGuiTextFrameData|cImGuiTextFrameData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|float|[[#DoTextFrame|DoTextFrame]](const [[../tWString|tWString]] &in asText, const [[../cVector2f|cVector2f]] &in avEdgeSpacing, float afRowSpace, float afStartRowOffset, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize)|}}
{{CodeDocSummaryItem|bool|[[#DoToggleButton|DoToggleButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, bool abDefaultChecked, const [[../cImGuiButtonData|cImGuiButtonData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|bool|[[#DoToggleButton|DoToggleButton]](const [[../tString|tString]] &in asName, const [[../tWString|tWString]] &in asText, bool abDefaultChecked, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#DoWindowEnd|DoWindowEnd]]()|}}
{{CodeDocSummaryItem|void|[[#DoWindowStart|DoWindowStart]](const [[../tWString|tWString]] &in asCaption, const [[../cImGuiWindowData|cImGuiWindowData]] &in aData, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, bool abClip <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#DoWindowStart|DoWindowStart]](const [[../tWString|tWString]] &in asCaption, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, bool abClip <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#DrawAlignedGfx|DrawAlignedGfx]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx, const [[../cVector3f|cVector3f]] &in avPos, [[../eImGuiAlign|eImGuiAlign]] aAlignment, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, const [[../cColor|cColor]] &in aCol <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColTopLeft <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColTopRight <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColBotRight <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColBotLeft <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|void|[[#DrawAll|DrawAll]]()|}}
{{CodeDocSummaryItem|void|[[#DrawAndClearLineStrip|DrawAndClearLineStrip]](float afZ, float afThickness, const [[../cColor|cColor]] &in aCol <nowiki>=</nowiki> cColor_White, const [[../cImGuiGfx|cImGuiGfx]] &in aGfx <nowiki>=</nowiki> cImGuiGfx)|}}
{{CodeDocSummaryItem|void|[[#DrawFont|DrawFont]](const [[../tWString|tWString]] &in asText, const [[../cImGuiFont|cImGuiFont]] &in aFont, const [[../cVector3f|cVector3f]] &in avPos, [[../eFontAlign|eFontAlign]] aAlign, const [[../cVector2f|cVector2f]] &in avSizeMul <nowiki>=</nowiki> 1, const [[../cColor|cColor]] &in aColMul <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|void|[[#DrawFrame|DrawFrame]](const [[../cImGuiFrameGfx|cImGuiFrameGfx]] &in aGfx, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, const [[../cColor|cColor]] &in aCol <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|void|[[#DrawGfx|DrawGfx]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx, const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, const [[../cColor|cColor]] &in aCol <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColTopLeft <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColTopRight <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColBotRight <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cColor|cColor]] &in aColBotLeft <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|void|[[#DrawLine|DrawLine]](const [[../cVector2f|cVector2f]] &in avStart, const [[../cVector2f|cVector2f]] &in avEnd, float afZ, float afThickness <nowiki>=</nowiki> 1.0f, const [[../cColor|cColor]] &in aCol <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1, const [[../cImGuiGfx|cImGuiGfx]] &in aGfx <nowiki>=</nowiki> cImGuiGfx)|}}
{{CodeDocSummaryItem|void|[[#End|End]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#FadeOscillateColor|FadeOscillateColor]](const [[../tString|tString]] &in asVarName, const [[../cColor|cColor]] &in aStart, const [[../cColor|cColor]] &in aGoal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut)|}}
{{CodeDocSummaryItem|float|[[#FadeOscillateFloat|FadeOscillateFloat]](const [[../tString|tString]] &in asVarName, float afStart, float afGoal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#FadeOscillateVector3f|FadeOscillateVector3f]](const [[../tString|tString]] &in asVarName, const [[../cVector3f|cVector3f]] &in avStart, const [[../cVector3f|cVector3f]] &in avGoal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut)|}}
{{CodeDocSummaryItem|bool|[[#FadeOver|FadeOver]](const [[../tString|tString]] &in asVarName)|}}
{{CodeDocSummaryItem|void|[[#FadeStateColor|FadeStateColor]](const [[../tString|tString]] &in asVarName, const [[../cColor|cColor]] &in aGoalVal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#FadeStateFloat|FadeStateFloat]](const [[../tString|tString]] &in asVarName, float afGoalVal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|void|[[#FadeStateVector3f|FadeStateVector3f]](const [[../tString|tString]] &in asVarName, const [[../cVector3f|cVector3f]] &in avGoalVal, float afTime, [[../eEasing|eEasing]] aType <nowiki>=</nowiki> eEasing_QuadInOut, bool abReplaceIfExist <nowiki>=</nowiki> true)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetCurrentGroupPos|GetCurrentGroupPos]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetCurrentGroupSize|GetCurrentGroupSize]]()|}}
{{CodeDocSummaryItem|[[../cImGuiButtonData|cImGuiButtonData]]|[[#GetDefaultButton|GetDefaultButton]]()|}}
{{CodeDocSummaryItem|[[../cImGuiCheckBoxData|cImGuiCheckBoxData]]|[[#GetDefaultCheckBox|GetDefaultCheckBox]]()|}}
{{CodeDocSummaryItem|[[../cImGuiFrameData|cImGuiFrameData]]|[[#GetDefaultFrame|GetDefaultFrame]]()|}}
{{CodeDocSummaryItem|[[../cImGuiGaugeData|cImGuiGaugeData]]|[[#GetDefaultGauge|GetDefaultGauge]]()|}}
{{CodeDocSummaryItem|[[../cImGuiLabelData|cImGuiLabelData]]|[[#GetDefaultLabel|GetDefaultLabel]]()|}}
{{CodeDocSummaryItem|[[../cImGuiMultiSelectData|cImGuiMultiSelectData]]|[[#GetDefaultMultiSelect|GetDefaultMultiSelect]]()|}}
{{CodeDocSummaryItem|float|[[#GetDefaultOrCurrentFloat|GetDefaultOrCurrentFloat]](uint64 alDefaultVarId, uint64 alCurrentVarId, float afDefaultValue)|}}
{{CodeDocSummaryItem|int|[[#GetDefaultOrCurrentInt|GetDefaultOrCurrentInt]](uint64 alDefaultVarId, uint64 alCurrentVarId, int alDefaultValue)|}}
{{CodeDocSummaryItem|[[../cImGuiSliderData|cImGuiSliderData]]|[[#GetDefaultSliderHorizontal|GetDefaultSliderHorizontal]]()|}}
{{CodeDocSummaryItem|[[../cImGuiSliderData|cImGuiSliderData]]|[[#GetDefaultSliderVertical|GetDefaultSliderVertical]]()|}}
{{CodeDocSummaryItem|[[../cImGuiTextFrameData|cImGuiTextFrameData]]|[[#GetDefaultTextFrame|GetDefaultTextFrame]]()|}}
{{CodeDocSummaryItem|[[../cImGuiWindowData|cImGuiWindowData]]|[[#GetDefaultWindow|GetDefaultWindow]]()|}}
{{CodeDocSummaryItem|float|[[#GetFontLength|GetFontLength]](const [[../cImGuiFont|cImGuiFont]] &in aFont, float afSizeMul, const [[../tWString|tWString]] &in asText)|}}
{{CodeDocSummaryItem|void|[[#GetFontWordWrapRows|GetFontWordWrapRows]](const [[../cImGuiFont|cImGuiFont]] &in aFont, float afSizeMul, const [[../tWString|tWString]] &in asText, float afLineWidth, [[../array|array]]<[[../tWString|tWString]]> avLines, [[../array|array]]<bool> avRowEndedWithNewLine <nowiki>=</nowiki> array<bool>)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetGfxSize|GetGfxSize]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx)|}}
{{CodeDocSummaryItem|uint64|[[#GetIdFromNameAndCheckCollision|GetIdFromNameAndCheckCollision]](const [[../tString|tString]] &in asName, int alTableIdx)|}}
{{CodeDocSummaryItem|bool|[[#GetModUseInput|GetModUseInput]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetMousePosition|GetMousePosition]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMousePosition3D|GetMousePosition3D]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetMouseRel|GetMouseRel]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetMouseRel3D|GetMouseRel3D]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetName|GetName]]()|}}
{{CodeDocSummaryItem|[[../cGuiSet|cGuiSet]]|[[#GetSet|GetSet]]()|}}
{{CodeDocSummaryItem|bool|[[#GetShowMouse|GetShowMouse]]()|}}
{{CodeDocSummaryItem|bool|[[#GetShowMouseAutomatically|GetShowMouseAutomatically]]()|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetStateColor|GetStateColor]](uint64 alId, const [[../cColor|cColor]] &in aDefault <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|[[../cColor|cColor]]|[[#GetStateColor|GetStateColor]](const [[../tString|tString]] &in asVarName, const [[../cColor|cColor]] &in aDefault <nowiki>=</nowiki> cColor, [[../|../]] 1, [[../|../]] 1)|}}
{{CodeDocSummaryItem|float|[[#GetStateFloat|GetStateFloat]](uint64 alId, float afDefault <nowiki>=</nowiki> 0.0f)|}}
{{CodeDocSummaryItem|float|[[#GetStateFloat|GetStateFloat]](const [[../tString|tString]] &in asVarName, float afDefault <nowiki>=</nowiki> 0.0f)|}}
{{CodeDocSummaryItem|int|[[#GetStateInt|GetStateInt]](uint64 alId, int alDefault <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|int|[[#GetStateInt|GetStateInt]](const [[../tString|tString]] &in asVarName, int alDefault <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetStateVector3f|GetStateVector3f]](uint64 alId, const [[../cVector3f|cVector3f]] &in avDefault <nowiki>=</nowiki> 0.0f)|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetStateVector3f|GetStateVector3f]](const [[../tString|tString]] &in asVarName, const [[../cVector3f|cVector3f]] &in avDefault <nowiki>=</nowiki> cVector3f, [[../|../]] 0.0f)|}}
{{CodeDocSummaryItem|float|[[#GetTimeCount|GetTimeCount]]()|}}
{{CodeDocSummaryItem|float|[[#GetTimeStep|GetTimeStep]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetUsedFontSize|GetUsedFontSize]](const [[../cImGuiFont|cImGuiFont]] &in aFont)|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetUsedGfxSize|GetUsedGfxSize]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx, const [[../cVector2f|cVector2f]] &in avCustomSize)|}}
{{CodeDocSummaryItem|void|[[#GroupBegin|GroupBegin]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> 0, bool abClip <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#GroupEnd|GroupEnd]]()|}}
{{CodeDocSummaryItem|void|[[#IncStateColor|IncStateColor]](uint64 alId, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateColor|IncStateColor]](const [[../tString|tString]] &in asVarName, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateFloat|IncStateFloat]](uint64 alId, float afVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateFloat|IncStateFloat]](const [[../tString|tString]] &in asVarName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateInt|IncStateInt]](uint64 alId, int alVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateInt|IncStateInt]](const [[../tString|tString]] &in asVarName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateVector3f|IncStateVector3f]](uint64 alId, const [[../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#IncStateVector3f|IncStateVector3f]](const [[../tString|tString]] &in asVarName, const [[../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|bool|[[#IsFading|IsFading]](const [[../tString|tString]] &in asVarName)|}}
{{CodeDocSummaryItem|bool|[[#IsFirstRun|IsFirstRun]]()|}}
{{CodeDocSummaryItem|void|[[#LayoutBegin|LayoutBegin]]([[../eImGuiLayout|eImGuiLayout]] aType, const [[../cVector3f|cVector3f]] &in avPos <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1, const [[../cVector2f|cVector2f]] &in avSpacing <nowiki>=</nowiki> 0)|}}
{{CodeDocSummaryItem|void|[[#LayoutEnd|LayoutEnd]]()|}}
{{CodeDocSummaryItem|void|[[#LockMouseFocus|LockMouseFocus]]()|}}
{{CodeDocSummaryItem|bool|[[#MouseFocusIsLocked|MouseFocusIsLocked]]()|}}
{{CodeDocSummaryItem|void|[[#PopModifiers|PopModifiers]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevBecameInFocus|PrevBecameInFocus]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevBecamePressed|PrevBecamePressed]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevInFocus|PrevInFocus]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevMouseOver|PrevMouseOver]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#PrevPosition|PrevPosition]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevPressed|PrevPressed]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#PrevSize|PrevSize]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevUpdated|PrevUpdated]]()|}}
{{CodeDocSummaryItem|bool|[[#PrevWasInFocus|PrevWasInFocus]]()|}}
{{CodeDocSummaryItem|void|[[#PushModifiers|PushModifiers]]()|}}
{{CodeDocSummaryItem|bool|[[#RepeatTimer|RepeatTimer]](const [[../tString|tString]] &in asName, float afTime)|}}
{{CodeDocSummaryItem|void|[[#ResetModifiers|ResetModifiers]]()|}}
{{CodeDocSummaryItem|void|[[#SendAction|SendAction]]([[../eImGuiAction|eImGuiAction]] aAction, bool abDown, bool abTriggered)|}}
{{CodeDocSummaryItem|void|[[#SendMousePosition|SendMousePosition]](const [[../cVector2l|cVector2l]] &in avPos, const [[../cVector2l|cVector2l]] &in avRel)|}}
{{CodeDocSummaryItem|void|[[#SendMouseVirtualPosition|SendMouseVirtualPosition]](const [[../cVector2f|cVector2f]] &in avPos, const [[../cVector2f|cVector2f]] &in avRel)|}}
{{CodeDocSummaryItem|void|[[#SetAlignment|SetAlignment]]([[../eImGuiAlign|eImGuiAlign]] aAlign)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultButton|SetDefaultButton]](const [[../cImGuiButtonData|cImGuiButtonData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultCheckBox|SetDefaultCheckBox]](const [[../cImGuiCheckBoxData|cImGuiCheckBoxData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultFont|SetDefaultFont]](const [[../cImGuiFont|cImGuiFont]] &in aFont)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultFrame|SetDefaultFrame]](const [[../cImGuiFrameData|cImGuiFrameData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultGauge|SetDefaultGauge]](const [[../cImGuiGaugeData|cImGuiGaugeData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultLabel|SetDefaultLabel]](const [[../cImGuiLabelData|cImGuiLabelData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultMouse|SetDefaultMouse]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx, const [[../cVector2f|cVector2f]] &in avSize <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultMultiSelect|SetDefaultMultiSelect]](const [[../cImGuiMultiSelectData|cImGuiMultiSelectData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultSliderHorizontal|SetDefaultSliderHorizontal]](const [[../cImGuiSliderData|cImGuiSliderData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultSliderVertical|SetDefaultSliderVertical]](const [[../cImGuiSliderData|cImGuiSliderData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultTextFrame|SetDefaultTextFrame]](const [[../cImGuiTextFrameData|cImGuiTextFrameData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDefaultWindow|SetDefaultWindow]](const [[../cImGuiWindowData|cImGuiWindowData]] &in aData)|}}
{{CodeDocSummaryItem|void|[[#SetDrawUIDebugBoxes|SetDrawUIDebugBoxes]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetFocus|SetFocus]](const [[../tString|tString]] &in asWidgetName)|}}
{{CodeDocSummaryItem|void|[[#SetModColorMul|SetModColorMul]](const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#SetModGfx|SetModGfx]](const [[../cImGuiGfx|cImGuiGfx]] &in aGfx)|}}
{{CodeDocSummaryItem|void|[[#SetModRotateAngle|SetModRotateAngle]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetModRotateCustomPivot|SetModRotateCustomPivot]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetModRotatePivot|SetModRotatePivot]](const [[../cVector2f|cVector2f]] &in avPivot)|}}
{{CodeDocSummaryItem|void|[[#SetModTextColorMul|SetModTextColorMul]](const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#SetModUISizeHoriExpansion|SetModUISizeHoriExpansion]](float afNeg, float afPos)|}}
{{CodeDocSummaryItem|void|[[#SetModUISizeVertExpansion|SetModUISizeVertExpansion]](float afNeg, float afPos)|}}
{{CodeDocSummaryItem|void|[[#SetModUseInput|SetModUseInput]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetModUseUIPos|SetModUseUIPos]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveRepeatActive|SetMoveRepeatActive]](bool abX)|}}
{{CodeDocSummaryItem|float|[[#SetMoveRepeatSpeed|SetMoveRepeatSpeed]](float fX)|}}
{{CodeDocSummaryItem|void|[[#SetMoveRepeatStartDelay|SetMoveRepeatStartDelay]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetShowMouse|SetShowMouse]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetShowMouseAutomatically|SetShowMouseAutomatically]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetStateColor|SetStateColor]](uint64 alId, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateColor|SetStateColor]](const [[../tString|tString]] &in asVarName, const [[../cColor|cColor]] &in aVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateFloat|SetStateFloat]](uint64 alId, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateFloat|SetStateFloat]](const [[../tString|tString]] &in asVarName, float afVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateInt|SetStateInt]](uint64 alId, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateInt|SetStateInt]](const [[../tString|tString]] &in asVarName, int alVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateVector3f|SetStateVector3f]](uint64 alId, const [[../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetStateVector3f|SetStateVector3f]](const [[../tString|tString]] &in asVarName, const [[../cVector3f|cVector3f]] &in avVal)|}}
{{CodeDocSummaryItem|void|[[#SetUIMoveGroupFlags|SetUIMoveGroupFlags]](int alGroupFlags)|}}
{{CodeDocSummaryItem|void|[[#SetUIMoveWrapMode|SetUIMoveWrapMode]]([[../eImGuiWrap|eImGuiWrap]] aWrap)|}}
{{CodeDocSummaryItem|void|[[#SetUpAlignment|SetUpAlignment]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize, [[../cVector3f|cVector3f]] &out avAlignedPos, [[../eImGuiAlign|eImGuiAlign]] aAlignment)|}}
{{CodeDocSummaryItem|void|[[#SetupWidgetRect|SetupWidgetRect]](const [[../cVector3f|cVector3f]] &in avInPos, const [[../cVector2f|cVector2f]] &in avInSize, [[../cVector3f|cVector3f]] &out avOutPos, [[../cVector2f|cVector2f]] &out avOutSize, const [[../cVector2f|cVector2f]] &in avDefaultSize, const [[../cImGuiGfx|cImGuiGfx]] &in aGfx)|}}
{{CodeDocSummaryItem|void|[[#StopFade|StopFade]](const [[../tString|tString]] &in asVarName)|}}
{{CodeDocSummaryItem|void|[[#StopTimer|StopTimer]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#TimerExists|TimerExists]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|bool|[[#TimerOver|TimerOver]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|ActionIsDown}}
<syntaxhighlight lang="c++">bool ActionIsDown(eImGuiAction aAction,
                  bool abCheckIfUsed = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAction|[[../eImGuiAction|eImGuiAction]]|}}
{{CodeDocDetailParam|abCheckIfUsed|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ActionTriggered}}
<syntaxhighlight lang="c++">bool ActionTriggered(eImGuiAction aAction,
                     bool abCheckIfUsed = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAction|[[../eImGuiAction|eImGuiAction]]|}}
{{CodeDocDetailParam|abCheckIfUsed|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddItemGfx}}
<syntaxhighlight lang="c++">void AddItemGfx(const cImGuiGfx &in aGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddItemString}}
<syntaxhighlight lang="c++">void AddItemString(const tWString &in asStr)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asStr|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddItemStringList}}
<syntaxhighlight lang="c++">void AddItemStringList(const tWString &in asStrList)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asStrList|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddLayoutHorizontalSpace}}
<syntaxhighlight lang="c++">void AddLayoutHorizontalSpace(float afWidth,
                              float afHeight = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afWidth|float|}}
{{CodeDocDetailParam|afHeight|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddLayoutVerticalSpace}}
<syntaxhighlight lang="c++">void AddLayoutVerticalSpace(float afHeight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afHeight|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddLineStripVertex}}
<syntaxhighlight lang="c++">void AddLineStripVertex(const cVector2f &in avVertex)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avVertex|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AddTimer}}
<syntaxhighlight lang="c++">void AddTimer(const tString &in asName,
              float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Begin}}
<syntaxhighlight lang="c++">void Begin(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CalcWidgetSize}}
<syntaxhighlight lang="c++">cVector2f CalcWidgetSize(const cVector2f &in avArgSize,
                         const cVector2f &in avDefaultSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avArgSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avDefaultSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckBecamePressedAction}}
<syntaxhighlight lang="c++">bool CheckBecamePressedAction(bool abCheckConfirm,
                              bool abCheckMouseLeft)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abCheckConfirm|bool|}}
{{CodeDocDetailParam|abCheckMouseLeft|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckCurrentWidgetBecamePressed}}
<syntaxhighlight lang="c++">bool CheckCurrentWidgetBecamePressed(const tString &in asName,
                                     bool abCheckConfirm,
                                     bool abCheckMouseLeft)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCheckConfirm|bool|}}
{{CodeDocDetailParam|abCheckMouseLeft|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckCurrentWidgetIsPressed}}
<syntaxhighlight lang="c++">bool CheckCurrentWidgetIsPressed(const tString &in asName,
                                 bool abCheckConfirm,
                                 bool abCheckMouseLeft)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCheckConfirm|bool|}}
{{CodeDocDetailParam|abCheckMouseLeft|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckIsPressedAction}}
<syntaxhighlight lang="c++">bool CheckIsPressedAction(bool abCheckConfirm,
                          bool abCheckMouseLeft)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abCheckConfirm|bool|}}
{{CodeDocDetailParam|abCheckMouseLeft|bool|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckMouseHasMoved}}
<syntaxhighlight lang="c++">bool CheckMouseHasMoved()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckMouseOver}}
<syntaxhighlight lang="c++">bool CheckMouseOver(const cVector3f &in avPos,
                    const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearItems}}
<syntaxhighlight lang="c++">void ClearItems()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearPrevData}}
<syntaxhighlight lang="c++">void ClearPrevData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearStates}}
<syntaxhighlight lang="c++">void ClearStates()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClipAreaBegin}}
<syntaxhighlight lang="c++">void ClipAreaBegin(const cVector3f &in avPos,
                   const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClipAreaEnd}}
<syntaxhighlight lang="c++">void ClipAreaEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyAssets}}
<syntaxhighlight lang="c++">void DestroyAssets()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoButton}}
<syntaxhighlight lang="c++">bool DoButton(const tString &in asName,
              const tWString &in asText,
              const cImGuiButtonData &in aData,
              const cVector3f &in avPos = 0,
              const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|aData|[[../cImGuiButtonData|cImGuiButtonData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoButton}}
<syntaxhighlight lang="c++">bool DoButton(const tString &in asName,
              const tWString &in asText,
              const cVector3f &in avPos = 0,
              const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoCheckBox}}
<syntaxhighlight lang="c++">bool DoCheckBox(const tString &in asName,
                const tWString &in asText,
                bool abDefaultChecked,
                const cImGuiCheckBoxData &in aData,
                const cVector3f &in avPos = 0,
                const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|abDefaultChecked|bool|}}
{{CodeDocDetailParam|aData|[[../cImGuiCheckBoxData|cImGuiCheckBoxData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoCheckBox}}
<syntaxhighlight lang="c++">bool DoCheckBox(const tString &in asName,
                const tWString &in asText,
                bool abDefaultChecked,
                const cVector3f &in avPos = 0,
                const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|abDefaultChecked|bool|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoFrame}}
<syntaxhighlight lang="c++">void DoFrame(const cImGuiFrameData &in aData,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiFrameData|cImGuiFrameData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoFrame}}
<syntaxhighlight lang="c++">void DoFrame(const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoGauge}}
<syntaxhighlight lang="c++">void DoGauge(const cImGuiGaugeData &in aData,
             float afFillAmount,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiGaugeData|cImGuiGaugeData]]|}}
{{CodeDocDetailParam|afFillAmount|float|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoGauge}}
<syntaxhighlight lang="c++">void DoGauge(float afFillAmount,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFillAmount|float|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoImage}}
<syntaxhighlight lang="c++">void DoImage(const cImGuiGfx &in aGfxImage,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfxImage|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoLabel}}
<syntaxhighlight lang="c++">void DoLabel(const tWString &in asText,
             const cImGuiLabelData &in aData,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1,
             float afFontSizeMul = 1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|aData|[[../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afFontSizeMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoLabel}}
<syntaxhighlight lang="c++">void DoLabel(const tWString &in asText,
             const cVector3f &in avPos = 0,
             const cVector2f &in avSize = -1,
             float afFontSizeMul = 1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afFontSizeMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoMouse}}
<syntaxhighlight lang="c++">void DoMouse(const cImGuiGfx &in aGfx,
             const cVector3f &in avOffset = 0,
             const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avOffset|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoMultiSelect}}
<syntaxhighlight lang="c++">int DoMultiSelect(const tString &in asName,
                  int alDefaultSelectedItem,
                  const cImGuiMultiSelectData &in aData,
                  const cVector3f &in avPos = 0,
                  const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefaultSelectedItem|int|}}
{{CodeDocDetailParam|aData|[[../cImGuiMultiSelectData|cImGuiMultiSelectData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoMultiSelect}}
<syntaxhighlight lang="c++">int DoMultiSelect(const tString &in asName,
                  int alDefaultSelectedItem,
                  const cVector3f &in avPos = 0,
                  const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefaultSelectedItem|int|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoMultiToggle}}
<syntaxhighlight lang="c++">int DoMultiToggle(const tString &in asName,
                  int alDefaultSelectedItem,
                  uint alColumnNum,
                  const cVector2f &in avSpacing,
                  const cImGuiButtonData &in aData,
                  const cVector3f &in avPos,
                  const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefaultSelectedItem|int|}}
{{CodeDocDetailParam|alColumnNum|uint|}}
{{CodeDocDetailParam|avSpacing|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aData|[[../cImGuiButtonData|cImGuiButtonData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoMultiToggle}}
<syntaxhighlight lang="c++">int DoMultiToggle(const tString &in asName,
                  int alDefaultSelectedItem,
                  uint alColumnNum,
                  const cVector2f &in avSpacing,
                  const cVector3f &in avPos,
                  const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefaultSelectedItem|int|}}
{{CodeDocDetailParam|alColumnNum|uint|}}
{{CodeDocDetailParam|avSpacing|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoRepeatButton}}
<syntaxhighlight lang="c++">bool DoRepeatButton(const tString &in asName,
                    const tWString &in asText,
                    const cImGuiButtonData &in aData,
                    const cVector3f &in avPos = 0,
                    const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|aData|[[../cImGuiButtonData|cImGuiButtonData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoRepeatButton}}
<syntaxhighlight lang="c++">bool DoRepeatButton(const tString &in asName,
                    const tWString &in asText,
                    const cVector3f &in avPos = 0,
                    const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoSliderHorizontal}}
<syntaxhighlight lang="c++">float DoSliderHorizontal(const tString &in asName,
                         float afDefaultValue,
                         float afMin,
                         float afMax,
                         float afStepSize,
                         const cImGuiSliderData &in aData,
                         const cVector3f &in avPos = 0,
                         const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefaultValue|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|afStepSize|float|}}
{{CodeDocDetailParam|aData|[[../cImGuiSliderData|cImGuiSliderData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoSliderHorizontal}}
<syntaxhighlight lang="c++">float DoSliderHorizontal(const tString &in asName,
                         float afDefaultValue,
                         float afMin,
                         float afMax,
                         float afStepSize = -1,
                         const cVector3f &in avPos = 0,
                         const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefaultValue|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|afStepSize|float|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoSliderVertical}}
<syntaxhighlight lang="c++">float DoSliderVertical(const tString &in asName,
                       float afDefaultValue,
                       float afMin,
                       float afMax,
                       float afStepSize,
                       const cImGuiSliderData &in aData,
                       const cVector3f &in avPos = 0,
                       const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefaultValue|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|afStepSize|float|}}
{{CodeDocDetailParam|aData|[[../cImGuiSliderData|cImGuiSliderData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoSliderVertical}}
<syntaxhighlight lang="c++">float DoSliderVertical(const tString &in asName,
                       float afDefaultValue,
                       float afMin,
                       float afMax,
                       float afStepSize = -1,
                       const cVector3f &in avPos = 0,
                       const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefaultValue|float|}}
{{CodeDocDetailParam|afMin|float|}}
{{CodeDocDetailParam|afMax|float|}}
{{CodeDocDetailParam|afStepSize|float|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoTextFrame}}
<syntaxhighlight lang="c++">float DoTextFrame(const tWString &in asText,
                  const cVector2f &in avEdgeSpacing,
                  float afRowSpace,
                  float afStartRowOffset,
                  const cImGuiTextFrameData &in aData,
                  const cVector3f &in avPos,
                  const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avEdgeSpacing|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afRowSpace|float|}}
{{CodeDocDetailParam|afStartRowOffset|float|}}
{{CodeDocDetailParam|aData|[[../cImGuiTextFrameData|cImGuiTextFrameData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoTextFrame}}
<syntaxhighlight lang="c++">float DoTextFrame(const tWString &in asText,
                  const cVector2f &in avEdgeSpacing,
                  float afRowSpace,
                  float afStartRowOffset,
                  const cVector3f &in avPos,
                  const cVector2f &in avSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avEdgeSpacing|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afRowSpace|float|}}
{{CodeDocDetailParam|afStartRowOffset|float|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoToggleButton}}
<syntaxhighlight lang="c++">bool DoToggleButton(const tString &in asName,
                    const tWString &in asText,
                    bool abDefaultChecked,
                    const cImGuiButtonData &in aData,
                    const cVector3f &in avPos = 0,
                    const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|abDefaultChecked|bool|}}
{{CodeDocDetailParam|aData|[[../cImGuiButtonData|cImGuiButtonData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoToggleButton}}
<syntaxhighlight lang="c++">bool DoToggleButton(const tString &in asName,
                    const tWString &in asText,
                    bool abDefaultChecked,
                    const cVector3f &in avPos = 0,
                    const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|abDefaultChecked|bool|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoWindowEnd}}
<syntaxhighlight lang="c++">void DoWindowEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoWindowStart}}
<syntaxhighlight lang="c++">void DoWindowStart(const tWString &in asCaption,
                   const cImGuiWindowData &in aData,
                   const cVector3f &in avPos = 0,
                   const cVector2f &in avSize = -1,
                   bool abClip = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCaption|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|aData|[[../cImGuiWindowData|cImGuiWindowData]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|abClip|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DoWindowStart}}
<syntaxhighlight lang="c++">void DoWindowStart(const tWString &in asCaption,
                   const cVector3f &in avPos = 0,
                   const cVector2f &in avSize = -1,
                   bool abClip = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCaption|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|abClip|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawAlignedGfx}}
<syntaxhighlight lang="c++">void DrawAlignedGfx(const cImGuiGfx &in aGfx,
                    const cVector3f &in avPos,
                    eImGuiAlign aAlignment,
                    const cVector2f &in avSize = -1,
                    const cColor &in aCol = cColor,
                     1,
                     1,
                    const cColor &in aColTopLeft = cColor,
                     1,
                     1,
                    const cColor &in aColTopRight = cColor,
                     1,
                     1,
                    const cColor &in aColBotRight = cColor,
                     1,
                     1,
                    const cColor &in aColBotLeft = cColor,
                     1,
                     1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aAlignment|[[../eImGuiAlign|eImGuiAlign]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColTopLeft|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColTopRight|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColBotRight|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColBotLeft|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawAll}}
<syntaxhighlight lang="c++">void DrawAll()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawAndClearLineStrip}}
<syntaxhighlight lang="c++">void DrawAndClearLineStrip(float afZ,
                           float afThickness,
                           const cColor &in aCol = cColor_White,
                           const cImGuiGfx &in aGfx = cImGuiGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afZ|float|}}
{{CodeDocDetailParam|afThickness|float|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawFont}}
<syntaxhighlight lang="c++">void DrawFont(const tWString &in asText,
              const cImGuiFont &in aFont,
              const cVector3f &in avPos,
              eFontAlign aAlign,
              const cVector2f &in avSizeMul = 1,
              const cColor &in aColMul = cColor,
               1,
               1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|aFont|[[../cImGuiFont|cImGuiFont]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aAlign|[[../eFontAlign|eFontAlign]]|}}
{{CodeDocDetailParam|avSizeMul|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aColMul|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawFrame}}
<syntaxhighlight lang="c++">void DrawFrame(const cImGuiFrameGfx &in aGfx,
               const cVector3f &in avPos,
               const cVector2f &in avSize = -1,
               const cColor &in aCol = cColor,
                1,
                1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiFrameGfx|cImGuiFrameGfx]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawGfx}}
<syntaxhighlight lang="c++">void DrawGfx(const cImGuiGfx &in aGfx,
             const cVector3f &in avPos,
             const cVector2f &in avSize = -1,
             const cColor &in aCol = cColor,
              1,
              1,
             const cColor &in aColTopLeft = cColor,
              1,
              1,
             const cColor &in aColTopRight = cColor,
              1,
              1,
             const cColor &in aColBotRight = cColor,
              1,
              1,
             const cColor &in aColBotLeft = cColor,
              1,
              1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColTopLeft|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColTopRight|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColBotRight|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aColBotLeft|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawLine}}
<syntaxhighlight lang="c++">void DrawLine(const cVector2f &in avStart,
              const cVector2f &in avEnd,
              float afZ,
              float afThickness = 1.0f,
              const cColor &in aCol = cColor,
               1,
               1,
              const cImGuiGfx &in aGfx = cImGuiGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afZ|float|}}
{{CodeDocDetailParam|afThickness|float|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|End}}
<syntaxhighlight lang="c++">void End()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOscillateColor}}
<syntaxhighlight lang="c++">cColor FadeOscillateColor(const tString &in asVarName,
                          const cColor &in aStart,
                          const cColor &in aGoal,
                          float afTime,
                          eEasing aType = eEasing_QuadInOut)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aStart|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|aGoal|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOscillateFloat}}
<syntaxhighlight lang="c++">float FadeOscillateFloat(const tString &in asVarName,
                         float afStart,
                         float afGoal,
                         float afTime,
                         eEasing aType = eEasing_QuadInOut)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afStart|float|}}
{{CodeDocDetailParam|afGoal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOscillateVector3f}}
<syntaxhighlight lang="c++">cVector3f FadeOscillateVector3f(const tString &in asVarName,
                                const cVector3f &in avStart,
                                const cVector3f &in avGoal,
                                float afTime,
                                eEasing aType = eEasing_QuadInOut)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avStart|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avGoal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeOver}}
<syntaxhighlight lang="c++">bool FadeOver(const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeStateColor}}
<syntaxhighlight lang="c++">void FadeStateColor(const tString &in asVarName,
                    const cColor &in aGoalVal,
                    float afTime,
                    eEasing aType = eEasing_QuadInOut,
                    bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aGoalVal|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeStateFloat}}
<syntaxhighlight lang="c++">void FadeStateFloat(const tString &in asVarName,
                    float afGoalVal,
                    float afTime,
                    eEasing aType = eEasing_QuadInOut,
                    bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afGoalVal|float|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|FadeStateVector3f}}
<syntaxhighlight lang="c++">void FadeStateVector3f(const tString &in asVarName,
                       const cVector3f &in avGoalVal,
                       float afTime,
                       eEasing aType = eEasing_QuadInOut,
                       bool abReplaceIfExist = true)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avGoalVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailParam|aType|[[../eEasing|eEasing]]|}}
{{CodeDocDetailParam|abReplaceIfExist|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentGroupPos}}
<syntaxhighlight lang="c++">const cVector3f& GetCurrentGroupPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentGroupSize}}
<syntaxhighlight lang="c++">const cVector2f& GetCurrentGroupSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultButton}}
<syntaxhighlight lang="c++">const cImGuiButtonData& GetDefaultButton()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiButtonData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultCheckBox}}
<syntaxhighlight lang="c++">const cImGuiCheckBoxData& GetDefaultCheckBox()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiCheckBoxData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultFrame}}
<syntaxhighlight lang="c++">const cImGuiFrameData& GetDefaultFrame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiFrameData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultGauge}}
<syntaxhighlight lang="c++">const cImGuiGaugeData& GetDefaultGauge()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiGaugeData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultLabel}}
<syntaxhighlight lang="c++">const cImGuiLabelData& GetDefaultLabel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiLabelData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultMultiSelect}}
<syntaxhighlight lang="c++">const cImGuiMultiSelectData& GetDefaultMultiSelect()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiMultiSelectData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultOrCurrentFloat}}
<syntaxhighlight lang="c++">float GetDefaultOrCurrentFloat(uint64 alDefaultVarId,
                               uint64 alCurrentVarId,
                               float afDefaultValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alDefaultVarId|uint64|}}
{{CodeDocDetailParam|alCurrentVarId|uint64|}}
{{CodeDocDetailParam|afDefaultValue|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultOrCurrentInt}}
<syntaxhighlight lang="c++">int GetDefaultOrCurrentInt(uint64 alDefaultVarId,
                           uint64 alCurrentVarId,
                           int alDefaultValue)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alDefaultVarId|uint64|}}
{{CodeDocDetailParam|alCurrentVarId|uint64|}}
{{CodeDocDetailParam|alDefaultValue|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultSliderHorizontal}}
<syntaxhighlight lang="c++">const cImGuiSliderData& GetDefaultSliderHorizontal()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiSliderData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultSliderVertical}}
<syntaxhighlight lang="c++">const cImGuiSliderData& GetDefaultSliderVertical()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiSliderData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultTextFrame}}
<syntaxhighlight lang="c++">const cImGuiTextFrameData& GetDefaultTextFrame()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiTextFrameData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDefaultWindow}}
<syntaxhighlight lang="c++">const cImGuiWindowData& GetDefaultWindow()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cImGuiWindowData&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFontLength}}
<syntaxhighlight lang="c++">float GetFontLength(const cImGuiFont &in aFont,
                    float afSizeMul,
                    const tWString &in asText)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFont|[[../cImGuiFont|cImGuiFont]]|}}
{{CodeDocDetailParam|afSizeMul|float|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetFontWordWrapRows}}
<syntaxhighlight lang="c++">void GetFontWordWrapRows(const cImGuiFont &in aFont,
                         float afSizeMul,
                         const tWString &in asText,
                         float afLineWidth,
                         tWString avLines,
                         bool avRowEndedWithNewLine = array<bool>)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFont|[[../cImGuiFont|cImGuiFont]]|}}
{{CodeDocDetailParam|afSizeMul|float|}}
{{CodeDocDetailParam|asText|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|afLineWidth|float|}}
{{CodeDocDetailParam|avLines|[[../tWString|tWString]]|}}
{{CodeDocDetailParam|avRowEndedWithNewLine|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGfxSize}}
<syntaxhighlight lang="c++">cVector2f GetGfxSize(const cImGuiGfx &in aGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetIdFromNameAndCheckCollision}}
<syntaxhighlight lang="c++">uint64 GetIdFromNameAndCheckCollision(const tString &in asName,
                                      int alTableIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alTableIdx|int|}}
{{CodeDocDetailReturn|uint64|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetModUseInput}}
<syntaxhighlight lang="c++">bool GetModUseInput()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMousePosition}}
<syntaxhighlight lang="c++">const cVector2f& GetMousePosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMousePosition3D}}
<syntaxhighlight lang="c++">cVector3f GetMousePosition3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMouseRel}}
<syntaxhighlight lang="c++">const cVector2f& GetMouseRel()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMouseRel3D}}
<syntaxhighlight lang="c++">cVector3f GetMouseRel3D()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetName}}
<syntaxhighlight lang="c++">const tString& GetName()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetSet}}
<syntaxhighlight lang="c++">cGuiSet@ GetSet()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cGuiSet@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShowMouse}}
<syntaxhighlight lang="c++">bool GetShowMouse()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetShowMouseAutomatically}}
<syntaxhighlight lang="c++">bool GetShowMouseAutomatically()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateColor}}
<syntaxhighlight lang="c++">cColor GetStateColor(uint64 alId,
                     const cColor &in aDefault = cColor,
                      1,
                      1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateColor}}
<syntaxhighlight lang="c++">cColor GetStateColor(const tString &in asVarName,
                     const cColor &in aDefault = cColor,
                      1,
                      1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aDefault|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailParam|1|[[../|../]]|}}
{{CodeDocDetailReturn|cColor|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateFloat}}
<syntaxhighlight lang="c++">float GetStateFloat(uint64 alId,
                    float afDefault = 0.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateFloat}}
<syntaxhighlight lang="c++">float GetStateFloat(const tString &in asVarName,
                    float afDefault = 0.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afDefault|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateInt}}
<syntaxhighlight lang="c++">int GetStateInt(uint64 alId,
                int alDefault = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateInt}}
<syntaxhighlight lang="c++">int GetStateInt(const tString &in asVarName,
                int alDefault = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alDefault|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateVector3f}}
<syntaxhighlight lang="c++">cVector3f GetStateVector3f(uint64 alId,
                           const cVector3f &in avDefault = 0.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStateVector3f}}
<syntaxhighlight lang="c++">cVector3f GetStateVector3f(const tString &in asVarName,
                           const cVector3f &in avDefault = cVector3f,
                            0.0f)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avDefault|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|0.0f|[[../|../]]|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeCount}}
<syntaxhighlight lang="c++">float GetTimeCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTimeStep}}
<syntaxhighlight lang="c++">float GetTimeStep()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsedFontSize}}
<syntaxhighlight lang="c++">const cVector2f& GetUsedFontSize(const cImGuiFont &in aFont)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFont|[[../cImGuiFont|cImGuiFont]]|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUsedGfxSize}}
<syntaxhighlight lang="c++">cVector2f GetUsedGfxSize(const cImGuiGfx &in aGfx,
                         const cVector2f &in avCustomSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avCustomSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GroupBegin}}
<syntaxhighlight lang="c++">void GroupBegin(const cVector3f &in avPos,
                const cVector2f &in avSize = 0,
                bool abClip = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|abClip|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GroupEnd}}
<syntaxhighlight lang="c++">void GroupEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateColor}}
<syntaxhighlight lang="c++">void IncStateColor(uint64 alId,
                   const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateColor}}
<syntaxhighlight lang="c++">void IncStateColor(const tString &in asVarName,
                   const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateFloat}}
<syntaxhighlight lang="c++">void IncStateFloat(uint64 alId,
                   float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateFloat}}
<syntaxhighlight lang="c++">void IncStateFloat(const tString &in asVarName,
                   float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateInt}}
<syntaxhighlight lang="c++">void IncStateInt(uint64 alId,
                 int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateInt}}
<syntaxhighlight lang="c++">void IncStateInt(const tString &in asVarName,
                 int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateVector3f}}
<syntaxhighlight lang="c++">void IncStateVector3f(uint64 alId,
                      const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IncStateVector3f}}
<syntaxhighlight lang="c++">void IncStateVector3f(const tString &in asVarName,
                      const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFading}}
<syntaxhighlight lang="c++">bool IsFading(const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsFirstRun}}
<syntaxhighlight lang="c++">bool IsFirstRun()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LayoutBegin}}
<syntaxhighlight lang="c++">void LayoutBegin(eImGuiLayout aType,
                 const cVector3f &in avPos = 0,
                 const cVector2f &in avSize = -1,
                 const cVector2f &in avSpacing = 0)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aType|[[../eImGuiLayout|eImGuiLayout]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avSpacing|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LayoutEnd}}
<syntaxhighlight lang="c++">void LayoutEnd()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LockMouseFocus}}
<syntaxhighlight lang="c++">void LockMouseFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MouseFocusIsLocked}}
<syntaxhighlight lang="c++">bool MouseFocusIsLocked()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PopModifiers}}
<syntaxhighlight lang="c++">void PopModifiers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevBecameInFocus}}
<syntaxhighlight lang="c++">bool PrevBecameInFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevBecamePressed}}
<syntaxhighlight lang="c++">bool PrevBecamePressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevInFocus}}
<syntaxhighlight lang="c++">bool PrevInFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevMouseOver}}
<syntaxhighlight lang="c++">bool PrevMouseOver()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevPosition}}
<syntaxhighlight lang="c++">const cVector3f& PrevPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevPressed}}
<syntaxhighlight lang="c++">bool PrevPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevSize}}
<syntaxhighlight lang="c++">const cVector2f& PrevSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevUpdated}}
<syntaxhighlight lang="c++">bool PrevUpdated()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PrevWasInFocus}}
<syntaxhighlight lang="c++">bool PrevWasInFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PushModifiers}}
<syntaxhighlight lang="c++">void PushModifiers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RepeatTimer}}
<syntaxhighlight lang="c++">bool RepeatTimer(const tString &in asName,
                 float afTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afTime|float|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetModifiers}}
<syntaxhighlight lang="c++">void ResetModifiers()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SendAction}}
<syntaxhighlight lang="c++">void SendAction(eImGuiAction aAction,
                bool abDown,
                bool abTriggered)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAction|[[../eImGuiAction|eImGuiAction]]|}}
{{CodeDocDetailParam|abDown|bool|}}
{{CodeDocDetailParam|abTriggered|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SendMousePosition}}
<syntaxhighlight lang="c++">void SendMousePosition(const cVector2l &in avPos,
                       const cVector2l &in avRel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avRel|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SendMouseVirtualPosition}}
<syntaxhighlight lang="c++">void SendMouseVirtualPosition(const cVector2f &in avPos,
                              const cVector2f &in avRel)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avRel|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetAlignment}}
<syntaxhighlight lang="c++">void SetAlignment(eImGuiAlign aAlign)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aAlign|[[../eImGuiAlign|eImGuiAlign]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultButton}}
<syntaxhighlight lang="c++">void SetDefaultButton(const cImGuiButtonData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiButtonData|cImGuiButtonData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultCheckBox}}
<syntaxhighlight lang="c++">void SetDefaultCheckBox(const cImGuiCheckBoxData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiCheckBoxData|cImGuiCheckBoxData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultFont}}
<syntaxhighlight lang="c++">void SetDefaultFont(const cImGuiFont &in aFont)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aFont|[[../cImGuiFont|cImGuiFont]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultFrame}}
<syntaxhighlight lang="c++">void SetDefaultFrame(const cImGuiFrameData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiFrameData|cImGuiFrameData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultGauge}}
<syntaxhighlight lang="c++">void SetDefaultGauge(const cImGuiGaugeData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiGaugeData|cImGuiGaugeData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultLabel}}
<syntaxhighlight lang="c++">void SetDefaultLabel(const cImGuiLabelData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiLabelData|cImGuiLabelData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultMouse}}
<syntaxhighlight lang="c++">void SetDefaultMouse(const cImGuiGfx &in aGfx,
                     const cVector2f &in avSize = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultMultiSelect}}
<syntaxhighlight lang="c++">void SetDefaultMultiSelect(const cImGuiMultiSelectData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiMultiSelectData|cImGuiMultiSelectData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultSliderHorizontal}}
<syntaxhighlight lang="c++">void SetDefaultSliderHorizontal(const cImGuiSliderData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiSliderData|cImGuiSliderData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultSliderVertical}}
<syntaxhighlight lang="c++">void SetDefaultSliderVertical(const cImGuiSliderData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiSliderData|cImGuiSliderData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultTextFrame}}
<syntaxhighlight lang="c++">void SetDefaultTextFrame(const cImGuiTextFrameData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiTextFrameData|cImGuiTextFrameData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDefaultWindow}}
<syntaxhighlight lang="c++">void SetDefaultWindow(const cImGuiWindowData &in aData)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aData|[[../cImGuiWindowData|cImGuiWindowData]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDrawUIDebugBoxes}}
<syntaxhighlight lang="c++">void SetDrawUIDebugBoxes(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetFocus}}
<syntaxhighlight lang="c++">void SetFocus(const tString &in asWidgetName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asWidgetName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModColorMul}}
<syntaxhighlight lang="c++">void SetModColorMul(const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModGfx}}
<syntaxhighlight lang="c++">void SetModGfx(const cImGuiGfx &in aGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModRotateAngle}}
<syntaxhighlight lang="c++">void SetModRotateAngle(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModRotateCustomPivot}}
<syntaxhighlight lang="c++">void SetModRotateCustomPivot(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModRotatePivot}}
<syntaxhighlight lang="c++">void SetModRotatePivot(const cVector2f &in avPivot)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPivot|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModTextColorMul}}
<syntaxhighlight lang="c++">void SetModTextColorMul(const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModUISizeHoriExpansion}}
<syntaxhighlight lang="c++">void SetModUISizeHoriExpansion(float afNeg,
                               float afPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNeg|float|}}
{{CodeDocDetailParam|afPos|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModUISizeVertExpansion}}
<syntaxhighlight lang="c++">void SetModUISizeVertExpansion(float afNeg,
                               float afPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afNeg|float|}}
{{CodeDocDetailParam|afPos|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModUseInput}}
<syntaxhighlight lang="c++">void SetModUseInput(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetModUseUIPos}}
<syntaxhighlight lang="c++">void SetModUseUIPos(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveRepeatActive}}
<syntaxhighlight lang="c++">void SetMoveRepeatActive(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveRepeatSpeed}}
<syntaxhighlight lang="c++">float SetMoveRepeatSpeed(float fX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|fX|float|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoveRepeatStartDelay}}
<syntaxhighlight lang="c++">void SetMoveRepeatStartDelay(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShowMouse}}
<syntaxhighlight lang="c++">void SetShowMouse(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetShowMouseAutomatically}}
<syntaxhighlight lang="c++">void SetShowMouseAutomatically(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateColor}}
<syntaxhighlight lang="c++">void SetStateColor(uint64 alId,
                   const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateColor}}
<syntaxhighlight lang="c++">void SetStateColor(const tString &in asVarName,
                   const cColor &in aVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|aVal|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateFloat}}
<syntaxhighlight lang="c++">void SetStateFloat(uint64 alId,
                   float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateFloat}}
<syntaxhighlight lang="c++">void SetStateFloat(const tString &in asVarName,
                   float afVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVal|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateInt}}
<syntaxhighlight lang="c++">void SetStateInt(uint64 alId,
                 int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateInt}}
<syntaxhighlight lang="c++">void SetStateInt(const tString &in asVarName,
                 int alVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|alVal|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateVector3f}}
<syntaxhighlight lang="c++">void SetStateVector3f(uint64 alId,
                      const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alId|uint64|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetStateVector3f}}
<syntaxhighlight lang="c++">void SetStateVector3f(const tString &in asVarName,
                      const cVector3f &in avVal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailParam|avVal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUIMoveGroupFlags}}
<syntaxhighlight lang="c++">void SetUIMoveGroupFlags(int alGroupFlags)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alGroupFlags|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUIMoveWrapMode}}
<syntaxhighlight lang="c++">void SetUIMoveWrapMode(eImGuiWrap aWrap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aWrap|[[../eImGuiWrap|eImGuiWrap]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUpAlignment}}
<syntaxhighlight lang="c++">void SetUpAlignment(const cVector3f &in avPos,
                    const cVector2f &in avSize,
                    cVector3f &out avAlignedPos,
                    eImGuiAlign aAlignment)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avAlignedPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aAlignment|[[../eImGuiAlign|eImGuiAlign]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetupWidgetRect}}
<syntaxhighlight lang="c++">void SetupWidgetRect(const cVector3f &in avInPos,
                     const cVector2f &in avInSize,
                     cVector3f &out avOutPos,
                     cVector2f &out avOutSize,
                     const cVector2f &in avDefaultSize,
                     const cImGuiGfx &in aGfx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avInPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avInSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avOutPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avOutSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avDefaultSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aGfx|[[../cImGuiGfx|cImGuiGfx]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopFade}}
<syntaxhighlight lang="c++">void StopFade(const tString &in asVarName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asVarName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopTimer}}
<syntaxhighlight lang="c++">void StopTimer(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TimerExists}}
<syntaxhighlight lang="c++">bool TimerExists(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|TimerOver}}
<syntaxhighlight lang="c++">bool TimerOver(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}