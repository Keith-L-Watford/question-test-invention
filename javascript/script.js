// Variables
var scoreEl = document.querySelector(".current-score")
var timerEl = document.querySelector(".current-time")

var scoreNum = 0


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

// //  The questions with choices and correct answer
// function theQuiz(params) {    
var quizQuestions = [
    { 
        questions: "Who is the protaginst of Resident Evil 8?",
        options: ["Chris Redfield", "Leon S. Kennedy", "Ethan Winters", "Jill Valentine"],
        correctAnswer: "Ethan Winters",
    },
    { 
        questions: "Question 2?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "d",
    },
    { 
        questions: "Question 3?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "a",
    }, 
    { 
        questions: "Question 4?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "b",
    },
    { 
        questions: "Question 5?",
        options: ["a", "b", "c", "d"],
        correctAnswer: "c",
    },
]

if (quizQuestions.options === quizQuestions.correctAnswer) {
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