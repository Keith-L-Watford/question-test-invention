// Variables
var scoreEl = document.querySelector(".current-score")
var timerEl = document.querySelector(".current-time")


// the button
var btn = document.createElement("button");
btn.textContent = "Let's Start!";
document.body.appendChild(btn);


// WHEN I click the start button
// THEN a timer starts* and I am presented with a question
// A TIMER FUNCTION
var secondsRemaining = 12

function myTimer() {
    var timerInterval = setInterval(function () {
    
        if (secondsRemaining >= 2) {
            timerEl.textContent = secondsRemaining + " seconds remaining";
            secondsRemaining--;
        } else if (secondsRemaining === 1) {
            timerEl.textContent = secondsRemaining + " second remaining";
            secondsRemaining--;
        } else  {
            timerEl.textContent = "0 seconds remaining";
            clearInterval(timerInterval);
            // highScore();
        }
    }, 1000);
}

//  The questions with choices and correct answer
function theQuiz(params) {    
var questions = [
    {question: "question 1?",
    answers: {
        a: "blah",
        b: "bleh",
        c: "bloh",
        d: "bluh"
    },
    correctAnswer: c,
    },
]

if (questions.answer === questions.correctAnswer) {
    scoreEl++;
} else {
    secondsRemaining - 5;
}





btn.addEventListener('click', myTimer);
// btn.addEventListener("click", theQuiz);

// WHEN I answer a question
// THEN I am presented with another question



// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over



// WHEN the game is over
// THEN I can save my initials and my score