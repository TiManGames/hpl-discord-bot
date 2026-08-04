{{shortPageTitle}}
{{AngelScriptGuideMenu}}
When you're writing your program, you can find yourself ending up with a lot of code. If all this code is inside a single file, that can make things difficult to manage - whenever you want to add or change something, you have to pour through hundreds or thousands of lines of code looking for that one spot. Also, what if you want to use some code that was written by someone else? Do you just copy their code and paste it into your own? What if they update their code, forcing you to find everywhere in your code that was updated and perform the update yourself?

__FORCETOC__

==Include==

As I'm sure you've surmised by now, there's an easier way. There's a special keyword that references a script file and "pastes" it on top of another file. This allows functions and other things to be called from that other file without requiring that the code is in the same place - the <code>include</code> keyword:

'''''code1.hps'''''

<syntaxhighlight lang="c++">
    int Add(int a, int b)
    {
        return a + b;
    }
</syntaxhighlight>

'''''code2.hps'''''

<syntaxhighlight lang="c++">
    #include "code1.hps"

    // ...
    // Elsewhere in your code

    int x = 3;
    int y = 5;
    int z = Add(x, y);
</syntaxhighlight>

Most of this stuff you've already seen, so I'll focus on the relevant bits. In the first file, we have defined a function called <code>Add</code>, which we want to call from the second file. At the top of the second file, we put the <code>#include</code> statement followed by the name of the first file in quotes. From then on in the second file, we can call the <code>Add</code> function in our script just as if it was defined in the second file to begin with.

A restriction of the <code>include</code> statement is that it must be placed at the top of a file. If you had the following code:

<syntaxhighlight lang="c++">
    int x = 3;
    int y = 5;
    
    #include "code2.hps"
    
    int z = Add(x, y);
</syntaxhighlight>

This code would result in an error, because the include statement is not at the top of a file.

{{note|The <code>#</code> before the <code>include</code> keyword is required whenever using an include statement. That is because an include statement is a special kind of statement called a ''pragma''. Instead of working with the program while it is running, a pragma tells the compiler to do a certain task when the script is getting ready to run for the first time. In this case, the <code>include</code> pragma tells the compiler to include references to stuff inside another file so it can be called from the calling file, something that would be much harder to do once the program was already running.}}

A thing to note about the path that you put inside the quotes. When HPL3 gathers all of its assets, it stores them in a handy reference table where they can be referenced using any part of their path. For example, if you had a file at <code>script/utility/props/omnitool/omnitool_code.hps</code>, you could include it using any of the following lines:

<syntaxhighlight lang="c++">
    #include "omnitool_code.hps"
    #include "omnitool/omnitool_code.hps"
    #include "props/omnitool/omnitool_code.hps"
    #include "utility/props/omnitool/omnitool_code.hps"
    #include "script/utility/props/omnitool/omnitool_code.hps"
</syntaxhighlight>

Each of those include statements will work in the exact same way. Simplicity would state that you can just do the first line, while a desire to be explicitly specific would say that you should do the last line. The general advice as to which one you should use is to use the shortest one that illustrates the intent of that script. For example, you can use <code>omnitool/omnitool_code.hps</code> to illustrate that it is a group of code intended to work on the Omnitool, or you could use <code>props/omnitool/omnitool_code.hps</code> if there are other scripts from the "props" folder you will be importing as well. (You should almost never use the shortest option unless the name of the file itself is enough description.)

==Namespaces==

The ability to group code from different files together is incredibly useful for keeping your code clean and organized. However, there arises a problem. What if you have two files that look something like this?

'''''code1.hps'''''

<syntaxhighlight lang="c++">
    int Add(int x, int y)
    {
        return x + y;
    }
</syntaxhighlight>

'''''code2.hps'''''

<syntaxhighlight lang="c++">
    int Add(int x, int y)
    {
        return x + y + 5;
    }
</syntaxhighlight>

We have two <code>Add</code> functions in two different scripts, and one does something different than the other. However, if we include both of these script files into a third script file, it will throw an error, because the function signatures are the same. (Remember when I talked about function overloading in Lesson 5?)

We need to be able to resolve this conflict. The simplest way would be to rename the functions themselves to something like <code>AddA</code> and <code>AddB</code>, but that can be tedious and lead to poorly-maintained code. What we need instead is a way to differentiate these two functions based on the purposes they exist for.

As it turns out, there's a keyword for just such an occasion: <code>namespace</code>:

'''''code1.hps'''''

<syntaxhighlight lang="c++">
    namespace Code1
    {
        int Add(int x, int y)
        {
            return x + y;
        }
    }
</syntaxhighlight>

'''''code2.hps'''''

<syntaxhighlight lang="c++">
    namespace Code2
    {
        int Add(int x, int y)
        {
            return x + y + 5;
        }
    }
</syntaxhighlight>

Now the two functions are placed within different namespaces. A namespace is a special block of code that says "everything inside this block must be accessed using the name of the namespace as an identifier". This is cool, because since the functions now exist in different namespaces, they will no longer conflict with each other.

Now let's see how to access these functions. As it turns out, you do it with a new operator called the ''scoping operator'':

'''''code3.hps'''''

<syntaxhighlight lang="c++">
    #include "code1.hps"
    #include "code2.hps"
    
    // ...
    // Elsewhere in your code
    
    int a = 3;
    int b = 5;
    
    int x = Code1::Add(a, b);
    int y = Code2::Add(a, b);
</syntaxhighlight>

As you can see, the scoping operator is <code>::</code>. When the scoping operator is placed between a namespace identifier and some other identifier (such as a function or variable name), it tells the program to look for that identifier specifically within that namespace. For example, in the previous code, when we want the <code>Add</code> function within the <code>Code1</code> namespace, we reference it by typing <code>Code1::Add(...)</code>.

One neat thing you can do with namespaces is that you can nest them as well:

<syntaxhighlight lang="c++">
    int Add(int a, int b)
    {
        return a + b + a + b;
    }

    namespace A
    {
        int Add(int a, int b)
        {
            return a + b;
        }
        
        namespace B
        {
            int Add(int a, int b)
            {
                return a + b + 5;
            }
        }
    }
</syntaxhighlight>

When referring to nested namespaces, you simply just chain together scoping operators to get to the function you want:

<syntaxhighlight lang="c++">
    int a = 3;
    int b = 5;
    
    int x = A::Add(a, b);
    int y = A::B::Add(a, b);
</syntaxhighlight>

{{note|You may have noticed that in this previous example, I had a third <code>Add</code> function as well, outside either of the namespaces. If you want to access that one, you can do it by using the scoping operator to reference the ''global'' namespace, which everything is implicitly part of. You can do this by just having the <code>::</code> before the name without a namespace identifier:

<syntaxhighlight lang="c++">
    int x = 3;
    int y = 5;
    int z = ::Add(x, y); // Refers to the global namespace version of <code>Add</code>
</syntaxhighlight>}}

==Scope==

When dealing with namespaces, it's important to understand the concept of scope. Scope talks about the visibility of things like functions and variables, and it determines what other code can see and access them. For example, say we had the following code:

<syntaxhighlight lang="c++">
    namespace A
    {
       void DoOtherWork()
       {
           DoWork();
       }
    }
    
    void DoWork()
    {
        DoOtherWork();
    }
</syntaxhighlight>

''(Ignore the infinite loop potential in this code for a moment.)''

Inside <code>DoOtherWork</code>, the <code>DoWork</code> function gets called, which is perfectly fine. In turn, <code>DoWork</code> calls <code>DoOtherWork</code>. This, however, is not fine, because <code>DoOtherWork</code> is ''outside'' of <code>DoWork</code>s scope.

The general rule of scope is that a new level of scope is created wherever there is a new code block. Things inside a code block can access anything in code blocks above it, but anything outside of a given code block cannot access things that were declared or defined within it. How many statements involve creating new code blocks? Functions do, namespaces do, and even the conditional and looping statements like <code>if</code> and <code>while</code> do.

Take this visual representation, for example:

[[File:Angelscript scopes.png|frameless|left|602x602px]] {{clr}}

The colored lines represent levels of scope. Anything can access anything else as long as the place calling it shares all the same colors as the thing being called. For example, <code>DoWork</code> in namespace <code>B</code> can access <code>AddIf</code> in namespace <code>A</code> because <code>DoWork</code> exists in that scope (<code>AddIf</code> has the scope colors red and yellow, which <code>DoWork</code> also has). However, the opposite is not true - <code>AddIf</code> would not be able to call <code>DoWork</code> because <code>DoWork</code> is in a higher scope (<code>DoWork</code> has the scope colors red, yellow, and magenta, but <code>AddIf</code> does not have magenta in its colors).

There are also some errors in this image. In the <code>DoWork</code> function, the <code>y</code> variable is declared within the while loop. The function then tries to assign a value to <code>y</code> once the loop is done, but this is not allowed, because <code>y</code> exists in the scope of the loop and cannot be accessed outside of it. Similarly, in <code>Foo</code>, the function tries to access the <code>z</code> variable of the <code>DoWork</code> function, which is so far outside its scope as to be just silly.

{{note|When referring to how "high" of a scope something has, think of the above image as though it were laying on its side with the colors going up like pyramids. Colors that are "higher up" on the pyramid are referred to as having a higher scope. Just remember that when it comes to scopes, higher means more limited.}}

{{NavBar|HPL3/Scripting/AngelScript Fundamentals/Chapter 6 - Functions|Chapter 6 - Functions|HPL3/Scripting/AngelScript Fundamentals|AngelScript Fundamentals|HPL3/Scripting/AngelScript Fundamentals/Chapter 8 - Classes|Chapter 8 - Classes}}

[[Category:HPL3 Scripting]]
[[Category:English]]