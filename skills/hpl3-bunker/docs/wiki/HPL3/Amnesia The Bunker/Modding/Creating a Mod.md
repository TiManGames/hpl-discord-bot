{{shortPageTitle}}

This article describes in detail how to create, setup and structure your mod.<br>
'''Important: Make sure you have a folder named <code>mods</code> in your game directory. If you do not have it, then just create an empty folder and name it <code>mods</code>.'''

{{tip|The game offers a basic example mod: <code>[[HPL3/Amnesia:_The Bunker/Modding/MinimalCustomMapMod|MinimalCustomMapMod]]</code>. You can copy it or use it as reference for creating your own mod.}}

{{Tip|It is recommended to use the [https://wiki.frictionalgames.com/page/HPL3/Third_Party_Tools/HPL3_Mod_Manager HPL3 Mod Manager] to configure everything that is listed on this page.}}

==Mod Types==
Amnesia: The Bunker has one mod type called a Stand-Alone mod. 

===Stand-Alone Mod===
A Stand-Alone mod describes a mod of any scale: From a simple mod with a few maps to an extensive game modification of custom assets and custom scripts.

==Mod Structure==
A typical mod structure (folders and files) may look like this:<syntaxhighlight lang="css">
modFolder/
├── config/
│   ├── lang/
│   │   ├── english.lang
│   ├── main_init.cfg
├── maps/
├── entry.hpc
├── resources.cfg
</syntaxhighlight> 
The mod structure may change and have more or less files, depends on your mod type, but '''it's important to have entry.hpc and resources.cfg for every mod.'''

==Mod Entry File==
When creating a mod, be it a simple add-on or a fully fledged total conversion, an entry file is needed so that the mod can be listed by the custom stories menu or simply be started by the game.
This means that an XML file with name <code>entry.hpc</code> needs to be created in the root directory of the mod, and its contents will depend on what kind of mod you are creating.

===Setting up the Entry File===
{{tip|It is recommended to copy one the sample mod (MinimalCustomMap) provided in this page and edit the files, instead of doing this manually. This way, you won't miss anything by mistake.}}

#Create a file named <code>entry.hpc</code> in your mod's root folder.
#Paste the following content into the file and save:<syntaxhighlight lang="xml">
<?xml version="1.0" encoding="UTF-8"?>
<Content Version="1.0"
	Type="StandAlone"
	Title="Your mod name here"
	Author="Your name here"
	Description_english="Mod description here"
	
	LauncherPic="LauncherPic.png"
	InitCfg="config/main_init.cfg"
/>
</syntaxhighlight>

===Common Attributes===
Any valid <code>entry.hpc</code> file (like the one shown above), will have at least the following attributes:
{| class="wikitable"
|+
|-
|Version
|The version for the mod, since the mod might get updated in the future.
|-
|Type
|The type for the content the mod is offering. Possible is<code>"StandAlone"</code>.
|-
|Title
|This sets the title for the mod. It should not be longer than 128 characters, especially if the mod is to be uploaded to the Steam Workshop.
|-
|Author
|The creator(s) of the mod. This will be shown below the title on the info column in the custom stories menu.
|-
|Description_English
|The description of the mod. Should not exceed 8000 characters for the same reason as the title.
For localizing descriptions, add a translated entry for the target language under the Description_(name of target language) parameter.
|-
|LauncherPic
|The file to be used as a thumbnail picture for the Custom Story menu page.
|-
|InitCfg
|The relative path to the file which information when initializing the mod. The default value is <code>"config/main_init.cfg"</code> and usually shouldn't be changed.
|}
{{Tip|Unsure about how to label your mod versions? Read about semantic versioning [https://semver.org/ here]}}

===Special Attributes===
There are special attributes which can be added to a mod entry file in order to enable optional functionalities:

{| class="wikitable"
|+
|UID
|A string in the form <code>"provider_name.mod_name"</code>. This is used so other mods can reference your mod as a [[HPL3/Modding/Mod_Dependencies|Mod Dependency]]
|-
|Dependencies
|A list of UIDs separated by commas. The resources in these mods will be available to the game when the current mod is running.
|}

==Mod Configuration Files==
In addition to the mod entry file, the mod needs to be correctly configured in order to load resources such as maps, script, sounds, sounds, etc (As seen in the Mod Structure diagram).

Read the following articles in order to understand how to set up and configure them:

*[[HPL3/Resources Configuration|Resources Configuration]]
*[[HPL3/Launch Configuration|Launch Configuration]]
*[[HPL3/Language Configuration|Language Configuration]]

It is recommended to copy the files from the mods provided with the game and modify them, instead of creating them on your own.

==Running the Mod==
There are two different ways to run a mod:

1.<u>Through the Custom Story menu page in Main menu:</u> This method should generally be used when testing the final version of your mod. After selecting the mod, the game will restart and will load the mod.
[[File:The Bunker-custom-stories-emnu.jpg|thumb|left|Custom Stories menu.]] {{clr}}

2.<u>Command Line:</u> To run a mod directly with dev features enabled, you only need to run the game executable passing the "-mod" argument followed by word <code>local:</code> and then immediately the name of the mod folder. This method should be used throughout the development of your mod.

Example:<syntaxhighlight lang="bash">
AmnesiaTheBunker_NoSteam.exe -mod local:my_mod
</syntaxhighlight>
There are more arguments which can be added to the command line. It is recommended to create a <code>.bat</code> file which will launch the mod.

{{warning|If you do not run the game with <code>-mod</code> command and your mod uses custom assets, you won't be able to see the assets in-game!}}

''Main article: [[HPL3/Amnesia: The Bunker/Developer Commands|Developer Commands]]''

==What's Next==
Now that the mod is set up, you may proceed to set up a [[HPL3/Amnesia: The Bunker/Modding/Setup Modding Environment|Modding Environment]] for your game, and learn how to use the [[HPL3/Amnesia: The Bunker/Modding/Developer Debug Menu|Developer Debug Menu]].
it is also recommended to [[Setting up an Online Repository|set up an online repository]].
More articles are available in the main Amnesia: The Bunker modding category.

==See Also==

*[[Mod Content Usage]]

[[Category:Modding]]
[[Category:English]]