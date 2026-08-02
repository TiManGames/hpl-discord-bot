==Dealing with performance issues==

For players that aren't part of the mod creation process, turning off World Reflection or decreasing tiered settings can help increase performance. This article, however, is mostly meant for mod creators.

{{note|The game uses OpenGL, which allows for a cross-platform experience. However, the drivers for your graphics card may not be well optimized for OpenGL (since DirectX is more popular).}}

Normally when a map is well designed with the game's limitations in mind, the game does a good job of optimizing the environment through the use of occlusion culling. However, there may be times where it appears to take into consideration objects that are not visible to the player. If the level designer (or scripter) does not fully consider what can decrease performance, then there isn't much that the game can do to optimize. This article will touch on mostly (flawed) map and scripting design.

==Physics==

If there is an extreme performance drop at the start of a map, it is most likely caused by entities falling. For low-poly, non-organic types, this is usually not a concern, but for things like ragdolls the collision and gravity will drain performance.

==Make use of corridors==

Making use of corridors (i.e. mostly L-shaped) prevents the user from looking too far. This gives a chance for occlusion culling to work its magic. Even if you have doors blocking the way between each room, you should still consider corridors, as not all combinations of doors and door frames properly block out the user's view (though the player may not be able to physically see behind it).

==Make use of global fog==

You can activate the global fog in the level settings (Edit > Level settings > Fog) in the Level Editor. The global fog can be used to prevent the game from rendering objects beyond the ending point of the fog if culling is enabled for the global fog. For indoors it should be safe to allow for a longer end point, but use what you find best for your story.

The fog distance can be set so that the fog is never seen by the player, but it still culls a lot of the map. For example, if the longest corridor of the map is 12 meters long, setting the fog distance to 14 should work. Just in case the player sees it, however, set the fog's colour to black. This way, it will look like darkness.

==Reduce shadow-casting==

Using SpotLights with shadows is nice, but it can drain resources quite badly when overused. This will have a more adverse effect if the shadow quality is set to ''"high"'' on the SpotLights.

*Only use shadow-casting when you have a particular shadow that you want to cast. Otherwise, consider:
**Turning off the shadow cast altogether
**Switching to a PointLight.
*Disable "shadows affect dynamic" or "shadows affect static", if possible
*Keep the SpotLight "cone" as small as possible. Making it bigger ''will'' reduce performance even if the "cone" extends into empty space behind a wall. This seems to mainly apply to the aspect and FOV of the light, and less so to its radius.
*'''Avoid crossing over multiple SpotLights!'''

More can be read about optimizing lights [[Hpl2:Tutorials:level_editor:tutorial_2#Optimization|here]].

==Don't overuse lamps==

Having too many particle effects can reduce performance. This includes lamp entities - torches, candles or otherwise. If you require more light, consider simply adding dimmed box lights or point lights with a large radius or replacing the wall with a window, or have a sunroof, with a spot light shining through.

==Use fading on particle effects==

{{tip|If you are already using global fog culling, this step isn't necessary.}}

Having a big number of particle effects is doable in HPL2, but they need to fade them at distance. When placing a particle in the map, set its fade distance so that the player can't see it when they are too far. Depending on your map, you might want to fade in a bigger particle in the place of few small ones - this way something will be visible from distance, but still will increase performance.

The more particles there are in the map, the more this method will be effective. This allows the map to have a couple hundred particles in the map without any performance drop.

Example: Outside map with rain. There are two particles needed to be placed every couple meters: splashes on the ground and the actual rain. These particles need to cover the whole area, so there will be a lot of them and they'll decrease the performance significantly. However, the player will only see only the nearest 1-4 of these particles at once; therefore the rest of particles can fade at e.g. 10 meters from the player. See details about fading distances in particles [[HPL2/Particle Systems|here]].

==Avoid fast-looping timers==

Having a function loop too fast by use of timers can cause performance issues. Ideally, you'd want at least 20ms. That should be more than enough for any event.

'''IMPORTANT''': Timers in Amnesia (along with all forms of callbacks) are indexed in a 16-bit integer value for every session, meaning the maximum that can be triggered is about 65,535. If you use a lot of fast-looping timers, avoid exceeding this number of total calls. The fastest a timer can loop seems to be the tickrate of the game, which is 60/s (16ms), so by making a timer that loops this frequently, the index would run out of bounds in approximately 15 minutes. Once this limit has been reached, the game will crash with a BlackBox error upon the next loading screen. By shutting down and restarting the game, this index is refreshed, so it does not apply to save loads, only the current session. This is however not a solution to the issue and not a desirable effect to place upon the player.

==High-poly objects==

Using high-poly models seems to only affect map load times and does '''not''' seem to have any bearing on the actual performance. This was determined by using a model with a few thousand tris, which seems to prove that HPL has more trouble with object counts rather than poly counts.

However, having too many objects with high poly counts (for HPL that would be more than a few hundred polys) has been reported to make performance worse. There is an apparent limit as to how many objects with a high poly count that the player can have near them (although this may be dependent on hardware). 

''At a far enough distance they tend to be okay, but if the user gets at a certain distance from the objects, the game may decide to take them into consideration even if they are not visible to the user.''{{confirm}}