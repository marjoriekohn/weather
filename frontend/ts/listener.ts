/**
 * Sets up event listeners for the weather application.
 */
import {fetchWeather} from './fetchWeather';
import {displayWeather} from "./displayWeather";
import {handleError} from "./handleError";

type Weather = {
    wind_speed: number;
    wind_degrees: number;
    temp: number;
    humidity: number;
    sunset: number;
    min_temp: number;
    cloud_pct: number;
    feels_like: number;
    sunrise: number;
    max_temp: number;
};

(function setupListeners(): void {
    const getWeatherButton = (document.getElementById('get-weather-button')!);
    const userZipInput = (document.getElementById('user-zip-input')! as HTMLInputElement);
    const loadingIndicator = document.getElementById('loadingIndicator');
    const errorMessage = document.getElementById('errorMessage');

    if (!getWeatherButton || !userZipInput || !loadingIndicator || !errorMessage) {
        console.error('One or more essential elements are missing in the DOM.');
        return;
    }

    getWeatherButton.addEventListener('click', (event) => {
        event.preventDefault();
        loadingIndicator.style.display = 'block';
        errorMessage.style.display = 'none';

        fetchWeather(userZipInput.value)
            .then(fetchedWeather => {
                displayWeather(fetchedWeather);
                loadingIndicator.style.display = 'none';
            })
            .catch(error => {
                console.error('Oops! Error fetching weather data:', error);
                loadingIndicator.style.display = 'none';
                errorMessage.textContent = 'Failed to fetch weather data. Please try again.';
                errorMessage.style.display = 'block';
            });
    });
})();