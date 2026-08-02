A three dimensional vector unit whose elements are stored as integers.

==Constructors==

{| class="wikitable"
! Constructor !! Description
|- 
| <syntaxhighlight lang="c++" inline>cVector3l(int, int, int)</syntaxhighlight> || Creates a <code>cVector3l</code> with the given element data.
|}

==Fields==

{| class="wikitable"
! Field Name !! Type !! Description
|-
| x || <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || The integer x value of the vector. 
|-
| y || <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || The integer y value of the vector. 
|-
| z || <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || The integer z value of the vector. 
|}

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetElement || <syntaxhighlight lang="c++" inline>uint64 alIdx</syntaxhighlight> || Gets the value at the given index. (Indices 0, 1, and 2 are equal to x, y, and z, respectively.) 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetElement || <syntaxhighlight lang="c++" inline>uint64 alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int</syntaxhighlight> || Sets the value at the given index to the given value. (Indices 0, 1, and 2 are equal to x, y, and z, respectively.) 
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || SqrLength ||  || Returns the length-squared of this vector. 
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__