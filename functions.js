let computerMove = '';
let result = '';


document.getElementById('rock').onclick = function () {
  const randomNumber = Math.random();

  computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
  result = computerMove === 'Rock' ? 'Draw' : computerMove === 'Paper' ? 'You lose' : 'You win';

  document.getElementById('message').textContent = `You picked rock. The computer picked ${computerMove}. ${result}`;
};


document.getElementById('paper').onclick = function () {
  const randomNumber = Math.random();

  computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
  result = computerMove === 'Rock' ? 'You win' : computerMove === 'Paper' ? 'Draw' : 'You lose';

  document.getElementById('message').textContent = `You picked paper. The computer picked ${computerMove}. ${result}`;
};


document.getElementById('scissors').onclick = function () {
  const randomNumber = Math.random();

  computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
  result = computerMove === 'Rock' ? 'You lose' : computerMove === 'Paper' ? 'You win' : 'Draw';

  document.getElementById('message').textContent = `You picked scissors. The computer picked ${computerMove}. ${result}`;
};