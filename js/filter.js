import {extraMarker} from './create-map.js';
import {DEFAULT_PARAMETERS, DEFAULT_PRICE_FOR_HOUSING, RENDERING_DELAY} from './const.js';

const formFilter = document.querySelector('.map__filters');
const selectOfHousingType = formFilter.querySelector('#housing-type');
const selectOfPriceType = formFilter.querySelector('#housing-price');
const optionsOfPriceType = selectOfPriceType.querySelectorAll('option');
const selectOfRoomNumber = formFilter.querySelector('#housing-rooms');
const selectOfGuestNumber = formFilter.querySelector('#housing-guests');
const selectOfHousingFeature = formFilter.querySelector('.map__features');

const filterByHousingType = function(object) {
  return (selectOfHousingType.value === object.offer.type || selectOfHousingType.value === DEFAULT_PARAMETERS.filterSelect)
}

const filterByPriceType = function(object) {
  if (selectOfPriceType.value === optionsOfPriceType[3].value && object.offer.price > DEFAULT_PRICE_FOR_HOUSING.high) {
    return true;
  }
  else if (selectOfPriceType.value === optionsOfPriceType[2].value && object.offer.price < DEFAULT_PRICE_FOR_HOUSING.low) {
    return true;
  }
  else if (selectOfPriceType.value === optionsOfPriceType[1].value && object.offer.price >= DEFAULT_PRICE_FOR_HOUSING.low && object.offer.price <= DEFAULT_PRICE_FOR_HOUSING.high) {
    return true;
  }
  else if (selectOfPriceType.value === DEFAULT_PARAMETERS.filterSelect) {
    return true;
  }
}

const filterByRoomNumber = function (object) {
  if (selectOfRoomNumber.value == object.offer.rooms || selectOfRoomNumber.value === DEFAULT_PARAMETERS.filterSelect) {
    return true;
  }
}

const filterByGuestNumber = function (object) {
  if (selectOfGuestNumber.value == object.offer.guests || selectOfGuestNumber.value === DEFAULT_PARAMETERS.filterSelect) {
    return true;
  }
}

const filterByHousingFeature = function (object) {
  const checkedFeatures = Array.from(selectOfHousingFeature.querySelectorAll('input:checked'));
  if (!checkedFeatures.length) {
    return true;
  }
  const featureValues = [];
  checkedFeatures.forEach(function (_, index) {
    featureValues.push(checkedFeatures[index].value)
  })
  if (featureValues.every(function(value) {return (object.offer.features.indexOf(value) !== -1)})) {
    return true;
  }
}


const filterAds = function(array) {
  let filtredArray = []
  array.filter(function (element) {
    if (filterByHousingType(element) && filterByPriceType(element) && filterByRoomNumber(element) && filterByGuestNumber(element) && filterByHousingFeature(element)) {
      filtredArray.push(element);
    }
  })
  extraMarker.deleteMarkers();
  extraMarker.createMarkers(filtredArray);
  extraMarker.paintMarkers()
}

const debounce = function(cb, time) {
  let timeout; 
  return function (argument) {
    clearTimeout(timeout); 
    timeout = setTimeout(function() {
      cb(argument)}, time,
    )
  }
}

const makeDebounce = debounce(function(array) {
  filterAds(array)
}, RENDERING_DELAY)

const changeFilter = function(array) {
  formFilter.addEventListener('change', function(){
    makeDebounce(array)
  })
}

export {changeFilter, formFilter}
