= Particle Editor =
The Particle Editor is used to create Particle Systems to be used in maps or entities.

== Foreword ==

=== Min and Max values ===
A lot of values in this editor have both a min and max. This means that when the value is set to a particle a value between min and max is randomly selected.

=== Fading ===
Fading can be used to fade in and/or out some property like size or colour. The fading works like this. There are three relative values that are relative to the start value of the particle. The names for these values are start, middle and end and are used in that order. There are also two times that are relative to the life of the particle, for example if a particle has 2 seconds life time and the middle time is 0.5 then this occurs after 1 second (0.5 * 2). The first time is called ''start time'' and this is when the start value is entirely faded from start to middle. The middle length is how long the middle value lasts. After middle time + middle length the middle value is faded to the end value.

== Overview ==
When run, the first screen we get to see is like this:

[[File:particleeditoroverview.jpg]]

Each part of the screen has a specific function described in the following sections.

== Main Menu ==
This is a menu bar, just like in any other windowed application. Available options for this particular editor are as follows:

* '''File'''
**'''New''': This command will reset the Particle System to an empty one, and the editor to a default state as well.
**'''Open''': This will load a Particle System file (.ps) in the editor.
**'''Save''': Use this to save your work to a file in disk. Will ask for a file name when no file has been created.
**'''Save As''': This will also save your work, but will ask for a file name everytime it is called.
**'''Open Recent''': This will show a list of up to 10 files that have been recently loaded or saved.
**'''Quit''': This will exit the program.
* '''Edit'''
* '''View'''

== Emitter management controls ==
These controls help to add, duplicate and remove particle emitters. The Add button will create a new particle emitter and select it (i.e. pick it in the combo box), the Copy button will create a copy emitter out of the selected one, and the Delete button will delete the selected emitter.

When a particle emitter is selected, all its parameters will be shown in the tab frame below.

== Emitter parameters tab frame ==

=== General ===

* '''Name''': The name of the emitter currently selected.
* '''Max Particles''': The maximum number of particles that can be alive at once. When this limit is reached no more particles will be created.
* '''Particles per Second''': The number of particles per second that will be created.
* '''Start time offset''': Time offset in seconds before the emitter starts.
* '''Respawn dead particles''': If dead particles should be respawned.{{clarify}} ''Used for looping particle entities.''{{confirm}}
* '''Warm up time''': Time that the emitter gets to warm up{{clarify}}. This is useful when doing a a stream of something (like a fire or waterfall) and the particles should not be shown “starting up”{{clarify}}.
* '''Pause''': A pause is a break during which no particles are created. Particles are updated though.
**'''Pause Length''': The length of the pauses, 0 and 0 means that there are no pauses.
**'''Pause Interval''': The length between pauses. 0 and 0 means that there are no pauses.
* '''Offset position''': How the emitter is offset relative to its starting position.
* '''Offset angle''': How the particle system is offset relative to its start angles.


=== Start ===

* '''Start type''': Sets what method to use to generate the start position of the particles in the emitter.
**'''Box start''': A box start is created using an x, y and z min and max value. The collection of particles will get the shape of a box.
**'''Sphere start''': The positions are generated using an angle interval and the min and max value for the radius. You can think of it like this; an arrow start pointing up. This arrow is then rotated around the X axis (red) using a value between min and max. After that the arrow is rotated by the y axis (blue). The arrow will now be pointing in a specific direction and in this direction a position is created at a distance from center according to a number generated from min/max radius.
[[File:spherestart.jpg]]

=== Movement ===

* '''Velocity type''': The way in which the starting velocity is generated.
**'''Box velocity''': The same as box start but with velocity instead.
**'''Sphere Velocity''': The same as sphere start but with velocity instead.
* '''Coord system''': The way in which the particles are related to the world and the object the system is attached to (if any). In '''"world"''' all the particles have an individual postion that changes depending on the parent object. In '''"local"''' the particle position is dependant on the parent object, so that the particle moves and turns along with the parent. ''If set to "world", the particle system will always point in the same direction and can never be changed, regardless of how it is rotated! ''{{confirm}}
* '''Uses direction''': If the direction of the start velocity depends on the way the particle system is “facing” (with no rotation it faces up). This is useful for particle systems like steam where the particle system has a direction.
* '''Gravity Type''': The type of gravity being applied to the particles.
**'''None''': No gravity it applied.
**'''Vector''': The gravity acceleration is applied.
**'''Centre''': The particles are drawn towards the centre of the particle system with Gravity Acceleration Y as acceleration.
* '''Gravity Acceleration''': Used differently according by the gravity type.
* '''Acceleration''': Acceleration applied to all bodies. '' Note: This applies to both box and sphere type velocity. It is also better to use this in place of the vector gravity type as it is more detailed, but does not cover sphere based acceleration. ''{{confirm}}
* '''Speed multiplier''': How much the speed is multiplied by each second. For example, 0.5 means that the speed is halfed each second. 2 means it is doubled each second.
* '''Maximum speed''': The maximum speed that the particles can reach. 

''Note: The speed of box and sphere velocity is only the initial velocity which lasts about a 10th of a second. The maximum speed of acceleration is the speed that is achieved afterward. If the initial speed is much higher than the acceleration max speed, the particle will start out very quick and then slow down instantaneously to the accel max speed, which can be used as a good effect. ''{{confirm}}

=== Rendering ===

* '''Draw Type''': The different ways in which the particles can be draw to screen.
**'''Point''': The particle is a point and will always be pointing towards the camera.
**'''Line''': The particle is aligned in the direction in which the particle is travelling.
**'''Axis''': The particle rotates towards the camera, but only on a single axis.
* '''Multiply RGB with Alpha''': Some materials does not fade out the image when alpha is decreased (for example Additive) in this case it can be good to check this.
* '''Size''': The size of the particle. This is the value used in the fading.
* '''Size Fading''': See 1.2 for instructions on fading.

=== Color ===

'''NOTE''': all of the color channels have values from 0 -1.

* '''Color''': This sets the color of the particle.
* '''Fading''': Settings for fading the color. See foreword for fading.

=== Life ===

* '''Lifespan''': Time in seconds that the particle will live.
* '''Death Type''': type of death for the particles. Currently only age can be selected.
* '''PS created at death''': Particle system to be spawned when the particle dies. Could be used to loop particle creations.

=== Material ===

* '''File''': The material file to use.
* '''Number of Files''':The number of material files used. Normally this should just be one, but in some cases an animation needed is spread out over several material files. When using several material files these must be name “[name]01.mat”, “[name]02.mat”, etc. Also the file text must be just “[name]”. So if the files are called “test01.mat”, “test02.mat”, etc it must say “test” in the file field.
* '''Animation length''': The number of seconds the animation lasts, if the particle lives longer than this time, the animation is looped.
* '''Sub Division''': This is used in order to animate individual particles (when using several files, the material for all particles are changed at the same time). It can also be used for more variety among particles. The sub divisoion is set up by specifying how the texture is to be split and then setting how the particles will be assigned to a sub division. The splitting is like this:

[[File:subdiv.jpg|thumb|left|Particles will be selected from the inside of the purple rectangles.]]{{clr}}

* '''Sub Division Amount''': The number of divisions on each axis.
* '''Sub Division Type''': How the subdivisions are assigned to the particles.
**'''Random''': A division is randomly picked.
**'''Animation''': During the life time of an object it goes through all the subdivisions, starting in the upper left corning and ending in the lower right.

=== Rotation ===
* '''Use Particle Spinning''': If enabled, particles will rotate around themselves.
* '''Spin Type''': Type for the particle spinning. Can be:
**'''Constant''': A value will be picked from the spin velocity range at random.
**'''Movement''': The rotation will be linked to how fast the particle is moving.
* '''Particle spin velocity range (rad/s)''': Spin velocity for constant spin type. About 6.283 radians is a single spin.
* '''Use Revolution''': If enabled, particles will rotate around some axis.
* '''Revolution speed''': 3D Vector that will determine the axis and rotation speed for particles.

=== Collision ===

* '''Use Collision''': If collision detection should be used.
* '''Update Rate''': How many times a second collision is checked for each particle.
* '''Maximum Collisions''': The maximum number of collisions ''a particle''{{confirm}} can have before dying.
* '''Bounce Amount''': How much of the speed is retained when bouncing. 0.5 means half of the speed. 2 means that the speed doubles when bouncing.

===Beam Specific===

No functions exist here, probably a scrapped functionality. 

== Preview viewport ==
{{stub}}