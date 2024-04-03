let img1 = "kallie1";
let img2 = "kallie2";

// Load the images
function preload() {
  img1 = loadImage('kr-square.jpg'); 
  img2 = loadImage('kr2-square.png');
}

function setup() {
  createCanvas(600, 600); // Create a canvas to draw on
  frameRate(7);
  rectMode(CENTER);
}

function draw() {
  background(88, 159, 214);
  let gridSize = 7; // Number of rows and columns in the grid
  let gridSpacing = 100; // Spacing between images
  let imageSize = 80; // Size of each image
  let marginX = (width - gridSize * gridSpacing) / 2; // Calculate horizontal margin
  let marginY = (height - gridSize * gridSpacing) / 2; // Calculate vertical margin

  let step = frameCount % 20;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);
  translate(10, 10); // Translate to the center of the canvas
  // equivalent to shearX(angle);
  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);

  // Loop through rows
  for (let i = 0; i < gridSize; i++) {
    // Define a boolean variable for the row to control image alternation
    let useImg1Row = i % 2 === 0;
    // Loop through columns
    for (let j = 0; j < gridSize; j++) {
      // Define a boolean variable for the column to control image alternation
      let useImg1Column = j % 2 === 0;
      // Determine which image to use based on the boolean variables
      let img = useImg1Row ? (useImg1Column ? img1 : img2) : (useImg1Column ? img2 : img1);
      // Calculate the position for each image
      let x = marginX + j * gridSpacing + gridSpacing / 2;
      let y = marginY + i * gridSpacing + gridSpacing / 2;
      // Draw the image at the calculated position
      image(img, x, y, imageSize, imageSize);
    }
  }
}

// stop the loop!
function mousePressed() {
  noLoop();
}
