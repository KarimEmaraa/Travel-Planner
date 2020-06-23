import { createCard } from './js/cardCreator'
import { submitHandler } from './js/submitHandler'
import { fetchAPIData, updateMinDate, importAll, getTripDuration, hideError, showError } from './js/utils';

import './media/Travel Planner.svg';
import './styles/style.scss';
import './styles/cards.scss';

updateMinDate();
document.getElementById('submitButton').addEventListener('click', submitHandler );
document.getElementById('dist').addEventListener('focus', hideError);
document.getElementById('startDate').addEventListener('focus', hideError);

export {submitHandler, createCard, fetchAPIData , importAll, getTripDuration, hideError, showError};