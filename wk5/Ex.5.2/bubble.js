// defining an array to put bubbles in
let bubbles = [];

// for loop to create 12 bubbles
function setup() {
    createCanvas(600, 400);
    for (let b = 0; b < 20; b++) {
        // create a new bubble and add it into the array
        bubbles.push(new Bubble());
    }
    // slow movement down a bit
    frameRate(20);
}

// for loop to move the bubbles
function draw() {
    background(0);
    bubbles.forEach(bubble => {
        bubble.move();
        bubble.show();
    });
}

// write the class, aka, the "cookie cutter"
class Bubble {
    constructor() {
        this.x = 200
        this.y = 150;
    }
    // if we want to be able to move the bubble, need to put what "move" means in the class
    move() {
        this.x = this.x + random(-25, 25);
        this.y = this.y + random(-25, 25);
    }

    show() {
        stroke(random(0, 255), random(0, 255), random(0, 255));
        strokeWeight(random(2, 8));
        noFill();
        ellipse(this.x, this.y, random(25, 125), random(25, 125));
    }
}