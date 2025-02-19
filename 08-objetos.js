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

  score.wins++; // Adiciona 1 ao valor de wins.

  score.wins = score.wins + 1; // Adiciona 1 ao valor de wins.
  score.wins += 1; // Adiciona 1 ao valor de wins. (Mesma coisa que o de cima, só que menor.)
*/

let computerMove = '';
let result = '';
let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

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
  alert(`You picked rock. The computer picked ${computerMove}. ${result}. 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
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
  alert(`You picked paper. The computer picked ${computerMove}. ${result}. 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)

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
  alert(`You picked scissors. The computer picked ${computerMove}. ${result}. 
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`)
};

document.getElementById('score').onclick = function () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  alert('Score has been reset');
}
