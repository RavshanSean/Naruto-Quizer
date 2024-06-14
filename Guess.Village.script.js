
const quiz = ['guess where is konoha', 'guess where is Amegakure', 'guess fight in Kumogakure' ];
let questionNum = 0;
//

const question = document.querySelector('.question');
//add new button and display
//we need to update 

/*const button = document.querySelector('button');
const display = document.querySelector('#display');*/

const img1El = document.querySelector('#A');
const image1El = document.querySelector('#B');
//
question.textContent = quiz[questionNum];
question.addEventListener('click', () => {
    console.log(questionNum);
    questionNum +1;
    if (questionNum < quiz.length) {
        question.textContent = quiz[questionNum];
    }
});
//
const play = (event) => {
    let playerChoice = getPlayerChoice(event);
    if (playerChoice === 'A') {
        displayEl.textContent = 'you score alln 3!';
        
        if (questionNum < quiz.length - 1) {
            questionNum++;
            question.textContent = quiz[questionNum];
            img1El.removeAttribute('class');
            image1El.removeAttribute('class');
            //

            img1El.setAttribute ('class', `img${questionNum}`);
            image1El.setAttribute ('class', `image${questionNum}`);
            //
        }} else {
            displayEl.textContent = 'Game Over!';
            setTimeout(function() {
                window.location = "./index.html";
            }, 2000);
        }
        console.log(playerChoice);
    };

    const getPlayerChoice = (event) => {
        return event.target.id;
    };
    
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', getPlayerChoice);
        button.addEventListener('click', play);
    });
    
    const displayEl = document.querySelector('#display');



