const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
let currentValue = 0;

counter.addEventListener('click', event => {
  if (event.target.dataset.action === 'increment') {
    currentValue += 1;
  } else if (event.target.dataset.action === 'decrement') {
    currentValue -= 1;
  }
  
  counterValue.textContent = currentValue;
});