const TITLE = 'Quiz';

let questions = [
    "What is EuroGuardian Defense Solutions' acronym?",
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
    "In its page, what is the Mastodonte in the pcture named?",
    "At the time of the shot, where was the Nebeská Hlídka?",
    "What variety of roles can the Legions perform?",
    "What does Zvezda Bogov mean?",
    "What is the Zvezda Bogov?",
    "Should civilians be warned if the Redemption legion of Europa Division gets assigned to the front where they live?",
    "What is the Stille Vogler's speciality?",
    "What machine is Zorya?",
    "Who controls all EGDS troops?"
];

let answers = [
    "EGDS",
    "Green",
    "Yes, if is linked to a drone",
    "2035",
    "2030",
    "2036",
    "12",
    "10000 Kms",
    "Yes",
    "No",
    "Mastodontes",
    "Yes",
    "Be the workhorse",
    "Brutus",
    "Alpha Centauri",
    "Any role",
    "Star of the Gods",
    "A space station",
    "Absolutely",
    "Defense and Protection",
    "A Prototype EGPIM",
    "Ido"
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
