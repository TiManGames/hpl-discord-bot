{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cLuxPathfinder has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddTrackNode || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asNodeName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinWaitTime</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxWaitTime</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asAnimName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLoopAnim</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || BuildPathNodeArrayToPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || CheckFreePath || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avStartPos</syntaxhighlight>]],<br />[[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avTargetPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ClearTrackNodes ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCurrentTrackNode ||   ||
|-
| [[../cLuxTrackNode|<syntaxhighlight lang="c++" inline>cLuxTrackNode@</syntaxhighlight>]] || GetCurrentTrackNodeData ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCurrentTrackWaitTime ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDebugLOSCastResult || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetDebugLOSCastResultNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetDebugLOSPathResult || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetDebugLOSPathResultNum ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f&</syntaxhighlight>]] || GetDebugLOSPoint || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetDebugLOSPointNum ||   ||
|-
| [[../iLuxEntity|<syntaxhighlight lang="c++" inline>iLuxEntity@</syntaxhighlight>]] || GetEntity ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetNextGoalPos ||   ||
|-
| [[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@</syntaxhighlight>]] || GetNodeAtPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abGetClosest</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPosToNodeFreeDirectPathCheck</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAgentToNodeFreeDirectPathCheck</syntaxhighlight>,<br />[[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@ apSkipNode</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>int alFreePathRayNum</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>uint alFreePathFlags</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abSkipUsedNodes</syntaxhighlight> ||
|-
| [[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@</syntaxhighlight>]] || GetNodeAtPos || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abGetClosest</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abPosToNodeFreeDirectPathCheck</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAgentToNodeFreeDirectPathCheck</syntaxhighlight>,<br />[[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@ apSkipNode</syntaxhighlight>]] ||
|-
| [[../cAINodeContainer|<syntaxhighlight lang="c++" inline>cAINodeContainer@</syntaxhighlight>]] || GetNodeContainer ||   ||
|-
| [[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@</syntaxhighlight>]] || GetNodeFromName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| [[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@</syntaxhighlight>]] || GetNodeInPosLOS || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f& avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afMinDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afMaxDistance</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abAgentToNodeFreeDirectPathCheck = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPathNodeArrayDist || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetPathNodeArrayFullLength ||   ||
|-
| [[../cAINode|<syntaxhighlight lang="c++" inline>cAINode@</syntaxhighlight>]] || GetPathNodeArrayNode || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetPathNodeArraySize ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTrackActive ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetTrackCallback ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTrackLoop ||   ||
|-
| [[../cLuxTrackNode|<syntaxhighlight lang="c++" inline>cLuxTrackNode@</syntaxhighlight>]] || GetTrackNode || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTrackNodeNum ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetTrackPaused ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetTrackUpdateFreq ||   ||
|-
| [[../eLuxEntityComponentType|<syntaxhighlight lang="c++" inline>eLuxEntityComponentType</syntaxhighlight>]] || GetType ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GoToNextTrackNode ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsMoving ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveTo || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afUpdateFreq</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abExactStopAtEnd</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asResultCallback = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCallbackInMap = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || MoveToNode || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asNodeName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afUpdateFreq</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>bool abExactStopAtEnd</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString &in asResultCallback = ""</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abCallbackInMap = false</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || ResetCurrentTrackNode ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCurrentTrackWaitTime || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetEndOfPathCallbackFunc || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asCallbackFunc</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxEdgeDistance || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxEdges || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMaxHeight || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMinEdges || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNodeContainerName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNodeIsAtCenter || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetNodeName || [[../tString|<syntaxhighlight lang="c++" inline>const tString& asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTrackLoop || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetTrackPaused || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StartTrack || <syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afUpdateFreq</syntaxhighlight>,<br />[[../tString|<syntaxhighlight lang="c++" inline>const tString& asEndOfTrackCallback</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || StopTrack ||   ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__