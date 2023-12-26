import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultLimit } from "./constants";
axios.defaults.baseURL = "https://64fb6c56cb9c00518f7b00ca.mockapi.io/";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetch",
  async ({ page, limit = defaultLimit }, { rejectWithValue }) => {
    try {
      const params = {
        limit,
        page,
      };
      // if (page) params.page = page;
      // if (limit) params.limit = limit;

      const response = await axios.get("/adverts", { params });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAdvertsAll = createAsyncThunk(
  "adverts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/adverts");
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
