'use strict'

import images from './gallery-items.js';



   const listGalery = document.querySelector('.gallery');
   const openModal = document.querySelector('.lightbox');
   const modalImage = document.querySelector('.lightbox__image');
   const backdropRef = document.querySelector('.lightbox__content');
   const closeModalBtn = document.querySelector('.lightbox__button');


   const createGalleryElement = ({ preview, original, description }) => 
    `<li class="gallery__item">
       <a class="gallery__link" href="${original}" >
           <img class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"/></a></li>`;
        
    const allGalery = images.reduce((acc,item) => acc + createGalleryElement(item), '');
   

   listGalery.insertAdjacentHTML('beforeend', allGalery);
   listGalery.addEventListener('click', onListGalery);
   closeModalBtn.addEventListener('click', onCloseModalBtn);
   backdropRef.addEventListener('click', onBackdropRef);


function onListGalery(event) {
    event.preventDefault();
    openModal.classList.add('is-open');
    modalImage.setAttribute('src', event.target.getAttribute('data-source'));

    window.addEventListener('keydown', onPressEscape);
}

function onCloseModalBtn(event) {
    openModal.classList.remove('is-open');
    modalImage.setAttribute('src', event.target.getAttribute(''));

    window.removeEventListener('keydown', onPressEscape);
}

function onBackdropRef(event) {
    if(event.target === event.currentTarget) {
        onCloseModalBtn();
       }
}

function onPressEscape(event) {
    if(event.code === 'Escape'){
        onCloseModalBtn();
    }
}


