const questions = [
    {
        question: "which of the following is not a feature of oop's",
        answer:[
            {text: "inheritance", correct: false},
            {text: "abstraction", correct: false},
            {text: "constructor", correct: true},
            {text: "polymorphism", correct: false},
            
        ]
    },
        {
            question: "Which feature of OOP indicates code reusability?",
            answer:[
                {text: "inheritance", correct: true},
                {text: "abstraction", correct: false},
                {text: "Encapsulation", correct: false},
                {text: "polymorphism", correct: false},
                
            ]
        },
        {
            question: "Which header file is required in C++ to use OOP?",
            answer:[
                {text: " OOP can be used without using any header file", correct: true},
                {text: " stdlib.h", correct: false},
                {text: " iostream.h", correct: false},
                {text: " iostream.h", correct: false},
                
            ]
        },
        {
            question: "Which header file is required in C++ to use OOP?",
            answer:[
                {text: " OOP can be used without using any header file", correct: true},
                {text: " stdlib.h", correct: false},
                {text: " iostream.h", correct: false},
                {text: " iostream.h", correct: false},
                
            ]
        },
        {
            question: "Why Java is Partially OOP language?",
            answer:[
                {text: "It allows code to be written outside classes", correct: false},
                {text: " It supports usual declaration of primitive data types", correct: true},
                {text: " It does not support pointers", correct: false},
                {text: " It doesnt support all types of inheritance", correct: false},
                
            ]
        },
        

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let scre = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    } );
}

function resetState(){
    nextbutton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block"

}
function showScore(){
    resetState();
    questionElement.innerHTML = `you score ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "play again";
    nextbutton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <  questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextbutton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
} );
startQuiz ();
