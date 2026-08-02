
A Skybox is a ''type of a cubemap'' which is seemingly placed at the furthest drawing point accessible within a game's map. It is essentially the sky, horizon and ground which is used to show where the setting is in relation to the surroundings. For example, a skybox which comprises of planets, stars and asteroids will give the illusion of the player in space, even if the map looks like you're in a castle.

Skyboxes are a must have in outdoor environments. Not only can it give a sense of light, location and assist in developing in other ways, it is incredibly important in immersing the player into a level in ways that a solid-color sky can't.

{{idea|Making a skybox from scratch is an invested process. Instead, you can [[HPL2/Tutorials/Convert HDRI to skyboxes|convert a premade HDR sky to a skybox]].}}

== Fixing the inverted skybox bug ==

After Amnesia's 1.3.1 release and onwards, skyboxes render incorrectly in the game due to a bug in the DevIL library version used. You can fix it for Windows by downloading the 1.6.8 version of DevIL.dll and updating the file in the main game directory.

{| class="wikitable"
!Download
!Last access
!SHA-256
!VirusTotal
|-
|[http://yanka.is.free.fr/media/misc/DevIL.zip Private uploader]
|November 9, 2020
|669F134703E8EE3F5ED3163E2000B7B2732A1B4D2F49905A55F70111E275DF9D
|[https://www.virustotal.com/gui/file/b16a4f47363e06d9d804db936d4991fa04d7802dad0bc97ee411194ae1109797/detection  Results]
|-
|[https://sourceforge.net/projects/openil/files/DevIL%20Win32/1.6.8%20RC%202/Devil-1.6.8-rc2-win-.zip/download Sourceforge, RC2 version]
|November 9, 2020
|EFE54DF01C51126039FEB6FE2154E70B5312BF4551C1C4FBC740CFFC81CBD37D
|[https://www.virustotal.com/gui/file/b16a4f47363e06d9d804db936d4991fa04d7802dad0bc97ee411194ae1109797/detection  Results]
|-
|[https://sourceforge.net/projects/openil/files/DevIL%20Win32/1.6.8-RC1/DevIL-1.6.8-RC1-bin-win32.zip/download Sourceforge, RC1 version]
|February 26, 2021
|A7084D4A4EA445C384082CA214726E71060BA7F857DC2CA202C26B808AD1BCE2
|[https://www.virustotal.com/gui/file/574b13e5642b54c63bb740aacc594ba1a364771cb89e43dd526b9e98185e5f92/detection  Results]
|}
'''Note''': The Sourceforge downloads contain other files. Just locate DevIL.dll and discard the rest. It's currently unsure which of the two versions is better, but both should be fine. Please update the access date if you download one of the files.

Optionally, include the file with your mod and add a readme about the issue as a courtesy to the user.

Fixing the isse on Mac and Linux by replacing library versions should also be possible, however it is currently not documented.

== How do I make a Skybox? ==

For this tutorial, you will need:

* Adobe Photoshop (or for a free alternative, you may use [http://www.gimp.org/ GIMP], and may make use of this [http://www.youtube.com/watch?v=9uKBYVEyw1s video tutorial]). In this tutorial, Photoshop will be used.
* DDS plugin for your image editor ([https://developer.nvidia.com/nvidia-texture-tools-adobe-photoshop nVidia texture tools for Photoshop] or [https://code.google.com/p/gimp-dds/ the DDS plugin for GIMP])
* A raw collection of images which will make up your skybox.
* The HPL2 Level Editor

=== Step 0: Understanding the construction of a Skybox ===

In order to construct the skybox, you need to know how one is laid out. Here is the layout as read properly by Amnesia 1.3 and below. ''Top'' is at an angle because the new orientation of that raw image does not match up to the ''Left''. Once you place ''Top '' onto the canvas, rotate it 90 degrees clockwise.

[http://puu.sh/hKAiV/cae3b2e8ed.png?direct&640 External image]

Please note that this may apply only to the images on the webpage above. If there are issues and you're using the above layout, please shoot me a Personal Message on the forums. I placed a link at the bottom of this wiki page.

=== Step 1: Setting Up ===

The Skybox you'll be making if you are using the above website will likely be constructed using five raw images of 512×512 dimensions. This isn't much of a dilemma, since while there are five images, the 'missing' section is ''Bottom'', which you can simply make a 512×512 square of a color (I tend to use Grey, but it is completely optional).

Another option is to double the dimensions of your images (so in this case, 1024×1024, making a 6144×1024 sized skybox). It's completely optional, and won't too greatly affect your end result, because the skybox will be scaled down appropriately to suit the engine's capability.

Download your skybox and extract it if you're using the link above.

If you're using Windows 7, roll over one of your extracted images with your mouse. In most cases, the dimensions of the image will be displayed in the tooltip. In my case, it is 512×512, which I will be using for the rest of the tutorial.

[http://puu.sh/hKARM/8e45008788.jpg?direct&640 External image]

If such an option is unavailable, open the image in Paint. The dimensions will be on the bottom of the window.

=== Step 2: New Project ===

1. Start a new Project in Photoshop (File > New…)
2. Set the Height to the vertical dimensions in which your images are (512 in this case).
3. Set your Width to your Height multiplied by 6. In my case, 512 x 6 = 3072.
4. Make sure both Height and Width are in Pixels, then you're all good to press OK.

[http://puu.sh/hKzLB/5428c5b223.png?direct& External image]

To make this process easier on how you set out the images, and to assist with snapping, we can make use of the grid features in Photoshop.

[http://puu.sh/hKAZ5/9851328fbc.png?direct&640 External image]

1. Navigate to ''Edit > Preferences > Guides, Grid & Slices.''
2. Under the 'Grid' box, set the Gridline to 512 pixels (or the vertical size of your images), and make the subdivision 1, 2 or 4 (any higher is unnecessary).
3. If your grid is not visible, navigate to ''View > Show > Grid''. This will give you six sections of your image. (If the grid, at any point begins to annoy you or need to check if the images are correctly aligned against their 'partner', pressing ''Ctrl+H'' will hide/show the grid).
=== Step 3: Import ===

Import your images. There are many ways to do this, but for the sake of simplicity, just select the five images and drag them onto the canvas. Then, comparing them to the filenames (if the layers do not have their respective filenames), lay them out within the grid in the correct format. '''Don't forget to rotate ''Top'' 90 degrees clockwise!'''

[http://puu.sh/hKBiO/43fad4f6c7.jpg?direct&640 External image]

Now create a new layer (the paper icon in the Layers window, which in my case, is the second last option, or second from the right)

[http://puu.sh/hKBpw/5611b6b87a.png?direct& External image]

Use the Paint bucket on this layer to make it any color you want, but not one which will be the same as the sides of your ''Top'' or ''Right'' images.

[http://puu.sh/hKBx2/2b1f805c67.jpg?direct& External image]

If the Gradient tool appears in the tools pane, just click and hold and select the Paint Bucket Tool. To change the color, click on the foreground color in the bottom of your tools pane (mine was black), then select a color using the ''Color Picker. '' As stated earlier, I just made mine RGB 128, 128, 128 (or #808080 in Hex).

If your specified color covers the other images, move your layer as low as possible below the other layers, but higher than background, as that will cover your layer.

[http://puu.sh/hKBVC/e4ffd9c7cf.png?direct& External image]

Now just hide the text, if you're like me and have it there. I grouped mine, so I can just select the eye on the folder, and that will hide all of them. Each eye can be clicked individually however to hide them all just the same way.

Which gives us our raw six images which will become our skybox.

[http://puu.sh/hKCja/77a79c4c52.jpg?direct&640 External image]

=== Step 4: Saving for use in the Level Editor ===

First of all, if you didn't download the nVidia tools as I mentioned in the "What is a Skybox?" for .dds saving, then save your skybox as a .psd, close Photoshop, then download and install the nVidia tools.

1. Navigate to File > Save As…
2. [http://puu.sh/hKCYN/814a062ae8.png Change the save format from .psd to D3D/DDS (.dds)]
3. Save the file somewhere. You can put it wherever you want in the Amnesia files (provided resources.cfg can find it) or somewhere and move it there later.
4. Click "Save" and the following dialog box will come up.

[http://puu.sh/hKD4M/6308e8e6e3.png?direct& External image]

5. Make sure your settings match mine. Chances are, all you'll need to change is 2D Texture to Cubemap (which will be in the smaller drop menu on the left side).
6. Click "Save". You may need to wait a bit, depending on your computer.

=== Step 5: Importing into the Level Editor ===

If the Skybox is not already somewhere in your Amnesia folders, move it somewhere there so it can be found in a directory specified by the resources.cfg file. For the sake of custom story exporting, let's assume I placed it here: custom_stories/test/skybox/mountains.dds

Now we just open the Level Editor, load up your map (if necessary), then navigate to ''Edit > Level Settings''. Tick "Active" and set the texture to your skybox directory.

[http://puu.sh/hQ3z2/807c7e7380.jpg?direct&600 External image]

Done!

== Other methods of making skyboxes ==

Some Skyboxes are great. Instead of requiring construction in Photoshop, they are already set out in a format which looks great to other Skybox building applications. What we made earlier by placing the six images side by side was called a Horizontal strip.

[http://www.cgtextures.com/tutorials/cubemaps/images/cubemap_layouts.gif?direct& External image]

As you can see, there are many ways to create a Skybox. [http://developer.amd.com/tools-and-sdks/archive/legacy-cpu-gpu-tools/cubemapgen/ AMD/ATI's application CubeMapGen] is able to load vertical cross images, which you can find on the internet and even assemble yourself with enough practice. CubeMapGen is also able to preview the Skybox, and export .dds images in a similar way the NVidia Tool does in Photoshop.

[http://puu.sh/hRHHW/014f9dc5ec.jpg?direct&800 External image]

There are likely other methods, but I won't go too in-depth with those.

== Raising the skybox horizon ==

As we can see above in CubeMapGen, the horizon, or rather, the moment the grey bottom meets the sides of the cubemap is quite low. As such, it looks unrealistic when viewing from the edge of your walkable map boundary. In Photoshop, raising the horizon is rather simple!

=== Step 1: Have your Horizontal Strip ready ===

The easiest way to do this is to do so with a Horizontal Strip, or the same format as explained by the above tutorial.

[http://puu.sh/hRIst/76954162a1.jpg?direct&800 External image]

I am using a different skybox to the previous tutorial, since you can use just about any skybox, as most horizons are in the approximate middle of the cubemap.

=== Step 2: Color ===

Create a Layer and push it all the way to the bottom and color it something like grey. This will serve as your bottom tile of your basemap, and when you delete parts of your skybox, the grey color will appear and remain the same, allowing the blend from the sides of the map and the bottom to become even lesser noticeable.

[http://puu.sh/hRJ6d/84e4df9120.jpg?direct&800 External image]

=== Step 3: Select and Delete ===

Use the Rectangular Marquee Tool to select the entire bottom half of the image. Be default, that tool is the second from the top of Photoshop's Tools window, and is shaped like a square with a few openings between the outline.

Starting slightly outside the image on the left side, click, hold and drag to the bottom right corner of the image, effectively selecting the whole bottom half. Zoom in if you have to.

[http://puu.sh/hRJok/1b125282b6.jpg?direct&800 External image]

Now, select your Front from the layers window and then press the Delete key. It will remove the bottom half of your front. Now repeat by selecting your Back, Left and Right layers and deleting those.

[http://puu.sh/hRKmP/90935ba4c3.jpg?direct&800 External image]

=== Step 4: Export ===

Now just save as you would by following the earlier tutorial above.

Here's how my Skybox looks.

[http://puu.sh/hRKP5/5ab89283cd.jpg?direct&800 External image]

Now we have a flat horizon, which hopefully will not be visible to the player. You can adjust the horizon point by lowering the amount of area which you delete. Just remember not to delete any part of the 'Top' image, as then you will have half a top on your skybox!