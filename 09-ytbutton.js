function subscribe () {
  const buttonElement = document.querySelector('.jsbutton');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
  } else {
    buttonElement.innerText = 'Subscribe';
  }
}


