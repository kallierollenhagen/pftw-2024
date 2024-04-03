let numBalls = 25;
let spring = 0.05;
let gravity = 0.1;
let friction = -0.9;
let balls = [];
let neonSquare;

function setup() {
  createCanvas(800, 400);
  
  // Create balls
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(20, 100),
      i,
      balls
    );
  }

  // Create neon square
  neonSquare = new NeonSquare(400, 200, 50);
  
  noStroke();
}

function draw() {
  background(207, 0, 148);

  // Display balls
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });

  // Display neon square
  neonSquare.display();
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      if (distance < minDist) {
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    // Adjust fill to shades of blue
    fill(20, 150, random(120, 250));
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class NeonSquare {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    fill(255, 255, 0); // Neon yellow color
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}
function mousePressed() {
    noLoop();
}
