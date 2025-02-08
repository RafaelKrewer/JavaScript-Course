/* || = ou
! = inverte valor booleano*/

document.getElementById('rock').onclick = function () {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    console.log('Rock');
  } else if (randomNumber <= 2/3) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  }
};

document.getElementById('paper').onclick = 
function () {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    console.log('Rock');
  } else if (randomNumber <= 2/3) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  }
};

document.getElementById('scissors').onclick = function () {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    console.log('Rock');
  } else if (randomNumber <= 2/3) {
    console.log('Paper');
  } else {
    console.log('Scissors');
  }
};