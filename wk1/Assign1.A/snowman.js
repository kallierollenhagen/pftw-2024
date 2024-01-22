let grid = undefined;
//let stroke1 = prompt("Enter a basic color name in lower case", "gray");
//let stroke2 = prompt("Enter another basic color lowercase", "purple");

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
    fill('white');
    quad(0, 770, 1000, 650, 1000, 800, 0, 800); 

//SNOWMAN large
    // snowman legs
    fill(250, 249, 246);
    strokeWeight(10)
    stroke(55, 204, 0); // replace with stroke(stroke1);
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
    stroke(20, 20, 60);  // replace with  stroke(stroke2);
    strokeWeight(20);
    line(550, 120, 750, 120);
    // hat body
    rect(575, 10, 145, 90);
    // eyes
    stroke(0);
    strokeWeight(40);
    point(610, 185);
    point(690, 185);
    // mouth
    noFill();
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
    stroke(55, 204, 0); // replace with stroke(stroke1);
    // body - bottom
    ellipse(250, 650, 250, 265);
    // body - top
    ellipse(250, 475, 140, 175);
    // eyes
    stroke(0);
    strokeWeight(35);
    point(220, 465);
    point(280, 465);
    // mouth
    strokeWeight(30);
    point(250, 515);
    //buttons
    strokeWeight(30);
    point(250, 630);
    point(250, 670);
}