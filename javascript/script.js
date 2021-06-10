// Variables
var scoreEl = document.querySelector(".current-score")
var timerEl = document.querySelector(".current-time")
var questionDiv = document.querySelector(".question")
var AnswersDiv = document.querySelector(".answers")


var choiceOne = document.createElement("button");
var choiceTwo = document.createElement("button");
var choiceThree = document.createElement("button");
var choiceFour = document.createElement("button");


// the Start button
var btn = document.createElement("button");
btn.textContent = "Let's Start!";
document.getElementsByClassName("button").appendChild(btn);


// The Answer
AnswersDiv.appendChild(choiceOne)
AnswersDiv.appendChild(choiceTwo)
AnswersDiv.appendChild(choiceThree)
AnswersDiv.appendChild(choiceFour)

choiceOne.setAttribute("style", " color:white; background: white; width: 50px; height: 20px;");
choiceTwo.setAttribute("style", " color:white; background: white; width: 50px; height: 20px;");
choiceThree.setAttribute("style", " color:white; background: white; width: 50px; height: 20px;");
choiceFour.setAttribute("style", " color:white; background: white; width: 50px; height: 20px;");

var scoreNum = 0
var questionNum = 0


// for (let i = 0; i < quizQuestions.length; i++) {
//     const element = quizQuestions[i];    
// }


// WHEN I click the start button
// THEN a timer starts* and I am presented with a question
// A TIMER FUNCTION
var secondsRemaining = 60

function myTimer() {
    var timerInterval = setInterval(function () {
    
        // btn.disabled
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

// function showMe() {
//     ("style", "display: inline")
// }

// function hideMe() {
//         btn.setAttribute("style", "display: none;")
// }

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

// if (quizQuestions.options === quizQuestions.correctAnswer) {
//     scoreEl++;
// } else {
//     secondsRemaining - 5;
// }



btn.addEventListener('click', showMe);
btn.addEventListener('click', hideMe);
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
function highScore() {
    var score = localStorage.getItem("score");
    var initials = localStorage.getItem("intials");
  
  }

localStorage.setItem("score", score);
localStorage.setItem("Initials", Initals);



