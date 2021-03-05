import {TYPES_OF_APARTMENT, MIN_PRICES, TOKYO_CENTER_COORDINATES} from './const.js';

const options = TYPES_OF_APARTMENT.reverse();
const fieldSelectionOfHousing = document.querySelector('#type');
const fieldTimeIn = document.querySelector('#timein');
const fieldTimeOut = document.querySelector('#timeout');
const fieldOfPrice = document.querySelector('#price');

const defaultAddress = document.querySelector('#address');
defaultAddress.setAttribute('readonly', true);
defaultAddress.value = TOKYO_CENTER_COORDINATES.lat + ', ' + TOKYO_CENTER_COORDINATES.lng;

fieldSelectionOfHousing.addEventListener('change', function() {
  for (let i = 0; i < options.length; i++) {
    if (this.value === options[i]) {
      fieldOfPrice.setAttribute('min', MIN_PRICES[i]);
      fieldOfPrice.placeholder = MIN_PRICES[i];
    }
  }
})

fieldTimeIn.addEventListener('change', function() {
  fieldTimeOut.value = this.value;
})

fieldTimeOut.addEventListener('change', function() {
  fieldTimeIn.value = this.value;
})
