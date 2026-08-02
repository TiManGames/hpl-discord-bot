{{DISPLAYTITLE:Changelog}}

This article is about Amnesia: The Dark Descent's updates, focusing on modding features.

Please note that updates tend to come to Steam first (before other platforms such as GOG) and reside in a beta branch before being pushed to the main one.

To check what version you're on, check the <code>hpl.log</code> file in your Documents folder. The engine version should be at the top of the file.

== Version 1.2 ==

{{stub}}

The Justine update.

* Added the Justine expansion which includes many new assets
* New script functions:
** <code>MovePlayerForward</code>
** <code>SetPlayerPermaDeathSound</code>

== Version 1.3 ==

This patch backports a bunch of features from Amnesia: The Machine For Pigs. Original, full patch notes are available [[HPL2/1.3 Changelog.txt|here]].

* Added support for FBX files and Collada models exported in 3D Max
* Added Enemy_ManPig entity type
* Added many new script functions (note: the list of the new functions in the [[HPL2/1.3 Changelog.txt|original changelog]] appears to be incomplete)
* F2 now does a quick map reload when Debug menu is loaded
* F3 now fast forwards (x3 speed) the game when Debug menu is loaded
* Errors and warnings can now be seen in-game by checking a box in the debug menu 

== Version 1.4 ==

{{stub}}

This update added Hard Mode and achievements.

* Added a free camera mode when Debug menu is loaded

== Version 1.5 ==

# Ability to provide a custom story with full conversion capabilities [[HPL2/custom_story_settings.cfg | by specifying InitCfgFile in custom_story_settings.cfg]]. In other words, Full Conversions can now be installed and launched like Custom Stories. This also means you will be able to convert your existing full conversion mods into "extended" custom stories, and upload them to the Steam Workshop.
# Fixed a crash caused by using more than 2<sup>16</sup> (65,535) callbacks (the crash happened when changing levels and would usually be caused by overusing Timers)
# Added an option to [[HPL2/menu.cfg | menu.cfg]] to allow specifying colors for menu text
# Added an option to [[HPL2/main_init.cfg | main_init.cfg]] to specify how custom stories are loaded within a custom story (including if they show up at all)
# New scripting features (documentation [[HPL2/Engine_Scripts | here]]):
## Added new script function: ShowScreenImage
## Added new script callback: OnUpdate
## Added <code>#include</code> for <code>.hps</code> files
# Fixed skybox cubemaps rendering incorrectly. This removes the need for players patching a dll manually.
# Fixed "Chest" type entity changing the required coin number to zero after loading a save, [[HPL2/Tutorials/Coin_chests | making thalers actually usable]]
# Added navigation of custom story menu with gamepad
# Restored old custom story window behaviour when loading an entry (the game now starts the story immediately like in the earlier game versions, instead of having to go through a pseudo-modded menu and starting the game there)
# Fixed option to specify multiple slime types for SlimeAreas (see [[HPL2/game.cfg#Slime |Slime section in <code>game.cfg</code>]]; slime types can be added and then selected in the entity editor for Slime type entities)
# Improved color picker in editors (this only applies to the Windows version; the editors will now be included in the game files by default. Community editors still can be used, but might be overwritten by updates if you don't rename the exe files; config files will be overwritten by the update or verifying game files, so the dark theme will be removed if you use it)
# "Other fixes"