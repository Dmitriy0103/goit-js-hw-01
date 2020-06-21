'use strict';

const isChina = 'Китай';
const isChile = 'Чили';
const isAustralia = 'Австралия';
const isIndia = 'Индия';
const isJamaica = 'Ямайка';
const deliveryArrangement = prompt('В какую страну вы хотите заказать доставку товара?');
let price;

switch (deliveryArrangement.toLowerCase()) {
    case (isChina.toLowerCase()):
      price = 100;
      alert(`Доставка в ${isChina} будет стоить ${prise} кредитов`);
      break;
  
    case (isChile.toLowerCase()):
      price = 250;
      alert(`Доставка в ${isChile} будет стоить ${prise} кредитов`);
      break;
  
    case (isAustralia.toLowerCase()):
      price = 170;
      alert(`Доставка в ${isAustralia} будет стоить ${prise} кредитов`);
      break;
    
    case (isIndia.toLowerCase()):
      price = 80;
      alert(`Доставка в ${isIndia} будет стоить ${prise} кредитов`);
      break;

    case (isJamaica.toLowerCase()):
      price = 120;
      alert(`Доставка в ${isJamaica} будет стоить ${prise} кредитов`);
      break;

    default:
      alert(`В вашей стране доставка не доступна!`);
    }