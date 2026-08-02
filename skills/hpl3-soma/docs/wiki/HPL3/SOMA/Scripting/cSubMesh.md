{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cSubMesh has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Compile ||   ||
|-
| [[../cMeshCollider|<syntaxhighlight lang="c++" inline>cMeshCollider@</syntaxhighlight>]] || CreateCollider || [[../eCollideShapeType|<syntaxhighlight lang="c++" inline>eCollideShapeType aType</syntaxhighlight>]] ||
|-
| [[../iCollideShape|<syntaxhighlight lang="c++" inline>iCollideShape@</syntaxhighlight>]] || CreateCollideShape || [[../iPhysicsWorld|<syntaxhighlight lang="c++" inline>iPhysicsWorld@ apWorld</syntaxhighlight>]] ||
|-
| [[../cMeshCollider|<syntaxhighlight lang="c++" inline>cMeshCollider@</syntaxhighlight>]] || GetCollider || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetColliderNum ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetLocalTransform ||   ||
|-
| [[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@</syntaxhighlight>]] || GetMaterial ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetMaterialName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetMaterialName ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetModelScale ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@</syntaxhighlight>]] || GetVertexBuffer ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsCollideShape ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetIsCollideShape || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetLocalTransform || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTrans</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaterial || [[../cMaterial|<syntaxhighlight lang="c++" inline>cMaterial@ apMaterial</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVertexBuffer || [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@ apVtxBuffer</syntaxhighlight>]] ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__