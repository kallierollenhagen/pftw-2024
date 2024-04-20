let coffeeCup; 

function preload() {
  coffeeCup = loadImage('coffee-mug.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  centerX = windowWidth * 0.5; 
  centerY = windowHeight * 0.5; 
  vectors = []; // Initialize an empty array to store vector data
  rowCount = 250; // Set the number of rows in the grid
  colCount = 250; // Set the number of columns in the grid
  colW = windowWidth / colCount; // Calculate the width of each column in the grid
  rowH = windowHeight / rowCount; // Calculate the height of each row in the grid
  createField(); // Call a function to create the vector field
  noStroke(); 
}

function draw() {
  background(82, 163, 106); // Set the background color
  
  // Draw coffee cup image
  image(coffeeCup, width /2 - 155, height/2, 400, 400);
  
  // Loop through each vector in the vectors array
  for (let i = 0; i < vectors.length; i++) {
    const vector = vectors[i]; // Get the current vector
    
    // Update the noise values to create the steam animation using sine and cosine
    vector.noiseX += sin(frameCount * 0.01) * 0.006;
    vector.noiseY += abs(cos(frameCount * 0.02) * 0.03);
    vector.noiseZ += 0.03;
    
    // Calculate the angle of the vector using Perlin noise
    vector.angle = noise(vector.noiseX, vector.noiseY, vector.noiseZ) * PI;
    
    // Calculate the size of the wave based on noise and position (from p5js example library)
    let r = vector.angle * 70 + (vector.y * 0.01) - (pow(abs(centerX - vector.x), 1.15 - sin((frameCount - vector.y) * 0.005) * 0.1) - pow(abs(windowHeight - vector.y), 0.2)) + sin((frameCount + vector.x + (vector.y) * 0.5) * 0.06) * 20;
    r *= 1 * sin(vector.angle);
  
    // Set the color of the vector to transparent white
    fill(255, 255, 255, 5);
    
    // Draw rectangles representing the wave
    if (r > 50) {
      let maxWidth = 60; // Maximum width of the base of the vector
      let rad = min(rowH * 2, maxWidth); // Calculate the width of the rectangle
      // Draw the rectangle at a position determined by noise and animation
      let x_position = vector.x + random(4) + cos((frameCount + vector.y) * 0.025) * 10 - sin((frameCount * 2 + vector.y * 0.5) * 0.035) * 10;
      rect(x_position, vector.y + random(4), rad, rad * 2);
    }
  }
}

function createField() {
  let coffeeMugTop = height / 2 - 750; // Calculate the top position of the coffee mug image
  
  // Loop through each column and row to create the vector field
  for (let col = 0; col < colCount; col += 1) {
    for (let row = 0; row < rowCount; row += 1) {
      const x = col * colW; // Calculate the x-coordinate of the current vector
      let y = row * rowH + coffeeMugTop; // Calculate the y-coordinate of the current vector
      
      // Prevent the wave vector from going above the coffee mug top
      y = max(y, coffeeMugTop);
      
      // Calculate Perlin noise values for animation
      const noiseX = col * 0.03;
      const noiseY = row * 0.01;
      const noiseZ = row * 0.011;
      
      // Create a vector object and push it into the vectors array
      vector = {
        x: x,
        y: y,
        noiseX: noiseX,
        noiseY: noiseY,
        noiseZ: noiseZ,
        v: noise(x * 0.004, y * 0.004),
        angle: noise(noiseX, noiseY, 0) * PI,
      }
      if (x > windowWidth * 0.3 && x < windowWidth * 0.7 && y > 0) {
        vectors.push(vector);
      }
    }
  }
}
