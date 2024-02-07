//setup
let rectX = 0;
const rectHeight = 100;
let rectY;
const rectWidth = 100;
let clickCount = 0; // helps us figure out how many times the user has clicked
let speed;
let boxColor = '#b8f536';

function setup () {
    createCanvas(500, 500);
    rectY = random(height- rectHeight); // randomizes the height position of the rectange
    speed = random(3, 5); // with 2 arguments, one is the min, the other is the max
}

// drawing the rectangle and chaging the x coordinate over time
function draw (){
    background('#2e77c9');
    drawShape();
    rectX += speed;
    //stop the loop once the rectangle has left the canvas
    if(rectX > width) {
        noLoop();
        textSize(28)
        fill('#b8f536'); // green
        text('Your click score was ' + clickCount, 110, 250);
    }
}

// make the function something we can detect
function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++; // increment the clickCount to make it accurate
        console.log('hit', clickCount);
        boxColor = '#fa43db';  // change the color of rectangle if hit/mouse pressed
    }

}

function mouseReleased() {
    boxColor = '#b8f536';
}


// Function to draw our object
function drawShape () {

    fill(boxColor);
    noStroke();
    rect(rectX, rectY, rectWidth, rectHeight);
}