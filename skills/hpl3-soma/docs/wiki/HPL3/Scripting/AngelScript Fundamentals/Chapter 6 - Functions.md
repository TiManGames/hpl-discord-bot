{{shortPageTitle}}
{{AngelScriptGuideMenu}}
So what happens if, as you're making a program, you have a lot of places where you are copying and pasting the same code over and over again? This is repetitive and wordy, not to mention if you find out you have to change that code then you have to change everywhere else that you used that code as well. This is where functions come in.

A function is a construct in programming that takes a section of code and wraps it up into a package that you can then refer to any time you want to call that code. This is immensely useful if like in the hypothetical example you need to run a subsection of your code many times over the course of your program. It also helps you to organize your program, separating your code into easily describable and readable chunks.

==Function Structure==

The structure of a function is similar to that of the statements that you learned about in the previous chapter:

<syntaxhighlight lang="c++">
    void FunctionName()
    {
        // some code goes in here
    }
</syntaxhighlight>

As you can see, a function consists of several parts.

First, you have the <code>void</code> keyword. This says that the function does not return a value. (More on returning values in a bit.)

Next, you have the function name. This name is an identifier, just like a variable name is an identifier, and it follows the same rules for what you can name it. And just like how you use variable names to get the values within variables, you use the function name when you want to run the function's code.

Then you have a set of empty parentheses. I explain the importance of these parentheses in more detail in the "Parameters" section of this lesson, but know that having opening and closing parentheses is the bare minimum required.

And finally, you have a code block, shown by the curly braces. Just like the statements in Lesson 4, the code inside the code block "belongs" to the function.

So now you have a function defined (that's what it's called when you create a function), but how do you run that function's code? See this example:

<syntaxhighlight lang="c++">
    // Elsewhere in your code
    FunctionName();
</syntaxhighlight>

It's just that simple. All you need to do is write out the name of the function followed by those parentheses again. This is known as ''calling'' a function. It tells the program to jump to where you defined the function and run its code. Once it finishes that code, it will jump right back to this spot and continue on. 

{{note|Functions are everywhere, not just in AngelScript, but in many other popular languages as well. This is because most languages have a special function (usually called <code>Main</code>) that tells the computer where the program should start running. 

In fact, nearly all the code you write is going to be within a function somewhere. Remember the "Hello World" example from Lesson 1?

<syntaxhighlight lang="c++">
    ////////////////////////////
    // Run when entering map
    void OnEnter()
    {
        cLux_AddDebugMessage("Hello SOMA");
    }
</syntaxhighlight> 

There's a function right there! The function is called <code>OnEnter</code>, and as the comment says, it is called by the HPL3 engine whenever the map is entered.}}

==Parameters==

I promised that I would explain the importance of those parameters in greater detail, and I will do that now. The parentheses are for defining a function's ''parameters''.

A parameter (also known as an argument) is how you pass information into the function from outside. You do this like so:

<syntaxhighlight lang="c++">
    void FunctionName(int x)
    {
        int y = x + 5;
    }
    
    // ...
    // Elsewhere in your code
    
    FunctionName(2);
</syntaxhighlight>

Inside the parentheses, we do something that looks a lot like declaring a variable. What this does is it defines a parameter called <code>x</code> which is of type <code>int</code>. When calling the function, we pass an <code>int</code> value inside the parameters, which is what the value of <code>x</code> will be inside the function.

{{note|If you've dealt with functions in algebra, this might be a bit familiar:

<syntaxhighlight lang="">
    f(x)   =     x + 5
    
    f(1)   =   (1) + 5
    f(2)   =   (2) + 5
    f(-12) = (-12) + 5
</syntaxhighlight>

In the algebra function <code>f(x)</code>, when you put a number in for <code>x</code> on the left, you substitute that number everywhere where <code>x</code> appears on the right.}}

It's also possible to define more than one parameter:

<syntaxhighlight lang="c++">
    void FunctionName(int x, tString y)
    {
        tString z = y + x;
    }
    
    // ...
    // Elsewhere in your code
    
    FunctionName(5, "abc");
</syntaxhighlight>

The parameters are separated by a comma, both when defining them in the function and when passing the values in calling the function. The order that the parameters appear stays the same - the <code>5</code> goes to <code>x</code>, and the <code>"abc"</code> goes to <code>y</code>.

Keep in mind that you cannot pass a value of the wrong type to a function. If, for example, you were to do this:

<syntaxhighlight lang="c++">
    FunctionName(5, 10);
</syntaxhighlight>

That second parameter is defined as being a string, but <code>10</code> is not a string (not to be confused with <code>"10"</code>, which ''is'' a string). If you tried to do this, then HPL3 would consider it an error, and your code will not run.

==Returning Values==

In addition to receiving information, a function can also be set up to give information back to the code where it was called:

<syntaxhighlight lang="c++">
    int FunctionName()
    {
        return 5;
    }
</syntaxhighlight>

There are a couple of new things here.

First, the <code>void</code> from before has been changed to an <code>int</code>. This means that the function will be returning an <code>int</code> value when its code finishes running. You can define this type as anything you want - the function could return a <code>bool</code>, a <code>tString</code>, a <code>float</code>, or anything. (Or nothing, as in the case of our <code>void</code> examples before.)

Second, we have a new keyword in <code>return</code>. What it does is it signals the function to stop running the code (similar to <code>break</code> from Lesson 4) and take the specified value as the return value. Back where the function was called, the code can take that value and do something with it:

<syntaxhighlight lang="c++">
    int y = FunctionName();
    // y is 5
</syntaxhighlight>

Keep in mind, however, that if you define that a function returns a value, you ''must'' return a value with <code>return</code> somewhere in the function code. If you had a function like this, for example:

<syntaxhighlight lang="c++">
    int FunctionName()
    {
        int x = 5;
    }
</syntaxhighlight>

Notice that the function was defined with <code>int</code> as the return type, but the code doesn't use <code>return</code> anywhere. This will be recognized as an error by HPL3.

{{note|A function must always return a value, so beware of cases where you are putting your <code>return</code> inside conditional statements. Take the following example:

<syntaxhighlight lang="c++">
    int FunctionName()
    {
        bool b = false;
        if (b)
        {
            return 5;
        }
    }
</syntaxhighlight>

Even though there is a <code>return</code> in the function, it is inside an <code>if</code> block. The condition for the <code>if</code> statement is <code>b</code>, which happens to be false. In this case, the <code>if</code> code will not run, which means that the program will never reach the <code>return</code>. This leaves a path in the code in which a <code>return</code> doesn't get called, which will still result in an error. To prevent this, you need to make sure that your function has a <code>return</code> no matter which path your code decides to take:

<syntaxhighlight lang="c++">
    int FunctionName()
    {
        bool b = false;
        if (b)
        {
            return 5;
        }
        else
        {
            return 0;
        }
    }
</syntaxhighlight>

Now there is an <code>else</code> alongside the <code>if</code>, which guarantees that no matter what <code>b</code> is, the function will reach a <code>return</code> at some point.}}

So now we have both parameters and a return type. Bringing them together, let's create a function that performs a useful action that we might want to do many times over the course of the program.

<syntaxhighlight lang="c++">
    int AddFive(int x)
    {
        return x + 5;
    }
</syntaxhighlight>

Now in our program, whenever we need to add 5 to a value, we can just do this:

<syntaxhighlight lang="c++">
    int y = 5;
    int z = AddFive(y);
    // z is 10 (5 + 5)
</syntaxhighlight>

In this code, <code>y</code> is passed to the function with a value of 5, so <code>x</code> within the function gets that value. The function then adds 5 to that value (resulting in 10) and returns it. Back outside the function, the return value is assigned to the variable <code>z</code>.

{{note|If you were to take the above function and compress it down to the following form:

<syntaxhighlight lang="c++">
    int AddFive(int)
</syntaxhighlight>

This is called a function's ''signature''. It takes all the relevant information for identifying a function and discards everything else (return type, function identifier, parameter types). Note that the identifier for the parameter has been removed. This is because the identifier for the parameters are not actually necessary in determining the signature of a function - all it needs to know is how many parameters there are and what types they are.}}

Note that in this example, <code>y</code> is passed as a parameter. However, nothing that happens inside the function will change the value of <code>y</code>. Even if we did this:

<syntaxhighlight lang="c++">
    void AddFiveToY(int y)
    {
        y = y + 5;
    }
    
    // ...
    // Elsewhere in your code
    int y = 5;
    AddFiveToY(y);
    // y is still 5
</syntaxhighlight>

This is because when you pass a variable as a parameter to a function, it does not pass the variable itself. Instead, it takes the value ''inside'' the variable and copies it into the parameter of the function. This is called ''passing by value'', and this happens whever you pass something as a parameter in AngelScript.

{{note|The alternative to passing by value is called ''passing by reference'', in which you do actually pass the variable itself to the function. This concept is a bit more advanced for this tutorial series, but you can read about it in [[HPL3/Scripting/AngelScript_Fundamentals/Chapter_9_-_Miscellaneous_AngelScript_Features#Passing_Parameters_By_Reference_2|Chapter 9]].)}}

==Function Overloading==

Sometimes, we want to create multiple functions that behave similarly but take different types as their parameters. For example, if we wanted to do the following:

<syntaxhighlight lang="c++">
    void PrintIntToDebug(int i)
    {
        cLux_AddDebugMessage("Debug: " + i);
    }
    
    void PrintStringToDebug(tString s)
    {
        cLux_AddDebugMessage("Debug: " + s);
    }
</syntaxhighlight>

As you can see, these two functions behave almost identically, but since they take two different types as parameters, they cannot be made into a single function. However, there is one thing you can do to make your code simpler - function overloading.

When you overload a function, that means you are defining a function that has the same name as another function. Normally this isn't allowed, but it is when the second function has either a different type for its parameter(s) or a different number of parameters. In this case, we can use function overloading because our two functions have different types as parameters:

<syntaxhighlight lang="c++">
    void PrintToDebug(int i)
    {
        cLux_AddDebugMessage("Debug: " + i);
    }
    
    void PrintToDebug(tString s)
    {
        cLux_AddDebugMessage("Debug: " + s);
    }
</syntaxhighlight>

Now you can call both functions using the same identifier:

<syntaxhighlight lang="c++">
    PrintToDebug(5);
    PrintToDebug("abc");
</syntaxhighlight>

HPL3 is smart enough to look at the type of the value you are passing as a parameter and automatically pick the correct function for that type.

{{note|While you can overload functions by having different parameter types, you cannot overload a function by giving it a different return type. Doing so will result in an error when HPL3 tries to run your code. This is because when HPL3 looks at different functions, it only looks at the function name and the parameter types, ''not'' the return type. So while the above overload is perfectly legal, the following overload is not:

<syntaxhighlight lang="c++">
    // First function, minding its own business
    int SomeFunction(int x)
    {
        return 5;
    }
    
    // This function differs from the first only by return type, so it's not a legal overload
    tString SomeFunction(int x)
    {
        return "abc";
    }
</syntaxhighlight>}}

{{NavBar|HPL3/Scripting/AngelScript Fundamentals/Chapter 5 - Statements and Flow Control|Chapter 5 - Statements and Flow Control|HPL3/Scripting/AngelScript Fundamentals|AngelScript Fundamentals|HPL3/Scripting/AngelScript Fundamentals/Chapter 7 - Calling Other Scripts|Chapter 7 - Calling Other Scripts}}

[[Category:HPL3 Scripting]]
[[Category:English]]