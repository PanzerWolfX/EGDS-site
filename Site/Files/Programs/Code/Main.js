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

let score = 0;

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

function checkAnswer() {
  const userAnswer = document.getElementById('answerInput').value.trim();
  const currentQuestionIndex = questions.indexOf(document.getElementById('question').innerText);
  
  if (currentQuestionIndex !== -1 && userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
      score += 1;
      document.getElementById('scoreDisplay').innerText = "Score: " + score;
      alert("Correct");
  }
  else {
      alert("Incorrect. Correct answer: " + answers[currentQuestionIndex]);
  }    
  
  document.getElementById('answerInput').value = '';
}

function generateNewQuestion() {
  displayRandomQuestion();
}

displayRandomQuestion();
document.getElementById('scoreDisplay').innerText = "Score: " + score;

document.getElementById('submitAnswer').addEventListener('click', checkAnswer);

document.getElementById('submitAnswer').addEventListener('click', generateNewQuestion);

document.getElementById('answerInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      checkAnswer();
      generateNewQuestion();
  }
});