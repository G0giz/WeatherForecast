import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { WeatherForeCast } from "../../WeatherForeCast/WeatherForeCast";
import { Menu } from "../Menu/Menu";
import { SelectCity } from "../../SelectCity/SelectCity";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/weather-data" element={<WeatherForeCast/>}/>
            </Routes>
        </div>
    );
}
