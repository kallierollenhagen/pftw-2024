// Timers exercise
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 8;
const distance = 2;

function setup () {
    createCanvas(500, 500);
    background('#76a7cf');
        // text
        fill('white');
        textSize(18);
        text('Use # keys 1 to 9 to create a pattern', 150, 450);
}

// set up a function to draw a square
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 75, 75);
}

// add an event via keyTyped; use keys to change color of box by setting up a map
function keyTyped() {0
    // convert key pressed into a number
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)) {
        return;
    }
    // low input, high input, low output, high output
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

// give a time cushion at the beginning with set.Timeout...like setInterval (runs until we tell to stop), but can only occur once. 

window.setTimeout(() => {
    // set up a timeout, set up as a global variable; first argument is a function, csecond argument (speed) is the interval
    // function will execute every "speed" interval until we have it reset
    drawTimer = window.setInterval(() => {
        if(blockY - 75 <= height) {
            drawBlock(blockX, blockY, blockColor);
            // move on y axis via distance
            blockY += distance;
        }
        else {
            blockY = 0;
            blockX += 75;
        }
        // clear your interval / have it stop running after it gets all the way to the end
        if(blockY - 75 > height && blockX - 75 > width) {
            window.clearInterval(drawTimer);
            alert('Your tapestry is complete');
        }
    }, speed);
}, 1000);