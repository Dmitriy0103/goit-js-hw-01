'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector('#ingredients');

ingredients.forEach(element => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += element;
});
})