// Global variables
let typeOfAppartment = ['palace', 'flat', 'house', 'bungalow'];
let timeCheckinCheckout = ['12:00', '13:00', '14:00'];
let facilities = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
let sourcesOfPhotos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
let quantity = 10;

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

const getRandomData = function (data) {
  return data[getRandomValue(0, data.length - 1)];
}

const getRandomDataset = function (dataset) {
  let randomDataset = new Array();
  for (let i = 0; i < dataset.length; i++) {
    let newData = getRandomData(dataset);
    if (randomDataset.indexOf(newData) == -1) {
      randomDataset.push(newData);
    }
  }
  return randomDataset;
}

// create Announcements

const createListRandomAnnouncement = function (quantity) {
  let listRandomAnnouncements = new Array()
  for (let i = 1; i <= quantity; i++) {
    let announce = new Object();
    let coordinateX = getRandomCoordinate(35.65, 35.7, 5);
    let coordinateY = getRandomCoordinate(139.7, 139.8, 5);
    announce.author = {avatar: 'img/avatars/user0' + getRandomValue(1, 8) + '.png'};
    announce.offer = {
      title: 'Сдается жилье на длительный срок',
      address: coordinateX + ', ' + coordinateY,
      price: getRandomValue(2500, 15000),
      type: getRandomData(typeOfAppartment),
      rooms: getRandomValue(1, 8),
      guests: getRandomValue(1, 16),
      checkin: getRandomData(timeCheckinCheckout),
      checkout: getRandomData(timeCheckinCheckout),
      features: getRandomDataset(facilities),
      description: 'Сдаю помещение на длительный срок добросовестным жильцам без вредных привычек. Жилое помещение в отличном состоянии, уютное, тёплое и с отличным видом на город',
      photos: getRandomDataset(sourcesOfPhotos),
    };
    announce.location = {
      x: coordinateX,
      y: coordinateY,
    };
    listRandomAnnouncements.push(announce);
  }
  return listRandomAnnouncements;
}

createListRandomAnnouncement(quantity);
