import { createCard } from './js/cardCreator'
import { submitHandler } from './js/submitHandler'
import { fetchAPIData, updateMinDate } from './js/utils';

import './media/Travel Planner.svg';
import './media/favorite-2_th.jpg';

updateMinDate();
document.getElementById('submitButton').addEventListener('click', submitHandler );

export {submitHandler, createCard, fetchAPIData}