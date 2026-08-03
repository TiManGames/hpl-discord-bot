////////////////////////////////////////////////////////
// Terrain debug shader
//
//
////////////////////////////////////////////////////////
#version 120

//---------------------------------------------

uniform sampler2D aHeightMap;
@define sampler_aHeightMap 1

uniform mat4 a_mtxViewProjection;
uniform mat4 a_mtxModel;
uniform mat4 a_mtxModelViewProjection;
uniform float afHeightOffset;
uniform vec4 avHeightMapOffsetAndScale;//xy = offset, zw = scale
uniform vec3 avHeightMapProperties; //x = max hegiht, y = sample offset, z = 2.0f / (height/texel) ratio

varying float gfHeight;
	
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
	gfHeight = texture2D(aHeightMap,vHeightMapCoord).x;
	vVtxPos.y = gfHeight * avHeightMapProperties.x + afHeightOffset;	
	
	gl_Position = a_mtxViewProjection * vVtxPos;
	
	/////////////////////
	// UV
	gl_TexCoord[0].xy = gl_MultiTexCoord0.xy;
}