=Debugging scripts=
This article provides some tips about debugging HPL scripts.

==Introduction==
Here are some fast tips to make your scripting process much easier.

*Make sure you have [[HPL2/Development_Environment|the debug menu]] turned on. This will allow you to reload the script easily (use the '''F2''' shortcut).
*Use windowed mode to switch (Alt-Tab) between the game and your code faster
*Make sure to use a text editor with syntax highlighting (use C++) and a line count. The most common one is [[Hpl2:Third_party_tools:text:notepad|Notepad++]]. Check the ones available [[HPL2/Third party tools|here]] for alternatives. '''Syntax highlighting is <u>crucial</u> for finding bugs quickly.'''

{{tip|Don't change scripts before you load the map. Doing that with any errors in the script will make the game crash when loading that map. Instead, load the map in the game before editing the script.}}

==The Error window==

If your script has an error, starting or reloading the map it is tied to will result in an error screen (or a crash screen). The errors which will cause a crash are syntax errors, which for example are missing a colon (;), a bracket (one of these: {}), a quotation mark (") around a string.
The crash window looks like this:

[[File:HPLcrash.png|frame|left|A crash window.]] {{clr}}

If you reload the map with script syntax errors in the game, it will pop up a window with a similar message. 

In the message, you can see:

*The map which caused the crash (indicated by the mentioned .hps file)
*Code position which caused the crash: <code>main (132, 2): ERR : Unexpected end of file.</code>

In this example, 132 is the line of code which caused the crash and 2 is the column. The column will rarely be useful as it is inprecise and uncomfortable to count. Keep in mind that certain errors will show an incorrect line of code - this happens when the engine knows where something starts and you missed the "end" marker.

==Syntax highlighting==

[[File:shlcode.jpg|frame|left|Syntax highlighting - note the colours!]]{{clr}}

If you use syntax highlighting capability that comes with code editors, you will be able to find the bug much more quickly. This is because string literals (the things written in double quotes, "like this") are displayed in a different color then the rest of the text; so if you forget a closing quote, the entire rest of the code will be highlighted in the same colour. Your error will be close to where the colour starts.

Even if the error is of a different nature (it might not be too easy to spot) it will be easier compared to not having syntax highlighting, when the text looks uniformly black.

Most importantly, having syntax highlighting will help you avoid this type of error ''as you write the script'', since you'll be immediately able to see that you've accidentally omitted a quotation mark.

HPL2 engine uses AngelScript for scripting, but since its syntax is almost identical to C++, you can set up your editor to use syntax highlighting for C++. To make scripting more comfortable:

*In your OS, associate .hps files with your editor (you will be able to double click them and it will start the editor)
*Associaste the .hps extension with C++. This way you won't have to set the language each time you load a script.