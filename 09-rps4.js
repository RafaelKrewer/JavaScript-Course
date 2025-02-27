let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

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

document.getElementById('resetScore').onclick = function () {

  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert('Score has been reset');

  localStorage.removeItem('score');
}

document.getElementById('rock').onclick = function () {
  pickComputerMove();
  if (computerMove === 'rock') {
    result = 'Draw';
    score.ties++;
  } else if (computerMove === 'paper') {
    result = 'You lose';
    score.losses++;
  } else {
    result = 'You win';
    score.wins++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked rock. The computer picked ${computerMove}. ${result}.`);
  updateScore();
};

document.getElementById('paper').onclick = function () {
  pickComputerMove();
  if (computerMove === 'rock') {
    result = 'You win';
    score.wins++;
  } else if (computerMove === 'paper') {
    result = 'Draw';
    score.ties++;
  } else {
    result = 'You lose';
    score.losses++;
  }
  alert(`You picked paper. The computer picked ${computerMove}. ${result}.`);
  updateScore();
};

document.getElementById('scissors').onclick = function () {
  pickComputerMove();
  if (computerMove === 'rock') {
    result = 'You lose';
    score.losses++;
  } else if (computerMove === 'paper') {
    result = 'You win';
    score.wins++;
  } else {
    result = 'Draw';
    score.ties++;
  }
  alert(`You picked scissors. The computer picked ${computerMove}. ${result}.`);
  updateScore();
};
