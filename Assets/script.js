var timeEl = document.getElementById("countdown");
var startButtonEl = document.getElementById("start-button");
var highScoresEL = document.getElementById("high-score"); 
var mainE1 = document.getElementById("main");

console.log(mainE1);



// var button = "startGame"
// startButtonEl.addEventListener("click", function() {
//   // If mode is dark, apply light background
//   if (button === "startGame") {
//     mode = "light";
//     main.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     main.setAttribute("class", "dark");
//   }
// });




function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
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

  
// startButtonEl.addEventListener("click", startGame); 