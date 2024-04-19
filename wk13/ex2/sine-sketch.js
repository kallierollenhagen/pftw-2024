let diameter;
let angle = 0;
let shapeList = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
    //max hue, max 
  colorMode(HSB, 360, 100, 100, 100);
  diameter = height - 400; // Adjusting the diameter for smaller shapes
  noStroke();
  colorList = [
    color(102, 198, 227),
    color(245, 245, 69),
    color(217, 171, 235),
    color(245, 182, 24)
  ];
  shapeOptions = [
    'ellipse',
    'triangle',
    'rect'
  ]
  for (let i = 0; i < 20; i++) {
    shapeList.push(new Shape())
  }
}

function draw() {
  // background(83, 194, 105);
  let startNum = 70;
  let endNum = 110;
  let range = endNum - startNum;
  background(sin(radians(frameCount)) * range/2 + range/2, 100, 100);

  shapeList.forEach((shape) => shape.draw(angle));
  angle += 0.03;
}

class Shape {
  constructor() {
    this.type = random(shapeOptions);
    this.x = width * random();
    this.y = height * random();
    this.diameter_offset = random(0.5, 2.0);
    this.phase_offset = random()
    this.color = random(colorList);
  }

  draw(angle) {
    // Calculate diameter
    this.diameter = (sin(angle + PI * this.phase_offset) * diameter * this.diameter_offset) / 2;
    // Set color
    fill(this.color);
    // Draw shape
    if (this.type === 'ellipse') {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    } else if (this.type === 'triangle') {
      triangle(this.x, this.y, this.x + this.diameter, this.y + this.diameter, this.x - this.diameter, this.y + this.diameter);
    } else {
      rect(this.x, this.y, this.diameter, this.diameter);
    }
  }
}