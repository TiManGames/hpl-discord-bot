{{DISPLAYTITLE:main_init.cfg}}
==ConfigFiles==
{| class="wikitable sortable" border="1"
!Parameter!!Functionality
|-
|Resources||File with all resource directories
|-
|Materials||The file with all physics materials
|-
|Game||Path for [[HPL2/TDD/game.cfg|game settings]]
|-
|Menu||Path for [[HPL2/TDD/menu.cfg|menu settings]]
|-
|PreMenu||Path for [[HPL2/TDD/pre_menu.cfg|pre-menu settings]]
|-
|Demo||Path for [[HPL2/TDD/demo.cfg|demo settings]]
|-
|DefaultMainSettings||Main game settings
|-
|DefaultMainSettingsMedium||"Medium" game settings
|-
|DefaultMainSettingsHigh||"High" game settings
|-
|DefaultUserSettings||Default user settings
|-
|DefaultUserKeys||Default user keys settings
|-
|DefaultBaseLanguage||The base language file. Should probably remains
|-
|DefaultGameLanguage||The default language file to load. Note that directory below is used to find this
|-
|}

==Directories==


{| class="wikitable sortable" border="1"
!Parameter!!Functionality
|-
|MainSaveFolder||This is very important to change. This is where the save games and user settings are stored
|-
|BaseLanguageFolder||Folder where the base language folder placed.
|-
|GameLanguageFolder||Folder where the game specific language files can be found
|-
|CustomStoryPath||Path for custom stories
|-
|}

==Variables==

{| class="wikitable sortable" border="1"
|-
|GameName||Name of the game window
|-
|AllowHardMode
|Whether to allow the game to prompt to user to start in "Normal" mode or "Hard" mode when they start a new game. Setting this to <code>false</code> (default) skips the prompt and starts in "Normal" mode. This is only applicable to TDD, not AMFP.
|-
|ShowLocalCustomStoriesOnly
|Whether to load custom stories only from the local "CustomStoryPath" or to load global custom stories (including Steam Workshop items).
|-
|}

==StartMap==

{| class="wikitable sortable" border="1"
!Parameter!!Functionality
|-
|File||The map where the game starts
|-
|Folder||The base folder for all maps
|-
|Pos||The start position of the player
|-
|}