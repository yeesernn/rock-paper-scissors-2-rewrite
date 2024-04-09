console.log("Hello World, test");

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 0.33) {
    return randomNumber = 'Rock'
  } else if (randomNumber > 0.33 && randomNumber < 0.66) {
    return randomNumber = 'Paper'
  } else {
    return randomNumber = 'Scissors'
  }
}

console.log(getComputerChoice());