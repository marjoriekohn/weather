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
    let weatherData: Weather;

    getWeatherButton.addEventListener('click', () => {
        fetchWeather(userZipInput.value)
            .then(fetchedWeather => {
                weatherData = fetchedWeather;
                displayWeather(weatherData);
            })
            .catch(error => {
                handleError(error);
                console.error('Oops! Error fetching weather data:', error);
            });
    });
})();