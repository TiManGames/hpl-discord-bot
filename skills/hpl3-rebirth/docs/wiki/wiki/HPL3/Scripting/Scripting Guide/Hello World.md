{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}

{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
{{Note|From this moment in this guide, we will write out script on the MinimalCustomMapMod mod that comes with SOMA and Amnesia: Rebirth.}}

Let’s start by writing a very simple script. Like every programming tutorial, we will start with a "Hello World” message.

We want the message to be displayed on the screen when we load our map, so for that, we will go to <code>OnStart</code>, and inside those curly brackets, add: <pre>
cLux_AddDebugMessage("Hello World!");
</pre>Don’t worry about what it means just yet.

The code should look something like this:<syntaxhighlight lang="c++">
////////////////////////////
// Run first time starting map
void OnStart()
{
	cLux_AddDebugMessage("Hello World!");
}
</syntaxhighlight>Let’s save our script and launch our mod via CodeLite.

Once our map is loaded, we should get basically a black screen with a handful of text around the edges. In the lower left corner, you should see the text “Hello World!”.

<span>{{Note|If you cannot see the text, press F5, which reloads the map.}}</span>
| style="width:0.1%" |
|}
[[File:Debug message tut.png|thumb|"Hello World!" will appear at the bottom left when using printing it to the screen.|alt=|left]] {{clr}}
==Conclusion==
we used the code <code>cLux_AddDebugMessage</code> followed by an opening and closing parentheses. This is a '''function call''', which you will learn more about in the next chapter.

For now, just know that this function’s job is to print text onto the screen. Within the parentheses is some text within quotation marks, '''“Hello World!”'''.
This is what is known as a <code>[[HPL3/SOMA/Scripting/tString|string]]</code>. The important part to note here is that it is the text that actually appeared in the game itself.

== See Also ==
*[[HPL3/Scripting/AngelScript_Fundamentals/Chapter_2_-_Structure_of_a_Script#Hello_World|Hello World - AngelScript]]

{{NavBar|HPL3/Scripting/Scripting_Guide/Scripting Workflow and Structure|Scripting Workflow and Structure|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Calling Functions and Function Callbacks|Calling Functions and Function Callbacks}}

[[Category:HPL3 Scripting]]
[[Category:English]]