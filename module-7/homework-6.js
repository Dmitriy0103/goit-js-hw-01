'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById("validation-input").onblur = function() {
    //     console.log(this.value.length);
    //     if (this.getAttribute('data-length') > this.value.length) { 
    //       this.classList.remove('valid');
    //       this.classList.add('invalid');
    //     } else {
    //       this.classList.remove('invalid');
    //       this.classList.add('valid');
    //     }
    //   };

    const input = document.querySelector("#validation-input");

    input.addEventListener("blur", () => {
      if (input.value.length === +input.dataset.length) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.add("invalid");
      }
    })
})

// document.addEventListener("DOMContentLoaded", () => {
//     const validInput = document.querySelector('#validation-input');
//     const attributeData = document.querySelector('[data-length="6"]');

//     validInput.addEventListener('focus', event => {
//         if(attributeData.getAttribute('data-length') > validInput.value.langth) {
//             validInput.classList.remove('valid');
//             validInput.classList.add('invalid');
//         } else {
//             validInput.classList.add('valid');
//             validInput.classList.remove('invalid');
//         }
//     })
// })