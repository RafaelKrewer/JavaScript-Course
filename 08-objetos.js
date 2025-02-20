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

  const produto1 = {
    nome: 'meia',
    preço: 10,
    ['outra-coisa']: 'teste',
    avaliação: {     // Objeto aninhado dentro de objeto.
      nota: 5,
      número: 115;
    } 
      função: function função1() {
      console.log('teste');
    }
      };

  console.log(produto1.nome); // Vai mostrar 'meia'.
  console.log(produto1['nome']); // Vai mostrar 'meia'. (Outra forma de acessar o valor da propriedade.)
  console.log(produto1['outra-coisa']); // Vai mostrar 'teste'. Com parênteses pode usar o -, com . ele vai achar que é um menos.

  console.log(produto1.avaliação.nota); // Vai mostrar 5.
  console.log.função()

  object + function = method


  
  Manipulação de JSON em JavaScript
Serialização: Converter um objeto JavaScript em uma string JSON usando JSON.stringify().
const score = { wins: 0, losses: 0, ties: 0 };
const jsonString = JSON.stringify(score);

Desserialização: Converter uma string JSON em um objeto JavaScript usando JSON.parse().
const jsonString = '{"wins":0,"losses":0,"ties":0}';
const score = JSON.parse(jsonString);

JSON é uma ferramenta poderosa e versátil para trabalhar com dados estruturados em aplicações web e além.
*/

let computerMove = '';
let result = '';
let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 }; // Vai pegar o score que está no localStorage ou criar um novo objeto com wins, losses e ties.

if(score === null) {
  score = { wins: 0, losses: 0, ties: 0 };

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

document.getElementById('score').onclick = function () {
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
