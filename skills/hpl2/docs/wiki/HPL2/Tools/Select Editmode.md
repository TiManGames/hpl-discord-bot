= Select EditMode =

This mode is one of the most important in the Editors, as it is used to actually edit any property any object can have. It is controlled by the mouse and the LeftControl and LeftShift keys, and it works as follows:
* Doing a single click with the left mouse button on a viewport will try a single object selection. If an object is found under the mouse pointer it will be selected. Clicking further will cycle through entities right behind the first selected one.

* Clicking and holding the left mouse button while dragging it around on the viewport will activate box selection. This will select every object that intersects the box after the user has released the button.

* Holding LeftShift while doing the above will toggle the selection state for affected objects, and holding LeftControl will always deselect them.

Once an object or group is selected, it will look somehow highlighted, the transform tool will appear on it, and its property window (EditBox) window, if any, will pop up below the EditMode window. 

== The Transform tool ==

The transform tool is pretty similar to what is used in any 3D editor, and it will colored red for the X axis, green for the Y axis and blue for the Z axis. Depending on what one can do to the object, the transform tool can be switched to up to three modes:
* '''Translation''': this mode is used to position objects in the map space. 

<gallery mode="nolines" widths="250" heights="250">
translate01.jpg|
translate01.jpg|
</gallery>

* '''Rotation''': this modifies the object's current rotation.

<gallery mode="nolines" widths="250" heights="250">
rotate01.jpg|
rotate02.jpg|
</gallery>

* '''Scale''': used to change the objects size.

<gallery mode="nolines" widths="250" heights="250">
scale01.jpg|
scale02.jpg|
</gallery>

'''Note''': if the 'D' key is pressed while doing a transformation, a duplicate will be created.

== EditBoxes ==
An EditBox displays every property and value that is editable for a particular object. Each kind of object has different properties, so they will pop up different kinds of EditBoxes. When a single object is selected, the EditBox will refer exclusively to it. If the selection is heterogeneous, the EditBox will show general properties for groups (if available), while if it is conformed by objects of the same type, exclusive properties will appear (if available). Currently, edition of multiple objects is pretty limited.

More on particular EditBoxes on the description for each Object type.