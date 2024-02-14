const questions = [
    {
        questions:"Which is largest animal in the world?",
        answers:[
            {text : "shark",correct : "False"},
            {text : "Blue whale",correct : "True"},
            {text : "Elephant",correct : "False"},
            {text : "Girraffe",correct : "False"},
        ]
    },
    {
    questions:"Which is the smallest country ine world?",
        answers:[
            {text : "india",correct : "False"},
            {text : "sri lanka",correct : "False"},
            {text : "Vatican city",correct : "True"},
            {text : "Bhutan",correct : "False"},
        ]
        },
        {
            questions:"Which is the largest desert in the world?",
        answers:[
            {text : "Kalahari",correct : "False"},
            {text : "Gobi",correct : "False"},
            {text : "Sahara",correct : "False"},
            {text : "Antartica",correct : "True"},
        ]
        },
        {
            questions:"Which is the smallest continent in the world?",
        answers:[
            {text : "Asia",correct : "False"},
            {text : "Australia",correct : "True"},
            {text : "Africa",correct : "False"},
            {text : "Arctic",correct : "False"},
        ]
        },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showQuestion();
}
function showQuestion()
          {
            resetState()           
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

 function resetState(){
    nextbutton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "True";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct == "True"){
            button.classList.add("correct");
        }
        button.disabled = "True";

        });
        nextbutton.style.display = "block";

 }
    function showScore(){
        resetState();
        questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
        nextbutton.innerHTML = "Play Again";
        nextbutton.style.display = "block";
    }

      



    function handleNextButton(){
        currentQuestionIndex ++;
        if(currentQuestionIndex < questions.length){
            showQuestion();

        }else{
            showScore();
        }
    }
   
   nextbutton.addEventListener("click",() =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
   });


startQuiz();