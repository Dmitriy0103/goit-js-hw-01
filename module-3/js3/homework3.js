'use strict';

const findBestEmployee = function(employees) {
    let total = 0;
    for(const key in employees){
        // console.log(key ,employees[key]);
        if(total < employees[key]){
           total = employees[key];
        }
    }
    console.log(total);
  };
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    });
   // lorence
  

    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    });
 // mango
  

    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    });
 // lux



//   Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач).
//  Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".