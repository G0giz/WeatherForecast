// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityWeather } from '../Models/CityWeather';

export function initWeather(currentState: CityWeather[],action:PayloadAction<CityWeather[]>): CityWeather[]{
    const cityString = action.payload;
    const newState = cityString;
    return newState;
}


export const weatherSlice = createSlice({
  name: 'weather',
  initialState:[],
  reducers: {
    initWeather,
  },
});

