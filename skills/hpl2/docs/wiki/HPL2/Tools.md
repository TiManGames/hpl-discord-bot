[[Category:Entry pages]]
{| class="wikitable" style="margin:auto"
! colspan="2" scope="row" |Editors
|-
|'''[[HPL2/Tools/Level Editor|Level Editor]]'''||Everything that you do in the other editors comes to use here.
|-
|'''[[HPL2/Tools/Model Editor|Model Editor]]'''||Makes your 3D models come to life with ingame functions.
|-
|'''[[HPL2/Tools/Particle Editor|Particle Editor]]'''||Create fire, smoke and other particles to spice up levels and models.
|-
|'''[[HPL2/Tools/Material Editor|Material Editor]]'''||Should a texture come with normal, specular or illumination maps? Should the material be transparent or sound like metal?
|-
|[[HPL2/Tools/HplLangTool|'''HPL Language Tool''']]||Helper tool to build,edit, and translate language files
|-
! colspan="2" scope="row" |Viewers
|-
|'''[[HPL2/Tools/Map Viewer|Map Viewer]]'''||Gives extra information about the level and allows viewing without running the game. A useful tool for optimization.
|-
|'''[[HPL2/Tools/Model Viewer|Model Viewer]]'''||See how your model will look ingame without having to start the game or make game specific files. Useful for porting assets.
|}

==Introduction==

The editors come in 3 versions now:
* The classic 1.3 editors (note: this version has the outdated color picker)
* The [[#Community tools | community edition]] - based on the stable 1.3 version, they provide quality-of-life improvements and a dark theme
* The 1.5 editors - based on patched versions of HPL2, these come prepackaged with the game on some platforms now

{{warning|Keep in mind that these tools, while having been used to produce actual content and a lot of effort has been put on making them as stable as possible, can have bugs.
Make sure to back up your work often, and it is highly recommended to use a versioning system (e.g. [[Setting_up_an_Online_Repository|Git]]). }}

==Installation Instructions==

Make sure to click the download links as copying the link will result in an error. If clicking the link also results in an error, try downloading in another browser.

===Windows===

Download the Windows HPL Editor Suite for Amnesia (click the link, it won't work if you copy it into a tab):

*[https://fricpub.s3.amazonaws.com/tools/hpl2/amnesia_tdd_1.3_editor_suite.zip Version 1.3 and later]
*[https://fricpub.s3.amazonaws.com/tools/hpl2/hpl_editor_suite.zip Version 1.2 and earlier].

This file must be unpacked into the folder where you find Amnesia.exe, all .dll files and folders with game data. This may be one of two locations depending on which version of the game you have.

* '''For Steam users''': This will be your game installation directory, usually <code>C:\Program Files\Steam\steamapps\common\Amnesia - The Dark Descent\</code>
* '''For retail/other users''': This will be inside the "redist" folder inside your installation directory, for example <code>C:\Program Files\Amnesia - The Dark Descent\redist\</code>

When reporting crashes and bugs, always include a description of the problem and any log output from the editors themselves. Logs are located in your <code><Documents>\HPL2\</code> folder.

===Linux===

Download the Linux HPL Editor Suite for Amnesia:

*[https://fricpub.s3.amazonaws.com/tools/hpl2/hpl2_editor_suite-linux-2015-03-04.zip Version 1.3 and later]
*[https://fricpub.s3.amazonaws.com/tools/hpl2/hpl_editor_suite_linux.zip Version 1.2.1 and earlier]

'''Updated 2011-02-19''' Updated to fix crashes when selecting enemies.

Extract the zip and run the installer (<code>hpl_editor_suite.sh</code>).

The installer should automatically find your currently installed copy of Amnesia if you installed it in one of the common installation locations. If not, simply select the Amnesia folder where you installed the game.

'''Note:''' No menu items are created by the installer, it simply installs the editor data files and executables for your platform.

'''Note:''' The HplLangTool.exe is included in the Linux HPL editor suite, it is a .NET application that does run under wine/mono.

When reporting crashes and bugs, always include a description of the problem and any log output from the editors themselves. Logs are located in your <code>~/.frictionalgames/HPL2</code> folder.

===Mac OS X===

Download the Mac OS X HPL Editor Suite:

*[https://fricpub.s3.amazonaws.com/tools/hpl2/HPL2-EditorSuite-OSX-2015-03-04.dmg Version 1.3 and later]
*[https://fricpub.s3.amazonaws.com/tools/hpl2/hpl2editorsuite.dmg Version 1.2.1 and earlier]
*[https://fricpub.s3.amazonaws.com/tools/hpl2/hpl2editorsuite-manual.dmg Manual Install for version 1.2.1 and earlier]. (Use the Manual Install only if you have issues with the automated installer, and be ''SURE'' to read the directions)

Extract the zip and run the installer (''HPL2 Editor Suite Installer''). The installer should automatically find your currently installed copy of Amnesia no matter where you purchased it (including Steam). After installing the tools, simply run Amnesia and select the "Editor Suite" tab in the launcher to run the tools.

Notes:

*This{{clarify}} currently is not for the Mac [http://www.proleadsoft.com/mobile-app-development/| App Store] release, as updates to Amnesia will completely remove the Editor suite. Please read [http://support.frictionalgames.com/entry/103/ this] for more information.
*'''Update 2011-02-19'''  Includes fixes for crashes and "hangs"
*'''Update 2011-03-19'''  Includes fixes for a crash that occurs when selecting entities to add to a level
*You must install the [http://support.frictionalgames.com/entry/100/ Amnesia 1.0.1.2 Mac OS X Patch] (this is a Mac-only patch). Steam users will get the update directly from the Steam client.

When reporting crashes and bugs, always include a description of the problem and any log output from the editors themselves. Logs are located in your <code>~/Library/Application Support/Frictional Games/HPL2</code> folder.

== Community tools ==

HPL2 is now open source and a community edition of the editors is being worked on. They are '''available for Windows and Linux.'''

===Features===
The new features include:
* A much more comfortable color picker (compared to the classic editors; this picker is included in 1.5 versions too)
* Dark theme (installed by default, but the original one can be reinstated)
* Keyboard shortcuts for common utilities (e.g. grid snapping)
* Ability to load MFP maps and assets without errors
* Other small improvements

===Installation===
# Go to [https://github.com/TiManGames/AmnesiaTheDarkDescent/releases this Github page] to download the latest version of the community tools.
# Download the archive in the format of your choice (.7z is smaller than .zip but requires [https://www.7-zip.org/ 7zip] or Winrar to open).
# Extract the contents into the main directory of Amnesia.
# Merge and overwrite all when asked.