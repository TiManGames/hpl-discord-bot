= Lights =
Lights are used to light up the environment, and also to create the right mood for a level. 


The following are shared by the three kinds of lights.
General Parameters:
* '''Name''': Name for the light. Should be unique for all objects on the map.
* '''Position''': 3D vector indicating position in World-space
* '''Gobo''': 2D or CubeMap texture that the light will project onto surfaces. 2D for SpotLights, CubeMap for PointLights, BoxLights don't support Gobos)
* '''Falloff Map''': 1D texture that will map how the light gets attenuated.
* '''Diffuse color''': color of the light. Will tint everything in its boundaries with it.

Flicker Parameters:
* '''Active''': if the flickering for this light should be off or not.
* '''On Min Time''' / '''On Max Time''': time the light will be on will be picked everytime at random inside this range.
* '''On Sound''': sound that will be played when the light turns on.
* '''On PS''': particle system that will be spawned when the light turns on.
* '''Off Min Time''' / '''On Max Time''': time the light will be off, will be picked everytime at random inside this range.
* '''Off Sound''': sound that will be played when the light turns off.
* '''Off PS''': particle system that will be spawned when the light turns on.
* '''Off Radius''': radius the light will use when turned off.
* '''Off Color''': diffuse color the light will use when turned off.
* '''Fade Active''': if fading should be used.
* '''Fade On Min Time''' / '''On Max Time''': how long the light should be fading from off to on, randomly picked.
* '''Fade Off Min Time''' / '''Off Max Time''': how long the light should be fading from on to off, randomly picked.

Specific description and parameters for each type are next.
== Box Light ==
This type pretty much resembles an ambient light, but limited to a box in the world.
* '''Size''': 3D vector determining the size of the box in the world.
* '''Blend Function''': function that will determine how the illumination should apply. Available options are:
''' Replace: boxlights with this function enabled will impose their diffuse color over all their extension. If intersections are found, the one with highest priority will be used.
''' Add: boxlights with this function enabled will add their diffuse color on the place where they intersect.

== Point Light ==
This type matches an omnidirectional light, that is, a light that will light up its surroundings bounded by a sphere.
* '''Rotation''': 3D vector indicating the rotation of the light. Will not have much effect unless there is a gobo assigned to the light.
* '''Radius''': real value indicating the radius of the bounding sphere.

== Spot Light ==
* '''Rotation''': 3D vector indicating the rotation of the light. Will determine where the light points at.
* '''Cast Shadows''': sets if the light should affect shadow casters.
* '''Shadow Resolution''' 
* '''Shadows affect static'''
* '''Shadows affect dynamic'''
* '''Radius''': real value that will determine the distance that the spotlight will reach from its position.
* '''Near clip plane''': real value determining the distance between the light position and its frustum near plane.
* '''FOV''': real value determining the angle formed between the imaginary line going from the light position to its frustum 
* '''Aspect''': real value that determines the ratio FarClipPlane.width/FarClipPlane.height.
* '''Spot Falloff Map''': 1D texture that will map how the spot will attenuate over distance to the center.