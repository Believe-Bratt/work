const questions = [
    "I am always prepared.",
    "I am easily disturbed.",
    "I am relaxed and handle stress well.",
    "I have a rich vocabulary.",
    "I talk to a lot of different people at parties."
];

const traits = [
    "Conscientiousness",
    "Neuroticism",
    "Calmness",
    "Openness",
    "Extraversion"
];

let currentQuestion = 0;
let userAnswers = [];

const quizForm = document.getElementById('quiz-form');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');

function showQuestion() {
    questionContainer.innerHTML = `<p>${questions[currentQuestion]}</p>
        <label><input type="radio" name="answer" value="1"> Strongly Disagree</label>
        <label><input type="radio" name="answer" value="2"> Disagree</label>
        <label><input type="radio" name="answer" value="3"> Neutral</label>
        <label><input type="radio" name="answer" value="4"> Agree</label>
        <label><input type="radio" name="answer" value="5"> Strongly Agree</label>`;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        userAnswers.push(parseInt(selectedOption.value));

        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResults();
        }
    }
}

function showResults() {
    const totalScore = userAnswers.reduce((sum, score) => sum + score, 0);

    resultElement.innerHTML = "";
    for (let i = 0; i < traits.length; i++) {
        const traitScore = userAnswers[i];
        const traitResult = traitScore > 3 ? "High" : "Low";

        resultElement.innerHTML += `<p><strong>${traits[i]}:</strong> ${traitResult}</p>`;
    }

    quizForm.style.display = 'none';
    resultContainer.style.display = 'block';
}

nextButton.addEventListener('click', nextQuestion);
quizForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showResults();
});

showQuestion();


//----------------file downloader----------//
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('download-btn');
    const fileUrlInput = document.getElementById('file-url');
    const downloadLink = document.getElementById('download-link');

    downloadBtn.addEventListener('click', function () {
        const fileUrl = fileUrlInput.value.trim();

        if (fileUrl !== '_.pdf') {
            downloadLink.href = fileUrl;
            downloadLink.style.display = 'inline';
            downloadLink.click();
            downloadLink.style.display = 'none';
        } else {
            alert('Please enter a valid file URL.');
        }
    });
});
