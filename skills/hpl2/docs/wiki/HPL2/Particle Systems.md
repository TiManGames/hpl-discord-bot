{{merge2|Hpl3:Tools:maineditors:common:particle_systems}}
= Particle Systems =

General Parameters:
* '''Name''': Name for the PS. Should be unique for all objects in map.
* '''Active'''
* '''Position''': 3D Vector storing the position in world.
* '''Rotation''': 3D Vector storing the rotation. Will only be used if the Particle System uses local coordinates.
* '''Scale'''

Specific Parameters:
* '''Particle System file''': .ps file to be spawned.
* '''Color''': color that the PS will be tinted with.
* '''Fade at distance''': if active, the particles will be faded if the camera is either too close or too far away according to the following parameters.
                              
<pre>                              Fading          Full Color           Fading
               <)          |----------|-------------------------|-----------|
             Camera     Min End    Min Start                 Max Start   Max End
</pre>             

*'''Min End''': close distance in which the particles will be completely faded out.
*'''Min Start''': close distance in which the particles will start to fade.
*'''Max Start''': far distance in which the particles will start to fade.
*'''Max End''': far distance in which the particles will be completely faded out.