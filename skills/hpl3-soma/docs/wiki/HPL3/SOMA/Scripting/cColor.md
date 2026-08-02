A four-channel color unit which stores float-based RGBA data. Color channel values are stored using a 0.0 - 1.0 range.

== Constructors ==

{| class="wikitable"
! Constructor !! Description
|- 
| <syntaxhighlight lang="c++" inline>cColor()</syntaxhighlight> || Creates a color with a default value of opaque black.
|- 
| <syntaxhighlight lang="c++" inline>cColor(float, float)</syntaxhighlight> || Creates a color with the first parameter given to all the RGB values (the color will be a shade of grey) and the second parameter given to the alpha channel.
|- 
| <syntaxhighlight lang="c++" inline>cColor(float, float, float)</syntaxhighlight> || Creates an opaque color using the given values as RGB data.
|- 
| <syntaxhighlight lang="c++" inline>cColor(float, float, float, float)</syntaxhighlight> || Creates a color using the given values as RGBA data.
|}

== Fields ==

{| class="wikitable"
! Field Name !! Type !! Description
|- 
| r || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The value of the red channel.
|- 
| g || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The value of the green channel.
|- 
| b || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The value of the blue channel.
|- 
| a || <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || The value of the alpha channel.
|}

== Functions ==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|- 
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || ToLinearSpace || <syntaxhighlight lang="c++" inline>const float afPower,</syntaxhighlight><br /><syntaxhighlight lang="c++" inline>const bool abCorrectAlpha,</syntaxhighlight><br /><syntaxhighlight lang="c++" inline>const</syntaxhighlight> || Returns the color converted into the linear space. (See remarks.)
|- 
| [[../cColor|<syntaxhighlight lang="c++" inline>cColor</syntaxhighlight>]] || ToSRGB || <syntaxhighlight lang="c++" inline>const bool abCorrectAlpha,</syntaxhighlight><br /><syntaxhighlight lang="c++" inline>const</syntaxhighlight> || Returns the color converted into the [[wikipedia:sRGB|sRGB]] space. (See remarks.
|}

== Remarks ==

Read [http://stackoverflow.com/questions/12524623/what-are-the-practical-differences-when-working-with-colors-in-a-linear-vs-a-no this post on StackOverflow] for an explanation on the differences between the linear color space and the sRGB color space.

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__