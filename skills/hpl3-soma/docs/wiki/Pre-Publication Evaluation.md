{{shortPageTitle}}
= Mods =
The following items are numbered to help you keep track of where you are in this process, not as an order for a specific procedure.

== Essentials ==
# Confirm that any debug features for the mod are disabled or removed (For example, a script that skips a specific part in your mod).
# Confirm that the map cache files are up-to-date. 
# Delete [[#Excess files|excess files]].
# Confirm that the files required for each map are in their places.
# Confirm that implementation for all functionalities desired to be in ''this'' release is completed.
# Do not distribute main game folders and files along with your mod.
# If you have custom models, sounds, textures, or materials, you either include them in your mod, or create a separate [[HPL3/Modding/Mod_Dependencies|mod dependency]] and include it in your main mod (Only for HPL3).

=== Excess files ===
Make sure to remove all files and folders that are not needed for the end user in order to play the mod.

Among such files and directories are:

# Unused assets
# Developer documentation
# <code>/editor</code> directory
# <code>.gitignore</code> file
# <code>.txt</code> files
# <code>.blender</code> files
# <code>/.git</code> directory
# <code>README.md</code> file - consider replacing it with a <code>.txt</code> version

[[Category:Modding]]
[[Category:English]]