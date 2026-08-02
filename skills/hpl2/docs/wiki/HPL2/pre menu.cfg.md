{{DISPLAYTITLE:pre_menu.cfg}}

==Pre-Menu - Config - Amnesia==

This page talks about the file '''pre_menu.cfg''' found in '''/config''' but more importantly within a full conversion mod. If you are creating a mod and want to know more about this file, read on.

This file makes up the different banners and events that show up before the menu is loaded. This includes for example the Frictional Games logo and the gamma adjustment screen. Some are set to show up every time the game is started (the logos) whereas some are set to show only the first time (gamma and introduction). After starting the game/mod for the first time, a file named '''first_start_flag''' is created within the game/mod's GameSaveFolder. This file tells the game whether to show the first startup entries or not.
====Banners====

If you want to edit/add/remove banners to the pre menu, open the file and play with the line:

<syntaxhighlight lang="xml">
<Section Image="startup_fg_logo.jpg" Time="2" ShowFirstStartOnly="false" />
</syntaxhighlight>

This line shows the Frictional Games logo during startup. You can copy this line and add it underneath for display your own logo after it, or edit it to display your own instead of it. Input your own '''logo.jpg''' file, the amount of time you want it to show and whether it should display only the first time or every time.
====Introduction and gamma====

The other part of this file includes the sections that show up as a first introduction to the player. These sections also include the gamma screen where they can adjust the amount. The sections look like this in the file:

<syntaxhighlight lang="xml">
<Section Image="welcome_bg01.jpg" ShowFirstStartOnly="true" Music="12_amb.ogg" MusicVolume="0.5" MusicFadeTime="10" >
    <Text Pos="80 210 0" FrameSize="640 300" FontSize="18 18" TextCat="PreMenu" TextEntry="WelcomeMessage01" Color="1 1 1 1" Align="Left" />
</Section>
</syntaxhighlight>

This section can be repeated for as many times as you want, depending on how many pages of text you want to display. Here you can specify the background image, whether it starts first time or every time, the music to play + volume and fade time (only include these tags in the first section as it keep playing throughout the next ones). In the text line, you define what will display. The position of the text (X and Y co-ordinate), the size of the text's boundary box and size of the font can also be defined here. After that is the category and entry from the english.lang file, as well as the color and alignment. The color is defined in values of red, green, blue and alpha (opacity).

Another thing that can be added to this section is whether the gamma selection should appear or not. You can add it to your section header, like so:

<syntaxhighlight lang="xml">
<Section Image="welcome_bg01.jpg" ShowFirstStartOnly="true" HasGammaSettings="true">
</syntaxhighlight>

This gives the player the option to edit their gamma amount before starting. You can completely exclude it if you wish, along with the entirety of the introduction pre menu, should you wish to jump directly to the menu.