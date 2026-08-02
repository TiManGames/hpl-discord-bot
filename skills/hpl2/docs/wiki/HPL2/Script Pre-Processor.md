= Script Pre-Processor =
The C pre-processor is a powerful tool that allows programers many  options when writing their code - among these options are commands such  as #include ””, which allows the user to include the contents from one  code file into another.

[http://www.frictionalgames.com/forum/thread-12023.html Original Post]

== Setting Up ==
In the below ZIP-File a copy of [http://mcpp.sourceforge.net/ MCPP  ] is included as the pre-processor. I have also written a batch script   which will call the pre-processor with the appropriate arguments as well   as a display error messages & log them into a text file.

[http://dl.dropbox.com/u/64805489/HpsPreProcessFixed.zip Zip File  Download] 

The next thing to do is set up notepad++ to use the batch file and MCPP.   Extract the contents of the zip file to a safe place (For example in a   new folder in the amnesia directory). Open up notepad++ and go into  the  “run” menu and click “run” (or press F5). Into this dialogue box  put the  following:

<syntaxhighlight lang="batch">
[FOLDER]\PreProcess.bat $(CURRENT_DIRECTORY) $(FILE_NAME) $(NAME_PART).hps
</syntaxhighlight>


Replace [FOLDER] with the folder the batch file is in. For example:

<pre>
C:\Program Files (x86)\Amnesia\HPS_PREPROCESSOR\PreProcess.bat $(CURRENT_DIRECTORY) $(FILE_NAME) $(NAME_PART).hps
</pre>

It is recommended that you then click  save and bind the command to  something like F6 - otherwise you will have  to enter this every time  you start notepad++ .

<u>'''Warning:  Do not press “run” (or F6 if you bound  it) on a script file which ends  in ”.hps”! This will wipe the script  file!!! Give your script files  which use the pre-processor a different  extension (E.g .phps or .lhps). ''' </u>

== Usage ==
The files that exist before pre-processing will have to have a different   extension to the one after pre-processing. The simplest way to do this   is to call your script files something like “level.phps” so that the   pre-processor writes “level.hps”. Consider the following test code:

<syntaxhighlight lang="cpp">
 //level.phps//
 #include "inclusion_test.phps"
 
 void OnEnter()
  {
    AddDebugMessage("File 1",false);
  }
 
 //inclusion_test.phps//
 void OnStart()
  {
   AddDebugMessage("File 2",false);
  }
</syntaxhighlight>

Running the script  from test.phps (F6 if you followed the instructions above) should create “test.hps”:

<syntaxhighlight lang="cpp">
void OnStart()
 {
 AddDebugMessage("File 2",false);
 }  
 
 void OnEnter()
 {
 AddDebugMessage("File 1",false);
 }
</syntaxhighlight>

Which is what the game will see from test.map and run. When you   distribute your custom stories only this exported file is required.   Obviously, since we are now using a C pre-processor there is a whole [http://en.wikipedia.org/wiki/C_preprocessor host of other things you can do.] 

== Reccomended Extra Installation Setup ==

You may notice that stuff like #include isn't color coded - and that   your new script files ”.phps” aren't automatically recognised as HPS   files! I Have updated the notepad++ files to fix this (Note that these   are updated versions of the [http://www.frictionalgames.com/forum/thread-9783.html overhauled notepad++ files], which provide a fixed function list, folding regions and a new color scheme)

[http://www.mediafire.com/?yx2nb2zdgdswg4e Download] 

Installation (Steps 1→4 are optional but recommended):

# Close notepad++
# Go to where you installed notepad (Probably C:\Program Files\Notepad++ or C:\Program Files (X86)\Notepad++\)
# Go to the folder "Plugins" Then to the folder "APIs"
# Copy across the downloaded version of "hps.xml" into this folder. If you a prompted to overwrite, say yes.

# Start notepad++
# Go into view→ User-Defined Dialogue
# On the drop-down box, if there is the option to select "HPS", select it and and click "Remove"
# Click import, and import "UserDefinedDialogue.xml"

You will now a fixed functions list for amnesia (Adds missing functions   & keywords, removes non-existing ones), as well as a new color   scheme, folding regions (''+ ''- /<nowiki>*</nowiki><nowiki>*</nowiki> <nowiki>*</nowiki><nowiki>*</nowiki>/ ''Begin ''     End) etc. ”.hps,  .phps, .lhps” are now detected, and ”#…” are coloured correctly.