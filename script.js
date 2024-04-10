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
    console.log("You won!");
    return console.log(`Player score: ${++playerScore}`);
  } else if (((playerSelection === 'rock') && (computerSelection === 'paper')) ||
             ((playerSelection === 'paper') && (computerSelection === 'scissors')) ||
             ((playerSelection === 'scissors') && (computerSelection === 'rock'))) {
    console.log("Computer won!");
    return console.log(`PC score: ${++pcScore}`);
  } else {
    return "Error";
  }
}

let playerScore = 0;
let pcScore = 0;





function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(`Computer choice is: ${computerSelection}`);
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > pcScore) {
    console.log("You won the game")
  } else if (pcScore > playerScore) {
    console.log("PC won the game")
  } else {
    console.log("Nobody won")
  }
}

/*
There was some error: 
1. I called the function to get random computer choice twice, that's why my results don't correspond. 
2. It always return the else as result, prob cuz at const computerSelection there I put console.log there... 
*/

//const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
//const computerSelection = getComputerChoice();
//console.log(`Computer choice is: ${computerSelection}`);
//console.log(playRound(playerSelection, computerSelection));
playGame();

//the problem of it fucking played 5 times in a row with same result is cuz of the variable of playerSelection and computerSelection only initialized once, according to StackOverflow, moved them into the for-loop, that fixed it. -https://stackoverflow.com/questions/61103973/rock-paper-scissors-game-javascript