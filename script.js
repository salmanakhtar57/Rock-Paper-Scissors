function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices(randomNumber);
}

console.log(getComputerChoice());

// function randomSelection() {
//     const randomIndex = Math.random * SELECTIONS.length;
//     return SELECTIONS(randomIndex)
// }


// function playRound(playerSelection, computerSelection) {

// }

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// function game(playRound) {
//     for (let i=0; i < 5; i++) {

//     }
// }