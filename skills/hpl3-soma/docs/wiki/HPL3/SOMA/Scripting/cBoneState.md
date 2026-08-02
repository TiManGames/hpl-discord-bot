{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cBoneState has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@ apChild</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || AddEntity || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddRotation || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avRot</syntaxhighlight>]],<br />[[../eEulerRotationOrder|<syntaxhighlight lang="c++" inline>eEulerRotationOrder aOrder</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddRotation || [[../cQuaternion|<syntaxhighlight lang="c++" inline>const cQuaternion &in aqRotation</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abNormalize = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddScale || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avScale</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTranslation || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avTrans</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ApplyPostAnimTransform || <syntaxhighlight lang="c++" inline>bool abSetChildrenUpdated</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ApplyPreAnimTransform || <syntaxhighlight lang="c++" inline>bool abSetChildrenUpdated</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearEntities ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || CreateChild || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoDeleteChildren = true</syntaxhighlight> ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetBody ||   ||
|-
| [[../cNode3DIterator|<syntaxhighlight lang="c++" inline>cNode3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetColliderBody ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCustomFlags ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@</syntaxhighlight>]] || GetParent ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetPostAnimTransform ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetPreAnimTransform ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUsePostAnimTransform ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUsePreAnimTransform ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf&</syntaxhighlight>]] || GetWorldMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || NormalizeRotation ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@ apNode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || RemoveEntity || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetColliderBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCustomFlags || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abSetChildrenUpdated = true</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParent || [[../cNode3D|<syntaxhighlight lang="c++" inline>cNode3D@ apNode</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPostTransform || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPreTransform || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUsePostTransform || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUsePreTransform || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || SetVisible || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abCascade</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateEntityChildren ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateMatrix || <syntaxhighlight lang="c++" inline>bool abSetChildrenUpdated</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__