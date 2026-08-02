{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iLuxAchievementHandler has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#CreateAchievement|CreateAchievement]](int alID, const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetAchievementDescription|GetAchievementDescription]](int alID)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetAchievementDisplayName|GetAchievementDisplayName]](int alID)|}}
{{CodeDocSummaryItem|int|[[#GetAchievementIcon|GetAchievementIcon]](int alID)|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetAchievementName|GetAchievementName]](int alID)|}}
{{CodeDocSummaryItem|bool|[[#GetAchievementUnlocked|GetAchievementUnlocked]](int alID)|}}
{{CodeDocSummaryItem|bool|[[#GetAllAchievementsUnlocked|GetAllAchievementsUnlocked]]()|}}
{{CodeDocSummaryItem|void|[[#RegisterAchievements|RegisterAchievements]]()|}}
{{CodeDocSummaryItem|void|[[#UnlockAchievement|UnlockAchievement]](int alID)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|CreateAchievement}}
<syntaxhighlight lang="c++">void CreateAchievement(int alID,
                       const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAchievementDescription}}
<syntaxhighlight lang="c++">tString GetAchievementDescription(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAchievementDisplayName}}
<syntaxhighlight lang="c++">tString GetAchievementDisplayName(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAchievementIcon}}
<syntaxhighlight lang="c++">int GetAchievementIcon(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAchievementName}}
<syntaxhighlight lang="c++">tString GetAchievementName(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|tString|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAchievementUnlocked}}
<syntaxhighlight lang="c++">bool GetAchievementUnlocked(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetAllAchievementsUnlocked}}
<syntaxhighlight lang="c++">bool GetAllAchievementsUnlocked()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|RegisterAchievements}}
<syntaxhighlight lang="c++">void RegisterAchievements()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|UnlockAchievement}}
<syntaxhighlight lang="c++">void UnlockAchievement(int alID)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alID|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}