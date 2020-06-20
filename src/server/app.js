/* Global Variables */


//Base URL and Key
const URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const Key = '&appid=de879ba27972f7754af4d0b386aefae3&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//GET request to the OpenWeatherMap API.
const getWeatherData = async (URL, zip, Key) => {
    // fetch our data using fetch API
    const res = await fetch(URL + zip + Key);
    try {
        //get user data in JSON format
        const userData = await res.json();
        console.log(userData.main.temp);
        return userData;
    } catch (error) {
        alert('Invalid Zip Code');
        console.log("error", error);
    }
}
//POST request to server
const postData = async (url = '', data = {}) => {
    const req = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });
  
    try {
        const newData = await req.json();
        console.log(newData);
        
        return newData;
    }catch (error) {
        console.log(error);
    }
};


//call back function
const performAction = (event) => {
    //prevent default action
    event.preventDefault();
    // get user input values
    const newZip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;

    if(newZip === '')
    {
        alert('Please Enter a zip code');
        return;
    }
  
    getWeatherData(URL, newZip, Key).then( (userData) => {
        // add data to POST request
        postData('/add', { date: newDate, temp: userData.main.temp, feeling: feeling });
      }).then( (newData) => {
        // call updateUI to update browser content
        updateUI();
      });
}
const updateUI = async () => {
    const request = await fetch ('/all');
    try{
        const data = await request.json();
        document.getElementById('date').innerHTML = 'Today is ' + data.date;
        document.getElementById('temp').innerHTML = data.temp + '&deg;F';
        document.getElementById('content').innerHTML = 'Feelings: ' + data.feeling;
        //clear input values.
        document.getElementById('feelings').value = "";
    } catch (error){
        console.log("error", error);
    }
}

//Create an event listener for button element 
document.getElementById('generate').addEventListener('click', performAction);