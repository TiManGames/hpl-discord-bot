{{shortPageTitle}}
{{AngelScriptGuideMenu}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
The first thing to do is to take a look at what a typical script file for a typical HPL3 map would look like. First, launch the LevelEditor program within your game installation file. Once it’s open, save the blank map somewhere on your computer.

{{note|When the Level Editor saves a map for the first time, it creates a bunch of different files (at least 20). For this reason, it’s recommended that you save your map inside an empty folder. Also, for reasons of convenience, it’s also a good idea to save this folder somewhere in the game installation folder, typically within a folder called <code>mods</code>. When it’s all said and done, the typical folder layout would look like this: <code>Amnesia: Rebirth/mods/YourModName/maps/YourMapName/<map files></code>.}}

Now that you’ve done that, go ahead and take a look at the files you just saved. There are quite a lot, but the one we are most interested in is the one that ends in <code>.hps</code>.

Open the <code>.hps</code> file in your editor of choice. You should see something resembling the following (which has been formatted for reasons of length):

<syntaxhighlight lang="c++">
#include "interfaces/Map_Interface.hps"
#include "base/Inputhandler_Types.hps"

#include "helpers/helper_map.hps"
#include "helpers/helper_props.hps"
#include "helpers/helper_effects.hps"
#include "helpers/helper_audio.hps"
#include "helpers/helper_imgui.hps"
#include "helpers/helper_sequences.hps"
#include "helpers/helper_game.hps"
#include "helpers/helper_modules.hps"
#include "helpers/helper_ai.hps"

//--------------------------------------------------
/*Place any global values here. These must be const variables as they will not be saved*/
/*This is also the place for enums and classes, but these should be avoided whenever possible*/
//--------------------------------------------------
class cScrMap : iScrMap
{
    //--------------------------------------------
    //////////////////////////////////////////////////////////////////////////////////////////
    // ==============
    // MAIN CALLBACKS
    // ==============
    //{///////////////////////////////////////////////////////////////////////////////////////
    //-------------------------------------------------------
    ////////////////////////////
    // Set up map environment
    void Setup() {}

    //-------------------------------------------------------

    ////////////////////////////
    // Run first time starting map
    void OnStart() {}

    //-------------------------------------------------------

    ////////////////////////////
    // Run when entering map
    void OnEnter() {}

    //-------------------------------------------------------

    ////////////////////////////
    // Run when leaving map
    void OnLeave() {}

    //-------------------------------------------------------

    ////////////////////////////
    // The player has died.
    void OnPlayerKilled(int alRecentDeaths, const tString&in asSource) {}

    //-------------------------------------------------------

    ////////////////////////////
    // To get when player makes input (mostly used for debug)
    void OnAction(int alAction, bool abPressed) {}

    //-------------------------------------------------------

    ////////////////////////////
    // This only used for pure debug purposes when info needs to printed.
    float DrawDebugOutput(cGuiSet @apSet,iFontData @apFont,float afY) { return afY; }
    
    //-------------------------------------------------------
    //} END MAIN CALLBACKS
    //////////////////////////////////////////////////////////////////////////////////////////
    // ==============
    // MAIN FUNCTIONS
    // ==============
    //{///////////////////////////////////////////////////////////////////////////////////////
    //-------------------------------------------------------
    /*Put any variables that are used in more than one scene here.*/
    //-------------------------------------------------------
    /*Put any functions that are used in more than one scene here.*/
    //-------------------------------------------------------
    //} END MAIN FUNCTIONS
    //////////////////////////////////////////////////////////////////////////////////////////
    // ==============
    // SCENE X *NAME OF SCENE*
    // ==============
    //{//////////////////////////////////////////////////////////////////////////////////////
         /////////////////////////////////////////
         // General
         //{//////////////////////////////////////

        //-------------------------------------------------------

        /*Put any variables that are used by many events in Scene X here.*/

        //-------------------------------------------------------

        /*Put any functions that are used in more than one event in Scene X here.*/

        //-------------------------------------------------------

        //} END General

         /////////////////////////////////////////
         // Event *Name Of Event*
         //{//////////////////////////////////////

         //-------------------------------------------------------

         /*Put any variables that are only used in Scene X, Event X here.*/

         //-------------------------------------------------------

         /*Put any functions that are only used in Scene X, Event X here.*/

         //-------------------------------------------------------

         //} END Event *Name Of Event*

     //} END SCENE X
}
</syntaxhighlight>
| style="width:0.1%" |
|}
A bit wordy, perhaps, but it all boils down to the following categories, each of which you will learn about in a particular lesson:

*Includes (Chapter 5)
*Class Declaration (Chapter 8)
*Functions (Chapter 6)
*Types and Variables (Chapter 3)
*Callback Functions (Appendix 2)
*Comments

Most of these aspects are explained in later lessons. There is one that you can learn about now, however: comments.

==Commenting==
Most of the things that go into a script is part of the program's execution - you want it to do something here, then do something there, then do something to those two somethings over there. Sometimes, however, you just want to write a reminder of what some code does so that you don't have to go through it all and figure it out later. That's where comments come in. Anything that has been marked as a comment is ignored by the program, so you can type in whatever you want without worrying that it will screw up the program.

There are two types of comments in AngelScript - inline comments and block comments:

<syntaxhighlight lang="c++">    // This is an inline comment

    /* 
    This is a block comment
    */
</syntaxhighlight>

*Inline comments are just for a single line. Anything after the comment marker <code>//</code> becomes a comment, but on the next line, it's back to business as usual.
*Block comments are for multiple lines. A block comment is marked as everything between the starting marker <code>/*</code> and the ending marker <code>*/</code>. This can span many lines, and can even mark your entire program as a comment if you aren't careful.

==Hello World==

As per tradition, every introductory programming course needs a “Hello World” program, and this tutorial is no exception. In your map’s script, find the section of the code that contains the following:

<syntaxhighlight lang="c++">
    ////////////////////////////
    // Run when entering map
    void OnEnter()
    {

    }
</syntaxhighlight>

Inside those curly brackets, add <code>cLux_AddDebugMessage(“Hello World!”);</code>. Don’t worry what it means just yet. When you’re done, the above code snippet should now look like this:

<syntaxhighlight lang="c++">
    ////////////////////////////
    // Run when entering map
    void OnEnter()
    {
        cLux_AddDebugMessage("Hello World!");
    }
</syntaxhighlight>

Go ahead and save your script, if you haven’t done that already.

Now it’s time to start up the game in mod development mode. To do this, there’s a file in your game installation directory which launches the dev mode.

*For SOMA, the file is called <code>SomaDev.bat</code>
*For Amnesia: Rebirth, the file is called <code>RebirthDev.bat</code>

When you open this file, it starts the game in developer mode. For the first little bit, the game will be loading, but once you hear sounds start to play, hit the F1 button. This brings up the developer panel, and on it contains a lot of commands and tools for testing and proofing your map.

For now, scroll down until you find the “Load Map” button. Click that button, then navigate to where you saved your map. Open your map from there (it will be the “.hpm” file that you see). Once you do, you should get basically a black screen with a handful of text around the edges. In the lower left corner, you should see the text “Hello World!”.

{{note|If you don’t see the text, make sure the developer panel is hidden by pressing F1 again. This is because the game is effectively frozen while the panel is visible by default, so the script may not appear right away if the panel is visible. If you still do not see the text, press F5, which reloads the map and causes it to become visible again.}}

If all went well, then congratulations. You just created your first SOMA mod. It may not be very shiny, but like I said in Lesson 0, we all have to start somewhere.

So let’s look at what we just did in pieces:

<syntaxhighlight lang="c++">
    cLux_AddDebugMessage(“Hello World!”);
</syntaxhighlight>

# We used the code <code>cLux_AddDebugMessage</code> followed by an opening and (eventually) closing parentheses. This is a function call, which you will learn more about in Lesson 6. For now, just know that this function’s job is to print text onto the screen.
# Within the parentheses is some text within quotation marks, <code>“Hello World!”</code>. This is what is known as a “string literal”. You’ll learn about them and other types in next chapter. The important part to note here is that it is the text that actually appeared in the game itself.
# Finally, after the closing parenthesis, there is a lonely little semicolon. That semicolon marks the end of a line of code. Do not forget this: every line of code that isn’t a class or function declaration (more on them later) needs a semicolon at the end of it. If you do not put a semicolon at the end of a line of code, HPL3 will complain about it and refuse to run your script.

No programmer is immune from that mistake, no matter how many decades they’ve been a guru in their field. As long as you remember your semicolons, then when the errors happen, you know what to check first.

{{NavBar|HPL3/Scripting/AngelScript Fundamentals/Chapter 1 - Introduction|Chapter 1 - Introduction|HPL3/Scripting/AngelScript Fundamentals|AngelScript Fundamentals|HPL3/Scripting/AngelScript Fundamentals/Chapter 3 - Variables and Types|Chapter 3 - Variables and Types}}

[[Category:HPL3 Scripting]]
[[Category:English]]