// constants
const TYPES_OF_APARTMENT = ['palace', 'flat', 'house', 'bungalow'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const SOURCES_OF_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// Utility functions
const getRandomValue = function (minValue, maxValue) {
  if (minValue >= 0 && maxValue > minValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
  }
  throw new Error (-1);
}

const getRandomCoordinate = function (minValue, maxValue, dots) {
  let fixedMinNumber = minValue.toFixed(dots);
  let fixedMaxNumber = maxValue.toFixed(dots);
  if (fixedMinNumber >= 0 && fixedMaxNumber > fixedMinNumber) {
    return (Math.random() * (fixedMaxNumber - fixedMinNumber) + minValue).toFixed(dots);
  }
  throw new Error (-1);
}

const getRandomElementOfArray = function (array) {
  return array[getRandomValue(0, array.length - 1)];
}

const getRandomArray = function (array) {
  const randomArray = [];
  const k = getRandomValue(1, array.length);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tempValue = array[j];
    array[j] = array[i];
    array[i] = tempValue;
  }

  for (let i = 0; i < k; i++) {
    randomArray[i] = array[i];
  }

  return randomArray;
}

// create Announcements

const createListRandomAnnouncement = function () {
  const listRandomAnnouncements = [];
  const quantity = 10;
  for (let i = 0; i < quantity; i++) {
    const announce = {};
    const coordinateX = getRandomCoordinate(35.65000, 35.70000, 5);
    const coordinateY = getRandomCoordinate(139.70000, 139.80000, 5);
    announce.author = {avatar: 'img/avatars/user0' + getRandomValue(1, 8) + '.png'};
    announce.offer = {
      title: 'Сдается жилье на длительный срок',
      address: coordinateX + ', ' + coordinateY,
      price: getRandomValue(2500, 15000),
      type: getRandomElementOfArray(TYPES_OF_APARTMENT),
      rooms: getRandomValue(1, 8),
      guests: getRandomValue(1, 16),
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

createListRandomAnnouncement();
