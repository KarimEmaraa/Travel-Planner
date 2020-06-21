import { fetchAPIData } from './utils';
//constats defintions
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const geonamesAPI = 'http://api.geonames.org/searchJSON?q=';
const weatherbitAPI = 'https://api.weatherbit.io/v2.0/forecast/daily?'; 
const pixabayAPI = 'https://pixabay.com/api/'; 
const restcountriesAPI = 'https://restcountries.eu/rest/v2/name';

//get user inputs
const distation = document.getElementById('dist');
const distDate = document.getElementById('startDate');

export const submitHandler = async (event) => {
    event.preventDefault();
    //check for empty fields  
    if(distation === '' || distDate === '')
    {
        //TODO Handle ERROR
        alert('error empty field');
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
        alert('GEO FAILD');
        return;
    }
    let {lat, lng, name, countryName} = geoData.geonames[0];

    //get data from weatherbit
    let weatherURL = `${weatherbitAPI}lat=${lat}&lon=${lng}&key=${weatherKey}`;
    let weatherData =  await fetchAPIData(weatherURL);
    if (!weatherData)
    {
        //TODO: HANDLE ERROR
        alert('WEATHER FAILD');
        return;
    }
    console.log(distDate.value);
    console.log(weatherData);
}