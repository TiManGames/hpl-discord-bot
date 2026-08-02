Visual Studio Code is a lightweight code and config editor.
Featuring an integrated project folder browser and a simple but powerful interface, it is one of the best tools for developing HPL2 mods (for HPL3 it works well too, but [[CodeLite]] might be a better option).

While VS Code is open-source, its releases still contain Microsoft's telemetry and tracking.
[https://vscodium.com/ VSCodium] is a "clean" version without those elements. It is functionally identical to VS Code.

== HPL2 ==

* Check out the built-in tutorial and the [https://code.visualstudio.com/docs/introvideos/basics online tutorial]. Some particularly useful features are:
** Ctrl+Shift+F to search text in the entire project folder
** Alt+Up/Down arrows to move lines of code
** Ctrl+Shift+Alt+Up/Down to copy lines of code
** Built-in git version control interface (if you already have git installed). This is one of the more convenient ways of using git. Read more about version control [[Setting up an Online Repository | here]] and more about git in VS Code [https://code.visualstudio.com/docs/sourcecontrol/intro-to-git here].
* Open your mod folder.
* Add highlighting for HPL2 file types; Open the settings menu (Ctrl+,) and search "file associations". You can do this in the User tab (global) or the Workspace tab (will only apply to this project folder). Then add:
** <code>*.hps</code> with a value of <code>cpp</code>
** <code>*.lang</code> with a value of <code>xml</code>
** <code>*.cfg</code> with a value of <code>xml</code>
** You can also add associations for other HPL files, such as: .ent, .dae, .snt and so on. Pretty much all files in HPL2 use XML.
** This will also add auto-completion for various things (like function names) that have been written anywhere else in the project.

Unlike HPL3, using a C++ extension will make things worse for you, as HPL2's style of scripting is not fully compatible with C++ standards (mainly; built-in functions don't have to and can't be included, and the <code>&in</code> <code>&out</code> syntax).
There do exist a few AngelScript plugins for VS Code, but none of them are suitable (and several of them are abandoned).
As such, there is no good way of adding hints for built-in HPL2 script functions at the moment.

== HPL3 ==

''Main article: [[HPL3/Scripting/Scripting Guide/Setting up Visual Studio Code | Setting up Visual Studio Code]]''