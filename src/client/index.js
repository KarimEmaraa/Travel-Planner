import { createCard } from './js/cardCreator'
import { submitHandler } from './js/submitHandler'
import { fetchAPIData, updateMinDate, importAll, getTripDuration } from './js/utils';

import './media/Travel Planner.svg';
import './styles/style.scss';

updateMinDate();
document.getElementById('submitButton').addEventListener('click', submitHandler );

export {submitHandler, createCard, fetchAPIData , importAll, getTripDuration};