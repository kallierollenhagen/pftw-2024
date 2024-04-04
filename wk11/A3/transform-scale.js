let gif1Filename = "dancing.gif";
let gif2Filename = "beyonce.gif";
let gif1;
let gif2;
let a = 0.0;
let s = 0.0;

function preload() {
  gif1 = loadImage(gif1Filename);
  gif2 = loadImage(gif2Filename);
}

function setup() {
  createCanvas(1250, 600);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(113, 165, 103);

  //Slowly increase 'a' and then animate 's' with a smooth cyclical motion by finding the cosine of 'a'
  a = a + 0.03;
  s = cos(a) * 1.25;

  //Translate our rectangle from the origin to the middle of the canvas, then scale it with 's'

  translate(width / 2, height / 2);
  
  // Draw first image
  // push();
  scale(s);
  image(gif1, -gif1.width / 2, -gif1.height / 2);
  // pop();
  
  // Draw second image
  translate(200, 0);
  // push();
  scale(s);
  image(gif2, -gif2.width / 2, -gif2.height / 2);
  // pop();
}
