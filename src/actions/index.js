import axios from "axios";

const API_KEY = "a353a92942222d52bb62f00e73b9efd9";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city, countryCode = "us") {
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}