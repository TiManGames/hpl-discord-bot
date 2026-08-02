{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
iScrUserModule_Interface has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AppGotInputFocus|AppGotInputFocus]]()|}}
{{CodeDocSummaryItem|void|[[#AppLostInputFocus|AppLostInputFocus]]()|}}
{{CodeDocSummaryItem|void|[[#CreateWorldEntities|CreateWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#DestroyWorldEntities|DestroyWorldEntities]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|[[../cLuxUserModule|cLuxUserModule]]|[[#GetBase|GetBase]]()|}}
{{CodeDocSummaryItem|void|[[#LoadUserConfig|LoadUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#OnAction|OnAction]](int alAction, bool abPressed)|}}
{{CodeDocSummaryItem|void|[[#OnAnalogInput|OnAnalogInput]](int alAnalogId, const [[../cVector3f|cVector3f]] &in avAmount)|}}
{{CodeDocSummaryItem|void|[[#OnDraw|OnDraw]](float afFrameTime)|}}
{{CodeDocSummaryItem|void|[[#OnEnterContainer|OnEnterContainer]](const [[../tString|tString]] &in asOldContainer)|}}
{{CodeDocSummaryItem|void|[[#OnExitPressed|OnExitPressed]]()|}}
{{CodeDocSummaryItem|void|[[#OnLeaveContainer|OnLeaveContainer]](const [[../tString|tString]] &in asNewContainer)|}}
{{CodeDocSummaryItem|void|[[#OnMapEnter|OnMapEnter]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#OnMapLeave|OnMapLeave]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#OnPostRender|OnPostRender]](float afFrameTime)|}}
{{CodeDocSummaryItem|void|[[#PostUpdate|PostUpdate]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#PreloadData|PreloadData]]([[../cLuxMap|cLuxMap@]] apMap)|}}
{{CodeDocSummaryItem|void|[[#Reset|Reset]]()|}}
{{CodeDocSummaryItem|void|[[#SaveUserConfig|SaveUserConfig]]()|}}
{{CodeDocSummaryItem|void|[[#Update|Update]](float afTimeStep)|}}
{{CodeDocSummaryItem|void|[[#VariableUpdate|VariableUpdate]](float afDeltaTime)|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AppGotInputFocus}}
<syntaxhighlight lang="c++">void AppGotInputFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|AppLostInputFocus}}
<syntaxhighlight lang="c++">void AppLostInputFocus()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CreateWorldEntities}}
<syntaxhighlight lang="c++">void CreateWorldEntities(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|DestroyWorldEntities}}
<syntaxhighlight lang="c++">void DestroyWorldEntities(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetBase}}
<syntaxhighlight lang="c++">cLuxUserModule@ GetBase()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxUserModule@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|LoadUserConfig}}
<syntaxhighlight lang="c++">void LoadUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAction}}
<syntaxhighlight lang="c++">void OnAction(int alAction,
              bool abPressed)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAction|int|}}
{{CodeDocDetailParam|abPressed|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnAnalogInput}}
<syntaxhighlight lang="c++">void OnAnalogInput(int alAnalogId,
                   const cVector3f &in avAmount)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alAnalogId|int|}}
{{CodeDocDetailParam|avAmount|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnDraw}}
<syntaxhighlight lang="c++">void OnDraw(float afFrameTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFrameTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnEnterContainer}}
<syntaxhighlight lang="c++">void OnEnterContainer(const tString &in asOldContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asOldContainer|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnExitPressed}}
<syntaxhighlight lang="c++">void OnExitPressed()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnLeaveContainer}}
<syntaxhighlight lang="c++">void OnLeaveContainer(const tString &in asNewContainer)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNewContainer|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnMapEnter}}
<syntaxhighlight lang="c++">void OnMapEnter(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnMapLeave}}
<syntaxhighlight lang="c++">void OnMapLeave(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|OnPostRender}}
<syntaxhighlight lang="c++">void OnPostRender(float afFrameTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afFrameTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PostUpdate}}
<syntaxhighlight lang="c++">void PostUpdate(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|PreloadData}}
<syntaxhighlight lang="c++">void PreloadData(cLuxMap@ apMap)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|apMap|[[../cLuxMap|cLuxMap@]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Reset}}
<syntaxhighlight lang="c++">void Reset()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SaveUserConfig}}
<syntaxhighlight lang="c++">void SaveUserConfig()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Update}}
<syntaxhighlight lang="c++">void Update(float afTimeStep)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afTimeStep|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|VariableUpdate}}
<syntaxhighlight lang="c++">void VariableUpdate(float afDeltaTime)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afDeltaTime|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3The BunkerScriptingCategories}}