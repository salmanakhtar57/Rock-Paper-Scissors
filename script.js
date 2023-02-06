const buttons = document.querySelectorAll('button');
const resultDisplay = document.createElement('div');
document.body.appendChild(resultDisplay);

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    resultDisplay.innerHTML = result;
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
    return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
  } else {
    return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
  }
}

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   let playerSelection = prompt("Choose one: Rock, Paper or Scissors: ").toLowerCase();
//   let computerSelection = getComputerChoice();
    
//   let result = playRound(playerSelection, computerSelection);
//   console.log(result);

//   if(result.includes('win')) {
//     playerScore++;
//   } else if (result.includes('lose')) {
//     computerScore++;
//   }

//   console.log(`Final score: ${playerScore} - ${computerScore}`);
// }

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let i=0; i<5; i++) {
    let playerSelection = prompt("Choose one: Rock, Paper or Scissors: ").toLowerCase();
    let computerSelection = getComputerChoice();
    
    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if(result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`Final score: ${playerScore} - ${computerScore}. You win!`);
  } else if (playerScore < computerScore) {
    console.log(`Final score: ${playerScore} - ${computerScore}. You lose!`);
  } else {
    console.log(`Final score: ${playerScore} - ${computerScore}. It's a draw!`);
  }
}





