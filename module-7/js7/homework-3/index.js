'use strict'

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector('#gallery');

  images.forEach(elem => {
ul.insertAdjacentHTML('beforeEnd', `<li><img src="${elem.url}" alt="${elem.alt}"></li>`);
});
})

// for(let element of images) {
//   ul.insertAdjacentHTML('beforeEnd', `<li><img src="${element.url}" alt="${element.alt}"></li>`);
// }