var timeEl = document.getElementById("countdown");
var startButtonEl = document.getElementById("start-button");
var highScoresEL = document.getElementById("high-score"); 
var mainE1 = document.getElementById("main");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var optionA =  document.getElementById("A");
var optionB =  document.getElementById("B");
var optionC =  document.getElementById("C");
var optionD =  document.getElementById("D");


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
    optionA: "Number",
    optionB: "Object",
    optionC: "String",
    optionD:  "Booyah",
    Correct: "Booyah",
  },

  {
    question: "Choose True or False for the following statement: A Javascript String can not use double quotes.",
    optionA: "True",
    optionB: "False",
    Correct: "False",
  },

  {  question: "A Javascript ____________ is a block of code designed to perform a particular task:",
    optionA: "Argument",
    optionB: "Initialization",
    optionC: "Function",
    optionD:  "Agreement",
    Correct: "Function",
  },

  { question: "Choose True or False for the following statement: Objects are variables too.",
    optionA: "True",
    optionB: "False",
    Correct: "True",
  },
];

function showQuestions(){
i = 0;
q4 = questions.length;
  optionA.innerHTML = i.choiceA;

  optionB.innerHTML = i.choiceB;

  optionC.innerHTML = i.choiceC;

  optionD.innerHTML = i.choiceD;


  function showProgress(){

    for( i= [0]; i < [4]; i ++){

        quiz.innerHTML = i[0];

    }

}
start.addEventListener("click",startQuiz);
}