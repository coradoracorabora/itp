# Okay hell yes let's get started

###pseudo code
I feel like the instructions are pretty straightforward? like i dont know how much room for error there is
**but!** I would like to see if there's a way for me to do the conversion both ways?

like I don't know if that would mean a second file or if there would be a way for me to use the same variables, or if I would need to have like a **c2** to keep the formulas from interfering with each other

###work time
im trying the double

im gonna use xIn and xOut for the two variables, I just gotta figure out the inverse of the equation that was provided

`c = (f - 32) 5/9
9/5 (c) = f - 32
(9/5 * c) + 32 = f`

I think? im gonna google it to double check

it was right

now im realizing that there are decisions to make

i tried to make `fIn & Out` and `cIn & Out` and use the `console.log()` to display the `fOut` and i think `console.log(fOut)`

###Damn
it didn't work :(

SyntaxError: Unexpected number '5'. Expected ';' after variable declaration.

so I think having `cOut & fOut` wasn't the greatest idea

so i should include the formulas in the parenthesis of `console.log()`?

###I forgot semicolons
###Still didn't work
SyntaxError: Unexpected number '5'. Expected ')' to end an argument list.

it looks like the sandbox is highlighting the number 5 in `5/9` on line 5 differently than the other numbers

i dont know why thats happening? and i dont totally remember what an argument list is

also that number isn't being highlighted differently in the Ftoc.js file sooooooo like idk

###ugh
so i tried deleting different parts of the phrase to see where the issues were

i fould out that the part of the `console.log` where i was saying a little like `oh this the conversion and you can read it like a person` was registering not as a string of text, and instead as a function

not good

idk why though? i thought quotoations would have made it clear that the computer just needs to print that phrase as is

so i took that out and it still wasnt working?

so i took out `console.log((f - 32) 5/9)` and it worked! but that's the opposite conversion of what i was supposed to do and also i don't see why line 4 works but not line 5

still getting "SyntaxError: Unexpected number '5'. Expected ')' to end an argument list."

###so it kind of works
like i said, i dont get why the conversion from celsius to fahrenheit works but not the other way around

i think the computer is expecting line 5 to be `console.log((f - 32))` so the `5/9` is the issue, but like,,, its just a 5? why is that confusing? do i need to put that fraction in parenthesis?

so adding parenthesis gives this output "TypeError: (f - 32)  is not a function. (In '(f - 32) (5/9)', '(f - 32) ' is 67)" which honestly makes no sense to me

### take 3 (i think 3)
why is it saying that `(f - 32)` isn't a function? cause it's telling me that its equal to 67

like thats the whole point? why don't you just do that??? and then keep doing the math???

^thats me talking to the computer

i'm also thinking now that since i only needed to use the `c` constant to get the conversion from c=>f, maybe i'm going about this wrong? like why else would the instructions say to create both variables?

###oh my fucking god im dumb (kidding im actually so smart and the computer is dumb)
so i assumed that having the two pieces of the equation `(f - 32)` and `(5/9)` just next to each other would imply multiplication because that's how math works

but thats not how **COMPUTERS** work, because why would they work like that

i just needed to add a `*` between the two parenthetical expressions

duh

#it works! yay!

###a little extra
i just wanted to title the two values so that it was a little more clear

i wanted to put the titles on the same line as the values but i couldn't figure out how to do that, like have the `console.log` do the math and also say the string of words at the same time

not sure, but im still just glad it works
