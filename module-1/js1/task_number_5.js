'use strict';

const inChina= 'китай';
const priceInChina = 100;
const inChile = 'чили';
const priceInChile = 250;
const inAustralia = 'австралия';
const priceInAustralia = 170;
const inIndia = 'индия';
const priceInIndia = 80;
const inJamaica = 'ямайка';
const priceInJamaica = 120;
const deliveryArrangement = prompt('В какую страну вы хотите заказать доставку товара?');

switch (deliveryArrangement.toLowerCase()) {
    case inChina:
      alert(`Доставка в ${inChina} будет стоить ${priceInChina} кредитов`);
      break;
  
    case inChile:
      alert(`Доставка в ${inChile} будет стоить ${priceInChile} кредитов`);
      break;
  
    case inAustralia:
      alert(`Доставка в ${inAustralia} будет стоить ${priceInAustralia} кредитов`);
      break;
    
    case inIndia:
      alert(`Доставка в ${inIndia} будет стоить ${priceInIndia} кредитов`);
      break;

    case inJamaica:
      alert(`Доставка в ${inJamaica} будет стоить ${priceInJamaica} кредитов`);
      break;

    default:
      alert(`В вашей стране доставка не доступна!`);
    }