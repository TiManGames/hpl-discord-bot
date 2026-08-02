= Combine EditMode =
This mode is used to create combinations of static geometry (combos). 

{{warning|This feature is essentially useless - see the testing section. The following statement is kept for archival purposes.}}

It is useful for optimising, as it creates groups of static geometry that will be loaded by the engine as a whole.

[[File:combineeditmodewin.jpg|right]]
* '''Show all combos''': when enabled, all created combos will be displayed.
* '''Combinations''': this ComboBox is used to pick the currently edited combo.
* '''Add/Rem''' buttons: used to add a new combo / remove the currently edited combo.
* '''Add/Remove|Toggle''' checkboxes: this selects the way the current combo will be edited. Moving the mouse on the viewport will highlight geometry objects.
**'''Add''': will add geometry objects to the combo when clicking on them.
**'''Remove''': will remove geometry objects from the combo when clicking on them (and they were part of the combo).
**'''Toggle''': will switch clicked objects between added or not added.
* '''Color''': this determines the tint that the objects in a combo will display.
* '''Geometry objects list''': will display a list of all the object names added to the currently edited combo.
[[File:combine02.jpg]]

==Use cases==
Combos were used only in the following maps:
*02_entrance_hall.map
*20_sewer.map (the combo contains only a single object)
*22_torture_chancel.map
*27_torture_chancel_redux.map
Except for the sewer, all cases are the only combos in the entire map. They were used to combine big rooms.

==Testing==

The feature was tested using the '''02_entrance_hall.map''' and '''22_torture_chancel.map''' maps. Tests were done on a laptop which runs the base game in about 24 FPS. Frame time statistics were measured using the MapViewer with and without the big combos.

'''There was no improvement in performance.''' The only noticeable change was the number of objects loaded into the viewer (which decreased, most likely by the number of objects in the combo). 
The maps' load times didn't seem to be affected either. Considering the hardware used to run these tests, if the feature really improved performance, it would have been at least noticeable. 

'''The conclusion of the test is that the feature is essentially useless - at least until proven otherwise.'''