  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      ellipse(mouseX, mouseY, 80, 80);
    }
  }