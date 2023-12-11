import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    count: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.count = action.payload.length;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } = advertSlice.actions;
export const advertReducer = advertSlice.reducer;
