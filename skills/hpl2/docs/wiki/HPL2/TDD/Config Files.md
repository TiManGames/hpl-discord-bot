==Config Files==

{{todo|Move this to a more appropriate link}}

What follows is a list of all the config files that are a part of HPL2. All of them can be used in a [[HPL2/TDD/Full Conversion Mod|full conversion]] to alter the game.

==Main configuration==
The following config files are a part of the main config folder.
{| class="wikitable" style="margin:auto;"
|-
|'''[[HPL2/TDD/main init.cfg|<center>Main init</center>]]'''
|Handles all of the major settings for the game, like setting up the name of game, save directory and what config files to use.
|-
|'''[[HPL2/TDD/game.cfg|<center>Game</center>]]'''
|Contains all game related settings.
|-
|'''[[HPL2/TDD/menu.cfg|<center>Menu</center>]]'''
|All the settings related to the menu.
|-
|'''[[HPL2/TDD/pre menu.cfg|<center>Pre-menu</center>]]'''
|Contains all of the settings for the pre-menu (that pops up before the menu).
|-
|'''[[HPL2/TDD/demo.cfg|<center>Demo</center>]]'''
|Demo specific settings. Only loaded if the demo version of the exe is used.
|}
==Resources==
<code>resources.cfg</code> is a file which lists all of the folders that Amnesia.exe searches for assets. In case of file name collisions, they are prioritised in the order of this list.

{{idea|This file can be used to overwrite files during runtime without changing them. The files need to be copied into a new folder and altered there. Then, the folder has to be put on top of the list.}}

==Materials==
<code>materials.cfg</code> is a file which lists all physical materials available in the game and the editors. Each material in the file contains its physics parameters, the sounds it makes (steps, impact, scrape, sometimes also roll) and the particles produced when the material is hit.

{{idea|This file can be used to create custom surface materials (Machine For Pigs added a lot of them) or alter the step sounds (this was done in Justine).}}

==Insanity events==
<code>misc/main_sanity_events.cfg</code> contains the insanity events which can occur in the game. They can be organised into categories, and custom ones can be made.

{{idea|This can be used as a 2D overlay for displaying images in the game.}}

==User==
These files are generated in the documents folder of the OS user. They are generated in subfolders for each full conversion (including the main game).

*<code>main_settings.cfg</code> - Stores graphical settings and other settings pertaining to the entire program.
*<code>user_keys.cfg</code> - Stores control settings, per user profile
*<code>user_settings.cfg</code> - Stores profile-specific things

See [[HPL2/Development_Environment|how to set up development environment]] for some additional information.

==Editor==
The editors come with their own set of config files. Asides from e.g. custom colors, altering these doesn't have much purpose, as doing so won't work in the game (e.g. Area types are hardcoded into the executable).

==Launcher==
Default settings and a list of compatible graphics cards. Altering these is advised against.