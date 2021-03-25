var timeEl = document.getElementById("countdown");
var startButtonEl = document.getElementById("start-button");
var highScoresEL = document.getElementById("high-score"); 
var mainE1 = document.getElementById("main");



startButtonEl.addEventListener ("click", function() {
var count = 40;
var interval = setInterval(function(){
  document.getElementById('countdown').innerHTML= "Time Remaining: " + count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('countdown').innerHTML='Times Up!';
  }
}, 1000);
});


startButtonEl.addEventListener ("click", function() {
  document.getElementById("main").style.display = "none";
});
 


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

// startButtonEl.click(function() {

 

// }

// function generateQuestions() {
// var currentQuestion = 0;
// question.innerHTML = "<p>" currentQuestion + "</p>";
// choice





// } 
  
