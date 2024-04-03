// adapted from Tim Rodenbroeker Kinetic typography

let bg = "kallie1";
let bg2 = "kallie2";

// Load the images
function preload() {
  bg = loadImage('kr-square.jpg'); 
  bg2 = loadImage('kr2-square.png');
}

let font;
let pg;

let tX,tY,sp,dspx,dspy,fct, fnts;
let input;

// function preload(){
//   font = loadFont("data/RobotoMono-Regular.ttf");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSliders();
  pg = createGraphics(windowWidth, windowHeight);
  input = createInput("Kallie Rollenhagen");
  input.size(200, 75);
  input.position(320, height + 40);
  bg = loadImage('kr-square.jpg'); 
}

function draw() {
  background(bg);

// PGraphics
  pg.background(bg);
  pg.fill(252, 3, 232);

// pg.textFont(font);
  pg.textSize(fnts.value());
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.text(input.value(), 50,100);
  pg.pop();


  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
  for (let x = 0; x < tilesX; x++) {

  // WARP
      let waveX = int(sin(frameCount * sp.value() + ( x * y ) * dspx.value()) * fct.value());
      let waveY = int(sin(frameCount * sp.value() + ( x * y ) * dspy.value()) * fct.value());

      if (dspx.value() === 0){
          waveX = 0;
      }

      if (dspy.value() === 0){
          waveY = 0;
      }
      
  // image(pg,0,0)
      
      // SOURCE
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;
      let sw = tileW;
      let sh = tileH;

      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function createSliders(){
  tX = createSlider(1, 80, 16, 1);
  tX.position(20, height + 40);
  createP('Tiles X').position(20, height);

  tY = createSlider(1, 80, 16, 1);
  tY.position(20, height + 100);
  createP('Tiles Y').position(20, height+60);

  sp = createSlider(0, 1, 0.005, 0.01);
  sp.position(20, height + 160);
  createP('Speed').position(20, height+120);

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(180, height + 40);
  createP('Displacement X').position(180, height);

  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(180, height + 100);
  createP('Displacement Y').position(180, height+60);

  fct = createSlider(0, 300, 100, 1);
  fct.position(180, height + 160);
  createP('Offset').position(180, height+120);
  
  fnts = createSlider(10, 300, 150);
  fnts.position(340, height + 160);
  createP('Fontsize').position(340, height+120);
}
// stop the loop!
function mousePressed() {
  noLoop();
}
