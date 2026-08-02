= Billboards =


General Parameters:
* '''Name''': Name for the billboard. Should be unique for all objects in map.
* '''Position''': 3D Vector storing the position in world.
* '''Rotation''': 3D Vector storting the rotation. Only useful when the billboard type is Axis or FixedAxis.

Specific Parameters:
* '''Material File''': material file for the billboard.
* '''Billboard Type''': type for the billboard. Available types are:
''' Point: this type will make the billboard always face the camera.
''' Axis: this will make the billboard be aligned to an axis, but will still face the camera to some extent.
''' FixedAxis: this will make the billboard be aligned to an axis, and no facing to camera will be applied.
* '''Offset'''
* '''Size''': 2D Vector storing size for the billboard, as in width-height.
* '''Color''': Color that the material will be tinted with.
* '''Connected light name''': when a billboard is connected to a light, they will share color at all times. Useful when doing halos for lights, it will synchronize any changes in light color to the billboard. Only one light can be connected at a time. To connect a light, just press the button and then select a light in the viewport.
* '''Halo''': Set if the billboard should work as a halo. When active, the billboard will be faded out when going off screen. The effect can be tweaked using the Halo Source Size. Billboard will have no fading when this box lies completely inside the screen.
* '''Halo Source Size''': 3D Vector storing the size for the halo box. Will be displayed as a green wireframe box.