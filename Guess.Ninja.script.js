
 //credit to Ashley
const quiz = ['guess who is "Iruka Sensei"', 'quess who crate "rasengan"', 'guess who is Pain'];

let questionNum = 0;
const question = document.querySelector('.question');
const img1El = document.querySelector('#A');
const image1El = document.querySelector('#B');
//use exaple from Ashley
question.textContent = quiz[questionNum];
question.addEventListener('click', () => {
    console.log(questionNum);
    questionNum +=1;
    if (questionNum < quiz.length) {
        question.textContent = quiz[questionNum];
    }
});
// credit to Ryan Glenn
const play = (event) => {
    let playerChoice = getPlayerChoice(event);
    if (playerChoice === 'A') {
        displayEl.textContent = 'You total score 3 of 3 !';
    if (questionNum < quiz.length - 1) {
            questionNum++;
            question.textContent = quiz[questionNum];
            
            img1El.removeAttribute('class');
            image1El.removeAttribute('class');
            img1El.setAttribute ('class', `img${questionNum}`);
            image1El.setAttribute ('class', `image${questionNum}`);
             
}} else {
            displayEl.textContent = 'Game Over!';
            setTimeout(function() {
                window.location = "./index.html";
            }, 2000);
        }
        console.log(playerChoice);
    }; 
     // credits to Ashley and Glenn
    const getPlayerChoice = (event) => {
        return event.target.id;
    };
    //need info from MDN W2
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', getPlayerChoice);
        button.addEventListener('click', play);
    });
    const displayEl = document.querySelector('#display');
