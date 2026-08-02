= Sounds =

General Parameters:
* '''Name''': Name of the sound. Should be unique for all objects in map.
* '''Active'''
* '''Position''': 3D Vector storing the position in world.

Specific Parameters:
* '''Sound Entity file''': .snt file to be used by the sound.
* '''Use defaults''': if active, volume and Min/Max Distance values will be read from the .snt file.
* '''Min Distance''' / '''Max Distance''': Distances that will determine the space in which the sound will be faded out. Inside the radius defined by Min Distance the sound will have full volume.
* '''Volume''': value for full volume. Should be a real number in the [0, 1] range.

==Further reading==
See [[Hpl2:Tutorials:script:CustomSounds|this article]] to learn more about the .snt files which define sounds.