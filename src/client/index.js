import { createCard } from './js/cardCreator'
import { submitHandler } from './js/submitHandler'
import { fetchAPIData, updateMinDate, importAll, getTripDuration, hideError, showError } from './js/utils';

import './media/Travel Planner.svg';
import './styles/style.scss';
import './styles/cards.scss';

import "babel-polyfill"
//updates date picker to be from today up to 15 days (max days of weatherbit data)
updateMinDate();

document.getElementById('submitButton').addEventListener('click', submitHandler );
//hide errors on focus
document.getElementById('dist').addEventListener('focus', hideError);
document.getElementById('startDate').addEventListener('focus', hideError);

export {submitHandler, createCard, fetchAPIData , importAll, getTripDuration, hideError, showError};