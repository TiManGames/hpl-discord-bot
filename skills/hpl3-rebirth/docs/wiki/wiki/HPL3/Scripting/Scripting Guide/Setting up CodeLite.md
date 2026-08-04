{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
This is a quick guide on how to set-up the third party scripting tool - CodeLite.
==CodeLite - Introduction==

As mentioned, scripting in HPL3 can look a lot like regular programming, but less complicated.

Because of that, we need tools that will be able to aid us when we write our code. For HPL2, Notepad++ or even Notepad were enough for that. This time around, something more powerful is needed.

CodeLite is very much like a text editor, but much more programming-oriented than Notepad++. It is the tool used officially by Frictional Games to develop their HPL3 games. Here are some of the relevant features of CodeLite:

*'''Code documentation on the fly'''
*'''Code autocompletion and smart code suggestion'''
*'''Fast and easy way to navitgate through large script files'''
*'''The ability to run the game from CodeLite'''

For the scripting guide, CodeLite 12.0.0 will be used, which is the latest stable release that can work with HPL3 without any errors or bugs. 
[[File:Codelite-window.png|thumb|CodeLite with a scripting workspace for SOMA (click to view full size).|alt=|left]] {{clr}}

==Setting-up CodeLite==
This section explains how to configure CodeLite so it can be suitable for HPL3 scripting, how to create a workspace and a project, and how to import the script files.

{{Note|You must install CodeLite on the same disk as the game you want to mod. For example, if Amnesia: Rebirth is installed on disk C:, you have to install CodeLite on C: as well.}}

#[[CodeLite#Optimized_Color_Theme|Download the optimized color theme]]
#[https://downloads.codelite.org/ReleaseArchive.php Download and install CodeLite version 12.0.0.]
#'''Launch CodeLite and configure:'''
##<code>Settings → Code Completion → General</code>:
##*Add <code>;*.hps</code> at the end of the <code>Additional file extensions to parse</code> list.
##*Enable <code>Keep function signature un-formatted.</code>
##*Enable  <code>Re-parse on workspace loaded</code>.
##<code>Settings → Code Completion → Colouring</code>: Enable <code>Apply context aware colouring</code>.
##<code>Settings → Code Completion → CTags → Search Paths</code>: Click <code>Add...</code>, navigate to the game folder and select the <code>script</code> folder.
##<code>Settings → Colours and Fonts...</code>: Click on <code>Import settings from a zip archive</code> and select the <code>CodeLiteColorSettings.zip</code> file.
##Configure the rest of CodeLite to your liking.
#'''Create a new workspace:''' Create a folder inside your game directory and name it <code>_src</code>. Go to the <code>Workspace</code> menu and click on <code>New Workspace...</code>. Save the workspace inside the <code>_src</code> folder.
#'''Create a new project:''' <code>Right click on the workspace → New → New Project</code>. Select <code>Others → Non-code project</code>. Give the project a name (For example: "soma"). Leave the rest as default.
#'''Add a folder to the project:''' Right-click on the project and choose <code>New Virtual Folder</code>. Name it <code>_api</code>.
#'''Add the game script files:''' 
##Right-click on <code>_api → Add An Existing File...</code>, add the file <code>hps_api.hps</code> from the game folder (If the file does not appear in your game folder, launch the game, and the file will appear).
##Right-click on the project and choose <code>Import Files From Directory</code>. Navigate to the game folder and select it. In the next window, check the boxes for the folders: <code>maps, script, mods</code> and click ok.

'''Lastly, go to <code>Workspace</code> and click on <code>Parse Workspace</code>.'''

That should be it, you should now have three top folders in your project and a lot of sub-folders with various script files.
Start typing something, for example <code>Entity_</code> and a list should appear showing all the functions that begin with <code>Entity_</code> and the documentation for each selected function.

{{note|If the list disappears, you can make it re-appear again by pressing <code>ctrl-space</code>. If you want to bring up hints when inside the () of a function, press <code>ctrl-shift-space</code>.}}
<br>
{{warning|CodeLite won't update automatically the location of workspace files. If you moved them outside of CodeLite, you will need to re-add  them. The same goes for creating new file after setting up a workspace}}

==Launching the Game From CodeLite==

One additional thing you can do is to launch the game or your mod in dev mode through CodeLite itself. 

To do this, right click on your project and go to settings. Then Click on <code>Customize → Custom Build</code>.
Turn on <code>Enable Custom Build</code>. In the working directory, select the game folder.

Now you will need to add the command that launches the game or the mod. For example, a command that launches the main game of SOMA in dev mode will look like this:
<pre>Soma.exe -user Dev -cfg config/main_init_dev.cfg</pre>

Add the command to the <code>Build</code> section in the table.
[[File:Codelite custom build.png|thumb|SOMA workspace with custom build command (click to view full size).|alt=|left]] {{clr}}

For more information about available commands, visit the [[HPL3/Developer_Commands|Developer Commands]] article.

'''Now, all you need to do is to press F7, and the game will run!'''

==Issues & Info==

*Write <code>Class@ object</code>  and not <code>Class @object</code>, the latter will screw up coloring.
*If you lose coloring / code completion and can't get it back, re-parse the workspace: <code>Parse Workspace</code>.
*Parameters with <code>&in</code> might break the coloring of function parameters, but will have no other side-effects.

{{NavBar|HPL3/Scripting/Scripting_Guide/What is scripting in HPL3?|What is scripting in HPL3?|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Scripting Workflow and Structure|Scripting Workflow and Structure}}

[[Category:HPL3 Scripting]]
[[Category:English]]