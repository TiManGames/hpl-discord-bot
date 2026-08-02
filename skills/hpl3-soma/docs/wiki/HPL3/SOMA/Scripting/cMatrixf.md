A 4x4 matrix which stores its elements as floats. It is frequently used in transformation-related functions. (i.e. translation, rotation, scale, etc.)

==Constructors==

{| class="wikitable"
! Constructor !! Description
|- 
| <syntaxhighlight lang="c++" inline>cMatrixf()</syntaxhighlight> || Creates a matrix with default values. 
|- 
| <syntaxhighlight lang="c++" inline>cMatrixf(cVector4f, cVector4f, cVector4f, cVector4f)</syntaxhighlight> || Creates a matrix using the given vectors as column data. 
|- 
| <syntaxhighlight lang="c++" inline>cMatrixf(float, float, float, float, float, float, float, float, float, float, float, float, float, float, float, float)</syntaxhighlight> || Creates a matrix using the given values as cell data. 
|}

==Fields==

cMatrixf has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElement || <syntaxhighlight lang="c++" inline>uint64</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint64</syntaxhighlight> ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetForward ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetRight ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || GetRotation ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetTranslation ||  ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf</syntaxhighlight>]] || GetTranspose ||  ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetUp ||  ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetForward || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVec</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRight || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVec</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotation || <syntaxhighlight lang="c++" inline>float afXX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afXY</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afXZ</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afYX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afYY</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afYZ</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afZX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afZY</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afZZ</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetRotation || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxRot</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTranslation || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avTrans</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUp || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avVec</syntaxhighlight>]] ||
|}

==Remarks==

To retrieve a value from a matrix, use the <code>GetElement</code> function above. The parameters for the <code>GetElement</code> function use the format GetElement(columnIndex, rowIndex).

<syntaxhighlight lang="c++">cMatrixf m1(cVector4f(0, 1, 2, 3), 
            cVector4f(4, 5, 6, 7), 
	        cVector4f(8, 9, 10, 11), 
	        cVector4f(12, 13, 14, 15));

float f = m1.GetElement(1, 2);

// value of f: 9</syntaxhighlight>

To do matrix computations, use the [[cmath_matrixslerp|cMath_MatrixXXX]] family of functions.

<syntaxhighlight lang="c++">cMatrixf m1(cVector4f(1, 1, 1, 1), 
            cVector4f(2, 2, 2, 2), 
            cVector4f(3, 3, 3, 3), 
            cVector4f(4, 4, 4, 4));

cMatrixf m2(cVector4f(5, 5, 5, 5), 
            cVector4f(6, 6, 6, 6), 
            cVector4f(7, 7, 7, 7), 
            cVector4f(8, 8, 8, 8));
            
cMatrixf m3 = cMath_MatrixMul(m1, m2);

// value of m3: { 26,  26,  26,  26,
//                52,  52,  52,  52,
//                78,  78,  78,  78,
//                104, 104, 104, 104 }</syntaxhighlight>

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__