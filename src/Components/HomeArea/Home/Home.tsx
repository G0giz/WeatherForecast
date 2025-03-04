import { useNavigate } from "react-router-dom";
import "./Home.css";

export function Home(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <h1>Weather Forecast</h1>
            <p>Get real-time weather updates for any city around the world. Stay informed about temperature, humidity, and weather conditions before you step out.</p>
            <button className="navigate-button" onClick={() => navigate("/weather-data")}>
                Check Weather
            </button>
        </div>
    );
}
