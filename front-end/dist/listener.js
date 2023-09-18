/**
 * Sets up event listeners for the weather application.
 */
import { fetchWeather } from './fetchWeather.js';
import { displayWeather } from "./displayWeather.js";
import { handleErrors } from "./handleErrors.js";
(function setupListeners() {
    const getWeatherButton = (document.getElementById('get-weather-button'));
    const userZipInput = document.getElementById('user-zip-input');
    let weatherData = null;
    getWeatherButton.addEventListener('click', () => {
        fetchWeather(userZipInput.value)
            .then(fetchedWeather => {
            weatherData = fetchedWeather;
            displayWeather(weatherData);
        })
            .catch(error => {
            handleErrors(error);
            console.error('Error fetching weather data:', error);
        });
    });
})();
//# sourceMappingURL=listener.js.map