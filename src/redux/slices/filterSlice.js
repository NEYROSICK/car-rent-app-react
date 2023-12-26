import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    options: {
      brand: null,
      price: null,
      mileage: null,
    },
  },
  reducers: {
    setFilters(state, action) {
      state.options = { ...state.options, brand: action.payload };
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
