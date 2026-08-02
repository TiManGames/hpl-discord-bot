{{shortPageTitle}}
[[File:Hpl3 mod manager.png|alt=|thumb|499x499px|The HPL3 Mod Manager]]
{{Note|This page details third-party software which is not affiliated with Frictional Games.}}
<br />
{{Note|This application is open source. View the repository on [https://gitlab.com/TiManGames/hpl3-mod-configurator GitLab].}}


The HPL3 Mod Manager is an application intended to make it easier to manage and configure ''HPL3''  mods. It removes the need to manually tamper with configuration files and keeps everything in one place so that it can be easily modified.

'''Features:'''

*Seamlessly support all HPL3 Games: SOMA, Amnesia: Rebirth, and Amnesia: The Bunker.
*Automatically scan your game folder for mods and effortlessly load them into the manager.

*Add or create new [[HPL3/Amnesia: Rebirth/Modding/Creating a Mod#Mod Entry File|mod entries]].
*Edit mod information: Name, Author, Description, Thumbnail Photo, Mod Type, and Hot Load (Bunker only).
*Manage [[HPL3/Resources Configuration|mod resources]] and [[HPL3/Modding/Mod Dependencies|mod dependencies]].
*[[HPL3/Amnesia: Rebirth/Modding/Setup Modding Environment|Sync your mod]] to the Level Editor: If your mod has any custom assets, the level editor will automatically load it after it's synced.
*Create a [[HPL3/Amnesia: Rebirth/Modding/Creating a Mod|custom .dev launch file]] that will load your mod with your custom scripts and assets
{{clr}}

=Mod Manager Guide=

== Installation and first run ==

# Download the Mod Manager from this page.
# Place it somewhere convenient (for example inside the game’s root folder).
# Make sure the game folder has a <code>mods</code> directory. Create it if it does not exist.
# Run <code>HPL3 Mod Manager</code>.

=== Game Directory field ===
At the top left:

* Click the <code>...</code> button and select the **game root folder** (where the main game executable is).
* When set, the Mod Manager scans <code>&lt;GameDir&gt;\mods\</code> and populates the **Mod List** with any folder that contains an <code>entry.hpc</code>.

To switch between SOMA, Rebirth and The Bunker, change the **Game Directory**.  
The **Mod List** will refresh for the selected game.

----

== Main window layout ==

=== Left pane: Game & Mod list ===
* '''Game Directory''' – absolute path to the current game.
* '''Mod List''' – all detected mods under <code>mods/</code>. Columns:
** '''Name''' – mod title.
** '''Type''' – usually <code>STANDALONE</code>.
* Bottom buttons:
** '''Load Mod''' – manually load a mod from a folder.
** '''New Mod''' – create a new mod entry.
** '''Open Mod Folder''' – open the folder of the currently selected mod.
** '''Remove Mod''' – remove the selected mod from the list (does not delete files).

=== Right pane: Mod information ===
For the selected mod:

* '''Mod Directory''' – absolute path to this mod’s folder (under <code>mods/</code>).
* '''Name''' – display name of the mod.
* '''Author'''
* '''Description'''
* '''Thumbnail''' – image used by the launcher (usually a PNG in the mod folder).
* '''Dependencies'''
** Button: '''Manage Dependencies…''' – opens dependency dialog.
* '''Resources'''
** Button: '''Manage Resources…''' – opens resources and editor look‐up dialog.
* '''Mod Type'''
** Dropdown – typically <code>StandAlone</code>.
* '''Hot Load''' (The Bunker only)
** Special flag used by The Bunker. Leave disabled unless you know you need it.
* Bottom buttons:
** '''Create dev .bat'''
** '''Sync Editor'''
** '''Save'''

Typical workflow:

# Select a mod in the **Mod List**.
# Change settings in **Mod information**.
# Press **Save** to write changes to disk.

----

== Creating a new mod ==

Use this for a brand new mod/custom story.

# Set **Game Directory** to the game you are targeting.
# Click '''New Mod'''.
# In the **Mod information** panel:
## Click <code>...</code> next to '''Mod Directory'''.
## Choose a **new folder inside <code>mods</code>** (for example: <code>...\Amnesia The Bunker\mods\my_mod</code>).
### The folder name is used by the game in <code>-mod local:my_mod</code>.
## Fill in '''Name''', '''Author''' and '''Description'''.
## Choose a '''Thumbnail''' (for example a PNG image stored in the mod folder).
## Set '''Mod Type''' to <code>StandAlone</code>.
## For The Bunker, leave '''Hot Load''' unchecked unless a specific guide instructs otherwise.
# Click '''Save'''.

The manager now creates a basic <code>entry.hpc</code> for the mod.  
You still need to create the usual mod structure (e.g. <code>config/</code>, <code>maps/</code>, <code>script/</code>, etc.) exactly as for a manually created mod.

----

== Importing an existing mod ==

If you already have a mod:

# Place the mod folder under <code>&lt;GameDir&gt;\mods\</code>.
# If it is not automatically listed:
## Click '''Load Mod'''.
## Select the folder that contains <code>entry.hpc</code>.
# The mod now appears in the **Mod List** and can be edited like any other mod.

----

== Editing mod metadata (entry.hpc) ==

The fields in the **Mod information** panel map directly to attributes in <code>entry.hpc</code>:

* '''Name''' → <code>Title</code>
* '''Author''' → <code>Author</code>
* '''Description''' → language-specific description fields (e.g. <code>Description_english</code>)
* '''Thumbnail''' → path to the launcher image file (relative to the mod root)
* '''Mod Type''' → <code>Type</code> (commonly <code>StandAlone</code>)
* '''Hot Load''' → The Bunker specific attribute
* The manager also assumes a default init config (for example <code>config/main_init.cfg</code>) that follows the standard mod templates.

Pressing '''Save''' updates <code>entry.hpc</code> with the values from the UI.

----

== Managing dependencies ==

The '''Manage Dependencies…''' button opens the dependency dialog.  
This dialog edits two things in <code>entry.hpc</code>:

* The mod’s own UID.
* The list of dependency UIDs.

Note: At the engine level, mod dependencies are currently only functional in **Amnesia: The Bunker**. In SOMA and Amnesia: Rebirth the dependency feature is broken, so do not rely on it there.

=== Mod UID ===

* **Mod UID** field – defines the mod’s unique identifier (<code>UID</code>).
* Naming convention: <code>authorname.mod_name</code> (for example <code>frictionalgames.standardmode</code>).

Pick something that is globally unique.  
Once other mods depend on this UID, you should not change it.

=== Adding dependencies ===

To add dependencies:

# In the dependency dialog click '''Add'''.
# Enter the UID of the mod you depend on (exactly as written in that mod’s UID field).
# Repeat for additional dependencies.
# Click '''Save''' in the dependency dialog.
# Click '''Save''' again in the main window.

The manager will write something of the form:

<syntaxhighlight lang="xml">
<Content
    UID="your.uid"
    Dependencies="other.uid,another.uid">
    ...
</Content>
</syntaxhighlight>

----

== Managing resources ==

Click '''Manage Resources…''' to open the Mod Resources dialog.  
This dialog controls:

* The mod’s **runtime resources list** (<code>resources.cfg</code>).
* The **editor lookup directories** (<code>editor/lookupdirs.cfg</code>).

=== Mod Resources table (resources.cfg) ===

The upper table corresponds to <code>&lt;Directory&gt;</code> elements in <code>resources.cfg</code>.

Typical setup:

# Click '''Add''' for each directory you want the game to load resources from.
# Use paths starting with <code>/</code> relative to the mod folder, for example:
## <code>/config</code>
## <code>/maps</code>
## <code>/script</code>
## <code>/static_objects</code>
# The manager will create the corresponding <code>&lt;Directory&gt;</code> entries and typically sets <code>AddSubDirs="true"</code>.
# Click '''Save''' in the dialog, then '''Save''' in the main window.

Resulting <code>resources.cfg</code> will be similar to:

<syntaxhighlight lang="xml">
<Resources>
    <Directory Path="/config"         AddSubDirs="true" />
    <Directory Path="/maps"           AddSubDirs="true" />
    <Directory Path="/script"         AddSubDirs="true" />
    <Directory Path="/static_objects" AddSubDirs="true" />
</Resources>
</syntaxhighlight>

Adjust paths to match your own folder structure.

=== Editor Resources (lookupdirs.cfg) ===

The lower part of the dialog configures the Editor lookup directories.  
Each checkbox + text field pair maps to a category in <code>editor/lookupdirs.cfg</code>.

For each type of asset your mod uses:

* Tick the relevant checkbox:
** '''Static Objects'''
** '''Entities'''
** '''Billboards'''
** '''Particles'''
** '''Sounds'''
* Enter the relative directory where those assets live, for example:
** <code>static_objects/</code>
** <code>entities/</code>
** <code>billboards/</code>
** <code>particles/</code>
** <code>sounds/</code>

The manager will create entries like:

<syntaxhighlight lang="xml">
<Directories>
    <Dir Category="StaticObjects" Path="static_objects/" />
    <Dir Category="Entities"      Path="entities/" />
    <Dir Category="Billboards"    Path="billboards/" />
    <Dir Category="Particles"     Path="particles/" />
    <Dir Category="Sounds"        Path="sounds/" />
</Directories>
</syntaxhighlight>

Click '''Save''' in the resources dialog, then '''Save''' again in the main window.

----

== Sync Editor (WIP mod setup) ==

The '''Sync Editor''' button sets up the mod as the current “WIP mod” for the editors and updates the lookup directories.

Normally this requires manually:

* Creating <code>My Documents/HPL3/WIPMod.cfg</code> with a path to the mod’s <code>entry.hpc</code>.
* Creating or editing <code>editor/lookupdirs.cfg</code> in the mod folder.

With the Mod Manager:

# Configure your **Mod Resources** and **Editor Resources** as described above.
# Select your mod in the **Mod List**.
# Click '''Sync Editor'''.

The manager then:

* Writes <code>WIPMod.cfg</code> in the user’s documents folder so the editors work on this mod.
* Writes/updates <code>editor/lookupdirs.cfg</code> using the Editor Resources you configured.

After this, opening the Level Editor should indicate that it is working on your mod and your custom assets should appear in the browser.

----

== Create dev .bat ==

The recommended dev workflow is to run the game executable with parameters such as:

* <code>-mod local:&lt;mod_folder_name&gt;</code>
* <code>-user Dev</code>
* Possibly a dev init config (for example <code>-cfg config/main_init_dev.cfg</code>)

Instead of writing a batch file by hand:

# Select your mod in the **Mod List**.
# Click '''Create dev .bat'''.

The manager generates a <code>.bat</code> file in the game directory that:

* Launches the correct game executable.
* Passes the appropriate <code>-mod local:&lt;YourModFolder&gt;</code> argument.
* Adds dev-related arguments according to the recommended setup.

Use that batch file whenever you want to test the mod with dev options enabled.

----

== Game-specific notes ==

=== SOMA ===
* Same Mod Manager workflow.
* No use for Bunker-specific options like Hot Load.

=== Amnesia: Rebirth ===
* Standalone mods only.
* The engine’s mod dependency system is currently broken; do not rely on dependencies for Rebirth mods.

=== Amnesia: The Bunker ===
* Mod dependencies are supported and functional.
* For simple custom stories, keep '''Hot Load''' disabled unless you have a specific reason or guide instructing you to enable it.

----

==Download==
{{Note|This application requires a modern Java Runtime. Ensure you have the latest version installed, or simply download the installer exe.}}

{| class="wikitable"
!Application
!Upload Date
!SHA
!VirusTotal
|-
|[https://mega.nz/file/KkoFxAKB#z5pRO1Lt0TZZwG0gkZKed8PUrls43xBIwz4iP8_mBV8 Hpl3ModManagerSetup.exe]
|8 June, 2023
|8ac8d373835469e83b31f9c6dc9dfc6bf15283ba4d15049e5edec2de5c95dc12
|[https://www.virustotal.com/gui/file/8ac8d373835469e83b31f9c6dc9dfc6bf15283ba4d15049e5edec2de5c95dc12/detection Results]
|}

The application can be run from anywhere on your computer, but it is recommended to place it in the main game folder.

[[Category:Modding]]
[[Category:English]]