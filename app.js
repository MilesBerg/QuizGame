const questions = [
    {
        question: "Where did Lebron James go to college?",
        options: ["Ohio State", "Penn State", "Iowa", "None of the Above"],
        correct: "None of the Above"
    },
    {
        question: "How many times has Lebron been to the Finals?",
        options: ["6", "10", "8", "4"],
        correct: "10"
    },
    {
        question: "What team did Lebron win his first NBA Finals on?",
        options: ["Miami Heat", "Cleveland Cavaliers", "LA Lakers", "None of the Above"],
        correct: "Miami Heat"
    },
    {
        question: "Which of the following teams have never beaten Lebron in the Finals?",
        options: ["Dallas Mavericks", "Denver Nuggets", "Golden State Warriors", "San Antonio Spurs"],
        correct: "Denver Nuggets"
    },
    {
        question: "Before Lebron James, who held the all-time scoring record?",
        options: ["Michael Jordan", "Bill Russell", "Kareem Abdul-Jabbar", "Kobe Bryant"],
        correct: "Kareem Abdul-Jabbar"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const errorMessage = document.getElementById('error-message');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    selectedAnswer = null;
    errorMessage.textContent = '';

    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => {
            if (selectedAnswer) {
                selectedAnswer.classList.remove('selected');
            }
            li.classList.add('selected');
            selectedAnswer = li;
        });
        answersElement.appendChild(li);
    });
}

function showResult() {
    document.getElementById('quiz-content').style.display = 'none';
    resultElement.style.display = 'block';
    scoreElement.textContent = `${score} / ${questions.length}`;
}

nextButton.addEventListener('click', () => {
    if (!selectedAnswer) {
        errorMessage.textContent = 'Please select an answer!';
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer.textContent === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    loadQuestion();
});


loadQuestion();
