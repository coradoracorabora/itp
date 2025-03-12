#OKAY HERE WE GO
##step 1, do the same thing but 3 times
###the first thing that needs to happen 3 times, 3 sounds all loaded
I'm starting to document this a little bit late

like I've tried a few things out but I'll walk through what those are

changing `let myFirstSound;` to 3 separate variables which are
`let soundPing;
let soundWine;
let soundBark;`
for a ping sound, wineglass, and a bark, respectively

then changing the `function preload()` to contain multiple loadSound functions, to load all three sounds, so it looks like

`function preload() {
  soundFormats('wav', 'mp3');  
  soundPing = loadSound('Ping.wav', sound1Loaded);
  soundWine = loadSound('Wineglass.wav', sound2Loaded);
  soundBark = loadSound('Bark.wav', sound3Loaded)
}` 
###now some confirmation? so we can check as things are happening
changing the `function myFirstSoundLoaded` i dont remember if that's actually what it's called but whatevs i think you get it

i duplicated the function twice and made them look like this

`function sound2Loaded() {
  console.log("Sound 2 successfully loaded!");
}`

this worked - console log did the thing
`#thumbsup #yay`
###then also change the instructions that read out on the preview screen
i wanted to use the letters 'q' 'w' and 'e' to control this, so I specified that in the `function setup()` by making it look like this: (and I had to make the canvas larger so the text wouldn't get cut off)

`function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section, click on it \nTHEN \nPress 'q' to play the 'ping' sound \nPress 'w' to play the 'wineglass' sound \nPress 'e' to play the 'bark' sound", width / 2, height / 2);
}`
###we said which buttons to use and now we gotta make them work!
changing the `function keyPressed` to add an `else if` and `else` so the other two keys are accessible, which will make it look like:

`function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === q) {
    playSound1();
  } else if (key.toLowerCase() === w) {
    playSound2();
  } else (key.toLowerCase() === e) {
    playSound3();
  }
}`
###What have we not done yet? telling it to play the sound!!!
