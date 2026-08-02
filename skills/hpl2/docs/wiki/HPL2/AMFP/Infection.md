= Infection =

Infection is a mechanic which was cut from the final game, but it wasn't fully removed from it.

== Overview ==

The mechanic is quite similar to sanity from TDD. It is a meter which fills up in certain circumstances and plays visual and sound effects, which depend on the meter's value.

The infection meter is primarily changed by Infection areas. There are multiple of them placed in the game, but they all have been deactivated (which means that they can be restored). Infection areas can either increase or decrease infection. The only other functional method of changing infection (outside of scripting) is by standing in a Liquid area with the InfectionLevel variable set.

There are 4 levels of infection, all of which play increasingly noticeable screen effects (sepia, image trails, and radial blur).
{|class=wikitable
! Level !! Value Range (Check) !! Value (Set) !! Effects
|-
| 0 || 0 || 0 || 
|-
| 1 || 1-25 || 30 || 
|-
| 2 || 26-50 || 50 || 
|-
| 3 || 51-75 || 70 || Running disabled
|-
| 4 || 76-100 || 90 || Running disabled, -50% speed
|-
|}

Infection levels are calculated differently when going from level to value when checking infection level compared to setting infection level. Because of this quirk, setting infection to level 1 actually puts it in the level 2 range.

The meter goes down automatically after the player leaves the infected area. It will gradually fall to zero, unless the player has gathered above 80 infection; in that case, they will die after 2 seconds (unless "faux mode" is enabled). Interestingly, infection no longer decreases over time above 75, which leaves a tight margin of 5 infection points which won't kill the player but will not decrease.

Currently the only way to view the meter (aside from the audiovisual effects) is to press F1 in debug mode and turn on player info.

== Other evidence ==

According to these sections of '''game.cfg''', the infection system was a slightly modified version of the sanity mechanic.

<syntaxhighlight lang="xml">
<Infection
    EventsFile = "misc/main_sanity_events.cfg"

    MinTimeBetweenEvents = "300"
    MaxEventSanity = "65"

    MaxSanity_LongWait = "65"
    MaxSanity_MedWait = "45"
    MaxSanity_ShortWait = "25"

    TimeBetween_LongWait = "270"
    TimeBetween_MedWait = "180"
    TimeBetween_ShortWait = "80"

    MinExamineInfection = "50"

    InfectionArea_CheckTimeMin = "1"
    InfectionArea_CheckTimeMax = "2"
/>

<Player_Infection
	
	HitZoomInSpeed = "3.5"
	HitZoomOutSpeed = "0.6"
	HitZoomInFOVMul = "0.06"
	HitZoomInAspectMul = "0.15"
	
	InfectionDecreaseSpeed = "0.75"
	InfectionDecreaseLimitLevel = "3"
	
	InfectionVeryHighLimit = "80"
	InfectionEffectsStart = "35"
	
	InfectionWaveAlphaMul = "1"
	InfectionWaveSpeedMul = "1"
	
	CheckEnemyNearOrSeenInterval = "0.3"
	
	NearEnemyDecrease = "0.3"
	NearCritterDecrease = "0.1"
	
	StartSwayMinInfection = "15"
	SwayMaxSavedPositions = "30"
	
  HighInfectionLimitForDeathTimer = "80"
	TimeUntilDeathAtHighInfection = "2"
	
	LightLampMinInfectionIncrease = "0.1"
	LightLampMaxInfectionIncrease = "5"
  
  NumberOfInfectionLevels = "4"
  
  InfectionLevelOneSpeedMultiplier = "1.0"
  InfectionLevelTwoSpeedMultiplier = "1.0"
  InfectionLevelThreeSpeedMultiplier = "1.0"
  InfectionLevelFourSpeedMultiplier = "0.5"
  
  MaxInfectionLevelAtWhichPlayerCanRun = "2"
  
  GradientThresholdOffset = "1.1"
  GradientFallofExponent = "8.0"
  InfectionMapZoom = "0.95"
  
  VomitEffectDuration ="3.0"
  
  InfectionEffectGrowSpeed = "1"
/>
</syntaxhighlight>

However, in the game it uses a separate meter (which is visible via the aforementioned debug menu method).

The mentioned sanity events config file contains exactly the same data as TDD, which means that it wasn't used in the end.

Infection was supposed to increase near creatures, yet the config still has the old sanity property names:

<syntaxhighlight lang="xml">
    NearEnemyDecrease = "0.3"
    NearCritterDecrease = "0.1"
</syntaxhighlight>

The proper names for these are <code>NearEnemyIncrease</code> and <code>NearCritterIncrease</code>, although only CritterSpider increases infection, as a result of repurposed TDD code.

These property names were changed to replace "Sanity" with "Infection", but are entirely unused:

<syntaxhighlight lang="xml">
   LightLampMinInfectionIncrease = "0.1"
   LightLampMaxInfectionIncrease = "5"
</syntaxhighlight>

ManPig enemies have unused vomit animations and unused entity parameters, such as:

* DistanceAtWhichFleeingPigVomitAttacks
* MinimumTimeBetweenVomitAttacks
* MinTimeBeforeIgnoringPlayerAfterVomit

These seem to indicate that ManPigs would have attacked the player by vomiting, increasing the infection meter. The C++ source code shows that being vomited on would instantly set infection to the maximum level:

<syntaxhighlight lang="c++">
void cLuxPlayer::VomitDamage()
{
	mfTimeSinceLastVomit = 0.0f;

	/*if ( GetInfectionLevel() < 3 )
	{
		SetInfectionLevel( 3 );
	}
	else*/ if ( GetInfectionLevel() < 4 )
	{
		SetInfectionLevel( 4 );
	}
}
</syntaxhighlight>

A particle effect called "''ps_pig_attack_vomit''" was also left in the game.

== Missing parts ==

When the infection is used in-game by enabling the infection areas, some errors get printed to the log:

<pre>
ERROR: Could not load sound 'infection_loop_1'
ERROR: Can't find sound 'infection_loop_1'!
ERROR: Couldn't create SoundEntity 'infection_drain_high.snt'
ERROR: Couldn't create SoundEntity 'infection_heartbeat.snt'
WARNING: Could not find language file entry 'InfectionHigh'
ERROR: Couldn't create SoundEntity 'infection_pant.snt'
</pre>

This indicates that some of the sound entity (.snt) files are missing. They don't have the raw sound files (.ogg) either. However, they use the same naming scheme as TDD's sanity sounds, so it's likely that the TDD sounds were simply renamed.

Furthermore, the game displays an empty hint when player reaches level 4 of infection. Its lang file name is "InfectionHigh", which means that it can be remade and will display automatically. It is unknown if hints for other infection levels exist.