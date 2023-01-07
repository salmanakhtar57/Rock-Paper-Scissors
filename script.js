const choices = ['rock', 'paper', 'scissors']

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'The match is drawn.'
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ){
        return "Congratulations! You won!"
    } else {
        "You loss! Game over."
    }
}

function playGame() {
    const playerChoice = getRandomChoice();
    const computerChoice = getRandomChoice();
    const winner = getWinner(playerChoice, computerChoice);

    console.log(`Your choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`${winner}`);
}

playGame()

// function getComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
//     if (randomNumber === 1) {
//         computerChoice = 'rock';
//     }
//     if (randomNumber === 2 ) {
//         computerChoice = 'paper'
//     } 
//     if (randomNumber === 3) {
//         computerChoice = 'scissors'
//     }
//     computerChoiceDisplay.innerHTML = computerChoice
// }

// function getResult() {
//     if (computerChoice === userChoice) {
//         result = 'Its a tie';
//     }
//     if (computerChoice === 'rock' && userChoice === 'paper') {
//         result = 'you win';
//     }
//     if (computerChoice === 'rock' && userChoice === 'scissors') {
//         result = 'you lost';
//     }
//     if (computerChoice === 'paper' && userChoice === 'scissors') {
//         result = 'you win';
//     }
//     if (computerChoice === 'paper' && userChoice === 'rock') {
//         result = 'you lost';
//     }
//     if (computerChoice === 'scissors' && userChoice === 'rock') {
//         result = 'you win';
//     }
//     if (computerChoice === 'scissors' && userChoice === 'paper') {
//         result = 'you lost';
//     }
//     if (computerChoice === 'rock' && userChoice === 'paper') {
//         result = 'you lost';
//     }

//     resultDisplay.innerHTML = result
// }