A three dimensional vector unit whose elements are stored as floats.

==Constructors==

{| class="wikitable"
! Constructor !! Description
|- 
| <syntaxhighlight lang="c++" inline>cVector3f(float, float, float)</syntaxhighlight> || Creates a <code>cVector3f</code> with the given element data.
|}

==Fields==

{| class="wikitable"
! Field Name !! Type !! Description
|-
| x || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The x value of the vector. 
|-
| y || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The y value of the vector. 
|-
| z || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The z value of the vector. 
|}

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElement || <syntaxhighlight lang="c++" inline>uint64 alIdx</syntaxhighlight> || Gets the value at the given index. (Indices 0, 1, and 2 are equal to x, y, and z, respectively.) 
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Length ||  || Returns the length of this vector. 
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || Normalize ||   || Returns the normalization factor for this vector. (See Remarks.) 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetElement || <syntaxhighlight lang="c++" inline>uint64 alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> || Sets the value at the given index to the given value. (Indices 0, 1, and 2 are equal to x, y, and z, respectively.) 
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || SqrLength ||  || Returns the length-squared of this vector. 
|}

==Remarks==

A normalized vector is a vector whose length is equal to one, otherwise known as a unit vector. To convert a vector into a unit vector, get the normalization factor by calling the ''Normalize'' function, then divide each of the vector's x, y, and z coordinates by that factor.

<syntaxhighlight lang="c++">cVector3f vBaseVector(2.0, 5.0, 3.0);
float fNormFactor = vBaseVector.Normalize();
cVector3f vNormalizedVector(vBaseVector.x / fNormFactor, 
                            vBaseVector.y / fNormFactor, 
                            vBaseVector.z / fNormFactor);</syntaxhighlight>

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__