'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
//   const calculateTotalPrice = function(products, productName) {
//       for(const product of products){
//           if(productName === product.name){
            
//             console.log(product.price * product.quantity);
//           }
//     }
//   };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
//   console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
//   console.log(calculateTotalPrice(products, 'Дроид')); // 2800


//   Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). 
//   Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const calculateTotalPrice = function(products, productName) {
    for(let i = 0; i < products.length; i += 1){
        if(products[i].name === productName){
            console.log(products[i].price * products[i].quantity);
        }
    }
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800