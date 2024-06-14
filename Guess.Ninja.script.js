
//try to use mdn for arrays.lab const fruts =[] and use questions without changing html 

// try here to use DOM
/*let questions = ['Guess Who Is "Iruka Sensei"',
                 'Guess Who is "Teuchi"',
                 'Guess who create "Rassengan"'
];
let currentQuestion = 0;
let currentQuestionIndex = 0;*/
//Ben said to look at DOM adn Ash said to look at pokemont and remove () method//

   //let pllayerChoice//
// find on mdn and our classes about tik tak tow and rock peper sezar//
//let playerChoice;//
//glen told me to figuritout with hint
/*let currentQuestionIndex = 0;
const questions = [ "Guess Who Is 'Iruka Sensei'",
                    "Guess Who Is 'Teuchi'",
                    "Guess Whos 'sharingan'"]; */

//this questions should apear on screen but not working find out why//

//we have to make those question to muve try to use push() or mouve()//Ash say what lessson i did look
//on top i didnt figur it put so this is fresh one THANK YOU ASHLEY and and ben say what method i need to use 
const quiz = ['guess who is "Iruka Sensei"', 'quess who crate "rasengan"', 'guess who is Pain'];
//ben and ash told me to look pokemon how we add so i need this 
//const quizPictures = [
   // {url:"https://gifdb.com/images/high/anime-nose-bleed-iruka-sensei-naruto-vy5mwm5nv2ijg0vv.gif", url:"https://64.media.tumblr.com/76df4a57eb61e1313cda338a03277f58/tumblr_ofzskl49Uh1u9fa5qo1_400.gif"},
   // {url:"https://pa1.aminoapps.com/6551/e53ac86f62bb154a52b63f3de61d0c5fa7b54f7c_hq.gif", url:"https://qph.cf2.quoracdn.net/main-qimg-7fd3086adeb5baf93d6b5218817a50dc"},
   // {url:"https://media1.giphy.com/media/MtJwM5N4fuMgw/giphy.gif?cid=6c09b952jkcn45d6byiy5ri5vcfxuv548yu0z0upqvd2eu43&ep=v1_gifs_search&rid=giphy.gif&ct=g", url:"https://gifdb.com/images/high/naruto-fire-rasengan-vq0j2diwfw4mv5kq.gif"}

//];
//try to do what you did with question
let questionNum = 0;
let score = 0;

//here u start with picture try to if not work deldete
//let pictureNum = 0;
//const picture = document.querySelector('.picture');
//

const question = document.querySelector('.question');
//add new button and display
//we need to update 


/*const button = document.querySelector('button');
const display = document.querySelector('#display');*/
//Ryan helping to understand why img1 and img2 not working
const img1El = document.querySelector('#A');
const image1El = document.querySelector('#B');


//i asked glenn







//use exaple from Ashley
question.textContent = quiz[questionNum];
question.addEventListener('click', () => {
    console.log(questionNum);
    questionNum +=1;
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
            //glenn helping me to solve problem
            img1El.removeAttribute('class');
            image1El.removeAttribute('class');
            //

            img1El.setAttribute ('class', `img${questionNum}`);
            image1El.setAttribute ('class', `image${questionNum}`);
            //

          
            //img3El.setAttribute ('class', 'img3');
            //not working this is bullshit
            //img4El.setAttribute ('class', 'img4');

            
        }} else {
            displayEl.textContent = 'Game Over!';
            setTimeout(function() {
                window.location = "./index.html";
            }, 2000);
        }
        console.log(playerChoice);
    }; //we need to add counting idk how 1am


     // credits to Ashley and Glenn
    const getPlayerChoice = (event) => {
        return event.target.id;
    };
    //need info from Mdn w2 and geeg4geegs
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', getPlayerChoice);
        button.addEventListener('click', play);
    });
    //text
    //const display = document.querySelectorAll('.dispay');//
    const displayEl = document.querySelector('#display');



//
/*let playerChoice;
const choices = ['A', 'B'];
const play = (event) => {
   let playerChoice = getPlayerChoice(event);
    
    if(playerChoice === 'A') {
        displayEl.textContent = 'Correct!';
        questionNum++;
//check google Ryan helped to understanding
 // on the bottom new changes Glenn explained//
/*currentQuestion ++
       
        questions [2] ;
        if(currentQuestionIndex < questions.length) {
            displayEl.textContent = questions[currentQuestionIndex];
        }*/
        // on top new changes glenn explained//
    
    
    
    /*}else{
         displayEl.textContent = 'Game Over!';
         setTimeout(function() {
            window.location="./index.html";
        }, 2000);
    }
        console.log(playerChoice); 
};
//add new


//

//this part Glenn help for understand my mistake
const getPlayerChoice = (event) => {
    return event.target.id;
};
document.querySelector('.img-placeholder').addEventListener('click', play);
document.querySelector('.image-placeholder').addEventListener('click', play);
const displayEl = document.querySelector('#display');

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', getPlayerChoice);
});

//this is only for one question find out how to switch questions 
//KEEP UR EYE ON BOTTOM
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        let buttonText = event.target.innerText;
        resultDisplayEl.textContent += buttonText;
        console.log(typeof playerChoice, typeof buttonText);
        
    });
});

//this i use if else cuz i have to chose between 2 a or b (also Glenn give hint)
//and Ashley give hint to understand so now im gonna look on google if ealse */



