{{shortPageTitle}}
In order to have a smooth modding development experience, Amnesia: The Bunker should be configured to run in a proper development environment.<br />{{Tip|It is recommended to use the [https://wiki.frictionalgames.com/page/HPL3/Third_Party_Tools/HPL3_Mod_Manager HPL3 Mod Manager] to configure everything that is listed on this page.}}<br />
==Setting up Custom Story Dev Mode==
During development, it is extremely helpful to have access to the development options and [[HPL3/Amnesia:_The Bunker/Modding/Developer_Debug_Menu|debug mode]] of the game. To achieve that, you need to start the game with a few extra arguments. It is suggested that you set up a script file for your mod so you can more quickly launch it in development mode.

#In the main folder of the game, create a script file with a recognizable name for your mod development. For example: <code>myMod_dev.bat</code> (.sh for Mac/Linux)
#Paste the following text into the file and save, changing <code>MyModName</code> so it fits your mod <u>folder name</u>.
<pre>AmnesiaTheBunker_NoSteam.exe -user Dev -cfg config/main_init_dev.cfg -mod local:MyModName</pre>
'''Non-Windows users''': Substitute <code>AmnesiaTheBunker_NoSteam.exe</code> with your platform's executable, for example: <code>./Amnesia2.bin.x86_64</code>

You can now launch the script file throughout the development of your mod.

==Setting up the Editors==
Your mod might have custom assets. In order to make the editors (Level Editor, Model Editor, etc) to load your mod's assets, it needs to be configured into a special mode called "WIP Mod". 
{{tip|Even if your mod doesn't have any custom assets, it's a good practice to configure the Level Editor anyway, just so you won't have to deal with it in the future should you decide to add custom assets.}} 

===WIP Mod - Manual Configuration===

#Navigate to <code>My Documents/HPL3</code>. You need to open one of the editors at least once in order to see the HPL3 folder inside your document folder.
#Inside that folder, create a file called <code>WIPMod.cfg</code>.
#Paste the following into the file, and save:
<syntaxhighlight lang="xml">
<WIPmod Path="Full_Path_To_Mod/entry.hpc" />
</syntaxhighlight>
(Of course, you will have to change the path in order to suit your own location of the mod).

===Final Step===

If your mod indeed has custom assets, you need to make sure the editors can add them to their look up list. 

#In your mod's folder, create a new folder and name it <code>editor</code>.
#Inside that folder, create a file called <code>lookupdirs.cfg</code>.
#Create a new <code><Directories></code> xml tag inside the file.
#Add a list of directories which include your custom assets. The directory has to be associated with a category. The allowed categories are:
#*<code>StaticObjects</code>
#*<code>Entities</code>
#*<code>Billboards</code>
#*<code>Particles</code>
#*<code>Sounds</code>
#*<code>DetailMeshes</code>

Example file:
<syntaxhighlight lang="xml">
<Directories>
	<Dir Category="StaticObjects" Path="static_objects/" />
	<Dir Category="Entities" Path="entities/" />
	<Dir Category="Billboards" Path="billboards/" />
	<Dir Category="Particles" Path="particles/" />
	<Dir Category="Sounds" Path="sounds/" />
</Directories>
</syntaxhighlight>

If all the above is done correctly, a <code>(Working on mod)</code> text should appear on the title bar of HPL3 editors when run.

[[Category:Modding]]
[[Category:English]]