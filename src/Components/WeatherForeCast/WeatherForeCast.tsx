import "./WeatherForeCast.css";
import { useEffect, useState } from 'react';
import { weatherService } from '../../Services/WeatherService';
import { CityWeather } from '../../Models/CityWeather';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { notify } from '../../Utils/Notify';
import { SelectCity } from '../SelectCity/SelectCity';

export function WeatherForeCast(): JSX.Element {
    const [city, setCity] = useState<string>("תל אביב");
    const [daysWeather, setDaysWeather] = useState<CityWeather>(null);
    const [, setInput] = useState<string>(""); // Track input state in parent

    useEffect(() => {
        try {
            weatherService.getCityWeather(city)
                .then(city => setDaysWeather(city))
                .catch(err => notify.fail(err))
        } catch (error) {
            notify.fail(error);
        }

    }, [city]); // ✅ Rerun when `city` or `weatherData` changes

    const clearInput = () => setInput(""); // Function to clear input

    return (
        <div className="WeatherForeCast">

            <h1 className='headerCity'>Weather Forecast for {city}</h1>
            <SelectCity onCityChange={setCity} clearInput={clearInput}/>
            {
                daysWeather !== null && <WeatherCard weather={daysWeather} />
            }
        </div>
    );
}



//
{/* <input
                list="cities-list"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Search for a city"

            />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <datalist id="cities-list" >
                {cities.map((city, index) => (
                    <option key={index} value={city} />
                ))}
            </datalist> */}
//