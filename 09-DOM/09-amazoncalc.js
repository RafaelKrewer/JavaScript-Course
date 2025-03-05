function calculateTotal() {
  const inputElem = document.querySelector('.input');
  let cost = inputElem.value;

  if (cost < 40) {
    let cost = cost + 10;
  } else {
    let cost = cost;
  };

  document.querySelector('message').innerHTML = `Total: ${cost}`;
}


















