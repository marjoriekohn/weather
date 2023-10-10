/**
 * Fetches weather data based on the user's location.
 * @param zip - The zip entered by the user.
 * @param lat - The latitude of the user's location. (auto-detected - coming soon)
 * @param lon - The longitude of the user's location. (auto-detected - coming soon)
 */
import { handleErrors } from "./handleErrors.js";
import axios from "axios";
export async function fetchWeather(userZip) {
    try {
        let response = await axios.get(`/.netlify/functions/apiCall`, {
            params: { userZip: userZip },
        });
        return response.data;
    }
    catch (err) {
        handleErrors(err);
        throw err;
    }
}
//# sourceMappingURL=fetchWeather.js.map