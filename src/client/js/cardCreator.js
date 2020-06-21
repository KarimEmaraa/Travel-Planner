import { importAll } from "./utils";

const images = importAll(require.context('../media', false, /\.(png|jpe?g|svg)$/));

const createCard = (cardData) => {
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
                                <span><p>Country: ${cardData.countryName}</p></span>
                                <img src="${cardData.flag}" alt="${cardData.countryName} Flag">
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
                                <p>${cardData.daysLeft} days for your Trip</p>
                            </li>
                        </ul>
                    </div>
                    <div class="weather-info">
                        <ul class="winfo-list">
                            <li>
                                <img src="img/${cardData.weatherIcon}.png" alt="Weather Icon">
                            </li>
                            <li>
                                <p>Low Temprature: ${cardData.minTemp}</p>
                            </li>
                            <li>
                                <p>High Temprature: ${cardData.maxTemp}</p>
                            </li>
                    </div>`
    newCard.innerHTML = card;
    document.getElementsByClassName('plan-cards')[0].appendChild(newCard);
}

export { createCard }
