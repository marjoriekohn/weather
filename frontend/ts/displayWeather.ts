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

    const updateElementText = (id: string, text: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = text;
        }
    };

    updateElementText('windSpeed', weatherData.wind_speed.toString());
    updateElementText('windDegrees', weatherData.wind_degrees.toString());
    updateElementText('temperature', weatherData.temp.toString());
    updateElementText('humidity', weatherData.humidity.toString());
    updateElementText('sunset', weatherData.sunset.toString());
    updateElementText('minTemp', weatherData.min_temp.toString());
    updateElementText('cloudPercentage', weatherData.cloud_pct.toString());
    updateElementText('feelsLike', weatherData.feels_like.toString());
    updateElementText('sunrise', weatherData.sunrise.toString());
    updateElementText('maxTemp', weatherData.max_temp.toString());
}