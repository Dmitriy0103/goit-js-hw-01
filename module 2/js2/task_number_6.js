'use strict';

   let input;
   let total = 0;
   const numbers = [];

   while(input !== null){
      input = prompt('Введите пожалуйста число!');
   if(input === null){
      break;
   }
   if(isNaN(input)){
    alert('Было введено не число, попробуйте еще раз!');
      continue;
   }else {
      numbers.push(Number(input));
   }
}
for(const number of numbers){
   total += number;
}
alert(`Общая сумма чисел равна ${total}`);


// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. 
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;