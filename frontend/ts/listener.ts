/**
 * Sets up event listeners for the weather application.
 */
import {fetchWeather} from './fetchWeather';
import {displayWeather} from "./displayWeather";
import {handleErrors} from "./handleErrors";

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
    console.log(document.getElementById('get-weather-button'))
    const getWeatherButton = (document.getElementById('get-weather-button')!);
    const userZipInput = (document.getElementById('user-zip-input')! as HTMLInputElement);
    let weatherData: Weather | null = null;

    getWeatherButton.addEventListener('click', () => {
        fetchWeather(userZipInput.value)
            .then(fetchedWeather => {
                weatherData = fetchedWeather;
                displayWeather(weatherData);
            })
            .catch(error => {
                handleErrors(error);
                console.error('Oops! Error fetching weather data:', error);
            });
    });
})();