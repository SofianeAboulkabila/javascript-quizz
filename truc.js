const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponses",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 1,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: ["1967", "1974", "1962", "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: ["Zelda", "Ganon", "Tom", "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
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
  questionEl.innerHTML = question.question;
  answersEl.innerHTML = "";
  for (let i = 0; i < question.answers.length; i++) {
    const answer = question.answers[i];
    answersEl.innerHTML += `<li class="answer">${answer}</li>`;
  }
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

const answerEls = document.querySelectorAll(".answer");
for (let i = 0; i < answerEls.length; i++) {
  answerEls[i].addEventListener("click", handleAnswerClick);
}
