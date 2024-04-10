console.log("Hello World, test");

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 0.33) {
    return randomNumber = 'rock'
  } else if (randomNumber > 0.33 && randomNumber < 0.66) {
    return randomNumber = 'paper'
  } else {
    return randomNumber = 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Its a draw";
  } else if (((playerSelection === 'rock') && (computerSelection === 'scissors')) ||
             ((playerSelection === 'paper') && (computerSelection === 'rock')) ||
             ((playerSelection === 'scissors') && (computerSelection === 'paper'))) {
    return "You won!";
  } else if (((playerSelection === 'rock') && (computerSelection === 'paper')) ||
             ((playerSelection === 'paper') && (computerSelection === 'scissors')) ||
             ((playerSelection === 'scissors') && (computerSelection === 'rock'))) {
    return "Computer won!";
  } else {
    return "Error";
  }
}

/*
There was some error: 
1. I called the function to get random computer choice twice, that's why my results don't correspond. 
2. It always return the else as result, prob cuz at const computerSelection there I put console.log there... 
*/
const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(`Computer choice is: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));