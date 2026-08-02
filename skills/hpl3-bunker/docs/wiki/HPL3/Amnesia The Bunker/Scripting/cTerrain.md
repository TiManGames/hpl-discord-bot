{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cTerrain has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddDynamicDecal|AddDynamicDecal]](const [[../tString|tString]] &in asMaterial, const [[../cVector3f|cVector3f]] &in avPosition, float afAngle, const [[../cVector2f|cVector2f]] &in avSize, float afDepth <nowiki>=</nowiki> -1, const [[../cColor|cColor]] &in aColor <nowiki>=</nowiki> 1, const [[../cVector2f|cVector2f]] &in avMinUV <nowiki>=</nowiki> 0, const [[../cVector2f|cVector2f]] &in avMaxUV <nowiki>=</nowiki> 1, float afFadeOutTime <nowiki>=</nowiki> -1)|}}
{{CodeDocSummaryItem|float|[[#GetChangePatchLevelDist|GetChangePatchLevelDist]]()|}}
{{CodeDocSummaryItem|int|[[#GetGeometryGridNum|GetGeometryGridNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetGeometryPatchSize|GetGeometryPatchSize]]()|}}
{{CodeDocSummaryItem|int|[[#GetHeightMapSize|GetHeightMapSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaterialSpecularPower|GetMaterialSpecularPower]]()|}}
{{CodeDocSummaryItem|float|[[#GetMaxHeight|GetMaxHeight]]()|}}
{{CodeDocSummaryItem|void|[[#GetStartAndSizeInTextureGrid|GetStartAndSizeInTextureGrid]](const [[../cVector2f|cVector2f]] &in avStart, const [[../cVector2f|cVector2f]] &in avSize, [[../cVector2l|cVector2l]] &out avGridStart, [[../cVector2l|cVector2l]] &out avGridSize)|}}
{{CodeDocSummaryItem|int|[[#GetTextureGridNum|GetTextureGridNum]]()|}}
{{CodeDocSummaryItem|int|[[#GetTexturePatchSize|GetTexturePatchSize]]()|}}
{{CodeDocSummaryItem|float|[[#GetUnitSize|GetUnitSize]]()|}}
{{CodeDocSummaryItem|bool|[[#GetWorldPosHeightAndNormal|GetWorldPosHeightAndNormal]](const [[../cVector3f|cVector3f]] &in avPosition, float &out afHeight, [[../cVector3f|cVector3f]] &out avNormal)|}}
{{CodeDocSummaryItem|void|[[#SetChangePatchLevelDist|SetChangePatchLevelDist]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetCheapMaterial|SetCheapMaterial]](const [[../tString|tString]] &in asCheapMaterial, float afCheapMaterialMul)|}}
{{CodeDocSummaryItem|void|[[#SetGeometryPatchSize|SetGeometryPatchSize]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxHeight|SetMaxHeight]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetTexturePatchSize|SetTexturePatchSize]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetUnitSize|SetUnitSize]](float afX)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddDynamicDecal}}
<syntaxhighlight lang="c++">void AddDynamicDecal(const tString &in asMaterial,
                     const cVector3f &in avPosition,
                     float afAngle,
                     const cVector2f &in avSize,
                     float afDepth = -1,
                     const cColor &in aColor = 1,
                     const cVector2f &in avMinUV = 0,
                     const cVector2f &in avMaxUV = 1,
                     float afFadeOutTime = -1)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asMaterial|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afAngle|float|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afDepth|float|}}
{{CodeDocDetailParam|aColor|[[../cColor|cColor]]|}}
{{CodeDocDetailParam|avMinUV|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avMaxUV|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|afFadeOutTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetChangePatchLevelDist}}
<syntaxhighlight lang="c++">float GetChangePatchLevelDist()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGeometryGridNum}}
<syntaxhighlight lang="c++">int GetGeometryGridNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGeometryPatchSize}}
<syntaxhighlight lang="c++">int GetGeometryPatchSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetHeightMapSize}}
<syntaxhighlight lang="c++">int GetHeightMapSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaterialSpecularPower}}
<syntaxhighlight lang="c++">float GetMaterialSpecularPower()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetMaxHeight}}
<syntaxhighlight lang="c++">float GetMaxHeight()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetStartAndSizeInTextureGrid}}
<syntaxhighlight lang="c++">void GetStartAndSizeInTextureGrid(const cVector2f &in avStart,
                                  const cVector2f &in avSize,
                                  cVector2l &out avGridStart,
                                  cVector2l &out avGridSize)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStart|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avSize|[[../cVector2f|cVector2f]]|}}
{{CodeDocDetailParam|avGridStart|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailParam|avGridSize|[[../cVector2l|cVector2l]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTextureGridNum}}
<syntaxhighlight lang="c++">int GetTextureGridNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTexturePatchSize}}
<syntaxhighlight lang="c++">int GetTexturePatchSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetUnitSize}}
<syntaxhighlight lang="c++">float GetUnitSize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetWorldPosHeightAndNormal}}
<syntaxhighlight lang="c++">bool GetWorldPosHeightAndNormal(const cVector3f &in avPosition,
                                float &out afHeight,
                                cVector3f &out avNormal)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPosition|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afHeight|float|}}
{{CodeDocDetailParam|avNormal|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetChangePatchLevelDist}}
<syntaxhighlight lang="c++">void SetChangePatchLevelDist(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCheapMaterial}}
<syntaxhighlight lang="c++">void SetCheapMaterial(const tString &in asCheapMaterial,
                      float afCheapMaterialMul)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCheapMaterial|[[../tString|tString]]|}}
{{CodeDocDetailParam|afCheapMaterialMul|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetGeometryPatchSize}}
<syntaxhighlight lang="c++">void SetGeometryPatchSize(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxHeight}}
<syntaxhighlight lang="c++">void SetMaxHeight(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTexturePatchSize}}
<syntaxhighlight lang="c++">void SetTexturePatchSize(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetUnitSize}}
<syntaxhighlight lang="c++">void SetUnitSize(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}