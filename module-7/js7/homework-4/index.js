'use strict'

document.addEventListener("DOMContentLoaded", () => {
    const increment = document.querySelector("[data-action='increment']");
    const decrement = document.querySelector("[data-action='decrement']");
    const span = document.querySelector('#value');
    const div = document.querySelector('#counter');
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