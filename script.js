const questions = [
  {
    question: "Quel est le père de Luke Skywalker dans Star Wars ?",
    answers: ["Darth Vader", "Anakin Skywalker", "Les deux réponses", "Aucune réponse"],
    correctAnswerIndex: 1,
  },
  {
    question: "En quelle année est sorti l'album Sgt. Pepper des Beatles ?",
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question: "Quel est le nom du personnage principal dans Zelda ?",
    answers: ["Link", "Zelda", "Ganon", "Tom"],
    correctAnswerIndex: 0,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire annulée suite à une explosion ?",
    answers: ["Apollo 9", "Mercury 1", "Apollo 13", "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

const questionEl = document.querySelector("#question");
const answersEl = document.querySelector("#answers");
const scoreEl = document.querySelector("#score");

let score = 0;
let currentQuestion = 0;

function displayQuestion(question) {
  questionEl.textContent = question.question;
  answersEl.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const li = document.createElement("li");
    li.classList.add("answer");
    li.textContent = answer;
    if (index === question.correctAnswerIndex) {
      li.classList.add("correct");
    }
    answersEl.appendChild(li);
  });
}

function handleAnswerClick(event) {
  const chosenAnswer = event.target.textContent;
  const currentQuizData = questions[currentQuestion];
  const correctAnswer = currentQuizData.answers[currentQuizData.correctAnswerIndex];

  if (chosenAnswer === correctAnswer) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion(questions[currentQuestion]);
  } else {
    questionEl.textContent = "Quiz terminé";
    answersEl.innerHTML = "";
  }
}

displayQuestion(questions[currentQuestion]);

answersEl.addEventListener("click", handleAnswerClick);
