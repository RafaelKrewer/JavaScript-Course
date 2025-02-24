document.addEventListener('DOMContentLoaded', function () {
  let result = '';
  let guess = 'Heads';
  let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

  document.getElementById('heads').onclick = function () {
    let randomNumber = Math.random();
    randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';
    if (guess === result) {
      score.wins++;
      alert(`You win! Computer said: ${result} 
Wins: ${score.wins}, Losses: ${score.losses}`); 
    } else {
      score.losses++;
      alert(`You lose! Computer said: ${result}. 
Wins: ${score.wins}, Losses: ${score.losses}`);
    }
    localStorage.setItem('score', JSON.stringify(score));
  };

  document.getElementById('tails').onclick = function () {
    let randomNumber = Math.random();
    randomNumber < 0.5 ? result = 'Heads' : result = 'Tails';
    if (guess === result) {
      score.wins++;
      alert(`You lose! Computer said: ${result} 
Wins: ${score.wins}, Losses: ${score.losses}`); 
    } else {
      score.losses++;
      alert(`You win! Computer said: ${result}. 
Wins: ${score.wins}, Losses: ${score.losses}`);
    }
    localStorage.setItem('score', JSON.stringify(score));
  };
});