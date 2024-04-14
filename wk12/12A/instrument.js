// DECLARE VARIABLES
let colors = []; // Array to hold colors
let currentColor = ''; // Index of the current color
let currentKey;
let reverbActive = false;
let delayActive = false;

// 1. Hook up an instrument to make sound

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight); // Adjust canvas size
  monoSynth = new p5.MonoSynth(); // instrument from p5js
  // randomly assign colors of cirlces
  for (let i = 0; i < 8; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
  // document.getElementById("text").position(50, 50)
}

function playSynth(note) {
  userStartAudio();
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;
  monoSynth.triggerAttack(note); //, velocity, time, dur);
}

// 2. Listen for key pressed and trigger instrument
// 3. Hook up effects: Reverb, Delay

function keyPressed() {
  //triggering sound + animation when pressing on keys
  if (key == 'a') {
    playSynth('C4');
    currentKey = 'a';
    currentColor = 0;
  } else if (key == 's') {
    playSynth('D4');
    currentKey = 's';
    currentColor = 1;
  } else if (key == 'd') {
    playSynth('E4');
    currentKey = 'd';
    currentColor = 2;
  } else if (key == 'f') {
    playSynth('F4');
    currentKey = 'f';
    currentColor = 3;
  } else if (key == 'g') {
    playSynth('G4');
    currentKey = 'g';
    currentColor = 4;
  } else if (key == 'h') {
    playSynth('A5');
    currentKey = 'h';
    currentColor = 5;
  } else if (key == 'j') {
    playSynth('B5');
    currentKey = 'j';
    currentColor = 6;
  } else if (key == 'k') {
    playSynth('C5');
    currentKey = 'k';
    currentColor = 7;
  } else if (key == 'u') {
    setReverb()
  } else if (key == 'i') {
    setDelay()
  }
}

// 4. Listen for key presed and trigger effects
// have the sound, color, and effect last as long as the key is held

function keyReleased() {
  currentColor = color(255, 255, 255); // Reset color when key is released
  if (key == 'a' || key == 's' || key == 'd' || key == 'f' || key == 'g' || key == 'h' || key == 'j' || key == 'k') {
    if (key == currentKey) {
      monoSynth.triggerRelease();
    }
  }
}

function setReverb() {
  if (reverbActive == false) {
    reverbActive = true;
    reverb = new p5.Reverb();
    // 3 second reverbTime, decayRate of 2%
    reverb.process(monoSynth, 10, 1);
    document.getElementById("reverb").innerHTML = "u = reverb | active";
  } else {
    reverbActive = false;
    reverb.disconnect();
    document.getElementById("reverb").innerHTML = "u = reverb | inactive";
  }
}

function setDelay() {
  if (delayActive == false) {
    delayActive = true;
    delay = new p5.Delay();
    // source, delayTime (in seconds), feedback, filter frequency
    delay.process(monoSynth, 0.3, .6, 5000);
    document.getElementById("delay").innerHTML = "i = delay | active";
  } else {
    delayActive = false;
    delay.disconnect();
    document.getElementById("delay").innerHTML = "i = delay | inactive";
  }
}

// 5. Create interesting visualization of instrument: A circle of cirlces

function draw() {
  background(79, 155, 209);
  let diameter = 400; // Diameter of the larger circle
  let numCircles = 8; // Number of smaller circles
  let circleDiameter = 125; // Diameter of each smaller circle
  let angleIncrement = TWO_PI / numCircles; // Angle increment between circles
  let radius = diameter / 2;   // Calculate the radius of the larger circle

  // Calculate the positions of the smaller circles around the circumference of the larger circle
  for (let i = 0; i < numCircles; i++) {
    let angle = i * angleIncrement;
    let x = width / 2 + radius * cos(angle);
    let y = height / 2.5 + radius * sin(angle);
    noStroke(); // Remove outline
    fill(i === currentColor ? colors[currentColor] : 255, 255, 255); // Change color if the circle corresponds to the pressed key
    ellipse(x, y, circleDiameter, circleDiameter);
  }
  // key text
  fill(255, 255, 255);
  textSize(28);
  text('Play notes', width/4, 20)
  textSize(20);
  text('Use keys a, s, d, f, g, h, j, k', width/4, 50)
  text('to play synth notes.', width/4, 80)
  textSize(28);
  text('Toggle effects', width*3/5 + 30, 20)
  textSize(20);
  if (reverbActive == true) {
    text('u = reverb | ACTIVE', width*3/5 + 30, 50)
  } else {
    text('u = reverb | INACTIVE', width*3/5 + 30, 50)
  }
  if (delayActive == true) {
    text('i = delay | ACTIVE', width*3/5 + 30, 80)
  } else {
    text('i = delay | INACTIVE', width*3/5 + 30, 80)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas size
}
