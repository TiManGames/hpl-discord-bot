AMFP features two new area types which weren't present in TDD.

== ColorGrading ==

This is an area which applies color correction when entered. It will show up as yellow in the Level Editor.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| LookUpTable || File (.png) || || Determines the color grading map to use. Ready ones are located in <code>/textures/gradingmaps</code>.
|-
| FadeTime || Float || 1 || The time it takes for grading map to fade in/out after entering/leaving the area.
|-
|}

For information about creating custom grading textures, take a look at [[HPL2/AMFP/ColorGr|this guide]].

== Infection ==

This is a remnant of the unused infection system. It fills up the infection meter or lowers it when the player is inside the area. The area will show up as lime green in the Level Editor.

{|class=wikitable
|+Variables
! Name !! Type !! Default !! Description
|-
| IncrementSpeed || Float || 20 || The speed at which the infection level rises or lowers. Negative values are also valid, which will heal the player's infection.
|-
| InfectionLevelLowerBound || Float || -1 || Lowest infection level the area can heal to.
|-
| InfectionLevelUpperBound || Float || 1 || Highest infection level the area can damage to.<br>The player won't be able to get a higher infection level while standing in the area. Values 1-4. 4 and above lets the player die from infection. Infection drain is disabled when the bound has been hit and the player is still in the area.
|-
| TotalIncrementBound || Float || 0 || Disables the area when it has incremented the infection by a certain amount.
|-
| DisableOnLevelBoundHit || Bool || false || Disables the area if upper or lower level bound has been reached.
|-
|}

Note that infection is bounded to the ''middle'' of the level's range, not the true boundaries.

{|class=wikitable
! Level !! Middle Value
|-
| -1 || -37.5
|-
| 0 || 0
|-
| 1 || 12.5
|-
| 2 || 37.5
|-
| 3 || 62.5
|-
| 4 || 87.5
|-
|}

Using a negative bound value will never hit the level bound, so the area will not disable itself when DisableOnLevelBoundHit is true. This is because infection can never be less than 0.

For more information about the infection mechanic, see [[HPL2/AMFP/Infection| the Infection article]].