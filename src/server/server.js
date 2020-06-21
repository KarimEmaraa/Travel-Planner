const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const dotenv = require('dotenv').config();


// Setup empty JS object to act as endpoint for all routes
const projectData = {};
const apiCreds = { 
    geoUser: process.env.GEO_ID,
    weatherKey: process.env.WEATHER_BIT_KEY, 
    pixabayKey: process.env.PIXABAY_KEY 
};
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, ()=> {
    console.log(`listening to ${port}`);
});

app.get('/', function(req, res){
    res.sendFile(path.resolve('dist/index.html')); 
});

app.get('/apiCred', (req, res) => {
    res.send(apiCreds);
});

