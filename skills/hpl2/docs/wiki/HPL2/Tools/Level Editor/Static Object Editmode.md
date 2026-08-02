=StaticObject EditMode=


Static Objects are one of the pillars of level building in the LevelEditor. An actual complete map file share in static objects is around 80%. A proper set of pieces will allow you to create all sorts of rooms and ambients.


The creation window is a bit more complex than the ones we have seen previously. In detail, its composed of:


''' The Set picker: this ComboBox is used to select the current piece set. Sets should map to directories under the static_objects directory in redist.'''


''' The Object picker: this ListBox will show all objects inside the set picked previously. Category headers will show grayed out. Clicking on an entry will select a static object file to be used in following placements.'''


''' Thumbnail: shows a little picture so you can see how the object looks like.'''
''' BB Size: size of the objects bounding box (when scale is (1,1,1))'''
''' Polygon count: number of triangles of the object model.'''


''' Scale settings: this sets the scale for the object on creation. Can be set to a fixed or a random value, the latter defined by a range given by both scale inputs, min and max.'''


''' Rotation settings: this sets the rotation for the object on creation. Can be set to a fixed or a random value, the latter defined by a range given by both rotate inputs, min and max.'''


More on Static Objects [[HPL2/Static Objects|here]].