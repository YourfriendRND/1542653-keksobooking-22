import {DefaultParameters, DefaultPriceForHousing, RENDERING_DELAY} from './const.js';
import {extraMarker} from './create-map.js';
/* global _:readonly */

const formFilter = document.querySelector('.map__filters');
const selectOfHousingType = formFilter.querySelector('#housing-type');
const selectOfPriceType = formFilter.querySelector('#housing-price');
const optionsOfPriceType = selectOfPriceType.querySelectorAll('option');
const selectOfRoomNumber = formFilter.querySelector('#housing-rooms');
const selectOfGuestNumber = formFilter.querySelector('#housing-guests');
const selectOfHousingFeature = formFilter.querySelector('.map__features');

const filterByHousingType = function(object) {
  return (selectOfHousingType.value === object.offer.type || selectOfHousingType.value === DefaultParameters.FILTER_SELECT)
}

const filterByPriceType = function(object) {
  if (selectOfPriceType.value === optionsOfPriceType[3].value && object.offer.price > DefaultPriceForHousing.HIGH) {
    return true;
  }
  else if (selectOfPriceType.value === optionsOfPriceType[2].value && object.offer.price < DefaultPriceForHousing.LOW) {
    return true;
  }
  else if (selectOfPriceType.value === optionsOfPriceType[1].value && object.offer.price >= DefaultPriceForHousing.LOW && object.offer.price <= DefaultPriceForHousing.HIGH) {
    return true;
  }
  else if (selectOfPriceType.value === DefaultParameters.FILTER_SELECT) {
    return true;
  }
}

const filterByRoomNumber = function (object) {
  return (selectOfRoomNumber.value === object.offer.rooms.toString() || selectOfRoomNumber.value === DefaultParameters.FILTER_SELECT) 
}

const filterByGuestNumber = function (object) {
  return (selectOfGuestNumber.value === object.offer.guests.toString() || selectOfGuestNumber.value === DefaultParameters.FILTER_SELECT) 
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

const makeDebounce = _.debounce(function(array) {
  filterAds(array)
}, RENDERING_DELAY)

const changeFilter = function(array) {
  formFilter.addEventListener('change', function(){
    makeDebounce(array)
  })
}

export {changeFilter, formFilter}
