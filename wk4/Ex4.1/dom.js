// select empty div and assign to a variable

const myEmptyDiv = document.querySelector('#myEmptyDiv');

// take the variable and put an H1 inside of it; 2-step process
// First step: Create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Timberwolves are winning!';
heading.style.cursor = 'pointer';

// Then: Attach an event listener to H1
heading.addEventListener('click', handleHeadingClick);

// Second step: Attach the new element to the DOM by ammending the child
myEmptyDiv.appendChild(heading);

function handleHeadingClick () {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'lightblue';
}