import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64fb6c56cb9c00518f7b00ca.mockapi.io/";

export const fetchAdverts = createAsyncThunk("adverts/fetchAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("/adverts");
    return response.data;
  } catch (e) {
    return rejectWithValue(e.message);
  }
});
