import {TYPES_OF_APARTMENT} from './const.js';

const options = TYPES_OF_APARTMENT.reverse();
const fieldSelectionOfHousing = document.querySelector('#type');
const fieldTimeIn = document.querySelector('#timein');
const fieldTimeOut = document.querySelector('#timeout');
const fieldOfPrice = document.querySelector('#price');

const minPrices = [0, 1000, 5000, 10000];

fieldSelectionOfHousing.addEventListener('change', function() {
  for (let i = 0; i < options.length; i++) {
    if (this.value === options[i]) {
      fieldOfPrice.setAttribute('min', minPrices[i]);
      fieldOfPrice.placeholder = minPrices[i];
    }
  }
})

fieldTimeIn.addEventListener('change', function() {
  fieldTimeOut.value = this.value;
})

fieldTimeOut.addEventListener('change', function() {
  fieldTimeIn.value = this.value;
})
