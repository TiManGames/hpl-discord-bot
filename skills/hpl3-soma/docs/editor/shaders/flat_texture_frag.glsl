#version 150

////////////////////////////////////////////////////////
// Flat textured - Fragment Shader
//
// A flat fragment shader - draws stuff with a texture
////////////////////////////////////////////////////////

in vec4 px_vTexCoord0;
out vec4 px_vColor;

uniform vec4 avColor;
uniform float afBrightness;

uniform sampler2D aTextureMap;
@define sampler_aTextureMap 0

void main()
{
	px_vColor.rgb = texture2D(aTextureMap, px_vTexCoord0.xy).rgb * avColor.rgb * afBrightness;
	px_vColor.a = texture2D(aTextureMap, px_vTexCoord0.xy).a;

	if(px_vColor.a < 0.01) discard;
}