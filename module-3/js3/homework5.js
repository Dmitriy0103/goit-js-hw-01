'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function(products, key) {
    const values = [];
    for(const product of products){
        console.log(product[key]);

    }
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
getAllPropValues(products, 'name'); // ['Радар', 'Сканер', 'Дроид', 'Захват']
  
getAllPropValues(products, 'quantity'); // [4, 3, 7, 2]
  
getAllPropValues(products, 'category'); // []


//   Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. 
//   Возвращает массив значений определенного свойства prop из каждого объекта в массиве.