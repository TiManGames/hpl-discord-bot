{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cTerrain has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetChangePatchLevelDist ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetGeometryGridNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetGeometryPatchSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetHeightMapSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaterialSpecularPower ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxHeight ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetStartAndSizeInTextureGrid || [[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avStart</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l &out avGridStart</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l &out avGridSize</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTextureGridNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTexturePatchSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetUnitSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetWorldPosHeightAndNormal || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPosition</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float& afHeight</syntaxhighlight>,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f& avNormal</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetChangePatchLevelDist || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCheapMaterial || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asCheapMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afCheapMaterialMul</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGeometryPatchSize || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxHeight || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTexturePatchSize || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUnitSize || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__