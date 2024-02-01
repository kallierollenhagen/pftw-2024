function setup() {
    createCanvas(600, 600);
}

// single tile pattern

function createTile(originX, originY, bkgrndColor, circlesColor, innerColor) {
    translate(originX, originY);
    fill(bkgrndColor);
    stroke('#E4F8FF');
    strokeWeight(4);
    rect(0, 0, 200, 200);
    // diagonal lines
    stroke('#FDEF30');
    strokeWeight(7);
    line(50, 50, 150, 150);
    line(150, 50, 50, 150);

    //crossed lines
    stroke('#FFA096');
    line(100, 50, 100, 150);
    line(50, 100, 150, 100);

    // small outer circles
    noStroke();
    fill(circlesColor);
    circle(30, 30, 30);
    circle(170, 30, 30);
    circle(30, 170, 30);
    circle(170, 170, 30);

    //inner circle
    fill(innerColor);
    circle(100, 100, 60);
}

function draw() {
    createTile(0, 0, '#1235BF', '#EBDB00','#E42E2E');
    createTile(0, 200, '#EBDB00', '#E42E2E', '#1235BF');
    createTile(0, 200, '#1235BF', '#EBDB00', '#E42E2E');
    createTile(200, -400, '#EBDB00', '#E42E2E', '#1235BF');
    createTile(0, 200,  '#E42E2E', '#1235BF', '#EBDB00');
    createTile(0, 200, '#EBDB00', '#E42E2E', '#1235BF');
    createTile(200, -400, '#1235BF', '#EBDB00', '#E42E2E');
    createTile(0, 200, '#EBDB00', '#E42E2E', '#1235BF');
    createTile(0, 200, '#1235BF', '#EBDB00', '#E42E2E');
}

//key
// '#E42E2E' - red
// '#1235BF' - blue
// '#EBDB00' - yellow