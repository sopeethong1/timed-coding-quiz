var timeEl = document.getElementById("timer");
var startButtonEl = document.getElementById("start-button");
var highScoresEL = document.getElementById("high-score"); 

function startTime() {
 countDown = setInterval(function() {
  if(timeLeft > 1) {

    timerEl.textContent = timeLeft + "seconds remaining";

    timeLeft--;
  } else if (timeLeft === 1) {

    timerEl.textContent = timeLeft + "seconds remaining";
    timeLeft--;
  } else {

    timerEl.textContent = "";

    clearInterval(timeInterval);
    
    displayMessage();
  }
} , 1000) ;
}

function startGame() {
timeEl = 60;
}


 


var theQuiz = [
  {
    question: "Choose the option that is NOT a Javascript Data Type:",
    options: ["Number", "Object", "String", "Booyah"],
    answer: 4,
  },

  {
    question:
      "Choose True or False for the following statement: A Javascript String can not use double quotes.",
    options: ["True", "False"],
    answer: 2,
  },

  {
    question:
      "A Javascript ____________ is a block of code designed to perform a particular task:",
    options: ["Argument", "Initialization", "Function", "Agreement"],
    answer: 3,
  },

  {
    question:
      "Choose True or False for the following statement: Objects are variables too.",
    options: ["True", "False"],
    answer: 1,
  },
];

  
startButtonEl.addEventListener("click", startGame); 