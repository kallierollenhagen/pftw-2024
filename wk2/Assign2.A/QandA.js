// array of Q&A objects
const questionAnswer = [
    { 
        question: "What is the easternmost town in North America? (With Greenland excluded.)",
        answer: 'Cape Spear, Newfoundland, Canada' 
    },
    { 
        question: "Tomayto or tomahto?",
        answer: 'J/k...we have better questions than that, and can hold more multiple truths. Refresh for another!'
    },
    { 
        question: "What type of philosopher was Seneca?",
        answer: 'Stoic'
    },
    { 
        question: "What is the top giving philanthropic foundation in Minnesota?",
        answer: 'Wells Fargo Foundation (by a surprising amount).'
    }
]

console.log(questionAnswer);

// Assign a value to a randomly selected question

const randomQuestion = Math.round(Math.random() * (questionAnswer.length - 1));
console.log(randomQuestion);

// Generate a random question in a prompt box and spit back their answer + correct answer

const response = window.prompt(questionAnswer[randomQuestion].question);
alert("You answered: " + response + ". The correct answer was: " + questionAnswer[randomQuestion].answer)