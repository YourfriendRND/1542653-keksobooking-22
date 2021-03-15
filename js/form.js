import {TYPES_OF_APARTMENT, MIN_PRICES, TOKYO_CENTER_COORDINATES, SELECT_OF_TWO_ROOMS_ON_PAGE, SELECT_OF_THREE_ROOMS_ON_PAGE, SELECT_OF_MAX_ROOMS_ON_PAGE} from './const.js';

const options = TYPES_OF_APARTMENT.reverse();
const fieldSelectionOfHousing = document.querySelector('#type');
const fieldTimeIn = document.querySelector('#timein');
const fieldTimeOut = document.querySelector('#timeout');
const fieldPrice = document.querySelector('#price');
const fieldTitle = document.querySelector('#title');
const fieldRoomsNumber = document.querySelector('#room_number');
const fieldGuestsNumber = document.querySelector('#capacity');
const optionsOfRoomsNumber = fieldRoomsNumber.querySelectorAll('option');
const optionsOfGuestsNumber = fieldGuestsNumber.querySelectorAll('option');



fieldTitle.addEventListener('input', function() {
  const message = (this.value.search(/\d/) != -1) ? ('Поле заполнено некорректно, удалите цифры из поля ввода') : ('');
  this.setCustomValidity(message);
  this.reportValidity();
})

const defaultAddress = document.querySelector('#address');
defaultAddress.setAttribute('readonly', true);
defaultAddress.value = TOKYO_CENTER_COORDINATES.lat + ', ' + TOKYO_CENTER_COORDINATES.lng;

fieldSelectionOfHousing.addEventListener('change', function() {
  for (let i = 0; i < options.length; i++) {
    if (this.value === options[i]) {
      fieldPrice.setAttribute('min', MIN_PRICES[i]);
      fieldPrice.placeholder = MIN_PRICES[i];
    }
  }
})

fieldPrice.addEventListener('input', function() {
  for (let i = 0; i < options.length; i++) {
    if (fieldSelectionOfHousing.value == options[i] && fieldPrice < MIN_PRICES[i]) {
      this.setCustomValidity('Пожалуйста, введите цену не менее ' + MIN_PRICES[i]);
    }
  }
  this.reportValidity();
})

fieldTimeIn.addEventListener('change', function() {
  fieldTimeOut.value = this.value;
})

fieldTimeOut.addEventListener('change', function() {
  fieldTimeIn.value = this.value;
})

for (let i = 0; i < optionsOfRoomsNumber.length; i++) {
  const attribute = (fieldRoomsNumber.value === optionsOfGuestsNumber[i].value) ? ('selected') : ('disabled');
  optionsOfGuestsNumber[i].setAttribute(attribute, true);
}

fieldRoomsNumber.addEventListener('change', function() {
  fieldGuestsNumber.value = this.value;
  if (this.value === SELECT_OF_MAX_ROOMS_ON_PAGE) {
    fieldGuestsNumber.value = 0;
  }
  for (let i = optionsOfGuestsNumber.length - 1; i >= 0; i--) {
    if (fieldGuestsNumber[i].value === fieldGuestsNumber.value) {
      optionsOfGuestsNumber[i].removeAttribute('disabled');
      if (fieldGuestsNumber.value === SELECT_OF_TWO_ROOMS_ON_PAGE || fieldGuestsNumber.value === SELECT_OF_THREE_ROOMS_ON_PAGE) {
        for (let j = 0; j < optionsOfGuestsNumber.length - 2; j++) {
          optionsOfGuestsNumber[j + 1].removeAttribute('disabled');
        }
      }
    }
    else {
      optionsOfGuestsNumber[i].setAttribute('disabled', true);
    }
  }
})
