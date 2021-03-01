import {createListRandomAnnouncement} from './data.js';
import {addAnnouncementOnPage} from './create-ad.js';
import './change-parameters.js';

const announcement = createListRandomAnnouncement();
addAnnouncementOnPage(announcement[0]);
