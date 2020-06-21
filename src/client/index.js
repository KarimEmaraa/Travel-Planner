import { createCard } from './js/cardCreator'
import { submitHandler } from './js/submitHandler'
import { fetchAPIData, updateMinDate, importAll } from './js/utils';

import './media/Travel Planner.svg';

updateMinDate();
document.getElementById('submitButton').addEventListener('click', submitHandler );

export {submitHandler, createCard, fetchAPIData , importAll};