let img = "anthro";
let w, h;

// Load the images
function preload() {
  img = loadImage('anthro.jpeg'); 
}

function setup() {
  createCanvas(img.width, img.height);
  w = img.width / 2;
  h = img.height / 2;
}

function draw() {
  background(220);

  // original
  image(img, 0, 0, w, h);

  // flip over vertical axis
  push();
  // x, y
  translate(width, 0);
  // -1 * x, 1 * y
  scale(-1, 1);
  //draws reversed from upper right corner
  image(img, 0, 0, w, h);
  pop();

  // flip over horizontal axis
  push();
  translate(0, height);
  scale(1, -1);
  //draws reversed from bottom left corner
  image(img, 0, 0, w, h);
  pop();

  // flip over horizontal and vertical axes
  push();
  translate(width, height);
  scale(-1, -1);
  image(img, 0, 0, w, h);
  pop();
}

