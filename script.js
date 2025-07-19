const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Tool Marking Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Who invented JavaScript?",
    options: ["Tim Berners-Lee", "Brendan Eich", "Bill Gates", "Dennis Ritchie"],
    answer: "Brendan Eich"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestionIndex];
  document.getElementById("question").innerText = q.question;
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
    btn.className = "option-btn";
    btn.disabled = false;
  });

  document.getElementById("progress-bar").style.width =
    ((currentQuestionIndex + 1) / questions.length) * 100 + "%";
}

function selectOption(btn) {
  const selected = btn.innerText;
  const correct = questions[currentQuestionIndex].answer;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons.forEach(b => {
      if (b.innerText === correct) b.classList.add("correct");
    });
  }

  document.getElementById("score-box").innerText = `Score: ${score}/${questions.length}`;
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${questions.length} 🎉</p>`;
  }
}

window.onload = loadQuestion;