Amnesia has an unused coins mechanic that is actually functional. The player can collect coins and then open special chests by spending these coins. These chests show a special GUI window for this mechanic.

{{warning | The coin mechanic has a bug in the older versions of the game where the required amount of coins gets reset to zero after loading a game save. If you use this mechanic, it would be good to inform the players that they need the [[HPL2/1.5_Update | 1.5 update]].}}

The entities that add coins to the player's "purse" are 3 variants of pouches with thalers and can be either placed in a level through the editor (they can be found in the items folder under entities) or by specifying them as the item that appears when breaking vases, pots etc. The entity property for the latter is called "ContainedItem".

However, there is no coin chest entity in the game's files. To make use of this mechanic, you will need to create one:
# Start the Model Editor
# <code>File > Open</code>
# Navigate to and open <code>/entities/gameplay/chest_small/chest_small.ent</code>, for example. You can change other chests (e.g. the treasure chest) and even doors to work as a coin chest.
# Save as a new file in your mod folder, e.g. <code>/custom_stories/MyMod/entities/chest_small_coins.ent</code>
# Open <code>Settings > User defined variables</code>
# Change the Type to "Chest" at the top of the newly opened window
# You can also customise the speed at which the chest opens when the player spends money for it if you want
# Close the properties window and save the file

Now you can place the chest in your mod and set the number of coins needed to open the chest.

{{idea| An easy way of placing custom entities is to place the original version, select it and then just swap the entity file under the general tab of entity properties.}}