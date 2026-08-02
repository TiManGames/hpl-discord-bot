=Introduction=
ATDD version 1.5 added the ShowScreenImage() function, which was previously available in AAMFP. Some of the workings of this function are a little counter-intuitive, so the purpose of this page is to explain it a little. This is based off of the author's experiments in ATDD 1.5, so it's not definitive! It's also assumed that these notes apply to AAMFP in the same way, but that has not been tested.


=Function=
<syntaxhighlight lang="c++">
void ShowScreenImage(string &in asImageName, float afX, float afY, float afScale, bool abUseRelativeCoordinates, float afDuration, float afFadeIn, float afFadeOut);
</syntaxhighlight>

Displays an image file directly onto the screen.

# ''asImageName'' - The image file to render (.jpg, .png, .tga, .dds) (see [[HPL2/Tutorials/ShowScreenImage()#Size|Size]])
# ''afX'' - The X position of the image, relative to the centre of the screen (see [[HPL2/Tutorials/ShowScreenImage()#Placement|Placement]])
# ''afY'' - The Y position of the image, relative to the centre of the screen (see [[HPL2/Tutorials/ShowScreenImage()#Placement|Placement]])
# ''afScale'' - The size of the image in pixels, or original image size if negative (see [[HPL2/Tutorials/ShowScreenImage()#Size|Size]]) 
# ''abUseRelativeCoordinates'' - If true, X and Y represent a fraction of the entire screen resoltion, otherwise they are pixel co-ordinates (see [[HPL2/Tutorials/ShowScreenImage()#Placement|Placement]])
# ''afDuration'' - The duration, in seconds, that the image is displayed for (see [[HPL2/Tutorials/ShowScreenImage()#Timing|Timing]])
# ''afFadeIn'' - The time, in seconds, to fade in the image (see [[HPL2/Tutorials/ShowScreenImage()#Timing|Timing]])
# ''afFadeOut'' - The time, in seconds, to fade out the image (see [[HPL2/Tutorials/ShowScreenImage()#Timing|Timing]])


=Size=
* Note that the ''afScale'' argument is ''not'' actually the scale of the image: it is the ''size in pixels''. This is not relative and does not take the screen resolution into account, so an image will appear bigger or smaller at lower or higher resolutions respectively.
* If the size is specified, the image will be rendered onscreen as a square quad, even if the image file is non square. So if the desired effect is to display a non-square image, it will need to be padded out with transparent pixels in order to make it render without distortion.
* If the size is given as -1 (or any number less than 0) then the actual pixel size and shape of the image file.


=Placement=
* The origin of the screen-space is the centre. This means that [0, 0] is the centre of the screen regardless of screen resolution, and regardless of ''abUseRelativeCoordinates''.
* The origin of the image-space is the top-left. This means that the co-ordinates define where the top-left corner of the image will go.
* If ''abUseRelativeCoordinates'' is ''false'', then X and Y represent the co-ordinates of the top-left corner of the image, relative to the centre of the screen, ''expressed as actual pixels''.
* If ''abUseRelativeCoordinates'' is ''true'', then X and Y represent the co-ordinates of the top-left corner of the image, relative to the centre of the screen, ''expressed as a fraction of the screen resolution width or height''.
* The relative co-ordinates still use the centre of the screen as the origin, so the top-left corner of the screen is [-0.5, -0.5] and the bottom-right corner is [0.5, 0.5]. Any relative co-ordinate greater than 0.5 will put the image outside of the screen.


=Timing=
* The total time that the image will be displayed is ''afFadeIn'' + ''afDuration'' + ''afFadeOut''.
* ''afDuration'' counts from when the fade in is finished. ''afFadeOut'' counts from when ''afDuration'' is finished. 
* Calling ShowScreenImage() again will replace the current image, regardless of duration or fade times.


=Examples=
<syntaxhighlight lang="c++">
// Centred:
ShowScreenImage("image.dds", -150.0f, -150.0f, 300.0f, false, 3.0f, 0.0f, 0.0f);
// Size: 300 x 300 pixels
// Placement: centred on the screen (image-origin is placed image-size/2 from the screen-origin)
// Timing: 3 seconds, no fading

// From top-left:
ShowScreenImage("image.dds", -0.45f, -0.45f, -1.0f, true, 2.0f, 1.0f, 2.0f);
// Size: original pixel size and shape of the image file
// Placement: near the top-left corner, with a 5% margin relative to the screen size
// Timing: 5 seconds, including fading

// From top-centre:
ShowScreenImage("image.dds", -0.48f, 0.0f, 100.0f, true, 0.0f, 2.0f, 2.0f);
// Size: 100 x 100 pixels
// Placement: near the top-centre, with a 2% margin relative to the screen size
// Timing: 4 seconds, fading out immediately after fading in

// Bottom-right - not reliable
ShowScreenImage("image.dds", 0.25f, 0.25f, 270.0f, true, 1.0f, 1.0f, 1.0f);
// With a screen resolution of 1920 x 1080, this would fit neatly into the bottom-right 1/16 of the screen (1080 / 4 = 270).
// Unfortunately, if the resolution was lower, it would not fit on the screen. And if the resolution was higher, it would not reach the edges.

// Full-screen kinda... top-left focussed
ShowScreenImage("image.dds", -0.5f, -0.5f, 3840.0f, true, 1.0f, 1.0f, 1.0f);
// With a 4k screen resolution of 3840 x 2160, this would fit the full screen.
// The centre of the image would be at the centre of the screen at 4k, but would move towards the bottom-right with lower resolutions.
// At lower resolutions the right and bottom of the image would be cropped. At higher resolutions it would not fill the screen.

// Full-screen kinda... centre focussed
ShowScreenImage("image.dds", -0.5f, -0.5f, 3840.0f, true, 1.0f, 1.0f, 1.0f);
// With a 4k screen resolution of 3840 x 2160, this would fit the full screen.
// The centre of the image would stay on the centre of the screen, whatever the resolution.
// At lower resolutions all the edges would be cropped. At higher resolutions it would not fill the screen.
</syntaxhighlight>


=Conclusion=
There are lots of things you can do with ShowScreenImage() if you use it creatively!

...But if you need to place an image relative the the right-hand edge or bottom of the screen, or relative to the screen resolution, it might be tricky, and might not be future-proof.