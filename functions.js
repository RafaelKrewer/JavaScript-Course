/* 
function1 () {
  console.log('Hello');
}

function1();
*/

let computerMove = '';
let result = '';

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber <= 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
}

document.getElementById('rock').onclick =

  function () {
    pickComputerMove();
    if (computerMove === 'Rock') {
      result = 'Draw';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
    alert(`You picked rock. The computer picked ${computerMove}. ${result}`);
  };



document.getElementById('paper').onclick =
  function () {
    pickComputerMove();

    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Draw';
    } else {
      result = 'You lose';
    }
    alert(`You picked paper. The computer picked ${computerMove}. ${result}`);
  };



document.getElementById('scissors').onclick =
  function () {
   pickComputerMove();
   
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Draw';
    }
    alert(`You picked scissors. The computer picked ${computerMove}. ${result}`);
  };

