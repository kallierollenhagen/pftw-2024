//setup
let startingX = 200;
let startingY = 75;
let myRectangle = [];
let startingId = 0;

function setup () {
    createCanvas(windowWidth, windowHeight);
    background('#02518a');
    
    // create a 4x4 grid via a loop function, where k sets rows and i sets columns
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, 250, 175);
            myRectangle.push({ x: startingX, y: startingY, id: startingId });
            startingX += 275;
            startingId++;
        }
        startingY += 200
        startingX = 200
    }
    console.log(myRectangle);
}

function mousePressed() {
    for (let j = 0; j < myRectangle.length; j++) {
    let distance = dist(mouseX, mouseY, myRectangle[j].x, myRectangle[j].y);
        if (distance < startingX + 125) {
            console.log('rectangle has been clicked', myRectangle[j].id);
        }
    }
}