import { importAll } from "./utils";

const images = importAll(require.context('../media', false, /\.(png|jpe?g|svg)$/));

const createCard = (cardData) => {
    //show cards
    const plans = document.getElementsByClassName('plans-section')[0];
    plans.style.display = 'block';
    //create a new card
    const newCard = document.createElement('div');
    const img = images[`${cardData.weatherIcon}.png`];
    newCard.classList = 'card';
    const card = `
                    <div class="card-img">
                        <img src="${cardData.cityPhoto}" alt="Image of ${cardData.cityName}">
                    </div>
                    <div class="country-info">
                        <ul class="info-list">
                            <li>
                                <span>Country: ${cardData.countryName}</span>
                                <img class="flag" src="${cardData.flag}" alt="${cardData.countryName} Flag">
                            </li>
                            <li>
                                <p>Capital: ${cardData.capital}</p>
                            </li>
                            <li>
                                <p>Time Zone: ${cardData.timezone}</p>
                            </li>
                            <li>
                                <p>Currency: ${cardData.currency}</p>
                            </li>
                            <li>
                                <p>Language: ${cardData.language}</p>
                            </li>
                            <li>
                                <p>${cardData.daysLeft} days left for your trip</p>
                            </li>
                        </ul>
                    </div>
                    <div class="weather-info">
                        <ul class="winfo-list">
                            <li>
                                <img class="weather" src="img/${cardData.weatherIcon}.png" alt="Weather Icon">
                            </li>
                            <li>
                                <p>Low Temprature: ${cardData.minTemp} °C</p>
                            </li>
                            <li>
                                <p>High Temprature: ${cardData.maxTemp} °C</p>
                            </li>
                    </div>`
    newCard.innerHTML = card;
    document.getElementsByClassName('plan-cards')[0].appendChild(newCard);
}

export { createCard }
