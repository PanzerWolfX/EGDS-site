const TITLE = 'Quiz';

let questions = [
    "How can EuroGuardian Defense Solutions",
    "What colour was the EMBT's camo during the initial stages of developement?",
    "Can the Kolos see through buildings?",
    "When did the Euro-Ottoman war begin?",
    "When was EGDS founded?",
    "When was EGAAR instituted?",
    "How many people can the Streifer carry?",
    "What is the EHB's maximum range with no refuel?",
    "Are the Mirage and Hekurani stealth?",
    "Is the EAASSF manned?",
    "What are EMRPFs most commonly seen with?",
    "Can the EMRPFs be used for civilian aid?",
    "What is the EGPIM's purpose?",
    "In its page, what is the Mastodonte in the pcture named?"
];

let answers = [
    "EGDS",
    "Green",
    "Yes, if is is linked to a drone",
    "2035",
    "2030",
    "2036",
    "A full squad",
    "10000 Kms",
    "Yes",
    "No",
    "Mastodontes",
    "Yes",
    "Be the workhorse",
    "Brutus"
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

document.getElementById('submitAnswer').addEventListener('click', function() {
    checkAnswer();
    generateNewQuestion(); // Call generateNewQuestion after checking the answer
});

document.getElementById('generateQuestion').addEventListener('click', generateNewQuestion);

document.getElementById('answerInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
