#version 150

////////////////////////////////////////////////////////
// Flat color - Fragment Shader
//
// A flat fragment shader - draws stuff using a given color
////////////////////////////////////////////////////////

uniform vec4 avColor;

in vec4 px_vTexCoord0;

out vec4 px_vColor;

void main()
{
	px_vColor = avColor;
}