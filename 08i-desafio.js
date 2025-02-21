let randomNumber = Math.random();
let result = '';
let guess = 'Heads';

console.log('Random number: ' + randomNumber.toFixed(1));
randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';

guess === result ? console.log('You win! Computer said: ' + result) : console.log('You lose! Computer said: ' + result);