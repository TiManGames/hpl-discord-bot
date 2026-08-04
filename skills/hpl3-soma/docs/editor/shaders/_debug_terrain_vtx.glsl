////////////////////////////////////////////////////////
// Terrain debug shader
//
//
////////////////////////////////////////////////////////
#version 120

//---------------------------------------------

varying vec4 gvColor;

uniform sampler2D aHeightMap;
@define sampler_aHeightMap 1

uniform mat4 a_mtxViewProj;
uniform mat4 a_mtxModel;
uniform vec4 avHeightMapOffsetAndScale;//xy = offset, zw = scale
uniform vec3 avHeightMapProperties; //x = max hegiht, y = sample offset, z = 2.0f / (height/texel) ratio

	
//---------------------------------------------

///////////////////////////////
// Main program
void main()
{	
	vec4 vVtxPos =  a_mtxModel * gl_Vertex;
	
	//////////////////////
	// Height map coord
	vec2 vHeightMapCoord = (vVtxPos.xz + avHeightMapOffsetAndScale.xy)*avHeightMapOffsetAndScale.zw;
	
	/////////////////////
	// Position
	float fHeight = texture2D(aHeightMap,vHeightMapCoord).x;
	vVtxPos.y += fHeight * avHeightMapProperties.x;	
	
	gl_Position = a_mtxViewProj * vVtxPos;
	
	/////////////////////
	// UV
	gl_TexCoord[0].xy = gl_MultiTexCoord0.xy;
	
	/////////////////////
	// Color
	gvColor = gl_Color;
	
}