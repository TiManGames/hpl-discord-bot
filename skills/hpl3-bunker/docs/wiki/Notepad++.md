=Notepad++=

[http://notepad-plus.sourceforge.net Notepad++] is a text editor with a ton of features useful when writing scripts for the HPL2 engine. Syntax colouring, auto-complete, call tips and so on and on. While it supports many different languages it does not, for obvious reasons, know much about our script functions. Here is a quick how-to for setting up Notepad++ so that it can auto-complete, give tips and give code snippets for .hps files.

==Notepad++ Setup==

##Download [http://notepad-plus-plus.org/ Notepad++]
##Settings menu - Preferences - File Association -> customize add a .hps to registered exts
##Settings menu - Preferences - Backup/AutoCompletion -> Enable Function Completion and Function Parameters Hint on input.
##Download [https://oldwiki.frictionalgames.com/_media/hpl2/third_party_tools/text/userdefinelang.zip userdefinelang.zip], unzip and go to Language - Define your dialogue -> Import unzipped file "userDefineLang.XML"
##Download [https://oldwiki.frictionalgames.com/_media/hpl2/third_party_tools/text/hps.zip hps.zip], unzip and go to Program Files<nowiki>\</nowiki>Notepad++<nowiki>\</nowiki>plugins<nowiki>\</nowiki>APIs and put hps.xml here.


{{bug|Notepad++ still isnt showing you colors for syntaxes and similar things. <br/>Fix: Hit __LANGUAGE__ and select at the bottom: HPS}}
===Notepad++ will now be able to===

''' .hps script files should have the text colourized properly when you open them.'''
''' Suggest functions, callbacks and other specific words when you begin to type, '''pressing enter'''  completes the word. The suggestion window can be shown manually using '''ctrl-space'''.'''
''' When re-typing a custom word, say "bMyBool", pressing '''ctrl-return'''  will suggest auto-completions for words found in the current .hps file you are editing.'''
''' Give a description of variables needed for functions and what type of variable it returns, if any. For example, type "AddTimer(" and it will show the variables needed. This can also be brought up if pressing '''ctrl-shift-space'''  when in a function.'''

==QuickText==

With this plugin you can extend functionality further. If you write a function then press '''ctrl-shift-return'''  and it will auto-write a whole code snippet.

##Using the Plugins menu in Notepad++, start Plugin Manager, in the available tab, select QuickText and install. Might have to [http://sourceforge.net/tracker/download.php?group_id=183263&atid=904542&file_id=375790&aid=3009773 download manually] instead.
##By default QuickText uses '''ctrl-return''', this collides with a Notepad++ shortcut and does not work. Use Settings → Shortcut Mapper … → Plugin Commands and change this to '''ctrl-shift-return''', on line 202.
##Download [https://oldwiki.frictionalgames.com/_media/hpl2/third_party_tools/text/quicktext.zip quicktext.zip], unzip and open in Notepad++, copy its content.
##Open the file Notepad++/plugins/Config/QuickText.ini in Notepad++ and locate the row with [15], select it and paste the content from the previous step to replace and insert our HPL defined quicktext settings.
##Close and start Notepad++ to activate it's functionality.

===With QuickText Notepad++ will now be able to===

''' Write a function name and press '''ctrl-shift-return'''  and the rest of the function should auto-complete, for each following '''ctrl-shift-return'''  you should move through the different places. For example type “for” then press '''ctrl-shift-return''', it should do:'''

<pre>
for(X;X;X){
	X
}
X
</pre>

Then for each '''ctrl-shift-return'''  the cursor should jump to the X positions (they are not visible, only to show locations in example). There are also extra function auto-completes, for example add an s after for or if to make it a single line without the {}.

That's it, code snippets and function lists can be extended further of course by the user if wanted! '''Take note that QuickText can be a little buggy, for example the ctrl-shift-return to jump inside a function does not work reliable with all functions.'''