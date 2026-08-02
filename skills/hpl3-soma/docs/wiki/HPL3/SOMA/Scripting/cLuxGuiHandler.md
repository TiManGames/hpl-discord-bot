{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxGuiHandler has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachCameraTextureToEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@ apEnt</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CreateCameraTexture || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2l|<syntaxhighlight lang="c++" inline>const cVector2l &in avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>uint alFrameRate</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFOV</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afNearPlane</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFarPlane</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyCameraTexture || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetGameHudInputFocus ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraTextureMatrix || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxCamera</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCameraTextureSettings || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afFOV</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afNearPlane</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afFarPlane</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGameHudInputFocus || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__