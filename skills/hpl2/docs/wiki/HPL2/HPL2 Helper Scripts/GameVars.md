{{TocRight}}
This page documents "HelperScripts_GameVars.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script file "HelperScripts_GameVars.hps" builds on top of the normal saved game global and local variable wrappers, adding the ability to save more variable types to the save game file, including vectors and lists/arrays. 
<syntaxhighlight lang="cpp">
// The basic way:
SetLocalVarInt("myInteger", 99);
// The Helper Scripts way:
GameVars.SetInt(varLocal, "myInteger", 99);
</syntaxhighlight>

GameVars variables work in a similar way to the normal saved game global and local variable wrappers, with three differences:


===Scope===
Firstly, instead of separate functions for local and global variables, GameVars uses an optional argument to specify the scope. Each of the GameVars methods has an optional enumVarScope, which can be either '''varLocal''' or '''varGlobal'''. If omitted, the '''default is scope is global'''. For example:
<syntaxhighlight lang="cpp">
GameVars.SetInt(varLocal, "some_number", 99);		// Does the same thing as SetLocalVarInt("some_number", 99);
GameVars.SetInt(varGlobal, "some_number", 99);		// Does the same thing as SetGlobalVarInt("some_number", 99);
GameVars.SetInt("some_number", 99);					// Does the same thing as SetGlobalVarInt("some_number", 99);
</syntaxhighlight>
The scope could even be used variably, for example:
<syntaxhighlight lang="cpp">
enumVarScope scopeForRadioMessages = varLocal;

// After interacting with the radio booster:
scopeForRadioMessages = bRadioBoosterActived ? varGlobal : varLocal;

// On sending a radio message:
GameVars.SetString(scopeForRadioMessages, "radioMessage", "SendHelp");

// This example imagines a scenario where the radioMessage state copied to other levels only while the radio booster is active.
</syntaxhighlight>


===New Types===
Secondly, '''additional variable types''' are available. As well as the normal int, float and string game variables, GameVars has methods for storing and retrieving variables as bool, cVector, cPoint and cRotator. For example:
<syntaxhighlight lang="cpp">
		GameVars.SetBool("myBoolean", true);
		if (GameVars.GetBool("myBoolean"))
		{
			GameVars.SetVector("myVector2", cVector(0.0f, 0.0f));
		}
</syntaxhighlight>


===Lists===
And thirdly GameVars can store '''indexed lists''' of variables, in the style of an '''array or linked list'''. For example, SetListInt() can be passed an array of ints or a cListInt. The return value of GetListInt is a cListInt list that can be assigned to a list variable, or used with the index operator directly. For example:
<syntaxhighlight lang="cpp">
		bool[] myArrayOfBools = { true, true, false, false, false };
		GameVars.SetListBool("myStoredBools", myArrayOfBools);					// Stores the bools from the array as a game variable list.
		GameVars.SetListBool("myStoredBools", 9, true);							// Sets the value of the bool at index 9 in the stored list.
		
		cListString myStringList = GameVars.GetListString("myStoredStrings");	// Retrieves the stored list of strings and assigns it to the cListString.

		string aSingleString = GameVars.GetListString("myStoredStrings", 3);	// Retrieves the string at index 3 of the stored list and assigns it to the string.
		string anotherString = GameVars.GetListString("myStoredStrings")[3];	// Retrieves the string at index 3 of the stored list and assigns it to the string.

		if (GameVars.GetListBool(varLocal, "myStoredBools")[0])					// The condition succeeds if the first bool in the stored list is true.
</syntaxhighlight>

Imporant Note 1: GameVars variable names cannot contain the @ symbol, as it is reserved by GameVars.
Imporant Note 2: GameVars names cannot be reliably re-used between types.
If a name is used containing @, or the same name is used for two differently typed GameVars variables, then it might simply not work or it might return erroneous results.

Behind the scenes, GameVars uses one or more ints or floats to store the new types.
The double and uint types are not provided for, as they could lose precision when stored as floats or int. Use the float and int methods explicitly instead.


=GameVars=


==Behaviours==
"HelperScripts_GameVars.hps" declares an object called '''GameVars''', of the new script class cGameVars. To access its methods, just use "GameVars." followed by the function call. E.g.:
<syntaxhighlight lang="cpp">
GameVars.SetBool(varLocal, "someBoolean", false);
</syntaxhighlight>


==Properties==
GameVars has no public properties.


==Methods==
GameVars provides the following methods:


===Single Variables===


====Set...()====
<syntaxhighlight lang="cpp">
void SetInt(enumVarScope aScopeOption, string asName, int alValue)
void SetFloat(enumVarScope aScopeOption, string asName, float afValue)
void SetString(enumVarScope aScopeOption, string asName, string asValue)
void SetBool(enumVarScope aScopeOption, string asName, bool abValue)
void SetVector(enumVarScope aScopeOption, string asName, cVector avhValue)
void SetRotator(enumVarScope aScopeOption, string asName, cRotator avhValue)
void SetPoint(enumVarScope aScopeOption, string asName, cPoint avhValue)
</syntaxhighlight>
Stores a single game variable with the given value and name.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the game variable to set.
#''int alValue, float afValue, string asValue, bool abValue, cVector avhValue, cRotator avhValue, or cPoint avhValue'' - A value of the appropriate type to be set as the named game variable.
<syntaxhighlight lang="cpp">
// Example:
GameVars.SetString(varLocal, "itemName", "bucket");
GameVars.SetVector(varGlobal, "puzzleDir", cVector(1.0f, 0.0f, 0.0f));
GameVars.SetBool("doorOpen", true);
// The string game var itemName is set to "bucket" in the local scope (for this level only).
// The vector game var puzzleDir is set to 1,0,0 in the global scope (for all levels).
// The bool game var doorOpen is set to true in the global scope (for all levels).
</syntaxhighlight>


====Get...()====
<syntaxhighlight lang="cpp">
int GetInt(enumVarScope aScopeOption, string asName)
float GetFloat(enumVarScope aScopeOption, string asName)
string GetString(enumVarScope aScopeOption, string asName)
bool GetBool(enumVarScope aScopeOption, string asName)
cVector GetVector(enumVarScope aScopeOption, string asName)
cRotator GetRotator(enumVarScope aScopeOption, string asName)
cPoint GetPoint(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Retrieves a single game variable with the given name and returns it as the appropriate variable type.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the game variable to get.
<syntaxhighlight lang="cpp">
// Example 1:
string itemName GameVars.GetString(varLocal, "itemName");
// The script var itemName is assigned the value from the local game var with the same name.

// Example 2:
vHalfSpeed = GameVars.GetVector("savedSpeed") / 2.0f;
// The script vector var vHalfSpeed is assigned with the vector retrieved from the global game var savedSpeed, divided by two.

// Example 3:
if(GameVars.GetBool("doorOpen", true) DoStuff();
// The condition succeeds if the global game var doorOpen is retrieved as true.
</syntaxhighlight>


====Add...()====
<syntaxhighlight lang="cpp">
void AddInt(enumVarScope aScopeOption, string asName, int alValue)
void AddFloat(enumVarScope aScopeOption, string asName, float afValue)
void AddVector(enumVarScope aScopeOption, string asName, cVector avhValue)
void AddRotator(enumVarScope aScopeOption, string asName, cRotator avhValue)
void AddPoint(enumVarScope aScopeOption, string asName, cPoint avhValue)
</syntaxhighlight>
Updates a stored numeric game variable with the given name by adding the given value arithmetically. To subtract, use a negative value. Not to be confused with AddString() (appends text) or AddListItem...() (appends an item to a list).
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the game variable to add to.
#''int alValue, float afValue, cVector avhValue, cRotator avhValue, or cPoint avhValue'' - A value of the appropriate type to be add to the named game variable.
<syntaxhighlight lang="cpp">
// Example 1:
GameVars.AddFloat("runningTotal", 3.5f);
// The global float game var runningTotal increases by 3.5.

// Example 2:
GameVars.AddPoint(varLocal, "gridPos" cPoint(0, -1, 0));
// The local point game var gridPos decreases by 1 in the y axis.
</syntaxhighlight>


====AddString()====
<syntaxhighlight lang="cpp">
void AddString(enumVarScope aScopeOption, string asName, string asName)
</syntaxhighlight>
Updates a stored string game variable with the given name by appending the given text.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the string game variable to append to.
#''string asValue'' - A string to append to the named game variable.
<syntaxhighlight lang="cpp">
// Example:
GameVars.AddString("message", " Goodbye!");
// The global string game var message is appended with the second string.
</syntaxhighlight>


====NotBool()====
<syntaxhighlight lang="cpp">
void NotBool(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Updates a stored bool game variable by inverting it.
If the stored bool is true, it becomes false and vice versa.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the bool game variable to update.
<syntaxhighlight lang="cpp">
// Example:
GameVars.SetBool(varLocal, "flipflop", false);
GameVars.NotBool(varLocal, "flipflop");
// The local bool game var flipflop is first set to false but then becomes true.
</syntaxhighlight>


====AndBool()====
<syntaxhighlight lang="cpp">
void AndBool(enumVarScope aScopeOption, string asName, bool abValue)
</syntaxhighlight>
Updates a stored bool game variable by combining it with the given value, using AND logic.
The stored bool will be true if both itself and abValue are true.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the bool game variable to update.
#''bool abValue'' - The bool value to combine with the stored value.
<syntaxhighlight lang="cpp">
// Example:
GameVars.SetBool(varGlobal, "flipflop", false);
GameVars.AndBool(varGlobal, "flipflop", true);
// The global bool game var flipflop stays false.
</syntaxhighlight>


====OrBool()====
<syntaxhighlight lang="cpp">
void OrBool(enumVarScope aScopeOption, string asName, bool abValue)
</syntaxhighlight>
Updates a stored bool game variable by combining it with the given value, using OR logic.
The stored bool will be true if either itself or abValue are true.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the bool game variable to update.
#''bool abValue'' - The bool value to combine with the stored value.
<syntaxhighlight lang="cpp">
// Example:
GameVars.SetBool(varGlobal, "flipflop", false);
GameVars.AndBool(varGlobal, "flipflop", true);
// The global bool game var flipflop becomes true.
</syntaxhighlight>


====GetIntAsUint()====
<syntaxhighlight lang="cpp">
uint GetIntAsUint(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Retrieves a stored int game variable and returns it as a uint. If the stored int is negative, the returned uint will be 0.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the int game variable to retrieve.


====SetIntAsUint()====
<syntaxhighlight lang="cpp">
void SetIntAsUint(enumVarScope aScopeOption, string asName, uint aulValue)
</syntaxhighlight>
Takes a uint argument and stores it as an int. This is the same as SetInt(), except that it explicitly casts the uint to int, which avoids type conversion warnings.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the int game variable to set.
#''uint aulValue'' - The uint value to be stored as an int.


====GetFloatAsDouble()====
<syntaxhighlight lang="cpp">
double GetFloatAsDouble(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Retrieves a stored float game variable and returns it as a double.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the int game variable to retrieve.


===Lists===


====SetList...()====
<syntaxhighlight lang="cpp">
void SetListInt(enumVarScope aScopeOption, string asName, cListInt alValues)
void SetListFloat(enumVarScope aScopeOption, string asName, cListFloat afValues)
void SetListString(enumVarScope aScopeOption, string asName, cListString asValues)
void SetListBool(enumVarScope aScopeOption, string asName, cListBool abValues)
void SetListVector(enumVarScope aScopeOption, string asName, cListVector avhValues)
void SetListRotator(enumVarScope aScopeOption, string asName, cListRotator avhValues)
void SetListPoint(enumVarScope aScopeOption, string asName, cListPoint avhValues)

void SetListInt(enumVarScope aScopeOption, string asName, int[] alValues)
void SetListFloat(enumVarScope aScopeOption, string asName, float[] afValues)
void SetListString(enumVarScope aScopeOption, string asName, string[] asValues)
void SetListBool(enumVarScope aScopeOption, string asName, bool[] abValues)
void SetListVector(enumVarScope aScopeOption, string asName, cVector[] avhValues)
void SetListRotator(enumVarScope aScopeOption, string asName, cRotator[] avhValues)
void SetListPoint(enumVarScope aScopeOption, string asName, cPoint[] avhValues)
</syntaxhighlight>
Stores a list or array of game variables under a single name.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the game variable to store as a list.
#''cListInt alValues, cListFloat afValues, cListString asValues, cListBool abValues, cListVector avhValues, cListRotator avhValues, cListPoint avhValues
int[] alValues, float[] afValues, string[] asValues, bool[] abValues, cVector[] avhValues, cRotator[] avhValues, or cPoint[] avhValues'' - A value of the appropriate type to be set as the named game variable.
<syntaxhighlight lang="cpp">
// Example 1:
bool[] buttPos = { true, true, false, true };
GameVars.SetListBool(varLocal, "buttonPositions", buttPos);
// The array of bools will be save to a local game var as buttonPositions.

// Example 2:
cListInt myInts;
for (uint i = 0; i < 10; i++) myInts.Add(Math.RandomInt(1, 101));
GameVars.SetListInt("mySavedInts", myInts);
// Ten random integers will be saved to a global game var as mySavedInts.
</syntaxhighlight>


====SetListItem...()====
<syntaxhighlight lang="cpp">
void SetListItemInt(enumVarScope aScopeOption, string asName, uint aulIndex, int alValue)
void SetListItemFloat(enumVarScope aScopeOption, string asName, uint aulIndex, float afValue)
void SetListItemString(enumVarScope aScopeOption, string asName, uint aulIndex, string asValue)
void SetListItemBool(enumVarScope aScopeOption, string asName, uint aulIndex, bool abValue)
void SetListItemVector(enumVarScope aScopeOption, string asName, uint aulIndex, cVector avhValue)
void SetListItemRotator(enumVarScope aScopeOption, string asName, uint aulIndex, cRotator avhValue)
void SetListItemPoint(enumVarScope aScopeOption, string asName, uint aulIndex, cPoint avhValue)
</syntaxhighlight>
Sets the value of a single item in a stored game variable list, at the specified index. If the specified index is past the end of the list (or if the list has not been stored), then the list will be extended with default values.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list.
#''uint aulIndex'' - The index in the stored list to set the value.
#''int alValue, float afValue, string asValue, bool abValue, cVector avhValue, cRotator avhValue, or cPoint avhValue'' - A value of the appropriate type to be set as the item in the named game variable list.
<syntaxhighlight lang="cpp">
// Example 1:
bool[] buttPos = { true, true, false, true };
GameVars.SetListBool(varLocal, "buttonPositions", buttPos);
GameVars.SetListItemBool(varLocal, "buttonPositions", 2, true);
// All four saved bools in the local game var buttonPositions are now true.

// Example 2:
GameVars.SetListInt("newListOfInts", 10, 99);
// Assuming newListOfInts has not been created yet, a list of 9 default 0's is created, followed by 99.
</syntaxhighlight>


====AddListItem...()====
<syntaxhighlight lang="cpp">
void AddListItemInt(enumVarScope aScopeOption, string asName, int alValue)
void AddListItemFloat(enumVarScope aScopeOption, string asName, float afValue)
void AddListItemString(enumVarScope aScopeOption, string asName, string asValue)
void AddListItemBool(enumVarScope aScopeOption, string asName, bool abValue)
void AddListItemVector(enumVarScope aScopeOption, string asName, cVector avhValue)
void AddListItemRotator(enumVarScope aScopeOption, string asName, cRotator avhValue)
void AddListItemPoint(enumVarScope aScopeOption, string asName, cPoint avhValue)
</syntaxhighlight>
Appends a single item to the end of a stored game variable list.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list.
#''int alValue, float afValue, string asValue, bool abValue, cVector avhValue, cRotator avhValue, or cPoint avhValue'' - A value of the appropriate type to be appended to the named game variable list.
<syntaxhighlight lang="cpp">
// Example:
bool[] buttPos = { true, true, true, true };
GameVars.SetListBool(varLocal, "buttonPositions", buttPos);
GameVars.AddListItemBool(varLocal, "buttonPositions", false);
// The saved list of four true bools in the local game var buttonPositions is now append with a false value.
</syntaxhighlight>


====GetList...()====
<syntaxhighlight lang="cpp">
cListInt GetListInt(enumVarScope aScopeOption, string asName)
cListFloat GetListFloat(enumVarScope aScopeOption, string asName)
cListString GetListString(enumVarScope aScopeOption, string asName)
cListBool GetListBool(enumVarScope aScopeOption, string asName)
cListVector GetListVector(enumVarScope aScopeOption, string asName)
cListRotator GetListRotator(enumVarScope aScopeOption, string asName)
cListPoint GetListPoint(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Retrieves an entire stored game variable list and returns it as a linked list of the appropriate type.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list to retrieve.
<syntaxhighlight lang="cpp">
// Example 1:
cListFloat myFloats = GetListFloat("savedFloats");
// The script var list myFloats is assigned with the values retrieved from the game var list savedFloats.

// Example 2:
float[] myFloats = GetListFloat("savedFloats").ToArray();
// The script var array myFloats is assigned with the values retrieved from the game var list savedFloats, using the ToArray() method of the list class.

// Example 3:
float myFloat = GetListFloat("savedFloats")[3];
// The script var float myFloat is assigned with the single value retrieved from index 3 of the game var list savedFloats.
</syntaxhighlight>


====GetListItem...()====
<syntaxhighlight lang="cpp">
cListInt GetListItemInt(enumVarScope aScopeOption, string asName, uint aulIndex)
cListFloat GetListItemFloat(enumVarScope aScopeOption, string asName, uint aulIndex)
cListString GetListItemString(enumVarScope aScopeOption, string asName, uint aulIndex)
cListBool GetListItemBool(enumVarScope aScopeOption, string asName, uint aulIndex)
cListVector GetListItemVector(enumVarScope aScopeOption, string asName, uint aulIndex)
cListRotator GetListItemRotator(enumVarScope aScopeOption, string asName, uint aulIndex)
cListPoint GetListItemPoint(enumVarScope aScopeOption, string asName, uint aulIndex)
</syntaxhighlight>
Retrieves a single item from a stored game variable list and returns it as variable of the appropriate type.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list to retrieve the item from.
#''uint aulIndex'' - The index to get from the stored list.
<syntaxhighlight lang="cpp">
// Example:
string[] sItems = { "bucket", "hammer", "saw", "pliers" };
GameVars.SetListString("itemNames", sItems);
string sRetirevedItem = GameVars.GetListItem("itemNames", 2);
// sRetirevedItem becomes "saw".
</syntaxhighlight>


====GetListCount()====
<syntaxhighlight lang="cpp">
uint GetListCount(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Returns the number of items stored in a list.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list.
<syntaxhighlight lang="cpp">
// Example:
SetNumberOfQuestsInMap(GameVars.GetListCount(varLocal, "activeQuests"));
// The number of items in the saved game var activeQuests is retrieved and passed to SetNumberOfQuestsInMap() as an arg.
</syntaxhighlight>


====ClearList()====
<syntaxhighlight lang="cpp">
void ClearList(enumVarScope aScopeOption, string asName)
</syntaxhighlight>
Empties a stored list.
<br>Note: This works by zeroing the count and does not remove or reset the items in the stored list. If GetList...() is used after ClearList() then it will return an empty list. But if GetListItem...() is used after ClearList(), it will still return the previously stored item.
<br>aScopeOption is optional. If varLocal is used, the game variable is saved for the current level only. If varGlobal is used or if aScopeOption is omitted, the game variables will be saved for all levels.
#''enumVarScope aScopeOption'' - Can be either varLocal or varGlobal. (Optional, default = varGlobal)
#''string asName'' - The name of the stored game variable list.
<syntaxhighlight lang="cpp">
// Example:
bool[] bBunchOfBools = { true, false, false, true };
GameVars.SetListBool(varLocal, "SavedBools", bBunchOfBools);
GameVars.ClearList("SavedBools);

int lTryGetCount = GameVars.GetListCount("SavedBools");
cListBool bTryGetList = GameVars.GetListBool("SavedBools");
bool bTryGetIndex = GameVars.GetListItemBool("SavedBools", 3);
// After clearing the list, lTryGetCount is assigned 0, and bTryGetList is assigned an empty list.
// However, bTryGetIndex will be assigned true, and the original value is not erased.
</syntaxhighlight>

__FORCETOC__