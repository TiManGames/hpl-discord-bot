{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|[[../../cCamera|cCamera]]|[[#cScene_CreateCamera|cScene_CreateCamera]]([[../../eCameraMoveMode|eCameraMoveMode]] aMoveMode)|}}
{{CodeDocSummaryItem|[[../../cViewport|cViewport]]|[[#cScene_CreateViewport|cScene_CreateViewport]]([[../../cCamera|cCamera]] @apCamera, [[../../cWorld|cWorld]] @apWorld, bool abAddLast)|}}
{{CodeDocSummaryItem|[[../../cWorld|cWorld]]|[[#cScene_CreateWorld|cScene_CreateWorld]](const [[../../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#cScene_DestroyCamera|cScene_DestroyCamera]]([[../../cCamera|cCamera@]] apCam)|}}
{{CodeDocSummaryItem|void|[[#cScene_DestroyViewport|cScene_DestroyViewport]]([[../../cViewport|cViewport@]] apViewPort)|}}
{{CodeDocSummaryItem|void|[[#cScene_DestroyWorld|cScene_DestroyWorld]]([[../../cWorld|cWorld@]] apWorld)|}}
{{CodeDocSummaryItem|[[../../cWorld|cWorld]]|[[#cScene_LoadWorld|cScene_LoadWorld]](const [[../../tString|tString]] &in asFile, int aFlags)|}}
{{CodeDocSummaryItem|void|[[#cScene_Reset|cScene_Reset]]()|}}
{{CodeDocSummaryItem|void|[[#cScene_SetCurrentListener|cScene_SetCurrentListener]]([[../../cViewport|cViewport@]] apViewPort)|}}
{{CodeDocSummaryItem|[[../../cBeam|cBeam]]|[[#cScene_ToBeam|cScene_ToBeam]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cBillboard|cBillboard]]|[[#cScene_ToBillboard|cScene_ToBillboard]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cForceField|cForceField]]|[[#cScene_ToForceField|cScene_ToForceField]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cLensFlare|cLensFlare]]|[[#cScene_ToLensFlare|cScene_ToLensFlare]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cLightBox|cLightBox]]|[[#cScene_ToLightBox|cScene_ToLightBox]]([[../../iLight|iLight@]] apLight)|}}
{{CodeDocSummaryItem|[[../../cLightDirectional|cLightDirectional]]|[[#cScene_ToLightDirectional|cScene_ToLightDirectional]]([[../../iLight|iLight@]] apLight)|}}
{{CodeDocSummaryItem|[[../../cLightPoint|cLightPoint]]|[[#cScene_ToLightPoint|cScene_ToLightPoint]]([[../../iLight|iLight@]] apLight)|}}
{{CodeDocSummaryItem|[[../../cLightSpot|cLightSpot]]|[[#cScene_ToLightSpot|cScene_ToLightSpot]]([[../../iLight|iLight@]] apLight)|}}
{{CodeDocSummaryItem|[[../../cMeshEntity|cMeshEntity]]|[[#cScene_ToMeshEntity|cScene_ToMeshEntity]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../iRopeEntity|iRopeEntity]]|[[#cScene_ToRopeEntity|cScene_ToRopeEntity]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cRopeEntity3D|cRopeEntity3D]]|[[#cScene_ToRopeEntity3D|cScene_ToRopeEntity3D]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cRopeEntityBillboard|cRopeEntityBillboard]]|[[#cScene_ToRopeEntityBillboard|cScene_ToRopeEntityBillboard]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cSoundEntity|cSoundEntity]]|[[#cScene_ToSoundEntity|cScene_ToSoundEntity]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|[[../../cSubMeshEntity|cSubMeshEntity]]|[[#cScene_ToSubMeshEntity|cScene_ToSubMeshEntity]]([[../../iEntity3D|iEntity3D@]] apEntity)|}}
{{CodeDocSummaryItem|bool|[[#cScene_ViewportExists|cScene_ViewportExists]]([[../../cViewport|cViewport@]] apViewPort)|}}
{{CodeDocSummaryItem|void|[[#cScene_WorldExists|cScene_WorldExists]]([[../../cWorld|cWorld@]] apWorld)|}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|cScene_CreateCamera}}
<syntaxhighlight lang="c++">cCamera@ cScene_CreateCamera(eCameraMoveMode aMoveMode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|aMoveMode|[[../../eCameraMoveMode|eCameraMoveMode]]|}}
{{CodeDocDetailReturn|cCamera@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_CreateViewport}}
<syntaxhighlight lang="c++">cViewport@ cScene_CreateViewport(cCamera @apCamera,
                                 cWorld @apWorld,
                                 bool abAddLast)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|@apCamera|[[../../cCamera|cCamera]]|}}
{{CodeDocDetailParam|@apWorld|[[../../cWorld|cWorld]]|}}
{{CodeDocDetailParam|abAddLast|bool|}}
{{CodeDocDetailReturn|cViewport@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_CreateWorld}}
<syntaxhighlight lang="c++">cWorld@ cScene_CreateWorld(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|cWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_DestroyCamera}}
<syntaxhighlight lang="c++">void cScene_DestroyCamera(cCamera@ apCam)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apCam|[[../../cCamera|cCamera@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_DestroyViewport}}
<syntaxhighlight lang="c++">void cScene_DestroyViewport(cViewport@ apViewPort)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apViewPort|[[../../cViewport|cViewport@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_DestroyWorld}}
<syntaxhighlight lang="c++">void cScene_DestroyWorld(cWorld@ apWorld)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../../cWorld|cWorld@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_LoadWorld}}
<syntaxhighlight lang="c++">cWorld@ cScene_LoadWorld(const tString &in asFile,
                         int aFlags)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|aFlags|int|}}
{{CodeDocDetailReturn|cWorld@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_Reset}}
<syntaxhighlight lang="c++">void cScene_Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_SetCurrentListener}}
<syntaxhighlight lang="c++">void cScene_SetCurrentListener(cViewport@ apViewPort)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apViewPort|[[../../cViewport|cViewport@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToBeam}}
<syntaxhighlight lang="c++">cBeam@ cScene_ToBeam(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cBeam@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToBillboard}}
<syntaxhighlight lang="c++">cBillboard@ cScene_ToBillboard(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cBillboard@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToForceField}}
<syntaxhighlight lang="c++">cForceField@ cScene_ToForceField(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cForceField@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToLensFlare}}
<syntaxhighlight lang="c++">cLensFlare@ cScene_ToLensFlare(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cLensFlare@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToLightBox}}
<syntaxhighlight lang="c++">cLightBox@ cScene_ToLightBox(iLight@ apLight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLight|[[../../iLight|iLight@]]|}}
{{CodeDocDetailReturn|cLightBox@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToLightDirectional}}
<syntaxhighlight lang="c++">cLightDirectional@ cScene_ToLightDirectional(iLight@ apLight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLight|[[../../iLight|iLight@]]|}}
{{CodeDocDetailReturn|cLightDirectional@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToLightPoint}}
<syntaxhighlight lang="c++">cLightPoint@ cScene_ToLightPoint(iLight@ apLight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLight|[[../../iLight|iLight@]]|}}
{{CodeDocDetailReturn|cLightPoint@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToLightSpot}}
<syntaxhighlight lang="c++">cLightSpot@ cScene_ToLightSpot(iLight@ apLight)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apLight|[[../../iLight|iLight@]]|}}
{{CodeDocDetailReturn|cLightSpot@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToMeshEntity}}
<syntaxhighlight lang="c++">cMeshEntity@ cScene_ToMeshEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToRopeEntity}}
<syntaxhighlight lang="c++">iRopeEntity@ cScene_ToRopeEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|iRopeEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToRopeEntity3D}}
<syntaxhighlight lang="c++">cRopeEntity3D@ cScene_ToRopeEntity3D(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cRopeEntity3D@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToRopeEntityBillboard}}
<syntaxhighlight lang="c++">cRopeEntityBillboard@ cScene_ToRopeEntityBillboard(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cRopeEntityBillboard@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToSoundEntity}}
<syntaxhighlight lang="c++">cSoundEntity@ cScene_ToSoundEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cSoundEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ToSubMeshEntity}}
<syntaxhighlight lang="c++">cSubMeshEntity@ cScene_ToSubMeshEntity(iEntity3D@ apEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apEntity|[[../../iEntity3D|iEntity3D@]]|}}
{{CodeDocDetailReturn|cSubMeshEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_ViewportExists}}
<syntaxhighlight lang="c++">bool cScene_ViewportExists(cViewport@ apViewPort)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apViewPort|[[../../cViewport|cViewport@]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|cScene_WorldExists}}
<syntaxhighlight lang="c++">void cScene_WorldExists(cWorld@ apWorld)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apWorld|[[../../cWorld|cWorld@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}