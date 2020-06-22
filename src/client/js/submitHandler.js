import { fetchAPIData, getTripDuration, showError } from './utils';
import { createCard } from './cardCreator';
//constats defintions
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const geonamesAPI = 'http://api.geonames.org/searchJSON?q=';
const weatherbitAPI = 'https://api.weatherbit.io/v2.0/forecast/daily?'; 
const pixabayAPI = 'https://pixabay.com/api/'; 
const countriesRestAPI = 'https://restcountries.eu/rest/v2/name';

//get user inputs
const distation = document.getElementById('dist');
const distDate = document.getElementById('startDate');

export const submitHandler = async (event) => {
    event.preventDefault();
    //check for empty fields  
    if(distation.value === '' || distDate.value === '')
    {
        //TODO Handle ERROR
        showError(true, 'Enter your destination');
        return;
    }
    //get credentials
    const data = await fetchAPIData('/apiCred');
    const {geoUser, weatherKey, pixabayKey} = data;

    //get data from geonames
    const user = `&username=${geoUser}`;
    const geoURL = geonamesAPI + distation.value + user;
    const geoData = await fetchAPIData(proxyUrl + geoURL);
    if (!geoData.geonames[0])
    {
        //TODO: HANDLE ERROR
        showError(false, "Invalid destination");
        return;
    }
    const {lat, lng, name, countryName} = geoData.geonames[0];

    //get data from weatherbit
    const weatherURL = `${weatherbitAPI}lat=${lat}&lon=${lng}&key=${weatherKey}`;
    const weatherData =  await fetchAPIData(weatherURL);
    if (!weatherData)
    {
        //TODO: HANDLE ERROR
        showError(false, "Can't find weather for your destination");
        return;
    }
    const {min_temp, max_temp} = weatherData.data[getTripDuration(distDate.value)];
   
    const weatherIcon = weatherData.data[getTripDuration(distDate.value)].weather.icon;
    
    // Get data from Pixabay
    const pixabayURL = `${pixabayAPI}?key=${pixabayKey}&q=${name}+${countryName}&image_type=photo`;
    const pixabayData =  await fetchAPIData(pixabayURL);
    if (!pixabayData) 
    {
        //TODO: HANDLE ERROR
        showError(false, "Can't find image for your destination");
        return;
    }
    const photo = pixabayData.hits[0].webformatURL;

    // Get data from countries REST API
    const RestAPIURL = `${countriesRestAPI}/${countryName}`;
    const restData =  await fetchAPIData(RestAPIURL);
    if (!restData[0])
    {
        showError(false, "Can't find information about your destination");
        return;
    }     
    const {capital, timezones, currencies, languages, flag} = restData[0];

    const cardData = {
        cityName: name,
        countryName: countryName,
        minTemp: min_temp,
        maxTemp: max_temp,
        weatherIcon: weatherIcon,
        cityPhoto: photo,
        capital: capital,
        timezone: timezones[0],
        currency: currencies[0].code,
        language: languages[0].name,
        flag: flag,
        daysLeft: getTripDuration(distDate.value),
    }
    createCard(cardData);
}