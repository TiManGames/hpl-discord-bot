Despite "Amnesia: A Machine For Pigs" being developed on an almost exact same engine version, there are some key differences that cause porting assets between MFP and TDD to not be a "drag and drop" / "copy paste" process.

== Asset files and their meanings ==
Firstly, you need to understand what each file in an asset folder is.
These file types are shared across many assets, be it static objects, entities or other.
* .dds (and other image formats) - these are textures; they store various data about how a model is coloured and rendered.
* .mat - this is a material file. It binds multiple textures to define how a model is coloured and rendered. A model can use multiple materials for its different parts.
* .dae or .fbx - These are 3D models (.dae = COLLADA format, .fbx is FBX format). FBX is a binary format which makes it harder to work with; to work with collada, you only need a text editor.
* .ent - entity files. This file tells the game how to use a model; it defines collision bodies, if it's an inventory item or an object you can grab, and many more. Multiple entity files can use the same model (therefore when you make custom entities, you don't need to copy any of the model, texture and material files)

== Why copy paste doesn't work == 
TDD assets almost always used their own materials. Most models have all their materials (and their textures) in the same folder.

In MFP however, many models reference materials from other folders. This means that when you copy paste the asset folder, quite often the asset will be missing material files.

It is therefore recommended to gather all materials while porting an asset. This way you wont encounter nasty surprises later.

== How to find missing materials ==
Let's take a cage model for example. It is located in <code>/Machine for Pigs/static_objects/castlebase/special/cage_01.dae</code>.

Open the file with a text editor and find the <code><library_images></code> section. This is the part of the file which lists all materials. Note that the file extensions don't matter, because the engine discards them and uses the name only to find the material.

<syntaxhighlight lang="xml">
  <library_images>
    <image id="Map #1-image" name="Map #1">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\StaticObjects\cellarbase\alley_sidewalk.psd</init_from>
    </image>
    <image id="Map #13-image" name="Map #13">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\StaticObjects\castlebase\cage_details.psd</init_from>
    </image>
    <image id="Map #14-image" name="Map #14">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\entities\item\wooden_bucket\wooden_bucket.jpg</init_from>
    </image>
    <image id="Map #15-image" name="Map #15">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\entities\gameplay\padlock_rusty\padlock.jpg</init_from>
    </image>
    <image id="Map #2-image" name="Map #2">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\StaticObjects\cellarbase\fence_metal.psd</init_from>
    </image>
    <image id="Map #4-image" name="Map #4">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\StaticObjects\cellarbase\cellarbase_details.jpg</init_from>
    </image>
    <image id="Map #12-image" name="Map #12">
      <init_from>file://C:\Users\WesleyTack\Desktop\amnesia_raw\textures\decals\blood_stain_large.psd</init_from>
    </image>
  </library_images>
</syntaxhighlight>

This is a bit of an extreme example, because none of the materials are placed in the same directory as the model. Nonetheless; you will need to find all of these materials, and copy them (along with all textures used in them!) to the asset folder in your mod.

You don't need to put them in the same directories as written in the file, the game will find the materials anyway. Also it would be great if you checked for doubles - if your mod included one of the textures already, it will be enough, you don't need to copy it again.

When you copy all files, open the ModelViewer and load the model from your mod. Asses if all the textures are there and if they were not overriden by something else. If that is the case, change the material's filename and its name in <code><library_images></code> of the model file (this is how retexturing is done, by the way).

== Porting entities ==
When porting MFP entity files, make sure the entity type is compatible with TDD. Almost all entities will work out of the box, but [[HPL2/AMFP/NewEntities|MFP features new entity types]] that weren't included in TDD and will crash the game. In that case, you will need to edit the entity with ModelEditor.