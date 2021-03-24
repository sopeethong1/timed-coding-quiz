// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// Then I am told "Correct" or "Wrong"---ST
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var questions = [
  {
    question: "1. Choose the option that is NOT a Javascript Data Type:",
    choices: ["Number", "Object", "String", "Booyah"],
    answer: 4,
  },

  {
    question:
      "2. A Javascript ____________ is a block of code designed to perform a particular task:",
    choices: ["Argument", "Initialization", "Function", "Agreement"],
    answer: 3,
  },

  {
    question:
      "Choose True or False for the following statement: Objects are variables too.",
    choices: ["True", "False"],
    answer: 1,
  },

  {
    question:
      "Choose True or False for the following statement: A Javascript String can not use double quotes.",
    choices: ["True", "False"],
    answer: 2,
  },
];
