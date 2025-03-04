import React, { useState } from "react";
import citiesData from "../../../cities.json";
import { weatherService } from "../../Services/WeatherService";
import { Autocomplete, TextField } from "@mui/material";

// Define the type for the props of SelectCity component
type SelectCityProps = {
    onCityChange: (city: string) => void;
    clearInput: () => void; // Type for the function that clears the input field
};

export function SelectCity({ onCityChange, clearInput }: SelectCityProps): JSX.Element {

    const [cities] = useState<string[]>(citiesData);
    const [input, setInput] = useState<string>("");

    const handleInputChange = (_event: React.SyntheticEvent, newValue: string | null) => {
        setInput(newValue || "");
    };

    function send() {       
        if (input.trim()) {
            onCityChange(input);
            weatherService.setCity(input);
            clearInput(); // Clear the input field in the parent component
        }
    }

    return (
        <div className="SelectCity">
            <div className="input-container">
                <Autocomplete
                    className="autoCompleteStyle"
                    freeSolo
                    options={cities}
                    filterOptions={(options, { inputValue }) =>
                        options.filter((city) =>
                            city.toLowerCase().includes(inputValue.toLowerCase())
                        )
                    }
                    value={input || null}
                    onInputChange={handleInputChange} // Update city in parent component
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            id="outlined-search"
                            label="Search for a city"
                            variant="outlined"
                            placeholder="Search for a city"
                            helperText="Type a city name"
                        />
                    )}
                />
                <button title="searchCity" onClick={send} type="submit" className="search-button">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
}
