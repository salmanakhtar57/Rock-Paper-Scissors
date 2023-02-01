function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice())

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

console.log(playRound('Paper', 'Rock'))


function game() {
  let playerScore = 0;
  let computerScore = 0;
  const choices = ['rock', 'paper', 'scissors']

  for(let i=0; i<5; i++) {
    let playerSelection = prompt("Choose rock, paper or scissors: ");
    let computerSelection = choices[Math.floor(Math.random() * 3)];
    
    let result = playRound(playerSelection, computerSelection);
    console.log(result)
  }
}

game()
