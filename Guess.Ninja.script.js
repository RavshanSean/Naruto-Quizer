
//Ryan and Ash helping to understand why img1 and img2 not working
const img1El = document.querySelector('#A');
const image1El = document.querySelector('#B');
//use exaple from Ashley
question.textContent = quiz[questionNum];
question.addEventListener('click', () => {
    console.log(questionNum);
    questionNum += 1;
    if (questionNum < quiz.length) {
        question.textContent = quiz[questionNum];
    }
});
//
const play = (event) => {
    let playerChoice = getPlayerChoice(event);
    if (playerChoice === 'A') {
        displayEl.textContent = 'You scored all 3!';

        if (questionNum < quiz.length - 1) {
            questionNum++;
            question.textContent = quiz[questionNum];

            img1El.removeAttribute('class');
            image1El.removeAttribute('class');

            img1El.setAttribute('class', `img${questionNum}`);
            image1El.setAttribute('class', `image${questionNum}`);

        }
    } else {
        displayEl.textContent = 'Game Over!';
        setTimeout(function () {
            window.location = "./index.html";
        }, 2000);
    }
    console.log(playerChoice);
};


// credits to Ashley and Glenn
const getPlayerChoice = (event) => {
    return event.target.id;
};

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
    button.addEventListener('click', play);
});

const displayEl = document.querySelector('#display');










