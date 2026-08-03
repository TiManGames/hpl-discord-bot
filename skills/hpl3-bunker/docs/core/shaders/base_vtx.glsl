////////////////////////////////////////////////////////
// Base - Vertex Shader
//
//
////////////////////////////////////////////////////////
#version 120

//---------------------------------------------

//////////////////////////////////////
// Normal variables
@ifdef UseNormals
	varying vec3 gvNormal;
@endif
@ifdef UseNormalMapping || UseLiquid
	varying vec3 gvTangent;
	varying vec3 gvBinormal;
@endif

//////////////////////////////////////
// Normal variables
@ifdef UseColor || UseAngleFade
	varying vec4 gvColor;
@endif

@ifdef UseColorMul
	uniform vec4 avColorMul;
@endif

//////////////////////////////////////
// UV Animation variables
@ifdef UseUvAnimation
	uniform mat4 a_mtxUV;
@endif

//////////////////////////////////////
// Box Fog variables
@ifdef UseBoxFogNormalizedRayDir
	uniform mat4 a_mtxBoxInvViewModelRotation;
@endif

//---------------------------------------------

///////////////////////////////
// Main program
void main()
{	
	vec4 vLocalVertexPos = gl_Vertex;
	gl_Position = ftransform();
	
	//////////////////////
	// Uv
	@ifdef UseUv
		@ifdef UseUvAnimation
			gl_TexCoord[0] = a_mtxUV * gl_MultiTexCoord0;
		@else
			gl_TexCoord[0] = gl_MultiTexCoord0;
		@endif
		@ifdef UseUvCoord1
			gl_TexCoord[1] = gl_MultiTexCoord1;
		@endif
	@endif

	//////////////////////
	// Color
	@ifdef UseColor
		gvColor = gl_Color;
	@elseif UseAngleFade
		gvColor = vec4(1.0);
	@endif
	
	@ifdef UseColorMul
		gvColor *= avColorMul;
	@endif

	@ifdef UseMeshInstancing
		gvColor *= vInstanceColor;
	@endif


	//////////////////////
	// Normals
	@ifdef UseNormals || UseLiquid
		@ifdef UseSkeleton || UseMeshInstancing
			gvNormal = normalize(gl_NormalMatrix * qmul(qRotation, gl_Normal));
		@else
			gvNormal = normalize(gl_NormalMatrix * gl_Normal);
		@endif
	@endif

	//////////////////////
	// Normalmapping
	@ifdef UseNormalMapping || UseLiquid
		@ifdef UseSkeleton || UseMeshInstancing
			gvTangent =  normalize(gl_NormalMatrix * qmul(qRotation, gl_MultiTexCoord1.xyz));
			
			///NOTE: normal are and tan are reveresed, because of OpenGL texture coord system
			gvBinormal = normalize(gl_NormalMatrix * qmul(qRotation, cross(gl_MultiTexCoord1.xyz, gl_Normal) * gl_MultiTexCoord1.w));
		@else
			//To consider: Is gl_NormalMatrix correct here?
			gvTangent = normalize(gl_NormalMatrix * gl_MultiTexCoord1.xyz);
		
			//Need to do it in model space (and not view) because reflection normal mapping will fail otherwise!
			//NOTE: normal are and tan are reveresed, because of OpenGL texture coord system
			gvBinormal = normalize(gl_NormalMatrix * cross(gl_MultiTexCoord1.xyz, gl_Normal) * gl_MultiTexCoord1.w); 
		@endif
	@endif
}