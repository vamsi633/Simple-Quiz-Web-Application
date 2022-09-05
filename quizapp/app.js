const quizData=[{
    question:"Which language runs in a web browser?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"JavaScript",
    correct:"d",
},{
    question:"What does CSS stand for?",
    a:"Central Style Sheet",
    b:"Cascading Style Sheet",
    c:"Cascading Simple Sheet",
    d:"Casting Style Sheet",
    correct:"b",
},{
    question:"What does HTML stand for?",
    a:"HyperText Markup Language",
    b:"HyperText Markdown Language",
    c:"HyperText Machine Language",
    d:"HyperText Makeup Language",
    correct:"a",
},{
    question:"What year was JavaScript lanched?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"None of the above",
    correct:"b",
},];

const quiz=document.getElementById("quiz");
const answerElements=document.querySelectorAll(".answer");
const questionElement=document.getElementById("question");

const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");

const submitButton=document.getElementById("submit");

let currentQuiz=0;
let score=0;

const deselectAnswers=()=>{
    answerElements.forEach((answer)=>(answer.checked=false));
};

const getSelected=()=>{
    let answer;
    answerElements.forEach((answerElement)=>{
        if(answerElement.checked){
            answer=answerElement.id;
        }
    });
    return answer;
};
    
const loadQuiz=()=>{
        deselectAnswers();
        const currentQuizData=quizData[currentQuiz];
        questionElement.innerText=currentQuizData.question;
        a_text.innerText=currentQuizData.a;
        b_text.innerText=currentQuizData.b;
        c_text.innerText=currentQuizData.c;
        d_text.innerText=currentQuizData.d;
};

loadQuiz();
submitButton.addEventListener("click",()=>{
    const answer=getSelected();

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
            currentQuiz++;
        }

        if(currentQuiz<quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly </h2> 
                            <button onclick="history.go(0)">Play Again</button>`
        }
    }
});
