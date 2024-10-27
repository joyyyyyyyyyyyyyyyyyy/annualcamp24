// Questions Data
const questions = [
  {
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  }
];

let currentQuestion = 0;
let score = 0;
let quizDuration = 60;
let timer;

const homeContainer = document.getElementById('home-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const homeButton = document.getElementById('home-btn');
const timerDisplay = document.getElementById('time');
const timerElement = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const gradeDisplay = document.getElementById('grade');

// Display the current question
function displayQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `<h2>${question.question}</h2>`;

  if (question.type === 'multiple') {
    question.options.forEach(option => {
      questionContainer.innerHTML += `
        <div>
          <input type="radio" name="answer" value="${option}">
          <label>${option}</label>
        </div>
      `;
    });
  } else if (question.type === 'open-ended') {
    questionContainer.innerHTML += `
      <input type="text" id="open-answer" placeholder="enter your answer...">
    `;
  }
}

// Start the quiz timer
function startQuizTimer() {
  timer = setInterval(() => {
    quizDuration--;
    timerDisplay.textContent = quizDuration;

    if (quizDuration === 0) {
      clearInterval(timer);
      endQuiz(); // Automatically end the quiz when time is up
    }
  }, 1000);
}

// Check if the current answer is correct
function checkAnswer() {
  const question = questions[currentQuestion];
  let userAnswer = "";

  if (question.type === 'multiple') {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    userAnswer = selectedOption ? selectedOption.value : "";
  } else if (question.type === 'open-ended') {
    userAnswer = document.getElementById('open-answer').value.trim();
  }

  if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
    score++;
  }
}

// Display the final results
function showResult() {
  const percentage = (score / questions.length) * 100;
  let grade;

  if (percentage === 100) grade = "A1";
  else if (percentage >= 90) grade = "A2";
  else if (percentage >= 80) grade = "B3";
  else if (percentage >= 70) grade = "B4";
  else if (percentage >= 60) grade = "C5";
  else if (percentage >= 50) grade = "C6";
  else grade = "Fail";

  scoreDisplay.textContent = `${score} / ${questions.length}`;
  gradeDisplay.textContent = grade;

  resultContainer.classList.remove('hidden');
  quizContainer.classList.add('hidden');
  nextButton.classList.add('hidden'); // Hide the Next button
  timerElement.classList.add('hidden'); // Hide the timer
}

// Move to the next question or end the quiz
nextButton.addEventListener('click', () => {
  checkAnswer();
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
});

// Start the quiz
startButton.addEventListener('click', () => {
  homeContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  resetQuiz();
  displayQuestion();
  startQuizTimer();
});

// Go back to the home page
homeButton.addEventListener('click', () => {
  resultContainer.classList.add('hidden');
  homeContainer.classList.remove('hidden');
  resetQuiz();
});

// Reset the quiz state
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  quizDuration = 60;
  timerDisplay.textContent = quizDuration; // Reset the timer display
  nextButton.classList.remove('hidden');
  timerElement.classList.remove('hidden');
}

// End the quiz and show the result
function endQuiz() {
  clearInterval(timer);
  showResult();
}
