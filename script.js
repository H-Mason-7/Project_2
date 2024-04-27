const buttons = document.querySelector("button");
const body = document.querySelector("body");

const firstButton = document.querySelector('#buttonRock');
const secondButton = document.querySelector('#buttonPaper');
const thirdButton = document.querySelector('#buttonScissors');

const h3WinsTag = document.querySelector("#winsTag");
const h3TiedTag = document.querySelector("#tiedTag");
const h3LossesTag = document.querySelector("#lossesTag");

let userChoice;
let computerChoice;

let userScore = 0;
let tiedScore = 0;
let computerScore = 0;

firstButton.addEventListener('click', responseToClick1) 
function responseToClick1() {
    let userChoice = 'Rock';
    let computerChoice;
let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }

    if (userChoice === computerChoice) {
        tiedScore++;
        h3TiedTag.textContent = 'Tied: ' + tiedScore;
    } 

    if (userChoice === 'Rock' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Rock' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    }

    if (userChoice === 'Paper' && randomNumber === 0) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Paper' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } 

    if (userChoice === 'Scissors' && randomNumber === 0) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } else if (userChoice === 'Scissors' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    }
}

secondButton.addEventListener('click', responseToClick2)
function responseToClick2() {
    let userChoice = 'Paper';
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    
    if (userChoice === computerChoice) {
        tiedScore++;
        h3TiedTag.textContent = 'Tied: ' + tiedScore;
    } 
    
    if (userChoice === 'Rock' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Rock' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    }
    
    if (userChoice === 'Paper' && randomNumber === 0) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Paper' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } 
    
    if (userChoice === 'Scissors' && randomNumber === 0) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } else if (userChoice === 'Scissors' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    }
}
thirdButton.addEventListener('click', responseToClick3)
function responseToClick3() {
    let userChoice = 'Scissors';
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    
    if (userChoice === computerChoice) {
        tiedScore++;
        h3TiedTag.textContent = 'Tied: ' + tiedScore;
    } 
    
    if (userChoice === 'Rock' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Rock' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    }
    
    if (userChoice === 'Paper' && randomNumber === 0) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    } else if (userChoice === 'Paper' && randomNumber === 2) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } 
    
    if (userChoice === 'Scissors' && randomNumber === 0) {
        computerScore++;
        h3LossesTag.textContent = 'Losses: ' + computerScore;
    } else if (userChoice === 'Scissors' && randomNumber === 1) {
        userScore++;
        h3WinsTag.textContent = 'Wins: ' + userScore;
    }
}

