function userPlay() {
  let hand = prompt('Rock, Paper, or Scissors?');
  return hand.toLowerCase();
}

function computerPlay() {
  let hand = ['rock', 'paper', 'scissors'];
  let random = Math.floor((Math.random() * 3));
  return hand[random].toLowerCase();
}

/* Plays a round and returns score */
function playRound(playerSelection, computerSelection) {
  /*
    Return  1 if player wins
    Return  0 if tie
    Return -1 if computer wins
  */
  if(computerSelection === playerSelection) { // tie
    console.log("It's a tie ...");
    return 0;
  }
  else if(computerSelection === 'rock') {
    if(playerSelection === 'paper') {
      console.log("You win! Paper beats Rock");
      return 1;
    }
    else { // playerSelection === 'scissors'
      console.log("Computer wins! Rock beats Scissors");
      return -1;
    }
  }
  else if (computerSelection === 'paper') {
    if(playerSelection === 'scissors') {
      console.log("You win! Scissors beat Paper");
      return 1;
    }
    else { // playerSelection === 'rock'
      console.log("Computer wins! Paper beats Rock");
      return -1;
    }
  }
  else if (computerSelection === 'scissors') {
    if(playerSelection === 'rock') {
      console.log("You win! Rock beats Scissors");
      return 1;
    }
    else { // playerSelection === 'paper'
      console.log("Computer wins! Scissors beat Paper");
      return -1;
    }
  }
  else { // unknown input
    console.log("Error! Invalid input. Counted as a tie.");
    return 0;
  }
}

function game() {
  const numOfPlays = prompt("How many hands do you want to play?");
  let playerSelection,
      computerSelection,
      score = 0;
  
  // play loop
  for (let i = 0; i < numOfPlays; i++) {
    playerSelection = userPlay();
    computerSelection = computerPlay();
    score += playRound(playerSelection, computerSelection);
  }
  
  if (score > 0) { // player wins
    console.log("YOU WIN by " + score + " points! :D");
  }
  else if (score < 0) { // computer wins
    console.log("COMPUTER WINS! by " + (score * -1) + " points! ;)");
  }
  else { // tie
    console.log("It's a tie :0");
  }
  
  return "GAME OVER";
}
