{{ScriptingStub}}

Have some helpful descriptions to add to this class? Edit this page and add your insight to the Wiki!

==Fields==

cSoundEntity has no public fields.

==Functions==

{| class="wikitable"
! Return Type !! Function Name !! Parameters !! Description
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || AddChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeIn || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeIn || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afTargetVol</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeOut || <syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeSpeedMul || <syntaxhighlight lang="c++" inline>float afDest</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || FadeVolumeMul || <syntaxhighlight lang="c++" inline>float afDest</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afSpeed</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || GetAverageSpectrum || ,<br /><syntaxhighlight lang="c++" inline>int alNumValues = 64</syntaxhighlight> ||
|-
| [[../cBoundingVolume|<syntaxhighlight lang="c++" inline>cBoundingVolume@+</syntaxhighlight>]] || GetBoundingVolume ||   ||
|-
| [[../cEntity3DIterator|<syntaxhighlight lang="c++" inline>cEntity3DIterator@</syntaxhighlight>]] || GetChildIterator ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetCreationID ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCustomMaxDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetCustomMinDistance ||   ||
|-
| [[../eSoundEntityDataType|<syntaxhighlight lang="c++" inline>eSoundEntityDataType</syntaxhighlight>]] || GetDataType ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetElapsedTime ||   ||
|-
| [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@</syntaxhighlight>]] || GetEntityParent ||   ||
|-
| [[../eEntityType|<syntaxhighlight lang="c++" inline>eEntityType</syntaxhighlight>]] || GetEntityType ||   ||
|-
| [[../tID|<syntaxhighlight lang="c++" inline>tID</syntaxhighlight>]] || GetID ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetLocalMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetLocalPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMaxDistance ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetMinDistance ||   ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetName ||  ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParam || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetParam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetRemoveWhenOver ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetReverbActive ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetReverbAmount ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetScriptableIsSaved ||   ||
|-
| [[../cSoundEntry|<syntaxhighlight lang="c++" inline>cSoundEntry@</syntaxhighlight>]] || GetSoundEntry || <syntaxhighlight lang="c++" inline>bool abCheckEntryValidity</syntaxhighlight> ||
|-
| [[../tString|<syntaxhighlight lang="c++" inline>const tString&</syntaxhighlight>]] || GetSoundFile ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSoundFile3D ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSoundFileBlockable ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetSoundFileBlockMul ||   ||
|-
| [[../eSoundEntryType|<syntaxhighlight lang="c++" inline>eSoundEntryType</syntaxhighlight>]] || GetSoundFileEntryType ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSoundFileLoop ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetSoundFilePriority ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetSoundFileStream ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetTransformUpdateCount ||   ||
|-
| <syntaxhighlight lang="c++" inline>int</syntaxhighlight> || GetUniqueID ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || GetUseCustomProperties ||   ||
|-
| <syntaxhighlight lang="c++" inline>float</syntaxhighlight> || GetVolume ||   ||
|-
| [[../cMatrixf|<syntaxhighlight lang="c++" inline>cMatrixf&</syntaxhighlight>]] || GetWorldMatrix ||   ||
|-
| [[../cVector3f|<syntaxhighlight lang="c++" inline>cVector3f</syntaxhighlight>]] || GetWorldPosition ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || HasParent ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsActive ||  ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsFadingOut ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsOneShot ||   ||
|-
| <syntaxhighlight lang="c++" inline>bool</syntaxhighlight> || IsStopped ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Play ||   ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || RemoveChild || [[../iEntity3D|<syntaxhighlight lang="c++" inline>iEntity3D@ apEntity</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetActive || <syntaxhighlight lang="c++" inline>bool abActive</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCustomMaxDistance || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetCustomMinDistance || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetElapsedTime || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetName || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || <syntaxhighlight lang="c++" inline>int alIdx</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParam || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asName</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetParamHash || <syntaxhighlight lang="c++" inline>int alHash</syntaxhighlight>,<br /><syntaxhighlight lang="c++" inline>float afValue</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbActive || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetReverbAmount || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetScriptableIsSaved || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFile3D || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFileBlockable || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFileBlockMul || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFileEntryType || [[../eSoundEntryType|<syntaxhighlight lang="c++" inline>eSoundEntryType aType</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFileLoop || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFilePriority || <syntaxhighlight lang="c++" inline>int alX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetSoundFileStream || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetupSoundFile || [[../tString|<syntaxhighlight lang="c++" inline>const tString &in asFile</syntaxhighlight>]],<br /><syntaxhighlight lang="c++" inline>bool abLoop</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetUseCustomProperties || <syntaxhighlight lang="c++" inline>bool abX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetVolume || <syntaxhighlight lang="c++" inline>float afX</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldMatrix || [[../cMatrixf|<syntaxhighlight lang="c++" inline>const cMatrixf &in a_mtxWorldTransform</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || SetWorldPosition || [[../cVector3f|<syntaxhighlight lang="c++" inline>const cVector3f &in avWorldPos</syntaxhighlight>]] ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || Stop || <syntaxhighlight lang="c++" inline>bool abPlayEndSound</syntaxhighlight> ||
|-
| <syntaxhighlight lang="c++" inline>void</syntaxhighlight> || UpdateLogic || <syntaxhighlight lang="c++" inline>float afTimeStep</syntaxhighlight> ||
|}

{{ReferencesSection}}

{{HPL3SOMAScriptingCategories}}
__FORCETOC__