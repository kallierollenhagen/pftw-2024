const DOWN = 'down';
const UP = 'up';
let startingX = 200;
let startingY = 75;
let startingId = 0;
let cards = []; // card array
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

// add in images
let cardfaceArray = [];
let cardback; // create new variable for cardBack
function preload() {
    cardback = loadImage('images/cover.png');
    cardfaceArray = [
        loadImage('images/kmimage1.png'),
        loadImage('images/kmimage2.png'),
        loadImage('images/kmimage3.png'),
        loadImage('images/kmimage4.png'),
        loadImage('images/kmimage5.png'),
        loadImage('images/kmimage6.png'),
        loadImage('images/kmimage7.png'),
        loadImage('images/kmimage8.png'),
    ]
}

function setup () {
    createCanvas(windowWidth, windowHeight);

    // create a loop to randomize cardfaces
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        console.log(randomIdx);
        const face = cardfaceArray[randomIdx];
        //need to push Faces twice so we have pairs of images showing up
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again -- error could be here
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);

    // create a 4x4 grid via a loop-within-a-loop function, where j sets rows and i sets columns
    // CHECK: faceImage OR cardFaceImg??
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop(); // pop removes the last item in the array
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 275; // increment where cards start on x axis
        }
        startingY += 200
        startingX = 200
    }
}

// set win message, number of matches, number of attempts, etc.
function draw () {
    background('#02518a');

    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    //draw scoreboard
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('#f4efdc');
    textSize(24);
    text('Karel Martens Memory Game', 200, 50);
    text('Attempts: ' + gameState.attempts, 850, 50);
    text('Matches: ' + gameState.numMatched + '/8', 1120, 50);
    
    // winning message that appears when they get 8 pairs
    if (gameState.numMatched === gameState.totalPairs) {
        fill('#fa0e73');
        stroke('#f4efdc');
        strokeWeight(7);
        textSize(230);
        text('HOORAY!', 210, 525);
        noLoop();
    }
}

// make card "flip" when pressed, and make sure that we can only have 2 unmatched cards up at a time
function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then trigger the flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]); //
        }
    }
    // check to see if the cards match
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match! Score them
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        }
        else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 2000)
        }
    }
}

//setup you class, the properties of the card, including location
class Card {
            //self-referencing variable, sets the beginning of card
    constructor (x, y, cardFaceImg) { 
        // property -- kind of like variables, but specific to your class
        this.x = x; 
        this.y = y;
        this.width = 250;
        this.height = 175;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        // to figure out whether to show the card or now
        this.isMatch = false;
        // another way to show the card
        this.show();
    }

    show () { 
        // method to create our card -- like functions, but specifc to our class. checking to see if card has been matched
        if (this.face === UP || this.isMatch) {
            image(this.cardFaceImg, this.x, this.y, this.width, this.height); 
        }
        else {
            image(cardback, this.x, this.y, this.width, this.height); 
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip(); // this will trigger toggle of face up/face down
            return true;
        }
        else {
            return false;
        }
    }

    flip () { // checks to see what the state of the card state position is -- up or down? -- and calls show
        if (this.face === DOWN) {
            this.face = UP;
        }
        else {
            this.face = DOWN;
        }
        this.show();
        }
    }

    // shuffle cards
        function shuffleArray (array) {
            let counter = array.length;
            while (counter > 0) {
                // pick random index
                const idx = Math.floor(Math.random() * counter);
                //decrease counter by 1
                counter--;
                // swap the last element with it
                const temp = array[counter];
                array[counter] = array[idx];
                array[idx] = temp;
            }
            return array;
        }