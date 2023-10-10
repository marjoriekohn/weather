/**
 * Sets up event listeners for the weather application.
 */
import { fetchWeather } from './fetchWeather';
import { displayWeather } from "./displayWeather";
import { handleErrors } from "./handleErrors";
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