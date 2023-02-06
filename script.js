const buttons = document.querySelectorAll('button');
const resultMESSAGE = document.querySelector('#result-message');
const scoreDisplay = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
    if (playerScore == 5 || computerScore == 5) return;
    
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    resultMESSAGE.innerHTML = result;

    if(result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }

    scoreDisplay.innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`;

    if (playerScore == 5){
      resultMESSAGE.innerHTML = `Final score: ${playerScore} - ${computerScore}. You win the game!`;
    } else if (computerScore == 5){
        resultMESSAGE.innerHTML = `Final score: ${playerScore} - ${computerScore}. You lose the game!`;
    }
  });
});

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  choices = ['rock', 'paper', 'scissors']
  
  if (!choices.includes(playerSelection)) {
    return "Invalid choice! Please choose rock, paper or scissors.";
  } else if (playerSelection === computerSelection) {
    return "Its a draw";
  } else if (playerSelection === "rock"     && computerSelection === "scissors" ||
             playerSelection === "paper"    && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    return `Your Choice "${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}" beats computer Choice "${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}" <br> You win!`
  } else {
    return `Computer Choice "${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}" beats your choice "${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}" <br> You lose`
  }
}