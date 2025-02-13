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


document.getElementById('rock').onclick =
  function () {
    const randomNumber = Math.random();

    computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
    result = computerMove === 'Rock' ? 'Draw' : computerMove === 'Paper' ? 'You lose' : 'You win';

    document.getElementById('message').textContent = `You picked rock. The computer picked ${computerMove}. ${result}`;
  };


document.getElementById('paper').onclick =
  function () {
    const randomNumber = Math.random();

    computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
    result = computerMove === 'Rock' ? 'You win' : computerMove === 'Paper' ? 'Draw' : 'You lose';

    document.getElementById('message').textContent = `You picked paper. The computer picked ${computerMove}. ${result}`;
  };


document.getElementById('scissors').onclick =
  function () {
    const randomNumber = Math.random();

    computerMove = randomNumber < 1 / 3 ? 'Rock' : randomNumber <= 2 / 3 ? 'Paper' : 'Scissors';
    result = computerMove === 'Rock' ? 'You lose' : computerMove === 'Paper' ? 'You win' : 'Draw';

    document.getElementById('message').textContent = `You picked scissors. The computer picked ${computerMove}. ${result}`;
  };

