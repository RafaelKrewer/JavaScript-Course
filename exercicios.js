/*
// Exercício 1: Funções
let randomNumber = Math.random();
let result = '';
let guess = 'Heads';

console.log('Random number: ' + randomNumber.toFixed(1));
randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';

guess === result ? console.log('You win! Computer said: ' + result) : console.log('You lose! Computer said: ' + result);

*/

// Exercício 2: Objetos


const pessoa = {
  nome: 'João',
  altura: 1.80,
  peso: 90,
  idade: 20,
}

pessoa.hobbies = ['futebol', ' xadrez', ' programação,']; //array

const pessoa2 = {
  nome: 'Maria',
  altura: 1.65,
  peso: 57,
  idade: 14,
  hobbies: [' natação', ' leitura', ' música'], 
}

console.log(pessoa.hobbies + pessoa2.hobbies);