const TITLE = 'Quiz';

let questions = [
  "When was EGDS founded?",
  "When did the Euro-Ottoman war start?",
  "When was EGAAR istituted?",
  "Is the EMBT-02 only manned?",
  "What are the Streider's targets? Light, Heavy or both?",
  "What vehicle features the 200mm cannon?",
  "Are the EHB and Hekurani stealth?",
  "What is the Mirage's max range without refuel?",
  "Is the EAASSF manned?",
  "What unit is most commonly seen alongside EMRPFs?",
  "What is the name of the EAHSM in the file?",
  "Can the EMRPF be used in a civilian support role?",
  "How tall is an EM?",
  "From what language does the Zvezda Bogov take its name?",
  "What is the StahlEngel's speciality?",
  "Who do the Stille Voglers protect?",
  "What does TaevasHüpe Üksus mean in English?",
  "Does the Redemption Legion of Europa (RLE) care about collateral damage?",
  "What type of machine is Zorya?"
];

let answers = [
    "2030",
    "2035",
    "2032",
    "No",
    "Both",
    "The Kolos",
    "Yes",
    "10000 Kms",
    "No",
    "Mastodontes",
    "Brutus",
    "Yes",
    "10 Meters",
    "Russian",
    "Modern Warfare",
    "Civilians and Important targets",
    "Sky Jump Battalion",
    "No",
    "Prototype EGPIM"

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