////////////////////////////////////////////////////////
// flat color- Vertex Shader
//
//
////////////////////////////////////////////////////////

//---------------------------------------------
#version 150

in vec4 vtx_vPosition;
in vec4 vtx_vTexCoord0;

out vec4 px_vTexCoord0;

uniform mat4 a_mtxModelViewProjection;

///////////////////////////////
// Main program
void main()
{	
	//////////////////////
	// Position
	gl_Position = a_mtxModelViewProjection * vec4(vtx_vPosition.xyz, 1.0);

	px_vTexCoord0 = vtx_vTexCoord0;
}