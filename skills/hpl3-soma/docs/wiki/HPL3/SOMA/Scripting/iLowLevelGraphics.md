{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iLowLevelGraphics has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawBoxMinMax || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMax</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawLine || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avBegin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avEnd</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawLineQuad || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DrawSphere || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight>,<br />[[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alSegments = 32</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetGraphicsInfo ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNumDisplays ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetScreenSizeFloat ||   ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l&</syntaxhighlight>]] || GetScreenSizeInt ||   ||
|-
| [[../cVector2l|<syntaxhighlight lang="c++" inline>cVector2l</syntaxhighlight>]] || GetWindowPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDisplayMode || [[../eDisplayMode|<syntaxhighlight lang="c++" inline>eDisplayMode aMode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVsyncMode || [[../eVSyncMode|<syntaxhighlight lang="c++" inline>eVSyncMode aMode</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__