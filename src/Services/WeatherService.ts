import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { CityWeather } from "../Models/CityWeather";
import { citySlice } from "../Redux/CitiesSlice";  // Correct the import of setCity
import { store } from "../Redux/Store";

class WeatherService {

    public async getCityInEnglish(city: string): Promise<string> {

        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;

        const response = await axios.get(url);

        if (response.data.length > 0 && response.data[0].display_name) {
            return response.data[0].display_name.split(",")[0]; // Extract city name
        }

        return city; // If translation fails, return the original city name
    }

    public async getCityWeather(city: string): Promise<CityWeather> {
        const city2Check = await this.getCityInEnglish(city);
        const response = await axios.get<CityWeather>(appConfig.weatherForecastUrl(city2Check));
        const city2Return = response.data;
        console.log(city2Return);

        return city2Return;
    }

    public setCity(city: string):string{
        if(store.getState().city !== "") return store.getState().city;
       
        const action = citySlice.actions.setCity(city);
        store.dispatch(action); 
    }

}

export const weatherService = new WeatherService();
