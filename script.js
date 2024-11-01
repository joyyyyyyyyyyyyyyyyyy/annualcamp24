// Questions Data
const questions = [
  {
    //qn1
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn2
    type: 'multiple',
    question: "In which year did World War II begin?",
    options: ["1935", "1945", "1939", "1941"],
    answer: "1939"
  },
  {
    //qn3
    type: 'multiple',
    question: "Which of the following is a noble gas?",
    options: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
    answer: "Helium"
  },
  {
    //qn4
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn5
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn6
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn7
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn8
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn9
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn10
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn11
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn12
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn13
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn14
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    //qn15
    type: 'multiple',
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  //open ended qns
  {
    //qn1
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn2
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn3
    type: 'open-ended',
    question: "X + X + X = 9 <br> Y + Y - X = 47 <br> 6 x Z + Y = 73 <br> X + Y + Z = ?",
    answer: "36"
  },
  {
    //qn4
    type: 'open-ended',
    question: "X + X + X = 9 <br> Y + Y - X = 47 <br> 6 x Z + Y = 73 <br> X + Y + Z = ?",
    answer: "36"
  },
  {
    //qn5
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn6
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn7
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn8
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn9
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn10
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn11
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn12
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn13
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  },
  {
    //qn14
    type: 'open-ended',
    question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
    answer: "2062"
  },
  {
    //qn15
    type: 'open-ended',
    question: "A + A + A = 39 <br> B + B - A = 25 <br> 6 + C + B = 50 <br> A + B + C = ?",
    answer: "57"
  }  
];

let currentQuestion = 0;
let score = 0;
let quizDuration = 900;
let timer;
let answers = Array(questions.length).fill(""); // Store user answers for each question
let correctAnswersMarked = Array(questions.length).fill(false); // Track correct answers per question

const homeContainer = document.getElementById('home-container');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const startButton = document.getElementById('start-btn');
const homeButton = document.getElementById('home-btn');
const timerDisplay = document.getElementById('time');
const timerElement = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const gradeDisplay = document.getElementById('grade');

// Shuffle questions randomly
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Display the current question
function displayQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `<h2>${question.question}</h2>`;

  if (question.type === 'multiple') {
    question.options.forEach(option => {
      questionContainer.innerHTML += `
        <div class="mcqoption">
          <input type="radio" name="answer" id="${option}" value="${option}" ${answers[currentQuestion] === option ? 'checked' : ''}>
          <label for="${option}">${option}</label>
        </div>
      `;
    });

    // Add click event to labels to select radio button when label is clicked
    const labels = document.querySelectorAll('.mcqoption label');
    labels.forEach(label => {
      label.addEventListener('click', () => {
        document.getElementById(label.getAttribute('for')).checked = true;
        answers[currentQuestion] = label.textContent; // Update answer on label click
      });
    });
  } else if (question.type === 'open-ended') {
    questionContainer.innerHTML += `
      <input type="text" id="open-answer" placeholder="enter your answer..." value="${answers[currentQuestion] || ''}">
    `;
  }

  // Enable/disable the previous button based on the current question
  prevButton.disabled = currentQuestion === 0;
}

// Store the answer for the current question
function storeAnswer() {
  const question = questions[currentQuestion];
  if (question.type === 'multiple') {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      answers[currentQuestion] = selectedOption.value;
    }
  } else if (question.type === 'open-ended') {
    const userAnswer = document.getElementById('open-answer').value.trim();
    answers[currentQuestion] = userAnswer;
  }
}

// Start the quiz timer
function startQuizTimer() {
  timer = setInterval(() => {
    quizDuration--;

    // Convert quizDuration to minutes and seconds
    const minutes = String(Math.floor(quizDuration / 60)).padStart(2, '0');
    const seconds = String(quizDuration % 60).padStart(2, '0');
    timerDisplay.textContent = `${minutes}min : ${seconds}`; // Display in MM:SS format

    if (quizDuration === 0) {
      clearInterval(timer);
      endQuiz(); // Automatically end the quiz when time is up
    }
  }, 1000);
}

// Check if the current answer is correct
function checkAnswer() {
  const question = questions[currentQuestion];
  const userAnswer = answers[currentQuestion];

  // If the answer is correct and wasn't previously marked as correct, increase score and mark as correct
  if (userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase()) {
    if (!correctAnswersMarked[currentQuestion]) {
      score++;
      correctAnswersMarked[currentQuestion] = true; // Mark as correct
    }
  } else {
    // Reset the correct mark if answer is changed and is incorrect
    if (correctAnswersMarked[currentQuestion]) {
      score--;
      correctAnswersMarked[currentQuestion] = false;
    }
  }
}

// Move to the next question or end the quiz
nextButton.addEventListener('click', () => {
  storeAnswer();
  checkAnswer();
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
});

// Move to the previous question
prevButton.addEventListener('click', () => {
  storeAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    displayQuestion();
  }
});

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
  nextButton.classList.add('hidden');
  prevButton.classList.add('hidden');
  timerElement.classList.add('hidden');
}

// Start the quiz
startButton.addEventListener('click', () => {
  homeContainer.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  resetQuiz();
  shuffleQuestions(questions);
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
  quizDuration = 900;
  answers = Array(questions.length).fill(""); // Clear stored answers
  correctAnswersMarked = Array(questions.length).fill(false); // Reset correct answers tracking
  timerDisplay.textContent = quizDuration;
  nextButton.classList.remove('hidden');
  prevButton.classList.remove('hidden');
  timerElement.classList.remove('hidden');
}

// End the quiz and show the result
function endQuiz() {
  clearInterval(timer);
  showResult();
}
