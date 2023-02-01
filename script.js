function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Its a draw";
  } else if (playerSelection === "Rock"     && computerSelection === "Scissors" ||
             playerSelection === "Paper"    && computerSelection === "Rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }
}

// console.log(playRound('Paper', 'Rock'))

