/* 
DOM: Document Object Model
- É uma interface que representa documentos HTML e XML através de objetos.
- Com o DOM, podemos manipular a estrutura, estilo e conteúdo de um documento.  
  document.object.innerHMTL // Pega o conteúdo HTML de um elemento.

  Método é uma função salva dentro de um objeto.
  Propriedade é um valor salvo dentro de um objeto.

  document.querySelector é usado para selecionar o primeiro elemento que corresponde a um seletor CSS especificado.

  */

console.log(document.querySelector('button')
  .innerHTML);
document.querySelector('button')
  .innerHTML = 'changed';

const buttonElem = document.querySelector('.js-button');

console.log(buttonElem)