/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param weatherData - An object containing weather data.
 */
import { WeatherDataCard } from "./weatherDataCard";

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

export function displayWeather(weatherData: Weather | null): void {
    const cardsContainer = document.getElementById('weatherCardsContainer');
    if (!cardsContainer) {
        console.error('Cards container is missing in the DOM');
        return;
    }
    cardsContainer.innerHTML = '';

    if (!weatherData) {
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.textContent = 'No weather data available.';
            errorMessage.style.display = 'block';
        }
        return;
    }
    const formatDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleTimeString();

    [
        new WeatherDataCard('Temperature', weatherData.temp, '°C', 'fa-temperature-high'),
        new WeatherDataCard('Max Temp', weatherData.max_temp, '°C', 'fa-temperature-high'),
        new WeatherDataCard('Min Temp', weatherData.min_temp, '°C', 'fa-temperature-low'),
        new WeatherDataCard('Cloud Percentage', weatherData.cloud_pct, '%', 'fa-cloud'),
        new WeatherDataCard('Feels Like', weatherData.feels_like, '°C', 'fa-thermometer-half'),
        new WeatherDataCard('Sunrise', formatDate(weatherData.sunrise), '', 'fa-sun'),
        new WeatherDataCard('Sunset', formatDate(weatherData.sunset), '', 'fa-moon'),
        new WeatherDataCard('Wind Speed', weatherData.wind_speed, 'm/s', 'fa-wind'),
        new WeatherDataCard('Humidity', weatherData.humidity, '%', 'fa-tint'),
        new WeatherDataCard('Wind Degrees', weatherData.wind_degrees, '°', 'fa-compass')
    ].forEach(card => {
        cardsContainer.appendChild(card.createWeatherDataCard());
    });
}