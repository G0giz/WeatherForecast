// slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export function initCity(_currentState: string,action:PayloadAction<string>): string{
    const cityString = action.payload;
    const newState = cityString;
    return newState;
}

export function setCity(_currentState: string,action:PayloadAction<string>):string{
    const city2Update = action.payload;
    const newState = city2Update;
    return newState;
}

export const citySlice = createSlice({
  name: 'city',
  initialState:"",
  reducers: {
    initCity,
    setCity,
  },
});

