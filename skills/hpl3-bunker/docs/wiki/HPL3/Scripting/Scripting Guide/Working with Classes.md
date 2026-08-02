{{Hpl3ScriptingGuideMenuAdvanced}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
All of the HPL3 engine classes can be used in script files as you desire, most of the objects are retried via helper or Api functions, rather than creating the class instance yourself. You can find more about these functions in the Scripting Api page of the game you work on. Classes are usually used only in case you need extended functionality for something the helper functions cannot provide by themselves.
{{tip|As a general rule of thumb: '''Use HPL3 classes only when you cannot find what you are looking for in the helper files or the scripting api. The classes merely offer some extended functionality which may not be found in the helper files.'''}}
===Example===
Let's say you want to change the position of an entity through script. Usually, in order to perform something on entities, you would use a function that starts with <code>Entity_</code>. However, some things cannot be done through helper functions. The class <code>iLuxEntity</code> provides additional useful functionalities for entities. In order to retrieve a class object of an entity, you need to use <code>Map_GetEntity</code>:
<syntaxhighlight lang="c++">
void MoveEntityPosition()
{
	// Create a 3D Vector and save the position data into it
    // X: 55, Y: 5, Z: 25
	cVector3f positionData = cVector3f(55, 5, 25);
		
	iLuxEntity@ entity = Map_GetEntity("MyEntity"); // Get the iLuxEntity object of our entity in the map
	entity.SetPosition(positionData); // Set the new position of the entity
}
</syntaxhighlight>
| style="width:0.1%" |
|}
Every technical feature in HPL3 has a corresponding class to it (Lights, Billboards, Materials, GUI, etc), which makes scripting in HPL3 very flexible and allows you do modify anything through script.
== See Also ==
* [[HPL3/Scripting/AngelScript_Fundamentals/Chapter_8_-_Classes| Classes - AngelScript]]

{{NavBar|HPL3/Scripting/Scripting_Guide/Advanced Topics - Introduction|Advanced Topics - Introduction|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Object Handles|Object Handles}}

[[Category:HPL3 Scripting]]
[[Category:English]]