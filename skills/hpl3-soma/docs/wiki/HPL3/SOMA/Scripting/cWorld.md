{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cWorld has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddBillboardToGroup || [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@ apObject</syntaxhighlight>]],<br />[[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@ apGroup</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Compile || <syntaxhighlight lang="c++" inline>bool abCalcPhysicsWorldSize</syntaxhighlight> ||
|-
| [[../cBeam|<syntaxhighlight lang="c++" inline>cBeam@</syntaxhighlight>]] || CreateBeam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateBeamID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@</syntaxhighlight>]] || CreateBillboard || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br />[[../eBillboardType|<syntaxhighlight lang="c++" inline>eBillboardType aType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@</syntaxhighlight>]] || CreateBillboardGroup || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateBillboardGroupID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateBillboardID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f &in avSize</syntaxhighlight>]],<br />[[../eBillboardType|<syntaxhighlight lang="c++" inline>eBillboardType aType</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cClothEntity|<syntaxhighlight lang="c++" inline>cClothEntity@</syntaxhighlight>]] || CreateClothEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@ apCloth</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial = ""</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateClothEntityID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../iPhysicsCloth|<syntaxhighlight lang="c++" inline>iPhysicsCloth@ apCloth</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asMaterial = ""</syntaxhighlight>]] ||
|-
| [[../cExposureArea|<syntaxhighlight lang="c++" inline>cExposureArea@</syntaxhighlight>]] || CreateExposureArea || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateExposureAreaID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cFogArea|<syntaxhighlight lang="c++" inline>cFogArea@</syntaxhighlight>]] || CreateFogArea || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateFogAreaID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cForceField|<syntaxhighlight lang="c++" inline>cForceField@</syntaxhighlight>]] || CreateForceField || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoRemove</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateForceFieldID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoRemove</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cGuiSetEntity|<syntaxhighlight lang="c++" inline>cGuiSetEntity@</syntaxhighlight>]] || CreateGuiSetEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@ apSet</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateGuiSetEntityID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../cGuiSet|<syntaxhighlight lang="c++" inline>cGuiSet@ apSet</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cLensFlare|<syntaxhighlight lang="c++" inline>cLensFlare@</syntaxhighlight>]] || CreateLensFlare || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateLensFlareID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cVector2f|<syntaxhighlight lang="c++" inline>const cVector2f& avSize</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asMaterial</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cLightBox|<syntaxhighlight lang="c++" inline>cLightBox@</syntaxhighlight>]] || CreateLightBox || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateLightBoxID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cLightPoint|<syntaxhighlight lang="c++" inline>cLightPoint@</syntaxhighlight>]] || CreateLightPoint || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asGobo</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateLightPointID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asGobo</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cLightSpot|<syntaxhighlight lang="c++" inline>cLightSpot@</syntaxhighlight>]] || CreateLightSpot || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asGobo</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateLightSpotID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asGobo</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@</syntaxhighlight>]] || CreateMeshEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cMesh|<syntaxhighlight lang="c++" inline>cMesh@ apMesh</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateMeshEntityID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../cMesh|<syntaxhighlight lang="c++" inline>cMesh@ apMesh</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || CreateParticleSystem || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asType</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenDead</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateParticleSystemID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asType</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avSize</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenDead</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abStatic</syntaxhighlight> ||
|-
| [[../iRopeEntity|<syntaxhighlight lang="c++" inline>iRopeEntity@</syntaxhighlight>]] || CreateRopeEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eRopeType|<syntaxhighlight lang="c++" inline>eRopeType aRopeType</syntaxhighlight>]],<br />[[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@ apRope</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMaxSegments</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alRingSegments = 3</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateRopeEntityID || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br />[[../eRopeType|<syntaxhighlight lang="c++" inline>eRopeType aRopeType</syntaxhighlight>]],<br />[[../iPhysicsRope|<syntaxhighlight lang="c++" inline>iPhysicsRope@ apRope</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alMaxSegments</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>int alRingSegments = 3</syntaxhighlight> ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || CreateSoundEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asSoundDataFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenOver</syntaxhighlight> ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || CreateSoundEntityEx || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asSoundDataFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenOver</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abNonBlockLoad</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateSoundEntityExID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asSoundDataFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenOver</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abNonBlockLoad</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || CreateSoundEntityID || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]],<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asSoundDataFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abRemoveWhenOver</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyAllParticleSystems ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyAllSoundEntities ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyBeam || [[../cBeam|<syntaxhighlight lang="c++" inline>cBeam@ apObject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyBillboard || [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@ apObject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyBillboardGroup || [[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@ apObject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyClothEntity || [[../cClothEntity|<syntaxhighlight lang="c++" inline>cClothEntity@ apCloth</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyExposureArea || [[../cExposureArea|<syntaxhighlight lang="c++" inline>cExposureArea@ apExposureArea</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyFogArea || [[../cFogArea|<syntaxhighlight lang="c++" inline>cFogArea@ apFogArea</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyForceField || [[../cForceField|<syntaxhighlight lang="c++" inline>cForceField@ apForce</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyGuiSetEntity || [[../cGuiSetEntity|<syntaxhighlight lang="c++" inline>cGuiSetEntity@ apObject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyLensFlare || [[../cLensFlare|<syntaxhighlight lang="c++" inline>cLensFlare@ apObject</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyLight || [[../iLight|<syntaxhighlight lang="c++" inline>iLight@ apLight</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyMeshEntity || [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@ apMesh</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyParticleSystem || [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@ apPS</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroyRopeEntity || [[../iRopeEntity|<syntaxhighlight lang="c++" inline>iRopeEntity@ apRope</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || DestroySoundEntity || [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeGradingTexture || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asTexture</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeInIrradianceSet || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asSetName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeToneMappingExposure || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeToneMappingWhiteCut || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTime</syntaxhighlight> ||
|-
| [[../cBeam|<syntaxhighlight lang="c++" inline>cBeam@</syntaxhighlight>]] || GetBeam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cBeam|<syntaxhighlight lang="c++" inline>cBeam@</syntaxhighlight>]] || GetBeamFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cBeamIterator|<syntaxhighlight lang="c++" inline>cBeamIterator@</syntaxhighlight>]] || GetBeamIterator ||   ||
|-
| [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@</syntaxhighlight>]] || GetBillboard || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@</syntaxhighlight>]] || GetBillboardFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@</syntaxhighlight>]] || GetBillboardGroup || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@</syntaxhighlight>]] || GetBillboardGroupFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cBillboardGroupIterator|<syntaxhighlight lang="c++" inline>cBillboardGroupIterator@</syntaxhighlight>]] || GetBillboardGroupIterator ||   ||
|-
| [[../cBillboardIterator|<syntaxhighlight lang="c++" inline>cBillboardIterator@</syntaxhighlight>]] || GetBillboardIterator ||   ||
|-
| [[../cClothEntity|<syntaxhighlight lang="c++" inline>cClothEntity@</syntaxhighlight>]] || GetClothEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cClothEntity|<syntaxhighlight lang="c++" inline>cClothEntity@</syntaxhighlight>]] || GetClothEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cClothEntityIterator|<syntaxhighlight lang="c++" inline>cClothEntityIterator@</syntaxhighlight>]] || GetClothEntityIterator ||   ||
|-
| [[../eIDSpace|<syntaxhighlight lang="c++" inline>eIDSpace</syntaxhighlight>]] || GetCurrentIDSpace ||   ||
|-
| [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@</syntaxhighlight>]] || GetDefaultGradingTexture ||   ||
|-
| [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@</syntaxhighlight>]] || GetDepthOfFieldBokehTexture ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDepthOfFieldFalloff ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDepthOfFieldFocusEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDepthOfFieldFocusStart ||   ||
|-
| [[../cLightDirectional|<syntaxhighlight lang="c++" inline>cLightDirectional@</syntaxhighlight>]] || GetDirectionalLight ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDirectionalLightActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDistanceCullActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDistanceCullFadeSpeed ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDistanceCullMaxRange ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDistanceCullMinRange ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDistanceCullRandomSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetDistanceCullScreenSize ||   ||
|-
| [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@</syntaxhighlight>]] || GetDynamicMeshEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cMeshEntityIterator|<syntaxhighlight lang="c++" inline>cMeshEntityIterator@</syntaxhighlight>]] || GetDynamicMeshEntityIterator ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetEnvironmentParticleNum ||   ||
|-
| [[../cEnvironmentParticles|<syntaxhighlight lang="c++" inline>cEnvironmentParticles@</syntaxhighlight>]] || GetEnvironmentParticles || <syntaxhighlight lang="c++" inline>int i</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetEnvironmentParticlesActive ||   ||
|-
| [[../cExposureArea|<syntaxhighlight lang="c++" inline>cExposureArea@</syntaxhighlight>]] || GetExposureArea || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cExposureArea|<syntaxhighlight lang="c++" inline>cExposureArea@</syntaxhighlight>]] || GetExposureAreaFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cExposureAreaIterator|<syntaxhighlight lang="c++" inline>cExposureAreaIterator@</syntaxhighlight>]] || GetExposureAreaIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFogActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFogApplyAfterFogAreas ||   ||
|-
| [[../cFogArea|<syntaxhighlight lang="c++" inline>cFogArea@</syntaxhighlight>]] || GetFogArea || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cFogArea|<syntaxhighlight lang="c++" inline>cFogArea@</syntaxhighlight>]] || GetFogAreaFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cFogAreaIterator|<syntaxhighlight lang="c++" inline>cFogAreaIterator@</syntaxhighlight>]] || GetFogAreaIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFogBrightness ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetFogColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFogCulling ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFogEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFogFalloffExp ||   ||
|-
| [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@</syntaxhighlight>]] || GetFogSkyboxTexture ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetFogStart ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFogUnderwater ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetFogUseSkybox ||   ||
|-
| [[../cForceField|<syntaxhighlight lang="c++" inline>cForceField@</syntaxhighlight>]] || GetForceField || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cForceField|<syntaxhighlight lang="c++" inline>cForceField@</syntaxhighlight>]] || GetForceFieldFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cForceFieldIterator|<syntaxhighlight lang="c++" inline>cForceFieldIterator@</syntaxhighlight>]] || GetForceFieldIterator ||   ||
|-
| [[../cGuiSetEntity|<syntaxhighlight lang="c++" inline>cGuiSetEntity@</syntaxhighlight>]] || GetGuiSetEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cGuiSetEntity|<syntaxhighlight lang="c++" inline>cGuiSetEntity@</syntaxhighlight>]] || GetGuiSetEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cGuiSetEntityIterator|<syntaxhighlight lang="c++" inline>cGuiSetEntityIterator@</syntaxhighlight>]] || GetGuiSetEntityIterator ||   ||
|-
| [[../cLensFlare|<syntaxhighlight lang="c++" inline>cLensFlare@</syntaxhighlight>]] || GetLensFlare || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| [[../cLensFlare|<syntaxhighlight lang="c++" inline>cLensFlare@</syntaxhighlight>]] || GetLensFlareFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cLensFlareIterator|<syntaxhighlight lang="c++" inline>cLensFlareIterator@</syntaxhighlight>]] || GetLensFlareIterator ||   ||
|-
| [[../iLight|<syntaxhighlight lang="c++" inline>iLight@</syntaxhighlight>]] || GetLight || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../iLight|<syntaxhighlight lang="c++" inline>iLight@</syntaxhighlight>]] || GetLightFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| [[../cLightListIterator|<syntaxhighlight lang="c++" inline>cLightListIterator@</syntaxhighlight>]] || GetLightIterator ||   ||
|-
| [[../cLightMaskBoxListIterator|<syntaxhighlight lang="c++" inline>cLightMaskBoxListIterator@</syntaxhighlight>]] || GetLightMaskBoxIterator ||   ||
|-
| [[../cMeshEntity|<syntaxhighlight lang="c++" inline>cMeshEntity@</syntaxhighlight>]] || GetMeshEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>tString</syntaxhighlight>]] || GetName ||   ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || GetParticleSystem || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@</syntaxhighlight>]] || GetParticleSystemFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cParticleSystemIterator|<syntaxhighlight lang="c++" inline>cParticleSystemIterator@</syntaxhighlight>]] || GetParticleSystemIterator ||   ||
|-
| [[../iPhysicsWorld|<syntaxhighlight lang="c++" inline>iPhysicsWorld@</syntaxhighlight>]] || GetPhysicsWorld ||   ||
|-
| [[../iRopeEntity|<syntaxhighlight lang="c++" inline>iRopeEntity@</syntaxhighlight>]] || GetRopeEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../iRopeEntity|<syntaxhighlight lang="c++" inline>iRopeEntity@</syntaxhighlight>]] || GetRopeEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cRopeEntityIterator|<syntaxhighlight lang="c++" inline>cRopeEntityIterator@</syntaxhighlight>]] || GetRopeEntityIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSecondaryFogActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSecondaryFogBrightness ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetSecondaryFogColor ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSecondaryFogEnd ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSecondaryFogFalloffExp ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSecondaryFogStart ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSkyBoxActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSkyBoxBrightness ||   ||
|-
| [[../cColor|<syntaxhighlight lang="c++" inline>const cColor&</syntaxhighlight>]] || GetSkyBoxColor ||   ||
|-
| [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@</syntaxhighlight>]] || GetSkyBoxTexture ||   ||
|-
| [[../iVertexBuffer|<syntaxhighlight lang="c++" inline>iVertexBuffer@</syntaxhighlight>]] || GetSkyBoxVertexBuffer ||   ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || GetSoundEntity || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || GetSoundEntityFromCreationID || <syntaxhighlight lang="c++" inline>int alID</syntaxhighlight> ||
|-
| [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@</syntaxhighlight>]] || GetSoundEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../cSoundEntityIterator|<syntaxhighlight lang="c++" inline>cSoundEntityIterator@</syntaxhighlight>]] || GetSoundEntityIterator ||   ||
|-
| [[../cMeshEntityIterator|<syntaxhighlight lang="c++" inline>cMeshEntityIterator@</syntaxhighlight>]] || GetStaticMeshEntityIterator ||   ||
|-
| [[../cSubMeshEntity|<syntaxhighlight lang="c++" inline>cSubMeshEntity@</syntaxhighlight>]] || GetSubMeshEntityFromID || [[../tID|<syntaxhighlight lang="c++" inline>tID aID</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetSubMeshEntityInArea || ,<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMin</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avMax</syntaxhighlight>]] ||
|-
| [[../cTerrain|<syntaxhighlight lang="c++" inline>cTerrain@</syntaxhighlight>]] || GetTerrain ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTerrainActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetToneMappingExposure ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetToneMappingFadeTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetToneMappingKey ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetToneMappingWhiteCut ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetWorldSize ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsDepthOfFieldActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsValid || [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || ParticleSystemExists || [[../cParticleSystem|<syntaxhighlight lang="c++" inline>cParticleSystem@ apPS</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveBillboardFromGroup || [[../cBillboard|<syntaxhighlight lang="c++" inline>cBillboard@ apObject</syntaxhighlight>]],<br />[[../cBillboardGroup|<syntaxhighlight lang="c++" inline>cBillboardGroup@ apGroup</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCurrentIDSpace || [[../eIDSpace|<syntaxhighlight lang="c++" inline>eIDSpace aSpace</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDefaultGradingTexture || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apGrading</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDepthOfFieldActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDepthOfFieldBokehTexture || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDepthOfFieldFalloff || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDepthOfFieldFocusEnd || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDepthOfFieldFocusStart || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDirectionalLightActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullFadeSpeed || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullMaxRange || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullMinRange || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullRandomSize || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetDistanceCullScreenSize || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || SetEntityID || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]],<br />[[../tID|<syntaxhighlight lang="c++" inline>tID alID</syntaxhighlight>]] ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || SetEntityID || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]],<br />[[../eIDSpace|<syntaxhighlight lang="c++" inline>eIDSpace aSpace</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>uint alLocation</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alInner</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEnvironmentParticlesActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogApplyAfterFogAreas || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogCulling || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogEnd || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogFalloffExp || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogSkyboxTexture || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogStart || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogUnderwater || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetFogUseSkybox || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMainRenderableContainerVisible || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPhysicsWorld || [[../iPhysicsWorld|<syntaxhighlight lang="c++" inline>iPhysicsWorld@ apWorld</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoDelete</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aCol</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogEnd || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogFalloffExp || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSecondaryFogStart || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkyBox || [[../iTexture|<syntaxhighlight lang="c++" inline>iTexture@ apTexture</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abAutoDestroy</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkyBoxActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkyBoxBrightness || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSkyBoxColor || [[../cColor|<syntaxhighlight lang="c++" inline>const cColor &in aColor</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTerrainActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetToneMappingKey || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || SoundEntityExists || [[../cSoundEntity|<syntaxhighlight lang="c++" inline>cSoundEntity@ apEntity</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alCreationID</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Update || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__