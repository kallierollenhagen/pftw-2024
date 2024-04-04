let ojuju;

function preload() {
  ojuju = loadFont('Ojuju-VariableFont_wght.ttf');
}

let hinges = []; // Array to store positions, angles, lengths, and colors for each hinge
let strokeWeightValue = 40; // Uniform stroke weight
let greetings = ["Hi", "Howdy", "Hello", "Welcome", "Glad you're here", "Wow, hey!", "Come on in!", "Hey!"]; // Array of greeting messages
let currentGreeting; // Variable to store the current greeting
// let angle1 = 0.0;
// let angle2 = 0.0;

function setup() {
  createCanvas(1000, 500);
  generateHinges();
  document.getElementById('refreshButton').addEventListener('click', () => {
    generateHinges();
    drawHinges();
  });
}

function generateHinges() {
  hinges = [];
  for (let i = 0; i < 9; i++) { // Adjust the number of hinges you want
    let posX = random(width);
    let posY = random(height);
    let angle1 = random(TWO_PI);
    let angle2 = random(PI);
    let length1 = random(75, 350); // Random length between 50 and 150
    let length2 = random(150, 150); // Random length between 50 and 150
    let color1 = color(random(100, 150), random(200, 250), random(50, 100)); // Random color
    let color2 = color(random(240, 255), random(150, 200), random(255)); // Random color
    currentGreeting = random(greetings); // Randomly select a greeting
    hinges.push({x: posX, y: posY, angle1: angle1, angle2: angle2, length1: length1, length2: length2, color1: color1, color2: color2});
  }
}

// function drawHinges() {
function draw() {
  background(64, 61, 61); // Set canvas color
  strokeWeight(strokeWeightValue); // Set uniform stroke weight
  
  // Draw each hinge
  let angle1 = (mouseX / float(width) - 0.5) * -TWO_PI;
  let angle2 = (mouseY / float(height) - 0.5) * PI;
  for (let i = 0; i < hinges.length; i++) {
    let hinge = hinges[i];
    push();
    translate(hinge.x, hinge.y);
    stroke(hinge.color1); // Set color for first segment
    segment(0, 0, hinge.length1, angle1);
    stroke(hinge.color2); // Set color for second segment
    segment(hinge.length1, 0, hinge.length2, angle2);
    pop();
  }
  
  // Display greeting message
  textSize(60);
  textFont(ojuju);
  textAlign(CENTER, CENTER);
  fill(255, 253, 230);
  text(currentGreeting, width / 2, height / 2);
}

// Custom function for drawing segments
function segment(x, y, len, a) {
  translate(x, y);
  rotate(a);
  line(0, 0, len, 0);
}
