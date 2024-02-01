function setup() {
    createCanvas(200, 200);
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('#1235BF');
    rect(0, 0, 200, 200);
    stroke('#FDEF30');
    strokeWeight(7);
    line(50, 50, 150, 150);
    line(150, 50, 50, 150);
    stroke('#FFA096');
    line(100, 50, 100, 150);
    line(50, 100, 150, 100);
    noStroke();
    fill('#EBDB00');
    circle(30, 30, 30);
    circle(170, 30, 30);
    circle(30, 170, 30);
    circle(170, 170, 30);
    fill('#E42E2E');
    circle(100, 100, 60);
}

function draw() {
    createTile();
}