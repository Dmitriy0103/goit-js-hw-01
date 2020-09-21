'use strict'

document.addEventListener("DOMContentLoaded", () => {
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener("input", event => {
    span.textContent = event.target.value;
    // input.textContent = "" ? span.textContent = "незнакомец" : span.textContent = event.target.value;
    console.log();
})

})

// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
