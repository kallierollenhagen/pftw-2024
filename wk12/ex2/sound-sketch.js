// DECLARE VARIABLES
let funk;
let amp;
let vol;
let button;

//PRELOAD SONG
function preload(){
  funk = loadSound("funk.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Adjust canvas size
  button = createButton("Start Funk");
  button.position(windowWidth/2, 40);
  button.center('horizontal')
  button.mousePressed(togglePlaying);
  amp = new p5.Amplitude();
}

function draw() {
  background(79, 155, 209);
  vol = amp.getLevel();
  noStroke(); // Remove outline
  for(let i = 150; i < width - 150; i+= 100){ // Adjust loop starting and ending points and increment
    for(let j = 150; j < height - 150; j+= 100){ // Adjust loop starting and ending points and increment
      let greenValue = map(i, 150, width - 150, 0, 255); // Map green value based on circle position
      fill(vol*750, greenValue, vol*750); // Set fill color with varying green
      ellipse(i+random(vol*50),j+random(vol*50),80); // Increase circle size
    }
  }
}

function togglePlaying() {
  if (!funk.isPlaying()) {
      funk.play();
      funk.setVolume(0.5);
      button.html("Stop Funk");
  } else {
      funk.stop();
      button.html("Start Funk");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size
}
