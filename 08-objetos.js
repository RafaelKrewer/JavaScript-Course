/*
const produto = {
    (propriedade)nome: 'meia',
(propriedade também) preço: 10
  };

console.log(produto);
console.log(produto.nome);
console.log(produto.preço);

produto.nome = 'meia cinza';
console.log(produto); 

    Agora com o novo valor, vai mostrar 'meia cinza'.

  produto.propiedadeNova = true; // Cria uma nova propriedade.

delete produto.propriedadeNova; // Deleta a propriedade.

  Dá pra botar no objeto uma array (lista):
  const produto = {
    nome: 'meia',
    preço: 10, 
    tamanho: ['P', 'M', 'G'] - array com 3 elementos. Arrays começam com [].
  };

  document.querySelector é usado para selecionar o primeiro elemento que corresponde a um seletor CSS especificado.

*/

let computerMove = '';
let result = '';

// Função para o botão "rock"
document.getElementById('rock').onclick = function () {
  // Gera um número aleatório entre 0 e 1
  const randomNumber = Math.random();

  // Define a jogada do computador com base no número aleatório
  if (randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber <= 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  // Define o resultado do jogo com base na jogada do computador
  if (computerMove === 'Rock') {
    result = 'Draw';
  } else if (computerMove === 'Paper') {
    result = 'You lose';
  } else {
    result = 'You win';
  }

  // Exibe a mensagem com a jogada do jogador, a jogada do computador e o resultado
  document.getElementById('message').textContent = `You picked rock. The computer picked ${computerMove}. ${result}`;
};

// Função para o botão "paper"
document.getElementById('paper').onclick = function () {
  // Gera um número aleatório entre 0 e 1
  const randomNumber = Math.random();

  // Define a jogada do computador com base no número aleatório
  if (randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber <= 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  // Define o resultado do jogo com base na jogada do computador
  if (computerMove === 'Rock') {
    result = 'You win';
  } else if (computerMove === 'Paper') {
    result = 'Draw';
  } else {
    result = 'You lose';
  }

  // Exibe a mensagem com a jogada do jogador, a jogada do computador e o resultado
  document.getElementById('message').textContent = `You picked paper. The computer picked ${computerMove}. ${result}`;
};

// Função para o botão "scissors"
document.getElementById('scissors').onclick = function () {
  // Gera um número aleatório entre 0 e 1
  const randomNumber = Math.random();

  // Define a jogada do computador com base no número aleatório
  if (randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber <= 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  // Define o resultado do jogo com base na jogada do computador
  if (computerMove === 'Rock') {
    result = 'You lose';
  } else if (computerMove === 'Paper') {
    result = 'You win';
  } else {
    result = 'Draw';
  }

  // Exibe a mensagem com a jogada do jogador, a jogada do computador e o resultado
  document.getElementById('message').textContent = `You picked scissors. The computer picked ${computerMove}. ${result}`;
};

