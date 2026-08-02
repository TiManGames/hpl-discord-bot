{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxMusicHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddDynamicTrack|AddDynamicTrack]]([[../tID|tID]] a_idEntity, int alTrackPrio, int alMusicPrio, const [[../tString|tString]] &in asFile, float afVolume, float afFadeInTime, float afFadeOutTime)|}}
{{CodeDocSummaryItem|bool|[[#IsSongPlaying|IsSongPlaying]](const [[../tString|tString]] &in asFile)|}}
{{CodeDocSummaryItem|void|[[#Play|Play]](const [[../tString|tString]] &in asFile, bool abLoop, float afVolume, float afFreq, float afVolumeFadeTime, float afFreqFadeTime, int alPrio, bool abResume, bool abSpecialEffect)|}}
{{CodeDocSummaryItem|void|[[#RemoveDynamicTrack|RemoveDynamicTrack]]([[../tID|tID]] a_idEntity)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]](float afFadeTime, int alPrio)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddDynamicTrack}}
<syntaxhighlight lang="c++">void AddDynamicTrack(tID a_idEntity,
                     int alTrackPrio,
                     int alMusicPrio,
                     const tString &in asFile,
                     float afVolume,
                     float afFadeInTime,
                     float afFadeOutTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_idEntity|[[../tID|tID]]|}}
{{CodeDocDetailParam|alTrackPrio|int|}}
{{CodeDocDetailParam|alMusicPrio|int|}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|afFadeInTime|float|}}
{{CodeDocDetailParam|afFadeOutTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsSongPlaying}}
<syntaxhighlight lang="c++">bool IsSongPlaying(const tString &in asFile)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Play}}
<syntaxhighlight lang="c++">void Play(const tString &in asFile,
          bool abLoop,
          float afVolume,
          float afFreq,
          float afVolumeFadeTime,
          float afFreqFadeTime,
          int alPrio,
          bool abResume,
          bool abSpecialEffect)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asFile|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afVolume|float|}}
{{CodeDocDetailParam|afFreq|float|}}
{{CodeDocDetailParam|afVolumeFadeTime|float|}}
{{CodeDocDetailParam|afFreqFadeTime|float|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailParam|abResume|bool|}}
{{CodeDocDetailParam|abSpecialEffect|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RemoveDynamicTrack}}
<syntaxhighlight lang="c++">void RemoveDynamicTrack(tID a_idEntity)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|a_idEntity|[[../tID|tID]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop(float afFadeTime,
          int alPrio)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFadeTime|float|}}
{{CodeDocDetailParam|alPrio|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}