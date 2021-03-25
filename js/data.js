import {TYPES_OF_APARTMENT, CHECKOUT_TIMES, FACILITIES, SOURCES_OF_PHOTOS, QUANTITY_OF_RANDOM_ANNOUNCEMENT, FIRST_VALUE_OF_LATITUDE, SECOND_VALUE_OF_LATITUDE,
  FIRST_VALUE_OF_LONGITUDE, SECOND_VALUE_OF_LONGITUDE, NUMBER_OF_COORDINATE_POINTS, MIN_RANDOM_PRICE, MAX_RANDOM_PRICE, MAX_GUESTS_NUMBER, MAX_NUMBER_ROOMS, MAX_NUMBER_FOR_AVATAR} from './const.js';
import {getRandomValue, getRandomCoordinate, getRandomElementOfArray, getRandomArray} from './util.js';

// create Announcements
const createListRandomAnnouncement = function () {
  const listRandomAnnouncements = [];
  for (let i = 0; i < QUANTITY_OF_RANDOM_ANNOUNCEMENT; i++) {
    const announce = {};
    const coordinateX = getRandomCoordinate(FIRST_VALUE_OF_LATITUDE, SECOND_VALUE_OF_LATITUDE, NUMBER_OF_COORDINATE_POINTS);
    const coordinateY = getRandomCoordinate(FIRST_VALUE_OF_LONGITUDE, SECOND_VALUE_OF_LONGITUDE, NUMBER_OF_COORDINATE_POINTS);
    announce.author = {avatar: 'img/avatars/user0' + getRandomValue(1, MAX_NUMBER_FOR_AVATAR) + '.png'};
    announce.offer = {
      title: 'Сдается жилье на длительный срок',
      address: coordinateX + ', ' + coordinateY,
      price: getRandomValue(MIN_RANDOM_PRICE, MAX_RANDOM_PRICE),
      type: getRandomElementOfArray(TYPES_OF_APARTMENT),
      rooms: getRandomValue(1, MAX_NUMBER_ROOMS),
      guests: getRandomValue(1, MAX_GUESTS_NUMBER),
      checkin: getRandomElementOfArray(CHECKOUT_TIMES),
      checkout: getRandomElementOfArray(CHECKOUT_TIMES),
      features: getRandomArray(FACILITIES),
      description: 'Сдаю помещение на длительный срок добросовестным жильцам без вредных привычек. Жилое помещение в отличном состоянии, уютное, тёплое и с отличным видом на город',
      photos: getRandomArray(SOURCES_OF_PHOTOS),
    };
    announce.location = {
      x: coordinateX,
      y: coordinateY,
    };
    listRandomAnnouncements.push(announce);
  }
  return listRandomAnnouncements;
}

export {createListRandomAnnouncement};
