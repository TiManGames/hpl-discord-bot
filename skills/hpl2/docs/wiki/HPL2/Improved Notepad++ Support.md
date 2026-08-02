= Improved Notepad++ HPS Support =

The old notepad++ files which most people have installed had faults.  Below is a list of fixes made to the existing hps support:

Hps Language Definition File (hps.xml)

* Removed several unsupported functions
* Added 3 new functions which are supported as of 1.2 justine patch
* Added various missing supported type keywords (E.g uint)
* Added keywords for classes, interfaces, enumarates, typedef and funcdef and possibly others
* Removed "PlayerStartArea_" keyword
* Probably a couple of other things too

Hps user defined lang file (userdefinedlang.xml)

* Added folding regions (See sample hps file)
* Overhauled color coding
* Added appropriate color coding for all supported keywords
* Added color for OnStart, OnLeave, OnEnter and OnGameStart events
* Strings now have the escape char defined

[http://i.imgur.com/BHHDS.png Sample Script]  <br /> <br />I have also included a sample script file, and a text document  containing installation instructions (note that these instructions will  still work if you already have the current version installed - but you  may have to restart notepad++ to see the changes take effect)   <br /> <br />[http://www.mediafire.com/?1728xdlv7d9q1k8 Download link]

[http://www.frictionalgames.com/forum/thread-12213.html Original Post]