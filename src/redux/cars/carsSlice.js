import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    favourites: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const carId = action.payload;
      const index = state.favourites.findIndex((car) => car.id === carId);
      if (index === -1) {
        const carToAdd = state.cars.find((car) => car.id === carId);
        if (carToAdd) {
          state.favourites.push(carToAdd);
        }
      } else {
        state.favourites.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const { toggleFavourite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;