import {pageCondition} from './page-condition.js';
import {TOKYO_CENTER_COORDINATES, PICTURE_OF_MAIN_PIN, PICTURE_OF_EXTRA_PINS, SIZES_OF_PIN, SIZES_OF_PIN_CENTER, SERVER_URL_FOR_GET, QUANTITY_OF_RANDOM_ANNOUNCEMENT} from './const.js';
import {addAnnouncementOnPage} from './create-ad.js';
import {getData} from './api.js';
import {showDownloadError, getRandomArray} from './util.js';
import {resetForm, sendForm} from './form.js';
import {changeFilter} from './filter.js';
/* global L:readonly */

const leafletMap = L.map('map-canvas');

const iconOfOtherPins = L.icon({
  iconUrl: PICTURE_OF_EXTRA_PINS,
  iconSize: SIZES_OF_PIN,
  iconAnchor: SIZES_OF_PIN_CENTER,
})

const extraMarker = {
  allMarkers: [],
  createMarkers: function(array) {
    array.forEach(function({location}, index) {
      const coordinates = {
        lat: location.lat,
        lng: location.lng,
      }
      const otherPins = L.marker(
        coordinates,
        {
          icon: iconOfOtherPins,
        },
      )
      const popupContent = addAnnouncementOnPage(array[index])
      otherPins.bindPopup(
        popupContent,
      )
      extraMarker.allMarkers.push(otherPins)
    })
    return extraMarker.allMarkers;
  },
  paintMarkers: function() {
    extraMarker.allMarkers.forEach(function(element) {
      element.addTo(leafletMap)
    })
  },
  deleteMarkers: function() {
    extraMarker.allMarkers.forEach(function(element) {
      element.remove()
    })
    extraMarker.allMarkers = [];
  },
}

const createAdOnMap = function(array) {
  const shuffledArray = getRandomArray(array);
  const slicedArray = shuffledArray.slice(0, QUANTITY_OF_RANDOM_ANNOUNCEMENT);
  extraMarker.createMarkers(slicedArray)
  extraMarker.paintMarkers()
  changeFilter(slicedArray);
  sendForm(slicedArray);
  resetForm(slicedArray);
}

pageCondition.setPageNonActive();

getData(SERVER_URL_FOR_GET, createAdOnMap, showDownloadError)


leafletMap.on('load', function() {
  pageCondition.setPageActive();
})

leafletMap.setView(TOKYO_CENTER_COORDINATES, 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(leafletMap);

const mainPinIcon =  L.icon({
  iconUrl: PICTURE_OF_MAIN_PIN,
  iconSize: SIZES_OF_PIN,
  iconAnchor: SIZES_OF_PIN_CENTER,
})

const pin = {
  mainPin: L.marker(
    TOKYO_CENTER_COORDINATES,
    {
      draggable: true,
      icon: mainPinIcon,
    }),
  createMainPin: function() {
    this.mainPin.addTo(leafletMap);
    this.mainPin.on('move', function(evt) {
      const coordinateOfMovement = evt.target.getLatLng();
      const newLatitude = coordinateOfMovement.lat.toFixed(5);
      const newLongitude = coordinateOfMovement.lng.toFixed(5);
      const addressOfNewAnnouncement = document.querySelector('#address');
      addressOfNewAnnouncement.value = newLatitude + ', ' + newLongitude;
    })
  },
  refreshMainPin: function() {
    this.mainPin.setLatLng(TOKYO_CENTER_COORDINATES);
  },
}

pin.createMainPin();

export {pin, extraMarker}
