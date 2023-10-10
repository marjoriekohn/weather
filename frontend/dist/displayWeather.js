/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param weatherData - An object containing weather data.
 */
export function displayWeather(weatherData) {
    (document.getElementById('windSpeed')).innerHTML = weatherData.wind_speed.toString();
    (document.getElementById('windDegrees')).innerHTML = weatherData.wind_degrees.toString();
    (document.getElementById('temperature')).innerHTML = weatherData.temp.toString();
    (document.getElementById('humidity')).innerHTML = weatherData.humidity.toString();
    (document.getElementById('sunset')).innerHTML = weatherData.sunset.toString();
    (document.getElementById('minTemp')).innerHTML = weatherData.min_temp.toString();
    (document.getElementById('cloudPercentage')).innerHTML = weatherData.cloud_pct.toString();
    (document.getElementById('feelsLike')).innerHTML = weatherData.feels_like.toString();
    (document.getElementById('sunrise')).innerHTML = weatherData.sunrise.toString();
    (document.getElementById('maxTemp')).innerHTML = weatherData.max_temp.toString();
}
//# sourceMappingURL=displayWeather.js.map