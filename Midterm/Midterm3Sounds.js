// pressing keys to play sounds

let soundPing;
let soundWine;
let soundBark;

function preload() {
  soundFormats('wav', 'mp3');  
  soundPing = loadSound('Ping.wav', sound1Loaded);
  soundWine = loadSound('Wineglass.wav', sound2Loaded);
  soundBark = loadSound('Bark.wav', sound3Loaded)
}

function setup() {
  createCanvas(600, 400);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section, click on it \nTHEN \nPress 'q' to play the 'ping' sound \nPress 'w' to play the 'wineglass' sound \nPress 'e' to play the 'bark' sound", width / 2, height / 2);
}

function sound1Loaded() {
  console.log("Sound 1 successfully loaded!");
}

function sound2Loaded() {
  console.log("Sound 2 successfully loaded!");
}

function sound3Loaded() {
  console.log("Sound 3 successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === "q") {
    playSound1();
  } else if (key.toLowerCase() === "w") {
    playSound2();
  } else if (key.toLowerCase() === "e") {
    playSound3();
  }
}

function playSound1() {
  if (soundPing.isLoaded()) {
    soundPing.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playSound2() {
  if (soundWine.isLoaded()) {
    soundWine.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playSound3() {
  if (soundBark.isLoaded()) {
    soundBark.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}