{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Summary==
{{CodeDocSummaryTop}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_AttachToEntity|ParticleSystem_AttachToEntity]](const [[../../tString|tString]] &in asPSName, const [[../../tString|tString]] &in asEntityName)|Attaches a particle system to an entity}}
{{CodeDocSummaryItem|[[../../cParticleSystem|cParticleSystem]]|[[#ParticleSystem_CreateAtEntity|ParticleSystem_CreateAtEntity]](const [[../../tString|tString]] &in asPSName, const [[../../tString|tString]] &in asPSFile, const [[../../tString|tString]] &in asEntity, bool abAttach)|Creates a particle system at entity}}
{{CodeDocSummaryItem|[[../../cParticleSystem|cParticleSystem]]|[[#ParticleSystem_CreateAtEntityExt|ParticleSystem_CreateAtEntityExt]](const [[../../tString|tString]] &in asPSName, const [[../../tString|tString]] &in asPSFile, const [[../../tString|tString]] &in asEntity, bool abAttach, const [[../../cColor|cColor]] &in acColor, float afBrightness <nowiki>=</nowiki> 1.0f, bool abFadeAtDistance <nowiki>=</nowiki> false, float afFadeMinEnd <nowiki>=</nowiki> 1.0f, float afFadeMinStart <nowiki>=</nowiki> 2.0f, float afFadeMaxStart <nowiki>=</nowiki> 100.0f, float afFadeMaxEnd <nowiki>=</nowiki> 110.0f)|Creates a particle system at entity with extra options}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_Destroy|ParticleSystem_Destroy]](const [[../../tString|tString]] &in asPSName)|Destroy a particle system}}
{{CodeDocSummaryItem|bool|[[#ParticleSystem_Exists|ParticleSystem_Exists]](const [[../../tString|tString]] &in asPSName)|Returns true or false if a given particle system exists}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_Preload|ParticleSystem_Preload]](const [[../../tString|tString]] &in asFile)|Preload particle system data}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_SetActive|ParticleSystem_SetActive]](const [[../../tString|tString]] &in asPSName, bool abActive)|Activates or deactivates a particle system}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_SetBrightness|ParticleSystem_SetBrightness]](const [[../../tString|tString]] &in asPSName, float afBrightness)|Sets the brightness of a particle system}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_SetColor|ParticleSystem_SetColor]](const [[../../tString|tString]] &in asPSName, const [[../../cColor|cColor]] &in acColor)|Sets the color of a particle system}}
{{CodeDocSummaryItem|void|[[#ParticleSystem_SetVisible|ParticleSystem_SetVisible]](const [[../../tString|tString]] &in asPSName, bool abVisible)|Sets the visibility of a particle system}}
{{CodeDocSummaryBottom}}

==Function Detail==
{{CodeDocDetailTop|ParticleSystem_AttachToEntity}}
<syntaxhighlight lang="c++">void ParticleSystem_AttachToEntity(const tString &in asPSName,
                                   const tString &in asEntityName)</syntaxhighlight>
{{CodeDocDetailBody|Attaches a particle system to an entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntityName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_CreateAtEntity}}
<syntaxhighlight lang="c++">cParticleSystem@ ParticleSystem_CreateAtEntity(const tString &in asPSName,
                                               const tString &in asPSFile,
                                               const tString &in asEntity,
                                               bool abAttach)</syntaxhighlight>
{{CodeDocDetailBody|Creates a particle system at entity.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asPSFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAttach|bool|}}
{{CodeDocDetailReturn|cParticleSystem@|cParticleSystem, the created particle system or null if the function fails.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_CreateAtEntityExt}}
<syntaxhighlight lang="c++">cParticleSystem@ ParticleSystem_CreateAtEntityExt(const tString &in asPSName,
                                                  const tString &in asPSFile,
                                                  const tString &in asEntity,
                                                  bool abAttach,
                                                  const cColor &in acColor,
                                                  float afBrightness = 1.0f,
                                                  bool abFadeAtDistance = false,
                                                  float afFadeMinEnd = 1.0f,
                                                  float afFadeMinStart = 2.0f,
                                                  float afFadeMaxStart = 100.0f,
                                                  float afFadeMaxEnd = 110.0f)</syntaxhighlight>
{{CodeDocDetailBody|Creates a particle system at entity with extra options.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asPSFile|[[../../tString|tString]]|}}
{{CodeDocDetailParam|asEntity|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abAttach|bool|}}
{{CodeDocDetailParam|acColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailParam|abFadeAtDistance|bool|}}
{{CodeDocDetailParam|afFadeMinEnd|float|}}
{{CodeDocDetailParam|afFadeMinStart|float|}}
{{CodeDocDetailParam|afFadeMaxStart|float|}}
{{CodeDocDetailParam|afFadeMaxEnd|float|}}
{{CodeDocDetailReturn|cParticleSystem@|cParticleSystem, the created particle system or null if the function fails.}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_Destroy}}
<syntaxhighlight lang="c++">void ParticleSystem_Destroy(const tString &in asPSName)</syntaxhighlight>
{{CodeDocDetailBody|Destroy a particle system. Can contain wildcards.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_Exists}}
<syntaxhighlight lang="c++">bool ParticleSystem_Exists(const tString &in asPSName)</syntaxhighlight>
{{CodeDocDetailBody|Returns true or false if a given particle system exists}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_Preload}}
<syntaxhighlight lang="c++">void ParticleSystem_Preload(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|Preload particle system data}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_SetActive}}
<syntaxhighlight lang="c++">void ParticleSystem_SetActive(const tString &in asPSName,
                              bool abActive)</syntaxhighlight>
{{CodeDocDetailBody|Activates or deactivates a particle system.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abActive|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_SetBrightness}}
<syntaxhighlight lang="c++">void ParticleSystem_SetBrightness(const tString &in asPSName,
                                  float afBrightness)</syntaxhighlight>
{{CodeDocDetailBody|Sets the brightness of a particle system.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|afBrightness|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_SetColor}}
<syntaxhighlight lang="c++">void ParticleSystem_SetColor(const tString &in asPSName,
                             const cColor &in acColor)</syntaxhighlight>
{{CodeDocDetailBody|Sets the color of a particle system.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|acColor|[[../../cColor|cColor]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ParticleSystem_SetVisible}}
<syntaxhighlight lang="c++">void ParticleSystem_SetVisible(const tString &in asPSName,
                               bool abVisible)</syntaxhighlight>
{{CodeDocDetailBody|Sets the visibility of a particle system.}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asPSName|[[../../tString|tString]]|}}
{{CodeDocDetailParam|abVisible|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}