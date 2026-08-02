{{TocRight}}
This page documents "HelperScripts_Math.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=

The script file "HelperScripts_Math.hps" provides some extended maths functionality for modders. The new Math class contains additional functions for a variety of purposes including interpolation, vectors, and more.


=Math=


==Behaviours==
"HelperScripts_Math.hps" script declares an object called '''Math''', of the new script class cDebug. To access its properties and methods, just use "Math." followed by the function call or property. E.g.:
<syntaxhighlight lang="cpp">
Math.Lerp(a, b, 0.75f);
x = Math.Pi;
</syntaxhighlight>


==Properties==
Math provides the following properties:


====Pi====
<syntaxhighlight lang="cpp">
float Pi
</syntaxhighlight>
The read-only property Pi returns Pi as a float.
<syntaxhighlight lang="cpp">
// Examples:
float fRightAngleRadians = Math.Pi / 2.0f;
float fOneEightyDegrees = Math.RadiansToDegrees(Math.Pi);
</syntaxhighlight>


====Tau====
<syntaxhighlight lang="cpp">
float Tau
</syntaxhighlight>
The read-only proerpty Tau returns Tau as a float. (Tau = 2*Pi)
<syntaxhighlight lang="cpp">
// Examples:
float fRightAngleRadians = Math.Tau / 4.0f;
float fThreeSixtyDegrees = Math.RadiansToDegrees(Math.Tau);
</syntaxhighlight>


==Methods==


===Arithmetic===
Math provides the following miscellaneous methods for working with numbers:


====Pow====
<syntaxhighlight lang="cpp">
float Pow(float afBase, float afExp)
int Pow(int alBase, uint aulExp)
uint Pow(uint aulBase, uint aulExp)
</syntaxhighlight>
Returns the base raised to the power the of exponent. This is the same as the normal global function MathPow(), except that it can also take an int or a uint.
<syntaxhighlight lang="cpp">
// Examples:
uint ulA = Math.Pow(9, 2);
float fB = Math.Pow(3.0f, 3.0f);
float fC = Math.Pow(3.0f, 1.0f/3.0f);
// ulA will become 81.
// fB will become 27. fC will become ~1.44225.
</syntaxhighlight>


====Sqrt====
<syntaxhighlight lang="cpp">
float Sqrt(float afX)
int Sqrt(int alX)
uint Sqrt(uint aulX)
</syntaxhighlight>
Returns the square root of the given number. This is the same as the normal global function MathSqrt(), except that it can also take an int or a uint, in which case the answer will be truncated.
<syntaxhighlight lang="cpp">
// Examples:
float fA = Math.Sqrt(2.0f);
int lB = Math.Sqrt(2);
// fA will become ~1.41421.
// lB will become 1.
</syntaxhighlight>


====NearlyEqual()====
<syntaxhighlight lang="cpp">
bool NearlyEqual(float afA, float afB, float afT = 0.00001f)
bool NearlyEqual(double adA, double adB, double adT = 0.00001)
bool NearlyEqual(cVector avA, cVector avB, float afT = 0.00001f)
</syntaxhighlight>
Returns true if A and B are equal within a tolerance of T. If omitted, afT defaults to 0.00001.
<br>Accepts either float, double, or cVector. For vectors, avA and avB must have the same number of dimensions, and each pair of dimensions must be nearly equal,
#''float afA, double adA, or cVector avA'' - The first value to compare.
#''float afB, double adB, or cVector avB'' - The second value to compare.
#''float afT, double afT'' - A tolerance with which to compare the values. '''(Optional, default = 0.00001)'''
<syntaxhighlight lang="cpp">
// Example:
if(Math.NearlyEqual(afScore, fTarget, 0.1f))
// The condition succeeds if the score is near to the target by 0.1.
</syntaxhighlight>


====SafeDivide()====
<syntaxhighlight lang="cpp">
float SafeDivide(float afA, float afB)
double SafeDivide(double adA, double adB)
int SafeDivide(int alA, int alB)
uint SafeDivide(uint aulA, uint aulB)
cVector SafeDivide(cVector avA, float afB)
cPoint SafeDivide(cPoint avA, float alB)
</syntaxhighlight>
Avoids divide by zero by checking for zeros first. If either value is zero, it just returns zero.
<br>Accepts a pair of numbers of the same type, or a vector and an appropriate number type.
#''float afA, double adA, int alA, uint aulA, cVector avA, or cPoint avA'' - The value to be divided.
#''float afB, double adB, int alB, or uint aulB'' - The value to be divided by.
<syntaxhighlight lang="cpp">
// Example:
int risky = 10 / Math.RandomInt(0, 3); // 1 in 3 chance of "divide by zero" error.
int safe = Math.SafeDivide(10, Math.RandomInt(0, 3)); // zero chance of "divide by zero" error.
</syntaxhighlight>


====DegreesToRadians()====
<syntaxhighlight lang="cpp">
float DegreesToRadians(float afD)
double DegreesToRadians(double adD)
</syntaxhighlight>
Converts degrees to radians and returns the result. (360 degrees is equal to 2*Pi radians.)
#''float afD, double adD'' - An angle in degrees, to be converted to radians.
<syntaxhighlight lang="cpp">
// Example:
if (Math.DegreesToRadians(fDeg) == Math.Pi / 2.0f) DoStuff();
// The condition will succeed if fDeg is 90.
</syntaxhighlight>


====RadiansToDegrees()====
<syntaxhighlight lang="cpp">
float RadiansToDegrees(float afD)
double RadiansToDegrees(double adD)
</syntaxhighlight>
Converts radians to degrees and returns the result. (360 degrees is equal to 2*Pi radians.)
#''float afD, double adD'' - An angle in radians, to be converted to degrees.
<syntaxhighlight lang="cpp">
// Example:
if (Math.DegreesToRadians(Math.Tau * fX) == 90) DoStuff();
// The condition will succeed if fX is 0.25f.
</syntaxhighlight>


====IsEven()====
<syntaxhighlight lang="cpp">
bool IsEven(int alX)
</syntaxhighlight>
Returns true if the given integer is an even number, or false if it is odd.
#''int alX'' - An int to check if even.
<syntaxhighlight lang="cpp">
// Example 1:
for (uint i = 0; i < 10; i++)
{
	if (Math.IsEven(i)) DoStuff();
	else DoOtherStuff();
}
// A different function is called depending on whether the loop counter is odd or even.

// Example 2:
int x = Math.RandomInt();
bool bEvenA = Math.IsEven(x);
bool bEvenB = x % 2 == 0;
// bEvenA and bEvenB are equal.
</syntaxhighlight>


====Sign()====
<syntaxhighlight lang="cpp">
int Sign(int alX)
uint Sign(float aulX)
float Sign(uint afX)
double Sign(double adX)
</syntaxhighlight>
Identifies whether a given number is positive, negative or zero, and returns the answer as either 1, -1 or 0.
#''int alX, uint aulX, float afX, or double adX'' - The number who's sign will be checked.
<syntaxhighlight lang="cpp">
// Example 1:
if (Math.Sign(fPrevious - fCurrent) == 1) sChange = "increased";
else if (Math.Sign(fPrevious - fCurrent) == -1) sChange = "decreased";
else sChange = "no change";
// Assuming fCurrent and fPrevious represent some value that is changing over time, this sets a string to represent that change.

// Example 2:
int lRando = Math.RandomInt(-50, -25);
bool bRandoIsNeg = Math.Sign(lRando) == -1;
// There is a roughly 1/3 chance that bRandoIsNeg will be true.
</syntaxhighlight>


====Abs()====
<syntaxhighlight lang="cpp">
float Abs(float afX)
double Abs(double adX)
int Abs(int alX)
uint Abs(uint aulX)
</syntaxhighlight>
Returns the absolute value of the number, ignoring it's sign. This is the same as the global function MathAbs(), except that it also takes an int, uint or double.
#''float afX, double adX, int alX, uint aulX'' - A postive or negative value, to be returned as absolute.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Abs(10);
int lB = Math.Abs(-10);
// lA and lB both become 10.
</syntaxhighlight>


====Min()====
<syntaxhighlight lang="cpp">
float Min(float afA, float afB)
double Min(double adA, double adB)
int Min(int alA, int alB)
uint Min(uint aulA, uint aulB)
</syntaxhighlight>
Compares two numbers and returns whichever one is the smaller value. This is the same as the global function MathMin(), except that it also takes an int, uint or double.
#''float afA, double adA, int alA, uint aulA'' - The first number to be compared.
#''float afB, double adB, int alB, uint aulB'' - The second number to be compared.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Min(10, lB);
// If lB is less than 10, lA will become equal to lB. Otherwise lA will become 10.
</syntaxhighlight>


====Max()====
<syntaxhighlight lang="cpp">
float Max(float afA, float afB)
double Max(double adA, double adB)
int Max(int alA, int alB)
uint Max(uint aulA, uint aulB)
</syntaxhighlight>
Compares two numbers and returns whichever one is the larger value. This is the same as the global function MathMin(), except that it also takes an int, uint or double.
#''float afA, double adA, int alA, uint aulA'' - The first number to be compared.
#''float afB, double adB, int alB, uint aulB'' - The second number to be compared.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Max(10, lB);
// If lB is more than 10, lA will become equal to lB. Otherwise lA will become 10.
</syntaxhighlight>


====Clamp()====
<syntaxhighlight lang="cpp">
float Clamp(float afX, float afMin, float afMax)
double Clamp(double adX, double adMin, double adMax)
int Clamp(int alX, int alMin, int alMax)
uint Clamp(uint aulX, uint aulMin, uint aulMax)
</syntaxhighlight>
Limits a number to an allowed range. If the number is within the range then it is returned, otherwise the min or max is returned. This is the same as the global function MathClamp(), except that it also takes an int, uint or double.
#''float afX, double adX, int alX, uint aulX'' - The number to be compared.
#''float afMin, double adMin, int alMin, uint aulMin'' - The minimum of the allowed range.
#''float afMax, double adMax, int alMax, uint aulMax'' - The maximum of the allowed range.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Clamp(15, 10, 20);
float fB = Math.Clamp(25.0f, 10.0f, 20.0f);
// lA will be 15, but fB will be limited to 20.0f.
</syntaxhighlight>


====Wrap()====
<syntaxhighlight lang="cpp">
float Wrap(float afX, float afMin = 0.0f, float afMax = 1.0f);
double Wrap(double adX, double adMin = 0.0, double adMax = 1.0);
int Wrap(int alX, int alMin = 0, int alMax = 100);
</syntaxhighlight>
Returns a given number limited between a min and max using wrapping. Accepts float, double and int. Wrap() works similarly to Clamp(), except that if the given number is outside of the min and max, it will wrap back around using modulation.
<br>E.g. 2.75 wrapped between 1.0 and 2.0 will be 1.75.
<br>-1.25 wrapped between 0.0 and 1.0 will be 0.75.
#''float afX, double adX, or int alX'' - The number to be wrapped.
#''float afMin, double adMin, or int alMin'' - The inclusive lower boundary for wrapping. (Optional, float/double default = 0.0, int default = 0)
#''float afMax, double adMax, or int alMax'' - The exclusive upper boundary for wrapping. (Optional, float/double default = 1.0, int default = 100)
<syntaxhighlight lang="cpp">
// Example:
float fA = 2.75f;
float fB = -1.25f;
int lC = 125;
int lD = 100;
float fA_Wrapped = Math.Wrap(fA, 1.0, 2.0);
float fB_Wrapped = Math.Wrap(fB);
int lC_Wrapped = Math.Wrap(lC);
int lD_Wrapped = Math.Wrap(lD);
// The value of fA_Wrapped will be 1.75f.
// The value of fB_Wrapped will be 0.75f.
// The value of lC_Wrapped will be 25.
// The value of lD_Wrapped will be 0.
</syntaxhighlight>

===Rounding===
Math provides the following methods for converting floats to ints:


====Floor()====
<syntaxhighlight lang="cpp">
int Floor(float afX)
int Floor(double adX)
</syntaxhighlight>
Returns an int converted from a float or a double, by rounding 'down'.
#''float afX, double adX'' - The number to be rounded and returned as an int.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Floor(0.1f);
int lB = Math.Floor(0.5f);
int lC = Math.Floor(0.9f);
int lD = Math.Floor(-1.1f);
int lE = Math.Floor(-1.5f);
int lF = Math.Floor(-1.9f);
// lA, lB and lC all become 0.
// lD, lE and lF all become -2.
</syntaxhighlight>


====Ceiling()====
<syntaxhighlight lang="cpp">
int Ceiling(float afX)
int Ceiling(double adX)
</syntaxhighlight>
Returns an int converted from a float or a double, by rounding 'up'.
#''float afX, double adX'' - The number to be rounded and returned as an int.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Floor(0.1f);
int lB = Math.Floor(0.5f);
int lC = Math.Floor(0.9f);
int lD = Math.Floor(-1.1f);
int lE = Math.Floor(-1.5f);
int lF = Math.Floor(-1.9f);
// lA, lB and lC all become 1.
// lD, lE and lF all become -1.
</syntaxhighlight>


====Round()====
<syntaxhighlight lang="cpp">
int Round(float afX)
int Round(double adX)
</syntaxhighlight>
Returns an int converted from a float or a double, by rounding to the nearest whole number. When the float is on the midpoint (.5), Round() rounds 'away from zero'.
#''float afX, double adX'' - The number to be rounded and returned as an int.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Floor(0.1f);
int lB = Math.Floor(0.5f);
int lC = Math.Floor(0.9f);
int lD = Math.Floor(-1.1f);
int lE = Math.Floor(-1.5f);
int lF = Math.Floor(-1.9f);
// lA becomes 0. lB and lC both become 1.
// lD becomes -1. lE and lF both become -2.
</syntaxhighlight>


====RoundMidToEven()====
<syntaxhighlight lang="cpp">
int RoundMidToEven(float afX)
int RoundMidToEven(double adX)
</syntaxhighlight>
Returns an int converted from a float or a double, by rounding to the nearest whole number. When the float is on the midpoint (.5), RoundMidToEven() rounds 'towards the nearest even integer'.
#''float afX, double adX'' - The number to be rounded and returned as an int.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Floor(0.1f);
int lB = Math.Floor(0.5f);
int lC = Math.Floor(0.9f);
int lD = Math.Floor(-1.1f);
int lE = Math.Floor(-1.5f);
int lF = Math.Floor(-1.9f);
// lA and lB both become 0. lC becomes 1.
// lD becomes -1. lE and lF both become -2.
</syntaxhighlight>


====Truncate()====
<syntaxhighlight lang="cpp">
int Truncate(float afX)
int Truncate(double adX)
</syntaxhighlight>
Returns an int converted from a float or a double, by 'discarding the fractional part', rounding towards zero even if the fraction is part the midpoint.
<br> This is effectively the same as using "int(fX)".
#''float afX, double adX'' - The number to be rounded and returned as an int.
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.Floor(0.1f);
int lB = Math.Floor(0.5f);
int lC = Math.Floor(0.9f);
int lD = Math.Floor(-1.1f);
int lE = Math.Floor(-1.5f);
int lF = Math.Floor(-1.9f);
// lA, lB and lC all become 0.
// lD, lE and lF all become -1.
</syntaxhighlight>


===Interpolation===
Math provides the following methods for interpolating between values:


====Lerp()====
<syntaxhighlight lang="cpp">
float Lerp(float afA, float afB, float afAlpha, enumLimitType aLimitOption = limitFree)
double Lerp(double adA, double adB, double adAlpha, enumLimitType aLimitOption = limitFree)
cVector Lerp(cVector avA, cVector avB, float afAlpha, enumLimitType aLimitOption = limitFree)
int Lerp(int alA, int alB, float afAlpha, enumLimitType aLimitOption = limitFree)
</syntaxhighlight>
Linear interpolation: maps an alpha of 0.0-1.0, between values A and B.
<br><br>aLimitOption is optional and can be omitted, or it can be limitFree, limitClamped or limitWrapped.
<br>With limitFree (default) the alpha is not clamped.
<br>With limitClamped, the alpha value is limited to 0.0f-1.0f. E.g., -0.5f is the same as 0.0f, 3.0f is the same as 1.0f.
<br>With limitWrapped, the alpha values over 1 wrap around to zero. E.g., 1.5f is the same as 0.5f, -1.25f is the same as 0.75f.
<br><br>Accepts either float, double, or cVector. Can also work with two int values (and a float alpha), but note that the result will be truncated towards zero.
#''float afA, double adA, cVector avA, or int alA'' - The value corresponding to alpha 0.
#''float afB, double adB, cVector avB, or int alB'' - The value corresponding to alpha 1.
#''float afAlpha, double afAlpha'' - The alpha value of the interpolation.
#''enumLimitType aLimitOption'' - limitFree, limitClamped or limitWrapped '''(Optional, default = limitFree)'''
<syntaxhighlight lang="cpp">
// Example 1:
float fA = 5.0f;
float fB = 10.0f;
float fC = Math.Lerp(fA, fB, 2.0f/3.0f);
// fC is 8 1/3, which is 2/3 of the way from 5 to 10.

// Example 2:
FadeGlobalSoundSpeed(Math.Lerp(0.5f, 1.0f, GetPlayerSanity() / 100.0f) 1.0f);
// As the player loses sanity, sounds get slower.

// Example 3:
cVector vPlayerPos = Math.GetPlayerPosVec();
cVector vTargetPos = cVector(10.0f, 3.0f, 5.5f);
cVector vHalfwayToTarget = Math.Lerp(vPlayerPos, vTargetPos, 0.5f);
// vHalfwayToTarget is the midpoint between the player's location and the target location
</syntaxhighlight>


====WeightedAvg()====
<syntaxhighlight lang="cpp">
float WeightAvg(float afA, float afB, float afWeight = 0.5f)
double WeightAvg(double afA, double afB, double adWeight = 0.5)
cVector WeightAvg(cVector afA, cVector afB, float afWeight = 0.5f)
</syntaxhighlight>
Weighted average: returns a value interpolated between A and B, where weight defines how much "drag" there is. A common usage is to smooth out a number that is changing over time.
<br>The weight value can be thought of a how much A is "worth" compared to B (if B is "worth" 1.0). The lower the weight value, the closer to B the result will be. If weight is omitted it defaults to 0.5. Accepts pairs of float, double, or cVector.
#''float afA, double adA, or cVector avA'' - The current value of the interpolation.
#''float afB, double adB, or cVector avB'' - The target value of the interpolation.
#''float afWeight, double adWeight'' - The weight of the current value on the interpolation. '''(Optional, default = 0.5)'''
<syntaxhighlight lang="cpp">
// Example 1:
float fA = 100.0f;
float fB = 200.0f;
float fC = Math.WeightAvg(fA, fB, 2.0f);
// fC is 133 1/3, which is 1/3 of the way from 100 to 200.

// Example 2:
vFollowPos = Math.Lerp(Math.GetPlayerPosVec(), vFollowPos, 0.25f);
// An item placed at vFollowPos every frame will smoothly follow the player.
</syntaxhighlight>


====SnappingWeightedAvg()====
<syntaxhighlight lang="cpp">
float SnappingWeightedAvg(float afA, float afB, float afWeight, float afSnapSize = 0.001f)
double SnappingWeightedAvg(double afA, double afB, double adWeight, double adSnapSize = 0.001)
cVector SnappingWeightedAvg(cVector afA, cVector afB, float afWeight, float afSnapSize = 0.001f)
</syntaxhighlight>
Same as weighted average, but the new value will snap to A or B if it is in range. This can help to reduce slowly trailing values that don't noticebly change. If it is omitted, asSnapSize defaults to 0.001.
#''float afA, double adA, or cVector avA'' - The current value of the interpolation.
#''float afB, double adB, or cVector avB'' - The target value of the interpolation.
#''float afWeight, double adWeight'' - The weight of the current value on the interpolation.
#''float afSnapSize, double adSnapSize'' - The tolerance for snapping to A or B. (Optional, default = 0.001)
<br>


===Vector math===
Math provides the following methods for mathematic operations on vectors:


====Length()====
<syntaxhighlight lang="cpp">
float Length(cVector aVector, enumLengthType aSquaredOption = lengthFinal)
int Length(cPoint aVector, enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Returns the length a vector, i.e. it's displacement from 0,0,0.
<br>You can also use a cPoint to get the length as an int, but note that the result will be truncated. E.g. cVector(1.0f, 3.0f) has a length equal to the square root of 10, but cPoint(1, 3) has a length of 3 exactly.
<br>aSquaredOption can be omitted, or optionally can be either lengthFinal, lengthSquared. With lengthFinal (default), the value returned is the actual length. With lengthSquared, the value returned is length^2. This is much cheaper to calculate and good enough for a lot of situations. E.g. if you want to know which vector is longer but the actual length doesn't matter.
<br>Note: you can also use the Length() method of the vector classes. (e.g. myVec.Length() )
#''cVector aVector, cPoint aPoint'' - The vector to calculate the length of.
#''enumLengthType aSquaredOption'' - lengthFinal or lengthSquared '''(Optional, default = lengthFinal)'''
<syntaxhighlight lang="cpp">
// Example 1:
cVector vMyRectangle = cVector(10.0f, 15.0f);
float fMyHypotenuse = Math.Length(myRectangle);
// fMyHypotenuse becomes the length of the diagonal line across a rectangle 10m by 15m.

// Example 2:
bool bIsVecALonger = Math.Length(vVecA, lengthSquared) > Math.Length(vVecB, lengthSquared);
// bIsVecALonger becomes true if vVecA is longer than vVecB, without calculating the final lengths.
</syntaxhighlight>


====Distance()====
<syntaxhighlight lang="cpp">
float Distance(cVector avA, cVector avB, enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Returns the displacement between two vectors, e.g. the distance between two points in space.
<br>aSquaredOption can be omitted, or optionally can be either lengthFinal, lengthSquared. With lengthFinal (default), the value returned is the actual length. With lengthSquared, the value returned is length^2. This is much cheaper to calculate and good enough for a lot of situations. E.g. if you want to know which vector is longer but the actual length doesn't matter.
#''cVector avA'' - The start position of the distance.
#''cVector avB'' - The end position of the distance.
#''enumLengthType aSquaredOption'' - lengthFinal or lengthSquared '''(Optional, default = lengthFinal)'''
<syntaxhighlight lang="cpp">
// Example:
cVector vSomeplace = cVector(10.0f, 0.0f 15.0f);
cVector vSomeplaceElse = cVector(20.0f, 2.0f 25.0f);
float fDistance = Math.Distance(vSomeplace, vSomeplaceElse);
</syntaxhighlight>


====DistToPlayer()====
<syntaxhighlight lang="cpp">
float DistToPlayer(string asEntity, enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Returns the distance from an entity to the player.
<br>aSquaredOption can be omitted, or optionally can be either lengthFinal, lengthSquared. With lengthFinal (default), the value returned is the actual length. With lengthSquared, the value returned is length^2. This is much cheaper to calculate and good enough for a lot of situations. E.g. if you want to know which vector is longer but the actual length doesn't matter.
#''string asEntity'' - The entity whose location to compare to the player.
#''enumLengthType aSquaredOption'' - lengthFinal or lengthSquared '''(Optional, default = lengthFinal)'''
<syntaxhighlight lang="cpp">
// Example:
if (Math.DistToPlayer("Orb") < 12.0f) SetPlayerSanity(0.0f);
// When the player is less than 12m away from the orb, they lose all sanity points.
</syntaxhighlight>


====DistToEntity()====
<syntaxhighlight lang="cpp">
float DistToEntity(string asEntityA, string asEntityB, enumLengthType aSquaredOption = lengthFinal)
</syntaxhighlight>
Returns the distance between two named entities.
<br>aSquaredOption can be omitted, or optionally can be either lengthFinal, lengthSquared. With lengthFinal (default), the value returned is the actual length. With lengthSquared, the value returned is length^2. This is much cheaper to calculate and good enough for a lot of situations. E.g. if you want to know which vector is longer but the actual length doesn't matter.
#''string asEntityA'' - The first entity whose location will be compared.
#''string asEntityB'' - The second entity whose location will be compared.
#''enumLengthType aSquaredOption'' - lengthFinal or lengthSquared '''(Optional, default = lengthFinal)'''
<syntaxhighlight lang="cpp">
// Example:
if (Math.DistToEntity("OrbPieceA", "OrbPieceB") < 1.0f)
{
	cVector snapPos = Math.Lerp(Math.GetEntityPosVec("OrbPieceA"), Math.GetEntityPosVec("OrbPieceB"), 0.5f);
	Math.SetEntityPosVec("OrbPieceA", snapPos);
	Math.SetEntityPosVec("OrbPieceB", snapPos);
}
// When the two orb pieces are less than a metre apart, they snap together.
</syntaxhighlight>


====GetRelative()====
<syntaxhighlight lang="cpp">
cVector GetRelative(cVector avPosition, cVector avOriginA, cVector avOriginB)
cPoint GetRelative(cPoint avPosition, cPoint avOriginA, cPoint avOriginB)
</syntaxhighlight>
Given a world position vector in relation to origin A, this will return a world position with the same displacement from origin B. See also: TeleportPlayerRelative() and TeleportEntityRelative().
#''cVector avPosition or cPoint avPosition'' - A vector defining a start position.
#''cVector avOriginA or cPoint avOriginA'' - A position in relation to the start position.
#''cVector avOriginB or cPoint avOriginB'' - A position in relation to the output position.
<syntaxhighlight lang="cpp">
// Example:
cVector vMirrorWorldPlayerPos = Math.GetRelative(Math.GetPlayerPosVec(), vNormalWorldCentre, vMirrorWorldCentre) * cVector(1.0f, 1.0f, -1.0f);
// This convoluted example is something you might be interested in if you were trying to make a fake mirror, perhaps.
</syntaxhighlight>


====TeleportPlayerRelative()====
<syntaxhighlight lang="cpp">
void TeleportPlayerRelative(string asAreaA, string asAreaB)
</syntaxhighlight>
Moves the player to a location relative to a named area B, whilst maintaining their position relative to area A.
#''string asAreaA'' - Name of an area (or other entity) in relation to the player's current position.
#''string asAreaB'' - Name of an area (or other entity) in relation to the player's new position.
<syntaxhighlight lang="cpp">
// Example:
Math.TeleportPlayerRelative("Room1Area", "Room2Area");
// Assuming Room1Area and Room2Area are the same size/shape, if the player is inside Room1Area, they will teleport to the same position inside Room2Area.
</syntaxhighlight>


====TeleportEntityRelative()====
<syntaxhighlight lang="cpp">
void TeleportPlayerRelative(string asEntity, string asAreaA, string asAreaB)
</syntaxhighlight>
Moves the named entity to a location relative to a named area B, whilst maintaining its position relative to area A.
#''string asEntity'' - Name of the entity to teleport.
#''string asAreaA'' - Name of an area (or other entity) in relation to the player's current position.
#''string asAreaB'' - Name of an area (or other entity) in relation to the player's new position.
<syntaxhighlight lang="cpp">
// Example:
Math.TeleportEntityRelative("FatSackOfThalers", "Room1Area", "Room2Area");
// Assuming Room1Area and Room2Area are the same size/shape, if FatSackOfThalers is inside Room1Area, it will teleport to the same position inside Room2Area.
</syntaxhighlight>


====Normal()====
<syntaxhighlight lang="cpp">
cVector Normal(cVector avX)
cPoint Normal(cPoint avX)
</syntaxhighlight>
Returns a normalized copy of a vector, without changing the original. (A normalized vector has the same direction, but with a length forced to 1.) Accepts a cVector or cPoint. Uses SafeDivide() to avoid ...impossible geometry!
#''cVector avX or cPoint avX'' - The vector to calculate the normal off.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = Math.Normal(vDirection) * fSpeed;
// If vDirection is a vector of unknown length pointing in some direction, this would set vVelocity to be a vector pointing in the same direction, but with a length of exactly fSpeed.
</syntaxhighlight>


====Normalize()====
<syntaxhighlight lang="cpp">
void Normal(cVector avX)
void Normal(cPoint avX)
</syntaxhighlight>
Normalizes the specified vector in place, replacing the original. (A normalized vector has the same direction, but with a length forced to 1.) Accepts a cVector or cPoint. Uses SafeDivide() to avoid ...impossible geometry!
#''cVector avX or cPoint avX'' - The vector to be replaced with its normal.
<syntaxhighlight lang="cpp">
// Example:
vVelocity = vDirection;
Math.Normalize(vVelocity); // Length of vVelocity has now become 1.
vVelocity *= 3.0f;
// This example has the same result as the previous one, for Math.Normal().
</syntaxhighlight>


====DotProduct()====
<syntaxhighlight lang="cpp">
float DotProduct(cVector avA, cVector avB)
</syntaxhighlight>
Returns the dot product (a.k.a. inner product) of two vectors. The * operator between two vectors also returns the dot product.
#''cVector avA'' - The first vector to use in the dot product calculation.
#''cVector avB'' - The second vector to use in the dot product calculation.
<syntaxhighlight lang="cpp">
// Example:
float fDotMath = Math.DotProduct(vMyVecA, vMyVecB);
float fDotStar = vMyVecA * vMyVecB;
// fDotMath is equal to fDotStar
</syntaxhighlight>


====CrossProduct3d()====
<syntaxhighlight lang="cpp">
cVector CrossProduct3d(cVector avA, cVector avB)
</syntaxhighlight>
Returns the cross product of two 3d vectors.
#''cVector avA'' - The first vector to use in the cross product calculation.
#''cVector avB'' - The second vector to use in the cross product calculation.
<syntaxhighlight lang="cpp">
// Example:
cVector vMyVecC = Math.CrossProduct3d(vMyVecA, vMyVecB);
</syntaxhighlight>


====ParallelVectors()====
<syntaxhighlight lang="cpp">
float ParallelVectors(cVector avA, cVector avB, bool abAbsolute = true)
</syntaxhighlight>
Given two vectors or two 3d vectors, ParallelVectors will return a float indicating how parallel they are. If the returned float is 0 (or nearly 0), then the vectors are perpendicular (or nearly perpendicular). If the returned float is 1 (or nearly 1), then the vectors are parallel (or nearly parallel).
<br> abAbsolute is optional. If omitted, it defaults to true. If true, the return value will always be positive and indicates whether the vectors are parallel. If abAbsolute is false, the return value may be negative. A value of -1 would indicate that the vectors are
parallel, but pointing in the opposite direction.
#''cVector avA'' - First vector to compare.
#''cVector avB'' - Second vector to compare.
#''bool abAbsolute'' - If false, a negative return value indicates parallel-but-opposite. '''(Optional, default = true)'''
<syntaxhighlight lang="cpp">
// Example 1:
float fRighthand = Math.ParallelVectors(cVector(0.0f, 0.0f, 1.0f), cVector(-1.0f, 0.0f, 0.0f));
float fBackDiagonal = Math.ParallelVectors(cVector(0.0f, 0.0f, 1.0f), cVector(0.5f, 0.0f, -1.0f), false);
// The value of fRighthand will be 0. The value of fBackDiagonal will be -0.894427.

// Example 2:
bfollowingPath =  ParallelVectors(vPlayerPosCurr - vPlayerPosPrev, vPathDir, false) > 0.75f;
// Assuming vPlayerPosCurr is the current position of the player, and vPlayerPosPrev is the previous position of the player, and vPathDir is some direction we want the player to move along, then the bool bFollowingPath becomes true if the player is moving roughly in the direction of the path.
</syntaxhighlight>


====IsParallel()====
<syntaxhighlight lang="cpp">
bool IsParallel(cVector avA, cVector avB)
</syntaxhighlight>
Given two vectors, IsParallel() returns true if they are parallel, allowing for a small margin of error.
#''cVector avA'' - First vector to compare.
#''cVector avB'' - Second vector to compare.
<syntaxhighlight lang="cpp">
// Example 1:
bool bPar = Math.IsParallel(cVector(1.0f, 0.0f, 0.0f), cVector(0.0f, 0.0f, 0.1f));
// The value of bPar will be false.

// Example 2:
if (Math.IsParallel(Math.GetEntityPosVec("puzzlePieceA") - Math.GetEntityPosVec("puzzlePieceB"), Math.GetEntityPosVec("puzzlePieceB") - Math.GetEntityPosVec("puzzlePieceC"))) PuzzleSolved();
// The condition succeeds when the three puzzle pieces have been placed in a line.
</syntaxhighlight>


====IsPerpendicular()====
<syntaxhighlight lang="cpp">
bool IsPerpendicular(cVector avA, cVector avB)
</syntaxhighlight>
Given two vectors, IsPerpendicular() returns true if they are are perpendicular, allowing for a small margin of error.
#''cVector avA'' - First vector to compare.
#''cVector avB'' - Second vector to compare.
<syntaxhighlight lang="cpp">
// Example 1:
bool bPar = Math.IsPerpendicular(cVector(1.0f, 0.0f, 0.0f), cVector(0.0f, 0.0f, 0.1f));
// The value of bPar will be true.

// Example 2:
if (Math.IsPerpendicular(Math.GetEntityPosVec("puzzlePieceA") - Math.GetEntityPosVec("puzzlePieceB"), Math.GetEntityPosVec("puzzlePieceB") - Math.GetEntityPosVec("puzzlePieceC"))) PuzzleSolved();
// The condition succeeds when the three puzzle pieces have been placed in a right-angled triangle.
</syntaxhighlight>


====RotateVector2d()====
<syntaxhighlight lang="cpp">
cVector RotateVector2d(cVector avA, float afB, enumAngleUnits aUnits = angleDegrees)
</syntaxhighlight>
Given a 2d vector and an angle, this rotates the vector by the specified amount and returns the new rotated 2d vector. A positive angle is a clockwise rotation, negative is anticlockwise.
<br>aUnits can be omitted, or optionally it can be angleDegrees or angleRadians. With angleDegrees (default), the given angle afB is taken as degrees. With angleRadians, the given angle afB is taken as radians.
#''cVector avA'' - The vector to be rotated.
#''float afB'' - The angle to rotate by.
#''enumAngleUnits aUnits'' - angleDegrees or angleRadians. '''(Optional, default = angleDegrees)'''
<syntaxhighlight lang="cpp">
// Example 1:
cVector vVecA = cVector(1.0f, 0.0f);
cVector vVecB = cVector(0.0f, 1.0f);
cVector vVecC = Math.RotateVector2d(vVecA, 90.0f);
// vVecB and vVecC are equal.

// Example 2:
cVector vDirOnPlane = Math.RotateVector2d(cVector(-1.0f, 0.0f), Math.Pi * Math.RandomFloat(-0.125f, 0.125f));
// vDirOnPlane becomes a random 2d vector pointing roughly rightwards.
</syntaxhighlight>


====AngleToVector2d()====
<syntaxhighlight lang="cpp">
cVector AngleToVector2d(float afA, enumAngleUnits aUnits = angleDegrees)
</syntaxhighlight>
Converts an angle on a 2d plane to a 2d forward vector, using either degrees or radians.
<br>Note that 0d rotation is pointing upward, and in the returned vector the origin is in the top-left: 0 degrees = 12 o'clock = (0, -1); 90 degrees = 3 o'clock = (1, 0)
<br>aUnits can be omitted, or optionally it can be angleDegrees or angleRadians. With angleDegrees (default), the given angle afB is taken as degrees. With angleRadians, the given angle afB is taken as radians.
#''float afR, float afD'' - The angle to convert to a 2d vector.
#''enumAngleUnits aUnits'' - angleDegrees or angleRadians. '''(Optional, default = angleDegrees)'''
<syntaxhighlight lang="cpp">
// Example:
cVector vVecA = Math.AngleToVector2d(90.0f);
cVector vVecB = Math.AngleToVector2d(180.0f);
cVector vVecC = Math.RotateVector2d(vVecA, 90.0f);
// vVecB and vVecC are equal.
</syntaxhighlight>


====Vector2dToAngle()====
<syntaxhighlight lang="cpp">
float Vector2dToAngle(cVector avA, enumAngleUnits aUnits = angleDegrees)
</syntaxhighlight>
Converts a 2d forward vector to an angle on the 2d plane, using either degrees or radians.
<br>Note that 0d rotation is pointing upward, and in the returned vector the origin is in the top-left: 0 degrees = 12 o'clock = (0, -1); 90 degrees = 3 o'clock = (1, 0)
<br>aUnits can be omitted, or optionally it can be angleDegrees or angleRadians. With angleDegrees (default), the given angle afB is taken as degrees. With angleRadians, the given angle afB is taken as radians.
#''cVector avA'' - A 2d vector to convert to an angle.
#''enumAngleUnits aUnits'' - angleDegrees or angleRadians. '''(Optional, default = angleDegrees)'''
<syntaxhighlight lang="cpp">
// Example:
float fRad = Math.Vector2dToAngle(cVector(3.0f, 1.5f));
// fRad is equal to 3/8*Pi.
</syntaxhighlight>


====RotateVector3d()====
<syntaxhighlight lang="cpp">
cVector RotateVector3d(cVector avA, cRotator arB)
</syntaxhighlight>
Given a 3d vector and a pitch-yaw-roll rotator, this rotates the vector by the specified amount, and returns the new rotated vector.
<br>Note that HPL2 uses a "right-handed, x=left" coordinate system, so the forward direction is considered to be 0,0,1.
#''cVector avA'' - The vector to be rotated.
#''cRotator arB'' - The rotator containing the pitch, yaw and roll angles.
<syntaxhighlight lang="cpp">
// Example 1:
cVector vForward = cVector(0.0f, 0.0f 1.0f);
cRotator vPitchDown = cRotator(5.0f, 0.0f, 5.0f, angleDegrees);
vForward = Math.RotateVector3d(vForward, vPitchDown);
// vForward has been tilted slightly downwards and leaned slightly rightwards.

// Example 2:
cVector vForward = cVector(0.0f, 0.0f 1.0f);
cRotator vBarrelRoll = cRotator(0.0f, 0.0f, 180.0f, angleDegrees);
vForward = Math.RotateVector3d(vForward, vBarrelRoll);
// vForward hasn't changed. Roll on it's own does nothing to a vector, since a vector has no sense of "orientation", only "forward".
</syntaxhighlight>


====RotatorToVector3d()====
<syntaxhighlight lang="cpp">
cVector RotatorToVector3d(cRotator arRot, enumOrthoDir aDirectionOption = dirForward)
</syntaxhighlight>
Converts a rotator with pitch, yaw and roll angles into a 3d directional vector. This is basically the same as RotateVector3d() but perhaps more convenient.
<br>aDirectionOption is optional and specifies an orthogonal world vector to use. It can be dirForward, dirBackward, dirLeft, dirRight, dirUp or dirDown. If omitted it defaults to dirForward.
<br>Note that HPL2 uses a "right-handed, x=left" coordinate system, so the forward direction is considered to be 0,0,1. If an entity was facing 0,0,1 before rotation, then RotatorToVector3d() with dirForward would return it's facing direction after rotation.
#''cRotator arRot'' - Rotator containing pitch, yaw, roll values to convert to a vector.
#''enumOrthoDir aDirectionOption'' - Which orthoginal world vector to rotate. '''(Optional, default = dirForward)'''
<syntaxhighlight lang="cpp">
// Example:
cRotator vPitchUp = cRotator(-0.25f * Math.Pi, 0.0f, 0.0f, angleRadians);
cVector vForwardUp = Math.RotatorToVector3d(vPitchDown);
cVector vRightUp = Math.RotatorToVector3d(vPitchDown, dirRight);
// vForwardUp points forward, tilted up by 45 degrees. vRightUp points rightward, tilted up by 45 degrees.
</syntaxhighlight>


====Vector3dToRotator()====
<syntaxhighlight lang="cpp">
cRotator Vector3dToRotator(cVector avForward)
cRotator Vector3dToRotator(cVector avForward, cVector avUp)
</syntaxhighlight>
Converts a 3d directional vector to pitch, yaw and roll, and returns the result as a rotator.
<br>If only one vector is given then it represents the forward direction, and the returned rotator will have a yaw and pitch rotated to that forward direction. The roll will be zero.
<br>An optional second vector can be provided in order to calculate roll. If the second vector is given then the first represents the forward direction and the second represents the upward direction. The returned rotator will include a roll angle calculated using the upward direction.
#''cVector avForward'' - The forward directional vector to be converted to a rotator.
#''cVector avUp'' - Optional upward directional vector used to calculate roll. '''(Optional, default = no roll)'''
<syntaxhighlight lang="cpp">
// Example:
cRotator vMyRot = Math.Vector3dToRotator(cVector(-1.0f, 0.0f, -1.0f));
if (vMyRot.YawDeg > 90.0f) DoStuff();
// The condition succeeds because vMyRot becomes a yaw rotation of 135 degrees clockwise.
</syntaxhighlight>


===Vector replacements===
The following math methods are intended to replace some of the normal global functions that use separate X, Y and Z floats:


====GetPlayerPosVec()====
<syntaxhighlight lang="cpp">
cVector GetPlayerPosVec()
</syntaxhighlight>
Returns the player's location as a 3d cVector, instead of [[HPL2/Engine_Scripts#Player|GetPlayerPosX/Y/Z()]], which only return a single float.)
<syntaxhighlight lang="cpp">
// Example:
cVector vPlayerCurrPos = Math.GetPlayerPosVec();
// Stores the player's current location in a cVector.
</syntaxhighlight>


====SetPlayerPosVec()====
<syntaxhighlight lang="cpp">
void SetPlayerPosVec(cVector avPos)
</syntaxhighlight>
Moves the player to a location given as a 3d cVector, instead of [[HPL2/Engine_Scripts#Player|SetPlayerPos()]], which takes separate 3 floats.
#''cVector avPos'' - The new location for the player.
<syntaxhighlight lang="cpp">
// Example:
cVector vOrigin;
Math.SetPlayerPosVec(vOrigin);
// Teleports the player to the world origin.
</syntaxhighlight>


====MovePlayerHeadPosVec()====
<syntaxhighlight lang="cpp">
void MovePlayerHeadPosVec(cVector avPos, float afSpeed, float afSlowDownDist)
</syntaxhighlight>
Changes the position of the camera on the player's body, using a 3d cVector, instead of [[HPL2/Engine_Scripts#Player|MovePlayerHeadPos()]], which takes separate 3 floats.
#''cVector avPos'' - The new location for the player's head.
#''float afSpeed - The speed at which the change happens.
#''float afSlowDownDist - The distance at which to start slowing down (prevents the head from abruptly stopping).
<syntaxhighlight lang="cpp">
// Example:
Math.MovePlayerHeadPosVec(my3dVector, 1.5f, 0.1f);
// Moves the player camera to whatever offset is assigned to my3dVector.
</syntaxhighlight>


====GetEntityPosVec()====
<syntaxhighlight lang="cpp">
cVector GetEntityPosVec(string asEntity)
</syntaxhighlight>
Returns the named entity's location as a 3d cVector, instead of [[HPL2/Engine_Scripts#Entities|GetEntityPosX/Y/Z()]], which only return a single float.
#''string asEntity'' - The entity to be moved.
<syntaxhighlight lang="cpp">
// Example:
cVector vHammerCurrPos = Math.GetEntityPosVec("hammer");
// Stores the hammer's current location in a cVector.
</syntaxhighlight>


====SetEntityPosVec()====
<syntaxhighlight lang="cpp">
void SetEntityPosVec(string asEntity, cVector avPos)
</syntaxhighlight>
Moves the named entity to a location given as a 3d cVector, instead of [[HPL2/Engine_Scripts#Entities|SetEntityPos()]], which takes separate 3 floats.
#''string asEntity'' - The entity to be moved.
#''cVector avPos'' - The new location for the entity.
<syntaxhighlight lang="cpp">
// Example:
Math.SetEntityPosVec("anvil", Math.GetPlayerPosVec() + cVector(0.0f, 3.0f, 0.0f));
// Teleports the entity "anvil" to 3m above the player.
</syntaxhighlight>


====AddPropForceVec etc====
<syntaxhighlight lang="cpp">
void AddPropForceVec(string asName, cVector avForce, string asCoordSystem = "world")
void AddPropImpulseVec(string asName, cVector avImpulse, string asCoordSystem = "world")
void AddBodyForceVec(string asName, cVector avForce, string asCoordSystem = "world")
void AddBodyImpulseVec(string asName, cVector avImpulse, string asCoordSystem = "world")
</syntaxhighlight>
These functions are provided as a way to use the global functions [[HPL2/Engine_Scripts#Props|AddPropForce() etc.]], with a vector specifying the force or impulse, rather than floats. Could be useful if you want to use it with e.g. RandomVector3d(). See the documentation for the original functions for more information. The asCoordSystem string argument is optional in these versions.
#''string asName'' - The name of the entity or body to push.
#''cVector avForce, cVector avImpulse'' - A 3d vector to use for the force or impulse.
#''string asCoordSystem'' - Frame of reference for the force. '''(Optional, default = "world")'''
<br>


====RotatePropToSpeedVec()====
<syntaxhighlight lang="cpp">
void RotatePropToSpeedVec(string asName, float afAcc, float afGoalSpeed, cVector avAxes, bool abResetSpeed = false, string& asOffsetArea = "")
</syntaxhighlight>
This function is provided as a way to use the global function [[HPL2/Engine_Scripts#Props|RotatePropToSpeed()]] with a vector as the axis multiplier, instead of floats. Could be useful if you want to use it with e.g. RandomVector3d(). See the documentation for the original function for more information. The asOffsetArea string and abResetSpeed bool arguments are optional in this version.
#''string asName'' - Name of the prop to rotate.
#''float afAcc'' - Acceleration used to reach desired speed.
#''float afGoalSpeed'' - The desired speed.
#''cVector avAxes'' - The 3d vector to use as the axis multiplier.
#''bool abResetSpeed'' - Whether to reset the speed after the goal is reached. '''(Optional, default = false)'''
#''string asOffsetArea'' - The area to rotate around. If empty, the center of the body is used. '''(Optional, default = "")'''
<br>

===Randomness===
Math provides the following methods for returning random values:


====RandomBool()====
<syntaxhighlight lang="cpp">
bool RandomBool()
</syntaxhighlight>
Returns a bool with a 50% chance of being true.
<syntaxhighlight lang="cpp">
// Example 1:
bool bSomeBool = Math.RandomBool();
// bSomeBool might be true or false.

// Example 2:
if (Math.RandomBool) SimonIsDuplicate();
else SimonIsOriginal();
// No explanation.
</syntaxhighlight>


====RandomFloat()====
<syntaxhighlight lang="cpp">
float RandomFloat()
float RandomFloat(float afMin, float afMax)
</syntaxhighlight>
Returns a random float. The min and max numbers are optional. If a min and max are provided, this is the same as the normal global function RandFloat(). (Note the name difference: Math.RandomFloat() vs RandFloat().)
<br>If the min and max numbers are omitted, then RandomFloat() will return a random float between zero and one.
#''float afMin'' - The minimum range of the random number. '''(Optional, together with afMax)'''
#''float afMax'' - The maximum range of the random number. '''(Optional, together with afMin)'''
<syntaxhighlight lang="cpp">
// Example:
float fA = Math.RandomFloat();
float fB = Math.RandomFloat(-0.25f, 0.25f);
float fC = Math.RandomFloat() * 0.5f - 0.25f;
// fA becomes a random float in the range 0.0...1.0.
// fB and fC both have the same range: -0.25...0.25.
</syntaxhighlight>


====RandomInt()====
<syntaxhighlight lang="cpp">
int RandomInt()
int RandomInt(int alMin, int alMax)
</syntaxhighlight>
Returns a random int. The min and max numbers are optional. If a min and max are provided, this is the same as the normal global function RandInt(). (Note the name difference: Math.RandomInt() vs RandInt().)
<br>If the min and max numbers are omitted, then RandomInt() will return a random integer in the maximum range of a signed 32bit integer: -2^31...2^31-1 (-2147483648...2147483647).
#''int alMin'' - The inclusive minimum range of the random number. '''(Optional, together with alMax)'''
#''int alMax'' - The exclusive maximum range of the random number. '''(Optional, together with alMin)'''
<syntaxhighlight lang="cpp">
// Example:
int lA = Math.RandomInt();
int lB = Math.RandomInt(0, 6);
int lC = Math.RandomInt(1, 7);
// lA becomes any possible signed 32bit int.
// lB and lC both have 6 possible outcomes: lB could be 0...5, and lC could be 1...6.
</syntaxhighlight>


====RandomUint()====
<syntaxhighlight lang="cpp">
uint RandomUint()
</syntaxhighlight>
Returns a random uint in the maximum range possible. The upper limit of an unsigned 32bit int should be 2^32, but we only have the means of generating 'signed' ints in script, so RandomUint() will actually return a random integer from zero to 2^31-1, inclusive (0...2147483647).
<br>


====RandomInt16()====
<syntaxhighlight lang="cpp">
int16 RandomInt16()
</syntaxhighlight>
Returns a random int16 in the maximum range of a signed 16bit integer, inclusive: -2^15...2^15-1 (-32768...32767).
<br>


====RandomUint16()====
<syntaxhighlight lang="cpp">
uint16 RandomInt16()
</syntaxhighlight>
Returns a random uint16 in the maximum range of an usigned 16bit integer, inclusive: 0...2^16-1 (0...65535).
<br>


====RandomInt8()====
<syntaxhighlight lang="cpp">
int8 RandomInt16()
</syntaxhighlight>
Returns a random int8 in the maximum range of a signed 8bit integer, inclusive: -2^7...2^7-1 (-128...127).
<br>


====RandomUint8()====
<syntaxhighlight lang="cpp">
uint8 RandomInt16()
</syntaxhighlight>
Returns a random uint8 in the maximum range of an usigned 8bit integer, inclusive: 0...2^16-1 (0...255).
<br>


====RandomVector2d()====
<syntaxhighlight lang="cpp">
cVector RandomVector2d(float afMin = 0.0f, float afMax = 1.0f, enumVecType aVecOption = vecFree)
</syntaxhighlight>
Returns a random 2d vector. aVecOption can be omitted, or optionally can be either vecFree, vecOrtho or vecNormal. With vecFree (default), a vector is returned where each dimension is an unrelated random number from afMin to afMax. With vecOrtho, a vector is returned with length afMax, pointing in one positive or negative orthogonal direction. With vecNormal, a normal vector is returned, scaled by afMax (with a length of afMax and a random direction).
<br>afMin and afMax are also optional. If omitted, they default to 0.0f and 1.0f.
#''float afMin'' - Used with afMax to specify the minimum extent of the random vector. (Optional with afMax, default = 0.0f)
#''float afMax'' - Used with afMin 'or on it's own' to specify the maximum extent of the random vector. (Optional, default = 1.0f)
#''enumVecType aVecOption'' - vecFree, vecOrtho or vecNormal. Specifies the type of random vector returned. (Optional, default = vecFree)
<syntaxhighlight lang="cpp">
// Example:
cVector vA = Math.RandomVector2d(5.0f, 10.0f);
cVector vB = Math.RandomVector2d(vecOrtho);
cVector vC = Math.RandomVector2d(3.5f, vecNormal);
// vA becomes a 2d vector where x and y are both random floats in the range of 5.0...10.00.
// vB becomes a 2d vector with a length of 1.0, pointing directly up, down, left or right.
// vC becomes a 2d vector pointing in any 2d direction, with a length of 3.5.
</syntaxhighlight>


====RandomVector3d()====
<syntaxhighlight lang="cpp">
cVector RandomVector3d(float afMin = 0.0f, float afMax = 1.0f, enumVecType aVecOption = vecFree)
</syntaxhighlight>
Returns a random 3d vector. aVecOption can be omitted, or optionally can be either vecFree, vecOrtho or vecNormal. With vecFree (default), a vector is returned where each dimension is an unrelated random number from afMin to afMax. With vecOrtho, a vector is returned with length afMax, pointing in one positive or negative orthogonal direction. With vecNormal, a normal vector is returned, scaled by afMax (with a length of afMax and a random direction).
<br>afMin and afMax are also optional. If omitted, they default to 0.0f and 1.0f.
#''float afMin'' - Used with afMax to specify the minimum extent of the random vector. (Optional with afMax, default = 0.0f)
#''float afMax'' - Used with afMin 'or on it's own' to specify the maximum extent of the random vector. (Optional, default = 1.0f)
#''enumVecType aVecOption'' - vecFree, vecOrtho or vecNormal. Specifies the type of random vector returned. (Optional, default = vecFree)
<syntaxhighlight lang="cpp">
// Example:
cVector vA = Math.RandomVector3d(5.0f, 10.0f);
cVector vB = Math.RandomVector3d(vecOrtho);
cVector vC = Math.RandomVector3d(3.5f, vecNormal);
// vA becomes a 3d vector where x, y and z are all random floats in the range of 5.0...10.00.
// vB becomes a 3d vector with a length of 1.0, pointing directly forward, backward, up, down, left or right.
// vC becomes a 3d vector pointing in any 3d direction, with a length of 3.5.
</syntaxhighlight>


====RandomVectorInBounds()====
<syntaxhighlight lang="cpp">
cVector RandomVectorInBounds(cVector avMin, cVector avMax, enumVecType aVecOption = vecFree)
</syntaxhighlight>
Given a pair of cVector to define the extents of a rectangle or box, this will return a random position within those extents.
<br>aVecOption can be omitted, or optionally can be either vecFree, vecOrtho or vecNormal. With vecFree (default), a vector is returned where each dimension is an unrelated random number from afMin to afMax. With vecOrtho, a vector is returned with length afMax, pointing in one positive or negative orthogonal direction. With vecNormal, a normal vector is returned, scaled by afMax (with a length of afMax and a random direction).
<br>To put it another way: vecFree returns a position inside a quad/cuboid, vecOrtho returns a single extent of the quad/cuboid, and vecNormal returns a point on a circle/sphere that fits the quad/cuboid.
#''cVector avMin'' - A cVector defining the minimum extent of the range for the random position.
#''cVector avMax'' - A cVector defining the maximum extent of the range for the random position.
#''enumVecType aVecOption'' - vecFree, vecOrtho or vecNormal. Specifies the type of random vector returned. (Optional, default = vecFree)
<syntaxhighlight lang="cpp">
// Example 1:
cVector vA = Math.RandomVectorInBounds(cVector(-5.0f, -5.0f, -5.0f), cVector(5.0f, 5.0f, 5.0f));
cVector vB = Math.RandomVectorInBounds(cVector(-5.0f, 0.0f, 2.0f), cVector(5.0f, 10.0f, 2.0f));
// vA becomes random position in a cube centred on 0,0,0, with a size of 10m.
// vB becomes random position on an x/y plane 2m forward, -5,0,2...5,10,2.

// Example 2:
cVector vMyRoom_FloorCornerA = cVector(20.0f. 0.0f, 30.0f);
cVector vMyRoom_FloorCornerB = cVector(10.0f. 0.0f, 15.0f);
float fMyRoom_CeilingHeight = 4.0f;
cVector vMyRoom_RandomPosOnFloor = Math.RandomVectorInBounds(vMyRoom_FloorCornerA, vMyRoom_FloorCornerB);
cVector vMyRoom_RandomPosOnCeiling = Math.RandomVectorInBounds(vMyRoom_FloorCornerA, vMyRoom_FloorCornerB) + cVector(0.0f, fMyRoom_CeilingHeight, 0.0f);
cVector vMyRoom_RandomPosInRoom = Math.RandomVectorInBounds(vMyRoom_FloorCornerA, vMyRoom_FloorCornerB + cVector(0.0f, fMyRoom_CeilingHeight, 0.0f));
cVector vMyRoom_RandomSurface = Math.RandomVectorInBounds(vMyRoom_FloorCornerA, vMyRoom_FloorCornerB + cVector(0.0f, fMyRoom_CeilingHeight, 0.0f), vecOrtho);
cVector vMyRoom_RandomSphere = Math.RandomVectorInBounds(vMyRoom_FloorCornerA, vMyRoom_FloorCornerB + cVector(0.0f, fMyRoom_CeilingHeight, 0.0f), vecNormal);
// Assuming that we have a room that is cuboid in shape:
// vMyRoom_RandomPosOnFloor and vMyRoom_RandomPosOnCeiling become random points on the floor and ceiling.
// vMyRoom_RandomPosInRoom becomes a random position anywhere in the room.
// vMyRoom_RandomSurface becomes a point in the centre of either the ceiling, floor or any of the four walls.
// vMyRoom_RandomSphere becomes a random position inside the a sphere that reaches from the centre of the room to the nearest surface.
</syntaxhighlight>


====RandomRotator()====
<syntaxhighlight lang="cpp">
cRotator RandomRotator(float afMinPitch = -Pi, float afMaxPitch = Pi, float afMinYaw = -Pi, float afMaxYaw = Pi, float afMinRoll = -Pi, float afMaxRoll = Pi, enumAngleUnits aUnits = angleRadians)
</syntaxhighlight>
Returns a random rotator. The arguments are optional all together. If all are omitted, the rotator will have an entirely random orientation. If all are included, then the random orientation will be within the specified range.
<br> aUnits is optional and defaults to angleRadians if omitted. If angleRadians (default) the min and max values are assumed to be in radians. If angleDegrees, they are assumed to be in degrees.
#''float afMinPitch'' - Lower limit for pitch. (Optional with all together, default = -Pi)
#''float afMaxPitch'' - Upper limit for pitch. (Optional with all together, default = Pi)
#''float afMinYaw'' - Lower limit for yaw. (Optional with all together, default = -Pi)
#''float afMaxYaw'' - Upper limit for yaw. (Optional with all together, default = Pi)
#''float afMinRoll'' - Lower limit for roll. (Optional with all together, default = -Pi)
#''float afMaxRoll'' - Upper limit for roll. (Optional with all together, default = Pi)
#''enumAngleUnits aUnits'' - angleRadians, or angleDegrees. (Optional, default = angleRadians)
<syntaxhighlight lang="cpp">
// Example:
cRotator vRotA = Math.RandomRotator();
cRotator vRotB = Math.RandomRotator(-5.0f, 5.0f, -180.0f, 180.0f, 0.0f, 0.0f, angleDegrees);
cRotator vRotC = Math.RandomRotator(-Math.Pi/36.0f, Math.Pi/36.0f, -Math.Pi, Math.Pi, 0.0f, 0.0f);
// vRotA becomes a random rotator with any possible orientation.
// vRotB and vRotC both have the same possible range, one provided in degrees, the other in radians. In both cases the rotation is tilted slightly up or down and pitched to any direction, with no roll.
</syntaxhighlight>


__FORCETOC__