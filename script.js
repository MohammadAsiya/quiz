const questions =[
    {
        question:" Which is largest animal in the world?",
        answers:[
           {text:"Shark",correct:false},
           {text:"Blue whale",correct:true},
           {text:"Elephant",correct:false},
           {text:"Giraffe",correct:false}
        ]
    },
    {
        question:"Which of the following is not an international organisation?",
        answers:[
           {text:"FIFA",correct:false},
           {text:"NATO",correct:true},
           {text:"ASEAN",correct:false},
           {text:"FBI",correct:true}
        ]
    },
    {
        question:"Which of the following disorders is the fear of being alone?",
        answers:[
           {text:"Agoraphobia",correct:true},
           {text:"Aerophobia",correct:false},
           {text:"Acrophobia",correct:false},
           {text:"Arachnophobia",correct:false}
        ]
    },
    {
        question:"What is the speed of sound?",
        answers:[
           {text:"120 km/h",correct:false},
           {text:"1,200 km/h",correct:true},
           {text:"700 km/h",correct:false},
           {text:"400 km/h",correct:false}
        ]
    },
    {
        question:"What is the main component of the sun?",
        answers:[
           {text:"Liquid lava",correct:false},
           {text:"Gas",correct:true},
           {text:"Molten iron",correct:false},
           {text:"Rock",correct:false}
        ]
    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML ="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML =questionNo+"."+currentQuestion.question;
 
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })

}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

startQuiz();


