//import './create-map.js';
import {SERVER_URL} from './const.js';
import {addAnnouncementOnPage} from './create-ad.js';

const getData = function (url, creator) {
  fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error ('Не удалось получить список объявлений. Попробуйте выполнить запрос позже')
  }).then(function(announcement) {
    //console.log(announcement);
    announcement.forEach(function (index) {
      creator(announcement[index]);
    });
  })
}
getData(SERVER_URL, addAnnouncementOnPage)

export {getData};
