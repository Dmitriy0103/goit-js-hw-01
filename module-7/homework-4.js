'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const increment = document.querySelector("[data-action='increment']");
    const decrement = document.querySelector("[data-action='decrement']");

    let counter = 0;
  
    const counterIncrement = () => {
        counter += 1;
        document.getElementById('value').textContent = counter;
    }
    const counterDecrement = () => {
        counter -= 1;
        document.getElementById('value').textContent = counter;
  }
  increment.addEventListener('click', counterIncrement);
  decrement.addEventListener('click', counterDecrement);
})

// const counterValue = document.querySelector("#value");

// const buttonDec = document.querySelector('button[data-action="decrement"]');
// const buttonInc = document.querySelector('button[data-action="increment"]');

// function decrement() {
//   --counterValue.textContent;
// }

// function increment() {
//   ++counterValue.textContent;
// }

// buttonDec.addEventListener("click", decrement);
// buttonInc.addEventListener("click", increment);