{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iPhysicsRope has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetActive ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetAttachedEndBody ||   ||
|-
| [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@</syntaxhighlight>]] || GetAttachedStartBody ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoMoveAcc ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetAutoMoveActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoMoveMaxSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetAutoMoveSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollide ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollideAttachments ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDamping ||   ||
|-
| [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@</syntaxhighlight>]] || GetEndParticle ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFirstSegmentLength ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetGravityForce ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetMaxIterations ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxTotalLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMinTotalLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetMotorActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorMaxSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorMinSpeed ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetMotorSound ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorSoundStartSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorSoundStopSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorSpeedMul ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMotorWantedLength ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@</syntaxhighlight>]] || GetParticle || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetParticleNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParticleRadius ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetPhysicsActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSegmentLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSlideAmount ||   ||
|-
| [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@</syntaxhighlight>]] || GetStartParticle ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStiffness ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetStrength ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTotalLength ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUpdateCount ||  ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveAttachedBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveContainerFromBody</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RenderDebug || [[../iLowLevelGraphics|<syntaxhighlight lang="c++" inline>iLowLevelGraphics@ apLowLevel</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttachedEndBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAttachedStartBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoMoveAcc || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoMoveActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoMoveMaxSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetAutoMoveSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollide || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollideAttachments || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDamping || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxIterations || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxTotalLength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMinTotalLength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorMaxSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorMinSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorSound || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSound</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorSoundStartSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorSoundStopSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorSpeedMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMotorWantedLength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParticleRadius || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPhysicsActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSegmentLength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSleeping || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSlideAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStiffness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetStrength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTotalLength || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateConstraints ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLengthConstraint || [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP1</syntaxhighlight>]],<br />[[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP2</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLengthConstraint || [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP1</syntaxhighlight>]],<br />[[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP2</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStiffness</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLengthConstraint || [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP1</syntaxhighlight>]],<br />[[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP2</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStiffness</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLengthConstraintStretch || [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP1</syntaxhighlight>]],<br />[[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apP2</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afLength</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afStiffness</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateParticleCollisionConstraint || [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apPart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPrevPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afRadius</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__