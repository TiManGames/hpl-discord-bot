{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

iPhysicsCloth has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ApplyForceToParticles || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avForce</syntaxhighlight>]],<br />[[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@ apBaseParticle</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avOffset = 0</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AttachToLine || [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f avStart</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f avEnd</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alRow</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alColumnStride</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abFixedPositions = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetActive ||   ||
|-
| [[../cVector2f|<syntaxhighlight lang="c++" inline>cVector2f</syntaxhighlight>]] || GetClothSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetCollide ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDamping ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetGravityForce ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cVerletParticle|<syntaxhighlight lang="c++" inline>cVerletParticle@</syntaxhighlight>]] || GetParticle || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetParticleNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParticleRadius ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSlideAmount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUpdateCount ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWindForce ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || IncUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveAttachedBody || [[../iPhysicsBody|<syntaxhighlight lang="c++" inline>iPhysicsBody@ apBody</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveContainerFromBody</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCollide || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDamping || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetGravityForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avX</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParticleRadius || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSleeping || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSlideAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWindForce || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f avWindForce</syntaxhighlight>]] ||
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