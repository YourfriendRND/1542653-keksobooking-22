import {extraMarker} from './create-map.js';
import {DEFAULT_PARAMETERS} from './const.js';

const formFilter = document.querySelector('.map__filters');
const selectOfHousingType = document.querySelector('#housing-type');

const changeHousingType = function(array) {
  selectOfHousingType.addEventListener('change', function() {
    const arrayOfSelectTypes = [];
    for(let i = 0; i < array.length; i++) {
      if (selectOfHousingType.value === array[i].offer.type || selectOfHousingType.value === DEFAULT_PARAMETERS.filterSelect) {
        arrayOfSelectTypes.push(array[i]);
      }
    }
    extraMarker.deleteMarkers();
    extraMarker.createMarkers(arrayOfSelectTypes);
    extraMarker.paintMarkers()
  })
}

export {changeHousingType, formFilter}
