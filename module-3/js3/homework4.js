'use strict';

const countTotalSalary = function(employees) {
 let total = 0;
 for(const value in employees){
     total += employees[value];
 }
 console.log(total);
  };

countTotalSalary({}); // 0
  
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    });
 // 330
  
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    });
 // 400



//   Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//    Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".