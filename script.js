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
      question: "What is 5 + 3?",
      answer: "8"
    },
    {
      type: 'open-ended',
      question: "A comet passes Earth every 76 years. If the last pass was in 1986, in what year will it pass next?",
      answer: "2062"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 15;
  
  const questionContainer = document.getElementById('question-container');
  const nextButton = document.getElementById('next-btn');
  const timerDisplay = document.getElementById('time');
  const scoreDisplay = document.getElementById('score');
  const gradeDisplay = document.getElementById('grade');
  const resultContainer = document.getElementById('result-container');
  
  // Display Question
  function displayQuestion() {
    clearInterval(timer); // Reset timer
    timeLeft = 15;
    timerDisplay.textContent = timeLeft;
    startTimer(); // Start new timer
  
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
      questionContainer.innerHTML += `<input type="text" id="open-answer" placeholder="Your answer...">`;
    }
  }
  
  // Start Timer
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
        checkAnswer();
      }
    }, 1000);
  }
  
  // Check Answer
  function checkAnswer() {
    const question = questions[currentQuestion];
    let userAnswer;
  
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
  
  // Show Result
  function showResult() {
    const grade = score / questions.length >= 0.7 ? 'Pass' : 'Fail';
    scoreDisplay.textContent = `${score} / ${questions.length}`;
    gradeDisplay.textContent = grade;
    resultContainer.classList.remove('hidden');
  }
  
  // Next Question or Show Result
  nextButton.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      showResult();
      questionContainer.classList.add('hidden');
      nextButton.disabled = true;
    }
  });
  
  // Initialize Quiz
  displayQuestion();