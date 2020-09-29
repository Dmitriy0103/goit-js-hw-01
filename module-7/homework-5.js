'use strict'

document.addEventListener("DOMContentLoaded", () => {
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const textSubstitution = "незнакомец";

input.addEventListener("input", event => {
    span.textContent =
    event.target.value === "" ? textSubstitution : event.target.value;
})

})

// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
