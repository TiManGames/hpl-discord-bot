{{shortPageTitle}}

This article describes in detail how to create, setup and structure your mod. 
{{tip|The game comes with two built-in example mods: <code>[[HPL3/SOMA/Modding/MinimalAddOnMod|MinimalAddOnMod]]</code> and <code>[[HPL3/SOMA/Modding/MinimalCustomMapMod|MinimalCustomMapMod]]</code>. You can copy them or use them as reference for creating your own mod.}}
<br>
{{tip|You can to use the [[HPL3/Third_Party_Tools/HPL3_Mod_Manager|HPL3 Mod Manager]] to create and configure your mod. However, it is possible create and add the entry file manually.}}<br>

==Mod Types==
SOMA has two mod types: Stand-Alone mod and Add-On. Technically speaking, the only difference between them is that an '''Add-On can be run along with a Stand-Alone mod.'''
However, a mod type shall be picked according to the nature of the mod you make, for contentions sake. 

===Stand-Alone Mod===
A Stand-Alone mod describes a mod of extensive game modification: Custom assets, Custom scripts and even overrides of existing game scripts.
If your mod is going to have any maps in it, it's probably a Stand-Alone mod.

===Add-On Mod===
A Add-On mod describes a mod with of specific or limited game modification: Minor config, graphical or script changes that tweaks an existing feature of the game.
If your mod touches on small feature, it's probably an Add-On mod. For example: An Add-On that adds a Russian translation to the game.

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
When creating a mod, be it a simple add-on or a fully fledged total conversion, an entry file is needed so that the mod can be listed by the [[HPL3/SOMA/Modding/SOMA_Mod_Launcher|ModLauncher]] application or simply be started by the game.
This means that an XML file with name <code>entry.hpc</code> needs to be created in the root directory of the mod, and its contents will depend on what kind of mod you are creating.

===Setting up the Entry File===
{{tip|It is recommended to copy one of the sample mods provided with the game and edit the files, instead of doing this manually. This way, you won't miss anything by mistake.}}

There are two ways to set up the entry file. Either:

*Use the [[HPL3/SOMA/Third_Party_Tools/SOMA_Mod_Manager|SOMA Mod Manager]] to create or edit the file.
*Set up the file manually:

#Create a file named <code>entry.hpc</code> in your mod's root folder.
#Paste the following content into the file and save:<syntaxhighlight lang="xml">
<?xml version="1.0" encoding="UTF-8"?>
<Content Version="1.0"
	Type="StandAlone"
	Title="Your mod name here"
	Author="Your name here"
	Description="Mod description here"
	
	LauncherPic="LauncherPic.png"
	InitCfg="config/main_init.cfg"
/>
</syntaxhighlight>

Change <code>Type</code> to <code>AddOn</code> if necessary.

===Common Attributes===
Any valid <code>entry.hpc</code> file (like the one shown above), will have at least the following attributes:
{| class="wikitable"
|+
|-
|Version
|The version for the mod, since the mod might get updated in the future.
|-
|Type
|The type for the content the mod is offering. Possible values are <code>"AddOn"</code> or <code>"StandAlone"</code>.
|-
|Title
|This sets the title for the mod. It should not be longer than 128 characters, especially if the mod is to be uploaded to the Steam Workshop.
|-
|Author
|The creator(s) of the mod. This will be shown below the title on the info column in the [[HPL3/SOMA/Modding/SOMA_Mod_Launcher|ModLauncher]] application.
|-
|Description
|The description of the mod. Should not exceed 8000 characters for the same reason as the title.
|-
|LauncherPic
|The file to be used as a thumbnail picture for the ModLauncher application.
|-
|InitCfg
|The relative path to the file which information when initializing the mod. The default value is <code>"config/main_init.cfg"</code> and usually shouldn't be changed.
|}

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

<u>ModLauncher Application</u>: The Mod Launcher is an application which can launch SOMA mods, along with addons. Running the mod via the application does not enable any dev features, and therefore should be mostly used only when testing the final version of the mod, before releasing it.

''Main article: [[HPL3/SOMA/Modding/SOMA_Mod_Launcher|SOMA Mod Launcher]]''

<u>Command Line:</u> To run a mod directly with dev features enabled, you only need to run the game executable passing the "-mod" argument followed by the full path to the mod's "entry.hpc" file. Using this method, the mod can be placed anywhere as long as the path to the "entry.hpc" file passed is correct. This method should be used throughout the development of your mod.

Example:<syntaxhighlight lang="bash">
Soma.exe -mod "C:\my_mod\entry.hpc"
</syntaxhighlight>
There are more arguments which can be added to the command line. It is recommended to create a <code>.bat</code> file which will launch the mod.

{{tip|The [[HPL3/SOMA/Third_Party_Tools/SOMA_Mod_Manager|SOMA Mod Manager]] can generate a mod launch .bat file automatically with the necessary arguments to run your mod properly.}}

''Main article: [[HPL3/Developer_Commands|Developer Commands]]''

==What's Next==
Now that the mod is set up, you may proceed to set up a [[HPL3/SOMA/Modding/Setup Modding Environment|Modding Environment]] for your game, and learn how to use the [[HPL3/SOMA/Modding/Developer Debug Menu|Developer Debug Menu]].
it is also recommended to [[Setting up an Online Repository|set up an online repository]].
More articles are available in the main SOMA modding category.

==See Also==

*[[Mod Content Usage]]

[[Category:Modding]]
[[Category:English]]