{{Hpl3ScriptingGuideMenuBasic}}
{{shortPageTitle}}
{| style="border:0px;" cellspacing="0"
|- valign="top"
| style="padding-right:0.2em" |
Many of the events that happen inside map script files are triggered sequences. For example: A sound plays, then the player's FoV changes, then a light starts flashing, etc.

We control all of those through a set of wrappers we call Sequences, which hide a bunch of timers away and make things easier to read. 

They are very useful when we need to handle a big amount of timers that should occur one after another - or in other words - a sequence.

== Workflow ==
For each sequence you need a map property to store the state - a cSequenceStatesData property:

<pre>cSequenceStatesData mSequenceAlert;</pre>

Then you create a sequence function. This will be repeatedly called until the whole sequence is over. It looks something like this:<syntaxhighlight lang="c++">
cSequenceStatesData mSequenceAlert;
void Sequence_Alert(const tString& in asName)
{
    Sequence_Begin("Sequence_Alert", mSequenceAlert);
    
    if(Sequence_DoStepAndWait(1.0f))  // Do this step and then wait for 1 second
    {
        MakeALoudNoise();
    }
    else if (Sequence_DoStepAndWait(2.5f)) // Do this and then wait for 2.5 seconds
    {
        FlashABrightLight();
    }
    else if (Sequence_DoStepAndPause()) // Do this and then pause until told otherwise
    {
        SaySomethingAndCallBack("OnSayingSomethingComplete");
    }
    else if (Sequence_DoStepAndWait(10.0f)) // Do this and then wait for 10s
    {
        CrushPlayerLikeAnAnt();
    }
    else if (Sequence_DoStepAndContinue()) // Do this and go on to the next step (in this case there isn't one)
    {
        ApologiseToPlayer();
    }
    
    Sequence_End();
}

void OnSayingSomethingComplete()
{
    // Saying something is now complete - poke the sequence to continue processing
    SequenceStates_Resume("Sequence_Alert");
}
</syntaxhighlight>
| style="width:0.1%" |
|}
As you can see, <code>Sequence_DoStepAndPause()</code> in there actually pauses the whole sequence until some external event - in this case the callback from the voice playing code - calls <code>SequenceStates_Resume()</code> and asks it to continue.

To start the sequence, you just call the sequence function once with an empty argument when you want it to trigger:<syntaxhighlight lang="c++">
Sequence_Alert("");
</syntaxhighlight>No need to call it every frame or anything! Once started, timers will automatically make sure that the sequence steps get followed when they need to be.

{{tip|Since sequences are totally independent of each other, you could run multiple sequences in parallel.}}

==See Also==

*[[HPL3/SOMA/Scripting/Sequences Helper|Sequences Helper]] - SOMA
*[[HPL3/Amnesia: Rebirth/Scripting/Sequences Helper|Sequences Helper]] - Amnesia: Rebirth

{{NavBar|HPL3/Scripting/Scripting_Guide/Timers|Timers|HPL3/Scripting/HPL3 Scripting Guide|HPL3 Scripting Guide|HPL3/Scripting/Scripting_Guide/Local and Global Variables|Local and Global Variables}}

[[Category:HPL3 Scripting]]
[[Category:English]]