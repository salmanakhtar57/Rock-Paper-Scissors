function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // const choices = ['rock', 'paper', 'scissors']

  for(let i=0; i<5; i++) {
    let playerSelection = prompt("Choose one: Rock, Paper or Scissors: ");
    let computerSelection = getComputerChoice();
    
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if(result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }
  //now telling the score of the winner or draw score incase it is draw.

  if (playerScore > computerScore) {
    console.log(`Final score: ${playerScore} - ${computerScore}. You win!`);
  } else if (playerScore < computerScore) {
    console.log(`Final score: ${playerScore} - ${computerScore}. You loss!`);
  } else {
    console.log(`Final score: ${playerScore} - ${computerScore}. It's a draw!`);
  }
}

console.log(game())
