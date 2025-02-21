let randomNumber = Math.random();
let result = '';
let guess = 'Heads';

document.getElementById('cara').onclick = function () {
  randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';
  guess === result ? console.log('You win! Computer said: ' + result) : console.log('You lose! Computer said: ' + result);
}

if (guess === result) {
  console.log('You win! Computer said: ' + result);
} else {
  console.log('You lose! Computer said: ' + result);
}