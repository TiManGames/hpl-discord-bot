= Entity Preview window =
When you have your entity all set up with bodies, joints and such, it is time to test how it would look in the game. 
[[File:preview00.jpg|thumb|left|The model editor before entering the preview window.]]{{clr}}
That's what the Entity Preview window is for. In this window you will be able to see how the entity would look ingame, meaning it will be physically simulated. To start the preview, just press the "Toggle preview" button (the one with cogwheels) in lower toolbar.

[[File:preview01.jpg |left]]{{clr}}
The window behaves just like a regular viewport. You can move and orbit the camera around the model the same way. Added to this, you can use the mouse pointer to actually "pick" and drag physical objects in the scene. 

There are some parameters on the simulation that are changeable in real time, as follows:
* '''Show physics debug info''': Physical bodies will be drawn as wireframe objects, and joints will be drawn as green spheres.
* '''Show skeleton''': If a skeleton is present, this option will draw it as red lines for bones and spheres for joints.
* '''Animation''': With this control you can select the animation to play, if there is any available. When selected, it will be looped on and on.
* '''Main Light''' & '''Back Light''': Toggle lights on the scene.
* '''Buoyancy''': Toggles buoyancy active, along with a plane representing a liquid surface.
* '''B. Density''': Buoyancy density.
* '''S. Height''': Height of the liquid surface.
* '''B. A. viscosity''': Buoyancy angular viscosity.
* '''B. L. viscosity''': Buoyancy linear viscosity.
<gallery mode="nolines" widths="350" heights="250">
preview02.jpg|With hysics debug enabled
preview03.jpg|With buoyancy debug enabled
</gallery>