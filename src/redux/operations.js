import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64fb6c56cb9c00518f7b00ca.mockapi.io/";

export const getAdvertCount = createAsyncThunk(
  "adverts/getCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/adverts");
      return response.data.length;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAdverts = createAsyncThunk(
  "adverts/fetch",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const params = {
        limit,
        page,
      };
      const response = await axios.get("/adverts", { params });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertsAll = createAsyncThunk(
  "favorites/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
