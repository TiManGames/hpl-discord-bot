The array class is unique in the HPL3 API in that it uses what is called a generic template. What this means is, when you create an array, you need to specify what variable type the array will be holding. This ensures that all objects within a given array are guaranteed to be of that type, eliminating the need for redundant conversions and type checks.

==Fields==

array <typename T> has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || find || <syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || Returns the index of the first element in the array equal to the given value, or -1 if the value was not found. 
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || find || <syntaxhighlight lang="c++" inline>uint alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || Returns the index of the first element in the array equal to the given value, or -1 if the value was not found. Only checks elements starting at the given index. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || insertAt || <syntaxhighlight lang="c++" inline>uint alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> ||  Inserts the value at the specified index, shifting existing values to the right. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || insertBack || <syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || ''%%'''Using this function results in an error.'''%%'' 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || insertLast || <syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || Inserts the value into a new index at the end of the array.  
|-
| <syntaxhighlight lang="c++" inline>uint</syntaxhighlight> || length ||   || Returns the number of elements within the array. 
|- 
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || pop_back ||   || Removes the element at the end of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || pop_front ||   || Removes the element at the beginning of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || push_back || <syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || Inserts the given value at the end of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || push_front || <syntaxhighlight lang="c++" inline>const T &in aValue</syntaxhighlight> || Inserts the given value at the beginning of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || removeAt || <syntaxhighlight lang="c++" inline>uint alIndex</syntaxhighlight> || Removes the value at the specified index, shifting values after the index to the left. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || removeFirst ||   || Removes the value at the beginning of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || removeLast ||   || Removes the value at the end of the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || resize || <syntaxhighlight lang="c++" inline>uint alSize</syntaxhighlight> || Resizes the array to the specified size, creating or removing elements as necessary. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || reverse ||   || Reverses the order of elements in the array. 
|-
| <syntaxhighlight lang="c++" inline>uint</syntaxhighlight> || size ||   || Returns the number of elements within the array. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || sortAsc ||   || Sorts all elements in the array into ascending order. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || sortAsc || <syntaxhighlight lang="c++" inline>uint alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alLength</syntaxhighlight> || Sorts elements in the array into ascending order, affecting only the subsection at the given index to the given length. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || sortDesc ||   || Sorts all elements in the array into descending order. 
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || sortDesc || <syntaxhighlight lang="c++" inline>uint alIndex</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alLength</syntaxhighlight> || Sorts elements in the array into descending order, affecting only the subsection at the given index to the given length. 
|}

==Remarks==

To declare an array, you put the type the array will be holding between a less than operator ( < ) and a greater than operator ( > ).

<syntaxhighlight lang="c++">// An array of integers
array<int> mvIntegerArray;

// An array of floats
array<float> mvFloatArray;

// An array of strings
array<tString> mvStringArray;</syntaxhighlight>

There are a number of ways to add values to your array. The simplest way is to use the push_back function. This automatically puts the given value at the end of the array.

<syntaxhighlight lang="c++">mvIntegerArray.push_back(5);
mvIntegerArray.push_back(2);
mvIntegerArray.push_back(11);

// The contents of mvIntegerArray: { 5, 2, 11 }</syntaxhighlight>

Another common way is to assign a value to an existing index within the array, using the square bracket ( [ ] ) syntax. (Indeces start at 0.)

<syntaxhighlight lang="c++">mvIntegerArray[0] = 29;
mvIntegerArray[2] = -12;

// The contents of mvIntegerArray: { 29, 2, -12 }</syntaxhighlight>

To retrieve an element from within the array, use the square bracket ([]) syntax with an integer index.

<syntaxhighlight lang="c++">int lIntValue = mvIntegerArray[0];

// The value of lIntvalue: 29</syntaxhighlight>

Trying to assign a value to or retrieve a value from an index that does not exist in the array will result in an error.

<syntaxhighlight lang="c++">// If the index at [100] doesn't exist, both of these lines
// of code will throw an error.
mvIntegerArray[100] = 5;
int lIntValue = mvIntegerArray[100];

// However, the following code will work just fine
mvIntegerArray.resize(101);
mvIntegerArray[100] = 5;
int lIntValue = mvIntegerArray[100];</syntaxhighlight>

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__