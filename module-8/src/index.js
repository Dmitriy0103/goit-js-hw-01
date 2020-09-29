'use strict'

import images from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
   const listGalery = document.querySelector('.gallery');
   const openModal = document.querySelector('.lightbox');
   const modalImage = document.querySelector('.lightbox__image');
   const backdropRef = document.querySelector('.lightbox__content');
   const closeModalBtn = document.querySelector('.lightbox__button');
   

//    images.map(element => {
//        const listElement = document.createElement('li');
//        listElement.classList.add("gallery__item");
//        const link = document.createElement('a');
//        link.classList.add("gallery__link");
//        link.setAttribute('href', element.original);
//        const creatPictureElem = document.createElement('img');
//        creatPictureElem.classList.add("gallery__image");
//        creatPictureElem.setAttribute('src', element.preview);
//        creatPictureElem.setAttribute('data-source', element.original);
//        creatPictureElem.setAttribute('alt', element.description);
//        listGalery.appendChild(listElement);
//        listElement.appendChild(link);
//        link.appendChild(creatPictureElem);

//    })

      images.map(elem => {
          listGalery.insertAdjacentHTML('beforeEnd', 
          `<li class="gallery__item">
           <a class="gallery__link" href="${elem.original}" >
               <img
                class="gallery__image"
                src="${elem.preview}"
                 data-source="${elem.original}"
                 alt="${elem.description}"
               />
             </a>
           </li>`);

      })


   listGalery.addEventListener('click', onListGalery);
   closeModalBtn.addEventListener('click', onCloseModalBtn);
   backdropRef.addEventListener('click', onBackdropRef);


function onListGalery() {
    event.preventDefault();
    openModal.classList.add('is-open');
    modalImage.setAttribute('src', event.target.getAttribute('data-source'));

    window.addEventListener('keydown', onPressEscape);
}

function onCloseModalBtn() {
    openModal.classList.remove('is-open');
    modalImage.setAttribute('src', event.target.getAttribute(''));

    window.removeEventListener('keydown', onPressEscape);
}

function onBackdropRef() {
    if(event.target === event.currentTarget) {
        onCloseModalBtn();
       }
}

function onPressEscape() {
    if(event.code === 'Escape'){
        onCloseModalBtn();
    }
}
})

