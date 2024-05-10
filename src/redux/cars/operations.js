import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6574b8afb2fbb8f6509c95d5.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/camper");

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);