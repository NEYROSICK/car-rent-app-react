import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64fb6c56cb9c00518f7b00ca.mockapi.io/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async ({ limit, page }, { rejectWithValue }) => {
    try {
      const params = {};
      if (page) params.page = page;
      if (limit) params.limit = limit;

      const response = await axios.get("/adverts", { params });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
