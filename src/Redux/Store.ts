// store.ts
import { configureStore } from '@reduxjs/toolkit';
import {citySlice} from './CitiesSlice'; // Import the default export (the reducer)
import { weatherSlice } from './weatherSlice';
import { CityWeather } from '../Models/CityWeather';

export type AppState = {
  city: string;
  weatherWeek: CityWeather[];
};

export const store = configureStore<AppState>({
  reducer: {
    city: citySlice.reducer, // This directly uses the reducer from weatherSlice
    weatherWeek: weatherSlice.reducer, // Same if weatherWeek shares the same reducer
  },
});
