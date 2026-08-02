{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cMesh has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddAnimation || [[../cAnimation|<syntaxhighlight lang="c++" inline>cAnimation@ apAnimation</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddNode || [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@ apNode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearAnimations || <syntaxhighlight lang="c++" inline>bool abDeleteAll</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || CompileBonesAndSubMeshes ||   ||
|-
| [[../cSubMesh|<syntaxhighlight lang="c++" inline>cSubMesh@</syntaxhighlight>]] || CreateSubMesh || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../cAnimation|<syntaxhighlight lang="c++" inline>cAnimation@</syntaxhighlight>]] || GetAnimation || <syntaxhighlight lang="c++" inline>int alIndex</syntaxhighlight> ||
|-
| [[../cAnimation|<syntaxhighlight lang="c++" inline>cAnimation@</syntaxhighlight>]] || GetAnimationFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAnimationIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetAnimationNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetBoneBoundingRadius || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetNode || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetNodeByName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetNodeNum ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetRootNode ||   ||
|-
| [[../cSkeleton|<syntaxhighlight lang="c++" inline>cSkeleton@</syntaxhighlight>]] || GetSkeleton ||   ||
|-
| [[../cSubMesh|<syntaxhighlight lang="c++" inline>cSubMesh@</syntaxhighlight>]] || GetSubMesh || <syntaxhighlight lang="c++" inline>uint alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubMeshIndex || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../cSubMesh|<syntaxhighlight lang="c++" inline>cSubMesh@</syntaxhighlight>]] || GetSubMeshName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSubMeshNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTriangleCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkeleton || [[../cSkeleton|<syntaxhighlight lang="c++" inline>cSkeleton@ apSkeleton</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__