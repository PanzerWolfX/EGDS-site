const TITLE = 'Quiz';

let questions = [
  "What was the name of the clone commander that last served Kenobi?",
  "What is the name of the thing that allows you to type?",
  "What is the name of the General of the droid army in Star Wars?"
];

let answers = [        
"Cody",
"Keyboard",
"Grievous"
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getRandomQuestion(questions) {
  const index = getRandomIndex(questions.length);
  return questions[index];
}

function displayRandomQuestion() {
  const randomQuestion = getRandomQuestion(questions);
  document.getElementById('question').innerText = randomQuestion;
}

displayRandomQuestion();

document.getElementById('generateQuestion').addEventListener('click', displayRandomQuestion);