// Define as variáveis globais
let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 }; // Recupera o placar do localStorage ou inicializa com zeros

// Função para atualizar o placar na interface do usuário
function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Função para escolher a jogada do computador aleatoriamente
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

// Evento de clique para resetar o placar
document.getElementById('resetScore').onclick = function () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem('score'); // Remove o placar do localStorage
  updateScore(); // Atualiza o placar na interface do usuário
}

// Evento de clique para a jogada "rock"
document.getElementById('rock').onclick = function () {
  const playerMove = 'rock'; // Define a jogada do jogador
  pickComputerMove(); // Escolhe a jogada do computador
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

  localStorage.setItem('score', JSON.stringify(score)); // Salva o placar no localStorage
  updateScore(); // Atualiza o placar na interface do usuário

  // Atualiza os elementos da interface do usuário com o resultado e as jogadas
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

// Evento de clique para a jogada "paper"
document.getElementById('paper').onclick = function () {
  const playerMove = 'paper'; // Define a jogada do jogador
  pickComputerMove(); // Escolhe a jogada do computador
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

  localStorage.setItem('score', JSON.stringify(score)); // Salva o placar no localStorage
  updateScore(); // Atualiza o placar na interface do usuário

  // Atualiza os elementos da interface do usuário com o resultado e as jogadas
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

// Evento de clique para a jogada "scissors"
document.getElementById('scissors').onclick = function () {
  const playerMove = 'scissors'; // Define a jogada do jogador
  pickComputerMove(); // Escolhe a jogada do computador
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

  localStorage.setItem('score', JSON.stringify(score)); // Salva o placar no localStorage
  updateScore(); // Atualiza o placar na interface do usuário

  // Atualiza os elementos da interface do usuário com o resultado e as jogadas
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
};

// Atualiza o placar na interface do usuário quando a página é carregada
updateScore();