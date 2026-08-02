{{constructionNotice|This page is still being written and is currently incomplete}}

Since version 1.5 of Amnesia The Dark Descent (release in July 2023), a new field has been added to the custom_story_settings.cfg file. This field allows you to specify a main_init.cfg file, which is the main file that [[HPL2/TDD/Full Conversion Mod|full conversion mods]] use to launch. This means you can now create full conversion mods from a custom story, and they will still show up in the main game menu. This unlocks all the power of full conversion mods, while maintaining most of the simplicity of a custom story.

==Setup==
If you have a custom story that you want to transform into a full conversion mod, start by adding the new field to your custom_story_settings.cfg:
<syntaxhighlight lang="xml">
<Main
  Name = "My story"
  Author = "Me"

  ...

  InitCfgFile = "config/main_init.cfg"
/>
</syntaxhighlight>
Specifying this field will disable <code>MapsFolder</code>, <code>StartMap</code> and <code>StartPos</code>, as these fields will instead be read from the main_init.cfg file. It will also disable <code>ExtraLangFilePrefix</code> and <code>DefaultExtraLangFile</code>, as the game will instead use the primary lang files specified in main_init.cfg. The description of your custom story will instead be located in said lang file, in the <code>CustomStoryMain</code> category.

From this point on, you can follow tutorials for full conversion mods. Your mod folder will remain <code>custom_stories/<your story></code>. For example, if your story folder is named "Ascent", your main init file should exist at <code>custom_stories/Ascent/config/main_init.cfg</code> (reflecting what you put in the <code>InitCfgFile</code> above). Create the "config" folder and the "main_init.cfg" file. The contents of your main_init.cfg file can start as such (Remember to change the references to "Ascent" to reflect your own mod, such as MainSaveFolder and GameName):

<syntaxhighlight lang="xml">
<ConfigFiles
	Resources = "resources.cfg"
	Materials = "materials.cfg"

	Game	= "config/game.cfg"
	Menu	= "config/menu.cfg"
	PreMenu	= "config/pre_menu.cfg"
	Demo	= "config/demo.cfg"
	
	DefaultMainSettings	= "config/default_main_settings.cfg"
	DefaultMainSettingsSDL2	= "config/default_main_settings_sdl2.cfg"

	DefaultMainSettingsLow		= "launcher/default_main_settings_low.cfg"
	DefaultMainSettingsMedium	= "launcher/default_main_settings_medium.cfg"
	DefaultMainSettingsHigh		= "launcher/default_main_settings_high.cfg"

	DefaultUserSettings	= "config/default_user_settings.cfg"
	DefaultUserKeys		= "config/default_user_keys.cfg"
	DefaultUserKeysSDL2	= "config/default_user_keys_sdl2.cfg"
	
	DefaultBaseLanguage	= "base_english.lang"
	DefaultGameLanguage	= "english.lang"
/>

<Directories
	MainSaveFolder 	 	 = "Ascent"
	
	BaseLanguageFolder 	 = "config/"
	GameLanguageFolder 	 = "config/lang_main/"
	
	CustomStoryPath 	 = "custom_stories"
/>

<Variables
	GameName = "Ascent, an Amnesia mod"
/>

<StartMap
	File	= "level_01.map"
	Folder	= "maps/"
	Pos	= "PlayerStartArea_1"
/>
</syntaxhighlight>

Paths specified in this file are relative paths starting from the custom story's main folder, eg: "custom_stories/Ascent". For example, leaving Resources as "resources.cfg" means it should exist at "custom_stories/Ascent/resources.cfg". If a file is not found here, it will fall back to using the file specified in the base game main_init.cfg.

{{note|resources.cfg is required for your full conversion to load '''any''' files contained in your custom story's folder, including maps!}}
Simply copying the original resources.cfg and placing it in your custom story's folder is sufficient. Unlike the base game, full conversions will not automatically read from the "lang" folder, so you will have to add it to resources.cfg. Your custom story can now override base game assets with its own.

==Additional notes==

When it comes to file loading, lang files are a special case; they operate on a per-entry basis, meaning any entries not found in your custom story's lang file will load from the base game's lang file instead. This means you can override any existing lang entry as well as add your own, but you can also use any entry from the base game without needing to add it to your file.

Because of the way total conversions work, custom stories cannot load the Justine config and lang files (referred to as "ptest" internally). For example, attempting to specify "ptest_materials.cfg" in your main_init.cfg will not work. Instead, you will have to copy the file to your custom story's folder, which you can rename to materials.cfg because full conversions can load only one config. Similarly, a full conversion won't be able to load any files from <code>config/lang_ptest</code>, so you will need to copy over any entries to your own lang file. However, Justine assets can be loaded without issue, as they exist in subfolders that are loaded by the base resources.cfg.