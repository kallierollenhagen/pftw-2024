// An array is a variable, but it has multiple slots
// myArr.push() // adds to the end
// myArr.pop() // pops off, removes last item of array
// myArr.shift() // removes first item
// myArr.unshift() // adds item to the beginning
// myArr.splice()  // replaces items, mutates
// console.log(myArr.length); // tells you how long array is

let userMovie = prompt("What is your favorite movie?");

const myArr = ["Florida Project ", "Tree of Life ", "Call Me By Your Name ", "The Lost Daughter ", "The Lobster "];
myArr.push(userMovie);
console.log(myArr);
alert("The best movies are " + myArr.toString());