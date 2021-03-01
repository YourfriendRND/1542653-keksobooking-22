import {TYPES_OF_APARTMENT, USED_ON_PAGE_TYPES_OF_APARTMENT} from './const.js';

const mapBlock = document.querySelector('.map__canvas');
const similarAnnouncementTemplate = document.querySelector('#card').content.querySelector('.popup');

const addAvatarOnPage = function (selector, avatar) {
  if (!avatar) {
    selector.classList.add('hidden');
  }
  selector.src = avatar;
}

const addTextContentOnPage = function (selector, content) {
  if (!content) {
    selector.classList.add('hidden');
  }
  selector.textContent = content;
}

const addPriceOnPage = function(selector, price) {
  if (!price) {
    selector.classList.add('hidden');
  }
  selector.textContent = price + ' ₽/ночь';
}

const addTypeOfHousingOnPage = function(selector, arrayOfTypes) {
  if (arrayOfTypes.length === 0) {
    selector.classList.add('hidden');
  }
  for (let i = 0; i < TYPES_OF_APARTMENT.length; i++) {
    if (arrayOfTypes === TYPES_OF_APARTMENT[i]) {
      arrayOfTypes = USED_ON_PAGE_TYPES_OF_APARTMENT[i];
    }
  }
  selector.textContent = arrayOfTypes;
}

const getCorrectRoomWord = function (quantityOfRooms) {
  if (quantityOfRooms === 1) {
    return ' комната для ';
  }
  else if (quantityOfRooms >= 5) {
    return ' комнат для ';
  }
  else {
    return ' комнаты для ';
  }
}

const addQuantityOfGuests = function (selector, quantityOfRooms, quantittyOfGuests) {
  if (!quantittyOfGuests || !quantityOfRooms) {
    selector.classList.add('hidden');
  }
  selector.textContent = quantityOfRooms + getCorrectRoomWord(quantityOfRooms) + quantittyOfGuests + ' гостей';
}

const addTimeOnPage = function (selector, checkinTime, checkoutTime) {
  if (!checkinTime || !checkoutTime) {
    selector.classList.add('hidden');
  }
  selector.textContent = 'Заезд после ' + checkinTime + ', выезд до ' + checkoutTime;
}

const addFeaturesInAnnouncement = function (parentSelector, arrayOfFeatures) {
  if (arrayOfFeatures.length === 0) {
    parentSelector.classList.add('hidden');
  }
  for (let i = parentSelector.children.length - 1; i >=0; i--) {
    let item = parentSelector.children[i];
    item.parentElement.removeChild(item);
  }
  for (let j = 0; j < arrayOfFeatures.length; j++) {
    let newListElement = document.createElement('li');
    newListElement.className = 'popup__feature popup__feature--' + arrayOfFeatures[j];
    parentSelector.appendChild(newListElement);
  }
}

const addPhotosOfHousing = function(selector, arrayOfPhotos) {
  if (arrayOfPhotos.length === 0) {
    selector.classList.add('hidden');
  }
  let copySelector = selector.cloneNode(true);
  selector.src = arrayOfPhotos[0];
  if (arrayOfPhotos.length > 1) {
    for (let i = 1; i < arrayOfPhotos.length; i++) {
      copySelector.src = arrayOfPhotos[i];
      selector.parentElement.appendChild(copySelector);
    }
  }
}

const addAnnouncementOnPage = function (announcement) {
  const similarAnnouncement = similarAnnouncementTemplate.cloneNode(true);
  const avatarOfUser = similarAnnouncement.querySelector('.popup__avatar');
  const titleOfAnnouncement = similarAnnouncement.querySelector('.popup__title');
  const addressOfHousing = similarAnnouncement.querySelector('.popup__text--address');
  const priceOfHousing = similarAnnouncement.querySelector('.popup__text--price');
  const typeOfHousing = similarAnnouncement.querySelector('.popup__type');
  const capacityOfHousing = similarAnnouncement.querySelector('.popup__text--capacity');
  const time = similarAnnouncement.querySelector('.popup__text--time');
  const featuresList = similarAnnouncement.querySelector('.popup__features');
  const descriptionText = similarAnnouncement.querySelector('.popup__description')
  const photoOfHousing = similarAnnouncement.querySelector('.popup__photo');

  addAvatarOnPage(avatarOfUser, announcement.author.avatar);
  addTextContentOnPage(titleOfAnnouncement,  announcement.offer.title);
  addTextContentOnPage(addressOfHousing,  announcement.offer.address);
  addPriceOnPage(priceOfHousing,  announcement.offer.price);
  addTypeOfHousingOnPage(typeOfHousing,  announcement.offer.type);
  addQuantityOfGuests(capacityOfHousing,  announcement.offer.rooms,  announcement.offer.guests);
  addTimeOnPage(time,  announcement.offer.checkin,  announcement.offer.checkout);
  addFeaturesInAnnouncement(featuresList,  announcement.offer.features);
  addTextContentOnPage(descriptionText,  announcement.offer.description);
  addPhotosOfHousing(photoOfHousing,  announcement.offer.photos);
  mapBlock.appendChild(similarAnnouncement);
}

export {addAnnouncementOnPage};
