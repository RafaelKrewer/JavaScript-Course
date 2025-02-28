let computerMove = '';
let result = '';

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber <= 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
}

function playGame(playerMove) {
  pickComputerMove();
  if (computerMove === playerMove) {
    result = 'Draw';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win';
  } else {
    result = 'You lose';
  }
  document.getElementById('message').textContent = `You picked ${playerMove}. The computer picked ${computerMove}. ${result}`;
}

document.getElementById('rock').onclick = () => playGame('rock');
document.getElementById('paper').onclick = () => playGame('paper');
document.getElementById('scissors').onclick = () => playGame('scissors');