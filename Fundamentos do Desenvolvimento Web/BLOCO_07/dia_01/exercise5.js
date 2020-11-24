document.querySelector('.count').innerHTML = `Voce clickou ${parseInt(localStorage.getItem('clickCount'))} no botão`;

document.querySelector('button').addEventListener('click', () => {  
  let clickCount;
  if (isNaN(parseInt(localStorage.getItem('clickCount')))) {
    clickCount = 0; 
  } else {
    clickCount = parseInt(localStorage.getItem('clickCount'));
  }  
  let newValue = clickCount + 1;  
  localStorage.setItem('clickCount', newValue);
  document.querySelector('.count').innerHTML = `Voce clickou ${newValue} no botão`;
});