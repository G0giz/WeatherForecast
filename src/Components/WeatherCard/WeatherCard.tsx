import { useEffect, useState } from "react";
import { CityWeather } from "../../Models/CityWeather";
import "./WeatherCard.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import overcast from "../../assets/images/cloudy.png";
import rain from "../../assets/images/rain.png";
import snow from "../../assets/images/snow.png";
import storm from "../../assets/images/storm.png";
import fog from "../../assets/images/fog.png";
import haze from "../../assets/images/haze.png";
import Clear from "../../assets/images/sun.png";
import Partially_Cloudy from "../../assets/images/Partially cloudy.png";
import Drizzle from "../../assets/images/drizzle.png";
import Sleet from "../../assets/images/sleet.png";
import Freezing_Rain from "../../assets/images/freezing-rain.png";
import Windy from "../../assets/images/Windy.png";

// props sent from the parent components.
type WeatherCardProps = {
    weather: CityWeather;
}

const weatherConditions = [
    { condition: "Clear", image: Clear },
    { condition: "Partially cloudy", image: Partially_Cloudy },
    { condition: "Overcast", image: overcast },
    { condition: "Rain", image: rain },
    { condition: "Snow", image: snow },
    { condition: "Thunderstorms", image: storm },
    { condition: "Fog", image: fog },
    { condition: "Haze", image: haze },
    { condition: "Drizzle", image: Drizzle },
    { condition: "Sleet", image: Sleet },
    { condition: "Freezing rain", image: Freezing_Rain },
    { condition: "Windy", image: Windy }
];


export function WeatherCard(props: WeatherCardProps): JSX.Element { 

    const[city,setCity] = useState(props.weather.days);

    useEffect(() => {
        setCity(props.weather.days);
    }, [])


    return (
        <div className="WeatherCard">
            {props.weather.days.slice(0, 12).map(w => {
                // Get the first condition (split by comma and take the first)
                const firstCondition = w.conditions.includes(",")
                    ? w.conditions.split(",")[0].trim()
                    : w.conditions;

                // Find the corresponding image
                const matchedCondition = weatherConditions.find((c) => c.condition === firstCondition);
                const imageUrl = matchedCondition ? matchedCondition.image : "/images/default.png";
                console.log(matchedCondition);

                console.log("Weather item:", w); // Log the whole weather item

                return (
                    <Card sx={{ minWidth: 275 }} className="weather-card"> {/* Added key for better performance */}
                        <CardContent>
                            <Typography className="weather-condition-text" gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                                {w.conditions}
                            </Typography>
                            <img className="weather-icon" src={imageUrl} alt={w.conditions} style={{ width: 50, height: 50 }} />
                            <Typography className="weather-date" variant="h5" component="div">
                                {(() => {
                                    const date = new Date(w.datetime);
                                    const day = date.getDate().toString().padStart(2, "0");
                                    const month = (date.getMonth() + 1).toString().padStart(2, "0");
                                    const year = date.getFullYear();
                                    return `${day}/${month}/${year}`;
                                })()}
                            </Typography>
                            <Typography className="weather-temperature" sx={{ color: "text.secondary", mb: 1.5 }}>
                                {Math.round((w.temp - 32) * (5 / 9))}°C
                            </Typography>
                            <Typography className="weather-humidity" sx={{ color: "text.secondary", mb: 1.5 }}>
                                Humidity: {w.humidity}%
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}


        </div>
    );
}
