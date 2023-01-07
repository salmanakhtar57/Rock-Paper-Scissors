const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices =  document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getResult()
}))

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2 ) {
        computerChoice = 'paper'
    } 
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a tie';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you win';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'you lost';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'you win';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'you lost';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'you win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'you lost';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'you lost';
    }

    resultDisplay.innerHTML = result
}