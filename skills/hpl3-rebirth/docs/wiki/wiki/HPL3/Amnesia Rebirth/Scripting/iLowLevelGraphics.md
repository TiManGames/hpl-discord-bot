{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iLowLevelGraphics has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#DrawBoxMinMax|DrawBoxMinMax]](const [[../cVector3f|cVector3f]] &in avMin, const [[../cVector3f|cVector3f]] &in avMax, const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#DrawLine|DrawLine]](const [[../cVector3f|cVector3f]] &in avBegin, const [[../cVector3f|cVector3f]] &in avEnd, const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#DrawLineQuad|DrawLineQuad]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector2f|cVector2f]] &in avSize, const [[../cColor|cColor]] &in aCol)|}}
{{CodeDocSummaryItem|void|[[#DrawSphere|DrawSphere]](const [[../cVector3f|cVector3f]] &in avPos, float afRadius, const [[../cColor|cColor]] &in aCol, int alSegments <nowiki>=</nowiki> 32)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetGraphicsInfo|GetGraphicsInfo]]()|}}
{{CodeDocSummaryItem|int|[[#GetNumDisplays|GetNumDisplays]]()|}}
{{CodeDocSummaryItem|[[../cVector2f|cVector2f]]|[[#GetScreenSizeFloat|GetScreenSizeFloat]]()|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetScreenSizeInt|GetScreenSizeInt]]()|}}
{{CodeDocSummaryItem|[[../cVector2l|cVector2l]]|[[#GetWindowPosition|GetWindowPosition]]()|}}
{{CodeDocSummaryItem|void|[[#SetBrightness|SetBrightness]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetContrast|SetContrast]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDisplayMode|SetDisplayMode]]([[../eDisplayMode|eDisplayMode]] aMode)|}}
{{CodeDocSummaryItem|void|[[#SetGammaCorrection|SetGammaCorrection]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetVsyncMode|SetVsyncMode]]([[../eVSyncMode|eVSyncMode]] aMode)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|DrawBoxMinMax}}
<syntaxhighlight lang="c++">void DrawBoxMinMax(const cVector3f &in avMin,
                   const cVector3f &in avMax,
                   const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avMin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avMax|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawLine}}
<syntaxhighlight lang="c++">void DrawLine(const cVector3f &in avBegin,
              const cVector3f &in avEnd,
              const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avBegin|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avEnd|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawLineQuad}}
<syntaxhighlight lang="c++">void DrawLineQuad(const cVector3f &in avPos,
                  const cVector2f &in avSize,
                  const cColor &in aCol)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DrawSphere}}
<syntaxhighlight lang="c++">void DrawSphere(const cVector3f &in avPos,
                float afRadius,
                const cColor &in aCol,
                int alSegments = 32)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afRadius|float|}}
{{CodeDocDetailParam|aCol|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|alSegments|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGraphicsInfo}}
<syntaxhighlight lang="c++">tString GetGraphicsInfo()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNumDisplays}}
<syntaxhighlight lang="c++">int GetNumDisplays()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScreenSizeFloat}}
<syntaxhighlight lang="c++">cVector2f GetScreenSizeFloat()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector2f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetScreenSizeInt}}
<syntaxhighlight lang="c++">const cVector2l& GetScreenSizeInt()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const cVector2l&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWindowPosition}}
<syntaxhighlight lang="c++">cVector2l GetWindowPosition()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector2l|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetBrightness}}
<syntaxhighlight lang="c++">void SetBrightness(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetContrast}}
<syntaxhighlight lang="c++">void SetContrast(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDisplayMode}}
<syntaxhighlight lang="c++">void SetDisplayMode(eDisplayMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eDisplayMode|eDisplayMode]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGammaCorrection}}
<syntaxhighlight lang="c++">void SetGammaCorrection(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetVsyncMode}}
<syntaxhighlight lang="c++">void SetVsyncMode(eVSyncMode aMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMode|[[../eVSyncMode|eVSyncMode]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}