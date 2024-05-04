/**
 * Fetches weather data based on the user's location.
 * @param zip - The zip entered by the user.
 * @param lat - The latitude of the user's location. (auto-detected - coming soon)
 * @param lon - The longitude of the user's location. (auto-detected - coming soon)
 */

import { handleErrors } from "./handleErrors";
import axios from "axios";

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

export async function fetchWeather(userZip: string): Promise<Weather | null> {
    try {
        let response = await axios.get(`/.netlify/functions/apiCall`, {
            params: { userZip: userZip },
        });
        return response.data;
    } catch (err: any) {
        console.error("Fetch Weather Error:", err.message);
        handleErrors(err);
        return null;
    }
}