let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
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

  localStorage.removeItem('score');
  updateScore();
}

document.getElementById('rock').onclick = function () {
  const playerMove = 'rock';
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
  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

document.getElementById('paper').onclick = function () {
  const playerMove = 'paper';
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

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

document.getElementById('scissors').onclick = function () {
  const playerMove = 'scissors';
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

  localStorage.setItem('score', JSON.stringify(score));
  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

updateScore();