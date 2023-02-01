function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Its a tie"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win"
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win"
  } else {
    return "You lose"
  }
}