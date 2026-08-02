{{TocRight}}
This page documents "HelperScripts_Lists.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=

The script file "HelperScripts_Lists.hps" adds support for linked list classes. For beginners or other people not familiar with classes, these are best thought of as new variable types. A linked list, or just "list", is a type of collection that works similarly to an array. Both lists and arrays are ways of grouping multiple variables together under one name.

There are three main advantages to using lists over arrays. The first is that it is more efficient (and more performant) to insert, remove or re-order items in the list than it would be with an array. The second is that lists can also take up less memory than arrays. The memory requirement of an array is defined by its maximum capacity, whereas the memory requirement of a list is only as much as its current content. And therefore the third advantage is that it is not necessary to know in advance how big a list needs to be - it expands automatically as items are added. (And of course, advanced users may note that there are exceptions when an array would be more efficient, but most users won't need to worry about this.)


===The basics===
Declare a list like any other variable, then use the methods below to work with it. For example:
<syntaxhighlight lang="cpp">
cListInt myList;		// Declares a new cListInt, called myList, ready to collect integers.
myList.Add(68);			// Appends the first integer (68) to the list at index 0.
myList.Add(419);		// Appends the second integer (419) to the list at index 1.
myList.Get(0);			// Retrieves the integer at index 0.
myList.Set(1, 99);		// Overwrites the integer at index 1.
</syntaxhighlight>


===Indices===
Like arrays, you can ''get'' the items in the list using an index operator, e.g. myList[0], myList[22], myList[LastIndex]. And like arrays, the index number is '''zero based'''. In a list or array of ten items, the first index is 0 and the last index is 9.

Getting an item from a list by its index is equivalent to using the Get() method. However, ''unlike arrays'', this is '''read-only'''. For example:
<syntaxhighlight lang="cpp">
cListString myToDoList;
myToDoList.Add("Paint the lines.");
myToDoList.Add("Cut the man.");

string myStringZero = myToDoList.Get(0);		// OK
string myStringOne = myToDoList[1];				// OK

myToDoList.Set(0, "Paint over the lines.");		// OK
myToDoList[1] = "Cut the cheese.";				// Not OK
</syntaxhighlight>

(This seems to be because the version of AngelScript used in HPL2 seems to only allow the index operator to ''get'' and not ''set''. If I'm wrong and you can make this work, let me know!)


===Advanced info===
"HelperScripts_Lists.hps" also defines cListNodeBase and several derived node classes for each type of list. The list classes all inherit from the base class cListBase, which defines some shared functionality and handles anything that doesn't depend on the type of the stored data.

Additionally, cListGeneric is an extra list class intended for advanced users. It extends the cListBase class without defining an inner data type, to help with making custom node classes derived from cListNodeBase. Advanced users attempting this may find it helpful to take a look at the cListBase and cListGeneric definition, and to read up on how AngelScript uses object handles. Examples can be found in most of the ''features'' scripts, e.g. "HelperScripts_Slimer.hps", which implements multiple custom node classes and nested lists.


=List classes=

Available list classes: <code>cListInt</code>, <code>cListFloat</code>, <code>cListDouble</code>, <code>cListBool</code>, <code>cListString</code>, <code>cListVector</code>, <code>cListPoint</code>, <code>cListRotator</code>

The "List classes" section refers to all the list types unless otherwise stated.


==Behaviours==
Lists can be declared in the same way as other variables:
<syntaxhighlight lang="cpp">
cListFloat listOfFloats;					// Declares a list of floats.
cListString listOfStrings;					// Declares a list of strings.

myListOfFloats.Add(0.001f);					// Calling a method of the referred list.
int numStrings = myListOfStrings.Count;		// Accessing a property of the referred list.
</syntaxhighlight>


===Constructor with capacity===
<syntaxhighlight lang="cpp">
cListBase(uint aulMaxSize)
</syntaxhighlight>
If the list is initialised with a constructor, then a maximum capacity can be specified for the list.
<br>If the list is declared without a specific capacity, then the default maximum capacity is assigned, which is 65535 (or 2^16 - 1).

<syntaxhighlight lang="cpp">
// Example:
cListFloat listOfFloatsDefault;
cListVector listOfVectorsDefault;

cListFloat listOfUpToFiveFloats = cListFloat(5);
cListVector listOfUpTo1000Vectors = cListVector(1000);
</syntaxhighlight>

The default 65535 (2^16-1) is the maximum capacity that can be indexed. Using this a or smaller arbitrary limit can help to catch runaway bugs. '''Advanced users''' may try changing the value of mulCountMax to use a smaller default maximum. Using a larger maximum will likely cause problems.
<br>Note that arrays require as much memory as their full capacity even when empty, but lists are only ever as big as their content, so lowering the maximum size of the list does not help performance. But it might be useful in certain situations where a limit is required by design.


===Constructor with data===
<syntaxhighlight lang="cpp">
cListBase(float[] afArray)
cListBase(cListBase aList)
</syntaxhighlight>
Lists can be initialised with data by passing an array of values of the relevant type, or an existing list. The default capacity is used for the new list.
<br>If the source is an array, the new list will contain copies of the array's contents. If the source is an existing list, then the new list will copy the ''link'' to the original items. Both the old and new lists will point to the same data, and changing one will change the other. To avoid this, see the [[HPL2/HPL2_Helper_Scripts/Lists#Copy.28.29|Copy()]] method.
<syntaxhighlight lang="cpp">
// Example:
float[] myArray = { 4, 8, 15, 16, 23, 42 };
cListFloat myFirstList = cListFloat(myArray);			// Makes a new float list by copying items from the float array.
cListFloat mySecondList = myFirstList;					// Makes a new float list containing the same items as the other list.
</syntaxhighlight>
<br>
<syntaxhighlight lang="cpp">
cListFloat(float afSingleFloat)
</syntaxhighlight>
All the derived list classes ('''except for cListGeneric and cListInt''') can be initialised with data by passing a single value of the relevant type, to become the first item in the list.
<syntaxhighlight lang="cpp">
// Example:
cListFloat myList = cListFloat(1.2f);				// Makes a new float list with a single value.
myList.Add(2.3f);									// myList now contains: 1.2f, 2.3f
</syntaxhighlight>


==Properties==
'''All list classes''' provide the following properties:


====Count====
<syntaxhighlight lang="cpp">
uint Count
</syntaxhighlight>
The read-only integer property Count returns the current number of items in the list.
(The property Length and the method length() are provided for consistency with arrays, and are both equivalent to Count.)
<syntaxhighlight lang="cpp">
// Example 1:
cListFloat myList;
uint ulCountA = myList.Count;
myList.Add(99.99f);
uint ulCountB = myList.Count;
// ulCountA is 0. ulCountB is 1.

// Example 2:
if (listNumbers.Count < 6) listNumber.Add(42);
// The condition succeeds if the count is less than 6, and another number is added.
</syntaxhighlight>


====LastIndex====
<syntaxhighlight lang="cpp">
uint LastIndex
</syntaxhighlight>
The read-only integer property LastIndex returns the last valid index, or -1 if the list is empty.
<syntaxhighlight lang="cpp">
// Example 1:
uint ulA = myListOfStrings.LastIndex;
uint ulB = myListOfStrings.Count - 1;
// ulA and ulB are equal

// Example 2:
string sLatest = myListOfStrings[myListOfStrings.LastIndex];
// sLatest becomes whatever string was added to the list most recently.
</syntaxhighlight>


====Capacity====
<syntaxhighlight lang="cpp">
uint Capacity
</syntaxhighlight>
The read-only integer property Capacity returns the maximum count of items in the list. This will be the default limit, unless one was specified on construction.
<syntaxhighlight lang="cpp">
// Example:
cListInt someList;
someList.Add(1);
uint spaceRemaining = someList.Capacity - someList.Count;
</syntaxhighlight>


====IsEmpty====
<syntaxhighlight lang="cpp">
bool IsEmpty
</syntaxhighlight>
The read-only boolean property IsEmpty returns true if the list is empty, or false if not.
<syntaxhighlight lang="cpp">
// Example:
if (myList.IsEmpty) myList.Add(1);
// The condition succeeds if the list contains no items.
</syntaxhighlight>


====IsFull====
<syntaxhighlight lang="cpp">
bool IsFull
</syntaxhighlight>
The read-only boolean property IsFull returns true if the list is full to its maximum capacity, or false if not.
<syntaxhighlight lang="cpp">
// Example:
if (!myList.IsFull) myList.Add(1);
// The condition succeeds if the list has space for another item.
</syntaxhighlight>


====DefaultValue====
<syntaxhighlight lang="cpp">
int DefaultValue
float DefaultValue
double DefaultValue
bool DefaultValue
string DefaultValue
cVector DefaultValue
cPoint DefaultValue
cRotator DefaultValue
</syntaxhighlight>
The read-only property DefaultValue returns the value that this list type uses as a default. The default value is defined by each list class and used instead of a null item. (e.g.: -1, 0.0f, false, "")
<syntaxhighlight lang="cpp">
// Example:
someItem = myList.Pop();
if (someItem == myList.DefaultValue) Debug.Message(1, "Nothing left to pop!");
// The condition succeeds if item returned from the list was the default item, probably because the list was empty.
</syntaxhighlight>


==Operators==


====Assignment====
<syntaxhighlight lang="cpp">
cListBase = cListBase
</syntaxhighlight>
The assignment operator (equals sign "=") assigns a new set of data to the list, copied from another list. Note: the list contains handles to the data, not the data itself. So when a list is copied, ''both'' lists now refer to the same data, and any changes made to either will affect both.
<br>If the intent is to make a duplicate of the ''data'' rather than the list handles, then the Copy() method is recommended.
<syntaxhighlight lang="cpp">
// Example:
cListString listA;
listA.Add("one");
listA.Add("two");
listA.Add("three");

cListString listB = listA;

cListString listC;
listC = listA.Copy();

listA.Set(2, "banana");

// listA and listB both lists refer to the same 3 strings, and the final content of both listA and listB is: "one", "two", "banana".
// listC was made as a copy, so it was not affected when listA[2] was changed. listC still has: "one", "two", "three".
</syntaxhighlight>

===Equality===

The logical equality operator (double equals sign "==") can be used to compare two lists of the same type, just like with other values. It will return true if the lists contain the same number of items and the coresponding data items in the lists have equal values, or if the two lists both point to the same data.
<syntaxhighlight lang="cpp">
// Example:
cListString listA;
listA.Add("one");
listA.Add("two");
listA.Add("three");

cListString listB;
listA.Add("four");
listA.Add("five");
listA.Add("size");

cListString listC = listB;

bool test1 = listA == listB;
bool test2 = listB == listC;
// test1 will be false because listA and listB contain values that are not equal.
// test2 will be true because listB and listC both point to the same items.
</syntaxhighlight>


==Methods==


===Setting list items===
cListBase and its derived classes provide the following methods for assigning items to the list:


====Add()====
<syntaxhighlight lang="cpp">
bool Add(int alItem)
bool Add(float afItem)
bool Add(double adItem)
bool Add(bool abItem)
bool Add(string asItem)
bool Add(cVector avItem)
bool Add(cPoint avItem)
bool Add(cRotator avItem)
</syntaxhighlight>
Creates a new item appended to the list. If the list is full or the item cannot be added, it returns false. If it was successfull appended, it returns true.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be added.
<syntaxhighlight lang="cpp">
// Example 1:
myListOfFloats.Add(1.0f);
myListOfPoints.Add(cPoint(10, 15, 20));
// The new values are appended to the list.

// Example 2:
if (!listNumbers.Add(-1.0f)) Debug.Message(1, "Error - could not add to list!");
// The condition succeeds if Add failed.
</syntaxhighlight>


====Set()====
<syntaxhighlight lang="cpp">
bool Set(uint aulIndex, int alItem, bool abExtend = true)
bool Set(uint aulIndex, float afItem, bool abExtend = true)
bool Set(uint aulIndex, double adItem, bool abExtend = true)
bool Set(uint aulIndex, bool abItem, bool abExtend = true)
bool Set(uint aulIndex, string asItem, bool abExtend = true)
bool Set(uint aulIndex, cVector avItem, bool abExtend = true)
bool Set(uint aulIndex, cPoint avItem, bool abExtend = true)
bool Set(uint aulIndex, cRotator avItem, bool abExtend = true)
</syntaxhighlight>
Assigns a new value to an indexed item in the list.
<br>abExtend is optional. If the given index is not valid and abExtend is omitted or true, then the list will be extended to fit the new index, using Extend() with default values. If the given index is not valid and abExtend is false, then the item will not be set.
<br>Set() returns true if the item was succesfully set. If the item could not be set or if the list could not be extended to fit it, Set() returns false.
#''uint aulIndex'' - The index of the item to be changed.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be assigned.
#''bool abExtend'' - Whether to extend the list to fit the new item, if necessary. '''(Optional, default = true)'''
<syntaxhighlight lang="cpp">
// Example 1:
myListOfBools.Set(7, false);
// The bool at index 7 in the list becomes false, replacing the previous one.

// Example 2:
cListString myListOfStrings;
myListOfInts.Set(3, "three");
myListOfInts.Set(6, "six", true);
myListOfInts.Set(10, "ten", false);
// Setting "three" and "size" succeeded by extending the list.
// Setting "ten" failed because index 10 does not exist, and abExtend is false.
</syntaxhighlight>


====Extend()====
<syntaxhighlight lang="cpp">
bool Extend(uint aulIndex)
</syntaxhighlight>
If given index is not valid, then Extend() adds default items (e.g.: -1, 0.0f, false, "") until the last valid index becomes the given index. Returns false if the list could not be extended to the specified index.
#''uint aulIndex'' - The index which become the new last index, if higher.
<syntaxhighlight lang="cpp">
// Example:
cListString twentyEmptyStrings;
twentyEmptyStrings.Extend(19);
// twentyEmptyStrings now contains... twenty empty strings.
</syntaxhighlight>


====Insert()====
<syntaxhighlight lang="cpp">
bool Insert(uint aulIndex, int alItem)
bool Insert(uint aulIndex, float afItem)
bool Insert(uint aulIndex, double adItem)
bool Insert(uint aulIndex, bool abItem)
bool Insert(uint aulIndex, string asItem)
bool Insert(uint aulIndex, cVector avItem)
bool Insert(uint aulIndex, cPoint avItem)
bool Insert(uint aulIndex, cRotator avItem)
</syntaxhighlight>
Inserts a new item into the list at the given index. (The item previous at that index becomes the next one.) If the given index is not a valid place to insert an item, then then return value will be false. Otherwise the item is inserted and it returns true.
#''uint aulIndex'' - The index where the new item will be inserted.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be inserted.
<syntaxhighlight lang="cpp">
// Example 1:
myListOfBools.Insert(7, false);
// The bool at index 7 in the list becomes false, displacing the previous one to index 8.

// Example 2:
if (!myList.Insert(10, "hello") myList.Add("hello");
// Attempts to insert the string at index 10, and if that fails the string is appended instead.
</syntaxhighlight>


====Concatenate()====
<syntaxhighlight lang="cpp">
bool Concatenate(cListBase aList)
bool Concatenate(int[] alArray)
bool Concatenate(float[] afArray)
bool Concatenate(double[] adArray)
bool Concatenate(bool[] abArray)
bool Concatenate(string[] asArray)
bool Concatenate(cVector[] avArray)
bool Concatenate(cPoint[] avArray)
bool Concatenate(cRotator[] avArray)
</syntaxhighlight>
Takes either a second list or array of the same type and appends it to this one. It first checks to make sure there is enough capacity. Returns true if items were successfully added, or false if not.
<br>If an array is supplied, new list items are created to match them. If a list is suplied the items are '''not duplicated''' - both lists refer to the same items in memory, and changing them will change both lists.
#''cListBase aList (or any list type), or an array of int[], float[], double[], bool[], string[], cVector[], cPoint[] or cRotator[]'' - The items to be added.
<syntaxhighlight lang="cpp">
// Example 1:
cListFloat listOfFloatsA;
listOfFloatsA.Add(1.0f);
listOfFloatsA.Add(2.0f);

float[] arrayOfFloatsB = { 3.0f, 4.0f };
listOfFloatsA.Concatenate(arrayOfFloatsB);
// listOfFloatsA now contains 1.0f, 2.0f, 3.0f, 4.0f.

// Example 2:
cListFloat listOfFloatsA;
listOfFloatsA.Add(1.0f);
listOfFloatsA.Add(2.0f);

cListFloat listOfFloatsB;
listOfFloatsB.Add(3.0f);
listOfFloatsB.Add(4.0f);

listOfFloatsA.Concatenate(listOfFloatsB);
listOfFloatsA.Set(3, 99.9f);
// listOfFloatsA now contains 1.0f, 2.0f, 3.0f, 99.9f.
// listOfFloatsB now contains 3.0f, 99.9f.
</syntaxhighlight>


===Getting list items===
cListBase and its derived classes provide the following methods for retrieving items from the list:


====Get()====
<syntaxhighlight lang="cpp">
int Get(uint aulIndex)
float Get(uint aulIndex)
double Get(uint aulIndex)
bool Get(uint aulIndex)
string Get(uint aulIndex)
cVector Get(uint aulIndex)
cPoint Get(uint aulIndex)
cRotator Get(uint aulIndex)
</syntaxhighlight>
Traverses the list and retrieves an item from the given index, if it exists. If the item does not exist in the list, a default value will be returned instead, e.g. -1 or an empty string.
<br>See GetIfValid() if you want to be sure the item exists. You can also use an index operator (e.g. myList[i]) to get list items.
#''uint aulIndex'' - The index of the item to be retrieved.
<syntaxhighlight lang="cpp">
// Example:
cListString myToDoList;
myToDoList.Add("Paint the lines.");
myToDoList.Add("Cut the man.");

string myStringZero = myToDoList.Get(0);
string myStringLast = myToDoList.Get(myToDoList.LastIndex);
// myStringZero becomes the value from the start of the list.
// myStringLast becomes the value that happens to be at the end of the list.
</syntaxhighlight>


====GetIfValid()====
<syntaxhighlight lang="cpp">
bool GetIfValid(uint aulIndex, int &out alTarget)
bool GetIfValid(uint aulIndex, float &out afTarget)
bool GetIfValid(uint aulIndex, double &out adTarget)
bool GetIfValid(uint aulIndex, bool &out abTarget)
bool GetIfValid(uint aulIndex, string &out asTarget)
bool GetIfValid(uint aulIndex, cVector &out avTarget)
bool GetIfValid(uint aulIndex, cPoint &out avTarget)
bool GetIfValid(uint aulIndex, cRotator &out avTarget)
</syntaxhighlight>
Traverses the list and retrieves an item from the given index, as long as it is valid.
<br>The second parameter is an ''ouput'' parameter. If the item at the given index exists then '''the item is assigned to the Target &out parameter''', and the function returns true. If the item doesn't exist in the list, the function returns false.
<br>See Get() if you don't care about validation and just want to return the item.
#''uint aulIndex'' - The index of the item to be retrieved.
#''int alTarget, float afTarget, double adTarget, bool abTarget, string asTarget, cVector avTarget, cPoint avTarget, or cRotator avTarget'' - The variable, of the appropriate type, where the retrieved item will be '''stored'''.
<syntaxhighlight lang="cpp">
// Example:
int retrievedInteger;
if(!myListOfInts.GetIfValid(3, retrievedInteger)) retrievedInteger = -1;
// retrievedInteger will be assigned the value retrieved from index 3 in the list, if it exists.
// If it doesn't exist, the condition will succeed and retrievedInteger with be assigned -1 instead.
</syntaxhighlight>


====GetRandom()====
<syntaxhighlight lang="cpp">
int GetRandom()
float GetRandom()
double GetRandom()
bool GetRandom()
string GetRandom()
cVector GetRandom()
cPoint GetRandom()
cRotator GetRandom()
</syntaxhighlight>
Randomly selects an item from the list and returns it. If the list is empty, a default value will be returned instead, e.g. -1 or an empty string.
<syntaxhighlight lang="cpp">
// Example:
string sRandomColor = listOfColors.GetRandom();
// The string sRandomColor is assigned a random value from listOfColors.
</syntaxhighlight>


====Pop()====
<syntaxhighlight lang="cpp">
int Pop()
float Pop()
double Pop()
bool Pop()
string Pop()
cVector Pop()
cPoint Pop()
cRotator Pop()
</syntaxhighlight>
Returns the last item in the list, and removes that item. If the list is empty, a default value will be returned instead, e.g. -1 or an empty string.
<syntaxhighlight lang="cpp">
// Example:
int[] myArray = { 4, 8, 15, 16, 23 };
cListInt listNumbers = cListInt(myArray);
int lA = listNumbers.Pop();
int lB = listNumbers.Pop();
int lC = listNumbers.Pop();
// lA, lB, and lC have become 23, 16, and 15. myArray now contains only 4 and 8.
</syntaxhighlight>


====PopRandom()====
<syntaxhighlight lang="cpp">
int PopRandom()
float PopRandom()
double PopRandom()
bool PopRandom()
string PopRandom()
cVector PopRandom()
cPoint PopRandom()
cRotator PopRandom()
</syntaxhighlight>
Randomly selects an item from the list, returns it and them removes it. If the list is empty, a default value will be returned instead, e.g. -1 or an empty string.
<syntaxhighlight lang="cpp">
// Example:
string sRandomColor = listOfColors.GetRandom();
// The string sRandomColor is assigned a random value from listOfColors, and that value is no longer available in the list.
</syntaxhighlight>


====Copy()====
<syntaxhighlight lang="cpp">
cListInt Copy(cListInt aList)
cListFloat Copy(cListFloat aList)
cListDouble Copy(cListDouble aList)
cListBool Copy(cListBool aList)
cListVector Copy(cListVector aList)
cListPoint Copy(cListPoint aList)
cListRotator Copy(cListRotator aList)
</syntaxhighlight>
Returns a new list that is a duplicate of this list. The items in the new list are new items. Changing either list will not affect the other.
#''cListBase aList (or any list type)'' - The items to be added.
<syntaxhighlight lang="cpp">
// Example:
cListString listA;
listA.Add("one");
listA.Add("two");
listA.Add("three");

cListString listB = listA;

cListString listC;
listC = listA.Copy();

listA.Set(2, "banana");

// listA and listB both lists refer to the same 3 strings, and the final content of both listA and listB is: "one", "two", "banana".
// listC was made as a copy, so it was not affected when listA[2] was changed. listC still has: "one", "two", "three".
</syntaxhighlight>


===Removing list items===
cListBase and its derived classes provide the following methods for removing items from the list: (See also: Pop() and PopRandom())


====RemoveAt()====
<syntaxhighlight lang="cpp">
bool RemoveAt(uint aulIndex)
</syntaxhighlight>
Traverses the list and removes the given index.
Returns true if the index was valid and was removed, or false if not.
#''uint aulIndex'' - The index of the item to be removed.
<syntaxhighlight lang="cpp">
// Example 1:
myList.RemoveAt(7);

// Example 2:
if (myList.RemoveAt(7)) myList.Append("something new");
// If the removal was successful, then a new value is appended.
</syntaxhighlight>


====RemoveItem()====
<syntaxhighlight lang="cpp">
bool RemoveItem(int alItem)
bool RemoveItem(float afItem)
bool RemoveItem(double adItem)
bool RemoveItem(bool abItem)
bool RemoveItem(string asItem)
bool RemoveItem(cVector avItem)
bool RemoveItem(cPoint avItem)
bool RemoveItem(cRotator avItem)
</syntaxhighlight>
Searches the list for a matching item and removes the first matching item it finds. Returns true if the item was found and removed, or false if not.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be searched for and removed.
<syntaxhighlight lang="cpp">
Example 1:
myListOfBools.RemoveItem(false);
// The first instance of false in the list will be removed.

// Example 2:
int  lRemoved = 0;
int[] myArray = { 4, 8, 0, 15, 16, 0, 23, 0 };
cListInt listNumbers = cListInt(myArray);
while (listNumbers.Remove(0))
{
    lRemoved++;
	DoStuff();
}
// The Remove() call will repeat until it returns false, at which point the value of lRemoved will be 3.
</syntaxhighlight>


====RemoveAll()====
<syntaxhighlight lang="cpp">
bool RemoveAll(int alItem)
bool RemoveAll(float aItem)
bool RemoveAll(double aItem)
bool RemoveAll(bool aItem)
bool RemoveAll(string aItem)
bool RemoveAll(cVector aItem)
bool RemoveAll(cPoint aItem)
bool RemoveAll(cRotator aItem)
</syntaxhighlight>
Searches the list for matching items and removes the all matching items. Returns true if any items were found and removed, or false if not.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be searched for and removed.
<syntaxhighlight lang="cpp">
// Example:
myListOfFloats.RemoveAll(0.0f);
// All the zeros will be removed from the list
</syntaxhighlight>


===Searching lists===
cListBase and its derived classes provide the following methods for searching for items in the list:


====Find()====
<syntaxhighlight lang="cpp">
int Find(int alItem)
int Find(float afItem)
int Find(double adItem)
int Find(bool abItem)
int Find(string asItem)
int Find(cVector avItem)
int Find(cPoint avItem)
int Find(cRotator avItem)
</syntaxhighlight>
Searches the list for a matching item and returns the index of the first match. If the item is not found, -1 is returned instead.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be searched for.
<syntaxhighlight lang="cpp">
// Example:
cListInt myListOfInts;
myListOfInts.Add(11);
myListOfInts.Add(22);
myListOfInts.Add(33);

uint lIndexTwentyTwo = myListOfInts.Find(22);
uint lIndexFortyFour = myListOfInts.Find(44);
// lIndexTwentyTwo becomes 1. lIndexFortyFour becomes -1.
</syntaxhighlight>


====Contains()====
<syntaxhighlight lang="cpp">
bool Contains(int alItem)
bool Contains(float afItem)
bool Contains(double adItem)
bool Contains(bool abItem)
bool Contains(string asItem)
bool Contains(cVector avItem)
bool Contains(cPoint avItem)
bool Contains(cRotator avItem)
</syntaxhighlight>
Searches the list for a matching item and returns true if found, or false if not.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be searched for.
<syntaxhighlight lang="cpp">
// Example:
cListInt myListOfInts;
myListOfInts.Add(11);
myListOfInts.Add(22);
myListOfInts.Add(33);

bool bHasTwentyTwo = myListOfInts.Find(22);
bool bHasFortyFour = myListOfInts.Find(44);
// bHasTwentyTwo becomes true. bHasFortyFour becomes false.
</syntaxhighlight>


====CountItem()====
<syntaxhighlight lang="cpp">
uint CountItem(int alItem)
uint CountItem(float afItem)
uint CountItem(double adItem)
uint CountItem(bool abItem)
uint CountItem(string asItem)
uint CountItem(cVector avItem)
uint CountItem(cPoint avItem)
uint CountItem(cRotator avItem)
</syntaxhighlight>
Searches the list for matching items and returns the number of matches found.
#''int alItem, float afItem, double adItem, bool abItem, string asItem, cVector avItem, cPoint avItem, or cRotator avItem'' - The item, of the appropriate type, to be searched for.
<syntaxhighlight lang="cpp">
// Example:
cListString myListOfStrings;
myListOfStrings.Add("up");
myListOfStrings.Add("down");
myListOfStrings.Add("sideways");
myListOfStrings.Add("down");

int lNumDown = myListOfStrings.CountItem("down");
int lNumForward = myListOfStrings.CountItem("forward");
// lNumDown becomes 2. lNumForward becomes 0.
</syntaxhighlight>


===Numeric lists===
Some of the derived list classes dealing with numeric values provide the methods for arithmetic operations across the list:


====Min()====
<syntaxhighlight lang="cpp">
int Min()
float Min()
double Min()
bool Min()
cVector Min()
cPoint Min()
</syntaxhighlight>
Returns the lowest value in the list. cListInt, cListFloat, cListDouble, cListBool, cListVector, and cListPoint only.
<br>For bools, this is returns false if there is a false - like logical AND over the list. For vectors and points, this evaluates and compares each square length.
<syntaxhighlight lang="cpp">
// Example:
cListFloat fRandomList;
for (uint i = 0; i < 10; i++) fRandomList.Add(Math.RandomFloat());
float fSmallest = fRandomList.Min();
// fRandomList is assigned ten random floats, and whichever is the smallest is assigned to fSmallest.
</syntaxhighlight>


====Max()====
<syntaxhighlight lang="cpp">
int Max()
float Max()
double Max()
bool Max()
cVector Min()
cPoint Min()
</syntaxhighlight>
Returns the highest value in the list. cListInt, cListFloat, cListDouble, cListBool, cListVector, and cListPoint only.
<br>For bools, this is returns true if there is a true - like logical OR over the list. For vectors and points, this evaluates and compares each square length.
<syntaxhighlight lang="cpp">
// Example:
cListFloat fRandomList;
for (uint i = 0; i < 10; i++) fRandomList.Add(Math.RandomFloat());
float fLargest = fRandomList.Max();
// fRandomList is assigned ten random floats, and whichever is the largest is assigned to fLargest.
</syntaxhighlight>


====FindMin()====
<syntaxhighlight lang="cpp">
uint FindMin()
</syntaxhighlight>
Returns the first index of the item with the lowest value in the list. cListInt, cListFloat, cListDouble, cListBool, cListVector, and cListPoint only.
<syntaxhighlight lang="cpp">
// Example:
cListFloat fRandomList;
for (uint i = 0; i < 10; i++) fRandomList.Add(Math.RandomFloat());
int lSmallest = fRandomList.FindMin();
// fRandomList is assigned ten random floats, and the index of the smallest is assigned to lSmallest.
</syntaxhighlight>


====FindMax()====
<syntaxhighlight lang="cpp">
uint FindMax()
</syntaxhighlight>
Returns the first index of the item with the highest value in the list. cListInt, cListFloat, cListDouble, cListBool, cListVector, and cListPoint only.
<syntaxhighlight lang="cpp">
// Example:
cListFloat fRandomList;
for (uint i = 0; i < 10; i++) fRandomList.Add(Math.RandomFloat());
int lLargest = fRandomList.FindMax();
// fRandomList is assigned ten random floats, and the index of the largest is assigned to lLargest.
</syntaxhighlight>


====Sum()====
<syntaxhighlight lang="cpp">
int Sum()
float Sum()
double Sum()
bool Sum()
cVector Sum()
cPoint Sum()
</syntaxhighlight>
Returns the total of all the items in the list, added together. cListInt, cListFloat, cListDouble, cListBool, cListVector, and cListPoint only.
<br>For bools, this is returns true if there is a true - the same as logical OR. For vectors, this is equivalent to the combined path of each vector.
<syntaxhighlight lang="cpp">
Example 1:
int[] myArray = { 4, 8, 15, 16, 23, 42 };
cListInt listNumbers = cListInt(myArray);
int lTot = listNumbers.Sum();
// lTot becomes 108.

// Example 2:
cListPoint listGridSteps;
listGridSteps.Add(cPoint(1, 0));
listGridSteps.Add(cPoint(0, 1));
listGridSteps.Add(cPoint(0, 1));
listGridSteps.Add(cPoint(-1, 0));

cPoint vFinalPos = listGridSteps.Sum()
// This example imagines a puzzle involving steps on a grid. Each step is stored in a list of points and the final position is the sum of the list. (0,2 in this case.)
</syntaxhighlight>


====Average()====
<syntaxhighlight lang="cpp">
int Average()
float Average()
double Average()
bool Average()
cVector Average()
cPoint Average()
</syntaxhighlight>
Returns the mean average of all the items in the list. cListInt, cListFloat, cListDouble, cListBool, cListVector, cListPoint only.
<br>Note that for ints, the answer will be truncated. For bools, this basically returns true if there are more true items than false. For vectors this is like finding the "centre of balance" of some points.
<syntaxhighlight lang="cpp">
//Example 1:
int[] myArray = { 4, 8, 15, 16, 23, 42 };
cListInt listNumbers = cListInt(myArray);
int lAvg = listNumbers.Average();
// lAvg becomes 18.

// Example 2:
cListVector listGruntPos;
listGruntPos.Add(GetEntityPosVec("grunt1"));
listGruntPos.Add(GetEntityPosVec("grunt2"));
listGruntPos.Add(GetEntityPosVec("grunt3"));

SetEntityPosVec("orb", listGruntPos.Average());
// This example imagines an effect where an entity is positioned at the mid-point between 3 enemies.
</syntaxhighlight>


===Ordering lists===
cListBase and its derived classes provide the following methods for ordering items in the list:


====Swap()====
<syntaxhighlight lang="cpp">
bool Swap(uint aulA, uint aulB)
</syntaxhighlight>
Swaps the places of two items in the array. Returns false if either of the indeces are invalid, or true if the swap went ahead.
#''uint aulA'' - The index of the first item to be swapped.
#''uint aulB'' - The index of the second item to be swapped.
<syntaxhighlight lang="cpp">
// Example:
cListInt myListOfInts;
myListOfInts.Add(33);
myListOfInts.Add(11);
myListOfInts.Add(22);
myListOfInts.Add(44);
myListOfInts.Swap(0, 1);
myListOfInts.Swap(1, 2);
// After the two swaps, the list is in numerical order.
</syntaxhighlight>


====Sort()====
<syntaxhighlight lang="cpp">
void Sort(abDescending = false)
</syntaxhighlight>
Re-orders a list of numbers, to put them in numerical order, using bubble sort. Bubble sort is simple but inefficient, so sorting large lists very frequently will have a performance impact. cListInt, cListFloat, cListDouble, cListVector, cListPoint only.
<br>For vectors, the list will be sorted by square length.
#''bool abDescending (optional, default = false)'' - If true, the items will be ordered highest-to-lowest, otherwise lowest-to-highest.
<syntaxhighlight lang="cpp">
// Example:
cListInt myListOfInts;
myListOfInts.Add(33);
myListOfInts.Add(11);
myListOfInts.Add(22);
myListOfInts.Add(44);
myListOfInts.Sort();
// The list is now sorted into ascending numerical order.
myListOfInts.Sort(true);
// The list is now sorted into descending numerical order.
</syntaxhighlight>


====Shuffle()====
<syntaxhighlight lang="cpp">
void Shuffle()
</syntaxhighlight>
Changes the order of the list to a new, random order.
<syntaxhighlight lang="cpp">
// Example:
cListInt myListOfInts;
for (int i = 1; i <= 10; i++) myListOfInts.Add(i);
myListOfInts.Shuffle();
// The list now contains the numbers 1 to 10, in a random order with no repetition or missing numbers.
</syntaxhighlight>


===Converting lists===
cListBase and its derived classes provide the following methods for converting lists into other types of collections:


====ToArray()====
<syntaxhighlight lang="cpp">
int[] ToArray()
float[] ToArray()
double[] ToArray()
string[] ToArray()
cVector[] ToArray()
cPoint[] ToArray()
cRotator[] ToArray()
</syntaxhighlight>
Makes a new array, where each element in the array is a copy of an item from the list, and returns the array.


====ToStringArray()====
<syntaxhighlight lang="cpp">
string[] ToStringArray()
</syntaxhighlight>
Makes a new array, where each element in the array is a string version of each item in the list, and returns the array. (Uses the ToString() method of each node class.)


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Returns a new string representing the whole list, by getting string versions of each item in the list and joining them. (Uses the ToString() method of each node class, and the Join() method of cString.) (Coming soon, this entry is a placeholder!)


=Node classes=
The node classes contain the actual items in the lists and provide ways to access the data or links between nodes. Generally, it is '''not recommended''' to work with these directly, but use the functions of the list classes instead. More '''advanced users''' can extend the cListNodeBase class, or any class, and use it with cListGeneric.

Available node classes: <code>cListNodeInt</code>, <code>cListNodeFloat</code>, <code>cListNodeDouble</code>, <code>cListNodeBool</code>, <code>cListNodeString</code>, <code>cListNodeVector</code>, <code>cListNodePoint</code>, <code>cListRotator</code>


===Behaviours===
In the derived node classes, the default constructor creates a node with a default item, or an argument can be provided to set the initial value. For example, in the cListNodeInt class:
<syntaxhighlight lang="cpp">
cListNodeInt() 					// Creates an int node with value 0.
cListNodeInt(int alItem)		// Creates an int node with value alItem.
</syntaxhighlight>


===Properties===
All dervied node classes have one public property, named Item:


====Item====
<syntaxhighlight lang="cpp">
int Item
float Item
double Item
bool Item
string Item
cVector Item
cPoint Item
cRotator Item
</syntaxhighlight>
The property Item can get or set the data item in the node, using the appropriate type.


===Methods===


====SetNext()====
<syntaxhighlight lang="cpp">
void SetNext(cListNodeBase@ ahNext)
</syntaxhighlight>
Assigns a handle to the next node. To break the link, assign null or use ClearNext().
#''cListNodeBase@ ahNext'' - A handle to an instance of cListNodeBase.


====GetNext()====
<syntaxhighlight lang="cpp">
cListNodeBase@ GetNext()
</syntaxhighlight>
Returns the handle to the next node. If there isn't one, it will return null.


====ClearNext()====
<syntaxhighlight lang="cpp">
void ClearNext()
</syntaxhighlight>
Returns the handle to the next node. If there isn't one, it will return null.


====ToString()====
<syntaxhighlight lang="cpp">
string ToString()
</syntaxhighlight>
Resets the handle to the next node to null

__FORCETOC__