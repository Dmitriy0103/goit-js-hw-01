'use strict';

const countTotalSalary = function(employees) {
 let total = 0;
 const employeesValues = Object.values(employees);
//  console.log(employeesValues);
 for(const value of employeesValues){
     total += value;
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