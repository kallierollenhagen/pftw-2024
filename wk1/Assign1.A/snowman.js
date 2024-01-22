let grid = undefined;
let stroke1 = prompt("Enter a basic color name in lower case", "gray");
let stroke2 = prompt("Enter another basic color lowercase", "purple");
let hatfill = prompt("Enter a third basic color, lowercase", "pink");

// SNOW = random dot generator by hafiyyandi

var dAmt = 400;

function setup() {
  createCanvas(1000, 800);
  background(0, 158, 255);
  noStroke();
  
  fill('white');
  for (var i = 0; i < dAmt; i++){
    var al = random (30, 255);
    var r_col = random (150,255);
    var g_col = random (150, 255);
  	var y = random(0, height);
    var x = random(0, width);
    var r = random(2, 10);
    fill(249, 246, 238);
    ellipse(x, y, r, r); 
}

//White hill
    fill(255, 255, 250);
    quad(0, 770, 1000, 650, 1000, 800, 0, 800); 

//SNOWMAN large
    // snowman legs
    fill(250, 249, 246);
    strokeWeight(10)
    stroke(stroke1);
    // body - bottom
    ellipse(650, 600, 350, 350);
    // body - middle
    ellipse(650, 400, 250, 250);
    // head
    ellipse(650, 200, 200);
    // left arm
    stroke(51, 25, 0);
    strokeWeight(15);
    line(400, 350, 525, 400);
    //right arm
    line(775, 400, 900, 350)
    // hat brim
    stroke(stroke2);
    strokeWeight(20);
    line(550, 120, 750, 120);
    // hat body
    fill(hatfill);
    rect(575, 10, 145, 90);
    // eyes - black
    stroke(0);
    strokeWeight(40);
    point(610, 185);
    point(690, 185);
    //eyes - whites
    stroke(255);
    strokeWeight(15);
    point(615, 188);
    point(684, 188);
    //nose
    stroke('orange');
    fill('orange');
    strokeWeight(5);
    triangle(645, 180, 655, 180, 650, 220);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(650, 210, 100, 100, 120, 103);
    //buttons
    strokeWeight(30);
    point(650, 360);
    point(650, 400);
    point(650, 440);


//SNOWMAN small

    fill(250, 249, 246);
    strokeWeight(10)
    stroke(stroke1);
    // body - bottom
    ellipse(250, 650, 250, 265);
    // body - top
    ellipse(250, 475, 140, 175);
    // eyes - blacks
    stroke(0);
    strokeWeight(35);
    point(220, 465);
    point(280, 465);
    //eyes - whites
    stroke(255);
    strokeWeight(15);
    point(232, 465);
    point(292, 465);
    // mouth
    stroke(0);
    strokeWeight(30);
    point(250, 515);
    //nose
    stroke('orange');
    fill('orange');
    strokeWeight(5);
    triangle(240, 475, 290, 490, 240, 490);
    //buttons
    stroke(0);
    strokeWeight(30);
    point(250, 630);
    point(250, 670);
}