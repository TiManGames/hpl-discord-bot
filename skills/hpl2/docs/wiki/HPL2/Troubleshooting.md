{{stub}}

Before you begin, make sure that you update your drivers to the latest versions. Instability issues from outdated drivers or an outdated game version are the number one reported problem, but thankfully they're the easiest to solve. So get to updating!

Make sure that your game is up to date to the latest version, and you have the [[HPL2/Tools|latest tools]].

==Main game issues==
Are you having issues with just playing Amnesia? Go to the [http://frictionalgames.com/forum/thread-3754.html troubleshooting FAQ on the forums] which details solutions to many common problems or search the [http://www.frictionalgames.com/forum/forum-31.html Amnesia technical support forums]. If you wish to get a more active support, ask the community on [https://discord.com/invite/frictionalgames FG's Discord server].

Additionally you can go to [http://support.frictionalgames.com/entry/98/ Frictional Game's support page] for further support.
{{Warning|The [http://support.frictionalgames.com/entry/98/ Frictional Game's support page] might be out of commission.}}
===Alt-tabbing makes the mouse stuck at top left corner===

This is a known problem of an older version of SDL.dll library. Copy [https://www.libsdl.org/download-1.2.php SDL.dll v1.2.15.0], which adds a proper ALT-Tab fix, and overwrite the original SDL.dll.

([https://www.frictionalgames.com/forum/thread-7878-post-70551.html#pid70551 Source])

===Misaligned sky textures===

This is caused by a wrong library version being distributed with the game. Please refer to [[HPL2/Tutorials/Skyboxes#Fixing_the_inverted_skybox_bug|this article]] for the patch download.

==Modding==
===Editors not scaling===

The HPL2 editors don't scale normally. Your only option is to change their resolution in their options (keep in mind not all of the tools have this feature). Restart the tool for changes to take effect.

===Scripts not working===

*Check if your script has the same name as the map
*Check if all object names in the script/editor are correct; Keep in mind that using spaces doesn't work. Use the underscore _ instead.

===All text (notes, inventory) dissappeared===

You probably have a mistake (usually a missing < or > sign) in your .lang file. Check the last thing you wrote first. 

Having trouble with finding the mistake? If you're using Notepad++, go to Syntax and set it to XML. Look for the part at which the highlighting breaks.

===Custom assets don't load in the Level Editor===

You make a map using custom assets, save and quit, and then when you launch the editor, the custom assets don't show up and an error window pops up.

To fix this issue, edit the file resources.cfg located in the root the directory of Amnesia (i.e. where Amnesia is installed) and add the custom_stories directory to the end of the list (just copy the last line and change the folder name to custom_stories).

===Lang file general advice===
Don't forget to use the root LANGUAGE tag in the '''"extra_english.lang"''' file when trying to create your own custom story. The contents of this file (or "extra_XXX.lang" - where XXX is some alternative language) must look like this:

<syntaxhighlight lang="xml">
<LANGUAGE>
    <CATEGORY Name="CustomStoryMain">
        <Entry Name="Description">
            This is the description of my Custom Story! It is SCARY!
        </Entry>
    </CATEGORY>
</LANGUAGE>
</syntaxhighlight>

You can then have as many CATEGORY tags inside the LANGUAGE tag as necessary with the appropriate "Name" attributes.