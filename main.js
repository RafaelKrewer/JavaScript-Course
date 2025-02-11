/* || = ou
! = inverte valor booleano

O operador ternário em JavaScript é uma forma concisa de escrever uma expressão condicional. Ele tem a seguinte sintaxe:
  condição ? expressão1 : expressão2
Se a condição for verdadeira, expressão1 será executada; caso contrário, expressão2 será executada.

  Valores Falsy
Em JavaScript, um valor é considerado falsy se for um dos seguintes:
false
0
"" (string vazia)
null
undefined
NaN

  Valores Truthy
Um valor é considerado truthy se não for um dos valores falsy.
true
42
"0"
"false"
[1, 2, 3]

  Operador lógico AND (&&)
É um operador que retorna true se ambos os operandos forem verdadeiros; caso contrário, ele retorna false.

  Função: 

function calculateTax(parameter1) {    
  console.log(parameter1 * 0.1);

calculateTax(1000);
               |
        |------|
        |
o parâmetro 1 vai funcionar como uma variável, só que vai ir depois do nome da função. O 1000 pode ser alterado.
  }

*/
let computerMove = '';
let result = '';

document.getElementById('rock').onclick =
  function () {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber <= 2 / 3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }

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
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber <= 2 / 3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }

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
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber <= 2 / 3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }

    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Draw';
    }
    alert(`You picked scissors. The computer picked ${computerMove}. ${result}`);
  };

