{{TocRight}}
Creating a working custom story is a relatively simple process. This page will explain what you need to set up to do so, but it will not go into how you create engaging content as that is a much more invested topic.

To get started, browse to your Amnesia TDD installation directory. This is often called the ''Amnesia root directory'', and where it is located depends on the system and platform you are using. Here are some common locations:
{| class="wikitable"
|Steam @ Windows
|<code>C:\Program Files (x86)\Steam\steamapps\common\Amnesia The Dark Descent</code>
|-
|Retail @ Windows
|<code>C:\Program Files (x86)\Amnesia</code>
|-
|Steam @ Mac
|<code>~/Library/Application Support/Steam/steamapps/common/Amnesia The Dark Descent</code>
|}

==Setting up a custom story==
{{note|The simplest way of starting a Custom Story is downloading a [https://www.mediafire.com/file/m0yw9ro94yruzk6/Custom_Story.zip/file template]. The following tutorial will help with understanding what those files do.}}{{todo|Reupload the template to the wiki}}

Depending on your version, you may have a folder called "redist" inside your root directory. If you do, you will be working from inside this folder. If you do not have the "redist" folder, you will be working from the root directory itself.

#Navigate to <code>custom_stories/</code>
#Create a new folder for your custom story. This folder can be named pretty much anything, for example "My First Story".
#Enter your new folder and create a new plain text file named <code>custom_story_settings.cfg</code>. Open this file in your favorite code editor and paste in the following XML configuration:<syntaxhighlight lang="xml">
<Main
	Name="My First Story"
	Author="Lovecraft Himself"
	ImgFile="cool_bg.png"
	
	MapsFolder="maps/"
	StartMap="level_01.map"
	StartPos="PlayerStartArea_1"

	ExtraLangFilePrefix="extra_"
	DefaultExtraLangFile="english.lang"
/>
</syntaxhighlight>You can change any fields you like, for instance the name and author, but you may want to come back to this later. [[HPL2/custom_story_settings.cfg | See this article]] for a full explanation of this file and additional options that can be added.
[[File:Custom story empty example.png|alt=A bare minimum custom story configuration|thumb|A bare minimum custom story configuration]]

#The next requirement before the story will appear in the game's menu is a valid map file. Open the level editor and create a simple room – or at the very least create a floor using the Plane tool, place down a Box Light to cover the area, and place a PlayerStart area. Save the map file into <code>custom_stories/My First Story/maps/level_01.map</code>, or whatever matches the setup you've used. Don't forget to create the "maps" folder as it is written in your config file.
#At this point, if you launch Amnesia, your story should appear in the list of custom stories as seen in the image to the right. Feel free to test this to ensure everything works so far. If you click "Start" you should load into your level.
#Optional: Add the image file as specified by the <code>ImgFile</code>attribute above. Match the name and extension and place the file next to your config, and it should render as the background image in the game menu.

==Displaying text==
Now that you have a functional custom story, it's time to add some other essential files. In the image to the right you may notice it says "No description." This is the fallback text that appears if you do not have a functional language file, so let's create that now.

#Start by creating a new plain text file in your custom story folder named <code>extra_english.lang</code>.
#Open the language file. This is another XML file that stores ALL text that will be displayed in your story. This includes things like descriptions, pop-up text, notes, item names, level names etc.  You can start by pasting in the following:<syntaxhighlight lang="xml">
<LANGUAGE>
	<CATEGORY Name="CustomStoryMain">
		<Entry Name="Description">Hello, this is the description of my story.</Entry>
	</CATEGORY>
</LANGUAGE>
</syntaxhighlight>There are a few rules to keep in mind when it comes to this file:
##All text within this file is CASE SENSITIVE, meaning if you write "language" instead of "LANGUAGE" it will not work.
##The file MUST start with the opening <code><LANGUAGE></code> tag and it MUST end with the closing <code></LANGUAGE></code> tag. This element should only occur once in the entire file.
##Inside the LANGUAGE element,  you can place as many CATEGORY elements as you wish, but ensure that every opening tag is always accompanied by a closing tag.
##Certain CATEGORY tags require a specific value in the "Name" attribute. For instance, the main menu description is required to be within a category named <code>CustomStoryMain</code>.
##You can place as many Entry elements as you wish inside each CATEGORY element. The actual text that appears in the game will be written between the opening and closing tag for the Entry. Similarly to CATEGORY tags, certain Entry tags require specific values in their name attribute for the game to pick it up. In the above example, the description must have the name <code>Description</code>.
##If any errors are encountered while the game parses this file, the entire file will fail to load and no custom text will appear in your story. You will know that it failed to load if you see "No description" in the game menu.

==Moving on==
You have now set up the basic configuration for a custom story. What's left to do now is to create your levels using the level editor, create scripts for your levels using any code editor, and optionally add extra assets you wish to use to additional folders inside your custom story directory. These topics are very expansive and are not covered here, but you can follow the links below for more information on them.

Your final results from following this guide should leave you with a custom story folder that has this structure:<pre>
 My First Story/
 |- maps/
 |  |- level_01.map
 |
 |- cool_bg.png
 |- custom_story_settings.cfg
 |- extra_english.lang</pre>

==See also==

*[[HPL2/custom story settings.cfg|Explanation of the custom_story_settings.cfg file]]
*[[HPL2/Tools/Level Editor|How to navigate the Level Editor]]
*[[HPL2/Tutorials/Level Design|Using the level editor to design maps]]
*[[HPL2/ScriptReference|Introduction to AngelScript and level scripting]]