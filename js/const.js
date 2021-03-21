// constants
const TYPES_OF_APARTMENT = ['palace', 'house', 'flat', 'bungalow'];
const USED_ON_PAGE_TYPES_OF_APARTMENT = ['Дворец', 'Дом', 'Квартира', 'Бунгало'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FACILITIES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const SOURCES_OF_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const QUANTITY_OF_RANDOM_ANNOUNCEMENT = 10;
const FIRST_VALUE_OF_LATITUDE = 35.65000;
const SECOND_VALUE_OF_LATITUDE =  35.70000;
const FIRST_VALUE_OF_LONGITUDE = 139.70000;
const SECOND_VALUE_OF_LONGITUDE = 139.80000;
const NUMBER_OF_COORDINATE_POINTS = 5;
const MIN_RANDOM_PRICE = 2500;
const MAX_RANDOM_PRICE = 15000;
const MAX_GUESTS_NUMBER = 16;
const MAX_ROOMS_NUMBERS = 8;
const MAX_NUMBER_FOR_AVATAR = 8;
const MIN_PRICES = [0, 1000, 5000, 10000];
const TOKYO_CENTER_COORDINATES = {
  lat: 35.68230,
  lng: 139.75319,
}
const PICTURE_OF_MAIN_PIN = 'img/main-pin.svg';
const PICTURE_OF_EXTRA_PINS = 'img/pin.svg';
const SIZES_OF_PIN = [40, 40];
const SIZES_OF_PIN_CENTER = [20, 40];
const SELECT_OF_TWO_ROOMS_ON_PAGE = '2';
const SELECT_OF_THREE_ROOMS_ON_PAGE = '3';
const SELECT_OF_MAX_ROOMS_ON_PAGE = '100';
const SERVER_URL_FOR_GET = 'https://22.javascript.pages.academy/keksobooking/data';
const SERVER_URL_FOR_POST ='https://22.javascript.pages.academy/keksobooking';
const DEFAULT_SELECT_TYPE = 'any'

export {TYPES_OF_APARTMENT, CHECKOUT_TIMES, FACILITIES, SOURCES_OF_PHOTOS, QUANTITY_OF_RANDOM_ANNOUNCEMENT, FIRST_VALUE_OF_LATITUDE, SECOND_VALUE_OF_LATITUDE,
  FIRST_VALUE_OF_LONGITUDE, SECOND_VALUE_OF_LONGITUDE, NUMBER_OF_COORDINATE_POINTS, MIN_RANDOM_PRICE, MAX_RANDOM_PRICE, MAX_GUESTS_NUMBER, MAX_ROOMS_NUMBERS,
  MAX_NUMBER_FOR_AVATAR, USED_ON_PAGE_TYPES_OF_APARTMENT, MIN_PRICES, TOKYO_CENTER_COORDINATES, PICTURE_OF_MAIN_PIN, PICTURE_OF_EXTRA_PINS, SIZES_OF_PIN, SIZES_OF_PIN_CENTER,
  SELECT_OF_TWO_ROOMS_ON_PAGE, SELECT_OF_THREE_ROOMS_ON_PAGE, SELECT_OF_MAX_ROOMS_ON_PAGE, SERVER_URL_FOR_GET, SERVER_URL_FOR_POST, DEFAULT_SELECT_TYPE
};
