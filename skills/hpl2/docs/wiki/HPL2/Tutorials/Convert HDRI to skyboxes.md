This tutorial describes how to convert HDRI images to a DDS skybox that works in HPL2.

For this tutorial you will need an HDRI of your choice (there's plenty of these to be found for free online) and [[GIMP]].

==Converting the HDR to cube textures==
# Use [https://matheowis.github.io/HDRI-to-CubeMap/ this online tool] to convert your HDR image.
# In the export settings, make sure to pick the PNG format and the 3rd export option (6 separate square images).
# Pick a resolution. Amnesia is a relatively low-resolution game, so 1024 should be enough.
# Download the resulting zip archive.
# Extract the archive. There should be 6 images titled nx, px, ny, py, nz, pz (n=negative, p=positive, x,y,z are the 3D axises).

==Assembling the DDS texture==
Start GIMP.
{{tip|You can open a cubemap that works in Amnesia to see how the file is organised.}}

# Import all 6 images (you can drag and drop the files into GIMP). The filenames should turn into layer names.
# Change the layer names (click on layer and press F2 or doubleclick) according to this naming scheme:
#* main surface (positive/negative x/y/z)
# You should end up with 6 layers named like this:
#* main surface (positive x)
#* main surface (negative x)
#* main surface (positive y)
#* main surface (negative y)
#* main surface (positive z)
#* main surface (negative z)

The layers '''must''' be called like this or you won't be able to export the image as a cubemap. Their order doesn't matter, however.

==Exporting from GIMP==
Now that the structure is ready, pick File -> Export as. Then:
* Set the image file location and then the extension to .dds. Click export. This will open export settings.
* (Optional) Set the compression to DXT5. This compression algorithm is lossy, but the quality loss shouldn't be very noticeable.
* Set "Save" to "as cube map" and export.

Your newly made DDS skybox should now work in the Level Editor!