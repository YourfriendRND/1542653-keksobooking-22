import {pageCondition} from './page-condition.js';
import {TOKYO_CENTER_COORDINATES} from './const.js';
import {createListRandomAnnouncement} from './data.js';
import {addAnnouncementOnPage} from './create-ad.js';

const leafletMap = L.map('map-canvas');

pageCondition.setPageNonActive();

leafletMap.on('load', function() {
  pageCondition.setPageActive();
})

leafletMap.setView(TOKYO_CENTER_COORDINATES, 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(leafletMap);

const mainPinIcon =  L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
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
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
})

const announcement = createListRandomAnnouncement();

announcement.forEach(function({location}, index) {
  let coordinates = {
    lat: location.x,
    lng: location.y,
  }
  let popupContent = addAnnouncementOnPage(announcement[index])
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
