const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playSelection, computerSelection) {
    
}

function playGame() {
  const computerChoice = getComputerChoice();
  
  console.log(`Computer chose ${computerChoice}`);
}

playGame();