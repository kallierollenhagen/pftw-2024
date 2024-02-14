// timers: 2 kinds

// 1: timeout = 1 time timers
function alertUser(name) {
    window.alert("surprise" + name + " the timer is up");
}
// setTimeout takes two arguments: the function, then the time
    // window.setTimeout(alertUser, 5000, "kallie");

    // window.setTimeout(function () {
        //  console.log("this was called in the timeout")
        // }, 1000);

// 2: interval. Continues to happen over and over. 

const myInterval = window.setInterval(function () {
    console.log(new Date())
}, 2000)

// clearInterval

const myButton = document.getElementById("cancelInterval");
myButton.addEventListener("click", () => {
    console.log("clearing interval");
    window.clearInterval(myInterval);
})

// OOP - Object Oriented Programming (vs. Functional Programming)

         //class Car {
        //     // constructor is an initializing function.
        //     // "this." inside of a class refers to the properties of this class
        //     constructor(color, tires) {
        //         console.log("I've been constructed")
        //         this.color = color;
        //         this.tires = tires;
        //     }
        // }
        // const myCar = new Car("red", "3");
        // const myOtherCar = new Car ("blue", "6");
        // console.log(myCar, myOtherCar)

class Circle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 50;
    }
    show () {
        fill(this.color);
        rect(this.x, this.y, this.width, this.height)
    }

let startX = 150;
let startY = 150;
let circArr = [];
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 4; j++) {
        circArr.push(new Circle(startX, startY, "blue"));
        startX += 150;
    }
    startX = 150;
    startY += 150
}
const arrayOfCircles = [
    new Circle(100, 100, "purple");
    new Circle(200, 100, "teal");
    new Circle(300, 100, "brown");
]

function setup() {
    createCanvas(800, 600);
    background(#999999);
}
function draw() {
    // use circle class
    for(let k = 0; k < circ.Arrlength; k++) {
        circArr[k].show(;)
    }
}
function mousePressed() {
    for(let l = 0; l < circArr.length, l++) {

    }
}

// the quiz

    // arrays: use, create, add to move -- splice is your friend to remove objects
    // arrays: used to store objects
    // an array of objects
    // objects: create, add properties, delete properties
    // difference between = (assignment operator to define a variable) and === (to check conditions)
    // how conditions work
    // what a function is, how to create
    // open note, but can only take it once
    // yeah it's five, three multiple choice and 2 with small amounts of code writing
