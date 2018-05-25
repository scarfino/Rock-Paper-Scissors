/*
Rock Paper Scisscors game versus "AI"
@scarfino 2018
*/
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error!');
  }
}

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

console.log(getUserChoice('Paper')); //print users choice
console.log(getComputerChoice()); // print rock, paper or scissors
