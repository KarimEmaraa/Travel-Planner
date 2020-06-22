//generic function to fetch urls
const fetchAPIData = async (url) => {
    const res = await fetch(url);
    try {
        let data = await res.json();
        return data;
    } catch(error) {console.log('Error API Data:', error);}
};

//restricts the user date input from today upto 15 days from now to match weather api
const updateMinDate = () => {
    const d = new Date();
    const e = document.getElementById("startDate");
    e.setAttribute('min', d.toISOString().slice(0,10));
    d.setDate(d.getDate() + 15);
    e.setAttribute('max', d.toISOString().slice(0,10));
    
}

const getTripDuration = (date) => {
    const d1 = new Date();
    const d2 = new Date(date);
    let duration = d2.getTime() - d1.getTime();
    duration /= (1000*3600*24);
    return Math.round(duration);
}

//function to import all images in media folder

const importAll = (r)=> {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const showError =  (all, msg) => {

    const name = document.getElementById('dist');
    const date = document.getElementById('startDate');

    name.style.border = '2px solid red';
    name.value = '';
    name.setAttribute('placeholder', msg);
    name.style.color = 'red';
    if(all)
    {
        date.style.border = '2px solid red';
        date.style.color = 'red';
    }
}

const hideError = () => {
    const name = document.getElementById('dist');
    const date = document.getElementById('startDate');

    name.style.border = '2px solid orange';
    name.setAttribute('placeholder', 'Enter City Ex: Paris');
    name.style.color = 'gray';

    date.style.border = '2px solid orange';
    date.style.color = 'gray';
}
export { fetchAPIData, updateMinDate, importAll, getTripDuration, showError, hideError};