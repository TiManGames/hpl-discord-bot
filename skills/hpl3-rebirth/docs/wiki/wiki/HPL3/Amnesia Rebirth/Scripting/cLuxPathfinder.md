{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==
cLuxPathfinder has no public fields.

==Functions==
{{CodeDocSummaryTop|Return Type|Function And Description}}
{{CodeDocSummaryItem|void|[[#AddTrackNode|AddTrackNode]](const [[../tString|tString]] &in asNodeName, float afMinWaitTime, float afMaxWaitTime, const [[../tString|tString]] &in asAnimName, bool abLoopAnim)|}}
{{CodeDocSummaryItem|bool|[[#BuildPathNodeArrayFromTo|BuildPathNodeArrayFromTo]](const [[../cVector3f|cVector3f]] &in avFromPos, const [[../cVector3f|cVector3f]] &in avToPos)|}}
{{CodeDocSummaryItem|bool|[[#BuildPathNodeArrayToPos|BuildPathNodeArrayToPos]](const [[../cVector3f|cVector3f]] &in avPos)|}}
{{CodeDocSummaryItem|bool|[[#CheckFreePath|CheckFreePath]](const [[../cVector3f|cVector3f]] &in avStartPos, const [[../cVector3f|cVector3f]] &in avTargetPos)|}}
{{CodeDocSummaryItem|void|[[#ClearTrackNodes|ClearTrackNodes]]()|}}
{{CodeDocSummaryItem|int|[[#GetCurrentTrackNode|GetCurrentTrackNode]]()|}}
{{CodeDocSummaryItem|[[../cLuxTrackNode|cLuxTrackNode]]|[[#GetCurrentTrackNodeData|GetCurrentTrackNodeData]]()|}}
{{CodeDocSummaryItem|float|[[#GetCurrentTrackWaitTime|GetCurrentTrackWaitTime]]()|}}
{{CodeDocSummaryItem|bool|[[#GetDebugLOSCastResult|GetDebugLOSCastResult]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetDebugLOSCastResultNum|GetDebugLOSCastResultNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetDebugLOSPathResult|GetDebugLOSPathResult]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetDebugLOSPathResultNum|GetDebugLOSPathResultNum]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetDebugLOSPoint|GetDebugLOSPoint]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetDebugLOSPointNum|GetDebugLOSPointNum]]()|}}
{{CodeDocSummaryItem|[[../iLuxEntity|iLuxEntity]]|[[#GetEntity|GetEntity]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetGoalPos|GetGoalPos]]()|}}
{{CodeDocSummaryItem|[[../cVector3f|cVector3f]]|[[#GetNextGoalPos|GetNextGoalPos]]()|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeAtPos|GetNodeAtPos]](const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, bool abGetClosest, bool abPosToNodeFreeDirectPathCheck, bool abAgentToNodeFreeDirectPathCheck, [[../cAINode|cAINode@]] apSkipNode, int alFreePathRayNum, uint alFreePathFlags, bool abSkipUsedNodes)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeAtPos|GetNodeAtPos]](const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, bool abGetClosest, bool abPosToNodeFreeDirectPathCheck, bool abAgentToNodeFreeDirectPathCheck, [[../cAINode|cAINode@]] apSkipNode)|}}
{{CodeDocSummaryItem|[[../cAINodeContainer|cAINodeContainer]]|[[#GetNodeContainer|GetNodeContainer]]()|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeFromName|GetNodeFromName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeInCircularSectorAroundPos|GetNodeInCircularSectorAroundPos]](const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, const [[../cVector3f|cVector3f]] &in avExcludedSectorDirection, float afExludedSectorAngle, bool abGetClosest, bool abPosToNodeFreeDirectPathCheck, bool abAgentToNodeFreeDirectPathCheck, [[../cAINode|cAINode@]] apSkipNode)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeInPosLOS|GetNodeInPosLOS]](const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, bool abAgentToNodeFreeDirectPathCheck <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeInPosLOS|GetNodeInPosLOS]](const [[../cVector3f|cVector3f]] &in avPos, const [[../cVector3f|cVector3f]] &in avLosPos, float afMinDistance, float afMaxDistance, bool abAgentToNodeFreeDirectPathCheck <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeOutOfSight|GetNodeOutOfSight]](const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, const [[../cVector3f|cVector3f]] &in avHideFromPos, const [[../cVector3f|cVector3f]] &in avExcludedSectorDirection, float afExludedSectorAngle, bool abGetClosest, bool abPosToNodeFreeDirectPathCheck, bool abAgentToNodeFreeDirectPathCheck, [[../cAINode|cAINode@]] apSkipNode)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetNodeOutOfSight|GetNodeOutOfSight]](const [[../tString|tString]] &in asCallback, const [[../cVector3f|cVector3f]] &in avPos, float afMinDistance, float afMaxDistance, const [[../cVector3f|cVector3f]] &in avHideFromPos, const [[../cVector3f|cVector3f]] &in avExcludedSectorDirection, float afExludedSectorAngle, bool abGetClosest, bool abPosToNodeFreeDirectPathCheck, bool abAgentToNodeFreeDirectPathCheck, [[../cAINode|cAINode@]] apSkipNode)|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetPathNode|GetPathNode]](int alX)|}}
{{CodeDocSummaryItem|float|[[#GetPathNodeArrayDist|GetPathNodeArrayDist]](int alIdx)|}}
{{CodeDocSummaryItem|float|[[#GetPathNodeArrayFullLength|GetPathNodeArrayFullLength]]()|}}
{{CodeDocSummaryItem|[[../cAINode|cAINode]]|[[#GetPathNodeArrayNode|GetPathNodeArrayNode]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetPathNodeArraySize|GetPathNodeArraySize]]()|}}
{{CodeDocSummaryItem|int|[[#GetPathNodeCount|GetPathNodeCount]]()|}}
{{CodeDocSummaryItem|bool|[[#GetTrackActive|GetTrackActive]]()|}}
{{CodeDocSummaryItem|[[../tString|tString]]|[[#GetTrackCallback|GetTrackCallback]]()|}}
{{CodeDocSummaryItem|bool|[[#GetTrackLoop|GetTrackLoop]]()|}}
{{CodeDocSummaryItem|[[../cLuxTrackNode|cLuxTrackNode]]|[[#GetTrackNode|GetTrackNode]](int alIdx)|}}
{{CodeDocSummaryItem|int|[[#GetTrackNodeNum|GetTrackNodeNum]]()|}}
{{CodeDocSummaryItem|bool|[[#GetTrackPaused|GetTrackPaused]]()|}}
{{CodeDocSummaryItem|float|[[#GetTrackUpdateFreq|GetTrackUpdateFreq]]()|}}
{{CodeDocSummaryItem|int|[[#GetType|GetType]]()|}}
{{CodeDocSummaryItem|void|[[#GoToNextTrackNode|GoToNextTrackNode]]()|}}
{{CodeDocSummaryItem|bool|[[#IsClimbing|IsClimbing]]()|}}
{{CodeDocSummaryItem|bool|[[#IsMoving|IsMoving]]()|}}
{{CodeDocSummaryItem|void|[[#MoveTo|MoveTo]](const [[../cVector3f|cVector3f]] &in avPos, float afUpdateFreq, bool abExactStopAtEnd, const [[../tString|tString]] &in asResultCallback <nowiki>=</nowiki> "", bool abCallbackInMap <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#MoveToNode|MoveToNode]](const [[../tString|tString]] &in asNodeName, float afUpdateFreq, bool abExactStopAtEnd, const [[../tString|tString]] &in asResultCallback <nowiki>=</nowiki> "", bool abCallbackInMap <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#ResetCurrentTrackNode|ResetCurrentTrackNode]]()|}}
{{CodeDocSummaryItem|void|[[#SetClimbWalls|SetClimbWalls]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetCurrentTrackWaitTime|SetCurrentTrackWaitTime]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetDirectPathMaxDistanceMul|SetDirectPathMaxDistanceMul]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetEndOfPathCallbackFunc|SetEndOfPathCallbackFunc]](const [[../tString|tString]] &in asCallbackFunc)|}}
{{CodeDocSummaryItem|void|[[#SetMaxEdgeDistance|SetMaxEdgeDistance]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxEdges|SetMaxEdges]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMaxHeight|SetMaxHeight]](float afX)|}}
{{CodeDocSummaryItem|void|[[#SetMinEdges|SetMinEdges]](int alX)|}}
{{CodeDocSummaryItem|void|[[#SetMoving|SetMoving]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetNodeContainerName|SetNodeContainerName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetNodeIsAtCenter|SetNodeIsAtCenter]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetNodeName|SetNodeName]](const [[../tString|tString]] &in asName)|}}
{{CodeDocSummaryItem|void|[[#SetTrackLoop|SetTrackLoop]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#SetTrackPaused|SetTrackPaused]](bool abX)|}}
{{CodeDocSummaryItem|void|[[#StartTrack|StartTrack]](bool abLoop, float afUpdateFreq, const [[../tString|tString]] &in asEndOfTrackCallback, bool abRandom <nowiki>=</nowiki> false)|}}
{{CodeDocSummaryItem|void|[[#Stop|Stop]]()|}}
{{CodeDocSummaryItem|void|[[#StopTrack|StopTrack]]()|}}
{{CodeDocSummaryBottom}}

==Details==
{{CodeDocDetailTop|AddTrackNode}}
<syntaxhighlight lang="c++">void AddTrackNode(const tString &in asNodeName,
                  float afMinWaitTime,
                  float afMaxWaitTime,
                  const tString &in asAnimName,
                  bool abLoopAnim)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNodeName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afMinWaitTime|float|}}
{{CodeDocDetailParam|afMaxWaitTime|float|}}
{{CodeDocDetailParam|asAnimName|[[../tString|tString]]|}}
{{CodeDocDetailParam|abLoopAnim|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|BuildPathNodeArrayFromTo}}
<syntaxhighlight lang="c++">bool BuildPathNodeArrayFromTo(const cVector3f &in avFromPos,
                              const cVector3f &in avToPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avFromPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avToPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|BuildPathNodeArrayToPos}}
<syntaxhighlight lang="c++">bool BuildPathNodeArrayToPos(const cVector3f &in avPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|CheckFreePath}}
<syntaxhighlight lang="c++">bool CheckFreePath(const cVector3f &in avStartPos,
                   const cVector3f &in avTargetPos)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avStartPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avTargetPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ClearTrackNodes}}
<syntaxhighlight lang="c++">void ClearTrackNodes()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentTrackNode}}
<syntaxhighlight lang="c++">int GetCurrentTrackNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentTrackNodeData}}
<syntaxhighlight lang="c++">cLuxTrackNode@ GetCurrentTrackNodeData()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cLuxTrackNode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetCurrentTrackWaitTime}}
<syntaxhighlight lang="c++">float GetCurrentTrackWaitTime()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSCastResult}}
<syntaxhighlight lang="c++">bool GetDebugLOSCastResult(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSCastResultNum}}
<syntaxhighlight lang="c++">int GetDebugLOSCastResultNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSPathResult}}
<syntaxhighlight lang="c++">bool GetDebugLOSPathResult(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSPathResultNum}}
<syntaxhighlight lang="c++">int GetDebugLOSPathResultNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSPoint}}
<syntaxhighlight lang="c++">const cVector3f& GetDebugLOSPoint(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|const cVector3f&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetDebugLOSPointNum}}
<syntaxhighlight lang="c++">int GetDebugLOSPointNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetEntity}}
<syntaxhighlight lang="c++">iLuxEntity@ GetEntity()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|iLuxEntity@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetGoalPos}}
<syntaxhighlight lang="c++">cVector3f GetGoalPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNextGoalPos}}
<syntaxhighlight lang="c++">cVector3f GetNextGoalPos()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cVector3f|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeAtPos}}
<syntaxhighlight lang="c++">cAINode@ GetNodeAtPos(const cVector3f &in avPos,
                      float afMinDistance,
                      float afMaxDistance,
                      bool abGetClosest,
                      bool abPosToNodeFreeDirectPathCheck,
                      bool abAgentToNodeFreeDirectPathCheck,
                      cAINode@ apSkipNode,
                      int alFreePathRayNum,
                      uint alFreePathFlags,
                      bool abSkipUsedNodes)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|abGetClosest|bool|}}
{{CodeDocDetailParam|abPosToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|apSkipNode|[[../cAINode|cAINode@]]|}}
{{CodeDocDetailParam|alFreePathRayNum|int|}}
{{CodeDocDetailParam|alFreePathFlags|uint|}}
{{CodeDocDetailParam|abSkipUsedNodes|bool|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeAtPos}}
<syntaxhighlight lang="c++">cAINode@ GetNodeAtPos(const cVector3f &in avPos,
                      float afMinDistance,
                      float afMaxDistance,
                      bool abGetClosest,
                      bool abPosToNodeFreeDirectPathCheck,
                      bool abAgentToNodeFreeDirectPathCheck,
                      cAINode@ apSkipNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|abGetClosest|bool|}}
{{CodeDocDetailParam|abPosToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|apSkipNode|[[../cAINode|cAINode@]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeContainer}}
<syntaxhighlight lang="c++">cAINodeContainer@ GetNodeContainer()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|cAINodeContainer@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeFromName}}
<syntaxhighlight lang="c++">cAINode@ GetNodeFromName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeInCircularSectorAroundPos}}
<syntaxhighlight lang="c++">cAINode@ GetNodeInCircularSectorAroundPos(const cVector3f &in avPos,
                                          float afMinDistance,
                                          float afMaxDistance,
                                          const cVector3f &in avExcludedSectorDirection,
                                          float afExludedSectorAngle,
                                          bool abGetClosest,
                                          bool abPosToNodeFreeDirectPathCheck,
                                          bool abAgentToNodeFreeDirectPathCheck,
                                          cAINode@ apSkipNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|avExcludedSectorDirection|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afExludedSectorAngle|float|}}
{{CodeDocDetailParam|abGetClosest|bool|}}
{{CodeDocDetailParam|abPosToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|apSkipNode|[[../cAINode|cAINode@]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeInPosLOS}}
<syntaxhighlight lang="c++">cAINode@ GetNodeInPosLOS(const cVector3f &in avPos,
                         float afMinDistance,
                         float afMaxDistance,
                         bool abAgentToNodeFreeDirectPathCheck = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeInPosLOS}}
<syntaxhighlight lang="c++">cAINode@ GetNodeInPosLOS(const cVector3f &in avPos,
                         const cVector3f &in avLosPos,
                         float afMinDistance,
                         float afMaxDistance,
                         bool abAgentToNodeFreeDirectPathCheck = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avLosPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeOutOfSight}}
<syntaxhighlight lang="c++">cAINode@ GetNodeOutOfSight(const cVector3f &in avPos,
                           float afMinDistance,
                           float afMaxDistance,
                           const cVector3f &in avHideFromPos,
                           const cVector3f &in avExcludedSectorDirection,
                           float afExludedSectorAngle,
                           bool abGetClosest,
                           bool abPosToNodeFreeDirectPathCheck,
                           bool abAgentToNodeFreeDirectPathCheck,
                           cAINode@ apSkipNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|avHideFromPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avExcludedSectorDirection|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afExludedSectorAngle|float|}}
{{CodeDocDetailParam|abGetClosest|bool|}}
{{CodeDocDetailParam|abPosToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|apSkipNode|[[../cAINode|cAINode@]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetNodeOutOfSight}}
<syntaxhighlight lang="c++">cAINode@ GetNodeOutOfSight(const tString &in asCallback,
                           const cVector3f &in avPos,
                           float afMinDistance,
                           float afMaxDistance,
                           const cVector3f &in avHideFromPos,
                           const cVector3f &in avExcludedSectorDirection,
                           float afExludedSectorAngle,
                           bool abGetClosest,
                           bool abPosToNodeFreeDirectPathCheck,
                           bool abAgentToNodeFreeDirectPathCheck,
                           cAINode@ apSkipNode)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afMinDistance|float|}}
{{CodeDocDetailParam|afMaxDistance|float|}}
{{CodeDocDetailParam|avHideFromPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|avExcludedSectorDirection|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afExludedSectorAngle|float|}}
{{CodeDocDetailParam|abGetClosest|bool|}}
{{CodeDocDetailParam|abPosToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|abAgentToNodeFreeDirectPathCheck|bool|}}
{{CodeDocDetailParam|apSkipNode|[[../cAINode|cAINode@]]|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNode}}
<syntaxhighlight lang="c++">cAINode@ GetPathNode(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNodeArrayDist}}
<syntaxhighlight lang="c++">float GetPathNodeArrayDist(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNodeArrayFullLength}}
<syntaxhighlight lang="c++">float GetPathNodeArrayFullLength()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNodeArrayNode}}
<syntaxhighlight lang="c++">cAINode@ GetPathNodeArrayNode(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cAINode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNodeArraySize}}
<syntaxhighlight lang="c++">int GetPathNodeArraySize()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetPathNodeCount}}
<syntaxhighlight lang="c++">int GetPathNodeCount()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackActive}}
<syntaxhighlight lang="c++">bool GetTrackActive()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackCallback}}
<syntaxhighlight lang="c++">const tString& GetTrackCallback()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|const tString&|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackLoop}}
<syntaxhighlight lang="c++">bool GetTrackLoop()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackNode}}
<syntaxhighlight lang="c++">cLuxTrackNode@ GetTrackNode(int alIdx)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alIdx|int|}}
{{CodeDocDetailReturn|cLuxTrackNode@|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackNodeNum}}
<syntaxhighlight lang="c++">int GetTrackNodeNum()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackPaused}}
<syntaxhighlight lang="c++">bool GetTrackPaused()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetTrackUpdateFreq}}
<syntaxhighlight lang="c++">float GetTrackUpdateFreq()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|float|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GetType}}
<syntaxhighlight lang="c++">int GetType()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|int|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|GoToNextTrackNode}}
<syntaxhighlight lang="c++">void GoToNextTrackNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsClimbing}}
<syntaxhighlight lang="c++">bool IsClimbing()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|IsMoving}}
<syntaxhighlight lang="c++">bool IsMoving()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|bool|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveTo}}
<syntaxhighlight lang="c++">void MoveTo(const cVector3f &in avPos,
            float afUpdateFreq,
            bool abExactStopAtEnd,
            const tString &in asResultCallback = "",
            bool abCallbackInMap = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|avPos|[[../cVector3f|cVector3f]]|}}
{{CodeDocDetailParam|afUpdateFreq|float|}}
{{CodeDocDetailParam|abExactStopAtEnd|bool|}}
{{CodeDocDetailParam|asResultCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCallbackInMap|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|MoveToNode}}
<syntaxhighlight lang="c++">void MoveToNode(const tString &in asNodeName,
                float afUpdateFreq,
                bool abExactStopAtEnd,
                const tString &in asResultCallback = "",
                bool abCallbackInMap = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asNodeName|[[../tString|tString]]|}}
{{CodeDocDetailParam|afUpdateFreq|float|}}
{{CodeDocDetailParam|abExactStopAtEnd|bool|}}
{{CodeDocDetailParam|asResultCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|abCallbackInMap|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|ResetCurrentTrackNode}}
<syntaxhighlight lang="c++">void ResetCurrentTrackNode()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetClimbWalls}}
<syntaxhighlight lang="c++">void SetClimbWalls(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetCurrentTrackWaitTime}}
<syntaxhighlight lang="c++">void SetCurrentTrackWaitTime(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetDirectPathMaxDistanceMul}}
<syntaxhighlight lang="c++">void SetDirectPathMaxDistanceMul(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetEndOfPathCallbackFunc}}
<syntaxhighlight lang="c++">void SetEndOfPathCallbackFunc(const tString &in asCallbackFunc)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asCallbackFunc|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxEdgeDistance}}
<syntaxhighlight lang="c++">void SetMaxEdgeDistance(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxEdges}}
<syntaxhighlight lang="c++">void SetMaxEdges(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMaxHeight}}
<syntaxhighlight lang="c++">void SetMaxHeight(float afX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|afX|float|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMinEdges}}
<syntaxhighlight lang="c++">void SetMinEdges(int alX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|alX|int|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetMoving}}
<syntaxhighlight lang="c++">void SetMoving(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNodeContainerName}}
<syntaxhighlight lang="c++">void SetNodeContainerName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNodeIsAtCenter}}
<syntaxhighlight lang="c++">void SetNodeIsAtCenter(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetNodeName}}
<syntaxhighlight lang="c++">void SetNodeName(const tString &in asName)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|asName|[[../tString|tString]]|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTrackLoop}}
<syntaxhighlight lang="c++">void SetTrackLoop(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|SetTrackPaused}}
<syntaxhighlight lang="c++">void SetTrackPaused(bool abX)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abX|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StartTrack}}
<syntaxhighlight lang="c++">void StartTrack(bool abLoop,
                float afUpdateFreq,
                const tString &in asEndOfTrackCallback,
                bool abRandom = false)</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailParamStart}}
{{CodeDocDetailParam|abLoop|bool|}}
{{CodeDocDetailParam|afUpdateFreq|float|}}
{{CodeDocDetailParam|asEndOfTrackCallback|[[../tString|tString]]|}}
{{CodeDocDetailParam|abRandom|bool|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|Stop}}
<syntaxhighlight lang="c++">void Stop()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{CodeDocDetailTop|StopTrack}}
<syntaxhighlight lang="c++">void StopTrack()</syntaxhighlight>
{{CodeDocDetailBody|}}
{{CodeDocDetailReturn|void|}}
{{CodeDocDetailBottom}}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}