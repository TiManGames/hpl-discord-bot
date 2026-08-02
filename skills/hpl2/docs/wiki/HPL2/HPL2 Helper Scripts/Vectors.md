{{TocRight}}
This page documents "HelperScripts_Vectors.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=

The script file "HelperScripts_Vectors.hps" adds support for various vector classes. For beginners or other people not familiar with classes, this is best thought of as new variable types.

At its simplest, vector is a type holds multiple numbers, and is usually used to represent spatial co-ordinates or movement. Some advantages to using a vector over individual numbers is that you can pass the vector as a single argument, or use it in arithmetic as if it was single scalar number. For example:
<syntaxhighlight lang="cpp">
// Example 1 - The basic way:
float fSpeedX = 1.5f;
float fSpeedY = 0.0f;
float fSpeedZ = 0.75f;
float fCurrentX = GetEntityPosX("myEntity");
float fCurrentY = GetEntityPosY("myEntity");
float fCurrentZ = GetEntityPosZ("myEntity");
SetEntityPos("myEntity", fCurrentX + (fSpeedX * afStep), fCurrentY + (fSpeedY * afStep), fCurrentZ + (fSpeedZ * afStep));

// Example 2 - The Helper Scripts way:
cVector vSpeed = new cVector(1.5f, 0.0f, 0.75f);
cVector vCurrent = GetEntityPosVec("myEntity");
SetEntityPosVec("myEntity", vCurrent + (vSpeed * afStep));
</syntaxhighlight>

These two examples have the same effect, but with much simpler code.

Various methods are provided, in both the vector classes and in Math, for working with vectors; for example, to find out the length of a line, working out rotations, plotting paths and more.


===Vector types===
Available vector classes:
<code>cVector</code>, <code>cPoint</code>, <code>cRotator</code>,  <code>cBezier</code>, <code>cSpline</code>


===The basics===
Declare a vector like any other variable, and use its various properties, operations and methods list on this page to work with it. For example:
<syntaxhighlight lang="cpp">
cVector myVector;			// Declares a new cVector, called myVector. By default it's a 3d vector.
cVector my2dVector(2);		// Declares a new cVector, set up to have 2 dimensions.
cVector myVector.X = 2.0f;	// Assigns the value 2.0f to the X component of myVector.
</syntaxhighlight>
The cPoint and cRotator classes work similarly. (A cPoint is a vector containing integers instead of floats, and a cRotator is a vector intended for working with pitch-yaw-roll rotations.


===Component properties===
The simplest way to access the components of a 2d or 3d vector is through the named properties. A 2d or 3d cVector provides X and Y, or X, Y and Z properties. cRotator has Pitch, Yaw and Roll. See the notes below for more details on each class.


===Indices===
Like arrays, you can ''get'' the items in the vector using an index operator, e.g. myVector[0], myVector[1], myVector[2] are the same as the X, Y and Z properties. However, ''unlike arrays'', this is '''read-only'''.

(This seems to be because the version of AngelScript used in HPL2 seems to only allow the index operator to ''get'' and not ''set''. If I'm wrong and you can make this work, let me know!)


===Advanced info===
cRotator inherits from cVector. Advanced users who want to make their own derived vector types are advised to read over the cVector definition and derived class definitions to see how they inherit.

cVector and cPoint can both be used for 2d or 3d vectors. The vector classes are designed to be agnostic of dimensionality. The maximum number of dimensions for all vector classes is defined by ulVectorDimMax. The default value is 16, but an advanced user may want to edit that value. cVector and it's derived classes can have any number of dimensions from 0 to, in theory, 65535, although either extreme would be ridiculous. Using a maximum larger than 65535 could cause problems.

Arithmetic, and some methods, can work with differently dimensioned vectors. For example <code>a[X,Y,Z] + b[X,Y]</code> has the same effect as <code>a[X,Y,Z] + b[X,Y,0]</code>.


=cVector=
The cVector class defines a type that contains a series of float values, typically used to represent a spatial location or movement.


==Behaviours==
cVectors are declared similarly to a data type variable:
<syntaxhighlight lang="cpp">
cVector myVector;
</syntaxhighlight>

The default constructor makes an empty 3d vector:
<syntaxhighlight lang="cpp">
cVector myVector;						// Makes a 3d vector
cVector myVector = cVector();			// Makes a 3d vector
</syntaxhighlight>
	
You can make an empty vector with a specific dimension (the number of components) by passing an integer to the constructor:
<syntaxhighlight lang="cpp">
	cVector myVector = cVector(3);		// Makes a 3d vector

	cVector myVector = cVector(2);		// Makes a 2d vector
	cVector myVector = cVector(4);		// Makes a 4d vector
</syntaxhighlight>

A vector can be initialised with any number dimension up to ulVectorDimMax (default 16).


==Properties==
cVector provides the following public properties:


====X====
<syntaxhighlight lang="cpp">
float X
</syntaxhighlight>
The float property X provides access to the first component in the cVector (provided it has at least one component).
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyVector.X;
vMyVector.X = 1.0f;
</syntaxhighlight>


====Y====
<syntaxhighlight lang="cpp">
float Y
</syntaxhighlight>
The float property Y provides access to the second component in the cVector (provided it has at least two components).
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyVector.Y;
vMyVector.Y = 1.0f;
</syntaxhighlight>


====Z====
<syntaxhighlight lang="cpp">
float Z
</syntaxhighlight>
The float property Z provides access to the third component in the cVector (provided it has at least three components).
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyVector.Z;
vMyVector.Z = 1.0f;
</syntaxhighlight>


====W====
<syntaxhighlight lang="cpp">
float W
</syntaxhighlight>
The float property W provides access to the fourth component in the cVector (provided it has at least four components).
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyVector.W;
vMyVector.W = 1.0f;
</syntaxhighlight>


====Dimension====
<syntaxhighlight lang="cpp">
uint Dimension
</syntaxhighlight>
The read-only integer property Dimension returns the number of components in the cVector. The dimension of the cVector can be set by the constructor or, see also: Resize().
<syntaxhighlight lang="cpp">
// Example:
if (vMyVector.Dimension >=3) vMyVector.Z = 0.0f;
// The condition succeeds if the cVector has at least three components, and then the value of the 3rd component is assigned 0.0f.
</syntaxhighlight>


====LastIndex====
<syntaxhighlight lang="cpp">
uint LastIndex
</syntaxhighlight>
The read-only integer property LastIndex returns the index of the last component in the cVector. This is the same as Dimension - 1.
<syntaxhighlight lang="cpp">
// Example:
float fMyFloat = vMyVector[vMyVector.LastIndex];
// The float fMyFloat is assigned whatever value is found in the final component of the cVector.
</syntaxhighlight>


==Operators==


Some '''arithmetic''' operators have been implemented for '''a cVector with another cVector''':
<syntaxhighlight lang="cpp"> +  -  *  /  +=  -=  *=  /= </syntaxhighlight>

Additional '''arithmetic''' operators have been implemented for '''a cVector with a float''':
<syntaxhighlight lang="cpp"> +  -  *  /  +=  -=  *=  /= </syntaxhighlight>

Using <code>*</code> or <code>/</code> to multiply or divide a vector by a scalar value (float or double) will scale the vector, component-wise.
<br>Using <code>*</code> to multiply a scalar value by a vector (ie. reversing the order) provides the same componenet-wise result. E.g.:
<syntaxhighlight>[1.0, 2.0, 3.0] * 1.5 = [1.5, 3.0, 4.5]
1.5 * [1.0, 2.0, 3.0] = [1.5, 3.0, 4.5]</syntaxhighlight>
But of course, reversing the order with <code>/</code> will return a different result. E.g.:
<syntaxhighlight>[1.0, 2.0, 3.0] / 2.0 = [0.5, 1.0, 1.5]
2.0 / [1.0, 2.0, 3.0] = [2.0, 1.0, 0.666666]</syntaxhighlight>
As of version 1.1, using <code>*</code> to multiply two vectors together will return the two vectors multiplied component-wise. E.g.:
<syntaxhighlight>[2.0, 2.0, 2.0] * [2.0, 0.0, 0.25] = [4.0, 0.0, 0.5]</syntaxhighlight>
<br>As of version 1.1, using <code>/</code> to divide two vectors will return the first vectors divided by the second vector, component-wise, using safe divide. E.g:
<syntaxhighlight>[2.0, 2.0, 2.0] / [2.0, 0.0, 0.25] = [1.0, 0.0, 8.0]</syntaxhighlight>
<br>(Prior to version 1.1, * would return the dot product and / was not implemented. In version 1.1, the dot product can be calculated with the DotProduct() method instead.)


The '''equality''' operator <code> == </code> checks for an exact match between two cVectors. '''Comparison''' operators <code> > >= < <= </code> compare the '''square length''' of the vectors.


The '''index''' operator <code> myVector[i] </code> allows read-only access to the vector's components by index.


The '''assignment''' operator <code> = </code> assigns a new value by duplicating the components. This may also '''resize''' the dimension of the vector.


==Methods==


===Setting values===
cVector provides the following methods for assigning values to the vector components: (See also: X,Y,Z,W properties)


====SetIndex()====
<syntaxhighlight lang="cpp">
bool SetIndex(uint aulIndex, float afValue)
</syntaxhighlight>
Assigns a new value to a component by index. E.g., the X component is at index 0, Y is index 1, etc.. Returns false if index is outside of the dimension of the vector, or true if it was successfully set.
#''uint aulIndex'' - The index to set with a new value.
#''float afValue'' - The value to set at the index.
<syntaxhighlight lang="cpp">
// Example:
vMyVector.SetIndex(1, 3.0f);
vMyVector.Y = 3.0f;
// These two techniques have the same outcome.
</syntaxhighlight>


====SetDir2d()====
<syntaxhighlight lang="cpp">
bool SetDir2d(enumOrthoDir aDirection)
</syntaxhighlight>
Given an enumOrthoDir option, this converts the existing cVector into a 2d vector pointing in that direction.

Uses typical screen coordinate directions, where up is -y, right is +x. If forward is given then that is considered to be right (+x).
#''enumOrthoDir aDirection'' - Can be dirForward, dirBackward, dirLeft, dirRight, dirUp or dirDown
<syntaxhighlight lang="cpp">
// Example:
vMyVector.SetDir2d(dirLeft);
// vMyVector becomes -1,0
</syntaxhighlight>


====SetDir3d====
<syntaxhighlight lang="cpp">
bool SetDir3d(enumOrthoDir aDirection)
</syntaxhighlight>
Given an enumOrthoDir option, this converts the existing cVector into a 3d vector pointing in that direction. 

Uses HPL2's "right-handed, x=left" coordinate system, so the forward direction is considered to be 0,0,1. Right is -1,0,0 and up is 0,1,0.
#''enumOrthoDir aDirection'' - Can be dirForward, dirBackward, dirLeft, dirRight, dirUp or dirDown
<syntaxhighlight lang="cpp">
// Example:
vMyVector.SetDir3d(dirLeft);
// vMyVector becomes 1,0,0
</syntaxhighlight>


===Getting values===
cVector provides the following method for retrieving values from the vector components: (See also: X,Y,Z,W properties)


====GetIndex()====
<syntaxhighlight lang="cpp">
float GetIndex(uint aulIndex)
</syntaxhighlight>
Retrieves a component by index. E.g., the X component is at index 0, Y is index 1, etc.
#''uint aulIndex'' - The index whose value to get.
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyVector.GetIndex(2);
fMyFloat = vMyVector.Z;
// These two techniques have the same outcome.
</syntaxhighlight>


===Length===
cVector provides the following methods for working with vector length:


====Length()====
<syntaxhighlight lang="cpp">
float Length()
</syntaxhighlight>
Returns the euclidean length of the vector as a float. (See also: Math.Length())
<syntaxhighlight lang="cpp">
// Example:
cVector vMyRectangle = cVector(10.0f, 15.0f);
float fMyHypotenuse = vMyRectangle.Length();
// fMyHypotenuse becomes the length of the diagonal line across a rectangle 10m by 15m.
</syntaxhighlight>


====LengthSqr()====
<syntaxhighlight lang="cpp">
float LengthSqr()
</syntaxhighlight>
Returns the squared length of the vector, which can be more efficient than calculating the actual length in some use cases, e.g. when you only need to compare two lengths without knowing the exact values. (See also: Math.Length())
<syntaxhighlight lang="cpp">
// Example:
bool bIsVecALonger = vVecA.LengthSqr() > vVecB.LengthSqr();
// bIsVecALonger becomes true if vVecA is longer than vVecB, without calculating the final lengths.
</syntaxhighlight>


====Normal()====
<syntaxhighlight lang="cpp">
cVector Normal()
</syntaxhighlight>
Calculates the normal of this vector and returns it as a copy. This vector is not changed. The normal vector points in the same direction, but has a length of one.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = vDirection.Normal() * fSpeed;
// If vDirection is a vector of unknown length pointing in some direction, this would set vVelocity to be a vector pointing in the same direction, but with a length of exactly fSpeed.
</syntaxhighlight>


====Normalize()====
<syntaxhighlight lang="cpp">
void Normalize()
</syntaxhighlight>
Normalizes a vector in place. This vector becomes the normal vector, and the original values are forgotten. The normal vector points in the same direction, but has a length of one.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = vDirection;
vVelocity.Normalize(); // Length of vVelocity has now become 1.
vVelocity *= 3.0f;
// This example has the same result as the previous one, for Normal().
</syntaxhighlight>


===Vector products===


====DotProduct()====
<syntaxhighlight lang="cpp">
float DotProduct(cVector avB)
</syntaxhighlight>
Calculates the dot product of this and the given vector avB, and returns it as a float.
#''cVector avB'' - The other vector.


====CrossProduct()====
<syntaxhighlight lang="cpp">
cVector CrossProduct(cVector avB)
</syntaxhighlight>
Caulculates the cross product of this and the given vector avB, and returns it as a new vector.
#''cVector avB'' - The other vector.


===Strings from cVector===
cVector provides the following methods for converting vectors to strings:


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns the components of the vector as a string.
<br>If the dimension is 2, the format "(x=_, y=_)" is used.
<br>If the dimension is 3, the format "(x=_, y=_, z=_)" is used.
<br>If the dimension is 0, the string "empty cVector" is returned.
<br>For any other dimension, ToStringAsIndices() is called instead.
<br>


====ToStringAsIndices()====
<syntaxhighlight lang="cpp">
string ToStringAsIndices()
</syntaxhighlight>
Returns the components of the vector as a string, in the format "([0]=_, [1]=_, [2]=_ ...)".
<br>


===Advanced===
The following methods exist for advanced users and should be used with caution:
<syntaxhighlight lang="cpp">
bool Resize(uint aulNewDim)		// Changes the dimension of the vector.
bool Append(float afValue)		// Increases the dimension of this cVector by one, and adds the given float as a new component.
bool Append(cVector avValues)	// Increases the dimension of this cVector to accomodate the given cVector, and appends its components.
const float[]@ ReadArray()		// Returns a handle to the cVector's component array data.
</syntaxhighlight>


=cPoint=
The cPoint class defines a vector type that contains a series of int values, typically used to represent a location or movement on a grid, or pixels.


==Behaviours==
cPoints are declared similarly to a data type variable:
<syntaxhighlight lang="cpp">
cPoint myPoint;
</syntaxhighlight>

The default constructor makes an empty 3d vector:
<syntaxhighlight lang="cpp">
cPoint myPoint;						// Makes a 3d vector
cPoint myPoint = cPoint();			// Makes a 3d vector
</syntaxhighlight>
	
You can make an empty vector with a specific dimension (the number of components) by passing an integer to the constructor:
<syntaxhighlight lang="cpp">
	cPoint myPoint = cPoint(3);		// Makes a 3d vector

	cPoint myPoint = cPoint(2);		// Makes a 2d vector
	cPoint myPoint = cPoint(4);		// Makes a 4d vector
</syntaxhighlight>

A vector can be initialised with any number dimension up to ulVectorDimMax (default 16).


==Properties==
cPoint provides the following public properties:


====X====
<syntaxhighlight lang="cpp">
int X
</syntaxhighlight>
The integer property X provides access to the first component in the cPoint (provided it has at least one component).
<syntaxhighlight lang="cpp">
// Example:
fMyInt = vMyPoint.X;
vMyPoint.X = 1;
</syntaxhighlight>


====Y====
<syntaxhighlight lang="cpp">
int Y
</syntaxhighlight>
The integer property Y provides access to the second component in the cPoint (provided it has at least two components).
<syntaxhighlight lang="cpp">
// Example:
fMyInt = vMyPoint.Y;
vMyPoint.Y = 1;
</syntaxhighlight>


====Z====
<syntaxhighlight lang="cpp">
int Z
</syntaxhighlight>
The integer property Z provides access to the third component in the cPoint (provided it has at least three components).
<syntaxhighlight lang="cpp">
// Example:
fMyInt = vMyPoint.Z;
vMyPoint.Z = 1;
</syntaxhighlight>


====W====
<syntaxhighlight lang="cpp">
int W
</syntaxhighlight>
The integer property W provides access to the fourth component in the cPoint (provided it has at least four components).
<syntaxhighlight lang="cpp">
// Example:
fMyInt = vMyPoint.W;
vMyPoint.W = 1;
</syntaxhighlight>


====Dimension====
<syntaxhighlight lang="cpp">
uint Dimension
</syntaxhighlight>
The read-only integer property Dimension returns the number of components in the cPoint. The dimension of the cPoint can be set by the constructor or, see also: Resize().
<syntaxhighlight lang="cpp">
// Example:
if (vMyPoint.Dimension >=3) vMyPoint.Z = 0;
// The condition succeeds if the cPoint has at least three components, and then the value of the 3rd component is assigned 0.
</syntaxhighlight>


====LastIndex====
<syntaxhighlight lang="cpp">
uint LastIndex
</syntaxhighlight>
The read-only integer property LastIndex returns the index of the last component in the cPoint. This is the same as Dimension - 1.
<syntaxhighlight lang="cpp">
// Example:
int fMyInt = vMyPoint[vMyPoint.LastIndex];
// The int fMyInt is assigned whatever value is found in the final component of the cPoint.
</syntaxhighlight>


==Operators==


Note: the results of division operations with ints maybe truncated. That is, in integer calculations, 1 / 2 = 0.

'''Arithmetic''' operators have been implemented for '''a cPoint with another cPoint''':
<syntaxhighlight lang="cpp"> +  -  *  /  +=  -=  *=  /= </syntaxhighlight>

Additional '''arithmetic''' operators have been implemented for '''a cPoint with an int''':
<syntaxhighlight lang="cpp"> +  -  *  /  +=  -=  *=  /= </syntaxhighlight>

The '''multiplication''' operator <code>*</code> used with a cPoint and an int, or a pair of cPoint, will scale the point component-wise.


The '''equality''' operator <code> == </code> checks for an exact match between two cPoints. '''Comparison''' operators <code> > >= < <= </code> compare the '''square length''' of the vectors.


The '''index''' operator <code> myVector[i] </code> allows read-only access to the vector's components by index.


The '''assignment''' operator <code> = </code> assigns a new value by duplicating the components. This may also '''resize''' the dimension of the vector.


==Methods==


===Setting values===
cPoint provides the following methods for assigning values to the vector components: (See also: X,Y,Z,W properties)


====SetIndex()====
<syntaxhighlight lang="cpp">
bool SetIndex(uint aulIndex, int alValue)
</syntaxhighlight>
Assigns a new value to a component by index. E.g., the X component is at index 0, Y is index 1, etc.. Returns false if index is outside of the dimension of the vector, or true if it was successfully set.
#''uint aulIndex'' - The index to set with a new value.
#''int alValue'' - The value to set at the index.
<syntaxhighlight lang="cpp">
// Example:
vMyPoint.SetIndex(1, 3);
vMyPoint.Y = 3;
// These two techniques have the same outcome.
</syntaxhighlight>


====SetDir2d()====
<syntaxhighlight lang="cpp">
bool SetDir2d(enumOrthoDir aDirection)
</syntaxhighlight>
Given an enumOrthoDir option, this converts the existing cPoint into a 2d vector pointing in that direction.

Uses typical screen coordinate directions, where up is -y, right is +x. If forward is given then that is considered to be right (+x).
#''enumOrthoDir aDirection'' - Can be dirForward, dirBackward, dirLeft, dirRight, dirUp or dirDown
<syntaxhighlight lang="cpp">
// Example:
vMyPoint.SetDir2d(dirLeft);
// vMyPoint becomes -1,0
</syntaxhighlight>


====SetDir3d====
<syntaxhighlight lang="cpp">
bool SetDir3d(enumOrthoDir aDirection)
</syntaxhighlight>
Given an enumOrthoDir option, this converts the existing cPoint into a 3d vector pointing in that direction. 

Uses HPL2's "right-handed, x=left" coordinate system, so the forward direction is considered to be 0,0,1. Right is -1,0,0 and up is 0,1,0.
#''enumOrthoDir aDirection'' - Can be dirForward, dirBackward, dirLeft, dirRight, dirUp or dirDown
<syntaxhighlight lang="cpp">
// Example:
vMyPoint.SetDir3d(dirLeft);
// vMyPoint becomes 1,0,0
</syntaxhighlight>


===Getting values===
cPoint provides the following method for retrieving values from the vector components: (See also: X,Y,Z,W properties)


====GetIndex()====
<syntaxhighlight lang="cpp">
int GetIndex(uint aulIndex)
</syntaxhighlight>
Retrieves a component by index. E.g., the X component is at index 0, Y is index 1, etc.
#''uint aulIndex'' - The index whose value to get.
<syntaxhighlight lang="cpp">
// Example:
fMyInt = vMyPoint.GetIndex(2);
fMyInt = vMyPoint.Z;
// These two techniques have the same outcome.
</syntaxhighlight>


===Length===
cPoint provides the following methods for working with vector length:


====Length()====
<syntaxhighlight lang="cpp">
int Length()
</syntaxhighlight>
Returns the euclidean length of the vector as a truncated int. (See also: Math.Length())
<syntaxhighlight lang="cpp">
// Example:
cPoint vMyRectangle = cPoint(10, 15);
int lMyHypotenuse = vMyRectangle.Length();
// lMyHypotenuse becomes the length of the diagonal line across a rectangle 10m by 15m.
</syntaxhighlight>


====LengthSqr()====
<syntaxhighlight lang="cpp">
int LengthSqr()
</syntaxhighlight>
Returns the squared length of the vector, which can be more efficient than calculating the actual length in some use cases, e.g. when you only need to compare two lengths without knowing the exact values. (See also: Math.Length())
<syntaxhighlight lang="cpp">
// Example:
bool bIsVecALonger = vVecA.LengthSqr() > vVecB.LengthSqr();
// bIsVecALonger becomes true if vVecA is longer than vVecB, without calculating the final lengths.
</syntaxhighlight>


====Normal()====
<syntaxhighlight lang="cpp">
cPoint Normal()
</syntaxhighlight>
Calculates the truncated integer normal of this vector and returns it as a copy. This vector is not changed. The normal vector points in the same direction, but has a length of approximately one, while the components remain whole numbers.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = vDirection.Normal();
// If vDirection is a vector of unknown length pointing in some direction, this would set vVelocity to be a vector pointing in the same direction, but with a length of approximately one.
</syntaxhighlight>


====Normalize()====
<syntaxhighlight lang="cpp">
void Normalize()
</syntaxhighlight>
Normalizes a vector in place. This vector becomes the normal vector, and the original values are forgotten. The normal vector points in the same direction, but has a length of approximately one.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = vDirection;
vVelocity.Normalize(); // Length of vVelocity has now become approximately one.
vVelocity *= 3.0f;
// This example has the same result as the previous one, for Normal().
</syntaxhighlight>


===Strings from cPoint===
cPoint provides the following methods for converting vectors to strings:


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns the components of the vector as a string.
<br>If the dimension is 2, the format "(x=_, y=_)" is used.
<br>If the dimension is 3, the format "(x=_, y=_, z=_)" is used.
<br>If the dimension is 0, the string "empty cPoint" is returned.
<br>For any other dimension, ToStringAsIndices() is called instead.
<br>


====ToStringAsIndices()====
<syntaxhighlight lang="cpp">
string ToStringAsIndices()
</syntaxhighlight>
Returns the components of the vector as a string, in the format "([0]=_, [1]=_, [2]=_ ...)".
<br>


===Advanced===
The following methods exist for advanced users and should be used with caution:
<syntaxhighlight lang="cpp">
bool Resize(uint aulNewDim)		// Changes the dimension of the vector.
bool Append(float afValue)		// Increases the dimension of this cPoint by one, and adds the given float as a new component.
bool Append(cPoint avValues)	// Increases the dimension of this cPoint to accomodate the given cPoint, and appends its components.
const int[]@ ReadArray()		// Returns a handle to the cPoint's component data array.
</syntaxhighlight>


=cRotator=
The cRotator class defines a type that contains a series of float values, intended to represent an angular orientation, or a rotation. cRotator inherits from cVector, but also defines some properties and methods specific to working with rotation.


==Behaviours==
There are two ways to assign the pitch, yaw and roll values in the constructor.


1. The angle values can be set directly in the constructor using degrees or radians. An optional enumAngleUnits is used to specify whether using degrees. The default is radians.
<syntaxhighlight lang="cpp">
// Initialising angles in degrees:
cRotator(pitchDegrees, yawDegrees, rollDegrees, angleDegrees)

// Initialise the angles in radians
cRotator(pitchRadians, yawRadians, rollRadians)
cRotator(pitchRadians, yawRadians, rollRadians, angleRadians)

// These two rotators are equivalent:
cRotator myDegrees = cRotator(90.0f, 180.0f, 45.0f, true);
cRotator myRadians = cRotator(Math.Pi, Math.Tau, Math.Pi / 2.0f);
</syntaxhighlight>


2. The angle values can be set in the constructor using an enumOrthoDir option. enumOrthoDir can be dirForward, dirBackward, dirLeft, dirRight, dirUp, or dirDown.
<syntaxhighlight lang="cpp">
cRotator yawRight = cRotator(dirRight);
cRotator pitchDown = cRotator(dirDown);
</syntaxhighlight>


==Properties==
The angle values can be set with the Pitch, Yaw and Roll properties:
<syntaxhighlight lang="cpp">
myRotator.Pitch = Math.Pi / 2.0f;
</syntaxhighlight>

The pitch, yaw and roll properties are treated as radians by default. To specify degrees or radians explicitly, the pitchDeg, yawDeg, rollDeg, and pitchRad, yawRad, rollRad properties can be used, e.g.:
<syntaxhighlight lang="cpp">
myRotator.YawDeg = 180;
myRotator.RollRad = Math.Pi * 3.0f;
</syntaxhighlight>

Internally the cRotator class stores angle values as radians between negative and positive Pi. (Equivalent to -180 degrees to 180 degrees.) Angles outside of this range are wrapped around. E.g.:
<syntaxhighlight lang="cpp">
cRotator rotation = cRotator(0.0f, 90.0f, 0.0f, true);
rotation += cRotator(0.0f, 120.0f, 0.0f, true);
// rotation is now (degrees) 0.0f, -150.0f, 0.0f
</syntaxhighlight>

In this example, "rotation" is initialised with 90d yaw, and then rotated a further 
120d clockwise. Rather than 210d clockwise, the resulting yaw is 150 anti-clockwise (-150);


====Pitch====
<syntaxhighlight lang="cpp">
float Pitch
float PitchRad
float PitchDeg
</syntaxhighlight>
The float properties Pitch and PitchRad provide access to the pitch component in radians. PitchDeg provides access to the pitch component in degrees.
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyRotator.Pitch;
vMyRotator.PitchDeg = 90.0f;
</syntaxhighlight>


====Yaw====
<syntaxhighlight lang="cpp">
float Yaw
float YawRad
float YawDeg
</syntaxhighlight>
The float properties Yaw and YawRad provide access to the pitch component in radians. YawDeg provides access to the pitch component in degrees.
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyRotator.Yaw;
vMyRotator.YawDeg = 90.0f;
</syntaxhighlight>


====Roll====
<syntaxhighlight lang="cpp">
float Roll
float RollRad
float RollDeg
</syntaxhighlight>
The float properties Roll and RollRad provide access to the pitch component in radians. RollDeg provides access to the pitch component in degrees.
<syntaxhighlight lang="cpp">
// Example:
fMyFloat = vMyRotator.Roll;
vMyRotator.RollDeg = 90.0f;
</syntaxhighlight>


==Methods==
In addition to methods inherited from cVector, cRotator provides the following methods:


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
string ToStringRad()
</syntaxhighlight>
Returns the components of the vector as radians in a string with the format "(p=_, y=_, r=_)(rad)".
<br>


====ToStringDeg()====
<syntaxhighlight lang="cpp">
string ToStringDeg()
</syntaxhighlight>
Returns the components of the vector as degrees in a string with the format "(p=_, y=_, r=_)(deg)".
<br>


=cBezier=

The cBezier class defines a curved line in space, with a couple of basic functions. Technically it is a cubic bezier defined by 4 points: a start, an end, and two control points for influencing the curve. It can also roughly approximate a quadratic bezier if constructed with only one control point.


==Behaviours==
cBezier has four constructors:

<syntaxhighlight lang="cpp">
cBezier(cVector avStart, cVector avCtrl1, cVector avCtrl2, cVector avEnd)	// Creates a cubic bezier with two control points.
cBezier(cVector avStart, cVector avCtrl, cVector avEnd)						// Creates bezier approximating a quadratic bezier.
cBezier(cVector avStart, cVector avEnd)										// Creates a bezier that behaves like a straight line.
cBezier()																	// Creates a bezier that starts and ends at 0,0,0, with zero length.
</syntaxhighlight>

==Properties:==
To access the internal vector positions in the bezier, you can use the properties: Start, End, CtrlStart and CtrlEnd.
<syntaxhighlight lang="cpp">
cBezier manualBezier;
cVector someLocation = cVector(10.0f, 11.0f, 12.0f);
manualBezier.Start = someLocation;
manualBezier.End = someLocation * 1.5f;
</syntaxhighlight>


====Start====
<syntaxhighlight lang="cpp">
cVector Start
</syntaxhighlight>
The cVector property Start can be used to get or set the start point of the curve with a 3d cVector.


====End====
<syntaxhighlight lang="cpp">
cVector End
</syntaxhighlight>
The cVector property End can be used to get or set the end point of the curve with a 3d cVector.


====CtrlStart====
<syntaxhighlight lang="cpp">
cVector CtrlStart
</syntaxhighlight>
The cVector property CtrlStart can be used to get or set the first control point of the curve with a 3d cVector.


====CtrlEnd====
<syntaxhighlight lang="cpp">
cVector CtrlEnd
</syntaxhighlight>
The cVector property CtrlEnd can be used to get or set the second control point of the curve with a 3d cVector.


==Methods==
cBezier provides the following methods:


====GetPoint()====
<syntaxhighlight lang="cpp">
cVector GetPoint(float afT)
</syntaxhighlight>
Given a point on the curve from 0.0f to 1.0f, this returns the position at that point. The float value is known as the "time" on the curve. The velocity is not constant: the control points can cause acceleration in how the movement is calculated.
#''float afT'' - The time on the curve (0.0 - 1.0) to get the position of.
<syntaxhighlight lang="cpp">
float vProgressOnCurve = 0.33f;
cVector vLocationOnCurve = vMyBezier.GetPoint(vProgressOnCurve);
// vLocationOnCurve becomes the position in space that is 33% of the journey along the curve.
</syntaxhighlight>


====GetTangent()====
<syntaxhighlight lang="cpp">
cVector GetTangent(float afT)
</syntaxhighlight>
Given a point on the curve from 0.0f to 1.0f, this returns a normal vector that approximates the forward direction of the curve at that position. The float value is known as the "time" on the curve. The velocity is not constant: the control points can cause acceleration in how the movement is calculated.
#''float afT'' -  The time on the curve (0.0 - 1.0) to get the tangent of.
<syntaxhighlight lang="cpp">
float vProgressOnCurve = 0.66f;
cVector vDirectionOnCurve = vMyBezier.GetTangent(vProgressOnCurve);
// vDirectionOnCurve becomes the forward direction of the curve at the point of 66% through the journey along it.
</syntaxhighlight>


====GetApproxLength()====
<syntaxhighlight lang="cpp">
float GetApproxLength(enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Estimates the approximate length of the curve.
#''enumLengthType aSquaredOption'' - Can be lengthFinal or lengthSquared. (Optional, default = lengthFinal)


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns the components of the bezier as a string, including the x,y,z components of all four vector positions.


=cSpline=


The cSpline class defines an array of Beziers that can be treated like a continuous path made of multiple curved segments. Internally cSpline is a cBezier array of a fixed maximum size (default = 16). The cSpline can be initialised using existing beziers, or with a single curve defined by args in the constructor.

For further control over how the curve is built, the cSpline can be declare as empty with segments added afterwards. Segments can be added to the spline either as whole cBezier segments using AddSegment(), or by adding one cVector point at a time using AddPoint().

With the AddPoint() method, the spline is defined by providing the positions it should move through as individual points in space. Specific tangents can be provided (forward direction and scale) for each point, but are optional. When the final point is added, abLast should be specified as true to finish the spline and apply automatic tangents where needed. The automatic tangents make sure that path through each point is smooth, unless specific tangents were specified through AddPoint().

Alternatively, with the AddSegment() method, the spline can be defined by providing each segment as a Bezier. The end of the previous segment will be updated to match the new one. (This is not quite the same as passing an array of Beziers to the constructor, as in that case the constructor will not attempt to match the end points, and they will not be smooth or even continuous unless defined that way by the script.)

The spline does not have constant velocity. That is to say, each segment has an equal share of the "time", regardless of the size of the segment, and within each segment the control points can cause acceleration. Easing can be effected by varying the size of the segments.


==Behaviours==
cSpline has seven constructors in total, with various options for initialising a curve.


===Constructing empty splines===
If the cSpline should start empty, ready for AddSegment() or AddPoint(), one of the following constructors should be used:
<syntaxhighlight lang="cpp">
cSpline()							// Creates an empty spline with a maximum size of 16 bezier segments.
cSpline(uint aulSegments)			// Creates an empty spline with capacity for the number of bezier segments specified by aulSegments.
</syntaxhighlight>


===Constructing with cBezier===
If the cSpline should be populated with one or more existing bezier curves, one of the following constructors should be used:
<syntaxhighlight lang="cpp">
cSpline(cBezier aSegmentsArray)		// Takes an existing cBezier array and uses that to populate the new spline.
cSpline(cBezier@ ahBezier)			// Uses a reference to an existing cBezier to populate the new spline with a single segment.
</syntaxhighlight>


===Constructing with cVector===
Finally, if the cSpline should be populated a curve or line defined by cVector arguments, one of these constructors will help:
<syntaxhighlight lang="cpp">
cSpline(cVector avStart, cVector avCtrlStart, cVector avCtrlEnd, cVector avEnd)
// Takes four vector positions and builds a cubic bezier to populate the new spline with a single segment.

cSpline(cVector avStart, cVector avCtrl, cVector avEnd)
// Takes three vector positions and builds a approximation of a quadratic bezier to populate the new spline with a single segment.

cSpline(cVector avStart, cVector avEnd)
// Takes two vector positions and populate the new spline with a single segment in the form of a straight line between two points.
</syntaxhighlight>


==Methods==
cBezier provides the following methods:


====AddSegment()====
<syntaxhighlight lang="cpp">
bool AddSegment(cBezier ahSegment, bool abSnap = true)
</syntaxhighlight>
Appends a bezier onto the spline as new segment. Returns false if the spline is already full, or true if it was successfully added.
<br>abSnap is optional. If omitted, it defaults to true. If abSnap is true then the end point and exit tangent of the previous segment will be adjusted to connect to the start point and entrance tangent of the new one.
#''cBezier ahSegment'' - A bezier to be appended to the spline.
#''bool abSnap'' - Whether to adjust the previous segment to connect to the new one. (Optional, default = true)


====GetSegmentHandle()====
<syntaxhighlight lang="cpp">
cBezier@ GetSegmentHandle(uint aulIndex)
</syntaxhighlight>
Looks up the spline segment at the give index and returns a handle to its cBezier.
#''uint aulIndex'' - The index of the segment to be returned.


====UpdateSegment()====
<syntaxhighlight lang="cpp">
bool UpdateSegment(uint aulIndex, cBezier ahSegment, bool abSnap = true)
</syntaxhighlight>
Updates an existing segment by index, replacing it with a new bezier. Returns false if the segment does not already exist, or true if it was successfully updated.
<br>abSnap is optional. If omitted, it defaults to true. If abSnap is true then the end point and exit tangent of the previous segment, and the start point and entrance tangent of the next segment will be adjusted to connect to the updated segment.
#''uint aulIndex'' - The index of the segment to be replaced.
#''cBezier ahSegment'' - A bezier to be replace the bezier at the given index. to the spline.
#''bool abSnap'' - Whether to adjust the previous and next segments to connect to the updated one. (Optional, default = true)


====AddPoint()====
<syntaxhighlight lang="cpp">
bool AddPoint(bool abLast = false, cVector avNextPosition, cVector avNextTangent)
bool AddPoint(bool abLast = false, cVector avNextPosition)
</syntaxhighlight>
Appends a position to the end of the spline. Returns false if the spline is already full, or true if it was successfully added.
<br>avNextTangent is optional and can be omitted. It specifies the tangent as the velocity (direction and scale) of the spline at the new point. If omitted, no tangent is used at this time, but once you have finished adding points, abLast = true should be used and automatic tangents will be applied at that time.
<br>The automatic tangents are only applied to points where no tangent was given, and only once the spine is marked as "finished" by using abLast = true;
#''bool abLast'' - Whether this is the last point to be added. (Optional, default = false)
#''cVector avNextPosition'' - A position in space to add to the spline.
#''cVector avNextTangent'' - The forward velocity of the spline as it passes through the new position. (Optional, default = auto)


====GetPoint()====
<syntaxhighlight lang="cpp">
cVector GetPoint(float afT)
</syntaxhighlight>
Given a point on the entire spline from 0.0f to 1.0f, this returns the position at that point. The float value is known as the "time" on the curve. The velocity is not constant: the control points can cause acceleration in how the movement is calculated.
#''float afT'' - The time on the curve (0.0 - 1.0) to get the position of.
<syntaxhighlight lang="cpp">
float vProgressOnCurve = 0.33f;
cVector vLocationOnCurve = vMySpline.GetPoint(vProgressOnCurve);
// vLocationOnCurve becomes the position in space that is 33% of the journey along the spline.
</syntaxhighlight>


====GetTangent()====
<syntaxhighlight lang="cpp">
cVector GetTangent(float afT)
</syntaxhighlight>
Given a point on the entire spline from 0.0f to 1.0f, this returns a normal vector that approximates the forward direction of the curve at that position. The float value is known as the "time" on the curve. The velocity is not constant: the control points can cause acceleration in how the movement is calculated.
#''float afT'' -  The time on the curve (0.0 - 1.0) to get the tangent of.
<syntaxhighlight lang="cpp">
float vProgressOnCurve = 0.66f;
cVector vDirectionOnCurve = vMySpline.GetTangent(vProgressOnCurve);
// vDirectionOnCurve becomes the forward direction of the spline at the point of 66% through the journey along it.
</syntaxhighlight>


====GetApproxLength()====
<syntaxhighlight lang="cpp">
float GetApproxLength(enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Estimates the approximate length of the entire spline.
#''enumLengthType aSquaredOption'' - Can be lengthFinal or lengthSquared. (Optional, default = lengthFinal)


====GetMinLength()====
<syntaxhighlight lang="cpp">
float GetMinLength(enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Returns the minimum length of that the entire spline could be, if each segment was a straight line.
#''enumLengthType aSquaredOption'' - Can be lengthFinal or lengthSquared. (Optional, default = lengthFinal)


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns a string describing the spline, including the x,y,z components of its start and end points, and the number of segments.


__FORCETOC__