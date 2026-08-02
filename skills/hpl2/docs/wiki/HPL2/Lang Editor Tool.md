= Amnesia Lang Editor Tool - V1.1 =

[http://www.frictionalgames.com/forum/thread-12213.html Original Forum Post] 

== About ==

I've always found myself prone to making syntax errors when writing the  language file data for amnesia, but yet i found the existing Lang tool  (HplLangTool) not quite what I was looking for either. It was also  lacking a way of merging files together. So I've written up this new  tool.

== Features ==
# Reads / Writes valid XML LANG files. Provides a useful error message if there was a parsing failure (errors tab) - helpful for debugging.
# Allows appending lang files together. If there is an entry collision  the old entry is kept, and a message output to the errors tab.
# Easy to use, for adding & removing categories & entries you shouldn't even need the mouse.
# Collapsible tree structure to make categories easy to navigate.
# Resources information parsed
# Move entries between categories by dragging and dropping.
# Script support. You can now easily write scripts (C#) to generate language file content.
# SpellChecker
== Download ==

Requires .net framework 3.0 to run.

Latest Version:

[http://dl.dropbox.com/u/64805489/LangEditor/LangEditorV1.1.zip V1.1] 

Older Versions:

[http://dl.dropbox.com/u/64805489/LangEditor/LangEditorV1.0b.zip V1.0B] <br />
[http://www.mediafire.com/?umq27qt20kil27o Beta 3] <br />
[http://www.mediafire.com/?3dr3z1krs3py128 Beta 2] <br />
[http://www.mediafire.com/?57jjtdwtug6jjgx Beta 1]

== Quick Usage Guide ==

Open up a language file using "Open". The Left hand side should list all  the categories with a little "+" icon next to them (If a category has  no entries then no + sign is listed). You can expand the categories by  clicking this to show all the entries. Click an entry once to highlight  it - the text associated with this entry should appear on the right. You  can delete an entry by highlighting it and pressing the delete key.   <br /> <br />Double click and entry or category to rename it. A list of other options  are available by right clicking on on the left hand pane.   <br /> <br />Full list of Keyboard Shortcuts:

*Ctrl + O : Open
*Ctrl + S : Save
*Ctrl + N : New
*Ctrl + W : Add Category (Main tab)
*Ctrl + E : Add Entry (Main tab)
*Ctrl + P : Add Path (Resources tab)
*Shift + Delete: Delete entry (Whilst not in focus)
*Cut, Copy, Paste, Undo etc supported too.

==Unimplemented features==
*Multilanguage support
*Enabling/Disabling the spellchecker option.