/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param weatherData - An object containing weather data.
 */

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
    if (!weatherData) {
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.textContent = 'No weather data available.';
            errorMessage.style.display = 'block';
        }
        return;
    }

    const formatDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleTimeString();

    document.getElementById('temperature')!.textContent = `${weatherData.temp} °C`;
    document.getElementById('maxTemp')!.textContent = `${weatherData.max_temp} °C`;
    document.getElementById('minTemp')!.textContent = `${weatherData.min_temp} °C`;
    document.getElementById('cloudPercentage')!.textContent = `${weatherData.cloud_pct}%`;
    document.getElementById('feelsLike')!.textContent = `${weatherData.feels_like} °C`;
    document.getElementById('sunrise')!.textContent = formatDate(weatherData.sunrise);
    document.getElementById('sunset')!.textContent = formatDate(weatherData.sunset);
    document.getElementById('windSpeed')!.textContent = `${weatherData.wind_speed} m/s`;
    document.getElementById('humidity')!.textContent = `${weatherData.humidity}%`;
    document.getElementById('windDegrees')!.textContent = `${weatherData.wind_degrees}°`;
}