{{DISPLAYTITLE:custom_story_settings.cfg}}

This file is used to configure a custom story, and is found in the root of the custom story, residing inside a subfolder of <code>/custom_stories</code> in the Amnesia folder. This file only applies to TDD, not AMFP. Below are all configurable fields for this file and what each does. All of the fields are XML attributes applied to an element named <code>Main</code>.

{| class="wikitable"
!Field name
!Description
|-
|Name
|The name of your custom story as it will appear in the game menu.
|-
|Author
|Your name which appears under the title.
|-
|ImgFile
|The name of an image file to use as the background image in the game menu.
|-
|MapsFolder
|The folder where your levels are loaded from. Recommended to keep as "maps/".
|-
|StartMap
|The name of the first level that is loaded upon clicking "Start new game" in the main menu.
|-
|StartPos
|The internal name of a PlayerStart type area within the above level. If empty or not matching, the game will use the first alphabetical start area.
|-
|ExtraLangFilePrefix
|A prefix applied to all language files that this story uses. If unspecified, it falls back to the default "extra_". This field can include forward slashes to represent folders.
|-
|DefaultExtraLangFile
|The default language file to load. This is appended to the above prefix, making the default language file "extra_english.lang".
|-
|InitCfgFile
|A relative path to a main_init.cfg file. Specifying this field transforms the custom story into a full conversion mod.
|}

Note that the files are specified in relation to your mod folder. For example, <code>InitCfgFile="YourMod/config/main_init.cfg"</code> will not be found; instead, use <code>InitCfgFile="config/main_init.cfg"</code>.