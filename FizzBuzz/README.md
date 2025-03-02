#FizzBuzz!!!
##pseudocode
I know I'll need to have some kind of loop with numbers counting upwards by one

and i think working an if two `if else` statements 

and have one of them be an `else if` so that I can use a few different conditions

i wonder if i can do this all in one function? is that the easiest way to do this?

what was that one function that had a `%` the divisible one? i feel like its necessary (found it, it was line 71)
##writing down the lines  in the codealong.js that i think will be important
51 - while-else loop

61 - for loop

78 - nested for-loop

103 - recursion with a stop condition

28 - multiple conditions

71 - divisible by

44 - while loop (counting)

i think thats everything?

also remember the `$`
##trying it for real
###step 1: counting
starting with recursion with a stop condition seems important, i need 1-100

mmmmmmmmm i tried to use line 103 and edit that function but i think i should just use the version on line 44 cause 103 was a little overcomplicated

okay the version with line 44 worked better and it counts from 1 to 100 now

yay!

i guess im not using anything that involves recursion yet, just a while loop, maybe i'll need a recursive function soon?
###step 2: how the fuck do i have it check for divisibility
i hope divisibility is a word

do i need to be checking if a number is divisible by 3 or 5 before the `count++`? or can i just do it after, later in the while loop or in a different function altogether?

I think in the middle of the function is necessary, time for nesting!

can you nest a for loop inside of a while loop? i fucking hope so

wait no i just need to use line 51 (while-else loop) which answers some of those questions

im just gonna pick a number in the middle to have it replace so i can make sure i'm doint the fundamental part of this right, i'll figure out dividing later

also I'll have it pick a range of numbers? cause i think i can get it to do that pretty easily?

just realized that i can't tell the console to log 2 different outputs for the same input, 5 can't be 5 and also something else
###hit a roadblock
line 71 only displays numbers that are divisible by 5 and 7, and the while else loop onn line 51 will display two different things while counting upwards, but is there a way for me to replace some of the inputs?

like i thought i could just use the 51 thing and have it count and then adding in a function like on 71 would cause it to replace the numbers that are referenced in the second function

but like, do i need to have the counter only display some numbers, and figure out how to slot the fizz and buzz in between? or is there a way to 

nvm i think i get it more now, using a console.log inside of the while loop is good to make sure shit is working, but i think i'll need to take it out before i make more progress?

i wonder if there is a way to say "between these two numbers" like "say something different between 5 and 10 and then keep counting"

gonna work on that with an if-else loop BEFORE the `console.log()` in the while loop

i retract my statement on line 64, i just need to be using the `console.log(`$(count)`)` as the `else` in the if-else statment i think

woo! i replaced the first 9 integers! not sure how to say "replace things in this range" yet but ill think about that for a second and probably just move on if i can't totally get it

okay i got it to only change numbers between 5 and 15 but i used the wrong parenthesis, quick fix then moving on
