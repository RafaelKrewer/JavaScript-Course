document.addEventListener('DOMContentLoaded', function () {
  function calculateTotal() {
    const inputElem = document.querySelector('.input'); // Seleciona o elemento de entrada
    let cost = parseFloat(inputElem.value); // Converte o valor de entrada para um número de ponto flutuante

    // Verifica se o valor de entrada é um número válido
    if (isNaN(cost)) {
      document.querySelector('.message').innerHTML = 'Please enter a valid number'; // Exibe uma mensagem de erro se o valor não for um número
      return; // Sai da função se o valor não for um número
    }

    // Adiciona o custo de envio de $10 se o valor for menor que $40
    if (cost < 40) {
      cost += 10; // Adiciona o custo de envio de $10
    }

    // Atualiza a mensagem com o custo total
    document.querySelector('.message').innerHTML = `Total: $${cost.toFixed(2)}`;
  }

  // Adiciona o evento de clique ao botão
  document.getElementById('calculateButton').addEventListener('click', calculateTotal);

  document.getElementById('resetValue').addEventListener('click', function () {
    document.querySelector('.input').value = ''; // Limpa o valor de entrada
    document.querySelector('.message').innerHTML = ''; // Limpa a mensagem
  });
});