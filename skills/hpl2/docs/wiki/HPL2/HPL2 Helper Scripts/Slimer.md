{{TocRight}}
This page documents "HelperScripts_Slimer.hps" - part of ''[[HPL2/HPL2 Helper Scripts]]'', a modder-made package of .hps files by Aetheric Games, containing script classes and functions that may be useful to HPL2 modders and custom story creators. See the [[HPL2/HPL2 Helper Scripts|main page]] for more information, including [[HPL2/HPL2 Helper Scripts#Set-up|set-up instructions]].


=Summary=
The script class cSlimer manages large lists of entities that should play out a sequence of actions.

For example, this could be something like the the classic Shadow-slime chase sequences in A:TDD, but it could also be used to manage other set-pieces involving large groups of entities that should appear or do something in an ordered or semi-random sequence, without having to write out hundreds of timer callbacks.


===Quick guide===

Here's the quick version of how to use Slimer to script a basic series of Shadow-slimes:

# Add slime entities to your level. Slimer will recognise them by name. Give them names like "SlimeCorridor_2_0".

: Slimer entity names have the pattern <code>"SequenceName_StepIndex_InstanceIndex"</code> or <code>"AAAA_B_C"</code> where <code>AAAA</code> is the name of a *sequence*, <code>B</code> is the index of a *step* and <code>C</code> is the index of an *instance*.

# For each sequence of slimes, add a line to the level's <code>OnEnter()</code> function calling <code>InitSequence()</code>. For example:
<syntaxhighlight lang="cpp">
<code>Slimer.InitSequence("SlimeCorridor")</code>.
</syntaxhighlight>

# When it is time to start a sequence, use <code>PlaySequence()</code> and it will play out. For example:
<syntaxhighlight lang="cpp">
<code>Slimer.PlaySequence("SlimeCorridor")</code>.
</syntaxhighlight>

There are other ways to use Slimer, but that's the simplest approach.

===Terms===

The idea here is that the level designer should be able to script sequences (e.g. spawning many slime entities, opening many doors etc.), just by placing and naming the entities and adding a few lines, rather than having to choreograph a bunch of timers.

* A Slimer entity is an entity that has a ''name'' Slimer understands (the "SequenceName_StepIndex_InstanceIndex" format).
* A '''sequence''' is a like a series, or a pattern you want to play out.
* A '''step''' is a group or stage in the sequence.
* An '''instance''' is an individual Slimer entity that is part of a step.
* An '''action''' is the thing that happens to an instance. Each instance has a bool state - the action toggles the state.
* ''Appearing''' and ''disappearing''' is the default '''action type''', but there are others that work with specific entity types.
* When you '''play''' a sequence, all its steps are added to the '''play queue''', and are carried out over time.
* The order of the ''steps'' is '''fixed'''. The order of the ''instances'' within the step can be '''randomised''' or '''reversed'''.
* A '''sequence callback''', '''step callback''', '''instance callback''' is a function call ''sent'' by Slimer, that can be triggered by any instance action, or the beginning or end of any sequence or step as it plays in queue.
* A '''play callback''' is a callback ''received'' by Slimer, to make it automatically play a sequence, to save you some typing.

===Set-up===

Here's an example, also using slimes. Imagine a level with a corridor, then a room, and then another corridor. The level designer wants the player to be chased down the corridor and into the room as the slimes appear around them. Once the player gets to the room they're safe, until something is triggered and then they are chased out of the room and down the second corridor.

The first corridor would be a sequence. It could be named something like "CorridorA". The length of the corridor should be divided into steps. The longer the corridor, the more step may be required. The slime entities placed in the corridor in the level editor should have names such as:
<code>"CorridorA_0_0", "CorridorA_0_1", "CorridorA_0_2" ...
"CorridorA_1_0", "CorridorA_1_1", "CorridorA_1_2" ...
"CorridorA_2_0", "CorridorA_2_1" ... etc</code>

The room and the second corridor could be two other sequences with their own names, each broken into multiple steps. For example:
<code>"Room_0_0", "Room_0_1" ...
"CorridorB_0_0", "CorridorB_0_1" ... etc</code>

The step and instance numbers must be continuous. In InitSequence(), when Slimer is searching for all the steps and instances using the sequence name, it will stop counting when it reaches a number that doesn't exist.
If the entities are named:
<code>"Room_0_0", "Room_0_1", "Room_0_2", "Room_0_4", "Room_0_5"</code>
...then Slimer will not find "Room_0_4" and "Room_0_5", since there was no "Room_0_3". In the event that Slimer is not finding entities, check the the naming pattern using the Level Editor's ''Find Objects'' tool. Ideally, numbering should start from 0. For convenience sake, Slimer will also recognise sequences that start from 1 but will renumber them internally. Once named, these sequences must be initialised in Slimer using InitSequence(), to register them, set their initial state and ready them to play.

Within each step the order of appearance is randomised (by default, with the option for them to follow the specific order or in reverse). The level designer can control when each sequence plays, based on things like triggers. Multiple sequences can be queued up to play in turn.

In our corridor-and-room example, the level designer may set up a script area to trigger the "CorridorA" sequence to play when the player enters the first corridor, using. They might add sequence, step or instance callbacks to enable lighting effects or damage triggers at specific points in the sequence, using AddSequenceCallback(), AddStepCallback() or AddInstanceCallback().

To handle the gameplay that triggers the "Room" sequence, the level designer could use <code>PlaySequence()</code> in whatever script they might normally write. Alternatively the "Room" sequence could be made to play automatically when the player does something, using a play callback, e.g. SlimerPlayOnLookat() and other global functions.


===Other ideas===
Slimer isn't just for slimes. The same methods could be applied to any sequences of entity actions, such as:
* A breeze blows through a candle-lit chamber...
* A forest grows around the player...
* Every door in the prison block slams shut...


===Action types===
When a sequence is initialised using InitSequence(), an action type can be specified. The action type defines what global function Slimer uses when the instance comes up in the play queue. There are 9 options:
* <code>actionFade</code> (default) makes the entity activate/deactivate by fading, using Slimer's default fade times. (Default = 1.0s to appear, 3.0s to disappear)
* <code>actionActivate</code> makes the entity do its activate/deactivate behaviour instantly. Often this is simply appear/disappear, but it may vary in different entity types.
* <code>actionLight</code> assumes the entity is a light, and uses SetLightVisible() to switch it on or off instantly.
* <code>actionLamp</code> assumes the entity is a lamp, and uses SetLampLit() with the lamp entity's own effects.
* <code>actionSwingDoor</code> assumes the entity is a swing door, and uses SetSwingDoorClosed(). Setting the state to false/off will close the door. Setting it to true/on will open it only slightly.
* <code>actionMoveObject</code> assumes the entity is a move object, and uses SetMoveObjectState() with <code>afState = 1.0f</code> for true/on and <code>afState = 0.0f</code> for false/off.
* <code>actionWheel</code> assumes the entity is a wheel, and uses SetWheelStuckState() with <code>alState = 1</code> for true/on and <code>alState = -1</code> for false/off, using the entity's own effects.
* <code>actionLever</code> assumes the entity is a level, and uses SetLeverStuckState() with <code>alState = 1</code> for true/on and <code>alState = -1</code> for false/off, using the entity's own effects.
* <code>actionNone</code> does no instance action but can still have callbacks attached. If actionNone is selected, it doesn't matter whether entities with the sequence name actually exist in the level. An example use case might be to call a large number of script functions in a timeline, with possible repetition and semi-randomisation.


===Save data===
Slimer saves its data for each level to GameVars so that it can be automatically restored when the player returns to the level or reloads a game that was saved in the level. Any sequences that were initialised with Slimer at the time of saving will be re-initialised, and any sequence, step or instance callbacks should be re-registered. If the sequence has played, is currently playing, or has been enqueued for playing the time of saving, then it load as if it had completed.

The restoration of the loaded state occurs on the first frame once the game has started. If the game starts and Slimer hasn't yet been initialised, then it will check to see if there is saved data from a previous session, and restore it. If the game starts and Slimer was already initialised in OnStart() or OnEnter(), then the load will be skipped.


===Advanced info===
'''Advanced users''' may wish to examine "HelperScripts_Slimer.hps" to see how it makes use of other script classes. cSlimer and its associated node classes is an example of putting generic lists to work in more complex ways. There are also some private variables that could to tweaked to fit the needs of a specific project, such as the default effects and maximum list counts. Advanced users may also take note of the callbacks systems used by cSlimer. Sequence, step and instance callbacks sent ''from'' cSlimer are actually just timer callbacks with zero delay, so will happen on the next tick. Play callbacks ''recieved'' by cSlimer are actually calling one of a handful of global callback functions, that in turn pass whatever arguments they implement over to the generic Slimer.PlayOnCallback().


=Slimer=
Slimer is the name of the object that manages spawning entities at specific map locations.


==Behaviours==
"HelperScripts_Slimer.hps" declares an object called '''Slimer''', of the new script class cSlimer. To access its methods and properties, just use "Slimer." followed by the function call or property name. E.g.:
<syntaxhighlight lang="cpp">
Slimer.PlaySequence("cutscene1");
if (Slimer.QueueCount > 0) DoStuff();
</syntaxhighlight>


==Properties==
Slimer provides the following properties:


====IsActive====
<syntaxhighlight lang="cpp">
bool IsActive
</syntaxhighlight>
The read-only boolean property IsActive returns true if the Slimer queue is currently playing.
<syntaxhighlight lang="cpp">
// Example:
void SlimerFinishedRetry(string &in asTimer)
{
	if (Slimer.IsActive) AddTimer("WaitForSlimer", 1.0f, "SlimerFinishedRetry");
	else
	{
		DoStuff();
	}
}
// The condition succeeds if Slimer is still playing the queue, In that case, the timer will delay for a second then check again.
// In other words, DoStuff() happens once the queue is clear.
</syntaxhighlight>


====QueueCount====
<syntaxhighlight lang="cpp">
uint QueueCount
</syntaxhighlight>
The read-only integer property QueueCount returns the number of actions that are currently in the play queue.
<syntaxhighlight lang="cpp">
// Example:
void SlimerProgressRetry(string &in asTimer)
{
	if (Slimer.QueueCount > 20) AddTimer("WaitForSlimer", 1.0f, "SlimerFinishedRetry");
	else
	{
		DoStuff();
	}
}
// The condition succeeds if Slimer has greater than 20 actions still to play in the queue. In that case, the timer will delay for a second then check again.
// In other words, DoStuff() happens once the queue contains 20 actions or less.
</syntaxhighlight>


====SequenceCount====
<syntaxhighlight lang="cpp">
uint SequenceCount
</syntaxhighlight>
The read-only integer property SequenceCount returns the number of sequences that have been initialised in Slimer.
<syntaxhighlight lang="cpp">
// Example:
uint myNumSequences = Slimer.SequenceCount;
// Retrieves the number of registered sequences and assigns it to the variable.
</syntaxhighlight>


==Methods==
Slimer provides the following methods:


===Initialising sequences===


====InitSequence()====
<syntaxhighlight lang="cpp">
bool InitSequence(string asSequence, enumSlimerActionType aActionType = actionFade, bool abStartingState = false)
bool InitSequence(string asSequence, enumSlimerActionType aActionType, bool abStartingState, string asActSnd, string asDeactSnd, string asActPs, string asDeactPs)

bool InitSequence(cListString asSequenceList, enumSlimerActionType aActionType = actionFade, bool abStartingState = false)
bool InitSequence(cListString asSequenceList, enumSlimerActionType aActionType, bool abStartingState, string asActSnd, string asDeactSnd, string asActPs, string asDeactPs)

bool InitSequence(string[] asSequenceArray, enumSlimerActionType aActionType = actionFade, bool abStartingState = false)
bool InitSequence(string[] asSequenceArray, enumSlimerActionType aActionType, bool abStartingState, string asActSnd, string asDeactSnd, string asActPs, string asDeactPs)
</syntaxhighlight>
Prepares a sequence of entities to be used with Slimer, and sets their starting state. Each sequence in the level should ideally be initialised during OnEnter(). If not, it can still be played with default options, but it will be initialised automatically when added to the play queue which might cause a performance stutter. The default starting start is false/hidden/off (depending on the entity and action type).
<br>Minimally, only a single string arg is needed: asSequence. This should match the first part of the name of the Slimer entities in the level. E.g. if your entities have names like "SomeEventPartA_0_0" then asSequence should be "SomeEventPartA".
<br>Optionally, instead of a single string, a list of strings or an array of strings can be provided. This could be useful when there are a lot of sequences to initialise. Consider also using String.StringRange() to generate an array of strings like "EventASlime", "EventBSlime", "EventCSlime" etc. without having to type them all out.
<br>aActionType is optional and can be omitted. The '''action type''' specifies what the sequence does to the entities.
<br>abStartingState is optional and can be omitted. It defaults to false. This state is applied to the entities when they are initialised. This means that the state set in the Level Editor is not necessarily important, as long as the sequence is initialised before play starts, in OnEnter().
<br>asActSnd, asDeactSnd, asActPs, asDeactPs are also optional. You can omit all four of them, or you can specify all of them together. These strings set sounds and particle effects to use on entity actions. If omitted the defaults are "", that is, no sounds or particles. ('''Advanced users''' may note that cSlimer has private field variables that can be edited to specify project-specific defaults if required.)
#''string asSequence'' - Name of a sequence to initialise.
#''enumSlimerActionType aActionType'' - actionFade, actionActivate, actionLight, actionLamp, actionSwingDoor, actionMoveObject, actionWheel, actionLever or actionNone. (Optional, default = actionFade)
#''bool abStartingState'' - Whether the instance entities should start on or off. (Optional, default = false)
#''string ActSnd'' - Activation sound - a .snt file to play when the instance state becomes true. (Optional)
#''string DeactSnd'' - Deactivation sound - a .snt file to play when the instance state becomes false. (Optional)
#''string ActPs'' - Activation particles - a .ps file to spawn when the instance state becomes true. (Optional)
#''string DeactPs'' - Deactivation particles - a .ps file to spawn when the instance state becomes false. (Optional)
<syntaxhighlight lang="cpp">
// Example 1:
Slimer.InitSequence("LibraryEventStage1");
// A single sequence is initialised with default options.
// The action type will default to actionFade. The starting state false/off is applied to the instance entities, so with actionFade they will start invisible.

// Example 2:
Slimer.InitSequence("LibraryEventStage1", actionMoveObject, true, "", "libraryMachine.snt", "", "ps_sparks.ps");
// A single sequence is initialised with some specific options.
// The action type is specified as actionMoveObject. The starting start true/on is applied to the instance entities. With actionMoveObject this means the move start will be set to 0.0f.

// Example 3:
string[] sInitStrings = { "door_slimes", "courtyard_slimes", "alley_slimes" };
Slimer.InitSequence(sInitStrings);
// Three sequences are initialised with default options, using the sequence names specified in the array.

// Example 4:
Slimer.InitSequence(String.StringRange("DoorSlam_", "A", "F", "seq"), true, actionSwingDoor);
// Initialises a sequence of Swing Door entities, with the starting state of true/on, so that they can close when the sequence plays.
// String.StringRange() been used to generate a list of sequence names in one go. The strings generated would be:
// "DoorSlam_Aseq", "DoorSlam_Bseq", "DoorSlam_Cseq", "DoorSlam_Dseq", "DoorSlam_Eseq", "DoorSlam_Fseq"
</syntaxhighlight>


===Playing sequences===


====PlaySequence()====
<syntaxhighlight lang="cpp">
bool PlaySequence(string &in asSequence, float afDuration = 3.0f, enumSlimerPlayMethod aPlayOption = playRandom, enumSlimerQueueMethod aQueueOption = queueAppend, enumSlimerCancelMethod aCancelOption = cancelFlush)
</syntaxhighlight>
Adds a sequence to the queue by name, asSequence, to be spawned by Update() when ready. Returns true if the sequence was successfully added, or false if not. It won't be added if it was not found or if the queue is already too full to accept the length of the new sequence. It is possible to add the same sequence to the list multiple times, to toggle them.
<br> If float afDuration is specified, it defines how long the sequence will take to play out, divided between all steps. (To fine-tune how much time is given to each step, see SetStepWeight().) If omitted, mfSeqDurationDefault is used (default 8s).
<br>aPlayOption is optional and can be omitted, or it can be playRandom, playForward, playReverse, or playImmediate. aPlayOption affects the order of actions *within a step* - it doesn't affect the order of the steps with the sequences. With playRandom (default), the actions within a step will be enqueued in a random order. With playForward, the actions will be enqueued in their normal order (the order that the entities were found by name during InitSequence()). With playReverse, the actions will be enqueued in their normal order, but reversed. With playImmediate, the actions will be enqueued in their normal order, but with zero delay, so that they reach the head of the queue concurrently. If you have a very large sequence, you might find it more performant to use playForward.
<br>aQueueOption is optional and can be omitted, or it can be queueAppend, queueInsert or queueReplace. With queueAppend (default), the new sequence is added at the end of the current queue, and the current queue will play out first. With queueInsert, the sequence is added at the head of the current queue. The current queue is interrupted and will play out afterwards. With queueReplace, the current queue is cleared and the new sequence will play right away.
<br>aCancelOption is optional and can be omitted, or it can be cancelFlush or cancelDelete. It is only relevant if queueReplace is used. With cancelFlush (default), the queue is emptied by setting all pending actions to happen immediately, followed by the new sequence. With cancelDelete, the queue is cancelled. Any pending actions are forgotten and replaced by the new sequence instead.
#''asSequence'' - The name of the sequence to be played.
#''afDuration'' - The time the sequence will take to play out, across all steps. (Optional, default = 3.0f)
#''aPlayOption'' - Can be playRandom, playForward, playReverse, or playImmedate. (Optional, default = playRandom)
#''aQueueOption'' - Can be queueAppend, queueInsert or queueReplace. (Optional, default = queueAppend)
#''aCancelOption'' - Can be cancelFlush or cancelDelete. Only used if aQueueOption is queueReplace. (Optional, default = cancelFlush)
<syntaxhighlight lang="cpp">
// Example 1:
Slimer.PlaySequence("SetpiecePt1");
Slimer.PlaySequence("SetpiecePt2");
Slimer.PlaySequence("SetpiecePt3");
// The three sequences are added to the play queue and will play out one after the other.

// Example 2:
Slimer.PlaySequence("SlowSequence", 60.0f, playForward);
// The sequence will play over a 60 second duration, without randomisation.

// Example 3:
void OnPlayerSlimeTrigger1(string &in asParent, string &in asChild, int alState)
{
	Slimer.PlaySequence("SlimeChase_Start", playImmedate);
	Slimer.PlaySequence("SlimeChase_1");
}

void OnPlayerSlimeTrigger2(string &in asParent, string &in asChild, int alState)
{
	Slimer.PlaySequence("SlimeChase_2", queueReplace, cancelFlush);
}
// This example imagines two Script Areas with collision callbacks triggered by the player.
// When the player first triggers OnPlayerSlimeTrigger1(), the sequence "SlimeChase_Start" is added to the play queue with playImmedate, so the whole sequence of slimes spawns at once.  Next, "SlimeChase_1" is added, so it starts to play normally as soon as "SlimeChase_Start" is done.
// "SlimeChase_2" is added with queueReplace and cancelFlush, so if the player triggers OnPlayerSlimeTrigger2() before "SlimeChase_1" has finished, then "SlimeChase_1" will be "flushed" - it catches up so that "SlimeChase_2" can start right away.
</syntaxhighlight>


====PlaySingle()====
<syntaxhighlight lang="cpp">
bool PlaySingle(string asSequence, uint aulStep, uint aulInstance, enumSlimerQueueMethod aQueueOption, enumSlimerCancelMethod aCancelOption)
</syntaxhighlight>
Queues a single instance from a sequence. Returns true if the instance was found and queued successfully.
<br>aQueueOption is optional and can be omitted, or it can be queueAppend, queueInsert or queueReplace. With queueAppend (default), the single instance is added at the end of the current queue, and the current queue will play out first. With queueInsert, the instance is added at the head of the current queue. The current queue is interrupted and will play out afterwards. With queueReplace, the current queue is cleared and the new singles instance will play right away.
<br>aCancelOption is optional and can be omitted, or it can be cancelFlush or cancelDelete. It is only relevant if queueReplace is used. With cancelFlush (default), the queue is emptied by setting all pending actions to happen immediately, followed by the new sequence. With cancelDelete, the queue is cancelled. Any pending actions are forgotten and replaced by the new sequence instead.
<br>If sequence or step callbacks have been registered for the sequence or step that this instance is part of, they will not be triggered in response to PlaySingle(), only to PlaySequence(). However, instance callbacks registered to the instance will be triggered in response to PlaySingle().
#''asSequence'' - The name of the sequence containing the single instance.
#''aulStep'' - The index of the step containing the single instance.
#''aulInstance'' - The index of the single instance.
#''aQueueOption'' - Can be queueAppend, queueInsert or queueReplace. (Optional, default = queueAppend)
#''aCancelOption'' - Can be cancelFlush or cancelDelete. Only used if aQueueOption is queueReplace. (Optional, default = cancelFlush)
<syntaxhighlight lang="cpp">
// Example 1:
Slimer.PlaySingle("MySequence", 5, 25);
// Instance 25 of step 5 of "MySequence" will be added to the play queue on it's own.

// Example 2:
void OnPlayerAtStart(string &in asParent, string &in asChild, int alState)
{
	Slimer.PlaySequence("SomeEvent");
}

void OnPlayerTooFar(string &in asParent, string &in asChild, int alState)
{
	Slimer.PlaySingle("SomeEvent", 7, 31, queueInsert);
}
// This example imagines two Script Areas with collision callbacks triggered by the player.
// The player touches the first area, OnPlayerAtStart() is triggered and the sequence "SomeEvent" is added to the queue.
// The second collision callback responds to the player getting too far ahead of the sequence and uses PlaySingle() to jump an instance to the head of the queue.
</syntaxhighlight>


====ClearQueue()====
<syntaxhighlight lang="cpp">
void ClearQueue(enumSlimerCancelMethod aCancelOption)
</syntaxhighlight>
Clears the current play queue.
<br>aCancelOption is optional and can be omitted, or it can be cancelFlush or cancelDelete. With cancelFlush (default), the queue is emptied by setting all pending actions to happen immediately. This will take multiple frames depening on mulMaxFrameActions vs the length of the queue. With cancelDelete, the queue is emptied by removing all the pending actions and forgetting about them.
#''aCancelOption'' - cancelFlush or cancelDelete. (Optional, default - cancelFlush)
<syntaxhighlight lang="cpp">
// Example 1:
Slimer.ClearQueue(cancelDelete);
// Deletes all pending actions in the queue. All queued sequences will stop.

// Example 2:
Slimer.ClearQueue();
// The default option is cancelFlush, so all pending actions will be applied immediately to clear to queue.
</syntaxhighlight>


===Adding Callbacks===


====AddSequenceCallback()====
<syntaxhighlight lang="cpp">
bool AddSequenceCallback(string asFunction, string asSequence, bool abOnFirst = false)
bool AddSequenceCallback(string asFunction, cListString asSequenceList, bool abOnFirst = false)
bool AddSequenceCallback(string asFunction, string[] asSequenceArray, bool abOnFirst = false)
</syntaxhighlight>
Registers a Slimer callback to the first or last action in a named sequence. Returns false if the callback was not registered.
<br>A single sequence name can be provided, multiple sequences can be specified with a list or array of strings. If multiple sequences are given, then the named call back is registered to all of them.
<br>abOnFirst is optional. If it is false or omitted, then the callback will be called at the time of the final action in the sequence. If it is true, then the callback will be called when the sequence starts.
<br>The callback function should have the signature 
<syntaxhighlight lang="cpp">
void MyFunc(string &in asSlimerName)
</syntaxhighlight>
where the value passed to asSlimerName will be the name of the sequence that triggered it.
#''string asFunction'' - The name of the function to call.
#''string asSequence'' - The name of the sequence for the callback.
#''bool abOnFirst'' - Whether to add the callback to the end of sequence. (Optional, default = false)
<syntaxhighlight lang="cpp">
// Example 1:
Slimer.AddSequenceCallback("OnSequenceBegin", "MySequenceA", true);
// The function OnSequenceBegin() will be called when sequence "MySequenceA" ''starts''.

// Example 2:
string[] seqsForCbacks = String.StringRange("MySequence", "A", "G", "");
Slimer.AddSequenceCallback("SomethingFinished", seqsForCbacks);
// The function SomethingFinished() will be called when any of the three sequences "MySequenceA" to "MySequenceG" ''ends''.
</syntaxhighlight>
	
	
====AddStepCallback()====
<syntaxhighlight lang="cpp">
bool AddStepCallback(string asFunction, string asSequence, uint aulStep, bool abOnFirst = false)
</syntaxhighlight>
Registers a Slimer callback to the first or last action in a given step of a sequence. Returns false if the callback was not registered.
abOnFirst is optional. If it is false or omitted, then the callback will be called at the time of the final action in the step. If it is true, then the callback will be called when the step starts.
The callback function should have the signature
<syntaxhighlight lang="cpp">
void MyFunc(string &in asSlimerName)
</syntaxhighlight>
where the value passed to asSlimerName will be the sequence and step that triggered it, e.g. "SequenceA_0", not "SequenceA" or "SequenceA_0_0"
#''string asFunction'' - The name of the function to call.
#''string asSequence'' - The name of the sequence for the callback.
#''uint aulStep'' - The index of the step for the callback.
#''bool abOnFirst'' - Whether to add the callback to the end of step. (Optional, default = false)
<syntaxhighlight lang="cpp">
// Example:
Slimer.AddStepCallback("DoStuff", "MySequenceA", 3, true);
Slimer.AddStepCallback("DoStuff", "MySequenceA", 3, false);
// The function DoStuff() will be called both when step 3 of "MySequenceA" starts ''and'' when it ends.
</syntaxhighlight>


====AddInstanceCallback()====
<syntaxhighlight lang="cpp">
bool AddInstanceCallback(string asFunction, string asSequence, uint aulStep, uint aulInstance)
</syntaxhighlight>
Registers a Slimer callback to a specific instance action. The callback will be called whenever the instance action happens. Returns false if the callback was not registered.
The callback function should have the signature 
<syntaxhighlight lang="cpp">
void MyFunc(string &in asSlimerName)
</syntaxhighlight>
where the value passed to asSlimerName will be the slimer entity name that triggered it.
#''string asFunction'' - The name of the function to call.
#''string asSequence'' - The name of the sequence for the callback.
#''uint aulStep'' - The index of the step for the callback.
#''uint aulInstance'' - The index of the instance for the callback.
<syntaxhighlight lang="cpp">
// Example:
Slimer.AddInstanceCallback("DoStuff", "MySequenceA", 11, 22);
// The function DoStuff() will be called at the moment that the queued action for instance 22 of step 11 of "MySequenceA" occurs.
</syntaxhighlight>


===Querying Slimer===


====IsSequenceInQueue()====
<syntaxhighlight lang="cpp">
bool IsSequenceInQueue(string &in asSequence)
</syntaxhighlight>
Checks the currently enqueued sequences and returns true if the given sequence is already queued and waiting. Potentially expensive for large queues with long sequence names. Depends on the instance entity names having the correct format.
#''asSequence'' - Name of the sequence to check for.
<syntaxhighlight lang="cpp">
// Example:
if (Slimer.IsSequenceInQueue("SomeSequence")) DoStuff();
// The condition succeeds is the sequence "SomeSequence" is already in the play queue, playing out or waiting to play out.
</syntaxhighlight>


=cNodeSlimerSequence=
cNodeSlimerSequence is a list node class used by cSlimer to define a sequence. It is '''not recommended''' to work with cNodeSlimerSequence directly. Instead, just use the methods of Slimer and let it manage them for you.


'''Advanced users''' may note that cNodeSlimerSequence has some public member fields to look at, and that each instance of cNodeSlimerSequence containts sub-lists of cNodeSlimerStep instances.


=cNodeSlimerStep=
cNodeSlimerStep is a list node class used by cSlimer to define a sequence. It is '''not recommended''' to work with cNodeSlimerStep directly. Instead, just use the methods of Slimer and let it manage them for you.


'''Advanced users''' may note that cNodeSlimerStep has some public member fields to look at, and that each instance of cNodeSlimerStep containts sub-lists of cNodeSlimerInstance instances.


=cNodeSlimerInstance=
cNodeSlimerSequence is a list node class used by cSlimer to define a sequence. It is '''not recommended''' to work with cNodeSlimerSequence directly. Instead, just use the methods of Slimer and let it manage them for you.


'''Advanced users''' may note that cNodeSlimerInstance has three constructors with different levels of control, as well as some some public member fields to look at. The cNodeSlimerInstance class not only defines the entities grouped within a step, each instance may be referenced by a step parent or by the play queue. They also hold their default, current and target states - "target" is the pending state to applied during the queue.


=Miscellaneous=


==Global functions==


===SlimerPlayOn... Callbacks===
The SlimerPlayOn... callbacks are global functions by which Slimer ''recieves'' notification to automatically play a sequence (with the default PlaySequence() options). These functions can be used with various script callback types either when registered in script ''or when specified in the level editor'', without needing to add an additional function.
<br>The name of the sequence to play is taken from one of the strings in the callback signature, e.g. asTimer, asEntity, asChild. This often means that the entities involved must have names that match the sequence they activate - or vice versa. Alternatively, the name can be the name of the sequence followed by "_" and then any other text, as a comment or label (provided the sequence names don't include "_"). For the callbacks with two string args, Slimer will check them both.
<br>Note: be sure to pick the appropriate function name from the list, to get the right signature for your callback. E.g. when adding a timer, use "SlimerPlayOnTimer".
<br>Note for '''advanced users''': these are global functions not to be confused with the cSlimer method PlayOnCallback(). These global functions exist to catch the calls and pass them to PlayOnCallback().


====AddTimer()====
When using <code>AddTimer(string& asName, float afTime, string& asFunction)</code>:
: asFunction = "SlimerPlayOnTimer"
: asName = the sequence to play


====AddEntityCollideCallback()====
When using <code>AddEntityCollideCallback(string& asParentName, string& asChildName, string& asFunction, bool abDeleteOnCollide, int alStates)</code>:
: asFunction = "SlimerPlayOnCollide"
: asParentName OR asChildName = the sequence to play


====SetEntityPlayerLookAtCallback()====
When using <code>SetEntityPlayerLookAtCallback(string& asName, string& asCallback, bool abRemoveWhenLookedAt)</code>:
: asCallback = "SlimerPlayOnLookat"
: asName = the sequence to play


====SetEntityPlayerInteractCallback()====
When using <code>SetEntityPlayerInteractCallback(string& asName, string& asCallback, bool abRemoveOnInteraction)</code>:
: asCallback = "SlimerPlayOnInteract"
: asName = the sequence to play


====SetEntityCallbackFunc()====
When using <code>SetEntityPlayerInteractCallback(string& asName, string& asCallback, bool abRemoveOnInteraction)</code>:
: asCallback = "SlimerPlayOnEntityEvent"
: asName = the sequence to play


====CheckPoint()====
When using <code>CheckPoint(string& asName, string& asStartPos, string& asCallback, string& asDeathHintCat, string& asDeathHintEntry)</code>:
: asCallback = "SlimerPlayOnCheckpoint"
: asName = the sequence to play


====PlayPropAnimation()====
When using <code>PlayPropAnimation(string& asProp, string& asAnimation, float afFadeTime, bool abLoop, string& asCallback)</code>:
: asCallback = "SlimerPlayOnAnimation"
: asProp = the sequence to play


====SetMultiSliderCallback()====
When using <code>SetMultiSliderCallback(string& asName, string& asCallback)</code>:
: asCallback = "SlimerPlayOnMultislider"
: asProp = the sequence to play


====ConnectEntities()====
When using <code>ConnectEntities(string& asName, string& asMainEntity, string& asConnectEntity, bool abInvertStateSent, int alStatesUsed, string& asCallbackFunc)</code>:
: asCallbackFunc = "SlimerPlayOnConnectEntities"
: asName OR asMainEntity = the sequence to play


====SetEntityConnectionStateChangeCallback()====
When using <code>SetEntityConnectionStateChangeCallback(string& asName, string& asCallback)</code>:
: asCallback = "SlimerPlayOnConnection"
: asName = the sequence to play


====AddCombineCallback()====
When using <code>AddCombineCallback(string& asName, string& asItemA, string& asItemB, string& asFunction, bool abAutoRemove)</code>:
: asFunction = "SlimerPlayOnItemCombine"
: asItemA OR asItemB = the sequence to play


====AddUseItemCallback()====
When using <code>AddUseItemCallback(string& asName, string& asItem, string& asEntity, string& asFunction, bool abAutoDestroy)</code>:
: asFunction = "SlimerPlayOnItemUse"
: asItem OR asEntity = the sequence to play


==Enums==
"HelperScripts_Slimer.hps" defines the enumerators enumSlimerActionType, enumSlimerPlayMethod, enumSlimerQueueMethod, and enumSlimerCancelMethod.


__FORCETOC__