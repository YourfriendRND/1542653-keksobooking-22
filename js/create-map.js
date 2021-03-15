import {pageCondition} from './page-condition.js';
import {TOKYO_CENTER_COORDINATES, PICTURE_OF_MAIN_PIN, PICTURE_OF_EXTRA_PINS, SIZES_OF_PIN, SIZES_OF_PIN_CENTER} from './const.js';
//import {createListRandomAnnouncement} from './data.js';
import {addAnnouncementOnPage} from './create-ad.js';

const leafletMap = L.map('map-canvas');
/* global L:readonly */

pageCondition.setPageNonActive();

leafletMap.on('load', function() {
  pageCondition.setPageActive();
})

leafletMap.setView(TOKYO_CENTER_COORDINATES, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(leafletMap);

const mainPinIcon =  L.icon({
  iconUrl: PICTURE_OF_MAIN_PIN,
  iconSize: SIZES_OF_PIN,
  iconAnchor: SIZES_OF_PIN_CENTER,
})

const mainPin = L.marker(
  TOKYO_CENTER_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  }).addTo(leafletMap);

mainPin.on('move', function(evt) {
  const coordinateOfMovement = evt.target.getLatLng();
  const newLatitude = coordinateOfMovement.lat.toFixed(5);
  const newLongitude = coordinateOfMovement.lng.toFixed(5);
  const addressOfNewAnnouncement = document.querySelector('#address');
  addressOfNewAnnouncement.value = newLatitude + ', ' + newLongitude;
})

const iconOfOtherPins = L.icon({
  iconUrl: PICTURE_OF_EXTRA_PINS,
  iconSize: SIZES_OF_PIN,
  iconAnchor: SIZES_OF_PIN_CENTER,
})

//const announcement = createListRandomAnnouncement();

const createAdOnMap = function (array) {
  array.forEach(function({location}, index) {
    const coordinates = {
      lat: location.x,
      lng: location.y,
    }
    const popupContent = addAnnouncementOnPage(array[index])
    const otherPins = L.marker(
      coordinates,
      {
        icon: iconOfOtherPins,
      },
    )
    otherPins.addTo(leafletMap);
    otherPins.bindPopup(
      popupContent,
    )
  })
}

/*
announcement.forEach(function({location}, index) {
  const coordinates = {
    lat: location.x,
    lng: location.y,
  }
  const popupContent = addAnnouncementOnPage(announcement[index])
  const otherPins = L.marker(
    coordinates,
    {
      icon: iconOfOtherPins,
    },
  )
  otherPins.addTo(leafletMap);
  otherPins.bindPopup(
    popupContent,
  )
})
*/
