// setup
let questionInput;
let currentQuestion;
let response;
let responseColor = '#94ff3d';
let heading; 
let answerCorrect = 0;
let winMessage = '';
let answerWrong = 0;
let statements = [
    { 
        question: '"When it\'s over, I want to say: all my life I was a bride married to amazement."',
        answer: 'Mary Oliver',
        poem: 'When Death Comes'
    },
    { 
        question: '"One could do worse than be a swinger of birches."',
        answer: 'Robert Frost',
        poem: 'Birches'
    },
    { 
        question: '"I have eaten the plums that were in the icebox and which you were probably saving for breakfast [...]"',
        answer: 'William Carlos Williams',
        poem: 'This Is Just to Say'
    },
    { 
        question: '"some old-ass bitch was in pussy church when the Öde, now spelling itself with an umlaut, swung its urn at the back of her head, really clocking her"',
        answer: 'Patricia Lockwood',
        poem: 'Ode to a Grecian Urn'
    },
    { 
        question: '"Beauty is truth, truth beauty,—that is all ye know on earth, and all ye need to know."',
        answer: 'John Keats',
        poem: 'Ode to a Grecian Urn'
    }
];

function next() {
    if(statements.length < 1) {
        alert('100% — Very impressive!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1)
    return statements[randomIndex];
}

// this function checks the answer/input value against the true answer from the array. the filter is looping through the answers in the array to check if input is correct

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        // this is the correct condition
        response = 'Correct! This quote is from the poem "' + currentQuestion.poem + '." Try the next poem above!';
        answerCorrect = answerCorrect + 1;
        responseColor = '#94ff3d';
        answerReturn.removeClass('wrongAnswer');
        answerReturn.class('correctAnswer');

        // Once the number of correct answers is 5, display "You win. You know your poets!"

        if (answerCorrect === 5) {
            winMessage = "You win. You know your poets!";
        }

    } else {
        // this is the wrong condition
        response = 'Nope, but good guess. The correct answer was ' + currentQuestion.answer + ' from the poem "' + currentQuestion.poem + '." Try the next poem above.';
        answerWrong = answerWrong + 1;

        // Once the number of wrong answers is 5, display "Sorry, you lose. Read more poetry."

        if (answerWrong === 5) {
            winMessage = "Sorry, you lose. Read more poetry.";
        }
        responseColor = '#efff3d';
        answerReturn.removeClass('correctAnswer');
        answerReturn.class('wrongAnswer');
    }
    
    answerReturn.html(response);

    // trigger next questions
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
        quote.html(message)

    }
}

// this returns a random question from the array

currentQuestion = next();
let message = currentQuestion.question;


// p5.js formatting

function setup() {
    createCanvas(windowWidth, windowHeight);
    heading = createElement('h1', ['Poetry Quiz']);
    heading.position(100, 20);
    subHeading = createElement('h2', ['Which poet wrote this?']);
    subHeading.position(100, 75);
    quote = createElement('p');
    quote.position(100, 150);
    quote.html(message);
    answerReturn = createElement('p');
    answerReturn.position(100, 225);
    questionInput = createInput('');
    questionInput.size(300, 45);
    questionInput.position (100, 300);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(250, 30);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 350);
}

function draw() {
    background('#86258f');
    fill('white');
    textSize(20);
    fill(responseColor);
    fill('#94ff3d');
    text('Correct answers: ' + answerCorrect, 100, 400);
    fill('#efff3d');
    text('Wrong answers: ' + answerWrong, 300, 400);
    fill('#f8adff');
    textSize(40);
    text(winMessage, 100, 450);
}